# node-05 开放静态、RESTful
## 一、扩展node的路由
1. `res.statusCode = 200`，    设置状态码
2. `res.statusMessage = 'ok'`；  设置状态描述
3. `res.setHeader('content-type','text/html')`； 

    告诉浏览器接收的内容是什么类型的；

    还可以设置响应里面的内容；

    text/plain  纯文本；

上面三种都是res.writeHead的分开写法；



## 二、扩展express的路由

1. `res.json()`；输出json对象；
2. `res.send(JSON.stringify())`；输入json字符串；
3. `res.set()`；设置浏览器文件类型；
4. `res.status()`；设置状态码；可以直接链式调用send；



## 三、静态资源托管

1. `app.use([path],express.static(path))`；

   第二个写要开放的目录，建议写绝对路径，可以自动查询index.html；

   第一个可选，可以写一个路由，访问后面的目录需要带上这个路由；

2. `app.use((req,res)=>{})`；        等同于`app.all('*')`；



## 五、RESTful API：

1. 传统设计路由的形式:
       形容词+名词

   ```
   get  /addbook
   get  /book
   get  /doaddbook
   get  /dodelbook
   get  /doupdatebook
   ```

   RESTful: 这个东西就是去描述 路由应该如何设计

2. RESTful这个标准 把一些路由当中的形容词给去了。用 method请求方法表示

   GET：读取（Read）

   ```
   get  /book/get
   ```

     POST：新建（Create）

   ```
   post /book/post
   ```

     PUT：更新（Update）

   ```
   put  /book/put
   ```

     PATCH：更新（Update），通常是部分更新

   ```
   patch /book
   ```

     DELETE：删除（Delete）

   ```
   delete /book
          /book?id=1
          /book/1
   ```

   

## 六、中间件

>  每一个中间都有自己的一些含义

在express所有的回调函数，都可以称为中间件，中间件可以理解为工厂当中的车间。

- 内置中间件

- 第三方的

- 自定义中间件

    其实我们定义的路由都可是中间件

    app.get('/book')  app.post('/user')... 都是中间件



- 使用中间件特定的语法

    ```js
app.use((req, res, next) => {
        // 这里可以做一些处理
        next() // 必须调用next函数，否则不会往下面走了
    })
    ```
    
    使用中间件和定义路由很相像，只要匹配成功并且send了，就不会再往下匹配 。




