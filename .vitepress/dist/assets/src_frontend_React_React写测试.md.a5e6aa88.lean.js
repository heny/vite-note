import{_ as n,c as a,o as s,d as t}from"./app.310fb107.js";const m='{"title":"React\u5199\u6D4B\u8BD5\u7528\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"\u5E38\u7528API","slug":"\u5E38\u7528api"},{"level":3,"title":"render\u51FD\u6570\u8FD4\u56DE\u7684api","slug":"render\u51FD\u6570\u8FD4\u56DE\u7684api"},{"level":3,"title":"expect API","slug":"expect-api"},{"level":2,"title":"testing-library/react\u5E93\u5E38\u7528\u7684\u65B9\u6CD5","slug":"testing-library-react\u5E93\u5E38\u7528\u7684\u65B9\u6CD5"}],"relativePath":"src/frontend/React/React\u5199\u6D4B\u8BD5.md","lastUpdated":1615699077000}',e={},p=t(`__VP_STATIC_START__<h1 id="react\u5199\u6D4B\u8BD5\u7528\u4F8B"><a class="header-anchor" href="#react\u5199\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> React\u5199\u6D4B\u8BD5\u7528\u4F8B</h1><p>\u5728package.json\u6587\u4EF6\u91CC\uFF0C\u67E5\u770Breact-script \u811A\u672C\uFF0C\u57283.3\u4E4B\u524D\u7684\u7248\u672C\u90FD\u9700\u8981\u624B\u52A8\u5B89\u88C5\u6D4B\u8BD5\u5E93\uFF0C\u4E0B\u9762\u662F\u624B\u52A8\u5B89\u88C5</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @testing-library/react
</code></pre></div><p>jest\u5B98\u7F51\uFF1A<a href="https://jestjs.io/docs/zh-Hans/api" target="_blank" rel="noopener noreferrer">https://jestjs.io/docs/zh-Hans/api</a></p><p>react\u6D4B\u8BD5\u5E93\uFF1A<a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank" rel="noopener noreferrer">https://testing-library.com/docs/react-testing-library/intro</a></p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>fireEvent<span class="token punctuation">,</span> render<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span>
<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span>

<span class="token keyword">const</span> defualtProps <span class="token operator">=</span> <span class="token punctuation">{</span>
    onClick<span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// \u5047\u7684\u4E8B\u4EF6</span>
<span class="token punctuation">}</span>

<span class="token comment">// describe\u4EE3\u8868\u4E00\u7EC4\u6D4B\u8BD5\u7528\u4F8B</span>
<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;test Button component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// it\u662Ftest\u7684\u7B80\u5199\uFF0C\u4E00\u4E2Ait\u8868\u793A\u4E00\u4E2A\u7528\u4F8B</span>
    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;should render the correct default button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    	<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token operator">...</span>defaultProps<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Nice</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>
        <span class="token comment">// \u901A\u8FC7\u67E5\u627ENice\u627E\u5230\u8282\u70B9</span>
        <span class="token keyword">const</span> element <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Nice&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u9A8C\u8BC1\u662F\u5426\u5728\u6587\u6863\u4E2D</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// \u9A8C\u8BC1\u662F\u5426\u662Fbutton\u6807\u7B7E</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;BUTTON&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u6D4B\u8BD5\u662F\u5426\u5305\u542B\u7C7B\u540D</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveClass</span><span class="token punctuation">(</span><span class="token string">&#39;btn btn-default&#39;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u70B9\u51FB\u8BE5\u8282\u70B9</span>
        fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>
        <span class="token comment">// \u786E\u4FDD\u51FD\u6570\u88AB\u8C03\u7528</span>
        <span class="token function">expect</span><span class="token punctuation">(</span>defaultProps<span class="token punctuation">.</span>onClick<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre></div><h2 id="\u5E38\u7528api"><a class="header-anchor" href="#\u5E38\u7528api" aria-hidden="true">#</a> \u5E38\u7528API</h2><h3 id="render\u51FD\u6570\u8FD4\u56DE\u7684api"><a class="header-anchor" href="#render\u51FD\u6570\u8FD4\u56DE\u7684api" aria-hidden="true">#</a> render\u51FD\u6570\u8FD4\u56DE\u7684api</h3><ul><li><code>getByText</code> \u901A\u8FC7\u5185\u5BB9\u67E5\u627E\u8282\u70B9</li><li><code>queryByText</code> \u4E0Eget\u4E0D\u540C\u7684\u662F\u53EF\u80FD\u8FD4\u56DEundefined</li><li><code>getByTestId</code> \u901A\u8FC7\u8282\u70B9\u7ED1\u5B9A\u7684data-testid\u67E5\u627E\u5BF9\u5E94\u7684\u8282\u70B9</li></ul><h3 id="expect-api"><a class="header-anchor" href="#expect-api" aria-hidden="true">#</a> expect API</h3><ul><li><code>toBeInTheDocument</code> \u9A8C\u8BC1\u662F\u5426\u5728\u6587\u6863\u4E2D</li><li><code>toHaveClass</code> \u662F\u5426\u5305\u542B\u7C7B\u540D</li><li><code>toBeVisible</code> \u662F\u5426\u5B58\u5728</li><li><code>toHaveBeenCalled</code> \u4E8B\u4EF6\u662F\u5426\u88AB\u8C03\u7528</li><li><code>toHaveBeenCalledWith</code> \u9A8C\u8BC1\u8C03\u7528\u65F6\u4F20\u5165\u7684\u53C2\u6570</li><li><code>not</code> \u5C06\u540E\u9762\u7684\u94FE\u5F0F\u8C03\u7528\u4FEE\u6539\u4E3A\u4E0E\u4E4B\u76F8\u53CD</li></ul><h2 id="testing-library-react\u5E93\u5E38\u7528\u7684\u65B9\u6CD5"><a class="header-anchor" href="#testing-library-react\u5E93\u5E38\u7528\u7684\u65B9\u6CD5" aria-hidden="true">#</a> testing-library/react\u5E93\u5E38\u7528\u7684\u65B9\u6CD5</h2><ul><li><code>fireEvent</code> \u6A21\u62DF\u4E8B\u4EF6</li><li><code>render</code> \u6E32\u67D3\u8282\u70B9</li><li><code>cleanup</code> \u6E05\u9664\u524D\u9762\u7684\u8282\u70B9</li></ul>__VP_STATIC_END__`,14),o=[p];function c(l,i,r,u,k,d){return s(),a("div",null,o)}var f=n(e,[["render",c]]);export{m as __pageData,f as default};
