import{o as n,c as s,d as a}from"./app.246f1876.js";const p='{"title":"TS-07 装饰器、Mixins","description":"","frontmatter":{},"headers":[{"level":2,"title":"装饰器","slug":"装饰器"},{"level":3,"title":"类装饰器","slug":"类装饰器"},{"level":3,"title":"方法装饰器","slug":"方法装饰器"},{"level":3,"title":"访问器装饰器","slug":"访问器装饰器"},{"level":3,"title":"属性装饰器","slug":"属性装饰器"},{"level":3,"title":"参数装饰器","slug":"参数装饰器"},{"level":2,"title":"Mixin","slug":"mixin"}],"relativePath":"src/frontend/Typescript/ts-07 装饰器、Mixins.md","lastUpdated":1615699077418}',t={},o=a('<h1 id="ts-07-装饰器、mixins"><a class="header-anchor" href="#ts-07-装饰器、mixins" aria-hidden="true">#</a> TS-07 装饰器、Mixins</h1><h2 id="装饰器"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h2><p>如果需要使用装饰器，需要在<code>tsconfig.json</code>文件打开<code>experimentalDecorators</code>为<code>true</code>；</p><p>装饰器使用<code>@</code>符加一个名字定义，这个名字必须是一个函数或者求值后是一个函数，这个函数会在执行时被调用，被装饰的声明作为参数自动传入，必须紧挨着要修饰的内容的前面，而且所有的装饰不能用在声明文件和<code>.d.ts</code>文件中，比如<code>declare</code>修饰；</p><ul><li>装饰器工厂</li></ul><p>装饰器工厂为一个函数里面返回一个函数，在使用装饰器时，则需要调用一下，得到求值之后的装饰器；</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">setProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// ...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n@<span class="token function">setProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 括号里面可以填写参数，传入到第一个函数, 如果不传入参数, 则不需要加小括号; </span>\n</code></pre></div><ul><li>多个装饰器同时使用</li></ul><p>当使用多个装饰器时，需要注意顺序，如果包含装饰器工厂，则是先从上往下求值，得到装饰器，之后再从下往上执行执行器，挨个调用；</p><div class="language-ts"><pre><code>@<span class="token function">setProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n@setName\ntarget\n</code></pre></div><h3 id="类装饰器"><a class="header-anchor" href="#类装饰器" aria-hidden="true">#</a> 类装饰器</h3><p>使用类装饰器可以修改一个类里面的原有属性；</p><div class="language-ts"><pre><code><span class="token keyword">function</span> classDecorator<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token keyword">new</span></span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 如果不继承target, 则最后结果将只有该类的所有属性</span>\n  <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">target</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> name <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span>\n    <span class="token keyword">public</span> age <span class="token operator">=</span> <span class="token number">18</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n@classDecorator\n<span class="token keyword">class</span> <span class="token class-name">ClassD</span> <span class="token punctuation">{</span>\n  <span class="token keyword">public</span> size <span class="token operator">=</span> <span class="token number">20</span>\n  <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n  <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ClassD</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 结果将是Person类</span>\n</code></pre></div><h3 id="方法装饰器"><a class="header-anchor" href="#方法装饰器" aria-hidden="true">#</a> 方法装饰器</h3><p>方法装饰器用来处理类中的方法，方法装饰器包含三个参数：</p><ul><li>第一个参数分为两种情况： <ul><li>如果装饰的是静态成员，这个参数代表的是类的构造函数</li><li>如果装饰的是实例成员，是类的原型对象</li></ul></li><li>第二个参数是成员的名字</li><li>第三个参数是成员的属性描述符（configruable、writeable、enumerable）</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">enumrable</span><span class="token punctuation">(</span>bool<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        descriptor<span class="token punctuation">.</span>enumrable <span class="token operator">=</span> bool\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ClassD</span> <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    @<span class="token function">enumrable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> clas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassD</span><span class="token punctuation">(</span><span class="token string">&#39;heny&#39;</span><span class="token punctuation">)</span> \n<span class="token comment">// 当遍历该实例对象时，是无法遍历到getName的;</span>\n</code></pre></div><p>使用方法装饰器不仅可以修改属性描述符的值，还可以替换它的实现，返回一个值，就相当于是方法的属性描述符，直接修改value函数即可：</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">enumrable</span><span class="token punctuation">(</span>bool<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">{</span>\n            <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token string">&#39;not value&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            enumerable<span class="token operator">:</span> bool\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> clas <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassD</span><span class="token punctuation">(</span><span class="token string">&#39;heny&#39;</span><span class="token punctuation">)</span>\nclas<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// &#39;not value&#39;</span>\n</code></pre></div><p>注意：如果<code>es</code>小于<code>es5</code>的话，<code>es3</code>是没有<code>Object.defineProperty</code>属性的；</p><h3 id="访问器装饰器"><a class="header-anchor" href="#访问器装饰器" aria-hidden="true">#</a> 访问器装饰器</h3><p>用来装饰<code>set</code>和<code>get</code>方法，访问装饰器不能同时使用，只需要在<code>set</code>和<code>get</code>前面使用一个装饰器即可；</p><p>访问器装饰器和方法装饰器的参数是一样的；</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">enumrable</span><span class="token punctuation">(</span>bool<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> descriptor<span class="token operator">:</span> PropertyDescriptor<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        descriptor<span class="token punctuation">.</span>enumrable <span class="token operator">=</span> bool\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ClassD</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> _name<span class="token operator">:</span> <span class="token builtin">string</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name\n    <span class="token punctuation">}</span>\n    @<span class="token function">enumrable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token comment">// 只能使用一个，不能在set函数也添加一次</span>\n    <span class="token keyword">get</span> <span class="token function">name</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_name\n    <span class="token punctuation">}</span>\n    <span class="token keyword">set</span> <span class="token function">name</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>_name <span class="token operator">=</span> name\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="属性装饰器"><a class="header-anchor" href="#属性装饰器" aria-hidden="true">#</a> 属性装饰器</h3><p>声明在属性的声明之前，它有两个参数，和方法装饰器的前两个参数是一样的，属性装饰器没法修改属性描述符，只能用来判断某个类中是否声明了某个名字的属性；</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">print</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> propertyName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ClassD</span> <span class="token punctuation">{</span>\n    @print\n    <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="参数装饰器"><a class="header-anchor" href="#参数装饰器" aria-hidden="true">#</a> 参数装饰器</h3><p>参数装饰器有三个参数，前两个和方法装饰器是一样的，第三个参数是函数在参数列表中的索引；参数装饰器的返回值会被忽略；</p><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">required</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span>propertyName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> index<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">修饰的是第</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">个参数</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">ClassD</span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;hhh&#39;</span>\n    <span class="token comment">// 直接在参数前面使用参数装饰器即可;</span>\n    <span class="token function">getInfo</span><span class="token punctuation">(</span>prefix<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>@required infoType<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span>\n        \n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="mixin"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><p><code>js</code>中实现<code>Mixin</code>的方法</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>\n    <span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>\n    <span class="token function">getB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">mixin</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> <span class="token keyword">from</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span><span class="token keyword">from</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">from</span><span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">mixin</span><span class="token punctuation">(</span><span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span>\n<span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>\n</code></pre></div><p><code>ts</code>中的<code>Mixin</code>，需要使用A和B的类型，使用<code>implement</code>而不是使用<code>extends</code>，这意味着需要在类里面实现A和B；</p><div class="language-ts"><pre><code><span class="token keyword">class</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> isA<span class="token operator">:</span> <span class="token builtin">boolean</span>\n    <span class="token keyword">public</span> <span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token punctuation">{</span>\n    <span class="token keyword">public</span> isB<span class="token operator">:</span> <span class="token builtin">boolean</span>\n    <span class="token keyword">public</span> <span class="token function">getB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token comment">// 实现两个类使用逗号隔开</span>\n<span class="token keyword">class</span> <span class="token class-name">ClassAB</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token constant">A</span></span><span class="token punctuation">,</span> <span class="token constant">B</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 需要手动实现里面的方法</span>\n    <span class="token keyword">public</span> isA<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token keyword">public</span> isB<span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span>\n    <span class="token keyword">public</span> <span class="token function-variable function">getA</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n    <span class="token keyword">public</span> <span class="token function-variable function">getB</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">function</span> <span class="token function">mixins</span><span class="token punctuation">(</span>base<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token keyword">from</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">from</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        Object<span class="token punctuation">.</span><span class="token function">getOwnPropertyNames</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>key <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n            base<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>key<span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n<span class="token function">mixins</span><span class="token punctuation">(</span>ClassAB<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> ab <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClassAB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div>',35);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
