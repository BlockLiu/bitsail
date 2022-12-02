<template><div><h1 id="mongodb连接器配置示例" tabindex="-1"><a class="header-anchor" href="#mongodb连接器配置示例" aria-hidden="true">#</a> MongoDB连接器配置示例</h1>
<p>父目录: <RouterLink to="/zh/documents/connectors/mongodb/mongodb_zh.html">mongodb-connector</RouterLink></p>
<hr>
<p>假设在本地启动了一个mongoDB，连接地址为mongodb://localhost:1234。在其中创建了名为 <code v-pre>test_db</code> 的database和名为 <code v-pre>test_collection</code> 的文档集合。</p>
<h2 id="mongodb读连接器" tabindex="-1"><a class="header-anchor" href="#mongodb读连接器" aria-hidden="true">#</a> MongoDB读连接器</h2>
<p>假设想在文档包含 _id, string_field, int_field 三个字段，则可用如下配置读取。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.mongodb.source.MongoDBInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"split_key"</span><span class="token operator">:</span> <span class="token string">"_id"</span><span class="token punctuation">,</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"collection_name"</span><span class="token operator">:</span> <span class="token string">"test_collection"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"_id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"objectid"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string_field"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"int_field"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"reader_parallelism_num"</span><span class="token operator">:</span><span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb写连接器" tabindex="-1"><a class="header-anchor" href="#mongodb写连接器" aria-hidden="true">#</a> MongoDB写连接器</h2>
<p>假设想在文档中写入 id, string_field, integer_field 三个字段，那么可以用如下配置进行写入。</p>
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
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"integer_field"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


