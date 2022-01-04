import{_ as a,c as s,o as n,d as t}from"./app.310fb107.js";const h='{"title":"React-01 \u521D\u8BC6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u4ECB\u7ECD","slug":"\u4E00\u3001\u4ECB\u7ECD"},{"level":3,"title":"\u4EC0\u4E48\u662Freact","slug":"\u4EC0\u4E48\u662Freact"},{"level":3,"title":"React\u4F18\u7F3A\u70B9","slug":"react\u4F18\u7F3A\u70B9"},{"level":2,"title":"\u4E8C\u3001\u4EC0\u4E48\u662F\u865A\u62DFDOM\u7ED3\u6784","slug":"\u4E8C\u3001\u4EC0\u4E48\u662F\u865A\u62DFdom\u7ED3\u6784"},{"level":3,"title":"react\u4E2D\u7684diff\u7B97\u6CD5","slug":"react\u4E2D\u7684diff\u7B97\u6CD5"},{"level":2,"title":"\u8BED\u6CD5\u7CD6JSX","slug":"\u8BED\u6CD5\u7CD6jsx"},{"level":2,"title":"\u4E09\u3001\u5FEB\u901F\u5C1D\u8BD5JSX","slug":"\u4E09\u3001\u5FEB\u901F\u5C1D\u8BD5jsx"},{"level":3,"title":"\u5B98\u65B9\u63D0\u4F9B\u7684CDN\u5730\u5740","slug":"\u5B98\u65B9\u63D0\u4F9B\u7684cdn\u5730\u5740"},{"level":3,"title":"\u4E00\u4E2Ajsx\u7684html\u6587\u4EF6\u4F8B\u5B50","slug":"\u4E00\u4E2Ajsx\u7684html\u6587\u4EF6\u4F8B\u5B50"},{"level":3,"title":"\u5728JSX\u8BED\u6CD5\u6CE8\u610F\u4E8B\u9879","slug":"\u5728jsx\u8BED\u6CD5\u6CE8\u610F\u4E8B\u9879"},{"level":3,"title":"\u7B80\u5355JSX\u8BED\u6CD5","slug":"\u7B80\u5355jsx\u8BED\u6CD5"},{"level":3,"title":"\u663E\u793A\u4E00\u4E2Abutton\u6309\u94AE","slug":"\u663E\u793A\u4E00\u4E2Abutton\u6309\u94AE"},{"level":2,"title":"\u56DB\u3001React\u4E2D\u7684\u6837\u5F0F","slug":"\u56DB\u3001react\u4E2D\u7684\u6837\u5F0F"},{"level":2,"title":"\u4E94\u3001key\u503C","slug":"\u4E94\u3001key\u503C"},{"level":2,"title":"\u516D\u3001\u5176\u4ED6\u8BED\u6CD5","slug":"\u516D\u3001\u5176\u4ED6\u8BED\u6CD5"},{"level":3,"title":"\u52A8\u6001Style","slug":"\u52A8\u6001style"},{"level":3,"title":"\u52A8\u6001class","slug":"\u52A8\u6001class"},{"level":3,"title":"\u6E32\u67D3html\u6807\u7B7E","slug":"\u6E32\u67D3html\u6807\u7B7E"},{"level":3,"title":"\u6761\u4EF6\u8BED\u53E5","slug":"\u6761\u4EF6\u8BED\u53E5"}],"relativePath":"src/frontend/React/react-01 \u521D\u8BC6.md","lastUpdated":1615699077000}',p={},e=t(`__VP_STATIC_START__<h1 id="react-01-\u521D\u8BC6"><a class="header-anchor" href="#react-01-\u521D\u8BC6" aria-hidden="true">#</a> React-01 \u521D\u8BC6</h1><blockquote><p>react\u662F\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684javascript\u5E93</p></blockquote><p>\u4E2D\u6587\u5B98\u7F51\uFF1A<a href="https://react.docschina.org" target="_blank" rel="noopener noreferrer">https://react.docschina.org</a></p><p>\u82F1\u6587\u5B98\u7F51\uFF1A<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">https://reactjs.org/</a></p><h2 id="\u4E00\u3001\u4ECB\u7ECD"><a class="header-anchor" href="#\u4E00\u3001\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E00\u3001\u4ECB\u7ECD</h2><h3 id="\u4EC0\u4E48\u662Freact"><a class="header-anchor" href="#\u4EC0\u4E48\u662Freact" aria-hidden="true">#</a> \u4EC0\u4E48\u662Freact</h3><p>React \u662FFacebook\u5185\u90E8\u7684\u4E00\u4E2AJavaScript\u7C7B\u5E93\uFF082013\u5E74\u76845\u6708\u8FDB\u884C\u5F00\u6E90\uFF09\u3002</p><p>React \u53EF\u7528\u4E8E\u521B\u5EFAWeb\u7528\u6237\u4EA4\u4E92\u754C\u9762\u3002</p><p>React\u4E0D\u662F\u4E00\u4E2A\u5B8C\u6574\u7684MVC\u6846\u67B6,\u6700\u591A\u53EF\u4EE5\u8BA4\u4E3A\u662FMVC\u4E2D\u7684V\uFF08View\uFF09,\u751A\u81F3React\u5E76\u4E0D\u975E\u5E38\u8BA4\u53EFMVC\u5F00\u53D1\u6A21\u5F0F\u3002</p><p>React \u4F7F\u7528Facebook\u4E13\u95E8\u4E3A\u5176\u5F00\u53D1\u7684\u4E00\u5957\u8BED\u6CD5\u7CD6--JSX\u3002</p><h3 id="react\u4F18\u7F3A\u70B9"><a class="header-anchor" href="#react\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> React\u4F18\u7F3A\u70B9</h3><p>\u4F18\u70B9\uFF1A</p><ul><li>\uFF081\uFF09\u7EC4\u4EF6\u5316\u5F00\u53D1</li><li>\uFF082\uFF09\u5F15\u5165\u865A\u62DFDOM,\u6027\u80FD\u597D,\u54CD\u5E94\u901F\u5EA6\u5FEB</li><li>\uFF083\uFF09JSX\u8BED\u6CD5\u7CD6</li><li>\uFF084\uFF09\u5355\u5411\u6570\u636E\u7ED1\u5B9A Data Flow</li><li>\uFF085\uFF09\u8DE8\u6D4F\u89C8\u5668\u517C\u5BB9</li><li>\uFF086\uFF09\u5B8C\u5584\u7684\u751F\u6001\u5708\u548C\u6D3B\u8DC3\u7684\u793E\u533A</li></ul><p>\u7F3A\u70B9\uFF1A</p><p>\u4E0D\u662F\u5B8C\u6574MVC\u6846\u67B6,\u4E0D\u9002\u7528\u4E8E\u590D\u6742\u7684\u5927\u578B\u5E94\u7528</p><h2 id="\u4E8C\u3001\u4EC0\u4E48\u662F\u865A\u62DFdom\u7ED3\u6784"><a class="header-anchor" href="#\u4E8C\u3001\u4EC0\u4E48\u662F\u865A\u62DFdom\u7ED3\u6784" aria-hidden="true">#</a> \u4E8C\u3001\u4EC0\u4E48\u662F\u865A\u62DFDOM\u7ED3\u6784</h2><p>\u76F8\u5F53\u4E8E\u662F\u4E00\u4E2A\u5BF9\u8C61 \u5F53\u89C6\u56FE\u6709\u66F4\u65B0\u7684\u65F6\u5019 \u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\uFF0C\u5E76\u4E0E\u65E7\u7684\u8FDB\u884C\u6BD4\u8F83 \u628A\u6709\u533A\u522B\u7684\u5730\u65B9\u8FDB\u884C\u66F4\u65B0 \u5176\u4ED6\u7684\u4E0D\u53D8 \u8FD9\u6837\u63D0\u9AD8\u4E86\u9AD8\u901F\u6E32\u67D3</p><h3 id="react\u4E2D\u7684diff\u7B97\u6CD5"><a class="header-anchor" href="#react\u4E2D\u7684diff\u7B97\u6CD5" aria-hidden="true">#</a> react\u4E2D\u7684diff\u7B97\u6CD5</h3><p>\u5F53\u4F7F\u7528React\u7684\u65F6\u5019\uFF0C\u5728\u67D0\u4E2A\u65F6\u95F4\u70B9 render() \u51FD\u6570\u521B\u5EFA\u4E86\u4E00\u68F5React\u5143\u7D20\u6811\uFF0C\u5728\u4E0B\u4E00\u4E2Astate\u6216\u8005props\u66F4\u65B0\u7684\u65F6\u5019\uFF0Crender() \u51FD\u6570\u5C06\u521B\u5EFA\u4E00\u68F5\u65B0\u7684React\u5143\u7D20\u6811\uFF0C React\u5C06\u5BF9\u6BD4\u8FD9\u4E24\u68F5\u6811\u7684\u4E0D\u540C\u4E4B\u5904\uFF0C\u8BA1\u7B97\u51FA\u5982\u4F55\u9AD8\u6548\u7684\u66F4\u65B0UI\uFF08\u53EA\u66F4\u65B0\u53D8\u5316\u7684\u5730\u65B9\uFF09</p><h2 id="\u8BED\u6CD5\u7CD6jsx"><a class="header-anchor" href="#\u8BED\u6CD5\u7CD6jsx" aria-hidden="true">#</a> \u8BED\u6CD5\u7CD6JSX</h2><blockquote><p>\u8BED\u6CD5\u7CD6\u53C8\u53EB\u505A\u7CD6\u8863\u8BED\u6CD5\u3002</p></blockquote><p>\u8BED\u6CD5\u7CD6\u662F\u6307\u8BA1\u7B97\u673A\u8BED\u8A00\u4E2D\u6DFB\u52A0\u7684\u67D0\u79CD\u8BED\u6CD5,\u8FD9\u79CD\u8BED\u6CD5\u5BF9\u8BED\u8A00\u7684\u529F\u80FD\u5E76\u6CA1\u6709\u5F71\u54CD,\u4F46\u662F\u66F4\u65B9\u4FBF\u7A0B\u5E8F\u5458\u4F7F\u7528\u3002</p><p>\u5B83\u4E3B\u8981\u7684\u76EE\u7684\u662F\u589E\u52A0\u7A0B\u5E8F\u7684\u53EF\u8BFB\u6027,\u4ECE\u800C\u51CF\u5C11\u7A0B\u5E8F\u4EE3\u7801\u9519\u5904\u7684\u673A\u4F1A\u3002</p><ul><li>\u8FD9\u4E2A\u8BED\u6CD5\u4E0D\u80FD\u76F4\u63A5\u88AB\u6D4F\u89C8\u5668\u6240\u89E3\u6790 \u5FC5\u987B\u501F\u52A9\u4E8Ebabel\u6587\u4EF6\u53BB\u89E3\u6790\uFF0C\u628Ajs\u548Chtml\u6DF7\u5408\u4F7F\u7528</li><li>\u5F53\u5B83\u9047\u89C1<code>&lt;&gt;</code>\u7684\u65F6\u5019 \u5C31\u81EA\u52A8\u89E3\u6790\u4E3Ahtml\u6807\u7B7E \u5982\u679C\u5B83\u9047\u89C1<code>{}</code>\u4F1A\u89E3\u6790\u6210js\u8BED\u6CD5</li></ul><h2 id="\u4E09\u3001\u5FEB\u901F\u5C1D\u8BD5jsx"><a class="header-anchor" href="#\u4E09\u3001\u5FEB\u901F\u5C1D\u8BD5jsx" aria-hidden="true">#</a> \u4E09\u3001\u5FEB\u901F\u5C1D\u8BD5JSX</h2><h3 id="\u5B98\u65B9\u63D0\u4F9B\u7684cdn\u5730\u5740"><a class="header-anchor" href="#\u5B98\u65B9\u63D0\u4F9B\u7684cdn\u5730\u5740" aria-hidden="true">#</a> \u5B98\u65B9\u63D0\u4F9B\u7684CDN\u5730\u5740</h3><div class="language-html"><pre><code><span class="token comment">&lt;!-- ... \u5176\u5B83 HTML ... --&gt;</span>

<span class="token comment">&lt;!-- \u52A0\u8F7D React\u3002--&gt;</span>
<span class="token comment">&lt;!-- \u6CE8\u610F: \u90E8\u7F72\u65F6\uFF0C\u5C06 &quot;development.js&quot; \u66FF\u6362\u4E3A &quot;production.min.js&quot;\u3002--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@16/umd/react.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@16/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u5EFA\u8BAE\u4F7F\u7528 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/babel-standalone@6.15.0/babel.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5F15\u5165\u987A\u5E8F\uFF1A\u5F15\u5165\u6838\u5FC3\u5E93 &gt;&gt; dom\u5E93 &gt;&gt; babel\u5E93</p><p>\u5982\u679C\u662F\u666E\u901A\u7684js\u8BED\u6CD5\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7701\u7565script\u6807\u7B7E\u7684\u7C7B\u578B\u5B9A\u4E49(<code>type=&#39;text/javascript&#39;</code>)\uFF0C\u4F46\u662F\u5728react\u4E2D\uFF0C\u6211\u4EEC\u5E94\u7528\u7684\u662Fjsx\u8BED\u6CD5\u7CD6\uFF0C\u8FD9\u4E2A\u8BED\u6CD5\u7CD6\u65E0\u6CD5\u76F4\u63A5\u89E3\u6790\uFF0C\u5FC5\u987B\u901A\u8FC7babel\u89E3\u6790\uFF0C\u6240\u4EE5\u6211\u4EEC\u7684\u7C7B\u578B\u4E0D\u80FD\u7701\u7565<code>text/babel</code>\uFF1B</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>babel<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u4E00\u4E2Ajsx\u7684html\u6587\u4EF6\u4F8B\u5B50"><a class="header-anchor" href="#\u4E00\u4E2Ajsx\u7684html\u6587\u4EF6\u4F8B\u5B50" aria-hidden="true">#</a> \u4E00\u4E2Ajsx\u7684html\u6587\u4EF6\u4F8B\u5B50</h3><div class="language-html"><pre><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>container<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react@16/umd/react.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/react-dom@16/umd/react-dom.development.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">crossorigin</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/babel-standalone@6.15.0/babel.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>text/babel<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token keyword">const</span> h <span class="token operator">=</span> React<span class="token punctuation">.</span>createElement
    <span class="token keyword">const</span> btn <span class="token operator">=</span> <span class="token operator">&lt;</span>button<span class="token operator">&gt;</span>hello<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>btn<span class="token punctuation">,</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#container&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u5728jsx\u8BED\u6CD5\u6CE8\u610F\u4E8B\u9879"><a class="header-anchor" href="#\u5728jsx\u8BED\u6CD5\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5728JSX\u8BED\u6CD5\u6CE8\u610F\u4E8B\u9879</h3><p>\u56E0\u4E3Afor\u548Cclass\u662F\u5173\u952E\u5B57\uFF0C\u56E0\u6B64\u9700\u8981\u4FEE\u6539\uFF1B</p><ol><li>\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u5143\u7D20\uFF1B</li><li>\u5FC5\u987B\u6709\u95ED\u5408\u6807\u7B7E\uFF0C\u5982\u679C\u662F\u5355\u6807\u7B7E\uFF0C\u9700\u8981\u81EA\u95ED\u5408\uFF08\u5E26/\u53F7\uFF09\uFF1B</li><li>\u4E0D\u80FD\u4F7F\u7528for\uFF0C\u9700\u8981\u4F7F\u7528<code>htmlFor</code>\uFF1B</li><li>\u4E0D\u80FD\u4F7F\u7528class\uFF0C\u9700\u8981\u4F7F\u7528<code>className</code>\uFF1B</li><li>\u5728input\u6846\u4E2D\uFF0C\u9ED8\u8BA4\u503C\u662F\u4F7F\u7528<code>defaultValue</code>\uFF1B</li><li>\u5728checkbox/radio\u65F6\uFF0C\u9ED8\u8BA4\u9009\u4E2D<code>defaultChecked</code>\uFF1B</li></ol><h3 id="\u7B80\u5355jsx\u8BED\u6CD5"><a class="header-anchor" href="#\u7B80\u5355jsx\u8BED\u6CD5" aria-hidden="true">#</a> \u7B80\u5355JSX\u8BED\u6CD5</h3><ol><li>\u9047\u89C1{}\u4F1A\u89E3\u6790\u6210js\uFF0C\u9047\u89C1&lt;&gt;\u4F1A\u89E3\u6790\u6210html\u6807\u7B7E\uFF1B</li><li>{}\u91CC\u9762\u4E0D\u80FD\u5199\u590D\u6742\u7684\u8BED\u53E5\uFF0C\u4F46\u662F\u652F\u6301\u4E09\u5143\u8FD0\u7B97\u7B26\uFF1B</li><li>\u5728jsx\u4E2D\u4F7F\u7528\u5B57\u7B26\u4E32\u63D2\u503C</li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>{img}</span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><ol start="4"><li>\u5728jsx\u4E2D\u5FAA\u73AF\u6570\u7EC4</li></ol><div class="language-jsx"><pre><code><span class="token keyword">let</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token keyword">let</span> ele <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token punctuation">{</span>arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span>index</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
</code></pre></div><p>\u5728jsx\u4E2D\u5EFA\u8BAE\u4F7F\u7528map\u65B9\u6CD5\u5FAA\u73AF\u6570\u7EC4\uFF0Cmap\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u6570\u7EC4\u6E32\u67D3\u5230\u9875\u9762\uFF0C\u5FAA\u73AF\u7684\u5143\u7D20\u5FC5\u987B\u6709key\u503C\uFF1B</p><h3 id="\u663E\u793A\u4E00\u4E2Abutton\u6309\u94AE"><a class="header-anchor" href="#\u663E\u793A\u4E00\u4E2Abutton\u6309\u94AE" aria-hidden="true">#</a> \u663E\u793A\u4E00\u4E2Abutton\u6309\u94AE</h3><p>react\u5C06createElement\u65B9\u6CD5\u66B4\u9732\u51FA\u6765\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u65B9\u6CD5\uFF1A</p><p><code>React.createElement(htmlName, props, content)</code></p><div class="language-jsx"><pre><code><span class="token keyword">const</span> e <span class="token operator">=</span> React<span class="token punctuation">.</span>createElement
<span class="token keyword">return</span> <span class="token function">e</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// or</span>
<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">hello</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="\u56DB\u3001react\u4E2D\u7684\u6837\u5F0F"><a class="header-anchor" href="#\u56DB\u3001react\u4E2D\u7684\u6837\u5F0F" aria-hidden="true">#</a> \u56DB\u3001React\u4E2D\u7684\u6837\u5F0F</h2><p>react\u4E2D\u7684\u6837\u5F0F\u4F18\u5148\u7EA7\uFF1Acss\u6587\u4EF6 --&gt; module.css\u6587\u4EF6 --&gt; scss\u6587\u4EF6</p><p>cssmodule\u6587\u4EF6\u5C06css\u6837\u5F0F\u6A21\u5757\u5316\uFF1A1.module.css\uFF1B</p><div class="language-css"><pre><code><span class="token selector">.img</span><span class="token punctuation">{</span>
   <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span> 
<span class="token punctuation">}</span>
<span class="token selector">.img2</span> <span class="token punctuation">{</span>
    // \u5F15\u5165\u4E0A\u9762\u7684\u7C7B\u540D<span class="token punctuation">;</span>
    <span class="token property">composes</span><span class="token punctuation">:</span> img<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u4F7F\u7528\u6A21\u5757\u5316css\uFF0C\u6E32\u67D3\u65F6\u7684class\u7C7B\u540D\u5C06\u662F\u5E26hash\u503C\u7684\uFF0C\u4E0E\u5176\u4ED6\u7684\u9694\u79BB\uFF0C\u5177\u6709\u552F\u4E00\u6027\uFF1B</p><div class="language-jsx"><pre><code><span class="token keyword">import</span> style <span class="token keyword">from</span> <span class="token string">&#39;./1.css&#39;</span>
<span class="token keyword">const</span> Div <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>style<span class="token punctuation">.</span>img<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u5168\u5C40css\u4F7F\u7528css\u6587\u4EF6\u6216\u8005scss\u6587\u4EF6\u5373\u53EF\uFF1B</p><h2 id="\u4E94\u3001key\u503C"><a class="header-anchor" href="#\u4E94\u3001key\u503C" aria-hidden="true">#</a> \u4E94\u3001key\u503C</h2><p>\u5FC5\u987B\u62FF\u552F\u4E00\u503C\u53BB\u4EE3\u66FF\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u7528\u6570\u7EC4\u8FD4\u56DE\u6765\u7684id\u53BB\u8D4B\u503C\uFF0C\u5982\u679C\u5B9E\u5728\u6CA1\u6709\uFF0C\u5C31\u7528index\u7D22\u5F15\uFF0C\u4F46\u662F\u7528\u7D22\u5F15\u6709\u53EF\u80FD\u4EA7\u751F\u8D1F\u9762\u5F71\u54CD\uFF0C\u7EC4\u4EF6\u6709\u53EF\u80FD\u62A5\u9519\uFF1B \u6CE8\u610F\uFF1A\u5343\u4E07\u4E0D\u8981\u4F7F\u7528<code>Math.Random()</code>\u53BB\u505Akey\u503C\uFF0C\u56E0\u4E3A<code>Math.Random</code>\u4F1A\u5BFC\u81F4\u9891\u7E41\u66F4\u65B0key\u503C\uFF0C\u4F1A\u65E0\u6CD5\u7F13\u5B58\u7EC4\u4EF6\uFF1B</p><h2 id="\u516D\u3001\u5176\u4ED6\u8BED\u6CD5"><a class="header-anchor" href="#\u516D\u3001\u5176\u4ED6\u8BED\u6CD5" aria-hidden="true">#</a> \u516D\u3001\u5176\u4ED6\u8BED\u6CD5</h2><h3 id="\u52A8\u6001style"><a class="header-anchor" href="#\u52A8\u6001style" aria-hidden="true">#</a> \u52A8\u6001Style</h3><ul><li><p>\u5728react\u4E2D\u4F7F\u7528\u52A8\u6001style\u6837\u5F0F\u65F6\uFF0C\u5FC5\u987B\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u6CD5\uFF0C</p></li><li><p>react\u4F1A\u81EA\u52A8\u6DFB\u52A0<code>px</code>\u540E\u7F00\uFF0C\u5176\u4ED6\u540E\u7F00\u9700\u8981\u6DFB\u52A0\u5B57\u7B26\u4E32\u7EC4\u6210\uFF1B</p></li><li><p>\u7531\u4E8E\u4F7F\u7528\u53D8\u91CF\u9700\u8981\u5BF9\u8C61\u5305\u88F9\uFF0Cstyle\u7684\u503C\u4E5F\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF1B</p></li></ul><div class="language-jsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>marginRigth<span class="token operator">:</span> btnwidth<span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>display<span class="token operator">:</span> <span class="token punctuation">(</span>index<span class="token operator">===</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>currentIndex<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;block&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token comment">//or </span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>toggle <span class="token operator">?</span> 
  <span class="token punctuation">{</span> background<span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> backgroundColor<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span> <span class="token operator">:</span> 
  <span class="token punctuation">{</span> backgroundColor<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u52A8\u6001class"><a class="header-anchor" href="#\u52A8\u6001class" aria-hidden="true">#</a> \u52A8\u6001class</h3><p><code>className</code> \u6307\u5B9Acss\u7684class\uFF1B</p><div class="language-jsx"><pre><code><span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">icon-font </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>flag <span class="token operator">?</span> <span class="token string">&#39;iconfont&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span>
</code></pre></div><h3 id="\u6E32\u67D3html\u6807\u7B7E"><a class="header-anchor" href="#\u6E32\u67D3html\u6807\u7B7E" aria-hidden="true">#</a> \u6E32\u67D3html\u6807\u7B7E</h3><p><code>dangerouslySetInnerHTML</code></p><p>\u4E3A\u4E86\u9632\u6B62\u8DE8\u7AD9\u811A\u672C\uFF08XSS\uFF09\u7684\u653B\u51FB\uFF0C\u66FF\u6362innerHTML\uFF0C\u4F7F\u7528\u53D8\u91CF\uFF0C\u53EF\u4EE5\u89E3\u6790html\u6807\u7B7E\u5185\u5BB9</p><div class="language-jsx"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>__html<span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>htmlContent<span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u6761\u4EF6\u8BED\u53E5"><a class="header-anchor" href="#\u6761\u4EF6\u8BED\u53E5" aria-hidden="true">#</a> \u6761\u4EF6\u8BED\u53E5</h3><p>\u5728react\u4E2D\u7684\u6807\u7B7E\u90E8\u5206\u4E0D\u80FD\u76F4\u63A5\u4F7F\u7528if\u8BED\u53E5\uFF0C\u4F46\u662F\u53EF\u4EE5\u4F7F\u7528\u4E09\u76EE\u8FD0\u7B97\u7B26</p><div class="language-jsx"><pre><code><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>addarflag <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Skeleton</span></span> <span class="token attr-name">active</span> <span class="token punctuation">/&gt;</span></span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>  <span class="token comment">// \u4E09\u76EE\u5224\u65AD\u653E\u6807\u7B7E</span>
style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>display<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>flag <span class="token operator">?</span> <span class="token string">&#39;block&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;none&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>  <span class="token comment">// \u4E09\u76EE\u663E\u793A\u9690\u85CF\u6807\u7B7E</span>
</code></pre></div>__VP_STATIC_END__`,68),o=[e];function c(l,u,i,k,r,d){return n(),s("div",null,o)}var m=a(p,[["render",c]]);export{h as __pageData,m as default};
