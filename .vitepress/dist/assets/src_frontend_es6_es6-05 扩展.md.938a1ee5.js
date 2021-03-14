import{o as n,c as a,d as s}from"./app.f5909e71.js";const p='{"title":"es6-05 扩展","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、字符串扩展","slug":"一、字符串扩展"},{"level":3,"title":"padStart、padEnd","slug":"padstart、padend"},{"level":2,"title":"二、数字的扩展","slug":"二、数字的扩展"},{"level":2,"title":"三、数组扩展","slug":"三、数组扩展"},{"level":3,"title":"Array.from","slug":"array-from"},{"level":3,"title":"Array.of","slug":"array-of"},{"level":3,"title":"Array.fill","slug":"array-fill"},{"level":2,"title":"四、对象扩展","slug":"四、对象扩展"},{"level":3,"title":"Object.is","slug":"object-is"},{"level":3,"title":"对象浅拷贝","slug":"对象浅拷贝"},{"level":3,"title":"对象深拷贝","slug":"对象深拷贝"}],"relativePath":"src\\\\frontend\\\\es6\\\\es6-05 扩展.md","lastUpdated":1615699077437}',t={},e=s('<h1 id="es6-05-扩展"><a class="header-anchor" href="#es6-05-扩展" aria-hidden="true">#</a> es6-05 扩展</h1><h2 id="一、字符串扩展"><a class="header-anchor" href="#一、字符串扩展" aria-hidden="true">#</a> 一、字符串扩展</h2><p>包含是否的结果都是true或false；</p><ul><li><p><code>includes</code>(str) : 判断是否包含指定的字符串 true|false === indexOf，也可以用于数组；includes是使用全等的；</p></li><li><p><code>startsWith</code>(str) : 判断是否以指定字符串开头</p></li><li><p><code>endsWith</code>(str) : 判断是否以指定字符串结尾</p></li><li><p><code>repeat</code>(count) : 重复指定次数 返回一个新的字符串</p></li></ul><p>javascript 就是由面向对象思想造出来的一个产品 语法是ECMAscript</p><div class="language-js"><pre><code><span class="token keyword">var</span> s1 <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span><span class="token comment">//字面量形式创建一个字符串类型的数据</span>\n</code></pre></div><p>虽然是字面量形式创建的字符串，字面量形式创建的数据也能继承 构造函数创建出来的字符串对象 的特性</p><p>只有对象才有属性和方法</p><p>字面量形式创建的字符串 本质上（底层）也是由 new String() 创建出来的</p><h3 id="padstart、padend"><a class="header-anchor" href="#padstart、padend" aria-hidden="true">#</a> padStart、padEnd</h3><p>（1）接收两个参数，第一个参数为最小长度，第二个参数为补全字符串；</p><div class="language-js"><pre><code><span class="token string">&#39;1&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//返回 &#39;01&#39;</span>\n<span class="token string">&#39;1&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>   <span class="token comment">//返回 &#39;10&#39;</span>\n</code></pre></div><p>（2）如果原字符串等于或大于指定的最小长度，则返回原字符串；</p><div class="language-js"><pre><code><span class="token string">&#39;10&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span>  <span class="token comment">//返回 &#39;10&#39;</span>\n</code></pre></div><p>（3）如果原字符串的长度小于补全字符串的长度，则截去超出位数的补全字符串；</p><div class="language-js"><pre><code><span class="token string">&#39;09-12&#39;</span><span class="token punctuation">.</span><span class="token function">padStart</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// &quot;YYYY-09-12&quot;</span>\n<span class="token string">&#39;09-12&#39;</span><span class="token punctuation">.</span><span class="token function">padEnd</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token string">&#39;YYYY-MM-DD&#39;</span><span class="token punctuation">)</span>    <span class="token comment">// &quot;09-12YYYY-&quot;</span>\n</code></pre></div><h2 id="二、数字的扩展"><a class="header-anchor" href="#二、数字的扩展" aria-hidden="true">#</a> 二、数字的扩展</h2><ul><li><p><code>isFinite</code>(i) : 判断是否是有限大的数</p></li><li><p><code>isNaN</code>(i) : 判断是否是NaN，两个NaN是不等的；</p></li><li><p><code>Number.isInteger</code>(i) : 判断是否是整数</p></li><li><p><code>parseInt</code>(str) : 将字符串转换为对应的数值</p></li><li><p><code>Math.trunc</code>(i) : 直接去除小数部分，必须是纯数字，如果数字带单位，则会是NAN</p></li></ul><h2 id="三、数组扩展"><a class="header-anchor" href="#三、数组扩展" aria-hidden="true">#</a> 三、数组扩展</h2><h3 id="array-from"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from</h3><blockquote><p>将伪数组对象或可遍历对象转换为真数组，需要一个变量来接收</p></blockquote><p><code>Array.from(v,[callback])</code></p><p>Array.from转换对象的时候，键名必须写数字下标， 必须加length长度，否则会失败；</p><p>一个类数组对象，必须要有length，属性名必须是数值，属性名作为数组的索引号，如果不带length，from转换出来的将是空数组；</p><p>Array.from的第二个参数为回调函数，指定返回的数组是什么形式的，参数item,index,arr</p><div class="language-js"><pre><code><span class="token keyword">const</span> cities <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>id<span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">]</span>\n<span class="token keyword">let</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>cities<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>age<span class="token punctuation">}</span></span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>age<span class="token punctuation">)</span>   <span class="token comment">//[18,20] 返回对象中的每一项</span>\n<span class="token comment">//{age} 第二个参数返回数组的每一项，也可以不填写；</span>\n</code></pre></div><p>小括号中代表每一个对象，使用对象解构，将年龄返回出来;如果是返回一个对象，则键名需要以[]中括号形式返回;</p><h3 id="array-of"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of</h3><blockquote><p>将一系列值转换成数组，和new Array传值是一样的</p></blockquote><div class="language-js"><pre><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> v3<span class="token punctuation">)</span>  <span class="token comment">// 将一系列值转换成数组，和new Array传值是一样的；</span>\n<span class="token keyword">var</span> arr <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>  <span class="token comment">// 这个3不是数组的长度，是一个数组；</span>\n</code></pre></div><h3 id="array-fill"><a class="header-anchor" href="#array-fill" aria-hidden="true">#</a> Array.fill</h3><blockquote><p>使用什么来填充</p></blockquote><div class="language-js"><pre><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 将数组填充5个空字符串；fill填写字符；</span>\n</code></pre></div><h2 id="四、对象扩展"><a class="header-anchor" href="#四、对象扩展" aria-hidden="true">#</a> 四、对象扩展</h2><h3 id="object-is"><a class="header-anchor" href="#object-is" aria-hidden="true">#</a> <a href="http://Object.is" target="_blank" rel="noopener noreferrer">Object.is</a></h3><p><code>Object.is(v1, v2)</code></p><p>判断2个数据是否完全相等，两个NaN是相等的，普通判断两个NaN是不相等的；</p><h3 id="对象浅拷贝"><a class="header-anchor" href="#对象浅拷贝" aria-hidden="true">#</a> 对象浅拷贝</h3><p><code>Object.assign(target, source1, source2..)</code></p><p>将源对象的属性复制到目标对象身上，source是源对象；</p><p>浅拷贝修改属性值之后，源对象的值不会被改变，如果是数组或对象，则会被改变；</p><p>需要声明一个空对象再进行拷贝；</p><p>也可以：<code>let obj3 = Object.assign({},obj1,obj2...)</code>常用于合并对象；</p><h3 id="对象深拷贝"><a class="header-anchor" href="#对象深拷贝" aria-hidden="true">#</a> 对象深拷贝</h3><p><code>var obj1 = JSON.parse(JSON.stringify(arr/obj)) </code></p><p>将对象转换成字符串，再将字符串转换成对象，所以需要一个变量来接收，就是一个新的对象；</p><p>数组或对象深拷贝, 函数不能拷贝；</p><p>深拷贝原理：（数组，对象都可用）浅拷贝+递归</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span> <span class="token parameter">obj</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;Object&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span> obj <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&#39;Array&#39;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>  <span class="token comment">//判断数据类型类型  如果是数组则初始一个  []  如果是一个Object则初始一个 {}</span>\n\n    <span class="token comment">//浅拷贝，但是+ 递归思想，就实现了深拷贝</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span> <span class="token keyword">var</span> attr <span class="token keyword">in</span> obj <span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>      <span class="token comment">//判断传入的键值是否是数组或对象</span>\n            result<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepCopy</span><span class="token punctuation">(</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token punctuation">)</span>  <span class="token comment">//如果是对象则再调用一次函数; 实现递归;</span>\n        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n            result<span class="token punctuation">[</span>attr<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>attr<span class="token punctuation">]</span>  <span class="token comment">//将每一天数据输入进对象或数组;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> result\n<span class="token punctuation">}</span>    \n</code></pre></div>',49);t.render=function(s,p,t,o,c,l){return n(),a("div",null,[e])};export default t;export{p as __pageData};
