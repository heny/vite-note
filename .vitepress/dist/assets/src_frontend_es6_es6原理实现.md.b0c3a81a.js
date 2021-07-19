import{o as n,c as s,d as a}from"./app.1237ae02.js";const p='{"title":"ES6 原理实现","description":"","frontmatter":{},"headers":[{"level":2,"title":"Promise A+ 实现","slug":"promise-a-实现"}],"relativePath":"src/frontend/es6/es6原理实现.md","lastUpdated":1626619872956}',t={},o=a('<h1 id="es6-原理实现"><a class="header-anchor" href="#es6-原理实现" aria-hidden="true">#</a> ES6 原理实现</h1><h2 id="promise-a-实现"><a class="header-anchor" href="#promise-a-实现" aria-hidden="true">#</a> Promise A+ 实现</h2><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">resolvePromise</span><span class="token punctuation">(</span><span class="token parameter">promise2<span class="token punctuation">,</span>x<span class="token punctuation">,</span>resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token comment">//判断x是不是promise</span>\n    <span class="token comment">//规范中规定：我们允许别人乱写，这个代码可以实现我们的promise和别人的promise 进行交互</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>promise2 <span class="token operator">===</span> x<span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//不能自己等待自己完成</span>\n        <span class="token keyword">return</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">&#39;循环引用&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token comment">// x是除了null以外的对象或者函数</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span> <span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">let</span> called<span class="token punctuation">;</span><span class="token comment">//防止成功后调用失败</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span><span class="token comment">//防止取then是出现异常  object.defineProperty</span>\n            <span class="token keyword">let</span> then <span class="token operator">=</span> x<span class="token punctuation">.</span>then<span class="token punctuation">;</span><span class="token comment">//取x的then方法 {then:{}}</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> then <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token comment">//如果then是函数就认为他是promise</span>\n                <span class="token comment">//call第一个参数是this，后面的是成功的回调和失败的回调</span>\n                <span class="token function">then</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span><span class="token parameter">y</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">//如果Y是promise就继续递归promise</span>\n                    <span class="token keyword">if</span><span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n                    called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n                    <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span>y<span class="token punctuation">,</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">//只要失败了就失败了</span>\n                    <span class="token keyword">if</span><span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n                    called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n                    <span class="token function">reject</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token comment">//then是一个普通对象，就直接成功即可</span>\n                <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>called<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n            called <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n            <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span><span class="token comment">//x = 123 x就是一个普通值 作为下个then成功的参数</span>\n        <span class="token function">resolve</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Promise</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span> <span class="token punctuation">(</span><span class="token parameter">executor</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">//默认状态是等待状态</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;panding&#39;</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n        <span class="token comment">//存放成功的回调</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token comment">//存放失败的回调</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n        <span class="token keyword">let</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">//this指的是实例</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&quot;resolved&quot;</span><span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n \n        <span class="token punctuation">}</span>\n        <span class="token keyword">let</span> <span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>reason <span class="token operator">=</span> reason<span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&#39;rejected&#39;</span><span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">fn</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">try</span><span class="token punctuation">{</span><span class="token comment">//执行时可能会发生异常</span>\n            <span class="token function">executor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//promise失败了</span>\n        <span class="token punctuation">}</span>\n       \n    <span class="token punctuation">}</span>\n    <span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">onFuiFilled<span class="token punctuation">,</span>onRejected</span><span class="token punctuation">)</span><span class="token punctuation">{</span> \n        <span class="token comment">//防止值得穿透 </span>\n        onFuiFilled <span class="token operator">=</span> <span class="token keyword">typeof</span> onFuiFilled <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">onFuiFilled</span> <span class="token operator">:</span> <span class="token parameter">y</span> <span class="token operator">=&gt;</span> y<span class="token punctuation">;</span>\n        onRejected <span class="token operator">=</span> <span class="token keyword">typeof</span> onRejected <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span> <span class="token operator">?</span> <span class="token function-variable function">onRejected</span> <span class="token operator">:</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token keyword">throw</span> err<span class="token punctuation">;</span><span class="token punctuation">}</span>        \n        <span class="token keyword">let</span> promise2<span class="token punctuation">;</span><span class="token comment">//作为下一次then方法的promise</span>\n       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;resolved&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n           promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n               <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                  <span class="token keyword">try</span><span class="token punctuation">{</span>\n                        <span class="token comment">//成功的逻辑 失败的逻辑</span>\n                        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">onFuiFilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token comment">//看x是不是promise 如果是promise取他的结果 作为promise2成功的的结果</span>\n                        <span class="token comment">//如果返回一个普通值，作为promise2成功的结果</span>\n                        <span class="token comment">//resolvePromise可以解析x和promise2之间的关系</span>\n                        <span class="token comment">//在resolvePromise中传入四个参数，第一个是返回的promise，第二个是返回的结果，第三个和第四个分别是resolve()和reject()的方法。</span>\n                        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span>x<span class="token punctuation">,</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span>\n                  <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token punctuation">}</span> \n               <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>\n           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> \n       <span class="token punctuation">}</span> \n       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;rejected&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">try</span><span class="token punctuation">{</span>\n                        <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token comment">//在resolvePromise中传入四个参数，第一个是返回的promise，第二个是返回的结果，第三个和第四个分别是resolve()和reject()的方法。</span>\n                        <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span>x<span class="token punctuation">,</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>\n\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token punctuation">}</span>\n       <span class="token comment">//当前既没有完成也没有失败</span>\n       <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token string">&#39;pending&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n           promise2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n               <span class="token comment">//把成功的函数一个个存放到成功回调函数数组中</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>onResolvedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">try</span><span class="token punctuation">{</span>\n                            <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">onFuiFilled</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                            <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span>x<span class="token punctuation">,</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                            <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token comment">//把失败的函数一个个存放到失败回调函数数组中</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">try</span><span class="token punctuation">{</span>\n                            <span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token function">onRejected</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                            <span class="token function">resolvePromise</span><span class="token punctuation">(</span>promise2<span class="token punctuation">,</span>x<span class="token punctuation">,</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span>\n                        <span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>\n                            <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span>\n           <span class="token punctuation">}</span><span class="token punctuation">)</span>\n       <span class="token punctuation">}</span>\n       <span class="token keyword">return</span> promise2<span class="token punctuation">;</span><span class="token comment">//调用then后返回一个新的promise</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">catch</span> <span class="token punctuation">(</span>onRejected<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// catch 方法就是then方法没有成功的简写</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> onRejected<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nPromise<span class="token punctuation">.</span><span class="token function-variable function">all</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">//promises是一个promise的数组</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//arr是最终返回值的结果</span>\n        <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 表示成功了多少次</span>\n        <span class="token keyword">function</span> <span class="token function">processData</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            arr<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> data<span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>i <span class="token operator">===</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">resolve</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token function">processData</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> data<span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span> reject<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 只要有一个promise成功了 就算成功。如果第一个失败了就失败了</span>\nPromise<span class="token punctuation">.</span><span class="token function-variable function">race</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">promises</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> promises<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            promises<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span>reject<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 生成一个成功的promise</span>\nPromise<span class="token punctuation">.</span><span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 生成一个失败的promise</span>\nPromise<span class="token punctuation">.</span><span class="token function-variable function">reject</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\nPromise<span class="token punctuation">.</span>defer <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function-variable function">deferred</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> dfd <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    dfd<span class="token punctuation">.</span>promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>  <span class="token punctuation">{</span>\n        dfd<span class="token punctuation">.</span>resolve <span class="token operator">=</span> resolve<span class="token punctuation">;</span>\n        dfd<span class="token punctuation">.</span>reject <span class="token operator">=</span> reject<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> dfd\n<span class="token punctuation">}</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> Promise<span class="token punctuation">;</span>\n</code></pre></div>',3);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
