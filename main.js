// vars
var placeCodeImgPath = "/sdcard/Download/1656261417423.jpg"; // 场所码截图路径

// copy QR image to album
var tempFilePath = "/sdcard/DCIM/Camera/id.jpg";
files.copy(placeCodeImgPath, tempFilePath);
media.scanFile(tempFilePath);

// open alipay QR
importClass(android.net.Uri);
uri = Uri.parse("alipayqr://platformapi/startapp?saId=10000007");
app.startActivity(new Intent(Intent.ACTION_VIEW, uri));

// wait for alipay QR
var albumBtn = text("相册").findOne(2000);

// click album button
// var album = bounds(925,1862,978,1915).findOne(2000);
if(albumBtn) {
    albumBtn.parent().click();
}

// wait for system album
var sysAlbum = text("系统相册").findOne(2000);

// click the first image
var btn = null;
if(sysAlbum) {
    while(!(btn = text("确定").findOne(200))) {
        click(361, 216);
    }
}

// classNameEndsWith("RelativeLayout").indexInParent(17).waitFor();
// bounds(0,216,356,572).findOne(500).click();

// click ok
if(btn) btn.click();

while(!(textContains("健康码").findOne(200) && text("行程卡").findOne(200)));
toast("健康码已打开");

while(textContains("健康码").findOne(200) && text("行程卡").findOne(200));
toast("健康码已退出");

if(isStandAlongApp()) {
    app.launchApp("进入园区");
    while(!text("进入园区").findOne(200));
    back();
}

function isStandAlongApp () {
    var am = context.getSystemService(java.lang.Class.forName("android.app.ActivityManager"));
    var list = am.getRunningAppProcesses();
    for(var i=0;i<list.size();i++){
        var info = list.get(i)
        if(info.processName == "com.ui") return true;
    }

    return false;
}

// remove temp image
sleep(1000);
files.remove(tempFilePath);
