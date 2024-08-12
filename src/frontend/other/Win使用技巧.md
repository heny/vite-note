# Win使用技巧

## win11修改文件右键菜单

**为什么要修改右键**

win11和win10不同，win11对右键做了更改，好多选项需要点击`显示更多选项`，经常在解压文件的时候需要展开选择，更改之后会将更多选项平铺，可参考图二

![image-20240812094842356](https://notecdn.hrhe.cn/image-20240812094842356.png)

![image-20240812095118389](.\images\Win使用技巧\image-20240812095118389.png)

**安装方法**

1. 右键win图标，选择终端管理员

![image-20240812095223860](.\images\Win使用技巧\image-20240812095223860.png)

2. 输入以下命令即可

   ```bash
   # 安装
   winget install nilesoft.shell
   # 卸载
   winget uninstall nilesoft.shell
   ```

   
