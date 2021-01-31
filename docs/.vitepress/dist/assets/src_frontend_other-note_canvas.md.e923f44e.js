import{o as a,c as n,d as s}from"./app.f43337b9.js";const p='{"title":"canvas","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、canvas入门","slug":"一、canvas入门"},{"level":2,"title":"二、绘制矩形","slug":"二、绘制矩形"},{"level":2,"title":"三、描边+填充同时存在","slug":"三、描边-填充同时存在"},{"level":2,"title":"四、绘制三角形","slug":"四、绘制三角形"},{"level":2,"title":"五、绘制圆形","slug":"五、绘制圆形"},{"level":2,"title":"六、碰撞的小球","slug":"六、碰撞的小球"},{"level":2,"title":"七、其他绘制","slug":"七、其他绘制"},{"level":2,"title":"八、绘制阴影","slug":"八、绘制阴影"},{"level":2,"title":"九、裁剪","slug":"九、裁剪"},{"level":2,"title":"十、绘制渐变","slug":"十、绘制渐变"},{"level":2,"title":"十一、绘制文本","slug":"十一、绘制文本"},{"level":2,"title":"十二、cos、sin","slug":"十二、cos、sin"},{"level":2,"title":"十三、改变圆心点","slug":"十三、改变圆心点"},{"level":2,"title":"十四、图像","slug":"十四、图像"},{"level":3,"title":"绘制重复图像","slug":"绘制重复图像"},{"level":3,"title":"下载绘制的canvas图片","slug":"下载绘制的canvas图片"},{"level":2,"title":"十五、canvas录制视频","slug":"十五、canvas录制视频"},{"level":2,"title":"十六、截图canvas实例","slug":"十六、截图canvas实例"},{"level":2,"title":"画时钟","slug":"画时钟"}],"relativePath":"src/frontend/other-note/canvas.md","lastUpdated":1612089669964}',t={},e=s('<h1 id="canvas"><a class="header-anchor" href="#canvas" aria-hidden="true">#</a> canvas</h1><h2 id="一、canvas入门"><a class="header-anchor" href="#一、canvas入门" aria-hidden="true">#</a> 一、canvas入门</h2><ol><li>canvas属性html5新增属性，它是一个画布，其本身不具备绘制能力；</li><li>绘制工具是javascript，使用getContext(&#39;2d&#39;)绘制；</li><li>canvas有默认宽和高（300*150），默认颜色黑色，黑色比较浅；</li><li>定义canvas的宽高</li></ol><p>标签属性直接定义width+height，有点类似于img图片标签定义，省略了px单位；</p><p>不能在css里面定义width+height，会造成坐标点的拉伸和变形，绘制图像造成错误变形；</p><ol start="5"><li>img有alt属性，canvas的alt属性写在标签内部（标签内容），当canvas不被支持才显示内容；</li><li>canvas兼容IE9+，使用canvas就不能考虑IE8-用户；</li><li>canvas的坐标系问题：符合正常开发者的页面浏览顺序，从左到右为x正方向，从上到下y为正方向；</li><li>如果需要canvas居中，需要转块在margin:0 auto;</li></ol><p>设置canvas的宽高</p><p>使用canvas.width设置，不要使用getContext之后的变量设置；</p><div class="language-js"><pre><code><span class="token keyword">var</span> canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.canvas&#39;</span><span class="token punctuation">)</span>\n<span class="token keyword">var</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>\ncanvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span>\n</code></pre></div><p>温馨提示：</p><p>在vscode编辑器中，只要是通过id方式获取的canvas都没有自动补全功能；</p><h2 id="二、绘制矩形"><a class="header-anchor" href="#二、绘制矩形" aria-hidden="true">#</a> 二、绘制矩形</h2><ol><li>直接绘制</li></ol><p>（1）绘制实心矩形：cas.fillRect(x,y,w,h)；</p><p>​ x,y 起始坐标轴；w,h 绘制宽高；</p><p>（2）绘制空心矩形：cas.strokeRect(x,y,w,h);</p><ol start="2"><li>路径绘制</li></ol><p>（1）开始路径：cas.beginPath();</p><p>（2）绘制：cas.rect(x,y,w,h);</p><p>（3）闭合路径：cas.closePath();</p><p>（4）绘制：cas.fill()或cas.stroke()；</p><ol start="3"><li>清除画布：cas.clearRect(x,y,w,h);</li></ol><p>x,y：起始位置，w,h：要清除的内容宽高；</p><h2 id="三、描边-填充同时存在"><a class="header-anchor" href="#三、描边-填充同时存在" aria-hidden="true">#</a> 三、描边+填充同时存在</h2><ol><li><p>cas.fillStyle=&#39;red&#39; 填充颜色</p></li><li><p>cas.strokeStyle=&#39;green&#39; 线条颜色</p></li><li><p>cas.lineWidth=10 线条的两边各5px</p><p>注意： 所有的样式声明和属性设置都必须要写在绘制前面；（重点）</p></li></ol><p>继承：以上属性都可以继承，后续的可以不用再写，如有需要改变可以写;</p><p>权重：越靠后的绘制内容，就越靠上层显示；</p><h2 id="四、绘制三角形"><a class="header-anchor" href="#四、绘制三角形" aria-hidden="true">#</a> 四、绘制三角形</h2><p>只能通过路径绘制三角形，闭合路径首尾端点自动实现闭合；</p><ol><li>起始端点：cas.moveTo(x,y)有且仅有一个起始端点；</li><li>连接端点：cas.lineTo(x,y)可以有多个；</li></ol><p>最后一条边可以使用闭合路径，会自动连接，如果不使用闭合路劲，会有bug</p><ol start="3"><li>闭合连接：cas.closePath()；</li></ol><p>如果没有闭合路径，加此属性也能实现效果(第三条边)，但是有个bug，它不具备闭合路径，绘制三角形时会发生缺角；</p><h2 id="五、绘制圆形"><a class="header-anchor" href="#五、绘制圆形" aria-hidden="true">#</a> 五、绘制圆形</h2><ol><li><p>也是只能通过路径绘制，以圆规的原理画圆</p></li><li><p>因为y轴由向下为正，所以坐标系的象限也改变了，为顺时针；</p></li><li><p>cas.arc(x,y,r,angleStart,angleEnd,false);</p><p>x,y表示圆心的坐标，r绘制半径；</p><p>angleStart,angleEnd为起始弧度和终止弧度</p><p>false：是否逆时针，默认为false；</p></li><li><p>绘制半径根据Math.PI来计算，0的位置在右边，画圆：</p><p>cas.arc(250,250,250,0,Math.PI*2);</p></li></ol><p>圆形的坐标系：</p><p><img src="https://notecdn.heny.vip/images/canvas-01.png" alt="image"></p><h2 id="六、碰撞的小球"><a class="header-anchor" href="#六、碰撞的小球" aria-hidden="true">#</a> 六、碰撞的小球</h2><ol><li>创建getContext(&#39;2d&#39;)之后，返回一个对象，里面有canvas对象，里面有各种属性；</li><li>常用的canvas对象属性有：cas.canvas.width 画布的宽，cas.canvas.height 画布的高</li><li>判断边界：和</li></ol><p>画布的宽高减去小球的半径，为小球的正方向边缘；</p><p>当x，y值小于小球的半径时，为负方向边缘；</p><h2 id="七、其他绘制"><a class="header-anchor" href="#七、其他绘制" aria-hidden="true">#</a> 七、其他绘制</h2><ol><li>lineCap（线帽）</li></ol><p>（1）控制线条末端的形状</p><p>（2）属性值：butt(默认没有)、round(圆形)、square(方形)</p><p>（3）示例：cas.lineCap=&#39;butt&#39;</p><p>（4）圆形线帽：以lineWidth的一半为两头的半径；</p><p>画线不需要闭合；</p><ol start="2"><li>lineJoin（连接）</li></ol><p>（1）线条的连接方式，控制线条相交的方式是</p><p>（2）属性值：圆交(round)、斜交(bevel)、斜接(mitter)</p><p>（3）示例：cas.lineJoin=&#39;mitter&#39;</p><h2 id="八、绘制阴影"><a class="header-anchor" href="#八、绘制阴影" aria-hidden="true">#</a> 八、绘制阴影</h2><ol><li>cas.shadowOffsetX = num; //阴影在x轴的偏移量</li><li>cas.shadowOffsetY = num; //阴影在y轴的偏移量</li><li>cas.shadowColor = &#39;red&#39;; //阴影的颜色</li><li>cas.shadowBlur = num; //阴影模糊程度；</li></ol><h2 id="九、裁剪"><a class="header-anchor" href="#九、裁剪" aria-hidden="true">#</a> 九、裁剪</h2><ol><li>裁剪之后只能在当前区域显示</li><li>cas.clip()表示裁剪区域，分三个步骤：</li></ol><p>（1）绘制裁剪区域</p><p>（2）cas.clip();</p><p>（3）再绘制其他图形，查看裁剪效果；</p><h2 id="十、绘制渐变"><a class="header-anchor" href="#十、绘制渐变" aria-hidden="true">#</a> 十、绘制渐变</h2><ol><li>线性渐变</li></ol><p>（1）创建一个线性渐变：cas.createLinearGradient(x1,y1,x2,y2);</p><pre><code>      x1,y1：渐变的起始点，x2,y2：渐变的终点；\n</code></pre><p>（2）线性渐变是根据一条线来画的，里面的每一个分段代表一个断点；</p><p>（3）添加断点：变量.addColorStop(值,颜色)；添加一个断点，可以无限添加；</p><pre><code>     断点的第一个参数不能超过1；\n\n     值可以是百分比，也可以是0-1的小数；\n</code></pre><p>（3）使用：添加出来的就相当于一个颜色，给对应的fillStyle赋值就可以了；</p><ol start="2"><li>径向渐变</li></ol><p>（1）创建径向渐变：cas.createRadialGradient(x1,y1,r1,x2,y2,r2);</p><p>x1,y1,r1 径向小圆的圆心坐标+半径；</p><p>x2,y2,r2 径向大圆的圆心坐标+半径；</p><p>（2）相当于水滴一环一环的改变；</p><h2 id="十一、绘制文本"><a class="header-anchor" href="#十一、绘制文本" aria-hidden="true">#</a> 十一、绘制文本</h2><ol><li>cas.fillText(字符串,x,y,[options]) 绘制实心文字（使用最多）</li><li>cas.strokeText(字符串,x,y,[options]) 绘制空心文字</li><li>参数：第一个为需要写入的字符串，x轴y轴坐标，第三个为可选的最大像素宽度</li><li>属性：</li></ol><p>（1）cas.font=&#39;italic bold 30px/50px 楷体；字号和字体不能省略；</p><p>（2）cas.textAlign=&#39;center&#39;; 可选：start、end、center；（不建议使用left,right）；相对于起始点对齐；</p><p>（3）cas.textBaseline = &#39;middle&#39;; 可选：top、middle、bottom；</p><p>textBaseline可选的值：&quot;top&quot; 、 &quot;hanging&quot; 、 &quot;middle&quot; 、 &quot;alphabetic&quot; 、&quot;ideographic&quot; 和 &quot;bottom&quot; 。</p><p>从上往下走;</p><h2 id="十二、cos、sin"><a class="header-anchor" href="#十二、cos、sin" aria-hidden="true">#</a> 十二、cos、sin</h2><ol><li>对应的三角函数，用于计算x轴和y轴的；</li><li>Math.cos(角度) = 邻边/斜边</li><li>Math.sin(角度) = 对边/斜边</li><li>Math.PI：不带小括号，为180度；</li></ol><h2 id="十三、改变圆心点"><a class="header-anchor" href="#十三、改变圆心点" aria-hidden="true">#</a> 十三、改变圆心点</h2><ol><li><p>平移画布中心点：<code>cas.translate(x,y)</code>;</p></li><li><p>旋转画布：<code>cas.rotate()</code>;</p><p>js不接受deg，仅支持Math.PI</p></li><li><p>保存当前状态：<code>cas.save()</code>;</p></li><li><p>恢复保存的状态：<code>cas.restore()</code>;</p></li></ol><p>如果画布有旋转或平移，则需要保存和恢复一下，否则第二次将会发生变化；</p><h2 id="十四、图像"><a class="header-anchor" href="#十四、图像" aria-hidden="true">#</a> 十四、图像</h2><ol><li>绘制图像与绘制重复图像</li></ol><div class="language-js"><pre><code><span class="token keyword">var</span> img <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Image</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    img<span class="token punctuation">.</span>src <span class="token operator">=</span> <span class="token string">&#39;./1.png&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><ol start="2"><li><p>因为img的加载速度是滞缓与js的运行速度的；所以需要图片加载完成才能绘制 img.onload =function(){};</p></li><li><p>绘制图像</p></li></ol><p>（1） 3参数法：<code>cas.drawImage(img,x,y)</code></p><p>​ img 表示当前的图片</p><p>​ x,y表示绘制图像的起点；</p><p>（2）5参数法（带宽高）：<code>cas.drawImage(img,x,y,w,h)</code>；</p><p>w,h 表示绘制的图像宽高；</p><p>（3）9参数法（剪裁加绘制）：<code>cas.drawImage(img,x1,y1,w1,h1,x,y,w,h)</code></p><p>​ img表示原始图片</p><p>​ x1,y1表示剪裁图像的起始位置，</p><p>​ w1,h1表示剪裁图像的宽高</p><p>​ x,y表示剪裁后的图像的绘制位置</p><p>​ w,h 表示剪裁后的图像的显示宽高；</p><p>​ 截取位置可以通过ps来获取定点；尺寸--标注，获取起始点，再获取宽高；</p><h3 id="绘制重复图像"><a class="header-anchor" href="#绘制重复图像" aria-hidden="true">#</a> 绘制重复图像</h3><p>（1）创建</p><div class="language-js"><pre><code><span class="token keyword">var</span> pattern <span class="token operator">=</span>cas<span class="token punctuation">.</span><span class="token function">createPattern</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span><span class="token string">&#39;repeat&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>（2）作为颜色填充进矩形;</p><div class="language-js"><pre><code>cas<span class="token punctuation">.</span>fillStyle <span class="token operator">=</span> pattern<span class="token punctuation">;</span>\ncas<span class="token punctuation">.</span><span class="token function">fillRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>如果需要描边，可以赋值给strokeStyle=&#39;&#39;，并设置lineWith值;</p><h3 id="下载绘制的canvas图片"><a class="header-anchor" href="#下载绘制的canvas图片" aria-hidden="true">#</a> 下载绘制的canvas图片</h3><p>（1）获取图片的base64地址</p><div class="language-js"><pre><code>canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><p>（2）将图片转换成file文件</p><div class="language-js"><pre><code><span class="token comment">// canvas.toBlob(callback, [type=&#39;image/png&#39;], [encoderOptions])</span>\n\ncanvas<span class="token punctuation">.</span><span class="token function">toBlob</span><span class="token punctuation">(</span><span class="token parameter">blob</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    <span class="token keyword">let</span> newFile <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> <span class="token string">&#39;new-img&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> blob<span class="token punctuation">.</span>type<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;image/jpeg&#39;</span><span class="token punctuation">,</span> <span class="token number">0.7</span><span class="token punctuation">)</span>\n<span class="token comment">// 第三个为压缩质量, 当type类型为jpeg或webp时可用;</span>\n</code></pre></div><h2 id="十五、canvas录制视频"><a class="header-anchor" href="#十五、canvas录制视频" aria-hidden="true">#</a> 十五、canvas录制视频</h2><div class="language-js"><pre><code><span class="token comment">// 捕获当前流</span>\n<span class="token keyword">const</span> stream <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">captureStrem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 创建MediaRecorder录制对象</span>\n<span class="token keyword">const</span> recorder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MediaRecorder</span><span class="token punctuation">(</span>stream<span class="token punctuation">,</span> <span class="token punctuation">{</span>mimeType<span class="token operator">:</span> <span class="token string">&#39;video/webm&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\nrecorder<span class="token punctuation">.</span><span class="token function-variable function">ondataavailable</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> event<span class="token punctuation">.</span>data<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>data<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 当停止录制时获取当前video的url</span>\nrecorder<span class="token punctuation">.</span><span class="token function-variable function">onstop</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> url <span class="token operator">=</span> <span class="token constant">URL</span><span class="token punctuation">.</span><span class="token function">createObjectURL</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Blob</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>type<span class="token operator">:</span> <span class="token string">&#39;video/webm&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#video&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>src <span class="token operator">=</span> url\n<span class="token punctuation">}</span>\n\n<span class="token comment">// 开始录制</span>\nrecorder<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 录制6秒视频</span>\n<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    recorder<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">6000</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="十六、截图canvas实例"><a class="header-anchor" href="#十六、截图canvas实例" aria-hidden="true">#</a> 十六、截图canvas实例</h2><div class="language-js"><pre><code><span class="token keyword">const</span> ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">&#39;2d&#39;</span><span class="token punctuation">)</span>\nctx<span class="token punctuation">.</span><span class="token function">clearRect</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>video<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> url <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">&#39;image/png&#39;</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="画时钟"><a class="header-anchor" href="#画时钟" aria-hidden="true">#</a> 画时钟</h2><p>大致分为两步</p><p>（1）绘制手表 Clock()</p><p>（2）动起来 setInterval()</p><p>1.绘制手表</p><p>1.1绘制表盘</p><p>（1）每次绘制时，建议清除一下画布；</p><p>1.1.1画圆</p><p>1.1.2渐变</p><p>给圆填充颜色；</p><p>1.2绘制刻度</p><p>（1）刻度需要平移画布到中心点，</p><p>（2）可以通过旋转</p><p>1.2.1绘制时针刻度</p><p>1.2.2绘制分针刻度</p><p>1.3绘制指针</p><p>1.3.0获取世界时间</p><p>1.3.1绘制时针</p><p>（1）时针跟着分针和秒针一起动的；</p><p>（2）获取正确的时针，应该是需要加上分针和秒针；</p><p>（3）hours = now.getHours+minutes/60+second/60/60；</p><p>是将分钟和秒钟转化为小时;</p><p>（4）时针对应的度数是30度；</p><p>1.3.2绘制分针</p><p>1.3.3绘制秒针</p><p>1.3.4绘制表钉</p><p>1.4绘制文字</p><p>1.4.1绘制商标 1.4.2绘制十二时</p><p>（1）需要根据Math.sin()和Math.cos()，计算出x和y的值;</p><p>x = Math.cos(角度)*半径</p><p>y = Math.sin(角度)*半径</p>',146);t.render=function(s,p,t,o,c,l){return a(),n("div",null,[e])};export default t;export{p as __pageData};
