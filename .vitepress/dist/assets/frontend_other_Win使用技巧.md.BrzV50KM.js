import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.C47NMZpj.js";const n="/assets/image-20240812095118389.sUVyscDo.png",e="/assets/image-20240812095223860.DQYJ9lYy.png",m=JSON.parse('{"title":"Win使用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/other/Win使用技巧.md","filePath":"src/frontend/other/Win使用技巧.md","lastUpdated":1726804022000}'),h={name:"frontend/other/Win使用技巧.md"},l=t('<h1 id="win使用技巧" tabindex="-1">Win使用技巧 <a class="header-anchor" href="#win使用技巧" aria-label="Permalink to &quot;Win使用技巧&quot;">​</a></h1><h2 id="win11修改文件右键菜单" tabindex="-1">win11修改文件右键菜单 <a class="header-anchor" href="#win11修改文件右键菜单" aria-label="Permalink to &quot;win11修改文件右键菜单&quot;">​</a></h2><p><strong>为什么要修改右键</strong></p><p>win11和win10不同，win11对右键做了更改，好多选项需要点击<code>显示更多选项</code>，经常在解压文件的时候需要展开选择，更改之后会将更多选项平铺，可参考图二</p><p><img src="https://notecdn.hrhe.cn/image-20240812094842356.png" alt="image-20240812094842356"></p><p><img src="'+n+'" alt="image-20240812095118389"></p><p><strong>安装方法</strong></p><ol><li>右键win图标，选择终端管理员</li></ol><p><img src="'+e+`" alt="image-20240812095223860"></p><ol start="2"><li><p>输入以下命令即可</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nilesoft.shell</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">winget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nilesoft.shell</span></span></code></pre></div></li></ol><h2 id="安装zsh" tabindex="-1">安装zsh <a class="header-anchor" href="#安装zsh" aria-label="Permalink to &quot;安装zsh&quot;">​</a></h2><blockquote><p>参考链接：</p><ul><li><a href="https://i.lckiss.com/?p=6268" target="_blank" rel="noreferrer">https://i.lckiss.com/?p=6268</a></li><li><a href="https://gist.github.com/fworks/af4c896c9de47d827d4caa6fd7154b6b" target="_blank" rel="noreferrer">https://gist.github.com/fworks/af4c896c9de47d827d4caa6fd7154b6b</a></li></ul></blockquote><ol><li><p>下载zsh <a href="https://packages.msys2.org/package/zsh?repo=msys&amp;variant=x86_64" target="_blank" rel="noreferrer">https://packages.msys2.org/package/zsh?repo=msys&amp;variant=x86_64</a></p><p>进入之后点击File即可下载</p></li><li><p>使用7zip压缩工具，将其解压，直到看到如下文件：</p><p><img src="https://notecdn.hrhe.cn/images/Win%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/image-20240904151224119.png" alt="image-20240904151224119"></p><p>将所有的文件都复制到 git 的根目录</p></li><li><p>随便找到一个地方，打开git bash终端，并输入zsh，回车，会看到如下</p><p><img src="https://notecdn.hrhe.cn/images/Win%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/image-20240904151404728.png" alt="image-20240904151404728"></p></li><li><p>输入以下命令安装oh my zsh</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sh</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)&quot;</span></span></code></pre></div><p>如果下载不下来，可以直接访问后面的链接，并新建一个install.sh，然后将所有的内容复制进install.sh，之后输<code>sh install.sh</code> 安装即可</p></li><li><p>编辑<code>vim ~/.bashrc</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Launch Zsh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ]; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">then</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exec</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zsh</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">fi</span></span></code></pre></div><p>这步会在打开git bash时自动打开zsh</p></li></ol><h3 id="配置插件" tabindex="-1">配置插件 <a class="header-anchor" href="#配置插件" aria-label="Permalink to &quot;配置插件&quot;">​</a></h3><blockquote><p>需要安装完oh my zsh</p></blockquote><ol><li><p>进入 <code>cd ~/.oh-my-zsh/custom/plugin</code></p></li><li><p>克隆以下两个仓库到当前目录</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 自动补齐</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/zsh-users/zsh-autosuggestions</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 高亮显示命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/zsh-users/zsh-syntax-highlighting.git</span></span></code></pre></div></li><li><p>编辑配置 <code>vim ~/.zshrc</code></p><p>找到plugins的部分，改成如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">plugins</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        git</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        zsh-autosuggestions</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        zsh-syntax-highlighting</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fg=cyan&#39;</span></span></code></pre></div></li><li><p>保存之后执行：<code>source ~/.zshrc</code></p></li></ol>`,16),p=[l];function k(o,r,c,d,g,F){return a(),i("div",null,p)}const u=s(h,[["render",k]]);export{m as __pageData,u as default};
