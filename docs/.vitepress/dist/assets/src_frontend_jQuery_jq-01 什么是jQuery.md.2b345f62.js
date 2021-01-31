import{o as e,c as a,d as n}from"./app.dc9dbd0c.js";const r='{"title":"jq-01 什么是jQuery","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、什么是jQuery","slug":"一、什么是jquery"},{"level":2,"title":"二、jQuery的优点","slug":"二、jquery的优点"},{"level":2,"title":"三、下载jQuery","slug":"三、下载jquery"},{"level":2,"title":"四、jQuery 库类型说明","slug":"四、jquery-库类型说明"},{"level":2,"title":"五、jQuery版本：","slug":"五、jquery版本："},{"level":2,"title":"六、引入方式","slug":"六、引入方式"},{"level":2,"title":"七、jQuery与$的关系","slug":"七、jquery与-的关系"},{"level":2,"title":"八、页面加载","slug":"八、页面加载"},{"level":2,"title":"九、元素","slug":"九、元素"},{"level":2,"title":"十、转换元素","slug":"十、转换元素"},{"level":2,"title":"十一、和其他框架冲突","slug":"十一、和其他框架冲突"}],"relativePath":"src\\\\frontend\\\\jQuery\\\\jq-01 什么是jQuery.md","lastUpdated":1612089807499}',t={},s=n('<h1 id="jq-01-什么是jquery"><a class="header-anchor" href="#jq-01-什么是jquery" aria-hidden="true">#</a> jq-01 什么是jQuery</h1><h2 id="一、什么是jquery"><a class="header-anchor" href="#一、什么是jquery" aria-hidden="true">#</a> 一、什么是jQuery</h2><p>​ jQuery 是一个优秀的 JavaScript 库，是一个由 John Resig 创建于 2006 年 1 月的开源项目。现在的 jQuery 团队主要包括核心库、UI、插件和 jQuery Mobile 等开发人员以及推广和网站设计、维护人员。</p><p>​ jQuery 凭借简洁的语法和跨平台的兼容性，极大地简化了 JavaScript 开发人员遍历HTML 文档、操作DOM、处理事件、执行动画和开发 ajax 的操作。总之，无论是网页设计师、后台开发者、业余爱好者还是项目管理者，也无论是 JavaScript 初学者还是 JavaScript高手，都有足够多的理由去学习 jQuery。</p><h2 id="二、jquery的优点"><a class="header-anchor" href="#二、jquery的优点" aria-hidden="true">#</a> 二、jQuery的优点</h2><p>jQuery强调的理念是写得少，做得多（write less, do more），jQuery独特的选择器、链式操作、事件处理机制和封装完善的 ajax 都是其他库望尘莫及的。概括起来，jQuery有以下优势。</p><ol><li>轻量级。</li><li>强大的选择器。</li><li>出色的 DOM 操作的封装。</li><li>可靠的事件处理机制。</li><li>完善的 ajax。</li><li>不污染顶级变量。</li><li>出色的浏览器兼容性。</li><li>链式操作方式。</li><li>隐式迭代。</li><li>行为层和结构层分离。</li><li>丰富的插件支持。</li><li>完善的文档。</li><li>开源。</li></ol><h2 id="三、下载jquery"><a class="header-anchor" href="#三、下载jquery" aria-hidden="true">#</a> 三、下载jQuery</h2><ol><li>去官方网站下载：<a href="http://jquery.com/" target="_blank" rel="noopener noreferrer">http://jquery.com/</a></li><li>去 CDN 下载：<a href="https://www.bootcdn.cn/jquery/" target="_blank" rel="noopener noreferrer">https://www.bootcdn.cn/jquery/</a></li></ol><h2 id="四、jquery-库类型说明"><a class="header-anchor" href="#四、jquery-库类型说明" aria-hidden="true">#</a> 四、jQuery 库类型说明</h2><p>jQuery库的类型分为两种，分别是生产版本（最小化和压缩版）和开发版（未压缩版），</p><p>它们的区别是：</p><p>​ 开发版：完整无压缩版本，主要用于测试、学习、和开发；</p><p>​ 生产版：经过工具压缩或经过服务器开启 Gzip 压缩，主要应用于产品和项目；</p><p><img src="https://notecdn.heny.vip/images/jq-01_%E4%BB%80%E4%B9%88%E6%98%AFjQuery-01.png" alt="image"></p><h2 id="五、jquery版本："><a class="header-anchor" href="#五、jquery版本：" aria-hidden="true">#</a> 五、jQuery版本：</h2><p>jQuery 库分为 1.x 的版本和 2.x、3.x 的版本，1.x 的版本兼容 IE678，而 2.x、3.x的版本不兼容 IE678。</p><p>国内多数网站还在使用1.x的版本</p><h2 id="六、引入方式"><a class="header-anchor" href="#六、引入方式" aria-hidden="true">#</a> 六、引入方式</h2><p>jQuery 不需要安装，他就是一个 js 文件，把下载的 jQuery 放到一个公共的位置，想要在某个页面上使用 jQuery 时，只需要在相关的 HTML 文档中引入该库文件即可。</p><p>一般可以放在 head 标签中或者 <code>&lt;/body&gt;</code> 标签前面，但是一定要注意，要在其它 js 文件前面引入 jQuery 库。</p><p>当我们需要使用 jQuery 的时候，会在 HTML 文档中引入 jquery.js, 可以通过以下两种方式引入：</p><p>● CDN 引入（CDN 的全称是 Content Delivery Network，即内容分发网络） ● 本地 jQuery 文件引入</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- 方式一：引入 CDN 服务 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>”https://cdn.bootcss.com/jquery/1.7.1/jquery.min.js”</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!-- 方式二：引用本地文件 --&gt;</span>\n<span class="token comment">&lt;!-- &lt;script src=”js/jquery.min.js”&gt;&lt;/script&gt; --&gt;</span>\n</code></pre></div><p>注：引入jquery必须放在所有其他script标签之前；</p><p>jquery中2.0以上的版本不兼容ie6,7,8；</p><h2 id="七、jquery与-的关系"><a class="header-anchor" href="#七、jquery与-的关系" aria-hidden="true">#</a> 七、jQuery与$的关系</h2><p>$ 就是 jQuery 的一个简写形式， $(‘#f00’) 和 jQuery(‘#foo’) 是等价的，$.ajax 和 jQuery.ajax 是等价的。</p><h2 id="八、页面加载"><a class="header-anchor" href="#八、页面加载" aria-hidden="true">#</a> 八、页面加载</h2><ol><li><code>$(document).ready(function(){})</code>;</li><li><code>$(function(){})</code>；简写；</li></ol><p>和原生文档加载完的区别：</p><p>①原生：必须把所有的元素都加载完（包括图片），并且只能写一个onload；</p><p>②jquery：只把页面的结构加载完，读取到标签就可以了，可以写多个；</p><ol start="3"><li><p>$(document).ready() 同 window.onload 的区别：</p><pre><code> 1. 执行时机不同，window.onload 必须等待网页中所有的内容加载完毕后（包括图片）才能执行，而 $(document).ready() 是网页中所有 DOM 结构绘制完毕就执行，可能 DOM 元素关联的东西并没有加载完。\n 2. window.onload 只能写一个 , 多个时后面的会覆盖掉前面的，而 $(document).ready() 可以写多个，不会覆盖。\n 3. window.onload没有简写形式，而$(document).ready()可以简写成$(function (){})。\n</code></pre></li></ol><h2 id="九、元素"><a class="header-anchor" href="#九、元素" aria-hidden="true">#</a> 九、元素</h2><ol><li>dom元素：原生获取的就是dom元素（[HTMLCollection]）；</li><li>jquery元素：k.fn.init的元素就是jquery元素（k.fn.init）;</li></ol><h2 id="十、转换元素"><a class="header-anchor" href="#十、转换元素" aria-hidden="true">#</a> 十、转换元素</h2><p>使用jquery元素不能使用原生的方法，不能混着用，可以转换元素使用；</p><ol><li>$(li)，将使用dom获取li变量的元素转换为jquery的元素；</li><li>jquery转dom：①$(&quot;li&quot;).get(下标)，②$(&quot;li&quot;)[下标] 转dom加下标，转jquery加$；</li></ol><h2 id="十一、和其他框架冲突"><a class="header-anchor" href="#十一、和其他框架冲突" aria-hidden="true">#</a> 十一、和其他框架冲突</h2><p>jQuery使用$符号的方式，还可以直接使用jQuery；</p><ol><li>让渡：jQuery.noConflict();<br> 将$符让给其他的库使用，自己还可以使用jQuery来代替$； 如果jQuery库还想使用$符,可以使用闭包，将jQuery作为实参，$作为形参；</li></ol><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">$</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span>jQuery<span class="token punctuation">)</span><span class="token punctuation">;</span>    使用$作为形参使用；\n</code></pre></div><ol start="2"><li>改变：<code>var j = jQuery.noConflict()</code>；声明任意变量来替换$符；改变之后不能再使用$；</li></ol>',44);t.render=function(n,r,t,l,o,i){return e(),a("div",null,[s])};export default t;export{r as __pageData};
