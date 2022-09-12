## Create a new vite project using

`npm create vite@latest`

## Install Tailwind Css Library using

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Build and Deployment

<!-- NOTE :

-   Run this command
    `npm run deploy`
-   Then commit and push to master branch
    `git push origin master`

--- -->

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
