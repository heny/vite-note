import{o as n,c as s,d as a}from"./app.0bfd9210.js";const t='{"title":"Vue项目技巧","description":"","frontmatter":{},"headers":[{"level":2,"title":"在vscode可以点击跳转到对应的文件","slug":"在vscode可以点击跳转到对应的文件"},{"level":2,"title":"逻辑复用方法","slug":"逻辑复用方法"},{"level":2,"title":"样式穿透","slug":"样式穿透"},{"level":2,"title":"数据请求loading","slug":"数据请求loading"},{"level":2,"title":"长列表优化","slug":"长列表优化"},{"level":2,"title":"封装el-dialog方法","slug":"封装el-dialog方法"},{"level":2,"title":"添加Message消息提示节流","slug":"添加message消息提示节流"},{"level":2,"title":"防抖、节流用法","slug":"防抖、节流用法"},{"level":2,"title":"监听生命周期函数","slug":"监听生命周期函数"},{"level":3,"title":"内部监听生命周期","slug":"内部监听生命周期"},{"level":3,"title":"外部监听生命周期","slug":"外部监听生命周期"},{"level":2,"title":"Vue.observable","slug":"vue-observable"},{"level":2,"title":"随时监听watch","slug":"随时监听watch"},{"level":2,"title":"渲染字符串","slug":"渲染字符串"}],"relativePath":"src/frontend/Vue/vue实战技巧.md","lastUpdated":1635408751921}',p={},o=a('<h1 id="vue项目技巧"><a class="header-anchor" href="#vue项目技巧" aria-hidden="true">#</a> Vue项目技巧</h1><h2 id="在vscode可以点击跳转到对应的文件"><a class="header-anchor" href="#在vscode可以点击跳转到对应的文件" aria-hidden="true">#</a> 在vscode可以点击跳转到对应的文件</h2><p>创建jsconfig.json</p><div class="language-js"><pre><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;.&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token string">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;./src/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 增加别名可以跳转对应文件夹</span>\n      <span class="token string">&quot;api&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;api&quot;</span><span class="token punctuation">]</span> <span class="token comment">// 其他的路径跳转</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="逻辑复用方法"><a class="header-anchor" href="#逻辑复用方法" aria-hidden="true">#</a> 逻辑复用方法</h2><div class="language-js"><pre><code>MyPlugin<span class="token punctuation">.</span><span class="token function-variable function">install</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">Vue<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 第一种方法. 添加全局方法或属性</span>\n    Vue<span class="token punctuation">.</span><span class="token function-variable function">myGlobalMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 逻辑...</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 第二种方法. 添加全局资源</span>\n    Vue<span class="token punctuation">.</span><span class="token function">directive</span><span class="token punctuation">(</span><span class="token string">&#39;my-directive&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        <span class="token function">bind</span> <span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> binding<span class="token punctuation">,</span> vnode<span class="token punctuation">,</span> oldVnode</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// 逻辑...</span>\n        <span class="token punctuation">}</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 第三种方法. 注入组件</span>\n    Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 逻辑...</span>\n        <span class="token punctuation">}</span>\n         <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 第五种方法. 添加实例方法</span>\n    <span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$myMethod</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">methodOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 逻辑...</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 第六种方法，注册组件</span>\n    Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>组件名<span class="token punctuation">,</span> 组件<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>举例使用场景：</p><ul><li>toast提示可以选择Vue.prototype</li><li>输入框自动获取焦点可以选择Vue.directive指令，</li><li>自定义组件可以选择Vue.component的形式。</li></ul><h2 id="样式穿透"><a class="header-anchor" href="#样式穿透" aria-hidden="true">#</a> 样式穿透</h2><blockquote><p>在使用UI框架时，由于一些选择器嵌套太深，无法被读取到，因此可以使用样式穿透</p></blockquote><ol><li><p>一个组件可以同时使用scoped和非scoped两个style标签，将无法起效果的，需要穿透的放到style标签去写；</p><div class="language-js"><pre><code><span class="token operator">&lt;</span>style<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>\n<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>\n</code></pre></div></li><li><p>使用&gt;&gt;&gt;进行穿透</p><div class="language-css"><pre><code><span class="token selector">.father &gt;&gt;&gt; .son</span><span class="token punctuation">{</span>\n    <span class="token comment">/* */</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p>对于less、sass等处理器，不支持&gt;&gt;&gt;解析，可以使用/deep/ 或 ::v-deep</p><div class="language-css"><pre><code><span class="token selector">.father</span><span class="token punctuation">{</span>\n   <span class="token selector">/deep/ .son</span><span class="token punctuation">{</span>\n       <span class="token comment">/* */</span>\n   <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li></ol><h2 id="数据请求loading"><a class="header-anchor" href="#数据请求loading" aria-hidden="true">#</a> 数据请求loading</h2><ol><li><p>在main.js里面配置全局的loading</p><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Loading<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>\n<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">$loading</span> <span class="token operator">=</span> <span class="token parameter">options</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> defaults <span class="token operator">=</span> <span class="token punctuation">{</span>\n        lock<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否锁定屏幕滚动</span>\n        text<span class="token operator">:</span> <span class="token string">&#39;加载中&#39;</span><span class="token punctuation">,</span>\n        spinner<span class="token operator">:</span> <span class="token string">&#39;el-icon-loading&#39;</span><span class="token punctuation">,</span>\n        background<span class="token operator">:</span> <span class="token string">&#39;rgba(0,0,0,.7)&#39;</span><span class="token punctuation">,</span>\n        target<span class="token operator">:</span> document<span class="token punctuation">.</span>body<span class="token punctuation">,</span> 目标对象\n        <span class="token operator">...</span>options\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> Loading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span>defaults<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p>在请求数据时</p><div class="language-js"><pre><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">reqData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> loading <span class="token operator">=</span> <span class="token keyword">null</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 服务方式必须使用异步处理</span>\n        loading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$loading</span><span class="token punctuation">(</span><span class="token punctuation">{</span>target<span class="token operator">:</span> <span class="token string">&#39;el-table&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// 传入需要显示的位置</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    loading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li></ol><h2 id="长列表优化"><a class="header-anchor" href="#长列表优化" aria-hidden="true">#</a> 长列表优化</h2><ol><li><p>安装插件：<code>yarn add vue-virtual-scroller</code></p></li><li><p>修改main.js文件</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> VueVirtualScroller <span class="token keyword">from</span> <span class="token string">&#39;vue-virtual-scroller&#39;</span>\nVue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueVirtualScroller<span class="token punctuation">)</span>\n<span class="token keyword">import</span> &#39;vue<span class="token operator">-</span>virtual<span class="token operator">-</span>scroller<span class="token operator">/</span>dist<span class="token operator">/</span>vue<span class="token operator">-</span>virtual<span class="token operator">-</span>scroller<span class="token punctuation">.</span>css\n</code></pre></div></li></ol><h2 id="封装el-dialog方法"><a class="header-anchor" href="#封装el-dialog方法" aria-hidden="true">#</a> 封装el-dialog方法</h2><ol><li><p>创建组件模板，根据自行需要封装，主要是了解如何触发；</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-dialog</span> <span class="token attr-name">:visible.sync</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>visible<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#title</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>deleteDia__title--txt<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>footer<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible=false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>取 消<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>send<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>确 定<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-dialog</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;el-dialogs&#39;</span><span class="token punctuation">,</span>\n  props<span class="token operator">:</span> <span class="token punctuation">{</span>\n    value<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    title<span class="token operator">:</span> <span class="token punctuation">{</span>\n      type<span class="token operator">:</span> String<span class="token punctuation">,</span>\n      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;系统提示&#39;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  computed<span class="token operator">:</span> <span class="token punctuation">{</span>\n    visible<span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token function">set</span> <span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span> val<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;custom&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 触发父元素的自定义事件</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>scss<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">\n\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li><li><p>使用方法</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>组件名</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>visible的变量<span class="token punctuation">&#39;</span></span> <span class="token attr-name">@custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>确定按钮的函数<span class="token punctuation">&#39;</span></span><span class="token punctuation">/&gt;</span></span>\n</code></pre></div></li></ol><p><strong>其他方法：</strong></p><p>不使用v-model；</p><ul><li>子组件：使用$parent访问父组件的方法调用事件</li><li>父组件：父组件使用ref访问子组件的方法显示子组件</li></ul><p>节制地使用 <code>$parent</code> 和 <code>$children</code> - 它们的主要目的是作为访问组件的应急方法。更推荐用 props 和 events 实现父子组件通信</p><h2 id="添加message消息提示节流"><a class="header-anchor" href="#添加message消息提示节流" aria-hidden="true">#</a> 添加Message消息提示节流</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Message <span class="token keyword">as</span> message<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-ui&#39;</span>\n<span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>$messageTip <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> property<span class="token punctuation">,</span> receiver<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token function">that</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> that<span class="token punctuation">,</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> property<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">_target<span class="token punctuation">,</span> _thisBing<span class="token punctuation">,</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> status<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    sessionStorage<span class="token punctuation">.</span><span class="token constant">ELEMENT_MESSAGE_FLAG</span> <span class="token operator">=</span> sessionStorage<span class="token punctuation">.</span><span class="token constant">ELEMENT_MESSAGE_FLAG</span> <span class="token operator">||</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>sessionStorage<span class="token punctuation">.</span><span class="token constant">ELEMENT_MESSAGE_FLAG</span> <span class="token operator">===</span> <span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n    sessionStorage<span class="token punctuation">.</span><span class="token constant">ELEMENT_MESSAGE_FLAG</span> <span class="token operator">=</span> <span class="token string">&#39;false&#39;</span><span class="token punctuation">;</span>\n    message<span class="token punctuation">[</span>status <span class="token operator">||</span> <span class="token string">&#39;success&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      sessionStorage<span class="token punctuation">.</span><span class="token constant">ELEMENT_MESSAGE_FLAG</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span><span class="token punctuation">;</span>\n      <span class="token keyword">delete</span> sessionStorage<span class="token punctuation">.</span><span class="token constant">ELEMENT_MESSAGE_FLAG</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>使用方式：</strong></p><ul><li>两个调用方式： <ul><li><a href="http://%E2%91%A0$messageTip.info" target="_blank" rel="noopener noreferrer">①$messageTip.info</a>(消息或对象)</li><li>②$messageTip(消息或对象，类型)</li></ul></li></ul><p><strong>注意：</strong> 在入口文件的生命周期删除delete sessionStorage[&#39;ELEMENT_MESSAGE_FLAG&#39;]，否则可能会有bug；</p><h2 id="防抖、节流用法"><a class="header-anchor" href="#防抖、节流用法" aria-hidden="true">#</a> 防抖、节流用法</h2><div class="language-js"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>debounce<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;lodash&#39;</span>\nmethods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    remoteMethod<span class="token operator">:</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">query</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// this始终指向Vue实例</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="监听生命周期函数"><a class="header-anchor" href="#监听生命周期函数" aria-hidden="true">#</a> 监听生命周期函数</h2><h3 id="内部监听生命周期"><a class="header-anchor" href="#内部监听生命周期" aria-hidden="true">#</a> 内部监听生命周期</h3><p>为了使代码更易阅读，可以将事件放到一个生命周期写；</p><p>可以通过<code>this.$on</code>或<code>this.$once</code>监听生命周期；</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resizeFn<span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$once</span><span class="token punctuation">(</span><span class="token string">&#39;hook:beforeDestory&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>resizeFn<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n   \t\t<span class="token function">resizeFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="外部监听生命周期"><a class="header-anchor" href="#外部监听生命周期" aria-hidden="true">#</a> 外部监听生命周期</h3><p>常用在第三方组件上面，需要监听第三方组件的生命周期事件；</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>custom</span> <span class="token attr-name"><span class="token namespace">@hook:</span>updated</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span><span class="token punctuation">&#39;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="vue-observable"><a class="header-anchor" href="#vue-observable" aria-hidden="true">#</a> Vue.observable</h2><p>大项目使用Vuex，小项目使用Vue.observable</p><ol><li><p>创建store</p><div class="language-js"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> store <span class="token operator">=</span> Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    userInfo<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    list<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">const</span> mutations <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token function">setUserInfo</span><span class="token punctuation">(</span><span class="token parameter">userInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        store<span class="token punctuation">.</span>userInfo <span class="token operator">=</span> userInfo\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p>在组件中引入</p><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>\n        {{userInfo.name}}\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\nimport {store, mutations} from &#39;../store&#39;\n\nexport default {\n\tcomputed:{\n\t\tuserInfo(){\n\t\t\treturn store.userInfo\n\t\t}\n\t}\n}\n</code></pre></div></li></ol><h2 id="随时监听watch"><a class="header-anchor" href="#随时监听watch" aria-hidden="true">#</a> 随时监听watch</h2><p>通过<code>this.$watch</code>随时监听，通过返回的<code>unwatch()</code>取消监听</p><div class="language-js"><pre><code>methods<span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token function">loadData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>formData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token keyword">const</span> unwatch <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$watch</span><span class="token punctuation">(</span><span class="token string">&#39;formData&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>deep<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="渲染字符串"><a class="header-anchor" href="#渲染字符串" aria-hidden="true">#</a> 渲染字符串</h2><p>github地址：<a href="https://github.com/alexjoverm/v-runtime-template" target="_blank" rel="noopener noreferrer">https://github.com/alexjoverm/v-runtime-template</a></p>',44);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
