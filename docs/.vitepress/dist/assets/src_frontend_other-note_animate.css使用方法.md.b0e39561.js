import{o as n,c as a,d as s}from"./app.f43337b9.js";const t='{"title":"animate.css使用方法","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、引入","slug":"一、引入"}],"relativePath":"src\\\\frontend\\\\other-note\\\\animate.css使用方法.md","lastUpdated":1612089669963}',p={},e=s('<h1 id="animate-css使用方法"><a class="header-anchor" href="#animate-css使用方法" aria-hidden="true">#</a> animate.css使用方法</h1><h2 id="一、引入"><a class="header-anchor" href="#一、引入" aria-hidden="true">#</a> 一、引入</h2><ol><li><p>官网： <a href="https://daneden.github.io/animate.css/" target="_blank" rel="noopener noreferrer">https://daneden.github.io/animate.css/</a>；</p></li><li><p>官方cdn</p></li></ol><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="3"><li>使用方法</li></ol><p>打开官网，查看需要的动画名称，上面的名称就是动画的类名，直接写上类名和animated类名即可；</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>animated bounce<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><ol start="4"><li>可用的类名 infinite，无限循环；</li></ol><p>delay-2s；修改动画的延迟出现的时间；</p><p>delay-2s/3s/4s/5s；animate定义的延迟类名；需要自定义延迟可以添加到css里面；</p><p>控制动画速度：.slow(2s)，.slower(3s)，.fast(800ms)，.faster(500ms)；（小括号是说明，不要加小括号）</p><ol start="5"><li>给动画添加回调函数</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nelement<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationed&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;动画完成&#39;</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="6"><li>使用下面函数进行简单添加删除动画</li></ol><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">animateCSS</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> animationName<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> node <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n    node<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;animated&#39;</span><span class="token punctuation">,</span> animationName<span class="token punctuation">)</span>\n\n    <span class="token keyword">function</span> <span class="token function">handleAnimationEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        node<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">&#39;animated&#39;</span><span class="token punctuation">,</span> animationName<span class="token punctuation">)</span>\n        node<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationend&#39;</span><span class="token punctuation">,</span> handleAnimationEnd<span class="token punctuation">)</span>\n\n\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> callback <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span><span class="token punctuation">)</span> <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    node<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;animationend&#39;</span><span class="token punctuation">,</span> handleAnimationEnd<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>使用时：animateCSS(&#39;div&#39;,&#39;fadeIn&#39;,function(){alert(&#39;动画完成&#39;)})；回调函数可写可不写；</p>',16);p.render=function(s,t,p,o,c,l){return n(),a("div",null,[e])};export default p;export{t as __pageData};
