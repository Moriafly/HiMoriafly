<template><h1 id="saf" tabindex="-1"><a class="header-anchor" href="#saf" aria-hidden="true">#</a> SAF</h1>
<h2 id="请求读取文件夹目录" tabindex="-1"><a class="header-anchor" href="#请求读取文件夹目录" aria-hidden="true">#</a> 请求读取文件夹目录</h2>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">openDirectory</span><span class="token punctuation">(</span>pickerInitialUri<span class="token operator">:</span> Uri<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Choose a directory using the system's file picker.</span>
    <span class="token keyword">val</span> intent <span class="token operator">=</span> <span class="token function">Intent</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span>ACTION_OPEN_DOCUMENT_TREE<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
        <span class="token comment">// Optionally, specify a URI for the directory that should be opened in</span>
        <span class="token comment">// the system file picker when it loads.</span>
        <span class="token function">putExtra</span><span class="token punctuation">(</span>DocumentsContract<span class="token punctuation">.</span>EXTRA_INITIAL_URI<span class="token punctuation">,</span> pickerInitialUri<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">startActivityForResult</span><span class="token punctuation">(</span>intent<span class="token punctuation">,</span> your<span class="token operator">-</span>request<span class="token operator">-</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></template>
