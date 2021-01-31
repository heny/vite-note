import{o as e,c as d,d as c}from"./app.dc9dbd0c.js";const l='{"title":"linux-03 文件操作","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、 文件操作命令","slug":"一、-文件操作命令"},{"level":3,"title":"创建","slug":"创建"},{"level":3,"title":"删除","slug":"删除"},{"level":3,"title":"复制","slug":"复制"},{"level":3,"title":"查看文件","slug":"查看文件"},{"level":2,"title":"三、显示文件内容","slug":"三、显示文件内容"},{"level":2,"title":"四、权限管理命令","slug":"四、权限管理命令"},{"level":2,"title":"五、压缩解压","slug":"五、压缩解压"},{"level":3,"title":"gzip文件","slug":"gzip文件"},{"level":3,"title":"tar.gz文件","slug":"tar-gz文件"},{"level":3,"title":"zip文件","slug":"zip文件"},{"level":3,"title":"bzip2文件","slug":"bzip2文件"},{"level":3,"title":"rar文件","slug":"rar文件"},{"level":2,"title":"六、搜索","slug":"六、搜索"}],"relativePath":"src\\\\frontend\\\\Server\\\\linux-03 文件操作.md","lastUpdated":1612089669867}',o={},i=c('<h1 id="linux-03-文件操作"><a class="header-anchor" href="#linux-03-文件操作" aria-hidden="true">#</a> linux-03 文件操作</h1><h2 id="一、-文件操作命令"><a class="header-anchor" href="#一、-文件操作命令" aria-hidden="true">#</a> 一、 文件操作命令</h2><blockquote><p>命令格式：<code>命令 [-选项] [参数]</code></p></blockquote><h3 id="创建"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><ul><li><p>创建目录：<code>mkdir</code> (-p可以递归创建)</p></li><li><p>创建文件：<code>touch</code></p></li><li><p>生成链接文件：<code>ln -s [old][new] -s</code>生成软链接；</p><p>类似window快捷方式；软链接的文件权限都是rwxrwxrwx；</p></li></ul><h3 id="删除"><a class="header-anchor" href="#删除" aria-hidden="true">#</a> 删除</h3><ul><li><p>删除空目录：<code>rmdir</code></p></li><li><p>删除文件：<code>rm -rf</code> 文件或目录</p><p><code>r</code> 强行删除，<code>f</code> 强制执行；</p></li></ul><p><code>shopt -s extglob</code>执行之后可以执行：<code>rm -rf !(排除的某个文件不被删除)</code></p><p><code>shopt -s</code> ，查看<code>extglob</code>是否为on</p><h3 id="复制"><a class="header-anchor" href="#复制" aria-hidden="true">#</a> 复制</h3><ul><li><p>复制：<code>cp -rp [old][new]</code></p><p><code>r</code> 复制 <code>p</code> 保留文件属性；</p></li><li><p>剪切或重命名：<code>mv [old][new]</code></p></li></ul><h3 id="查看文件"><a class="header-anchor" href="#查看文件" aria-hidden="true">#</a> 查看文件</h3><ul><li><code>cd</code> 切换目录；</li><li><code>pwd</code> 显示当前目录</li><li><code>ls</code> 显示所有文件</li><li><code>ll</code> 显示所以文件包含文件属性；</li></ul><h2 id="三、显示文件内容"><a class="header-anchor" href="#三、显示文件内容" aria-hidden="true">#</a> 三、显示文件内容</h2><ul><li><code>cat</code> 正序显示； -n显示行号；</li><li><code>tac</code> 反向列示</li><li><code>more</code> 分页显示（f或空格翻页，enter换行，q或Q退出）</li><li><code>less</code> 分页显示，可以向上翻页；</li><li><code>head</code> 显示文件前面几行；（在文件前面添加-n，指定行数）</li><li><code>tail</code> 显示文件后面几行（-n，指定行数），支持动态查看，文件刷新即持续更新</li></ul><h2 id="四、权限管理命令"><a class="header-anchor" href="#四、权限管理命令" aria-hidden="true">#</a> 四、权限管理命令</h2><ol><li><p><code>chmod</code>：改变文件或目录权限（/bin/chmod）</p><p><code>chmod [{ugoa}{+-=}{rwx}] [文件或目录]</code></p><p><code>[mode=421] [文件或目录]</code></p><p><code>-R</code> 递归修改；</p></li><li><p>权限的数字表示：r=4 w=2 x=1； 示例：rwxrw-r-- 764</p><p>示例：<code>chmod g+w testfile</code> 赋予testfile文件所属组添加写权限</p><p><code>chmod -R 777 testdir</code> 修改testdir目录下所有文件具有全部权限；</p></li><li><p><code>chown</code>：改变文件或目录的所有者（/bin/chown）</p><p><code>chown [用户] [文件或目录]</code></p></li><li><p><code>chgrp</code>：改变文件或目录的所属组（/bin/chgrp）</p><p><code>chgrp [用户组] [文件或目录]</code></p></li><li><p><code>umask</code>：显示、设置文件的缺省权限（shell内置）</p><p><code>umask [S]</code> -S以 rwx形式显示新建文件缺省权限</p></li></ol><h2 id="五、压缩解压"><a class="header-anchor" href="#五、压缩解压" aria-hidden="true">#</a> 五、压缩解压</h2><h3 id="gzip文件"><a class="header-anchor" href="#gzip文件" aria-hidden="true">#</a> gzip文件</h3><ul><li><p><code>gzip [文件]</code> 压缩文件，压缩后格式.gz；</p></li><li><p><code>gunzip [压缩文件]</code> 解压压缩.gz的文件；</p></li></ul><h3 id="tar-gz文件"><a class="header-anchor" href="#tar-gz文件" aria-hidden="true">#</a> tar.gz文件</h3><p><code>tar [-zcf] [压缩后文件名] [目录]</code> 打包目录，格式.tar.gz</p><ul><li><code>-c</code> 创建tar包，</li><li><code>-x</code> 解包</li><li><code>-v</code> 显示详细信息</li><li><code>-f</code> 指定文件名</li><li><code>-z</code> 通过gzip压缩或解压</li><li><code>-t</code> 不解压查看包内容</li></ul><div class="language-sh"><pre><code>#解压：x 解包，z解压缩，-f，-v；\n# 压缩: \ntar -zcvf build.tar.gz ./build\n# 解压:\ntar -zxvf build.tar.gz\n\n# 打包当前文件夹所有文件\ntar -cvf build.tar *\n\n# 查看当前包的内容\ntar -tvf build.tar\n</code></pre></div><p><strong>注意</strong>：添加了z，手动打开压缩包看到的只是一个文件，该文件需要再次解压，如果是直接输入zxvf命令解压则不用在意；</p><div class="language-bash"><pre><code><span class="token comment"># 下载包rar, 并安装</span>\n<span class="token function">wget</span> http://www.rarlab.com/rar/rarlinux-x64-5.3.0.tar.gz\n<span class="token function">tar</span> -xf rarlinux-x64-5.3.0.tar.gz\n<span class="token builtin class-name">cd</span> <span class="token function">rar</span>\n<span class="token comment"># 制作</span>\n<span class="token function">make</span>\n</code></pre></div><p><strong>排除某个文件夹</strong></p><ul><li><code>--exclude=dir</code></li></ul><div class="language-shell"><pre><code><span class="token comment"># 不使用排除压缩</span>\n<span class="token function">tar</span> -zcvf build.gz *\n<span class="token comment"># 使用排除压缩</span>\n<span class="token function">tar</span> -zcvf build.gz --exclude<span class="token operator">=</span>node_modules *\n</code></pre></div><h3 id="zip文件"><a class="header-anchor" href="#zip文件" aria-hidden="true">#</a> zip文件</h3><p><code>zip [-r] [压缩后的文件名] [文件或目录]</code> 压缩文件或目录，格式zip；</p><ul><li><p><code>-r</code> 压缩目录；</p><p>解压：<code>unzip [压缩文件]</code></p></li></ul><h3 id="bzip2文件"><a class="header-anchor" href="#bzip2文件" aria-hidden="true">#</a> bzip2文件</h3><p><code>bzip2 [-k] [文件]</code> 压缩后格式.bz2；-k产生压缩文件后保留原文件；</p><p>解压：<code>bunzip2 [-k] [压缩文件]</code> <code>-k</code> 解压缩后保留原文件；</p><p><code>tar -xjf Japan.tar.bz2</code> j可以解压bzip2的文件；</p><h3 id="rar文件"><a class="header-anchor" href="#rar文件" aria-hidden="true">#</a> rar文件</h3><p>解压rar文件</p><p>压缩: <code>rar a 压缩文件</code></p><p>解压:</p><ul><li><code>rar x etc.rar</code></li><li><code>unrar -e etc.tar</code></li></ul><h2 id="六、搜索"><a class="header-anchor" href="#六、搜索" aria-hidden="true">#</a> 六、搜索</h2><ol><li><p><code>find</code>：文件搜索（/bin/find）</p><p>find [搜索范围] [匹配条件]</p></li><li><p><code>find /etc -name init</code></p><p>在目录etc查找文件init -iname可以不区分大小写</p></li><li><p><code>find / -size +204800</code></p><p>在根目录下查找大于100M的文件 +n 大于 -n 小于 n 等于</p></li><li><p><code>find /home -user shenchao</code></p><p>在根目录下查找所有者为shencao的文件 -group根据所属组找</p></li><li><p><code>find /etc -cmin -5</code></p><p>在etc下查找5分钟内被修改过属性的文件和目录</p><p><code>-amin</code> 访问时间 <code>-cmin</code> 文件属性 <code>-mmin</code> 文件内容</p></li><li><p><code>find /etc -size +163840 -a -size -204800</code></p><p>查找大于80MB小于100MB文件 -a 两个条件同时满足 -o满足一个</p></li><li><p><code>find /etc -name inittab -exec ls -l {} \\</code>;</p><p>查找initab文件并显示其详细信息 -exec/-ok 命令 {} \\对搜索结果执行操作</p></li><li><p><code>-type</code> 根据文件类型查找； f文件 d目录 l软链接 <code>-inum</code> 根据i节点查找；</p></li><li><p><code>locate</code>：在文件资源库中查找（/usr/bin/locate）</p><p><code>locate 文件名</code></p></li><li><p><code>grep</code>：在文件中搜寻字串匹配的行并输出</p><p><code>grep -iv [指定字串] [文件]</code> -i不区别大小写 -v排队指定字串</p><p><code>grep Vue app.js</code> 在app.js中查找Vue字符串;</p></li></ol>',43);o.render=function(c,l,o,a,p,r){return e(),d("div",null,[i])};export default o;export{l as __pageData};
