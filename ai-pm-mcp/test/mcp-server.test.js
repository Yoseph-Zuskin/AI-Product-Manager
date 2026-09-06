// MCP stdio smoke test: initialize, list tools/resources, call one skill.
// Run: npm test  (node --test, stdlib only; needs installed dependencies)
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('node:child_process');
const path = require('node:path');
const readline = require('node:readline');

function startServer() {
  const proc = spawn(process.execPath,
    [path.join(__dirname, '..', 'mcp-server.js')],
    { stdio: ['pipe', 'pipe', 'inherit'] });
  const pending = new Map();
  let nextId = 1;
  const rl = readline.createInterface({ input: proc.stdout });
  rl.on('line', (line) => {
    let msg;
    try { msg = JSON.parse(line); } catch { return; }
    if (msg.id !== undefined && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  });
  const send = (method, params) => new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, resolve);
    proc.stdin.write(JSON.stringify(
      { jsonrpc: '2.0', id, method, params }) + '\n');
    setTimeout(() => pending.has(id) &&
      reject(new Error('timeout: ' + method)), 10000);
  });
  const notify = (method, params) => proc.stdin.write(JSON.stringify(
    { jsonrpc: '2.0', method, params }) + '\n');
  return { proc, send, notify };
}

test('MCP server initializes, lists 19 tools, serves a skill', async () => {
  const { proc, send, notify } = startServer();
  try {
    const init = await send('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: { name: 'smoke', version: '0.0.0' },
    });
    assert.ok(init.result.serverInfo.name === 'ai-product-manager');
    notify('notifications/initialized', {});

    const tools = await send('tools/list', {});
    const names = tools.result.tools.map((t) => t.name);
    assert.equal(names.length, 19);
    assert.ok(names.includes('ai-pm-index'));
    assert.ok(names.includes('ai-pm-transform'));

    const call = await send('tools/call', {
      name: 'ai-pm-index', arguments: { task: 'route this' },
    });
    assert.match(call.result.content[0].text, /AI Product Manager Skill Router/);

    const missing = await send('tools/call', {
      name: 'ai-pm-nope', arguments: { task: 'x' },
    });
    assert.ok(missing.error, 'unknown skill must error');

    const res = await send('resources/list', {});
    assert.ok(res.result.resources.length > 0);
  } finally {
    proc.kill();
  }
});
