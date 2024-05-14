# adb

## 连接

```shell
adb connect [ip]
```

## 查看所有设备

```shell 
adb devices
```

## 将指令送到指定设备

```shell
adb -s emulator-5555 install helloWorld.apk
```

## 装APK

```shell
adb install [apk location]
```

## 抓日志

1、adb logcat -c

2、adb logcat -v time >d:\xx.log

中止 control+C

## 启动apk

adb shell monkey -p com.dangbeimarket 1

## apk（包名）列表

adb shell pm list packages

## 卸载apk

adb uninstall com.demo

## 重置服务

adb kill-server

## 模拟按键

[Keycode List from Android Developers](https://developer.android.com/reference/android/view/KeyEvent#constants_2)

这条命令相当于按了设备的Backkey键

```shell
adb shell input keyevent 4
```

解锁屏幕

```shell
adb shell input keyevent  82 
```

在屏幕上做划屏操作，前四个数为坐标点，后面是滑动的时间（单位毫秒）

```shell
adb shell input swipe 50 250 250 250 500 
```

在屏幕上点击坐标点x=50  y=250的位置。

```shell
adb shell input tap 50 250 
```

输入字符abc

```shell
adb shell input text abc
```

模拟长按

```shell
adb shell input keyevent --longpress
```



