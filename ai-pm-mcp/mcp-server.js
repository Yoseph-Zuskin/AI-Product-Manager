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
    version: '0.1.0',
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
  
  // References
  const refsDir = path.join(__dirname, '..', 'references');
  if (fs.existsSync(refsDir)) {
    fs.readdirSync(refsDir).filter(f => f.endsWith('.md')).forEach(f => {
      resources.push({
        uri: `ai-pm://references/${f}`,
        name: `Reference: ${f.replace('.md', '')}`,
        mimeType: 'text/markdown',
      });
    });
  }
  
  // Templates
  const templatesDir = path.join(__dirname, '..', 'templates');
  if (fs.existsSync(templatesDir)) {
    fs.readdirSync(templatesDir).filter(f => f.endsWith('.md')).forEach(f => {
      resources.push({
        uri: `ai-pm://templates/${f}`,
        name: `Template: ${f.replace('.md', '')}`,
        mimeType: 'text/markdown',
      });
    });
  }
  
  // Agents
  const agentsDir = path.join(__dirname, '..', 'agents');
  if (fs.existsSync(agentsDir)) {
    fs.readdirSync(agentsDir).filter(f => f.endsWith('.md')).forEach(f => {
      resources.push({
        uri: `ai-pm://agents/${f}`,
        name: `Agent: ${f.replace('.md', '')}`,
        mimeType: 'text/markdown',
      });
    });
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
const transport = new StdioServerTransport();
await server.connect(transport);
console.error('AI Product Manager MCP server running on stdio');