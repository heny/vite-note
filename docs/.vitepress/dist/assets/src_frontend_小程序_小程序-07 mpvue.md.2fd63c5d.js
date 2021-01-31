import{o as a,c as n,d as s}from"./app.dc9dbd0c.js";const e='{"title":"小程序-07 mpvue","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、介绍","slug":"一、介绍"},{"level":2,"title":"二、创建页面","slug":"二、创建页面"}],"relativePath":"src\\\\frontend\\\\小程序\\\\小程序-07 mpvue.md","lastUpdated":1612089670066}',p={},l=s('<h1 id="小程序-07-mpvue"><a class="header-anchor" href="#小程序-07-mpvue" aria-hidden="true">#</a> 小程序-07 mpvue</h1><h2 id="一、介绍"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h2><ol><li><p>是一个美团开发的使用Vue.js开发小程序的前端框架，可以直接在微信小程序、百度、支付宝、头条都可以使用；</p></li><li><p>安装：在基于安装了vue cli脚手架的前提下，使用以下命令</p></li></ol><p>vue init mpvue/mpvue-quickstart demo；</p><ol start="3"><li><p>安装好之后需要npm install生成node_modules文件，之后npm start启动；</p></li><li><p>启动好的脚手架不在浏览器打开，需要在微信开发工具导入，直接在微信开发工具中预览；</p></li></ol><h2 id="二、创建页面"><a class="header-anchor" href="#二、创建页面" aria-hidden="true">#</a> 二、创建页面</h2><ol><li>之后在pages下面创建一个目录，创建页面需要重新npm start一下，在app.json里面修改，</li><li>在目录下创建一个main.js文件9</li></ol><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./index&#39;</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="3"><li>创建一个index.vue，在里面写代码；</li><li>也可以创建一个main.json，来配置当前页面；如微信小程序中的json文件；</li></ol><p>mpvue注意事项：</p><ol><li>新建页面后，需要重新npm run dev；</li><li>在mpvue中可以直接使用微信中的标签，也可以使用html中的标签，会正确解析；</li><li>在mpvue中即可以使用mpvue的生命周期，也可以使用vue的生命周期；</li></ol>',11);p.render=function(s,e,p,t,o,i){return a(),n("div",null,[l])};export default p;export{e as __pageData};
