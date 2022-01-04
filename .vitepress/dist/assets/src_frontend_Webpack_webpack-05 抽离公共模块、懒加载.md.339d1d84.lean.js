import{_ as n,c as s,o as a,d as p}from"./app.310fb107.js";const _='{"title":"Webpack-05 \u62BD\u79BB\u516C\u5171\u6A21\u5757\u3001\u61D2\u52A0\u8F7D","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u62BD\u79BB\u516C\u5171\u6A21\u5757","slug":"\u4E00\u3001\u62BD\u79BB\u516C\u5171\u6A21\u5757"},{"level":2,"title":"\u4E8C\u3001\u61D2\u52A0\u8F7D","slug":"\u4E8C\u3001\u61D2\u52A0\u8F7D"}],"relativePath":"src/frontend/Webpack/webpack-05 \u62BD\u79BB\u516C\u5171\u6A21\u5757\u3001\u61D2\u52A0\u8F7D.md","lastUpdated":1628830740589}',t={},o=p(`__VP_STATIC_START__<h1 id="webpack-05-\u62BD\u79BB\u516C\u5171\u6A21\u5757\u3001\u61D2\u52A0\u8F7D"><a class="header-anchor" href="#webpack-05-\u62BD\u79BB\u516C\u5171\u6A21\u5757\u3001\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> Webpack-05 \u62BD\u79BB\u516C\u5171\u6A21\u5757\u3001\u61D2\u52A0\u8F7D</h1><h2 id="\u4E00\u3001\u62BD\u79BB\u516C\u5171\u6A21\u5757"><a class="header-anchor" href="#\u4E00\u3001\u62BD\u79BB\u516C\u5171\u6A21\u5757" aria-hidden="true">#</a> \u4E00\u3001\u62BD\u79BB\u516C\u5171\u6A21\u5757</h2><p>\u5982\u679Ca.js\u548Cb.js\u662F\u516C\u5171\u7684\u6A21\u5757\uFF0C\u5728index.js\u548Cother.js\u6587\u4EF6\u91CC\u9762\u90FD\u5F15\u5165\u4E86\uFF0C\u6253\u5305\u65F6\u5219\u662F\u6253\u5305\u4E24\u4EFD\uFF0C\u56E0\u6B64\u53EF\u4EE5\u5C06a.js\u548Cb.js\u62BD\u79BB\u51FA\u6765\uFF0C\u53EA\u6253\u5305\u4E00\u4EFD</p><ol><li>\u914D\u7F6Eoptimization</li></ol><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
        splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u5206\u5272\u4EE3\u7801\u5757</span>
            cacheGroups<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u7F13\u5B58\u7EC4</span>
                common<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u516C\u5171\u7684\u6A21\u5757</span>
                    chunks<span class="token operator">:</span> <span class="token string">&#39;initial&#39;</span><span class="token punctuation">,</span>
                    minSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// \u5927\u4E8E0\u5B57\u8282\u7684\u5C31\u62BD\u79BB</span>
                    minChunks<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u7528\u4E24\u6B21\u4E00\u5B9A\u62BD\u79BB</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                vendor<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// \u62BD\u79BB\u7B2C\u4E09\u65B9</span>
                    priority<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token comment">// \u6743\u91CD,\u5148\u6267\u884C\u62BD\u79BB\u7B2C\u4E09\u65B9, \u518D\u62BD\u79BB\u524D\u4E00\u4E2A</span>
                    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u5C06node_modules\u62BD\u79BB</span>
                    chunks<span class="token operator">:</span> <span class="token string">&#39;initial&#39;</span><span class="token punctuation">,</span>
                    minSize<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// \u5927\u4E8E0\u5B57\u8282\u7684\u5C31\u62BD\u79BB</span>
                    minChunks<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token comment">// \u5F15\u7528\u4E24\u6B21\u4E00\u5B9A\u62BD\u79BB</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E8C\u3001\u61D2\u52A0\u8F7D"><a class="header-anchor" href="#\u4E8C\u3001\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u4E8C\u3001\u61D2\u52A0\u8F7D</h2><p>\u573A\u666F\uFF1A\u6BD4\u5982\u70B9\u51FB\u4E00\u4E2A\u6309\u94AE\u4E4B\u540E\u52A0\u8F7D\u4E00\u4E2Ajs\u6587\u4EF6</p><p>\u4F7F\u7528webpack\u5185\u7F6E\u7684import\u8BED\u6CD5\uFF0C\u9ED8\u8BA4\u4F1A\u8FD4\u56DE\u4E00\u4E2Apromise\uFF0C</p><div class="language-js"><pre><code><span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
btn<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./a.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>default<span class="token punctuation">)</span> <span class="token comment">// \u653E\u5230default\u5C5E\u6027\u91CC\u9762\u7684</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5982\u679C\u6253\u5305\u5931\u8D25\u5219\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u63D2\u4EF6\uFF0C</p><p>\u5B89\u88C5\uFF1Ayarn add @babel/plugin-syntax-dynamic-import</p><div class="language-js"><pre><code><span class="token comment">// \u653E\u5230\u89E3\u6790js\u7684\u4E0B\u9762</span>
<span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
            presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
            plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/plugin-syntax-dynamic-import&#39;</span><span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,12),e=[o];function c(l,u,i,k,r,d){return a(),s("div",null,e)}var g=n(t,[["render",c]]);export{_ as __pageData,g as default};
