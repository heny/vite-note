import{o as n,c as s,d as a}from"./app.b11e2761.js";const p='{"title":"normalize.css","description":"","frontmatter":{},"headers":[{"level":2,"title":"normalize.css","slug":"normalize-css"}],"relativePath":"src/frontend/html5/reset.css.md","lastUpdated":1612089669937}',t={},o=a('<h2 id="normalize-css"><a class="header-anchor" href="#normalize-css" aria-hidden="true">#</a> normalize.css</h2><p><a href="https://github.com/necolas/normalize.css" target="_blank" rel="noopener noreferrer">https://github.com/necolas/normalize.css</a></p><p>比reset更兼容，reset是把默认样式替换掉，normalize仅修复一些样式bug，并保证各自浏览器的一致性；</p><h1 id="reset-css"><a class="header-anchor" href="#reset-css" aria-hidden="true">#</a> reset.css</h1><p>网址：<a href="https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/" target="_blank" rel="noopener noreferrer">https://css-tricks.com/video-screencasts/174-using-local-overrides-in-devtools/</a></p><div class="language-css"><pre><code><span class="token atrule"><span class="token rule">@media</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">prefers-reduced-motion</span><span class="token punctuation">:</span>reduce<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n    <span class="token selector">*</span> <span class="token punctuation">{</span>\n        <span class="token property">-webkit-transition</span><span class="token punctuation">:</span> 0s<span class="token important">!important</span><span class="token punctuation">;</span>\n        <span class="token property">transition</span><span class="token punctuation">:</span> 0s<span class="token important">!important</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">*,::after,::before</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>\n    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box\n<span class="token punctuation">}</span>\n\n<span class="token selector">a</span> <span class="token punctuation">{</span>\n    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none\n<span class="token punctuation">}</span>\n\n<span class="token selector">article,aside,details,figcaption,figure,footer,header,hgroup,nav,section,summary</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> block\n<span class="token punctuation">}</span>\n\n<span class="token selector">audio,canvas,video</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block\n<span class="token punctuation">}</span>\n\n<span class="token selector">audio:not([controls])</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">[hidden]</span> <span class="token punctuation">{</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> none\n<span class="token punctuation">}</span>\n\n<span class="token selector">html</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">-ms-text-size-adjust</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">dl,menu,ol,ul</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">list-style</span><span class="token punctuation">:</span> none\n<span class="token punctuation">}</span>\n\n<span class="token selector">dd</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">menu,ol,ul</span> <span class="token punctuation">{</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">nav ol,nav ul</span> <span class="token punctuation">{</span>\n    <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n    <span class="token property">list-style-image</span><span class="token punctuation">:</span> none\n<span class="token punctuation">}</span>\n\n<span class="token selector">img</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">-ms-interpolation-mode</span><span class="token punctuation">:</span> bicubic\n<span class="token punctuation">}</span>\n\n<span class="token selector">figure</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">form</span> <span class="token punctuation">{</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">legend</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">white-space</span><span class="token punctuation">:</span> normal\n<span class="token punctuation">}</span>\n\n<span class="token selector">button,input,select,textarea</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">vertical-align</span><span class="token punctuation">:</span> baseline\n<span class="token punctuation">}</span>\n\n<span class="token selector">button,input</span> <span class="token punctuation">{</span>\n    <span class="token property">line-height</span><span class="token punctuation">:</span> normal\n<span class="token punctuation">}</span>\n\n<span class="token selector">button,html input[type=button],input[type=reset],input[type=submit]</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> button<span class="token punctuation">;</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer\n<span class="token punctuation">}</span>\n\n<span class="token selector">button[disabled],input[disabled]</span> <span class="token punctuation">{</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> default\n<span class="token punctuation">}</span>\n\n<span class="token selector">input[type=checkbox],input[type=radio]</span> <span class="token punctuation">{</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">input[type=search]</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> textfield\n<span class="token punctuation">}</span>\n\n<span class="token selector">input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration</span> <span class="token punctuation">{</span>\n    <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none\n<span class="token punctuation">}</span>\n\n<span class="token selector">button::-moz-focus-inner,input::-moz-focus-inner</span> <span class="token punctuation">{</span>\n    <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n    <span class="token property">padding</span><span class="token punctuation">:</span> 0\n<span class="token punctuation">}</span>\n\n<span class="token selector">textarea</span> <span class="token punctuation">{</span>\n    <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n    <span class="token property">vertical-align</span><span class="token punctuation">:</span> top\n<span class="token punctuation">}</span>\n\n\n// 自制，需要scss\n<span class="token atrule"><span class="token rule">@each</span> $name<span class="token punctuation">,</span>$prop in <span class="token punctuation">(</span><span class="token property">p</span><span class="token punctuation">:</span>padding<span class="token punctuation">,</span><span class="token property">pt</span><span class="token punctuation">:</span>padding-top<span class="token punctuation">,</span><span class="token property">pr</span><span class="token punctuation">:</span>padding-right<span class="token punctuation">,</span><span class="token property">pb</span><span class="token punctuation">:</span>padding-bottom<span class="token punctuation">,</span><span class="token property">pl</span><span class="token punctuation">:</span>padding-left<span class="token punctuation">)</span></span><span class="token punctuation">{</span>\n  <span class="token atrule"><span class="token rule">@for</span> $i from 5 through 30</span> <span class="token punctuation">{</span>\n    <span class="token selector">.#</span><span class="token punctuation">{</span>$name<span class="token punctuation">}</span><span class="token selector">#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span><span class="token punctuation">{</span>\n      <span class="token selector">#</span><span class="token punctuation">{</span>$prop<span class="token punctuation">}</span><span class="token selector">: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span> // 更方便的使用间隔，如p10类名，padding：10px<span class="token punctuation">;</span>\n\n<span class="token atrule"><span class="token rule">@each</span> $name<span class="token punctuation">,</span>$prop in <span class="token punctuation">(</span><span class="token property">m</span><span class="token punctuation">:</span>margin<span class="token punctuation">,</span><span class="token property">mt</span><span class="token punctuation">:</span>margin-top<span class="token punctuation">,</span><span class="token property">mr</span><span class="token punctuation">:</span>margin-right<span class="token punctuation">,</span><span class="token property">mb</span><span class="token punctuation">:</span>margin-bottom<span class="token punctuation">,</span><span class="token property">ml</span><span class="token punctuation">:</span>margin-left<span class="token punctuation">)</span></span><span class="token punctuation">{</span>\n  <span class="token atrule"><span class="token rule">@for</span> $i from 5 through 30</span> <span class="token punctuation">{</span>\n    <span class="token selector">.#</span><span class="token punctuation">{</span>$name<span class="token punctuation">}</span><span class="token selector">#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span><span class="token punctuation">{</span>\n      <span class="token selector">#</span><span class="token punctuation">{</span>$prop<span class="token punctuation">}</span><span class="token selector">: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// 居中类名\n.dibvm:after</span> <span class="token punctuation">{</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.clearfix::after</span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>\n  <span class="token property">visibility</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>\n  <span class="token property">clear</span><span class="token punctuation">:</span> both<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">// 循环字体\n.f0</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.f10</span> <span class="token punctuation">{</span>\n  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.8<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">transform-origin</span><span class="token punctuation">:</span> left center<span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@for</span> $i from 12 through 24</span> <span class="token punctuation">{</span>\n  <span class="token atrule"><span class="token rule">@if</span> $i &lt; 16</span> <span class="token punctuation">{</span>\n    <span class="token selector">.f#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      <span class="token selector">font-size: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span> // 12. 13. 14. 15. 16px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> if $i % 2 == 0</span> <span class="token punctuation">{</span>\n    <span class="token selector">.f#</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span> <span class="token punctuation">{</span>\n      <span class="token selector">font-size: #</span><span class="token punctuation">{</span>$i<span class="token punctuation">}</span>px<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.cp</span> <span class="token punctuation">{</span>\n    <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.usn</span> <span class="token punctuation">{</span>\n    <span class="token property">user-select</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',6);t.render=function(a,p,t,e,c,u){return n(),s("div",null,[o])};export default t;export{p as __pageData};
