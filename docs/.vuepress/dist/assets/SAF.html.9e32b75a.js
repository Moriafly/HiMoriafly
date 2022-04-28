import{_ as n,e as s}from"./app.dd3363a6.js";const a={},t=s(`<h1 id="saf" tabindex="-1"><a class="header-anchor" href="#saf" aria-hidden="true">#</a> SAF</h1><h2 id="\u8BF7\u6C42\u8BFB\u53D6\u6587\u4EF6\u5939\u76EE\u5F55" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u8BFB\u53D6\u6587\u4EF6\u5939\u76EE\u5F55" aria-hidden="true">#</a> \u8BF7\u6C42\u8BFB\u53D6\u6587\u4EF6\u5939\u76EE\u5F55</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">openDirectory</span><span class="token punctuation">(</span>pickerInitialUri<span class="token operator">:</span> Uri<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// Choose a directory using the system&#39;s file picker.</span>
    <span class="token keyword">val</span> intent <span class="token operator">=</span> <span class="token function">Intent</span><span class="token punctuation">(</span>Intent<span class="token punctuation">.</span>ACTION_OPEN_DOCUMENT_TREE<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
        <span class="token comment">// Optionally, specify a URI for the directory that should be opened in</span>
        <span class="token comment">// the system file picker when it loads.</span>
        <span class="token function">putExtra</span><span class="token punctuation">(</span>DocumentsContract<span class="token punctuation">.</span>EXTRA_INITIAL_URI<span class="token punctuation">,</span> pickerInitialUri<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">startActivityForResult</span><span class="token punctuation">(</span>intent<span class="token punctuation">,</span> your<span class="token operator">-</span>request<span class="token operator">-</span>code<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,3);function e(p,o){return t}var i=n(a,[["render",e],["__file","SAF.html.vue"]]);export{i as default};
