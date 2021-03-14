import{o as n,c as s,d as a}from"./app.f5909e71.js";const p='{"title":"Webpack-03 多页面、source-map、实时打包","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、打包多页面应用","slug":"一、打包多页面应用"},{"level":2,"title":"二、配置source-map","slug":"二、配置source-map"},{"level":2,"title":"三、实时打包","slug":"三、实时打包"},{"level":2,"title":"四、webpack小插件","slug":"四、webpack小插件"},{"level":2,"title":"五、webpack跨域问题","slug":"五、webpack跨域问题"},{"level":2,"title":"六、resolve","slug":"六、resolve"},{"level":2,"title":"七、定义环境变量","slug":"七、定义环境变量"},{"level":2,"title":"八、指定运行时的环境变量","slug":"八、指定运行时的环境变量"}],"relativePath":"src\\\\frontend\\\\Webpack\\\\webpack-03 多页面、source-map、实时打包.md","lastUpdated":1615699077434}',t={},o=a('<h1 id="webpack-03-多页面、source-map、实时打包"><a class="header-anchor" href="#webpack-03-多页面、source-map、实时打包" aria-hidden="true">#</a> Webpack-03 多页面、source-map、实时打包</h1><h2 id="一、打包多页面应用"><a class="header-anchor" href="#一、打包多页面应用" aria-hidden="true">#</a> 一、打包多页面应用</h2><div class="language-js"><pre><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// 多入口</span>\n    entry<span class="token operator">:</span> <span class="token punctuation">{</span>\n        home<span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>\n        other<span class="token operator">:</span> <span class="token string">&#39;./src/other.js&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    output<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// [name]就是一个变量,代表home或ohter 代表多出口</span>\n        filename<span class="token operator">:</span> <span class="token string">&#39;[name].js&#39;</span><span class="token punctuation">,</span>\n        path<span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            template<span class="token operator">:</span> <span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span>\n            filename<span class="token operator">:</span> <span class="token string">&#39;home.html&#39;</span><span class="token punctuation">,</span>\n            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;home&#39;</span><span class="token punctuation">]</span>  <span class="token comment">//代码块,放home js文件</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token comment">// 当多页面应用时需要new两个,不能使用变量[name]</span>\n        <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            template<span class="token operator">:</span> <span class="token string">&#39;./index.html&#39;</span><span class="token punctuation">,</span>\n            filename<span class="token operator">:</span> <span class="token string">&#39;other.html&#39;</span><span class="token punctuation">,</span>\n            chunks<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;other&#39;</span><span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="二、配置source-map"><a class="header-anchor" href="#二、配置source-map" aria-hidden="true">#</a> 二、配置source-map</h2><ol><li>当为production生产模式时，代码会被压缩成一行，我们无法进行调试，因此可以对source-map进行配置</li></ol><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token comment">// 1) 源码映射, 会单独生成一个sourcemap文件, 文件较大, 出错了会标识当前报错的列和行</span>\n    <span class="token comment">// devtool: &#39;source-map&#39; //增加映射文件, 可以进行调试源代码</span>\n\n    <span class="token comment">// 2) 不会产生单独的文件, 但会显示报错的列和行, 会集成到js文件中</span>\n    <span class="token comment">// devtool: &#39;eval-source-map&#39;</span>\n\n    <span class="token comment">// 3) 不会产生列, 但是会生成一个单独的映射文件</span>\n    <span class="token comment">// devtool: &#39;cheap-module-source-map&#39;,  // 产生后可以保留起来, 用来调试</span>\n\n    <span class="token comment">// 4) 不会产生文件, 集成在打包文件中, 不会产生列</span>\n    devtool<span class="token operator">:</span> <span class="token string">&#39;cheap-module-eval-source-map&#39;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="三、实时打包"><a class="header-anchor" href="#三、实时打包" aria-hidden="true">#</a> 三、实时打包</h2><p>当每次修改文件之后，就会自动进行代码打包npm run build， 只需要运行一篇npm run build，就会一直在终端等待代码更改，并实时进行打包</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    watch<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    watchOptions<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 监控选项</span>\n        poll<span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span> <span class="token comment">// 每秒问我1000次</span>\n        aggregateTimeout<span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">// 防抖功能, 500毫秒只打包一次</span>\n        ignored<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>  <span class="token comment">// 忽略文件不监控</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="四、webpack小插件"><a class="header-anchor" href="#四、webpack小插件" aria-hidden="true">#</a> 四、webpack小插件</h2><ol><li>每次打包删除dist目录</li></ol><p>安装：yarn add clean-webpack-plugin -D</p><div class="language-js"><pre><code><span class="token keyword">const</span> CleanWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// 当清空一个文件夹时传入字符串, 当多个文件夹时, 传入一个数组</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="2"><li>将js代码之外的文件也打包到dist目录下</li></ol><p>安装：yarn add copy-webpack-plugin -D</p><div class="language-js"><pre><code><span class="token keyword">const</span> CopyWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;copy-webpack-plugin&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n            <span class="token punctuation">{</span><span class="token keyword">from</span><span class="token operator">:</span> <span class="token string">&#39;./doc&#39;</span><span class="token punctuation">,</span> to<span class="token operator">:</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">}</span>  <span class="token comment">// 拷贝多个就写多个对象</span>\n        <span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="3"><li>打包版权声明，webpack内置的插件</li></ol><p>打包之后会将写入的话添加到每个js文件开头</p><div class="language-js"><pre><code><span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>BannerPlugin</span><span class="token punctuation">(</span><span class="token string">&#39;make hny 2019/12/05&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="五、webpack跨域问题"><a class="header-anchor" href="#五、webpack跨域问题" aria-hidden="true">#</a> 五、webpack跨域问题</h2><p>webpack由于内置启动了一个服务，因此默认安装了express，可以直接使用express</p><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    devServer<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 1) 重写请求地址</span>\n        <span class="token comment">// &#39;/api&#39;: &#39;http: //localhost:3000&#39; // 访问api开头的都去3000端口查找,</span>\n        <span class="token comment">// 由于后端接口不一样全是api开头,因此需要重写路径</span>\n        <span class="token string">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            target<span class="token operator">:</span> <span class="token string">&#39;http://localhost:3000&#39;</span><span class="token punctuation">,</span>\n            pathRewrite<span class="token operator">:</span> <span class="token punctuation">{</span>\n                <span class="token string">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token string">&#39;&#39;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 2) 当只想单纯模拟数据时</span>\n        <span class="token function">before</span><span class="token punctuation">(</span><span class="token parameter">app</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  <span class="token comment">// 相当于一个钩子</span>\n            app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n                res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;hny&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token comment">// 3) 自己写的服务端, 不想用代理处理, 在服务端启动webpack, 端口用服务端的端口</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><ol start="2"><li>在服务端启动webpack，不需要npm run dev了，直接运行server.js文件自动启动webpack，将前后端开发到一起，请求数据不存在跨域问题</li></ol><p>安装：yarn add webpack-dev-middleware -D</p><div class="language-js"><pre><code><span class="token comment">// server.js</span>\n\n<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> middle <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-dev-middleware&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.config.js&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> compiler <span class="token operator">=</span> <span class="token function">webpack</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">middle</span><span class="token punctuation">(</span>compiler<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 使用中间件</span>\n\napp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/user&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&#39;hny&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>\n</code></pre></div><p>当启动node server.js会同时启动webpack</p><h2 id="六、resolve"><a class="header-anchor" href="#六、resolve" aria-hidden="true">#</a> 六、resolve</h2><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    resolve<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 解析第三方模块</span>\n        modules<span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;node_modules&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//模块首先到node_modules查找, 不要到上一层目录查找了,如果有其他模块可以继续在数组里面添加</span>\n        alias<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 别名, 解决引入地址太长</span>\n            \n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        mainFields<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;style&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;main&#39;</span><span class="token punctuation">]</span> <span class="token comment">// 先查找style字段, 再查找main</span>\n        <span class="token comment">// mainFiles: [], // 入口文件的名字 index.js   当引入的直接是文件名时, 首先查找index.js文件</span>\n        extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.json&#39;</span><span class="token punctuation">]</span>  <span class="token comment">// 当省略扩展名时, 自动从左至右顺序查找文件</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h2 id="七、定义环境变量"><a class="header-anchor" href="#七、定义环境变量" aria-hidden="true">#</a> 七、定义环境变量</h2><ol><li>通过<code>webpack.DefinePlugin</code>添加全局变量，写好之后在项目里面可以直接通过DEV进行判断，是什么环境了；</li></ol><div class="language-js"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token constant">DEV</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token string">&#39;production&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 因为直接写字符串production会是一个变量, 因此需要转字符串</span>\n            <span class="token constant">FLAG</span><span class="token operator">:</span> <span class="token string">&#39;true&#39;</span> <span class="token comment">// 布尔值不需要转字符串</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// demo.js</span>\n<span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>\n<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">DEV</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    url <span class="token operator">=</span> <span class="token string">&#39;http://localhost:3000&#39;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    url <span class="token operator">=</span> <span class="token string">&#39;http://heny.vip&#39;</span>\n<span class="token punctuation">}</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>\n</code></pre></div><ol start="2"><li>添加两个配置文件</li></ol><p>生产配置文件：webpack.prod.js</p><p>开发配置文件：webpack.dev.js</p><p>基础配置文件：webpack.base.js 通过基础引入prod或dev；</p><p>安装：yarn add webpack-merge -D</p><p>（1）webpack.prod.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>smart<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.base.js&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;production&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>（2）webpack.dev.js</p><div class="language-js"><pre><code><span class="token keyword">const</span> <span class="token punctuation">{</span>smart<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack-merge&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> base <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./webpack.base.js&#39;</span><span class="token punctuation">)</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">smart</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    mode<span class="token operator">:</span> <span class="token string">&#39;development&#39;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>当开发时需要指定config文件： npm run start -- --config webpack.dev.js 中间两个杠指传参</p><h2 id="八、指定运行时的环境变量"><a class="header-anchor" href="#八、指定运行时的环境变量" aria-hidden="true">#</a> 八、指定运行时的环境变量</h2><ol><li><p>安装插件：<code>npm install cross-env</code></p></li><li><p>在<code>package.json</code>文件配置</p><div class="language-json"><pre><code><span class="token property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cross-env NODE_ENV=development webpack&quot;</span>\n</code></pre></div></li><li><p>之后在文件中取：<code>process.<wbr>env.NODE_ENV</code></p></li></ol>',43);t.render=function(a,p,t,e,c,l){return n(),s("div",null,[o])};export default t;export{p as __pageData};
