import{_ as e,c as n,o as a,d as s}from"./app.e5c17f53.js";const f='{"title":"js-09 DOM","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001DOM","slug":"\u4E00\u3001dom"},{"level":2,"title":"\u4E8C\u3001\u83B7\u53D6\u5B50\u8282\u70B9\uFF1A","slug":"\u4E8C\u3001\u83B7\u53D6\u5B50\u8282\u70B9\uFF1A"},{"level":2,"title":"\u4E09\u3001\u8282\u70B9\u7C7B\u578B\uFF1A","slug":"\u4E09\u3001\u8282\u70B9\u7C7B\u578B\uFF1A"},{"level":2,"title":"\u56DB\u3001\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF1B","slug":"\u56DB\u3001\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF1B"},{"level":2,"title":"\u4E94\u3001\u5176\u4ED6\u8282\u70B9(\u4E86\u89E3)\uFF1B","slug":"\u4E94\u3001\u5176\u4ED6\u8282\u70B9-\u4E86\u89E3-\uFF1B"},{"level":2,"title":"\u516D\u3001\u5728IE8\u53CA\u4EE5\u4E0B\u4E2D\u517C\u5BB9\u95EE\u9898\uFF1B","slug":"\u516D\u3001\u5728ie8\u53CA\u4EE5\u4E0B\u4E2D\u517C\u5BB9\u95EE\u9898\uFF1B"},{"level":2,"title":"\u4E03\u3001\u5C5E\u6027\u64CD\u4F5C(\u5E38\u7528)\uFF1B","slug":"\u4E03\u3001\u5C5E\u6027\u64CD\u4F5C-\u5E38\u7528-\uFF1B"},{"level":2,"title":"\u516B\u3001\u7C7B\u540D\u64CD\u4F5C","slug":"\u516B\u3001\u7C7B\u540D\u64CD\u4F5C"},{"level":2,"title":"\u4E5D\u3001\u521B\u5EFA\u6DFB\u52A0","slug":"\u4E5D\u3001\u521B\u5EFA\u6DFB\u52A0"},{"level":2,"title":"\u5341\u3001\u5220\u9664\u66FF\u6362\u514B\u9686","slug":"\u5341\u3001\u5220\u9664\u66FF\u6362\u514B\u9686"},{"level":2,"title":"\u5341\u4E00\u3001insertAdjacentHTML","slug":"\u5341\u4E00\u3001insertadjacenthtml"},{"level":2,"title":"\u5341\u4E8C\u3001\u5143\u7D20\u7684\u5176\u4ED6\u83B7\u53D6\u65B9\u5F0F\uFF1B","slug":"\u5341\u4E8C\u3001\u5143\u7D20\u7684\u5176\u4ED6\u83B7\u53D6\u65B9\u5F0F\uFF1B"},{"level":2,"title":"\u5341\u4E09\u3001\u8868\u683C\u7684\u83B7\u53D6\u65B9\u5F0F\uFF1B","slug":"\u5341\u4E09\u3001\u8868\u683C\u7684\u83B7\u53D6\u65B9\u5F0F\uFF1B"},{"level":2,"title":"\u5341\u56DB\u3001\u8868\u5355\u7684\u83B7\u53D6\u65B9\u5F0F","slug":"\u5341\u56DB\u3001\u8868\u5355\u7684\u83B7\u53D6\u65B9\u5F0F"},{"level":3,"title":"\u8868\u5355\u83B7\u53D6\u5C5E\u6027\uFF1A","slug":"\u8868\u5355\u83B7\u53D6\u5C5E\u6027\uFF1A"},{"level":3,"title":"\u8868\u5355\u4E8B\u4EF6\uFF1A","slug":"\u8868\u5355\u4E8B\u4EF6\uFF1A"},{"level":3,"title":"\u8868\u5355\u65B9\u6CD5\uFF1A","slug":"\u8868\u5355\u65B9\u6CD5\uFF1A"},{"level":3,"title":"\u7126\u70B9\u4E8B\u4EF6","slug":"\u7126\u70B9\u4E8B\u4EF6"},{"level":2,"title":"\u9AD8\u9891\u9762\u8BD5\u9898","slug":"\u9AD8\u9891\u9762\u8BD5\u9898"}],"relativePath":"src/frontend/Javascript/js-09 DOM.md","lastUpdated":1620545764000}',o={},t=s(`<h1 id="js-09-dom" tabindex="-1">js-09 DOM <a class="header-anchor" href="#js-09-dom" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001dom" tabindex="-1">\u4E00\u3001DOM <a class="header-anchor" href="#\u4E00\u3001dom" aria-hidden="true">#</a></h2><p><code>DOM (document object model)</code> \u6587\u6863\u5BF9\u8C61\u6A21\u578B\uFF0C\u662FW3C\u7EC4\u7EC7\u63A8\u8350\u7684\u5904\u7406\u53EF\u6269\u5C55\u6807\u8BB0\u8BED\u8A00\u7684\u6807\u51C6\u7F16\u7A0B\u63A5\u53E3\uFF1B<code>node</code>\uFF08\u8282\u70B9\uFF09\uFF1B</p><p>\u5143\u7D20\u8282\u70B9\uFF08\u6807\u7B7E\uFF09 \u6587\u672C\u8282\u70B9\uFF08\u6362\u884C\u6216\u8005\u6587\u5B57\uFF09 \u6CE8\u91CA\u8282\u70B9\uFF08\u6CE8\u91CA\uFF09</p><h2 id="\u4E8C\u3001\u83B7\u53D6\u5B50\u8282\u70B9\uFF1A" tabindex="-1">\u4E8C\u3001\u83B7\u53D6\u5B50\u8282\u70B9\uFF1A <a class="header-anchor" href="#\u4E8C\u3001\u83B7\u53D6\u5B50\u8282\u70B9\uFF1A" aria-hidden="true">#</a></h2><ol><li><code>\u7236\u5143\u7D20.children</code>\uFF1B(\u5E38\u7528)\uFF08\u975E\u6807\u51C6\u5C5E\u6027\uFF09\u83B7\u53D6\u53EA\u6709\u5143\u7D20\u8282\u70B9\uFF1B\u7C7B\u6570\u7EC4</li><li><code>\u7236\u5143\u7D20.childNodes</code>\uFF1B\uFF08\u6807\u51C6\u5C5E\u6027\uFF09\u6240\u6709\u5B50\u8282\u70B9\uFF0C\u5305\u62EC\u6587\u672C\u3001\u7A7A\u683C\u3001\u6807\u7B7E\u3001\u6CE8\u91CA\uFF1B</li></ol><p>\u7C7B\u6570\u7EC4\uFF1A\u6709\u957F\u5EA6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E0B\u6807\u83B7\u53D6\u5143\u7D20\uFF0C\u4F46\u662F\u4E0D\u80FD\u4F7F\u7528\u6570\u7EC4\u7684\u65B9\u6CD5\uFF1B</p><h2 id="\u4E09\u3001\u8282\u70B9\u7C7B\u578B\uFF1A" tabindex="-1">\u4E09\u3001\u8282\u70B9\u7C7B\u578B\uFF1A <a class="header-anchor" href="#\u4E09\u3001\u8282\u70B9\u7C7B\u578B\uFF1A" aria-hidden="true">#</a></h2><p><code>nodeType</code> <code>nodeName</code> <code>nodeValue</code>\uFF1B</p><ol><li><p><code>nodeType</code>\uFF1A\u8FD4\u56DE1-12\u7684\u6570\u5B57\uFF0C\u5206\u522B\u8868\u793A\u4E0D\u540C\u7684\u8282\u70B9\uFF1B</p><p>1\uFF1A\u6807\u7B7E\u8282\u70B9\uFF1B2\uFF1A\u5C5E\u6027\u8282\u70B9\uFF1B3\uFF1A\u6587\u672C\u8282\u70B9\uFF1B 8\uFF1A\u6CE8\u91CA\u8282\u70B9\uFF1B 9\uFF1A\u6587\u6863\u8282\u70B9\uFF1B</p></li><li><p><code>nodeName</code>\uFF1A\u8FD4\u56DE\u8282\u70B9\u7684\u540D\u5B57\uFF1B</p><p>\u6587\u672C\uFF1A#text\uFF1B\u6CE8\u91CA\uFF1A#comment\uFF1B\u6807\u7B7E\uFF1A\u5927\u5199\u7684\u6807\u7B7E\u540D\uFF1B</p></li><li><p><code>nodeValue</code>\uFF1A\u8BA4\u4E3A\u53EA\u6709\u6587\u672C\u624D\u6709\u5185\u5BB9\uFF0C\u5143\u7D20\u7684\u8282\u70B9\u4E3A\u7A7Anull\uFF1B\u83B7\u53D6\u7684\u6807\u7B7E\u7684\u6587\u672C\u8282\u70B9\u4F7F\u7528innerHTML\u4FEE\u6539\u4F1A\u5C06\u6807\u7B7E\u4E5F\u66FF\u6362\u6389\uFF0C\u8FD9\u4E2A\u53EF\u4EE5\u53EA\u4FEE\u6539\u6587\u672C\u5185\u5BB9\uFF1B</p><p><code>li.firstChild.nodeValue</code>\uFF1B\u624D\u80FD\u83B7\u53D6\u5230li\u91CC\u9762\u7684\u6587\u672C\u5185\u5BB9\uFF1B</p><p><code>nodeValue = &quot;\u65B0\u5185\u5BB9&quot;</code>\uFF1B \u53EF\u4EE5\u8BBE\u7F6E\u65B0\u5185\u5BB9\uFF1B</p></li></ol><h2 id="\u56DB\u3001\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF1B" tabindex="-1">\u56DB\u3001\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF1B <a class="header-anchor" href="#\u56DB\u3001\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF1B" aria-hidden="true">#</a></h2><ol><li><code>parentNode</code>\uFF1B\u76F4\u63A5\u7236\u5143\u7D20\uFF0C<code>parentNode.parentNode</code>\uFF1B\u7236\u5143\u7D20\u7684\u7236\u5143\u7D20\uFF1B\uFF08\u5E38\u7528\uFF09</li><li><code>offsetParent</code>\uFF1B\u8FD4\u56DE\u79BB\u5143\u7D20\u6700\u8FD1\u7684\u6709\u5B9A\u4F4D\u7684\u7236\u7EA7\uFF0C\u5982\u679C\u6CA1\u6709\u5B9A\u4F4D\u7684\u7236\u7EA7\uFF0C\u5219\u8FD4\u56DEbody\uFF1B</li></ol><h2 id="\u4E94\u3001\u5176\u4ED6\u8282\u70B9-\u4E86\u89E3-\uFF1B" tabindex="-1">\u4E94\u3001\u5176\u4ED6\u8282\u70B9(\u4E86\u89E3)\uFF1B <a class="header-anchor" href="#\u4E94\u3001\u5176\u4ED6\u8282\u70B9-\u4E86\u89E3-\uFF1B" aria-hidden="true">#</a></h2><p>\u7236\u5143\u7D20\u7684\u5B50\u8282\u70B9\uFF1B</p><ol><li><code>firstChild</code>\uFF1B\u7236\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\uFF1B</li><li><code>firstElementChild</code>\uFF1B\u7236\u5143\u7D20\u7684\u7B2C\u4E00\u4E2A\u5B50\u5143\u7D20\u8282\u70B9\uFF1B</li><li><code>lastChild</code>\uFF1B\u7236\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\uFF1B</li><li><code>lastElementChild</code>\uFF1B\u7236\u5143\u7D20\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u5143\u7D20\u8282\u70B9\uFF1B \u4EE5\u4E0A\u4E0D\u5E38\u7528\uFF0C\u63A8\u8350\u505A\u6CD5\uFF1A</li></ol><p>\u7B2C\u4E00\u4E2A\uFF1A<code>li[0]</code>\uFF0C</p><p>\u6700\u540E\u4E00\u4E2A\uFF1A<code>li[li.length-1]</code>;</p><p>\u5144\u5F1F\u5143\u7D20\u8282\u70B9\uFF1B</p><ol start="5"><li><code>previousSibling</code>\uFF1B\u4E0A\u4E00\u4E2A\u5144\u5F1F\u5B50\u8282\u70B9\uFF1B\uFF08\u5305\u62EC\u6587\u672C\u6CE8\u91CA\uFF09</li><li><code>previousElementSibling</code>\uFF1B\u4E0A\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20\u8282\u70B9\uFF1B</li><li><code>nextSibling</code>\uFF1B\u4E0B\u4E00\u4E2A\u5144\u5F1F\u5B50\u8282\u70B9\uFF1B</li><li><code>nextElementSibling</code>\uFF1B\u4E0B\u4E00\u4E2A\u5144\u5F1F\u5143\u7D20\u8282\u70B9\uFF1B</li></ol><p>\u62D3\u5C55\uFF1A\u5E26Element\u7684 \u6807\u51C6\u6D4F\u89C8\u5668\u652F\u6301\u7684\uFF0C\u8FD4\u56DE\u5143\u7D20\u8282\u70B9\uFF0C\u4E0D\u5E26\u7684\u662Fie8\u53CA\u4EE5\u4E0B\u652F\u6301\u7684\uFF0C\u53EF\u80FD\u8FD4\u56DE\u6587\u672C\u8282\u70B9\uFF1B</p><h2 id="\u516D\u3001\u5728ie8\u53CA\u4EE5\u4E0B\u4E2D\u517C\u5BB9\u95EE\u9898\uFF1B" tabindex="-1">\u516D\u3001\u5728IE8\u53CA\u4EE5\u4E0B\u4E2D\u517C\u5BB9\u95EE\u9898\uFF1B <a class="header-anchor" href="#\u516D\u3001\u5728ie8\u53CA\u4EE5\u4E0B\u4E2D\u517C\u5BB9\u95EE\u9898\uFF1B" aria-hidden="true">#</a></h2><ol><li><code>children</code>\uFF1A\u8FD8\u53EF\u4EE5\u83B7\u53D6\u5230\u6CE8\u91CA\uFF1B</li><li><code>childNodes</code>\uFF1A\u4E0D\u80FD\u83B7\u53D6\u5230\u6362\u884C\uFF1B</li><li><code>firstChild</code>\uFF1A\u4E0D\u80FD\u83B7\u53D6\u5230\u6362\u884C\uFF1B</li><li><code>firstElementChild</code>\uFF1A\u5E26Element\u7684\u4E0D\u80FD\u8BC6\u522B\uFF0C\u8FD4\u56DE\u503Cundefined\uFF1B</li></ol><p>\u89E3\u51B3\u517C\u5BB9\u529E\u6CD5\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> first <span class="token operator">=</span> ul<span class="token punctuation">.</span>firstElementchild <span class="token operator">?</span> ul<span class="token punctuation">.</span>firstChild <span class="token operator">:</span> firstElementChild<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E03\u3001\u5C5E\u6027\u64CD\u4F5C-\u5E38\u7528-\uFF1B" tabindex="-1">\u4E03\u3001\u5C5E\u6027\u64CD\u4F5C(\u5E38\u7528)\uFF1B <a class="header-anchor" href="#\u4E03\u3001\u5C5E\u6027\u64CD\u4F5C-\u5E38\u7528-\uFF1B" aria-hidden="true">#</a></h2><ol><li><p>\u83B7\u53D6\uFF1A<code>getAttribute(\u5C5E\u6027\u540D)</code>\uFF1B\u5C5E\u6027\u540D\u7528\u5728ie\u91CC\u9762\u9700\u8981\u5199className\uFF1B</p></li><li><p>\u8BBE\u7F6E\uFF1A<code>setAttribute(\u5C5E\u6027\u540D,\u5C5E\u6027\u503C)</code>\uFF1B\u76F4\u63A5\u662F\u4FEE\u6539hdml\u6807\u7B7E\u91CC\u9762\u7684\uFF1B</p></li><li><p>\u5220\u9664\uFF1A<code>removeAttribute(\u5C5E\u6027\u540D)</code>\uFF1B\u76F4\u63A5\u5220\u9664\u5C5E\u6027\uFF1B\u62EC\u53F7\u91CC\u9762\u9700\u8981\u52A0\u5F15\u53F7\uFF1B</p></li><li><p>\u68C0\u67E5\uFF1A<code>hasAttribute(\u5C5E\u6027\u540D)</code>\uFF0C\u68C0\u67E5\u662F\u5426\u6709\u6307\u5B9A\u5C5E\u6027\u540D</p></li></ol><p>\u7279\u70B9\uFF1A\u53EF\u4EE5\u64CD\u4F5C\u5143\u7D20\u539F\u751F\u7684\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u64CD\u4F5C\u81EA\u5B9A\u4E49\u5C5E\u6027\uFF0C\u5E76\u4E14\u5728html\u4E0A\u53EF\u89C1\u6CA1\u6709\u517C\u5BB9\u6027\u95EE\u9898\uFF1B</p><p>\u4EE5\u4E0B\u4E0D\u80FD\u64CD\u4F5C\u81EA\u5B9A\u4E49\u5C5E\u6027</p><p>\u70B9\u7684\u5F62\u5F0F\uFF1A</p><p>box.title = &quot;abc&quot;;</p><h2 id="\u516B\u3001\u7C7B\u540D\u64CD\u4F5C" tabindex="-1">\u516B\u3001\u7C7B\u540D\u64CD\u4F5C <a class="header-anchor" href="#\u516B\u3001\u7C7B\u540D\u64CD\u4F5C" aria-hidden="true">#</a></h2><ol><li><code>\u5143\u7D20.classList</code>\uFF1B\u517C\u5BB9ie11+\uFF1B</li><li>\u53EF\u7528\u5C5E\u6027\uFF1Alength \u8FD4\u56DE\u7C7B\u540D\u7684\u957F\u5EA6\uFF1B</li><li>\u65B9\u6CD5\uFF1A</li></ol><p>\uFF081\uFF09<code>add(class1,class2...)</code> \u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u7C7B\u540D\uFF0C\u5982\u679C\u5B58\u5728\u5219\u4E0D\u4F1A\u6DFB\u52A0</p><p>\uFF082\uFF09<code>contains(class)</code> \u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u5224\u65AD\u5143\u7D20\u662F\u5426\u6709\u8BE5\u7C7B\u540D\uFF1B</p><p>\uFF083\uFF09<code>item(index)</code> \u8FD4\u56DE\u5143\u7D20\u7D22\u5F15\u503C\u5BF9\u5E94\u7684\u7C7B\u540D\uFF1B</p><p>\uFF084\uFF09<code>remove(class1,class2...)</code> \u79FB\u9664\u7C7B\u540D\uFF1B</p><p>\uFF085\uFF09<code>toggle(class,[true|false])</code>\uFF1B \u5207\u6362\u7C7B\u540D\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u9009\uFF0C\u5F3A\u5236\u79FB\u9664false\u6216\u6DFB\u52A0true\uFF1B</p><h2 id="\u4E5D\u3001\u521B\u5EFA\u6DFB\u52A0" tabindex="-1">\u4E5D\u3001\u521B\u5EFA\u6DFB\u52A0 <a class="header-anchor" href="#\u4E5D\u3001\u521B\u5EFA\u6DFB\u52A0" aria-hidden="true">#</a></h2><ol><li><p>\u521B\u5EFA\u5143\u7D20\u8282\u70B9\uFF1A<code>document.createElement(&quot;\u65B0\u6807\u7B7E&quot;)</code>\uFF1B\u521B\u5EFA\u7684\u60F3\u8981\u653E\u8FDB\u53BB\uFF0C\u9700\u8981\u4F7F\u7528\u6DFB\u52A0</p></li><li><p>\u521B\u5EFA\u6587\u672C\u8282\u70B9\uFF1A<code>document.createTextNode(&quot;\u6587\u672C\u5185\u5BB9&quot;)</code>\uFF1B\u4E0D\u5E38\u7528,\u4F7F\u7528innerHTML\uFF1B</p><p>\u83B7\u53D6\u8282\u70B9\u5185\u5BB9\uFF1A\u5143\u7D20.textContent</p><p>\u8BBE\u7F6E\u8282\u70B9\u5185\u5BB9\uFF1A\u5143\u7D20.textContent = &#39;&#39;\uFF1B</p></li><li><p>\u6DFB\u52A0\u6587\u672C\u8282\u70B9\uFF1A<code>appendChild(\u521B\u5EFA\u7684\u6807\u7B7E)</code>\uFF1B\u5728\u7ED3\u675F\u6807\u7B7E\u4E4B\u524D\u6DFB\u52A0\uFF1B\u53EA\u80FD\u653E\u5230\u4E00\u4E2A\u6807\u7B7E\u91CC\uFF0C\u4E0D\u80FD\u91CD\u590D\u653E\uFF1B</p><p>\u53EF\u4EE5\u76F4\u63A5\u653E\u5230body\u91CC\u9762\uFF1A \u83B7\u53D6body\u6807\u7B7E\uFF1Abody = document.body\uFF1B</p></li><li><p>\u6DFB\u52A0\u5230\u6307\u5B9A\u5143\u7D20\u524D\u9762\uFF1A<code>\u7236\u5143\u7D20.insertBefore\uFF08new,old\uFF09</code>\uFF1Bnew\u65B0\u6807\u7B7E\uFF0Cold\u6307\u5B9A\u6807\u7B7E\uFF1B</p><p>\u5728IE9\u53CA\u4EE5\u4E0A\uFF0C\u5982\u679C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E0D\u5B58\u5728\uFF0C\u5219\u4EE5appendChild\u6DFB\u52A0\uFF0C\u5728IE8\u53CA\u4EE5\u4E0B\uFF0C\u5219\u62A5\u9519\uFF1B</p></li></ol><div class="language-js"><pre><code><span class="token comment">// \u89E3\u51B3\u517C\u5BB9\u95EE\u9898\uFF1A</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>ul<span class="token punctuation">.</span>children<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    ul<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span>
<span class="token punctuation">}</span>\uFF1B
</code></pre></div><p>js\u539F\u751F\u662F\u6CA1\u6709insertAfter\u7684\uFF0C\u9700\u8981\u624B\u52A8\u5B9E\u73B0</p><div class="language-js"><pre><code><span class="token comment">// \u63D2\u5165\u5230\u8282\u70B9\u4E4B\u540E</span>
<span class="token keyword">function</span> <span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token parameter">newDom<span class="token punctuation">,</span> oldDom</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> parentDom <span class="token operator">=</span> oldDom<span class="token punctuation">.</span>parentNode
  <span class="token comment">// \u5224\u65AD\u662F\u5426\u662F\u6700\u540E\u4E00\u4E2A\u8282\u70B9</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>parentDom<span class="token punctuation">.</span>lastChild <span class="token operator">===</span> oldDom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    parentDom<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>newDom<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  	parentDom<span class="token punctuation">.</span><span class="token function">insertBefore</span><span class="token punctuation">(</span>newDom<span class="token punctuation">,</span> oldDom<span class="token punctuation">.</span>nextElementSibling<span class="token punctuation">)</span>    
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u6280\u5DE7\uFF1A</p><p>.link\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFAa\u6807\u7B7E</p><h2 id="\u5341\u3001\u5220\u9664\u66FF\u6362\u514B\u9686" tabindex="-1">\u5341\u3001\u5220\u9664\u66FF\u6362\u514B\u9686 <a class="header-anchor" href="#\u5341\u3001\u5220\u9664\u66FF\u6362\u514B\u9686" aria-hidden="true">#</a></h2><ol><li><p>\u5220\u9664\uFF1A<code>remove()</code>\uFF1B\u8C01\u8C03\u7528\u7684\u5C31\u5220\u9664\u8C01\uFF0Cie8\u53CA\u4EE5\u4E0B\u4E0D\u517C\u5BB9\uFF1B</p><pre><code> \`\u7236\u5143\u7D20.removeChild(\u5B50\u5143\u7D20)\`\uFF1B\u5C06\u5B50\u5143\u7D20\u4ECE\u7236\u5143\u7D20\u4E2D\u5220\u9664\uFF1B
</code></pre></li><li><p>\u66FF\u6362\uFF1A<code>\u7236\u5143\u7D20.replaceChild(\u65B0\u6807\u7B7E\uFF0C\u65E7\u6807\u7B7E)</code>\uFF1B</p></li><li><p>\u514B\u9686\uFF1A<code>\u5143\u7D20.cloneNode()</code>\uFF1Btrue\uFF0C\u5185\u5BB9\u6807\u7B7E\u4E00\u8D77\u514B\u9686\uFF0Cfalse,\u514B\u9686\u6807\u7B7E\uFF1B</p></li><li><p>\u5305\u542B\uFF1A<code>\u7236\u5143\u7D20.contains(\u5B50\u5143\u7D20)</code></p></li></ol><h2 id="\u5341\u4E00\u3001insertadjacenthtml" tabindex="-1">\u5341\u4E00\u3001insertAdjacentHTML <a class="header-anchor" href="#\u5341\u4E00\u3001insertadjacenthtml" aria-hidden="true">#</a></h2><ol><li><p><code>element.insertAdjacentHTML(position, text)</code>\uFF0C\u5C06text\u89E3\u6790\u4E3Ahtml\u6216xml\uFF0C\u5E76\u5C06\u7ED3\u679C\u8282\u70B9\u63D2\u5165\u5230DOM\u6811\u4E2D\u7684\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u8BE5\u65B9\u6CD5\u6BD4\u76F4\u63A5\u64CD\u4F5CinnerHTML\u64CD\u4F5C\u66F4\u5FEB</p></li><li><p>position\u662F\u76F8\u5BF9\u4E8E\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u5FC5\u987B\u662F\u4EE5\u4E0B\u5B57\u7B26\u4E32\u4E4B\u4E00</p><ul><li><p><code>beforebegin</code>\uFF1A\u5143\u7D20\u81EA\u8EAB\u7684\u524D\u9762\u3002</p></li><li><p><code>afterbegin</code>\uFF1A\u63D2\u5165\u5143\u7D20\u5185\u90E8\u7684\u7B2C\u4E00\u4E2A\u5B50\u8282\u70B9\u4E4B\u524D\u3002</p></li><li><p><code>beforeend</code>\uFF1A\u63D2\u5165\u5143\u7D20\u5185\u90E8\u7684\u6700\u540E\u4E00\u4E2A\u5B50\u8282\u70B9\u4E4B\u540E\u3002</p></li><li><p><code>afterend</code>\uFF1A\u5143\u7D20\u81EA\u8EAB\u7684\u540E\u9762\u3002</p></li></ul></li></ol><div class="language-js"><pre><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> beforebegin <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> afterbegin <span class="token operator">--</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>p<span class="token operator">&gt;</span>Hello World<span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> beforeend <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> afterend <span class="token operator">--</span><span class="token operator">&gt;</span>
</code></pre></div><p>\u793A\u4F8B\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">var</span> list <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;ul&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
list<span class="token punctuation">.</span><span class="token function">insertAdjacentHTML</span><span class="token punctuation">(</span><span class="token string">&#39;afterbegin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;li id=&quot;first-item&quot;&gt;First&lt;/li&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u5341\u4E8C\u3001\u5143\u7D20\u7684\u5176\u4ED6\u83B7\u53D6\u65B9\u5F0F\uFF1B" tabindex="-1">\u5341\u4E8C\u3001\u5143\u7D20\u7684\u5176\u4ED6\u83B7\u53D6\u65B9\u5F0F\uFF1B <a class="header-anchor" href="#\u5341\u4E8C\u3001\u5143\u7D20\u7684\u5176\u4ED6\u83B7\u53D6\u65B9\u5F0F\uFF1B" aria-hidden="true">#</a></h2><ol><li><p><code>querySelector(css\u9009\u62E9\u5668)</code>\uFF1B\u9009\u62E9\u7B2C\u4E00\u4E2A\u76F4\u63A5\u662F\u5143\u7D20\uFF1B</p></li><li><p><code>querySelectorAll(css\u9009\u62E9\u5668)</code>\uFF1B\u9009\u62E9\u6240\u6709\u7684\uFF0C\u7ED3\u679C\u662F\u7C7B\u6570\u7EC4</p></li><li><p><code>\u5143\u7D20.closest(css\u9009\u62E9\u5668)</code>\uFF0C\u8FD4\u56DE\u5F53\u524D\u8282\u70B9\u6700\u8FD1\u5339\u914D\u9009\u62E9\u7B26\u7684\u7236\u5143\u7D20\uFF0C\u5982\u679C\u9009\u62E9\u5230\u81EA\u5DF1\u76F8\u540C\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE\u81EA\u5DF1</p></li></ol><h2 id="\u5341\u4E09\u3001\u8868\u683C\u7684\u83B7\u53D6\u65B9\u5F0F\uFF1B" tabindex="-1">\u5341\u4E09\u3001\u8868\u683C\u7684\u83B7\u53D6\u65B9\u5F0F\uFF1B <a class="header-anchor" href="#\u5341\u4E09\u3001\u8868\u683C\u7684\u83B7\u53D6\u65B9\u5F0F\uFF1B" aria-hidden="true">#</a></h2><ol><li><p>\u83B7\u53D6\u8868\u5934\uFF1A<code>table.tHead</code>\uFF1B</p></li><li><p>\u83B7\u53D6\u8868\u5C3E\uFF1A<code>table.tFoot</code>\uFF1B</p></li><li><p>\u83B7\u53D6\u4E3B\u4F53\uFF1A<code>table.tBodies[0]</code>\uFF1B\u7C7B\u6570\u7EC4\uFF0C\u9700\u8981\u52A0\u4E0B\u6807\uFF1B</p></li><li><p>\u83B7\u53D6\u884C\uFF1A<code>table.rows</code>\uFF1B\u83B7\u53D6table\u4E0B\u6240\u6709\u7684tr\uFF1B</p><p><code>table.tBodies</code>\uFF1B\u83B7\u53D6\u4E3B\u4F53\u4E0B\u7684\u6240\u6709\u7684tr\uFF1B</p></li><li><p>\u83B7\u53D6\u5355\u5143\u683C\uFF1A<code>table.rows[0].cells</code>\uFF1B\u9700\u8981\u901A\u8FC7\u884C\u6765\u83B7\u53D6td\uFF1B</p></li></ol><h2 id="\u5341\u56DB\u3001\u8868\u5355\u7684\u83B7\u53D6\u65B9\u5F0F" tabindex="-1">\u5341\u56DB\u3001\u8868\u5355\u7684\u83B7\u53D6\u65B9\u5F0F <a class="header-anchor" href="#\u5341\u56DB\u3001\u8868\u5355\u7684\u83B7\u53D6\u65B9\u5F0F" aria-hidden="true">#</a></h2><h3 id="\u8868\u5355\u83B7\u53D6\u5C5E\u6027\uFF1A" tabindex="-1">\u8868\u5355\u83B7\u53D6\u5C5E\u6027\uFF1A <a class="header-anchor" href="#\u8868\u5355\u83B7\u53D6\u5C5E\u6027\uFF1A" aria-hidden="true">#</a></h3><p>\u901A\u8FC7form.name\u540D \u76F4\u63A5\u83B7\u53D6\u5230\u67D0\u4E2A\u6807\u7B7E\uFF1B</p><h3 id="\u8868\u5355\u4E8B\u4EF6\uFF1A" tabindex="-1">\u8868\u5355\u4E8B\u4EF6\uFF1A <a class="header-anchor" href="#\u8868\u5355\u4E8B\u4EF6\uFF1A" aria-hidden="true">#</a></h3><p><code>form.onsubmit</code>\uFF1B\u70B9\u51FB\u63D0\u4EA4\u6309\u94AE\u4E8B\u4EF6\u65F6\u89E6\u53D1\uFF1B</p><p><code>form.onreset</code>\uFF1B\u8868\u5355\u91CD\u7F6E\u4E8B\u4EF6\uFF1B</p><p><code>form.user.onfocus</code>\uFF1B\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1\uFF1B</p><p><code>form.user.onblur</code>\uFF1B\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1\uFF1B\u63D0\u793A\u8F93\u5165\u5B8C\u9A8C\u8BC1\u662F\u5426\u5408\u683C\uFF1B</p><p><code>form.user.onchange</code>\uFF1B\u5F53\u6309\u4E0B\u56DE\u8F66\u6216\u5931\u7126\u65F6\u89E6\u53D1\uFF0C\u4E14\u5185\u5BB9\u4E0E\u4E0A\u6B21\u6309\u4E0B\u56DE\u8F66\u6216\u5931\u7126\u4E0D\u540C\uFF1B</p><p><code>form.user.oninput</code>\uFF1A \u7528\u6237\u8F93\u5165\u65F6\u89E6\u53D1\uFF1B</p><h3 id="\u8868\u5355\u65B9\u6CD5\uFF1A" tabindex="-1">\u8868\u5355\u65B9\u6CD5\uFF1A <a class="header-anchor" href="#\u8868\u5355\u65B9\u6CD5\uFF1A" aria-hidden="true">#</a></h3><p><code>return false</code>\uFF1B\u963B\u6B62\u8868\u5355\u63D0\u4EA4\uFF0C\u5224\u65AD\u662F\u5426\u6709\u5185\u5BB9\uFF0C\u6CA1\u6709\u5219\u963B\u6B62\u63D0\u4EA4\uFF1B</p><p><code>form.submit()</code>\uFF1B\u8C03\u7528\u63D0\u4EA4\u65B9\u6CD5\uFF1B\u5E38\u7528\u4E8Ebutton\uFF1B</p><p><code>form.reset()</code>\uFF1B\u8C03\u7528\u91CD\u7F6E\u65B9\u6CD5\uFF1B</p><p><code>form.user.focus()</code>\uFF1B\u8F93\u5165\u6846\u83B7\u5F97\u7126\u70B9\uFF1B</p><p><code>form.user.blur()</code>\uFF1B\u8F93\u5165\u6846\u5931\u53BB\u7126\u70B9\uFF1B</p><p><code>form.user.select()</code>\uFF1B\u76F4\u63A5\u9009\u4E2D\u8F93\u5165\u6846\u7684\u5185\u5BB9\u5E76\u83B7\u5F97\u7126\u70B9\uFF1B</p><p>\u5F53\u8F93\u5165\u6846\u6539\u52A8\u65F6\uFF0C\u6267\u884C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u6BCF\u6309\u4E0B\u4E00\u6B21\u90FD\u4F1A\u6267\u884C\uFF1B</p><p><code>input.oninput = function(){}</code>\uFF0C\u6BD4onkeyup\u5148\u89E6\u53D1\uFF1B</p><h3 id="\u7126\u70B9\u4E8B\u4EF6" tabindex="-1">\u7126\u70B9\u4E8B\u4EF6 <a class="header-anchor" href="#\u7126\u70B9\u4E8B\u4EF6" aria-hidden="true">#</a></h3><p><code>focus</code>\uFF1A\u83B7\u5F97\u7126\u70B9\uFF0C\u4E0D\u652F\u6301\u5192\u6CE1\uFF1B</p><p><code>blur</code>\uFF1A\u5931\u53BB\u7126\u70B9\uFF0C\u4E0D\u652F\u6301\u5192\u6CE1</p><p><code>focusin</code>\uFF1A\u83B7\u5F97\u7126\u70B9\uFF0C\u652F\u6301\u5192\u6CE1\uFF1B</p><p><code>focusout</code>\uFF1A\u5931\u53BB\u7126\u70B9\uFF0C\u652F\u6301\u5192\u6CE1\uFF1B</p><p><code>input.focus()</code> \u4F1A\u81EA\u52A8\u6EDA\u52A8\u5230\u83B7\u53D6\u7126\u70B9\u7684\u5730\u65B9\uFF0C\u5982\u679C\u4E0D\u5E0C\u671B\u6EDA\u52A8\u5230\u83B7\u53D6\u7126\u70B9\u7684\u5730\u65B9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u7684\u4EE3\u7801</p><div class="language-js"><pre><code><span class="token comment">// \u4E0B\u9762\u4EE3\u7801ie\u4E0D\u517C\u5BB9</span>
ipt<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">preventScroll</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u9AD8\u9891\u9762\u8BD5\u9898" tabindex="-1">\u9AD8\u9891\u9762\u8BD5\u9898 <a class="header-anchor" href="#\u9AD8\u9891\u9762\u8BD5\u9898" aria-hidden="true">#</a></h2><p>\u25CF DOM \u600E\u6837\u6DFB\u52A0\u3001\u79FB\u9664\u3001\u79FB\u52A8\u3001\u590D\u5236\u3001\u521B\u5EFA\u548C\u67E5\u627E\u8282\u70B9</p>`,83),p=[t];function l(c,i,d,r,u,h){return a(),n("div",null,p)}var m=e(o,[["render",l]]);export{f as __pageData,m as default};
