<template><div><h1 id="hive连接器使用示例" tabindex="-1"><a class="header-anchor" href="#hive连接器使用示例" aria-hidden="true">#</a> Hive连接器使用示例</h1>
<p>下面展示如何使用用户参数配置读取测试hive表:</p>
<h2 id="测试hive表信息" tabindex="-1"><a class="header-anchor" href="#测试hive表信息" aria-hidden="true">#</a> 测试hive表信息</h2>
<ul>
<li>示例hive信息：
<ul>
<li>
<p>hive库名: test_db</p>
</li>
<li>
<p>hive表名: test_table</p>
</li>
<li>
<p>metastore uri地址: <code v-pre>thrift://localhost:9083</code></p>
</li>
<li>
<p>分区: p_date</p>
</li>
<li>
<p>表结构:</p>
<table>
<thead>
<tr>
<th>字段名</th>
<th>字段类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>bigint</td>
<td></td>
</tr>
<tr>
<td>state</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>county</td>
<td>string</td>
<td></td>
</tr>
<tr>
<td>p_date</td>
<td>string</td>
<td>分区字段</td>
</tr>
</tbody>
</table>
</li>
</ul>
</li>
</ul>
<h2 id="hive读连接器示例" tabindex="-1"><a class="header-anchor" href="#hive读连接器示例" aria-hidden="true">#</a> hive读连接器示例</h2>
<p>读取上述测试hive表的用户配置:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive写连接器示例" tabindex="-1"><a class="header-anchor" href="#hive写连接器示例" aria-hidden="true">#</a> hive写连接器示例</h2>
<p>写入上述测试hive表的用户配置:</p>
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


