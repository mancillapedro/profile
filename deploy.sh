# abort on errors
set -e

# sube todo a git 
git push origin main

# cambiar de rama
gco gh-pages

# build
git pull origin main
yarn build
cp dist/index.html dist/404.html

# git instrucction
git add -A
git commit --amend --no-edit

# despliegue
git subtree push --prefix dist origin gh-pages

# volver a la rama principal
gco main

