# 魅族 Flyme 状态栏歌词适配

文章原创作者：Moriafly

魅族官方似乎没有文档。那么这里给出一些摸索的方法。

## 魅族状态栏歌词是声明？

魅族的状态栏歌词是一个通知。每跳转一句歌词你都需要发送一条通知。

因为我们的魅族状态栏歌词这个通知不需要在通知栏显示，而仅需要在状态栏滚动，所有建议使用和你的音乐媒体通知一样的通知渠道 ID。

## 构建通知

需要声明这两个通知 FLAG ：

```kotlin
/** Flyme 状态栏歌词 TICKER 一直显示 */
private const val FLAG_ALWAYS_SHOW_TICKER = 0x1000000

/** 只更新 Flyme 状态栏歌词，不更新封面等 */
private const val FLAG_ONLY_UPDATE_TICKER = 0x2000000
```

构建 Notification

```kotlin

val notification = NotificationCompat.Builder(context,YOUR_CHANNEL_ID).apply {
        
        // 填入当前行的歌词
        setTicker(lyrics)

        // ... 其他必要的通知 set 方法省略
}.build()
    also { it ->
        // 状态栏歌词前的小图标，建议大小 16x16 dp
        it.extras.putInt("ticker_icon", R.drawable.ic_salt_player_notification)
        it.extras.putBoolean("ticker_icon_switch", false)
        //  直到下一次更新状态栏歌曲前此状态栏通知一直保留
        it.flags = notification.flags.or(FLAG_ALWAYS_SHOW_TICKER)
        //  是否只更新 Ticker，不会更新通知的其他属性
        it.flags = notification.flags.or(FLAG_ONLY_UPDATE_TICKER)
    }

```

## 发送状态栏歌词通知

若要在发出此通知后更新此通知，请再次调用，并向其传递具有以前使用过的相同 ID 的通知。如果以前的通知已消除，则会改为创建新通知。

```kotlin
NotificationManagerCompat.notify()
```

！！！特别注意

**Android 在更新通知时会应用速率限制。如果过于频繁地向通知发布更新（在不到一秒的时间内多次发布），系统可能会丢弃一些更新。**

所以你会看到网易云音乐在更新状态栏歌词的时候，开始播放会先显示“网易云音乐正在播放...”而不是第一句歌词，可能也是这个原因。

所以建议在切歌发送音乐媒体通知后，延迟一秒的时间再更新魅族状态栏歌词。避免通知内容已经保持上一首的问题。