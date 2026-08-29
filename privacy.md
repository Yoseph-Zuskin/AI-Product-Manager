# AI Product Manager Plugin Privacy Policy

**Effective Date:** 2026-08-29
**Version:** 0.1.1

## Data Handling

The AI Product Manager plugin is distributed as a local Codex plugin bundle. All skill instructions and knowledge concepts run entirely within the user's local Codex environment.

- **No hosted backend:** This plugin does not operate a hosted backend for plugin execution, analytics, or telemetry collection.
- **No data collection:** The plugin itself does not collect, store, or transmit any user data, prompts, or project information to external servers.
- **Local execution:** All skill workflows, concept lookups, and template rendering occur locally within the user's Codex environment.

## Third-Party Integrations

Some skills may reference external resources when explicitly invoked by the user:

- **OKF Abstracts:** Skills may reference concept definitions from the okf-abstracts repository (https://github.com/Yoseph-Zuskin/okf-abstracts) via GitHub URLs. No API keys or authentication required; these are public HTTPS links to markdown files.
- **External APIs:** Individual skills may suggest using third-party APIs (e.g., Figma, Jira, GitHub) when the user explicitly configures them. Data sent to those systems is governed by the user's own configuration and the third-party provider's privacy policy.
- **Local files:** Skills may read local project files (README, code, config) when the user provides paths. These files never leave the local environment.

## Credentials & Secrets

- **No credential storage:** The plugin does not store, manage, or transmit API keys, tokens, or secrets.
- **User responsibility:** Users are responsible for deciding which credentials to configure in their environment and which prompts or files to share with any external services they choose to use.
- **Local-only:** All credential handling remains in the user's local environment and Codex configuration.

## Knowledge Bundle Content

The plugin includes a knowledge bundle (OKF v0.2 format) containing:

- **Concepts:** Product strategy frameworks, AI/ML patterns, governance practices
- **Skills:** 13 workflow skills for product discovery, design, architecture, governance, etc.
- **Templates:** PRD, ADR, RACI, postmortem, model card templates
- **References:** Architecture patterns, ML algorithms, cloud infrastructure concepts

All content is derived from publicly available sources and Professor Mohan Sawhney's Kellogg Executive Education certificate programs (AI Strategies for Business Transformations, AI-Driven Product Strategy), used under personal educational license.

## Contact

- **Repository:** https://github.com/Yoseph-Zuskin/ai-product-manager
- **Issues:** https://github.com/Yoseph-Zuskin/ai-product-manager/issues
- **Maintainer:** Yoseph-Zuskin

## Updates

This privacy policy may be updated. The effective date and version at the top indicate the current version. Continued use of the plugin constitutes acceptance of the updated policy.