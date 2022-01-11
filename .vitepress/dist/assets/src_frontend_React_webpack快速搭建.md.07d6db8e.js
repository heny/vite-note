import{_ as n,c as a,o as s,d as p}from"./app.e5c17f53.js";const y='{"title":"webpack\u5FEB\u901F\u642D\u5EFAreact\u9879\u76EE","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontend/React/webpack\u5FEB\u901F\u642D\u5EFA.md","lastUpdated":1615699077000}',t={},e=p(`<h1 id="webpack\u5FEB\u901F\u642D\u5EFAreact\u9879\u76EE" tabindex="-1">webpack\u5FEB\u901F\u642D\u5EFAreact\u9879\u76EE <a class="header-anchor" href="#webpack\u5FEB\u901F\u642D\u5EFAreact\u9879\u76EE" aria-hidden="true">#</a></h1><ol><li><p>\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u4E4B\u540E\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4</p><ul><li><code>yarn init -y</code></li><li>\u5B89\u88C5webpack\u76F8\u5173\uFF1A<code>yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin -D</code></li><li>\u5B89\u88C5babel\u76F8\u5173\uFF1A<code>yarn add babel-loader@7.1.5 babel-core babel-preset-react babel-preset-env -D</code> \u5B89\u88C5\u5F00\u53D1\u4F9D\u8D56</li><li>\u5B89\u88C5react\u76F8\u5173\uFF1A<code>yarn add react react-dom</code> \u5B89\u88C5\u5230\u751F\u4EA7\u73AF\u5883</li></ul></li><li><p>\u521B\u5EFA\u6587\u4EF6\u5939src/index.html\uFF0Csrc/main.js</p></li><li><p>\u521B\u5EFA.babelrc\u6587\u4EF6</p><div class="language-js"><pre><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li><li><p>\u521B\u5EFAwebpack.config.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>
 <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div></li></ol>`,2),o=[e];function c(r,l,i,u,k,d){return s(),a("div",null,o)}var b=n(t,[["render",c]]);export{y as __pageData,b as default};
