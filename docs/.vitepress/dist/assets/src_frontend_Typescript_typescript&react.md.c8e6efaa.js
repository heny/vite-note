import{o as n,c as s,d as a}from"./app.dc9dbd0c.js";const t='{"title":"ts-react","description":"","frontmatter":{},"headers":[{"level":2,"title":"React类型声名","slug":"react类型声名"}],"relativePath":"src/frontend/Typescript/typescript&react.md","lastUpdated":1612089669878}',p={},o=a('<h1 id="ts-react"><a class="header-anchor" href="#ts-react" aria-hidden="true">#</a> ts-react</h1><p>安装：<code>yarn create react-app demo --template typescript</code></p><p>传值方式：</p><div class="language-tsx"><pre><code><span class="token comment">// Prent.tsx</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">import</span> Button <span class="token keyword">from</span> <span class="token string">&#39;./Button&#39;</span>\n<span class="token keyword">type</span> <span class="token class-name">StateProps</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    count<span class="token operator">:</span> <span class="token builtin">number</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">Parent</span> <span class="token punctuation">{</span>\n    state<span class="token operator">:</span> StateProps\n<span class="token punctuation">}</span>\n<span class="token keyword">class</span> <span class="token class-name">Paren</span> <span class="token keyword">extends</span> <span class="token class-name">React</span><span class="token punctuation">.</span>Component <span class="token punctuation">{</span>\n    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token parameter">props<span class="token operator">:</span> any</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n            count<span class="token operator">:</span> <span class="token number">0</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">handleClick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>count<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">public</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span>\n        \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            \t</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n                </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClick</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">+</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">\n            </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// Button.tsx</span>\n<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>\n<span class="token keyword">interface</span> <span class="token class-name">Props</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">onClick</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">ev<span class="token operator">:</span> React<span class="token punctuation">.</span>MouseEvent<span class="token operator">&lt;</span>HTMLButtonElement<span class="token operator">&gt;</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> Button<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>Props<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    \t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>onClick<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n    <span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n</code></pre></div><h2 id="react类型声名"><a class="header-anchor" href="#react类型声名" aria-hidden="true">#</a> React类型声名</h2><p>使用ts的react常见的类型声名：</p><div class="language-tsx"><pre><code><span class="token comment">// 组件声名</span>\n<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span>FunctionComponent<span class="token operator">&lt;</span>AppProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n<span class="token comment">// or</span>\n<span class="token keyword">const</span> App<span class="token operator">:</span> React<span class="token punctuation">.</span><span class="token constant">FC</span><span class="token operator">&lt;</span>AppProps<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// css声名</span>\n<span class="token keyword">interface</span> <span class="token class-name">Constom</span> <span class="token punctuation">{</span>\n    style<span class="token operator">?</span><span class="token operator">:</span> React<span class="token punctuation">.</span>CSSProperty<span class="token punctuation">;</span> <span class="token comment">// 样式</span>\n    children<span class="token operator">:</span> React<span class="token punctuation">.</span>ReactNode<span class="token punctuation">;</span> <span class="token comment">// 组件</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 原始标签类型</span>\n<span class="token keyword">type</span> <span class="token class-name">AppProps</span> <span class="token operator">=</span> AppProps <span class="token operator">&amp;</span> React<span class="token punctuation">.</span>ButtonHTMLAttributes<span class="token operator">&lt;</span>HTMLElement<span class="token operator">&gt;</span><span class="token punctuation">;</span>\n</code></pre></div>',7);p.render=function(a,t,p,e,c,l){return n(),s("div",null,[o])};export default p;export{t as __pageData};
