#!/bin/sh

# 只要有一条命令不为true，则退出
set -e

echox () {
  echo -e "\e[1;34m $1 \e[0m"
  [ ! $2 ] && eval $1
}

echox "开始部署github" 1

echox 'npm run build'

echox 'cd .vitepress/dist'

echox 'git init'

echox 'git add .'

echox 'git commit -m "deploy"'

echox 'git branch -m main'

echox 'git push -f git@github.com:heny/heny.github.io.git main'

echox '开始部署gitee' 1

echox 'cd ../../'

echox 'npm run build --gitee'

echox 'git-auto push -m "deploy" '
