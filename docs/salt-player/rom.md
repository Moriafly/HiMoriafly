# 一些机型 / ROM 遇到的问题 / 特殊性说明

基于 7.0.4-gamma 版本说明，不一定完全，若遇到可以向作者反馈。

## 小米 MIUI

#### 小米妙播无效？

小米妙播支持基本媒体媒体路由和同无线网络下音频输出切换等，需要特定 MIUI 版本（软件支持）。

## vivo

#### vivo Hi-Fi 不显示？

vivo 可能是通过白名单控制，若需要可以通过 adb 方式，输入 settings put global game_support_hifi_list com.salt.music

## OPPO ColorOS

#### 没有音乐通知栏？

OPPO 默认关闭，需要手动打开。（不太理解 OPPO 做法，我觉得媒体通知应该得到豁免，即便 Android 13 谷歌添加了通知请求，但是媒体通知也是不得到豁免而不需要请求的）。

## 华为 / 荣耀 HarmonyOS

#### 不支持鸿蒙控制中心音乐？

华为通过白名单控制。