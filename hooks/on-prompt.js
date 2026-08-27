// AI Product Manager - OpenCode Hook: onPrompt
// Injects the AI-PM ruleset before each user prompt

const fs = require('fs');
const path = require('path');

function loadRuleset() {
  const agnetsPath = path.join(__dirname, '..', 'AGENTS.md');
  if (fs.existsSync(agnetsPath)) {
    return fs.readFileSync(agnetsPath, 'utf-8');
  }
  return '';
}

module.exports = async function onPrompt(context) {
  const ruleset = loadRuleset();
  if (ruleset) {
    context.injectSystemPrompt(ruleset);
  }
  return context;
};