import{o as n,c as s,d as a}from"./app.dc9dbd0c.js";const t='{"title":"node-10 websocket","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、http","slug":"一、http"},{"level":2,"title":"二、websocket","slug":"二、websocket"},{"level":2,"title":"三、搭建websocket服务器；","slug":"三、搭建websocket服务器；"},{"level":2,"title":"四、互发消息","slug":"四、互发消息"},{"level":3,"title":"如何进入一个房间和离开一个房间","slug":"如何进入一个房间和离开一个房间"},{"level":3,"title":"在房间内发送消息","slug":"在房间内发送消息"},{"level":3,"title":"如何set和get    socket属性","slug":"如何set和get-socket属性"},{"level":3,"title":"离开一个房间","slug":"离开一个房间"},{"level":3,"title":"官方服务器Socket的demo","slug":"官方服务器socket的demo"},{"level":2,"title":"五、聊天室","slug":"五、聊天室"},{"level":2,"title":"六、react连接socket.io","slug":"六、react连接socket-io"},{"level":2,"title":"七、添加在线人数","slug":"七、添加在线人数"}],"relativePath":"src/frontend/node/node-10 websocket.md","lastUpdated":1612089669953}',p={},o=a('<h1 id="node-10-websocket"><a class="header-anchor" href="#node-10-websocket" aria-hidden="true">#</a> node-10 websocket</h1><h2 id="一、http"><a class="header-anchor" href="#一、http" aria-hidden="true">#</a> 一、http</h2><p>HTTP无状态的，服务器不能发送请求给客户端，需要客户端发送请求之后服务端返回响应给客户端，之后会直接断开，不能实现实时推送技术；</p><p>现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源</p><h2 id="二、websocket"><a class="header-anchor" href="#二、websocket" aria-hidden="true">#</a> 二、websocket</h2><ol><li>websocket：双向通讯，客户端可以给服务端，服务端可以给客户端发送消息；</li><li>下载第三方包：npm i socket.io到项目目录；</li></ol><p>websocket使用场景</p><ol><li>社交订阅</li><li>多玩家游戏</li><li>协同合作</li><li>点击流数据</li><li>股票基金等实时报价</li><li>体育实况更新</li><li>基于位置的应用</li><li>在线教育</li><li>多媒体聊天</li></ol><h2 id="三、搭建websocket服务器；"><a class="header-anchor" href="#三、搭建websocket服务器；" aria-hidden="true">#</a> 三、搭建websocket服务器；</h2><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//创建websocket服务</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> io <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;socket.io&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//监听与客户端的连接事件;</span>\nio<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span><span class="token parameter">socket</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>  <span class="token comment">//这个socket是前端传入的变量名;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;服务端连接成功&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//io连接事件可以随意放置; 监听到事件则会给出应答;</span>\n\n<span class="token comment">//这里要用server去监听端口，app.listen监听不能找到socket.io文件；</span>\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><ol><li><p>websocket连接成功之后，会自动创建一个隐藏的js文件，路径：/socket.io/socket.io.js；</p></li><li><p>在静态页面里，创建script标签引入该js文件，引入之后有一个io对象，可以调用一下io对象：let socket = io()；就可以使用socket.emit和socket.on了；</p></li></ol><p>建立的客户端，服务端能记住每个连接成功的客户端，哪个浏览器发送的消息，哪个浏览器接收；</p><h2 id="四、互发消息"><a class="header-anchor" href="#四、互发消息" aria-hidden="true">#</a> 四、互发消息</h2><ol><li><code>socket.emit()</code>；只让自己收到消息；</li><li><code>socket.broadcast.emit()</code>；除了自己其他人都会收到消息，当用户退出最有用，因为不需要给退出的用户得知</li><li><code>io.emit()</code>；都会收到消息；</li></ol><p>第一个参数是方法名，第二个参数是接收到的消息</p><div class="language-js"><pre><code><span class="token comment">//前端发送</span>\nsocket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;fasong&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hahaha&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//后端接收</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;fasong&#39;</span><span class="token punctuation">,</span><span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;huida&#39;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//将数据再发给前台;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">//前端接收</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;huida&#39;</span><span class="token punctuation">,</span><span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//接收到自己发出的消息;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="如何进入一个房间和离开一个房间"><a class="header-anchor" href="#如何进入一个房间和离开一个房间" aria-hidden="true">#</a> 如何进入一个房间和离开一个房间</h3><div class="language-js"><pre><code>io<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token parameter">socket</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人上线了&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 加入指定的房间</span>\n    socket<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;a room&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 用to或者in是一样的, 用emit来给事件</span>\n    io<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string">&#39;a room&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;some event&#39;</span><span class="token punctuation">)</span>\n    <span class="token comment">// 进入多个房间</span>\n    soket<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string">&#39;room1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string">&#39;room2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>\n    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;disconnection&#39;</span><span class="token punctuation">,</span> <span class="token parameter">socket</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;有人离开了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="在房间内发送消息"><a class="header-anchor" href="#在房间内发送消息" aria-hidden="true">#</a> 在房间内发送消息</h3><div class="language-js"><pre><code><span class="token comment">// 不包括发送者</span>\nsoket<span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">to</span><span class="token punctuation">(</span><span class="token string">&#39;roomA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;大家好&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 包括发送者</span>\nio<span class="token punctuation">.</span>sockets<span class="token punctuation">.</span><span class="token function">in</span><span class="token punctuation">(</span><span class="token string">&#39;roomA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;大家好&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><ul><li>给指定用户发送消息</li></ul><div class="language-js"><pre><code>io<span class="token punctuation">.</span>sockets<span class="token punctuation">.</span><span class="token function">socket</span><span class="token punctuation">(</span>socketId<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;唯有你&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="如何set和get-socket属性"><a class="header-anchor" href="#如何set和get-socket属性" aria-hidden="true">#</a> 如何set和get socket属性</h3><div class="language-js"><pre><code>io<span class="token punctuation">.</span>sockets<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 监听设置nickname事件</span>\n    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;set nickname&#39;</span><span class="token punctuation">,</span> <span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 将socket的nickname属性设置为传入参数的name</span>\n        socket<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;nickname&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token comment">// 监听获取nickname事件</span>\n    socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;get nickname&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        socket<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;nickname&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;获取用户&#39;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="离开一个房间"><a class="header-anchor" href="#离开一个房间" aria-hidden="true">#</a> 离开一个房间</h3><div class="language-js"><pre><code>soket<span class="token punctuation">.</span><span class="token function">leave</span><span class="token punctuation">(</span>room<span class="token punctuation">[</span><span class="token punctuation">,</span>callback<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="官方服务器socket的demo"><a class="header-anchor" href="#官方服务器socket的demo" aria-hidden="true">#</a> 官方服务器Socket的demo</h3><div class="language-js"><pre><code><span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">&#39;express&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> socket <span class="token keyword">from</span> <span class="token string">&#39;socket.io&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>app<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> io <span class="token operator">=</span> <span class="token function">socket</span><span class="token punctuation">(</span>server<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nio<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token parameter">socket</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 处理接收的新消息</span>\n  socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;new message&#39;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 通知其他客户端</span>\n    socket<span class="token punctuation">.</span>broadcast<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;new message&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      id<span class="token operator">:</span> <span class="token function">v4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      username<span class="token operator">:</span> socket<span class="token punctuation">.</span>username<span class="token punctuation">,</span>\n      userId<span class="token operator">:</span> socket<span class="token punctuation">.</span>userId<span class="token punctuation">,</span>\n      message<span class="token operator">:</span> data<span class="token punctuation">.</span>message<span class="token punctuation">,</span>\n      type<span class="token operator">:</span> data<span class="token punctuation">.</span>type<span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="五、聊天室"><a class="header-anchor" href="#五、聊天室" aria-hidden="true">#</a> 五、聊天室</h2><div class="language-js"><pre><code><span class="token comment">//前端发送</span>\nsocket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;fasong&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;您好呀server&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nsocket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;/user/list&#39;</span><span class="token punctuation">,</span> <span class="token parameter">list</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\nsocket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;user/modify&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;hny&#39;</span><span class="token punctuation">,</span> <span class="token parameter">result</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 多个参数发送方式</span>\n\n<span class="token comment">//后端接收</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;fasong&#39;</span><span class="token punctuation">,</span> <span class="token parameter">msg</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    io<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;huida&#39;</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;user/modify&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> <span class="token comment">// 接收多个参数方式</span>\n    user<span class="token punctuation">.</span>name <span class="token operator">=</span> name\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;修改成功&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;/user/list&#39;</span><span class="token punctuation">,</span> <span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">callback</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">//前端展示</span>\nsocket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;huida&#39;</span><span class="token punctuation">,</span><span class="token parameter">msg</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    document<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>msg<span class="token operator">+</span><span class="token string">&#39;&lt;br&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="六、react连接socket-io"><a class="header-anchor" href="#六、react连接socket-io" aria-hidden="true">#</a> 六、<a href="http://xn--reactsocket-hw2w6813b.io" target="_blank" rel="noopener noreferrer">react连接socket.io</a></h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token constant">IO</span> <span class="token keyword">from</span> <span class="token string">&#39;socket.io-client&#39;</span>\n<span class="token keyword">const</span> socket <span class="token operator">=</span> <span class="token constant">IO</span><span class="token punctuation">(</span><span class="token string">&#39;ws://localhost:3006&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    path<span class="token operator">:</span> <span class="token string">&#39;/router&#39;</span> <span class="token comment">// 如果需要可以添加地址</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nsocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 页面关闭时记得断开连接</span>\n</code></pre></div><h2 id="七、添加在线人数"><a class="header-anchor" href="#七、添加在线人数" aria-hidden="true">#</a> 七、添加在线人数</h2><div class="language-js"><pre><code><span class="token comment">// 在线用户存储对象</span>\n<span class="token keyword">let</span> onlineUsers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span>\nmodule<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">io</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    io<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;connection&#39;</span><span class="token punctuation">,</span> <span class="token parameter">socket</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 有人上线了</span>\n        socket<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token operator">++</span>i\n        onlineUsers<span class="token punctuation">[</span>socket<span class="token punctuation">.</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> socket\n        \n        socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;disconnect&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 有人离开了</span>\n            <span class="token keyword">delete</span> onlineUsers<span class="token punctuation">[</span>socket<span class="token punctuation">.</span>name<span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n        socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;/user/list&#39;</span><span class="token punctuation">,</span> <span class="token parameter">callback</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token function">callback</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>onlineUsers<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n        <span class="token comment">// 修改昵称</span>\n        socket<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;/user/modify&#39;</span><span class="token punctuation">,</span> <span class="token parameter">nickName</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">delete</span> onlineUsers<span class="token punctuation">[</span>socket<span class="token punctuation">.</span>name<span class="token punctuation">]</span>\n            socket<span class="token punctuation">.</span>name <span class="token operator">=</span> nickName\n            onlineUsers<span class="token punctuation">[</span>nickName<span class="token punctuation">]</span> <span class="token operator">=</span> socket\n            socket<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">修改昵称为：</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>msg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',34);p.render=function(a,t,p,c,e,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
