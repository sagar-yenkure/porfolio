const how_to_use_gemini_cli = `

# How to Use Gemini CLI – Google’s Free AI Tool for Your Terminal

**Gemini CLI** is a lightweight, open-source AI assistant that runs directly in your terminal. Built by Google, it gives developers direct access to Gemini 2.5 Pro — their powerful large language model — without needing a browser or IDE. It's fast, smart, and free to use for individuals.

In this guide, you’ll learn:

- What Gemini CLI is
- How to install and authenticate it
- How to use it for coding, troubleshooting, and scripting
- Bonus features like Google Search integration and file handling

---

## What is Gemini CLI?

Gemini CLI is a **command-line interface** tool that brings AI directly to your terminal. It’s built for developers who love working in the terminal and want an AI assistant for:

- Writing code
- Debugging issues
- Generating content
- Automating tasks
- Researching with real-time web context

It even supports extensions and advanced workflows via scripting.

---

## Step 1: Install Gemini CLI

To install Gemini CLI globally:

\`\`\`bash
npm install -g @google/gemini-cli
\`\`\`

Login with your Google account:

\`\`\`bash
gemini login
\`\`\`

This gives you **free access** to Gemini Code Assist with:
- Gemini 2.5 Pro model
- 60 requests per minute
- 1,000 requests per day — **completely free**

---

## Step 2: Using Gemini in Your Terminal

Once installed, launch the CLI:

\`\`\`bash
gemini
\`\`\`

You’ll enter a prompt-driven chat experience inside your terminal. Ask it to generate code, debug snippets, refactor, or explain complex logic.

---

Or run a quick one-off question:

\`\`\`bash
gemini run "What’s the difference between let and const in JavaScript?"
\`\`\`

You’ll instantly get AI-generated answers, formatted and clear — without ever leaving the terminal.

---

## Step 4: Use Gemini with Files and Projects

You can also give Gemini access to your files or codebase:

\`\`\`bash
gemini run -f app.js "Explain what this code does"
\`\`\`

Want to give a full folder?

\`\`\`bash
gemini run -f ./src "Find bugs and suggest improvements"
\`\`\`

This is incredibly useful for:
- Code reviews
- Refactoring
- Explaining legacy code

---

## Step 5: Enable Google Search for Live Info

Use the \`--search\` flag to fetch real-time results from Google Search:

\`\`\`bash
gemini run --search "What’s new in React 19?"
\`\`\`

This gives Gemini up-to-date information to enhance your response — great for tech updates, product changes, or researching APIs.

---

## Automate with Scripts

You can also use Gemini CLI non-interactively in scripts:

\`\`\`bash
gemini run "Write a cron job to backup a PostgreSQL DB" > backup.sh
\`\`\`

> **To exit the chat interface**: Press **Ctrl + Esc**

This makes it great for DevOps, CI/CD tasks, and daily workflows.

---

## Bonus: It’s Fully Open Source

Gemini CLI is open-source under Apache 2.0 license. You can:
- Inspect the code
- Submit issues or improvements on GitHub
- Build extensions or tweak its config with GEMINI.md

---

##  Final Thoughts

Gemini CLI brings serious AI power directly to your terminal. Whether you're a fullstack developer, DevOps engineer, or indie hacker — this tool can speed up your workflow, answer technical questions, and even help write or debug code on the fly.

No browser tabs. No distractions. Just you and AI — right in your terminal.

---

Try it out today 👉 [https://cli.gemini.dev](https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/)

Happy hacking! ⚡

`;

export default how_to_use_gemini_cli;
