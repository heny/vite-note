import{o as i,c as l,d as e}from"./app.246f1876.js";const a='{"title":"html-06定位 BFC","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、 相对定位position：relative","slug":"一、-相对定位position：relative"},{"level":2,"title":"二、提升层级","slug":"二、提升层级"},{"level":2,"title":"三、绝对定位：position: absolute;","slug":"三、绝对定位：position-absolute"},{"level":2,"title":"四、 固定定位：position：fixed。","slug":"四、-固定定位：position：fixed。"},{"level":2,"title":"五、粘合定位","slug":"五、粘合定位"},{"level":2,"title":"六、 脱离文档流的属性","slug":"六、-脱离文档流的属性"},{"level":2,"title":"七、 BFC(块级格式化上下文)","slug":"七、-bfc-块级格式化上下文"},{"level":3,"title":"什么是BFC","slug":"什么是bfc"},{"level":3,"title":"如何生成BFC","slug":"如何生成bfc"},{"level":3,"title":"BFC的特性","slug":"bfc的特性"},{"level":3,"title":"BFC解决的问题","slug":"bfc解决的问题"},{"level":2,"title":"面试题","slug":"面试题"}],"relativePath":"src/frontend/html5/html-06 定位 BFC.md","lastUpdated":1615699077445}',t={},s=e('<h1 id="html-06定位-bfc"><a class="header-anchor" href="#html-06定位-bfc" aria-hidden="true">#</a> html-06定位 BFC</h1><h2 id="一、-相对定位position：relative"><a class="header-anchor" href="#一、-相对定位position：relative" aria-hidden="true">#</a> 一、 相对定位position：relative</h2><ol><li><p>只给一个元素加相对定位，不加具体的位置，对这个元素本身没有任何影响。</p></li><li><p>相对于原来的位置进行定位的，原来的位置还占位。</p></li><li><p>配合top,left,right,bottom使用</p></li><li><p>提升层级</p></li></ol><h2 id="二、提升层级"><a class="header-anchor" href="#二、提升层级" aria-hidden="true">#</a> 二、提升层级</h2><p>z-index:改变元素层级，只用在加了定位的元素上，</p><p>数值越高层级越大，正常文档流层级是0。</p><p><strong>不生效的原因</strong></p><ul><li>没有设置定位</li><li>子级的层级永远不可能高于父级；</li></ul><h2 id="三、绝对定位：position-absolute"><a class="header-anchor" href="#三、绝对定位：position-absolute" aria-hidden="true">#</a> 三、绝对定位：position: absolute;</h2><ol><li><p>相对于初始包含块定位，根据用户代理的不同，初始包含块可能是html，也可能是画布，脱离文档流不占位。</p></li><li><p>配合top,left,right,bottom使用</p></li><li><p>通常情况下绝对定位和相对定位配合使用，子元素用绝对定位，父元素用相对定位（子绝父相）。</p></li><li><p>加了绝对定位的元素，先看父元素有没有定位（绝对定位，相对定位，固定定位），如果父元素有定位，就相对于父元素定位，父元素没有定位，就看爷爷，爷爷有定位就相对于爷爷定位</p></li><li><p>提升层级</p></li></ol><h2 id="四、-固定定位：position：fixed。"><a class="header-anchor" href="#四、-固定定位：position：fixed。" aria-hidden="true">#</a> 四、 固定定位：position：fixed。</h2><ol><li>相对于浏览器进行定位，定位之后脱离文档流不占位。</li><li>提升层级</li><li>配合top,left,right,bottom使用</li></ol><p>添加fixed需要添加-webkit-transform: translateZ(0) 防止webkit抖动；</p><h2 id="五、粘合定位"><a class="header-anchor" href="#五、粘合定位" aria-hidden="true">#</a> 五、粘合定位</h2><p>position: sticky；</p><p>是relative和fixed的结合体；</p><p>当元素在屏幕内，表现为relative，当溢出屏幕，表现为fixed；</p><p>作用：特别适合导航的跟随定位效果；</p><div class="language-css"><pre><code><span class="token selector">nav</span> <span class="token punctuation">{</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> -webkit-sticky<span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> sticky<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token comment">/* 必须加 */</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="六、-脱离文档流的属性"><a class="header-anchor" href="#六、-脱离文档流的属性" aria-hidden="true">#</a> 六、 脱离文档流的属性</h2><ol><li>float:left;</li><li>float:right;</li><li>position:absolute;</li><li>position:fixed;</li></ol><p>浮动，脱离文档流但是不脱离文本流。</p><p>定位：既脱离文档流，也脱离文本流。</p><p>脱离文档流的元素就不区分块还是内联，都可以设置宽高等盒模型的样式。</p><h2 id="七、-bfc-块级格式化上下文"><a class="header-anchor" href="#七、-bfc-块级格式化上下文" aria-hidden="true">#</a> 七、 BFC(块级格式化上下文)</h2><h3 id="什么是bfc"><a class="header-anchor" href="#什么是bfc" aria-hidden="true">#</a> 什么是BFC</h3><p>Block Formatting Context：指页面中的一个渲染区域，并且拥有一套渲染规则，他决定了其子标签如何定位，以及与其他标签的相互关系和作用。</p><h3 id="如何生成bfc"><a class="header-anchor" href="#如何生成bfc" aria-hidden="true">#</a> 如何生成BFC</h3><p>既然BFC是一块渲染区域，那这块渲染区域到底在哪，它又是有多大，这些由生成BFC的标签决定，CSS2.1中规定满足下列CSS声明之一的标签便会生成BFC。</p><ol><li>根标签 html</li><li>float的值不为none(为left/right)。</li><li>overflow的值不为visible（为hidden/scroll/auto都行）</li><li>display的值为inline-block</li><li>position的值为absolute或fixed</li></ol><h3 id="bfc的特性"><a class="header-anchor" href="#bfc的特性" aria-hidden="true">#</a> BFC的特性</h3><ol><li>内部的标签会在垂直方向上一个接一个的放置</li><li>垂直方向上的距离由margin决定，属于同一个BFC的两个相邻标签的margin会发生重叠</li><li>每个标签的左外边距与包含块的左边界相接触（从左向右），即使浮动标签也是如此。</li><li>BFC的区域不会与float的标签区域重叠</li><li>计算BFC的高度时，浮动子标签也参与计算</li><li>BFC就是页面上的一个隔离的独立容器，容器里面的子标签不会影响到外面标签，反之亦然</li></ol><h3 id="bfc解决的问题"><a class="header-anchor" href="#bfc解决的问题" aria-hidden="true">#</a> BFC解决的问题</h3><p>1）外边距折叠 (margin重叠的问题)</p><p>2）自适应两栏或三栏布局。</p><p>3）防止字体环绕</p><p>4）清除浮动</p><ol start="5"><li>margin塌陷问题</li></ol><h2 id="面试题"><a class="header-anchor" href="#面试题" aria-hidden="true">#</a> 面试题</h2><p>● 如何让盒子水平垂直居中？</p><p>● 简述BFC规则，及解决的问题？</p>',41);t.render=function(e,a,t,o,n,p){return i(),l("div",null,[s])};export default t;export{a as __pageData};
