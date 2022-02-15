#!/bin/sh

# 只要有一条命令不为true，则退出
set -e

echox () {
  echo -e "\e[1;34m $1 \e[0m"
}

echox "【gitee】开始部署"
npm run build

cd .vitepress/dist

echox 'git init'
git init

echox 'git add'
git add .

echox 'git commit -m "deploy"'
git commit -m 'deploy'

echox 'git branch -m main'
git branch -m main

echox 'git push -f git@github.com:heny/heny.github.io.git main'
git push -f git@github.com:heny/heny.github.io.git main

echox '【gitee】部署完成'