# Mistral Chat

**Mistral Chat** is a web-based AI chat application built with **Next.js 13**, allowing users to interact with **Mistral LLM models**. It has a modern UI, dark mode, model selection, and Markdown support for AI responses.

---

## Features

- Chat with **Mistral AI models**.
- **Choose from 4 LLMs**:
    - Mistral Large (`mistral-large-latest`)
    - Mistral Medium (`mistral-medium-latest`)
    - Mistral Small (`mistral-small-latest`)
    - Mistral Nemo (`mistral-nemo-latest`)
- **Dark mode** toggle for comfortable viewing.
- **Markdown rendering**
- Responsive, modern UI.
- Easy deployment to **Vercel**.

> Screenshots:
> <img width="3693" height="2161" alt="image" src="https://github.com/user-attachments/assets/912a08ab-b336-41b0-ab32-dd26cda1415d" />


> <img width="3693" height="2161" alt="image" src="https://github.com/user-attachments/assets/f8ded3d0-4b55-4c9f-be64-ef034ae57368" />

---

## Tech Stack

- **Next.js 13 (App Router)** 
- **SCSS Modules** – Modular and themeable styling.
- **FontAwesome** – Icons.
- **React Markdown** – For AI responses with Markdown formatting.
- **Mistral LLM API** – AI integration API.

---

## Folder Structure

```
.
├── src
│   ├── app
│   │   ├── chat
│   │   │   ├── chat.module.scss
│   │   │   └── page.tsx
│   │   ├── api
│   │   │   ├── chat
│   │   │   │   └── route.ts
│   │   │   └── mistral.ts
│   │   └── globals.css
│   ├── styles
│   │   └── _variables.scss
│   └── types
│       └── global.d.ts
├── package.json
└── README.md

```

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/mistral-chat.git
cd mistral-chat

```

### 2. Install Dependencies

```bash
npm install

```

### 3. Configure Environment Variables

Create a `.env.local` file:

```
API_KEY=your_api_key_here

---

### 4. Run Locally

```bash
npm run dev

```

- Open [http://localhost:3000](http://localhost:3000/) to access the app.

---

## Usage

1. Navigate to the **home page**, click the button to enter the chat.
2. **Select AI model** from the dropdown (Mistral Large, Medium, Small, Nemo).
3. Type your message and **press Enter** or click the send button.
4. Toggle **dark mode** using the top-right button.
   
---

## Deployment

### Deploy to Vercel

1. Push your repo to **GitHub**.
2. Import the project in **Vercel**.
3. Add environment variables in the Vercel dashboard.
   <img width="2913" height="1291" alt="image" src="https://github.com/user-attachments/assets/e799d51f-d52e-4035-ba56-11f85f8b7777" />


>
