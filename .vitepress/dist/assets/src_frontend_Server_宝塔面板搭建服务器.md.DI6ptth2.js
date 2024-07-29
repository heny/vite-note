import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CmFZ6rCi.js";const o=JSON.parse('{"title":"宝塔面板搭建服务器","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/Server/宝塔面板搭建服务器.md","filePath":"src/frontend/Server/宝塔面板搭建服务器.md","lastUpdated":1645598277000}'),h={name:"src/frontend/Server/宝塔面板搭建服务器.md"},l=n(`<h1 id="宝塔面板搭建服务器" tabindex="-1">宝塔面板搭建服务器 <a class="header-anchor" href="#宝塔面板搭建服务器" aria-label="Permalink to &quot;宝塔面板搭建服务器&quot;">​</a></h1><h2 id="一、下载软件" tabindex="-1">一、下载软件 <a class="header-anchor" href="#一、下载软件" aria-label="Permalink to &quot;一、下载软件&quot;">​</a></h2><p>putty | xshell：连接远程linux服务器</p><p>winscp | FileZilla： 连接ftp的；</p><p>安装宝塔面板：<a href="https://www.bt.cn/bbs/thread-19376-1-1.html" target="_blank" rel="noreferrer">https://www.bt.cn/bbs/thread-19376-1-1.html</a></p><p>宝塔面板功能：直接在linux系统里面输入bt，会打开菜单，选择对应的指令即可；</p><h2 id="二、上传网站" tabindex="-1">二、上传网站 <a class="header-anchor" href="#二、上传网站" aria-label="Permalink to &quot;二、上传网站&quot;">​</a></h2><ol><li>将vue进行打包操作，并压缩，格式需要是zip的格式；</li><li>添加站点，将域名添加为站点，之后点击进入目录，</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-01.png" alt="image"></p><ol start="3"><li>进入文件目录之后，将压缩好的文件上传并解压，之后就可以访问了；</li></ol><h2 id="三、连接数据库" tabindex="-1">三、连接数据库 <a class="header-anchor" href="#三、连接数据库" aria-label="Permalink to &quot;三、连接数据库&quot;">​</a></h2><ol><li>安装好宝塔面板之后，安装mongodb和pm2</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-02.png" alt="image"></p><ol start="2"><li>在linux系统里面输入mongo，管理mongodb数据库；可以直接通过本地连接进行</li><li>将json文件数据库传入服务器（直接将文件上传上面是不能访问的），之后在linux系统里面使用mongo import将数据库导入，并使用db.collections.find()查询一下，如果有数据，则上传成功了；</li></ol><h2 id="四、本地连接mongodb" tabindex="-1">四、本地连接mongodb <a class="header-anchor" href="#四、本地连接mongodb" aria-label="Permalink to &quot;四、本地连接mongodb&quot;">​</a></h2><ol><li>在宝塔面板将mongodb的端口放开，并在安全里面放行27017端口，在服务器后台也放行端口；</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-03.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-04.png" alt="image"></p><ol start="2"><li>在图形化mongodb软件里面，新建连接并将原有的localhost删除，否则不能连接；</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-05.png" alt="image"></p><h2 id="五、上传基于node的网站" tabindex="-1">五、上传基于node的网站 <a class="header-anchor" href="#五、上传基于node的网站" aria-label="Permalink to &quot;五、上传基于node的网站&quot;">​</a></h2><ol><li>将node的文件夹进行压缩（不要删除node_modules），之后将压缩包上传到宝塔面板上，之后解压；</li><li>安装pm2管理器，并打开pm2管理器</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-06.png" alt="image"></p><ol start="3"><li>点击文件夹，选中上传的node，并输入启动文件名，输入项目名称；</li><li>添加成功之后点击映射，映射到域名上（域名需要在域名解析添加）；</li></ol><h2 id="六、配置nginx反向代理" tabindex="-1">六、配置nginx反向代理 <a class="header-anchor" href="#六、配置nginx反向代理" aria-label="Permalink to &quot;六、配置nginx反向代理&quot;">​</a></h2><p>注意api必须加上，检查api的地方，修改之后记得重启nginx服务器；</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        rewrite</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^.+api/?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">$1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://39.107.127.240:3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 作用和proxyTable差不多  上传时记得删除这句话</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-07.png" alt="image"></p><h2 id="七、nginx常用配置" tabindex="-1">七、nginx常用配置 <a class="header-anchor" href="#七、nginx常用配置" aria-label="Permalink to &quot;七、nginx常用配置&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wyy.heny.vip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 避免非root路径404</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 解决跨域</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /api</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://wyy.heny.vip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 为带hash值的文件配置永久缓存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:css</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">js</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        expires</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        add_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Cache-Control</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ^.+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">404</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ol start="2"><li>解决socket中nginx转发问题：</li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  school.godotdotdot.com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    charset</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> utf-8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://127.0.0.1:3000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $host;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_http_version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Upgrade</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $http_upgrade;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Connection</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;upgrade&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Real-IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Forwarded-For</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_connect_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_read_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        proxy_send_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 600</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    error_page</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   500</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 502</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 503</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 504</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  /50x.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /50x.html</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>nginx：try_file常用配置：<a href="https://www.hi-linux.com/posts/53878.html" target="_blank" rel="noreferrer">https://www.hi-linux.com/posts/53878.html</a></p><p>总结笔记：<a href="http://jsanntq.cn/2020/04/07/Nginx/" target="_blank" rel="noreferrer">http://jsanntq.cn/2020/04/07/Nginx/</a></p><h2 id="八、配置https" tabindex="-1">八、配置https <a class="header-anchor" href="#八、配置https" aria-label="Permalink to &quot;八、配置https&quot;">​</a></h2><ol><li>到阿云搜索ssl，之后云开通ssl，免费型的可以使用https一个二级域名；</li><li>配置了https的域名，域名头部访问就不再是一个不安全的标示了；</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-08.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-09.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-10.png" alt="image"></p><ol start="2"><li>进入ssl控制台，进行下载文件，下载nginx的，绑定的域名如果需要更换可以进行吊销，之后重新购买；</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-11.png" alt="image"></p><ol start="3"><li>打开宝塔面板，将下载好的key和pem代码复制进去；</li></ol><p><img src="https://notecdn.hrhe.cn/images/server-01_%E5%AE%9D%E5%A1%94%E9%9D%A2%E6%9D%BF%E6%90%AD%E5%BB%BA%E6%9C%8D%E5%8A%A1%E5%99%A8-12.png" alt="image"></p><h2 id="九、添加网站" tabindex="-1">九、添加网站 <a class="header-anchor" href="#九、添加网站" aria-label="Permalink to &quot;九、添加网站&quot;">​</a></h2><ol><li>在宝塔面板配置之后，还得在域名解析上面解析一个二级域名</li></ol>`,45),t=[l];function p(e,k,r,E,d,F){return a(),i("div",null,t)}const c=s(h,[["render",p]]);export{o as __pageData,c as default};
