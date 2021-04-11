import{o as n,c as s,d as a}from"./app.246f1876.js";const p='{"title":"TS-02 接口定义、函数定义","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、接口","slug":"一、接口"},{"level":3,"title":"使用interface来定义接口","slug":"使用interface来定义接口"},{"level":3,"title":"任意属性","slug":"任意属性"},{"level":3,"title":"只读属性","slug":"只读属性"},{"level":3,"title":"定义函数","slug":"定义函数"},{"level":3,"title":"索引类型 使用接口定义数组","slug":"索引类型-使用接口定义数组"},{"level":3,"title":"接口继承","slug":"接口继承"},{"level":3,"title":"混合类型","slug":"混合类型"},{"level":2,"title":"二、函数","slug":"二、函数"},{"level":3,"title":"函数声明","slug":"函数声明"},{"level":3,"title":"函数声明定义类型","slug":"函数声明定义类型"},{"level":3,"title":"函数表达式","slug":"函数表达式"},{"level":3,"title":"类型别名定义函数","slug":"类型别名定义函数"},{"level":3,"title":"可选参数","slug":"可选参数"},{"level":3,"title":"默认值","slug":"默认值"},{"level":3,"title":"不确定形参个数","slug":"不确定形参个数"},{"level":3,"title":"函数重载","slug":"函数重载"}],"relativePath":"src/frontend/Typescript/ts-02 接口、函数.md","lastUpdated":1615699077416}',t={},o=a('<h1 id="ts-02-接口定义、函数定义"><a class="header-anchor" href="#ts-02-接口定义、函数定义" aria-hidden="true">#</a> TS-02 接口定义、函数定义</h1><h2 id="一、接口"><a class="header-anchor" href="#一、接口" aria-hidden="true">#</a> 一、接口</h2><blockquote><p>接口为类型接口，提供给变量使用类型的；</p></blockquote><ul><li>生成<code>tslint.json</code>文件：<code>tslint --init</code></li><li>配置<code>tslint</code>文件</li></ul><div class="language-json"><pre><code><span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;quotemark&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 取消双引号</span>\n    <span class="token property">&quot;semicolon&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 取消结尾分号</span>\n    <span class="token property">&quot;interface-name&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;never-prefix&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//interface接口不需要前缀</span>\n    <span class="token property">&quot;object-listeral-sort-keys&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 接口排序不按照首字母排序</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="使用interface来定义接口"><a class="header-anchor" href="#使用interface来定义接口" aria-hidden="true">#</a> 使用interface来定义接口</h3><p>定义接口使用逗号隔开、分号隔开、换行都是可以的；</p><div class="language-js"><pre><code><span class="token comment">// 对象定义接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>\n    color<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// 可选属性</span>\n    type<span class="token operator">:</span> string<span class="token punctuation">,</span> <span class="token comment">// 必填属性</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> getVegetable <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>color<span class="token punctuation">,</span> type<span class="token punctuation">}</span><span class="token operator">:</span> Vegetable<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">string</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>color <span class="token operator">?</span> <span class="token punctuation">(</span>color <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 数组定义接口</span>\n<span class="token keyword">interface</span> <span class="token class-name">ArrInter</span> <span class="token punctuation">{</span>\n    <span class="token number">0</span><span class="token operator">:</span> string<span class="token punctuation">,</span>\n    <span class="token number">1</span><span class="token operator">:</span> number\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> arr<span class="token operator">:</span> ArrInter <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">]</span>\n</code></pre></div><h3 id="任意属性"><a class="header-anchor" href="#任意属性" aria-hidden="true">#</a> 任意属性</h3><ul><li>使用类型断言</li></ul><div class="language-ts"><pre><code><span class="token function">getVegetable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;tomato&#39;</span><span class="token punctuation">,</span>\n    size<span class="token operator">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span> <span class="token keyword">as</span> Vegetable<span class="token punctuation">)</span> <span class="token comment">// 类型断言, 指定就是Vegetable</span>\n</code></pre></div><ul><li>使用<code>[propName: string]</code></li></ul><div class="language-ts"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>\n    color<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span>prop<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token comment">// 索引只能是string或number 属性是字符串, 值是任意类型</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>注意：如果值不是any，而是string或number，则成员都得是string或number，当然也可以使用或者；</p><ul><li>提取对象</li></ul><div class="language-ts"><pre><code><span class="token keyword">const</span> vegetableInfo <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token operator">:</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span>\n    <span class="token keyword">type</span><span class="token operator">:</span> <span class="token string">&#39;tomato&#39;</span><span class="token punctuation">,</span>\n    size<span class="token operator">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span>\n<span class="token function">getVegetable</span><span class="token punctuation">(</span>vegetableInfo<span class="token punctuation">)</span> <span class="token comment">// 将对象取出存变量, 里面的属性多了无所谓</span>\n</code></pre></div><h3 id="只读属性"><a class="header-anchor" href="#只读属性" aria-hidden="true">#</a> 只读属性</h3><div class="language-js"><div class="highlight-lines"><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>\n    color<span class="token operator">?</span><span class="token operator">:</span> string<span class="token punctuation">,</span>\n    readonly type<span class="token operator">:</span> string <span class="token comment">// 只读的, 无法被修改</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">let</span> obj<span class="token operator">:</span> Vegetable <span class="token operator">=</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;tomato&#39;</span><span class="token punctuation">}</span>\nobj<span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token string">&#39;carrot&#39;</span> <span class="token comment">// 报错</span>\n</code></pre></div><h3 id="定义函数"><a class="header-anchor" href="#定义函数" aria-hidden="true">#</a> 定义函数</h3><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">AddFun</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span>num1<span class="token operator">:</span> number<span class="token punctuation">,</span> num2<span class="token operator">:</span> number<span class="token punctuation">)</span><span class="token operator">:</span> number\n<span class="token punctuation">}</span>\n\n<span class="token comment">//使用</span>\n<span class="token keyword">const</span> add<span class="token operator">:</span> <span class="token function-variable function">AddFun</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n1<span class="token punctuation">,</span> n2</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n1 <span class="token operator">+</span> n2\n</code></pre></div><h3 id="索引类型-使用接口定义数组"><a class="header-anchor" href="#索引类型-使用接口定义数组" aria-hidden="true">#</a> 索引类型 使用接口定义数组</h3><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">RoleDic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>index<span class="token operator">:</span> number<span class="token punctuation">]</span><span class="token operator">:</span> string\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> role<span class="token operator">:</span> RoleDic <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span> <span class="token comment">// 只能是数字类型的属性名, 否则报错</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 当指定的索引类型为string时</span>\n<span class="token keyword">interface</span> <span class="token class-name">RoleDic</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">[</span>id<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> string\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> role<span class="token operator">:</span> RoleDic <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token number">0</span><span class="token operator">:</span> <span class="token string">&#39;admin&#39;</span> <span class="token comment">// 数字也不会报错, 因为属性名会被调用toString转换</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="接口继承"><a class="header-anchor" href="#接口继承" aria-hidden="true">#</a> 接口继承</h3><div class="language-js"><div class="highlight-lines"><br><br><br><div class="highlighted"> </div><br><br><br><br></div><pre><code><span class="token keyword">interface</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>\n    color<span class="token operator">:</span> string\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Tomato</span> <span class="token keyword">extends</span> <span class="token class-name">Vegetable</span> <span class="token punctuation">{</span>\n    radius<span class="token operator">:</span> number\n<span class="token punctuation">}</span>\n<span class="token comment">// Tomato接口继承了Vegetable接口, 在使用时必须传入两个参数, color和radius;</span>\n</code></pre></div><h3 id="混合类型"><a class="header-anchor" href="#混合类型" aria-hidden="true">#</a> 混合类型</h3><blockquote><p>ts3.1之前的版本需要借助命名空间，ts3.1之后的版本可以直接定义接口混合类型</p></blockquote><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Counter</span> <span class="token punctuation">{</span>\n    <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">,</span> <span class="token comment">// 返回空的函数</span>\n    count<span class="token operator">:</span> number <span class="token comment">// 给函数添加count属性</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 返回的类型就是Counter,有一个函数和一个属性</span>\n<span class="token keyword">const</span> getCounter <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token parameter">Counter</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token function-variable function">c</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>c<span class="token punctuation">.</span>count<span class="token operator">++</span><span class="token punctuation">}</span>\n    c<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span>\n    <span class="token keyword">return</span> c\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 接收的类型就是Counter, 有函数和属性</span>\n<span class="token keyword">const</span> counter<span class="token operator">:</span> Counter <span class="token operator">=</span> <span class="token function">getCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><h4 id="总结"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4><ol><li>定义接口</li></ol><div class="language-js"><pre><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>\n    name<span class="token operator">:</span> string<span class="token punctuation">,</span>\n    age<span class="token operator">?</span><span class="token operator">:</span> number<span class="token punctuation">,</span>\n    readonly size<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token comment">// 只读属性</span>\n    <span class="token punctuation">[</span>prop<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> any <span class="token comment">// 多余属性要写any</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="2"><li>索引类型，当为string时，可以是数字和字符串，当为number时，只能是数字</li><li>当参数传入过多时，解决办法 <ul><li>解决一：定义[prop:string]: any</li><li>解决二：使用类型断言，强行指定类型</li><li>解决三：定义一个变量，传入方法</li></ul></li><li>接口继承：使用<code>extends</code>，和类相似</li><li>混合类型：在一个函数上面即有属性也有方法</li></ol><h2 id="二、函数"><a class="header-anchor" href="#二、函数" aria-hidden="true">#</a> 二、函数</h2><h3 id="函数声明"><a class="header-anchor" href="#函数声明" aria-hidden="true">#</a> 函数声明</h3><div class="language-ts"><pre><code><span class="token comment">// 函数声明</span>\n<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 函数表达式</span>\n<span class="token keyword">let</span> <span class="token function-variable function">mySum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y\n<span class="token punctuation">}</span>\n</code></pre></div><h3 id="函数声明定义类型"><a class="header-anchor" href="#函数声明定义类型" aria-hidden="true">#</a> 函数声明定义类型</h3><ul><li>函数声明需要把输入和输出都考虑到</li></ul><div class="language-ts"><pre><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> y\n<span class="token punctuation">}</span>\n<span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 多余参数报错</span>\n</code></pre></div><h3 id="函数表达式"><a class="header-anchor" href="#函数表达式" aria-hidden="true">#</a> 函数表达式</h3><div class="language-ts"><pre><code><span class="token comment">// 错误的函数表达式声明</span>\n<span class="token keyword">let</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> arg1 <span class="token operator">+</span> arg2\n<span class="token punctuation">}</span>\n<span class="token comment">// 错误的声明方式add是通过类型推论出来的，下面的是正确的声明类型;</span>\n\n<span class="token comment">// 正确的类型声明</span>\n<span class="token keyword">let</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> arg1 <span class="token operator">+</span> arg2\n<span class="token punctuation">}</span>\n\n<span class="token keyword">let</span> <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2 <span class="token comment">// 会报错, arg1不能为string</span>\n\n<span class="token keyword">let</span> arg3<span class="token punctuation">;</span>\n<span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>arg1<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> arg2<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2 <span class="token operator">+</span> arg3 <span class="token comment">// arg3是不需要写在参数里面的</span>\n</code></pre></div><h3 id="类型别名定义函数"><a class="header-anchor" href="#类型别名定义函数" aria-hidden="true">#</a> 类型别名定义函数</h3><blockquote><p>类型别名使用type定义</p></blockquote><div class="language-ts"><pre><code><span class="token comment">// 使用别名定义函数</span>\n<span class="token keyword">type</span> <span class="token class-name">Add</span> <span class="token operator">=</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span>\n\n<span class="token keyword">type</span> <span class="token class-name">isString</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token comment">// isString就是string了</span>\n</code></pre></div><h3 id="可选参数"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><blockquote><p>在js中，可选参数可以是在任何地方，只要使用undefined占位；</p><p>在ts中，可选参数必须是在最后面；</p></blockquote><div class="language-js"><pre><code>type <span class="token function-variable function">AddFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token operator">:</span> number<span class="token punctuation">,</span> arg2<span class="token operator">:</span> number<span class="token punctuation">,</span> arg3<span class="token operator">?</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> number\n\n<span class="token keyword">let</span> addF<span class="token operator">:</span> AddFunction\n<span class="token function-variable function">addF</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token operator">:</span>number<span class="token punctuation">,</span> arg2<span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2\n</code></pre></div><h3 id="默认值"><a class="header-anchor" href="#默认值" aria-hidden="true">#</a> 默认值</h3><blockquote><p>在定义默认值可以不需要类型判断, 因为会自动判断类型, 在传入时也不能传入字符串了</p></blockquote><div class="language-js"><pre><code><span class="token function-variable function">addF</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token operator">:</span> number<span class="token punctuation">,</span> arg2 <span class="token operator">=</span> <span class="token number">3</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> arg1 <span class="token operator">+</span> arg2\n</code></pre></div><h3 id="不确定形参个数"><a class="header-anchor" href="#不确定形参个数" aria-hidden="true">#</a> 不确定形参个数</h3><blockquote><p>args为数组，因此后面的类型使用数组判断，使用...接收剩余的参数</p></blockquote><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">handleData</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg1<span class="token operator">:</span> number<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre></div><h3 id="函数重载"><a class="header-anchor" href="#函数重载" aria-hidden="true">#</a> 函数重载</h3><blockquote><p>重载允许一个函数接受不同数量或类型的参数时，作不同的处理；</p><p>函数重载只能使用function来定义，不能使用接口和类型别名定义；</p></blockquote><div class="language-js"><pre><code><span class="token comment">// 函数之前定义方法</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token operator">:</span> number <span class="token operator">|</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">|</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token comment">// 有一个缺点, 不能够精确的表达;</span>\n\n<span class="token comment">// 函数重载</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token operator">:</span> number</span><span class="token punctuation">)</span><span class="token operator">:</span> number<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token keyword">function</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token operator">:</span> any <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> x<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">Number</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',54);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
