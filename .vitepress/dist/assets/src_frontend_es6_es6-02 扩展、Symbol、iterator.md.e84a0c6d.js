import{o as n,c as s,d as a}from"./app.246f1876.js";const p='{"title":"es6-02 扩展、Symbol、iterator","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、扩展运算符： ...","slug":"一、扩展运算符："},{"level":3,"title":"数组的使用","slug":"数组的使用"},{"level":3,"title":"对象的使用","slug":"对象的使用"},{"level":2,"title":"三、symbol（符号、代号、象征）","slug":"三、symbol（符号、代号、象征）"},{"level":3,"title":"Symbol特点","slug":"symbol特点"},{"level":3,"title":"Symbol的实例方法","slug":"symbol的实例方法"},{"level":3,"title":"11个内部的Symbol值","slug":"_11个内部的symbol值"},{"level":2,"title":"四、iterator（遍历器）","slug":"四、iterator（遍历器）"}],"relativePath":"src/frontend/es6/es6-02 扩展、Symbol、iterator.md","lastUpdated":1615699077436}',t={},o=a('<h1 id="es6-02-扩展、symbol、iterator"><a class="header-anchor" href="#es6-02-扩展、symbol、iterator" aria-hidden="true">#</a> es6-02 扩展、Symbol、iterator</h1><h2 id="一、扩展运算符："><a class="header-anchor" href="#一、扩展运算符：" aria-hidden="true">#</a> 一、扩展运算符： ...</h2><blockquote><p>使用arguments无法进行forEach遍历，...参数可以进行遍历，是真正的数组</p></blockquote><p><code>...变量名</code>，类似于<code>arguments</code>，是真正的数组</p><ul><li>...作为形参使用：，必须写到形参末尾，形参前面没传的参数全部追加到...参数中；</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//args为[2,3,4];</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">// 2,3,4</span>\n<span class="token punctuation">}</span>\n<span class="token function">fn</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//原生实现方法</span>\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">const</span> ext <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">,</span>ext<span class="token punctuation">)</span> <span class="token comment">//a:1,b:2,ext:[3,4]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="数组的使用"><a class="header-anchor" href="#数组的使用" aria-hidden="true">#</a> 数组的使用</h3><ul><li>数组的展开：函数传参数的时候（实参）等同于apply；</li><li>复制数组 arr2=[...arr1] 修改arr2不影响arr1。</li><li>拼接数组 arr=[...arr1,...arr2]</li><li>将字符串转数组 arr=[...str]</li></ul><ol start="2"><li><p>将一个字符串转换为数组的方法：</p><ul><li><code>str.split(&#39;&#39;)</code></li><li><code>[...str]</code></li><li><code>Array.from(str)</code></li></ul></li><li><p>数组的展开应用场景</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">fn3</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\n    <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>arr<span class="token punctuation">)</span> <span class="token comment">//输入和下行一样；</span>\n    <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span>arr<span class="token punctuation">)</span>   <span class="token comment">//调用fn函数,null为不改变fn函数中的this</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> <span class="token string">&#39;----&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token function">fn3</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">)</span>\n</code></pre></div></li></ol><h3 id="对象的使用"><a class="header-anchor" href="#对象的使用" aria-hidden="true">#</a> 对象的使用</h3><ol><li><p>解构赋值</p><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span><span class="token operator">...</span>z<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>a<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\nx <span class="token comment">// 1</span>\ny <span class="token comment">// 2</span>\nz <span class="token comment">// { a: 3, b: 4 }</span>\n\n<span class="token comment">// 解构赋值要求等号右边是一个对象，如果是undefined或null会报错，因为它们无法转为对象;</span>\n<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token operator">...</span>z<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token comment">// 出错</span>\n<span class="token keyword">let</span> <span class="token punctuation">{</span><span class="token operator">...</span>z<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">undefined</span> <span class="token comment">//出错</span>\n\n<span class="token comment">// 解构赋值是浅拷贝, 不能复制对象的原型属性</span>\n<span class="token keyword">let</span> o <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\no<span class="token punctuation">.</span>z <span class="token operator">=</span> <span class="token number">3</span>\n<span class="token keyword">let</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> <span class="token operator">...</span>newObj<span class="token punctuation">}</span> <span class="token operator">=</span> o\n<span class="token keyword">let</span> <span class="token punctuation">{</span>y<span class="token punctuation">,</span> z<span class="token punctuation">}</span> <span class="token operator">=</span> newObj\nx <span class="token comment">// 1</span>\ny <span class="token comment">// undefined</span>\nz <span class="token comment">// 3</span>\n</code></pre></div><p>解构赋值...必须在最后面，否则报错；</p></li><li><p>拷贝对象</p><div class="language-js"><pre><code><span class="token keyword">let</span> z <span class="token operator">=</span> <span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span>b<span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>z <span class="token punctuation">}</span>\n<span class="token comment">// 等同于</span>\n<span class="token keyword">let</span> n <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>z<span class="token punctuation">)</span>\nn <span class="token comment">//{a:3,b:4}</span>\n\n<span class="token comment">// 如果是空对象, 没有任何效果</span>\n<span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> a<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">}</span>\n<span class="token comment">// {a:1}</span>\n\n<span class="token punctuation">{</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token number">.1</span><span class="token punctuation">}</span> <span class="token comment">//{}    等同于: { ...Object(1) }</span>\n<span class="token punctuation">{</span><span class="token operator">...</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token comment">// {}</span>\n<span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">undefined</span><span class="token punctuation">}</span> <span class="token comment">// {}</span>\n<span class="token punctuation">{</span><span class="token operator">...</span><span class="token keyword">null</span><span class="token punctuation">}</span> <span class="token comment">// {}</span>\n</code></pre></div></li><li><p>扩展运算符只是复制了对象的实例属性，没有原型属性，如果需要原型属性可以使用下面的方法</p><div class="language-js"><pre><code><span class="token comment">// 写法一</span>\n<span class="token keyword">const</span> clone1 <span class="token operator">=</span> <span class="token punctuation">{</span>\n    __proto__<span class="token operator">:</span> Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>obj\n<span class="token punctuation">}</span>\n<span class="token comment">// 写法二</span>\n<span class="token keyword">const</span> clone2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>\n    Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    obj\n<span class="token punctuation">)</span>\n<span class="token comment">// 写法三</span>\n<span class="token keyword">const</span> clone3 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>\n    Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptors</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n<span class="token comment">// __proto__属性在非浏览器的环境不一定部署，推荐使用二和三</span>\n\n</code></pre></div></li><li><p>扩展运算符放置的位置</p><div class="language-js"><pre><code><span class="token comment">// 如果自定义属性, 放在扩展运算符后面, 则扩展运算符内部的同名属性会被覆盖</span>\n<span class="token keyword">let</span> ao <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>a<span class="token punctuation">,</span> x<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">}</span>\n<span class="token comment">// 如果放在前面, 就相当于是默认赋值了</span>\n<span class="token keyword">let</span> ao <span class="token operator">=</span> <span class="token punctuation">{</span>x<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>y<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token operator">...</span>a<span class="token punctuation">}</span>\n</code></pre></div></li><li><p>深拷贝</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>list<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;hh&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;mm&#39;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj<span class="token punctuation">,</span>list<span class="token operator">:</span><span class="token punctuation">[</span><span class="token operator">...</span>obj<span class="token punctuation">.</span>list<span class="token punctuation">]</span><span class="token punctuation">}</span> 引用类型需要继续扩展\n</code></pre></div></li><li><p>合并对象</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> obj2 <span class="token operator">=</span> <span class="token punctuation">{</span>age<span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">}</span>\n<span class="token keyword">let</span> obj3 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>obj1<span class="token punctuation">,</span><span class="token operator">...</span>obj2<span class="token punctuation">}</span>\n<span class="token comment">// 等同于</span>\n<span class="token keyword">let</span> ab <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> obj1<span class="token punctuation">,</span> obj2<span class="token punctuation">)</span>\n</code></pre></div></li><li><p>扩展运算符后面跟表达式</p><div class="language-js"><pre><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    b<span class="token operator">:</span><span class="token number">2</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 数组放表达式</span>\n<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token operator">...</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;b&#39;</span>\n<span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token comment">// [1]</span>\n</code></pre></div></li></ol><h2 id="三、symbol（符号、代号、象征）"><a class="header-anchor" href="#三、symbol（符号、代号、象征）" aria-hidden="true">#</a> 三、symbol（符号、代号、象征）</h2><blockquote><p>主要解决命名冲突问题，主要目的是作为对象属性的标识符</p></blockquote><p>(已有的原始数据类型：String, Number, boolean, null, undefined, 对象)</p><h3 id="symbol特点"><a class="header-anchor" href="#symbol特点" aria-hidden="true">#</a> Symbol特点</h3><ul><li><p>Symbol属性值是唯一的，两个symbol是不相等的，主要是解决命名冲突问题</p></li><li><p>直接创建两个相同值的symbol在比较时是不相等的，如果需要相等可以使用symbol.for(key)创建</p><p>原理是使用给定的key进行搜索，并返回对应的key，如果没有则创建</p></li><li><p>Symbol值不能与其他数据进行计算，包括同字符串拼串</p></li><li><p>Symbol不支持for in, for of遍历；</p></li><li><p>Symbol值作为对象属性名时，不能用点运算符，需要用中括号包起来；</p></li><li><p>symbol不能使用new，否则会报错，symbol是一个原始类型的值，不是对象；</p></li><li><p>Symbol函数可以接受一个字符串作为参数；</p></li><li><p>Symbol可以使用es6提供的Reflect.ownKeys()来获取到一个对象中的Symbol属性名</p></li></ul><div class="language-js"><pre><code><span class="token keyword">let</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>s1<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">&#39;hhh&#39;</span>\n<span class="token punctuation">}</span>\nobj<span class="token punctuation">[</span>s1<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;hehe&#39;</span>\nobj<span class="token punctuation">[</span><span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;xixi&#39;</span> <span class="token comment">// 这样是获取不到的;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>s1<span class="token punctuation">]</span><span class="token punctuation">)</span>\n</code></pre></div><p>Symbol作为对象属性的好处：只能使用Symbol变量来访问，不能通过Symbol来访问</p><h3 id="symbol的实例方法"><a class="header-anchor" href="#symbol的实例方法" aria-hidden="true">#</a> Symbol的实例方法</h3><ol><li><code>Symbol.for()</code></li></ol><p>使用Symbol.for创建symbol值时，会先在全局搜索是否有创建过传入的字符串，如果有则直接返回，如果没有，则创建新的；</p><p>全局包括：当前页面、iframe、service worker；</p><div class="language-js"><pre><code><span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;haha&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> s2 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;haha&#39;</span><span class="token punctuation">)</span>\ns1 <span class="token operator">===</span> s2 <span class="token comment">// false</span>\n\n<span class="token keyword">const</span> s3 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;xixi&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> s4 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;xixi&#39;</span><span class="token punctuation">)</span>\ns3 <span class="token operator">===</span> s4 <span class="token comment">// true</span>\n</code></pre></div><ol start="2"><li><code>Symbol.keyFor()</code></li></ol><p>传入symbol变量返回创建时的标识，只能是使用Symbol.for创建的才可以返回，使用Symbol直接创建的是无法返回的；</p><div class="language-js"><pre><code><span class="token keyword">const</span> s5 <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">&#39;lison&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> s6 <span class="token operator">=</span> Symbol<span class="token punctuation">.</span><span class="token function">for</span><span class="token punctuation">(</span><span class="token string">&#39;hh&#39;</span><span class="token punctuation">)</span>\nSymbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s5<span class="token punctuation">)</span> <span class="token comment">// undefined</span>\nSymbol<span class="token punctuation">.</span><span class="token function">keyFor</span><span class="token punctuation">(</span>s6<span class="token punctuation">)</span> <span class="token comment">// hh</span>\n</code></pre></div><h3 id="_11个内部的symbol值"><a class="header-anchor" href="#_11个内部的symbol值" aria-hidden="true">#</a> 11个内部的Symbol值</h3><ol><li><p><code>Symbol.hasInstance</code> 调用instanceof时触发</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>hasInstance<span class="token punctuation">]</span> <span class="token punctuation">(</span><span class="token parameter">other</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>other<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">}</span> <span class="token keyword">instanceof</span> <span class="token operator">&lt;</span>any<span class="token operator">&gt;</span>obj<span class="token punctuation">)</span> <span class="token comment">// 当使用instanceof时会首先调用Symbol.hasInstance方法</span>\n</code></pre></div></li><li><p><code>Symbol.isConcatSpreadable</code> concat不扁平化</p><div class="language-js"><pre><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [1,2,3,4]</span>\narr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>isConcatSpreadable<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [[1,2],1,2] </span>\n<span class="token comment">// 使用了该属性就不会被扁平化了</span>\n</code></pre></div></li><li><p><code>Symbol.species</code> 创建延伸实例</p></li><li><p><code>Symbol.match</code> 调用match时会调用该方法</p></li><li><p><code>Symbol.replace</code></p></li><li><p><code>Symbol.search</code></p></li><li><p><code>Symbol.split</code></p></li><li><p><code>Symbol.iterator</code></p></li><li><p><code>Symbol.toPromitive</code></p></li><li><p><code>Symbol.toStringTag</code></p></li><li><p><code>Symbol.unscopables</code></p></li></ol><p>es6官网地址：<a href="https://es6.ruanyifeng.com/#docs/symbol" target="_blank" rel="noopener noreferrer">https://es6.ruanyifeng.com/#docs/symbol</a></p><h2 id="四、iterator（遍历器）"><a class="header-anchor" href="#四、iterator（遍历器）" aria-hidden="true">#</a> 四、iterator（遍历器）</h2><p>概念：是一种接口机制，为各种不同的数据结构提供统一的访问机制；</p><p>作用：为各种数据结构，提供一个统一的、简便的访问接口，使得数据结构的成员能够按某种次序排列</p><p>ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of使用，使用方法和for...in一样；</p><p>支持iterator接口的数据：</p><p>Array、arguments、String、set容器、map容器；</p><p>遍历对象可以将对象转数组</p><div class="language-js"><pre><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> value<span class="token punctuation">]</span> <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> \n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>value<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>工作原理[了解]:</p><p>①创建一个指针对象，指向数据结构的起始位置。</p><p>②第一次调用next方法，指针自动指向数据结构的第一个成员</p><p>③接下来不断调用next方法，指针会一直往后移动，直到指向最后一个成员</p><p>④每调用next方法返回的是一个包含value和done的对象，{value: 当前成员的值,done: 布尔值}</p><p>⑤value表示当前成员的值，done对应的布尔值表示当前的数据的结构是否遍历结束。</p><p>⑥当遍历结束的时候返回的value值是undefined，done值为true</p><div class="language-js"><pre><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token parameter">ary</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span>\n        <span class="token function-variable function">next</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> i <span class="token operator">&gt;</span> ary<span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token punctuation">{</span>value<span class="token operator">:</span>ary<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span>done<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span> <span class="token operator">:</span> <span class="token punctuation">{</span>value<span class="token operator">:</span>ary<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">,</span>done<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">var</span> nexts <span class="token operator">=</span> <span class="token function">init</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nexts<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nexts<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nexts<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nexts<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>nexts<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',45);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
