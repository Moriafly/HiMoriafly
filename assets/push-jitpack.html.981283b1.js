import{_ as n,o as s,c as a,e}from"./app.f7993e9d.js";const i={},t=e(`<h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2><p>\u5728 library build.gradle \u6DFB\u52A0</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>id <span class="token string">&#39;maven-publish&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>afterEvaluate <span class="token punctuation">{</span>
    publishing <span class="token punctuation">{</span>
        publications <span class="token punctuation">{</span>
            <span class="token function">release</span><span class="token punctuation">(</span>MavenPublication<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                from components<span class="token punctuation">.</span>release

                groupId <span class="token operator">=</span> <span class="token string">&#39;com.github.moriafly&#39;</span>
                artifactId <span class="token operator">=</span> <span class="token string">&#39;regret&#39;</span>
                version <span class="token operator">=</span> <span class="token string">&#39;1.0.0-alpha01&#39;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[t];function c(o,r){return s(),a("div",null,l)}var d=n(i,[["render",c],["__file","push-jitpack.html.vue"]]);export{d as default};
