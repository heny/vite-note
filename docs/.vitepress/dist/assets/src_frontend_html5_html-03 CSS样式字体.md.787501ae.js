import{o as e,c as p,d as s}from"./app.b11e2761.js";const a='{"title":"html-03 CSS样式字体","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、引入样式的三种方式","slug":"一、引入样式的三种方式"},{"level":2,"title":"二、选择器","slug":"二、选择器"},{"level":2,"title":"三、文字相关样式","slug":"三、文字相关样式"},{"level":2,"title":"四、文本相关样式，可以继承","slug":"四、文本相关样式，可以继承"},{"level":2,"title":"五、文本变点状","slug":"五、文本变点状"},{"level":2,"title":"六、伪类选择器","slug":"六、伪类选择器"},{"level":2,"title":"面试题","slug":"面试题"}],"relativePath":"src\\\\frontend\\\\html5\\\\html-03 CSS样式字体.md","lastUpdated":1612089669914}',n={},l=s('<h1 id="html-03-css样式字体"><a class="header-anchor" href="#html-03-css样式字体" aria-hidden="true">#</a> html-03 CSS样式字体</h1><h2 id="一、引入样式的三种方式"><a class="header-anchor" href="#一、引入样式的三种方式" aria-hidden="true">#</a> 一、引入样式的三种方式</h2><ol><li><p>内部样式，在html文件的head标签内写style标签，style标签里面写样式。</p></li><li><p>外部样式，新建一个CSS的文件，在html的head标签里写link标签。</p></li></ol><p><code>&lt;link href=&quot;style.css&quot; type=&quot;text/css&quot; rel=&quot;stylesheet&quot;&gt; </code></p><p>href链接到的css文件，type写引入的css文件类型，</p><p>rel=&quot;stylesheet&quot;，被链接文档和当前文档之间的关系：引入样式表。</p><p>优点： ①多个页面可以使用同一个css文件，大大减少了工作量</p><p>②方便后期维护，改变一个css文件里的样式，就可以改变所有html页面里的样式</p><ol start="3"><li>行间样式，html标签的开始标签里面直接空格写，style=&quot;&quot;，多个用分号隔开</li></ol><p>优先级：</p><p>通常：行间样式&gt;内部样式&gt;外部样式；</p><p>内部样式和外部样式，谁在后谁的优先级最大，遵循就近原则。</p><h2 id="二、选择器"><a class="header-anchor" href="#二、选择器" aria-hidden="true">#</a> 二、选择器</h2><ol><li><p>标签选择器：直接选择标签名字。</p></li><li><p>class选择器(类选择器)：给标签起class名，css直接写.class名。</p></li></ol><p>同一个标签可以有多个class名，class名中间用空格隔开，</p><p>同一个class名可以使用多次，相当于人的姓名。</p><p>class命名规则：a-z,A-Z,0-9,_,-，必须以字母开头</p><ol start="3"><li>id选择器：给标签起id名，css直接写#id名。</li></ol><p>同一个id名只能使用一次，同一个标签只可以有一个id名，相当于人的身份证</p><ol start="4"><li><p>后代选择器：中间用空格隔开，选择class名里面的标签。</p></li><li><p>群组选择器：中间用逗号隔开(逗号隔开的是完整的选择器)。</p></li><li><p>直接子元素选择器：只选择儿子那辈，儿子里面的标签不被选中，中间用&gt;号隔开。·</p></li><li><p>交集选择器：中间啥标点符号都不加</p></li></ol><p>div.red：选中所有div标签带red的class名的标签。</p><ol start="8"><li>通配符(*)，把所有的标签都选中，修改所有属性</li></ol><p>常用于margin值，padding值初始化</p><p>优先级：</p><p>权重值：id选择器 100&gt;class选择器 10&gt;标签选择器 1。</p><ol><li>当选择到不同的标签上的时候，继承来的样式优先级小于给自己设置的优先级。</li><li>当选择到同一个标签上的时候，比较权重，谁的权重高，谁的优先级就更大。</li><li>当选择到同一个标签，权重还相同的时候，遵循就近原则。</li><li>行间样式优先级大于id选择器，class选择器，标签选择器</li><li><code>!important</code> 优先级最大 写在分号里面</li></ol><h2 id="三、文字相关样式"><a class="header-anchor" href="#三、文字相关样式" aria-hidden="true">#</a> 三、文字相关样式</h2><ol><li><p><code>font-size</code>：文字字号，可以继承，</p><p>谷歌里面默认是16px，默认最小是12px，通常情况下，文字的字号都是双数（但也是有单数的）</p></li><li><p><code>line-height</code>：行高，可以继承，想要设置一行文字在盒子里垂直位置居中，给文字设置行高和盒子高度相等，</p><p>单位：px %，如果字号是100px，line-height:2，表示行高是200px；</p></li><li><p><code>font-family</code>：文字字体，可以继承，</p><p>安全字体：楷体，宋体，微软雅黑，黑体，可以设置多种字体，用逗号隔开，先识别第一种，字体带空格，必须加空格。</p></li><li><p><code>font-style</code>：设置文字是否倾斜，可以继承，italic倾斜，normal不倾斜。</p></li><li><p><code>font-weight</code>：文字是否加粗，可以继承，bold加粗，normal不加粗。</p></li><li><p>文字样式复合写法，倾斜和加粗如果省略，默认是不倾斜加粗的，字号和字体不能省略。</p><p><code>font:italic bold 30px/50px &#39;楷体&#39;</code>； font:是否倾斜 是否加粗 字号/行高 字体。</p></li><li><p>color文字颜色</p><p>①英文单词，</p><p>②十六进制，六位数组成，0-9，a-f，前两位是红色，中间是绿色，最后是蓝色</p><p>③rgb，取值0到255，中间用逗号隔开，示例：rgb(255,255,255)</p></li></ol><p><strong>解决最小12px问题</strong></p><div class="language-css"><pre><code><span class="token property">font-size</span><span class="token punctuation">:</span>10px<span class="token punctuation">;</span>          \n<span class="token property">-webkit-transform-origin-x</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>    <span class="token comment">/*定义元素被置于x轴的何处*/</span>\n<span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.90<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*定义元素被缩放*/</span>\n</code></pre></div><h2 id="四、文本相关样式，可以继承"><a class="header-anchor" href="#四、文本相关样式，可以继承" aria-hidden="true">#</a> 四、文本相关样式，可以继承</h2><ol><li><p><code>text-indent</code>，首行缩进，单位:px em，一般使用2em（表示第一行空2格）</p><p>em 是本身的font-size值相比较 font-size:20px 。1em=20px,2em=40px</p></li><li><p><code>text-align</code>，文字对齐方式，可以继承,center/left/right。对inline元素都起作用；如果子元素都是span，可以给父级div设置</p><p>让文字两端对齐：</p></li></ol><div class="language-css"><pre><code><span class="token property">text-align</span><span class="token punctuation">:</span>justify\n<span class="token property">text-align-last</span><span class="token punctuation">:</span>justify\n</code></pre></div><ol start="3"><li><p><code>text-decoration</code>，设置文本装饰，可以继承</p><p><code>line-through</code>，中划线，<code>underline</code>，下划线，</p><p><code>overline</code>，上划线，，，<code>none</code>，去掉下划线</p></li><li><p><code>letter-spacing</code>，字母与字母之间的距离，文字与文字之间的距离。</p></li><li><p><code>word-spacing</code>，单词与单词之间的距离，空白距离</p></li><li><p>如果想让横着的文字重叠到一起：设置letter-spacing 为负值</p><p>如果想让竖着的文字重叠到一起：设置行高为0。</p></li><li><p><code>user-select: none</code> 让用户不能选择文本内容</p></li><li><p><code>text-overflow: ellipsis</code>； 超过文本变点状</p></li><li><p><code>text-transform: uppercase</code> 让输入的字母通通大写；</p></li><li><p><code>white-space</code> 空白处理</p><p>当html中输入多个空白符时，默认会被当成一个空白符处理，就是这个属性控制的；</p></li></ol><ul><li><code>normal</code>： 合并空白符和换行符</li><li><code>nowrap</code>：合并空白符，但不许换行；</li><li><code>pre</code>：不合并空白符，并且只在有换行符的地方换行；（常用）</li><li><code>pre-wrap</code>：不合并空白符，允许换行符换行和文本自动换行；</li></ul><ol start="11"><li><code>word-break: break-all</code>; 以字母作为依据换行，解决文本在不该换行的时候换行；</li></ol><p><code>white-space: pre-wrap;</code> textarea保留换行；</p><h2 id="五、文本变点状"><a class="header-anchor" href="#五、文本变点状" aria-hidden="true">#</a> 五、文本变点状</h2><ol><li>单行变点状：</li></ol><div class="language-css"><pre><code><span class="token property">white-space</span><span class="token punctuation">:</span>nowrap<span class="token punctuation">;</span>     <span class="token comment">/*超出文本不换行*/</span>\n<span class="token property">text-overflow</span><span class="token punctuation">:</span>ellipsis<span class="token punctuation">;</span>    <span class="token comment">/*超出文本变点状*/</span>\n<span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>        <span class="token comment">/*超出文本内容隐藏*/</span>\n</code></pre></div><ol start="2"><li>多行变点状：</li></ol><div class="language-css"><pre><code><span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span>    <span class="token comment">/*旧版弹性盒子;*/</span>\n<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span>    <span class="token comment">/*项目往下排;*/</span>\n<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>2<span class="token punctuation">;</span>    <span class="token comment">/*超出两行文本变点状;*/</span>\n<span class="token property">overflow</span><span class="token punctuation">:</span>hidden<span class="token punctuation">;</span>        <span class="token comment">/*超出内容隐藏;*/</span>\n</code></pre></div><ol start="3"><li><p>white-space属性</p><p>（1）nowrap，文本不换行</p><p>（2）pre-line，保留换行符，在textarea输入的回车会换行；</p></li></ol><h2 id="六、伪类选择器"><a class="header-anchor" href="#六、伪类选择器" aria-hidden="true">#</a> 六、伪类选择器</h2><p><code>a:link</code>，初始样式。</p><p><code>a:visited</code>，访问过后的样式。</p><p><code>a:hover</code>，鼠标滑过的样式。</p><p><code>a:active</code>，鼠标按住的样式。</p><p>顺序不能错乱：l-v-h-a。</p><h2 id="面试题"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>● 引入css的方式有几种？</p><p>● 单行文本水平垂直居中如何实现？</p><p>● 选择器优先级如何计算？</p>',53);n.render=function(s,a,n,t,o,i){return e(),p("div",null,[l])};export default n;export{a as __pageData};
