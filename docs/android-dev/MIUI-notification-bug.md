# MIUI 12 等版本上出现的通知栏图片过大的问题的原因和解决

作者：不要糖醋放椒盐

椒盐音乐 rc09 版本的更新收到了用户反馈在 MIUI 的某些系统上出现通知栏图片过大问题。

启动前台服务的 notification 必须限制 LargeIcon 的 Bitmap 大小。过大（如大于 500 px 就可能出现这样的情况）。

```kotlin
startForeground(id, notification)
```

而后如果仅仅通过 notify 的方式更新通知，即便传入小的图片也不会有改变，需要再次通过 startForeground 才能正常。

```kotlin
notificationManager.notify(id, notification)
```