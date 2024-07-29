import{_ as s,c as i,o as a,a5 as n}from"./chunks/framework.CmFZ6rCi.js";const c=JSON.parse('{"title":"VuePress搭建个人博客","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/other-note/VuePress搭建个人博客.md","filePath":"src/frontend/other-note/VuePress搭建个人博客.md","lastUpdated":1645598277000}'),p={name:"src/frontend/other-note/VuePress搭建个人博客.md"},l=n(`<h1 id="vuepress搭建个人博客" tabindex="-1">VuePress搭建个人博客 <a class="header-anchor" href="#vuepress搭建个人博客" aria-label="Permalink to &quot;VuePress搭建个人博客&quot;">​</a></h1><h2 id="全局安装vuepress" tabindex="-1">全局安装vuepress <a class="header-anchor" href="#全局安装vuepress" aria-label="Permalink to &quot;全局安装vuepress&quot;">​</a></h2><p><code>yarn global add vuepress</code></p><h2 id="创建vuepress目录" tabindex="-1">创建vuepress目录 <a class="header-anchor" href="#创建vuepress目录" aria-label="Permalink to &quot;创建vuepress目录&quot;">​</a></h2><p><code>.vuepress</code>可以使用cmd来创建，<code>mkdir docs\\.vuepress</code>， 记得docs也带上；</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docs</span></span>
<span class="line"><span>    .vuepress</span></span>
<span class="line"><span>        dist</span></span>
<span class="line"><span>        public</span></span>
<span class="line"><span>        config.js</span></span>
<span class="line"><span>    blog</span></span>
<span class="line"><span>    README.md</span></span>
<span class="line"><span>package.json</span></span></code></pre></div><p><strong>docs</strong> 是项目根目录，</p><p><strong>package.json</strong> 是用来一键操作代码的；</p><p><strong>public</strong> 图片放置文件夹，直接使用/logo.png就可以了；</p><p><strong>config.js</strong> 整个项目的核心，所以配置导航栏和侧边栏都在该文件；</p><p><strong>blog</strong> 自定义的文件夹；</p><p><strong>dist</strong> 打包之后的文件夹</p><h2 id="配置package-json" tabindex="-1">配置package.json <a class="header-anchor" href="#配置package-json" aria-label="Permalink to &quot;配置package.json&quot;">​</a></h2><p>在package.json里面添加scripts一键操作代码，之后可以直接使用</p><p><code>npm run docs:dev</code> 来运行开发环境</p><p><code>npm run docs:build</code>： 打包 用来上传的;</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vuepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vuepress build docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="配置默认主题" tabindex="-1">配置默认主题 <a class="header-anchor" href="#配置默认主题" aria-label="Permalink to &quot;配置默认主题&quot;">​</a></h2><p>在docs下的README.md填写以下的内容，默认排版格式的首页；</p><p>heroImage为首页的图片，需要自选下载，放置public文件夹；</p><p>注意：复制下面的代码最好使用notepad++，或者其他软件打开，不要使用typora打开，会出错；</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">home</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">heroImage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/logo.png</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">heroText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">前端学习圈</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">actionText</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">快速上手 →</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">actionLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/blog/type.md</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">features</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">简洁至上</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Vue驱动</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">- </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">高性能</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">footer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">MIT Licensed | Copyright © 2018-present Evan You</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-01.png" alt="image"></p><h2 id="创建新页面" tabindex="-1">创建新页面 <a class="header-anchor" href="#创建新页面" aria-label="Permalink to &quot;创建新页面&quot;">​</a></h2><p>在docs下面，一个文件夹就相当于一个页面，可以在docs文件夹下创建新文件夹，作为一个页面，blog文件夹可以删除，自己另外创建其他页面；</p><p>在blog文件夹下创建md文件，开始写博客；</p><h2 id="配置config-js" tabindex="-1">配置config.js <a class="header-anchor" href="#配置config-js" aria-label="Permalink to &quot;配置config.js&quot;">​</a></h2><p>位置：docs/.vuepress/config.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;前端学习圈&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    description: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;描述内容&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    head:[[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;link&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,{rel:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;shortcut icon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;image/x-icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,href:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`./favicon.ico\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    themeConfig:{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        repo: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;项目仓库地址&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        repoLabel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;仓库地址标题&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        nav:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;home&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,link:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,link:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/blog/js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 注意如果是根路径需要写两个斜杠&#39;/blog/&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebarDepth: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//仅支持h2和h3标题,h1作为显示的标题;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sidebar:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;/blog&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                title:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;分组标题&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                collapsable: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 去掉向下箭头</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                children:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;day01&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;day02&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                //children里面取一级标题作为显示名称,一个页面只能有一个一级标题,并且必须在第一行;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// sidebar的结束符;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-02.png" alt="image"></p><p>head是用来放图标的，放到public文件夹，nav是顶部导航，sliderbar是侧边栏，是blog文件夹的侧边栏，js为blog文件夹下的一个js.md文件；</p><p>路径：以&#39;/&#39;结尾的路径会被默认查找*/README.md</p><p>搜索：仅支持二级和三级标题的搜索，填写文章时，注意不要使用h2和h3以外的标题，不会出现在侧边栏上；</p><h2 id="常用的几个yaml语法" tabindex="-1">常用的几个YAML语法 <a class="header-anchor" href="#常用的几个yaml语法" aria-label="Permalink to &quot;常用的几个YAML语法&quot;">​</a></h2><p>以下的内容都是给某个md文件设置的选项；</p><p>自动生成侧边栏，仅仅包含当前页面标题的链接侧边栏，不会有其他侧边栏存在</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">auto</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 自动生成侧边栏;  </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    如果在config配置,auto需要带引号：sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;auto&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 禁用侧边栏;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">navbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   # 禁用导航栏;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # 改用其他组件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><p>以上是普通配置，更多配置请查看官方文档；</p><p><a href="https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5" target="_blank" rel="noreferrer">https://vuepress.vuejs.org/zh/default-theme-config/#%E9%A6%96%E9%A1%B5</a></p><h2 id="侧边栏增强" tabindex="-1">侧边栏增强 <a class="header-anchor" href="#侧边栏增强" aria-label="Permalink to &quot;侧边栏增强&quot;">​</a></h2><p>1、侧边栏分组，针对所有页面都使用该侧边栏</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {title:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;group1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,collapsable:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,children:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {title:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;group1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">......</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><p>2、多个侧边栏，不同页面不同侧边栏</p><p>使用带目录的，添加链接时不需要带文件夹的路径；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sidebar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;/bar/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;one&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;two&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;自定义标题名称;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]],  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//里面也可以填写分组;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;/foo/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>若没有指定标题名称，则标题使用一级标题的名称；</p><h2 id="分组导航栏" tabindex="-1">分组导航栏 <a class="header-anchor" href="#分组导航栏" aria-label="Permalink to &quot;分组导航栏&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;编程语言&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    items: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;java&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,link:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {text:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;html&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,link:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 可以在items继续套分组;</span></span></code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-03.png" alt="image"></p><h2 id="新增markedown用法" tabindex="-1">新增markedown用法 <a class="header-anchor" href="#新增markedown用法" aria-label="Permalink to &quot;新增markedown用法&quot;">​</a></h2><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a tip</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">This is a dangerous warning</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::: danger STOP    //stop自定义的标题,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Danger zone, do not proceed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:::</span></span></code></pre></div><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-04.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-05.png" alt="image"></p><p>代码块中的行高亮</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">​\`\`\` js{4}  //第四行高亮</span></span></code></pre></div><h2 id="vuepress中注册组件" tabindex="-1">vuepress中注册组件 <a class="header-anchor" href="#vuepress中注册组件" aria-label="Permalink to &quot;vuepress中注册组件&quot;">​</a></h2><p>在.vuepress下面创建一个enhanceApp.js文件，该文件相当于main.js，是入口文件，里面可以下载Element,Mini组件等等；</p><p>element组件可以直接在docs根目录下进行安装；</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// .vuepress/enhanceApp.js</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 全局注册 Element 组件库</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Vue </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vue&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Element </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-ui&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;element-ui/lib/theme-chalk/index.css&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Vue.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">use</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Element)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="vuepress使用vue文件" tabindex="-1">vuepress使用vue文件 <a class="header-anchor" href="#vuepress使用vue文件" aria-label="Permalink to &quot;vuepress使用vue文件&quot;">​</a></h2><p>1、第一种方式：</p><p>在.vuepress文件夹下创建一个components文件夹，里面的.vue文件会被注册成全局的组件，可以直接在md文件当引入,以文件名字为组件名；</p><p>注意目录路径；</p><div class="language-markdown vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// docs/.vuepres/components/hello.vue</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">// docs/blog/test.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">this is &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">hello</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;   // 会自动将hello.vue的可显示内容显示到页面上;</span></span></code></pre></div><p>2、第二种方式：</p><p>不包含头部，直接是一个单文件；</p><p>创建文件夹，并创建README.md文件</p><p>写入以下代码：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">custom //填写components文件夹下的文件名字</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="使用element组件" tabindex="-1">使用element组件 <a class="header-anchor" href="#使用element组件" aria-label="Permalink to &quot;使用element组件&quot;">​</a></h2><blockquote><p>需要完成注册Element组件库</p></blockquote><p>在根目录docs下，任意一个目录创建一个.md文件，里面直接填写vue的代码，</p><p>可以直接使用element的组件，也可以直接使用component下的全局组件；</p><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-06.png" alt="image"></p><h2 id="部署github" tabindex="-1">部署github <a class="header-anchor" href="#部署github" aria-label="Permalink to &quot;部署github&quot;">​</a></h2><ol><li><p>在github新建一个项目，不要初始化仓库，</p></li><li><p>打开git bash工具，</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 地址</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 进行连接;</span></span></code></pre></div></li><li><p>修改base，找到.vuepress/config.js</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&lt;name&gt;/&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //将创建的项目名称填入,双斜杠不能删除;</span></span></code></pre></div></li><li><p>下载gh-pages包</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gh-pages</span></span></code></pre></div></li><li><p>在package.json文件添加脚本命令</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vuepress dev docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vuepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deploy&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gh-pages -d ./docs/.vuepress/dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;deploy:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;npm run docs:build &amp;&amp; gh-pages -d ./docs/.vuepress/dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span></code></pre></div></li><li><p>运行：<code>npm run deploy:build</code></p></li><li><p>打开你的github地址，<code>https://&lt;name&gt;/github.io/&lt;repo&gt;</code></p></li></ol><h2 id="转发域名" tabindex="-1">转发域名 <a class="header-anchor" href="#转发域名" aria-label="Permalink to &quot;转发域名&quot;">​</a></h2><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-08.png" alt="image"></p><p><img src="https://notecdn.hrhe.cn/images/VuePress%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2-09.png" alt="image"></p><h2 id="遇到的问题总结" tabindex="-1">遇到的问题总结 <a class="header-anchor" href="#遇到的问题总结" aria-label="Permalink to &quot;遇到的问题总结&quot;">​</a></h2><p>不显示侧边栏的情况：检查文件夹或者目录名是否有正确</p>`,81),e=[l];function h(t,k,E,d,r,g){return a(),i("div",null,e)}const y=s(p,[["render",h]]);export{c as __pageData,y as default};
