import{o as n,c as s,d as a}from"./app.246f1876.js";const p='{"title":"css常见bug","description":"","frontmatter":{},"headers":[{"level":2,"title":"图片出现间距解决方案","slug":"图片出现间距解决方案"},{"level":2,"title":"解决移动端1px像素问题","slug":"解决移动端1px像素问题"},{"level":2,"title":"ios端出现下图问题","slug":"ios端出现下图问题"},{"level":2,"title":"解决移动端报红","slug":"解决移动端报红"},{"level":2,"title":"解决ios滚动卡的问题","slug":"解决ios滚动卡的问题"}],"relativePath":"src/frontend/html5/css常见bug.md","lastUpdated":1615699077443}',t={},o=a('<h1 id="css常见bug"><a class="header-anchor" href="#css常见bug" aria-hidden="true">#</a> css常见bug</h1><h2 id="图片出现间距解决方案"><a class="header-anchor" href="#图片出现间距解决方案" aria-hidden="true">#</a> 图片出现间距解决方案</h2><p>给父元素设置font-size: 0;</p><h2 id="解决移动端1px像素问题"><a class="header-anchor" href="#解决移动端1px像素问题" aria-hidden="true">#</a> 解决移动端1px像素问题</h2><div class="language-css"><pre><code>$<span class="token property">borderColor</span><span class="token punctuation">:</span> #E1E0DF<span class="token selector">;\n\n.border-1px, .border-1px-t, .border-1px-b, .border-1px-tb, .border-1px-l, .border-1px-r</span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.border-1px</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 200%<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> left top<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.border-1px-t</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.border-1px-b</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.border-1px-tb</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border-top</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 100%<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.border-1px-l</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border-left</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.border-1px-r</span> <span class="token punctuation">{</span>\n  <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>\n    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n    <span class="token property">border-right</span><span class="token punctuation">:</span> 1px solid $borderColor<span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> $borderColor<span class="token punctuation">;</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 100% 0<span class="token punctuation">;</span>\n    <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li>使用scss <code>#include</code>变量</li></ul><div class="language-css"><pre><code><span class="token comment">/* 根据条件，输出 1px 边框（top or bottom） */</span>\n<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">render-1px-top-and-bottom</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == top</span> <span class="token punctuation">{</span>\n    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 top<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 top<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == bottom</span> <span class="token punctuation">{</span>\n    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 bottom<span class="token punctuation">;</span>\n    <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 bottom<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">/* 根据条件，输出 1px （left or right） */</span>\n<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">render-1px-left-and-right</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == left</span> <span class="token punctuation">{</span>\n    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == right</span> <span class="token punctuation">{</span>\n    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> $color<span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 1px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scaleX</span><span class="token punctuation">(</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">-webkit-transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n  <span class="token property">transform-origin</span><span class="token punctuation">:</span> 0 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n\n<span class="token comment">/* 输出 1px 边框：\n  ## 一、对于一个元素，只能输出两个边框（top bottom 二选## 一、left right 二选一）\n  ## 二、如果要输出 4 条边框，考虑使用两个元素嵌套\n*/</span>\n<span class="token atrule"><span class="token rule">@mixin</span> <span class="token function">get-1px-border</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == top</span> <span class="token punctuation">{</span>\n    <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>\n      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-top-and-bottom</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == bottom</span> <span class="token punctuation">{</span>\n    <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>\n      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-top-and-bottom</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n\n\n  <span class="token atrule"><span class="token rule">@if</span> $position == left</span> <span class="token punctuation">{</span>\n    <span class="token selector">&amp;:before</span> <span class="token punctuation">{</span>\n      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-left-and-right</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n  <span class="token atrule"><span class="token rule">@if</span> $position == right</span> <span class="token punctuation">{</span>\n    <span class="token selector">&amp;:after</span> <span class="token punctuation">{</span>\n      <span class="token atrule"><span class="token rule">@include</span> <span class="token function">render-1px-left-and-right</span><span class="token punctuation">(</span>$position<span class="token punctuation">,</span> $color<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="ios端出现下图问题"><a class="header-anchor" href="#ios端出现下图问题" aria-hidden="true">#</a> ios端出现下图问题</h2><p>给input框设置：background-color: transparent;</p><p><img src="https://notecdn.heny.vip/images/css%E5%B0%8F%E6%96%B9%E6%B3%95-10.png" alt="image"></p><h2 id="解决移动端报红"><a class="header-anchor" href="#解决移动端报红" aria-hidden="true">#</a> 解决移动端报红</h2><p><img src="https://notecdn.heny.vip/images/css%E5%B0%8F%E6%96%B9%E6%B3%95-11.png" alt="image"></p><p>由于没有e.preventDefalt引起的，给触摸范围的元素添加css属性</p><div class="language-css"><pre><code><span class="token property">touch-action</span><span class="token punctuation">:</span> pan-y<span class="token punctuation">;</span>\n</code></pre></div><h2 id="解决ios滚动卡的问题"><a class="header-anchor" href="#解决ios滚动卡的问题" aria-hidden="true">#</a> 解决ios滚动卡的问题</h2><div class="language-css"><pre><code><span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-overflow-scrolling</span><span class="token punctuation">:</span> touch<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',16);t.render=function(a,p,t,c,e,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
