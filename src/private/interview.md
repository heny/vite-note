#  面试复习
## html
### 图片下面空白距离清除方法
1. 图片转块
2. 设置 vertical-align
3. 父元素设置 font-size 0

### 清除浮动方法
1. 父元素加高度
2. 浮动元素加 overflow 属性
3. 加一个空的块， 添加样式 clear: both
4. 给父元素加浮动

### BFC 的特性
1. 内部的标签会在垂直方向一个接一个的放置
2. 垂直方向上的距离由 margin 决定，同一个 bfc 的两个相邻标签的 margin 会发生重叠
3. 每个标签的左外边距与包含块的左边界相接触（从左至右），即使浮动标签也是如此
4. bfc 区域的不会与 float 标签区域重叠
5. 计算 bfc 的高度时，浮动子标签也参与计算
6. bfc 就是一个隔离的独立容器，容器里面的子标签不会影响到外面的标签

### 垂直居中方法
1. 绝对定位 + 相对定位，top 50%, left 50%, 之后 margin left/top 各种一半
2. 绝对定位 + 相对定位 之后四个方位 0，然后 margin auto
3. 利用 flex 布局
4. 利用 grid 布局

### 回流和重绘
回流：布局或属性需要改变就叫回流
重绘：当节点需要更改外观而不会影响布局的，叫作重绘
回流一定重绘，重绘不一定回流
回流：
  * 改变 window 大小
  * 改变字体
  * 添加或删除样式
  * 文字改变
  * 定位或浮动
  * 盒模型

减少重绘与回流
  * 使用 translate 替换 top
  * 使用 visibility 替换 display: none

## js
### 数据类型各类
基本数据类型：undefined、null、boolean、string、number、symbol、bigint
基本包装类型：string、number、boolean
复杂数据类型：array、object、function、math、regexp

### 检测数据类型
instanceof
Object.prototype.toString.call
typeof
constructor
`__proto__`

### new 操作符
1. 创建了一个空对象
2. 将构造函数的作用域赋给新对象
3. 执行构造函数中的代码
4. 返回新对象
```js
function create() {
  var obj = new Object();
  var fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  var result = fn.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

// or
function create(fn, ...rest) {
  const obj = new Object();
  obj.__proto__ = fn.prototype;
  const result = fn.apply(obj, rest)
  return result instanceof Object ? result : obj;
}
```

### 斐波那契
```js
function fn(n) {
  if(n === 1 || n === 2 ) return 1;
  return fn(n - 1) + fn(n - 2)
}

// or
function fn(n, start=1, end=1) {
  if(n === 1 || n ===2) return end;
  return fn(n-1, end, start+end)
}
```

### 深拷贝

```js
function deepCopy( obj ){
    if( Object.prototype.toString.call( obj ) === '[object Object]' ){
        var result = {}
    }else if( Object.prototype.toString.call( obj ) === '[object Array]' ){
        var result = []
    }  //判断数据类型类型  如果是数组则初始一个  []  如果是一个 Object 则初始一个 {}

    //浅拷贝，但是+ 递归思想，就实现了深拷贝
    for( var attr in obj ){
        if( typeof obj[attr] == 'object'){      //判断传入的键值是否是数组或对象
            result[attr] = deepCopy( obj[attr] )  //如果是对象则再调用一次函数; 实现递归;
        }else{
            result[attr] = obj[attr]  //将每一天数据输入进对象或数组;
        }
    }
    return result
}
```



### 数组常用方法

改变原数组：push、pop、shift、unshift、splice、sort、reverse
其他方法：concat、join、indexOf、includes、flat
**常用迭代方法**：every、some、forEach、map、filter、reduce
转变真数组：Array.from、[].slice.call(arguments)、Array.prototype.slice.call(arguments)


### 继承
1. 原型链接继承
```js
B.prototype = new A()
```

2. 构造函数式继承
```js
function B() { A.apply(this, arguments) }
```

3. 组合式继承
```js
function B() { A.apply(this, arguments) }
B.prototype = new A()
B.prototype.constructor = B
```

4. 原型式继承
```js
function Create(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
var obj = {name: 'hh'}
var obj2 = Create(obj)
```

5. 寄生式继承
```js
function copyObj(obj) {
  var clone = Object.create(obj)
  clone.say = function(){console.log('hello')}
  return clone
}
```

