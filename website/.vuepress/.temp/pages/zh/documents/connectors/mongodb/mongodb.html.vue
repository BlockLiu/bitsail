<template><div><h1 id="mongodb-connector" tabindex="-1"><a class="header-anchor" href="#mongodb-connector" aria-hidden="true">#</a> MongoDB connector</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p><em><strong>BitSail</strong></em> MongoDB connector supports reading and writing MongoDB. The main function points are as follows:</p>
<ul>
<li>Support batch read documents from give collection.</li>
<li>Support batch write to target collection.</li>
</ul>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-mongodb&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-reader" tabindex="-1"><a class="header-anchor" href="#mongodb-reader" aria-hidden="true">#</a> MongoDB Reader</h2>
<h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3>
<p>MongoDB parse data according to schema. The following data types are supported:</p>
<h4 id="basic-data-type" tabindex="-1"><a class="header-anchor" href="#basic-data-type" aria-hidden="true">#</a> Basic data type</h4>
<ul>
<li>string, character</li>
<li>boolean</li>
<li>short, int, long, float, double, bigint</li>
<li>date, time, timestamp</li>
</ul>
<h4 id="complex-data-type" tabindex="-1"><a class="header-anchor" href="#complex-data-type" aria-hidden="true">#</a> Complex data type</h4>
<ul>
<li>array, list</li>
<li>map</li>
</ul>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.reader</code> block when using, for example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.mongodb.source.MongoDBInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"collection_name"</span><span class="token operator">:</span> <span class="token string">"test_collection"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">Class name of MongoDB reader, <code v-pre>com.bytedance.bitsail.connector.legacy.mongodb.source.MongoDBInputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">db_name</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">database to read</td>
</tr>
<tr>
<td style="text-align:left">collection_name</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">collection to read</td>
</tr>
<tr>
<td style="text-align:left">hosts_str</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">Address of MongoDB, multi addresses are separated by comma</td>
</tr>
<tr>
<td style="text-align:left">host</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">host of MongoDB</td>
</tr>
<tr>
<td style="text-align:left">port</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">port of MongoDB</td>
</tr>
<tr>
<td style="text-align:left">split_pk</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Field for splitting</td>
</tr>
</tbody>
</table>
<ul>
<li>Note, You need only set either (hosts_str) or (hosts_str).  (hosts_str) has higher priority.</li>
<li>Format of hosts_str: <code v-pre>host1:port1,host2:port2,...</code></li>
</ul>
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
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB reader parallelism num</td>
</tr>
<tr>
<td style="text-align:left">user_name</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">user name for authentication</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">password for authentication</td>
</tr>
<tr>
<td style="text-align:left">auth_db_name</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">db for authentication</td>
</tr>
<tr>
<td style="text-align:left">reader_fetch_size</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Max number of documents fetched once .Default 100000</td>
</tr>
<tr>
<td style="text-align:left">filter</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Filter for collections.</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="mongodb-writer" tabindex="-1"><a class="header-anchor" href="#mongodb-writer" aria-hidden="true">#</a> MongoDB Writer</h2>
<h3 id="supported-data-types-1" tabindex="-1"><a class="header-anchor" href="#supported-data-types-1" aria-hidden="true">#</a> Supported data types</h3>
<p>MongoDB writer build a document for each record according to schema, and then insert it into collection.</p>
<p>Supported data types are:</p>
<h4 id="basic-data-type-1" tabindex="-1"><a class="header-anchor" href="#basic-data-type-1" aria-hidden="true">#</a> Basic data type</h4>
<ul>
<li>undefined</li>
<li>string</li>
<li>objectid</li>
<li>date</li>
<li>timestamp</li>
<li>bindata</li>
<li>bool</li>
<li>int</li>
<li>long</li>
<li>object</li>
<li>javascript</li>
<li>regex</li>
<li>double</li>
<li>decimal</li>
</ul>
<h4 id="complex-data-type-1" tabindex="-1"><a class="header-anchor" href="#complex-data-type-1" aria-hidden="true">#</a> Complex data type</h4>
<ul>
<li>array</li>
</ul>
<h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.writer</code> block when using, for example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.mongodb.sink.MongoDBOutputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"unique_key"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
      <span class="token property">"client_mode"</span><span class="token operator">:</span> <span class="token string">"url"</span><span class="token punctuation">,</span>
      <span class="token property">"mongo_url"</span><span class="token operator">:</span> <span class="token string">"mongodb://localhost:1234/test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"collection_name"</span><span class="token operator">:</span> <span class="token string">"test_collection"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string_field"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters-1" tabindex="-1"><a class="header-anchor" href="#necessary-parameters-1" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">Class name for MongoDB writer, <code v-pre>com.bytedance.bitsail.connector.legacy.mongodb.sink.MongoDBOutputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">db_name</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">database to write</td>
