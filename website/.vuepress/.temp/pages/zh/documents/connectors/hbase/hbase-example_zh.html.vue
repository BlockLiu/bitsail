<template><div><h1 id="hbase-连接器示例" tabindex="-1"><a class="header-anchor" href="#hbase-连接器示例" aria-hidden="true">#</a> Hbase 连接器示例</h1>
<hr>
<p>父目录: <RouterLink to="/zh/documents/connectors/hbase/hbase_zh.html">HBase连接器</RouterLink></p>
<h2 id="读写的hbase配置示例" tabindex="-1"><a class="header-anchor" href="#读写的hbase配置示例" aria-hidden="true">#</a> 读写的HBase配置示例</h2>
<ul>
<li>在本地使用docker启动一个HBase集群，则默认配置为：</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"hbase.zookeeper.quorum"</span><span class="token operator">:</span><span class="token string">"127.0.0.1"</span><span class="token punctuation">,</span>
  <span class="token property">"hbase.zookeeper.property.clientPort"</span><span class="token operator">:</span><span class="token string">"2181"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>创建一张名为<code v-pre>test_table</code>的表，有三个column family:</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>create <span class="token string">'test_table'</span>, <span class="token string">'cf1'</span>, <span class="token string">'cf2'</span>, <span class="token string">'cf3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="读连接器示例" tabindex="-1"><a class="header-anchor" href="#读连接器示例" aria-hidden="true">#</a> 读连接器示例</h2>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="写连接器示例" tabindex="-1"><a class="header-anchor" href="#写连接器示例" aria-hidden="true">#</a> 写连接器示例</h2>
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


