import{_ as n,c as s,o as a,d as p}from"./app.310fb107.js";const g='{"title":"ts\u5B9E\u8DF5\u4F8B\u5B50","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C01\u88C5\u81EA\u5DF1\u7684map\u51FD\u6570","slug":"\u5C01\u88C5\u81EA\u5DF1\u7684map\u51FD\u6570"},{"level":2,"title":"\u4E3A\u7B2C\u4E09\u65B9\u5E93\u586B\u5199\u58F0\u660E\u6587\u4EF6","slug":"\u4E3A\u7B2C\u4E09\u65B9\u5E93\u586B\u5199\u58F0\u660E\u6587\u4EF6"},{"level":3,"title":"\u67E5\u627E\u662F\u5426\u9700\u8981\u7F16\u5199\u58F0\u660E\u6587\u4EF6","slug":"\u67E5\u627E\u662F\u5426\u9700\u8981\u7F16\u5199\u58F0\u660E\u6587\u4EF6"},{"level":3,"title":"\u7F16\u5199\u58F0\u660E\u6587\u4EF6","slug":"\u7F16\u5199\u58F0\u660E\u6587\u4EF6"},{"level":2,"title":"node\u4F7F\u7528ts\u5F00\u53D1","slug":"node\u4F7F\u7528ts\u5F00\u53D1"}],"relativePath":"src/frontend/Typescript/ts\u5B9E\u6218\u4F8B\u5B50.md","lastUpdated":1618029470000}',t={},o=p(`<h1 id="ts\u5B9E\u8DF5\u4F8B\u5B50"><a class="header-anchor" href="#ts\u5B9E\u8DF5\u4F8B\u5B50" aria-hidden="true">#</a> ts\u5B9E\u8DF5\u4F8B\u5B50</h1><h2 id="\u5C01\u88C5\u81EA\u5DF1\u7684map\u51FD\u6570"><a class="header-anchor" href="#\u5C01\u88C5\u81EA\u5DF1\u7684map\u51FD\u6570" aria-hidden="true">#</a> \u5C01\u88C5\u81EA\u5DF1\u7684map\u51FD\u6570</h2><p>\u539F\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">arrayMap</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span>
    <span class="token keyword">let</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
    <span class="token keyword">let</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">++</span>i <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> arr2
<span class="token punctuation">}</span>
</code></pre></div><p>\u9519\u8BEF\u6848\u4F8B</p><div class="language-ts"><pre><code><span class="token keyword">const</span> arrMap <span class="token operator">=</span> <span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> index<span class="token operator">?</span><span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">let</span> i<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length
  <span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> len <span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">callback</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> arr<span class="token punctuation">)</span><span class="token punctuation">)</span>
    i<span class="token operator">++</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr2
<span class="token punctuation">}</span>

<span class="token comment">// \u4F7F\u7528</span>
<span class="token function">arrMap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> item<span class="token operator">++</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// \u6570\u5B57\u6CA1\u6709length\u5C5E\u6027\uFF0C\u4F46\u662F\u7531\u4E8Eany\u5E76\u4E0D\u62A5\u9519\uFF1B</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u6B63\u786E\u793A\u4F8B</p><div class="language-ts"><pre><code><span class="token comment">// \u9996\u5148\u4F20\u5165\u7684\u7B2C\u4E00\u4E2A\u6CDB\u578B\u53D8\u91CFT</span>
<span class="token comment">// \u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3AT\u6784\u6210\u7684\u6570\u7EC4</span>
<span class="token comment">// callback\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u4E3AT, \u7B2C\u4E8C\u4E2A\u548C\u7B2C\u4E09\u4E2A\u53C2\u6570\u90FD\u4E3A\u53EF\u9009\u7684\uFF0C\u7B2C\u4E09\u4E2A\u53C2\u6570\u5E94\u8BE5\u662F\u53EA\u8BFB\u7684\uFF0Ccallback\u8FD4\u56DE\u7684\u7C7B\u578B\u5E94\u8BE5\u548C\u6574\u4E2A\u51FD\u6570\u8FD4\u56DE\u7684\u7C7B\u578B\u662F\u6709\u5173\u8054\u7684\uFF0C\u56E0\u6B64\u4F7F\u7528\u7B2C\u4E8C\u4E2A\u6CDB\u578B\u53D8\u91CF</span>
<span class="token keyword">const</span> arrayMap <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>item<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> index<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> array<span class="token operator">?</span><span class="token operator">:</span> Readonly<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">U</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E3A\u7B2C\u4E09\u65B9\u5E93\u586B\u5199\u58F0\u660E\u6587\u4EF6"><a class="header-anchor" href="#\u4E3A\u7B2C\u4E09\u65B9\u5E93\u586B\u5199\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u4E3A\u7B2C\u4E09\u65B9\u5E93\u586B\u5199\u58F0\u660E\u6587\u4EF6</h2><p>\u5982\u679C\u5B89\u88C5\u4E86\u5E93\uFF0C\u6CA1\u6709\u586B\u5199\u58F0\u660E\u6587\u4EF6\uFF0C\u662F\u6CA1\u6709\u7C7B\u578B\u63D0\u793A\u7684\uFF1B</p><h3 id="\u67E5\u627E\u662F\u5426\u9700\u8981\u7F16\u5199\u58F0\u660E\u6587\u4EF6"><a class="header-anchor" href="#\u67E5\u627E\u662F\u5426\u9700\u8981\u7F16\u5199\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u67E5\u627E\u662F\u5426\u9700\u8981\u7F16\u5199\u58F0\u660E\u6587\u4EF6</h3><ol><li>\u9996\u5148\u67E5\u627E<code>node_modules</code>\u4E0B\u9762\u5B89\u88C5\u7684\u6A21\u5757\u7684\u6839\u76EE\u5F55\uFF0C\u6709\u6CA1\u6709<code>.d.ts</code>\u6587\u4EF6\uFF0C\u5982\u679C\u6709\u5219\u4E0D\u9700\u8981\u5199\u58F0\u660E\u6587\u4EF6\u4E86\uFF1B</li><li>\u67E5\u627E\u793E\u533A\u6709\u6CA1\u6709\u4E3A\u8BE5\u5E93\u5B89\u88C5\u58F0\u660E\u6587\u4EF6 <ol><li>\u4F7F\u7528<code>npm install @types/\u5E93\u540D -D</code> \u5982\u679C\u5B89\u88C5\u6210\u529F\uFF0C\u67E5\u627E<code>node_modules</code>\u6587\u4EF6\u5939\u4E0B\u9762\u7684<code>@types</code>\u6587\u4EF6\u5939\u4E0B\uFF0C\u5B89\u88C5\u7684\u6A21\u5757\u6587\u4EF6\u5939</li><li>\u5982\u679C\u5B89\u88C5\u62A5\u9519\uFF0C\u8BF4\u660E\u6CA1\u6709\u793E\u533A\u7F16\u5199\u58F0\u660E\u6587\u4EF6\uFF1B</li><li>\u5982\u679C\u6A21\u5757\u6587\u4EF6\u5939\u4E3A\u7A7A\uFF0C\u8BF4\u660E\u6CA1\u6709\u58F0\u660E\u6587\u4EF6\uFF1B</li></ol></li></ol><h3 id="\u7F16\u5199\u58F0\u660E\u6587\u4EF6"><a class="header-anchor" href="#\u7F16\u5199\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u5199\u58F0\u660E\u6587\u4EF6</h3><ol><li><p>\u5230<code>tsconfig.json</code>\u6587\u4EF6\u5939\u4E0B\u9762\uFF0C\u6253\u5F00\u4EE5\u4E0B\u9009\u9879</p><div class="language-json"><pre><code><span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./node_modules/@types&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./typings/*&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u4E0A\u9762\u586B\u5199\u7684paths\u4EE3\u8868\u9996\u5148\u5230node_modules\u4E0B\u9762\u7684@types\u67E5\u627E\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u67E5\u627E\u672C\u5730typings\u6587\u4EF6\u5939</span>
</code></pre></div></li><li><p>\u7F16\u5199\u58F0\u660E\u6587\u4EF6</p><ol><li><p>\u9996\u5148\u586B\u5199\u540C\u540D\u6A21\u5757\u7684\u6587\u4EF6\u5939\uFF0C\u518D\u5728\u6587\u4EF6\u5939\u4E0B\u9762\u586B\u5199<code>index.d.ts</code>\u6587\u4EF6\uFF1B</p><div class="language-ts"><pre><code><span class="token comment">// \u7F16\u5199\u58F0\u660E\u6587\u4EF6</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">indexof</span><span class="token punctuation">(</span>arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> obj<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token builtin">any</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token operator">=</span> indexof
</code></pre></div></li></ol></li></ol><h2 id="node\u4F7F\u7528ts\u5F00\u53D1"><a class="header-anchor" href="#node\u4F7F\u7528ts\u5F00\u53D1" aria-hidden="true">#</a> node\u4F7F\u7528ts\u5F00\u53D1</h2><ol><li><p>\u5168\u5C40\u5B89\u88C5express\uFF1A<code>npm i express-generator -g</code></p></li><li><p>\u8FD0\u884C<code>express --view=jade server-side</code>\u521B\u5EFA\u4E00\u4E2A\u9879\u76EE, \u6700\u540E\u4E3A\u9879\u76EE\u540D</p></li><li><p>\u521B\u5EFA\u76F8\u5173\u6587\u4EF6\u5939</p><div class="language-bash"><pre><code>config <span class="token comment"># \u653E\u7F6E\u5168\u5C40</span>
controller <span class="token comment"># \u653E\u7F6E\u63A7\u5236\u5668</span>
model <span class="token comment"># \u8FDE\u63A5\u6570\u636E\u5E93</span>
utils <span class="token comment"># \u653E\u7F6E\u5DE5\u5177\u51FD\u6570</span>
types <span class="token comment"># \u653E\u7F6Ets\u7684\u58F0\u660E\u6587\u4EF6</span>
</code></pre></div></li><li><p>\u4F7F\u7528<code>npm install</code>\u5B89\u88C5\u4F9D\u8D56</p></li><li><p>\u5B89\u88C5typescript\uFF1A<code>npm i typescript</code></p></li><li><p>\u5B89\u88C5typescript\u7684\u58F0\u660E\u6587\u4EF6\uFF1A<code>npm i @types/express @types/node -D</code></p></li><li><p>\u4FEE\u6539\u6587\u4EF6\uFF1A</p><ol><li>bin\u76EE\u5F55\u4E0B\u9762www\u79FB\u52A8\u5230\u9879\u76EE\u6839\u76EE\u5F55\uFF0C\u5E76\u4FEE\u6539\u4E3A<code>server.ts</code>\u6587\u4EF6\uFF0C\u5E76\u4FEE\u6539server.ts\u6587\u4EF6\u91CC\u9762\u5F15\u5165app\u7684\u8DEF\u5F84\u4E3A<code>./</code>\uFF1B</li><li>\u5C06app.js\u4FEE\u6539\u4E3A<code>app.ts</code></li><li>\u5C06routes\u6587\u4EF6\u5939\u4E0B\u9762\u7684js\u4FEE\u6539\u4E3Ats\u6587\u4EF6</li></ol></li><li><p>\u4F7F\u7528<code>tsc --init</code>\u751F\u6210<code>tsconfig.json</code>\u6587\u4EF6</p></li><li><p>\u4FEE\u6539tsconfig.json\u6587\u4EF6\uFF0C\u4E0B\u9762\u6709\u7684\u90FD\u6253\u5F00\uFF1A</p><div class="language-json"><pre><code><span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>
<span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./types/*&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
</code></pre></div></li><li><p>\u7531\u4E8Epublic\u548Cviews\u4E0B\u9762\u7684\u9759\u6001\u6587\u4EF6\u4E0D\u4F1A\u88ABbuild\uFF0C\u9700\u8981\u624B\u52A8\u5904\u7406\u4E00\u4E0B\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA<code>handle-public.js</code>\u6587\u4EF6\uFF0C\u7528\u6765\u5904\u7406\u6253\u5305\uFF1A</p><ol><li><p>\u5B89\u88C5shelljs\uFF1A<code>npm i shelljs</code></p></li><li><p>\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">const</span> shell <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;shelljs&#39;</span><span class="token punctuation">)</span>
shell<span class="token punctuation">.</span><span class="token function">cp</span><span class="token punctuation">(</span><span class="token string">&#39;-R&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./views/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./dist/&#39;</span><span class="token punctuation">)</span>
shell<span class="token punctuation">.</span><span class="token function">cp</span><span class="token punctuation">(</span><span class="token string">&#39;-R&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./public/&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;./dist/&#39;</span><span class="token punctuation">)</span>
</code></pre></div></li></ol></li><li><p>\u5B89\u88C5cross-env\u4F20\u9012\u73AF\u5883\uFF1A<code>npm i cross-env</code> \uFF0Cjs\u4E2D\u4F7F\u7528<code>process.<wbr>env.NODE_ENV</code>\u53D6\u503C;</p></li><li><p>\u5B89\u88C5nodemon\u7528\u6765\u70ED\u66F4\u65B0\uFF1A<code>npm i nodemon -D</code></p></li><li><p>\u7531\u4E8Enodemon\u4EC5\u652F\u6301js\u6587\u4EF6\uFF0C\u518D\u5B89\u88C5ts-node\u652F\u6301\u70ED\u66F4\u65B0ts\u6587\u4EF6\uFF1A<code>npm i ts-node -D</code></p></li><li><p>\u4FEE\u6539package.json</p><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run serve&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;serve&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node ./dist/server.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tsc &amp;&amp; node handle-public.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;watch-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development nodemon -e ts,tsx --exec &#39;ts-node&#39; ./server.ts&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>watch-dev\uFF1A</p><ul><li><code>-e</code>\uFF1A\u8868\u793A\u6307\u5B9A\u70ED\u66F4\u65B0\u540E\u7F00\u6587\u4EF6</li><li><code>exec</code>\uFF1A\u6267\u884C\u540E\u9762\u7684\u6587\u4EF6</li></ul><p>\u4E4B\u540E\u4F7F\u7528watch-dev\u542F\u52A8\u9879\u76EE\u5373\u53EF\uFF1B</p></li><li><p>\u7F16\u8BD1\u4E4B\u540E\u53EF\u4EE5\u5C06dist\u6587\u4EF6\u5939\u653E\u7F6E\u5230\u670D\u52A1\u5668\u4E0A\u9762\u5373\u53EF\uFF1B</p></li></ol>`,16),e=[o];function c(l,u,i,r,k,d){return a(),s("div",null,e)}var h=n(t,[["render",c]]);export{g as __pageData,h as default};
