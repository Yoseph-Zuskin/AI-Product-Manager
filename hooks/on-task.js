// AI Product Manager - OpenCode Hook: onTask
// Injects the AI-PM ruleset into subagents

const loadRuleset = require('./load-ruleset');

module.exports = async function onTask(context) {
  const ruleset = loadRuleset();
  if (ruleset) {
    context.injectSystemPrompt(ruleset);
  }
  return context;
};