</tr>
<tr>
<td style="text-align:left">collection_name</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">collection to write</td>
</tr>
<tr>
<td style="text-align:left">client_mode</td>
<td style="text-align:left">yes</td>
<td style="text-align:left">url<br/>host_without_credential<br/>host_with_credential</td>
<td style="text-align:left">how to create mongo client</td>
</tr>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">Yes if client_mode=url</td>
<td style="text-align:left"></td>
<td style="text-align:left">Url for connecting MongoDB, like &quot;mongodb://localhost:1234&quot;</td>
</tr>
<tr>
<td style="text-align:left">mongo_hosts_str</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">Address of MongoDb, multi addresses are separated by comma</td>
</tr>
<tr>
<td style="text-align:left">mongo_host</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">host of MongoDB</td>
</tr>
<tr>
<td style="text-align:left">mongo_port</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">port of MongoDB</td>
</tr>
<tr>
<td style="text-align:left">user_name</td>
<td style="text-align:left">Yes if client_mode=host_with_credential</td>
<td style="text-align:left"></td>
<td style="text-align:left">user name  for authentication</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">Yes if client_mode=host_with_credential</td>
<td style="text-align:left"></td>
<td style="text-align:left">password for authentication</td>
</tr>
</tbody>
</table>
<ul>
<li>Note, when client_mode为host_without_credential or host_with_credential, you have to set either (mongo_hosts_str) or (mongo_host, mongo_port).</li>
</ul>
<h4 id="optional-parameters-1" tabindex="-1"><a class="header-anchor" href="#optional-parameters-1" aria-hidden="true">#</a> Optional parameters</h4>
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
<td style="text-align:left">Writer parallelism num</td>
</tr>
<tr>
<td style="text-align:left">pre_sql</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Sql executed before inserting collections.</td>
</tr>
<tr>
<td style="text-align:left">auth_db_name</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">db name for authentication</td>
</tr>
<tr>
<td style="text-align:left">batch_size</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Batch write number of documents, Default 100</td>
</tr>
<tr>
<td style="text-align:left">unique_key</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">Field for determining if document is unique</td>
</tr>
<tr>
<td style="text-align:left">connect_timeout_ms</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">connection timeout，default 10000 ms</td>
</tr>
<tr>
<td style="text-align:left">max_wait_time_ms</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">timeout when getting connection from connection pool，default 120000 ms</td>
</tr>
<tr>
<td style="text-align:left">socket_timeout_ms</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">socket timeout，default 0 (means infinity)</td>
</tr>
<tr>
<td style="text-align:left">write_concern</td>
<td style="text-align:left">no</td>
<td style="text-align:left">0, 1, 2, 3</td>
<td style="text-align:left">Data writing guarantee level, default 1</td>
</tr>
</tbody>
</table>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration examples: <RouterLink to="/zh/documents/connectors/mongodb/mongodb-example.html">mongodb-connector-example</RouterLink></p>
</div></template>


