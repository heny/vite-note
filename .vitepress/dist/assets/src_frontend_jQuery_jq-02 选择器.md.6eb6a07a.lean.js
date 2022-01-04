import{_ as n,c as a,o as s,d as t}from"./app.310fb107.js";const b='{"title":"jq-02 \u9009\u62E9\u5668","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u9009\u62E9\u5668","slug":"\u4E00\u3001\u9009\u62E9\u5668"},{"level":3,"title":"css\u9009\u62E9\u5668","slug":"css\u9009\u62E9\u5668"},{"level":3,"title":"\u57FA\u672C\u7B5B\u9009\u9009\u62E9\u5668","slug":"\u57FA\u672C\u7B5B\u9009\u9009\u62E9\u5668"},{"level":3,"title":"\u5185\u5BB9\u9009\u62E9\u5668","slug":"\u5185\u5BB9\u9009\u62E9\u5668"},{"level":3,"title":"\u9690\u85CF\u770B\u89C1","slug":"\u9690\u85CF\u770B\u89C1"},{"level":3,"title":"\u5C5E\u6027\u9009\u62E9\u5668","slug":"\u5C5E\u6027\u9009\u62E9\u5668"},{"level":3,"title":"\u5B50\u5143\u7D20\u9009\u62E9\u5668","slug":"\u5B50\u5143\u7D20\u9009\u62E9\u5668"},{"level":3,"title":"\u8868\u5355\u9009\u62E9\u5668","slug":"\u8868\u5355\u9009\u62E9\u5668"},{"level":3,"title":"\u8868\u5355\u5BF9\u8C61\u5C5E\u6027","slug":"\u8868\u5355\u5BF9\u8C61\u5C5E\u6027"},{"level":2,"title":"\u4E8C\u3001\u8FED\u4EE3","slug":"\u4E8C\u3001\u8FED\u4EE3"},{"level":3,"title":"$.each","slug":"each"},{"level":3,"title":"$.map","slug":"map"},{"level":2,"title":"\u4E09\u3001extend","slug":"\u4E09\u3001extend"},{"level":3,"title":"\u6269\u5C55","slug":"\u6269\u5C55"},{"level":3,"title":"\u6DF1\u62F7\u8D1D","slug":"\u6DF1\u62F7\u8D1D"},{"level":3,"title":"\u6D45\u62F7\u8D1D(\u539F\u751F\u65B9\u6CD5)","slug":"\u6D45\u62F7\u8D1D-\u539F\u751F\u65B9\u6CD5"},{"level":2,"title":"\u56DB\u3001\u65B9\u6CD5","slug":"\u56DB\u3001\u65B9\u6CD5"},{"level":2,"title":"\u9AD8\u9891\u9762\u8BD5\u9898","slug":"\u9AD8\u9891\u9762\u8BD5\u9898"}],"relativePath":"src/frontend/jQuery/jq-02 \u9009\u62E9\u5668.md","lastUpdated":1615699077000}',o={},e=t(`__VP_STATIC_START__<h1 id="jq-02-\u9009\u62E9\u5668"><a class="header-anchor" href="#jq-02-\u9009\u62E9\u5668" aria-hidden="true">#</a> jq-02 \u9009\u62E9\u5668</h1><h2 id="\u4E00\u3001\u9009\u62E9\u5668"><a class="header-anchor" href="#\u4E00\u3001\u9009\u62E9\u5668" aria-hidden="true">#</a> \u4E00\u3001\u9009\u62E9\u5668</h2><p>\u9009\u62E9\u5668\u7684\u5B9E\u73B0\u6BD4\u8F83\u590D\u6742\uFF0C\u6D88\u8017\u6027\u80FD\u6BD4\u8F83\u5927\uFF0C\u5EFA\u8BAE\u76F8\u540C\u7684\u9009\u62E9\u5668\u8FDB\u884C\u53D8\u91CF\u4FDD\u5B58\u64CD\u4F5C\uFF0C\u907F\u514D\u91CD\u590D\u4F7F\u7528\u9009\u62E9\u5668\uFF1B</p><h3 id="css\u9009\u62E9\u5668"><a class="header-anchor" href="#css\u9009\u62E9\u5668" aria-hidden="true">#</a> css\u9009\u62E9\u5668</h3><p>\u53EF\u4EE5\u4F7F\u7528\u6240\u6709\u7684\u6837\u5F0F\u9009\u62E9\u5668\uFF1B</p><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>#id</code></td><td>\u83B7\u53D6id\u540D</td></tr><tr><td><code>.class</code></td><td>\u83B7\u53D6class\u7C7B\u540D</td></tr><tr><td><code>div</code></td><td>\u83B7\u53D6\u6807\u7B7E\u540D</td></tr><tr><td><code>div,p,li</code></td><td>\u7FA4\u7EC4\u9009\u62E9\u5668</td></tr><tr><td><code>div.red</code></td><td>\u83B7\u53D6class\u4E3Ared\u7684div\u6807\u7B7E</td></tr><tr><td><code>div&gt;span</code></td><td>\u83B7\u53D6div\u4E0B\u7684\u76F4\u63A5\u5B50\u5143\u7D20span\uFF1B</td></tr><tr><td><code>div span</code></td><td>div\u4E0B\u7684\u6240\u6709\u5B50\u5143\u7D20span\u6807\u7B7E\uFF1B</td></tr><tr><td><code>div~span</code></td><td>\u9009\u62E9\u4E0B\u9762\u6240\u6709\u7684\uFF1B</td></tr></tbody></table><h3 id="\u57FA\u672C\u7B5B\u9009\u9009\u62E9\u5668"><a class="header-anchor" href="#\u57FA\u672C\u7B5B\u9009\u9009\u62E9\u5668" aria-hidden="true">#</a> \u57FA\u672C\u7B5B\u9009\u9009\u62E9\u5668</h3><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>:first</code></td><td>\u7B2C\u4E00\u4E2A</td></tr><tr><td><code>:last</code></td><td>\u6700\u540E\u4E00\u4E2A</td></tr><tr><td><code>:eq(index)</code></td><td>\u6307\u5B9A\u7B2C\u4E00\u4E2A\uFF0C\u4E0B\u6807\u4ECE0\u5F00\u59CB\uFF1B</td></tr><tr><td><code>:not()</code></td><td>\u9664\u4E86\u5C0F\u62EC\u53F7\u7684\u6807\u7B7E\uFF1B</td></tr><tr><td><code>:odd</code></td><td>\u4E0B\u6807\u4E3A\u5947\u6570\u7684\u6807\u7B7E\uFF0C\u4E0B\u6807\u662F\u4ECE0\u5F00\u59CB\u7684\uFF0C\u6240\u4EE5\u9009\u62E9\u7684\u662F\u5076\u6570\u6807\u7B7E\uFF1B</td></tr><tr><td><code>:even</code></td><td>\u4E0B\u6807\u4E3A\u5076\u6570\u7684\u6807\u7B7E</td></tr><tr><td><code>:gt(1)</code></td><td>\u4E0B\u6807\u5927\u4E8E1\u7684\u5143\u7D20</td></tr><tr><td><code>:lt(1)</code></td><td>\u4E0B\u6807\u5C0F\u4E8E1\u7684\u5143\u7D20\uFF1B</td></tr><tr><td><code>:header</code></td><td>\u6240\u6709h\u6807\u7B7E\uFF1B</td></tr><tr><td><code>:root</code></td><td>\u9009\u4E2Dhtml\u6807\u7B7E\uFF1B</td></tr><tr><td><code>:animated</code></td><td>\u5339\u914D\u6240\u6709\u6B63\u5728\u6267\u884C\u52A8\u753B\u6548\u679C\u7684\u5143\u7D20\uFF1B</td></tr></tbody></table><p><code>$(&quot;div:not(:animated)&quot;).animate({&quot;width&quot;:&quot;+=200&quot;})</code> //\u7ED9\u6CA1\u6709\u5728\u52A8\u753B\u7684div\uFF0C\u52A0\u957F</p><h3 id="\u5185\u5BB9\u9009\u62E9\u5668"><a class="header-anchor" href="#\u5185\u5BB9\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5185\u5BB9\u9009\u62E9\u5668</h3><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>:contains(\u6211)</code></td><td>\u9009\u62E9\u5185\u5BB9\u6709\u6211\u7684\u6807\u7B7E</td></tr><tr><td><code>:empty</code></td><td>\u9009\u62E9\u5185\u5BB9\u4E3A\u7A7A\u7684\u6807\u7B7E\uFF0C\u6709\u7A7A\u683C\u6216\u6807\u7B7E\u90FD\u4E0D\u4E3A\u7A7A\uFF1B</td></tr><tr><td><code>:parent</code></td><td>\u9009\u62E9\u6709\u5185\u5BB9\u7684\u6807\u7B7E\uFF1B</td></tr><tr><td><code>:has(span)</code></td><td>\u9009\u62E9\u6709span\u6807\u7B7E\u7684\u6807\u7B7E\uFF1B</td></tr></tbody></table><h3 id="\u9690\u85CF\u770B\u89C1"><a class="header-anchor" href="#\u9690\u85CF\u770B\u89C1" aria-hidden="true">#</a> \u9690\u85CF\u770B\u89C1</h3><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>:hidden</code></td><td>\u83B7\u53D6\u770B\u4E0D\u89C1\u7684\u6807\u7B7E(\u5728\u9875\u9762\u4E2D\u4E0D\u663E\u793A\u7684\u6807\u7B7E) type=&quot;hidden&quot; \u548Cdisplay:none\uFF1B</td></tr><tr><td><code>:visible</code></td><td>\u83B7\u53D6\u53EF\u4EE5\u770B\u89C1\u7684\u6807\u7B7E\uFF0C\u9875\u9762\u4E2D\u663E\u793A\u7684</td></tr></tbody></table><h3 id="\u5C5E\u6027\u9009\u62E9\u5668"><a class="header-anchor" href="#\u5C5E\u6027\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5C5E\u6027\u9009\u62E9\u5668</h3><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>div[class]</code></td><td>\u6709class\u5C5E\u6027\u7684</td></tr><tr><td><code>div[class=box]</code></td><td>div\u7684class\u5C5E\u6027\u503C\u4E3Abox\u7684\uFF1B</td></tr><tr><td><code>div[class^=box]</code></td><td>\u4EE5box\u5F00\u5934\u7684</td></tr><tr><td><code>div[class$=box]</code></td><td>\u4EE5box\u7ED3\u5C3E\u7684</td></tr><tr><td><code>div[class*=box]</code></td><td>\u5305\u542Bbox\u7684\uFF1B</td></tr><tr><td><code>div[class][title]</code></td><td>\u6709class\u5C5E\u6027\u5E76\u4E14\u6709title\u5C5E\u6027\u7684\uFF1B</td></tr></tbody></table><h3 id="\u5B50\u5143\u7D20\u9009\u62E9\u5668"><a class="header-anchor" href="#\u5B50\u5143\u7D20\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5B50\u5143\u7D20\u9009\u62E9\u5668</h3><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>ul li:first-child</code></td><td>\u9009\u62E9\u6240\u6709\u7236\u5143\u7D20\u4E2D\u7B2C\u4E00\u4E2Ali first\u7684\u533A\u522B\uFF1A\u7B2C\u4E00\u4E2A\u7236\u5143\u7D20\u4E0B\u6240\u6709li\u4E2D\u7684\u7B2C\u4E00\u4E2Ali</td></tr><tr><td><code>ul li:last-child</code></td><td>\u9009\u62E9\u6240\u6709ul\u4E0B\u7684\u6700\u540E\u4E00\u4E2Ali\uFF1B</td></tr><tr><td><code>:nth-child()</code></td><td>\u9009\u62E9\u6307\u5B9A\u7684\u7B2C\u51E0\u4E2A\u6807\u7B7E\uFF0C\u4ECE1\u5F00\u59CB</td></tr><tr><td><code>:first-of-type</code></td><td>\u9009\u62E9\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\uFF1B</td></tr><tr><td><code>:last-of-type</code></td><td>\u6700\u540E\u4E00\u6B21\u51FA\u73B0\u7684\uFF1B</td></tr><tr><td><code>:nth-of-type()</code></td><td>\u6307\u5B9A\u7684\u7B2C\u51E0\u4E2A\u6807\u7B7E\uFF1B</td></tr></tbody></table><p><code>child</code>\uFF1A\u662F\u4ECE\u7B2C\u4E00\u4E2A\u5B69\u5B50\u5F00\u59CB\u627E\uFF1B</p><p><code>of-type</code>\uFF1A\u662F\u4ECE\u7B2C\u4E00\u6B21\u51FA\u73B0\u7684\u5B69\u5B50\u627E\u7684\uFF1B</p><h3 id="\u8868\u5355\u9009\u62E9\u5668"><a class="header-anchor" href="#\u8868\u5355\u9009\u62E9\u5668" aria-hidden="true">#</a> \u8868\u5355\u9009\u62E9\u5668</h3><p><code>:input</code> \u9009\u4E2D\u6240\u6709\u8868\u5355\u6807\u7B7E\uFF0C\u5305\u62ECselect\u3001textarea\uFF1B</p><p>\u9009\u4E2D\u5177\u4F53\u67D0\u4E2Ainput\u6807\u7B7E\u53EF\u4EE5\u5192\u53F7type\u7C7B\u578B\uFF0Cselect\u76F4\u63A5\u4F7F\u7528\u6807\u7B7E\u9009\u62E9\u5668\uFF1B</p><p>\u4F8B\uFF1A</p><p><code>:text</code> \u9009\u4E2D\u5355\u6587\u672C\u6846\uFF1B</p><p><code>.attr(&quot;checked&quot;,true)</code>\uFF1B\u8BBE\u7F6E\u590D\u9009\u6846\u88AB\u9009\u4E2D\u72B6\u6001</p><h3 id="\u8868\u5355\u5BF9\u8C61\u5C5E\u6027"><a class="header-anchor" href="#\u8868\u5355\u5BF9\u8C61\u5C5E\u6027" aria-hidden="true">#</a> \u8868\u5355\u5BF9\u8C61\u5C5E\u6027</h3><table><thead><tr><th>\u9009\u62E9\u5668</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>:enabled</code></td><td>\u9009\u4E2D\u6240\u6709\u53EF\u7528\u7684\uFF1B</td></tr><tr><td><code>:disabled</code></td><td>\u9009\u4E2D\u6240\u6709\u7981\u7528\u7684\uFF1B</td></tr><tr><td><code>:checked</code></td><td>\u9009\u4E2D\u7684\uFF1B</td></tr><tr><td><code>:selected</code></td><td>\u4E0B\u62C9\u6846\u88AB\u9009\u4E2D\u7684\uFF1B</td></tr></tbody></table><h2 id="\u4E8C\u3001\u8FED\u4EE3"><a class="header-anchor" href="#\u4E8C\u3001\u8FED\u4EE3" aria-hidden="true">#</a> \u4E8C\u3001\u8FED\u4EE3</h2><h3 id="each"><a class="header-anchor" href="#each" aria-hidden="true">#</a> $.each</h3><div class="language-js"><pre><code>$<span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// or</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;li&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index<span class="token punctuation">,</span> item</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u7684item\u662F\u6BCF\u4E2A\u5143\u7D20, \u4F7F\u7528jquery\u9700\u8981\u518D\u6B21$(item)</span>
    <span class="token comment">// \u4E5F\u53EF\u4EE5$(this), this\u6307\u5411\u5F53\u524D\u8FD9\u4E2Aitem</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="map"><a class="header-anchor" href="#map" aria-hidden="true">#</a> $.map</h3><div class="language-js"><pre><code><span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
$<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5F53map\u64CD\u4F5C\u6570\u7EC4\u8FD4\u56DEnull\u548Cundefined\u65F6\uFF0C\u4E0D\u4F1A\u4FDD\u5B58\u5728\u65B0\u7684\u6570\u7EC4\u4E2D\uFF1B</p><p>$.map\u4E0D\u80FD\u76F4\u63A5<code>$(b).map(function(){})</code>;</p><div class="language-js"><pre><code><span class="token keyword">var</span> ary <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">var</span> aa <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>ary<span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">&gt;</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> a
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>aa<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//[1,2,3]\uFF0C4\u6EE1\u8DB3\u6761\u4EF6\uFF0C\u8FD4\u56DE\u7A7A\uFF1B</span>
</code></pre></div><p>\u8FD9\u91CC\u7684aa\u662Fdom\u5143\u7D20\u7684\uFF0C\u5982\u679C$(ary).map\u8C03\u7528\u7684\u8BDD\u76F4\u63A5\u5C06\u7C7B\u578B\u8F6C\u6362jquery\u5143\u7D20\u4E86\uFF1B\u4F4E\u7248\u672C\u6D4F\u89C8\u5668\u4F1A\u53D1\u751F\u4E0D\u517C\u5BB9\uFF1B\u6807\u51C6\u8C03\u7528\u65B9\u6CD5\u662F<code>$.map(ary,function(){})</code>;</p><h2 id="\u4E09\u3001extend"><a class="header-anchor" href="#\u4E09\u3001extend" aria-hidden="true">#</a> \u4E09\u3001extend</h2><h3 id="\u6269\u5C55"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h3><p><code>$.extend(obj,obj1,obj2)</code>\uFF1B\u5C06obj1\u548Cobj2\u6269\u5C55\u5230obj\u4E2D\uFF0C\u4E00\u822Cobj\u662F\u4E00\u4E2A\u7A7A\u5BF9\u8C61{}\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> obj3 <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>obj1<span class="token punctuation">,</span>obj2<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u6DF1\u62F7\u8D1D"><a class="header-anchor" href="#\u6DF1\u62F7\u8D1D" aria-hidden="true">#</a> \u6DF1\u62F7\u8D1D</h3><blockquote><p>\u590D\u5236\u5730\u5740\u548C\u6570\u636E</p></blockquote><p>\u539F\u7406\uFF1A\u6839\u636E\u5730\u5740\u627E\u5230\u5185\u5BB9\uFF0C\u5E76\u590D\u5236\u5185\u5BB9\u5728\u5806\u4E2D\u91CD\u65B0\u5B58\u50A8\uFF0C\u8FD4\u56DE\u65B0\u7684\u5730\u5740\uFF1B\u65B0\u7684\u503C\u4FEE\u6539\u7684\u5730\u5740\u4E0D\u5F71\u54CD\u65E7\u7684\u503C\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> obj2 <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>obj3<span class="token punctuation">)</span>
</code></pre></div><p>\u9ED8\u8BA4\u662Ffalse(\u6D45\u62F7\u8D1D)\uFF1Btrue\u6DF1\u62F7\u8D1D\uFF1B\u5982\u679C\u4E0D\u7528true\u76F8\u5F53\u4E8E\u58F0\u660E\u4E86\u4E24\u4E2A\u53D8\u91CF(\u52A0\u8F7D\u6162)\uFF1B\u5982\u679C\u7528true\u5C31\u662F\u62F7\u8D1D\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">var</span> obj4 <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj6 <span class="token operator">=</span> $<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>obj4<span class="token punctuation">)</span><span class="token punctuation">;</span>
obj6<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;ls&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj6<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//ls</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj4<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//zs</span>
</code></pre></div><h3 id="\u6D45\u62F7\u8D1D-\u539F\u751F\u65B9\u6CD5"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D-\u539F\u751F\u65B9\u6CD5" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D(\u539F\u751F\u65B9\u6CD5)</h3><blockquote><p>\u53EA\u590D\u5236\u5730\u5740\uFF0C\u4E0D\u590D\u5236\u6570\u636E\uFF1B\u4FEE\u6539\u65B0\u53D8\u91CF\u7684\u503C\uFF0C\u65E7\u53D8\u91CF\u7684\u503C\u4E5F\u4E00\u8D77\u4FEE\u6539\u4E86\uFF1B</p></blockquote><div class="language-js"><pre><code><span class="token keyword">var</span> obj4<span class="token operator">=</span><span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&quot;zs&quot;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> obj5<span class="token operator">=</span>obj4<span class="token punctuation">;</span>
obj5<span class="token punctuation">.</span>name<span class="token operator">=</span><span class="token string">&quot;ls&quot;</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj5<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//ls</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj4<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>        <span class="token comment">//ls</span>
</code></pre></div><p>\u539F\u7406\uFF1A\u590D\u5236\u4E86obj4\u7684\u5730\u5740\uFF0C\u6570\u636E\u6CA1\u6709\u590D\u5236\uFF0C\u6240\u4EE5\u4FEE\u6539\u4E86\u5185\u5BB9\uFF0Cobj4\u7684\u5730\u5740\u4E5F\u662F\u90A3\u4E2A\u5185\u5BB9\uFF0C\u6240\u4EE5obj4\u5C31\u662Fobj5\u7684\u5185\u5BB9\uFF1B</p><h2 id="\u56DB\u3001\u65B9\u6CD5"><a class="header-anchor" href="#\u56DB\u3001\u65B9\u6CD5" aria-hidden="true">#</a> \u56DB\u3001\u65B9\u6CD5</h2><p>\u6240\u6709\u4E8B\u4EF6\u7684\u8C03\u7528\uFF1A<code>$(&quot;button&quot;).click(function(){})</code>;</p><p>\u76F4\u63A5\u53BB\u6389on\uFF1B\u76F4\u63A5\u62EC\u53F7\u51FD\u6570\uFF0C</p><p>.index()\uFF1B\u5143\u7D20\u7684\u4E0B\u6807\uFF1B</p><p>jquery\u9009\u9879\u5361</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.box div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&quot;active&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">siblings</span><span class="token punctuation">(</span><span class="token string">&quot;button&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">removeClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">//\u94FE\u5F0F\u8C03\u7528\uFF0C\u53EF\u4EE5\u4E00\u76F4\u5199\u70B9\uFF0C</span>
<span class="token comment">//\u9690\u5F0F\u5FAA\u73AF\uFF0C\u4E0D\u7528\u5FAA\u73AF\uFF0C\u9690\u5F0F\u8C03\u7528\u5FAA\u73AF\uFF1B</span>
</code></pre></div><h2 id="\u9AD8\u9891\u9762\u8BD5\u9898"><a class="header-anchor" href="#\u9AD8\u9891\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u9AD8\u9891\u9762\u8BD5\u9898</h2><p>\u25CF $(document).ready() \u65B9\u6CD5\u548C window.onload \u6709\u4EC0\u4E48\u533A\u522B\uFF1F</p><p>\u25CF jQuery \u7684\u5C5E\u6027\u62F7\u8D1D (extend) \u7684\u5B9E\u73B0\u539F\u7406\u662F\u4EC0\u4E48\uFF0C\u5982\u4F55\u5B9E\u73B0\u6DF1\u62F7\u8D1D\uFF1F</p>__VP_STATIC_END__`,59),p=[e];function c(d,l,u,i,r,k){return s(),a("div",null,p)}var f=n(o,[["render",c]]);export{b as __pageData,f as default};
