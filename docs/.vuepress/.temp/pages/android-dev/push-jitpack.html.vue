<template><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2>
<p>在 library build.gradle 添加</p>
<div class="language-groovy ext-groovy line-numbers-mode"><pre v-pre class="language-groovy"><code>id <span class="token string">'maven-publish'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-groovy ext-groovy line-numbers-mode"><pre v-pre class="language-groovy"><code>afterEvaluate <span class="token punctuation">{</span>
    publishing <span class="token punctuation">{</span>
        publications <span class="token punctuation">{</span>
            <span class="token function">release</span><span class="token punctuation">(</span>MavenPublication<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                from components<span class="token punctuation">.</span>release

                groupId <span class="token operator">=</span> <span class="token string">'com.github.moriafly'</span>
                artifactId <span class="token operator">=</span> <span class="token string">'regret'</span>
                version <span class="token operator">=</span> <span class="token string">'1.0.0-alpha01'</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></template>
