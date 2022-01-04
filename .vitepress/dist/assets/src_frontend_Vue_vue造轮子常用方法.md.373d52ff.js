import{_ as n,c as s,o as a,d as p}from"./app.310fb107.js";const m='{"title":"Vue\u9020\u8F6E\u5B50\u5E38\u7528\u65B9\u6CD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B89\u88C5\u811A\u624B\u811A","slug":"\u5B89\u88C5\u811A\u624B\u811A"},{"level":2,"title":"ctrl+s\u683C\u5F0F\u5316\u4EE3\u7801","slug":"ctrl-s\u683C\u5F0F\u5316\u4EE3\u7801"},{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"\u914D\u7F6Evue.config.js","slug":"\u914D\u7F6Evue-config-js"},{"level":2,"title":"\u914D\u7F6E\u8BF7\u6C42\u62E6\u622A\u5668","slug":"\u914D\u7F6E\u8BF7\u6C42\u62E6\u622A\u5668"},{"level":2,"title":"\u73AF\u5883\u914D\u7F6E","slug":"\u73AF\u5883\u914D\u7F6E"},{"level":2,"title":"\u5F00\u542Fgzip\u538B\u7F29","slug":"\u5F00\u542Fgzip\u538B\u7F29"},{"level":2,"title":"\u5C01\u88C5Vuex","slug":"\u5C01\u88C5vuex"},{"level":2,"title":"Vuex\u6570\u636E\u6301\u4E45\u5316","slug":"vuex\u6570\u636E\u6301\u4E45\u5316"},{"level":2,"title":"\u521B\u5EFA\u5168\u5C40\u7684scss\u53D8\u91CF","slug":"\u521B\u5EFA\u5168\u5C40\u7684scss\u53D8\u91CF"},{"level":2,"title":"\u811A\u624B\u67B6\u4E2D\u4F7F\u7528\u5168\u5C40\u8FC7\u6EE4\u5668","slug":"\u811A\u624B\u67B6\u4E2D\u4F7F\u7528\u5168\u5C40\u8FC7\u6EE4\u5668"},{"level":2,"title":"\u5168\u5C40Vue.directive","slug":"\u5168\u5C40vue-directive"},{"level":2,"title":"\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6","slug":"\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6"},{"level":2,"title":"\u8DEF\u7531\u61D2\u52A0\u8F7D","slug":"\u8DEF\u7531\u61D2\u52A0\u8F7D"},{"level":2,"title":"\u62C6\u5206\u8DEF\u7531","slug":"\u62C6\u5206\u8DEF\u7531"},{"level":2,"title":"Vue\u8DEF\u7531 \u6309\u9700 keep-alive","slug":"vue\u8DEF\u7531-\u6309\u9700-keep-alive"},{"level":2,"title":"Mixin","slug":"mixin"},{"level":2,"title":"\u6A21\u5757html\u91CC\u9762\u8C03\u7528console","slug":"\u6A21\u5757html\u91CC\u9762\u8C03\u7528console"},{"level":2,"title":"\u914D\u7F6Esvg","slug":"\u914D\u7F6Esvg"},{"level":2,"title":"\u914D\u7F6Epostcss\u63D2\u4EF6","slug":"\u914D\u7F6Epostcss\u63D2\u4EF6"},{"level":2,"title":"\u914D\u7F6Emock","slug":"\u914D\u7F6Emock"}],"relativePath":"src/frontend/Vue/vue\u9020\u8F6E\u5B50\u5E38\u7528\u65B9\u6CD5.md","lastUpdated":1635823655324}',t={},o=p(`<h1 id="vue\u9020\u8F6E\u5B50\u5E38\u7528\u65B9\u6CD5"><a class="header-anchor" href="#vue\u9020\u8F6E\u5B50\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> Vue\u9020\u8F6E\u5B50\u5E38\u7528\u65B9\u6CD5</h1><h2 id="\u5B89\u88C5\u811A\u624B\u811A"><a class="header-anchor" href="#\u5B89\u88C5\u811A\u624B\u811A" aria-hidden="true">#</a> \u5B89\u88C5\u811A\u624B\u811A</h2><p>\u5168\u5C40\u5B89\u88C5vue-cli</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -g @vue/cli
// or
<span class="token function">yarn</span> global <span class="token function">add</span> @vue/cli

// \u5B89\u88C5\u4E4B\u540E\u5C31\u53EF\u4EE5vue --version
</code></pre></div><ol><li>\u751F\u6210\u811A\u624B\u67B6\uFF1Avue create demo or vue ui \uFF08\u4F7F\u7528\u56FE\u5F62\u5316\u754C\u9762\u521B\u5EFA\uFF09</li><li>\u8FDB\u5165\u811A\u624B\u67B6\u5E76\u5B89\u88C5\uFF1Ayarn add element-ui axios</li><li>\u5173\u95EDconsole\uFF1Anpm install terser-webpack-plugin -D</li><li>\u5F00\u542Fgzip\u538B\u7F29\uFF1Anpm install compression-webpack-plugin -D</li></ol><p>\u914D\u7F6Emain.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span>
<span class="token keyword">import</span> router <span class="token keyword">from</span> <span class="token string">&#39;./router&#39;</span>
<span class="token keyword">import</span> store <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> ElementUI <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;element-ui/lib/theme-chalk/index.css&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementUI<span class="token punctuation">)</span>
Vue<span class="token punctuation">.</span>config<span class="token punctuation">.</span>productionTip <span class="token operator">=</span> <span class="token boolean">false</span>

<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    router<span class="token punctuation">,</span>
    store<span class="token punctuation">,</span>
    <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span> <span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="ctrl-s\u683C\u5F0F\u5316\u4EE3\u7801"><a class="header-anchor" href="#ctrl-s\u683C\u5F0F\u5316\u4EE3\u7801" aria-hidden="true">#</a> ctrl+s\u683C\u5F0F\u5316\u4EE3\u7801</h2><p>\u5C06\u4EE5\u4E0B\u4EE3\u7801\u914D\u7F6E\u5230vscode\u91CC\uFF0C\u6216\u8005\u7ED9\u5355\u72EC\u9879\u76EE\u653E\u7F6E\uFF1A</p><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFA.vscode/settings.json\u91CC\uFF1B</p><p>\u9700\u8981\u7684\u63D2\u4EF6\uFF0C\u5728vscode\u6DFB\u52A0\uFF1Avetur\u3001eslint</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.html&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatter.js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.format.defaultFormatterOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;semi&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token property">&quot;singleQuote&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;bracketSpacing&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;eslintIntegration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;language&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;autoFix&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.autoFixOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u76EE\u5F55\u7ED3\u6784"><a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u76EE\u5F55\u7ED3\u6784</h2><ul><li>dist</li><li>src <ul><li>api \u63A5\u53E3\u8BF7\u6C42</li><li>assets \u9759\u6001\u8D44\u6E90</li><li>components \u7EC4\u4EF6</li><li>router \u8DEF\u7531</li><li>styles \u6837\u5F0F</li><li>views \u9875\u9762\u5355\u6587\u4EF6</li><li>store \u72B6\u6001\u7BA1\u7406</li><li>utils \u516C\u5171\u65B9\u6CD5</li><li>config \u5168\u5C40\u914D\u7F6E</li></ul></li></ul><h2 id="\u914D\u7F6Evue-config-js"><a class="header-anchor" href="#\u914D\u7F6Evue-config-js" aria-hidden="true">#</a> \u914D\u7F6Evue.config.js</h2><div class="language-js"><pre><code><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">dir</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span>dir<span class="token punctuation">)</span> <span class="token comment">// \u8BBE\u7F6E\u7EDD\u5BF9\u8DEF\u5F84;</span>
<span class="token keyword">const</span> env <span class="token operator">=</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    publicPath<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u90E8\u7F72\u8DEF\u5F84 \u4EE5\u5F53\u524D\u76EE\u5F55</span>
    outputDir<span class="token operator">:</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8F93\u51FA\u6587\u4EF6\u76EE\u5F55(\u9ED8\u8BA4\u503Cdist)</span>
    lintOnSave<span class="token operator">:</span> <span class="token string">&#39;warning&#39;</span><span class="token punctuation">,</span> <span class="token comment">// eslint\u662F\u5426\u5728\u4FDD\u5B58\u7684\u65F6\u5019\u68C0\u67E5, eslint\u51FA\u9519\u4E0D\u4F1A\u5BFC\u81F4\u7F16\u8BD1\u5931\u8D25</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u914D\u7F6E\u522B\u540D</span>
        config<span class="token punctuation">.</span>resolve<span class="token punctuation">.</span>alias
            <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;components&#39;</span><span class="token punctuation">,</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;@/components&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;assets&#39;</span><span class="token punctuation">,</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;@/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;api&#39;</span><span class="token punctuation">,</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;@/api&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>devtool <span class="token operator">=</span> <span class="token string">&#39;#eval-source-map&#39;</span> <span class="token comment">// \u5F00\u542Fdebugger\u8C03\u8BD5</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>env <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u4E3A\u751F\u4EA7\u73AF\u5883\u4FEE\u6539\u914D\u7F6E...</span>
            config<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;production&#39;</span>
            <span class="token comment">// \u751F\u4EA7\u73AF\u5883\u5173\u95EDconsole</span>
            config<span class="token punctuation">.</span>optimization<span class="token punctuation">.</span>minimizer<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span>terserOptions<span class="token punctuation">.</span>compress<span class="token punctuation">.</span>drop_console <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token comment">// \u914D\u7F6Egzip\u538B\u7F29</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span>
                plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                    test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.html$|\\.css</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u5339\u914D\u6587\u4EF6\u540D</span>
                    threshold<span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>  <span class="token comment">// \u5BF9\u8D85\u8FC710k\u7684\u6570\u636E\u8FDB\u884C\u538B\u7F29</span>
                    deleteOriginalAssets<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u5220\u9664\u539F\u6587\u4EF6</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// \u4E3A\u5F00\u53D1\u73AF\u5883\u4FEE\u6539\u914D\u7F6E...</span>
            config<span class="token punctuation">.</span>mode <span class="token operator">=</span> <span class="token string">&#39;development&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    productionSourceMap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u751F\u4EA7\u73AF\u5883\u662F\u5426\u751F\u6210sourceMap \u6587\u4EF6,false\u63D0\u9AD8\u6784\u5EFA\u901F\u5EA6</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
        host<span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8\u5916\u90E8ip\u8BBF\u95EE</span>
        port<span class="token operator">:</span> <span class="token number">8022</span><span class="token punctuation">,</span> <span class="token comment">// \u7AEF\u53E3</span>
        overlay<span class="token operator">:</span> <span class="token punctuation">{</span>
            warnings<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            errors<span class="token operator">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;/api&#39;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
                target<span class="token operator">:</span> <span class="token string">&#39;http://www.baidu.com/api&#39;</span><span class="token punctuation">,</span>
                changeOrigin<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//\u5141\u8BB8websockets\u8DE8\u57DF</span>
                pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string">&#39;^/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7B2C\u4E09\u65B9\u63D2\u4EF6\u914D\u7F6E</span>
    pluginOptions<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>sourceMap\u4ECB\u7ECD</p><ul><li><p>\u662F\u4E00\u4E2A.map\u7684\u6587\u4EF6\uFF0C\u91CC\u9762\u50A8\u5B58\u7740\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u91CC\u4FDD\u5B58\u7684\u662F\u8F6C\u6362\u540E\u4EE3\u7801\u7684\u4F4D\u7F6E\uFF0C\u548C\u5BF9\u5E94\u7684\u8F6C\u6362\u524D\u7684\u4F4D\u7F6E\uFF0C\u6709\u4E86\u5B83\uFF0C\u51FA\u9519\u7684\u65F6\u5019\u901A\u8FC7\u65AD\u70B9\u5DE5\u5177\u53EF\u4EE5\u76F4\u63A5\u663E\u793A\u539F\u59CB\u4EE3\u7801\uFF0C\u800C\u4E0D\u662F\u8F6C\u6362\u540E\u7684\u4EE3\u7801\uFF1B</p></li><li><p>\u6BCF\u4E2Ajs\u6587\u4EF6\u5BF9\u5E94\u4E00\u4E2A.map\u6587\u4EF6\uFF0C\u91CC\u9762\u7684\u57FA\u672C\u4FE1\u606F\u5982\u4E0B</p><div class="language-json"><pre><code><span class="token punctuation">{</span>
    version <span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token comment">//SourceMap\u7684\u7248\u672C\uFF0C\u76EE\u524D\u4E3A3</span>
    sources<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;foo.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;bar.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u8F6C\u6362\u524D\u7684\u6587\u4EF6\uFF0C\u8BE5\u9879\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8868\u793A\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u6587\u4EF6\u5408\u5E76</span>
    names<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;maps&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;are&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;fun&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//\u8F6C\u6362\u524D\u7684\u6240\u6709\u53D8\u91CF\u540D\u548C\u5C5E\u6027\u540D</span>
    mappings<span class="token operator">:</span> <span class="token string">&quot;AACvB,gBAAgB,EAAE;AAClB;&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u8BB0\u5F55\u4F4D\u7F6E\u4FE1\u606F\u7684\u5B57\u7B26\u4E32</span>
    file<span class="token operator">:</span> <span class="token string">&quot;out.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u8F6C\u6362\u540E\u7684\u6587\u4EF6\u540D</span>
    sourcesContent<span class="token operator">:</span> <span class="token string">&quot; \\t// The module cache\\n&quot;</span><span class="token punctuation">,</span> <span class="token comment">//\u8F6C\u6362\u540E\u7684\u4EE3\u7801</span>
    sourceRoot <span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token comment">//\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u3002\u5982\u679C\u4E0E\u8F6C\u6362\u524D\u7684\u6587\u4EF6\u5728\u540C\u4E00\u76EE\u5F55\uFF0C\u8BE5\u9879\u4E3A\u7A7A</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ul><h2 id="\u914D\u7F6E\u8BF7\u6C42\u62E6\u622A\u5668"><a class="header-anchor" href="#\u914D\u7F6E\u8BF7\u6C42\u62E6\u622A\u5668" aria-hidden="true">#</a> \u914D\u7F6E\u8BF7\u6C42\u62E6\u622A\u5668</h2><ol><li><p>\u521B\u5EFAsrc/api/index</p><div class="language-js"><pre><code><span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>
<span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Loading<span class="token punctuation">,</span> Message <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span> <span class="token comment">// \u8BF7\u6C42loading\u53EF\u4EE5\u81EA\u5DF2\u66F4\u6362</span>

<span class="token comment">// \u65B0\u5EFA\u4E00\u4E2A\u5B9E\u4F8B, \u907F\u514D\u5168\u5C40axios\u88AB\u6C61\u67D3;</span>
<span class="token comment">// \u5982\u679C\u8FD9\u91CC\u4E0D\u662Fcreate\u521B\u5EFA\u7684axios, \u5F53axios\u88AB\u6DFB\u52A0\u4E00\u6B21\u8DEF\u7531\u62E6\u622A\u5668\u4E4B\u540E, \u9879\u76EE\u4EFB\u610F\u5730\u65B9\u518D\u6B21\u5F15\u5165axios, \u4F1A\u540C\u6837\u4F7F\u7528\u8BE5\u62E6\u622A\u5668;</span>
<span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// \u8D85\u65F6</span>
    withCredentials<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u5141\u8BB8cookie\u8DE8\u57DF</span>
    baseURL<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u914D\u7F6E\u8BF7\u6C42host</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> loading <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token comment">// \u914D\u7F6E\u8BF7\u6C42</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        loading <span class="token operator">=</span> Loading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span><span class="token punctuation">{</span>text<span class="token operator">:</span> <span class="token string">&#39;\u6B63\u5728\u52A0\u8F7D\u4E2D....&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> localStorage<span class="token punctuation">[</span><span class="token string">&#39;token&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u7ED9\u8BF7\u6C42\u6DFB\u52A0token</span>
        <span class="token keyword">return</span> config
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
<span class="token punctuation">)</span>
<span class="token comment">// \u914D\u7F6E\u54CD\u5E94</span>
service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>loading<span class="token punctuation">)</span> loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token comment">// ... \u5728\u8FD9\u91CC\u5904\u7406\u7EDF\u4E00code\u95EE\u9898</span>
        <span class="token keyword">return</span> response<span class="token punctuation">.</span>data

    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>loading<span class="token punctuation">)</span> loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>error<span class="token punctuation">.</span>response<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u8D85\u65F6, \u8BF7\u68C0\u67E5\u7F51\u7EDC\u662F\u5426\u8FDE\u63A5\u6B63\u5E38&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                Message<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u5931\u8D25,\u8BF7\u68C0\u67E5\u7F51\u7EDC\u662F\u5426\u5DF2\u8FDE\u63A5&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token comment">// \u5207\u6362\u9875\u9762\u65F6\u5019,\u53D6\u6D88\u4E0A\u4E2A\u9875\u9762\u7684\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u9700\u8981\u5219\u6253\u5F00</span>
<span class="token comment">// Vue.$httpRequestList = []</span>
<span class="token comment">// const cancelToken = () =&gt; {</span>
<span class="token comment">//   return new axios.CancelToken(cancel =&gt; {</span>
<span class="token comment">//     // cancel\u5C31\u662F\u53D6\u6D88\u8BF7\u6C42\u7684\u65B9\u6CD5</span>
<span class="token comment">//     Vue.$httpRequestList.push({</span>
<span class="token comment">//       cancel</span>
<span class="token comment">//     })</span>
<span class="token comment">//   })</span>
<span class="token comment">// }</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getData <span class="token operator">=</span> <span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> method<span class="token operator">=</span><span class="token string">&#39;get&#39;</span><span class="token punctuation">,</span> headers<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
        url<span class="token punctuation">,</span>
        method<span class="token operator">:</span> method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token comment">// cancelToken: cancelToken(),</span>
        headers
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;get&#39;</span> <span class="token operator">||</span> method <span class="token operator">===</span> <span class="token string">&#39;delete&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u5904\u7406get\u8BF7\u6C42\u9632\u6B62IE\u7F13\u5B58</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>ActiveXObject <span class="token operator">||</span> <span class="token string">&#39;ActiveXObject&#39;</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            data<span class="token punctuation">.</span>t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u5904\u7406get\u8BF7\u6C42\u7684\u4F20\u53C2\u65B9\u5F0F, get\u53C2\u6570\u9700\u8981\u653E\u5728params\u4E0B</span>
        config<span class="token punctuation">.</span>params <span class="token operator">=</span> data
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>data <span class="token operator">=</span> data
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u8C03\u63A5\u53E3\u65B9\u6CD5\uFF0C\u5728api\u521B\u5EFA\u4E00\u4E2Ajs\u6587\u4EF6\uFF0C\u9488\u5BF9\u67D0\u4E2A\u9875\u9762\u521B\u5EFA\uFF0C\u5982login.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getData<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./index&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span> <span class="token operator">=</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span>
  <span class="token function">getData</span><span class="token punctuation">(</span><span class="token string">&#39;/auth/login&#39;</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u5982\u679C\u9700\u8981\u914D\u7F6E\u53D6\u6D88\u62E6\u622A\u5668\uFF1A\u5728\u8DEF\u7531\u6587\u4EF6\u91CC\u9762\u5904\u7406\u63A5\u53E3\u8BF7\u6C42</p><div class="language-js"><pre><code><span class="token comment">// \u8DEF\u7531\u5207\u6362\u68C0\u6D4B\u662F\u5426\u5F3A\u884C\u4E2D\u65AD</span>
router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>Vue<span class="token punctuation">.</span>$httpRequestList <span class="token operator">&amp;&amp;</span> Vue<span class="token punctuation">.</span>$httpRequestList<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Vue<span class="token punctuation">.</span>$httpRequestList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">request</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u53D6\u6D88\u6CA1\u6709\u54CD\u5E94\u7684\u8BF7\u6C42</span>
      request<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">// \u8BF7\u6C42\u53D6\u6D88\u54CD\u5E94\u7684\u6570\u636E</span>
    Vue<span class="token punctuation">.</span>$httpRequestList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u5728\u7EC4\u4EF6\u91CC\u9762\u5F15\u5165\u8BE5\u8BF7\u6C42\u7684\u65B9\u6CD5\uFF0C\u76F4\u63A5\u8C03\u7528\u4F20\u5165\u53C2\u6570\u5373\u53EF</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> login <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;api/login&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;login&#39;</span><span class="token punctuation">,</span>
    method<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token keyword">async</span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>res <span class="token operator">&amp;&amp;</span> res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u5904\u7406\u6210\u529F\u4E4B\u540E\u7684\u65B9\u6CD5</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="\u73AF\u5883\u914D\u7F6E"><a class="header-anchor" href="#\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> \u73AF\u5883\u914D\u7F6E</h2><ol><li><p>\u521B\u5EFAconfig/index.js</p><div class="language-js"><pre><code><span class="token comment">// \u586B\u5199\u5BF9\u5E94\u7684\u7F51\u5740</span>
<span class="token keyword">const</span> globals <span class="token operator">=</span> <span class="token punctuation">{</span>
    mock<span class="token operator">:</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">,</span>
    host<span class="token operator">:</span> <span class="token punctuation">{</span>
        test<span class="token operator">:</span> <span class="token string">&#39;https://test.heny.vip&#39;</span><span class="token punctuation">,</span>
        pre<span class="token operator">:</span> <span class="token string">&#39;https://pre.heny.vip&#39;</span><span class="token punctuation">,</span>
        prod<span class="token operator">:</span> <span class="token string">&#39;https://prod.heny.vip&#39;</span><span class="token punctuation">,</span>
        uat<span class="token operator">:</span> <span class="token string">&#39;https://uat.heny.vip&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5728\u4E0B\u9762\u4E5F\u53EF\u4EE5\u5199\u5176\u4ED6\u7684\u5168\u5C40\u914D\u7F6E</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> globals
</code></pre></div></li><li><p>\u521B\u5EFAutils/common.js\uFF0C\u91CC\u9762\u653E\u516C\u5171\u7684\u65B9\u6CD5</p><div class="language-js"><pre><code><span class="token keyword">import</span> Cookies <span class="token keyword">from</span> <span class="token string">&#39;js-cookie&#39;</span> <span class="token comment">// \u7528\u4E8E\u5B58token\u7684cookie</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>globals<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../globals&#39;</span>
<span class="token comment">/**
*    \u6839\u636E\u9875\u9762url, \u8FD4\u56DE\u5BF9\u5E94\u7684\u8FD0\u884C\u73AF\u5883
*/</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getCurrentEnv</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">let</span> <span class="token punctuation">{</span>hostname<span class="token punctuation">}</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>location
    <span class="token keyword">if</span><span class="token punctuation">(</span>
        hostname<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;localhost&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        hostname<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;10.105&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span>
        hostname<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;192.168&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> globals<span class="token punctuation">.</span>mock
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">getHost</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> globals<span class="token punctuation">.</span>host<span class="token punctuation">[</span><span class="token function">getCurrentEnv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5728\u914D\u7F6E\u62E6\u622A\u8DEF\u7531\u91CC\u9762\u5F15\u5165common.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>getHost<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;utils/common&#39;</span>
axios<span class="token punctuation">.</span>defaults<span class="token punctuation">.</span>baseURL <span class="token operator">=</span> <span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div></li></ol><h2 id="\u5F00\u542Fgzip\u538B\u7F29"><a class="header-anchor" href="#\u5F00\u542Fgzip\u538B\u7F29" aria-hidden="true">#</a> \u5F00\u542Fgzip\u538B\u7F29</h2><ol><li><p>\u5B89\u88C5\uFF1Anpm install compression-webpack-plugin -D</p></li><li><p>\u914D\u7F6Evue.config.js</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token keyword">new</span> <span class="token class-name">CompressionPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$|\\.html$|\\.css</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token comment">// \u5339\u914D\u6587\u4EF6\u540D</span>
            threshold<span class="token operator">:</span> <span class="token number">10240</span><span class="token punctuation">,</span>  <span class="token comment">// \u5BF9\u8D85\u8FC710k\u7684\u6570\u636E\u8FDB\u884C\u538B\u7F29</span>
            deleteOriginalAssets<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// \u662F\u5426\u5220\u9664\u539F\u6587\u4EF6</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8981\u4F7F\u670D\u52A1\u5668\u8FD4\u56DE.gz\u6587\u4EF6\uFF0C\u8FD8\u9700\u8981\u5BF9\u670D\u52A1\u5668\u8FDB\u884C\u914D\u7F6E\uFF0C\u6839\u636ERequest Headers\u7684Accept-Encoding\u6807\u7B7E\u8FDB\u884C\u9274\u522B\uFF0C\u5982\u679C\u652F\u6301gzip\u5C31\u8FD4\u56DE.gz\u6587\u4EF6\u3002</p></li><li><p>\u9700\u8981nginx\u914D\u7F6E\uFF0C\u5176\u5B9E\u4E5F\u53EF\u4EE5\u4E0D\u7528\u914D\u7F6E\uFF0C\u5B9D\u5854\u9762\u677F\u7684nginx\u9ED8\u8BA4\u5C31\u5DF2\u7ECF\u914D\u7F6E\u597D\u4E86</p><div class="language-bash"><pre><code>    <span class="token comment">#\u5F00\u542F\u548C\u5173\u95EDgzip\u6A21\u5F0F</span>
    <span class="token function">gzip</span> on<span class="token punctuation">;</span>
    <span class="token comment">#gizp\u538B\u7F29\u8D77\u70B9\uFF0C\u6587\u4EF6\u5927\u4E8E1k\u624D\u8FDB\u884C\u538B\u7F29</span>
    gzip_min_length 1k<span class="token punctuation">;</span>
    <span class="token comment"># gzip \u538B\u7F29\u7EA7\u522B\uFF0C1-9\uFF0C\u6570\u5B57\u8D8A\u5927\u538B\u7F29\u7684\u8D8A\u597D\uFF0C\u4E5F\u8D8A\u5360\u7528CPU\u65F6\u95F4</span>
    gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token comment"># \u8FDB\u884C\u538B\u7F29\u7684\u6587\u4EF6\u7C7B\u578B\u3002</span>
    gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript <span class="token punctuation">;</span>
    <span class="token comment">#nginx\u5BF9\u4E8E\u9759\u6001\u6587\u4EF6\u7684\u5904\u7406\u6A21\u5757\uFF0C\u5F00\u542F\u540E\u4F1A\u5BFB\u627E\u4EE5.gz\u7ED3\u5C3E\u7684\u6587\u4EF6\uFF0C\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u4F1A\u5360\u7528cpu\u8FDB\u884C\u538B\u7F29\uFF0C\u5982\u679C\u627E\u4E0D\u5230\u5219\u4E0D\u8FDB\u884C\u538B\u7F29</span>
    gzip_static on
    <span class="token comment"># \u662F\u5426\u5728http header\u4E2D\u6DFB\u52A0Vary: Accept-Encoding\uFF0C\u5EFA\u8BAE\u5F00\u542F</span>
    gzip_vary on<span class="token punctuation">;</span>
    <span class="token comment"># \u8BBE\u7F6Egzip\u538B\u7F29\u9488\u5BF9\u7684HTTP\u534F\u8BAE\u7248\u672C</span>
    gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
</code></pre></div></li></ol><h2 id="\u5C01\u88C5vuex"><a class="header-anchor" href="#\u5C01\u88C5vuex" aria-hidden="true">#</a> \u5C01\u88C5Vuex</h2><ol><li><p>\u521B\u5EFA\u76EE\u5F55\u7ED3\u6784\uFF1A</p><div class="language-"><pre><code>store
 --modules
    --login.js
 --index.js
 --types.js
</code></pre></div></li><li><p>\u5728store/index.js\u5199\u5165</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">&#39;Vuex&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span>
<span class="token keyword">let</span> modules <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">let</span> context <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./modules&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
context<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.\\/(.*?)\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    modules<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">context</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">.</span>default
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    modules
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u914D\u7F6E\u597D\u7B2C\u4E8C\u6B65\u4E4B\u540E\u5C31\u53EF\u4EE5\u76F4\u63A5\u5728modules\u91CC\u9762\u521B\u5EFA\u5355\u6587\u4EF6js\u4E86\uFF0C\u4E0D\u80FD\u518D\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u56E0\u4E3A\u4E0D\u80FD\u627E\u5230\u91CC\u9762\u7684js\u6587\u4EF6\uFF0C\u4E0D\u80FD\u5728\u81EA\u52A8\u5F15\u5165\u4E86</p></li><li><p>modules\u91CC\u9762\u7684\u5355\u6587\u4EF6js\u914D\u7F6E\u7ED3\u6784\uFF0C\u548C\u666E\u901A\u914D\u7F6E\u662F\u4E00\u6837\u7684</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> types <span class="token keyword">from</span> <span class="token string">&#39;../types&#39;</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> actions <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> getters <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">,</span>
    mutations<span class="token punctuation">,</span>
    actions<span class="token punctuation">,</span>
    getters
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="vuex\u6570\u636E\u6301\u4E45\u5316"><a class="header-anchor" href="#vuex\u6570\u636E\u6301\u4E45\u5316" aria-hidden="true">#</a> Vuex\u6570\u636E\u6301\u4E45\u5316</h2><ol><li><p>\u5B89\u88C5\uFF1Anpm i vuex-persistedstate</p></li><li><p>\u4FEE\u6539store</p><div class="language-js"><pre><code><span class="token keyword">import</span> createPersistedState <span class="token keyword">from</span> <span class="token string">&#39;vuex-persistedstate&#39;</span>
<span class="token keyword">const</span> persistedStateOpt <span class="token operator">=</span> <span class="token punctuation">{</span>
    storage<span class="token operator">:</span> window<span class="token punctuation">.</span>localStorage
<span class="token punctuation">}</span>
<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">createPersistedState</span><span class="token punctuation">(</span>persistedStateOpt<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ol><h2 id="\u521B\u5EFA\u5168\u5C40\u7684scss\u53D8\u91CF"><a class="header-anchor" href="#\u521B\u5EFA\u5168\u5C40\u7684scss\u53D8\u91CF" aria-hidden="true">#</a> \u521B\u5EFA\u5168\u5C40\u7684scss\u53D8\u91CF</h2><p>\u914D\u7F6Evue.config.js</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
        loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
            scss<span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token comment">// \u6839\u636E\u81EA\u5DF1\u7684\u8DEF\u5F84\u8BBE\u7F6E</span>
                prependData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/styles/variable.scss&quot;;</span><span class="token template-punctuation string">\`</span></span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5982\u679C\u4E0A\u9762\u7684\u4E0D\u884C\uFF0C\u5C06scss\u6362\u6210sass</span>
sass<span class="token operator">:</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@import &quot;@/styles/variable.scss&quot;;</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u811A\u624B\u67B6\u4E2D\u4F7F\u7528\u5168\u5C40\u8FC7\u6EE4\u5668"><a class="header-anchor" href="#\u811A\u624B\u67B6\u4E2D\u4F7F\u7528\u5168\u5C40\u8FC7\u6EE4\u5668" aria-hidden="true">#</a> \u811A\u624B\u67B6\u4E2D\u4F7F\u7528\u5168\u5C40\u8FC7\u6EE4\u5668</h2><p>\u9700\u8981\u5F15\u5165Vue\uFF0C\u4E4B\u540E\u5B9A\u5236\u5168\u5C40filter</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
Vue<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;money&#39;</span><span class="token punctuation">,</span><span class="token parameter">val</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// \u9700\u8981\u8FD4\u56DE;</span>
<span class="token comment">// \u5728main.js\u91CC</span>
<span class="token keyword">import</span> <span class="token string">&#39;./filters&#39;</span>
</code></pre></div><h2 id="\u5168\u5C40vue-directive"><a class="header-anchor" href="#\u5168\u5C40vue-directive" aria-hidden="true">#</a> \u5168\u5C40Vue.directive</h2><div class="language-js"><pre><code><span class="token comment">// \u5168\u5C40\u81EA\u5B9A\u4E49</span>
Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&quot;change-color&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span>binding<span class="token punctuation">,</span>vnode</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  el<span class="token punctuation">.</span>style<span class="token punctuation">[</span><span class="token string">&quot;color&quot;</span><span class="token punctuation">]</span><span class="token operator">=</span> binding<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u4F7F\u7528</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div v<span class="token operator">-</span>change<span class="token operator">-</span>color<span class="token operator">=</span>\u201Ccolor\u201D<span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token punctuation">{</span>message<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>script<span class="token operator">&gt;</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span><span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">{</span>
        color<span class="token operator">:</span><span class="token string">&#39;green&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6"><a class="header-anchor" href="#\u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6" aria-hidden="true">#</a> \u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6</h2><ol><li>\u521B\u5EFA\uFF1A./components/global/index.js\uFF0C\u5E76\u5199\u5165\u4EE5\u4E0B\u4EE3\u7801\uFF0C\u4E4B\u540E\u5728main.js\u5F15\u5165\uFF1Aimport &#39;./components/global&#39;\u5373\u53EF\uFF1B</li></ol><div class="language-js"><pre><code><span class="token keyword">let</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token parameter">context</span> <span class="token operator">=&gt;</span> context<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>
<span class="token keyword">let</span> context <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token function">requireAll</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> item <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7B2C\u4E00\u4E2A\u5C0F\u62EC\u53F7\u5339\u914D\u6587\u4EF6\u5939\u540D \u7B2C\u4E8C\u4E2A\u5C0F\u62EC\u53F7\u5339\u914D\u6587\u4EF6\u540D</span>
  <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/(\\w+)\\/(\\w+).vue$</span><span class="token regex-delimiter">/</span></span>
  <span class="token comment">// \u5F15\u5165\u7EC4\u4EF6\u65F6, \u9ED8\u8BA4\u53D6\u7EC4\u4EF6\u91CC\u9762\u7684name\u5C5E\u6027, \u5982\u679C\u6CA1\u6709name\u5C5E\u6027\u5219\u53D6\u6587\u4EF6\u540D, \u5982\u679C\u6587\u4EF6\u540D\u662Findex\u5219\u53D6\u6587\u4EF6\u5939\u540D, \u6CE8\u518C\u7684\u5168\u5C40\u7EC4\u4EF6\u4EE5my-[name]\u4F7F\u7528;</span>
  <span class="token keyword">let</span> name <span class="token operator">=</span> item<span class="token punctuation">.</span>name <span class="token operator">||</span> item<span class="token punctuation">.</span>__file<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>
  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">my-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><ol start="2"><li>\u4E4B\u540E\u5728global\u6587\u4EF6\u5939\u4E0B\u9762\u521B\u5EFA\u6587\u4EF6\u5373\u53EF\uFF1B</li></ol><h2 id="\u8DEF\u7531\u61D2\u52A0\u8F7D"><a class="header-anchor" href="#\u8DEF\u7531\u61D2\u52A0\u8F7D" aria-hidden="true">#</a> \u8DEF\u7531\u61D2\u52A0\u8F7D</h2><p>\u4F7F\u7528import\u53EF\u4EE5\u61D2\u52A0\u8F7D</p><div class="language-js"><pre><code>path<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
<span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;src/views/home&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>\u4FEE\u6539\u61D2\u52A0\u8F7D\u5F15\u5165\u7684\u540D\u5B57</p><ol><li><p>\u4F7F\u7528webpackChunkName\u5B9A\u4E49\u61D2\u52A0\u8F7D\u7684\u540D\u5B57</p><div class="language-js"><pre><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;home&quot;*/</span> <span class="token string">&#39;src/views/home&#39;</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u4F7F\u7528[request]\u53D8\u91CF\uFF0C\u53EF\u4EE5\u89E3\u51B3\u5FAA\u73AFimport\u7684\u627E\u4E0D\u5230\u540D\u5B57</p><div class="language-js"><pre><code>routes<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    path<span class="token operator">:</span> route<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
    name<span class="token operator">:</span> route<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
    <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &quot;[request]&quot; */</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">src/views/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>route<span class="token punctuation">.</span>filePath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ol><h2 id="\u62C6\u5206\u8DEF\u7531"><a class="header-anchor" href="#\u62C6\u5206\u8DEF\u7531" aria-hidden="true">#</a> \u62C6\u5206\u8DEF\u7531</h2><ol><li><p>\u521B\u5EFAsrc/router/index.js\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Router <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Router<span class="token punctuation">)</span>
<span class="token keyword">let</span> routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> routerContext <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">index\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
routerContext<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">route</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5904\u7406\u8DEF\u7531\u6839\u76EE\u5F55\u7684index.js</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>route<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&#39;./index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">const</span> routerModule <span class="token operator">=</span> <span class="token function">routerContext</span><span class="token punctuation">(</span>route<span class="token punctuation">)</span>
    <span class="token comment">// \u517C\u5BB9import export \u548C require module.export \u4E24\u79CD\u89C4\u8303</span>
    routes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>routes<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token punctuation">(</span>routerModule<span class="token punctuation">.</span>default <span class="token operator">||</span> routerModule<span class="token punctuation">)</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    mode<span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
    base<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">BASE_URL</span><span class="token punctuation">,</span>
    routes
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u4E4B\u540E\u5728router\u6587\u4EF6\u5939\u4E0B\u9762\u4EE5 \u4E0B\u9762\u7684\u65B9\u5F0F\u521B\u5EFA\u6587\u4EF6\u8DEF\u7531</p><div class="language-js"><pre><code><span class="token comment">// Home/index.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        path<span class="token operator">:</span> <span class="token string">&#39;/home&#39;</span><span class="token punctuation">,</span>
        name<span class="token operator">:</span> <span class="token string">&#39;Home&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">components</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/Home&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        meta<span class="token operator">:</span> <span class="token punctuation">{</span>
            title<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment">// \u9875\u9762\u6807\u9898;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div></li></ol><h2 id="vue\u8DEF\u7531-\u6309\u9700-keep-alive"><a class="header-anchor" href="#vue\u8DEF\u7531-\u6309\u9700-keep-alive" aria-hidden="true">#</a> Vue\u8DEF\u7531 \u6309\u9700 keep-alive</h2><ol><li><p>\u6D4B\u8BD5\u65B9\u6CD5\uFF0C\u5982\u679C\u6709keep-alive\u7684\u8DEF\u7531\uFF1B</p><p><img src="https://notecdn.heny.vip/images/Vue%E9%80%A0%E8%BD%AE%E5%AD%90_01.png" alt="image-20200406224427526"></p><p><img src="https://notecdn.heny.vip/images/Vue%E9%80%A0%E8%BD%AE%E5%AD%90_02.png" alt="image-20200406224453979"></p></li><li><p>\u5C06\u9700\u8981\u7F13\u5B58\u548C\u4E0D\u9700\u8981\u7F13\u5B58\u7684\u89C6\u56FE\u7EC4\u4EF6\u533A\u5206\u5F00</p><ol><li><p>\u51992\u4E2Arouter-view\u51FA\u53E3</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u9700\u8981\u7F13\u5B58\u7684\u89C6\u56FE\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>$route.meta.keepAlive<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- \u4E0D\u9700\u8981\u7F13\u5B58\u7684\u89C6\u56FE\u7EC4\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>!$route.meta.keepAlive<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div></li><li><p>\u5728router\u91CC\u5B9A\u4E49\u597D\u9700\u8981\u7F13\u5B58\u7684\u89C6\u56FE\u7EC4\u4EF6\uFF0Cdeepth\u662F\u6DF1\u5EA6\uFF0C\u6BD4\u5982\uFF0Cindex\u662F0.5\uFF0Clist\u662F1\uFF0Cdetail\u662F2\uFF0C\u5C42\u7EA7\u5173\u7CFB\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    routes<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/keep-alive/index&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> deepth<span class="token operator">:</span> <span class="token number">0.5</span> <span class="token punctuation">}</span> <span class="token comment">// \u4E0D\u9700\u8981\u7F13\u5B58\u7684\u76F4\u63A5\u4E0D\u4F20\u5165\u5373\u53EF;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/keep-alive/list&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> keepAlive<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> deepth<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span> <span class="token comment">// \u9700\u8981\u7F13\u5B58</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&#39;/detail&#39;</span><span class="token punctuation">,</span>
            name<span class="token operator">:</span> <span class="token string">&#39;detail&#39;</span><span class="token punctuation">,</span>
            <span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/keep-alive/detail&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            meta<span class="token operator">:</span> <span class="token punctuation">{</span> deepth<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span> <span class="token comment">// \u6DF1\u5EA6\u4E3A2</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ol></li><li><p>\u6309\u9700\u52A0\u8F7Dkeep-alive\uFF0Cinclude\u5C5E\u6027\u662F\u5F53\u5305\u62EC\u76F8\u540Cname\u5C5E\u6027\u65F6\u624D\u4FDD\u7559\uFF0C\u5F53\u662F\u8FD4\u56DE\u7684\u65F6\u5019\uFF0C\u5219\u5220\u9664\uFF0C\u4ECEindex\u5230list\u9875\u518D\u5230\u8BE6\u60C5\u9875</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>keep-alive</span> <span class="token attr-name">:include</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>include<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- \u9700\u8981\u7F13\u5B58\u7684\u89C6\u56FE\u7EC4\u4EF6 --&gt;</span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$route.meta.keepAlive<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>keep-alive</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- \u4E0D\u9700\u8981\u7F13\u5B58\u7684\u89C6\u56FE\u7EC4\u4EF6 --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>!$route.meta.keepAlive<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token parameter">_</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
        include<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    watch<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">$route</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span><span class="token keyword">from</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// \u9700\u8981\u662F\u7F13\u5B58\u7684\u7EC4\u4EF6</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>keepAlive<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// include\u91CC\u9762\u6CA1\u6709\u4E4B\u540E\u518Dpush</span>
                <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// \u67E5\u770B\u6DF1\u5EA6\u5173\u7CFB\uFF0C\u5982\u679C\u662F\u5927\u4E8E\u8981\u53BB\u7684\u9875\u9762\uFF0C\u5219\u5220\u9664\u4E0A\u4E00\u4E2A\u9875\u9762\uFF1B</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>keepAlive <span class="token operator">&amp;&amp;</span> to<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>deepth <span class="token operator">&lt;</span> from<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>deepth<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// \u67E5\u8BE2\u7684\u662F\u4ECE\u54EA\u91CC\u6765\u7684\u9875\u9762</span>
                <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>from<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
                index <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u6CE8\u610F\uFF1Akeep-alive\u8981\u6C42\u88AB\u5305\u88F9\u5230\u7684\u7EC4\u4EF6\u90FD\u6709\u81EA\u5DF1\u7684\u540D\u5B57\uFF0C\u4E0A\u9762push\u548Csplice\u7684\u662Frouter\u7684name\u540D\u5B57\uFF0C\u5EFA\u8BAE\u628Arouter\u7684name\u540D\u5B57\u548C\u7EC4\u4EF6\u7684name\u540D\u5B57\u8BBE\u6210\u4E00\u6837\u7684\uFF1B</p><p><img src="https://notecdn.heny.vip/images/Vue%E9%80%A0%E8%BD%AE%E5%AD%90_03.png" alt="image-20200406224653969"></p></li></ol><h2 id="mixin"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><blockquote><p>\u4E3B\u8981\u662F\u89E3\u51B3\u903B\u8F91\u590D\u7528\u7684\u95EE\u9898\u7684</p></blockquote><div class="language-js"><pre><code><span class="token comment">// news-mixin.js</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mixin\u88AB\u63D2\u5165\u4E86111&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">methods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;add\u51FD\u6570\u88AB\u6267\u884C&#39;</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u590D\u7528\u7684\u903B\u8F91\u90FD\u53EF\u4EE5\u5199\u5728new-mixin\u91CC\u9762\u4F7F\u7528;</span>
<span class="token comment">// home.vue</span>
<span class="token keyword">import</span> newMixin <span class="token keyword">from</span> <span class="token string">&#39;./news-mixin&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span>
    mixins<span class="token operator">:</span> <span class="token punctuation">[</span>newMixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6A21\u5757html\u91CC\u9762\u8C03\u7528console"><a class="header-anchor" href="#\u6A21\u5757html\u91CC\u9762\u8C03\u7528console" aria-hidden="true">#</a> \u6A21\u5757html\u91CC\u9762\u8C03\u7528console</h2><ol><li><p>\u5728main.js\u5165\u53E3\u6587\u4EF6\uFF0C\u7ED1\u5B9A\u4EE5\u4E0B\u4EE3\u7801\u5373\u53EF\uFF1B</p><div class="language-vue"><pre><code>Vue.prototype.$log = window.console.log
// \u4E4B\u540E\u5C31\u53EF\u4EE5\u5728html\u91CC\u9762\u6253\u5370\u4E86
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{$log(&#39;this is message&#39;)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ol><h2 id="\u914D\u7F6Esvg"><a class="header-anchor" href="#\u914D\u7F6Esvg" aria-hidden="true">#</a> \u914D\u7F6Esvg</h2><ol><li><p>\u5B89\u88C5\uFF1Anpm i svg-sprite-loader</p></li><li><p>\u4FEE\u6539vue.config.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">resolve</span> <span class="token operator">=</span> <span class="token parameter">dir</span> <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> dir<span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
    <span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u89E3\u51B3\u9ED8\u8BA4svg\u4E0D\u5904\u7406src/assets\u6587\u4EF6\u5939</span>
        config<span class="token punctuation">.</span>module
            <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        
        config<span class="token punctuation">.</span>module
            <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;icons&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/assets&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// \u5904\u7406svg\u76EE\u5F55</span>
            <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">options</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                symbolId<span class="token operator">:</span> <span class="token string">&#39;icon-[name]&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5728components\u4E0B\u65B0\u5EFASvgIcon.vue</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>svgClass<span class="token punctuation">&quot;</span></span> <span class="token attr-name">aria-hidden</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>use</span> <span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>iconName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;SvgIcon&#39;</span><span class="token punctuation">,</span>
  props<span class="token operator">:</span> <span class="token punctuation">{</span>
    name<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> String<span class="token punctuation">,</span>
      required<span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    className<span class="token operator">:</span> <span class="token punctuation">{</span>
      type<span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  computed<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">iconName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">#icon-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">svgClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>className<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;svg-icon &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>className
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;svg-icon&#39;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">.svg-icon</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 1em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> -0.15em<span class="token punctuation">;</span>
  <span class="token property">fill</span><span class="token punctuation">:</span> currentColor<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li><li><p>\u5728assets\u76EE\u5F55\u4E0B\u65B0\u5EFAindex.js</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> SvgIcon <span class="token keyword">from</span> <span class="token string">&#39;@/components/SvgIcon&#39;</span><span class="token comment">// svg\u7EC4\u4EF6</span>

<span class="token comment">// register globally</span>
Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;svg-icon&#39;</span><span class="token punctuation">,</span> SvgIcon<span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token parameter">requireContext</span> <span class="token operator">=&gt;</span> requireContext<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>requireContext<span class="token punctuation">)</span>
<span class="token keyword">const</span> req <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>
<span class="token function">requireAll</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span>
</code></pre></div></li><li><p>\u5C06assets/index.js\u5F15\u5165\u5230main.js</p></li><li><p>\u63A5\u4E0B\u6765\u5C06\u9700\u8981\u4F7F\u7528svg\u7684\u56FE\u7247\u653E\u5165\u5230assets/icons\u4E0B\u9762\u5373\u53EF\uFF0C\u4F1A\u81EA\u52A8\u6CE8\u518C</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg-icon</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>\u6587\u4EF6\u540D<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div></li></ol><h2 id="\u914D\u7F6Epostcss\u63D2\u4EF6"><a class="header-anchor" href="#\u914D\u7F6Epostcss\u63D2\u4EF6" aria-hidden="true">#</a> \u914D\u7F6Epostcss\u63D2\u4EF6</h2><ol><li><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFApostcss.config.js\uFF0Cpostcss-pxtorem\u662F\u81EA\u52A8\u8F6C\u6362rem\uFF1B</p><p>\u914D\u7F6E\u6837\u5F0F\u5B98\u7F51\u6559\u7A0B\uFF1A <a href="https://cli.vuejs.org/zh/guide/css.html" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/guide/css.html</a></p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    plugins<span class="token operator">:</span> <span class="token punctuation">{</span>
        autoprefixer<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// \u6D4F\u89C8\u5668\u81EA\u52A8\u524D\u7F00</span>
        <span class="token comment">// \u81EA\u52A8\u8F6Crem\u5E03\u5C40\u7684\u63D2\u4EF6</span>
        <span class="token string">&#39;postcss-pxtorem&#39;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            rootValue<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span> <span class="token comment">// \u6839\u5927\u5C0F</span>
            propList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u5C5E\u6027\u9009\u62E9\u5668, *\u8868\u793A\u901A\u7528;</span>
            selectorBlackList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;weui&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;mu&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;no-&#39;</span><span class="token punctuation">]</span> <span class="token comment">// \u5FFD\u7565\u9009\u62E9\u5668, \u6B63\u5219\u5339\u914D,\u9009\u62E9\u5668\u6709\u6570\u7EC4\u7684\u90FD\u4E0D\u8F6C\u6362;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5982\u679C\u5728\u521B\u5EFA\u9879\u76EE\u65F6\uFF0C\u6CA1\u6709\u9009\u62E9postcss.config.js\u3001babel\u3001ESLint...\u5355\u6587\u4EF6\uFF0C\u9009\u62E9\u4E86package.json\uFF0C\u5219\u9700\u8981\u5728vue.config.js\u914D\u7F6E</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    css<span class="token operator">:</span> <span class="token punctuation">{</span>
        loaderOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
            postcss<span class="token operator">:</span> <span class="token punctuation">{</span>
                plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
                    <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;postcss-pxtorem&#39;</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
                        rootValue<span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
                        <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
                    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                    <span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\u5176\u4ED6\u7684\u63D2\u4EF6<span class="token punctuation">;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol><h2 id="\u914D\u7F6Emock"><a class="header-anchor" href="#\u914D\u7F6Emock" aria-hidden="true">#</a> \u914D\u7F6Emock</h2><ol><li><p>\u5B89\u88C5mock\uFF1A<code>npm i mockjs mocker-api -S</code></p></li><li><p>\u5BF9\u4FEE\u6539vue.config.js\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">var</span> apiMocker <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mocker-api&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token function">before</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">apiMocker</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;./mock/index.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
                proxy<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u8BBE\u7F6E\u4EE3\u7406\u7684\u8BDD</span>
                changeHost<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u521B\u5EFAmock/index.js</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u652F\u6301\u503C\u4E3A Object \u548C Array</span>
  <span class="token string">&#39;GET /api/users&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> users<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// GET \u53EF\u5FFD\u7565</span>
  <span class="token string">&#39;/api/users/1&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u652F\u6301\u81EA\u5B9A\u4E49\u51FD\u6570\uFF0CAPI \u53C2\u8003 express@4</span>
  <span class="token string">&#39;POST /api/users/create&#39;</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6DFB\u52A0\u8DE8\u57DF\u8BF7\u6C42\u5934</span>
    res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&#39;Access-Control-Allow-Origin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>mock\u57FA\u672C\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token string">&#39;data|80-100&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
          id<span class="token operator">:</span> <span class="token string">&#39;@id&#39;</span><span class="token punctuation">,</span>
          name<span class="token operator">:</span> <span class="token string">&#39;@name&#39;</span><span class="token punctuation">,</span>
          nicName<span class="token operator">:</span> <span class="token string">&#39;@last&#39;</span><span class="token punctuation">,</span>
          phone<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1[345678]\\d{9}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
          <span class="token string">&#39;age|11-99&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          address<span class="token operator">:</span> <span class="token string">&#39;@county(true)&#39;</span><span class="token punctuation">,</span>
          isMale<span class="token operator">:</span> <span class="token string">&#39;@boolean&#39;</span><span class="token punctuation">,</span>
          email<span class="token operator">:</span> <span class="token string">&#39;@email&#39;</span><span class="token punctuation">,</span>
          createTime<span class="token operator">:</span> <span class="token string">&#39;@datetime&#39;</span><span class="token punctuation">,</span>
          <span class="token function">avatar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> Mock<span class="token punctuation">.</span>Random<span class="token punctuation">.</span><span class="token function">image</span><span class="token punctuation">(</span><span class="token string">&#39;200*100&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#894FC4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;#FFF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;!&#39;</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div></li></ol>`,60),e=[o];function c(l,u,k,i,r,d){return a(),s("div",null,e)}var v=n(t,[["render",c]]);export{m as __pageData,v as default};
