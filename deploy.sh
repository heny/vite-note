#!/bin/sh

# 只要有一条命令不为true，则退出
set -e

# 控制变量
LOCAL_BUILD=true
DEPLOY_SERVER=true

echox () {
  date=`date '+%Y-%m-%d %H:%M:%S'`
  echo -e "\e[1;35m[$date]\e[0m \e[1;34m$1\e[0m"
  if [ ! $2 ]; then
    eval $1
  fi
}

echox '开始构建' 1

if [ "$LOCAL_BUILD" = true ]; then
  echox 'pnpm build'
else
  echox "跳过本地构建" 1
fi

echox '开始推送' 1

echox 'pnpm push'

echox '开始部署到服务器' 1

if [ "$DEPLOY_SERVER" = true ]; then
  echox 'pnpm deploy:server'
else
  echox "跳过部署到服务器" 1
fi
