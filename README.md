---
title: AI Healthcare SaaS
emoji: 🏥
colorFrom: blue
colorTo: green
sdk: docker
app_port: 7860
pinned: false
---

# 🏥 AI Healthcare Consultation SaaS (GenAI + Streaming)

🚀 A production-style **Generative AI SaaS application** that transforms doctor consultation notes into structured summaries with real-time streaming responses.

---

## 🔗 Live Demo

👉 Frontend: https://ai-healthcare-consultation-saas.vercel.app/
👉 Backend API: https://healthcare-backend-c100.onrender.com

---

## ⚡ Key Features

* 🔐 Secure authentication using Clerk (JWT-based)
* 🧠 AI-powered consultation summary generation
* ⚡ Real-time streaming responses (SSE like ChatGPT)
* 🌐 Full-stack deployment (Frontend + Backend separated)
* 📄 Structured output:

  * Summary for doctor
  * Next steps
  * Patient-friendly email

---

## 🧠 How It Works

```text
User → Login (Clerk)
     → Enter Notes (Frontend - Next.js)
     → API Call (Render - FastAPI)
     → OpenAI Streaming Response
     → Live Output Rendered (ReactMarkdown)
```

---

## 🛠️ Tech Stack

### Frontend

* Next.js (React)
* ReactMarkdown (render AI output)
* Clerk (authentication)
* fetch-event-source (SSE streaming)

### Backend

* FastAPI
* OpenAI API (streaming)
* Clerk JWT verification
* Uvicorn (ASGI server)

### Deployment

* Vercel (Frontend)
* Render (Backend)

---

## 📂 Project Structure

```bash
.
├── backend/
│   ├── main.py
│   ├── requirements.txt
│
├── frontend/
│   ├── pages/
│   │   └── product.tsx
│
└── README.md
```

---

## 🚀 Getting Started (Local Setup)

### 1️⃣ Backend Setup

📍 Run inside `backend/`

```bash
pip install -r requirements.txt
uvicorn main:app --reload
```

---

### 2️⃣ Frontend Setup

📍 Run inside `frontend/`

```bash
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (Render)

```env
OPENAI_API_KEY=your_openai_key
CLERK_JWKS_URL=your_clerk_jwks_url
```

---

### Frontend (Vercel)

```env
NEXT_PUBLIC_API_URL=https://healthcare-backend-c100.onrender.com
```

---

## ⚠️ Known Behaviors

* Render free tier may sleep → first request can take ~30 seconds
* Clerk is running on development keys (rate-limited)

---

## 🧪 API Endpoints

* `GET /health` → Health check
* `POST /api/consultation` → Generate AI summary (SSE streaming)

---

## 💡 Highlights (Why This Project Matters)

* Built using **production-grade architecture**
* Implements **real-time AI streaming (SSE)**
* Demonstrates **frontend-backend decoupling**
* Uses **secure auth flow (JWT validation)**
* Designed like a **real SaaS product**

---

## 🚀 Future Improvements

* 💾 Add database (PostgreSQL / Supabase)
* 📊 Store consultation history
* 💳 Integrate payments (Stripe)
* 🧠 Add RAG (medical knowledge base)
* 🔒 Restrict CORS for production security

---

## 🧠 Author

**Deepak Maurya**
AI/ML Engineer (GenAI Focus)

---

## ⭐ If you found this useful

Give it a ⭐ on GitHub and connect with me!

---

# 💼 Portfolio Description (Use This)

Built a full-stack AI Healthcare Consultation SaaS application using Next.js and FastAPI, integrating OpenAI for real-time streaming responses and Clerk for secure authentication. Designed with a production-style architecture by separating frontend (Vercel) and backend (Render), implementing server-sent events (SSE) for live AI output, and handling end-to-end API integration, authentication, and deployment.

---
