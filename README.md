# Tokenomics Agent MVP

> **Tokenomics Agent MVP** is a minimal, AI-powered tool that analyzes your project’s tokenomics data and returns a structured report—complete with summary, strengths, concerns, recommendations and an overall rating—using the IO Intelligence LLM.

---

![image](https://github.com/user-attachments/assets/1e9aecc4-86ce-4719-bb9e-e4bdf597eba2)
![image](https://github.com/user-attachments/assets/88e4c997-4f87-4649-a8eb-e381e740f7bb)


## 📙 Table of Contents

- [1. Overview](#1-overview)  
- [2. Key Features](#2-key-features)  
- [3. Tech Stack](#3-tech-stack)  
- [4. Local Development](#4-local-development)  
- [5. Folder Structure](#5-folder-structure)  
- [6. Scripts](#6-scripts)  
- [7. Environment Variables](#7-environment-variables)  
- [8. Contributing](#8-contributing)  
- [9. License](#9-license)  

---

## 1. Overview

This project provides a lightweight React + Vite front-end that sends your tokenomics data to the IO Intelligence API and renders back a detailed analysis. You can paste in your token distribution, vesting schedules, total supply and any extra info, then get back:

- **Summary**: concise project overview  
- **Strengths**: what’s working well  
- **Concerns**: potential red flags  
- **Recommendations**: actionable next steps  
- **Overall Rating**: score out of 10  

---

## 2. Key Features

- 🎛 **Interactive Form** — paste or upload your tokenomics data  
- 🚀 **Fast Dev** — powered by Vite + React + TypeScript  
- 🤖 **AI Analysis** — IO Intelligence LLM does the heavy lifting  
- 📄 **Markdown Output** — cleanly formatted result in your app  
- 🔄 **Mock Mode** — a local mockAnalysis for offline/demo use  

---

## 3. Tech Stack

| Layer            | Technology                         |
| ---------------- | ---------------------------------- |
| **Frontend**     | React ★ Vite ★ TypeScript          |
| **Styling**      | Tailwind CSS                       |
| **AI Service**   | IO Intelligence API                |
| **Mock Service** | Local mockAnalysis (TypeScript)    |
| **Linting**      | ESLint (JS + React Hooks plugin)   |
| **Bundler**      | Vite                               |

---

## 4. Local Development

### 4.1 Requirements

- Node.js v18+  
- npm or Yarn  

### 4.2 Setup & Run

```bash
# 1. Clone the repo
git clone https://github.com/your-org/tokenomics-agent-mvp.git
cd tokenomics-agent-mvp

# 2. Install dependencies
npm install
# or
yarn install

# 3. Create your .env
cp .env.example .env
# then add your IO API key:
# VITE_IO_API_KEY=io-...

# 4. Start development server
npm run dev
# or
yarn dev

# 5. Open http://localhost:5173 in your browser

