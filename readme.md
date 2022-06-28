一键扫描场所码，结合[NFC标签](https://s.click.taobao.com/s0FGLWu)快速进入场所（例如每天进单位）。

安卓适用，基于[Autox.js](http://doc.autoxjs.com/#/)。

所需工具见[文末](#下载)。

# 使用

1. 在手机端安装Autox.js（赋予需要的权限，例如“无障碍”功能等）；

2. 打开Autox.js，点击+号新建项目，填写应用名称和包名：<br>

![image-20220628164811194](https://raw.githubusercontent.com/Megre/Media/main/img/image-20220628164811194.png)

3. 进入main.js的编辑界面，将本项目中[main.js](main.js)的内容拷贝复制进去，并**将第二行改为场所码截图在你手机上的路径**：

    `var placeCodeImgPath = "/sdcard/Download/1656261417423.jpg"; // 场所码截图路径`  <br>
    

![image-20220628165203881](https://raw.githubusercontent.com/Megre/Media/main/img/image-20220628165203881.png)

4. 返回Autox.js项目，点击安卓机器人图标，生成apk：<br>

![image-20220628165401650](https://raw.githubusercontent.com/Megre/Media/main/img/image-20220628165401650.png)

5. 打包完成后安装apk（安装后授予它“后台弹出界面”权限）：<br>

![](https://raw.githubusercontent.com/Megre/Media/main/img/image-20220628165519236.png)

6. 需要扫场所码时打开“进入园区”应用即可。



# 配合NFC标签使用

![image-20220628163839273](https://raw.githubusercontent.com/Megre/Media/main/img/image-20220628163839273.png)

<center>↑ NFC 标签</center>

需要手机支持并打开NFC功能开关。

1. 使用 [NFC Tools Pro](https://www.wakdev.com/en/apps/other-apps/nfc-tools-pro-edition.html) 将应用信息写入[NFC标签](https://s.click.taobao.com/s0FGLWu)（写-添加记录-应用程序，选择“进入园区”应用）：<br> 

![image-20220628164317470](https://raw.githubusercontent.com/Megre/Media/main/img/image-20220628164317470.png)

2. 将NFC标签粘贴在方便的位置（比如驾驶位的中控面板上）；
3. 进入场所时手机靠近NFC标签进行感应。

# 下载

- Autox.js.6.1.4.apk
- NFC Tools PRO_v8.7.apk

链接: https://pan.baidu.com/s/14UUwQZp50sRx-BkMx96Irg?pwd=8sef 

提取码: 8sef 复制这段内容后打开百度网盘手机App，操作更方便哦

