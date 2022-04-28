<template><h1 id="开放文档" tabindex="-1"><a class="header-anchor" href="#开放文档" aria-hidden="true">#</a> 开放文档</h1>
<p>椒盐音乐提供部分外部修改椒盐音乐相关设置属性的功能。</p>
<h2 id="自定义参数均衡" tabindex="-1"><a class="header-anchor" href="#自定义参数均衡" aria-hidden="true">#</a> 自定义参数均衡</h2>
<p>操作位于椒盐音乐【设置】-【椒盐音乐 Pro】<code>*1</code>-【导入自定义参数均衡】。</p>
<h4 id="为什么使用均衡器" tabindex="-1"><a class="header-anchor" href="#为什么使用均衡器" aria-hidden="true">#</a> 为什么使用均衡器？</h4>
<ol>
<li>
<p>用以弥补一下特定耳机的缺陷。</p>
</li>
<li>
<p>不同人听感不同，有人喜欢低、有人喜欢高。</p>
</li>
<li>
<p>最适合你的才是最好的，<strong>开心</strong>最重要。</p>
</li>
</ol>
<h4 id="参数均衡器-parametric-equalizer" tabindex="-1"><a class="header-anchor" href="#参数均衡器-parametric-equalizer" aria-hidden="true">#</a> 参数均衡器（Parametric Equalizer）</h4>
<p>参数均衡器是一种功能非凡的音调调节形式。不同于图形均衡器的只能对相对固定的频段进行提升和降低，参数均衡器可以对全频段上的任何一个频率进行操作。</p>
<h4 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明" aria-hidden="true">#</a> 参数说明</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">name</td>
<td style="text-align:left">String</td>
<td style="text-align:left">此参数均衡的名称，如：Mega bass</td>
</tr>
<tr>
<td style="text-align:left">author</td>
<td style="text-align:left">String</td>
<td style="text-align:left">此参数均衡的作者</td>
</tr>
<tr>
<td style="text-align:left">preamp</td>
<td style="text-align:left">Float</td>
<td style="text-align:left">前置放大器值，单位为分贝（dB），范围：-15.0-15.0</td>
</tr>
<tr>
<td style="text-align:left">F</td>
<td style="text-align:left">Float</td>
<td style="text-align:left">中心频率值，设定了你要对声音频带中进行均衡的具体频段。单位为赫兹（Hz），推荐范围：20-20000</td>
</tr>
<tr>
<td style="text-align:left">G</td>
<td style="text-align:left">Float</td>
<td style="text-align:left">增益量值，决定了你要对选定频段进行提升或是衰减的程度。单位为分贝（dB），推荐范围：-15.0-15.0</td>
</tr>
<tr>
<td style="text-align:left">Q</td>
<td style="text-align:left">Float</td>
<td style="text-align:left">品质因数 Q 值，此参数影响带宽，决定了提升或是衰减曲线是窄而尖还是宽而平缓。较窄的带宽设置（即较高的共振或是 Q 值）使得均衡器只能对非常窄的一个音频段进行操作，而较宽的设定值则可以对较宽的音频段进行操作。Q 值越大，滤波器越尖锐，调节范围越小，反之 Q 值越小调节范围越大。范围：0-10</td>
</tr>
</tbody>
</table>
<p><code>*2</code></p>
<h4 id="关于-items-数量说明" tabindex="-1"><a class="header-anchor" href="#关于-items-数量说明" aria-hidden="true">#</a> 关于 items 数量说明</h4>
<p>原理上不限制 items 的数量，但是我们推荐使用 5-10 个。</p>
<ol>
<li>
<p>即使是 5 级的图形均衡即可达到很好的效果。</p>
</li>
<li>
<p>过高的控制数量将造成性能问题，处理过多的峰值控制会严重占用 CPU 。</p>
</li>
<li>
<p>AutoEq 库一般在参数均衡使用 10 个控制点。</p>
</li>
</ol>
<h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h4>
<p>本例子仅作格式演示：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"这是名字"</span><span class="token punctuation">,</span>
    <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">"小盐"</span><span class="token punctuation">,</span>
    <span class="token property">"preamp"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token property">"items"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">"F"</span><span class="token operator">:</span> <span class="token number">21.0</span><span class="token punctuation">,</span>
            <span class="token property">"G"</span><span class="token operator">:</span> <span class="token number">1.1</span><span class="token punctuation">,</span>
            <span class="token property">"Q"</span><span class="token operator">:</span> <span class="token number">2.71</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"F"</span><span class="token operator">:</span> <span class="token number">539.0</span><span class="token punctuation">,</span>
            <span class="token property">"G"</span><span class="token operator">:</span> <span class="token number">-4.4</span><span class="token punctuation">,</span>
            <span class="token property">"Q"</span><span class="token operator">:</span> <span class="token number">1.17</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">"F"</span><span class="token operator">:</span> <span class="token number">1534.0</span><span class="token punctuation">,</span>
            <span class="token property">"G"</span><span class="token operator">:</span> <span class="token number">-2.1</span><span class="token punctuation">,</span>
            <span class="token property">"Q"</span><span class="token operator">:</span> <span class="token number">1.32</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h4 id="详见" tabindex="-1"><a class="header-anchor" href="#详见" aria-hidden="true">#</a> 详见</h4>
