# PluraBot - Local Development & Testing Guide

Welcome to **PluraBot**! This repository contains a chatbot package that can be used and tested locally within your own projects. Follow the instructions below to get started with the local setup, usage, and contributing guidelines.

## Introduction

**PluraBot** is a customizable chatbot designed for integration into your projects. It allows you to display a chatbot UI, configure the backend, and customize the appearance and functionality. This guide will show you how to use and contribute to this chatbot.


## Setup

### 1. Clone the Repository

Start by cloning this repository to your local machine:

```bash
git clone https://github.com/plura-ai/chatbot
cd plurabot
```

### 2. Install Dependencies

Before running the chatbot locally, install the necessary dependencies:

```bash
npm install
```

### 3. Build the Package

To test the chatbot locally in another project, build the package:

```bash
npm run build
```

This will create a package that can be used in other projects.

---

## Usage

### To Install Locally in Another Project

To use **PluraBot** in another project, run:

```bash
npm i --save ./../path_to_repo/ChatBot -D
```

This will add the following entry to your `package.json`:

```json
"dependencies": {
  "my-package": "file:../packages/plurabot"
}
```

### 4. Updating Local Dependencies

Local packages do not update automatically. If you make changes to the local dependency, you'll need to manually update it by following these steps:

1. Rebuild the package:
   ```bash
   npm run build
   ```

2. Install the updated dependency and start the bot in the project you're testing:
   ```bash
   npm install
   npm start
   ```

### 5. ChatBot Component Usage

To integrate the chatbot into your React project, use the following component:

```jsx
<ChatBot 
  backendUrl="https://ask-10x-questions.vercel.app/"    
  botIcon="./logoImg2.jpg"
  userIcon="./logoImg.jpg"
  prompt="You're an artist turned developer, respond accordingly"
  startOpen={true}
  authToken="your-auth-token"
  chatBotWrapperStyle="bg-black"
  chatWindowStyle=""
/>
```

### Customization Options:
- `backendUrl`: URL for the backend that handles chatbot responses.
- `botIcon`: Custom icon for the bot.
- `userIcon`: Custom icon for the user.
- `prompt`: Initial chatbot prompt.
- `startOpen`: Whether the chat window should be open on startup.
- `authToken`: Authentication token for the chatbot API.
- `chatBotWrapperStyle`: Style for the chatbot wrapper (background color, etc.).
- `chatWindowStyle`: Style for the chat window.

---

## Screenshots

<img width="1280" alt="Screenshot 2025-01-08 at 4 08 46 AM" src="https://github.com/user-attachments/assets/a7842679-1eba-452d-9a68-baa91a26459d" />
<img width="1280" alt="Screenshot 2025-01-08 at 4 09 11 AM" src="https://github.com/user-attachments/assets/8a3a62d9-2ec4-47f3-97b1-ae95fc2e1596" />
<img width="1280" alt="Screenshot 2025-01-08 at 4 09 13 AM" src="https://github.com/user-attachments/assets/45db286c-1eb6-4204-a844-ad29a931faa5" />
<img width="1280" alt="Screenshot 2025-01-08 at 4 09 26 AM" src="https://github.com/user-attachments/assets/3835baa7-a6a1-4885-a12c-652ba808dca7" />
<img width="1280" alt="Screenshot 2025-01-08 at 4 09 49 AM" src="https://github.com/user-attachments/assets/be8150b7-dd74-4606-8c9c-e5446cef528d" />

---

## Directory Structure

Here's an overview of the project directory structure:

```
└── rajveeerr-chatbot/
    ├── README.md
    ├── LICENSE
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    ├── postcss.config.js
    ├── tailwind.config.js
    ├── vercel.json
    ├── vite.config.js
    ├── .env-example
    ├── public/
    │   └── images/
    └── src/
        ├── App.jsx
        ├── index.css
        ├── index.js
        ├── main.jsx
        ├── components/
        │   ├── answerComponent.jsx
        │   ├── chatArea.jsx
        │   ├── heading.jsx
        │   ├── index.jsx
        │   ├── inputArea.jsx
        │   ├── onlineIndicator.jsx
        │   └── questions.jsx
        ├── hooks/
        │   └── useOnline.js
        ├── store/
        │   └── atoms/
        │       ├── allChats.js
        │       ├── answerFamily.js
        │       ├── attributesData.js
        │       ├── chatWindowState.js
        │       └── questionFamily.js
        ├── styles/
        │   └── style.css
        └── utils/
            └── getAssetPath.js
```

- **src/app.jsx**: The entry point for the application.
- **src/components/index.jsx**: Main chatbot component that imports other components.

---