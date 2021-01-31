import{o as e,c as r,d as a}from"./app.dc9dbd0c.js";const d='{"title":"React面试","description":"","frontmatter":{},"headers":[{"level":2,"title":"fiber","slug":"fiber"},{"level":3,"title":"fiber数据结构","slug":"fiber数据结构"},{"level":2,"title":"redux面试相关","slug":"redux面试相关"},{"level":3,"title":"redux由以下组件组成：","slug":"redux由以下组件组成："},{"level":3,"title":"解释reducer的作用","slug":"解释reducer的作用"},{"level":3,"title":"Store在redux中的意义是什么","slug":"store在redux中的意义是什么"},{"level":3,"title":"Redux与Flux有何不同？","slug":"redux与flux有何不同？"}],"relativePath":"src\\\\frontend\\\\React\\\\React面试.md","lastUpdated":1612089669839}',t={},l=a('<h1 id="react面试"><a class="header-anchor" href="#react面试" aria-hidden="true">#</a> React面试</h1><ol><li><a href="https://zhuanlan.zhihu.com/p/143570474" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/143570474</a></li></ol><h2 id="fiber"><a class="header-anchor" href="#fiber" aria-hidden="true">#</a> fiber</h2><p>由于render函数递归执行，如果项目变得庞大后，会有卡顿，<code>requestIdleCallback</code>可以利用浏览器的业余时间，把任务分成一个个的小任务，然后利用浏览器空闲时间来做diff，如果当前有任务来了，比如用户的点击或者动画，会先执行，然后空闲后，回到当前任务继续执行未完成的任务；</p><h3 id="fiber数据结构"><a class="header-anchor" href="#fiber数据结构" aria-hidden="true">#</a> fiber数据结构</h3><p>fiber遍历过程：自上而下，自左至右；</p><p>先找子元素 -&gt; 再找兄弟元素 -&gt; 再找父元素；</p><h2 id="redux面试相关"><a class="header-anchor" href="#redux面试相关" aria-hidden="true">#</a> redux面试相关</h2><h3 id="redux由以下组件组成："><a class="header-anchor" href="#redux由以下组件组成：" aria-hidden="true">#</a> redux由以下组件组成：</h3><p>Action：这是一个用来描述发生了什么事情的对象；</p><p>Reducer：这是一个确定状态将如何变化的地方</p><p>Store：整个程序的状态/对象树保存在Store中；</p><h3 id="解释reducer的作用"><a class="header-anchor" href="#解释reducer的作用" aria-hidden="true">#</a> 解释reducer的作用</h3><p>reducers是纯函数，它规定应用程序的状态怎样因响应Action而改变，reducers通过接受先前的状态和action来工作，然后它返回一个新的状态，它根据操作的类型确定需要执行哪种更新，然后返回新的值，如果不需要完成任务，它会返回原来的状态；</p><h3 id="store在redux中的意义是什么"><a class="header-anchor" href="#store在redux中的意义是什么" aria-hidden="true">#</a> Store在redux中的意义是什么</h3><p>Store是一个javascript对象，它可以保存程序的状态，并提供一些方法来访问状态、调度操作和注册侦听器，应用程序的整个状态/对象树保存在单一存储中，因此，redux非常简单且是可预测的，我们可以将中间件传递到store来处理数据，并记录改变存储状态的各种操作，所有操作都通过reducer返回一个新状态；</p><h3 id="redux与flux有何不同？"><a class="header-anchor" href="#redux与flux有何不同？" aria-hidden="true">#</a> Redux与Flux有何不同？</h3><ol><li>Flux的Store包含状态和更改逻辑，Redux中Store和更改逻辑是分开的；</li><li>flux中有多个store，redux只有一个store；</li><li>flux中所有store都互不影响且是平级的，redux带有分层reducer的单一store；</li><li>flux有单一调度器，redux没有调度器的概念；</li><li>flux中react组件订阅store，</li></ol>',18);t.render=function(a,d,t,u,i,h){return e(),r("div",null,[l])};export default t;export{d as __pageData};
