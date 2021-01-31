import{o as n,c as s,d as a}from"./app.dc9dbd0c.js";const e='{"title":"es6-06 module","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、Module 模块","slug":"一、module-模块"},{"level":3,"title":"export","slug":"export"},{"level":3,"title":"import","slug":"import"},{"level":3,"title":"动态引入","slug":"动态引入"},{"level":3,"title":"import与require的区别","slug":"import与require的区别"},{"level":2,"title":"二、require.context","slug":"二、require-context"}],"relativePath":"src/frontend/es6/es6-06 module.md","lastUpdated":1612089669903}',t={},p=a('<h1 id="es6-06-module"><a class="header-anchor" href="#es6-06-module" aria-hidden="true">#</a> es6-06 module</h1><h2 id="一、module-模块"><a class="header-anchor" href="#一、module-模块" aria-hidden="true">#</a> 一、Module 模块</h2><p>模块功能主要由两个命令构成：export和import，export命令用于规定模块的对外接口，Import命令用于输入其他模块提供的功能；</p><h3 id="export"><a class="header-anchor" href="#export" aria-hidden="true">#</a> export</h3><blockquote><p>规定模块对外接口</p></blockquote><p>如果希望外部能够读取模块内部的某个变量，就必须使用export关键字输出该变量</p><ul><li>默认导出：<code>export default Person</code>（导入时可指定模块任意名称，无需知晓内部真实名称）</li><li>单独导出：<code>export const name = &#39;bruce&#39;</code></li><li>按需导出：<code>export {age, name, sex}</code></li><li>改名导出：<code>export {name as newName}</code></li><li>从文件导出：<code>export {} from &#39;./user&#39;</code>（常用于index.js导入其他的文件并导出，不能默认导出,需要加{}）</li></ul><h3 id="import"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import</h3><blockquote><p>导入模块内部功能</p></blockquote><p>使用export命令定义了模块的对外接口后，其他js文件就可以通过import命令加载这个模块，import命令具有提升效果，会提升到整个模块的头部，首先执行。是因为import命令是编译阶段执行的，在代码运行之前，如果多次重复执行同一句import语句，那么只会执行一次，而不会执行多次；</p><ul><li>默认导入：<code>import Person from &#39;./Person&#39;</code></li><li>整体导入：<code>import * as Person from &#39;./Person&#39;</code></li><li>按需导入：<code>import {age, name, sex} from &#39;./Person&#39;</code></li><li>改名导入：<code>import {name as newName} from &#39;./Person&#39;</code></li><li>自执导入：<code>import &#39;reset.css&#39;</code></li><li>复合导入：<code>import Person, {name} from &#39;./Person&#39;</code></li></ul><h3 id="动态引入"><a class="header-anchor" href="#动态引入" aria-hidden="true">#</a> 动态引入</h3><p>动态加载import，返回Promise，可以调用then方法；</p><div class="language-js"><pre><code><span class="token function-variable function">component</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./views/about.vue&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="import与require的区别"><a class="header-anchor" href="#import与require的区别" aria-hidden="true">#</a> import与require的区别</h3><ul><li><p>require是commjs的规范，import是es6的规范；</p></li><li><p>require是同步加载，import是异步加载；</p></li></ul><p>require加载方式：</p><div class="language-js"><pre><code><span class="token comment">// 导出</span>\n<span class="token comment">// 单个暴露</span>\nexports<span class="token punctuation">.</span><span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token comment">// 一起暴露</span>\nmoudle<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token comment">//导入</span>\n<span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="二、require-context"><a class="header-anchor" href="#二、require-context" aria-hidden="true">#</a> 二、require.context</h2><p>如果require参数含有表达式，比如：<code>require(&#39;./template/&#39;+name+&#39;.ejs&#39;)</code>，就可以使用<code>require.context</code>；</p><ol><li><code>require.context(dir,deep,reg)</code></li></ol><ul><li>dir：要搜索的文件夹目录</li><li>deep：是否还应该搜索它的子目录</li><li>reg：匹配文件的正则表达式；</li></ul><div class="language-js"><pre><code>require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./test&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span> <span class="token comment">//匹配test目录以.vue结尾的文件名, 不深度匹配;</span>\n</code></pre></div><ol start="2"><li><p><code>require.context</code>模块导出返回一个require函数，这个函数可以接收一个参数，将context.keys()组成的数组随便一个传入进去就会返回一个模块；</p><p>导出的方法有3个属性：</p><ul><li><code>resolve(req)</code>：将路径传入获取当前文件的绝对路径；</li><li><code>keys()</code>：返回一个数组，数组里面是所有的文件名</li><li><code>id</code>：返回当前路径</li></ul></li></ol><div class="language-js"><pre><code><span class="token keyword">let</span> context <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./components&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token parameter">context</span> <span class="token operator">=&gt;</span> context<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token comment">// map之后就是模块了;</span>\n<span class="token keyword">let</span> all <span class="token operator">=</span> <span class="token function">requireAll</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>\n<span class="token comment">// 返回的是一个数组对象, 里面是导出的Module, 有一个default对象, 该对象就是一个模块;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>all<span class="token punctuation">)</span> \n\n<span class="token comment">// 传入之后会返回导出的该文件;就是requireAll的单个对象</span>\n<span class="token function">context</span><span class="token punctuation">(</span>context<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> \n</code></pre></div><p><img src="https://notecdn.heny.vip/images/es6-06%20module-01.png" alt="image"></p><ol start="3"><li>Vue全局组件注册</li></ol><p>（1）创建：./components/global/index.js，并写入以下代码，之后在main.js引入：import &#39;./components/global&#39;即可；</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token parameter">context</span> <span class="token operator">=&gt;</span> context<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span>\n<span class="token keyword">let</span> context <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;./&#39;</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">,</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.vue$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>\n<span class="token function">requireAll</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> <span class="token keyword">default</span><span class="token operator">:</span> item <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token comment">// 第一个小括号匹配文件夹名 第二个小括号匹配文件名</span>\n  <span class="token keyword">let</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/(\\w+)\\/(\\w+).vue$</span><span class="token regex-delimiter">/</span></span>\n  item<span class="token punctuation">.</span>__file<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span>\n  <span class="token comment">// 引入组件时, 默认取组件里面的name属性, 如果没有name属性则取文件名, 如果文件名是index则取文件夹名, 注册的全局组件以my-[name]使用;</span>\n  <span class="token keyword">let</span> name <span class="token operator">=</span> item<span class="token punctuation">.</span>name <span class="token operator">||</span> <span class="token punctuation">(</span>RegExp<span class="token punctuation">.</span>$<span class="token number">2</span> <span class="token operator">===</span> <span class="token string">&#39;index&#39;</span> <span class="token operator">?</span> RegExp<span class="token punctuation">.</span>$<span class="token number">1</span> <span class="token operator">:</span> RegExp<span class="token punctuation">.</span>$<span class="token number">2</span><span class="token punctuation">)</span>\n  Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">my-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> item<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>（2）之后在global文件夹下面创建文件即可；</p>',30);t.render=function(a,e,t,o,c,l){return n(),s("div",null,[p])};export default t;export{e as __pageData};
