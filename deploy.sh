#!/bin/sh

# 只要有一条命令不为true，则退出
set -e

echox () {
  date=`date '+%Y-%m-%d %H:%M:%S'`
  echo -e "\e[1;35m[$date]\e[0m \e[1;34m$1\e[0m"
  if [ ! $2 ];then
    eval $1
  fi
}

buildGithub () {
  echox '开始构建'

  echox 'npm run build'

  echox "开始部署github" 1

  echox 'cd .vitepress/dist'

  echox 'git init'

  echox 'git add .'

  echox 'git commit -m "deploy"'

  echox 'git branch -m main'

  echox 'git push -f git@github.com:heny/heny.github.io.git main'
}

echox '开始推送' 1

echox 'git add .'
echox 'git commit -m "deploy"'
echox 'git push'

echox '开始部署服务器' 1

echox 'npm run deploy'

buildGithub
