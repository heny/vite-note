import{_ as n,c as a,o as s,d as t}from"./app.a843d911.js";const g='{"title":"React\u9762\u8BD5","description":"","frontmatter":{},"headers":[{"level":2,"title":"fiber","slug":"fiber"},{"level":3,"title":"fiber\u6570\u636E\u7ED3\u6784","slug":"fiber\u6570\u636E\u7ED3\u6784"},{"level":2,"title":"redux\u9762\u8BD5\u76F8\u5173","slug":"redux\u9762\u8BD5\u76F8\u5173"},{"level":3,"title":"redux\u7531\u4EE5\u4E0B\u7EC4\u4EF6\u7EC4\u6210\uFF1A","slug":"redux\u7531\u4EE5\u4E0B\u7EC4\u4EF6\u7EC4\u6210\uFF1A"},{"level":3,"title":"\u89E3\u91CAreducer\u7684\u4F5C\u7528","slug":"\u89E3\u91CAreducer\u7684\u4F5C\u7528"},{"level":3,"title":"Store\u5728redux\u4E2D\u7684\u610F\u4E49\u662F\u4EC0\u4E48","slug":"store\u5728redux\u4E2D\u7684\u610F\u4E49\u662F\u4EC0\u4E48"},{"level":3,"title":"Redux\u4E0EFlux\u6709\u4F55\u4E0D\u540C\uFF1F","slug":"redux\u4E0Eflux\u6709\u4F55\u4E0D\u540C\uFF1F"},{"level":2,"title":"react18","slug":"react18"},{"level":3,"title":"\u65B0\u7684API","slug":"\u65B0\u7684api"},{"level":3,"title":"Concurrent Mode","slug":"concurrent-mode"}],"relativePath":"src/frontend/React/React\u9762\u8BD5.md","lastUpdated":1666787704818}',p={},e=t(`<h1 id="react\u9762\u8BD5" tabindex="-1">React\u9762\u8BD5 <a class="header-anchor" href="#react\u9762\u8BD5" aria-hidden="true">#</a></h1><ol><li><a href="https://zhuanlan.zhihu.com/p/143570474" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/143570474</a></li></ol><h2 id="fiber" tabindex="-1">fiber <a class="header-anchor" href="#fiber" aria-hidden="true">#</a></h2><p>\u7531\u4E8Erender\u51FD\u6570\u9012\u5F52\u6267\u884C\uFF0C\u5982\u679C\u9879\u76EE\u53D8\u5F97\u5E9E\u5927\u540E\uFF0C\u4F1A\u6709\u5361\u987F\uFF0C<code>requestIdleCallback</code>\u53EF\u4EE5\u5229\u7528\u6D4F\u89C8\u5668\u7684\u4E1A\u4F59\u65F6\u95F4\uFF0C\u628A\u4EFB\u52A1\u5206\u6210\u4E00\u4E2A\u4E2A\u7684\u5C0F\u4EFB\u52A1\uFF0C\u7136\u540E\u5229\u7528\u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u95F4\u6765\u505Adiff\uFF0C\u5982\u679C\u5F53\u524D\u6709\u4EFB\u52A1\u6765\u4E86\uFF0C\u6BD4\u5982\u7528\u6237\u7684\u70B9\u51FB\u6216\u8005\u52A8\u753B\uFF0C\u4F1A\u5148\u6267\u884C\uFF0C\u7136\u540E\u7A7A\u95F2\u540E\uFF0C\u56DE\u5230\u5F53\u524D\u4EFB\u52A1\u7EE7\u7EED\u6267\u884C\u672A\u5B8C\u6210\u7684\u4EFB\u52A1\uFF1B</p><h3 id="fiber\u6570\u636E\u7ED3\u6784" tabindex="-1">fiber\u6570\u636E\u7ED3\u6784 <a class="header-anchor" href="#fiber\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a></h3><p>fiber\u904D\u5386\u8FC7\u7A0B\uFF1A\u81EA\u4E0A\u800C\u4E0B\uFF0C\u81EA\u5DE6\u81F3\u53F3\uFF1B</p><p>\u5148\u627E\u5B50\u5143\u7D20 -&gt; \u518D\u627E\u5144\u5F1F\u5143\u7D20 -&gt; \u518D\u627E\u7236\u5143\u7D20\uFF1B</p><h2 id="redux\u9762\u8BD5\u76F8\u5173" tabindex="-1">redux\u9762\u8BD5\u76F8\u5173 <a class="header-anchor" href="#redux\u9762\u8BD5\u76F8\u5173" aria-hidden="true">#</a></h2><h3 id="redux\u7531\u4EE5\u4E0B\u7EC4\u4EF6\u7EC4\u6210\uFF1A" tabindex="-1">redux\u7531\u4EE5\u4E0B\u7EC4\u4EF6\u7EC4\u6210\uFF1A <a class="header-anchor" href="#redux\u7531\u4EE5\u4E0B\u7EC4\u4EF6\u7EC4\u6210\uFF1A" aria-hidden="true">#</a></h3><p>Action\uFF1A\u8FD9\u662F\u4E00\u4E2A\u7528\u6765\u63CF\u8FF0\u53D1\u751F\u4E86\u4EC0\u4E48\u4E8B\u60C5\u7684\u5BF9\u8C61\uFF1B</p><p>Reducer\uFF1A\u8FD9\u662F\u4E00\u4E2A\u786E\u5B9A\u72B6\u6001\u5C06\u5982\u4F55\u53D8\u5316\u7684\u5730\u65B9</p><p>Store\uFF1A\u6574\u4E2A\u7A0B\u5E8F\u7684\u72B6\u6001/\u5BF9\u8C61\u6811\u4FDD\u5B58\u5728Store\u4E2D\uFF1B</p><h3 id="\u89E3\u91CAreducer\u7684\u4F5C\u7528" tabindex="-1">\u89E3\u91CAreducer\u7684\u4F5C\u7528 <a class="header-anchor" href="#\u89E3\u91CAreducer\u7684\u4F5C\u7528" aria-hidden="true">#</a></h3><p>reducers\u662F\u7EAF\u51FD\u6570\uFF0C\u5B83\u89C4\u5B9A\u5E94\u7528\u7A0B\u5E8F\u7684\u72B6\u6001\u600E\u6837\u56E0\u54CD\u5E94Action\u800C\u6539\u53D8\uFF0Creducers\u901A\u8FC7\u63A5\u53D7\u5148\u524D\u7684\u72B6\u6001\u548Caction\u6765\u5DE5\u4F5C\uFF0C\u7136\u540E\u5B83\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u72B6\u6001\uFF0C\u5B83\u6839\u636E\u64CD\u4F5C\u7684\u7C7B\u578B\u786E\u5B9A\u9700\u8981\u6267\u884C\u54EA\u79CD\u66F4\u65B0\uFF0C\u7136\u540E\u8FD4\u56DE\u65B0\u7684\u503C\uFF0C\u5982\u679C\u4E0D\u9700\u8981\u5B8C\u6210\u4EFB\u52A1\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u539F\u6765\u7684\u72B6\u6001\uFF1B</p><h3 id="store\u5728redux\u4E2D\u7684\u610F\u4E49\u662F\u4EC0\u4E48" tabindex="-1">Store\u5728redux\u4E2D\u7684\u610F\u4E49\u662F\u4EC0\u4E48 <a class="header-anchor" href="#store\u5728redux\u4E2D\u7684\u610F\u4E49\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h3><p>Store\u662F\u4E00\u4E2Ajavascript\u5BF9\u8C61\uFF0C\u5B83\u53EF\u4EE5\u4FDD\u5B58\u7A0B\u5E8F\u7684\u72B6\u6001\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E9B\u65B9\u6CD5\u6765\u8BBF\u95EE\u72B6\u6001\u3001\u8C03\u5EA6\u64CD\u4F5C\u548C\u6CE8\u518C\u4FA6\u542C\u5668\uFF0C\u5E94\u7528\u7A0B\u5E8F\u7684\u6574\u4E2A\u72B6\u6001/\u5BF9\u8C61\u6811\u4FDD\u5B58\u5728\u5355\u4E00\u5B58\u50A8\u4E2D\uFF0C\u56E0\u6B64\uFF0Credux\u975E\u5E38\u7B80\u5355\u4E14\u662F\u53EF\u9884\u6D4B\u7684\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4E2D\u95F4\u4EF6\u4F20\u9012\u5230store\u6765\u5904\u7406\u6570\u636E\uFF0C\u5E76\u8BB0\u5F55\u6539\u53D8\u5B58\u50A8\u72B6\u6001\u7684\u5404\u79CD\u64CD\u4F5C\uFF0C\u6240\u6709\u64CD\u4F5C\u90FD\u901A\u8FC7reducer\u8FD4\u56DE\u4E00\u4E2A\u65B0\u72B6\u6001\uFF1B</p><h3 id="redux\u4E0Eflux\u6709\u4F55\u4E0D\u540C\uFF1F" tabindex="-1">Redux\u4E0EFlux\u6709\u4F55\u4E0D\u540C\uFF1F <a class="header-anchor" href="#redux\u4E0Eflux\u6709\u4F55\u4E0D\u540C\uFF1F" aria-hidden="true">#</a></h3><ol><li>Flux\u7684Store\u5305\u542B\u72B6\u6001\u548C\u66F4\u6539\u903B\u8F91\uFF0CRedux\u4E2DStore\u548C\u66F4\u6539\u903B\u8F91\u662F\u5206\u5F00\u7684\uFF1B</li><li>flux\u4E2D\u6709\u591A\u4E2Astore\uFF0Credux\u53EA\u6709\u4E00\u4E2Astore\uFF1B</li><li>flux\u4E2D\u6240\u6709store\u90FD\u4E92\u4E0D\u5F71\u54CD\u4E14\u662F\u5E73\u7EA7\u7684\uFF0Credux\u5E26\u6709\u5206\u5C42reducer\u7684\u5355\u4E00store\uFF1B</li><li>flux\u6709\u5355\u4E00\u8C03\u5EA6\u5668\uFF0Credux\u6CA1\u6709\u8C03\u5EA6\u5668\u7684\u6982\u5FF5\uFF1B</li><li>flux\u4E2Dreact\u7EC4\u4EF6\u8BA2\u9605store\uFF0C</li></ol><h2 id="react18" tabindex="-1">react18 <a class="header-anchor" href="#react18" aria-hidden="true">#</a></h2><ol><li>react18\u653E\u5F03\u5BF9ie11\u7684\u652F\u6301\uFF0C\u9700\u8981\u4F7F\u7528ie\u8981\u9000\u56DE\u5230react17</li><li>render\u5F15\u5165\u5E76\u53D1\u6A21\u5F0F\u7684\u6E32\u67D3\uFF0C\u53EF\u4EE5render\u591A\u4E2A\u8282\u70B9\u4E86\uFF0C\u5F15\u5165react-dom\u4E2D\u7684createRoot\uFF0C\u5378\u8F7D\u65F6\u4E5F\u9700\u8981<code>root.unmount()</code>\u4E86\uFF0C\u4F7F\u7528\u65E7\u7684api\u65F6\u4F1A\u770B\u5230\u8B66\u544A\u63D0\u793A</li><li>react18\u5220\u9664\u4E86\u5173\u4E8E\u5185\u5B58\u6CC4\u6F0F\u7684\u8B66\u544A\u9519\u8BEF\uFF0C\u572818\u4E4B\u524DuseEffect\u4E2D\u66F4\u65B0state\u72B6\u6001\uFF0C\u5B9E\u9645\u4E0A\u6CA1\u6709\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\uFF0C\u662F\u56E0\u4E3A\u88AB\u5783\u573E\u56DE\u6536\u4E86\uFF0C18\u4E2D\u5220\u9664\u4E86\u8FD9\u4E2A\u9519\u8BEF</li><li>react18\u4E4B\u524D\u8FD4\u56DE\u503C\u5FC5\u987B\u4E3Anull\uFF0Cundefined\u5219\u629B\u51FA\u9519\u8BEF\uFF0C18\u4E4B\u540E\u4E0D\u4F1A\u518D\u68C0\u67E5undefined\u9519\u8BEF\u4E86\uFF08\u4F46\u662F\u5728react18\u7684dts\u6587\u4EF6\u8FD8\u662F\u4F1A\u68C0\u67E5\uFF09</li><li>\u5728react18\u4E4B\u524Dsuspence\u7EC4\u4EF6\u5FC5\u987B\u8981\u4F7F\u7528fallback\uFF0C\u5426\u5219\u67E5\u627E\u4E0A\u4E00\u4E2Asuspence\u7EC4\u4EF6\uFF0C\u8003\u8651\u5230\u4E0D\u597D\u8C03\u8BD5\u7684\u539F\u56E0\u66F4\u65B0\u540E\u5219\u4E0D\u4F1A\u518D\u67E5\u627E\u4E0A\u4E00\u4E2Asuspence\u7EC4\u4EF6</li></ol><h3 id="\u65B0\u7684api" tabindex="-1">\u65B0\u7684API <a class="header-anchor" href="#\u65B0\u7684api" aria-hidden="true">#</a></h3><p><strong>useId</strong></p><p>\u652F\u6301\u540C\u4E00\u4E2A\u7EC4\u4EF6\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u751F\u6210\u76F8\u540C\u7684\u552F\u4E00\u7684 ID\uFF0C\u907F\u514D <code>hydration</code> \u7684\u4E0D\u517C\u5BB9\uFF0C\u8FD9\u89E3\u51B3\u4E86\u5728 <code>React 17</code> \u53CA <code>17</code> \u4EE5\u4E0B\u7248\u672C\u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u95EE\u9898\u3002\u56E0\u4E3A\u6211\u4EEC\u7684\u670D\u52A1\u5668\u6E32\u67D3\u65F6\u63D0\u4F9B\u7684 <code>HTML</code> \u662F<code>\u65E0\u5E8F\u7684</code>\uFF0C<code>useId</code> \u7684\u539F\u7406\u5C31\u662F\u6BCF\u4E2A <code>id</code> \u4EE3\u8868\u8BE5\u7EC4\u4EF6\u5728\u7EC4\u4EF6\u6811\u4E2D\u7684\u5C42\u7EA7\u7ED3\u6784\u3002</p><div class="language-tsx"><pre><code><span class="token keyword">function</span> <span class="token function">Checkbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> <span class="token function">useId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">htmlFor</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Do you like React?</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>id<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>checkbox<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>react<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>useSyncExternalStore</strong></p><p>\u4E00\u822C\u662F\u7B2C\u4E09\u65B9\u7BA1\u7406\u5E93\u4F7F\u7528\uFF0C\u65E5\u5E38\u4E1A\u52A1\u4E2D\u4E0D\u9700\u8981\u5173\u6CE8\uFF0C\u53EF\u4EE5\u5230\u5B98\u7F51\u4E86\u89E3</p><p><strong>useInsertionEffect</strong></p><p>\u4E0EuseEffect\u548CuseLayoutEffect\u76F8\u540C\uFF0C\u8FD9\u4E2A\u5728useLayoutEffect\u4E4B\u524D\u6CE8\u5165\uFF0C\u8BE6\u7EC6\u53EF\u4EE5\u5230\u5B98\u7F51\u4E86\u89E3</p><h3 id="concurrent-mode" tabindex="-1">Concurrent Mode <a class="header-anchor" href="#concurrent-mode" aria-hidden="true">#</a></h3><p>react17\u4E2D\u5C31\u53EF\u4EE5\u901A\u8FC7\u4E00\u4E9B\u8BD5\u9A8C\u6027\u7684api\u5F00\u542F\uFF0CCM\u672C\u8EAB\u5E76\u4E0D\u662F\u4E00\u4E2A\u529F\u80FD\uFF0C\u800C\u662F\u4E00\u4E2A\u5E95\u5C42\u8BBE\u8BA1\uFF1B</p><p>\u5E76\u53D1\u6A21\u5F0F\u53EF\u5E2E\u52A9\u5E94\u7528\u4FDD\u6301\u54CD\u5E94\uFF0C\u5E76\u6839\u636E\u7528\u6237\u7684\u8BBE\u5907\u6027\u80FD\u548C\u7F51\u901F\u8FDB\u884C\u9002\u5F53\u7684\u8C03\u6574\uFF0C\u8BE5\u6A21\u5F0F\u901A\u8FC7\u4F7F\u6E32\u67D3\u53EF\u4E2D\u65AD\u6765\u4FEE\u590D<code>\u963B\u585E\u6E32\u67D3</code>\u9650\u5236\u3002\u5728 <code>Concurrent</code> \u6A21\u5F0F\u4E2D\uFF0C<code>React</code> \u53EF\u4EE5\u540C\u65F6\u66F4\u65B0\u591A\u4E2A\u72B6\u6001\u3002</p><p>\u901A\u4FD7\u6613\u61C2\u662F\u6307\uFF1Areact18\u5C06react17\u4ECE<code>\u540C\u6B65\u4E0D\u53EF\u4E2D\u65AD\u66F4\u65B0</code>\u53D8\u6210\u4E86<code>\u5F02\u6B65\u53EF\u4E2D\u65AD\u66F4\u65B0</code></p><p>\u5F00\u542F\u5E76\u53D1\u6A21\u5F0F\u9700\u8981\u4F7F\u7528<code>createRoot().render</code>\u65B9\u5F0F\u6E32\u67D3 \uFF1B</p><p>\u5728react17\u5F53\u4E2D\u7684\u5B9E\u9A8C\u6027\u529F\u80FD\u91CC\u9762\uFF0C\u5F00\u542F\u5E76\u53D1\u6A21\u5F0F\u5C31\u5F00\u542F\u4E86\u5E76\u53D1\u66F4\u65B0\uFF0C\u5728react18\u66F4\u65B0\u4E4B\u540E\uFF0C\u5B98\u65B9\u7B56\u7565\u8FDB\u884C\u4E86\u8C03\u6574\uFF0C\u4E0D\u518D\u4F9D\u8D56\u5F00\u542F\u5E76\u53D1\u6A21\u5F0F\u6765\u5F00\u542F\u5E76\u53D1\u66F4\u65B0\uFF0C\u9700\u8981\u624B\u52A8\u5F00\u542F\u5E76\u53D1\u66F4\u65B0\uFF0C\u5F00\u542F\u5E76\u53D1\u66F4\u65B0\u9700\u8981\u4F7F\u7528react18\u65B0\u7684api\uFF1B\u65B0api\u6709<code>useDeferredValue</code> \u548C <code>useTransition</code></p><p><strong>useTransition</strong></p><div class="language-tsx"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>isPending<span class="token punctuation">,</span> startTransition<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useTransition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528\u4E86\u5E76\u53D1\u7279\u6027\uFF0C\u5F00\u542F\u5E76\u53D1\u66F4\u65B0</span>
    <span class="token function">startTransition</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">setList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>list<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div><p>\u88ABstartTransition\u5305\u88F9\u7684setState\u89E6\u53D1\u7684\u6E32\u67D3\u88AB\u6807\u8BB0\u4E3A\u4E0D\u7D27\u6025\u6E32\u67D3\uFF0C\u8FD9\u4E9B\u6E32\u67D3\u53EF\u80FD\u88AB\u5176\u4ED6\u7D27\u6025\u6E32\u67D3\u6240\u62A2\u5360</p><p><strong>useDeferredValue</strong></p><div class="language-tsx"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useDeferredValue <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token function-variable function">FC</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>list<span class="token punctuation">,</span> setList<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useState</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u4F7F\u7528\u4E86\u5E76\u53D1\u7279\u6027\uFF0C\u5F00\u542F\u5E76\u53D1\u66F4\u65B0</span>
  <span class="token keyword">const</span> deferredList <span class="token operator">=</span> <span class="token function">useDeferredValue</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      </span><span class="token punctuation">{</span>deferredList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>_<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>i<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>i<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> App<span class="token punctuation">;</span>
</code></pre></div><p>\u4E24\u4E2A\u65B9\u6CD5\u4E0D\u540C\u4E8E\uFF0C<code>useTransition</code>\u662F\u7528\u6765\u5305\u88C5\u65B9\u6CD5\u7684\uFF0C<code>useDeferredValue</code>\u662F\u7528\u6765\u5305\u88C5\u503C\u7684</p><p>\u53C2\u8003\u8D44\u6599\uFF1A<a href="https://juejin.cn/post/7094037148088664078" target="_blank" rel="noopener noreferrer">React18 \u65B0\u7279\u6027\u89E3\u8BFB &amp; \u5B8C\u6574\u7248\u5347\u7EA7\u6307\u5357</a></p>`,41),o=[e];function c(u,l,i,r,k,d){return s(),a("div",null,o)}var h=n(p,[["render",c]]);export{g as __pageData,h as default};
