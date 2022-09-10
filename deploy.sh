#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
# cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

# git init
# git checkout -b main
# git add -A
# git commit -m 'deploy'

# # if you are deploying to https://crmrajat.github.io
# # git push -f git@github.com:crmrajat/crmrajat.github.io.git main

# # if you are deploying to https://crmrajat.github.io/portfolio
# git push -f git@github.com:crmrajat/portfolio.git main:gh-pages

git add dist -f
git commit -m "Deploy"
git subtree push --prefix dist origin gh-pages

cd -
