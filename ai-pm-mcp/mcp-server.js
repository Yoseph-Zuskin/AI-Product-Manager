const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  ListResourcesRequestSchema,
  ReadResourceRequestSchema,
} = require('@modelcontextprotocol/sdk/types.js');
const fs = require('fs');
const path = require('path');

const server = new Server(
  {
    name: 'ai-product-manager',
    version: '0.1.1'
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

// List available skills
server.setRequestHandler(ListToolsRequestSchema, async () => {
  const skillsDir = path.join(__dirname, '..', 'skills');
  const skills = fs.readdirSync(skillsDir).filter(f => fs.statSync(path.join(skillsDir, f)).isDirectory());

  return {
    tools: skills.map(skill => ({
      // Skill dirs are already prefixed with ai-pm-, so just use the dir name
      name: skill,
      description: `Invoke AI-PM skill: ${skill}`,
      inputSchema: {
        type: 'object',
        properties: {
          task: { type: 'string', description: 'Task description for the skill' },
        },
        required: ['task'],
      },
    })),
  };
});

// Handle skill invocation
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;
  const skillName = name; // Already includes ai-pm- prefix

  const skillPath = path.join(__dirname, '..', 'skills', skillName, 'SKILL.md');
  if (!fs.existsSync(skillPath)) {
    throw new Error(`Skill not found: ${skillName}`);
  }

  const skillContent = fs.readFileSync(skillPath, 'utf-8');
  const task = args.task || '';

  return {
    content: [
      {
        type: 'text',
        text: `## Invoking AI-PM Skill: ${skillName}\n\n${skillContent}\n\n---\n\n**Task:** ${task}\n\nExecute the skill workflow for this task.`,
      },
    ],
  };
});

// List available resources (references, templates, agents)
server.setRequestHandler(ListResourcesRequestSchema, async () => {
  const resources = [];

  for (const { dir, prefix, label } of [
    { dir: 'references', prefix: 'references', label: 'Reference' },
    { dir: 'templates', prefix: 'templates', label: 'Template' },
    { dir: 'agents', prefix: 'agents', label: 'Agent' },
  ]) {
    const targetDir = path.join(__dirname, '..', dir);
    if (fs.existsSync(targetDir)) {
      fs.readdirSync(targetDir).filter(f => f.endsWith('.md')).forEach(f => {
        resources.push({
          uri: `ai-pm://${prefix}/${f}`,
          name: `${label}: ${f.replace('.md', '')}`,
          mimeType: 'text/markdown',
        });
      });
    }
  }

  return { resources };
});

// Read resource
server.setRequestHandler(ReadResourceRequestSchema, async (request) => {
  const uri = request.params.uri;
  const match = uri.match(/^ai-pm:\/\/(references|templates|agents)\/(.+)$/);
  if (!match) {
    throw new Error(`Invalid resource URI: ${uri}`);
  }

  const [, type, filename] = match;
  const filePath = path.join(__dirname, '..', type, filename);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Resource not found: ${uri}`);
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  return {
    contents: [
      {
        uri,
        mimeType: 'text/markdown',
        text: content,
      },
    ],
  };
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('AI Product Manager MCP server running on stdio');
}

main().catch((err) => {
  console.error('Failed to start MCP server:', err);
  process.exit(1);
});
