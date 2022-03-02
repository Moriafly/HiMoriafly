<template><h1 id="coroutine" tabindex="-1"><a class="header-anchor" href="#coroutine" aria-hidden="true">#</a> Coroutine</h1>
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
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
