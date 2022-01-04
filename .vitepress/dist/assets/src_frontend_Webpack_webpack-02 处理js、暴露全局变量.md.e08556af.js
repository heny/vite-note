import{_ as n,c as s,o as a,d as p}from"./app.310fb107.js";const m='{"title":"Webpack-02 \u5904\u7406js\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u5904\u7406js","slug":"\u4E00\u3001\u5904\u7406js"},{"level":2,"title":"\u4E8C\u3001\u5B89\u88C5eslint","slug":"\u4E8C\u3001\u5B89\u88C5eslint"},{"level":2,"title":"\u4E09\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF","slug":"\u4E09\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF"},{"level":2,"title":"\u56DB\u3001\u6253\u5305\u56FE\u7247","slug":"\u56DB\u3001\u6253\u5305\u56FE\u7247"},{"level":2,"title":"\u4E94\u3001\u6253\u5305\u6587\u4EF6\u5206\u7C7B","slug":"\u4E94\u3001\u6253\u5305\u6587\u4EF6\u5206\u7C7B"}],"relativePath":"src/frontend/Webpack/webpack-02 \u5904\u7406js\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF.md","lastUpdated":1622040022000}',e={},t=p(`<h1 id="webpack-02-\u5904\u7406js\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF"><a class="header-anchor" href="#webpack-02-\u5904\u7406js\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> Webpack-02 \u5904\u7406js\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF</h1><h2 id="\u4E00\u3001\u5904\u7406js"><a class="header-anchor" href="#\u4E00\u3001\u5904\u7406js" aria-hidden="true">#</a> \u4E00\u3001\u5904\u7406js</h2><ol><li>\u5B89\u88C5<code>babel</code>\u3001<code>babel-loader</code></li></ol><p><code>@babel/core</code> // babel\u6838\u5FC3\u6A21\u5757\uFF0C</p><p><code>@babel/preset-env</code> // \u8F6C\u5316\u6A21\u5757,\u8F6C\u5316\u6210\u6807\u51C6\u3001js\u8BED\u6CD5</p><div class="language-bash"><pre><code><span class="token function">yarn</span> <span class="token function">add</span> babel-loader @babel/core @babel/preset-env -D
</code></pre></div><ol start="2"><li>\u914D\u7F6E</li></ol><div class="language-js"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6620\u5C04</span>
                presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ol start="3"><li>es6\u7C7B\u5199\u6CD5\u6253\u5305\uFF0Cbabel\u5B98\u7F51\u641C\u7D22decorators\u53EF\u4EE5\u67E5\u770B\u5728\u7EBF\u6559\u7A0B</li></ol><p>yarn add @babel/plugin-proposal-class-properties -D</p><div class="language-js"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
            options<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6620\u5C04</span>
                presets<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token comment">// \u914D\u7F6E\u5C0F\u63D2\u4EF6</span>
                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token string">&#39;@babel/plugin-proposal-class-properties&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        include<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment">// \u4EC5\u67E5\u627Esrc</span>
        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>  <span class="token comment">// \u6392\u9664node_modules</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ol start="4"><li>\u7C7B\u7684\u88C5\u9970\u5668</li></ol><p>\u5B89\u88C5\uFF1Ayarn add @babel/plugin-proposal-decorators -D</p><div class="language-js"><pre><code><span class="token punctuation">{</span> <span class="token string">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> 
    <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-decorators&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;legacy&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span> 
    <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-proposal-class-properties&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">&quot;loose&quot;</span> <span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> 
<span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre></div><ol start="5"><li>\u8282\u7701\u4EE3\u7801\u5927\u5C0F\uFF0C\u62BD\u79BB\u516C\u5171\u7684\u4EE3\u7801\uFF0C\u4F7F\u7528generator\u8BED\u6CD5</li></ol><p>\uFF081\uFF09<code>yarn add @babel/plugin-transform-runtime -D</code>\uFF0C transform-runtime\u53EF\u4EE5\u62BD\u79BBwebpack\u6253\u5305\u516C\u5171\u7684\u4EE3\u7801\uFF1B</p><p>yarn add @babel/runtime -S\uFF0Cruntime\u9488\u5BF9\u8FD0\u884C\u65F6\u7684\uFF0C\u9700\u8981\u88C5\u5728\u751F\u4EA7\u4F9D\u8D56</p><div class="language-json"><pre><code><span class="token punctuation">{</span> <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@babel/plugin-transform-runtime&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>
</code></pre></div><p>\uFF082\uFF09yarn add @babel/polyfill , \u89E3\u6790es7\u8BED\u6CD5\uFF0Cincludes\u5728\u6253\u5305\u4E4B\u540E\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2AArray\u7684\u539F\u578B\u4E0A\uFF1B</p><div class="language-js"><pre><code><span class="token function">require</span><span class="token punctuation">(</span>&#39;@babel<span class="token operator">/</span>polyfill<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token string">&#39;aaa&#39;</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E8C\u3001\u5B89\u88C5eslint"><a class="header-anchor" href="#\u4E8C\u3001\u5B89\u88C5eslint" aria-hidden="true">#</a> \u4E8C\u3001\u5B89\u88C5eslint</h2><p>\uFF081\uFF09yarn add eslint eslint-loader -D</p><p>\uFF082\uFF09\u4FEE\u6539rules</p><div class="language-js"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token comment">// loader\u89C4\u5219\u53EF\u4EE5\u5199\u591A\u5C11, \u4E0Ebabel\u5F97\u5206\u5F00\u4E00\u4E2A\u5BF9\u8C61</span>
        test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        use<span class="token operator">:</span> <span class="token punctuation">{</span>
            loader<span class="token operator">:</span> <span class="token string">&#39;eslint-loader&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        enforce<span class="token operator">:</span> <span class="token string">&#39;pre&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5F3A\u5236\u5728\u5176\u4ED6\u7684loader\u4E4B\u524D\u6267\u884C</span>
        exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span>   <span class="token comment">// \u6240\u6709\u89E3\u6790js\u90FD\u4F1A\u627Enode_modules</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>\uFF083\uFF09\u5230eslint\u5B98\u7F51\u4E0B\u8F7D<code>.eslintrc.json</code>\u6587\u4EF6\u653E\u5230\u9879\u76EE\u6839\u76EE\u5F55\uFF1B</p><h2 id="\u4E09\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF"><a class="header-anchor" href="#\u4E09\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u4E09\u3001\u66B4\u9732\u5168\u5C40\u53D8\u91CF</h2><p>loader\u7C7B\u578B\uFF1A</p><pre><code>pre \u524D\u9762\u6267\u884C\u7684loader\uFF0C

normal \u666E\u901Aloader \uFF0C

\u5185\u8054loader\uFF0C

\u540E\u7F6Epostloader
</code></pre><p>yarn add jquery</p><p>yarn add expose-loader -D</p><div class="language-js"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    test<span class="token operator">:</span> require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;jquery&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token string">&#39;expose-loader?$&#39;</span> <span class="token comment">//\u5C06jquery\u4F5C\u4E3A$\u7B26\u6302\u8F7D\u5230\u5168\u5C40</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><p>\uFF082\uFF09\u5728\u6BCF\u4E2A\u6A21\u5757\u90FD\u6CE8\u5165jquery\uFF0C\u5728webpack.config.js\u4E0B\u9762\u7684plugins\u5199\u5165</p><div class="language-js"><pre><code><span class="token keyword">let</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProvidePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token string">&#39;$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;jquery&#39;</span> <span class="token comment">//\u5C06jquery\u4F5C\u4E3A$\u7B26\u66B4\u9732\u51FA\u53BB, \u4E4B\u540E\u5C31\u53EF\u4EE5\u5728\u9879\u76EE\u4E2D\u4F7F\u7528$\u7B26\u4E86</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    externals<span class="token operator">:</span> <span class="token punctuation">{</span>
        jquery<span class="token operator">:</span> <span class="token string">&#39;$&#39;</span> <span class="token comment">// \u52A0\u4E0A\u4E4B\u540E\u5728\u9879\u76EE\u4E2D\u5373\u4F7F\u5F15\u5165import jquery\u90FD\u4E0D\u4F1A\u7EE7\u7EED\u88AB\u6253\u5305\u4E86</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\uFF083\uFF09\u9664\u4E86\u4E0A\u8FF0\u65B9\u6CD5\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528cdn\u653E\u5728html\u6587\u4EF6\u91CC\u9762</p><h2 id="\u56DB\u3001\u6253\u5305\u56FE\u7247"><a class="header-anchor" href="#\u56DB\u3001\u6253\u5305\u56FE\u7247" aria-hidden="true">#</a> \u56DB\u3001\u6253\u5305\u56FE\u7247</h2><ol><li>\u89E3\u6790js\u7684img</li></ol><p>\u5B89\u88C5yarn add file-loader -D</p><p>\u9ED8\u8BA4\u4F1A\u4FDD\u5B58\u56FE\u7247\u5230build\u76EE\u5F55\u4E0B\uFF0C\u56FE\u7247\u5FC5\u987B\u4F7F\u7528require\u6216import\u5BFC\u5165\u624D\u4F1A\u88AB\u6253\u5305\uFF0C\u5426\u5219\u4F1A\u9ED8\u8BA4\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u5F53\u4F7F\u7528background-img\u4E0D\u9700\u8981require\uFF0C\u56E0\u4E3Acss-loader\u4F1A\u81EA\u5DF1\u8F6C\u5316require\uFF1B</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        rules<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
                use<span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u89E3\u6790html\u6807\u7B7E\u7684img</li></ol><p>\u5B89\u88C5\uFF1Ayarn add html-withimg-loader -D</p><div class="language-js"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.html$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    use<span class="token operator">:</span> <span class="token string">&#39;html-withimg-loader&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><ol start="3"><li>\u5C06\u56FE\u7247\u8F6C\u5316base64\u5F15\u5165</li></ol><p>\u5B89\u88C5 yarn add url-loader -D</p><p>\u5F53\u8F6C\u6362base64\u4E4B\u540E\u5C31\u4E0D\u4F1A\u52A0\u8F7Dhttp\u7684\u8BF7\u6C42\u4E86\uFF0C\u4F46\u6587\u4EF6\u4F1A\u6BD4\u539F\u6587\u4EF6\u5927\u4E09\u5206\u4E4B\u4E00</p><div class="language-js"><pre><code>rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// \u505A\u9650\u5236\uFF1A\u5F53\u5C0F\u4E8E\u591A\u5C11k\u65F6\u4F7F\u7528base64</span>
    use<span class="token operator">:</span> <span class="token punctuation">{</span>
        loader<span class="token operator">:</span> <span class="token string">&#39;url-loader&#39;</span><span class="token punctuation">,</span>
        options<span class="token operator">:</span> <span class="token punctuation">{</span>
            limit<span class="token operator">:</span> <span class="token number">200</span><span class="token operator">*</span><span class="token number">1024</span><span class="token punctuation">,</span>    <span class="token comment">//\u5B57\u8282\u5355\u4F4D \u5F53\u5C0F\u4E8E200k\u5219\u8F6C\u5316base64,</span>
            outputPath<span class="token operator">:</span> <span class="token string">&#39;/img/&#39;</span><span class="token punctuation">,</span>  <span class="token comment">// \u5728\u6253\u5305\u540E\u5C06\u56FE\u7247\u8F93\u51FA\u5230img\u76EE\u5F55\u4E0B;</span>
            fallback<span class="token operator">:</span> <span class="token string">&#39;file-loader&#39;</span> <span class="token comment">// \u5F53\u8D85\u8FC7200k\u5219\u4F7F\u7528file-loader\u5904\u7406</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre></div><ol start="4"><li>\u56FE\u7247\u4F18\u5316</li></ol><p>\u4F7F\u7528imagemin-webpack-plugin\u53EF\u4EE5\u538B\u7F29\u56FE\u7247</p><p>\u4F7F\u7528webpack-spritesmith \u63D2\u4EF6\u5236\u4F5C\u96EA\u78A7\u56FE</p><h2 id="\u4E94\u3001\u6253\u5305\u6587\u4EF6\u5206\u7C7B"><a class="header-anchor" href="#\u4E94\u3001\u6253\u5305\u6587\u4EF6\u5206\u7C7B" aria-hidden="true">#</a> \u4E94\u3001\u6253\u5305\u6587\u4EF6\u5206\u7C7B</h2><ol><li>\u5728loader\u91CC\u9762\u914D\u7F6E\uFF0C\u5728\u8F93\u51FA\u7684\u6587\u4EF6\u540D\u53EF\u4EE5\u76F4\u63A5\u52A0\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u5982\uFF1A&#39;css/1.css&#39;\uFF0C</li><li>\u7ED9\u6240\u6709\u7684css\u6216img\u6DFB\u52A0\u7EDF\u4E00\u7684\u5F15\u5165\u5730\u5740</li></ol><div class="language-js"><pre><code>output<span class="token operator">:</span> <span class="token punctuation">{</span>
    filename<span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    publicPath<span class="token operator">:</span> <span class="token string">&#39;http://baidu.com&#39;</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="3"><li>\u7ED9\u5355\u72EC\u7684\u6587\u4EF6\u6DFB\u52A0\u7EDF\u4E00\u7684\u5F15\u5165\u5730\u5740\uFF0C</li></ol><p>\u5728\u5355\u72EC\u7684loader\u91CC\u9762\u6DFB\u52A0publicPath\u5373\u53EF\uFF1B</p>`,54),o=[t];function c(l,r,u,i,k,d){return a(),s("div",null,o)}var b=n(e,[["render",c]]);export{m as __pageData,b as default};
