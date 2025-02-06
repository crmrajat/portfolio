# [Live Portfolio 💖](https://crmrajat.github.io/portfolio/)

## Overview

A personal portfolio website built with React and Vite, showcasing my projects and skills.

## 🚀 Quick Start

### Local Development

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    ```
2. Install dependencies
    ```bash
    npm install
    ```
3. Start the development server
    ```bash
    npm run dev
    ```

## 🛠️ Build and Deployment

### First-time Deployment

1. Configure Vite base URL

    ```javascript
    // vite.config.js
    export default defineConfig({
        base: '/portfolio/', // Replace with your repository name
        plugins: [react()],
    });
    ```

2. Build and deploy
    ```bash
    npm run deploy
    ```

### Updating Deployed Project

Use the automated script to build, commit, and deploy in one command:

```bash
npm run automate "Your commit message"
```

## Scripts

-   `npm run automate` - Automated build, commit, and deploy
-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run deploy` - Deploy to GitHub Pages
-   `npm run push` - Git add, commit, and push changes

## Tech Stack

-   React
-   Vite
-   GitHub Pages
