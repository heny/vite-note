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

   

## 安装zsh

> 参考链接：
>
> * https://i.lckiss.com/?p=6268
> * https://gist.github.com/fworks/af4c896c9de47d827d4caa6fd7154b6b

1. 下载zsh https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64

   进入之后点击File即可下载

2. 使用7zip压缩工具，将其解压，直到看到如下文件：

   ![image-20240904151224119](https://notecdn.hrhe.cn/images/Win使用技巧/image-20240904151224119.png)

   将所有的文件都复制到 git 的根目录

3. 随便找到一个地方，打开git bash终端，并输入zsh，回车，会看到如下

   ![image-20240904151404728](https://notecdn.hrhe.cn/images/Win使用技巧/image-20240904151404728.png)

4. 输入以下命令安装oh my zsh

   ```bash
   sh -c "$(curl -fsSL https://gitee.com/pocmon/ohmyzsh/raw/master/tools/install.sh)"
   ```

   如果下载不下来，可以直接访问后面的链接，并新建一个install.sh，然后将所有的内容复制进install.sh，之后输`sh install.sh` 安装即可

5. 编辑`vim ~/.bashrc`

   ```bash
   # Launch Zsh
   if [ -t 1 ]; then
   exec zsh
   fi
   ```

   这步会在打开git bash时自动打开zsh

### 配置插件

> 需要安装完oh my zsh

1. 进入 `cd ~/.oh-my-zsh/custom/plugin`

2. 克隆以下两个仓库到当前目录

   ```bash
   # 自动补齐
   git clone https://github.com/zsh-users/zsh-autosuggestions
   # 高亮显示命令
   git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
   ```

3. 编辑配置 `vim ~/.zshrc`

   找到plugins的部分，改成如下：

   ```bash
   plugins=(
           git
           zsh-autosuggestions
           zsh-syntax-highlighting
   )
   ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=cyan'
   ```

4. 保存之后执行：`source ~/.zshrc`

