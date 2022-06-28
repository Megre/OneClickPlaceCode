/**
 * 常用JS变量:
 * agentEvent = 代理模式下自动点击模块
 * acEvent= 无障碍模式下自动点击模块
 * device = 设备信息模块
 * file = 文件处理模块
 * http = HTTP网络请求模块
 * shell = shell命令模块
 * thread= 多线程模块
 * image = 图色查找模块
 * utils= 工具类模块
 * global = 全局快捷方式模块
 * 常用java变量：
 *  context : Android的Context对象
 *  javaLoader : java的类加载器对象
 * 导入Java类或者包：
 *  importClass(类名) = 导入java类
 *      例如: importClass(java.io.File) 导入java的 File 类
 *  importPackage(包名) =导入java包名下的所有类
 *      例如: importPackage(java.util) 导入java.util下的类
 *
 */

function main() {
    //开始再这里编写代码了！！
    // toast("Hello World");


    // var name = readConfigString("name");
    // logd("姓名: " + name);
    // logd("年龄: " + readConfigString("age"));
    // logd("听音乐: " + readConfigString("music"));
    // logd("是不是一年级: " + readConfigString("one"));
    // logd("备注: " + readConfigString("mark"));
    // logd("jobTaskTag..." + readConfigString("jobTaskTag"));
    // //如果自动化服务正常
    // if (!autoServiceStart(3)) {
    //     logd("自动化服务启动失败，无法执行脚本")
    //     exit();
    //     return;
    // }
    // logd("开始执行脚本...")

    var tempFilePath = "/sdcard/DCIM/Camera/id.jpg";
    file.copy("/sdcard/Download/1656261417423.jpg", tempFilePath);
    utils.insertImageToAlbum(tempFilePath);

    utils.openActivity({"uri":"alipayqr://platformapi/startapp?saId=10000007"});

    ui.run(600, function () { // click album
        var selector = bounds(925,1862,978,1915);
        var result = click(selector);
        if (!result) return;

        ui.run(300, function() { // click the first image
            var selector = bounds(0,216,356,572);
            var result = click(selector);
            if (!result) return;

            ui.run(300, function() {
                var selector = bounds(922,111,1066,194);
                var result = click(selector);

                ui.run(1000, function () {
                    file.deleteAllFile(tempFilePath);
                })
            })

        });
    });
}

function autoServiceStart(time) {
    for (var i = 0; i < time; i++) {
        if (isServiceOk()) {
            return true;
        }
        var started = startEnv();
        logd("第" + (i + 1) + "次启动服务结果: " + started);
        if (isServiceOk()) {
            return true;
        }
    }
    return isServiceOk();
}

main();