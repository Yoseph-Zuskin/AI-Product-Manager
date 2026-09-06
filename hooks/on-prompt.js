// AI Product Manager - OpenCode Hook: onPrompt
// Injects the AI-PM ruleset before each user prompt

const loadRuleset = require('./load-ruleset');

module.exports = async function onPrompt(context) {
  const ruleset = loadRuleset();
  if (ruleset) {
    context.injectSystemPrompt(ruleset);
  }
  return context;
};
