# 七牛云存储

## 注册使用

1. 注册地址：[七牛云](https://portal.qiniu.com/signup)
2. 进入控制台-->进入对象储存
3. 空间管理-->新建空间
4. 建议好空间就可以进入域名，进行添加域名了
5. 添加域名之后记得在域名平台进行解析域名提供的CNAME了
6. 之后就可以直接上传图片到七牛云了

## 文件管理

1. 进入空间管理，点击上传文件，之后使用绑定的域名

![image-20200410130849552](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_03.png)

2. 之后复制文件名，添加前缀为你的域名地址就可以直接访问该图片了（需要对空间设置**公共空间**）

   如：`https://notecdn.hrhe.cn/images/logo.png`

![image](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_09.png)

## 图片裁剪

<img src="https://notecdn.hrhe.cn/images/七牛云cdn加速图片_04.png" alt="image-20200410133310805" style="zoom:25%;" />

![image-20200410133340019](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_05.png)

![image-20200410133353668](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_06.png)

![image-20200410133411955](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_07.png)

![image-20200410133430938](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_08.png)

之后直接指定宽高即可，处理接口拼接在图片地址后面，就可以直接访问了，如下：

`https://notecdn.hrhe.cn/logo.png?imageView2/1/w/1920/h/1080/q/75`

## 获取密钥

1. 进入密钥管理，就可以获取密钥了

![image-20200410130518239](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_01.png)

![image-20200410130627490](https://notecdn.hrhe.cn/images/七牛云cdn加速图片_02.png)



## Typora上传

1. 上传服务选PicGo，然后下载PicGo

![image](https://s21.ax1x.com/2024/08/12/pApMNSx.png)

2. PicGo配置七牛云

   ![image](https://s21.ax1x.com/2024/08/12/pApM0mD.png)

   ![image](https://s21.ax1x.com/2024/08/12/pApMgpt.png)

3. 参数介绍：

   * 获取access&secre：https://portal.qiniu.com/developer/user/key
   * 设定Bucket：空间管理名字
   * 设定访问网站：自己的cdn网址
   * 设定存储区域：
     * 首先在`空间概览`找到存储区域
     * 访问文档查找代码：https://developer.qiniu.com/kodo/1671/region-endpoint-fq

4. picgo推荐插件

   * compress 压缩图片

   * folder-name 上传时使用与本地相同的文件路径

   

5. 配置完之后验证

   ![image](https://s21.ax1x.com/2024/08/12/pApQruT.png)




## 其他公共图床地址

* https://imgse.com/
* https://www.imgurl.org/
* https://cdnjson.com/

