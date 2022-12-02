<template><div><h1 id="hudi连接器" tabindex="-1"><a class="header-anchor" href="#hudi连接器" aria-hidden="true">#</a> Hudi连接器</h1>
<p><em><strong>BitSail</strong></em> hudi连接器支持读写hudi表，主要功能如下</p>
<ul>
<li>支持流式写入Hudi表。</li>
<li>支持批式写入Hudi表。</li>
<li>支持批式读取Hudi表。</li>
</ul>
<h2 id="支持hudi版本" tabindex="-1"><a class="header-anchor" href="#支持hudi版本" aria-hidden="true">#</a> 支持Hudi版本</h2>
<ul>
<li>0.11.1</li>
</ul>
<h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-hudi&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi读取" tabindex="-1"><a class="header-anchor" href="#hudi读取" aria-hidden="true">#</a> Hudi读取</h2>
<h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3>
<ul>
<li>支持的基础数据类型如下:
<ul>
<li>整数类型:
<ul>
<li>tinyint</li>
<li>smallint</li>
<li>int</li>
<li>bigint</li>
</ul>
</li>
<li>浮点类型:
<ul>
<li>float</li>
<li>double</li>
<li>decimal</li>
</ul>
</li>
<li>时间类型:
<ul>
<li>timestamp</li>
<li>date</li>
</ul>
</li>
<li>字符类型:
<ul>
<li>string</li>
<li>varchar</li>
<li>char</li>
</ul>
</li>
<li>布尔类型:
<ul>
<li>boolean</li>
</ul>
</li>
<li>二进制类型:
<ul>
<li>binary</li>
</ul>
</li>
</ul>
</li>
<li>支持的复杂数据类型包括:
<ul>
<li>map</li>
<li>array</li>
</ul>
</li>
</ul>
<h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3>
<p>读连接器参数在<code v-pre>job.reader</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"hoodie"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"datasource"</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">"query"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"snapshot"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/path/to/table"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.hudi.dag.HudiSourceFunctionDAGBuilder"</span><span class="token punctuation">,</span>
      <span class="token property">"table"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"MERGE_ON_READ"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi读连接器类名, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiSourceFunctionDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">表的路径，可以是HDFS，S3，或者其他文件系统。</td>