<p><a href="https://github.com/Moriafly/SaltPlayerSource/blob/main/open/v4_eq_demo.json" target="_blank" rel="noopener noreferrer">v4_eq_demo.json<ExternalLinkIcon/></a>。</p>
<h4 id="推荐参考网站" tabindex="-1"><a class="header-anchor" href="#推荐参考网站" aria-hidden="true">#</a> 推荐参考网站</h4>
<p><a href="https://github.com/jaakkopasanen/AutoEq/blob/master/results/INDEX.md" target="_blank" rel="noopener noreferrer">https://github.com/jaakkopasanen/AutoEq/blob/master/results/INDEX.md<ExternalLinkIcon/></a></p>
<p><a href="https://reference-audio-analyzer.pro/" target="_blank" rel="noopener noreferrer">https://reference-audio-analyzer.pro/<ExternalLinkIcon/></a></p>
<hr>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>*1 此为收费项目，你需要购买【椒盐音乐 Pro】。</p>
<p>*2 部分信息来源网络。</p>
</div>
<h2 id="广播" tabindex="-1"><a class="header-anchor" href="#广播" aria-hidden="true">#</a> 广播</h2>
<table>
<thead>
<tr>
<th style="text-align:left">常量</th>
<th style="text-align:left">值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ACTION_SALT_PLAYER_TOOLS</td>
<td style="text-align:left">&quot;com.salt.music.TOOLS&quot;</td>
</tr>
<tr>
<td style="text-align:left">PACKAGE_NAME_SALT_PLAYER</td>
<td style="text-align:left">&quot;com.salt.music&quot;</td>
</tr>
<tr>
<td style="text-align:left">EXTRA_KEY</td>
<td style="text-align:left">&quot;extra_string_key&quot;</td>
</tr>
<tr>
<td style="text-align:left">EXTRA_VALUE</td>
<td style="text-align:left">&quot;extra_string_value&quot;</td>
</tr>
</tbody>
</table>
<h4 id="无级修改歌词界面文本大小" tabindex="-1"><a class="header-anchor" href="#无级修改歌词界面文本大小" aria-hidden="true">#</a> 无级修改歌词界面文本大小</h4>
<p><code>支持椒盐音乐 3.10.2-release-2021090601 及更新版本。</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">key</th>
<th style="text-align:left">value</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">lyrics_view_text_size</td>
<td style="text-align:left">Int</td>
</tr>
</tbody>
</table>
<div class="language-kotlin ext-kt line-numbers-mode"><pre v-pre class="language-kotlin"><code><span class="token comment">// Example, set lyrics view textsize to 50</span>
<span class="token keyword">val</span> key <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"lyrics_view_text_size"</span></span>
<span class="token keyword">val</span> value <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">"50"</span></span>
<span class="token keyword">val</span> intent <span class="token operator">=</span> <span class="token function">Intent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">apply</span> <span class="token punctuation">{</span>
    action <span class="token operator">=</span> ACTION_SALT_PLAYER_TOOLS
    <span class="token function">setPackage</span><span class="token punctuation">(</span>PACKAGE_NAME_SALT_PLAYER<span class="token punctuation">)</span>
    <span class="token function">putExtra</span><span class="token punctuation">(</span>EXTRA_KEY<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token function">putExtra</span><span class="token punctuation">(</span>EXTRA_VALUE<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
context<span class="token punctuation">.</span><span class="token function">sendBroadcast</span><span class="token punctuation">(</span>intent<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="面向开发者等合作" tabindex="-1"><a class="header-anchor" href="#面向开发者等合作" aria-hidden="true">#</a> 面向开发者等合作</h2>
<p>如需要相关合作，请于 SaltPlayerSource 提交 issue ，会与你取得联系。</p>
</template>
