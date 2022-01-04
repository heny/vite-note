import{_ as s,c as n,o as a,d as t}from"./app.310fb107.js";const h='{"title":"ts-01 \u5F00\u53D1\u73AF\u5883\u642D\u5EFA","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528TS","slug":"\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528ts"},{"level":2,"title":"TS\u5927\u7EB2","slug":"ts\u5927\u7EB2"},{"level":2,"title":"Typescript\u4E0EJavascript\u7684\u533A\u522B","slug":"typescript\u4E0Ejavascript\u7684\u533A\u522B"},{"level":2,"title":"\u5F00\u53D1\u73AF\u5883\u642D\u5EFA","slug":"\u5F00\u53D1\u73AF\u5883\u642D\u5EFA"},{"level":2,"title":"\u642D\u5EFA\u73AF\u5883","slug":"\u642D\u5EFA\u73AF\u5883"},{"level":3,"title":"\u5168\u5C40\u5B89\u88C5typescript","slug":"\u5168\u5C40\u5B89\u88C5typescript"},{"level":3,"title":"\u5B89\u88C5webpack\u6253\u5305","slug":"\u5B89\u88C5webpack\u6253\u5305"},{"level":3,"title":"\u914D\u7F6Ewebpack","slug":"\u914D\u7F6Ewebpack"},{"level":3,"title":"\u914D\u7F6Epackage.json","slug":"\u914D\u7F6Epackage-json"}],"relativePath":"src/frontend/Typescript/ts\u5F00\u53D1\u73AF\u5883\u642D\u5EFA.md","lastUpdated":1615699077000}',e={},p=t(`__VP_STATIC_START__<h1 id="ts-01-\u5F00\u53D1\u73AF\u5883\u642D\u5EFA"><a class="header-anchor" href="#ts-01-\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> ts-01 \u5F00\u53D1\u73AF\u5883\u642D\u5EFA</h1><h2 id="\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528ts"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528ts" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528TS</h2><ol><li>\u7EF4\u62A4\u9879\u76EE\u65F6\uFF0C\u4F60\u4F1A\u53D1\u73B0ts\u975E\u5E38\u7684\u65B9\u4FBF \u6BD4\u5982\uFF1A\u540E\u7AEF\u4FEE\u6539\u4E86\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u6B64\u65F6\u524D\u7AEF\u4E5F\u9700\u8981\u66F4\u6539\uFF0C\u4F46\u662F\u7531\u4E8E\u4E0D\u77E5\u9053\u54EA\u4E9B\u5730\u65B9\u7528\u5230\u4E86\u8BE5\u5B57\u6BB5\uFF0C\u8FD9\u65F6\u5C31\u4F1A\u51FA\u95EE\u9898\u4E86\uFF1B \u5982\u679C\u4F60\u7684\u9879\u76EE\u662F\u4F7F\u7528\u4E86ts\uFF0C\u90A3\u4E48\u4F60\u53EA\u9700\u8981\u4FEE\u6539interface\u5B9A\u4E49\u7684\u7C7B\u578B\u5B57\u6BB5\uFF0C\u6B64\u65F6\u6240\u6709\u53D6\u8BE5\u503C\u7684\u5730\u65B9\u90FD\u4F1A\u62A5\u9519\u4E86\uFF0C\u6B64\u65F6\u518D\u53BB\u4FEE\u6539\u5373\u53EF\uFF1B</li></ol><h2 id="ts\u5927\u7EB2"><a class="header-anchor" href="#ts\u5927\u7EB2" aria-hidden="true">#</a> TS\u5927\u7EB2</h2><p><img src="https://notecdn.heny.vip/images/image-20200602223954793.png" alt="image-20200602223954793"></p><h2 id="typescript\u4E0Ejavascript\u7684\u533A\u522B"><a class="header-anchor" href="#typescript\u4E0Ejavascript\u7684\u533A\u522B" aria-hidden="true">#</a> Typescript\u4E0EJavascript\u7684\u533A\u522B</h2><table><thead><tr><th style="text-align:center;">TypeScript</th><th style="text-align:center;">JavaScript</th></tr></thead><tbody><tr><td style="text-align:center;">JavaScript \u7684\u8D85\u96C6\u7528\u4E8E\u89E3\u51B3\u5927\u578B\u9879\u76EE\u7684\u4EE3\u7801\u590D\u6742\u6027</td><td style="text-align:center;">\u4E00\u79CD\u811A\u672C\u8BED\u8A00\uFF0C\u7528\u4E8E\u521B\u5EFA\u52A8\u6001\u7F51\u9875\u3002</td></tr><tr><td style="text-align:center;">\u53EF\u4EE5\u5728\u7F16\u8BD1\u671F\u95F4\u53D1\u73B0\u5E76\u7EA0\u6B63\u9519\u8BEF</td><td style="text-align:center;">\u4F5C\u4E3A\u4E00\u79CD\u89E3\u91CA\u578B\u8BED\u8A00\uFF0C\u53EA\u80FD\u5728\u8FD0\u884C\u65F6\u53D1\u73B0\u9519\u8BEF</td></tr><tr><td style="text-align:center;">\u5F3A\u7C7B\u578B\uFF0C\u652F\u6301\u9759\u6001\u548C\u52A8\u6001\u7C7B\u578B</td><td style="text-align:center;">\u5F31\u7C7B\u578B\uFF0C\u6CA1\u6709\u9759\u6001\u7C7B\u578B\u9009\u9879</td></tr><tr><td style="text-align:center;">\u6700\u7EC8\u88AB\u7F16\u8BD1\u6210 JavaScript \u4EE3\u7801\uFF0C\u4F7F\u6D4F\u89C8\u5668\u53EF\u4EE5\u7406\u89E3</td><td style="text-align:center;">\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u4F7F\u7528</td></tr><tr><td style="text-align:center;">\u652F\u6301\u6A21\u5757\u3001\u6CDB\u578B\u548C\u63A5\u53E3</td><td style="text-align:center;">\u4E0D\u652F\u6301\u6A21\u5757\uFF0C\u6CDB\u578B\u6216\u63A5\u53E3</td></tr><tr><td style="text-align:center;">\u652F\u6301 ES3\uFF0CES4\uFF0CES5 \u548C ES6 \u7B49</td><td style="text-align:center;">\u4E0D\u652F\u6301\u7F16\u8BD1\u5176\u4ED6 ES3\uFF0CES4\uFF0CES5 \u6216 ES6 \u529F\u80FD</td></tr><tr><td style="text-align:center;">\u793E\u533A\u7684\u652F\u6301\u4ECD\u5728\u589E\u957F\uFF0C\u800C\u4E14\u8FD8\u4E0D\u662F\u5F88\u5927</td><td style="text-align:center;">\u5927\u91CF\u7684\u793E\u533A\u652F\u6301\u4EE5\u53CA\u5927\u91CF\u6587\u6863\u548C\u89E3\u51B3\u95EE\u9898\u7684\u652F\u6301</td></tr></tbody></table><h2 id="\u5F00\u53D1\u73AF\u5883\u642D\u5EFA"><a class="header-anchor" href="#\u5F00\u53D1\u73AF\u5883\u642D\u5EFA" aria-hidden="true">#</a> \u5F00\u53D1\u73AF\u5883\u642D\u5EFA</h2><p>ts\u5728\u7EBF\u7F16\u8F91\u5668\uFF1A<a href="https://www.typescriptlang.org/play/" target="_blank" rel="noopener noreferrer">https://www.typescriptlang.org/play/</a></p><p>TS\u4E0D\u80FD\u76F4\u63A5\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u73AF\u5883\uFF0C\u9700\u8981\u5148\u7F16\u8BD1\u6210js\uFF08\u4F9D\u8D56node\u73AF\u5883\uFF09</p><p>\u5B89\u88C5\uFF1Anpm i typescript -g\uFF1B</p><p>\u8FD0\u884Cts\uFF1Atsc xxx.ts \u5373\u53EF\u7F16\u8BD1\u4E3Ajs</p><h2 id="\u642D\u5EFA\u73AF\u5883"><a class="header-anchor" href="#\u642D\u5EFA\u73AF\u5883" aria-hidden="true">#</a> \u642D\u5EFA\u73AF\u5883</h2><ul><li><p>\u521D\u59CB\u5316\u9879\u76EE\uFF1A<code>npm init -y</code></p></li><li><p>vscode\u5B89\u88C5\u63D2\u4EF6\uFF1A<code>tslint\u3001tslint(deprecated)</code></p></li></ul><h3 id="\u5168\u5C40\u5B89\u88C5typescript"><a class="header-anchor" href="#\u5168\u5C40\u5B89\u88C5typescript" aria-hidden="true">#</a> \u5168\u5C40\u5B89\u88C5typescript</h3><p><code>npm i typescript tslint -g</code></p><p>\u5B89\u88C5\u5168\u5C40typescript\u4E4B\u540E\uFF0C\u5728\u9879\u76EE\u6839\u76EE\u5F55\u6267\u884C<code>tsc --init</code>\u751F\u6210<code>tsconfig.json</code>\u6587\u4EF6</p><h3 id="\u5B89\u88C5webpack\u6253\u5305"><a class="header-anchor" href="#\u5B89\u88C5webpack\u6253\u5305" aria-hidden="true">#</a> \u5B89\u88C5webpack\u6253\u5305</h3><ul><li><p><code>npm install webpack webpack-cli webpack-dev-server -D</code></p></li><li><p><code>npm install ts-loader cross-env html-webpack-plugin clean-webpack-plugin -D</code></p><ul><li><code>cross-env</code> \u4F20\u8F93\u73AF\u5883</li></ul></li></ul><h3 id="\u914D\u7F6Ewebpack"><a class="header-anchor" href="#\u914D\u7F6Ewebpack" aria-hidden="true">#</a> \u914D\u7F6Ewebpack</h3><div class="language-js"><pre><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> CleanWebpackPlugin <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    entry<span class="token operator">:</span> <span class="token string">&#39;./src/index.ts&#39;</span><span class="token punctuation">,</span>
    output<span class="token operator">:</span> <span class="token punctuation">{</span>
        filename<span class="token operator">:</span> <span class="token string">&#39;main.js&#39;</span><span class="token punctuation">,</span>
        path<span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    module<span class="token operator">:</span> <span class="token punctuation">{</span>
        roles<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
            test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.tsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
            use<span class="token operator">:</span> <span class="token string">&#39;ts-loader&#39;</span><span class="token punctuation">,</span>
            exclude<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_module</span><span class="token regex-delimiter">/</span></span>
        <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
        extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.ts&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.tsx&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
        contentBase<span class="token operator">:</span> <span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span>
        compress<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        host<span class="token operator">:</span> <span class="token string">&#39;localhost&#39;</span><span class="token punctuation">,</span>
        stats<span class="token operator">:</span> <span class="token string">&#39;errors-only&#39;</span><span class="token punctuation">,</span>
        port<span class="token operator">:</span> <span class="token number">8089</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    devtool<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token string">&#39;inline-source-map&#39;</span><span class="token punctuation">,</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            cleanOnceBeforeBuildPatterns<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u6253\u5305\u65F6\u6E05\u9664dist\u76EE\u5F55</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            template<span class="token operator">:</span> <span class="token string">&#39;./src/template/index.html&#39;</span> <span class="token comment">// \u653E\u5165\u6A21\u677F\u6587\u4EF6</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u914D\u7F6Epackage-json"><a class="header-anchor" href="#\u914D\u7F6Epackage-json" aria-hidden="true">#</a> \u914D\u7F6Epackage.json</h3><div class="language-json"><pre><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development webpack-dev-server --config ./build/webpac.config.js&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=production webpack --config ./build/webpack.config.js&quot;</span>
<span class="token punctuation">}</span>
</code></pre></div>__VP_STATIC_END__`,23),o=[p];function c(l,r,i,u,k,d){return a(),n("div",null,o)}var y=s(e,[["render",c]]);export{h as __pageData,y as default};
