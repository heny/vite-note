import{_ as s,c as n,o as a,d as e}from"./app.e5c17f53.js";const h='{"title":"node-06 \u52A0\u5BC6 cookie ejs","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u52A0\u5BC6","slug":"\u4E00\u3001\u52A0\u5BC6"},{"level":2,"title":"\u4E8C\u3001cookie","slug":"\u4E8C\u3001cookie"},{"level":3,"title":"\u5728nodejs\u4F7F\u7528cookie","slug":"\u5728nodejs\u4F7F\u7528cookie"},{"level":3,"title":"\u5728express\u4E2D\u4F7F\u7528cookie","slug":"\u5728express\u4E2D\u4F7F\u7528cookie"},{"level":2,"title":"\u4E09\u3001cookie-session","slug":"\u4E09\u3001cookie-session"},{"level":3,"title":"cookie\u548Csession\u7684\u533A\u522B","slug":"cookie\u548Csession\u7684\u533A\u522B"},{"level":3,"title":"session\u4E0Ecookie\u7684\u8054\u7CFB","slug":"session\u4E0Ecookie\u7684\u8054\u7CFB"},{"level":2,"title":"\u56DB\u3001\u6A21\u677F\u5F15\u64CEejs","slug":"\u56DB\u3001\u6A21\u677F\u5F15\u64CEejs"},{"level":3,"title":"\u6807\u7B7E\u542B\u4E49","slug":"\u6807\u7B7E\u542B\u4E49"},{"level":3,"title":"ejs\u5E38\u7528\u8BED\u6CD5","slug":"ejs\u5E38\u7528\u8BED\u6CD5"},{"level":3,"title":"class\u4F7F\u7528\u53D8\u91CF","slug":"class\u4F7F\u7528\u53D8\u91CF"},{"level":3,"title":"ejs\u58F0\u540D\u53D8\u91CF","slug":"ejs\u58F0\u540D\u53D8\u91CF"},{"level":3,"title":"ejs\u4F5C\u7528\u57DF","slug":"ejs\u4F5C\u7528\u57DF"}],"relativePath":"src/frontend/node/node-06 \u52A0\u5BC6 cookie ejs.md","lastUpdated":1615699077000}',t={},o=e(`<h1 id="node-06-\u52A0\u5BC6-cookie-ejs" tabindex="-1">node-06 \u52A0\u5BC6 cookie ejs <a class="header-anchor" href="#node-06-\u52A0\u5BC6-cookie-ejs" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u52A0\u5BC6" tabindex="-1">\u4E00\u3001\u52A0\u5BC6 <a class="header-anchor" href="#\u4E00\u3001\u52A0\u5BC6" aria-hidden="true">#</a></h2><ol><li>\u5F15\u5165\u6A21\u677F\uFF1A<code>require(&#39;crypto&#39;)</code>\uFF1B</li><li>\u6563\u5217\u7B97\u6CD5(\u54C8\u5E0C)\u52A0\u5BC6\uFF1A</li></ol><p>\u6563\u5217\u7B97\u6CD5\u4E5F\u53EB\u54C8\u5E0C\u7B97\u6CD5\uFF0C\u628A\u4EFB\u610F\u957F\u5EA6\u7684\u8F93\u5165\u53D8\u6362\u6210\u56FA\u5B9A\u957F\u5EA6\u7684\u8F93\u51FA\uFF0C\u5E38\u89C1\u6709md5,sha1,sha256\u7B49,\u9700\u8981\u8DDF\u4E00\u4E2A\u5BC6\u94A5\uFF0C\u5BC6\u94A5\u968F\u4FBF\u5199\uFF1B</p><div class="language-js"><pre><code>crypto<span class="token punctuation">.</span><span class="token function">createHmac</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;hny#@!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="3"><li>\u54C8\u5E0C\u7B97\u6CD5\uFF1A</li></ol><div class="language-js"><pre><code>crypto<span class="token punctuation">.</span><span class="token function">createHash</span><span class="token punctuation">(</span><span class="token string">&#39;md5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">digest</span><span class="token punctuation">(</span><span class="token string">&#39;hex&#39;</span><span class="token punctuation">)</span>\uFF1B
</code></pre></div><p>\u52A0\u5BC6\u4E4B\u540E\u7684\u5224\u65AD\uFF0C\u518D\u7528\u6237\u8F93\u5165\u5B8C\u6210\u4E4B\u540E\u518D\u6B21\u52A0\u5BC6\uFF0C\u518D\u8FDB\u884C\u5BF9\u6BD4\uFF1B</p><h2 id="\u4E8C\u3001cookie" tabindex="-1">\u4E8C\u3001cookie <a class="header-anchor" href="#\u4E8C\u3001cookie" aria-hidden="true">#</a></h2><p>\u4E3B\u8981\u89E3\u51B3http\u534F\u8BAE\u65E0\u72B6\u6001\u95EE\u9898\uFF08\u6CA1\u6709\u8BB0\u5FC6\uFF09\uFF1B</p><h3 id="\u5728nodejs\u4F7F\u7528cookie" tabindex="-1">\u5728nodejs\u4F7F\u7528cookie <a class="header-anchor" href="#\u5728nodejs\u4F7F\u7528cookie" aria-hidden="true">#</a></h3><ul><li><p>\u8BBE\u7F6E\uFF1A<code>res.setHeader(&#39;Set-Cookie&#39;,[&#39;name=hny&#39;,&#39;age=18&#39;])</code>;</p></li><li><p>\u83B7\u53D6\uFF1A<code>req.headers</code>\uFF1B\uFF08\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E2D\u95F4\u4EF6\u6765\u83B7\u53D6req.cookie\uFF09</p></li></ul><h3 id="\u5728express\u4E2D\u4F7F\u7528cookie" tabindex="-1">\u5728express\u4E2D\u4F7F\u7528cookie <a class="header-anchor" href="#\u5728express\u4E2D\u4F7F\u7528cookie" aria-hidden="true">#</a></h3><p>\u5B89\u88C5\u4E2D\u95F4\u4EF6\uFF1A<code>cookie-parser</code>\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">const</span> cookieParse <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cookie-parser&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieParse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><ul><li><p>\u8BBE\u7F6E\uFF1A<code>res.cookie(name,value[,option])</code>\uFF1B</p><p>\u53EF\u9009option\uFF1A</p><ul><li><p><code>expires</code> : \u65F6\u95F4\u5BF9\u8C61 <code>new Date( Date.now() +1*24*60*60*1000 )</code></p></li><li><p><code>maxAge</code>\uFF1A<code>1*24*60*60*1000</code>\uFF1B\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF1B</p></li><li><p><code>httpOnly</code>\uFF1A\u5E03\u5C14\u503C\uFF0C\u5BA2\u6237\u7AEF\u4E0D\u80FD\u8BBE\u7F6Ecookie\uFF1B</p></li><li><p><code>path</code>\uFF1A\u53EA\u5141\u8BB8\u6307\u5B9A\u7684\u4F4D\u7F6E\u8BBF\u95EE\uFF1B</p></li><li><p><code>domain</code>\uFF1A\u53EA\u5141\u8BB8\u6307\u5B9A\u7684\u57DF\u540D\u8BBF\u95EE\uFF1B</p></li></ul><p>\u4FEE\u6539host\u6587\u4EF6\uFF1AC:\\Windows\\System32\\drivers\\etc\uFF1Bip\u5730\u5740+\u57DF\u540D\uFF1B\u6307\u5B9A\u57DF\u540D\u4E3A\u672C\u5730\u57DF\u540D\uFF1B</p></li><li><p>\u83B7\u53D6\uFF1Areq.cookies\uFF1B</p></li></ul><h2 id="\u4E09\u3001cookie-session" tabindex="-1">\u4E09\u3001cookie-session <a class="header-anchor" href="#\u4E09\u3001cookie-session" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u4E2D\u95F4\u4EF6\uFF1A<code>cookie-session</code></p><div class="language-js"><pre><code><span class="token keyword">const</span> cookieSession <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;cookie-session&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">cookieSession</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p><strong>\u5BF9\u8C61\u91CC\u9762</strong></p><ul><li><p>name: cookie\u540D\u5B57\uFF0C\u9ED8\u8BA4\u4E3Asession,</p></li><li><p>keys:[]\uFF1B\u5BC6\u94A5\uFF0C\u968F\u610F\u591A\u4E2A\uFF1B \u5FC5\u586B\uFF1B\u9700\u8981\u65B9\u62EC\u53F7;</p></li><li><p>maxAge\uFF1B\u8FC7\u671F\u65F6\u95F4\uFF0C\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D\uFF1B</p></li></ul><p><strong>\u64CD\u4F5C\u65B9\u6CD5</strong></p><ul><li><p>\u8BBE\u7F6Ecookie\uFF1A<code>req.session.username = &#39;hny&#39;</code>;</p></li><li><p>\u83B7\u53D6cookie\uFF1A<code>req.session.username</code>\uFF1B</p></li></ul><p>\u5982\u679C\u9700\u8981\u5220\u9664cookie\uFF0C\u53EF\u4EE5\u8BA9\u503C\u7B49\u4E8E\u7A7A\uFF1B</p><p>\u5F53cookie\u91CC\u9762\u5B58\u6709session id\u65F6\uFF0C\u9700\u8981\u83B7\u53D6\u5230\u5B58\u7684cookie\uFF0C\u9700\u8981\u8BBE\u7F6E\u76F8\u540C\u7684name\u548Ckeys\uFF0C\u624D\u80FD\u901A\u8FC7req.session\u62FF\u503C\uFF1B</p><h3 id="cookie\u548Csession\u7684\u533A\u522B" tabindex="-1">cookie\u548Csession\u7684\u533A\u522B <a class="header-anchor" href="#cookie\u548Csession\u7684\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>\uFF081\uFF09(\u5931\u6548) Session \u4F1A\u5728\u6D4F\u89C8\u5668\u5173\u95ED\u4E4B\u540E\u5931\u6548\uFF0CCookie \u5219\u53EF\u4EE5\u5728\u7406\u8BBA\u4E0A\u6C38\u4E45\u6709\u6548(\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4)\u3002</li><li>\uFF082\uFF09(\u5B58\u653E) Cookie \u6570\u636E\u5B58\u653E\u5728\u5BA2\u6237\u7684\u6D4F\u89C8\u5668\u4E0A\uFF0C Session \u6570\u636E\u5B58\u653E\u5728\u670D\u52A1\u5668\u4E0A\u3002</li><li>\uFF083\uFF09(\u9ED1\u5BA2) Cookie \u4E0D\u5B89\u5168\uFF0C\u9ED1\u5BA2\u53EF\u4EE5\u5206\u6790\u672C\u5730\u7684 Cookie, \u5E76\u8FDB\u884C Cookie \u6B3A\u9A97\u3002 \u800C Session \u4FDD\u5B58\u5728\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\uFF0C\u76F8\u5BF9\u5B89\u5168\uFF08\u91CD\u8981\u7684\u4FE1\u606F\u5E94\u8BE5\u5B58\u5728session\uFF09;</li><li>\uFF084\uFF09(\u9650\u5236) Cookie\u6709\u5927\u5C0F\u9650\u5236\uFF0C\u4E00\u822C\u662F4KB\u3002 \u57DF\u540D20-50\u4E2A\u4EE5\u5185\uFF0CSession \u5219\u6CA1\u6709\u8FD9\u65B9\u9762\u7684\u9650\u5236\u3002</li><li>\uFF085\uFF09(\u7981\u7528) \u6D4F\u89C8\u5668\u7684\u8BBE\u7F6E\u53EF\u80FD\u7981\u7528 Cookie\uFF0C\u8FD9\u65F6\u6240\u6709\u5173\u4E8E Cookie \u7684\u5E94\u7528\u90FD\u5C06\u5931\u8D25\uFF0C\u4F46\u662F Session \u5374\u6C38\u8FDC\u4E0D\u4F1A\u6709\u8FD9\u4E2A\u95EE\u9898\uFF1B</li></ul><h3 id="session\u4E0Ecookie\u7684\u8054\u7CFB" tabindex="-1">session\u4E0Ecookie\u7684\u8054\u7CFB <a class="header-anchor" href="#session\u4E0Ecookie\u7684\u8054\u7CFB" aria-hidden="true">#</a></h3><p>\u200B Session \u4F9D\u8D56 cookie\uFF0C\u56E0\u4E3A session id \u5B58\u5728\u5BA2\u6237\u7AEF\u3002</p><h2 id="\u56DB\u3001\u6A21\u677F\u5F15\u64CEejs" tabindex="-1">\u56DB\u3001\u6A21\u677F\u5F15\u64CEejs <a class="header-anchor" href="#\u56DB\u3001\u6A21\u677F\u5F15\u64CEejs" aria-hidden="true">#</a></h2><p>\u6E32\u67D3\u9875\u9762\uFF1A\u65B0\u95FB\u5217\u8868\u9875\u4E2D\u7684\u663E\u793A\u7684\u5185\u5BB9\u4E0D\u540C\uFF0C\u4F46\u663E\u793A\u7684\u98CE\u683C\u90FD\u4E00\u6837\uFF0C\u5C31\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u6A21\u677F\uFF0C\u5B9E\u9645\u4E0A\u5C31\u662F\u6E32\u67D3\u9875\u9762\uFF1B</p><p>\u524D\u7AEF\u6E32\u67D3\uFF1A\u524D\u7AEF\u6E32\u67D3\u90FD\u4F7F\u7528\u7684ajax\u7684\u6280\u672F\uFF0C\u4F46\u4E0D\u5229\u4E8Eseo\u4F18\u5316\uFF1B</p><p>\u540E\u7AEF\u6E32\u67D3\uFF1A\u4F7F\u7528\u6A21\u677F\u5F15\u64CE\uFF0C\u6709\u5229\u4E8Eseo\u4F18\u5316\uFF1B</p><ol><li>\u4E0B\u8F7Dejs\u5305\uFF0C\u4E4B\u540E\u4E0D\u9700\u8981\u624B\u52A8\u5F15\u5165</li></ol><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span> <span class="token string">&#39;view engine&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;ejs&#39;</span> <span class="token punctuation">)</span>  <span class="token comment">//\u8BBE\u7F6E\u5F15\u64CE\uFF1B</span>
app<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;views&#39;</span><span class="token punctuation">,</span><span class="token punctuation">[</span>__dirname<span class="token operator">+</span><span class="token string">&#39;/views&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;template&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">//\u6309\u7167\u987A\u5E8F\u6307\u5B9A\u6A21\u677F\u76EE\u5F55</span>
app<span class="token punctuation">.</span><span class="token function">engine</span><span class="token punctuation">(</span><span class="token string">&#39;html&#39;</span><span class="token punctuation">,</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ejs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__express<span class="token punctuation">)</span>     <span class="token comment">//\u544A\u8BC9express html\u4EE5ejs\u6A21\u677F\u5F15\u64CE\u53BB\u6E32\u67D3</span>
</code></pre></div><ol start="3"><li><code>res.render(&#39;index&#39;,[,data])</code>\uFF1B\u4F7F\u7528ejs\u5F15\u64CE\uFF1B</li></ol><p>\u6CE8\u610F\uFF1A\u4F20\u5165\u7684index\u6587\u4EF6\u4E0D\u9700\u8981\u540E\u7F00\uFF0C\u4F1A\u81EA\u52A8\u53BBviews\u6587\u4EF6\u5939\u4E2D\u627E\u6A21\u677F\u6587\u4EF6\uFF0C\u540E\u9762\u4F20\u5165\u6570\u636E\uFF0C\u591A\u4E2A\u53EF\u4F7F\u7528\u5BF9\u8C61\uFF0C\u5728ejs\u6A21\u677F\u4E2D\u4F7F\u7528\uFF1A</p><h3 id="\u6807\u7B7E\u542B\u4E49" tabindex="-1">\u6807\u7B7E\u542B\u4E49 <a class="header-anchor" href="#\u6807\u7B7E\u542B\u4E49" aria-hidden="true">#</a></h3><ul><li><code>&lt;%</code> &#39;\u811A\u672C&#39; \u6807\u7B7E\uFF0C\u7528\u4E8E\u6D41\u7A0B\u63A7\u5236\uFF0C\u65E0\u8F93\u51FA\u3002</li><li><code>&lt;%_</code> \u5220\u9664\u5176\u524D\u9762\u7684\u7A7A\u683C\u7B26</li><li><code>&lt;%=</code> \u8F93\u51FA\u6570\u636E\u5230\u6A21\u677F\uFF08\u8F93\u51FA\u662F\u8F6C\u4E49 HTML \u6807\u7B7E\uFF09</li><li><code>&lt;%-</code> \u8F93\u51FA\u975E\u8F6C\u4E49\u7684\u6570\u636E\u5230\u6A21\u677F</li><li><code>&lt;%#</code> \u6CE8\u91CA\u6807\u7B7E\uFF0C\u4E0D\u6267\u884C\u3001\u4E0D\u8F93\u51FA\u5185\u5BB9</li><li><code>&lt;%%</code> \u8F93\u51FA\u5B57\u7B26\u4E32 &#39;&lt;%&#39;</li><li><code>%&gt;</code> \u4E00\u822C\u7ED3\u675F\u6807\u7B7E</li><li><code>-%&gt;</code> \u5220\u9664\u7D27\u968F\u5176\u540E\u7684\u6362\u884C\u7B26</li><li><code>_%&gt;</code> \u5C06\u7ED3\u675F\u6807\u7B7E\u540E\u9762\u7684\u7A7A\u683C\u7B26\u5220\u9664</li></ul><h3 id="ejs\u5E38\u7528\u8BED\u6CD5" tabindex="-1">ejs\u5E38\u7528\u8BED\u6CD5 <a class="header-anchor" href="#ejs\u5E38\u7528\u8BED\u6CD5" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token comment">// \u4F7F\u7528\u53D8\u91CF</span>
<span class="token operator">&lt;</span><span class="token operator">%=</span> \u53D8\u91CF<span class="token operator">%</span><span class="token operator">&gt;</span>

<span class="token comment">// \u4F7F\u7528\u6A21\u677F</span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token operator">-</span> <span class="token function">include</span><span class="token punctuation">(</span><span class="token string">&#39;header&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">%</span><span class="token operator">&gt;</span>
    
<span class="token comment">// \u4F7F\u7528\u5FAA\u73AF\u6216\u5224\u65AD\u65B9\u5F0F</span>
<span class="token operator">&lt;</span><span class="token operator">%</span> <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token operator">%</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">%=</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">%</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">%</span><span class="token punctuation">}</span><span class="token operator">%</span><span class="token operator">&gt;</span>

</code></pre></div><h3 id="class\u4F7F\u7528\u53D8\u91CF" tabindex="-1">class\u4F7F\u7528\u53D8\u91CF <a class="header-anchor" href="#class\u4F7F\u7528\u53D8\u91CF" aria-hidden="true">#</a></h3><div class="language-ejs"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>theme<span class="token punctuation">.</span>music<span class="token punctuation">.</span>fixed<span class="token punctuation">)</span> <span class="token punctuation">{</span> </span><span class="token delimiter punctuation">%&gt;</span></span> music-player <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript"> <span class="token punctuation">}</span> </span><span class="token delimiter punctuation">%&gt;</span></span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="ejs\u58F0\u540D\u53D8\u91CF" tabindex="-1">ejs\u58F0\u540D\u53D8\u91CF <a class="header-anchor" href="#ejs\u58F0\u540D\u53D8\u91CF" aria-hidden="true">#</a></h3><p>ejs\u8FD8\u53EF\u4EE5\u5728\u5916\u90E8\u58F0\u540D\u53D8\u91CF\uFF0C\u5728\u5185\u90E8\u76F4\u63A5\u4F7F\u7528\uFF0Cejs\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199js\u4EE3\u7801</p><div class="language-ejs"><pre><code><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript">
	<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;hny&#39;</span>    
</span><span class="token delimiter punctuation">%&gt;</span></span>
&lt;div class=&#39;<span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%-</span><span class="token language-javascript"> theme<span class="token punctuation">.</span>music<span class="token punctuation">.</span>class </span><span class="token delimiter punctuation">%&gt;</span></span>&#39;
    <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%=</span><span class="token language-javascript"> name </span><span class="token delimiter punctuation">%&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="ejs\u4F5C\u7528\u57DF" tabindex="-1">ejs\u4F5C\u7528\u57DF <a class="header-anchor" href="#ejs\u4F5C\u7528\u57DF" aria-hidden="true">#</a></h3><p>ejs\u662F\u6709\u4F5C\u7528\u57DF\u7684\uFF0C\u5728ejs\u5199\u7684\u4EE3\u7801\uFF0C\u5FC5\u987B\u4F7F\u7528ejs\u6A21\u677F</p><div class="language-ejs"><pre><code><span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%</span><span class="token language-javascript">
	<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">&#39;hny&#39;</span>    
</span><span class="token delimiter punctuation">%&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
	<span class="token keyword">var</span> curName <span class="token operator">=</span> <span class="token ejs language-ejs"><span class="token delimiter punctuation">&lt;%-</span><span class="token language-javascript"> name </span><span class="token delimiter punctuation">%&gt;</span></span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,49),p=[o];function c(i,l,u,r,k,d){return a(),n("div",null,p)}var j=s(t,[["render",c]]);export{h as __pageData,j as default};
