import{o as t,c as d,d as e}from"./app.dc9dbd0c.js";const a='{"title":"html-13 CSS3选择器","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、CSS3新增的特性：","slug":"一、css3新增的特性："},{"level":2,"title":"二、css3标签","slug":"二、css3标签"},{"level":2,"title":"三、结构性伪类选择器","slug":"三、结构性伪类选择器"},{"level":3,"title":"nth-child（n）","slug":"nth-child（n）"},{"level":3,"title":"first-child","slug":"first-child"},{"level":3,"title":"last-child用法","slug":"last-child用法"},{"level":3,"title":"高级用法","slug":"高级用法"},{"level":3,"title":"nth-of-type","slug":"nth-of-type"},{"level":2,"title":"四、属性选择器","slug":"四、属性选择器"},{"level":3,"title":"补充：","slug":"补充："},{"level":2,"title":"四、状态伪类选择器","slug":"四、状态伪类选择器"},{"level":2,"title":"五、before,after","slug":"五、before-after"},{"level":2,"title":"六、圆角","slug":"六、圆角"},{"level":2,"title":"七、box-shadow盒阴影","slug":"七、box-shadow盒阴影"},{"level":2,"title":"九、用户界面","slug":"九、用户界面"}],"relativePath":"src\\\\frontend\\\\html5、css3\\\\html-13 CSS3选择器.md","lastUpdated":1612089669918}',n={},o=e('<h1 id="html-13-css3选择器"><a class="header-anchor" href="#html-13-css3选择器" aria-hidden="true">#</a> html-13 CSS3选择器</h1><h2 id="一、css3新增的特性："><a class="header-anchor" href="#一、css3新增的特性：" aria-hidden="true">#</a> 一、CSS3新增的特性：</h2><ol><li>选择器</li><li>盒模型</li><li>背景和边框</li><li>文字效果</li><li>2D/3D转换</li><li>动画</li><li>多列布局</li><li>用户界面</li><li>圆角</li><li>语音</li></ol><p>div+p 兄弟元素选择器；</p><p>div~p 选中div兄弟元素下面的所有的p。</p><h2 id="二、css3标签"><a class="header-anchor" href="#二、css3标签" aria-hidden="true">#</a> 二、css3标签</h2><div class="language-css"><pre><code><span class="token property">width</span><span class="token punctuation">:</span><span class="token function">calc</span><span class="token punctuation">(</span>100% - 20px<span class="token punctuation">)</span> 函数；\n</code></pre></div><h2 id="三、结构性伪类选择器"><a class="header-anchor" href="#三、结构性伪类选择器" aria-hidden="true">#</a> 三、结构性伪类选择器</h2><p>child用法必须保证是连续数的，从父级元素里面开始算第几个的。</p><p>n是从0开始走的，第一个是2*0+1，第二个是2*1+1，</p><p>几n就是几的倍数。</p><h3 id="nth-child（n）"><a class="header-anchor" href="#nth-child（n）" aria-hidden="true">#</a> nth-child（n）</h3><ol><li><p><code>nth-child(3)</code></p><p>表示选择列表中的第3个标签，代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:nth-child(3)</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><code>nth-child(2n)</code></p><p>表示选择列表中的偶数标签，即选择 第2. 第4. 第6…… 标签，代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:nth-child(2n)</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><code>nth-child(2n-1)</code></p><p>表示选择列表中的奇数标签，即选择 第1. 第3. 第5. 第7……标签，代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:nth-child(2n-1)</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><code>nth-child(n+3)</code></p><p>表示选择列表中的标签从第3个开始到最后，代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:nth-child(n+3)</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><code>nth-child(-n+3)</code></p><p>表示选择列表中的标签从0到3，即小于3的标签，代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:nth-child(-n+3)</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><code>nth-last-child(3)</code></p><p>表示选择列表中的倒数第3个标签，代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:nth-last-child(3)</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li></ol><h3 id="first-child"><a class="header-anchor" href="#first-child" aria-hidden="true">#</a> first-child</h3><ol><li><p><code>first-child</code></p><p>first-child表示选择列表中的第一个标签。代码如下：</p><div class="language-css"><pre><code><span class="token selector">li:first-child</span><span class="token punctuation">{</span><span class="token property">background</span><span class="token punctuation">:</span>#fff<span class="token punctuation">}</span>\n</code></pre></div></li></ol><h3 id="last-child用法"><a class="header-anchor" href="#last-child用法" aria-hidden="true">#</a> last-child用法</h3><ol><li><code>last-child</code></li></ol><p>last-child表示选择列表中的最后一个标签，代码如下： <code>css li:last-child{background:#fff} </code></p><h3 id="高级用法"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h3><p><code>nth-child(n+2):nth-child(odd):nth-child(-n+9)</code></p><p>使用我们将会选中的子元素是从第2位到第9位，并且只包含奇数位。</p><h3 id="nth-of-type"><a class="header-anchor" href="#nth-of-type" aria-hidden="true">#</a> nth-of-type</h3><p>type用法是选择所有级元素里面第几次出现的</p><ol><li><p><code>nth-of-type(n)</code></p><p>选择父元素中第几次出现的元素；</p></li><li><p><code>nth-last-of-type(n)</code></p><p>选择父元素中倒数第几次出现的元素；</p></li><li><p><code>nth-of-type(odd)/(2n-1)</code></p><p>选择父元素中出现的奇数次元素；</p></li><li><p><code>nth-of-type(even)/(2n);</code></p><p>选择父元素中出现的偶数次元素；</p></li></ol><h2 id="四、属性选择器"><a class="header-anchor" href="#四、属性选择器" aria-hidden="true">#</a> 四、属性选择器</h2><ol><li><p><code>div[title]</code></p><p>选择所有div标签包含有title的属性；</p></li><li><p><code>div[title=value]</code></p><p>选择所有div标签包含value值相等的元素</p></li><li><p><code>div[title*=value]</code></p><p>选中包含字母的所有标签；</p></li><li><p><code>div[title~=value]</code></p><p>选中单独的单词的标签；</p></li><li><p><code>div[title^=value]</code></p><p>选中以value开头的标签；</p></li><li><p><code>div[title$=value]</code></p><p>选中以value值结尾的标签；</p></li><li><p>属性选择器也可以单独选择；</p><p><code>[title=value]</code></p></li></ol><h3 id="补充："><a class="header-anchor" href="#补充：" aria-hidden="true">#</a> 补充：</h3><p><code>:not()</code>，选择器匹配非指定元素选择器的每个元素；</p><div class="language-css"><pre><code><span class="token selector">li:not(:last-child)</span><span class="token punctuation">{</span>\n <span class="token comment">/*选择除最后一行的所有元素 */</span>\n\t<span class="token property">margin-bottom</span><span class="token punctuation">:</span>20px<span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="四、状态伪类选择器"><a class="header-anchor" href="#四、状态伪类选择器" aria-hidden="true">#</a> 四、状态伪类选择器</h2><ol><li><p><code>checked</code> 选中的元素；</p></li><li><p><code>enabled</code> 可用的状态；</p></li><li><p><code>disabled</code> 禁用状态；</p></li><li><p><code>focus</code> 选中鼠标点击获取的焦点；</p></li><li><p><code>::first-line</code> 选中文本中第一行文字；</p></li><li><p><code>::first-letter</code> 文本中的第一个单词或字，用于金钱的地方</p></li><li><p><code>p::selection</code> 改变鼠标选中文字的样式(必须双冒号)；</p></li><li><p><code>target</code> 选择当前活动的元素，可以不写标签，直接:target。 给a标签href地址里面写#name，给需要选中的标签添加id=name；</p></li></ol><h2 id="五、before-after"><a class="header-anchor" href="#五、before-after" aria-hidden="true">#</a> 五、before,after</h2><ol><li><p>在E元素内部的开始位置和结束位创建一个元素，该元素为行内元素，且必须要结合content属性使用。</p></li><li><p>为什么用双冒号：</p><p>E:after、E:before 在旧版本里是伪元素，CSS3的规范里“:”用来表示伪类，“::”用来表示伪元素，但是在高版本浏览器下E:after、E:before会被自动识别为E::after、E::before，这样做的目的是用来做兼容处理，&quot;:&quot; 与 &quot;::&quot; 区别在于区分伪类和伪元素。</p></li><li><p>before,aften其实是一个盒子，这个盒子是内联元素，转块可以改变宽高，content属性是伪元素的内容，使用时必须配合使用，也称为是一个能插入元素的选择器，改变属性可以利用改变父元素继承。</p></li></ol><p>补充：</p><p>●滑过选中设置好的伪元素： div:hover::before；(鼠标放在div上将before选出来，选出来之后是不用加content的，因为前面已经加了），也可以做动画效果，因为before是一个独立的盒子，可以单独做效果，如果写一个文字是无法做效果的；</p><p>content属性可以使用attr()函数，取元素的属性名；</p><h2 id="六、圆角"><a class="header-anchor" href="#六、圆角" aria-hidden="true">#</a> 六、圆角</h2><p>先写top或bottom，后写left或ight</p><p><code>border-radius</code>:50%;/或者边框的一半；</p><p>​ 一个值：表示所有角；</p><p>​ 两个值：表示左上 右下，右上 左下；</p><p>​ 三个值：表示左上，右上 左下，右下；</p><p>​ 四个值：左上，右上，右下，左下；</p><p>​ 八个值：左上 右上 右下 左下（水平半径）/左上 右上 右下 左下(垂直半径)</p><p><code>border-top-left-radius:50px;</code> 左上角圆角50px；</p><p>​ 一个值：水平和垂直半径</p><p>​ 两个值：水平半径和垂直半径</p><h2 id="七、box-shadow盒阴影"><a class="header-anchor" href="#七、box-shadow盒阴影" aria-hidden="true">#</a> 七、box-shadow盒阴影</h2><ol><li><code>h-shadow</code>:水平 可以为负值</li><li><code>v-shadow</code>:垂直 可以为负值</li><li><code>blur</code> 可选，模糊的距离，模糊度；</li><li><code>spread</code> 可选，模糊尺寸</li><li><code>color</code> 可选，颜色</li><li><code>inset</code> 可选，把盒子外阴影（outset）设置为内阴影</li><li>多个阴影用逗号隔开。</li></ol><p>阴影样式: x轴 y轴 模糊值 颜色（在内部）</p><p><code>box-shadow: 0px 0px 10px black (inset)</code>;</p><p>文字的阴影：<code>text-shadow</code></p><p>多个阴影：</p><div class="language-css"><pre><code><span class="token selector">.demo</span> <span class="token punctuation">{</span>\n    .<span class="token property">box-shadow</span><span class="token punctuation">:</span> -2px -2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 255<span class="token punctuation">,</span> 1<span class="token punctuation">)</span><span class="token punctuation">,</span>\n    \t\t\t3px 3px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> .1<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="九、用户界面"><a class="header-anchor" href="#九、用户界面" aria-hidden="true">#</a> 九、用户界面</h2><ol><li><p><code>resize</code>是否可由用户调整元素的尺寸。</p><p>resize:none;</p><p>下面这几个要配合overflow: auto/hidden/scroll;使用</p><p>resize: horizontal; 用户可以改变水平方向的尺寸</p><p>resize: vertical; 用户可以改变垂直方向的尺寸</p><p>resize: both;`用户可以改变水平和垂直方向的尺寸</p></li><li><p><code>box-sizing</code> 允许你以特定的方式定义匹配某个区域的特定元素。</p><p>box-sizing: border-box; 设置的padding、border往盒子里面收缩；</p><p>box-sizing: content-box;(默认值) 设置的padding、border往外面长大；</p></li></ol><p>浏览器私有前缀</p><table><thead><tr><th>内核</th><th>兼容性前缀</th><th>浏览器</th></tr></thead><tbody><tr><td>Gecko</td><td>-moz-</td><td>Firefox</td></tr><tr><td>Webkit</td><td>-webkit-</td><td>Chrome、Safari</td></tr><tr><td>Presto</td><td>-o-</td><td>Opera</td></tr><tr><td>Trident</td><td>-ms-</td><td>IE</td></tr></tbody></table><p>选择器的表格</p><table><thead><tr><th>选择器</th><th>例子</th><th>例子描述</th><th>CSS</th></tr></thead><tbody><tr><td>element&gt;element</td><td>div&gt;p</td><td>选择父元素为 <code>&lt;div&gt;</code> 元素的所有 <code>&lt;p&gt;</code> 元素。</td><td>2</td></tr><tr><td>element+element</td><td>div+p</td><td>选择紧接在 <code>&lt;div&gt;</code> 元素之后的所有 <code>&lt;p&gt;</code> 元素。</td><td>2</td></tr><tr><td>[attribute=value]</td><td>[target=_blank]</td><td>选择 target=&quot;_blank&quot; 的所有元素。</td><td>2</td></tr><tr><td>[attribute~=value]</td><td>[title~=flower]</td><td>选择 title 属性包含单词 &quot;flower&quot; 的所有元素。</td><td>2</td></tr><tr><td>[attribute|=value]</td><td>[lang|=en]</td><td>选择 lang 属性值以 &quot;en&quot; 开头的所有元素。</td><td>2</td></tr><tr><td>:focus</td><td>input:focus</td><td>选择获得焦点的 input 元素。</td><td>2</td></tr><tr><td>:first-letter</td><td>p:first-letter</td><td>选择每个 <code>&lt;p&gt;</code> 元素的首字母。</td><td>1</td></tr><tr><td>:first-line</td><td>p:first-line</td><td>选择每个 <code>&lt;p&gt;</code> 元素的首行。</td><td>1</td></tr><tr><td>:before</td><td>p:before</td><td>在每个 <code>&lt;p&gt;</code> 元素的内容之前插入内容。</td><td>2</td></tr><tr><td>:after</td><td>p:after</td><td>在每个 <code>&lt;p&gt;</code> 元素的内容之后插入内容。</td><td>2</td></tr><tr><td>:lang(language)</td><td>p:lang(it)</td><td>选择带有以 &quot;it&quot; 开头的 lang 属性值的每个 <code>&lt;p&gt;</code> 元素。</td><td>2</td></tr><tr><td>element1~element2</td><td>p~ul</td><td>选择前面有 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;ul&gt;</code> 元素。</td><td>3</td></tr><tr><td>[attribute^=value]</td><td>a[src^=&quot;https&quot;]</td><td>选择其 src 属性值以 &quot;https&quot; 开头的每个 <code>&lt;a&gt;</code> 元素。</td><td>3</td></tr><tr><td>[attribute$=value]</td><td>a[src$=&quot;.pdf&quot;]</td><td>选择其 src 属性以 &quot;.pdf&quot; 结尾的所有 <code>&lt;a&gt;</code> 元素。</td><td>3</td></tr><tr><td>[attribute*=value]</td><td>a[src*=&quot;abc&quot;]</td><td>选择其 src 属性中包含 &quot;abc&quot; 子串的每个 <code>&lt;a&gt;</code> 元素。</td><td>3</td></tr><tr><td>:first-of-type</td><td>p:first-of-type</td><td>选择属于其父元素的首个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:last-of-type</td><td>p:last-of-type</td><td>选择属于其父元素的最后 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:only-of-type</td><td>p:only-of-type</td><td>选择属于其父元素唯一的 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:only-child</td><td>p:only-child</td><td>选择属于其父元素的唯一子元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:nth-child(n)</td><td>p:nth-child(2)</td><td>选择属于其父元素的第二个子元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:nth-last-child(n)</td><td>p:nth-last-child(2)</td><td>同上，从最后一个子元素开始计数。</td><td>3</td></tr><tr><td>:nth-of-type(n)</td><td>p:nth-of-type(2)</td><td>选择属于其父元素第二个 <code>&lt;p&gt;</code> 元素的每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:nth-last-of-type(n)</td><td>p:nth-last-of-type(2)</td><td>同上，但是从最后一个子元素开始计数。</td><td>3</td></tr><tr><td>:last-child</td><td>p:last-child</td><td>选择属于其父元素最后一个子元素每个 <code>&lt;p&gt;</code> 元素。</td><td>3</td></tr><tr><td>:root</td><td>:root</td><td>选择文档的根元素。</td><td>3</td></tr><tr><td>:empty</td><td>p:empty</td><td>选择没有子元素的每个 <code>&lt;p&gt;</code> 元素（包括文本节点）。</td><td>3</td></tr><tr><td>:target</td><td>#news:target</td><td>选择当前活动的 #news 元素。</td><td>3</td></tr><tr><td>:enabled</td><td>input:enabled</td><td>选择每个启用的 <code>&lt;input&gt;</code> 元素。</td><td>3</td></tr><tr><td>:disabled</td><td>input:disabled</td><td>选择每个禁用的 <code>&lt;input&gt;</code> 元素</td><td>3</td></tr><tr><td>:checked</td><td>input:checked</td><td>选择每个被选中的 <code>&lt;input&gt;</code> 元素。</td><td>3</td></tr><tr><td>:not(selector)</td><td>:not(p)</td><td>选择非 <code>&lt;p&gt;</code> 元素的每个元素。</td><td>3</td></tr><tr><td>::selection</td><td>::selection</td><td>选择被用户选取的元素部分。</td><td>3</td></tr></tbody></table>',60);n.render=function(e,a,n,p,l,s){return t(),d("div",null,[o])};export default n;export{a as __pageData};
