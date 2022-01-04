import{_ as n,c as s,o as a,d as p}from"./app.310fb107.js";const h='{"title":"node-04 express \u8DE8\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u7B2C\u4E09\u65B9\u5305 express","slug":"\u4E00\u3001\u7B2C\u4E09\u65B9\u5305-express"},{"level":2,"title":"\u4E8C\u3001url\u53C2\u6570","slug":"\u4E8C\u3001url\u53C2\u6570"},{"level":3,"title":"\u4F20\u53C2","slug":"\u4F20\u53C2"},{"level":3,"title":"\u63A5\u6536\u53C2\u6570\uFF1A","slug":"\u63A5\u6536\u53C2\u6570\uFF1A"},{"level":3,"title":"\u4F7F\u7528 URLSearchParams\u63A5\u53E3","slug":"\u4F7F\u7528-urlsearchparams\u63A5\u53E3"},{"level":2,"title":"\u4E09\u3001\u8DEF\u7531","slug":"\u4E09\u3001\u8DEF\u7531"},{"level":2,"title":"\u56DB\u3001\u8DEF\u7531\u6A21\u5757\u5316","slug":"\u56DB\u3001\u8DEF\u7531\u6A21\u5757\u5316"},{"level":2,"title":"\u4E94\u3001express\u8DE8\u57DF\u95EE\u9898","slug":"\u4E94\u3001express\u8DE8\u57DF\u95EE\u9898"},{"level":2,"title":"\u516D\u3001\u63A5\u6536\u524D\u7AEF\u4F20\u5165\u7684\u6570\u636Epost","slug":"\u516D\u3001\u63A5\u6536\u524D\u7AEF\u4F20\u5165\u7684\u6570\u636Epost"},{"level":2,"title":"\u4E03\u3001node\u4FEE\u6539\u81EA\u52A8\u91CD\u542F  \u70ED\u66F4\u65B0","slug":"\u4E03\u3001node\u4FEE\u6539\u81EA\u52A8\u91CD\u542F-\u70ED\u66F4\u65B0"},{"level":2,"title":"\u516B\u3001\u4F7F\u7528\u811A\u624B\u67B6\u5FEB\u901F\u751F\u6210express\u6846\u67B6","slug":"\u516B\u3001\u4F7F\u7528\u811A\u624B\u67B6\u5FEB\u901F\u751F\u6210express\u6846\u67B6"},{"level":2,"title":"\u4E5D\u3001javascript\u8FD0\u884C\u673A\u5236","slug":"\u4E5D\u3001javascript\u8FD0\u884C\u673A\u5236"}],"relativePath":"src/frontend/node/node-04 express \u8DE8\u57DF.md","lastUpdated":1633702273000}',t={},o=p(`<h1 id="node-04-express-\u8DE8\u57DF"><a class="header-anchor" href="#node-04-express-\u8DE8\u57DF" aria-hidden="true">#</a> node-04 express \u8DE8\u57DF</h1><h2 id="\u4E00\u3001\u7B2C\u4E09\u65B9\u5305-express"><a class="header-anchor" href="#\u4E00\u3001\u7B2C\u4E09\u65B9\u5305-express" aria-hidden="true">#</a> \u4E00\u3001\u7B2C\u4E09\u65B9\u5305 express</h2><p>\u4E0B\u8F7D\u5B98\u7F51\uFF1A <a href="http://www.expressjs.com.cn" target="_blank" rel="noopener noreferrer">http://www.expressjs.com.cn</a></p><p>\u5B89\u88C5\uFF1A<code>npm i express</code>\uFF1B</p><p>\u5B89\u88C5\u4E4B\u540E\uFF1Anpm init -y \u5EFA\u7ACBpackage.json\uFF1B</p><ol><li>\u521B\u5EFA\u4E00\u4E2A\u670D\u52A1\u5668\uFF1B</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>   <span class="token comment">// \u5F15\u5165</span>
<span class="token keyword">let</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u4F7F\u7528</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span>   <span class="token comment">// \u76D1\u542C</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>   <span class="token comment">//\u8BBE\u7F6E\u8DEF\u7531</span>
</code></pre></div><ol start="2"><li><p>\u8BF7\u6C42\u65B9\u5F0F\u53EF\u4EE5\u4F7F\u7528get,post,put,delete......\uFF1B</p><p>app.all\uFF1A\u4EE3\u8868\u5168\u90E8\u8DEF\u7531\uFF0C\u4E00\u822C\u5199\u5728\u9875\u9762\u6700\u5E95\u90E8\uFF0C\u7528\u6765\u54CD\u5E94404\u7684\uFF1B</p><p>\u5F53\u591A\u4E2A\u76F8\u540C\u7684\u8DEF\u5F84\u4E0D\u540C\u7684\u8BF7\u6C42\u65B9\u5F0F\u65F6\uFF0C\u627E\u5230\u4E00\u4E2A\u5219\u4E0D\u627E\u4E0B\u4E00\u4E2A\uFF1B</p></li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u76D1\u542C\u6210\u529F...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;\u54C8\u54C8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E8C\u3001url\u53C2\u6570"><a class="header-anchor" href="#\u4E8C\u3001url\u53C2\u6570" aria-hidden="true">#</a> \u4E8C\u3001url\u53C2\u6570</h2><h3 id="\u4F20\u53C2"><a class="header-anchor" href="#\u4F20\u53C2" aria-hidden="true">#</a> \u4F20\u53C2</h3><ul><li>get\u4F20\u53C2\u65F6\uFF0C\u901A\u8FC7?\u540E\u9762\u4F20\u53C2\uFF1B</li><li>post\u4F20\u53C2\u70B9\u51FBpostman\u8F6F\u4EF6\u7684params\u6DFB\u52A0\uFF1B</li></ul><h3 id="\u63A5\u6536\u53C2\u6570\uFF1A"><a class="header-anchor" href="#\u63A5\u6536\u53C2\u6570\uFF1A" aria-hidden="true">#</a> \u63A5\u6536\u53C2\u6570\uFF1A</h3><ul><li>\u67E5\u8BE2\u5B57\u7B26\u4E32\u63A5\u6536\u4F7F\u7528req.query\uFF1B</li><li>path\u8DEF\u5F84\u4F7F\u7528req.params\uFF1B</li></ul><p>path\u8DEF\u5F84\u662F\u4F2A\u9759\u6001\uFF0C\u5BF9\u7F51\u7EDC\u8718\u86DB\u6709\u4F18\u5316\uFF0C\u5199\u5730\u5740\u9700\u8981\u5E26\u52A8\u6001\u7684\uFF0C\u9700\u8981\u5192\u53F7\u5199:name\uFF1B</p><p>:nid/:page\uFF0C\u63A5\u6536\u4E4B\u540E\u662F{nid:123,page:11}\uFF1B</p><h3 id="\u4F7F\u7528-urlsearchparams\u63A5\u53E3"><a class="header-anchor" href="#\u4F7F\u7528-urlsearchparams\u63A5\u53E3" aria-hidden="true">#</a> \u4F7F\u7528 URLSearchParams\u63A5\u53E3</h3><div class="language-js"><pre><code><span class="token keyword">var</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>\u83B7\u53D6\u5355\u4E2A\u5B57\u6BB5\uFF1A<code>query.get(key)</code>; \u62EC\u53F7\u83B7\u53D6\u5177\u4F53\u7684\u540D\uFF1B</li><li>\u67E5\u8BE2\uFF1A<code>query.has(key)</code>\uFF1B\u5224\u65AD\u662F\u5426\u5B58\u5728\uFF1B</li><li>\u6DFB\u52A0\u5B57\u6BB5\uFF1A<code>query.append(key,value)</code>\uFF1B</li><li>\u5220\u9664\uFF1A<code>query.delete(key)</code>\uFF1B</li><li>\u4FEE\u6539\uFF1A<code>query.set(key,value)</code>\uFF1B</li><li>\u8F6C\u56DE\u53BB\uFF1A<code>query.toString()</code>\uFF1B\u8F6C\u56DE\u8DEF\u7531\uFF1B</li></ul><p><code>urlsearchParams</code>\u914D\u5408<code>Object.fromEntries()</code>\uFF1B\u5C06\u5047\u5BF9\u8C61\u8F6C\u6362\u4E3A\u771F\u5BF9\u8C61\uFF1B</p><div class="language-js"><pre><code>Object<span class="token punctuation">.</span><span class="token function">fromEntries</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token string">&#39;foo=bar&amp;baz=qux&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// { foo: &quot;bar&quot;, baz: &quot;qux&quot; }</span>
</code></pre></div><h2 id="\u4E09\u3001\u8DEF\u7531"><a class="header-anchor" href="#\u4E09\u3001\u8DEF\u7531" aria-hidden="true">#</a> \u4E09\u3001\u8DEF\u7531</h2><ol><li><p>\u8BBE\u8BA1\u8DEF\u7531</p><ul><li>\u8BF7\u6C42\u65B9\u5F0F\uFF1Aget\u3001post\u3001put\u3001delete.....</li><li>\u6839\u636Epath\uFF08\u8BF7\u6C42\u5730\u5740\uFF09\u4E0D\u540C\uFF0C\u8FD4\u56DE\u4E0D\u540C\u7684\u54CD\u5E94\uFF1B</li></ul></li><li><p>url\u5730\u5740\u8FD8\u53EF\u4EE5\u5199\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C</p></li><li><p><code>res.send()</code>\uFF1A\u62EC\u53F7\u586B\u5199\u9700\u8981\u663E\u793A\u7684\u5185\u5BB9\uFF0C\u80FD\u6839\u636E\u8FD4\u56DE\u7684\u5185\u5BB9\u81EA\u52A8\u8BC6\u522B\u8FD4\u56DE\u7684\u7C7B\u578B\uFF08\u4E0D\u9700\u8981\u8BBE\u7F6E\u5934\u4FE1\u606F\u5C31\u53EF\u4EE5\u663E\u793A\uFF09\uFF1B</p><p>\u91CC\u9762\u4E5F\u53EF\u4EE5\u5B58\u653Escript\u6807\u7B7E\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5411\u524D\u53F0\u4F20\u8F93alert\u548Clocation\u8DF3\u8F6C\u9875\u9762\uFF1B</p></li><li><p><code>res.sendFile(path)</code>\uFF1B\u5F00\u653E\u9759\u6001\u9875\u9762\uFF1B\u9700\u8981\u586B\u5199\u7EDD\u5BF9\u8DEF\u5F84</p><div class="language-js"><pre><code>res<span class="token punctuation">.</span><span class="token function">sendFile</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/index.html</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u6240\u6709\u8DEF\u7531\u90FD\u662F\u4ECE&#39;/&#39;\u6839\u5F00\u59CB\u7684\uFF1B</p></li><li><p><code>app.method(path,callback)</code>\uFF1B\u83B7\u53D6\u54CD\u5E94\u65B9\u5F0F\uFF1B</p></li></ol><h2 id="\u56DB\u3001\u8DEF\u7531\u6A21\u5757\u5316"><a class="header-anchor" href="#\u56DB\u3001\u8DEF\u7531\u6A21\u5757\u5316" aria-hidden="true">#</a> \u56DB\u3001\u8DEF\u7531\u6A21\u5757\u5316</h2><p>\u4F5C\u7528\uFF1A\u5C06\u8DEF\u7531\u5730\u5740\u7684\u90E8\u5206\u5355\u72EC\u62E7\u51FA\u6765\uFF1B</p><ol><li><p>\u521B\u5EFA/routers/users.js</p><div class="language-js"><pre><code><span class="token comment">//* /router/users.js</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span> 
<span class="token keyword">const</span> routers <span class="token operator">=</span> express<span class="token punctuation">.</span><span class="token function">Router</span><span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment">// \u521B\u5EFA\u6A21\u5757\u5316</span>
routers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> router
</code></pre></div></li><li><p>\u4FEE\u6539app.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./router/users.js&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/api/users&#39;</span><span class="token punctuation">,</span> routes<span class="token punctuation">)</span>
</code></pre></div></li></ol><p>\u4E4B\u540Eusers.js\u6587\u4EF6\u5939\u4E0B\u9762\u7684\u6240\u6709api\u8BBF\u95EE\u90FD\u9700\u8981\u6DFB\u52A0/api/users\u7684\u524D\u7F00\u4E86\uFF1B</p><h2 id="\u4E94\u3001express\u8DE8\u57DF\u95EE\u9898"><a class="header-anchor" href="#\u4E94\u3001express\u8DE8\u57DF\u95EE\u9898" aria-hidden="true">#</a> \u4E94\u3001express\u8DE8\u57DF\u95EE\u9898</h2><ol><li>\u5C06\u4EE5\u4E0B\u5185\u5BB9\u52A0\u5230\u8DEF\u7531\u4E0B\u9762\u7684\u5934\u4FE1\u606F\uFF0C\u8BBE\u7F6E\u4E4B\u540E\u4E0D\u9700\u8981\u8DE8\u57DF\u4E86\uFF1Bcors\u89E3\u51B3\u7684\uFF1B</li></ol><div class="language-js"><pre><code><span class="token comment">// \u5141\u8BB8\u54EA\u4E2A\u6E90\u53EF\u4EE5\u8BBF\u95EE</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5141\u8BB8\u643A\u5E26\u90A3\u4E2A\u5934\u8BBF\u95EE</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5141\u8BB8\u54EA\u4E2A\u8BF7\u6C42\u65B9\u6CD5\u8BBF\u95EE</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT, POST, GET, DELETE,OPTIONS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5141\u8BB8\u643A\u5E26cookie  \u5F53origin\u8BBE\u7F6E*\u4E4B\u540E\uFF0C\u4E0D\u5141\u8BB8\u8BBE\u7F6E\u8BE5\u9009\u9879</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Credentials&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token comment">// \u9884\u68C0\u7684\u5B58\u6D3B\u65F6\u95F4</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Max-Age&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>
<span class="token comment">// \u5141\u8BB8\u524D\u7AEF\u83B7\u53D6\u54EA\u4E2A\u5934\u4FE1\u606F</span>
res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Expose-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li>\u4F7F\u7528\u4E2D\u95F4\u4EF6\u7ED9\u6240\u6709\u8BF7\u6C42\u6DFB\u52A0\u8BF7\u6C42\u5934</li></ol><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res<span class="token punctuation">,</span>next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u53EF\u4EE5\u76F4\u63A5\u62FForigin\uFF1Areq.headers.origin</span>
    <span class="token comment">// \u4E5F\u53EF\u4EE5\u76F4\u63A5\u5224\u65ADorigin\u662F\u5426\u5728\u767D\u540D\u5355\uFF0C\u624D\u8FDB\u884C\u5F80\u4E0B\u9762\u8D70</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">header</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT, POST, GET, DELETE,OPTIONS&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li>\u67E5\u770Bajax\u5B8C\u6574\u7684\u9519\u8BEF\u4FE1\u606F</li></ol><div class="language-js"><pre><code><span class="token function-variable function">error</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">XMLHttpRequest<span class="token punctuation">,</span> textStatus<span class="token punctuation">,</span> errorThrown</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>XMLHttpRequest<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>XMLHttpRequest<span class="token punctuation">.</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>XMLHttpRequest<span class="token punctuation">.</span>readyState<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>textStatus<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// parser error;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>put\u3001post\u7B49\u7B49\u8BF7\u6C42\u4F1A\u53D1\u9001options\u8BF7\u6C42\u8FDB\u884C\u8DE8\u57DF\u68C0\u6D4B\uFF0C\u5F53\u5141\u8BB8\u8DE8\u57DF\u65F6\u624D\u4F1A\u53D1\u9001\u8BF7\u6C42\uFF0C\u6B64\u65F6\u53EF\u4EE5\u5728node\u4E2D\u95F4\u4EF6\u4E2D\u8FDB\u884C\u8BBE\u7F6E\uFF1A</p><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Headers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Methods&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;PUT, POST, GET, DELETE,OPTIONS&#39;</span><span class="token punctuation">)</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Max-Age&#39;</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token comment">// 6\u79D2\u4E0D\u91CD\u65B0\u53D1\u9001options</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>method <span class="token operator">===</span> <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// OPTIONS\u8BF7\u6C42\u4E0D\u505A\u4EFB\u4F55\u5904\u7406</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u516D\u3001\u63A5\u6536\u524D\u7AEF\u4F20\u5165\u7684\u6570\u636Epost"><a class="header-anchor" href="#\u516D\u3001\u63A5\u6536\u524D\u7AEF\u4F20\u5165\u7684\u6570\u636Epost" aria-hidden="true">#</a> \u516D\u3001\u63A5\u6536\u524D\u7AEF\u4F20\u5165\u7684\u6570\u636Epost</h2><ol><li><p>\u4E0B\u8F7D\u7B2C\u4E09\u65B9npm\u5305(body-parser)\uFF1B</p></li><li><p>\u5F15\u5165\u6A21\u5757</p></li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> bodyParser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;body-parser&#39;</span><span class="token punctuation">)</span>
</code></pre></div><ol start="3"><li>\u52A0\u8F7Djson\u4E2D\u95F4\u952E</li></ol><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u52A0\u8F7D\u89E3\u6790urlencoded\u8BF7\u6C42\u4F53\u7684\u4E2D\u95F4\u4EF6\u3002</li></ol><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>bodyParser<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span>extended<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ol start="5"><li>req.body\uFF0C\u663E\u793A\u4F20\u5165\u7684data\u6570\u636E\uFF1B</li></ol><p>\u4F7F\u7528postman\u6D4B\u8BD5\u63A5\u53E3\uFF1A\u70B9\u51FBparams---body----x-www-form-urlencoded\uFF1B</p><p>\u4EE5\u4E0A\u65B9\u6CD5\u5DF2\u5E9F\u5F03\uFF0C\u76F4\u63A5\u4F7F\u7528express\u5373\u53EF</p><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">urlencoded</span><span class="token punctuation">(</span><span class="token punctuation">{</span>extended<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E03\u3001node\u4FEE\u6539\u81EA\u52A8\u91CD\u542F-\u70ED\u66F4\u65B0"><a class="header-anchor" href="#\u4E03\u3001node\u4FEE\u6539\u81EA\u52A8\u91CD\u542F-\u70ED\u66F4\u65B0" aria-hidden="true">#</a> \u4E03\u3001node\u4FEE\u6539\u81EA\u52A8\u91CD\u542F \u70ED\u66F4\u65B0</h2><ol><li>\u5168\u5C40\u5B89\u88C5\uFF1A<code>npm i -g nodemon</code></li><li>\u5728\u9879\u76EE\u6839\u76EE\u5F55\uFF08\u548C\u670D\u52A1\u5165\u53E3\u6587\u4EF6\u540C\u7EA7\uFF09\u521B\u5EFA\u4E00\u4E2A\u6587\u4EF6<code>nodemon.json</code>\u5E76\u5199\u5165\uFF08\u4E3A\u4E86\u914D\u7F6E\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5219\u4E0D\u7528\u914D\u7F6E\uFF09\uFF0C\u4E4B\u540E\u542F\u52A8\u9879\u76EE\u9700\u8981<code>nodemon index.js</code>\u542F\u52A8</li></ol><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;restartable&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ignore&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;.git&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;.svn&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;node_modules/**/node_modules&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;verbose&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;execMap&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node --harmony&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;watch&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>

    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;NODE_ENV&quot;</span><span class="token operator">:</span> <span class="token string">&quot;development&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ext&quot;</span><span class="token operator">:</span> <span class="token string">&quot;js json&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u4FEE\u6539\u5165\u53E3\u6587\u4EF6</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> debug <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;debug&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string">&#39;my-application&#39;</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">debug</span><span class="token punctuation">(</span><span class="token string">&#39;\u670D\u52A1\u5668\u8FD0\u884C\u572880\u7AEF\u53E3\u4E0A&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="4"><li>\u4FEE\u6539package.json\u7684script\u8FD0\u884C\u811A\u672C</li></ol><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;nodemon ./index.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5npm start\u542F\u52A8\u670D\u52A1\u4E86</p><p>nodemon\u652F\u6301\u6307\u5B9A\u76D1\u542C\u6587\u4EF6</p><div class="language-js"><pre><code>nodemon <span class="token operator">--</span>watch <span class="token string">&#39;src/**/*.ts&#39;</span> <span class="token operator">--</span>ignore <span class="token string">&#39;src/**/*.spec.ts&#39;</span> <span class="token operator">--</span>exec <span class="token string">&#39;ts-node&#39;</span> src<span class="token operator">/</span>index<span class="token punctuation">.</span>ts
</code></pre></div><h2 id="\u516B\u3001\u4F7F\u7528\u811A\u624B\u67B6\u5FEB\u901F\u751F\u6210express\u6846\u67B6"><a class="header-anchor" href="#\u516B\u3001\u4F7F\u7528\u811A\u624B\u67B6\u5FEB\u901F\u751F\u6210express\u6846\u67B6" aria-hidden="true">#</a> \u516B\u3001\u4F7F\u7528\u811A\u624B\u67B6\u5FEB\u901F\u751F\u6210express\u6846\u67B6</h2><blockquote><p>\u5B98\u7F51\uFF1A<a href="https://github.com/expressjs/generator" target="_blank" rel="noopener noreferrer">https://github.com/expressjs/generator</a></p></blockquote><ol><li><p>\u5B89\u88C5\uFF1A<code>npm install express-generator -g</code></p></li><li><p>\u751F\u6210jade\u9879\u76EE\uFF1A<code>express projectName</code></p><p>\u9ED8\u8BA4\u662F<code>jade</code>\u6A21\u677F</p><p>\u751F\u6210\u9879\u76EE\u4E4B\u540E\u9700\u8981\u8FDB\u5165\u8FD0\u884C<code>npm i</code>\u5B89\u88C5\u4F9D\u8D56;</p><p>\u542F\u52A8\u9879\u76EE\u9ED8\u8BA4\u7AEF\u53E3\u662F3000\uFF1B</p></li><li><p>\u4F7F\u7528ejs\u6A21\u677F\u9879\u76EE\uFF1A<code>express projectName -e</code></p><p>-e\u8868\u793A\u4F7F\u7528ejs\u6A21\u677F;</p></li></ol><h2 id="\u4E5D\u3001javascript\u8FD0\u884C\u673A\u5236"><a class="header-anchor" href="#\u4E5D\u3001javascript\u8FD0\u884C\u673A\u5236" aria-hidden="true">#</a> \u4E5D\u3001javascript\u8FD0\u884C\u673A\u5236</h2><p>javascript\u662F\u5355\u7EBF\u7A0B\u7684</p><p>\u4E3B\u8981\u7528\u9014\u662F\u4E0E\u7528\u6237\u4EA4\u4E92\uFF0C\u64CD\u4F5Cdom\uFF0C\u56E0\u6B64\u53EA\u80FD\u662F\u5355\u7EBF\u7A0B\uFF0C</p><p>\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u90FD\u4F1A\u653E\u5230\u6808\u4E2D\uFF0C\u56DE\u8C03\u51FD\u6570\u90FD\u4F1A\u653E\u5728\u4EFB\u52A1\u5BF9\u5217\uFF0C\u53EA\u6709\u6267\u884C\u6808\u5168\u90E8\u6E05\u7A7A\u624D\u4F1A\u6267\u884C\u4EFB\u52A1\u961F\u5217\uFF0C\u56DE\u8C03\u51FD\u6570\u6BD4\u5982\u5B9A\u65F6\u5668\u3002</p><p>setTimout\u7684\u6700\u5C0F\u65F6\u95F4\u662F4ms\uFF0C\u4F4E\u4E8E4\u6BEB\u79D2\u81EA\u52A8\u8BBE\u4E3A4ms\u3002</p><p>nodejs\u7684</p><p>process.nextTick(\u4E0D\u63A8\u8350\u4F7F\u7528)\u548CsetImmediate\u7684\u503C\u662F\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\u3002</p><p>process.nextTick \u65B9\u6CD5\u53EF\u4EE5\u5728\u5F53\u524D&quot;\u6267\u884C\u6808&quot;\u7684\u5C3E\u90E8\u4E4B\u524D\u6267\u884C\u3002\u6BD4settimeout\u5148\u6267\u884C\uFF0C</p><p>setImmediate\u65B9\u6CD5\u5219\u662F\u5728\u5F53\u524D&quot;\u4EFB\u52A1\u961F\u5217&quot;\u7684\u5C3E\u90E8\u6DFB\u52A0\u4E8B\u4EF6\uFF0C\u5B83\u6307\u5B9A\u7684\u4EFB\u52A1\u603B\u662F\u6CE8\u518C\u5230\u4E0B\u4E00\u6B21Event Loop\u65F6\u6267\u884C\uFF0C\u540C\u4E00\u8F6E\u7684event\u5148\u6267\u884C\uFF0C\u5982\u540CsetTimeout(func, 0)</p><p>\u591A\u4E2Aprocess.nextTick\u8BED\u53E5\u603B\u662F\u5728\u5F53\u524D&quot;\u6267\u884C\u6808&quot;\u4E00\u6B21\u6267\u884C\u5B8C\uFF0C\u591A\u4E2AsetImmediate\u53EF\u80FD\u5219\u9700\u8981\u591A\u6B21loop\u624D\u80FD\u6267\u884C\u5B8C\u3002</p><div class="language-js"><pre><code>process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  process<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u5C06\u4F1A\u4E00\u76F4\u5FAA\u73AF\u9012\u5F52\uFF0C\u4E0D\u4F1A\u53BB\u6267\u884C\u5176\u4ED6\u7684\u4EE3\u7801</p>`,72),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var m=n(t,[["render",c]]);export{h as __pageData,m as default};
