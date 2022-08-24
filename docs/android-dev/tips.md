# Tips

## suspendCoroutine

```kt
suspend fun call() = suspendCoroutine<T> {
    io {
        val async: Deferred<T> = async(Dispatchers.IO) {
            // T
        }
        async.await()
        continuation.resume(T)
    }
}
```

## ignore DEPRECATION

```
@Suppress("DEPRECATION")
```

## 导航栏背景全透明前景色不为全白的方法 Transparent NavigationBar

在 Themes.xml 主题添加，并应用于需要的 Activity。

```xml
<item name="android:enforceNavigationBarContrast">false</item>
```

在给定 Activity 添加以下代码。

```kt
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    // 在 super.onCreate(savedInstanceState) 后调用，API 30 上有空指针崩溃 BUG，https://cloud.tencent.com/developer/ask/sof/568185
    WindowCompat.setDecorFitsSystemWindows(window, false)
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        if (AppCompatDelegate.getDefaultNightMode() != AppCompatDelegate.MODE_NIGHT_YES) {
            window.insetsController?.setSystemBarsAppearance(
                WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS,
                WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS
            )
        } else {
            window.insetsController?.setSystemBarsAppearance(0, WindowInsetsController.APPEARANCE_LIGHT_STATUS_BARS)
        }
    } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        @Suppress("DEPRECATION")
        if (AppCompatDelegate.getDefaultNightMode() != AppCompatDelegate.MODE_NIGHT_YES) {
            window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR or window.decorView.systemUiVisibility
        } else {
            window.decorView.systemUiVisibility = window.decorView.systemUiVisibility
        }
    }
    window.navigationBarColor = android.graphics.Color.TRANSPARENT

    
    // ...
}
```

贡献来自：Github@1552980358

## compositionLocalOf 学习

default 是当无 provides 时候的提供值

```
CompositionLocalProvider(
    Local... provides [变更影响下方]
) {
    // 影响
}
```

## CoordinatorLayout + EditText

EditText 所在的可滑动区域设定了滑动 AppBarLayout.ScrollingViewBehavior，在调整窗口大小后可能会有严重的性能问题。页面会多次 Measure 。

<!-- ## 简单资源保护 -->

<!-- vector xml 使用 dimen 变量指定 android:width 和 android:height 值，会使得 MT 管理器无法 -->

## 部分系统上 WebView

Bold 需要字重达到 700