import{o as e,c as o,d}from"./app.0b9a38dc.js";const l='{"title":"linux-02 基本操作","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、常用快捷键","slug":"一、常用快捷键"},{"level":2,"title":"二、ls命令","slug":"二、ls命令"},{"level":2,"title":"三、帮助命令","slug":"三、帮助命令"},{"level":2,"title":"四、用户管理命令","slug":"四、用户管理命令"},{"level":2,"title":"五、网络命令","slug":"五、网络命令"},{"level":2,"title":"六、系统管理","slug":"六、系统管理"},{"level":3,"title":"kill 杀死进程","slug":"kill-杀死进程"},{"level":3,"title":"top 实时显示进程动态","slug":"top-实时显示进程动态"},{"level":3,"title":"alias 别名配置","slug":"alias-别名配置"},{"level":3,"title":"history 历史命令","slug":"history-历史命令"},{"level":2,"title":"七、关机开机","slug":"七、关机开机"}],"relativePath":"src\\\\frontend\\\\Server\\\\linux-02 基本操作.md","lastUpdated":1612089669866}',c={},i=d('<h1 id="linux-02-基本操作"><a class="header-anchor" href="#linux-02-基本操作" aria-hidden="true">#</a> linux-02 基本操作</h1><h2 id="一、常用快捷键"><a class="header-anchor" href="#一、常用快捷键" aria-hidden="true">#</a> 一、常用快捷键</h2><ul><li><code>ctrl+c</code> 强制终止</li><li><code>ctrl+l</code> 清屏</li><li><code>ctrl+u</code> 删除或剪切之前命令</li><li><code>ctrl+y</code> 粘贴</li><li><code>ctrl+r</code> 搜索历史命令并执行</li><li><code>ctrl+d</code> 退出当前终端</li></ul><h2 id="二、ls命令"><a class="header-anchor" href="#二、ls命令" aria-hidden="true">#</a> 二、ls命令</h2><ol><li><p>ls：显示目录文件（/bin/ls），选项[-ald] [文件或目录]</p><p>例：ls -a /home</p><p><code>-a</code> 显示所有文件，包括隐藏文件</p><p><code>-l</code> 详细信息显示</p><p><code>-d</code> 查看目录属性；</p></li><li><p>基本属性</p><p>文件类型：（<code>-</code> 文件 <code>d</code> 目录 <code>l</code> 软链接文件）</p><p><code>u</code> 所有者 <code>g</code>所属组 <code>o</code>其他人；</p><p><code>r</code> 读 <code>w</code> 写 <code>x</code>执行； x执行：可以执行文件或进入目录等；</p></li></ol><h2 id="三、帮助命令"><a class="header-anchor" href="#三、帮助命令" aria-hidden="true">#</a> 三、帮助命令</h2><ol><li><code>which</code> 命令 搜索命令所在目录及别名信息；</li><li><code>whereis [命令名称]</code> 搜索命令所在目录及帮助文档路径；</li><li><code>man [命令或配置文件]</code> 获得帮助信息；</li><li><code>help</code> 命令 获得内置shell命令的帮助信息；</li><li><code>whatis</code> 查看命令的简短信息</li><li><code>apropos</code> 查看配置文件的简短信息</li><li><code>info</code> 等同于man命令</li></ol><h2 id="四、用户管理命令"><a class="header-anchor" href="#四、用户管理命令" aria-hidden="true">#</a> 四、用户管理命令</h2><ol><li><code>useradd 用户名</code> 添加新用户，root用户执行；</li><li><code>passwd 用户名</code> 设置用户密码；</li><li><code>who</code> 查看登录用户信息；</li><li><code>w</code> 查看登录用户详细信息；</li></ol><h2 id="五、网络命令"><a class="header-anchor" href="#五、网络命令" aria-hidden="true">#</a> 五、网络命令</h2><ol><li><p><code>write 用户名</code> 给用户发信息，以ctrl+d保存结束；</p></li><li><p><code>wall [message]</code> 发广播信息，给广播发信息；</p></li><li><p><code>ping [-c] ip地址</code> 测试网络连通性，-c指定发送次数；</p></li><li><p><code>mail [用户名]</code> 查看发送电子邮件</p><p><code>mail</code> 回车 读取信息（<code>h</code> 查看列表， <code>d[序列号]</code>删除邮件）</p></li><li><p><code>ifconfig</code> 查看设置网卡信息</p></li><li><p><code>last</code> 查看目前与过去登入系统的用户信息；</p></li><li><p><code>lastlog</code> 检查某特定用户上次登录的时间</p><p><code>lastlog -u 500</code>； 通过uid查看指定用户的登录信息；</p></li><li><p><code>traceroute 地址</code> 显示数据包到主机间的路径；</p></li><li><p><code>netstat [选项]</code> 显示网络相关信息；</p><p><code>-t</code> TCP协议；<code>-u</code> UDP协议；<code>-l</code> 监听；<code>-r</code> 路由 <code>-n</code> 显示ip地址和端口号</p><p>示例：</p><ul><li><code>netstat -tlun</code> 查看本地监听的端口</li><li><code>netstat -an</code> 查看本机所有的网络连接；</li><li><code>netstat -rn</code> 查看本机路由表；</li></ul></li><li><p><code>setup</code> 配置网络；<code>service network restart</code>重启网络配置才会生效</p></li><li><p><code>mount [-t文件系统] 设备文件名</code> 挂载点</p><div class="language-sh"><pre><code>mount -t iso9660 /dev/sr0 /mnt/cdrom\n</code></pre></div></li><li><p><code>unmount</code> 卸载 <code>umount /mnt/cdrom</code> 卸载光盘</p></li><li><p><code>curl [options] [url]</code></p><p>常用options：</p><ul><li><code>-o</code> 把输出写到该文件中</li><li><code>-I</code> 仅仅返回header</li></ul><p>常用的场景：</p><ul><li><code>curl localhost:2222/getlist</code>：调试请求</li><li><code>curl -I www.taobao.com</code>：查看头部信息</li><li><code>curl -o index.html www.baidu.com</code>：抓取网页，会将index.html下载下来</li></ul></li></ol><h2 id="六、系统管理"><a class="header-anchor" href="#六、系统管理" aria-hidden="true">#</a> 六、系统管理</h2><h3 id="kill-杀死进程"><a class="header-anchor" href="#kill-杀死进程" aria-hidden="true">#</a> kill 杀死进程</h3><p>通过ps指令或jobs指令查看pid，获取pid之后杀死进程</p><ul><li><code>-15</code>：终止程序</li><li><code>-9</code>：尝试强制删除程序</li></ul><p>也可以直接使用<code>kill pid码</code></p><h3 id="top-实时显示进程动态"><a class="header-anchor" href="#top-实时显示进程动态" aria-hidden="true">#</a> top 实时显示进程动态</h3><p><code>top [-pid] id</code> 指定进入id</p><h3 id="alias-别名配置"><a class="header-anchor" href="#alias-别名配置" aria-hidden="true">#</a> alias 别名配置</h3><p><code>alias[别名]=[指令名称]</code> 修改别名</p><p><code>vi /root/.bashrc</code> 定义别名永久生效</p><p><code>unalias 别名</code> 删除别名</p><h3 id="history-历史命令"><a class="header-anchor" href="#history-历史命令" aria-hidden="true">#</a> history 历史命令</h3><p><code>history</code> 显示历史命令</p><p>​ <code>-c</code>清楚 <code>-w</code>把缓存命令写进<code>.bash_history</code><code>/etc/profile</code> 修改历史命令条数 <code>/root/.bash_history</code> 保存在家目录下 调用历史命令</p><ul><li><code>!n</code> 重复第几条命令</li><li><code>!!</code> 重复执行上一条</li><li><code>!字串</code> 重复执行含有该字串的命令</li></ul><h2 id="七、关机开机"><a class="header-anchor" href="#七、关机开机" aria-hidden="true">#</a> 七、关机开机</h2><ul><li><p>服务器连续运行时间： <code>uptime</code></p></li><li><p>重启：<code>rebort</code></p></li><li><p>关机：<code>shutdown</code></p><ul><li><code>now</code> 现在关机 <code>shutdown -h now</code> 现在关机</li><li><code>-h</code> 指定时间关机 <code>shutdown -h 20:30</code> 八点半关机</li><li><code>-r</code> 重启</li><li><code>-c</code> 取消前一个关机</li></ul></li><li><p>系统运行级别</p><p><code>0</code>关机 <code>1</code>单用户 <code>2</code>不完全多用户 <code>3</code>字符界面 <code>4</code>未分配 <code>5</code>图形界面 <code>6</code>重启 <code>id:3:initdefault:</code> 修改系统默认运行级别 <code>runlevel</code> 查询当前运行级别 <code>logout</code> 退出登录</p></li></ul>',28);c.render=function(d,l,c,a,r,t){return e(),o("div",null,[i])};export default c;export{l as __pageData};
