// AI Product Manager - OpenCode Plugin
//
// Injects the AI-PM ruleset into every chat's system prompt,
// registers slash commands, and adds the skills directory.

import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Load AGENTS.md as the ruleset
const agentsPath = path.resolve(__dirname, '../../AGENTS.md');
let ruleset = '';
try {
  ruleset = fs.readFileSync(agentsPath, 'utf8');
} catch (e) {
  console.error('[ai-pm] Could not load AGENTS.md:', e.message);
}

const skillsDir = path.resolve(__dirname, '../../skills');
const commandsDir = path.resolve(__dirname, '../../commands');

export default async ({ client } = {}) => {
  const log = (level, message) => {
    try { client && client.app && client.app.log({ body: { service: 'ai-pm', level, message } }); } catch (e) {}
  };

  return {
    // Register skills directory
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }

      // Register slash commands
      if (!config.command) config.command = {};
      try {
        for (const file of fs.readdirSync(commandsDir).filter((f) => f.endsWith('.js'))) {
          const name = path.basename(file, '.js');
          const cmdModule = await import(path.join(commandsDir, file));
          config.command[name] = cmdModule.default;
        }
      } catch (e) {
        log('warn', 'Failed to load commands: ' + e.message);
      }
    },

    // Inject ruleset into system prompt every turn
    'experimental.chat.system.transform': async (_input, output) => {
      if (ruleset) {
        if (output.system.length > 0) {
          output.system[output.system.length - 1] += '\n\n' + ruleset;
        } else {
          output.system.push(ruleset);
        }
      }
    },
  };
};