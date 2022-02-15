#!/bin/sh

# 只要有一条命令不为true，则退出
set -e

echox () {
  echo -e "\e[1;34m $1 \e[0m"
}

echox "【gitee】开始部署"
npm run build -- --gitee

cd .vitepress/dist

echox 'git init'
git init

echox 'git add'
git add .

echox 'git commit -m "deploy"'
git commit -m 'deploy'

echox 'git branch -m gitee-pages'
git branch -m gitee-pages

echox 'git push -f https://gitee.com/hnys/vite-note.git gitee-pages'
git push -f https://gitee.com/hnys/vite-note.git gitee-pages

echox '【gitee】部署完成'