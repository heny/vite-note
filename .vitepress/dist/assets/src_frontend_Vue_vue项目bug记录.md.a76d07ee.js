import{_ as e,c as a,o as n,d as t}from"./app.310fb107.js";const g='{"title":"Vue\u9879\u76EEBug\u8BB0\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6E32\u67D3\u95EE\u9898","slug":"\u6E32\u67D3\u95EE\u9898"},{"level":2,"title":"Element-ui\u95EE\u9898","slug":"element-ui\u95EE\u9898"},{"level":3,"title":"\u8F93\u5165\u6846@keyup\u5931\u6548","slug":"\u8F93\u5165\u6846-keyup\u5931\u6548"},{"level":3,"title":"\u906E\u7F69\u5C42\u6863\u4F4F\u5185\u5BB9\u5C42","slug":"\u906E\u7F69\u5C42\u6863\u4F4F\u5185\u5BB9\u5C42"},{"level":2,"title":"Vue\u9879\u76EE\u6253\u5305\u540E\u9875\u9762\u5237\u65B0\u51FA\u73B0404\u9519\u8BEF","slug":"vue\u9879\u76EE\u6253\u5305\u540E\u9875\u9762\u5237\u65B0\u51FA\u73B0404\u9519\u8BEF"}],"relativePath":"src/frontend/Vue/vue\u9879\u76EEbug\u8BB0\u5F55.md","lastUpdated":1615699077000}',s={},l=t(`<h1 id="vue\u9879\u76EEbug\u8BB0\u5F55"><a class="header-anchor" href="#vue\u9879\u76EEbug\u8BB0\u5F55" aria-hidden="true">#</a> Vue\u9879\u76EEBug\u8BB0\u5F55</h1><h2 id="\u6E32\u67D3\u95EE\u9898"><a class="header-anchor" href="#\u6E32\u67D3\u95EE\u9898" aria-hidden="true">#</a> \u6E32\u67D3\u95EE\u9898</h2><ol><li>\u9875\u9762\u6E32\u67D3\u4F1A\u6309\u7167\u9759\u6001\u7684\u6570\u636E\uFF0C\u4E4B\u540E\u518D\u6E32\u67D3\u8BF7\u6C42\u5230\u7684\u6570\u636E\uFF0C\u8981\u6CE8\u610F\u4E00\u4E0B\u987A\u5E8F\u7684\u95EE\u9898\uFF1B</li><li>\u9047\u5230\u95EE\u9898\u4F7F\u7528debugger\u8BD5\u8BD5\u6E32\u67D3\u987A\u5E8F\u7684\u95EE\u9898\uFF1B</li><li>\u5982\u679C\u9047\u5230\u9875\u9762\u6CA1\u6709\u6E32\u67D3\uFF0C\u53EF\u4EE5\u67E5\u770Bnetwork\u6570\u636E\u6709\u6CA1\u6709\u8BF7\u6C42\u6210\u529F;</li><li>\u51FA\u73B0list undefined\u4F46\u662F\u9875\u9762\u6CA1\u6709\u51FA\u73B0\u95EE\u9898\uFF0C\u662F\u56E0\u4E3A\u4F7F\u7528\u4E86\u4E0B\u6807\u53D6\u503C\u65F6\uFF0C\u8FD8\u6CA1\u6709\u503C\u7684\uFF0C\u7ED9\u7236\u5143\u7D20\u52A0\u4E2Av-if\uFF0C\u5224\u65AD\u6570\u7EC4\u7684\u957F\u5EA6\uFF1B</li><li>\u4F7F\u7528ui\u6846\u67B6\u6CA1\u6709\u6E32\u67D3\u51FA\u6765\uFF1Avue\u5B98\u65B9\u63D0\u793A\u8BF4\u8FC7\uFF0C\u5728html\u6587\u4EF6\u4E0D\u652F\u6301\u5199\u81EA\u95ED\u5408\u6807\u7B7E\uFF0C\u56E0\u6B64\u5982\u679C\u6CA1\u6709\u6E32\u67D3\u51FA\u6765\u6807\u7B7E\u53EF\u80FD\u662F\u5199\u4E86\u81EA\u95ED\u5408\u6807\u7B7E\uFF1B</li><li>\u5728data\u6570\u636E\u91CC\u9762\u5F15\u5165\u56FE\u7247\u4E0D\u8D77\u4F5C\u7528\u7684\u95EE\u9898\uFF0C\u9700\u8981\u5728data\u51FD\u6570\u91CC\u9762require\u5F15\u5165\u624D\u884C\uFF1B</li></ol><h2 id="element-ui\u95EE\u9898"><a class="header-anchor" href="#element-ui\u95EE\u9898" aria-hidden="true">#</a> Element-ui\u95EE\u9898</h2><h3 id="\u8F93\u5165\u6846-keyup\u5931\u6548"><a class="header-anchor" href="#\u8F93\u5165\u6846-keyup\u5931\u6548" aria-hidden="true">#</a> \u8F93\u5165\u6846@keyup\u5931\u6548</h3><ul><li>\u52A0\u4E0A.native\u8F6C\u4E3A\u539F\u751F\u7684\u5C31\u53EF\u4EE5\u89E3\u51B3\u4E86\uFF1B<code>@keyup.enter.native=&#39;&#39;</code>\uFF1B</li></ul><h3 id="\u906E\u7F69\u5C42\u6863\u4F4F\u5185\u5BB9\u5C42"><a class="header-anchor" href="#\u906E\u7F69\u5C42\u6863\u4F4F\u5185\u5BB9\u5C42" aria-hidden="true">#</a> <strong>\u906E\u7F69\u5C42\u6863\u4F4F\u5185\u5BB9\u5C42</strong></h3><ul><li>\u5728el-dialog\u6807\u7B7E\u91CC\u6DFB\u52A0 <code>:modal-append-to-body=&#39;false&#39;</code></li></ul><h2 id="vue\u9879\u76EE\u6253\u5305\u540E\u9875\u9762\u5237\u65B0\u51FA\u73B0404\u9519\u8BEF"><a class="header-anchor" href="#vue\u9879\u76EE\u6253\u5305\u540E\u9875\u9762\u5237\u65B0\u51FA\u73B0404\u9519\u8BEF" aria-hidden="true">#</a> Vue\u9879\u76EE\u6253\u5305\u540E\u9875\u9762\u5237\u65B0\u51FA\u73B0404\u9519\u8BEF</h2><p>\u5229\u7528nginx\u914D\u7F6E\u4E00\u4E0Blocation\u5C31\u53EF\u4EE5\u4E86</p><div class="language-js"><pre><code>    # \u914D\u7F6E<span class="token number">404</span>
    location <span class="token operator">/</span>
    <span class="token punctuation">{</span>
        index index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>
        try_files $uri $uri<span class="token operator">/</span> <span class="token operator">/</span>index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><ul><li><p>\u5B9D\u5854\u9762\u677F\u914D\u7F6E\u8DEF\u5F84</p><p><img src="https://notecdn.heny.vip/images/vue%E9%A1%B9%E7%9B%AEbug%E8%AE%B0%E5%BD%95_01.png" alt="image-20200406221655304"></p></li></ul>`,12),i=[l];function u(o,r,p,d,c,h){return n(),a("div",null,i)}var v=e(s,[["render",u]]);export{g as __pageData,v as default};
