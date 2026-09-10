# Project Name: The Initiation (Lead Magnet for Echoes)

## 1. Stack & Tech Setup
- Hosting/Deployment: Vercel
- Database: Supabase (PostgreSQL/JSONB)
- Backend Environment: Node.js (JavaScript)
- AI Model/API: Claude API (@anthropic-ai/sdk), Sonnet 5
- Version Control: GitHub

## 2. Current Architecture & Core Logic
- user_sessions table planned in Supabase (stores email, choices, reflection_text, ai_result) — not yet built.
- generateResult.js (backend script) planned for later — takes user inputs, sends structured prompt to Claude API, parses JSON, writes to Supabase. NOT the current task.

## 3. Current Progress
- [x] VS Code, Node.js (via nvm) installed
- [x] GitHub repo created (gor-echoes-initiation)
- [x] Claude Console, Supabase, Vercel accounts created
- [ ] Vite + React project scaffolded
- [ ] Stage 1 (Arrival/Induction) frontend built — static UI, placeholder content, no backend yet
- [ ] Full 5-stage rough skeleton (App.jsx/App.css) pushed to GitHub

## 4. Immediate Next Task
Scaffold the Vite + React project locally, drop in the App.jsx/App.css skeleton (5-stage flow, Stage 1 built out, Stages 2-5 placeholder), confirm it runs in the browser, then commit and push. No AI, no Supabase, no backend logic yet.

## 5. Sequencing Rule (don't skip ahead)
Frontend shell for all 5 stages comes first. Backend (Supabase + generateResult.js + AI call) only gets built once the full frontend flow exists to plug it into.
Build the 5-phase sequence as a config-driven state machine (array of phase objects + currentIndex/next()/back()) rather than hardcoded inline order. Input capture (typed for V1) should be its own swappable module, not baked into the phase component — keeps voice input addable later without a rewrite.