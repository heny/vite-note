import{r as n,o as s,c as a,a as p,w as t,d as o,b as e}from"./app.dc9dbd0c.js";const c='{"title":"TS-03 泛型、类","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、泛型","slug":"一、泛型"},{"level":3,"title":"泛型的简单使用","slug":"泛型的简单使用"},{"level":3,"title":"多个泛型定义","slug":"多个泛型定义"},{"level":3,"title":"接口使用泛型变量","slug":"接口使用泛型变量"},{"level":3,"title":"泛型约束","slug":"泛型约束"},{"level":3,"title":"泛型中的默认值","slug":"泛型中的默认值"},{"level":2,"title":"二、TS中的类","slug":"二、ts中的类"},{"level":3,"title":"定义类","slug":"定义类"},{"level":3,"title":"类的修饰符","slug":"类的修饰符"},{"level":3,"title":"其他修饰符","slug":"其他修饰符"},{"level":3,"title":"参数属性","slug":"参数属性"},{"level":3,"title":"可选类属性","slug":"可选类属性"},{"level":3,"title":"类的存取器","slug":"类的存取器"},{"level":3,"title":"抽象类","slug":"抽象类"},{"level":3,"title":"实例类型","slug":"实例类型"},{"level":3,"title":"类实现接口","slug":"类实现接口"},{"level":3,"title":"接口继承类","slug":"接口继承类"},{"level":3,"title":"泛型中使用类 类型","slug":"泛型中使用类-类型"}],"relativePath":"src\\\\frontend\\\\Typescript\\\\ts-03 泛型、类.md","lastUpdated":1612089669874}',l={},k=o('<h1 id="ts-03-泛型、类"><a class="header-anchor" href="#ts-03-泛型、类" aria-hidden="true">#</a> TS-03 泛型、类</h1><h2 id="一、泛型"><a class="header-anchor" href="#一、泛型" aria-hidden="true">#</a> 一、泛型</h2><h3 id="泛型的简单使用"><a class="header-anchor" href="#泛型的简单使用" aria-hidden="true">#</a> 泛型的简单使用</h3><blockquote><p>泛型就相当于是一个变量</p></blockquote><div class="language-js"><pre><code><span class="token comment">// 使用T来约束类型, 后面传入的什么, 类型就是什么, 如果传入number, 则返回的是以number构成的数组</span>\n<span class="token comment">// T不是固定写法，一般使用T;</span>\n<span class="token keyword">const</span> getArray <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> times<span class="token operator">:</span> number <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 调用之前指定类型</span>\n<span class="token comment">// 如果传入string, 则会报错, string是没有length的;</span>\ngetArray<span class="token operator">&lt;</span>number<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>length<span class="token punctuation">)</span>\n</code></pre></div><p>给泛型传入变量使用&lt;&gt;来包裹</p><h3 id="多个泛型定义"><a class="header-anchor" href="#多个泛型定义" aria-hidden="true">#</a> 多个泛型定义</h3><blockquote><p>当一个变量不够用时，就需要使用多个变量了</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> getArray <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> params<span class="token operator">:</span> <span class="token constant">U</span><span class="token punctuation">,</span> times<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> Array<span class="token operator">&lt;</span><span class="token punctuation">[</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">U</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">[</span>value<span class="token punctuation">,</span> param2<span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 也可以不指定类型, 会根据值自动确定类型;</span>\n<span class="token function">getArray</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 报错, 数字类型没有length属性</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="接口使用泛型变量"><a class="header-anchor" href="#接口使用泛型变量" aria-hidden="true">#</a> 接口使用泛型变量</h3><div class="language-js"><pre><code><span class="token comment">// 第一种</span>\n<span class="token keyword">interface</span> <span class="token class-name">getArr</span> <span class="token punctuation">{</span>\n    <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> times<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 第二种</span>\n<span class="token keyword">interface</span> <span class="token class-name">getArr</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>  <span class="token comment">// 使用这种形式, 里面定义的都可以使用该变量了</span>\n    <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> times<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    array<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">// 以t构成的数组;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="泛型约束"><a class="header-anchor" href="#泛型约束" aria-hidden="true">#</a> 泛型约束</h3><ol><li>使用<code>extends</code>来约束类型，下面的例子表示传入的参数需要有length属性；（<code>extends</code>关键字为继承接口，当接口被继承之后，接口有的东西继承的接口也需要有）</li></ol><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">ValueWithLength</span> <span class="token punctuation">{</span>\n    length<span class="token operator">:</span> number\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> getArr <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name">ValueWithLength</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> times<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">getArr</span><span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>\n</code></pre></div><ol start="2"><li>使用<code>extends keyof</code>泛型约束限制值是对象里面的一员，<code>keyof</code>是连接符，将对象里的所有属性名连接成一个联合类型，后面高阶类型中有提到；</li></ol><div class="language-js"><pre><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>\n    a<span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>\n    b<span class="token operator">:</span> <span class="token string">&#39;b&#39;</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// extends keyof表示继承T,相当于obj返回的键名组成的数组, k就是其中的一员</span>\n<span class="token keyword">const</span> getProps <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">K</span> <span class="token keyword">extends</span> <span class="token class-name">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token parameter">object<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> propName<span class="token operator">:</span> <span class="token constant">K</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> object<span class="token punctuation">[</span>propName<span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n<span class="token function">getProps</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>\n<span class="token function">getProps</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 报错, (如果不进行keyof约束, 则不会报错, 返回undefined)</span>\n</code></pre></div><h3 id="泛型中的默认值"><a class="header-anchor" href="#泛型中的默认值" aria-hidden="true">#</a> 泛型中的默认值</h3><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createArr</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>params<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span>params<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="二、ts中的类"><a class="header-anchor" href="#二、ts中的类" aria-hidden="true">#</a> 二、TS中的类</h2><h3 id="定义类"><a class="header-anchor" href="#定义类" aria-hidden="true">#</a> 定义类</h3><p>定义类时，需要在类的顶部初始化实例属性，之后才能在constructor里接收参数进行赋值，否则报错；</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> x<span class="token operator">:</span> <span class="token builtin">number</span>\n    <span class="token keyword">public</span> y<span class="token operator">:</span> <span class="token builtin">number</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x\n        <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y\n    <span class="token punctuation">}</span>\n\t<span class="token keyword">public</span> <span class="token function">getPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">`</span></span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="类的修饰符"><a class="header-anchor" href="#类的修饰符" aria-hidden="true">#</a> 类的修饰符</h3>',23),u=e("public"),r=e(" 公共的"),i=e("private"),d=e(" 私有的"),g=p("ul",null,[p("li",null,[e("外部访问定义private的属性将报错，"),p("strong",null,"只能在类中的访问")]),p("li",null,"继承也无法访问私有的属性的")],-1),m=e("protected"),y=e(" 受保护的"),h=o('<ul><li><p>与private的区别是继承的子类可以访问</p></li><li><p>给constructor添加protected只能通过<strong>子类继承创建实例</strong>，自身不能创建实例</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> age<span class="token operator">:</span> <span class="token builtin">number</span>\n    <span class="token keyword">protected</span> <span class="token keyword">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Child</span> <span class="token keyword">extends</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token comment">// 报错</span>\n<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span> <span class="token comment">// 正常</span>\n</code></pre></div></li></ul>',1),w=o('<h3 id="其他修饰符"><a class="header-anchor" href="#其他修饰符" aria-hidden="true">#</a> 其他修饰符</h3><p><strong>只读属性</strong>：<code>readonly</code></p><ul><li><p>定义属性不可被更改</p></li><li><p>使用readonly也是需要添加前三个修饰符的；</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li></ul><p><strong>静态属性</strong>：<code>static</code></p><p>标识静态属性，静态属性只能通过类访问，不能通过实例访问</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span>\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> Parent<span class="token punctuation">.</span>age\n    <span class="token punctuation">}</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Parent<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 18</span>\n</code></pre></div><h3 id="参数属性"><a class="header-anchor" href="#参数属性" aria-hidden="true">#</a> 参数属性</h3><blockquote><p>简化定义类需要初始化属性的过程</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">(</span><span class="token string">&#39;heny&#39;</span><span class="token punctuation">)</span> <span class="token comment">// {name: &#39;heny&#39;}</span>\n</code></pre></div><p>在参数属性前添加修改符，会自动将属性挂载到实例上面，不需要在里面定义了；</p><h3 id="可选类属性"><a class="header-anchor" href="#可选类属性" aria-hidden="true">#</a> 可选类属性</h3><ul><li>使用<strong>问号</strong>定义可选属性</li></ul><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Info</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">public</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> age<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> <span class="token keyword">public</span> sex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="类的存取器"><a class="header-anchor" href="#类的存取器" aria-hidden="true">#</a> 类的存取器</h3><blockquote><p>调用值时访问的函数，和取值时调用的函数</p></blockquote><ul><li>与es6中的get、set没有区别</li><li>存取器不需要修饰符</li></ul><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">Info</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> _info<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">get</span> <span class="token function">infoStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_info\n    <span class="token punctuation">}</span>\n    <span class="token keyword">set</span> <span class="token function">infoStr</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_info <span class="token operator">=</span> val\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> info <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Info</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token comment">// 初始化info</span>\ninfo<span class="token punctuation">.</span>_info <span class="token operator">=</span> <span class="token string">&#39;hahaha&#39;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>info<span class="token punctuation">.</span>infoStr<span class="token punctuation">)</span>\n</code></pre></div><h3 id="抽象类"><a class="header-anchor" href="#抽象类" aria-hidden="true">#</a> 抽象类</h3>',18),b=e("使用"),f=e("abstract"),v=e("来定义抽象类"),_=p("li",null,[p("p",null,"定义抽象类只能继承使用，不能直接实例化")],-1),T=p("li",null,[p("p",null,"在抽象类里面定义的抽象属性或方法，在继承时需要添加到继承的类中；")],-1),A=o('<div class="language-ts"><pre><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token comment">// 抽象方法只需要定义方法名和接收的参数以及返回值即可</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Man</span> <span class="token keyword">extends</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// 需要手动实现该方法printName</span>\n        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hahaha&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><ul><li>使用抽象类定义存取器</li></ul><div class="language-ts"><pre><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">abstract</span> _name<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">abstract</span> <span class="token keyword">get</span> <span class="token function">insideName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">abstract</span> <span class="token keyword">set</span> <span class="token function">insideName</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token comment">// set不能标记返回值</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p><strong>注意</strong>：抽象方法和抽象存取器都不能包含实际的代码块，只需要标记属性名，方法参数，返回值类型，存值器函数不需要标记返回值；</p><h3 id="实例类型"><a class="header-anchor" href="#实例类型" aria-hidden="true">#</a> 实例类型</h3><p>所有的类都是一个类型；</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name">People</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> p1<span class="token operator">:</span> People <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">People</span><span class="token punctuation">(</span><span class="token string">&#39;hny&#39;</span><span class="token punctuation">)</span> <span class="token comment">// p1可以手动指定实例类型，也是可以省略的，会自动根据后面的类型进行推断；</span>\n</code></pre></div><h3 id="类实现接口"><a class="header-anchor" href="#类实现接口" aria-hidden="true">#</a> 类实现接口</h3>',8),P=e("使用"),S=e("implements"),I=e("实现一个接口"),x=o('<div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Foold</span> <span class="token punctuation">{</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Fool</span> <span class="token keyword">implements</span> <span class="token class-name">Foold</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> <span class="token keyword">type</span><span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>注意：<strong>接口检测的是该接口定义的类创建的实例</strong>，如果定义的类里面的属性不是public，而是static，则会报错，提示丢失属性</p><h3 id="接口继承类"><a class="header-anchor" href="#接口继承类" aria-hidden="true">#</a> 接口继承类</h3><p>当接口继承类时，会继承这个类的成员，不包括去实现，也就是说，接口也会继承类的<code>private</code>和<code>protected</code>修饰符的成员，因为这两个成员是需要实现的，而接口继承类不需要去实现，只会被它的子类实现</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">protected</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">I</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">I</span></span> <span class="token punctuation">{</span> \n    <span class="token comment">// 由于继承的A定义了protected属性需要使用实例才能访问，因此需要同时继承A再实现I接口</span>\n    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="泛型中使用类-类型"><a class="header-anchor" href="#泛型中使用类-类型" aria-hidden="true">#</a> 泛型中使用类 类型</h3><p>例子：</p><div class="language-ts"><pre><code><span class="token keyword">const</span> create <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>c<span class="token operator">:</span> <span class="token keyword">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">T</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">c</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Info</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;h&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token function">create</span><span class="token punctuation">(</span>Info<span class="token punctuation">)</span>\n\n</code></pre></div><p>在上面的例子中，传入了一个类，返回的是一个类创建的实例，参数c的类型是<code>new()</code>，代表的是调用这个类的构造函数，类型就是类创建实例后的类型；</p>',9);l.render=function(o,e,c,l,j,C){const N=n("font");return s(),a("div",null,[k,p("ul",null,[p("li",null,[p("p",null,[p(N,{color:"red"},{default:t((()=>[u])),_:1}),r])]),p("li",null,[p("p",null,[p(N,{color:"red"},{default:t((()=>[i])),_:1}),d]),g]),p("li",null,[p("p",null,[p(N,{color:"red"},{default:t((()=>[m])),_:1}),y]),h])]),w,p("ul",null,[p("li",null,[p("p",null,[b,p(N,{color:"red"},{default:t((()=>[f])),_:1}),v])]),_,T]),A,p("ul",null,[p("li",null,[P,p(N,{color:"red"},{default:t((()=>[S])),_:1}),I])]),x])};export default l;export{c as __pageData};