6. 寄生式组合式继承
```js
function Parent() {Son.apply(this, arguments)}
Parent.prototype = Object.create(Son.prototype)
Parent.prototype.constructor = Parent;
```

7. extends

### 闭包
闭包是在函数创建的时候，让函数打包带走的根据函数内的外部引用来过滤作用域剩下的链，它是在函数创建时生成的作用域链的子集，是打包的外部环境，eval 无法分析内容，一般是把整个作用域打包（尽量不要使用 eval，避免保存过多的无用变量）；作用域链只会包含外部函数变量，不包含本身

闭包是在返回一个函数时，为了把环境保存下来，创建的一个快照，对作用域链做了 tree shking，只留下必要的闭包链，保存在堆里，作为对象的 `[[scope]]` 属性，让函数不管走到哪，都可以随时随地的访问外部环境，在执行这个函数时，会利用这个快照，恢复作用域链



### 垃圾回收机制
标记清除：声名时被引用，之后使用完标记清除
引用清除：使用记数的方法，如果这个数没有加过，就清除

### event loop
event loop 是浏览器或 node 的一种解决 javascript 单线程运行不会阻塞的一种机制，也是异步的原理
由于 js 是单线程的，一些高耗时操作就带来了进程阻塞的问题，为了解决这个问题，js 有两种任务执行方式，分为同步模式和异步模式
在异步模式下，创建异步任务主要分为宏任务和微任务
宏任务：script、setTimeout、setInterval、setImmediate
微任务：promise、process.nextTick、mutationObserver

event loop 执行顺序如下：
1. 首先执行同步代码，这属于宏任务
1. 遇到微任务时将微任务放进事件队列
2. 当执行完所有同步代码后，执行栈为空，查询是否有事件队列需要执行
3. 执行所有微任务
4. 当执行完所有微任务后，如有必要会渲染页面
5. 然后开始下一轮 event loop，执行宏任务中的异步代码，也就是 setTimeout 中的回调函数

### 防抖函数
```js
function debounce(func, wait=500) {
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}
```

### 节流函数
```js
function throttle(fn, wait) {
  var pre = Date.now()
  return function(...args) {
    var now = Date.now()
    if(now - pre >= wait) {
      fn.apply(this, args)
      pre = Date.now();
    }
  }
}
```

### 跨域
浏览器中的同源策略指的是：协议、域名、端口号相同，如果不同就会产生跨域
浏览器为了给用户提供一个安全的浏览环境，因此禁止跨域
页面中有几个标签的引入是不受同源策略影响的，如 img、script、link

实现跨域：
jsonp
cors
webpack
nginx
postMessage
document.domain
window.name
location.hash
websocket
也可以通过修改 hosts 文件解决当前跨域

### 从 url 输入到页面展现到底发生了什么
1. dns 解析，将域名解析成 ip 地址
2. tcp 连接，tcp 进行三次握手
3. 浏览器发送 http 请求
4. 服务器处理请求并返回 http 报文
5. 浏览器解析渲染页面
   1. 解析 html，生成 dom 树，解析 css，生成 cssom 树
   1. 执行 javascript 代码，包括内联代码和外联代码
   2. 将 dom 树和 cssom 树进行结合，生成渲染树
   3. 根据生成的渲染树，进行回流，得到节点的几何信息
   4. 根据几何信息，得到节点的绝对像素
   5. 将像素发给 GPU，展示在页面上
   
6. .断开连接，tcp 四次挥手

### 前端常见攻击方式
* XSS 攻击  ---- 跨站脚本攻击，向页面中插入恶意脚本执行
* CSRF 攻击  ---  跨站请求伪造，冒充用户发送请求
* Sql 注入  ---- 在用户输入框输入 sql 命令进行攻击
* html 脚本注入 

### 网站优化方案
* 合并、压缩、混淆 html/css/js 文件
* nginx 开启 gzip 压缩
* 静态资源使用 cdn 地址
* 图标做 base64 处理
* 样式表放首部、js 放尾部
* 设置缓存（强缓存和协商缓存，提高加载速度）
* link 或者 src 添加 rel 属性，设置 prefetch 或 preload 可预加载
* spa 项目通过 import 或者 require 做路由按需加载
* 服务端渲染 ssr，加快首屏渲染
* 页面使用骨架屏
* 图片使用懒加载

### 对象遍历的方法
* 使用 for..in
* 使用 Object.keys
* 使用 Object.enteries



