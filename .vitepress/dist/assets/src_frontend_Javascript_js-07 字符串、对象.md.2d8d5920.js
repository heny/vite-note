import{_ as a,c as p,o as t,d as e,a as n,b as s}from"./app.8aafc8a7.js";const y='{"title":"js-07 \u5B57\u7B26\u4E32\u3001\u5BF9\u8C61","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5B57\u7B26\u4E32","slug":"\u4E00\u3001\u5B57\u7B26\u4E32"},{"level":3,"title":"\u67E5\u627E indexof","slug":"\u67E5\u627E-indexof"},{"level":3,"title":"\u622A\u53D6 slice","slug":"\u622A\u53D6-slice"},{"level":3,"title":"\u5206\u5272 split","slug":"\u5206\u5272-split"},{"level":3,"title":"\u66FF\u6362 replace","slug":"\u66FF\u6362-replace"},{"level":3,"title":"\u6BD4\u8F83 localeCompare","slug":"\u6BD4\u8F83-localecompare"},{"level":3,"title":"\u8F6C\u6362 Unicode\u7801","slug":"\u8F6C\u6362-unicode\u7801"},{"level":3,"title":"\u5927\u5C0F\u5199","slug":"\u5927\u5C0F\u5199"},{"level":3,"title":"trim","slug":"trim"},{"level":2,"title":"\u4E8C\u3001\u5B57\u7B26\u4E32\u6269\u5C55","slug":"\u4E8C\u3001\u5B57\u7B26\u4E32\u6269\u5C55"},{"level":3,"title":"padStart\u3001 padEnd","slug":"padstart\u3001-padend"},{"level":2,"title":"\u4E09\u3001\u5B57\u7B26\u4E32\u7684html\u65B9\u6CD5","slug":"\u4E09\u3001\u5B57\u7B26\u4E32\u7684html\u65B9\u6CD5"},{"level":2,"title":"\u56DB\u3001URI\u7F16\u7801","slug":"\u56DB\u3001uri\u7F16\u7801"},{"level":2,"title":"\u4E94\u3001\u5BF9\u8C61\u65B9\u6CD5","slug":"\u4E94\u3001\u5BF9\u8C61\u65B9\u6CD5"},{"level":3,"title":"\u539F\u578B\u5BF9\u8C61","slug":"\u539F\u578B\u5BF9\u8C61"},{"level":3,"title":"\u5176\u4ED6\u65B9\u6CD5","slug":"\u5176\u4ED6\u65B9\u6CD5"},{"level":2,"title":"\u9AD8\u9891\u9762\u8BD5\u9898","slug":"\u9AD8\u9891\u9762\u8BD5\u9898"}],"relativePath":"src/frontend/Javascript/js-07 \u5B57\u7B26\u4E32\u3001\u5BF9\u8C61.md","lastUpdated":1615699077000}',o={},c=e(`<h1 id="js-07-\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61" tabindex="-1">js-07 \u5B57\u7B26\u4E32\u3001\u5BF9\u8C61 <a class="header-anchor" href="#js-07-\u5B57\u7B26\u4E32\u3001\u5BF9\u8C61" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u5B57\u7B26\u4E32" tabindex="-1">\u4E00\u3001\u5B57\u7B26\u4E32 <a class="header-anchor" href="#\u4E00\u3001\u5B57\u7B26\u4E32" aria-hidden="true">#</a></h2><h3 id="\u67E5\u627E-indexof" tabindex="-1">\u67E5\u627E indexof <a class="header-anchor" href="#\u67E5\u627E-indexof" aria-hidden="true">#</a></h3><ol><li><p><code>\u53D8\u91CF.charAt(n)</code> \u8FD4\u56DE\u6307\u5B9A\u4E0B\u6807\u5BF9\u5E94\u7684\u5B57\u7B26\uFF0C</p><p>\u7528\u4E2D\u62EC\u53F7\u7684\u5F62\u5F0F\u4F7F\u7528\u6BD4\u8F83\u591A\uFF1A\u53D8\u91CF[n]: IE7\u53CA\u4EE5\u4E0B\u4E0D\u652F\u6301\uFF1B</p></li><li><p><code>s.indexOf(value,[,num])</code>;</p><ul><li><p>\u4E00\u4E2A\u53C2\u6570\uFF1A\u8FD4\u56DE\u6307\u5B9A\u5B57\u7B26\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\u5BF9\u5E94\u4E0B\u6807\uFF0C\u6CA1\u6709\u65F6\u8FD4\u56DE-1\uFF1B</p></li><li><p>\u4E24\u4E2A\u53C2\u6570\uFF1A\u6307\u5B9A\u4F4D\u7F6E\u5F00\u59CB\u67E5\u627E\u524D\u9762\u7684\u5B57\u7B26\uFF0C\u4F20\u5165\u8D1F\u6570\uFF0C\u9ED8\u8BA4\u4E3A0\uFF1B</p><p>\u5982\u679C\u9700\u8981\u67E5\u627E\u662F\u5426\u6709\u654F\u611F\u8BCD\uFF0C\u53EF\u4EE5\u5224\u65AD\u662F\u5426\u4E0D\u7B49\u4E8E-1</p></li></ul></li><li><p><code>s.lastindexOf(&quot;w&quot;)</code>; \u4ECE\u540E\u5F80\u5DE6\u627E\uFF0C\u8FD4\u56DE\u6307\u5B9A\u5B57\u7B26\u6216\u5B57\u7B26\u4E32\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\u4F4D\u7F6E\uFF1B\u4E0D\u5F71\u54CD\u4E0B\u6807\uFF0C\u8FD8\u662F\u4E00\u6837\u7684\uFF0C\u4ECE\u5DE6\u5230\u53F3\uFF1B</p></li></ol><h3 id="\u622A\u53D6-slice" tabindex="-1">\u622A\u53D6 slice <a class="header-anchor" href="#\u622A\u53D6-slice" aria-hidden="true">#</a></h3><ol><li><p><code>slice([n],[m])</code>\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;abcdefg&#39;</span>
str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; abcdefg    \u4E0D\u586B\u53C2\u6570\uFF0C\u8FD4\u56DE\u5168\u90E8\uFF1B</span>
str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; bcdefg    \u53EA\u6709n\u65F6\uFF0C\u4ECEn\u5F00\u59CB\u622A\u53D6\u5230\u7ED3\u675F</span>
str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; bc      n,m\u65F6, \u4ECEn\u622A\u53D6\u5230m, \u4E0D\u5305\u62ECm</span>
str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; empty  n&gt;m\u65F6, \u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32</span>
str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; g        \u8D1F\u6570\u4ECE\u540E\u9762\u5F00\u59CB\u622A\u53D6\u6307\u5B9A\u7684\u8D1F\u503C\u6570\u91CF</span>
</code></pre></div></li><li><p><code>substring([n],[m])</code>\uFF1B</p><p>\u4E0Eslice\u533A\u522B\u4E3A\uFF1An&gt;m\u81EA\u52A8\u8F6C\u6362\u4E0B\u6807\uFF0C\u8D1F\u6570\u4ECE0\u5F00\u59CB</p><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;abcdefg&#39;</span>
str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; bc     n&gt;m\u65F6, \u81EA\u52A8\u8F6C\u6362\u4E0B\u6807</span>
str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; abcdefg  \u8D1F\u6570\u4ECE0\u5F00\u59CB</span>
</code></pre></div></li><li><p><code>substr(index\uFF0Cnum)</code>\uFF1B</p><p>\u4E0E\u524D\u4E24\u4E2A\u533A\u522B\u4ECE\u4E0B\u6807\u622A\u53D6\u591A\u5C11\u4E2A\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;abcdefg&#39;</span>
str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// =&gt; bcd     n,m\u65F6, \u4ECEn\u622A\u53D6m\u4E2A</span>
str<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment">// =&gt; g        \u8D1F\u6570\u65F6, \u4ECE\u540E\u9762\u622A\u53D6</span>
</code></pre></div></li></ol><h3 id="\u5206\u5272-split" tabindex="-1">\u5206\u5272 split <a class="header-anchor" href="#\u5206\u5272-split" aria-hidden="true">#</a></h3><p><code>split(str,m)</code>\uFF1B</p><p>\u4EE5\u6307\u5B9A\u5B57\u7B26\u5206\u5272\u6210\u6570\u7EC4\uFF0C\u53EF\u4EE5\u89C4\u5B9A\u5206\u5272\u591A\u5C11\u4E2A\uFF0C\u5176\u4F59\u88AB\u7701\u7565\uFF1B</p><ul><li><p>\u4E0D\u586B\u53C2\u6570\u65F6\uFF1A\u4E00\u4E2A\u6570\u7EC4\uFF1B</p></li><li><p>\u4E00\u5BF9\u5F15\u53F7\uFF1A\u5206\u5272\u6BCF\u4E2A\u5B57\u7B26\uFF1B</p></li></ul><p>\u6570\u7EC4\u7684\u65B9\u6CD5\uFF1A</p><p>\u5B57\u7B26\u4E32\u53D8\u6570\u7EC4\uFF1A<code>split()</code>;</p><p>\u6570\u7EC4\u53D8\u5B57\u7B26\u4E32\uFF1A<code>join()</code>;</p><h3 id="\u66FF\u6362-replace" tabindex="-1">\u66FF\u6362 replace <a class="header-anchor" href="#\u66FF\u6362-replace" aria-hidden="true">#</a></h3><p><code>\u53D8\u91CF.replace(\u88AB\u66FF\u6362\u7684\u5B57\u7B26\uFF0C\u65B0\u5B57\u7B26)</code>\uFF1B</p><p>\u5982\u679C\u9700\u8981\u591A\u4E2A\u53EF\u4EE5\uFF1A<code>\u53D8\u91CF.replace().replace()</code>;</p><p>\u8FD4\u56DE\u88AB\u66FF\u6362\u7684\u5B57\u7B26\uFF0C\u53EA\u80FD\u66FF\u6362\u4E00\u6B21\uFF1B</p><h3 id="\u6BD4\u8F83-localecompare" tabindex="-1">\u6BD4\u8F83 localeCompare <a class="header-anchor" href="#\u6BD4\u8F83-localecompare" aria-hidden="true">#</a></h3><p>\u5B57\u7B26\u4E32\u662F\u4E00\u4F4D\u4E00\u4F4D\u7684\u6BD4\u8F83\uFF0C\u6BD4\u5982a=&quot;18&quot;,b=&quot;2&quot;\uFF0C\u5219b&gt;a;</p><ul><li><p>\u5982\u679C\u5B57\u7B26\u4E32\u5728\u5B57\u6BCD\u8868\u4E2D\u5E94\u8BE5\u6392\u5728\u5B57\u7B26\u4E32\u53C2\u6570\u4E4B\u524D\uFF0C\u8FD4\u56DE\u8D1F\u6570</p></li><li><p>\u5982\u679C\u76F8\u7B49\uFF0C\u8FD4\u56DE0</p></li><li><p>\u5982\u679C\u5728\u53C2\u6570\u4E4B\u540E\uFF0C\u8FD4\u56DE\u6B63\u6570\uFF1B</p></li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> stringV <span class="token operator">=</span> <span class="token string">&#39;yellow&#39;</span>
stringV<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token string">&#39;brick&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
stringV<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>
stringV<span class="token punctuation">.</span><span class="token function">localeCompare</span><span class="token punctuation">(</span><span class="token string">&#39;zoo&#39;</span><span class="token punctuation">)</span> <span class="token comment">// -1</span>
</code></pre></div><h3 id="\u8F6C\u6362-unicode\u7801" tabindex="-1">\u8F6C\u6362 Unicode\u7801 <a class="header-anchor" href="#\u8F6C\u6362-unicode\u7801" aria-hidden="true">#</a></h3><p>\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210Unicode\u7801\uFF1A<code>charCodeAt</code>\uFF08\u4F20\u5165\u4E0B\u6807\uFF09</p><p>\u5C06Unicode\u7801\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF1A<code>String.fromChartCode</code></p><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>
str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// 104</span>
str<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token comment">// 111</span>
String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">104</span><span class="token punctuation">,</span><span class="token number">101</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">108</span><span class="token punctuation">,</span><span class="token number">111</span><span class="token punctuation">)</span> <span class="token comment">// hello</span>
</code></pre></div><h3 id="\u5927\u5C0F\u5199" tabindex="-1">\u5927\u5C0F\u5199 <a class="header-anchor" href="#\u5927\u5C0F\u5199" aria-hidden="true">#</a></h3><ul><li><p><code>toLowerCase()</code>;\u76F4\u63A5\u8F6C\u53D8\u5C0F\u5199\uFF1B</p></li><li><p><code>toUpperCase()</code>; \u8F6C\u6362\u6210\u5927\u5199\uFF1B</p></li><li><p><code>toLocaleLowerCase()</code>; \u672C\u5730\u8F6C\u6362\u5C0F\u5199\uFF1B</p></li><li><p><code>toLocaleUpperCase()</code>; \u672C\u5730\u8F6C\u6362\u6210\u5927\u5199\uFF1B</p></li></ul><h3 id="trim" tabindex="-1">trim <a class="header-anchor" href="#trim" aria-hidden="true">#</a></h3><p>\u6E05\u9664\u5DE6\u53F3\u7A7A\u683C\uFF1B</p><p><code>str.trim()</code></p><h2 id="\u4E8C\u3001\u5B57\u7B26\u4E32\u6269\u5C55" tabindex="-1">\u4E8C\u3001\u5B57\u7B26\u4E32\u6269\u5C55 <a class="header-anchor" href="#\u4E8C\u3001\u5B57\u7B26\u4E32\u6269\u5C55" aria-hidden="true">#</a></h2><ul><li><p><code>includes(str)</code> : \u5224\u65AD\u662F\u5426\u5305\u542B\u6307\u5B9A\u7684\u5B57\u7B26\u4E32 true|false === indexOf</p><p>\u4E5F\u53EF\u4EE5\u7528\u4E8E\u6570\u7EC4\uFF1B\u4EC5\u9002\u7528\u4E8E\u666E\u901A\u7C7B\u578B\u7684\u6570\u7EC4\uFF0C\u4E0D\u5305\u542B\u5BF9\u8C61\u7684\u6570\u7EC4\uFF1B</p></li><li><p><code>startsWith(str)</code> : \u5224\u65AD\u662F\u5426\u4EE5\u6307\u5B9A\u5B57\u7B26\u4E32\u5F00\u5934</p></li><li><p><code>endsWith(str)</code> : \u5224\u65AD\u662F\u5426\u4EE5\u6307\u5B9A\u5B57\u7B26\u4E32\u7ED3\u5C3E</p></li><li><p><code>repeat(count)</code> : \u91CD\u590D\u6307\u5B9A\u6B21\u6570 \u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u5B57\u7B26\u4E32</p></li></ul><h3 id="padstart\u3001-padend" tabindex="-1">padStart\u3001 padEnd <a class="header-anchor" href="#padstart\u3001-padend" aria-hidden="true">#</a></h3><ol><li><p>\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3A\u6700\u5C0F\u957F\u5EA6\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u8865\u5168\u5B57\u7B26\u4E32\uFF1B</p><p><code>&#39;1&#39;.padStart(2,&#39;0&#39;)</code> //\u8FD4\u56DE &#39;01&#39;</p><p><code>&#39;1&#39;.padEnd(2,&#39;0&#39;)</code> //\u8FD4\u56DE &#39;10&#39;</p></li><li><p>\u5982\u679C\u539F\u5B57\u7B26\u4E32\u7B49\u4E8E\u6216\u5927\u4E8E\u6307\u5B9A\u7684\u6700\u5C0F\u957F\u5EA6\uFF0C\u5219\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32\uFF1B</p><p><code>&#39;10&#39;.padStart(2,&#39;0&#39;)</code> //\u8FD4\u56DE &#39;10&#39;</p></li><li><p>\u5982\u679C\u539F\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\u5C0F\u4E8E\u8865\u5168\u5B57\u7B26\u4E32\u7684\u957F\u5EA6\uFF0C\u5219\u622A\u53BB\u8D85\u51FA\u4F4D\u6570\u7684\u8865\u5168\u5B57\u7B26\u4E32\uFF1B</p><p><code>&#39;09-12&#39;.padStart(10, &#39;YYYY-MM-DD&#39;)</code> // &quot;YYYY-09-12&quot;</p><p><code>&#39;09-12&#39;.padEnd(10, &#39;YYYY-MM-DD&#39;)</code> // &quot;09-12YYYY-&quot;</p></li></ol><p>\u5B57\u7B26\u4E32\u7684\u7EC3\u4E60\uFF1A</p><div class="language-js"><pre><code><span class="token comment">//\u7F51\u7AD9\u5E38\u7528</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&#39;?user=18788889999&amp;psd=abcdefgg123&amp;code=Z4dCU4&amp;message=&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> str <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;?&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&amp;&quot;</span><span class="token punctuation">)</span>     <span class="token comment">//\u5148\u4EE5?\u53F7\u62C6\u518D\u4EE5&amp;\u62C6</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>  <span class="token comment">//\u58F0\u660E\u4E00\u4E2A\u5BF9\u8C61 \u4FDD\u7559\u6570\u636E</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>str<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">var</span> ss <span class="token operator">=</span> str<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ss<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;user&quot;</span> <span class="token operator">||</span> ss<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;psd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//\u5982\u679C\u662Fuser\u6216psd\u5C31\u4FDD\u7559</span>
        obj<span class="token punctuation">[</span>ss<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> ss<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5C06\u5B57\u7B26\u4E32\u5012\u8FC7\u6765\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;Hello Word!&quot;</span>
str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E09\u3001\u5B57\u7B26\u4E32\u7684html\u65B9\u6CD5" tabindex="-1">\u4E09\u3001\u5B57\u7B26\u4E32\u7684html\u65B9\u6CD5 <a class="header-anchor" href="#\u4E09\u3001\u5B57\u7B26\u4E32\u7684html\u65B9\u6CD5" aria-hidden="true">#</a></h2><p>\u4E0D\u5EFA\u8BAE\u4F7F\u7528\u8FD9\u4E9B\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u521B\u5EFA\u7684\u6807\u7B7E\u901A\u5E38\u65E0\u6CD5\u8868\u8FBE\u8BED\u4E49\uFF1B</p><ul><li>big\u6807\u7B7E\uFF1A<code>big()</code></li><li>b\u6807\u7B7E\uFF1A<code>bold()</code></li><li>i\u6807\u7B7E\uFF1A<code>italics()</code></li><li>tt\u6807\u7B7E\uFF1A<code>fixed()</code></li><li>font color\u6807\u7B7E\uFF1A<code>fontcolor(color)</code></li><li>font size\u6807\u7B7E\uFF1A<code>fontsize(size)</code></li><li>a\u6807\u7B7E\uFF1A<code>link(url)</code></li><li>a name\u6807\u7B7E\uFF1A<code>anchor(name)</code>\uFF1B</li><li>small\u6807\u7B7E\uFF1A<code>small()</code></li><li>strike\u6807\u7B7E\uFF1A<code>strike()</code></li><li>sub\u6807\u7B7E\uFF1A<code>sub()</code></li><li>sup\u6807\u7B7E\uFF1A<code>sup()</code></li></ul><div class="language-js"><pre><code><span class="token string">&#39;wyy&#39;</span><span class="token punctuation">.</span><span class="token function">link</span><span class="token punctuation">(</span><span class="token string">&#39;http://wyy.heny.vip&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &lt;a href=&#39;http://wyy.heny.vip&#39;&gt;wyy&lt;/a&gt;</span>
<span class="token string">&#39;str&#39;</span><span class="token punctuation">.</span><span class="token function">fontcolor</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &lt;font color=&#39;red&#39;&gt;str&lt;/font&gt;</span>
</code></pre></div><h2 id="\u56DB\u3001uri\u7F16\u7801" tabindex="-1">\u56DB\u3001URI\u7F16\u7801 <a class="header-anchor" href="#\u56DB\u3001uri\u7F16\u7801" aria-hidden="true">#</a></h2><ul><li><code>encodeURI</code>\uFF1A\u4E3B\u8981\u662F\u9488\u5BF9\u6574\u4F53URI\u8FDB\u884C\u7F16\u7801\uFF0C\u4E0D\u4F1A\u5BF9\u672C\u8EAB\u5C5E\u4E8EURI\u7684\u7279\u6B8A\u5B57\u7B26\u8FDB\u884C\u7F16\u7801\uFF0C\u4F8B\u5982\u5192\u53F7\u3001\u6B63\u659C\u6760\u3001\u95EE\u53F7\u548C\u4E95\u5B57\u53F7\uFF1B</li><li><code>encodeURIComponent</code>\uFF1A\u4E3B\u8981\u9488\u5BF9URI\u7684\u67D0\u4E00\u6BB5\u8FDB\u884C\u7F16\u7801</li><li><code>decodeURI</code>\uFF1A\u5BF9encodeURI\u8FDB\u884C\u89E3\u7801</li><li><code>decodeURIComponent</code>\uFF1A\u5BF9encodeURIComponent\u8FDB\u884C\u89E3\u7801</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> uri <span class="token operator">=</span> <span class="token string">&#39;http://www.wrox.com/illegal value.html#start&#39;</span>
<span class="token function">encodeURI</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span> <span class="token comment">//http://www.wrox.com/illegal%20value.html#start</span>
<span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span> <span class="token comment">// http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.html%23start</span>
</code></pre></div><p>\u5B9E\u8DF5\u4E2D\u5E38\u7528<code>encodeURIComponent</code>\uFF1B</p><h2 id="\u4E94\u3001\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1">\u4E94\u3001\u5BF9\u8C61\u65B9\u6CD5 <a class="header-anchor" href="#\u4E94\u3001\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a></h2><h3 id="\u539F\u578B\u5BF9\u8C61" tabindex="-1">\u539F\u578B\u5BF9\u8C61 <a class="header-anchor" href="#\u539F\u578B\u5BF9\u8C61" aria-hidden="true">#</a></h3><ol><li><p><code>Object.defineProperty(obj,attr,descriptor)</code></p><p>\u4FEE\u6539\u6216\u6DFB\u52A0\u4E00\u4E2A\u5C5E\u6027\uFF0C\u901A\u8FC7defineProperty\u53EF\u4EE5\u52AB\u6301\u4E00\u4E2A\u5BF9\u8C61\u7684\u4FEE\u6539\uFF1B</p><p>\u6BCF\u4E2A\u5BF9\u8C61\u503C\u90FD\u6709\u4E09\u4E2A\u5C5E\u6027\uFF1Aconfigurable\u3001writable\u3001enumerable\uFF1B</p><p>\u5982\u679C\u76F4\u63A5\u7528defineProperty\u521B\u5EFA\u7684\u5C5E\u6027\uFF0C\u5C06\u9ED8\u8BA4\u4E09\u4E2A\u5C5E\u6027\u5747\u4E3Afalse\uFF0C\u76F4\u63A5\u521B\u5EFA\u7684\u5BF9\u8C61\u4E09\u4E2A\u5C5E\u6027\u9ED8\u8BA4\u4E3Atrue</p><div class="language-js"><pre><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// configurable\u53EA\u80FD\u8BBE\u7F6E\u4E00\u6B21\uFF0C\u518D\u6B21\u8BBE\u7F6E\u5C06\u62A5\u9519</span>
    <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;hny&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p><code>Object.defineProperties(obj,props)</code></p><p>\u6DFB\u52A0\u6216\u4FEE\u6539\u591A\u4E2A\u65B0\u5C5E\u6027\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperties</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">edition</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">18</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p><code>Object.getOwnPropertyDescriptor(obj, props)</code></p><p>\u53D6\u5F97\u7ED9\u5B9A\u5C5E\u6027\u7684\u63CF\u8FF0\u7B26\uFF1B</p></li><li><p><code>obj.isPrototypeOf</code></p><p>\u68C0\u6D4B\u5BF9\u8C61\u662F\u5426\u662F\u53E6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B</p><div class="language-js"><pre><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;haha&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">var</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
obj<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>

<span class="token comment">// \u6784\u9020\u51FD\u6570\u4F7F\u7528\u539F\u578B\u53BB\u5BF9\u6BD4;</span>
<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">isPrototypeOf</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre></div></li><li><p><code>Object.getPrototypeOf()</code></p><p>\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\uFF1B</p></li><li><p><code>Object.setPrototypeOf(obj1,obj2)</code></p><p>\u5C06obj2\u4F5C\u4E3A\u539F\u578B\u653E\u5230obj1\u8EAB\u4E0A\uFF0C\u4F1A\u76F4\u63A5\u4FEE\u6539obj1\u8FD4\u56DE\u4E00\u4E2Aobj2\uFF1B</p></li><li><p><code>obj.hasOwnProperty()</code></p><p>\u5224\u65AD\u67D0\u4E2A\u5C5E\u6027\u662F\u5426\u5B58\u5728\u4E8E\u67D0\u4E2A\u5BF9\u8C61\u5F53\u4E2D\uFF0C\u4E5F\u53EF\u4EE5\u4F7F\u7528in</p><p>hasOwnProperty\u4E0D\u4F1A\u5224\u65AD\u5230\u539F\u578B\u53BB\uFF0C</p><p><code>in</code> \u64CD\u4F5C\u7B26\u5224\u65AD\u5BF9\u8C61\u80FD\u5426\u8BBF\u95EE\u7ED9\u5B9A\u5C5E\u6027\u65F6\u8FD4\u56DEtrue\uFF0C\u5426\u5219\u8FD4\u56DEfalse\uFF1B</p><p>\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u539F\u578B\u7684\u5C5E\u6027\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">hasPrototypeProperty</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4E0D\u662F\u5B9E\u4F8B\u8EAB\u4E0A\u7684\uFF0Cin\u64CD\u4F5C\u7B26\u5224\u65AD\u80FD\u5426\u83B7\u53D6\u5230\u503C;</span>
    <span class="token keyword">return</span> <span class="token operator">!</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> name <span class="token keyword">in</span> obj
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><code>Object.create</code></p><p>\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u5C06\u4F20\u5165\u7684\u5BF9\u8C61\u653E\u5230\u65B0\u5BF9\u8C61\u7684\u539F\u578B\u4E0A\uFF0C\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hhh&#39;</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>  <span class="token comment">// {}</span>
obj2<span class="token punctuation">.</span>name  <span class="token comment">// hhh</span>
</code></pre></div></li><li><p><code>Object.getOwnpropertyNames()</code></p><p>\u8FD4\u56DE\u5BF9\u8C61\u81EA\u8EAB\u7684\u5168\u90E8\u5C5E\u6027\u540D\u79F0\uFF1B</p></li></ol><h3 id="\u5176\u4ED6\u65B9\u6CD5" tabindex="-1">\u5176\u4ED6\u65B9\u6CD5 <a class="header-anchor" href="#\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a></h3><ol><li><p><code>Object.is(value1,value2)</code></p><p>\u5224\u65AD\u4E24\u4E2A\u503C\u662F\u5426\u76F8\u7B49\uFF0C\u901A\u8FC7Object.is\u5224\u65AD\uFF0C\u4E24\u4E2ANaN\u662F\u76F8\u7B49\u7684\uFF1B</p><div class="language-js"><pre><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">,</span><span class="token function">Number</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment">// true</span>
</code></pre></div></li><li><p><code>Object.assign(target,source.......)</code></p><p>\u5408\u5E76\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u5C06\u591A\u4E2Asource\u5BF9\u8C61\u7EC4\u5408\u5230target\u5BF9\u8C61\u8EAB\u4E0A\uFF1B</p></li><li><p><code>Object.keys</code></p><p>\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u8FD4\u56DE\u5BF9\u8C61\u6240\u6709\u7684key\u503C\uFF0C\u901A\u8FC7\u904D\u5386\u8FD4\u56DE\u7684\u6570\u7EC4\uFF0C\u518D\u6B21\u8C03\u7528\u539F\u6765\u7684\u5BF9\u8C61\uFF0C\u53D6\u5F97\u6240\u6709\u7684value\u503C;</p><p>\u8BE5\u65B9\u6CD5\u4E0D\u4F1A\u8FD4\u56DE\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token literal-property property">b</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token literal-property property">c</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token literal-property property">d</span><span class="token operator">:</span><span class="token number">4</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> objArr <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token operator">:</span>obj<span class="token punctuation">[</span>item<span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [{a:1},{b:2}....]</span>
</code></pre></div></li><li><p><code>Object.values</code></p><p>\u4EE5\u6570\u7EC4\u7684\u5F62\u5F0F\u8FD4\u56DE\u5BF9\u8C61\u6240\u6709\u7684value\u503C;</p></li><li><p><code>Object.entries</code></p><p>\u4EE5\u4E8C\u7EF4\u6570\u7EC4\u7684\u5F62\u5F0F\u8FD4\u56DE\u4F20\u5165\u7684\u5BF9\u8C61\uFF0C\u76F8\u5F53\u4E8Ees6\u91CC\u9762\u7684map\u5BF9\u8C61\uFF1B</p></li><li><p><code>Object.fromEntries</code></p><p>\u4EE5\u5BF9\u8C61\u7684\u5F62\u5F0F\u8FD4\u56DE\u4F20\u5165\u7684\u4E8C\u7EF4\u6570\u7EC4\u5BF9\u8C61\uFF1B</p></li><li><p><code>Object.freeze(obj)</code></p><p>\u51BB\u7ED3\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4E00\u4E2A\u88AB\u51BB\u7ED3\u7684\u5BF9\u8C61\u4E0D\u80FD\u88AB\u4FEE\u6539;\uFF08\u53EA\u662F\u51BB\u7ED3\u503C\uFF0C\u5F15\u7528\u4E0D\u4F1A\u88AB\u51BB\u7ED3\uFF09</p><p>\u4E0D\u80FD\u88AB\u4FEE\u6539\u662F\u4E0D\u80FD\u76F4\u63A5\u4FEE\u6539\u5BF9\u8C61\u7684\u57FA\u672C\u7C7B\u578B\u7684\u503C\uFF0C\u5982\u679C\u5BF9\u8C61\u88AB\u91CD\u65B0\u8D4B\u503C\uFF0C\u8FD8\u662F\u53EF\u4EE5\u88AB\u4FEE\u6539\u7684\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;hhh&#39;</span><span class="token punctuation">}</span>
Object<span class="token punctuation">.</span><span class="token function">freeze</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;sss&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;hhh&#39;}</span>

obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;sss&#39;</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;hny&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token comment">// {name: &#39;hny&#39;}</span>
</code></pre></div></li><li><p><code>Object.isFrozen(obj)</code></p><p>\u5224\u65AD\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u51BB\u7ED3\u72B6\u6001</p></li></ol><h2 id="\u9AD8\u9891\u9762\u8BD5\u9898" tabindex="-1">\u9AD8\u9891\u9762\u8BD5\u9898 <a class="header-anchor" href="#\u9AD8\u9891\u9762\u8BD5\u9898" aria-hidden="true">#</a></h2><p>\u25CF js \u6709\u54EA\u4E9B\u5185\u7F6E\u5BF9\u8C61\uFF1F</p><p>\u25CF \u628A\u4E0B\u9762\u7684\u5B57\u7B26\u4E32\u53BB\u91CD\uFF0C\u5E76\u53BB\u9664\u6389\u7279\u6B8A\u5B57\u7B26\u6309\u7167\u6570\u5B57\u5728\u524D\u5B57\u6BCD\u5728\u540E\u7684\u987A\u5E8F\u6392\u5E8F\u5B57\u7B26\u4E32</p><p>\u5982\u4E0B\uFF1A\u201C1233fddfd&amp;3434fdsaff&amp;454545&amp;4545444rfdsfds&amp;545gdsgs\u201D</p><p>\u25CF \u622A\u53D6\u5B57\u7B26\u4E32\u201Cabcdefg\u201D\u4E2D\u7684 def\u3002</p>`,56),l=n("p",{"a:\u201C1\u201D,b:\u201C2\u201D\uFF0Cc:\u201C\u201D\uFF0Cd\uFF1A\u201Cxxx\u201D\uFF0Ce:undefined":""},[s("\u25CF \u6709\u8FD9\u6837\u4E00\u4E2A url\uFF1A"),n("a",{href:"http://item.taobo.com/item.html?a=1&b=2&c=&d=xxx&e",target:"_blank",rel:"noopener noreferrer"},"http://item.taobo.com/item.html?a=1&b=2&c=&d=xxx&e"),s(", \u8BF7\u5199 \u4E00\u6BB5 js \u7A0B\u5E8F\u63D0\u53D6 url \u4E2D\u5404\u4E2A get \u53C2\u6570 ( \u53C2\u6570\u540D\u548C\u53C2\u6570\u4E2A\u6570\u4E0D\u786E\u5B9A )\uFF0C\u5C06\u5176 key-value \u5F62\u5F0F\u8FD4\u56DE\u5230\u4E00\u4E2A json \u7ED3\u6784\u4E2D\uFF0C\u5982")],-1),i=n("p",null,"\u25CF \u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u51FA\u73B0\u6B21\u6570\u6700\u591A\u7684\u5B57\u7B26\uFF0C\u5E76\u4E14\u7EDF\u8BA1\u6B21\u6570\u3002",-1),r=[c,l,i];function u(k,d,m,h,b,g){return t(),p("div",null,r)}var j=a(o,[["render",u]]);export{y as __pageData,j as default};
