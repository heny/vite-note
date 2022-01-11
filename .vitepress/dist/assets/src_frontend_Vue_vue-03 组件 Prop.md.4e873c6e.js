import{_ as a,c as n,o as s,d as t}from"./app.e5c17f53.js";const h='{"title":"Vue-03 \u7EC4\u4EF6\u3001Props","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001\u7EC4\u4EF6","slug":"\u4E00\u3001\u7EC4\u4EF6"},{"level":2,"title":"\u4E8C\u3001\u5168\u5C40\u548C\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6","slug":"\u4E8C\u3001\u5168\u5C40\u548C\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6"},{"level":3,"title":"\u5168\u5C40\u6CE8\u518C","slug":"\u5168\u5C40\u6CE8\u518C"},{"level":3,"title":"\u5C40\u90E8\u6CE8\u518C","slug":"\u5C40\u90E8\u6CE8\u518C"},{"level":2,"title":"\u4E09\u3001\u7EC4\u4EF6\u540D\u7684\u547D\u540D\u65B9\u5F0F","slug":"\u4E09\u3001\u7EC4\u4EF6\u540D\u7684\u547D\u540D\u65B9\u5F0F"},{"level":2,"title":"\u56DB\u3001\u7EC4\u4EF6\u7684\u7279\u70B9","slug":"\u56DB\u3001\u7EC4\u4EF6\u7684\u7279\u70B9"},{"level":3,"title":"\u5355\u4E2A\u6839\u5143\u7D20","slug":"\u5355\u4E2A\u6839\u5143\u7D20"},{"level":3,"title":"data\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570","slug":"data\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570"},{"level":2,"title":"\u4E94\u3001\u7EC4\u4EF6\u5D4C\u5957","slug":"\u4E94\u3001\u7EC4\u4EF6\u5D4C\u5957"},{"level":2,"title":"\u516D\u3001Prop","slug":"\u516D\u3001prop"},{"level":3,"title":"Props\u547D\u540D","slug":"props\u547D\u540D"},{"level":3,"title":"Props\u4F20\u9012","slug":"props\u4F20\u9012"},{"level":3,"title":"props\u7C7B\u578B\u5224\u65AD","slug":"props\u7C7B\u578B\u5224\u65AD"},{"level":3,"title":"\u5355\u5411\u6570\u636E\u6D41","slug":"\u5355\u5411\u6570\u636E\u6D41"},{"level":2,"title":"\u4E03\u3001\u9012\u5F52\u7EC4\u4EF6","slug":"\u4E03\u3001\u9012\u5F52\u7EC4\u4EF6"}],"relativePath":"src/frontend/Vue/vue-03 \u7EC4\u4EF6 Prop.md","lastUpdated":1615699077000}',p={},e=t(`<h1 id="vue-03-\u7EC4\u4EF6\u3001props" tabindex="-1">Vue-03 \u7EC4\u4EF6\u3001Props <a class="header-anchor" href="#vue-03-\u7EC4\u4EF6\u3001props" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001\u7EC4\u4EF6" tabindex="-1">\u4E00\u3001\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E00\u3001\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u6982\u5FF5\uFF1A\u5305\u542B\u4E86View\u3001Model\u3001Methods\u7B49\u5B8C\u6574\u7684\u5177\u6709\u72EC\u7ACB\u529F\u80FD\u7684\u81EA\u5B9A\u4E49\u5143\u7D20</li><li>\u7EC4\u4EF6\u662Fvue\u6846\u67B6\u6838\u5FC3\u5185\u5BB9\uFF0C\u662F\u91CD\u70B9</li><li>\u7EC4\u4EF6\u662F\u53EF\u5229\u7528\u7684Vue\u5B9E\u4F8B\uFF0C\u6240\u4EE5\u7EC4\u4EF6\u4E0Enew Vue\u63A5\u6536\u76F8\u540C\u7684\u9009\u9879\uFF0C\u6BD4\u5982data\u3001computed\u3001methods\u7B49</li><li>\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u4F1A\u5404\u81EA\u72EC\u7ACB\u7EF4\u62A4\u5B83\u81EA\u5DF1\u7684\u53D8\u91CF\uFF0C\u6BCF\u4F7F\u7528\u4E00\u6B21\u7EC4\u4EF6\uFF0C\u5C31\u4F1A\u6709\u4E00\u4E2A\u5B83\u7684\u65B0\u5B9E\u4F8B\u88AB\u521B\u5EFA <ul><li>\u6BD4\u5982\uFF1A\u521B\u5EFA\u4E00\u4E2A\u6309\u94AE\uFF0C\u70B9\u51FB\u4E00\u6B21\u52A0\u4E00\uFF0C\u4F7F\u7528\u591A\u4E2A\u6309\u94AE\uFF0C\u5B83\u4EEC\u7684\u8BA1\u6570\u662F\u4E0D\u4E00\u6837\u7684</li></ul></li></ol><h2 id="\u4E8C\u3001\u5168\u5C40\u548C\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6" tabindex="-1">\u4E8C\u3001\u5168\u5C40\u548C\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001\u5168\u5C40\u548C\u5C40\u90E8\u6CE8\u518C\u7EC4\u4EF6" aria-hidden="true">#</a></h2><blockquote><p>\u521B\u5EFA\u597D\u7684\u7EC4\u4EF6\u540D\u76F4\u63A5\u4F5C\u4E3A\u6807\u7B7E\u540D\u653E\u5728\u6302\u8F7D\u7684\u5143\u7D20\u5185</p></blockquote><h3 id="\u5168\u5C40\u6CE8\u518C" tabindex="-1">\u5168\u5C40\u6CE8\u518C <a class="header-anchor" href="#\u5168\u5C40\u6CE8\u518C" aria-hidden="true">#</a></h3><ul><li>\u6240\u6709\u6302\u8F7D\u4E86Vue\u6839\u5B9E\u4F8B\u7684\u6807\u7B7E\u90FD\u53EF\u4EE5\u4F7F\u7528\u8BE5\u7EC4\u4EF6</li></ul><div class="language-js"><pre><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;\u7EC4\u4EF6\u540D&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;\u6807\u7B7E&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="\u5C40\u90E8\u6CE8\u518C" tabindex="-1">\u5C40\u90E8\u6CE8\u518C <a class="header-anchor" href="#\u5C40\u90E8\u6CE8\u518C" aria-hidden="true">#</a></h3><ul><li>\u53EA\u80FD\u5728\u5F53\u524DVue\u5B9E\u4F8B\u6302\u8F7D\u5143\u7D20\u5185\u4F7F\u7528</li></ul><div class="language-js"><pre><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">custom</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E09\u3001\u7EC4\u4EF6\u540D\u7684\u547D\u540D\u65B9\u5F0F" tabindex="-1">\u4E09\u3001\u7EC4\u4EF6\u540D\u7684\u547D\u540D\u65B9\u5F0F <a class="header-anchor" href="#\u4E09\u3001\u7EC4\u4EF6\u540D\u7684\u547D\u540D\u65B9\u5F0F" aria-hidden="true">#</a></h2><ol><li>\u5EFA\u8BAE\u4F7F\u7528\u5E26\u4E2D\u5212\u7EBF\u7684\u540D\u5B57\uFF0C\u53EF\u4EE5\u907F\u514D\u5173\u952E\u5B57\u51FA\u9519\uFF1B</li><li>\u5F53\u547D\u540D\u4E3A\u9A7C\u5CF0\u547D\u540D\u65F6\uFF0C\u5728\u4F7F\u7528\u7EC4\u4EF6\u65F6\u9700\u8981\u8F6C\u5199\u6210\u4E2D\u5212\u7EBF\uFF0C\u5426\u5219\u62A5\u9519</li><li>\u7EC4\u4EF6\u540D\u5E26\u4E2D\u5212\u7EBF\u5FC5\u987B\u52A0\u5F15\u53F7</li><li>\u5F3A\u70C8\u63A8\u8350\u9075\u5FAAw3c\u89C4\u8303\u4E2D\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u540D\uFF08\u5B57\u6BCD\u5168\u5C0F\u5199\u4E14\u5FC5\u987B\u5305\u542B\u4E00\u4E2A\u8FDE\u5B57\u7B26\uFF09\uFF0C\u4F1A\u907F\u514Dhtml\u5143\u7D20\u76F8\u51B2\u7A81</li></ol><h2 id="\u56DB\u3001\u7EC4\u4EF6\u7684\u7279\u70B9" tabindex="-1">\u56DB\u3001\u7EC4\u4EF6\u7684\u7279\u70B9 <a class="header-anchor" href="#\u56DB\u3001\u7EC4\u4EF6\u7684\u7279\u70B9" aria-hidden="true">#</a></h2><h3 id="\u5355\u4E2A\u6839\u5143\u7D20" tabindex="-1">\u5355\u4E2A\u6839\u5143\u7D20 <a class="header-anchor" href="#\u5355\u4E2A\u6839\u5143\u7D20" aria-hidden="true">#</a></h3><ol><li>\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u8282\u70B9\uFF0C\u6700\u5916\u5C42\u53EA\u80FD\u662F\u4E00\u4E2A\u6807\u7B7E\uFF08\u5BF9\u4E8E\u6CE8\u91CA\u8282\u70B9\u3001\u6587\u672C\u8282\u70B9\u90FD\u4E0D\u884C\uFF09</li><li>\u5EFA\u8BAE\u6BCF\u6B21\u521B\u5EFA\u7EC4\u4EF6\u65F6\uFF0C\u53EF\u4EE5\u5148\u5199\u4E00\u4E2Adiv\u5305\u88F9</li></ol><h3 id="data\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570" tabindex="-1">data\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570 <a class="header-anchor" href="#data\u5FC5\u987B\u662F\u4E00\u4E2A\u51FD\u6570" aria-hidden="true">#</a></h3><blockquote><p>\u521B\u5EFA\u7684\u7EC4\u4EF6\u5F53\u4E2D\uFF0C\u4F7F\u7528data\u65F6\uFF0C\u4E0D\u80FD\u50CF\u4E4B\u524D\u90A3\u6837\u76F4\u63A5\u70B9\uFF0C\u56E0\u4E3A\u6BCF\u4E2A\u7EC4\u4EF6\u8FD4\u56DE\u7684\u6570\u636E\u90FD\u5E94\u8BE5\u662F\u72EC\u7ACB\u7684\uFF0C\u9694\u79BB\u7684\uFF1B</p></blockquote><div class="language-js"><pre><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">count</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u4E94\u3001\u7EC4\u4EF6\u5D4C\u5957" tabindex="-1">\u4E94\u3001\u7EC4\u4EF6\u5D4C\u5957 <a class="header-anchor" href="#\u4E94\u3001\u7EC4\u4EF6\u5D4C\u5957" aria-hidden="true">#</a></h2><ul><li>\u53EF\u4EE5\u65E0\u7A77\u7684\u5957components\uFF0C\u7EC4\u4EF6\u5D4C\u5957\u9700\u8981\u5C06\u5B50\u7EC4\u4EF6\u653E\u5728\u7236\u7EC4\u4EF6\u5F53\u4E2D\uFF0C\u5C06\u7236\u7EC4\u4EF6\u653E\u5728\u6302\u8F7D\u70B9\u4E2D</li></ul><div class="language-js"><pre><code><span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;
        &lt;child&gt;&lt;/child&gt;
    &lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span>
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">child</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;b&gt;&lt;/b&gt;&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5185\u90E8\u7EC4\u4EF6\u4E5F\u53EF\u4EE5\u62FF\u51FA\u6765\u5199</li></ul><div class="language-js"><pre><code><span class="token keyword">var</span> child <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token string">&#39;&lt;b&gt;&lt;/b&gt;&#39;</span>
<span class="token punctuation">}</span>
<span class="token literal-property property">parent</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span>&#39;<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>child<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>child<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>&#39;
    <span class="token literal-property property">components</span><span class="token operator">:</span><span class="token punctuation">{</span>
        child
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u516D\u3001prop" tabindex="-1">\u516D\u3001Prop <a class="header-anchor" href="#\u516D\u3001prop" aria-hidden="true">#</a></h2><blockquote><p>\u5728\u7EC4\u4EF6\u5F53\u4E2D\uFF0C\u6570\u636E\u662F\u4E0D\u4E92\u901A\u7684\uFF0C\u9700\u8981\u7ECF\u8FC7prop\u8FDB\u884C\u6570\u636E\u4F20\u9012</p></blockquote><h3 id="props\u547D\u540D" tabindex="-1">Props\u547D\u540D <a class="header-anchor" href="#props\u547D\u540D" aria-hidden="true">#</a></h3><ul><li>prop\u547D\u540D\u4F7F\u7528\u9A7C\u5CF0\u547D\u540D\u65F6\uFF0C\u5728html\u4E2D\u9700\u8981\u8F6C\u4E3A\u51CF\u53F7\u5206\u5F00</li></ul><div class="language-html"><pre><code>props:[myMessage] ----&gt; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">my-message</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>hello<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u5728\u58F0\u660Eprops\u7684\u65F6\u5019\uFF0C\u5176\u547D\u540D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528camelCase\uFF0C\u800C\u5728\u6A21\u677F\u548CJSX\u4E2D\u5E94\u8BE5\u59CB\u7EC8\u4F7F\u7528kebab-case</li><li>\u5728javascript\u4E2D\u66F4\u81EA\u7136\u7684\u662FcamelCase\uFF0C\u800C\u5728html\u4E2D\u5219\u662Fkebab-case</li></ul><h3 id="props\u4F20\u9012" tabindex="-1">Props\u4F20\u9012 <a class="header-anchor" href="#props\u4F20\u9012" aria-hidden="true">#</a></h3><ul><li>\u7EC4\u4EF6\u53EF\u4EE5\u6709\u4EFB\u610F\u6570\u91CF\u7684prop\uFF0C\u5728template\u91CC\u9762\u50CF\u8BBF\u95EEdata\u503C\u4E00\u6837\u53D6\u503C</li></ul><div class="language-html"><pre><code>Vue.component(&#39;blog-post&#39;, {
      props: [&#39;title&#39;],
      template: &#39;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>&#39;
})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>My journey with Vue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u52A8\u6001\u7684props\uFF0C\u5F53\u4F7F\u7528\u52A8\u6001\u7684props\u65F6\uFF0C\u9700\u8981v-bind\u7ED1\u5B9A\u5C5E\u6027</li></ul><div class="language-html"><pre><code>new Vue({
  el: &#39;#blog-post-demo&#39;,
  data: {
    posts: [
      { id: 1, title: &#39;My journey with Vue&#39; },
      { id: 2, title: &#39;Blogging with Vue&#39; },
      { id: 3, title: &#39;Why Vue is so fun&#39; }
    ]
  }
})
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post in posts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post.id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post.title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>blog-post</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li>\u4F20\u9012\u4E00\u4E2A\u5BF9\u8C61</li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>post<span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>
post:{name: &#39;hh&#39;,id: 18}

<span class="token comment">&lt;!-- \u7B49\u4EF7\u4E8E --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>blog-post</span> <span class="token attr-name">:name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>post.hh<span class="token punctuation">&#39;</span></span> <span class="token attr-name">:id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>post.id<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="props\u7C7B\u578B\u5224\u65AD" tabindex="-1">props\u7C7B\u578B\u5224\u65AD <a class="header-anchor" href="#props\u7C7B\u578B\u5224\u65AD" aria-hidden="true">#</a></h3><ul><li>\u5F53props\u9700\u8981\u9650\u5236\u65F6\uFF0C\u4F20\u5165\u7684\u6570\u636E\u9700\u8981\u5199\u6210\u5BF9\u8C61\u5F62\u5F0F\uFF1B\u5982\u679C\u4E0D\u9700\u8981\u4F20\u5165\u6570\u636E\uFF0C\u53EF\u4EE5\u5199default\u9ED8\u8BA4\u6570\u636E\uFF0C\u5728\u4F20\u5165prop\u4E5F\u53EF\u4EE5\u7ED9\u5B9A\u4E00\u4E2Adefault\u7684\u503C\uFF0C\u4EE5\u9632\u6CA1\u6709\u4F20\u5165\u503C\uFF0C\u5BF9\u4E8E\u516C\u5171\u7EC4\u4EF6\u6709\u5F88\u5927\u7684\u4F5C\u7528</li></ul><div class="language-js"><pre><code><span class="token comment">// \u4EC5\u6307\u5B9A\u7C7B\u578B</span>
<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">msg</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
    <span class="token literal-property property">num</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
    <span class="token literal-property property">propA</span><span class="token operator">:</span> <span class="token punctuation">[</span>String<span class="token punctuation">,</span>Number<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u6307\u5B9A\u5176\u4ED6</span>
<span class="token literal-property property">prop</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span>String<span class="token punctuation">,</span>  <span class="token comment">//\u68C0\u6D4B\u7C7B\u578B\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u7C7B\u578B</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span><span class="token boolean">true</span>   <span class="token comment">//true\u4E3A\u5FC5\u987B\u4F20\u9012\u8BE5\u5C5E\u6027;</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span>  <span class="token comment">//\u5982\u679C\u6CA1\u6709\u4F20\u5165\u7684\u6570\u636E\uFF0C\u5219\u4F7F\u7528\u9ED8\u8BA4\u503C;</span>
        <span class="token comment">// \u5F53\u4F20\u5165\u7684\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u65F6</span>
        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u81EA\u5B9A\u4E49\u9A8C\u8BC1</span>
        <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;warrning&#39;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li>\u5982\u679C\u4F20\u5165\u7684\u9ED8\u8BA4\u503C\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u65F6\uFF0Cdefault\u9700\u8981\u662F\u4E00\u4E2A\u5DE5\u5382\u51FD\u6570</li></ul><div class="language-js"><pre><code><span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><h3 id="\u5355\u5411\u6570\u636E\u6D41" tabindex="-1">\u5355\u5411\u6570\u636E\u6D41 <a class="header-anchor" href="#\u5355\u5411\u6570\u636E\u6D41" aria-hidden="true">#</a></h3><p>\u6240\u6709\u7684prop\u90FD\u4F7F\u5F97\u5176\u7236\u5B50prop\u4E4B\u95F4\u5F62\u6210\u4E86\u4E00\u4E2A\u5355\u5411\u4E0B\u884C\u7ED1\u5B9A\uFF0C\u7236\u7EA7prop\u7684\u66F4\u65B0\u4F1A\u5411\u4E0B\u6D41\u52A8\u5230\u5B50\u7EC4\u4EF6\u4E0A\uFF0C\u4F46\u662F\u53CD\u8FC7\u6765\u5219\u4E0D\u884C\uFF0C\u6BCF\u6B21\u7236\u7EC4\u4EF6\u66F4\u65B0\u65F6\uFF0C\u5B50\u7EC4\u4EF6\u4E2D\u6240\u6709\u7684prop\u90FD\u5C06\u4F1A\u5237\u65B0\u6700\u65B0\u7684\u503C\uFF1B</p><p>\u6CE8\u610F\uFF1A\u5728 JavaScript \u4E2D\u5BF9\u8C61\u548C\u6570\u7EC4\u662F\u901A\u8FC7\u5F15\u7528\u4F20\u5165\u7684\uFF0C\u6240\u4EE5\u5BF9\u4E8E\u4E00\u4E2A\u6570\u7EC4\u6216\u5BF9\u8C61\u7C7B\u578B\u7684 prop \u6765\u8BF4\uFF0C\u5728\u5B50\u7EC4\u4EF6\u4E2D\u6539\u53D8\u8FD9\u4E2A\u5BF9\u8C61\u6216\u6570\u7EC4\u672C\u8EAB<strong>\u5C06\u4F1A</strong>\u5F71\u54CD\u5230\u7236\u7EC4\u4EF6\u7684\u72B6\u6001\u3002</p><h2 id="\u4E03\u3001\u9012\u5F52\u7EC4\u4EF6" tabindex="-1">\u4E03\u3001\u9012\u5F52\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E03\u3001\u9012\u5F52\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u7EC4\u4EF6\u5728\u5B83\u7684\u6A21\u677F\u5185\u53EF\u4EE5\u9012\u5F52\u7684\u8C03\u7528\u81EA\u5DF1\uFF0C\u53EA\u8981\u7ED9\u7EC4\u4EF6\u8BBE\u7F6Ename\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u4E86</li><li>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u9012\u5F52\u5FC5\u987B\u6709\u4E00\u4E2A\u6761\u4EF6\u6765\u9650\u5236\u6570\u91CF</li><li>\u5E38\u7528\u573A\u666F\uFF1A\u8054\u7EA7\u9009\u62E9\u5668\u548C\u6811\u5F62\u63A7\u4EF6</li></ul><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in treeArr<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> {{index}} <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tree</span> <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.arr<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item.flag<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tree</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5FC5\u987B\u5B9A\u4E49name\uFF0C\u7EC4\u4EF6\u5185\u90E8\u624D\u80FD\u9012\u5F52\u8C03\u7528</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tree&#39;</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63A5\u6536\u5916\u90E8\u4F20\u5165\u7684\u503C</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token literal-property property">item</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span>Array<span class="token punctuation">,</span>
      <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,48),o=[e];function l(c,r,u,i,k,d){return s(),n("div",null,o)}var m=a(p,[["render",l]]);export{h as __pageData,m as default};
