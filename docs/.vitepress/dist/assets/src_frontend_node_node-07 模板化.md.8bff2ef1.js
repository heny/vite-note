import{o as s,c as n,d as a}from"./app.dc9dbd0c.js";const e='{"title":"node-07 模板化","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、CommonJS规范","slug":"一、commonjs规范"},{"level":2,"title":"二、es6中的模块化：","slug":"二、es6中的模块化："},{"level":2,"title":"三、浏览器使用nodejs的模块","slug":"三、浏览器使用nodejs的模块"},{"level":2,"title":"四、ES6转ES5","slug":"四、es6转es5"},{"level":2,"title":"五、amd、cmd；","slug":"五、amd、cmd；"}],"relativePath":"src\\\\frontend\\\\node\\\\node-07 模板化.md","lastUpdated":1612089669952}',p={},o=a('<h1 id="node-07-模板化"><a class="header-anchor" href="#node-07-模板化" aria-hidden="true">#</a> node-07 模板化</h1><h2 id="一、commonjs规范"><a class="header-anchor" href="#一、commonjs规范" aria-hidden="true">#</a> 一、CommonJS规范</h2><ol><li><p>commonjs主要是为了实现代码重用，commonjs是同步加载的；</p></li><li><p>在commonjs规范中：</p><ul><li>一个js文件就是一个模块，拥有单独的作用域；</li><li>普通方式定义的变量、函数、对象都属于该模块内；</li><li>通过require来加载模块；</li><li>通过exports和module.exports来暴露模块中的内容；</li></ul></li></ol><p>单个暴露：<code>exports.fn = function(){}</code></p><p>一起暴露：<code>module.exports = {}</code></p><ol start="3"><li><p>所有代码都运行在模块作用域中，避免全局变量污染，模块加载一次就在缓存里面了，多次加载都是读取缓存的，模块是按顺序同步加载的；</p></li><li><p>require（同步加载）的功能：读取并执行一个js文件，然后返回该模块的exprots对象，如果没有该模块就会报错；</p></li></ol><p>模块化的好处：模块化是指解决一个复杂问题时自顶向下逐层把系统划分成若干模块的过程，有多种属性，分别反映其内部特性。模块化是一种处理复杂系统分解为更好的可管理模块的方式。</p><h2 id="二、es6中的模块化："><a class="header-anchor" href="#二、es6中的模块化：" aria-hidden="true">#</a> 二、es6中的模块化：</h2><p>如果只暴露一个就使用export default，import时不需要花括号；</p><ol><li>export暴露（模块）： （1）单个暴露：</li></ol><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>（2）整体暴露</p><div class="language-js"><pre><code><span class="token keyword">let</span> m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token punctuation">{</span>m<span class="token punctuation">,</span>fn<span class="token punctuation">}</span>\n</code></pre></div><p>（3）默认暴露</p><div class="language-js"><pre><code><span class="token keyword">export</span> <span class="token keyword">default</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n</code></pre></div><p>一般适用于一个参数时；</p><ol start="2"><li>import（入口文件）：</li></ol><p>普通暴露语法： import { 属性名... } from &#39;filePath&#39;</p><p>默认暴露语法：import 属性名 from &#39;filePath&#39;；</p><p>有暴露的地方才能写入；</p><h2 id="三、浏览器使用nodejs的模块"><a class="header-anchor" href="#三、浏览器使用nodejs的模块" aria-hidden="true">#</a> 三、浏览器使用nodejs的模块</h2><ol><li><p>browserify官网：<a href="http://browserify.org" target="_blank" rel="noopener noreferrer">browserify.org</a></p></li><li><p>安装：npm install -g browserify</p></li><li><p>用法：browserify 源文件 -o 目标文件</p><p>实例：browserify ./src/app.js -o ./dist/bundle.js</p></li><li><p>browserify打包成功以后没有提示，如果没有文件夹会自动创建文件夹，如果重复则自动覆盖；</p></li></ol><h2 id="四、es6转es5"><a class="header-anchor" href="#四、es6转es5" aria-hidden="true">#</a> 四、ES6转ES5</h2><ol><li>介绍：</li></ol><p>主要是用来兼容低版本浏览器的；</p><p>babel官网：<a href="http://www.babeljs.cn" target="_blank" rel="noopener noreferrer">www.babeljs.cn</a></p><p>babel的功能：将es6语法转成es5语法、还能操作jsx语法(react)等 2. 安装</p><p>安装babel-cli, babel-preset-es2015和browserify:</p><p>(1)、npm install babel-cli browserify -g (2)、npm install babel-preset-es2015 --save-dev</p><p>参数说明：</p><p>--save 项目依赖（真正上线，也需要）</p><p>--save-dev 开发依赖（开发阶段需要，上线不需要[因为已转换好了]）</p><p>presets 预设(将es6转换成es5的所有插件打包)</p><p>３、在项目中定义babel配置文件：.babelrc文件，内容如下： { &quot;presets&quot;: [&quot;es2015&quot;] }</p><p>４、编译</p><p>使用Babel将ES6编译为ES5代码(但包含CommonJS语法) : babel ./src -d ./dist</p><p>前端使用的话就使用Browserify编译js : browserify ./dist/app.js -o ./dest/bundle.js</p><p>５、npm run [package.json文件中的scripts:参数]</p><p>npm run start | npm start 除了start可以省略run，其它都不能省略</p><p>&quot;start&quot;: &quot;babel ./src -d ./dist&quot;,</p><p>&quot;build&quot;: &quot;babel ./src -d ./dist&quot;,</p><p>&quot;dev&quot;:&quot;browserify ./dist/app.js -o ./dest/bundle.js&quot; ；</p><h2 id="五、amd、cmd；"><a class="header-anchor" href="#五、amd、cmd；" aria-hidden="true">#</a> 五、amd、cmd；</h2><ol><li><p>amd:规范</p><p>requirejs 实现的amd规范；</p></li><li><p>cmd:规范</p><p>seajs 实现的cmd规范；</p></li></ol>',44);p.render=function(a,e,p,t,l,r){return s(),n("div",null,[o])};export default p;export{e as __pageData};
