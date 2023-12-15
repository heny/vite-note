import{_ as n,c as s,o as a,d as p}from"./app.8aafc8a7.js";const g='{"title":"TS-02 \u63A5\u53E3\u5B9A\u4E49\u3001\u51FD\u6570\u5B9A\u4E49","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u63A5\u53E3","slug":"\u4E00\u3001\u63A5\u53E3"},{"level":3,"title":"\u4F7F\u7528interface\u6765\u5B9A\u4E49\u63A5\u53E3","slug":"\u4F7F\u7528interface\u6765\u5B9A\u4E49\u63A5\u53E3"},{"level":3,"title":"\u4EFB\u610F\u5C5E\u6027","slug":"\u4EFB\u610F\u5C5E\u6027"},{"level":3,"title":"\u53EA\u8BFB\u5C5E\u6027","slug":"\u53EA\u8BFB\u5C5E\u6027"},{"level":3,"title":"\u5B9A\u4E49\u51FD\u6570","slug":"\u5B9A\u4E49\u51FD\u6570"},{"level":3,"title":"\u7D22\u5F15\u7C7B\u578B \u4F7F\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4","slug":"\u7D22\u5F15\u7C7B\u578B-\u4F7F\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4"},{"level":3,"title":"\u63A5\u53E3\u7EE7\u627F","slug":"\u63A5\u53E3\u7EE7\u627F"},{"level":3,"title":"\u6DF7\u5408\u7C7B\u578B","slug":"\u6DF7\u5408\u7C7B\u578B"},{"level":2,"title":"\u4E8C\u3001\u51FD\u6570","slug":"\u4E8C\u3001\u51FD\u6570"},{"level":3,"title":"\u51FD\u6570\u58F0\u660E","slug":"\u51FD\u6570\u58F0\u660E"},{"level":3,"title":"\u51FD\u6570\u58F0\u660E\u5B9A\u4E49\u7C7B\u578B","slug":"\u51FD\u6570\u58F0\u660E\u5B9A\u4E49\u7C7B\u578B"},{"level":3,"title":"\u51FD\u6570\u8868\u8FBE\u5F0F","slug":"\u51FD\u6570\u8868\u8FBE\u5F0F"},{"level":3,"title":"\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\u51FD\u6570","slug":"\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\u51FD\u6570"},{"level":3,"title":"\u53EF\u9009\u53C2\u6570","slug":"\u53EF\u9009\u53C2\u6570"},{"level":3,"title":"\u9ED8\u8BA4\u503C","slug":"\u9ED8\u8BA4\u503C"},{"level":3,"title":"\u4E0D\u786E\u5B9A\u5F62\u53C2\u4E2A\u6570","slug":"\u4E0D\u786E\u5B9A\u5F62\u53C2\u4E2A\u6570"},{"level":3,"title":"\u51FD\u6570\u91CD\u8F7D","slug":"\u51FD\u6570\u91CD\u8F7D"}],"relativePath":"src/frontend/Typescript/ts-02 \u63A5\u53E3\u3001\u51FD\u6570.md","lastUpdated":1615699077000}',t={},e=p(`<h1 id="ts-02-\u63A5\u53E3\u5B9A\u4E49\u3001\u51FD\u6570\u5B9A\u4E49" tabindex="-1">TS-02 \u63A5\u53E3\u5B9A\u4E49\u3001\u51FD\u6570\u5B9A\u4E49 <a class="header-anchor" href="#ts-02-\u63A5\u53E3\u5B9A\u4E49\u3001\u51FD\u6570\u5B9A\u4E49" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u63A5\u53E3" tabindex="-1">\u4E00\u3001\u63A5\u53E3 <a class="header-anchor" href="#\u4E00\u3001\u63A5\u53E3" aria-hidden="true">#</a></h2><blockquote><p>\u63A5\u53E3\u4E3A\u7C7B\u578B\u63A5\u53E3\uFF0C\u63D0\u4F9B\u7ED9\u53D8\u91CF\u4F7F\u7528\u7C7B\u578B\u7684\uFF1B</p></blockquote><ul><li>\u751F\u6210<code>tslint.json</code>\u6587\u4EF6\uFF1A<code>tslint --init</code></li><li>\u914D\u7F6E<code>tslint</code>\u6587\u4EF6</li></ul><div class="language-json"><pre><code><span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;quotemark&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53D6\u6D88\u53CC\u5F15\u53F7</span>
    <span class="token property">&quot;semicolon&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u53D6\u6D88\u7ED3\u5C3E\u5206\u53F7</span>
    <span class="token property">&quot;interface-name&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;never-prefix&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//interface\u63A5\u53E3\u4E0D\u9700\u8981\u524D\u7F00</span>
    <span class="token property">&quot;object-listeral-sort-keys&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u63A5\u53E3\u6392\u5E8F\u4E0D\u6309\u7167\u9996\u5B57\u6BCD\u6392\u5E8F</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u4F7F\u7528interface\u6765\u5B9A\u4E49\u63A5\u53E3" tabindex="-1">\u4F7F\u7528interface\u6765\u5B9A\u4E49\u63A5\u53E3 <a class="header-anchor" href="#\u4F7F\u7528interface\u6765\u5B9A\u4E49\u63A5\u53E3" aria-hidden="true">#</a></h3><p>\u5B9A\u4E49\u63A5\u53E3\u4F7F\u7528\u9017\u53F7\u9694\u5F00\u3001\u5206\u53F7\u9694\u5F00\u3001\u6362\u884C\u90FD\u662F\u53EF\u4EE5\u7684\uFF1B</p><div class="language-js"><pre><code><span class="token comment">// \u5BF9\u8C61\u5B9A\u4E49\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
    color<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// \u53EF\u9009\u5C5E\u6027</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// \u5FC5\u586B\u5C5E\u6027</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> getVegetable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>color<span class="token punctuation">,</span> type<span class="token punctuation">}</span><span class="token operator">:</span> Vegetable<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>color <span class="token operator">?</span> <span class="token punctuation">(</span>color <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6570\u7EC4\u5B9A\u4E49\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">ArrInter</span> <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    <span class="token number">1</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">arr</span><span class="token operator">:</span> ArrInter <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>
</code></pre></div><h3 id="\u4EFB\u610F\u5C5E\u6027" tabindex="-1">\u4EFB\u610F\u5C5E\u6027 <a class="header-anchor" href="#\u4EFB\u610F\u5C5E\u6027" aria-hidden="true">#</a></h3><ul><li>\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00</li></ul><div class="language-ts"><pre><code><span class="token function">getVegetable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;tomato&#39;</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span> <span class="token keyword">as</span> Vegetable<span class="token punctuation">)</span> <span class="token comment">// \u7C7B\u578B\u65AD\u8A00, \u6307\u5B9A\u5C31\u662FVegetable</span>
</code></pre></div><ul><li>\u4F7F\u7528<code>[propName: string]</code></li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
    color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// \u7D22\u5F15\u53EA\u80FD\u662Fstring\u6216number \u5C5E\u6027\u662F\u5B57\u7B26\u4E32, \u503C\u662F\u4EFB\u610F\u7C7B\u578B</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6CE8\u610F\uFF1A\u5982\u679C\u503C\u4E0D\u662Fany\uFF0C\u800C\u662Fstring\u6216number\uFF0C\u5219\u6210\u5458\u90FD\u5F97\u662Fstring\u6216number\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6216\u8005\uFF1B</p><ul><li>\u63D0\u53D6\u5BF9\u8C61</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> vegetableInfo <span class="token operator">=</span> <span class="token punctuation">{</span>
    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>
    type<span class="token operator">:</span> <span class="token string">&#39;tomato&#39;</span><span class="token punctuation">,</span>
    size<span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
<span class="token function">getVegetable</span><span class="token punctuation">(</span>vegetableInfo<span class="token punctuation">)</span> <span class="token comment">// \u5C06\u5BF9\u8C61\u53D6\u51FA\u5B58\u53D8\u91CF, \u91CC\u9762\u7684\u5C5E\u6027\u591A\u4E86\u65E0\u6240\u8C13</span>
</code></pre></div><h3 id="\u53EA\u8BFB\u5C5E\u6027" tabindex="-1">\u53EA\u8BFB\u5C5E\u6027 <a class="header-anchor" href="#\u53EA\u8BFB\u5C5E\u6027" aria-hidden="true">#</a></h3><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
    color<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    readonly type<span class="token operator">:</span> string <span class="token comment">// \u53EA\u8BFB\u7684, \u65E0\u6CD5\u88AB\u4FEE\u6539</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token literal-property property">obj</span><span class="token operator">:</span> Vegetable <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;tomato&#39;</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;carrot&#39;</span> <span class="token comment">// \u62A5\u9519</span>
</code></pre></div><h3 id="\u5B9A\u4E49\u51FD\u6570" tabindex="-1">\u5B9A\u4E49\u51FD\u6570 <a class="header-anchor" href="#\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">AddFun</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span>num1<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">num2</span><span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>

<span class="token comment">//\u4F7F\u7528</span>
<span class="token keyword">const</span> <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token function-variable function">AddFun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n1 <span class="token operator">+</span> n2
</code></pre></div><h3 id="\u7D22\u5F15\u7C7B\u578B-\u4F7F\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4" tabindex="-1">\u7D22\u5F15\u7C7B\u578B \u4F7F\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4 <a class="header-anchor" href="#\u7D22\u5F15\u7C7B\u578B-\u4F7F\u7528\u63A5\u53E3\u5B9A\u4E49\u6570\u7EC4" aria-hidden="true">#</a></h3><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">RoleDic</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">role</span><span class="token operator">:</span> RoleDic <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span> <span class="token comment">// \u53EA\u80FD\u662F\u6570\u5B57\u7C7B\u578B\u7684\u5C5E\u6027\u540D, \u5426\u5219\u62A5\u9519</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u5F53\u6307\u5B9A\u7684\u7D22\u5F15\u7C7B\u578B\u4E3Astring\u65F6</span>
<span class="token keyword">interface</span> <span class="token class-name">RoleDic</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>id<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token literal-property property">role</span><span class="token operator">:</span> RoleDic <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span> <span class="token comment">// \u6570\u5B57\u4E5F\u4E0D\u4F1A\u62A5\u9519, \u56E0\u4E3A\u5C5E\u6027\u540D\u4F1A\u88AB\u8C03\u7528toString\u8F6C\u6362</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u63A5\u53E3\u7EE7\u627F" tabindex="-1">\u63A5\u53E3\u7EE7\u627F <a class="header-anchor" href="#\u63A5\u53E3\u7EE7\u627F" aria-hidden="true">#</a></h3><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> string
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Tomato</span> <span class="token keyword">extends</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">radius</span><span class="token operator">:</span> number
<span class="token punctuation">}</span>
<span class="token comment">// Tomato\u63A5\u53E3\u7EE7\u627F\u4E86Vegetable\u63A5\u53E3, \u5728\u4F7F\u7528\u65F6\u5FC5\u987B\u4F20\u5165\u4E24\u4E2A\u53C2\u6570, color\u548Cradius;</span>
</code></pre></div><h3 id="\u6DF7\u5408\u7C7B\u578B" tabindex="-1">\u6DF7\u5408\u7C7B\u578B <a class="header-anchor" href="#\u6DF7\u5408\u7C7B\u578B" aria-hidden="true">#</a></h3><blockquote><p>ts3.1\u4E4B\u524D\u7684\u7248\u672C\u9700\u8981\u501F\u52A9\u547D\u540D\u7A7A\u95F4\uFF0Cts3.1\u4E4B\u540E\u7684\u7248\u672C\u53EF\u4EE5\u76F4\u63A5\u5B9A\u4E49\u63A5\u53E3\u6DF7\u5408\u7C7B\u578B</p></blockquote><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>
    <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span> <span class="token comment">// \u8FD4\u56DE\u7A7A\u7684\u51FD\u6570</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> number <span class="token comment">// \u7ED9\u51FD\u6570\u6DFB\u52A0count\u5C5E\u6027</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u8FD4\u56DE\u7684\u7C7B\u578B\u5C31\u662FCounter,\u6709\u4E00\u4E2A\u51FD\u6570\u548C\u4E00\u4E2A\u5C5E\u6027</span>
<span class="token keyword">const</span> getCounter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">Counter</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>c<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">}</span>
    c<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">return</span> c
<span class="token punctuation">}</span>

<span class="token comment">// \u63A5\u6536\u7684\u7C7B\u578B\u5C31\u662FCounter, \u6709\u51FD\u6570\u548C\u5C5E\u6027</span>
<span class="token keyword">const</span> <span class="token literal-property property">counter</span><span class="token operator">:</span> Counter <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="\u603B\u7ED3" tabindex="-1">\u603B\u7ED3 <a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a></h4><ol><li>\u5B9A\u4E49\u63A5\u53E3</li></ol><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">,</span>
    age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>
    readonly size<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// \u53EA\u8BFB\u5C5E\u6027</span>
    <span class="token punctuation">[</span>prop<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any <span class="token comment">// \u591A\u4F59\u5C5E\u6027\u8981\u5199any</span>
<span class="token punctuation">}</span>
</code></pre></div><ol start="2"><li>\u7D22\u5F15\u7C7B\u578B\uFF0C\u5F53\u4E3Astring\u65F6\uFF0C\u53EF\u4EE5\u662F\u6570\u5B57\u548C\u5B57\u7B26\u4E32\uFF0C\u5F53\u4E3Anumber\u65F6\uFF0C\u53EA\u80FD\u662F\u6570\u5B57</li><li>\u5F53\u53C2\u6570\u4F20\u5165\u8FC7\u591A\u65F6\uFF0C\u89E3\u51B3\u529E\u6CD5 <ul><li>\u89E3\u51B3\u4E00\uFF1A\u5B9A\u4E49[prop:string]: any</li><li>\u89E3\u51B3\u4E8C\uFF1A\u4F7F\u7528\u7C7B\u578B\u65AD\u8A00\uFF0C\u5F3A\u884C\u6307\u5B9A\u7C7B\u578B</li><li>\u89E3\u51B3\u4E09\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u53D8\u91CF\uFF0C\u4F20\u5165\u65B9\u6CD5</li></ul></li><li>\u63A5\u53E3\u7EE7\u627F\uFF1A\u4F7F\u7528<code>extends</code>\uFF0C\u548C\u7C7B\u76F8\u4F3C</li><li>\u6DF7\u5408\u7C7B\u578B\uFF1A\u5728\u4E00\u4E2A\u51FD\u6570\u4E0A\u9762\u5373\u6709\u5C5E\u6027\u4E5F\u6709\u65B9\u6CD5</li></ol><h2 id="\u4E8C\u3001\u51FD\u6570" tabindex="-1">\u4E8C\u3001\u51FD\u6570 <a class="header-anchor" href="#\u4E8C\u3001\u51FD\u6570" aria-hidden="true">#</a></h2><h3 id="\u51FD\u6570\u58F0\u660E" tabindex="-1">\u51FD\u6570\u58F0\u660E <a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token comment">// \u51FD\u6570\u58F0\u660E</span>
<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// \u51FD\u6570\u8868\u8FBE\u5F0F</span>
<span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre></div><h3 id="\u51FD\u6570\u58F0\u660E\u5B9A\u4E49\u7C7B\u578B" tabindex="-1">\u51FD\u6570\u58F0\u660E\u5B9A\u4E49\u7C7B\u578B <a class="header-anchor" href="#\u51FD\u6570\u58F0\u660E\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a></h3><ul><li>\u51FD\u6570\u58F0\u660E\u9700\u8981\u628A\u8F93\u5165\u548C\u8F93\u51FA\u90FD\u8003\u8651\u5230</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// \u591A\u4F59\u53C2\u6570\u62A5\u9519</span>
</code></pre></div><h3 id="\u51FD\u6570\u8868\u8FBE\u5F0F" tabindex="-1">\u51FD\u6570\u8868\u8FBE\u5F0F <a class="header-anchor" href="#\u51FD\u6570\u8868\u8FBE\u5F0F" aria-hidden="true">#</a></h3><div class="language-ts"><pre><code><span class="token comment">// \u9519\u8BEF\u7684\u51FD\u6570\u8868\u8FBE\u5F0F\u58F0\u660E</span>
<span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg1 <span class="token operator">+</span> arg2
<span class="token punctuation">}</span>
<span class="token comment">// \u9519\u8BEF\u7684\u58F0\u660E\u65B9\u5F0Fadd\u662F\u901A\u8FC7\u7C7B\u578B\u63A8\u8BBA\u51FA\u6765\u7684\uFF0C\u4E0B\u9762\u7684\u662F\u6B63\u786E\u7684\u58F0\u660E\u7C7B\u578B;</span>

<span class="token comment">// \u6B63\u786E\u7684\u7C7B\u578B\u58F0\u660E</span>
<span class="token keyword">let</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> arg1 <span class="token operator">+</span> arg2
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>
<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2 <span class="token comment">// \u4F1A\u62A5\u9519, arg1\u4E0D\u80FD\u4E3Astring</span>

<span class="token keyword">let</span> arg3<span class="token punctuation">;</span>
<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2 <span class="token operator">+</span> arg3 <span class="token comment">// arg3\u662F\u4E0D\u9700\u8981\u5199\u5728\u53C2\u6570\u91CC\u9762\u7684</span>
</code></pre></div><h3 id="\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\u51FD\u6570" tabindex="-1">\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\u51FD\u6570 <a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\u51FD\u6570" aria-hidden="true">#</a></h3><blockquote><p>\u7C7B\u578B\u522B\u540D\u4F7F\u7528type\u5B9A\u4E49</p></blockquote><div class="language-ts"><pre><code><span class="token comment">// \u4F7F\u7528\u522B\u540D\u5B9A\u4E49\u51FD\u6570</span>
<span class="token keyword">type</span> <span class="token class-name">Add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>

<span class="token keyword">type</span> <span class="token class-name">isString</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token comment">// isString\u5C31\u662Fstring\u4E86</span>
</code></pre></div><h3 id="\u53EF\u9009\u53C2\u6570" tabindex="-1">\u53EF\u9009\u53C2\u6570 <a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570" aria-hidden="true">#</a></h3><blockquote><p>\u5728js\u4E2D\uFF0C\u53EF\u9009\u53C2\u6570\u53EF\u4EE5\u662F\u5728\u4EFB\u4F55\u5730\u65B9\uFF0C\u53EA\u8981\u4F7F\u7528undefined\u5360\u4F4D\uFF1B</p><p>\u5728ts\u4E2D\uFF0C\u53EF\u9009\u53C2\u6570\u5FC5\u987B\u662F\u5728\u6700\u540E\u9762\uFF1B</p></blockquote><div class="language-js"><pre><code>type <span class="token function-variable function">AddFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg1</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token literal-property property">arg2</span><span class="token operator">:</span> number<span class="token punctuation">,</span> arg3<span class="token operator">?</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number

<span class="token keyword">let</span> <span class="token literal-property property">addF</span><span class="token operator">:</span> AddFunction
<span class="token function-variable function">addF</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg1</span><span class="token operator">:</span>number<span class="token punctuation">,</span> <span class="token literal-property property">arg2</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2
</code></pre></div><h3 id="\u9ED8\u8BA4\u503C" tabindex="-1">\u9ED8\u8BA4\u503C <a class="header-anchor" href="#\u9ED8\u8BA4\u503C" aria-hidden="true">#</a></h3><blockquote><p>\u5728\u5B9A\u4E49\u9ED8\u8BA4\u503C\u53EF\u4EE5\u4E0D\u9700\u8981\u7C7B\u578B\u5224\u65AD, \u56E0\u4E3A\u4F1A\u81EA\u52A8\u5224\u65AD\u7C7B\u578B, \u5728\u4F20\u5165\u65F6\u4E5F\u4E0D\u80FD\u4F20\u5165\u5B57\u7B26\u4E32\u4E86</p></blockquote><div class="language-js"><pre><code><span class="token function-variable function">addF</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg1</span><span class="token operator">:</span> number<span class="token punctuation">,</span> arg2 <span class="token operator">=</span> <span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2
</code></pre></div><h3 id="\u4E0D\u786E\u5B9A\u5F62\u53C2\u4E2A\u6570" tabindex="-1">\u4E0D\u786E\u5B9A\u5F62\u53C2\u4E2A\u6570 <a class="header-anchor" href="#\u4E0D\u786E\u5B9A\u5F62\u53C2\u4E2A\u6570" aria-hidden="true">#</a></h3><blockquote><p>args\u4E3A\u6570\u7EC4\uFF0C\u56E0\u6B64\u540E\u9762\u7684\u7C7B\u578B\u4F7F\u7528\u6570\u7EC4\u5224\u65AD\uFF0C\u4F7F\u7528...\u63A5\u6536\u5269\u4F59\u7684\u53C2\u6570</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">handleData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">arg1</span><span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="\u51FD\u6570\u91CD\u8F7D" tabindex="-1">\u51FD\u6570\u91CD\u8F7D <a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a></h3><blockquote><p>\u91CD\u8F7D\u5141\u8BB8\u4E00\u4E2A\u51FD\u6570\u63A5\u53D7\u4E0D\u540C\u6570\u91CF\u6216\u7C7B\u578B\u7684\u53C2\u6570\u65F6\uFF0C\u4F5C\u4E0D\u540C\u7684\u5904\u7406\uFF1B</p><p>\u51FD\u6570\u91CD\u8F7D\u53EA\u80FD\u4F7F\u7528function\u6765\u5B9A\u4E49\uFF0C\u4E0D\u80FD\u4F7F\u7528\u63A5\u53E3\u548C\u7C7B\u578B\u522B\u540D\u5B9A\u4E49\uFF1B</p></blockquote><div class="language-js"><pre><code><span class="token comment">// \u51FD\u6570\u4E4B\u524D\u5B9A\u4E49\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number <span class="token operator">|</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// \u6709\u4E00\u4E2A\u7F3A\u70B9, \u4E0D\u80FD\u591F\u7CBE\u786E\u7684\u8868\u8FBE;</span>

<span class="token comment">// \u51FD\u6570\u91CD\u8F7D</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">x</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,54),o=[e];function c(l,r,u,k,i,d){return a(),s("div",null,o)}var b=n(t,[["render",c]]);export{g as __pageData,b as default};
