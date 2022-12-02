<template><div><h1 id="doris-connector" tabindex="-1"><a class="header-anchor" href="#doris-connector" aria-hidden="true">#</a> Doris connector</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p><em><strong>BitSail</strong></em> Doris connector supports writing doris. The main function points are as follows:</p>
<ul>
<li>Use StreamLoad to write doris.</li>
<li>Support firstly create and then write partition</li>
</ul>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-doris&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doris-writer" tabindex="-1"><a class="header-anchor" href="#doris-writer" aria-hidden="true">#</a> Doris Writer</h2>
<h3 id="supported-data-type" tabindex="-1"><a class="header-anchor" href="#supported-data-type" aria-hidden="true">#</a> Supported data type</h3>
<p>Doris writer uses stream load, and the content type can be csv or json.
It supports common data type in doris:</p>
<ul>
<li>CHAR</li>
<li>VARCHAR</li>
<li>TEXT</li>
<li>BOOLEAN</li>
<li>BINARY</li>
<li>VARBINARY</li>
<li>DECIMAL</li>
<li>DECIMALV2</li>
<li>INT</li>
<li>TINYINT</li>
<li>SMALLINT</li>
<li>INTEGER</li>
<li>INTERVAL_YEAR_MONTH</li>
<li>INTERVAL_DAY_TIME</li>
<li>BIGINT</li>
<li>LARGEINT</li>
<li>FLOAT</li>
<li>DOUBLE</li>
<li>DATE</li>
<li>DATETIME</li>
</ul>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.writer</code> block when using, for example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.doris.sink.DorisSink"</span><span class="token punctuation">,</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"table_name"</span><span class="token operator">:</span> <span class="token string">"test_doris_table"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Doris writer class name, <code v-pre>com.bytedance.bitsail.connector.doris.sink.DorisSink</code></td>
</tr>
<tr>
<td style="text-align:left">fe_hosts</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Doris FE address, multi addresses separated by comma</td>
</tr>
<tr>
<td style="text-align:left">mysql_hosts</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Doris jdbc query address , multi addresses separated by comma</td>
</tr>
<tr>
<td style="text-align:left">user</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Doris account user</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Doris account password, can be empty</td>
</tr>
<tr>
<td style="text-align:left">db_name</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">database to write</td>
</tr>
<tr>
<td style="text-align:left">table_name</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">table to write</td>
</tr>
<tr>
<td style="text-align:left">partitions</td>
<td style="text-align:left">Yes if target table has partition</td>
<td style="text-align:left"></td>
<td style="text-align:left">target partition to write</td>
</tr>
<tr>
<td style="text-align:left">table_has_partition</td>
<td style="text-align:left">Yes if target table does not have partition</td>
<td style="text-align:left"></td>
<td style="text-align:left">True if target table does not have partition</td>
</tr>
<tr>
<td style="text-align:left">table_model</td>
<td style="text-align:left">yes</td>
<td style="text-align:left">UNIQUE</td>
<td style="text-align:left">Table model of target table. Currently only support unique table.</td>
</tr>
</tbody>
</table>
<!--AGGREGATE<br/>DUPLICATE-->
<p>Notice, <code v-pre>partitions</code> has following requirements:</p>
<ol>
<li>You can determine multi partitions</li>
<li>Each partition should contain:
<ol>
<li><code v-pre>name</code>: name of the partition</li>
<li><code v-pre>start_range</code>, <code v-pre>end_range</code>: left and right range of the partition</li>
</ol>
</li>
</ol>
<p>partitions example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"partitions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"p20220210_03"</span><span class="token punctuation">,</span>
      <span class="token property">"start_range"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"2022-02-10"</span><span class="token punctuation">,</span>
        <span class="token string">"3"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"end_range"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"2022-02-10"</span><span class="token punctuation">,</span>
        <span class="token string">"4"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"p20220211_03"</span><span class="token punctuation">,</span>
      <span class="token property">"start_range"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"2022-02-11"</span><span class="token punctuation">,</span>
        <span class="token string">"3"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"end_range"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">"2022-02-11"</span><span class="token punctuation">,</span>
        <span class="token string">"4"</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4>
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
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Writer parallelism num</td>
</tr>
<tr>
<td style="text-align:left">sink_flush_interval_ms</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Flush interval in upsert mode, default 5000 ms</td>
</tr>
<tr>
<td style="text-align:left">sink_max_retries</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Max retry times, default 3</td>
</tr>
<tr>
<td style="text-align:left">sink_buffer_size</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Max size of buffer, default 20971520 bytes (20MB)</td>
</tr>
<tr>
<td style="text-align:left">sink_buffer_count</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Max number of records can be buffered, default 100000</td>
</tr>
<tr>
<td style="text-align:left">sink_write_mode</td>
<td style="text-align:left">no</td>
<td style="text-align:left">STREAMING_UPSERT<br/>BATCH_UPSERT<br/>BATCH_REPLACE</td>
<td style="text-align:left">Write mode.</td>
</tr>
<tr>
<td style="text-align:left">stream_load_properties</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Stream load parameters that will be append to the stream load url. Format is standard json map.</td>
</tr>
<tr>
<td style="text-align:left">load_contend_type</td>
<td style="text-align:left">no</td>
<td style="text-align:left">csv<br/>json</td>
<td style="text-align:left">Content format of streamload, default json</td>
</tr>
<tr>
<td style="text-align:left">csv_field_delimiter</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">field delimiter used in csv, default &quot;,&quot;</td>
</tr>
<tr>
<td style="text-align:left">csv_line_delimiter</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">line delimiter used in csv, default &quot;\n&quot;</td>
</tr>
</tbody>
</table>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration examples: <RouterLink to="/zh/documents/connectors/doris/doris-example.html">doris-connector-example</RouterLink></p>
</div></template>


