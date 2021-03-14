import{o as n,c as s,d as a}from"./app.f5909e71.js";const p='{"title":"node-01 http nodejs","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、HTTP协议","slug":"一、http协议"},{"level":2,"title":"二、HTTP请求","slug":"二、http请求"},{"level":2,"title":"三、HTTP响应","slug":"三、http响应"},{"level":2,"title":"四、命令行","slug":"四、命令行"},{"level":2,"title":"五、环境变量(了解)","slug":"五、环境变量-了解"},{"level":2,"title":"六、Node 简介","slug":"六、node-简介"},{"level":2,"title":"七、Node特点:","slug":"七、node特点"},{"level":2,"title":"八、Node环境安装","slug":"八、node环境安装"},{"level":2,"title":"九、node搭建服务器","slug":"九、node搭建服务器"},{"level":2,"title":"十、fs读取文件内容","slug":"十、fs读取文件内容"},{"level":2,"title":"十一、事件订阅与发布  模块：events","slug":"十一、事件订阅与发布-模块：events"}],"relativePath":"src/frontend/node/node-01 http nodejs.md","lastUpdated":1615699077470}',t={},e=a('<h1 id="node-01-http-nodejs"><a class="header-anchor" href="#node-01-http-nodejs" aria-hidden="true">#</a> node-01 http nodejs</h1><h2 id="一、http协议"><a class="header-anchor" href="#一、http协议" aria-hidden="true">#</a> 一、HTTP协议</h2><ol><li>什么是协议</li></ol><p>HTTP(Hyper Text Transfer Protocol,超文本传输协议)，HTTP是一个基于请求与响应模式的、无状态的、应用层的协议；http用于从web服务器(如:apache/nginx/iis)传输超文本到本地客户机(如:浏览器)的传送协议。HTTP是无状态的，服务器其实是不知道谁访问的它；</p><p>简单来说HTTP协议就是计算机与计算机之间通信的标准。</p><ol start="2"><li>http协议的原理：[重点]</li></ol><p>●建立连接：客户端与web服务器建立连接，服务端给出响应就可以建立连接了。</p><p>●发送请求：客户端按照协议的要求通过连接向服务端发送自己的请求。</p><p>●给出应答：服务端按照客户端的要求给出应答，把结果（HTML 文件）返回给客户端。</p><p>●关闭连接：客户端接到应答后关闭连接</p><ol start="3"><li>常见的协议有：http[s]、smtp[发邮件]、pop3[收邮件]、ftp[文件上传下载]</li></ol><p>DNS[域名解析服务器]服务器：<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com</a>[域名]与服务器ip对应；</p><p>了解：</p><p>HTTP1.0用的是非持久连接，客户端必须为每一个待请求的对象建立并维护一个新的连接。因为同一个页面可能存在多个对象，所以非持久连接可能使一个页面的下载变得十分缓慢，而且这种短连接增加了网络传输的负担。</p><p>HTTP1.1引入了持久连接，允许在同一个连接中存在多次数据请求和响应，即在持久连接情况下，服务器在发送完响应后并不关闭TCP连接，而客户端可以通过这个连接继续请求其他对象。</p><h2 id="二、http请求"><a class="header-anchor" href="#二、http请求" aria-hidden="true">#</a> 二、HTTP请求</h2><ol><li><p>HTTP请求由三部分组成，分别是：请求行、消息报头、请求正文[可为空]</p><p>请求行以请求方法开头，以空格分开，后面跟着请求的URL和协议的版本；</p><p>格式：Method Request-URI HTTP-Version CRLF（回车或换行）</p><p>GET /demo.html HTTP/1.1</p></li></ol><p>消息报头格式：host:www.baidu.com</p><h2 id="三、http响应"><a class="header-anchor" href="#三、http响应" aria-hidden="true">#</a> 三、HTTP响应</h2><ol><li><p>HTTP响应也是由三个部分组成，分别是：状态行、消息报头、响应正文</p><p>状态行格式为：HTTP-Version Status-Code Reason-Phrase CRLF</p><p>​ HTTP/1.1 200 OK</p><pre><code>HTTP-Version      服务器HTTP协议的版本；\n\nStatus-Code        服务器发回的响应状态代码；\n\nReason-Phrase    状态代码的文本描述。\n</code></pre></li></ol><p>常见的消息报头有：content-type：text/html</p><p>​ content-length: 传输字符的长度；</p><ol start="2"><li>状态码</li></ol><p>状态代码由三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：</p><p>1xx：指示信息--------请求已接收，继续处理</p><p>2xx：成功-------------请求已被成功接收、理解、接受</p><p>3xx：重定向-----------要完成请求必须进行更进一步的操作</p><p>4xx：客户端错误------请求有语法错误或请求无法实现</p><p>5xx：服务器端错误----服务器未能实现合法的请求</p><p>常见状态代码、状态描述、说明：</p><p>200 OK 客户端请求成功</p><p>400 Bad Request 客户端请求有语法错误，不能被服务器所理解</p><p>401 Unauthorized 请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用</p><p>403 Forbidden 服务器收到请求，但是拒绝提供服务</p><p>404 Not Found 请求资源不存在，eg：输入了错误的URL</p><p>500 Internal Server Error 服务器发生不可预期的错误</p><p>503 Server Unavailable 服务器当前不能处理客户端的请求，一段时间后可能恢复正常</p><p>Telnet模拟HTTP的GET请求：（了解）</p><p>（1）打开cmd控制面板</p><p>（2）telnet 192.168.1.100 80；</p><p>（3）ctrl+] 打开本地回显功能，之后直接回车；</p><p>（4）输入GET请求：</p><p>请求行：get /test.php HTTP/1.1</p><p>请求头：host:localhost 访问本地；</p><p>请求头信息与请求正文之间必须空格；</p><h2 id="四、命令行"><a class="header-anchor" href="#四、命令行" aria-hidden="true">#</a> 四、命令行</h2><ol><li><p>命令行窗口、CMD窗口 ：</p><p>可以执行一些内部命令，可以执行一些exe程序，同时也能打开文件</p></li><li><p>运行方式：</p></li></ol><p>（1）开始菜单 win+r 打开输入cmd；</p><p>（2）快捷方式：在当前目录下 shift+右键-&gt;在此处打开命令窗口</p><p>（3）资源管理器地址栏直接输入cmd</p><ol start="3"><li>cmd常用的指令：</li></ol><p>cls 清屏，dir 目录，cd 进入指定目录，tab 快速实例，md 创建目录，ctrl+c 终止当前命令；</p><p>D:冒号切换盘符；一个点表示当前目录，两个点表示上一级目录；</p><p>​</p><h2 id="五、环境变量-了解"><a class="header-anchor" href="#五、环境变量-了解" aria-hidden="true">#</a> 五、环境变量(了解)</h2><p>（1）全局变量，将目录的绝对路径加&amp;复制到Path(路径)最后面，之后可以使用cmd命令打开相应的软件；</p><p>（2）环境变量有用户级变量和系统级变量；</p><p>（3）系统刚刚安装完，有时候用户的变量当中是没有path的。 变量名不区分大小写；</p><p>（4）设置好path以后，重启cmd，你新配置的环境变量才生效</p><h2 id="六、node-简介"><a class="header-anchor" href="#六、node-简介" aria-hidden="true">#</a> 六、Node 简介</h2><ol><li>了解：</li></ol><p>（1）Node.js是一个能够在服务器端（后端）运行JavaScript的开放源代码、跨平台JavaScript运行环境，直接运行js文件是无法运行的，Node 环境就是运行javascript代码（ 运行ECMAscript ）</p><p>（2）Node采用Google开发的V8引擎运行js代码，使用事件驱动、非阻塞和异步I/O模型等技术来提高性能，可优化应用程序的传输量和规模。</p><p>（3）Node.js的核心模块包括文件系统I/O、网络（HTTP、TCP、UDP、DNS、TLS/SSL等）、二进制数据流、加密算法、数据流等等。Node模块的API形式简单，降低了编程的复杂度。</p><p>（4）使用框架可以加速开发。常用的框架有Express.js、Socket.IO和Connect等Node.js的程序可以在Windows、Linux、Unix、Mac OS X等服务器上运行；</p><p>（5）I/O (Input/Output) I/O操作指的是对磁盘的读写操作</p><p>（6）node.js 不属于前端，它属于后端，它就是一个环境</p><p>（7）node.js操作的是服务器上的文件，不是本地的文件；</p><p><img src="https://notecdn.heny.vip/images/node-01_http_nodejs-01.png" alt="image"></p><ol start="2"><li>重点：</li></ol><p>（1）通过Node环境，js代码可以在服务器端运行</p><p>（2）Node实现了ECMAscript的标准（语法），Node是没有DOM和BOM</p><p>（3）Node中可以使用ECMAscript提供的所有的内置对象</p><p>​ String Number Boolean Math Date RexExp Function Object Array</p><p>（4）封装出了其它的api方法（函数）</p><h2 id="七、node特点"><a class="header-anchor" href="#七、node特点" aria-hidden="true">#</a> 七、Node特点:</h2><ol><li>node.js是基于模块化开发的，使用require()方法调用模块；</li><li>非阻塞异步回调，err（错误优先思想）；</li><li>所有的操作都基于事件驱动（事件订阅与发布机制）；</li><li>node.js是单线程的；</li></ol><p>node的特点： ①模块化，②事件机制，③非阻塞异步回调；</p><h2 id="八、node环境安装"><a class="header-anchor" href="#八、node环境安装" aria-hidden="true">#</a> 八、Node环境安装</h2><ol><li><p>它自己会把以下两个相关的路径加到path里面</p><p>C:\\Users\\Administrator\\AppData\\Roaming\\npm</p><p>C:\\Program Files\\nodejs</p></li></ol><p>nodejs的api开发手册:<a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/</a></p><p>node -v 查看node版本</p><p>cmd面板输入node 加相应的js文件可以打开node服务器；</p><p>node自动补齐：npm i -g typings</p><p>启用：在项目所在目录(在这里是NodeSnippet文件夹中)增加一个名为jsconfig.json的空文件。</p><h2 id="九、node搭建服务器"><a class="header-anchor" href="#九、node搭建服务器" aria-hidden="true">#</a> 九、node搭建服务器</h2><ol><li>引入HTTP模块</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   \n <span class="token comment">//引入http模块[该模块是node内置模块]，用来创建服务器；</span>\n</code></pre></div><ol start="2"><li>创建web服务器</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>；\n</code></pre></div><ol start="3"><li>监听</li></ol><div class="language-js"><pre><code>    <span class="token comment">//注意：node是基于事件驱动</span>\n    <span class="token comment">//为http对象绑定一个request事件（请求）</span>\nserver<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//设置响应头 的状态码及文件编码</span>\n    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token comment">//如果不设置writeHeader则不会编码标签；</span>\n    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;hello&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//给前端返回数据，而且返回的必须是一个字符串类型的数据 或 Buffer（二进制）</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//返回响应完成了，end只能写一次；</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>回调函数里面的两个形参：require请求，response响应；</p><p>（4）、设置监听端口</p><p>server.listen(8088)；//8080是端口号</p><p>计算机端口默认有0-65535之间，其中小于1024的端口被计算机常用服务占用；</p><p>js文件有变动，需要cmd重新执行一下命令；</p><p>res.writeHead();设置头信息，如果不设置不会编码标签；</p><p>res.write()；页面上添加内容，可以多个；</p><p>res.end()；响应完成，一个页面end只能写一次；</p><p>server.listen()；设置监听端口；</p><p>req.url 获取path路径；</p><p>req.method 获取提交方式，需要大写</p><h2 id="十、fs读取文件内容"><a class="header-anchor" href="#十、fs读取文件内容" aria-hidden="true">#</a> 十、fs读取文件内容</h2><p><code>fs.readFile(path[, options], callback)</code></p><p>__dirname:获取当前文件所在绝对路径</p><p>__filename:获取当前文件的完整绝对路径</p><p>options可以放一个对象：对象值填写encoding:&#39;utf-8&#39;，则输入的数据不需要.toString()也能看懂；</p><div class="language-js"><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//引入fs模块</span>\nfs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>__dirname<span class="token operator">+</span><span class="token string">&#39;a.txt&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;错误信息&#39;</span><span class="token punctuation">)</span>      直接抛出错误；\n</code></pre></div><h2 id="十一、事件订阅与发布-模块：events"><a class="header-anchor" href="#十一、事件订阅与发布-模块：events" aria-hidden="true">#</a> 十一、事件订阅与发布 模块：events</h2><p>参考地址：<a href="https://www.jianshu.com/p/0aacfec05046" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/0aacfec05046</a></p><p>事件机制：发布和订阅功能</p><ol><li>定义：</li></ol><p>（1）大多数 Node.js 核心 API 构建于惯用的异步事件驱动架构，其中某些类型的对象（又称触发器，Emitter）会触发命名事件来调用函数（又称监听器，Listener）。</p><p>（2）所有能触发事件的对象都是EventEmitter类的实例，有一个eventEmitter.on()函数，用于将一个或多个函数绑定到命名事件上，事件的命名通常是驼峰式的字符串；</p><p>（3）EventEmitter对象触发一个事件时，所有绑定在该事件上的函数都会被同步调用；</p><p>.on()：注册监听器，.emit()；用于触发事件；</p><p>创建一个事件监听：</p><div class="language-js"><pre><code>①、引入events模块\n<span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n②、实例化类\n<span class="token keyword">const</span> myEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">eventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n③、监听事件\nmyEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监听中.....&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n④、触发监听的事件\nmyEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//event是自定义的事件名；</span>\n</code></pre></div><ol start="2"><li>传参和this指向</li></ol><p>事件的this指向监听器所绑定的实例，如果是箭头函数的this指向外层this；</p><p>在emit方法括号里紧跟着事件传参，在on监听事件回调函数形参来接收，可以传多个；</p><pre><code>     如：eventEmitter.emit(&#39;event&#39;,&#39;a&#39;,&#39;b&#39;)\n</code></pre><ol start="3"><li>异步vs同步 EventEmitter是同步顺序执行所有监听器的，所以必须确保事件排序正确；</li></ol><p>使用 setImmediate() 或 process.nextTick() 切换到异步模式：</p><ol start="4"><li>事件仅调用一次；</li></ol><p>eventEmitter.on() 注册监听器时，会每次emit触发命名事件都会调用一次，增加一次；</p><p>可以使用 eventEmitter.once() 可以注册最多可调用一次的监听器；当事件被触发时，监听器会注销再调用，只能调用一次；</p><ol start="5"><li>错误事件</li></ol><p>当eventEmitter实例出错时，需要抛出错误</p><p>注册错误事件：myEmitter.on(&#39;error&#39;,(err)=&gt;{console.log(&#39;错误信息&#39;)})</p><p>抛出错误：myEmitter.emit(&#39;error&#39;,new Error(&#39;错误信息&#39;))；</p><p>如果不注册错误事件会造成node.js崩溃；</p><ol start="6"><li>EventEmitter类</li></ol><p>由events模块定义；</p><p>当新增监听器时，会触发newListener事件，当移除已存在的事件监听器时，则触发removeListener；</p><p>newListener事件：</p><p>ES5面向对象创建订阅发布的例子：</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Even</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 声明一个空对象，用于存储值;</span>\n  <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// on用来监听一个事件，并传入两个参数，一个是事件名，一个是回调函数;</span>\n<span class="token class-name">Even</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventname<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// 判断该函数里的事件名是否存在</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 如果存在则新增一个方法;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 如果不存在则使用数组方式存入一个事件;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// emit用来触发一个事件,一个是触发的事件名,第二个是传入的参数;</span>\n<span class="token class-name">Even</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">emit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventname<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token comment">// emit用来监听一个事件的触发</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">// 如果有该事件，则循环该事件并执行该事件</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',139);t.render=function(a,p,t,o,c,l){return n(),s("div",null,[e])};export default t;export{p as __pageData};
