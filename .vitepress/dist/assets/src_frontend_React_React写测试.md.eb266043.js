import{o as n,c as a,d as s}from"./app.f5909e71.js";const t='{"title":"React写测试用例","description":"","frontmatter":{},"headers":[{"level":2,"title":"Example","slug":"example"},{"level":2,"title":"常用API","slug":"常用api"},{"level":3,"title":"render函数返回的api","slug":"render函数返回的api"},{"level":3,"title":"expect API","slug":"expect-api"},{"level":2,"title":"testing-library/react库常用的方法","slug":"testing-library-react库常用的方法"}],"relativePath":"src\\\\frontend\\\\React\\\\React写测试.md","lastUpdated":1615699077392}',e={},p=s('<h1 id="react写测试用例"><a class="header-anchor" href="#react写测试用例" aria-hidden="true">#</a> React写测试用例</h1><p>在package.json文件里，查看react-script 脚本，在3.3之前的版本都需要手动安装测试库，下面是手动安装</p><div class="language-bash"><pre><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev @testing-library/react\n</code></pre></div><p>jest官网：<a href="https://jestjs.io/docs/zh-Hans/api" target="_blank" rel="noopener noreferrer">https://jestjs.io/docs/zh-Hans/api</a></p><p>react测试库：<a href="https://testing-library.com/docs/react-testing-library/intro" target="_blank" rel="noopener noreferrer">https://testing-library.com/docs/react-testing-library/intro</a></p><h2 id="example"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-jsx"><pre><code><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>fireEvent<span class="token punctuation">,</span> render<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@testing-library/react&#39;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span>\n\n<span class="token keyword">const</span> defualtProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n    onClick<span class="token operator">:</span> jest<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 假的事件</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// describe代表一组测试用例</span>\n<span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&#39;test Button component&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment">// it是test的简写，一个it表示一个用例</span>\n    <span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&#39;should render the correct default button&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    \t<span class="token keyword">const</span> wrapper <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">defaultProps</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Nice</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>\n        <span class="token comment">// 通过查找Nice找到节点</span>\n        <span class="token keyword">const</span> element <span class="token operator">=</span> wrapper<span class="token punctuation">.</span><span class="token function">getByText</span><span class="token punctuation">(</span><span class="token string">&#39;Nice&#39;</span><span class="token punctuation">)</span>\n        <span class="token comment">// 验证是否在文档中</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBeInTheDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token comment">// 验证是否是button标签</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>element<span class="token punctuation">.</span>tagName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&#39;BUTTON&#39;</span><span class="token punctuation">)</span>\n        <span class="token comment">// 测试是否包含类名</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveClass</span><span class="token punctuation">(</span><span class="token string">&#39;btn btn-default&#39;</span><span class="token punctuation">)</span>\n        <span class="token comment">// 点击该节点</span>\n        fireEvent<span class="token punctuation">.</span><span class="token function">click</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span>\n        <span class="token comment">// 确保函数被调用</span>\n        <span class="token function">expect</span><span class="token punctuation">(</span>defaultProps<span class="token punctuation">.</span>onClick<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre></div><h2 id="常用api"><a class="header-anchor" href="#常用api" aria-hidden="true">#</a> 常用API</h2><h3 id="render函数返回的api"><a class="header-anchor" href="#render函数返回的api" aria-hidden="true">#</a> render函数返回的api</h3><ul><li><code>getByText</code> 通过内容查找节点</li><li><code>queryByText</code> 与get不同的是可能返回undefined</li><li><code>getByTestId</code> 通过节点绑定的data-testid查找对应的节点</li></ul><h3 id="expect-api"><a class="header-anchor" href="#expect-api" aria-hidden="true">#</a> expect API</h3><ul><li><code>toBeInTheDocument</code> 验证是否在文档中</li><li><code>toHaveClass</code> 是否包含类名</li><li><code>toBeVisible</code> 是否存在</li><li><code>toHaveBeenCalled</code> 事件是否被调用</li><li><code>toHaveBeenCalledWith</code> 验证调用时传入的参数</li><li><code>not</code> 将后面的链式调用修改为与之相反</li></ul><h2 id="testing-library-react库常用的方法"><a class="header-anchor" href="#testing-library-react库常用的方法" aria-hidden="true">#</a> testing-library/react库常用的方法</h2><ul><li><code>fireEvent</code> 模拟事件</li><li><code>render</code> 渲染节点</li><li><code>cleanup</code> 清除前面的节点</li></ul>',14);e.render=function(s,t,e,o,c,l){return n(),a("div",null,[p])};export default e;export{t as __pageData};
