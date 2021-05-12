import{o as n,c as s,d as a}from"./app.b352b1d4.js";const p='{"title":"es6-04 promise、async","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、Promise","slug":"一、promise"},{"level":3,"title":"介绍","slug":"介绍"},{"level":3,"title":"计算机工作原理（了解）","slug":"计算机工作原理（了解）"},{"level":3,"title":"Promise的三种状态","slug":"promise的三种状态"},{"level":3,"title":"创建Promise实例","slug":"创建promise实例"},{"level":3,"title":"Promise的实例方法","slug":"promise的实例方法"},{"level":3,"title":"静态方法","slug":"静态方法"},{"level":2,"title":"二、async","slug":"二、async"},{"level":2,"title":"三、Generator（状态遍历器）","slug":"三、generator（状态遍历器）"},{"level":3,"title":"Generator函数的特点:","slug":"generator函数的特点"}],"relativePath":"src/frontend/es6/es6-04 Promise、async.md","lastUpdated":1620663667382}',t={},o=a('<h1 id="es6-04-promise、async"><a class="header-anchor" href="#es6-04-promise、async" aria-hidden="true">#</a> es6-04 promise、async</h1><h2 id="一、promise"><a class="header-anchor" href="#一、promise" aria-hidden="true">#</a> 一、Promise</h2><h3 id="介绍"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><ol><li>Promise对象实际上是一个许诺器，里面放将来要发生的事，这些事之间有依赖关系，且通常是异步； ajax、定时器、I/O操作都是阻塞的，需要时间； 2. Promise对象主要是解决“回调地狱”问题的，实际上是以同 步流程来解决异步回调问题的；</li><li>promise是一个构造函数，用来生成promise实例；</li></ol><h3 id="计算机工作原理（了解）"><a class="header-anchor" href="#计算机工作原理（了解）" aria-hidden="true">#</a> 计算机工作原理（了解）</h3><p>I/O操作：I(input) O(output) 输入输出；</p><p>计算机主要是由三部分组成：CPU、内存、硬盘；</p><p>在输入的时候，内存开始工作，之后解析到cpu，如果内存小了，输入的东西多了，就会开始变卡，所以可以适当的加大内存，当然cpu也需要支持才行；当输出保存之后就会存入到硬盘，所以如果没保存则数据就会丢 失；</p><p><img src="https://notecdn.heny.vip/images/es6-04%20%E8%A7%A3%E5%86%B3%E5%BC%82%E6%AD%A5%E9%97%AE%E9%A2%98-01.png" alt="image"></p><h3 id="promise的三种状态"><a class="header-anchor" href="#promise的三种状态" aria-hidden="true">#</a> Promise的三种状态</h3><ul><li><p><code>pendding</code>：初始化状态（刚刚许诺的状态）；</p></li><li><p><code>fullfilled</code> || <code>resolved</code>：完成的状态</p></li><li><p><code>rejected</code>：失败的状态（拒绝）；</p></li></ul><h3 id="创建promise实例"><a class="header-anchor" href="#创建promise实例" aria-hidden="true">#</a> 创建Promise实例</h3><p>使用new关键字创建Promise实例，Promise接受一个回调函数，该回调函数两个形参，一个成功的回调函数和一个失败的回调函数；</p><p>两个形参分别对应then方法的两个回调函数，通过调用对应的形参执行对应的回调函数，通过括号可以发送参数；</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolved<span class="token punctuation">,</span>rejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">resolved</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="promise的实例方法"><a class="header-anchor" href="#promise的实例方法" aria-hidden="true">#</a> Promise的实例方法</h3><ol><li><p><code>then</code>：接收Promise的状态，包含两个方法，一个成功的回调函数和一个可选的失败回调函数；支持链式调用</p><p>then方法传参：在第一个then方法中return，第二个then方法需要一个形参来接收；</p><div class="language-js"><pre><code><span class="token keyword">var</span> prom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolved<span class="token punctuation">,</span>rejected</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    <span class="token function">resolved</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nprom<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">222</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> data\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p><code>catch</code>：用来捕获错误使用，如果不使用then方法的第二个回调函数，即使用catch来捕获</p></li><li><div class="language-js"><pre><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p><code>finally</code>：指定不管promise对象最后状态如何，都会执行的操作，在执行完then方法和catch方法之后，则执行finally方法，finally方法不接受任何参数，与状态无关，主要是用于执行完成后的回调；</p><div class="language-js"><pre><code>promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p><code>all</code>：用于将多个Promise实例，包装成一个新的Promise实例，all方法接收一个数组，里面填写实例，（all方法可以不是数组，但必须具有Iterator接口）</p><div class="language-js"><pre><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span>p2<span class="token punctuation">,</span>p3<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><p>p是promise实例，p的状态由p1,p2,p3决定，如果后面三者都是fulfilled，则p的状态是fullfilled，此时三者的结果组成一个数组返回给p，如果有一个是rejected，则p是rejected，返回值是第一个reject的实例返回值，会调用p的catch来捕获；</p></li><li><p><code>race</code>：与all相反，同样是包装多个promise实例，只要有一个实例率先改变状态，p的状态就跟着改变； 利用race()可以实现请求超时处理：</p></li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">ajaxWithTime</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url<span class="token punctuation">,</span>ms</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n    <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;request timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>ms<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="静态方法"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3><ul><li><code>Promise.resolve()</code>，主要是为了将现有的对象转为promise对象，括号里面传入需要转换的对象；</li><li><code>Promise.reject()</code></li><li><code>Promise.all()</code> 全部为true则为true，否则为false</li><li><code>Promise.race()</code> 相当于赛跑，只要一个成功或失败即可</li><li><code>Promise.any()</code> 一个成功就成功，所有拒绝才拒绝</li><li><code>Promise.try()</code></li></ul><p>静态方法使用:</p><div class="language-js"><pre><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;出错了&#39;</span><span class="token punctuation">)</span>\n<span class="token comment">// 等同于</span>\n<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;出错了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>解决控制台烦人的Promise.reject报错</strong></p><p>建议在全局增加一个对unhandledrejection的监听，用来监听Promise error的；</p><div class="language-js"><pre><code>window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;unhandledrejection&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;捕获到异常：&#39;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>可取消的Promise</strong></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> cancel<span class="token punctuation">;</span>\n  <span class="token keyword">const</span> wait <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function-variable function">cancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  wait<span class="token punctuation">.</span>cancel <span class="token operator">=</span> cancel<span class="token punctuation">;</span>\n  <span class="token keyword">return</span> wait<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="二、async"><a class="header-anchor" href="#二、async" aria-hidden="true">#</a> 二、async</h2><ol><li><p>不需要像Generator去调用next方法，遇到await等待当前的异步操作完成才往下执行</p></li><li><p>async执行之后返回一个Promise对象，可以使用then方法进行下一步操作</p></li><li><p>async取代Generator函数的星号*，await取代Generator的yield</p></li><li><p>语意上更为明确，使用简单</p></li><li><p>通常结合Promise一起使用,</p></li><li><p>resolved小括号传参到await，作为await的返回值；</p></li><li><p>优雅处理await的错误问题</p></li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">to</span> <span class="token operator">=</span> <span class="token parameter">promise</span> <span class="token operator">=&gt;</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> data<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token comment">// 使用时：</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> <span class="token punctuation">[</span>err<span class="token punctuation">,</span> data<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">to</span><span class="token punctuation">(</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span>\n    <span class="token operator">...</span><span class="token punctuation">.</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>应用案例： 1.指定时间后返回数据</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">asyncPrint</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span>ms</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">timeout</span><span class="token punctuation">(</span>ms<span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>注意：</p><ul><li>如果Promise里面没有需要执行的函数，则可以不需要new，直接使用Promise.resolve()；括号里面可以传参，需要awite来接收，否则返回的将是Promise的resolved状态，而不是响应结果；</li><li>await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中</li><li>多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发</li><li>async函数不能使用.then方法捕获错误，可以使用try....catch捕获</li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">b</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="7"><li><code>for await of</code>，解决多个await</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Gen</span> <span class="token punctuation">(</span><span class="token parameter">time</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">test</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token function">Gen</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Gen</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">Gen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">]</span>\n  <span class="token keyword">for</span> <span class="token keyword">await</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 这个await等待的是每个项</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// 1575536194608 2000</span>\n<span class="token comment">// 1575536194608 100</span>\n<span class="token comment">// 1575536195608 3000</span>\n</code></pre></div><p>注意：forEach循环是不会等待await结果的</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>\n    arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">await</span> item <span class="token comment">// await是不会等待的，需要使用老式的for循环才管用</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>链式调用Promise</p><div class="language-js"><pre><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token punctuation">{</span>length<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">promise<span class="token punctuation">,</span> i<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 等待上一个promise</span>\n  <span class="token keyword">await</span> promise\n  <span class="token comment">// 返回一个新的promise,每次循环都是promise</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="三、generator（状态遍历器）"><a class="header-anchor" href="#三、generator（状态遍历器）" aria-hidden="true">#</a> 三、Generator（状态遍历器）</h2><blockquote><p>ES6提供的解决异步编程的方案之一</p></blockquote><p>generator函数中间用一个*隔开：<code>function * fn(){};</code></p><h3 id="generator函数的特点"><a class="header-anchor" href="#generator函数的特点" aria-hidden="true">#</a> Generator函数的特点:</h3><ul><li><p>function 与函数名之间有一个星号</p></li><li><p>调用generator函数返回一个对象指针，不会执行函数里面的逻辑代码；</p></li><li><p>内部用yield表达式来定义不同的状态</p></li><li><p>声明函数并用函数调用next方法，开始执行函数内部的代码，遇到yield停止，next执行完返回一个对象：{value:yield后面的表达式结果,done:false/true}；</p><p>value：如果yield后面是函数，函数没有return则为undefined；当generator函数没有yield之后，done就为true；（可以利用done为true来判断函数不执行）；</p></li><li><p>再次调用next方法会从上一次停止时的yield处开始，直到最后；</p></li><li><p>next传参会返回到上一个yield暂停的地方；</p></li></ul><p>generator函数可以使用for..of来遍历，也有iterator接口，调用的next()方法，其实就是iterator的方法；遍历对象是声明的函数；</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;开始执行&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token string">&#39;hellow&#39;</span><span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;正在执行----&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">yield</span> <span class="token string">&#39;hellow form my world&#39;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;结束&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> sur <span class="token operator">=</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sur<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sur<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sur<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>yield表达式只能generator函数使用，yield*函数名，可以遍历另外一个generator函数；</p><p>注意：当调用next方法时传参内容会作为启动时yield语句的返回值。</p><ol start="2"><li>ajax的原理</li></ol><p><img src="https://notecdn.heny.vip/images/es6-04%20%E8%A7%A3%E5%86%B3%E5%BC%82%E6%AD%A5%E9%97%AE%E9%A2%98-02.png" alt="image"></p><p>generator结合ajax</p><p><img src="https://notecdn.heny.vip/images/es6-04%20%E8%A7%A3%E5%86%B3%E5%BC%82%E6%AD%A5%E9%97%AE%E9%A2%98-03.png" alt="image"></p>',54);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
