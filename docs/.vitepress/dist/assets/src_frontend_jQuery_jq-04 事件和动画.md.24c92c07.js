import{o as n,c as s,d as a}from"./app.dc9dbd0c.js";const t='{"title":"jq-04 事件和动画","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、事件对象","slug":"一、事件对象"},{"level":2,"title":"二、事件对象常用的属性","slug":"二、事件对象常用的属性"},{"level":3,"title":"类型","slug":"类型"},{"level":3,"title":"位置属性","slug":"位置属性"},{"level":3,"title":"行为","slug":"行为"},{"level":3,"title":"键盘事件","slug":"键盘事件"},{"level":2,"title":"三、事件","slug":"三、事件"},{"level":2,"title":"四、事件处理","slug":"四、事件处理"},{"level":3,"title":"事件绑定","slug":"事件绑定"},{"level":3,"title":"事件委托","slug":"事件委托"},{"level":3,"title":"事件移除","slug":"事件移除"},{"level":3,"title":"命名空间","slug":"命名空间"},{"level":2,"title":"五、动画效果","slug":"五、动画效果"},{"level":3,"title":"可用方法","slug":"可用方法"},{"level":3,"title":"可用参数","slug":"可用参数"},{"level":2,"title":"六、自定义动画","slug":"六、自定义动画"},{"level":3,"title":"animate","slug":"animate"},{"level":3,"title":"stop","slug":"stop"},{"level":3,"title":"finish","slug":"finish"},{"level":3,"title":"delay","slug":"delay"},{"level":2,"title":"七、动画队列中的queue;","slug":"七、动画队列中的queue"},{"level":2,"title":"八、判断元素是否处于动画状态","slug":"八、判断元素是否处于动画状态"},{"level":2,"title":"九、函数","slug":"九、函数"},{"level":2,"title":"高频面试题","slug":"高频面试题"}],"relativePath":"src\\\\frontend\\\\jQuery\\\\jq-04 事件和动画.md","lastUpdated":1612089669943}',p={},o=a('<h1 id="jq-04-事件和动画"><a class="header-anchor" href="#jq-04-事件和动画" aria-hidden="true">#</a> jq-04 事件和动画</h1><h2 id="一、事件对象"><a class="header-anchor" href="#一、事件对象" aria-hidden="true">#</a> 一、事件对象</h2><p>在给元素添加事件的函数里，直接传一个形参使用事件对象event，不需要做兼容；</p><p>转回原生事件对象：<code>e.originalEvent</code>; 鼠标滚轮事件等需要转回原生</p><h2 id="二、事件对象常用的属性"><a class="header-anchor" href="#二、事件对象常用的属性" aria-hidden="true">#</a> 二、事件对象常用的属性</h2><h3 id="类型"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h3><ul><li><p><code>type</code>：返回事件类型，click；</p></li><li><p><code>target</code>：事件源</p></li><li><p><code>delegateTarget</code>：代理的这个对象，谁调用事件的就是谁（delegate：代表）；</p></li><li><p><code>currentTarget</code>：触发该事件的当前对象；</p></li></ul><p>事件委托的事件时：<code>delegateTarget</code>指向的是父元素，<code>currentTarget</code>指向的是子元素；</p><p>直接绑定的事件时：它们两个的值是相等的；</p><h3 id="位置属性"><a class="header-anchor" href="#位置属性" aria-hidden="true">#</a> 位置属性</h3><p>在页面上移动：$(document).mousemove</p><ul><li><p><code>pageX,pageY</code>：距离文档的位置（还计算被卷起的高度）；</p></li><li><p><code>clientX,clientY</code>：距离可视窗口的位置；</p></li><li><p><code>offsetX,offsetY</code>：距离绑定事件元素的位置；</p></li><li><p><code>screenX,screenY</code>：距离屏幕边缘的位置；</p></li></ul><h3 id="行为"><a class="header-anchor" href="#行为" aria-hidden="true">#</a> 行为</h3><p>右键：$(document).contextmenu；</p><ul><li><p><code>e.stopPropagation()</code> 阻止事件冒泡（父元素和子元素都设置点击事件，点击子元素会触发父元素）；</p></li><li><p><code>e.preventDefault()</code> 阻止默认行为</p></li><li><p><code>return false</code> 可以阻止冒泡和默认行为；</p></li></ul><h3 id="键盘事件"><a class="header-anchor" href="#键盘事件" aria-hidden="true">#</a> 键盘事件</h3><ul><li><p><code>keydown</code>：按下；</p></li><li><p><code>keyup</code>：抬起；常用于表单输入框按下数字；</p></li><li><p><code>keyCode</code>：获取按键的键码值；</p></li><li><p><code>which</code>： 相当于keyCode获取键码值；</p></li></ul><p>which还可以获取鼠标按键:(1,2,3)代表左中右；需要放在对应的事件当中，<code>click</code>,<code>scroll</code>,<code>contextmenu</code>;</p><ul><li>键盘常用：<code>altkey</code> <code>ctrlkey</code> <code>shiftkey</code>；</li></ul><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;textarea&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keyup</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span><span class="token number">40</span> <span class="token operator">-</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//当输入框的按钮抬起时，修改i标签的内容,做到实时更新；</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="三、事件"><a class="header-anchor" href="#三、事件" aria-hidden="true">#</a> 三、事件</h2><ol><li><p>把原生的onclick变成click，去掉on，后面直接跟括号函数，不用等号；</p><p>例：<code>$(&quot;button&quot;).click(function(){})</code>;</p></li><li><p>事件可以链式调用：写完一个事件后面直接点上另一个事件；</p></li><li><p><code>.hover(fn1,fn2)</code>；当一个fn时，为移入，两个是移入移出；</p></li><li><p><code>元素.focus()</code>；有参数function时，表示元素获得焦点时，要执行的处理函数；</p></li></ol><p>没有参数时，调用focus方法，获得焦点；</p><p><code>blur()</code>,<code>submit()</code>,<code>change()</code>, <code>select()</code>，<code>reset()</code>；都可以使用；</p><h2 id="四、事件处理"><a class="header-anchor" href="#四、事件处理" aria-hidden="true">#</a> 四、事件处理</h2><h3 id="事件绑定"><a class="header-anchor" href="#事件绑定" aria-hidden="true">#</a> 事件绑定</h3><ul><li><p>绑定一个事件：</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p>绑定多个事件：</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;mouseover mouseout&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// or</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">mouseover</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p>自定义事件：</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token comment">// 触发自定义事件</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;custom&#39;</span><span class="token punctuation">)</span>\n</code></pre></div></li><li><p>触发事件：</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;submit&#39;</span><span class="token punctuation">)</span>\n</code></pre></div></li></ul><h3 id="事件委托"><a class="header-anchor" href="#事件委托" aria-hidden="true">#</a> 事件委托</h3><p>把子元素要做的事交给父元素</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.parent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.children&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="事件移除"><a class="header-anchor" href="#事件移除" aria-hidden="true">#</a> 事件移除</h3><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre></div><p>（1）不填参数时，移除页面中的所有事件；</p><p>（2）一个参数：填写要移除的具体事件，可以填写命名空间的函数；</p><p>（3）二个参数：.off(事件，对应事件函数名)；</p><h3 id="命名空间"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h3><p>（1）在原生里：将所有的函数放在一个对象里，需要用到哪个函数就对象取值；</p><p>（2）jquery：在事件后面加点，后面跟自定义名字，例：click.b；</p><p>$(&quot;span&quot;).off(&quot;click.b&quot;) 清除事件b；</p><ol start="5"><li>只执行一次事件：.one(事件，函数)；</li></ol><h2 id="五、动画效果"><a class="header-anchor" href="#五、动画效果" aria-hidden="true">#</a> 五、动画效果</h2><h3 id="可用方法"><a class="header-anchor" href="#可用方法" aria-hidden="true">#</a> 可用方法</h3><h4 id="基本效果"><a class="header-anchor" href="#基本效果" aria-hidden="true">#</a> 基本效果</h4><ul><li><code>show()</code>；显示</li><li><code>hide()</code>；隐藏</li><li><code>toggle()</code>；显示或隐藏；</li></ul><h4 id="透明度变化"><a class="header-anchor" href="#透明度变化" aria-hidden="true">#</a> 透明度变化</h4><ul><li><code>fadeIn()</code>；透明度变化显示；</li><li><code>fadeOut()</code>；透明度变化隐藏；</li><li><code>fadeTo()</code>；指定透明度变到多少，第一个参数时间，第二个参数透明度的值，第三个参数填写其他的；</li><li><code>fadeToggle()</code>；透明度的显示或消失；</li></ul><h4 id="滑动"><a class="header-anchor" href="#滑动" aria-hidden="true">#</a> 滑动</h4><ul><li><code>slideUp()</code>；收起；</li><li><code>slideDown()</code>；放下；</li><li><code>slideToggle()</code>；收起或放下；</li></ul><h3 id="可用参数"><a class="header-anchor" href="#可用参数" aria-hidden="true">#</a> 可用参数</h3><p>第一个参数：可以传入时间，单位毫秒，或填写关键字：fast(200),normal(400),slow(600);</p><p>第二个参数：linear，动画方式；</p><p>第三个参数：函数，用来动画完成执行的回调函数；</p><p>例：<code>$(&quot;div&quot;).show(1000,&quot;linear&quot;,function(alert(1)))</code>;</p><h2 id="六、自定义动画"><a class="header-anchor" href="#六、自定义动画" aria-hidden="true">#</a> 六、自定义动画</h2><h3 id="animate"><a class="header-anchor" href="#animate" aria-hidden="true">#</a> animate</h3><ol><li><p>第一种语法</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>第一个参数：对象，对象里面是变化属性的键值对；</p><p>第二个参数：时间，单位毫秒；</p><p>第三个参数：速度变化方式；linear匀速，默认为swing；</p><p>第四个参数：动画完成的函数；</p></li><li><p>第二种语法：</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>duration<span class="token operator">:</span><span class="token number">2000</span><span class="token punctuation">,</span><span class="token function-variable function">complete</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>第一个参数：对象，对象里面写变化属性的键值对；</p><p>第二个参数：对象，动画的额外选项；duration(持续时间)，complete(完成执行的函数);</p></li><li><p><strong>动画对列</strong></p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>queue<span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>height<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>执行完前一个，再执行后面的；</p><p><code>queue:false</code> 动画一起执行；</p><p>animate()；也可以使用属性值：show,hide,toggle，来代替透明度变化和高度滑动；</p></li><li><p><strong>累加、累减动画</strong>：使用&quot;+=&quot;或&quot;-=&quot;；</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;width&quot;</span><span class="token operator">:</span><span class="token string">&quot;+=500&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>每点击一下，加500的宽度；</p></li></ol><h3 id="stop"><a class="header-anchor" href="#stop" aria-hidden="true">#</a> stop</h3><p><code>.stop([clearQueue],[gotoEnd])</code></p><p>如果不填写参数，停止当前动画，如果后面还有动画，则会直接执行后面的动画；</p><p>动画停止：true或false；第一个是否清空队列，第二个是否立即完成当前动画；</p><ul><li><p><code>stop(true)</code>：清空队列，停止当前动画；</p></li><li><p><code>stop(false,true)</code>；常用于后一个动画需要基于前一个动画结束才执行</p></li><li><p><code>stop(true,true)</code>；停止当前动画并直接到达当前动画的末状态，并清空动画队列；</p></li></ul><div class="language-js"><pre><code>  <span class="token comment">//用户鼠标移入，清空后面的队列，停止当前动画，再执行当前动画</span>\n<span class="token comment">//如果不是动画对列，不需要加true；</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>height<span class="token operator">:</span><span class="token number">500</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>height<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>width<span class="token operator">:</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">300</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><h3 id="finish"><a class="header-anchor" href="#finish" aria-hidden="true">#</a> finish</h3><p>元素的动画立即完成；</p><h3 id="delay"><a class="header-anchor" href="#delay" aria-hidden="true">#</a> delay</h3><p>元素.delay(毫秒).动画；元素等过了毫秒值后再开始动画；</p><h2 id="七、动画队列中的queue"><a class="header-anchor" href="#七、动画队列中的queue" aria-hidden="true">#</a> 七、动画队列中的queue;</h2><ol><li>css不属于动画，在参于动画队列时，不会在动画队列中排队，会先执行；</li><li><code>queue(function(){})</code>; 需要在函数括号添加个形参，在事件里面调用这个形参；</li><li>除了使用queue强行插入之外，使用回调函数，在前面的标签，作为结束动画执行的内容；</li></ol><p>强行插入动画队列，函数完成以后会影响对列下面的动画执行，需要在函数的括号中写个形参，然后在调用这个形参加小括号，调用确保队列剩下的动画正常执行；这个形参是一个函数，相当于queue后面的动画队列的一个集合，需要调用一下；</p><h2 id="八、判断元素是否处于动画状态"><a class="header-anchor" href="#八、判断元素是否处于动画状态" aria-hidden="true">#</a> 八、判断元素是否处于动画状态</h2><p>在使用 animate() 方法的时候，要避免动画积累而导致动画与用户的行为不一致，当用户快速在某个元素上执行 animate() 动画时，就会出现动画积累。解决方法是判断元素是否处于动画状态，如果元素不处于动画状态，才为元素添加新的动画，否则不添加。</p><div class="language-js"><pre><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&quot;:animated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>    <span class="token comment">//判断元素是否正处于动画状态</span>\n        <span class="token comment">//如果当前没有进行动画，则添加新动画</span>\n<span class="token punctuation">}</span>\n<span class="token function">也可以：$</span><span class="token punctuation">(</span><span class="token string">&quot;div:not(:animated)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token string">&quot;+=20&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//没有在动画的div元素添加动画</span>\n\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;li&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hover</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">is</span><span class="token punctuation">(</span><span class="token string">&quot;:animated&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>   <span class="token comment">//如果没有在动画就执行动画；</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            <span class="token string">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;show&quot;</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        <span class="token string">&quot;height&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hide&quot;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div:not(:animated)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">animate</span><span class="token punctuation">(</span><span class="token punctuation">{</span> left<span class="token operator">:</span> <span class="token string">&quot;+=20&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//没有在动画的div元素添加画</span>\n</code></pre></div><h2 id="九、函数"><a class="header-anchor" href="#九、函数" aria-hidden="true">#</a> 九、函数</h2><p>递归：在函数中调用自己，需要有一个出口，否则会死循环；</p><p>回调：当做参数传递给另一个函数；</p><p>闭包：两个函数嵌套，内层函数使用外层函数的变量；</p><div class="language-js"><pre><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">function</span> <span class="token function">down</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slideDown</span><span class="token punctuation">(</span>down<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre></div><p>递归让下一个</p><h2 id="高频面试题"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><p>● Jquery 如何给新添加的元素绑定事件？</p>',80);p.render=function(a,t,p,e,c,u){return n(),s("div",null,[o])};export default p;export{t as __pageData};
