<template><div><h1 id="hbase-connector-examples" tabindex="-1"><a class="header-anchor" href="#hbase-connector-examples" aria-hidden="true">#</a> Hbase connector examples</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/connectors/hbase/hbase.html">HBase connector</RouterLink></p>
<h2 id="hbase-configuration" tabindex="-1"><a class="header-anchor" href="#hbase-configuration" aria-hidden="true">#</a> HBase configuration</h2>
<ul>
<li>Using docker to start an HBase cluster in local, then the default configuration used by it is:</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"hbase.zookeeper.quorum"</span><span class="token operator">:</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
  <span class="token property">"hbase.zookeeper.property.clientPort"</span><span class="token operator">:</span><span class="token string">"2181"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>Create a table <code v-pre>test_table</code> with three column families:</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>create <span class="token string">'test_table'</span>, <span class="token string">'cf1'</span>, <span class="token string">'cf2'</span>, <span class="token string">'cf3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="reader-example" tabindex="-1"><a class="header-anchor" href="#reader-example" aria-hidden="true">#</a> Reader Example</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"common"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"job_id"</span><span class="token operator">:</span> <span class="token number">-250134</span><span class="token punctuation">,</span>
      <span class="token property">"job_name"</span><span class="token operator">:</span> <span class="token string">"bitsail_hbase_to_print_test"</span><span class="token punctuation">,</span>
      <span class="token property">"instance_id"</span><span class="token operator">:</span> <span class="token number">-2050134</span><span class="token punctuation">,</span>
      <span class="token property">"user_name"</span><span class="token operator">:</span> <span class="token string">"user"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.hbase.source.HBaseInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"table"</span><span class="token operator">:</span> <span class="token string">"test_table"</span><span class="token punctuation">,</span>
      <span class="token property">"hbase_conf"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"hbase.zookeeper.quorum"</span><span class="token operator">:</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
        <span class="token property">"hbase.zookeeper.property.clientPort"</span><span class="token operator">:</span><span class="token string">"2181"</span>
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
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf2:str2"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf3:int3"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"reader_parallelism_num"</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.print.sink.PrintSink"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="writer-example" tabindex="-1"><a class="header-anchor" href="#writer-example" aria-hidden="true">#</a> Writer Example</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"common"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"job_id"</span><span class="token operator">:</span> <span class="token number">-2314</span><span class="token punctuation">,</span>
      <span class="token property">"job_name"</span><span class="token operator">:</span> <span class="token string">"bitsail_fake_to_hbase_test"</span><span class="token punctuation">,</span>
      <span class="token property">"instance_id"</span><span class="token operator">:</span> <span class="token number">-20314</span><span class="token punctuation">,</span>
      <span class="token property">"user_name"</span><span class="token operator">:</span> <span class="token string">"root"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.fake.source.FakeSource"</span><span class="token punctuation">,</span>
      <span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token property">"rate"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">"random_null_rate"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"str1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"int1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"str2"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"int3"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
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
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf2:str2"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"cf3:int3"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


