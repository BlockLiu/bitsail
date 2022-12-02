<template><div><h1 id="hive-connector-examples" tabindex="-1"><a class="header-anchor" href="#hive-connector-examples" aria-hidden="true">#</a> Hive connector examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/hive/hive.html">hive-connector</RouterLink></p>
<p>The following shows test hive table with user parameters and how to read/write it with hive connectors.</p>
<h2 id="test-hive-table-information" tabindex="-1"><a class="header-anchor" href="#test-hive-table-information" aria-hidden="true">#</a> Test hive table information</h2>
<ul>
<li>Example hive info:
<ul>
<li>
<p>hive database name: test_db</p>
</li>
<li>
<p>hive table name: test_table</p>
</li>
<li>
<p>metastore uri: <code v-pre>thrift://localhost:9083</code></p>
</li>
<li>
<p>partition: p_date</p>
</li>
<li>
<p>DDL:</p>
<table>
<thead>
<tr>
<th>filed name</th>
<th>field type</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>bigint</td>
<td>-</td>
</tr>
<tr>
<td>state</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>county</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>p_date</td>
<td>string</td>
<td>partition tield</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<h2 id="hive-reader-example" tabindex="-1"><a class="header-anchor" href="#hive-reader-example" aria-hidden="true">#</a> Hive reader example</h2>
<p>Configuration for reading the above test hive table:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.hive.source.HiveInputFormat"</span><span class="token punctuation">,</span>
         <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
               <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span>
               <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"county"</span><span class="token punctuation">,</span>
               <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
         <span class="token property">"table_name"</span><span class="token operator">:</span> <span class="token string">"test_table"</span><span class="token punctuation">,</span>
         <span class="token property">"metastore_properties"</span><span class="token operator">:</span> <span class="token string">"{\"hive.metastore.uris\":\"thrift://localhost:9083\"}"</span><span class="token punctuation">,</span>
         <span class="token property">"partition"</span><span class="token operator">:</span> <span class="token string">"p_date=20220101"</span><span class="token punctuation">,</span>
         <span class="token property">"reader_parallelism_num"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-writer-example" tabindex="-1"><a class="header-anchor" href="#hive-writer-example" aria-hidden="true">#</a> Hive writer example</h2>
<p>Configuration for writing the above test hive table:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.hive.sink.HiveOutputFormat"</span><span class="token punctuation">,</span>
         <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
               <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
               <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span>
               <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
               <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"county"</span><span class="token punctuation">,</span>
               <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
            <span class="token punctuation">}</span>
         <span class="token punctuation">]</span><span class="token punctuation">,</span>
         <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
         <span class="token property">"table_name"</span><span class="token operator">:</span> <span class="token string">"test_table"</span><span class="token punctuation">,</span>
         <span class="token property">"metastore_properties"</span><span class="token operator">:</span> <span class="token string">"{\"hive.metastore.uris\":\"thrift://localhost:9083\"}"</span><span class="token punctuation">,</span>
         <span class="token property">"partition"</span><span class="token operator">:</span> <span class="token string">"p_date=20220101"</span><span class="token punctuation">,</span>
         <span class="token property">"writer_parallelism_num"</span><span class="token operator">:</span> <span class="token number">1</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


