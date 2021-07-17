import{o as n,c as a,d as s}from"./app.e9024871.js";const t='{"title":"html-12 HTML5","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、HTML5的概念","slug":"一、html5的概念"},{"level":2,"title":"二、HTML5新增的特性","slug":"二、html5新增的特性"},{"level":2,"title":"三、使用iconfont图标","slug":"三、使用iconfont图标"},{"level":2,"title":"四、新增的语义化标签","slug":"四、新增的语义化标签"},{"level":2,"title":"五、语义化标签的IE兼容问题处理","slug":"五、语义化标签的ie兼容问题处理"},{"level":2,"title":"六、HTML5新增表单属性","slug":"六、html5新增表单属性"},{"level":2,"title":"七、html5新增的属性","slug":"七、html5新增的属性"},{"level":2,"title":"八、form表单新增的相关属性","slug":"八、form表单新增的相关属性"},{"level":2,"title":"九、HTML5新增多媒体标签","slug":"九、html5新增多媒体标签"},{"level":2,"title":"十、设置字体：","slug":"十、设置字体："},{"level":2,"title":"课外知识：","slug":"课外知识："}],"relativePath":"src/frontend/html5/html-12 HTML5.md","lastUpdated":1620540045783}',p={},o=s('<h1 id="html-12-html5"><a class="header-anchor" href="#html-12-html5" aria-hidden="true">#</a> html-12 HTML5</h1><h2 id="一、html5的概念"><a class="header-anchor" href="#一、html5的概念" aria-hidden="true">#</a> 一、HTML5的概念</h2><p>1.广义的概念：H5 ≈ HTML5+CSS3+JavaScript<br> 2.狭义概念：html的5.0版本</p><h2 id="二、html5新增的特性"><a class="header-anchor" href="#二、html5新增的特性" aria-hidden="true">#</a> 二、HTML5新增的特性</h2><ol><li>简洁的主体结构。</li><li>语义化标签。</li><li>增强的表单元素。</li><li>音频视频。</li><li>canvas画布。</li><li>SVG。</li><li>地理位置。</li><li>web存储（本地存储）。</li><li>离线缓存。</li><li>拖拽API。</li><li>web workers（让JS运行在服务器端）。</li><li>服务器发送事件。</li></ol><p>简洁的主题结构：</p><p>html5支持不用head、body、还有一些结束标签，浏览器会自动补齐。</p><h2 id="三、使用iconfont图标"><a class="header-anchor" href="#三、使用iconfont图标" aria-hidden="true">#</a> 三、使用iconfont图标</h2><ol><li><a href="https://www.iconfont.cn/" target="_blank" rel="noopener noreferrer">https://www.iconfont.cn/</a> 官网下载文件，并用link引入iconfont.css文件。</li><li>引入方式：</li></ol><p>a. font class</p><p>建立一个新标签，class=&quot;iconfont 图标代码&quot; ，</p><p>b. unicode</p><p>拷贝生成的@font-face代码，拷贝iconfont样式，span标签里填写值。</p><p>c. symbol</p><p>script引入生成的js文件，加入通用icon代码，挑选响应图标获取类名。</p><p>d. 表单加入提示图标</p><p>input起类名放iconfont，value值填写图标代码，填写unicode生成的代码。</p><p>e. before引入，content:&quot;\\e900&quot;; 如果图标不显示则改变加入字体文件font-family:&quot;iconfont&quot;;。</p><ol start="3"><li>iconfont改变样式的方法：</li></ol><p>a. font-size 改变图标的大小</p><p>b. color 改变图标的颜色</p><p>c. font-weight:改变图标的边框粗细；</p><p>d. symbol方式修改颜色，打开js文件，搜索fill，并修改填充的颜色值。</p><h2 id="四、新增的语义化标签"><a class="header-anchor" href="#四、新增的语义化标签" aria-hidden="true">#</a> 四、新增的语义化标签</h2><ol><li><p>hearder：定义文档的页眉，头部；</p></li><li><p>nav：定义导航链接的部分；</p></li><li><p>footer：定义文档或节的页眉底部；</p></li><li><p>section：定义文档中的节，可以替换div，语义不强烈，相当于一个块。</p></li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="6"><li><p>aside：侧边栏，侧边的都可以用到；</p></li><li><p>article：定义文章；</p></li><li><p>hgroup；表示标题组，需要和h1-h6组合使用，可以在一个页面使用多个h1标签；一个标题组可以使用一个h1标题，标题组外面只能有一个h1标题。</p></li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hgroup</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>金正恩的故事<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>去会见特朗普的故事<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span><span class="token punctuation">&gt;</span></span>去会见特朗普的第一天，<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>hgroup</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>这个<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>小秘密<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span>是什么呢，就不告诉你！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="8"><li>figure；主要用作表示内容的附属信息（如图片、表格、代码等），如果删除，不影响整体文档流和文章的完整性。</li></ol><p>figure属性值：</p><ol start="9"><li>figcaption：标题；</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figure</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> //是个内联块 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>figcaption</span><span class="token punctuation">&gt;</span></span>图片说明<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figcaption</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>figure</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>time表示时间的标签，没有任何样式，常用于js可以修改时间。</p><p>mark用来标记文字。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>time</span><span class="token punctuation">&gt;</span></span>04月15号<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>time</span><span class="token punctuation">&gt;</span></span>今天<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mark</span><span class="token punctuation">&gt;</span></span>学习<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mark</span><span class="token punctuation">&gt;</span></span>HTML5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p><img src="https://notecdn.heny.vip/images/html-12_HTML5-01.png" alt="image"></p><h2 id="五、语义化标签的ie兼容问题处理"><a class="header-anchor" href="#五、语义化标签的ie兼容问题处理" aria-hidden="true">#</a> 五、语义化标签的IE兼容问题处理</h2><ol><li>创建元素，给元素转块</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="2"><li>引入html5shiv.js文件</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>html5shiv.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="六、html5新增表单属性"><a class="header-anchor" href="#六、html5新增表单属性" aria-hidden="true">#</a> 六、HTML5新增表单属性</h2><p>复习之前学过的表单元素：</p><p>text、password、radio、checkbox、button、submit、reset、file、image、</p><p>h5表单，新增添加了常用的验证信息，只能输入限定值，才能被提交上去。</p><p>h5新增表单属性input 的type类型:</p><div class="language-html"><pre><code><span class="token comment">&lt;!-- type=&quot;url&quot; 输入内容是链接，移动端会出现带.com的键盘--&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;email&quot; 输入内容是邮件，移动端出现带@符号的键盘--&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;search&quot; 搜索框 输入内容后会出现叉号--&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;tel&quot; 输入内容是电话号码，移动端会出现数字键盘 --&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;number&quot; 数字 value默认值 step步长 min最小值 max最大值--&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;range&quot; 滑块 value默认值 step步长 min最小值 max最大值 --&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;date&quot; 选取年月日--&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;datetime-local&quot; 选择年月日和时间 --&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;month&quot; 选择一整个月 --&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;week&quot; 选择一整个周 --&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;time&quot; 时间 --&gt;</span> \n<span class="token comment">&lt;!-- type=&quot;datetime&quot; 需要用户手动输入 --&gt;</span> \n&lt;!-- type=&quot;color&quot; //颜色选择器\n</code></pre></div><h2 id="七、html5新增的属性"><a class="header-anchor" href="#七、html5新增的属性" aria-hidden="true">#</a> 七、html5新增的属性</h2><ol><li>contenteditable 可以编辑的文字；</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">contenteditable</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span> \n</code></pre></div><p>contenteditable=&quot;true&quot; 放在标签里可以编辑的文字。</p><p>该标签可以自适应高度，而textarea不能自适应高度；</p><ol start="2"><li>右到左显示</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bdo</span> <span class="token attr-name">dir</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>rtl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>该段落文字从右到左显示。<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bdo</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>dir 改变文本的方向，ltr 从左向右，rtl 从右向左，，auto 自动；</p><p>必须使用bdo标签，覆盖文本方向，适用于需要倒过来显示的文本，很少使用；</p><ol start="3"><li><p>hidden 元素进行隐藏；</p></li><li><p>title 元素的额外信息，鼠标放在元素上面显示；</p></li></ol><h2 id="八、form表单新增的相关属性"><a class="header-anchor" href="#八、form表单新增的相关属性" aria-hidden="true">#</a> 八、form表单新增的相关属性</h2><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>请必须输入文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">autofocus</span> <span class="token attr-name">autocomplete</span> <span class="token attr-name">required</span> <span class="token attr-name">pattern</span> <span class="token attr-name">multiple</span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><ul><li><p><code>placeholder</code> 输入框里提示内容文字</p></li><li><p><code>autofocus</code> 输入框自动获取鼠标焦点（一个页面只能给一个form表单元素添加）</p></li><li><p><code>autocomplete</code> 属性值自动返回之前输入的值，有两个值：on、off（默认值为on）；</p><p>设置off可以去掉下拉框提示，也可以给form设置</p></li><li><p><code>required</code> 必须项，不能为空</p></li><li><p><code>pattern</code> 验证输入域的值，限制输入数值，它的值是一个正则表达式（[a-z]{3,8}）；</p></li><li><p><code>multiple</code> 用于多选</p></li><li><p><code>min</code> 最小输入值（number、range）</p></li><li><p><code>max</code> 最大输入值（number、range）</p></li><li><p><code>step</code> 数字间隔步长（number、range）</p></li><li><p><code>accesskey=&quot;键位&quot;</code> 规定激活（使元素获得焦点）元素快捷键。一般alt+s。</p></li></ul><p>form不在form表单里面的输入域也能被提交数据；</p><ol><li>给form表单添加id名字，给外面的</li><li>form表单元素添加form=&quot;form表单id&quot;</li></ol><p>fieldset 对表单中的相关元素进行分组，会在相关表单元素周围绘制边框；可以嵌套，可以有多个；</p><p>legend 为fieldset定义标题；</p><p>利用list来设置下拉选项菜单；</p><p>用datalist替换select，option作为选项，</p><p>类似于百度，点击之后出现一堆选项。</p><p>建立连接：</p><p>在input标签设置list=&quot;名&quot;，在datalist设置id=&quot;名&quot;。</p><p>注意：option里面必须输入value值，否则不能选择。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>datalist</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>test<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">&gt;</span></span>请选择省份<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>北京<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>北京<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>datalist</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>修改单选框复选框默认样式html代码：</p><p>清除表单默认样式：<code>-webkit-appearance:none</code>;</p><p>第一种写法：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>打豆豆<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hobby<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>第二种写法：</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>打豆豆<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>hobby<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>select<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>css代码：</p><div class="language-css"><pre><code><span class="token selector">label</span><span class="token punctuation">{</span> \n    <span class="token property">width</span><span class="token punctuation">:</span>34px<span class="token punctuation">;</span> \n    <span class="token property">height</span><span class="token punctuation">:</span>34px<span class="token punctuation">;</span> \n<span class="token punctuation">}</span> \n<span class="token selector">label input</span><span class="token punctuation">{</span> \n    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span> //隐藏默认样式 \n<span class="token punctuation">}</span> \n<span class="token selector">label span</span><span class="token punctuation">{</span>\n   <span class="token property">display</span><span class="token punctuation">:</span>block<span class="token punctuation">;</span>\n   <span class="token property">width</span><span class="token punctuation">:</span>34px<span class="token punctuation">;</span> \n   <span class="token property">height</span><span class="token punctuation">:</span>34px<span class="token punctuation">;</span> \n   <span class="token property">background</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>./images/radio.png<span class="token punctuation">)</span></span> no-repeat 0 0<span class="token punctuation">;</span><span class="token punctuation">}</span> \n<span class="token selector">label input:checked + span</span><span class="token punctuation">{</span>\n //当label里面input处于被选中状态时，改变兄弟元素span的属性<span class="token punctuation">;</span> \n    <span class="token property">background-position</span><span class="token punctuation">:</span>0 -34px<span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>隐藏number的上下箭头</li></ul><div class="language-css"><pre><code><span class="token selector">input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">// 火狐去number后缀\ninput[type=number]</span> <span class="token punctuation">{</span>\n  <span class="token property">-moz-appearance</span><span class="token punctuation">:</span>textfield<span class="token important">!important</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="九、html5新增多媒体标签"><a class="header-anchor" href="#九、html5新增多媒体标签" aria-hidden="true">#</a> 九、HTML5新增多媒体标签</h2><p>1.audio音频标签；</p><p>第一种：直接src地址写</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">controls</span> <span class="token attr-name">loop</span> <span class="token attr-name">muted</span> <span class="token attr-name">autoplay</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>第二种：写多个音频，当浏览器不兼容第一个文件时，则会执行第二个音频。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">controls</span> <span class="token attr-name">loop</span> <span class="token attr-name">muted</span> <span class="token attr-name">autoplay</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/ogg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>audio/ogg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    您的浏览器不支持音频，请升级浏览器版本！\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>audio</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>src 路劲</p><p>controls: 加入控制器</p><p>loop 循环播放</p><p>muted 静音</p><p>autoplay 自动播放</p><p>浏览器及格式样式：</p><table><thead><tr><th>格式</th><th>MIME-type</th><th>最新的浏览器支持情况</th></tr></thead><tbody><tr><td>ogg</td><td>audio/ogg</td><td>Chrome、Firefox、Opera10+</td></tr><tr><td>mp3</td><td>audio/mpeg</td><td>Chrome、Firefox、Opera10+、IE9+、Safari5+</td></tr><tr><td>wav</td><td>audio/wav</td><td>Chrome、Firefox、Opera10+、Safari5+</td></tr></tbody></table><p>2.video插入视频</p><p>属性值：src controls loop muted autoplay，</p><p>width 设置video的宽度</p><p>height 设置video的高度</p><p>poster 设置视频播放器默认显示的图片（缩略图）</p><p>注意：如果需要修改播放器的高宽，必须等比例缩放，4:3或16:9，否则会出现多一段；</p><p>| 格式 | MIME-type | 最新的浏览器支持情况 | | ogg | video/ogg | Chrome、Firefox、Opera | | mp4 | video/mp4 | Chrome、Firefox、Opera25+、IE9+、Safari | | webM | video/webm | Chrome、Firefox、Opera |</p><h2 id="十、设置字体："><a class="header-anchor" href="#十、设置字体：" aria-hidden="true">#</a> 十、设置字体：</h2><p>1.声明字体文件：</p><div class="language-css"><pre><code>// 支持ttf和eot字体文件\n<span class="token atrule"><span class="token rule">@font-face</span></span><span class="token punctuation">{</span>\n    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> //这里填写引入了src的字体文件<span class="token punctuation">;</span>\n    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">&#39;字体文件.ttf|eot&#39;</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如果是woff字体文件：src: url(&#39;字体文件.woff&#39;) format(&#39;woff&#39;);</p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@font-face</span></span><span class="token punctuation">{</span> \n    <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&quot;声明字体&quot;</span><span class="token punctuation">;</span> \n    <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>字体文件.ttf<span class="token punctuation">)</span></span><span class="token punctuation">;</span> \n<span class="token punctuation">}</span>\n</code></pre></div><p>2.使用字体</p><div class="language-css"><pre><code><span class="token selector">.box</span><span class="token punctuation">{</span> <span class="token property">font-family</span><span class="token punctuation">:</span><span class="token string">&#39;myfont&#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>\n</code></pre></div><h2 id="课外知识："><a class="header-anchor" href="#课外知识：" aria-hidden="true">#</a> 课外知识：</h2><p>1.number属性值：</p><p>清除number默认样式，及上下箭头：</p><div class="language-css"><pre><code><span class="token comment">/*在chrome下移除input[number]的上下箭头*/</span>\n<span class="token selector">input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button</span><span class="token punctuation">{</span>\n    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none <span class="token important">!important</span><span class="token punctuation">;</span>\n     <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/*在firefox下移除input[number]的上下箭头*/</span>\n<span class="token selector">input[type=&quot;number&quot;]</span><span class="token punctuation">{</span>\n    <span class="token property">-moz-appearance</span><span class="token punctuation">:</span>textfield<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>添加一个number标签，限制最大长度为5，第一个数值5代表最大长度，第二个数字5代表</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span> <span class="token attr-name">oninput</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>if(value.length&gt;5)value=value.slice(0,5)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>在input标签里面加入以上代码，使输入框无法掉入e；</p><div class="language-html"><pre><code>onkeypress=&#39;return( /[\\d]/.test(String.fromCharCode(event.keyCode) ) )&#39;\n</code></pre></div><p>2.select下拉框清除默认样式</p><div class="language-css"><pre><code><span class="token property">appearance</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>\n<span class="token property">-moz-appearance</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>\n<span class="token property">-webkit-appearance</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>\n</code></pre></div><p>以上三种属性清除下拉框的默认样式；</p><p>background: url(&quot;arrow.png&quot;) no-repeat scroll right center transparent; 放下拉框的图片</p><p>padding-right: 14px; 空出箭头的位置；</p><p>ie浏览器清除下拉框的样式</p><p>select::-ms-expand{ display: none; }</p>',123);p.render=function(s,t,p,e,c,l){return n(),a("div",null,[o])};export default p;export{t as __pageData};