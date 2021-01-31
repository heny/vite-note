import{o as a,c as n,d as s}from"./app.dc9dbd0c.js";const t='{"title":"html-11 Svg简介","description":"","frontmatter":{},"headers":[{"level":2,"title":"一、Svg简介","slug":"一、svg简介"},{"level":2,"title":"二、常用的图片格式","slug":"二、常用的图片格式"},{"level":2,"title":"三、SVG引入的三种方式","slug":"三、svg引入的三种方式"},{"level":2,"title":"四、使用SVG来画图的方法","slug":"四、使用svg来画图的方法"},{"level":2,"title":"SVG 基本属性","slug":"svg-基本属性"}],"relativePath":"src\\\\frontend\\\\html5、css3\\\\html-11 Svg简介.md","lastUpdated":1612089669917}',p={},e=s('<h1 id="html-11-svg简介"><a class="header-anchor" href="#html-11-svg简介" aria-hidden="true">#</a> html-11 Svg简介</h1><h2 id="一、svg简介"><a class="header-anchor" href="#一、svg简介" aria-hidden="true">#</a> 一、Svg简介</h2><p>SVG 意为可缩放矢量图形（Scalable Vector Graphics） ，是使用 XML 来描述二维图形和绘图程序的语言</p><p>定义标准： 1. 是万维网联盟的标准。 2. 定义用于网络的基于矢量的图形。 3. 图像在放大或改变尺寸的情况下其图形质量不会有所损失。</p><p>兼容浏览器： ● IE9+</p><p>● Chrome</p><p>● Firefox</p><p>● Safari7.0+</p><h2 id="二、常用的图片格式"><a class="header-anchor" href="#二、常用的图片格式" aria-hidden="true">#</a> 二、常用的图片格式</h2><p>常用的图片格式：jpg、png、gif、webp、svg。</p><p>图片格式之间的区别：</p><p>位图：基于颜色的描述放大后会出现方块状，图片属于真彩色，图片会失真（JPG、png、gif）</p><p>矢量图：基于数学的描述，放大后不会产生锯齿状，图片放大不会失真（svg、AI）</p><h2 id="三、svg引入的三种方式"><a class="header-anchor" href="#三、svg引入的三种方式" aria-hidden="true">#</a> 三、SVG引入的三种方式</h2><p>引入方式： 1.创建一个SVG文件，之后直接使用img标签引入SVG文件地址。</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2000/svg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>2.直接在HTML标签中使用SVG标签；</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span> <span class="token attr-name">x</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">y</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>3.作为CSS背景图片。</p><h2 id="四、使用svg来画图的方法"><a class="header-anchor" href="#四、使用svg来画图的方法" aria-hidden="true">#</a> 四、使用SVG来画图的方法</h2><p>1.rect标签：用来创建一个矩形。 属性值：</p><p>x : 定义矩形的起始坐标的x轴</p><p>y：定义矩形的起始坐标的y轴</p><p>width：矩形的宽度</p><p>height：矩形的高度</p><p>rx: 圆角矩形的水平半径</p><p>ry: 圆角矩形的垂直半径</p><p><img src="https://notecdn.heny.vip/html-11_Svg%E7%AE%80%E4%BB%8B-01.png" alt="image"></p><p>2.circle:用来创建一个圆形；</p><p>属性值：</p><p>cx 圆心的x轴坐标</p><p>cy 圆心的y轴坐标</p><p>r 圆的半径</p><p>如果不定义圆心坐标，默认为（0,0）</p><p><img src="https://notecdn.heny.vip/html-11_Svg%E7%AE%80%E4%BB%8B-02.png" alt="image"></p><p>3.ellipse:用来定义椭圆；</p><p>属性值：</p><p>cx：圆心x轴坐标</p><p>cy：圆心y轴坐标</p><p>rx：水平半径</p><p>ry：垂直半径</p><p><img src="https://notecdn.heny.vip/html-11_Svg%E7%AE%80%E4%BB%8B-03.png" alt="image"></p><p>4.line：定义一条直线；</p><p>属性值：</p><p>x1：起始x轴坐标</p><p>y1：起始y轴坐标</p><p>x2：x轴的结束坐标</p><p>y2：y轴的结束坐标</p><p><img src="https://notecdn.heny.vip/html-11_Svg%E7%AE%80%E4%BB%8B-04.png" alt="image"></p><p>5.polyline:用来创建任何只有直线的形状；</p><p>属性值：</p><p>points：直线坐标点（不少于两个点）；</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polyline</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10,0 110,0 110,100 10,100 10,0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">fill</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>none<span class="token punctuation">&quot;</span></span> <span class="token attr-name">stroke</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blue<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p><img src="https://notecdn.heny.vip/html-11_Svg%E7%AE%80%E4%BB%8B-05.png" alt="image"></p><p>6.polygon：用来创建含有不少于三个边的图形；</p><p>多边形的坐标点（至少3个坐标点）</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>polygon</span> <span class="token attr-name">points</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>100,10 150,100 50,100<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p><img src="https://notecdn.heny.vip/html-11_Svg%E7%AE%80%E4%BB%8B-06.png" alt="image"></p><h2 id="svg-基本属性"><a class="header-anchor" href="#svg-基本属性" aria-hidden="true">#</a> SVG 基本属性</h2><p>fill：填充颜色</p><p>stroke：边框颜色</p><p>stroke-width：边框宽度</p><p>transform 变形旋转（参考坐标点为（0,0））</p>',63);p.render=function(s,t,p,o,l,c){return a(),n("div",null,[e])};export default p;export{t as __pageData};
