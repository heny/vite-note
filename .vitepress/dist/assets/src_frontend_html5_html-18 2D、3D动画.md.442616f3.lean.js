import{_ as t,c as a,o as e,d as p}from"./app.310fb107.js";const f='{"title":"html-18 2D\u30013D\u52A8\u753B","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u8FC7\u6E21\u5C5E\u6027\uFF1A","slug":"\u4E00\u3001\u8FC7\u6E21\u5C5E\u6027\uFF1A"},{"level":2,"title":"\u4E8C\u3001\u53D8\u5F62","slug":"\u4E8C\u3001\u53D8\u5F62"},{"level":2,"title":"\u4E09\u30013D","slug":"\u4E09\u30013d"},{"level":2,"title":"\u56DB\u3001\u52A8\u753B","slug":"\u56DB\u3001\u52A8\u753B"}],"relativePath":"src/frontend/html5/html-18 2D\u30013D\u52A8\u753B.md","lastUpdated":1615699077000}',n={},d=p(`__VP_STATIC_START__<h1 id="html-18-2d\u30013d\u52A8\u753B"><a class="header-anchor" href="#html-18-2d\u30013d\u52A8\u753B" aria-hidden="true">#</a> html-18 2D\u30013D\u52A8\u753B</h1><h2 id="\u4E00\u3001\u8FC7\u6E21\u5C5E\u6027\uFF1A"><a class="header-anchor" href="#\u4E00\u3001\u8FC7\u6E21\u5C5E\u6027\uFF1A" aria-hidden="true">#</a> \u4E00\u3001\u8FC7\u6E21\u5C5E\u6027\uFF1A</h2><ol><li><p>\u5C5E\u6027\u540D</p><p><code>transition-property</code>;</p><p>\u4E0D\u5199\u9ED8\u8BA4\u662Fall\uFF0C\u8868\u793A\u5168\u90E8\u52A0\u5165\u8FC7\u6E21\u7684\u5C5E\u6027\uFF1B</p></li><li><p>\u65F6\u95F4</p><p><code>transition-duration;</code></p><p>\u4E2D\u95F4\u7528\u9017\u53F7\u9694\u5F00,\u548C\u8FC7\u6E21\u5C5E\u6027\u4E00\u4E00\u5BF9\u5E94\u3002</p><p>\u5355\u4F4D\u662Fs,ms\uFF0C\u5982\u679C\u662F0.5s\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5199.5s\u3002</p></li><li><p>\u901F\u5EA6\u53D8\u5316\u66F2\u7EBF</p><p><code>transition-timing-function</code>;</p><p>\u9ED8\u8BA4\u662Fease\uFF0C\u5300\u901F\u662Flinear\uFF0C\u5199\u591A\u4E2A\u662F\u548C\u5C5E\u6027\u4E00\u4E00\u5BF9\u5E94\u3002</p><p>\u8D1D\u585E\u5C14\u66F2\u7EBF\uFF0C<a href="http://cubic-bezier.com" target="_blank" rel="noopener noreferrer">http://cubic-bezier.com</a>\uFF0Ccubic-bezier()\uFF0C\u62EC\u53F7\u5199\u4E0D\u540C\u7684\u503C\u3002</p></li><li><p>\u5EF6\u957F\u65F6\u95F4</p><p><code>transion-delay</code></p><p>\u5355\u4F4D\u662Fms,s\u53EF\u4EE5\u5199\u591A\u4E2A\u3002</p></li><li><p>\u590D\u5408\u5199\u6CD5\uFF1A</p><p><code>transition:\u8FC7\u6E21\u540D \u65F6\u95F4 \u901F\u5EA6 \u5EF6\u65F6\uFF1B</code></p><p>\u8FC7\u6E21\u65F6\u95F4\u4E0D\u53EF\u4EE5\u7701\u7565\uFF0C\u5C5E\u6027\u9ED8\u8BA4\u662Fall\uFF0C\u53D8\u5316\u66F2\u7EBF\u9ED8\u8BA4\u662Fease\uFF0C\u5EF6\u65F60\uFF1B</p></li></ol><p>\u8FC7\u6E21\u7684\u5C5E\u6027\u653E\u5230\u672C\u8EAB\u7684\u76D2\u5B50\u4E0A\uFF0C\u6162\u6162\u56DE\u6765\uFF0C\u653E\u5230\u6ED1\u8FC7\u7684\u76D2\u5B50\u4E0A\uFF0C\u77AC\u95F4\u56DE\u53BB\uFF1B</p><h2 id="\u4E8C\u3001\u53D8\u5F62"><a class="header-anchor" href="#\u4E8C\u3001\u53D8\u5F62" aria-hidden="true">#</a> \u4E8C\u3001\u53D8\u5F62</h2><ol><li><p>\u5E73\u79FB</p><p><code>transform:translate();</code></p><p>\u5355\u4F4Dpx\uFF1B</p><p>\u4E00\u4E2A\u503C:\u6C34\u5E73 \u4E24\u4E2A\u503C:\u6C34\u5E73\uFF0C\u5782\u76F4\uFF0Cx\u8F74\u548Cy\u8F74\u3002</p><p>\u4E5F\u53EF\u4EE5\u5199\uFF1AtranslateX x\u8F74 translateY y\u8F74</p></li><li><p>\u65CB\u8F6C</p><p><code>transform:rotate()</code></p><p>\u5355\u4F4Ddeg</p><p>\u6B63\u503C\uFF1A\u987A\u65F6\u9488\uFF0C\u8D1F\u503C\uFF1A\u9006\u65F6\u9488\uFF1B</p><p><code>backface-visibility:hidden</code> \u80CC\u90E8\u4E0D\u53EF\u89C1\uFF0C\u53EF\u4EE5\u505A\u6251\u514B\u724C\u6548\u679C\uFF1B</p></li><li><p>\u7F29\u653E</p><p><code>transform:scale();</code></p><p>\u6CA1\u6709\u5355\u4F4D\uFF0C\u6570\u5B57\u8868\u793A\u7F29\u653E\u7684\u500D\u6570</p><p>\u4E24\u4E2A\u503C:\u6C34\u5E73\uFF0C\u5782\u76F4</p><p>\u4E00\u4E2A\u503C:\u6C34\u5E73\u5782\u76F4\u540C\u65F6\u7F29\u653E\uFF0C\u8D1F\u503C\u7684\u65F6\u5019\u5148\u7FFB\u8F6C\u518D\u7F29\u653E\u3002</p></li><li><p>\u503E\u659C</p><p><code>transform:skew();</code></p><p>\u548Ctranslate\u7528\u6CD5\u4E00\u6837\uFF1B</p></li><li><p>\u6539\u53D8\u57FA\u51C6\u70B9</p><p><code>transform-orign</code> \u6539\u53D8\u57FA\u51C6\u70B9</p><p>\u4E24\u4E2A\u503C:x y</p><p>\u4E00\u4E2A\u503C:\u8868\u793Ax\u8F74\uFF0Cy\u8F74\u4E2D\u5FC3\u70B9\u3002</p><p>\u5355\u4F4Dpx % \u65B9\u5411\u3002</p></li><li><p>\u590D\u5408\u5199\u6CD5\uFF0C\u591A\u4E2A\u5C5E\u6027\u503C\u7528\u7A7A\u683C\u9694\u5F00\uFF0C\u5C5E\u6027\u503C\u7684\u503C\u7528\u9017\u53F7\u9694\u5F00\u3002</p></li></ol><h2 id="\u4E09\u30013d"><a class="header-anchor" href="#\u4E09\u30013d" aria-hidden="true">#</a> \u4E09\u30013D</h2><ol><li><p><code>perspective</code>\uFF1B\u8212\u670D\u7684\u8DDD\u79BB\u662F500\u52301000\uFF1B</p><p>\u89C6\u8DDD\uFF0C\u666F\u6DF1\uFF0C\u6211\u4EEC\u773C\u775B\u79BB\u5C4F\u5E55\u7684\u8DDD\u79BB</p><p>\u53EF\u4EE5\u8BA9\u5B50\u5143\u7D20\u6709\u8FD1\u5927\u8FDC\u5C0F\u7684\u6548\u679C\uFF0C\u914D\u54083d\u4F7F\u7528\uFF0C</p><p>\u7ACB\u4F53\u76843d x\u8F74\u4E3A\u4E2D\u95F4\u7684\u4E0A\u4E0B\uFF0Cy\u8F74\u4E3A\u5DE6\u53F3\u4E24\u8FB9\uFF0Cz\u8F74\u987A\u65F6\u9488\u65CB\u8F6C\u3002</p><p>\u5DE6\u624B\u5B9A\u5219\uFF0C\u624B\u63E1\u4F4F\u8F74\uFF0C\u5927\u62C7\u6307\u671D\u5411\u662F\u6B63\u503C\u8D1F\u503C\u65B9\u5411\uFF0C\u56DB\u4E2A\u6307\u5934\u662F\u65CB\u8F6C\u7684\u65B9\u5411\uFF0C\u8F74\u7684\u65B9\u5411\u3002</p></li><li><p>\u65CB\u8F6C</p><p><code>rotateX()</code>\uFF0C\u6CBF\u7740x\u8F74\u65CB\u8F6C\uFF0C\u4E0A\u4E0B\u65CB\u8F6C\u3002</p><p><code>rotateY(45deg)</code> \u6CBF\u7740y\u8F74\u65CB\u8F6C\uFF0C\u5DE6\u53F3\u65CB\u8F6C\u3002</p><p><code>rotateZ(45deg)</code> \u6CBF\u7740z\u8F74\u65CB\u8F6C\uFF0C\u987A\u65F6\u9488\u65CB\u8F6C\u3002</p><p><code>rotate3d(0,0,-1,45deg)</code>\uFF0C\u590D\u5408\u5199\u6CD5\uFF0C\u624B\u673A\u4F1A\u542F\u52A83d\u52A0\u901F\uFF0C\u66F4\u5FEB\u3002</p></li><li><p>\u5E73\u79FB</p><p>translateX() \u6CBF\u7740x\u8F74\u65CB\u8F6C\uFF0C\u8D1F\u503C\u5DE6\u8FB9\uFF0C\u6B63\u503C\u53F3\u8FB9\u3002</p><p>translateY() \u6CBF\u7740y\u8F74\u65CB\u8F6C\uFF0C\u6B63\u503C\u5411\u4E0B\uFF0C\u8D1F\u503C\u5411\u4E0A\u3002</p><p>translateZ() \u6CBF\u7740z\u8F74\u65CB\u8F6C\uFF0C\u6B63\u503C\u671D\u524D\uFF0C\u8D1F\u503C\u671D\u540E\u3002</p><p>translate3d(100px,100px,100px) \u590D\u5408\u5199\u6CD5\u3002</p><p>x\u8F74\u770B\u5143\u7D20\u7684\u53F3\u4FA7\uFF0C\u987A\u65F6\u9488\u662F\u6B63\u503C\uFF0C\u9006\u65F6\u9488\u662F\u8D1F\u503C</p><p>y\u8F74\u4ECE\u5143\u7D20\u4E0B\u9762\u770B\uFF0C\u987A\u65F6\u9488\u6B63\u503C\uFF0C\u9006\u65F6\u9488\u8D1F\u503C\u3002</p></li><li><p><code>transform-style:preserve-3d</code> \u8BA9\u5B50\u5143\u7D20\u4FDD\u75593d\u6548\u679C</p><p>perspective\u53EA\u80FD\u6709\u8FD1\u5927\u8FDC\u5C0F\u7684\u6548\u679C\uFF0C\u9700\u8981\u8BBE\u7F6Estyle\u4FDD\u75593d\u3002</p></li></ol><h2 id="\u56DB\u3001\u52A8\u753B"><a class="header-anchor" href="#\u56DB\u3001\u52A8\u753B" aria-hidden="true">#</a> \u56DB\u3001\u52A8\u753B</h2><ol><li><p>animation\u5FC5\u987B\u914D\u5408keyframes\u4F7F\u7528\u3002</p><p>keyframes\u91CC\u9762\u5199\u7684\u5173\u952E\u5E27\u662F\u4ECE0%\u5199\u5230100%\uFF0C\u4E5F\u53EF\u4EE5\u5199<code>from</code>\uFF0C<code>to</code>\u3002</p><p><code>@keyframes \u52A8\u753B\u7684\u540D\u5B57</code>(\u5FC5\u987B\u5199)\uFF1B</p></li></ol><div class="language-css"><pre><code><span class="token selector">canvas</span><span class="token punctuation">{</span>
    <span class="token property">animation</span><span class="token punctuation">:</span> rotates 5s <span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token atrule"><span class="token rule">@keyframes</span> rotetas</span><span class="token punctuation">{</span>
    <span class="token selector">from</span><span class="token punctuation">{</span>
        <span class="token property">transform</span><span class="token punctuation">:</span><span class="token function">rotate</span><span class="token punctuation">(</span>360deg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u52A8\u753B\u5C5E\u6027\uFF1A</li></ol><table><thead><tr><th>animation-name</th><th>\u540D\u5B57(\u5FC5\u586B)</th><th>name</th></tr></thead><tbody><tr><td>animation-duration</td><td>\u65F6\u95F4(\u5FC5\u586B)</td><td>\u5355\u4F4D\u662Fs,ms</td></tr><tr><td>animation-timing-function</td><td>\u901F\u5EA6\u53D8\u5316\u66F2\u7EBF</td><td></td></tr><tr><td>animation-delay</td><td>\u5EF6\u65F6</td><td></td></tr><tr><td>animation-iteration-count</td><td>\u5FAA\u73AF\u6B21\u6570</td><td>infinite(\u65E0\u9650\u5FAA\u73AF)</td></tr><tr><td>animation-direction</td><td>\u53CD\u5411\u8FD0\u52A8</td><td>alternate(\u81F3\u5C11\u5FAA\u73AF\u6B21\u65702)</td></tr><tr><td>animation-fill-mode</td><td>\u6539\u53D8\u5F00\u59CB\u7ED3\u675F\u72B6\u6001</td><td>\u5C5E\u6027\u503C\u5728\u4E0B\u65B9</td></tr><tr><td>animation-play-state</td><td>\u6682\u505C/\u5F00\u59CB</td><td>paused/running</td></tr><tr><td>\u590D\u5408\u5199\u6CD5\uFF1Aname duration timing-function delay iteration-count direction fill-mode;</td><td></td><td></td></tr></tbody></table><ol start="3"><li>\u6682\u505C\u52A8\u753B\u53EF\u4EE5\u901A\u8FC7hover\u542F\u52A8\uFF1B</li><li>\u6539\u53D8\u52A8\u753B\u7684\u5F00\u59CB\u7ED3\u675F\u72B6\u6001\u5C5E\u6027\u503C\uFF1B</li></ol><table><thead><tr><th>\u5C5E\u6027\u503C</th><th>\u7B49\u5F85\u65F6\u5019</th><th>\u7ED3\u675F\u4EE5\u540E</th></tr></thead><tbody><tr><td>none</td><td>\u521D\u59CB</td><td>\u521D\u59CB</td></tr><tr><td>backwards</td><td>0%</td><td>\u521D\u59CB</td></tr><tr><td>forwards</td><td>\u521D\u59CB</td><td>100%</td></tr><tr><td>both</td><td>0%</td><td>100%</td></tr></tbody></table>__VP_STATIC_END__`,15),o=[d];function s(r,i,l,c,h,u){return e(),a("div",null,o)}var _=t(n,[["render",s]]);export{f as __pageData,_ as default};
