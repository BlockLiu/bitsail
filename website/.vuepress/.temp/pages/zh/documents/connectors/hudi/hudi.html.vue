<template><div><h1 id="hudi-connector" tabindex="-1"><a class="header-anchor" href="#hudi-connector" aria-hidden="true">#</a> Hudi connector</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p>The <em><strong>BitSail</strong></em> hudi connector supports reading and writing to hudi tables. The main function points are as follows:</p>
<ul>
<li>Support streaming write to Hudi table.</li>
<li>Support batch write to Hudi table.</li>
<li>Support batch read from Hudi table.</li>
</ul>
<h2 id="supported-hudi-versions" tabindex="-1"><a class="header-anchor" href="#supported-hudi-versions" aria-hidden="true">#</a> Supported hudi versions</h2>
<ul>
<li>0.11.1</li>
</ul>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-hudi&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi-reader" tabindex="-1"><a class="header-anchor" href="#hudi-reader" aria-hidden="true">#</a> Hudi reader</h2>
<h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3>
<ul>
<li></li>
<li>Basic Data types:
<ul>
<li>Integer type:
<ul>
<li>tinyint</li>
<li>smallint</li>
<li>int</li>
<li>bigint</li>
</ul>
</li>
<li>Float type:
<ul>
<li>float</li>
<li>double</li>
<li>decimal</li>
</ul>
</li>
<li>Time type:
<ul>
<li>timestamp</li>
<li>date</li>
</ul>
</li>
<li>String type:
<ul>
<li>string</li>
<li>varchar</li>
<li>char</li>
</ul>
</li>
<li>Bool type:
<ul>
<li>boolean</li>
</ul>
</li>
<li>Binary type:
<ul>
<li>binary</li>
</ul>
</li>
</ul>
</li>
<li>Composited data types:
<ul>
<li>map</li>
<li>array</li>
</ul>
</li>
</ul>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.reader</code> block when using, for example:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi read connector class name, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiSourceFunctionDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">the path of the table, could be HDFS, S3, or other file systems.</td>
</tr>
<tr>
<td style="text-align:left">table.type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">The type of the Hudi table, MERGE_ON_READ or COPY_ON_WRITE</td>
</tr>
<tr>
<td style="text-align:left">hoodie.datasource.query.type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Query type, could be <code v-pre>snapshot</code> or <code v-pre>read_optimized</code></td>
</tr>
</tbody>
</table>
<h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4>
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
<td style="text-align:left">reader_parallelism_num</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Read parallelism num</td>
</tr>
</tbody>
</table>
<h2 id="hudi-writer" tabindex="-1"><a class="header-anchor" href="#hudi-writer" aria-hidden="true">#</a> Hudi writer</h2>
<h3 id="supported-data-type" tabindex="-1"><a class="header-anchor" href="#supported-data-type" aria-hidden="true">#</a> Supported data type</h3>
<ul>
<li>Basic data types supported:
<ul>
<li>Integer type:
<ul>
<li>tinyint</li>
<li>smallint</li>
<li>int</li>
<li>bigint</li>
</ul>
</li>
<li>Float type:
<ul>
<li>float</li>
<li>double</li>
<li>decimal</li>
</ul>
</li>
<li>Time type:
<ul>
<li>timestamp</li>
<li>date</li>
</ul>
</li>
<li>String type:
<ul>
<li>string</li>
<li>varchar</li>
<li>char</li>
</ul>
</li>
<li>Bool type:
<ul>
<li>boolean</li>
</ul>
</li>
<li>Binary type:
<ul>
<li>binary</li>
</ul>
</li>
</ul>
</li>
<li>Composited data types supported:
<ul>
<li>map</li>
<li>array</li>
</ul>
</li>
</ul>
<h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.writer</code> block when using, for example:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters-1" tabindex="-1"><a class="header-anchor" href="#necessary-parameters-1" aria-hidden="true">#</a> Necessary parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Param name</th>
<th style="text-align:left">Is necessary</th>
<th style="text-align:left">Optional value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi write class name, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.sink.HudiSinkFunctionDAGBuilder</code></td>
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
<td style="text-align:left"><code v-pre>MERGE_ON_READ</code> <code v-pre>COPY_ON_WRITE</code></td>
</tr>
<tr>
<td style="text-align:left">path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">path to the Hudi table, could be HDFS, S3, or other file system. If path not exists, the table will be created on this path.</td>
</tr>
<tr>
<td style="text-align:left">format_type</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">format of the input data source, currently only support <code v-pre>json</code></td>
</tr>
<tr>
<td style="text-align:left">source_schema</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">schema used to deserialize source data.</td>
</tr>
<tr>
<td style="text-align:left">sink_schema</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">schema used to write hoodie data</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://hoodie.table.name" target="_blank" rel="noopener noreferrer">hoodie.table.name<ExternalLinkIcon/></a></td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">the name of the hoodie table</td>
</tr>
</tbody>
</table>
<h4 id="optional-parameters-1" tabindex="-1"><a class="header-anchor" href="#optional-parameters-1" aria-hidden="true">#</a> Optional parameters</h4>
<p>For more advance parameter, please checkout <code v-pre>FlinkOptions.java</code> class.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Param name</th>
<th style="text-align:left">Is necessary</th>
<th style="text-align:left">Optional value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">hoodie.datasource.write.recordkey.field</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">For <code v-pre>upsert</code> operation, we need to define the primary key.</td>
</tr>
<tr>
<td style="text-align:left">index.type</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">For <code v-pre>upsert</code> operation, we need to define the index type. could be <code v-pre>STATE</code> or <code v-pre>BUCKET</code></td>
</tr>
<tr>
<td style="text-align:left">hoodie.bucket.index.num.buckets</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">If we use Bucket index, we need to define the bucket number.</td>
</tr>
<tr>
<td style="text-align:left">hoodie.bucket.index.hash.field</td>
<td style="text-align:left">false</td>
<td style="text-align:left"></td>
<td style="text-align:left">If we use Bucket index, we need to define a field to determine hash index.</td>
</tr>
</tbody>
</table>
<h2 id="hudi-compaction" tabindex="-1"><a class="header-anchor" href="#hudi-compaction" aria-hidden="true">#</a> Hudi Compaction</h2>
<h3 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h3>
<p>Compaction has well-defined reader and writer parameters</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters-2" tabindex="-1"><a class="header-anchor" href="#necessary-parameters-2" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">Hudi compaction read connector class name, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSourceDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">job.writer.class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Hudi compaction writer connector class name, <code v-pre>com.bytedance.bitsail.connector.legacy.hudi.dag.HudiCompactSinkDAGBuilder</code></td>
</tr>
<tr>
<td style="text-align:left">job.reader.path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">the path of the table, could be HDFS, S3, or other file systems.</td>
</tr>
<tr>
<td style="text-align:left">job.writer.path</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">the path of the table, could be HDFS, S3, or other file systems.</td>
</tr>
</tbody>
</table>
<h4 id="optional-parameters-2" tabindex="-1"><a class="header-anchor" href="#optional-parameters-2" aria-hidden="true">#</a> Optional parameters</h4>
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
<td style="text-align:left">parallelism to process the compaction</td>
</tr>
</tbody>
</table>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration examples: <RouterLink to="/zh/documents/connectors/hudi/hudi-example.html">hudi-connector-example</RouterLink></p>
</div></template>


