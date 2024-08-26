## [Portfolio 💖](https://crmrajat.github.io/portfolio/)

## Create a new vite project using

`npm create vite@latest`

## Install Tailwind Css Library using

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Install Github Pages for hosting

```
npm install gh-pages --save-dev
```

## Build and Deployment

🚩 Follow this when deploying for the first time

-   Go to your `vite.config.js` file. And add your base url to it.

    > export default defineConfig({
    > base: '/project-name/', ⬅️
    > plugins: [react()],
    > });

-   Now build the project

    > npm run build

-   Add _/dist_ folder into your repo

    > git add dist -f

-   Commit the changes

    > git commit -m "Adding dist"

-   Push the dist to a new gh-pages branch

    > git subtree push --prefix dist origin gh-pages

-   Deployment Complete ✅

---

🚩 Follow this when updating the deployed project

-   Commit and Push the current changes to the master branch
-   Now run the `npm run deploy`
