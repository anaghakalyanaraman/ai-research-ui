# AI Research Agent — UI

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-cyan)

React frontend for the AI Research Agent. Enter any topic and get a real-time synthesized report with citations from live web sources.

**Demo:** [Watch Demo](https://youtu.be/ujEYGKfrP6M)  
**Live:** https://ai-research-ui-six.vercel.app  
**Backend Repo:** https://github.com/anaghakalyanaraman/ai-research-agent

---

## Features

- Clean full-screen dark UI
- Real-time research with live web sources
- Shows number of agent steps taken
- Cited report rendered with formatting preserved
- Loading state with estimated wait time

---

## Running Locally

**Prerequisites:** Node.js, Backend API running at `http://localhost:8000`

```bash
git clone https://github.com/anaghakalyanaraman/ai-research-ui
cd ai-research-ui
npm install
npm run dev
```

App runs at `http://localhost:5173`

---

## Tech Stack

| Component | Tool |
|---|---|
| Framework | React 18 + Vite |
| Styling | Tailwind CSS |
| HTTP | Axios |
