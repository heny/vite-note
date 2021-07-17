import{o as n,c as a,d as s}from"./app.e9024871.js";const t='{"title":"html","description":"","frontmatter":{},"headers":[{"level":2,"title":"html","slug":"html"},{"level":3,"title":"语义化的好处","slug":"语义化的好处"},{"level":3,"title":"图片下面空白距离清除方法","slug":"图片下面空白距离清除方法"},{"level":3,"title":"清除浮动方法","slug":"清除浮动方法"},{"level":3,"title":"BFC的特性","slug":"bfc的特性"},{"level":3,"title":"bfc解决的问题","slug":"bfc解决的问题"},{"level":3,"title":"h5新增的特性","slug":"h5新增的特性"},{"level":3,"title":"css3新增的特性","slug":"css3新增的特性"},{"level":3,"title":"垂直居中方法","slug":"垂直居中方法"},{"level":3,"title":"回流和重绘","slug":"回流和重绘"},{"level":2,"title":"js","slug":"js"},{"level":3,"title":"数据类型各类","slug":"数据类型各类"},{"level":3,"title":"检测数据类型","slug":"检测数据类型"},{"level":3,"title":"new操作符","slug":"new操作符"},{"level":3,"title":"斐波那契","slug":"斐波那契"},{"level":3,"title":"数组常用方法","slug":"数组常用方法"},{"level":3,"title":"继承","slug":"继承"},{"level":3,"title":"闭包","slug":"闭包"},{"level":3,"title":"垃圾回收机制","slug":"垃圾回收机制"},{"level":3,"title":"event loop","slug":"event-loop"},{"level":3,"title":"防抖函数","slug":"防抖函数"},{"level":3,"title":"节流函数","slug":"节流函数"},{"level":3,"title":"跨域","slug":"跨域"},{"level":3,"title":"从url输入到页面展现到底发生了什么","slug":"从url输入到页面展现到底发生了什么"},{"level":3,"title":"前端常见攻击方式","slug":"前端常见攻击方式"},{"level":3,"title":"网站优化方案","slug":"网站优化方案"},{"level":3,"title":"对象遍历的方法","slug":"对象遍历的方法"},{"level":3,"title":"缓存","slug":"缓存"},{"level":3,"title":"实现一个call","slug":"实现一个call"},{"level":3,"title":"实现一个apply","slug":"实现一个apply"},{"level":3,"title":"实现一个bind","slug":"实现一个bind"},{"level":3,"title":"es6常用方法","slug":"es6常用方法"},{"level":3,"title":"Promise","slug":"promise"},{"level":2,"title":"Vue","slug":"vue"},{"level":3,"title":"vue组件传值","slug":"vue组件传值"},{"level":3,"title":"vue生命周期","slug":"vue生命周期"},{"level":3,"title":"路由守卫","slug":"路由守卫"},{"level":3,"title":"路由实现方式：","slug":"路由实现方式："},{"level":3,"title":"Vuex","slug":"vuex"},{"level":3,"title":"设置key和不设置key的区别","slug":"设置key和不设置key的区别"},{"level":3,"title":"Vue逻辑复用方法","slug":"vue逻辑复用方法"}],"relativePath":"src/frontend/other-note/面试复习.md","lastUpdated":1625017283000}',e={},p=s('<h2 id="html"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h2><h3 id="语义化的好处"><a class="header-anchor" href="#语义化的好处" aria-hidden="true">#</a> 语义化的好处</h3><ol><li>没有css也能呈现很好的页面</li><li>提高代码可读性</li><li>提高用户体验</li><li>对seo有帮助</li></ol><h3 id="图片下面空白距离清除方法"><a class="header-anchor" href="#图片下面空白距离清除方法" aria-hidden="true">#</a> 图片下面空白距离清除方法</h3><ol><li>图片转块</li><li>设置 vertical-align</li><li>父元素设置font-size 0</li></ol><h3 id="清除浮动方法"><a class="header-anchor" href="#清除浮动方法" aria-hidden="true">#</a> 清除浮动方法</h3><ol><li>父元素加高度</li><li>浮动元素加overflow 属性</li><li>加一个空的块， 添加样式clear: both</li><li>给父元素加浮动</li></ol><h3 id="bfc的特性"><a class="header-anchor" href="#bfc的特性" aria-hidden="true">#</a> BFC的特性</h3><ol><li>内部的标签会在垂直方向一个接一个的放置</li><li>垂直方向上的距离由margin决定，同一个bfc的两个相邻标签的margin会发生重叠</li><li>每个标签的左外边距与包含块的左边界相接触（从左至右），即使浮动标签也是如此</li><li>bfc区域的不会与float标签区域重叠</li><li>计算bfc的高度时，浮动子标签也参与计算</li><li>bfc就是一个隔离的独立容器，容器里面的子标签不会影响到外面的标签</li></ol><h3 id="bfc解决的问题"><a class="header-anchor" href="#bfc解决的问题" aria-hidden="true">#</a> bfc解决的问题</h3><ol><li>外边距折叠</li><li>自适应两栏或三栏布局</li><li>防止字体环绕</li><li>清除浮动</li><li>margin塌陷问题</li></ol><h3 id="h5新增的特性"><a class="header-anchor" href="#h5新增的特性" aria-hidden="true">#</a> h5新增的特性</h3><ol><li>简洁的主体结构</li><li>语义化标签</li><li>增强的表单元素</li><li>音频视频</li><li>canvas画面</li><li>svg</li><li>地理位置</li><li>本地存储</li><li>离线缓存</li><li>拖拽api</li><li>web workers</li><li>服务器发送事件</li></ol><h3 id="css3新增的特性"><a class="header-anchor" href="#css3新增的特性" aria-hidden="true">#</a> css3新增的特性</h3><ol><li>选择器</li><li>盒模型，盒阴影</li><li>背景和边框</li><li>文字效果</li><li>2d/3d转换</li><li>动画</li><li>多列布局</li><li>用户界面</li><li>圆角</li><li>语音</li></ol><h3 id="垂直居中方法"><a class="header-anchor" href="#垂直居中方法" aria-hidden="true">#</a> 垂直居中方法</h3><ol><li>绝对定位 + 相对定位，top 50%, left 50%,之后margin left/top 各种一半</li><li>绝对定位 + 相对定位 之后四个方位0，然后margin auto</li><li>利用flex布局</li><li>利用grid布局</li></ol><h3 id="回流和重绘"><a class="header-anchor" href="#回流和重绘" aria-hidden="true">#</a> 回流和重绘</h3><p>回流：布局或属性需要改变就叫回流 重绘：当节点需要更改外观而不会影响布局的，叫作重绘 回流一定重绘，重绘不一定回流 回流：</p><ul><li>改变window大小</li><li>改变字体</li><li>添加或删除样式</li><li>文字改变</li><li>定位或浮动</li><li>盒模型</li></ul><p>减少重绘与回流</p><ul><li>使用translate替换top</li><li>使用visibility替换display: none</li></ul><h2 id="js"><a class="header-anchor" href="#js" aria-hidden="true">#</a> js</h2><h3 id="数据类型各类"><a class="header-anchor" href="#数据类型各类" aria-hidden="true">#</a> 数据类型各类</h3><p>基本数据类型：undefined、null、boolean、string、number、symbol、bigint 基本包装类型：string、number、boolean 复杂数据类型：array、object、function、math、regexp</p><h3 id="检测数据类型"><a class="header-anchor" href="#检测数据类型" aria-hidden="true">#</a> 检测数据类型</h3><p>instanceof Object.prototype.toString.call typeof constructor <code>__proto__</code></p><h3 id="new操作符"><a class="header-anchor" href="#new操作符" aria-hidden="true">#</a> new操作符</h3><ol><li>创建了一个空对象</li><li>将构造函数的作用域赋给新对象（因此this就指向了这个新对象）</li><li>执行构造函数中的代码</li><li>返回新对象</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">var</span> fn <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n  obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> fn<span class="token punctuation">.</span>prototype\n  <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> result <span class="token keyword">instanceof</span> <span class="token class-name">Object</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="斐波那契"><a class="header-anchor" href="#斐波那契" aria-hidden="true">#</a> 斐波那契</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span><span class="token punctuation">(</span>n <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">||</span> n <span class="token operator">===</span> <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fn</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="数组常用方法"><a class="header-anchor" href="#数组常用方法" aria-hidden="true">#</a> 数组常用方法</h3><p>改变原数组：push、pop、shift、unshift、splice、sort、reverse 其他方法：concat、join、indexOf、include、flat <strong>常用迭代方法</strong>：every、some、forEach、map、filter、reduce 转变真数组：Array.from、[].slice.call(arguments)、Array.prototype.slice.call(arguments)</p><h3 id="继承"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><ol><li>原型链接继承</li></ol><div class="language-js"><pre><code><span class="token class-name">B</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="2"><li>构造函数式继承</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token punctuation">}</span>\n</code></pre></div><ol start="3"><li>组合式继承</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token constant">A</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token punctuation">}</span>\n<span class="token class-name">B</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> <span class="token constant">B</span>\n</code></pre></div><ol start="4"><li>原型式继承</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Create</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n  <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> obj<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;hh&#39;</span><span class="token punctuation">}</span>\n<span class="token keyword">var</span> obj2 <span class="token operator">=</span> <span class="token function">Create</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n</code></pre></div><ol start="5"><li>寄生式继承</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">copyObj</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> clone <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n  clone<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n  <span class="token keyword">return</span> clone\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="6"><li>寄生式组合式继承</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token function">Son</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Son</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">=</span> Parent<span class="token punctuation">;</span>\n</code></pre></div><ol start="7"><li>extends</li></ol><h3 id="闭包"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h3><p>闭包是在函数创建的时候，让函数打包带走的根据函数内的外部引用来过滤作用域剩下的链，它是在函数创建时生成的作用域链的子集，是打包的外部环境，eval无法分析内容，一般是把整个作用域打包（尽量不要使用eval，避免保存过多的无用变量）；作用域链只会包含外部函数变量，不包含本身</p><p>闭包是在返回一个函数时，为了把环境保存下来，创建的一个快照，对作用域链做了tree shking，只留下必要的闭包链，保存在堆里，作为对象的[[scope]]属性，让函数不管走到哪，都可以随时随地的访问外部环境，在执行这个函数时，会利用这个快照，恢复作用域链</p><h3 id="垃圾回收机制"><a class="header-anchor" href="#垃圾回收机制" aria-hidden="true">#</a> 垃圾回收机制</h3><p>标记清除：声名时被引用，之后使用完标记清除 引用清除：使用记数的方法，如果这个数没有加过，就清除</p><h3 id="event-loop"><a class="header-anchor" href="#event-loop" aria-hidden="true">#</a> event loop</h3><p>event loop是浏览器或node的一种解决javascript单线程运行不会阻塞的一种机制，也是异步的原理 由于js是单线程的，一些高耗时操作就带来了进程阻塞的问题，为了解决这个问题，js有两种任务执行方式，分为同步模式和异步模式 在异步模式下，创建异步任务主要分为宏任务和微任务 宏任务：script、setTimeout、setInterval、setImmediate 微任务：promise、process.nextTick、mutationObserver</p><p>event loop执行顺序如下：</p><ol><li>首先执行同步代码，这属于宏任务</li><li>当执行完所有同步代码后，执行栈为空，查询是否有事件队列需要执行</li><li>执行所有微任务</li><li>当执行完所有微任务后，如有必要会渲染页面</li><li>然后开始下一轮event loop，执行宏任务中的异步代码，也就是setTimeout中的回调函数</li></ol><h3 id="防抖函数"><a class="header-anchor" href="#防抖函数" aria-hidden="true">#</a> 防抖函数</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">func<span class="token punctuation">,</span> wait<span class="token operator">=</span><span class="token number">500</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span> <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>\n    timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">func</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> wait<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="节流函数"><a class="header-anchor" href="#节流函数" aria-hidden="true">#</a> 节流函数</h3><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">throttle</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> wait</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> pre <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> now <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>now <span class="token operator">-</span> pre <span class="token operator">&gt;=</span> wait<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span>\n      pre <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="跨域"><a class="header-anchor" href="#跨域" aria-hidden="true">#</a> 跨域</h3><p>浏览器中的同源策略指的是：协议、域名、端口号相同，如果不同就会产生跨域 浏览器为了给用户提供一个安全的浏览环境，因此禁止跨域 页面中有几个标签的引入是不受同源策略影响的，如img、script、link</p><p>实现跨域： jsonp cors webpack nginx postMessage document.domain <a href="http://window.name" target="_blank" rel="noopener noreferrer">window.name</a> location.hash websocket 也可以通过修改hosts文件解决当前跨域</p><h3 id="从url输入到页面展现到底发生了什么"><a class="header-anchor" href="#从url输入到页面展现到底发生了什么" aria-hidden="true">#</a> 从url输入到页面展现到底发生了什么</h3><ol><li><p>dns解析，将域名解析成ip地址</p></li><li><p>tcp连接，tcp进行三次握手</p></li><li><p>浏览器发送http请求</p></li><li><p>服务器处理请求并返回http报文</p></li><li><p>浏览器解析渲染页面</p></li><li><p>解析html，生成dom树，解析css，生成cssom树</p></li><li><p>将dom树和cssom树进行结合，生成渲染树</p></li><li><p>根据生成的渲染树，进行回流，得到节点的几何信息</p></li><li><p>根据几何信息，得到节点的绝对像素</p></li><li><p>将像素发给GPU，展示在页面上 6.断开连接，tcp四次挥手</p></li></ol><h3 id="前端常见攻击方式"><a class="header-anchor" href="#前端常见攻击方式" aria-hidden="true">#</a> 前端常见攻击方式</h3><ul><li>XSS攻击 ---- 跨站脚本攻击，向页面中插入恶意脚本执行</li><li>CSRF攻击 --- 跨站请求伪造，冒充用户发送请求</li><li>Sql注入 ---- 在用户输入框输入sql命令进行攻击</li><li>html脚本注入</li></ul><h3 id="网站优化方案"><a class="header-anchor" href="#网站优化方案" aria-hidden="true">#</a> 网站优化方案</h3><ul><li>合并、压缩、混淆html/css/js文件</li><li>nginx开启gzip压缩</li><li>图片资源使用cdn地址</li><li>图标做base64处理</li><li>样式表放首部、js放尾部</li><li>设置缓存（强缓存和协商缓存，提高加载速度）</li><li>link或者src添加rel属性，设置prefetch或preload可预加载</li><li>spa项目通过import或者require做路由按需加载</li><li>服务端渲染ssr，加快首屏渲染</li><li>页面使用骨架屏</li><li>图片使用懒加载</li></ul><h3 id="对象遍历的方法"><a class="header-anchor" href="#对象遍历的方法" aria-hidden="true">#</a> 对象遍历的方法</h3><ul><li>使用for..in</li><li>使用Object.keys</li><li>使用Object.enteries</li></ul><h3 id="缓存"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><p>缓存分为 memory cache和disk cache，内存缓存和硬盘缓存 会先读取内存，再读硬盘，几乎所有的网络请求都会被浏览器放进memory cache，关闭浏览器就会失效，之后读取disk cache</p><p>disk cache又分为强制缓存和协商缓存（也叫对比缓存） 强制缓存是指客户端请求后，会先访问缓存数据库看缓存是否存在，如果存在直接返回，不存在则请求服务器，响应后再缓存 强制缓存直接减少请求次数，提升最大的缓存策略，可以造成强制缓存的字段是cache-control和expires cache-control可以设置的字段：max-age、no-cache、no-store、public、private</p><p>当服务器要请求资源时</p><ol><li>调用service woker的fetch事件响应</li><li>查看memory cache</li><li>查看disk cache <ul><li>如果有强制缓存未失效，则使用，不请求服务器，这里状态码全是200</li><li>如果有强制缓存已失效，则查看协商缓存，比较后确定304还是200</li></ul></li></ol><h3 id="实现一个call"><a class="header-anchor" href="#实现一个call" aria-hidden="true">#</a> 实现一个call</h3><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myCall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">||</span> window<span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>\n  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="实现一个apply"><a class="header-anchor" href="#实现一个apply" aria-hidden="true">#</a> 实现一个apply</h3><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myApply</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  context <span class="token operator">=</span> <span class="token function">Object</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token operator">||</span> window<span class="token punctuation">;</span>\n  context<span class="token punctuation">.</span>fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token keyword">let</span> result <span class="token operator">=</span> args <span class="token operator">?</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">:</span> context<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">delete</span> context<span class="token punctuation">.</span>fn<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> result<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="实现一个bind"><a class="header-anchor" href="#实现一个bind" aria-hidden="true">#</a> 实现一个bind</h3><div class="language-js"><pre><code><span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">myBind</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">context<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> that <span class="token operator">=</span> <span class="token keyword">this</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">F</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">that</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">,</span> <span class="token operator">...</span>arguments<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token function">that</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>context<span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token operator">...</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="es6常用方法"><a class="header-anchor" href="#es6常用方法" aria-hidden="true">#</a> es6常用方法</h3><ul><li>let、const</li><li>解构赋值</li><li>箭头函数</li><li>...扩展运算符</li><li>异步处理 Promise、async、generator</li><li>问号链，双问号</li><li>symbol、Map、Set</li></ul><h3 id="promise"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h3><p>实例方法：</p><ul><li>then、catch、finally 静态方法： resolve、reject、all、race、try</li></ul><h2 id="vue"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> Vue</h2><h3 id="vue组件传值"><a class="header-anchor" href="#vue组件传值" aria-hidden="true">#</a> vue组件传值</h3><p>props/$emit $children/$parent ref $attrs/$listenrs eventBus vuex localStorage/sessionStorage inject/provide</p><h3 id="vue生命周期"><a class="header-anchor" href="#vue生命周期" aria-hidden="true">#</a> vue生命周期</h3><p>beforeCreated created beforeMounted mounted beforeUpdate updated beforeDestory destroyed actived deactived</p><h3 id="路由守卫"><a class="header-anchor" href="#路由守卫" aria-hidden="true">#</a> 路由守卫</h3><p>全局守卫 beforeEach afterEach</p><p>路由守卫 beforeEnter</p><p>组件守卫 beforeRouteEnter beforeRouteUpdate beforeRouteLeave 动态路由管理权限渲染路由：addRoutes</p><h3 id="路由实现方式："><a class="header-anchor" href="#路由实现方式：" aria-hidden="true">#</a> 路由实现方式：</h3><p>hash模式：利用hashChange监听url的变化 history模式 利用h5的history.pushState和history.replaceState特性；</p><h3 id="vuex"><a class="header-anchor" href="#vuex" aria-hidden="true">#</a> Vuex</h3><p>state mutations actions getters model</p><p>Vue.extend进行插件开发</p><h3 id="设置key和不设置key的区别"><a class="header-anchor" href="#设置key和不设置key的区别" aria-hidden="true">#</a> 设置key和不设置key的区别</h3><p>不设key，新旧对象进行头尾两端的相互比较 设key，除了头尾两端之外，还会从key生成的对象index进行查找匹配，比不设key更高效</p><h3 id="vue逻辑复用方法"><a class="header-anchor" href="#vue逻辑复用方法" aria-hidden="true">#</a> Vue逻辑复用方法</h3><p>添加全局方法或属性，直接挂载到vue实例上 directive 自定义指令 mixin 混入 Vue.component 注册组件</p>',106);e.render=function(s,t,e,o,l,c){return n(),a("div",null,[p])};export default e;export{t as __pageData};
