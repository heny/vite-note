import{_ as a,c as e,o as i,a5 as s}from"./chunks/framework.CmFZ6rCi.js";const E=JSON.parse('{"title":"Vue项目Bug记录","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/Vue/vue项目bug记录.md","filePath":"src/frontend/Vue/vue项目bug记录.md","lastUpdated":1658819684000}'),t={name:"src/frontend/Vue/vue项目bug记录.md"},l=s(`<h1 id="vue项目bug记录" tabindex="-1">Vue项目Bug记录 <a class="header-anchor" href="#vue项目bug记录" aria-label="Permalink to &quot;Vue项目Bug记录&quot;">​</a></h1><h2 id="渲染问题" tabindex="-1">渲染问题 <a class="header-anchor" href="#渲染问题" aria-label="Permalink to &quot;渲染问题&quot;">​</a></h2><ol><li>页面渲染会按照静态的数据，之后再渲染请求到的数据，要注意一下顺序的问题；</li><li>遇到问题使用debugger试试渲染顺序的问题；</li><li>如果遇到页面没有渲染，可以查看network数据有没有请求成功;</li><li>出现list undefined但是页面没有出现问题，是因为使用了下标取值时，还没有值的，给父元素加个v-if，判断数组的长度；</li><li>在data数据里面引入图片不起作用的问题，需要在data函数里面require引入才行；</li></ol><h2 id="单html问题" tabindex="-1">单html问题 <a class="header-anchor" href="#单html问题" aria-label="Permalink to &quot;单html问题&quot;">​</a></h2><ul><li>使用ui框架没有渲染出来：vue官方提示说过，在html文件不支持写自闭合标签，因此如果没有渲染出来标签可能是写了自闭合标签；</li></ul><h2 id="element-ui问题" tabindex="-1">Element-ui问题 <a class="header-anchor" href="#element-ui问题" aria-label="Permalink to &quot;Element-ui问题&quot;">​</a></h2><h3 id="输入框-keyup失效" tabindex="-1">输入框@keyup失效 <a class="header-anchor" href="#输入框-keyup失效" aria-label="Permalink to &quot;输入框@keyup失效&quot;">​</a></h3><ul><li>加上.native转为原生的就可以解决了；<code>@keyup.enter.native=&#39;&#39;</code>；</li></ul><h3 id="遮罩层档住内容层" tabindex="-1"><strong>遮罩层档住内容层</strong> <a class="header-anchor" href="#遮罩层档住内容层" aria-label="Permalink to &quot;**遮罩层档住内容层**&quot;">​</a></h3><ul><li>在el-dialog标签里添加 <code>:modal-append-to-body=&#39;false&#39;</code></li></ul><h2 id="vue项目打包后页面刷新出现404错误" tabindex="-1">Vue项目打包后页面刷新出现404错误 <a class="header-anchor" href="#vue项目打包后页面刷新出现404错误" aria-label="Permalink to &quot;Vue项目打包后页面刷新出现404错误&quot;">​</a></h2><p>利用nginx配置一下location就可以了</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # 配置404</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    location </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        index index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        try_files $uri $uri</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">index.html;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><ul><li><p>宝塔面板配置路径</p><p><img src="https://notecdn.hrhe.cn/images/vue%E9%A1%B9%E7%9B%AEbug%E8%AE%B0%E5%BD%95_01.png" alt="image-20200406221655304"></p></li></ul><h2 id="test" tabindex="-1">Test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;Test&quot;">​</a></h2>`,15),n=[l];function h(r,o,d,u,p,c){return i(),e("div",null,n)}const g=a(t,[["render",h]]);export{E as __pageData,g as default};
