import{_ as n,c as s,o as a,d as o}from"./app.310fb107.js";const g='{"title":"TS-08 \u58F0\u660E\u6587\u4EF6\u3001\u6A21\u5757\u89E3\u6790","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5168\u5C40\u5E93","slug":"\u5168\u5C40\u5E93"},{"level":2,"title":"\u6A21\u5757\u5316\u5E93","slug":"\u6A21\u5757\u5316\u5E93"},{"level":2,"title":"UMD\u5E93","slug":"umd\u5E93"},{"level":2,"title":"\u4FEE\u6539\u5168\u5C40\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6","slug":"\u4FEE\u6539\u5168\u5C40\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6"},{"level":2,"title":"\u4F7F\u7528\u4F9D\u8D56","slug":"\u4F7F\u7528\u4F9D\u8D56"},{"level":2,"title":"\u5FEB\u6377\u5916\u90E8\u6A21\u5757\u58F0\u660E","slug":"\u5FEB\u6377\u5916\u90E8\u6A21\u5757\u58F0\u660E"},{"level":2,"title":"\u6A21\u5757\u89E3\u6790","slug":"\u6A21\u5757\u89E3\u6790"},{"level":2,"title":"\u6A21\u5757\u89E3\u6790\u914D\u7F6E\u9879","slug":"\u6A21\u5757\u89E3\u6790\u914D\u7F6E\u9879"}],"relativePath":"src/frontend/Typescript/ts-08 \u58F0\u660E\u6587\u4EF6\u3001\u6A21\u5757\u89E3\u6790.md","lastUpdated":1615699077000}',e={},t=o(`__VP_STATIC_START__<h1 id="ts-08-\u58F0\u660E\u6587\u4EF6\u3001\u6A21\u5757\u89E3\u6790"><a class="header-anchor" href="#ts-08-\u58F0\u660E\u6587\u4EF6\u3001\u6A21\u5757\u89E3\u6790" aria-hidden="true">#</a> TS-08 \u58F0\u660E\u6587\u4EF6\u3001\u6A21\u5757\u89E3\u6790</h1><p><strong>\u4E3A\u4EC0\u4E48\u9700\u8981\u58F0\u660E\u6587\u4EF6</strong></p><p>\u5F53\u5F15\u5165\u4E86\u5168\u5C40\u7684\u5E93\u4E4B\u540E\uFF0C\u6BD4\u5982<code>jQuery</code>\u5E93\uFF0C\u4F1A\u5728<code>ts</code>\u6587\u4EF6\u4E2D\u4F7F\u7528<code>$</code>\u7B26\uFF0C\u5728<code>ts</code>\u6587\u4EF6\u4E2D\u76F4\u63A5\u4F7F\u7528\u662F\u4F1A\u63D0\u793A\u627E\u4E0D\u5230\u6587\u4EF6\u7684\uFF0C\u662F\u56E0\u4E3A\u6CA1\u6709\u58F0\u660E\u6587\u4EF6\uFF1B</p><p><strong>\u58F0\u660E\u6587\u4EF6\u7684\u67E5\u627E</strong></p><p>\u53EF\u4EE5\u5728<code>tsconfig.json</code>\u6587\u4EF6\u4E2D\uFF0C\u6DFB\u52A0<code>include</code>\u5B57\u6BB5\uFF0C\u914D\u7F6E\u58F0\u660E\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u5982\u679C\u4E0D\u914D\u7F6E\uFF0C\u5219\u4F1A\u67E5\u627E\u6240\u6709\u6587\u4EF6\u5939\u4E0B\u9762\u7684<code>.d.ts</code>\u6587\u4EF6\uFF1B</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;./scr/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u4EE3\u8868src\u4E0B\u9762\u67D0\u4E2A\u6587\u4EF6\u5939\u4E0B\u9762\u7684\u58F0\u660E\u6587\u4EF6</span>
        <span class="token string">&quot;./src/**/*.d.ts&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u58F0\u660E\u6587\u4EF6\u4F7F\u7528<code>declare</code>\u5173\u952E\u5B57\u6765\u58F0\u660E\u6587\u4EF6\uFF1B</p><p><strong>\u67E5\u770B\u58F0\u660E\u6587\u4EF6</strong></p><p>\u5728<code>ts</code>\u4E2D\uFF0C\u5927\u591A\u6570\u5E93\u90FD\u88AB\u793E\u533A\u7F16\u5199\u4E86\u58F0\u660E\u6587\u4EF6\uFF0C\u5728<code>node_modules</code>\u627E\u5230\u5B89\u88C5\u7684\u5E93\uFF0C\u4E4B\u540E\u67E5\u770B<code>*.d.ts</code>\u6587\u4EF6\uFF0C\u91CC\u9762\u5C31\u662F\u5199\u597D\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u5219\u9700\u8981\u624B\u52A8\u5B89\u88C5\uFF0C\u5B89\u88C5\u65F6\u52A0\u4E0A<code>@types/*</code>\u5373\u53EF\uFF0C\u5982\u679C\u5B89\u88C5\u6210\u529F\u4E86\uFF0C\u8BF4\u660E\u6709\u8FD9\u4E2A\u5E93\u7684\u58F0\u660E\u6587\u4EF6\uFF0C\u5982\u679C\u627E\u4E0D\u5230\u5B89\u88C5\u7684\u6A21\u5757\uFF0C\u5219\u9700\u8981\u624B\u52A8\u7F16\u5199\u58F0\u660E\u6587\u4EF6\uFF1B</p><h2 id="\u5168\u5C40\u5E93"><a class="header-anchor" href="#\u5168\u5C40\u5E93" aria-hidden="true">#</a> \u5168\u5C40\u5E93</h2><p>\u5982\u4F55\u5224\u65AD\u662F\u5426\u662F\u5168\u5C40\u53EF\u4EE5\u4F7F\u7528\u7684\u53D8\u91CF\uFF1A</p><p>\u5B98\u65B9\u58F0\u660E\u6587\u4EF6\u7684\u4F8B\u5B50\uFF1A<a href="https://www.tslang.cn/docs/handbook/declaration-files/templates.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6A21\u5757</a>\uFF0C\u53EF\u4EE5\u53C2\u8003<code>global.d.ts</code>\u6587\u4EF6\u7684\u4F8B\u5B50\uFF1B</p><p>\u901A\u8FC7\u5B9A\u4E49<code>document</code>\u6216\u8005<code>window</code>\u4E0A\u9762\u6DFB\u52A0\u65B9\u6CD5\u65F6\uFF0C\u90FD\u662F\u5168\u5C40\u53EF\u4EE5\u4F7F\u7528\u7684\u53D8\u91CF</p><div class="language-ts"><pre><code><span class="token comment">// \u5982\u679C\u6DFB\u52A0\u4E86\u4E00\u4E2A\u5168\u5C40\u7684getTitle\u65B9\u6CD5\uFF0C\u5E76\u4E14\u8FD4\u56DE\u7684\u662Fstring, \u5F53\u58F0\u660E\u4E86\u4E4B\u540E\u5219\u53EF\u4EE5\u4F7F\u7528\u4E86;</span>
<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
</code></pre></div><p>\u5F53\u4FEE\u6539\u4E86\u58F0\u660E\u6587\u4EF6\u65F6\uFF0C\u9700\u8981\u91CD\u65B0\u7F16\u8BD1\uFF0C\u5426\u5219\u62A5\u9519\uFF1B</p><h2 id="\u6A21\u5757\u5316\u5E93"><a class="header-anchor" href="#\u6A21\u5757\u5316\u5E93" aria-hidden="true">#</a> \u6A21\u5757\u5316\u5E93</h2><p>\u4F7F\u7528<code>import</code>\u8BED\u53E5\u6216\u8005<code>require</code>\u8BED\u53E5\u7684\uFF0C\u4E00\u822C\u90FD\u662F\u6A21\u5757\u5316\u5E93</p><p>\u53EF\u4EE5\u53C2\u6570\u5B98\u65B9\u7684<code>module-*.d.ts</code>\u7684\u6A21\u677F\uFF1B</p><h2 id="umd\u5E93"><a class="header-anchor" href="#umd\u5E93" aria-hidden="true">#</a> UMD\u5E93</h2><p><em>UMD</em>\u6A21\u5757\u662F\u6307\u90A3\u4E9B\u65E2\u53EF\u4EE5\u4F5C\u4E3A\u6A21\u5757\u4F7F\u7528\uFF08\u901A\u8FC7\u5BFC\u5165\uFF09\u53C8\u53EF\u4EE5\u4F5C\u4E3A\u5168\u5C40\uFF08\u5728\u6CA1\u6709\u6A21\u5757\u52A0\u8F7D\u5668\u7684\u73AF\u5883\u91CC\uFF09\u4F7F\u7528\u7684\u6A21\u5757\u3002</p><p><strong>\u8BC6\u522BUMD\u6A21\u5757</strong></p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;libName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;libName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>libName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
</code></pre></div><p>\u5F88\u591A\u5E93\u90FD\u662F<code>UMD</code>\u5E93\uFF0C\u6BD4\u5982<code>jquery</code>\u3001<code>moment</code></p><h2 id="\u4FEE\u6539\u5168\u5C40\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6"><a class="header-anchor" href="#\u4FEE\u6539\u5168\u5C40\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u5168\u5C40\u6A21\u5757\u7F16\u5199\u58F0\u660E\u6587\u4EF6</h2><p>\u4E00\u4E2A<em>\u5168\u5C40\u63D2\u4EF6</em>\u662F\u5168\u5C40\u4EE3\u7801\uFF0C\u5B83\u4EEC\u4F1A\u6539\u53D8\u5168\u5C40\u5BF9\u8C61\u7684\u7ED3\u6784\u3002 \u5BF9\u4E8E <em>\u5168\u5C40\u4FEE\u6539\u7684\u6A21\u5757</em>\uFF0C\u5728\u8FD0\u884C\u65F6\u5B58\u5728\u51B2\u7A81\u7684\u53EF\u80FD\u3002</p><p>\u5F53\u6211\u4EEC\u5728<code>String</code>\u3001<code>Array</code>\u7B49\u539F\u578B\u4E0A\u9762\u6DFB\u52A0\u4E86\u65B9\u6CD5\u65F6\uFF0C\u5982\u4F55\u586B\u5199\u58F0\u660E\u6587\u4EF6</p><div class="language-ts"><pre><code>String<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getFirstLetter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment">// global.d.ts \u5199\u58F0\u660E\u6587\u4EF6</span>
<span class="token comment">// \u5229\u7528\u58F0\u660E\u5408\u5E76</span>
<span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>
    <span class="token function">getFirstLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4F7F\u7528\u4F9D\u8D56"><a class="header-anchor" href="#\u4F7F\u7528\u4F9D\u8D56" aria-hidden="true">#</a> \u4F7F\u7528\u4F9D\u8D56</h2><p><strong>\u4F9D\u8D56\u5168\u5C40\u5E93</strong></p><p>\u5982\u679C\u5E93\u4F9D\u8D56\u4E86\u67D0\u4E2A\u5168\u5C40\u5E93\uFF0C\u4F7F\u7528<code>reference</code>\u6307\u5B9A<code>types</code>\u6765\u5F15\u5165\u8BE5\u6A21\u5757</p><div class="language-ts"><pre><code><span class="token comment">/// &lt;reference types=&#39;moment&#39;/&gt;</span>
</code></pre></div><p><strong>\u4F9D\u8D56\u6A21\u5757</strong></p><p>\u4F7F\u7528<code>import</code>\u8BED\u53E5</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&quot;moment&quot;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u4F9D\u8D56UMD\u5E93</strong></p><ul><li><p>\u5982\u679C\u4F60\u7684\u5168\u5C40\u5E93\u4F9D\u8D56\u4E8E\u67D0\u4E2AUMD\u6A21\u5757\uFF0C\u4F7F\u7528<code>/// &lt;reference types</code>\u6307\u4EE4\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">/// &lt;reference types=&quot;moment&quot; /&gt;</span>

<span class="token keyword">function</span> <span class="token function">getThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> moment<span class="token punctuation">;</span>
</code></pre></div></li><li><p>\u5982\u679C\u4F60\u7684\u6A21\u5757\u6216UMD\u5E93\u4F9D\u8D56\u4E8E\u4E00\u4E2AUMD\u5E93\uFF0C\u4F7F\u7528<code>import</code>\u8BED\u53E5\uFF1A</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> someLib <span class="token keyword">from</span> <span class="token string">&#39;someLib&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4E0D\u8981\u4F7F\u7528<code>///reference</code>\u5F15\u5165</p></li></ul><p><strong>\u6CE8\u610F\uFF1A</strong></p><ol><li>\u9632\u6B62\u547D\u540D\u51B2\u7A81\uFF0C\u56E0\u4E3A\u90FD\u662F\u5728\u5168\u5C40\u586B\u5199\u7684\uFF0C\u5F88\u5BB9\u6613\u4EA7\u751F\u51B2\u7A81\uFF0C\u5EFA\u8BAE\u5C06\u76F8\u5173\u7684\u4E1C\u897F\u653E\u5728\u547D\u540D\u7A7A\u95F4\u91CC\u9762\uFF0C\u4F7F\u7528\u5BF9\u8C61\u7684\u5F62\u5F0F\u53BB\u8BBF\u95EE\uFF0C\u9632\u6B62\u547D\u540D\u6C61\u67D3</li><li>\u4E00\u4E9B\u63D2\u4EF6\u6DFB\u52A0\u6216\u4FEE\u6539\u5DF2\u5B58\u5728\u7684\u9876\u5C42\u6A21\u5757\u7684\u5BFC\u51FA\u90E8\u5206\u3002 \u5F53\u7136\u8FD9\u5728CommonJS\u548C\u5176\u5B83\u52A0\u8F7D\u5668\u91CC\u662F\u5141\u8BB8\u7684\uFF0CES\u6A21\u5757\u88AB\u5F53\u4F5C\u662F\u4E0D\u53EF\u6539\u53D8\u7684\u56E0\u6B64\u8FD9\u79CD\u6A21\u5F0F\u5C31\u4E0D\u53EF\u884C\u4E86\u3002 \u56E0\u4E3ATypeScript\u662F\u80FD\u4E0D\u9884\u77E5\u52A0\u8F7D\u5668\u7C7B\u578B\u7684\uFF0C\u6240\u4EE5\u6CA1\u6CA1\u5728\u7F16\u8BD1\u65F6\u4FDD\u8BC1\uFF0C\u4F46\u662F\u5F00\u53D1\u8005\u5982\u679C\u8981\u8F6C\u5230ES6\u6A21\u5757\u52A0\u8F7D\u5668\u4E0A\u5E94\u8BE5\u6CE8\u610F\u8FD9\u4E00\u70B9\u3002</li></ol><h2 id="\u5FEB\u6377\u5916\u90E8\u6A21\u5757\u58F0\u660E"><a class="header-anchor" href="#\u5FEB\u6377\u5916\u90E8\u6A21\u5757\u58F0\u660E" aria-hidden="true">#</a> \u5FEB\u6377\u5916\u90E8\u6A21\u5757\u58F0\u660E</h2><p>\u5982\u679C\u4F7F\u7528\u4E00\u4E2A\u65B0\u6A21\u5757\uFF0C\u4E0D\u60F3\u82B1\u65F6\u95F4\u7CBE\u529B\u4E3A\u8BE5\u6A21\u5757\u586B\u5199\u58F0\u660E\uFF0C\u53EA\u9700\u8981\u5728<code>typing</code>\u6587\u4EF6\u5939\u4E0B\u9762\u521B\u5EFA\u6587\u4EF6\u5939\u7F16\u5199\u5373\u53EF\uFF0C\u6BD4\u5982<code>moment</code>\uFF1A</p><div class="language-ts"><pre><code><span class="token comment">// typings/moment/index.d.ts</span>
<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;moment&#39;</span> <span class="token comment">//\u5FEB\u901F\u5BFC\u51FA\u6A21\u5757</span>
</code></pre></div><h2 id="\u6A21\u5757\u89E3\u6790"><a class="header-anchor" href="#\u6A21\u5757\u89E3\u6790" aria-hidden="true">#</a> \u6A21\u5757\u89E3\u6790</h2><blockquote><p>\u4EE5\u4E0B\u5185\u5BB9\u8FDB\u884C\u4E86\u89E3\u5C31\u53EF\u4EE5\u4E86</p></blockquote><p>\u6A21\u5757\u89E3\u6790\u5206\u4E3A\u4E24\u79CD\uFF1A<code>node</code>\u89E3\u6790\u548C<code>classic</code>\u89E3\u6790\uFF0C\u901A\u8FC7<code>tsconfig.json</code>\u6587\u4EF6\u7684<code>moduleResolution</code>\u8BBE\u7F6E\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u9ED8\u8BA4\u4E3A<code>classic</code>\u89E3\u6790\u65B9\u5F0F\uFF1B</p><p><code>classic</code>\u89E3\u6790\u7B56\u7565\uFF1A</p><ul><li>\u5F53\u7701\u7565<code>ts</code>\u6587\u4EF6\u65F6\u9996\u5148\u4F1A\u67E5\u770B<code>.ts</code>\u6587\u4EF6\uFF0C\u5982\u679C\u627E\u4E0D\u5230\u5219\u67E5\u627E<code>.d.ts</code>\u6587\u4EF6\uFF0C\u8FD8\u662F\u627E\u4E0D\u5230\u5219\u5411\u4E0A\u4E00\u7EA7\u53BB\u67E5\u627E\uFF0C\u7EE7\u7EED\u6309\u7167\u524D\u9762\u4E24\u79CD\u6587\u4EF6\u7C7B\u578B\u67E5\u627E\uFF1B</li></ul><p><code>node</code>\u89E3\u6790\u7B56\u7565\uFF1A</p><ul><li>\u6A21\u62DF<code>nodejs</code>\u6A21\u677F\u89E3\u6790\u7B56\u7565\uFF0C\u5728\u7F16\u8BD1\u9636\u6BB5\u5B9A\u4F4D\u6A21\u5757\u6587\u4EF6\u7684\uFF0C\u9996\u5148\u627E<code>.ts</code>\u6587\u4EF6\uFF0C\u4E4B\u540E\u627E<code>.tsx</code>\u6587\u4EF6\uFF0C\u4E4B\u540E\u627E<code>.d.ts</code>\u4E09\u79CD\u6587\u4EF6\uFF1B</li></ul><p><code>nodejs</code>\u4F1A\u67E5\u627E<code>package.json</code>\u91CC\u9762\u7684<code>main</code>\u786E\u5B9A\u5165\u53E3\u6587\u4EF6\uFF0C\u800C<code>ts</code>\u4F1A\u9996\u5148\u67E5\u627E<code>types</code>\u786E\u5B9A\u5165\u53E3\u6587\u4EF6\uFF0C\u4E4B\u540E\u518D\u67E5\u627E<code>main</code>\u5165\u53E3\u6587\u4EF6</p><h2 id="\u6A21\u5757\u89E3\u6790\u914D\u7F6E\u9879"><a class="header-anchor" href="#\u6A21\u5757\u89E3\u6790\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u6A21\u5757\u89E3\u6790\u914D\u7F6E\u9879</h2><blockquote><p>\u901A\u8FC7\u914D\u7F6E\u9879\uFF0C\u6765\u786E\u5B9A\u6A21\u5757\u7684\u5BFC\u5165\uFF0C\u914D\u7F6E\u9879\u5728tsconfig.json\u6587\u4EF6</p></blockquote><ul><li><p><code>baseUrl</code>\uFF1A\u7528\u6765\u8BBE\u7F6E\u7F16\u8BD1\u4E4B\u540E\u6587\u4EF6\u90FD\u653E\u5728\u54EA\u4E2A\u6587\u4EF6\u5939\u4E0B\uFF1B</p></li><li><p><code>paths</code>\uFF1A \u7528\u6765\u8BBE\u7F6E\u8DEF\u5F84\u6620\u5C04\uFF0C<code>paths</code>\u662F\u76F8\u5BF9\u4E8E<code>baseUrl</code>\u7684\uFF0C\u6307\u5B9A<code>paths</code>\u5C31\u5FC5\u987B\u6307\u5B9A<code>baseUrl</code>\uFF0C\u5E38\u7528\u4E8E\u914D\u7F6E\u7B2C\u4E09\u65B9\u6A21\u5757\u7684\u5F15\u5165\uFF0C\u7ECF\u5E38\u5728<code>node_modules/@types</code>\u548C<code>src/typings</code>\u6587\u4EF6\u5939\u67E5\u627E\uFF0C\u8BBE\u7F6E\uFF1A</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">// \u5982\u679C\u662F\u5F53\u524D\u6839\u76EE\u5F55\uFF0C\u5C31\u586B\u5199\u4E00\u4E2A.\u5373\u53EF</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/@types&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/typings&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p><code>rootDirs</code>\uFF1A\u8DEF\u5F84\u5217\u8868\uFF0C\u5728\u7F16\u8BD1\u65F6\uFF0C\u7F16\u8BD1\u5668\u4F1A\u5C06\u8FD9\u4E2A\u8DEF\u5F84\u5217\u8868\u4E2D\u7684\u5185\u5BB9\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u5939\u4E2D\uFF0C\u5F53<code>modules</code>\u6587\u4EF6\u5939\u4E2D\u7684<code>index.ts</code>\u8981\u5F15\u5165<code>ts-modules</code>\u6587\u4EF6\u5939\u91CC\u9762\u7684<code>a.ts</code>\u6587\u4EF6\uFF0C\u8BBE\u7F6E\u4E86\u8DEF\u5F84\u5217\u8868\u4E4B\u540E\uFF0C\u53EA\u9700\u8981\u5199\u76F8\u5BF9\u8DEF\u5F84\u5373\u53EF</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>
    <span class="token string">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/ts-modules&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul>__VP_STATIC_END__`,52),p=[t];function c(l,d,u,r,i,k){return a(),s("div",null,p)}var h=n(e,[["render",c]]);export{g as __pageData,h as default};