</tr>
<tr>
<td style="text-align:left">table.type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi表的类型，可以是 <code v-pre>MERGE_ON_READ</code> 或者 <code v-pre>COPY_ON_WRITE</code></td>
</tr>
<tr>
<td style="text-align:left">hoodie.datasource.query.type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">查询类型，可以是 <code v-pre>snapshot</code> 最新视图 或者 <code v-pre>read_optimized</code> 读优化视图</td>
</tr>
</tbody>
</table>
<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">reader_parallelism_num</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">读取并发度</td>
</tr>
</tbody>
</table>
<h2 id="hudi写入" tabindex="-1"><a class="header-anchor" href="#hudi写入" aria-hidden="true">#</a> Hudi写入</h2>
<h3 id="支持数据类型-1" tabindex="-1"><a class="header-anchor" href="#支持数据类型-1" aria-hidden="true">#</a> 支持数据类型</h3>
<ul>
<li>支持的基础数据类型如下:
<ul>
<li>整数类型:
<ul>
<li>tinyint</li>
<li>smallint</li>
<li>int</li>
<li>bigint</li>
</ul>
</li>
<li>浮点类型:
<ul>
<li>float</li>
<li>double</li>
<li>decimal</li>
</ul>
</li>
<li>时间类型:
<ul>
<li>timestamp</li>
<li>date</li>
</ul>
</li>
<li>字符类型:
<ul>
<li>string</li>
<li>varchar</li>
<li>char</li>
</ul>
</li>
<li>布尔类型:
<ul>
<li>boolean</li>
</ul>
</li>
<li>二进制类型:
<ul>
<li>binary</li>
</ul>
</li>
</ul>
</li>
<li>支持的复杂数据类型包括:
<ul>
<li>map</li>
<li>array</li>
</ul>
</li>
</ul>
<h3 id="主要参数-1" tabindex="-1"><a class="header-anchor" href="#主要参数-1" aria-hidden="true">#</a> 主要参数</h3>
<p>写连接器参数在<code v-pre>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"hoodie"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"bucket"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"num"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"buckets"</span><span class="token operator">:</span> <span class="token string">"4"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token property">"hash"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"id"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"datasource"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"write"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"recordkey"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">"field"</span><span class="token operator">:</span> <span class="token string">"id"</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"table"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"test_table"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"/path/to/table"</span><span class="token punctuation">,</span>
      <span class="token property">"index"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"BUCKET"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.hudi.sink.HudiSinkFunctionDAGBuilder"</span><span class="token punctuation">,</span>
      <span class="token property">"write"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"operation"</span><span class="token operator">:</span> <span class="token string">"upsert"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"table"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"MERGE_ON_READ"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"source_schema"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"id\",\"type\":\"bigint\"},{\"name\":\"test\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"string\"}]"</span><span class="token punctuation">,</span>
      <span class="token property">"sink_schema"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"id\",\"type\":\"bigint\"},{\"name\":\"test\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"string\"}]"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数-1" tabindex="-1"><a class="header-anchor" href="#必需参数-1" aria-hidden="true">#</a> 必需参数</h4>
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
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi写连接器类型, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.sink.HudiSinkFunctionDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">write.operation</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>upsert</code> <code v-pre>insert</code> <code v-pre>bulk_insert</code></td>
</tr>
<tr>
<td style="text-align:left">table.type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi表类型，<code v-pre>MERGE_ON_READ</code>或者 <code v-pre>COPY_ON_WRITE</code></td>
</tr>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">表的路径，可以是HDFS，S3，或者其他文件系统。 如果该路径没有Hudi表，则会创建一张新表。</td>
</tr>
<tr>
<td style="text-align:left">format_type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">输入的数据类型，当前支持 <code v-pre>json</code></td>
</tr>
<tr>
<td style="text-align:left">source_schema</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于解析输入数据的字段类型。</td>
</tr>
<tr>
<td style="text-align:left">sink_schema</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于写入Hudi表的字段类型。</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://hoodie.table.name" target="_blank" rel="noopener noreferrer">hoodie.table.name<ExternalLinkIcon/></a></td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi表的名字。</td>
</tr>
</tbody>
</table>
<h4 id="可选参数-1" tabindex="-1"><a class="header-anchor" href="#可选参数-1" aria-hidden="true">#</a> 可选参数</h4>
<p>如需了解更多Hudi的高级参数, 请查看代码 <code v-pre>FlinkOptions.java</code></p>
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
<td style="text-align:left">hoodie.datasource.write.recordkey.field</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">对于 <code v-pre>upsert</code> 操作, 此参数用于指定主键字段.</td>
</tr>
<tr>
<td style="text-align:left">index.type</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">对于 <code v-pre>upsert</code> 操作, 此参数用于指定索引类型. 可以是 <code v-pre>STATE</code> 或者 <code v-pre>BUCKET</code></td>
</tr>
<tr>
<td style="text-align:left">hoodie.bucket.index.num.buckets</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">如果我们使用了BUCKET索引, 我们需要指定桶的数量。</td>
</tr>
<tr>
<td style="text-align:left">hoodie.bucket.index.hash.field</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">如果我们使用了BUCKET索引, 我们需要指定用于计算桶ID的字段。</td>
</tr>
</tbody>
</table>
<h2 id="hudi压缩" tabindex="-1"><a class="header-anchor" href="#hudi压缩" aria-hidden="true">#</a> Hudi压缩</h2>
<h3 id="主要参数-2" tabindex="-1"><a class="header-anchor" href="#主要参数-2" aria-hidden="true">#</a> 主要参数</h3>
<p>Compaction参数包含了reader和writer部分。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/path/to/table"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSourceDAGBuilder"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"writer"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/path/to/table"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSinkDAGBuilder"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必填参数" tabindex="-1"><a class="header-anchor" href="#必填参数" aria-hidden="true">#</a> 必填参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Param name</th>
<th style="text-align:left">Required</th>
<th style="text-align:left">Optional value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">job.reader.class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi压缩读取器类名, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSourceDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">job.writer.class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi压缩写入器类名, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSinkDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">job.reader.path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">表的路径，可以是HDFS，S3，或者其他文件系统。</td>
</tr>
<tr>
<td style="text-align:left">job.writer.path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">表的路径，可以是HDFS，S3，或者其他文件系统。</td>
</tr>
</tbody>
</table>
<h4 id="选填参数" tabindex="-1"><a class="header-anchor" href="#选填参数" aria-hidden="true">#</a> 选填参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Param name</th>
<th style="text-align:left">Required</th>
<th style="text-align:left">Optional value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">writer_parallelism_num</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">执行压缩的并发度</td>
</tr>
</tbody>
</table>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>
<p>配置示例文档: <RouterLink to="/connectors/hudi/hudi-example_zh.html">hudi-connector-example</RouterLink></p>
</div></template>


