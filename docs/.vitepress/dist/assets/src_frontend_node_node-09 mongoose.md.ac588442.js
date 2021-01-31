import{o as n,c as s,d as a}from"./app.dc9dbd0c.js";const o='{"title":"node-09 mongoose","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、mongoose","slug":"一、mongoose"},{"level":2,"title":"二、Model.find()方法","slug":"二、model-find-方法"},{"level":2,"title":"三、Model.update()方法","slug":"三、model-update-方法"},{"level":2,"title":"四、查询条数","slug":"四、查询条数"},{"level":2,"title":"五、Model.remove()；","slug":"五、model-remove-；"},{"level":2,"title":"六、findByIdAndUpdate","slug":"六、findbyidandupdate"},{"level":2,"title":"七、文档对象","slug":"七、文档对象"}],"relativePath":"src/frontend/node/node-09 mongoose.md","lastUpdated":1612089669953}',p={},e=a('<h1 id="node-09-mongoose"><a class="header-anchor" href="#node-09-mongoose" aria-hidden="true">#</a> node-09 mongoose</h1><p>文档：<a href="https://itbilu.com/nodejs/npm/B1FfBss6X.html" target="_blank" rel="noopener noreferrer">https://itbilu.com/nodejs/npm/B1FfBss6X.html</a></p><h2 id="一、mongoose"><a class="header-anchor" href="#一、mongoose" aria-hidden="true">#</a> 一、mongoose</h2><ol><li><p>原生mongodb:</p><p>可以安装：npm i mongodb（原生的mongodb写法）</p><p>现在都是使用mongoose，封装的mongodb；</p></li><li><p>mongoose安装</p><p>npm i mongoose；安装到项目文件夹；</p></li><li><p>mongoose对象：</p><p>（1）<code>Schema</code>：约束（设计集合[表]结构的同时约束数据类型）；</p><p>（2）<code>Model</code>：模型 | 表 | 集合，用来操作具体的数据；</p><p>（3）<code>document</code>：一条一条的记录</p></li><li><p>mongoose操作mongodb的步骤</p></li></ol><p>（1）开启服务</p><div class="language-js"><pre><code>   <span class="token comment">//  并引入mongoose</span>\n<span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span>；\n\n   <span class="token comment">// 连接数据库</span>\nmongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>&#39;mongodb<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">27017</span><span class="token operator">/</span>test<span class="token punctuation">,</span><span class="token punctuation">{</span>useNewUrlParser<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>；\n    <span class="token comment">//test为数据库名，27017端口可以省略，默认端口是27017；</span>\n\n    <span class="token comment">// 定义Schema</span>\n\n</code></pre></div><p>（5）根据Schema创建Model对象（创建数据库名）</p><div class="language-js"><pre><code><span class="token comment">// 定义Schemas</span>\n<span class="token keyword">let</span> Schemas <span class="token operator">=</span> mongoose<span class="token punctuation">.</span>Schema<span class="token punctuation">;</span>\n<span class="token comment">//数据库名需要加s，会转变副词，自动加s；</span>\n<span class="token keyword">let</span> userModel <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;users&#39;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Schemas</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    uname<span class="token operator">:</span>String<span class="token punctuation">,</span>\n    age<span class="token operator">:</span>Number<span class="token punctuation">,</span>\n    sex<span class="token operator">:</span><span class="token punctuation">{</span>\n        type<span class="token operator">:</span>String<span class="token punctuation">,</span>\n        <span class="token keyword">default</span><span class="token operator">:</span><span class="token string">&#39;男&#39;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 通过Model对象进行CRUD操作（需要创建多个可以写入一个数组）</span>\nuserModel<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>uname<span class="token operator">:</span><span class="token string">&#39;hny&#39;</span><span class="token punctuation">,</span>age<span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span>sex<span class="token operator">:</span><span class="token string">&#39;男&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">)</span>；\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="二、model-find-方法"><a class="header-anchor" href="#二、model-find-方法" aria-hidden="true">#</a> 二、Model.find()方法</h2><p><code>Model.find(conditions[,projection][,options][,callback])</code>; 返回一个数组；</p><ul><li><p><code>conditions</code>：find条件，查询的条件值可以为正则；</p></li><li><p><code>projection</code>：要展示的字段，0为不显示，1为显示，如果不需要设置，可以写null；</p><p>也可以使用字符串，用空格分开，不显示的用-减号；</p><p>示例：<code>model.find({name:/li/i},&#39;name -_id&#39;,()=&gt;{})</code>；</p></li><li><p><code>options</code>：查询选项，sort(排序)，limit(限制)，skip(跳过)；</p></li><li><p><code>callback</code>：回调函数，查找到的结果，从回调函数中获取所以函数需要两个形参(err,docs)；</p><p>示例：<code>model.find({name:&#39;hny&#39;},null,{skip:5},(err,dosc)=&gt;{})</code>；</p><p>如果不传递回调函数，则不会自动执行，返回一个query对象，需要调用exec()方法才能执行；</p><p>推荐使用不传递回调函数，方便前者指定复杂的条件，可以通过链式调用；</p></li></ul><div class="language-js"><pre><code>exports<span class="token punctuation">.</span><span class="token function-variable function">findApiList</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">conditions<span class="token punctuation">,</span> projection<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Models<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>conditions<span class="token punctuation">,</span> projection<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">val</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>code<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> results<span class="token operator">:</span> val<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">err</span> <span class="token operator">=&gt;</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>code<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> err<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="三、model-update-方法"><a class="header-anchor" href="#三、model-update-方法" aria-hidden="true">#</a> 三、Model.update()方法</h2><p><code>model.update(条件,修改的内容[,options][,callback])</code>；</p><p>修改多条需要加<code>{multi:true}</code>；</p><p>不建议使用update(),建议使用以下两种方法</p><ul><li><code>model.updateOne()</code>；</li><li><code>model.updateMany()</code>；</li></ul><h2 id="四、查询条数"><a class="header-anchor" href="#四、查询条数" aria-hidden="true">#</a> 四、查询条数</h2><p><code>model.countDocuments({条件},(err,cont)=&gt;{})</code>；</p><h2 id="五、model-remove-；"><a class="header-anchor" href="#五、model-remove-；" aria-hidden="true">#</a> 五、Model.remove()；</h2><ul><li><p><code>model.remove(条件,fn)；</code></p></li><li><p><code>model.deleteOne()</code></p></li><li><p><code>model.deleteMany()；</code></p></li></ul><h2 id="六、findbyidandupdate"><a class="header-anchor" href="#六、findbyidandupdate" aria-hidden="true">#</a> 六、findByIdAndUpdate</h2><p><code>findByIdAndUpdate(&#39;条件&#39;,&#39;修改内容&#39;,&#39;限制&#39;,fn)</code>；</p><p>通过id修改内容</p><h2 id="七、文档对象"><a class="header-anchor" href="#七、文档对象" aria-hidden="true">#</a> 七、文档对象</h2><ol><li><p>添加数据：<code>cur = model({})；cur.save()</code>；直接使用model创建数据，之后保存；</p><p>不需要调用<code>model.create</code>就可以创建数据；</p></li><li><p>find查找到数据之后可以直接操作查找到的数据，之后调用save()一下；</p></li></ol><div class="language-js"><pre><code>model<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>docs</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    docs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;lishi&#39;</span><span class="token punctuation">;</span>\n    docs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>；\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><ol start="3"><li>可以通过<code>docs.toObject()</code>转成普通对象，之后是不等于docs的；</li></ol>',28);p.render=function(a,o,p,t,c,l){return n(),s("div",null,[e])};export default p;export{o as __pageData};
