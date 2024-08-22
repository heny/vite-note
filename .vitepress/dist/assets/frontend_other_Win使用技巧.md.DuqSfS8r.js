import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.Caa1YTU6.js";const t="/assets/image-20240812095118389.sUVyscDo.png",e="/assets/image-20240812095223860.DQYJ9lYy.png",F=JSON.parse('{"title":"Win使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/other/Win使用技巧.md","filePath":"src/frontend/other/Win使用技巧.md","lastUpdated":1723432649000}'),l={name:"frontend/other/Win使用技巧.md"},p=n('<h1 id="win使用技巧" tabindex="-1">Win使用技巧 <a class="header-anchor" href="#win使用技巧" aria-label="Permalink to &quot;Win使用技巧&quot;">​</a></h1><h2 id="win11修改文件右键菜单" tabindex="-1">win11修改文件右键菜单 <a class="header-anchor" href="#win11修改文件右键菜单" aria-label="Permalink to &quot;win11修改文件右键菜单&quot;">​</a></h2><p><strong>为什么要修改右键</strong></p><p>win11和win10不同，win11对右键做了更改，好多选项需要点击<code>显示更多选项</code>，经常在解压文件的时候需要展开选择，更改之后会将更多选项平铺，可参考图二</p><p><img src="https://notecdn.hrhe.cn/image-20240812094842356.png" alt="image-20240812094842356"></p><p><img src="'+t+'" alt="image-20240812095118389"></p><p><strong>安装方法</strong></p><ol><li>右键win图标，选择终端管理员</li></ol><p><img src="'+e+`" alt="image-20240812095223860"></p><ol start="2"><li><p>输入以下命令即可</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nilesoft.shell</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nilesoft.shell</span></span></code></pre></div></li></ol>`,10),o=[p];function r(h,c,d,_,g,k){return a(),i("div",null,o)}const f=s(l,[["render",r]]);export{F as __pageData,f as default};
