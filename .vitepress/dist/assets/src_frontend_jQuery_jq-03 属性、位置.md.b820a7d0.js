import{o as n,c as s,d as a}from"./app.246f1876.js";const t='{"title":"jq-03 属性、位置","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、属性操作","slug":"一、属性操作"},{"level":3,"title":"attr和prop的区别","slug":"attr和prop的区别"},{"level":2,"title":"二、类名操作","slug":"二、类名操作"},{"level":2,"title":"三、文本内容","slug":"三、文本内容"},{"level":2,"title":"四、css样式","slug":"四、css样式"},{"level":2,"title":"五、位置","slug":"五、位置"},{"level":2,"title":"六、尺寸","slug":"六、尺寸"},{"level":2,"title":"七、节点","slug":"七、节点"},{"level":3,"title":"创建","slug":"创建"},{"level":3,"title":"添加节点","slug":"添加节点"},{"level":3,"title":"包裹节点","slug":"包裹节点"},{"level":3,"title":"克隆节点","slug":"克隆节点"},{"level":3,"title":"删除节点","slug":"删除节点"},{"level":2,"title":"十一、筛选(方法)","slug":"十一、筛选-方法"},{"level":3,"title":"父元素相关","slug":"父元素相关"},{"level":3,"title":"兄弟节点","slug":"兄弟节点"},{"level":2,"title":"十二、自定义动画","slug":"十二、自定义动画"},{"level":2,"title":"高频面试题","slug":"高频面试题"}],"relativePath":"src/frontend/jQuery/jq-03 属性、位置.md","lastUpdated":1615699077464}',p={},o=a('<h1 id="jq-03-属性、位置"><a class="header-anchor" href="#jq-03-属性、位置" aria-hidden="true">#</a> jq-03 属性、位置</h1><h2 id="一、属性操作"><a class="header-anchor" href="#一、属性操作" aria-hidden="true">#</a> 一、属性操作</h2><ul><li><code>.attr()</code>; 传一个参数为获取，两个为设置；</li><li><code>removeAttr()</code>； 删除属性；</li><li><code>.prop()</code>；传一个为获取，两个为设置；</li><li><code>removeProp()</code>；删除属性；</li></ul><p>如果需要设置多少属性，可以添加一个对象；</p><h3 id="attr和prop的区别"><a class="header-anchor" href="#attr和prop的区别" aria-hidden="true">#</a> attr和prop的区别</h3><ol><li>prop添加的自定义属性在html页面上是没有的，比如index属性。</li><li>对于布尔类型的属性来说，应该使用prop；</li><li>prop只能删除自定义的属性，不能删除自带的属性；</li><li>在jQuery1.6之后，对于checked、selected、disabled这类boolean类型的属性来说，应该使用prop方法。</li></ol><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//checked</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//true</span>\n\n<span class="token comment">// 设置属性</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;:checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// 获取属性</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;:checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&#39;checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 返回true或者false</span>\n</code></pre></div><p>全选案例：</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;label :checkbox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">,</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">//点击全选，让div下的所有input选项都被选中，值和全选按钮一样；</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div input:checked&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token comment">//如果被选中的长度和所有input的长度相等，则让全选按钮被选中；</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;label :checkbox&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;label input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">prop</span><span class="token punctuation">(</span><span class="token string">&quot;checked&quot;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="二、类名操作"><a class="header-anchor" href="#二、类名操作" aria-hidden="true">#</a> 二、类名操作</h2><ul><li><p><code>addClass()</code>；添加类名，多个用空格隔开，不会去掉原有的；</p></li><li><p><code>removeClass()</code>；删除类名，填写指定删除类名；</p></li><li><p><code>toggleClass()</code>；有则删除，没有则添加，常用于点击事件；</p></li><li><p><code>hasClass(&quot;on&quot;)</code>； 是否有on的类名的元素，有返回true，没有返回false，可以做为判断，判断没有就添加，判断没有就添加；</p></li></ul><h2 id="三、文本内容"><a class="header-anchor" href="#三、文本内容" aria-hidden="true">#</a> 三、文本内容</h2><ul><li><p><code>html()</code>； 获取文本内容，传内容为设置新内容；类似于innerHTML；</p></li><li><p><code>text()</code>； 获取文本内容，传内容为设置新内容；类似于innerText；</p></li><li><p><code>val()</code>； 获取input默认值；传内容设置新内容；</p></li><li><p><code>val([])</code>；根据value值选中表单复选框或单选框；中括号填写value值来选中，</p></li></ul><p>选中select时，可以直接在val框填写选中项，多选时，多个项填写到数组中；</p><h2 id="四、css样式"><a class="header-anchor" href="#四、css样式" aria-hidden="true">#</a> 四、css样式</h2><p><code>.css()</code>；</p><ol><li>获取：填写一个参数属性名；</li><li>设置：填写属性名和属性值；</li><li>设置多个样式时，可以放到一个对象当中，</li></ol><p>可以简写：属性值可以不加单位px，对象里属性名可以不加引号，如果有中划线不加引号需要转变驼峰；</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> height<span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="五、位置"><a class="header-anchor" href="#五、位置" aria-hidden="true">#</a> 五、位置</h2><ul><li><p><code>offset()</code>; 返回一个对象，到html的位置，和定位属性没关系；</p></li><li><p><code>offset().top/left</code>; 取对象里面的top值和left值；</p></li><li><p><code>position()</code>; 返回一个对象，到父元素有定位属性的距离，</p></li><li><p><code>position().top/left</code>； 取对象里面的top值和left值</p></li><li><p><code>$(window).scrollTop()/scrollLeft()</code> 浏览器被卷起的top值和left值；</p><ul><li>括号里面也可以设置值，到指定位置；</li><li>$(document)也可以，最好是window，是标准写法；</li></ul></li><li><p><code>$(window).scroll(function(){})</code>; 浏览器被卷起执行函数；</p></li></ul><h2 id="六、尺寸"><a class="header-anchor" href="#六、尺寸" aria-hidden="true">#</a> 六、尺寸</h2><ul><li><code>width()/height()</code>; 获取元素的宽度和高度；获取出来的没有单位px；</li><li><code>innerWidth()/innerHeight()</code>; 宽度/高度+padding</li><li><code>outerWidth()/outerHeight()</code>; 宽度/高度+padding+border（真实宽高）；括号里面加true，可以加上margin；</li><li><code>$(window).width()/height()</code>; 浏览器可视宽高；</li><li><code>$(document).width()/height()</code>；文档的真实内容宽高；</li></ul><h2 id="七、节点"><a class="header-anchor" href="#七、节点" aria-hidden="true">#</a> 七、节点</h2><h3 id="创建"><a class="header-anchor" href="#创建" aria-hidden="true">#</a> 创建</h3><p>创建：<code>$(&quot;&lt;li&gt;3&lt;/li&gt;&quot;)</code>; 创建了一个内容为3的li标签；</p><h3 id="添加节点"><a class="header-anchor" href="#添加节点" aria-hidden="true">#</a> 添加节点</h3><ul><li><strong>从后添加</strong><ul><li><code>父元素.append(新节点)</code></li><li><code>新节点.appendTo(父元素)</code></li></ul></li><li><strong>从前添加</strong><ul><li><code>父元素.prepend(新节点)</code></li><li><code>新节点.prependTo(父元素)</code></li></ul></li><li><strong>指定标签之后</strong><ul><li><code>a.after(b)</code></li><li><code>b.insertAfter(a)</code></li></ul></li><li><strong>指定标签之前</strong><ul><li><code>a.before(b);</code></li><li><code>b.insertBefore(a)</code></li></ul></li><li>替换 <ul><li><code>a.replaceWith(b)</code>; b替换a； 替换会将内容也直接清空；</li><li><code>b.replaceAll(a)</code>; b替换a；</li></ul></li></ul><p>谁在前链式调用就是给谁添加事件；</p><div class="language-js"><pre><code><span class="token comment">//  谁在前调用，就是给谁设置css样式；</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span>“border<span class="token string">&quot;,&quot;</span><span class="token number">1</span>px solid red&quot;<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;li&gt;&lt;/li&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">appendTo</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;ul&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;border&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1px solid red&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="包裹节点"><a class="header-anchor" href="#包裹节点" aria-hidden="true">#</a> 包裹节点</h3><ul><li><code>a.wrap(b)</code> 把调用的标签包起来；</li><li><code>a.wrapAll(b)</code> 把所有的a标签拿出来包一个父元素；</li><li><code>a.wrapInner(b)</code> 把a标签的内容用一个父元素包起来；</li><li><code>a.unwrap() </code> 删除包裹的父元素；</li></ul><h3 id="克隆节点"><a class="header-anchor" href="#克隆节点" aria-hidden="true">#</a> 克隆节点</h3><ul><li><code>.clone()</code>; 可以传布尔值，不传为false； <ul><li>false：只克隆元素，不克隆脚本；</li><li>true：脚本一起克隆；</li></ul></li></ul><h3 id="删除节点"><a class="header-anchor" href="#删除节点" aria-hidden="true">#</a> 删除节点</h3><ul><li><code>.empty()</code> 删除元素内容，自身保留；</li><li><code>.html(&#39;&#39;)</code> 清空内容，会造成内存泄漏，绑定的事件不会被清除；</li><li><code>.remove()</code> 把整个元素删除，返回被删除的元素，会将脚本删除；（即使再添加回去也没有事件）</li><li><code>.detach()</code> 返回被删除的元素，不会删除脚本；（添加回去还有事件）</li></ul><h2 id="十一、筛选-方法"><a class="header-anchor" href="#十一、筛选-方法" aria-hidden="true">#</a> 十一、筛选(方法)</h2><ul><li><code>first()</code> 所有元素中的第一个</li><li><code>last()</code> 所有元素中的最后一个</li><li><code>eq() </code> 下标从0开始</li><li><code>not() </code> 除了传入的元素</li><li><code>has() </code> 有小括号中的元素</li><li><code>slice() </code> 和字符串slice用法一样</li><li><code>is()</code> 根据选择器、元素或 jQuery 对象来检测匹配元素集合，如果这些元素中至少有一个元素匹配给定的参数，则返回 true。</li><li><code>filter() </code> 找到传入元素的元素，括号还可以是一个函数；filter(function(){return nodeType!=1}) 不是标签的节点</li><li><code>contents()</code> 所有子节点和文本节点，一般配合filter使用</li></ul><h3 id="父元素相关"><a class="header-anchor" href="#父元素相关" aria-hidden="true">#</a> 父元素相关</h3><ul><li><p><code>children() </code> 直接子元素，可以传参，指定某个直接子元素</p></li><li><p><code>find() </code> 所有子元素，传参为某个子元素</p></li><li><p><code>parent()</code> 直接父元素</p></li><li><p><code>parents()</code> 所有父元素可以传参，指定某个父元素</p></li><li><p><code>parentsUntil()</code> 所有父元素直到传入的父元素，不包括传入的父元素</p></li><li><p><code>offsetParent()</code> 找到离他最近的有定位的父元素</p></li></ul><h3 id="兄弟节点"><a class="header-anchor" href="#兄弟节点" aria-hidden="true">#</a> 兄弟节点</h3><ul><li><code>next()</code> 选择下一个相邻兄弟元素</li><li><code>nextAll()</code> 选择下面所有的元素，小括号填写可以指定下面的某个元素（css样式选择器当中是(&quot;li~p&quot;)li下面所有的兄弟元素p）</li><li><code>nextUntil()</code> 下面所有的兄弟元素直到小括号的元素，不包括小括号</li><li><code>prev()</code> 上一个兄弟元素</li><li><code>prevAll() </code> 上面所有的兄弟元素，小括号传参表示指定元素</li><li><code>prevUntil()</code> 上面所有的兄弟元素直接小括号的元素，不包括小括号</li><li><code>siblings()</code> 所有兄弟元素，可以传一个具体的标签，指定某些兄弟元素</li></ul><div class="language-js"><pre><code><span class="token comment">// 使用contents作childNodes使用；</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;span:contains(改)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">var</span> val <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一要添加的内容&quot;</span><span class="token punctuation">)</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nodeType<span class="token operator">!=</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>nodeValue <span class="token operator">=</span> val<span class="token punctuation">;</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="十二、自定义动画"><a class="header-anchor" href="#十二、自定义动画" aria-hidden="true">#</a> 十二、自定义动画</h2><p><code>.animate()</code>; 参数是：对象，时间，函数；</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&#39;opacity&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;动画完成&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p><strong>让浏览器的scroll滚动条慢慢回到0</strong></p><p><code>$(&quot;html,body&quot;).animate({&quot;scrollTop&quot;:0})</code>;</p><p>写html和body是兼容；相当于：<code>document.documentElement || document.body</code>；</p><h2 id="高频面试题"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><p>● $().attr 与 $().prop() 的区别 ?</p>',51);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
