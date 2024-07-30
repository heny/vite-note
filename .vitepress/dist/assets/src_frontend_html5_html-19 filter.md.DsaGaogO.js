import{_ as s,c as i,o as a,a5 as t}from"./chunks/framework.CmFZ6rCi.js";const E=JSON.parse('{"title":"html-19 filter","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/html5/html-19 filter.md","filePath":"src/frontend/html5/html-19 filter.md","lastUpdated":1661495446000}'),e={name:"src/frontend/html5/html-19 filter.md"},l=t(`<h1 id="html-19-filter" tabindex="-1">html-19 filter <a class="header-anchor" href="#html-19-filter" aria-label="Permalink to &quot;html-19 filter&quot;">​</a></h1><h2 id="一、filter" tabindex="-1">一、filter <a class="header-anchor" href="#一、filter" aria-label="Permalink to &quot;一、filter&quot;">​</a></h2><blockquote><p>filter属性定义了元素的可视效果，比如：模糊与饱和度，通常给img标签设置</p></blockquote><h3 id="css-语法" tabindex="-1">css 语法 <a class="header-anchor" href="#css-语法" aria-label="Permalink to &quot;css 语法&quot;">​</a></h3><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: none | blur() | brightness() | contrast() | drop-shadow() | grayscale() | hue-rotate() | invert() | opacity() | saturate() | sepia() | url();</span></span></code></pre></div><h3 id="参数介绍" tabindex="-1">参数介绍 <a class="header-anchor" href="#参数介绍" aria-label="Permalink to &quot;参数介绍&quot;">​</a></h3><ul><li><p><code>none</code>：没有效果</p></li><li><p><code>blur(px)</code>：设置高斯模糊</p></li><li><p><code>brightness(%)</code>：让图像更明亮或更暗淡</p></li><li><p><code>drop-shadow()</code>：图片设置阴影效果</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -webkit-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">drop-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Chrome, Safari, Opera */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">drop-shadow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> red</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><code>contrast(%)</code>：对比度，0的话图像全黑，1的话图像不变</p></li><li><p><code>grayscale(%)</code>：灰度图像，1为完全转换灰度图像，0为无变化；</p></li><li><p><code>hue-rotate(deg)</code>：改变图像的整体色调，0deg为图像无变化，超过360deg绕一圈；</p></li><li><p><code>invert(%)</code>：反转输入图像，1为完全反转，默认为0</p></li><li><p><code>opacity(%)</code>：转化图像的透明程度</p></li><li><p><code>saturate(%)</code>：饱和度，0为完全不饱和，1无变化</p></li><li><p><code>sepia(%)</code>：转换为深褐色，1为深褐色，0无变化</p></li><li><p><code>url()</code>：接受一个xml文件，该文件设置svg滤镜，且包含一个具体的滤镜元素</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: url(</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg-url</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">#element-id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li><li><p><code>initial</code>：默认值</p></li><li><p><code>inherit</code>：继承</p></li></ul><h3 id="复合函数" tabindex="-1">复合函数 <a class="header-anchor" href="#复合函数" aria-label="Permalink to &quot;复合函数&quot;">​</a></h3><p>使用多个滤镜，每个滤镜使用空格分隔</p><p><strong>注意:</strong> 顺序是非常重要的 (例如使用 grayscale() 后再使用 sepia()将产生一个完整的灰度图片)。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -webkit-filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contrast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">brightness</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* Chrome, Safari, Opera */</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">contrast</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">brightness</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>将图像颜色全部变白</strong></p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: grayscale(1) contrast(0) brightness(2);</span></span></code></pre></div><h3 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h3><ul><li>一般在图片鼠标划过之后增加亮度，使用<code>brightness</code>函数</li><li>将页面整体置灰，使用<code>grayscale</code>函数；</li></ul><h3 id="backdrop-filter" tabindex="-1">backdrop-filter <a class="header-anchor" href="#backdrop-filter" aria-label="Permalink to &quot;backdrop-filter&quot;">​</a></h3><blockquote><p>可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。 因为它适用于元素<em>背后</em>的所有元素，为了看到效果，必须使元素或其背景至少部分透明。</p></blockquote><p>用法同filter；</p>`,18),h=[l];function n(p,k,r,d,o,c){return a(),i("div",null,h)}const y=s(e,[["render",n]]);export{E as __pageData,y as default};
