<template><div><h1 id="druid连接器" tabindex="-1"><a class="header-anchor" href="#druid连接器" aria-hidden="true">#</a> Druid连接器</h1>
<p>上级文档: <RouterLink to="/zh/documents/connectors/introduction_zh.html">connectors</RouterLink></p>
<p><em><strong>BitSail</strong></em> Druid连接器支持批式读写Druid资料源。</p>
<h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>connector-druid&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="druid写入" tabindex="-1"><a class="header-anchor" href="#druid写入" aria-hidden="true">#</a> Druid写入</h2>
<h3 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h3>
<p>支持写入常见的Druid数据类型:</p>
<ul>
<li>整型 Long</li>
<li>浮点类型 Float, Double</li>
<li>字符类型 String</li>
</ul>
<h3 id="支持的操作类型" tabindex="-1"><a class="header-anchor" href="#支持的操作类型" aria-hidden="true">#</a> 支持的操作类型</h3>
<p>支持以下操作类型:</p>
<ul>
<li>INSERT</li>
</ul>
<h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3>
<p>写连接器参数在<code v-pre>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.druid.sink.DruidSink"</span><span class="token punctuation">,</span>
      <span class="token property">"datasource"</span><span class="token operator">:</span> <span class="token string">"testDruidDataSource"</span><span class="token punctuation">,</span>
      <span class="token property">"coordinator_url"</span><span class="token operator">:</span> <span class="token string">"localhost:8888"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">Druid写连接器类型, <code v-pre>com.bytedance.bitsail.connector.druid.sink.DruidSink</code></td>
</tr>
<tr>
<td style="text-align:left">datasource</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要写入的Druid资料源</td>
</tr>
<tr>
<td style="text-align:left">coordinator_url</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">Druid master地址, 格式是 <code v-pre>&lt;host&gt;:&lt;port&gt;</code></td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要写入的数据列的列名和类型</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>
<p>配置示例文档: <RouterLink to="/zh/documents/connectors/druid/druid-example_zh.html">druid-connector-example</RouterLink></p>
</div></template>


