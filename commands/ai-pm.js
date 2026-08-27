// AI Product Manager - OpenCode Command: ai-pm
// Usage: /ai-pm <skill> <task>

const { skills } = require('../package.json');

module.exports = async function aiPmCommand(args, context) {
  if (!args || args.length < 2) {
    return `Usage: /ai-pm <skill> <task>

Available skills:
${skills.map(s => `  - ${s}`).join('\n')}

Example:
  /ai-pm discover "Find AI opportunities for our B2B SaaS product using JTBD framework"
  /ai-pm architect "Choose ML paradigm for our churn prediction model"
  /ai-pm govern "Set up ML model governance for our recommendation engine"`;
  }

  const [skill, ...taskParts] = args;
  const task = taskParts.join(' ');

  if (!skills.includes(skill)) {
    return `Unknown skill: ${skill}

Available skills:
${skills.map(s => `  - ${s}`).join('\n')}`;
  }

  const skillPath = `skills/${skill}/SKILL.md`;
  const fs = require('fs');
  const path = require('path');
  const fullPath = path.join(__dirname, '..', skillPath);

  if (!fs.existsSync(fullPath)) {
    return `Skill file not found: ${skillPath}`;
  }

  const skillContent = fs.readFileSync(fullPath, 'utf-8');
  return `## Invoking AI-PM Skill: ${skill}

${skillContent}

---

**Task:** ${task}

Execute the skill workflow for this task.`;
};