###  缓存

https://juejin.cn/post/7127194919235485733

缓存分为 memory cache 和 disk cache，内存缓存和硬盘缓存
会先读取内存，再读硬盘，几乎所有的网络请求都会被浏览器放进 memory cache，关闭浏览器就会失效，之后读取 disk cache

disk cache 又分为强制缓存和协商缓存（也叫对比缓存）
强制缓存是指客户端请求后，会先访问缓存数据库看缓存是否存在，如果存在直接返回，不存在则请求服务器，响应后再缓存
强制缓存直接减少请求次数，提升最大的缓存策略，可以造成强制缓存的字段是 cache-control 和 expires
cache-control 可以设置的字段：max-age、no-cache、no-store、public、private



当服务器要请求资源时
1. 调用 service woker 的 fetch 事件响应
2. 查看 memory cache
3. 查看 disk cache
   * 如果有强制缓存未失效，则使用，不请求服务器，这里状态码全是 200
   * 如果有强制缓存已失效，则查看协商缓存，比较后确定 304 还是 200




### 实现一个 call
```js
Function.prototype.myCall = function(context, ...args) {
  context = Object(context) || window;
  context.fn = this;
  let result = context.fn(...args)
  delete context.fn;
  return result;
}
```

### 实现一个 apply
```js
Function.prototype.myApply = function(context, args) {
  context = Object(context) || window;
  context.fn = this;
  let result = args ? context.fn(...args) : context.fn()
  delete context.fn;
  return result;
}
```

### 实现一个 bind
```js
Function.prototype.myBind = function(context, ...args) {
  var that = this
  return function F() {
    if(this instanceof F) return new that(...args, ...arguments)
    return that.apply(context, args.concat(...arguments))
  }
}
```

### 并发渲染控制

```js
function limitRequest(urls, limit=2){
    let len = urls.length;
    while(len > 0) {
        let list = urls.splice(0, limit)
        len -= limit;
        Promise.all(list.map(Promise.resolve)).then(res => {
            console.log(res, 'res')
        })
    }
}
```

### es6 常用方法

* let、const
* 解构赋值
* 箭头函数
* ...扩展运算符
* 异步处理 Promise、async、generator
* 问号链，双问号
* symbol、Map、Set

### Promise
实例方法：
* then、catch、finally
静态方法：
resolve、reject、all、race、try


## Vue 和 React 的区别
1. 监听数据变化实现的原理不同    
     vue 通过 getter/setter 劫持，react 通过比较引用 
2. 数据流不同    
     vue 通过 v-model，react 通过 setState/onChange 
3. HOC 和 mixin   
     vue 使用的 mixin 方式，react 使用 HOC 的方式
4. 组件通信的区别    
     vue 使用 provide/inject 的方式隔代传值，react 使用 context 进行隔代 
 5. 模板渲染方式不同    
      react 使用的是 jsx，vue 使用的是拓展的 html 语法 
  6. vuex 和 redux 不同    
      vue 使用 dispatch 和 commit 提交更新，this.$store 直接获取，可以通过直接修改 state 值 
      react 使用 dispatch  action 的方式，需要使用 connect 连接组件才能获取，需要返回所有状态，不能直接返回




## Vue
### vue 组件传值
props/$emit
$children/$ parent
ref
$attrs/$ listenrs
eventBus
vuex
localStorage/sessionStorage
inject/provide

### vue 生命周期
beforeCreated
created
beforeMounted
mounted
beforeUpdate
updated
beforeDestory
destroyed
actived
deactived

### 路由守卫
全局守卫
beforeEach
afterEach

路由守卫
beforeEnter

组件守卫
beforeRouteEnter
beforeRouteUpdate
beforeRouteLeave
动态路由管理权限渲染路由：addRoutes

### 路由实现方式：
hash 模式：利用 hashChange 监听 url 的变化
history 模式  利用 h5 的 history.pushState 和 history.replaceState 特性；

### Vuex
state
mutations
actions
getters
model

Vue.extend 进行插件开发

### 设置 key 和不设置 key 的区别
不设 key，新旧对象进行头尾两端的相互比较
设 key，除了头尾两端之外，还会从 key 生成的对象 index 进行查找匹配，比不设 key 更高效

### Vue 逻辑复用方法
添加全局方法或属性，直接挂载到 vue 实例上
directive 自定义指令
mixin  混入
Vue.component 注册组件



