#!/bin/sh

# 获取当前脚本所在的目录
SCRIPT_DIR="$(dirname "$0")"

# 去除R100和index.md
# 时间显示为 2000-01-01 00:00:00
# 输出格式化日志到 commit_log.txt
git log --pretty=format:"%cd" --date=format:'%Y-%m-%d %H:%M:%S' --name-status -- src/frontend | grep -v -E '(^R100|index.md|\/images\/)' > $SCRIPT_DIR/commit_log.txt