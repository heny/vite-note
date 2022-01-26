#!/bin/sh

set -e

npm run push

echo '发布成功, 开始部署gitee'

cd .vitepress/dist

git init
git commit -m 'deploy'
git branch -m gitee-pages
git push -f https://gitee.com/hnys/vite-note.git gitee-pages

echo 'gitee-page 部署完成'