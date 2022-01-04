import{_ as n,c as s,o as a,d as t}from"./app.310fb107.js";const h='{"title":"AST\u62BD\u8C61\u8BED\u6CD5\u6811","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5E38\u7528\u65B9\u6CD5","slug":"\u5E38\u7528\u65B9\u6CD5"},{"level":2,"title":"\u89E3\u6790\u4EE3\u7801","slug":"\u89E3\u6790\u4EE3\u7801"},{"level":2,"title":"recast.types.builders \u5236\u4F5C\u6A21\u5177","slug":"recast-types-builders-\u5236\u4F5C\u6A21\u5177"},{"level":2,"title":"\u547D\u4EE4\u884C\u6587\u4EF6\u8BFB\u53D6 recast.run","slug":"\u547D\u4EE4\u884C\u6587\u4EF6\u8BFB\u53D6-recast-run"},{"level":2,"title":"\u8282\u70B9\u904D\u5386 recast.visit","slug":"\u8282\u70B9\u904D\u5386-recast-visit"},{"level":2,"title":"\u5224\u65ADAST\u5BF9\u8C61\u7C7B\u578B","slug":"\u5224\u65ADast\u5BF9\u8C61\u7C7B\u578B"},{"level":2,"title":"\u5B9E\u6218\u64CD\u4F5C\u66FF\u6362","slug":"\u5B9E\u6218\u64CD\u4F5C\u66FF\u6362"},{"level":2,"title":"\u7C7B\u578B\u793A\u4F8B","slug":"\u7C7B\u578B\u793A\u4F8B"},{"level":2,"title":"AST\u6587\u7AE0\u63A8\u8350","slug":"ast\u6587\u7AE0\u63A8\u8350"}],"relativePath":"src/frontend/other-note/AST\u62BD\u8C61\u8BED\u6CD5\u6811.md","lastUpdated":1621950386000}',p={},o=t(`<h1 id="ast\u62BD\u8C61\u8BED\u6CD5\u6811"><a class="header-anchor" href="#ast\u62BD\u8C61\u8BED\u6CD5\u6811" aria-hidden="true">#</a> AST\u62BD\u8C61\u8BED\u6CD5\u6811</h1><p>\u5B98\u65B9\u6587\u6863\u67E5\u770B\u94FE\u63A5\uFF1A<a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API" target="_blank" rel="noopener noreferrer">AST\u5BF9\u8C61\u6587\u6863</a> \u6587\u6863\u53C2\u8003\u94FE\u63A5\uFF1A<a href="https://segmentfault.com/a/1190000016231512" target="_blank" rel="noopener noreferrer">AST\u62BD\u8C61\u8BED\u6CD5\u6811</a> \u63D2\u4EF6\uFF1A<code>npm i recast</code>;</p><h2 id="\u5E38\u7528\u65B9\u6CD5"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h2><ul><li>\u89E3\u6790\u4EE3\u7801\uFF1A<code>recast.parse(code)</code></li><li>\u8F93\u51FA\u4EE3\u7801\uFF1A<code>recast.print(ast).code</code></li><li>\u8F93\u51FA\u7F8E\u5316\u4EE3\u7801\uFF1A<code>recast.prettyPrint(ast, { tabWidth: 2 }).code</code></li><li>\u8BFB\u53D6\u6587\u4EF6\uFF1A<code>recast.run(function(ast, printSource) {})</code></li><li>\u8282\u70B9\u904D\u5386\uFF1A<code>recast.visit(ast, {visitExpressionStatement:function(path){}})</code></li></ul><h2 id="\u89E3\u6790\u4EE3\u7801"><a class="header-anchor" href="#\u89E3\u6790\u4EE3\u7801" aria-hidden="true">#</a> \u89E3\u6790\u4EE3\u7801</h2><div class="language-js"><pre><code><span class="token keyword">const</span> code <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
function add(a, b) {
  return a + b;
}
</span><span class="token template-punctuation string">\`</span></span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> recast<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span>
</code></pre></div><h2 id="recast-types-builders-\u5236\u4F5C\u6A21\u5177"><a class="header-anchor" href="#recast-types-builders-\u5236\u4F5C\u6A21\u5177" aria-hidden="true">#</a> recast.types.builders \u5236\u4F5C\u6A21\u5177</h2><p>\u7528\u6765\u4FEE\u6539\u4EE3\u7801\uFF0C\u91CC\u9762\u5305\u542B\u6240\u6709\u7684AST\u5DE5\u5177\uFF0CAST\u53EF\u4EE5\u53BB<a href="https://developer.mozilla.org/zh-CN/docs/Mozilla/Projects/SpiderMonkey/Parser_API" target="_blank" rel="noopener noreferrer">AST\u5BF9\u8C61\u6587\u6863</a>\u67E5\u770B</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>
  variableDeclaration<span class="token punctuation">,</span>
  variableDeclarator<span class="token punctuation">,</span>
  functionExpression 
<span class="token punctuation">}</span> <span class="token operator">=</span> recast<span class="token punctuation">.</span>types<span class="token punctuation">.</span>builders<span class="token punctuation">;</span>
ast<span class="token punctuation">.</span>program<span class="token punctuation">.</span>body<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">variableDeclaration</span><span class="token punctuation">(</span><span class="token string">&#39;const&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>
  <span class="token function">variableDeclarator</span><span class="token punctuation">(</span>add<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token function">functionExpression</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> add<span class="token punctuation">.</span>params<span class="token punctuation">,</span> add<span class="token punctuation">.</span>body<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> output <span class="token operator">=</span> recast<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">.</span>code<span class="token punctuation">;</span>
<span class="token comment">// \u8F93\u51FA\u7F8E\u5316\u683C\u5F0F\u7684\u4EE3\u7801</span>
<span class="token comment">// const output = recast.prettyPrint(ast, { tabWidth: 2 }).code;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u547D\u4EE4\u884C\u6587\u4EF6\u8BFB\u53D6-recast-run"><a class="header-anchor" href="#\u547D\u4EE4\u884C\u6587\u4EF6\u8BFB\u53D6-recast-run" aria-hidden="true">#</a> \u547D\u4EE4\u884C\u6587\u4EF6\u8BFB\u53D6 recast.run</h2><p>\u521B\u5EFAread.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> recast <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;recast&#39;</span><span class="token punctuation">)</span>
recast<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> printSource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">printSource</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u547D\u4EE4\u884C\u8F93\u5165</p><div class="language-js"><pre><code>node read demo<span class="token punctuation">.</span>js
</code></pre></div><h2 id="\u8282\u70B9\u904D\u5386-recast-visit"><a class="header-anchor" href="#\u8282\u70B9\u904D\u5386-recast-visit" aria-hidden="true">#</a> \u8282\u70B9\u904D\u5386 recast.visit</h2><div class="language-js"><pre><code>recast<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> printSource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  recast<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">visitExpressionStatement</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> path<span class="token punctuation">.</span>node<span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A</p><ul><li>\u60F3\u904D\u5386\u4EC0\u4E48\u5C31\u5728\u524D\u9762\u52A0<code>visit</code></li><li>\u6BCF\u4E2A\u8282\u70B9\u904D\u5386\u5FC5\u987B<code>return false</code>\uFF0C\u6216\u8005 <code>this.traverse(path)</code>\uFF0C\u5426\u5219\u62A5\u9519\uFF1B</li><li>\u904D\u5386\u4E2D\u60F3\u8F93\u51FAast\u5BF9\u8C61\uFF0C\u5C31\u4F7F\u7528<code>console.log(node)</code>\uFF0C\u60F3\u8F93\u51FAast\u5BF9\u8C61\u5BF9\u5E94\u7684\u6E90\u7801\uFF0C\u53EF\u4EE5<code>printSource(node)</code></li><li><code>#!/usr/bin/env node</code> \u5728\u6240\u6709\u4F7F\u7528<code>recast.run()</code>\u7684\u6587\u4EF6\u9876\u90E8\u90FD\u9700\u8981\u52A0\u5165\u8FD9\u4E00\u884C</li></ul><h2 id="\u5224\u65ADast\u5BF9\u8C61\u7C7B\u578B"><a class="header-anchor" href="#\u5224\u65ADast\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u5224\u65ADAST\u5BF9\u8C61\u7C7B\u578B</h2><p>TNT\uFF0Crecast.types.namedTypes</p><ul><li><code>TNT.Node.assert(node)</code> \u5224\u65ADnode\u4E0D\u4E3ANode\u65F6\uFF0C\u6B63\u786E\u4E0D\u8F93\u51FA\uFF0C\u9519\u8BEF\u5168\u5C40\u62A5\u9519</li><li><code>TNT.Node.check(node)</code> \u5224\u65ADnode\u662F\u5426\u4E0ENode\u4E00\u81F4\uFF0CNode\u4E3AAST\u5BF9\u8C61\uFF0C\u6BD4\u5982ExpressionStatement</li></ul><h2 id="\u5B9E\u6218\u64CD\u4F5C\u66FF\u6362"><a class="header-anchor" href="#\u5B9E\u6218\u64CD\u4F5C\u66FF\u6362" aria-hidden="true">#</a> \u5B9E\u6218\u64CD\u4F5C\u66FF\u6362</h2><p>\u53EF\u4EE5\u4F7F\u7528\u5728\u7EBFast\u8BED\u6CD5\u6811\uFF0C\u8F93\u5165\u60F3\u8981\u8F6C\u6362\u7684\u7ED3\u6784\uFF0C\u83B7\u53D6\u5BF9\u5E94\u7684\u8282\u70B9\u7C7B\u578B\uFF0C\u4E4B\u540E\u8FDB\u884C\u66FF\u6362</p><div class="language-js"><pre><code><span class="token hashbang comment">#!/usr/bin/env node</span>
<span class="token keyword">const</span> recast <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;recast&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  identifier<span class="token operator">:</span> id<span class="token punctuation">,</span>
  expressionStatement<span class="token punctuation">,</span>
  memberExpression<span class="token punctuation">,</span>
  assignmentExpression<span class="token punctuation">,</span>
  arrowFunctionExpression
<span class="token punctuation">}</span> <span class="token operator">=</span> recast<span class="token punctuation">.</span>types<span class="token punctuation">.</span>builders

<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u622A\u53D6\u53C2\u6570</span>
<span class="token keyword">const</span> options <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

<span class="token comment">//\u5982\u679C\u6CA1\u6709\u53C2\u6570\uFF0C\u6216\u63D0\u4F9B\u4E86-h \u6216--help\u9009\u9879\uFF0C\u5219\u6253\u5370\u5E2E\u52A9</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>options<span class="token punctuation">.</span>length<span class="token operator">===</span><span class="token number">0</span> <span class="token operator">||</span> options<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;-h&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> options<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;--help&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    \u91C7\u7528commonjs\u89C4\u5219\uFF0C\u5C06.js\u6587\u4EF6\u5185\u6240\u6709\u51FD\u6570\u4FEE\u6539\u4E3A\u5BFC\u51FA\u5F62\u5F0F\u3002

    \u9009\u9879\uFF1A -r  \u6216 --rewrite \u53EF\u76F4\u63A5\u8986\u76D6\u539F\u6709\u6587\u4EF6
    </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  process<span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EA\u8981\u6709-r \u6216--rewrite\u53C2\u6570\uFF0C\u5219rewriteMode\u4E3Atrue</span>
<span class="token keyword">let</span> rewriteMode <span class="token operator">=</span> options<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;-r&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> options<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;--rewrite&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u83B7\u53D6\u6587\u4EF6\u540D</span>
<span class="token keyword">const</span> clearFileArg <span class="token operator">=</span> options<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token operator">!</span><span class="token punctuation">[</span><span class="token string">&#39;-r&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;--rewrite&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;-h&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;--help&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// \u53EA\u5904\u7406\u4E00\u4E2A\u6587\u4EF6</span>
<span class="token keyword">let</span> filename <span class="token operator">=</span> clearFileArg<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> <span class="token function-variable function">writeASTFile</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> filename<span class="token punctuation">,</span> rewriteMode</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">const</span> newCode <span class="token operator">=</span> recast<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>ast<span class="token punctuation">)</span><span class="token punctuation">.</span>code
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>rewriteMode<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u975E\u8986\u76D6\u6A21\u5F0F\u4E0B\uFF0C\u5C06\u65B0\u6587\u4EF6\u5199\u5165*.export.js\u4E0B</span>
    filename <span class="token operator">=</span> filename<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;export&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// \u5C06\u65B0\u4EE3\u7801\u5199\u5165\u6587\u4EF6</span>
  fs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span><span class="token function">cwd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>filename<span class="token punctuation">)</span><span class="token punctuation">,</span>newCode<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


recast<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ast<span class="token punctuation">,</span> printSource</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> funcIds <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  recast<span class="token punctuation">.</span>types<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">visitFunctionDeclaration</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//\u83B7\u53D6\u904D\u5386\u5230\u7684\u51FD\u6570\u540D\u3001\u53C2\u6570\u3001\u5757\u7EA7\u57DF</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> path<span class="token punctuation">.</span>node
      <span class="token keyword">const</span> funcName <span class="token operator">=</span> node<span class="token punctuation">.</span>id
      <span class="token keyword">const</span> params <span class="token operator">=</span> node<span class="token punctuation">.</span>params
      <span class="token keyword">const</span> body <span class="token operator">=</span> node<span class="token punctuation">.</span>body

      funcIds<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>funcName<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
      <span class="token keyword">const</span> rep <span class="token operator">=</span> <span class="token function">expressionStatement</span><span class="token punctuation">(</span><span class="token function">assignmentExpression</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">,</span> <span class="token function">memberExpression</span><span class="token punctuation">(</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&#39;exports&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> funcName<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token function">arrowFunctionExpression</span><span class="token punctuation">(</span>params<span class="token punctuation">,</span> body<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>rep<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>


  recast<span class="token punctuation">.</span>types<span class="token punctuation">.</span><span class="token function">visit</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">visitCallExpression</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> node <span class="token operator">=</span> path<span class="token punctuation">.</span>node<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>funcIds<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>callee<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node<span class="token punctuation">.</span>callee <span class="token operator">=</span> <span class="token function">memberExpression</span><span class="token punctuation">(</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&#39;exports&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> node<span class="token punctuation">.</span>callee<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">writeASTFile</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span>filename<span class="token punctuation">,</span>rewriteMode<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u7C7B\u578B\u793A\u4F8B"><a class="header-anchor" href="#\u7C7B\u578B\u793A\u4F8B" aria-hidden="true">#</a> \u7C7B\u578B\u793A\u4F8B</h2><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e0870a372ff146a2b6298b25dedef1e2~tplv-k3u1fbpfcp-zoom-1.image" alt="image.png"></p><h2 id="ast\u6587\u7AE0\u63A8\u8350"><a class="header-anchor" href="#ast\u6587\u7AE0\u63A8\u8350" aria-hidden="true">#</a> AST\u6587\u7AE0\u63A8\u8350</h2><ul><li><a href="https://juejin.cn/post/6923936548027105293" target="_blank" rel="noopener noreferrer">\u50CF\u73A9 jQuery \u4E00\u6837\u73A9 AST</a></li><li><a href="https://juejin.cn/post/6938601548192677918" target="_blank" rel="noopener noreferrer">\u963F\u91CC\u5988\u5988\u51FA\u7684\u65B0\u5DE5\u5177\uFF0C\u7ED9\u6279\u91CF\u4FEE\u6539\u9879\u76EE\u4EE3\u7801\u51CF\u8F7B\u4E86\u75DB\u82E6</a></li></ul>`,28),e=[o];function c(u,l,i,r,k,d){return a(),s("div",null,e)}var m=n(p,[["render",c]]);export{h as __pageData,m as default};
