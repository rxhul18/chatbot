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

Note that local packages don't update automatically. If you make changes to the local dependency, you will need to force an update by running:

```bash
npm run build
```
to rebuild the package


```bash
npm install
npm start
```
too update the dependencie, and reinstall the updated build of package

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

## Demo

![Screenshot 2024-12-03 at 12 19 56 PM](https://github.com/user-attachments/assets/ba42422f-bdae-448a-b7aa-43ee4cc4ac8f)

![Screenshot 2024-12-03 at 12 20 55 PM](https://github.com/user-attachments/assets/1a3f142b-9439-4578-86e9-a5156a70ca0f)

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