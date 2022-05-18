import{_ as n,e as s}from"./app.f4b20641.js";const a={},e=s(`<h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2><p>\u5728 library build.gradle \u6DFB\u52A0</p><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>id <span class="token string">&#39;maven-publish&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>afterEvaluate <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,4);function p(r,t){return e}var c=n(a,[["render",p],["__file","push-jitpack.html.vue"]]);export{c as default};
