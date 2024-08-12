#!/bin/sh

# 获取当前脚本所在的目录
SCRIPT_DIR="$(dirname "$0")"
ROOT_DIR="$(git rev-parse --show-toplevel)"

{
    # 添加头部内容
    printf '%s\n' "---" "editLink: false" "---" "# 日志" ""

    # 使用 awk 生成日志内容
    awk '
    function format_output(pre_tag) {
        split($2, parts, "/");            # 将路径按 / 分割
        file_name = parts[length(parts)]; # 获取文件名
        sub(/\.md$/, "", file_name);      # 去掉 .md 后缀
        path = "";                        # 初始化路径
        for (i = 2; i < length(parts); i++) {
            path = (path ? path "/" : "") parts[i];     # 重建路径
        }
        print pre_tag "[" file_name "](" "/" path "/" file_name ".html)" "  \n  "; # 输出格式化链接
    }

    {
        if ($1 == "D") {
            pre_tag = "<span style=\"color: #e74c3c;\">删除</span> "
            split($2, parts, "/");            # 将路径按 / 分割
            file_name = parts[length(parts)]; # 获取文件名
            sub(/\.md$/, "", file_name);      # 去掉 .md 后缀
            print pre_tag file_name  "  \n  ";
        } else if ($1 == "A") {
            pre_tag = "<span style=\"color: #2ecc71;\">添加</span> "
            format_output(pre_tag)
        } else if ($1 == "M") {
            pre_tag = "<span style=\"color: #2ecc71;\">修改</span> "
            format_output(pre_tag)
        } else if($1 !~ /^R/) {
            if ($1 ~ /^[0-9]{4}-[0-9]{2}-[0-9]{2}/) {
                print "## " $0;  # 以时间开头的行前添加 ##
            } else {
                print $0;  # 打印原始行
            }
        }
    }' $SCRIPT_DIR/commit_log.txt
} > $ROOT_DIR/src/log.md