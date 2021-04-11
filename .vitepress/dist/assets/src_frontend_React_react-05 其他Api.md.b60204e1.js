import{o as n,c as s,d as a}from"./app.246f1876.js";const t='{"title":"React-05 其他Api","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、React.memo","slug":"一、react-memo"},{"level":2,"title":"二、React.PureComponent","slug":"二、react-purecomponent"},{"level":2,"title":"三、lazy、Suspense懒加载组件","slug":"三、lazy、suspense懒加载组件"},{"level":2,"title":"四、React.createPortal","slug":"四、react-createportal"},{"level":2,"title":"五、React DOM操作","slug":"五、react-dom操作"}],"relativePath":"src/frontend/React/react-05 其他Api.md","lastUpdated":1615699077400}',p={},o=a('<h1 id="react-05-其他api"><a class="header-anchor" href="#react-05-其他api" aria-hidden="true">#</a> React-05 其他Api</h1><h2 id="一、react-memo"><a class="header-anchor" href="#一、react-memo" aria-hidden="true">#</a> 一、React.memo</h2><ol><li>当一个父组件放了多个子组件时，这个父组件发生改变时，无论子组件数据有没有变化，都会重新渲染所有的子组件，导致重复渲染的问题出现；</li><li>使用React.memo可以包裹函数或类组件之后导出，会根据内部组件的props变化，来实现是否重新渲染组件，</li></ol><div class="language-jsx"><pre><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Comopnent</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>\n</code></pre></div><ol start="3"><li>React.memo支持两个参数，第一个参数是纯函数，第二个参数跟shouldComponentUpdate一样</li></ol><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">areEqual</span><span class="token punctuation">(</span><span class="token parameter">prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">.</span>seconds <span class="token operator">===</span> nextProps<span class="token punctuation">.</span>seconds<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>App<span class="token punctuation">,</span> areEqual<span class="token punctuation">)</span>\n</code></pre></div><ol start="4"><li>当使用Redux时</li></ol><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    state<span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>mapStateToProps<span class="token punctuation">)</span><span class="token punctuation">(</span>React<span class="token punctuation">.</span><span class="token function">memo</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="二、react-purecomponent"><a class="header-anchor" href="#二、react-purecomponent" aria-hidden="true">#</a> 二、React.PureComponent</h2><ol><li>同memo一样，是解决重复渲染的问题，使用PureComponent直接代替Component，会进行props对比，来更新组件的数据；</li></ol><div class="language-jsx"><pre><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>PureComopnent</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><ol start="2"><li><p>使用PureComponent时，在传入的props数据不能太深，因为作的是浅比较，如果比较的是对象，使用PureComponent即不生效了</p><div class="language-jsx"><pre><code><span class="token comment">// 之前  传入的是整个对象</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>c<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n\n<span class="token comment">// 之后（将数据展开）, 传入的是每个属性了</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Comment</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">c</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div></li><li><p>函数组件实现PureComponent</p></li></ol><div class="language-jsx"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">shouldComponentUpdate</span> <span class="token operator">=</span> <span class="token parameter">arePropsEqual</span> <span class="token operator">=&gt;</span> <span class="token parameter">BaseComponent</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">class</span> <span class="token class-name">ShouldComponentUpdate</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">{</span>\n        <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span><span class="token parameter">nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token function">areaPropsEqual</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>nextProps<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token function">render</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">BaseComponent</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">this</span><span class="token punctuation">.</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    ShouldComponentUpdate<span class="token punctuation">.</span>displayName <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Pure(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>BaseComponent<span class="token punctuation">.</span>displayName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>\n    <span class="token keyword">return</span> ShouldComponentUpdate\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> <span class="token function-variable function">Pure</span> <span class="token operator">=</span> <span class="token parameter">BaseComponent</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> hoc <span class="token operator">=</span> <span class="token function">shouldComponentUpdate</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token function">shallowEqual</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token function">hoc</span><span class="token punctuation">(</span>BaseComponent<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>（3）使用方法</p><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">Child</span> <span class="token operator">=</span> <span class="token parameter">props</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>name<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">Pure</span><span class="token punctuation">(</span>Child<span class="token punctuation">)</span>\n</code></pre></div><h2 id="三、lazy、suspense懒加载组件"><a class="header-anchor" href="#三、lazy、suspense懒加载组件" aria-hidden="true">#</a> 三、lazy、Suspense懒加载组件</h2><div class="language-jsx"><pre><code><span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span>lazy<span class="token punctuation">,</span> Suspense<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n\n<span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./pages/About&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Suspense</span></span> <span class="token attr-name">fallback</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">加载中</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">About</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Suspense</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol><li>lazy和Suspense必须搭配使用，lazy懒加载组件，返回一个组件，Suspense包裹懒加载的组件；</li><li>Suspense必须有一个fallback属性，并且属性值必须是一个实例，不能是<code>fallback={Loading}</code>，而必须是<code>fallback={&lt;Loading/&gt;}</code></li><li>由于本地代码加载比较快，可以自己实现一个函数，另加载延迟，能够看出来</li></ol><div class="language-jsx"><pre><code><span class="token keyword">function</span> <span class="token function">slowImport</span><span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> ms<span class="token operator">=</span><span class="token number">1000</span></span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">,</span> ms<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> About <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token function">slowImport</span><span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./pages/About&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="4"><li>优化Network</li></ol><p>下图2.chunk.js是通过lazy懒加载的组件展示的，可以修改名称</p><p><img src="https://notecdn.heny.vip/images/react-04_%E5%85%B6%E4%BB%96Api%EF%BC%8C%E5%8A%A8%E7%94%BB-01.png" alt="image"></p><div class="language-jsx"><pre><code><span class="token keyword">const</span> About <span class="token operator">=</span> <span class="token function">lazy</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/*webpackChunkName:&quot;about&quot;*/</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><p><img src="https://notecdn.heny.vip/images/react-04_%E5%85%B6%E4%BB%96Api%EF%BC%8C%E5%8A%A8%E7%94%BB-02.png" alt="image"></p><ol start="5"><li>Suspense无法捕获组件加载错误，可以使用componentDidCatch捕获，也可以使用静态方法getDerivedStateFromError捕获错误</li></ol><div class="language-jsx"><pre><code><span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n    state <span class="token operator">=</span> <span class="token punctuation">{</span>\n        hasError<span class="token operator">:</span> <span class="token boolean">false</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 使用componentDidCatch捕获</span>\n    <span class="token function">componentDidCatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>hasError<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 使用getDerivedStateFromError</span>\n    <span class="token keyword">static</span> <span class="token function">getDerivedStateFromError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token comment">// 通过返回一个state数据, 系统会自动合并组件的state数据</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            hasError<span class="token operator">:</span> <span class="token boolean">true</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="四、react-createportal"><a class="header-anchor" href="#四、react-createportal" aria-hidden="true">#</a> 四、React.createPortal</h2><p><strong>将元素添加到root之外</strong></p><p>一般使用 React 的组件都是挂到父组件的 this.props.children 上面，总是被最近的父组件所捕获，最终到 React 根组件上。</p><p>而 Protals 则提供了一种将组件直接挂载到直接父组件 DOM 层次之外的一类方式。</p><p>react-dom 提供的具体方法是 <code>ReactDOM.createPortals(child, container)</code></p><p>这个方法需要两个参数，第一个参数是需要挂载的组件实例，而第二个参数则是要挂载到的DOM节点。一般来说第一个参数可能传递的是需要挂载的 this.props.children</p><div class="language-jsx"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span>createPortal<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span> <span class="token comment">// 关于渲染的api都在react-dom里面</span>\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>el <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">&#39;class&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;tjb-mask&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">createPortal</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>建议可以在html模板文件中，添加一个多余的div块，用来单独添加其余的模块；</p><p>教程地址： <a href="http://www.ptbird.cn/react-portal-createPortal.html" target="_blank" rel="noopener noreferrer">http://www.ptbird.cn/react-portal-createPortal.html</a></p><h2 id="五、react-dom操作"><a class="header-anchor" href="#五、react-dom操作" aria-hidden="true">#</a> 五、React DOM操作</h2><p><strong>React.Children</strong></p><p>React提供用于操作this.props.children的工具函数，一般children是只读的，需要使用React提供的工具函数才能操作；</p><p>React.Children有5个方法：</p><ul><li><code>React.Children.map()</code> 类似Array.prototype.map</li></ul><div class="language-jsx"><pre><code><span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        \t</span><span class="token punctuation">{</span>React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">child<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n                <span class="token operator">...</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ul><li><code>React.Children.forEach(children, fn)</code>： 和map一样，无返回；</li><li><code>React.Children.count(children)</code> ： 用来计数，返回child的个数，使用children.length则会报错；</li><li><code>React.Children.only(children)</code>：验证children里只有唯一的孩子并返回他，否则这个方法抛出一个错误</li><li><code>React.Children.toArray(children)</code>：将children转换成Array，对children排序时使用</li></ul><div class="language-jsx"><pre><code><span class="token keyword">function</span> <span class="token function">Father</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> c <span class="token operator">=</span> React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n        \t</span><span class="token punctuation">{</span>c<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token plain-text">\n        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Father</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n\t</span><span class="token punctuation">{</span><span class="token string">&quot;ccc&quot;</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token punctuation">{</span><span class="token string">&#39;aaa&#39;</span><span class="token punctuation">}</span><span class="token plain-text">\n    </span><span class="token punctuation">{</span><span class="token string">&#39;bbb&#39;</span><span class="token punctuation">}</span><span class="token plain-text">\n</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Father</span></span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">// aaa bbb ccc</span>\n</code></pre></div><p>循环给输入框修改属性，在React中修改children时需要使用<code>React.cloneElement</code>先进行克隆</p><div class="language-jsx"><pre><code><span class="token punctuation">{</span>\n    React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>children<span class="token punctuation">,</span> <span class="token parameter">node</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        React<span class="token punctuation">.</span><span class="token function">cloneElement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            value<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            onChange<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>changeHandle\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',45);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
