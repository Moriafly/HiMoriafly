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

<!-- delete -->
<!-- <item name="android:windowTranslucentNavigation">true</item> -->
<!-- <item name="android:navigationBarColor">@android:color/transparent</item> -->
```

在给定 Activity 添加以下代码。

```kt
override fun onCreate(savedInstanceState: Bundle?) {
    WindowCompat.setDecorFitsSystemWindows(window, false)
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.R) {
        window.decorView.windowInsetsController?.setSystemBarsAppearance(
            WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS,
            WindowInsetsController.APPEARANCE_LIGHT_NAVIGATION_BARS
        )
    } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        @Suppress("DEPRECATION")
        window.decorView.systemUiVisibility = View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR or window.decorView.systemUiVisibility
    }
    window.navigationBarColor = android.graphics.Color.TRANSPARENT

    super.onCreate(savedInstanceState)
    // ...
}
```

贡献来自：Github@1552980358

