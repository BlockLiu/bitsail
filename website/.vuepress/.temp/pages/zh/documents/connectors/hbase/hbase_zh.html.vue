<template><div><h1 id="hbase连接器" tabindex="-1"><a class="header-anchor" href="#hbase连接器" aria-hidden="true">#</a> HBase连接器</h1>
<p>上级文档: <RouterLink to="/zh/documents/connectors/introduction_zh.html">connectors</RouterLink></p>
<p><em><strong>Bitsail</strong></em> HBase连接器可用于支持读写HBase，支持的主要功能如下:</p>
<ul>
<li>支持scan方式读取 HBase table 中的数据</li>
<li>支持在写 HBase table 时根据列数据设置 RowKey</li>
</ul>
<h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-hbase&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hbase读连接器" tabindex="-1"><a class="header-anchor" href="#hbase读连接器" aria-hidden="true">#</a> HBase读连接器</h2>
<h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3>
<p>支持将HBase中的binary数据转化为如下格式：</p>
<ul>
<li>string</li>
<li>boolean</li>
<li>int</li>
<li>short</li>
<li>long</li>
<li>bigint</li>
<li>double</li>
<li>float</li>
<li>date</li>
<li>bytes</li>
</ul>
<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
<p>读连接器参数在<code v-pre>job.reader</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.hbase.source.HBaseInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"test_table"</span><span class="token punctuation">,</span>
      <span class="token property">"hbase_conf"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"hbase.zookeeper.quorum"</span><span class="token operator">:</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
        <span class="token property">"hbase.zookeeper.property.clientPort"</span><span class="token operator">:</span><span class="token string">"2181"</span><span class="token punctuation">,</span>
        <span class="token property">"hbase.mapreduce.splittable"</span><span class="token operator">:</span> <span class="token string">"test_table"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf1:str1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf1:int1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">HBase读连接器名, <code v-pre>com.bytedance.bitsail.connector.legacy.hbase.source.HBaseInputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">table</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要读取的HBase表名</td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">描述字段名称和字段类型。字段名格式为: <code v-pre>columnFamily:columnName</code>.</td>
</tr>
<tr>
<td style="text-align:left">hbase_conf</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于创建HBase连接的配置。</td>
</tr>
</tbody>
</table>
<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">reader_parallelism_num</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">读并发</td>
</tr>
<tr>
<td style="text-align:left">encoding</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">处理HBase中的binary数据时使用的编码方式。默认为utf-8.</td>
</tr>
</tbody>
</table>
<h2 id="hbase写连接器" tabindex="-1"><a class="header-anchor" href="#hbase写连接器" aria-hidden="true">#</a> HBase写连接器</h2>
<h3 id="支持数据类型-1" tabindex="-1"><a class="header-anchor" href="#支持数据类型-1" aria-hidden="true">#</a> 支持数据类型</h3>
<p>支持将以下数据类型转化为bytes后写入HBase:</p>
<ul>
<li>varchar</li>
<li>string</li>
<li>boolean</li>
<li>short</li>
<li>int</li>
<li>long</li>
<li>bigint</li>
<li>double</li>
<li>decimal</li>
<li>float</li>
<li>date</li>
<li>timestamp</li>
<li>binary</li>
</ul>
<h3 id="参数-1" tabindex="-1"><a class="header-anchor" href="#参数-1" aria-hidden="true">#</a> 参数</h3>
<p>读连接器参数在<code v-pre>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.hbase.sink.HBaseOutputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"test_table"</span><span class="token punctuation">,</span>
      <span class="token property">"hbase_conf"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"hbase.zookeeper.quorum"</span><span class="token operator">:</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
        <span class="token property">"hbase.zookeeper.property.clientPort"</span><span class="token operator">:</span><span class="token string">"2181"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"row_key_column"</span><span class="token operator">:</span> <span class="token string">"id_$(cf1:str1)"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf1:str1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf1:int1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数-1" tabindex="-1"><a class="header-anchor" href="#必需参数-1" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">HBase写连接器名, <code v-pre>com.bytedance.bitsail.connector.legacy.hbase.sink.HBaseOutputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">table</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要写入的HBase表名</td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">描述字段名称和字段类型。字段名格式为: <code v-pre>columnFamily:columnName</code>.</td>
</tr>
<tr>
<td style="text-align:left">hbase_conf</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于创建HBase连接的配置。</td>
</tr>
<tr>
<td style="text-align:left">row_key_column</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于指定写入列的RowKey</td>
</tr>
</tbody>
</table>
<p>row_key_column的格式说明如下:</p>
<ul>
<li><code v-pre>$(XX)</code> 表示使用columns中定义的XX列的值来填充</li>
<li><code v-pre>md5(...)</code> 表示对括号中的内容进行md5计算</li>
</ul>
<p>例如: <code v-pre>$(cf:name)_md5($(cf:id)_split_$(cf:age))</code></p>
<h4 id="可选参数-1" tabindex="-1"><a class="header-anchor" href="#可选参数-1" aria-hidden="true">#</a> 可选参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">writer_parallelism_num</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">写并发,最大不超过表的region数量。</td>
</tr>
<tr>
<td style="text-align:left">encoding</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">将数据转化为bytes时使用的编码方式。默认为utf-8.</td>
</tr>
<tr>
<td style="text-align:left">null_mode</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">遇到null数据时的处理方式。<br/>&quot;skip&quot;表示跳过此数据, &quot;empty&quot;表示置为空的bytes。<br/> 默认为&quot;empty&quot;.</td>
</tr>
<tr>
<td style="text-align:left">wal_flag</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">是否使用Write-ahead logging。默认false。</td>
</tr>
<tr>
<td style="text-align:left">write_buffer_size</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">mutate操作的buffer大小。默认8MB。</td>
</tr>
<tr>
<td style="text-align:left">version_column</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">决定写入数据的时间戳。</td>
</tr>
</tbody>
</table>
<p>version_column的使用说明如下:</p>
<ul>
<li>若不设置此选项，则默认以运行时间作为写入时间戳。</li>
<li>若设置为 <code v-pre>{&quot;index&quot;:x}</code>，则使用第 x 列的值（需要能转化为整型时间戳）作为写入时间戳。例如:<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">"version_column"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span>      <span class="token comment">// 表示使用第1列的值作为时间戳（从0开始）</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>若设置为 <code v-pre>{&quot;value&quot;:xxx}</code>或者<code v-pre>{&quot;value&quot;:&quot;xxx&quot;}</code>，则固定使用XXX（需要能转化为整型时间戳）作为写入时间戳。例如:<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>  <span class="token punctuation">{</span>
    <span class="token property">"version_column"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"value"</span><span class="token operator">:</span> <span class="token string">"1234567890"</span>       <span class="token comment">// 写入时间戳固定为1234567890</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>
<p>配置示例文档: <RouterLink to="/zh/documents/connectors/hbase/hbase-example_zh.html">hbase-connector-example</RouterLink></p>
</div></template>


