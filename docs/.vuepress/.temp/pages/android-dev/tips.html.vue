<template><h1 id="tips" tabindex="-1"><a class="header-anchor" href="#tips" aria-hidden="true">#</a> Tips</h1>
<h2 id="suspendcoroutine" tabindex="-1"><a class="header-anchor" href="#suspendcoroutine" aria-hidden="true">#</a> suspendCoroutine</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">suspend</span> <span class="token keyword">fun</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> suspendCoroutine<span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token punctuation">{</span>
    io <span class="token punctuation">{</span>
        <span class="token keyword">val</span> async<span class="token operator">:</span> Deferred<span class="token operator">&lt;</span>T<span class="token operator">></span> <span class="token operator">=</span> <span class="token function">async</span><span class="token punctuation">(</span>Dispatchers<span class="token punctuation">.</span>IO<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// T</span>
        <span class="token punctuation">}</span>
        async<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        continuation<span class="token punctuation">.</span><span class="token function">resume</span><span class="token punctuation">(</span>T<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="ignore-deprecation" tabindex="-1"><a class="header-anchor" href="#ignore-deprecation" aria-hidden="true">#</a> ignore DEPRECATION</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Suppress("DEPRECATION")
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="导航栏背景全透明前景色不为全白的方法-transparent-navigationbar" tabindex="-1"><a class="header-anchor" href="#导航栏背景全透明前景色不为全白的方法-transparent-navigationbar" aria-hidden="true">#</a> 导航栏背景全透明前景色不为全白的方法 Transparent NavigationBar</h2>
<p>在 Themes.xml 主题添加，并应用于需要的 Activity。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android:enforceNavigationBarContrast<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>false<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- delete --></span>
<span class="token comment">&lt;!-- &lt;item name="android:windowTranslucentNavigation">true&lt;/item> --></span>
<span class="token comment">&lt;!-- &lt;item name="android:navigationBarColor">@android:color/transparent&lt;/item> --></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在给定 Activity 添加以下代码。</p>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token operator">:</span> Bundle<span class="token operator">?</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    WindowCompat<span class="token punctuation">.</span><span class="token function">setDecorFitsSystemWindows</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Build<span class="token punctuation">.</span>VERSION<span class="token punctuation">.</span>SDK_INT <span class="token operator">>=</span> Build<span class="token punctuation">.</span>VERSION_CODES<span class="token punctuation">.</span>R<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>decorView<span class="token punctuation">.</span>windowInsetsController<span class="token operator">?</span><span class="token punctuation">.</span><span class="token function">setSystemBarsAppearance</span><span class="token punctuation">(</span>
            WindowInsetsController<span class="token punctuation">.</span>APPEARANCE_LIGHT_NAVIGATION_BARS<span class="token punctuation">,</span>
            WindowInsetsController<span class="token punctuation">.</span>APPEARANCE_LIGHT_NAVIGATION_BARS
        <span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>Build<span class="token punctuation">.</span>VERSION<span class="token punctuation">.</span>SDK_INT <span class="token operator">>=</span> Build<span class="token punctuation">.</span>VERSION_CODES<span class="token punctuation">.</span>O<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token annotation builtin">@Suppress</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">"DEPRECATION"</span></span><span class="token punctuation">)</span>
        window<span class="token punctuation">.</span>decorView<span class="token punctuation">.</span>systemUiVisibility <span class="token operator">=</span> View<span class="token punctuation">.</span>SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR <span class="token operator">or</span> window<span class="token punctuation">.</span>decorView<span class="token punctuation">.</span>systemUiVisibility
    <span class="token punctuation">}</span>
    window<span class="token punctuation">.</span>navigationBarColor <span class="token operator">=</span> android<span class="token punctuation">.</span>graphics<span class="token punctuation">.</span>Color<span class="token punctuation">.</span>TRANSPARENT

    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onCreate</span><span class="token punctuation">(</span>savedInstanceState<span class="token punctuation">)</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>贡献来自：Github@1552980358</p>
<h2 id="compositionlocalof-学习" tabindex="-1"><a class="header-anchor" href="#compositionlocalof-学习" aria-hidden="true">#</a> compositionLocalOf 学习</h2>
<p>default 是当无 provides 时候的提供值</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>CompositionLocalProvider(
    Local... provides [变更影响下方]
) {
    // 影响
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></template>
