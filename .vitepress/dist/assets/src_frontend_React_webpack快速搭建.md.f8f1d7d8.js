import{o as n,c as a,d as s}from"./app.246f1876.js";const p='{"title":"webpack快速搭建react项目","description":"","frontmatter":{},"relativePath":"src/frontend/React/webpack快速搭建.md","lastUpdated":1615699077403}',t={},e=s('<h1 id="webpack快速搭建react项目"><a class="header-anchor" href="#webpack快速搭建react项目" aria-hidden="true">#</a> webpack快速搭建react项目</h1><ol><li><p>创建文件夹，之后执行以下命令</p><ul><li><code>yarn init -y</code></li><li>安装webpack相关：<code>yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin -D</code></li><li>安装babel相关：<code>yarn add babel-loader@7.1.5 babel-core babel-preset-react babel-preset-env -D</code> 安装开发依赖</li><li>安装react相关：<code>yarn add react react-dom</code> 安装到生产环境</li></ul></li><li><p>创建文件夹src/index.html，src/main.js</p></li><li><p>创建.babelrc文件</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;presets&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;react&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p>创建webpack.config.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>\n  output<span class="token operator">:</span> <span class="token punctuation">{</span>\n      filename<span class="token operator">:</span> <span class="token string">&#39;./src/main.js&#39;</span><span class="token punctuation">,</span>\n      path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  module<span class="token operator">:</span> <span class="token punctuation">{</span>\n    rules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n      test<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> use<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      template<span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span>\n <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li></ol>',2);t.render=function(s,p,t,o,c,l){return n(),a("div",null,[e])};export default t;export{p as __pageData};
