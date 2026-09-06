const fs = require('fs');
const path = require('path');

function loadRuleset() {
  const agentsPath = path.join(__dirname, '..', 'AGENTS.md');
  if (fs.existsSync(agentsPath)) {
    return fs.readFileSync(agentsPath, 'utf-8');
  }
  return '';
}

module.exports = loadRuleset;
