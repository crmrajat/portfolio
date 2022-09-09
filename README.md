# Create a new vite project

npm create vite@latest

# Install the tailwind css for react

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Install GitHub Pages package

npm install gh-pages --save-dev

add the base property in the vite.config file
base: '/project-name/',

add homepage to package.json
"homepage": "https://git-username.github.io/repo-name",

add scripts to package.json
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
