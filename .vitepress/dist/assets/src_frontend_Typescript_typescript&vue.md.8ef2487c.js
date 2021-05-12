import{o as n,c as s,d as a}from"./app.b352b1d4.js";const t='{"title":"ts-Typescript and Vue","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、vue文件写法","slug":"一、vue文件写法"},{"level":2,"title":"二、vue-property-decorator","slug":"二、vue-property-decorator"},{"level":3,"title":"可用的装饰器","slug":"可用的装饰器"},{"level":3,"title":"@Prop用法","slug":"prop用法"},{"level":3,"title":"连接vuex","slug":"连接vuex"},{"level":2,"title":"三、tsx写法","slug":"三、tsx写法"},{"level":2,"title":"四、框架推荐","slug":"四、框架推荐"},{"level":2,"title":"五、给Vue扩展原型属性","slug":"五、给vue扩展原型属性"}],"relativePath":"src/frontend/Typescript/typescript&vue.md","lastUpdated":1615699077420}',p={},o=a('<h1 id="ts-typescript-and-vue"><a class="header-anchor" href="#ts-typescript-and-vue" aria-hidden="true">#</a> ts-Typescript and Vue</h1><h2 id="一、vue文件写法"><a class="header-anchor" href="#一、vue文件写法" aria-hidden="true">#</a> 一、vue文件写法</h2><div class="language-vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-page<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>todo-item</span> \n        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>(item, index) in list<span class="token punctuation">&#39;</span></span> \n        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>index<span class="token punctuation">&#39;</span></span>\n        <span class="token attr-name">:isEdittingIndex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>isEdittingIndex<span class="token punctuation">&#39;</span></span>\n        <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>item<span class="token punctuation">&#39;</span></span>\n      <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>todo-item</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>ts<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n<span class="token comment">// 需要指定lang=ts</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Vue<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> TodoItem <span class="token keyword">from</span> <span class="token string">&#39;../components/todo-item&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 使用装饰器修饰类, 组件相关的内容在里面写入</span>\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;todo-page&#39;</span><span class="token punctuation">,</span>\n  components<span class="token operator">:</span> <span class="token punctuation">{</span>\n    TodoItem<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 实例上的属性和方法在类里面定义</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> isEdittingIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token keyword">public</span> list <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      text<span class="token operator">:</span> <span class="token string">&#39;Vue全面解读课程&#39;</span><span class="token punctuation">,</span>\n      complete<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n</code></pre></div><h2 id="二、vue-property-decorator"><a class="header-anchor" href="#二、vue-property-decorator" aria-hidden="true">#</a> 二、vue-property-decorator</h2><h3 id="可用的装饰器"><a class="header-anchor" href="#可用的装饰器" aria-hidden="true">#</a> 可用的装饰器</h3><ul><li><code>@Prop</code></li><li><code>@PropSync</code></li><li><code>@Model</code></li><li><code>@Watch</code></li><li><code>@Provide</code></li><li><code>@Inject</code></li><li><code>@ProvideReactive</code></li><li><code>@InjectReactive</code></li><li><code>@Emit</code></li><li><code>@Ref</code></li><li><code>Mixins</code></li><li><code>@Component</code> 由vue-class-component提供</li></ul><h3 id="prop用法"><a class="header-anchor" href="#prop用法" aria-hidden="true">#</a> @Prop用法</h3><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>Vue<span class="token punctuation">,</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span>\n@Component\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">YourComponent</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 写了undefined类型不需要写断言!</span>\n    @<span class="token function">Prop</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span> <span class="token keyword">readonly</span> propA<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;default value&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">readonly</span> propB<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">string</span>\n    @<span class="token function">Prop</span><span class="token punctuation">(</span><span class="token punctuation">[</span>String<span class="token punctuation">,</span> Boolean<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">readonly</span> propC<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="连接vuex"><a class="header-anchor" href="#连接vuex" aria-hidden="true">#</a> 连接vuex</h3><ol><li><p>安装插件：<code>vuex-class</code></p></li><li><p>使用方法</p></li></ol><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>State<span class="token punctuation">,</span> Mutation<span class="token punctuation">,</span> Action<span class="token punctuation">,</span> Getter<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuex-class&#39;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 括号填写state中的名字，后面为实例的属性名字</span>\n    @<span class="token function">State</span><span class="token punctuation">(</span><span class="token string">&#39;list&#39;</span><span class="token punctuation">)</span> <span class="token keyword">public</span> list\n    @<span class="token function">Mutation</span><span class="token punctuation">(</span><span class="token string">&#39;setIncrement&#39;</span><span class="token punctuation">)</span> <span class="token keyword">public</span> setIncrement\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="3"><li>使用计算属性，使用<code>get</code>和<code>set</code>函数；</li></ol><div class="language-tsx"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Todo</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>\n    <span class="token keyword">get</span> <span class="token function">formatList</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">set</span> <span class="token function">formatList</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="三、tsx写法"><a class="header-anchor" href="#三、tsx写法" aria-hidden="true">#</a> 三、tsx写法</h2><div class="language-tsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Prop<span class="token punctuation">,</span> Vue<span class="token punctuation">,</span> Emit<span class="token punctuation">,</span> Watch<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-property-decorator&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">interface</span> <span class="token class-name">Item</span> <span class="token punctuation">{</span>\n  text<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  complete<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;todo-item&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 导出需要继承vue</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">TodoItems</span> <span class="token keyword">extends</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 传入的为当前属性的类型;</span>\n  @<span class="token function">Prop</span><span class="token punctuation">(</span>Object<span class="token punctuation">)</span> <span class="token keyword">public</span> item<span class="token operator">!</span><span class="token operator">:</span> Item<span class="token punctuation">;</span>\n  @<span class="token function">Prop</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span> <span class="token keyword">public</span> index<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n  @<span class="token function">Prop</span><span class="token punctuation">(</span>Number·<span class="token punctuation">)</span> <span class="token keyword">public</span> isEdittingIndex<span class="token operator">!</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>\n\n  <span class="token comment">// 监听一个值的变化, 传入需要监听的值</span>\n  @<span class="token function">Watch</span><span class="token punctuation">(</span><span class="token string">&#39;index&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>immediate<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> deep<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> <span class="token function">indexChange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token comment">// 触发一个事件, 直接传入事件</span>\n  @<span class="token function">Emit</span><span class="token punctuation">(</span><span class="token string">&#39;on-save&#39;</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n  <span class="token comment">// 触发事件的第二种写法</span>\n  @<span class="token function">Emit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token keyword">public</span> <span class="token function">onSave</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 事件名需要和派发的名字相同</span>\n\n  <span class="token comment">// render修饰符使用protected</span>\n  <span class="token keyword">protected</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h2 id="四、框架推荐"><a class="header-anchor" href="#四、框架推荐" aria-hidden="true">#</a> 四、框架推荐</h2><p>建议使用<code>ant-design-vue</code>的框架，该框架对<code>ts</code>封装处理的特别好，将<code>ant-design</code>react的组件封装了一遍；</p><h2 id="五、给vue扩展原型属性"><a class="header-anchor" href="#五、给vue扩展原型属性" aria-hidden="true">#</a> 五、给Vue扩展原型属性</h2><ul><li>创建src/types/vue.d.ts</li></ul><div class="language-ts"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>Message<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;ant-design-vue/types/message&#39;</span>\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;vue/types/vue&#39;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span>\n        $message<span class="token operator">:</span> Message\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',20);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};