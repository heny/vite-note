import{_ as n,c as a,o as s,d as t}from"./app.03ce4847.js";const g='{"title":"Vue3-Vue2\u4E0D\u540C\u70B9","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7247\u6BB5","slug":"\u7247\u6BB5"},{"level":2,"title":"v-model","slug":"v-model"},{"level":3,"title":"\u7ED1\u5B9A\u540D\u5B57","slug":"\u7ED1\u5B9A\u540D\u5B57"},{"level":3,"title":"\u7ED1\u5B9A\u4FEE\u9970\u7B26","slug":"\u7ED1\u5B9A\u4FEE\u9970\u7B26"},{"level":2,"title":"\u591A\u4E2A\u5E94\u7528\u5171\u4EAB\u914D\u7F6E","slug":"\u591A\u4E2A\u5E94\u7528\u5171\u4EAB\u914D\u7F6E"}],"relativePath":"src/frontend/Vue/Vue3-Vue2\u4E0D\u540C\u70B9.md","lastUpdated":1641811499394}',p={},e=t(`<h1 id="vue3-vue2\u4E0D\u540C\u70B9"><a class="header-anchor" href="#vue3-vue2\u4E0D\u540C\u70B9" aria-hidden="true">#</a> Vue3-Vue2\u4E0D\u540C\u70B9</h1><p>\u672C\u8282\u53EA\u8BB2\u5728<a href="./Vue3-API.html">Vue3-API</a>\u6CA1\u6709\u7684\u5185\u5BB9</p><h2 id="\u7247\u6BB5"><a class="header-anchor" href="#\u7247\u6BB5" aria-hidden="true">#</a> \u7247\u6BB5</h2><p>template\u6A21\u677F\u57282.x\u4E2D\uFF0C\u5FC5\u987B\u6709\u4E00\u4E2A\u7236\u8282\u70B9\uFF0C3.x\u4E2D\u53EF\u4EE5\u4E0D\u7528\u5305\u88F9\u8282\u70B9\uFF0C\u76F8\u5BF9\u7684\uFF0C$attrs\u5219\u9700\u8981\u624B\u52A8\u6307\u5B9A\u4E86</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>$attrs<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="v-model"><a class="header-anchor" href="#v-model" aria-hidden="true">#</a> v-model</h2><h3 id="\u7ED1\u5B9A\u540D\u5B57"><a class="header-anchor" href="#\u7ED1\u5B9A\u540D\u5B57" aria-hidden="true">#</a> \u7ED1\u5B9A\u540D\u5B57</h3><p>v-model\u4F7F\u7528<code>modelValue</code>\u6765\u63A5\u6536\uFF0C\u5982\u679C\u7ED1\u5B9A\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5219\u7528\u53D8\u91CF\u6765\u63A5\u6536</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>book<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">v-model:</span>title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>bookTitle<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>my-component</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;custom-form&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;update:title&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
		&lt;input @input=&quot;$emit(&#39;update:title&#39;)&quot; /&gt;
	</span><span class="token template-punctuation string">\`</span></span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u7ED1\u5B9A\u4FEE\u9970\u7B26"><a class="header-anchor" href="#\u7ED1\u5B9A\u4FEE\u9970\u7B26" aria-hidden="true">#</a> \u7ED1\u5B9A\u4FEE\u9970\u7B26</h3><p>v-model\u5305\u542B\u5185\u7F6E\u4FEE\u9970\u7B26\uFF1A<code>.trim</code>\u3001<code>.number</code>\u3001<code>.lazy</code></p><p>\u4E5F\u652F\u6301\u81EA\u5B9A\u4E49\u7684\u4FEE\u9970\u7B26\uFF0C\u81EA\u5B9A\u4E49\u4FEE\u9970\u7B26\u5C06\u4F20\u9001\u5230<code>this.modelModifiers</code>\u4E2D</p><p>\u5982\u679C\u4FEE\u9970\u7B26\u5E26\u53C2\u6570\uFF0C\u5219prop\u7684\u540D\u79F0\u4E3A\uFF1A<code>arg + &quot;Modifiers&quot;</code></p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>my-component</span> 
    <span class="token attr-name">v-model.capitalize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myText<span class="token punctuation">&quot;</span></span> 
    <span class="token attr-name"><span class="token namespace">v-model:</span>description.capitalize</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myText<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
</code></pre></div><div class="language-js"><pre><code>app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;my-component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  props<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;modelValue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;modelModifiers&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;description&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;descriptionModifiers&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  emits<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;update:modelValue&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;update:description&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">
    &lt;input type=&quot;text&quot;
      :value=&quot;modelValue&quot;
      @input=&quot;$emit(&#39;update:modelValue&#39;, $event.target.value)&quot;&gt;
  </span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>modelModifiers<span class="token punctuation">)</span> <span class="token comment">// { capitalize: true }</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u591A\u4E2A\u5E94\u7528\u5171\u4EAB\u914D\u7F6E"><a class="header-anchor" href="#\u591A\u4E2A\u5E94\u7528\u5171\u4EAB\u914D\u7F6E" aria-hidden="true">#</a> \u591A\u4E2A\u5E94\u7528\u5171\u4EAB\u914D\u7F6E</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Foo <span class="token keyword">from</span> <span class="token string">&#39;./Foo.vue&#39;</span>
<span class="token keyword">import</span> Bar <span class="token keyword">from</span> <span class="token string">&#39;./Bar.vue&#39;</span>

<span class="token keyword">const</span> <span class="token function-variable function">createMyApp</span> <span class="token operator">=</span> <span class="token parameter">options</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
  app<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;focus&#39;</span> <span class="token comment">/* ... */</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> app
<span class="token punctuation">}</span>

<span class="token function">createMyApp</span><span class="token punctuation">(</span>Foo<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#foo&#39;</span><span class="token punctuation">)</span>
<span class="token function">createMyApp</span><span class="token punctuation">(</span>Bar<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#bar&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,18),o=[e];function c(l,u,i,k,r,d){return s(),a("div",null,o)}var v=n(p,[["render",c]]);export{g as __pageData,v as default};
