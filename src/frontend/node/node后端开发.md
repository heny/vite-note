# node后端开发

## express

> 最受欢迎的node框架之一，是最小且灵活的Node Web应用程序框架，npm量下载最高，满足中等需求的完美框架

### 示例

```js
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => console.log("Listening on", port));
```



## koa

> 是由express背后的团队设计的一个新的web框架，API更小，更具表现力和更强大的基础，利用异步函数大大提高错误处理能力，kao提供了一套优雅的写法，使编写服务器变得快速有趣

### 示例

koa必须单独下载router才能使用路由能力

```js
import Koa from "koa";
import Router from "@koa/router";

const app = new Koa();
const router = new Router();

router.get("/", (ctx, next) => {
  ctx.body = "Hello World!";
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);
```



## Hapi

> 最初是为了处理沃尔玛的黑色星期五开发的，可以满足企业级后端需求的可靠选择，构建功能强大，以最小的开销和完整的功能

### 示例

```js
import Hapi from "@hapi/hapi";
const server = Hapi.server({
  port: 3000,
  host: "localhost",
});

server.route({
  method: "GET",
  path: "/",
  handler: (request, h) => {
    return "Hello World!";
  },
});

server.start();
```



## fastify

> 具有更低的基础设施成本，更好的负载响应能力，高度专注于以最少的开销和强大的插件，是最快的web框架之一

### 示例

```js
import Fastify from "fastify";
const fastify = Fastify({ logger: false });

fastify.get("/", (request, reply) => {
  return "Hello world!";
});

fastify.listen({ port: 3000 });
```



## 总结

> fastify是最小的延迟和RPS最多的，express是最慢的，hapi和koa比fastify慢，但差异并不明显

花费时间对比

下图为200w个请求执行，对25、100、300个并发连接重复测试，fastify是最快的

![image-20240816101915209](https://notecdn.hrhe.cn/images/node后端开发/image-20240816101915209.png)



## node调试

1. 启动添加--inspect 命令 `node --inspect app.js`

2. 访问[chrome://inspect](chrome://inspect)

   ![image-20240816135937009](https://notecdn.hrhe.cn/images/node后端开发/image-20240816135937009.png)

3. 找到sources下的文件，手动打断点

   ![image-20240816140113916](https://notecdn.hrhe.cn/images/node后端开发/image-20240816140113916.png)



## 文章参考

* https://medium.com/deno-the-complete-reference/express-vs-fastify-vs-hapi-vs-koa-hello-world-performance-comparison-dd8cd6866bdd

