import{_ as t,c as i,o as a,a4 as s}from"./chunks/framework.Caa1YTU6.js";const u=JSON.parse('{"title":"html-02 a标签，表格，表单","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/html5/html-02 a标签，表格，表单.md","filePath":"src/frontend/html5/html-02 a标签，表格，表单.md","lastUpdated":1615692881000}'),l={name:"frontend/html5/html-02 a标签，表格，表单.md"},e=s(`<h1 id="html-02-a标签-表格-表单" tabindex="-1">html-02 a标签，表格，表单 <a class="header-anchor" href="#html-02-a标签-表格-表单" aria-label="Permalink to &quot;html-02 a标签，表格，表单&quot;">​</a></h1><h2 id="一、a标签" tabindex="-1">一、a标签 <a class="header-anchor" href="#一、a标签" aria-label="Permalink to &quot;一、a标签&quot;">​</a></h2><ol><li><p>a标签表示链接，是内联标签(行内标签)。</p></li><li><p>默认有下划线，未访问的时候文字颜色是蓝色，访问以后是蓝紫色</p></li><li><p>href属性里面放具体路径,可以放绝对路径,可以放相对路径。</p></li><li><p>target=“_blank”在新建标签中打开页面。</p></li><li><p><code>&lt;base target=&quot;_blank&quot; /&gt;</code> ba se标签，是一个单标签，直接在head头部填写，当前html文件所有a标签新窗口打开。</p></li><li><p>target=&quot;_self&quot; 在当前标签中打开页面。</p></li><li><p>跳转到当前页面的指定位置：在指定位置设置id名，href属性里面设置#id名。</p></li><li><p>跳转到另一个页面的指定位置：在另一个页面指定位置设置id名，当前页面href设置另一个页面的路径#id名。</p></li><li><p>下载文件：在href属性直接写入文件路径；</p></li></ol><h2 id="二、表格" tabindex="-1">二、表格 <a class="header-anchor" href="#二、表格" aria-label="Permalink to &quot;二、表格&quot;">​</a></h2><ol><li>table标签表示表格，tr标签表示行，td标签表示单元格，</li></ol><p>th标签表示单元格标题，th标签默认居中加粗。</p><ol start="2"><li>设置表格的边框，在table标签的开始标签里面设置border=&quot;1&quot;;（不写的话表格无边框）</li></ol><p>在css里给每个单元格设置边框</p><p>border：1px solid black; 1边框宽度，实线的，黑色边框</p><ol start="3"><li>单元格与单元格之间的距离：在table的开始标签里设置<code>cellspacing=&quot;0&quot;</code>;</li></ol><p>单元格的边框与内容之间的距离：在table开始标签设置<code>cellpadding=&quot;0&quot;</code>;</p><ol start="4"><li>给表格设置宽高：在css里面给table设置width和height。</li></ol><p>表格边框合并一条线：css里面加：<code>border-collapse:collapse</code>;</p><ol start="5"><li>改变其中一个单元格的宽度，可以改变一列的宽度。合并列：<code>colspan=&quot;2&quot;</code>;</li></ol><p>改变其中一个单元格的高度，可以改变一行的高度。合并行：<code>rowspan=&quot;3&quot;</code>;</p><ol start="6"><li><p>表格的标题用caption，是table标签的子元素，写在table下面。</p></li><li><p>thead标签，表格的头部，tbody标签，表格的主体，tfoot标签，表格的脚注。</p></li></ol><p>加上可以让表格的语义化更强。</p><h2 id="三、表单" tabindex="-1">三、表单 <a class="header-anchor" href="#三、表单" aria-label="Permalink to &quot;三、表单&quot;">​</a></h2><p>表单的目的是收集用户信息。</p><p>表单一般由三部分组成：</p><ol><li><p>表单控件(表单元素)，</p></li><li><p>提示信息，</p></li><li><p>表单域(form)，</p></li><li><p>form标签定义表单</p></li></ol><p><code>&lt;form action=&quot;&quot; method=&quot;POST/GET&quot;&gt;</code></p><p>action=&quot;&quot;，表单提交到什么位置，里面写相对路径和绝对路径。</p><p>method=&quot;POST/GET&quot;，表单提交方式，</p><p>GET相对不安全，有长度限制，POST相对安全，长度不受限制。</p><ol start="2"><li>input标签，内联块标签(行内块标签)。</li></ol><table tabindex="0"><thead><tr><th>属性</th><th>属性值</th><th>描述</th></tr></thead><tbody><tr><td>type</td><td>text</td><td>单行文本输入框</td></tr><tr><td></td><td>password</td><td>密码输入框</td></tr><tr><td></td><td>radio</td><td>单选按钮</td></tr><tr><td></td><td>checkbox</td><td>复选框</td></tr><tr><td></td><td>button</td><td>普通按钮（启动js程序）</td></tr><tr><td></td><td>submit</td><td>提交按钮</td></tr><tr><td></td><td>reset</td><td>重置按钮</td></tr><tr><td></td><td>image</td><td>图像形式提交按钮</td></tr><tr><td></td><td>file</td><td>上传文件</td></tr><tr><td>name</td><td>由用户自定义</td><td>控件的名称</td></tr><tr><td>value</td><td>由用户自定义</td><td>input控件中的默认文本值</td></tr><tr><td>size</td><td>正整数</td><td>input控件在页面中显示的宽度</td></tr><tr><td>checked</td><td>checked</td><td>定义选择控件默认被选中的项</td></tr><tr><td>maxlength</td><td>正整数</td><td>控件允许输入最多字符数</td></tr></tbody></table><ol start="2"><li><p>label标签：label标签为input元素定义标注。</p><p>作用：点击文字也能选中对应的表单。</p><p>绑定方法：for属性对应表单id。</p></li></ol><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;male&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Male&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;radio&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;male&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;male&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>简单的写法： //直接label标签包裹input标签，也能选中文字选择对应的选框。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    用户名：&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">input</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sex&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;male&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol start="3"><li><p>value属性，默认值，改变名字。</p></li><li><p>placeholder，属性 输入框提示内容（h5新增属性）；用在input属性里面。</p><p>需要修改placeholder的颜色，可以用::双冒号选中placeholder；</p></li><li><p>checked，属性，用在单选框和复选框里，默认选中值，</p><p>checked=&quot;checked&quot; 成对直接写一个单词</p></li><li><p>readonly，属性，只读，用户不可以编辑，用于文本框，可以提交数据</p><p>disabled ，属性，禁用，用户不可以编辑，用于文本框，也不可以提交数据，默认背景灰色。</p></li><li><p>select标签和option标签配合使用。select是父元素，option是子元素。</p><p>下拉框默认选中，selected，，，size=&quot;&quot; 下拉框默认显示几项</p><p>增加：hidden 隐藏表单，在提交到后台时，也能够提交，</p></li><li><p>textarea标签(不加在input里,是单独的标签)，文本域。是内联块标签(行内标签)，可以输入多行文字。</p><p>想要给文本域设置宽高，在css中设置，</p><p>默认用户可以自行缩放，禁止缩放在css中设置resize:none;</p><p><code>&lt;textarea name=&quot;&quot; id=&quot;&quot;&gt;&lt;/textarea&gt;</code></p><p>textarea痛点：不能自适应高度，如果需要自适应高度可以创建一个div标签，并设置contenteditable属性；</p></li></ol><p>注意事项：</p><p>使用form表单时必须填写form标签，action和method也填写，当填写了之后输入栏就有值了，text文本框时需要输入提交name名字，否则无法提交数据；</p><p>使用小方法：</p><p>一般表单用dl、dt、dd用来布局，</p><p>dt表示项目，dd表示输入框</p><h2 id="面试题" tabindex="-1">面试题 <a class="header-anchor" href="#面试题" aria-label="Permalink to &quot;面试题&quot;">​</a></h2><p>● 如何合并表格单元格？</p><p>● thead、tbody、tfoot有什么作用？</p><p>● 常见表单元素有哪些？</p>`,41),p=[e];function d(h,o,n,r,k,c){return a(),i("div",null,p)}const g=t(l,[["render",d]]);export{u as __pageData,g as default};
