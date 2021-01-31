import{o as n,c as s,d as a}from"./app.dc9dbd0c.js";const o='{"title":"TS-08 声明文件、模块解析","description":"","frontmatter":{},"headers":[{"level":2,"title":"全局库","slug":"全局库"},{"level":2,"title":"模块化库","slug":"模块化库"},{"level":2,"title":"UMD库","slug":"umd库"},{"level":2,"title":"修改全局模块编写声明文件","slug":"修改全局模块编写声明文件"},{"level":2,"title":"使用依赖","slug":"使用依赖"},{"level":2,"title":"快捷外部模块声明","slug":"快捷外部模块声明"},{"level":2,"title":"模块解析","slug":"模块解析"},{"level":2,"title":"模块解析配置项","slug":"模块解析配置项"}],"relativePath":"src\\\\frontend\\\\Typescript\\\\ts-08 声明文件、模块解析.md","lastUpdated":1612089669876}',e={},t=a('<h1 id="ts-08-声明文件、模块解析"><a class="header-anchor" href="#ts-08-声明文件、模块解析" aria-hidden="true">#</a> TS-08 声明文件、模块解析</h1><p><strong>为什么需要声明文件</strong></p><p>当引入了全局的库之后，比如<code>jQuery</code>库，会在<code>ts</code>文件中使用<code>$</code>符，在<code>ts</code>文件中直接使用是会提示找不到文件的，是因为没有声明文件；</p><p><strong>声明文件的查找</strong></p><p>可以在<code>tsconfig.json</code>文件中，添加<code>include</code>字段，配置声明文件的路径，如果不配置，则会查找所有文件夹下面的<code>.d.ts</code>文件；</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">&quot;./scr/**/*.ts&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 代表src下面某个文件夹下面的声明文件</span>\n        <span class="token string">&quot;./src/**/*.d.ts&quot;</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>声明文件使用<code>declare</code>关键字来声明文件；</p><p><strong>查看声明文件</strong></p><p>在<code>ts</code>中，大多数库都被社区编写了声明文件，在<code>node_modules</code>找到安装的库，之后查看<code>*.d.ts</code>文件，里面就是写好的声明文件，如果没有，则需要手动安装，安装时加上<code>@types/*</code>即可，如果安装成功了，说明有这个库的声明文件，如果找不到安装的模块，则需要手动编写声明文件；</p><h2 id="全局库"><a class="header-anchor" href="#全局库" aria-hidden="true">#</a> 全局库</h2><p>如何判断是否是全局可以使用的变量：</p><p>官方声明文件的例子：<a href="https://www.tslang.cn/docs/handbook/declaration-files/templates.html" target="_blank" rel="noopener noreferrer">官方模块</a>，可以参考<code>global.d.ts</code>文件的例子；</p><p>通过定义<code>document</code>或者<code>window</code>上面添加方法时，都是全局可以使用的变量</p><div class="language-ts"><pre><code><span class="token comment">// 如果添加了一个全局的getTitle方法，并且返回的是string, 当声明了之后则可以使用了;</span>\n<span class="token keyword">declare</span> <span class="token keyword">function</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>\n</code></pre></div><p>当修改了声明文件时，需要重新编译，否则报错；</p><h2 id="模块化库"><a class="header-anchor" href="#模块化库" aria-hidden="true">#</a> 模块化库</h2><p>使用<code>import</code>语句或者<code>require</code>语句的，一般都是模块化库</p><p>可以参数官方的<code>module-*.d.ts</code>的模板；</p><h2 id="umd库"><a class="header-anchor" href="#umd库" aria-hidden="true">#</a> UMD库</h2><p><em>UMD</em>模块是指那些既可以作为模块使用（通过导入）又可以作为全局（在没有模块加载器的环境里）使用的模块。</p><p><strong>识别UMD模块</strong></p><div class="language-js"><pre><code><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> define <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span> <span class="token operator">&amp;&amp;</span> define<span class="token punctuation">.</span>amd<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;libName&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> module <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span> <span class="token operator">&amp;&amp;</span> module<span class="token punctuation">.</span>exports<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;libName&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        root<span class="token punctuation">.</span>returnExports <span class="token operator">=</span> <span class="token function">factory</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>libName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n</code></pre></div><p>很多库都是<code>UMD</code>库，比如<code>jquery</code>、<code>moment</code></p><h2 id="修改全局模块编写声明文件"><a class="header-anchor" href="#修改全局模块编写声明文件" aria-hidden="true">#</a> 修改全局模块编写声明文件</h2><p>一个<em>全局插件</em>是全局代码，它们会改变全局对象的结构。 对于 <em>全局修改的模块</em>，在运行时存在冲突的可能。</p><p>当我们在<code>String</code>、<code>Array</code>等原型上面添加了方法时，如何填写声明文件</p><div class="language-ts"><pre><code>String<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getFirstLetter</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// global.d.ts 写声明文件</span>\n<span class="token comment">// 利用声明合并</span>\n<span class="token keyword">interface</span> <span class="token class-name">String</span> <span class="token punctuation">{</span>\n    <span class="token function">getFirstLetter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="使用依赖"><a class="header-anchor" href="#使用依赖" aria-hidden="true">#</a> 使用依赖</h2><p><strong>依赖全局库</strong></p><p>如果库依赖了某个全局库，使用<code>reference</code>指定<code>types</code>来引入该模块</p><div class="language-ts"><pre><code><span class="token comment">/// &lt;reference types=&#39;moment&#39;/&gt;</span>\n</code></pre></div><p><strong>依赖模块</strong></p><p>使用<code>import</code>语句</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> moment <span class="token keyword">from</span> <span class="token string">&quot;moment&quot;</span><span class="token punctuation">;</span>\n</code></pre></div><p><strong>依赖UMD库</strong></p><ul><li><p>如果你的全局库依赖于某个UMD模块，使用<code>/// &lt;reference types</code>指令：</p><div class="language-ts"><pre><code><span class="token comment">/// &lt;reference types=&quot;moment&quot; /&gt;</span>\n\n<span class="token keyword">function</span> <span class="token function">getThing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> moment<span class="token punctuation">;</span>\n</code></pre></div></li><li><p>如果你的模块或UMD库依赖于一个UMD库，使用<code>import</code>语句：</p><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> someLib <span class="token keyword">from</span> <span class="token string">&#39;someLib&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><p>不要使用<code>///reference</code>引入</p></li></ul><p><strong>注意：</strong></p><ol><li>防止命名冲突，因为都是在全局填写的，很容易产生冲突，建议将相关的东西放在命名空间里面，使用对象的形式去访问，防止命名污染</li><li>一些插件添加或修改已存在的顶层模块的导出部分。 当然这在CommonJS和其它加载器里是允许的，ES模块被当作是不可改变的因此这种模式就不可行了。 因为TypeScript是能不预知加载器类型的，所以没没在编译时保证，但是开发者如果要转到ES6模块加载器上应该注意这一点。</li></ol><h2 id="快捷外部模块声明"><a class="header-anchor" href="#快捷外部模块声明" aria-hidden="true">#</a> 快捷外部模块声明</h2><p>如果使用一个新模块，不想花时间精力为该模块填写声明，只需要在<code>typing</code>文件夹下面创建文件夹编写即可，比如<code>moment</code>：</p><div class="language-ts"><pre><code><span class="token comment">// typings/moment/index.d.ts</span>\n<span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">&#39;moment&#39;</span> <span class="token comment">//快速导出模块</span>\n</code></pre></div><h2 id="模块解析"><a class="header-anchor" href="#模块解析" aria-hidden="true">#</a> 模块解析</h2><blockquote><p>以下内容进行了解就可以了</p></blockquote><p>模块解析分为两种：<code>node</code>解析和<code>classic</code>解析，通过<code>tsconfig.json</code>文件的<code>moduleResolution</code>设置，如果不设置默认为<code>classic</code>解析方式；</p><p><code>classic</code>解析策略：</p><ul><li>当省略<code>ts</code>文件时首先会查看<code>.ts</code>文件，如果找不到则查找<code>.d.ts</code>文件，还是找不到则向上一级去查找，继续按照前面两种文件类型查找；</li></ul><p><code>node</code>解析策略：</p><ul><li>模拟<code>nodejs</code>模板解析策略，在编译阶段定位模块文件的，首先找<code>.ts</code>文件，之后找<code>.tsx</code>文件，之后找<code>.d.ts</code>三种文件；</li></ul><p><code>nodejs</code>会查找<code>package.json</code>里面的<code>main</code>确定入口文件，而<code>ts</code>会首先查找<code>types</code>确定入口文件，之后再查找<code>main</code>入口文件</p><h2 id="模块解析配置项"><a class="header-anchor" href="#模块解析配置项" aria-hidden="true">#</a> 模块解析配置项</h2><blockquote><p>通过配置项，来确定模块的导入，配置项在tsconfig.json文件</p></blockquote><ul><li><p><code>baseUrl</code>：用来设置编译之后文件都放在哪个文件夹下；</p></li><li><p><code>paths</code>： 用来设置路径映射，<code>paths</code>是相对于<code>baseUrl</code>的，指定<code>paths</code>就必须指定<code>baseUrl</code>，常用于配置第三方模块的引入，经常在<code>node_modules/@types</code>和<code>src/typings</code>文件夹查找，设置：</p><div class="language-json"><pre><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 如果是当前根目录，就填写一个.即可</span>\n    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">&quot;*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/@types&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/typings&quot;</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><code>rootDirs</code>：路径列表，在编译时，编译器会将这个路径列表中的内容放到一个文件夹中，当<code>modules</code>文件夹中的<code>index.ts</code>要引入<code>ts-modules</code>文件夹里面的<code>a.ts</code>文件，设置了路径列表之后，只需要写相对路径即可</p><div class="language-ts"><pre><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/modules&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;src/ts-modules&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li></ul>',52);e.render=function(a,o,e,p,c,l){return n(),s("div",null,[t])};export default e;export{o as __pageData};
