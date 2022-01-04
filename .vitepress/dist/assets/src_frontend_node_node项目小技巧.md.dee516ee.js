import{_ as n,c as s,o as a,d as t}from"./app.310fb107.js";const g='{"title":"node\u9879\u76EE\u5C0F\u6280\u5DE7","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5176\u4ED6\u5C0F\u65B9\u6CD5","slug":"\u5176\u4ED6\u5C0F\u65B9\u6CD5"},{"level":2,"title":"\u524D\u7AEF\u6355\u83B7\u8BF7\u6C42\u6570\u636E404\u95EE\u9898","slug":"\u524D\u7AEF\u6355\u83B7\u8BF7\u6C42\u6570\u636E404\u95EE\u9898"},{"level":2,"title":"\u6570\u636E\u7EDF\u4E00\u8FD4\u56DE\u72B6\u6001","slug":"\u6570\u636E\u7EDF\u4E00\u8FD4\u56DE\u72B6\u6001"}],"relativePath":"src/frontend/node/node\u9879\u76EE\u5C0F\u6280\u5DE7.md","lastUpdated":1615699077000}',p={},o=t(`<h1 id="node\u9879\u76EE\u5C0F\u6280\u5DE7"><a class="header-anchor" href="#node\u9879\u76EE\u5C0F\u6280\u5DE7" aria-hidden="true">#</a> node\u9879\u76EE\u5C0F\u6280\u5DE7</h1><h2 id="\u5176\u4ED6\u5C0F\u65B9\u6CD5"><a class="header-anchor" href="#\u5176\u4ED6\u5C0F\u65B9\u6CD5" aria-hidden="true">#</a> \u5176\u4ED6\u5C0F\u65B9\u6CD5</h2><ol><li>\u5411\u540E\u53F0\u4F20\u53C2\uFF0C\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6309\u94AE\uFF0C\u52A0\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u91CC\u9762\u8C03\u7528ajax\uFF1B</li><li>\u53EF\u4EE5\u4F7F\u7528fileter\u8C03\u7528\u91CC\u9762\u7684\u6570\u636E\uFF0C\u8FC7\u6EE4\u6389\u5176\u4ED6\u7684\uFF1B</li><li>json\u6587\u4EF6\u5199\u5165\u9700\u8981\u901A\u8FC7json.stringify()\u4E4B\u540E\u5199\u5165\uFF1B</li><li>\u4E24\u4E2A\u76F8\u540C\u7684\u8DEF\u7531\uFF08\u4E00\u4E2A\u8BBF\u95EE\u9875\u9762\uFF0C\u4E00\u4E2A\u8C03\u63A5\u53E3\uFF09\uFF0C\u53EF\u4EE5\u518D\u8C03\u63A5\u53E3\u90A3\u4E2A\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\uFF0C\u5224\u65AD\u662F\u5426\u662F\u4F20\u5165\u53C2\u6570\u7684\u8FD9\u4E2A\u8DEF\u7531\uFF0C\u5B9E\u73B0\u4E24\u4E2A\u9875\u9762\uFF1B</li><li>\u540E\u7AEF\u601D\u60F3\uFF0C\u9700\u8981\u5148\u663E\u793A\uFF0C\u540E\u4FEE\u6539\uFF1B \u663E\u793A\uFF1A</li></ol><p>\uFF081\uFF09\u5728\u70B9\u51FB\u7B2C\u4E00\u4E2A\u9875\u9762\u65F6\uFF0C\u5C06id\u901A\u8FC7\u67E5\u8BE2\u5B57\u7B26\u4E32\u7684\u65B9\u5F0F\u4F20\u5165\u5230\u540E\u53F0\u53BB\uFF08\u540E\u53F0\u7684\u63A5\u6536\u5730\u5740\u9700\u8981\u5199path\u8DEF\u5F84\u6765\u63A5\u6536\uFF09\uFF1B</p><p>\uFF082\uFF09\u5148\u5C06\u9875\u9762\u7528.toString()\u8BFB\u53D6\u51FA\u6765\uFF0C\u4E4B\u540E\u518D\u7528replace\u66FF\u6362\u6389value\u503C\uFF1B\u6216\u4F7F\u7528ejs\u6A21\u677F\uFF1B</p><p>\uFF083\uFF09res.send\u8F93\u5165\u5230\u66FF\u6362\u6389\u540E\u7684html\u5185\u5BB9\uFF1B\u6A21\u677F\u4F7F\u7528res.render()\uFF1B</p><ol start="6"><li><p>\u5BF9\u4E8Einput\u9875\u9762\u4E0D\u9700\u8981\u8BA9\u7528\u6237\u770B\u89C1\u6216\u8005\u586B\u5199\u7684\u53C2\u6570\uFF0C\u4F7F\u7528type=&#39;hidden&#39;\uFF0C\u5199\u5165\u5230value\u91CC\u9762\uFF0C\u8FD9\u6837\u63D0\u4EA4\u5230\u540E\u53F0\u4E5F\u80FD\u770B\u89C1\uFF1B</p></li><li><p>\u524D\u7AEF\u8C03\u7528ajax\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u91CC\u9762\u586B\u5199flag\u7528\u4E8E\u5224\u65AD\uFF1B</p></li><li><p>\u5224\u65ADsession-id\u662F\u5426\u5B58\u5728\uFF0C\u53EF\u4EE5\u8BA9sessionid\u4E3Aundefined\u7684\u65F6\u5019\u7B49\u4E8E\u7A7A\uFF0C\u5C31\u597D\u5224\u65AD\u4E86\uFF0C\u5C31\u53EF\u4EE5\u7ED9sessionid\u7F6E\u7A7A\u4E86\uFF1B</p></li><li><p>http\u662F\u65E0\u72B6\u6001\u7684\uFF08\u70B9\u51FB\u8DF3\u8F6C\u6CA1\u6709\u8BB0\u5FC6\u80FD\u529B\uFF09\uFF1B</p></li><li><p>\u51FA\u9519\u65F6\uFF0C\u53EF\u4EE5\u67E5\u770B\u9875\u9762\u8FD4\u56DE\u7684\u54CD\u5E94\u662F\u4EC0\u4E48\uFF0Cf12--Network--\u70B9\u51FBclear\u6309\u94AE(\u4E00\u4E2A\u659C\u6760)\uFF1B\u4E4B\u540E\u70B9\u51FB\u51FA\u9519\u7684\u5730\u65B9\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728network\u67E5\u770B\u8FD4\u56DE\u7684\u662F\u4EC0\u4E48\u4E86\uFF1B</p></li><li><p>\u70B9\u51FBajax\u7ED9\u540E\u7AEF\u7ED9\u524D\u7AEF\u4F20\u5165js\u4E8B\u4EF6</p></li></ol><div class="language-js"><pre><code><span class="token comment">//\u524D\u7AEF  id\u4F20\u5165\u5230\u540E\u53F0\u4E86;\u4E0E\u540E\u7AEF\u4EA4\u4E92</span>
    <span class="token comment">//\u56E0\u4E3A\u540E\u7AEF\u4F20\u8FC7\u6765\u7684\u53C2\u6570\u662F\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u9700\u8981eval\u4E00\u4E0B;</span>
$<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/user/delete/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span><span class="token parameter">data</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token function">eval</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u540E\u7AEF \u5C06\u4E8B\u4EF6\u5F04\u5230\u524D\u7AEF\u53BB\uFF0C\u524D\u7AEF\u5728\u6210\u529F\u65F6\u8F93\u51FA;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">alert(&#39;\u5220\u9664\u5931\u8D25</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>err<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&#39;)</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">alert(&#39;\u5220\u9664\u6210\u529F&#39;);location.reload();</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre></div><ol start="12"><li><p>\u5411\u524D\u7AEF\u6E32\u67D3js</p><div class="language-js"><pre><code>res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;script&gt;alert(&#39;</span><span class="token string">&#39;);location.href=&quot;&quot;;&lt;/script&gt;&#39;</span><span class="token punctuation">)</span>
</code></pre></div></li></ol><h2 id="\u524D\u7AEF\u6355\u83B7\u8BF7\u6C42\u6570\u636E404\u95EE\u9898"><a class="header-anchor" href="#\u524D\u7AEF\u6355\u83B7\u8BF7\u6C42\u6570\u636E404\u95EE\u9898" aria-hidden="true">#</a> \u524D\u7AEF\u6355\u83B7\u8BF7\u6C42\u6570\u636E404\u95EE\u9898</h2><div class="language-js"><pre><code><span class="token function-variable function">isRunUrl</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> _doc <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementsByTagName</span><span class="token punctuation">(</span><span class="token string">&#39;head&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> dom <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;type&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;text/javascript&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dom<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;src&#39;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  _doc<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token comment">/*@cc_on!@*/</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//if not IE</span>
    dom<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    dom<span class="token punctuation">.</span><span class="token function-variable function">onreadystatechange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>dom<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">&#39;loaded&#39;</span> <span class="token operator">||</span> dom<span class="token punctuation">.</span>readyState <span class="token operator">===</span> <span class="token string">&#39;complete&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        document<span class="token punctuation">.</span>head<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>dom<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  dom<span class="token punctuation">.</span>onerror <span class="token operator">=</span> reject<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">isRunUrl</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D4B\u8BD5\u5730\u5740&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5904\u7406resolve\u7684\u4EE3\u7801</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Promise\u88AB\u7F6E\u4E3Aresolve&quot;</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u5904\u7406reject\u7684\u4EE3\u7801</span>
    console <span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u7A0B\u5E8F\u88AB\u7F6E\u4E3A\u4E86reject&quot;</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u6570\u636E\u7EDF\u4E00\u8FD4\u56DE\u72B6\u6001"><a class="header-anchor" href="#\u6570\u636E\u7EDF\u4E00\u8FD4\u56DE\u72B6\u6001" aria-hidden="true">#</a> \u6570\u636E\u7EDF\u4E00\u8FD4\u56DE\u72B6\u6001</h2><p>\u521B\u5EFA\u4E00\u4E2Ajs\u6587\u4EF6\uFF0C\u4E13\u95E8\u5BFC\u51FA\uFF0C\u63D0\u4F9B\u8FD4\u56DE\u63A5\u53E3\u4F7F\u7528</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  success<span class="token operator">:</span> <span class="token punctuation">(</span>content<span class="token punctuation">,</span> message <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      status<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
      success<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      content<span class="token operator">:</span> content<span class="token punctuation">,</span>
      message<span class="token operator">:</span> message
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fail<span class="token operator">:</span> <span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      status<span class="token operator">:</span> <span class="token string">&quot;fail&quot;</span><span class="token punctuation">,</span>
      fail<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      type<span class="token operator">:</span> type<span class="token punctuation">,</span>
      message<span class="token operator">:</span> message
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,14),e=[o];function c(u,l,i,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
