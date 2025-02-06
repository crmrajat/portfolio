# [Live Portfolio 💖](https://crmrajat.github.io/portfolio/)

## Overview

A personal portfolio website built with React and Vite, showcasing my projects and skills.

## Build and Deployment

### 🚩 First-time Deployment

1. Configure Vite base URL

    ```javascript
    // vite.config.js
    export default defineConfig({
        base: '/portfolio/', // Replace with your repository name
        plugins: [react()],
    });
    ```

2. Build the project

    ```bash
    npm run build
    ```

3. Add and commit the dist folder

    ```bash
    git add dist -f
    git commit -m "Adding dist for deployment"
    ```

4. Push to GitHub Pages branch
    ```bash
    git subtree push --prefix dist origin gh-pages
    ```

### 🚩 Updating Deployed Project

1. Make your changes and commit to main branch

    ```bash
    git add .
    git commit -m "Your update message"
    git push origin main
    ```

2. Deploy updates
    ```bash
    npm run deploy
    ```

## Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run deploy` - Deploy to GitHub Pages

## Tech Stack

-   React
-   Vite
-   GitHub Pages

## Local Development

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
