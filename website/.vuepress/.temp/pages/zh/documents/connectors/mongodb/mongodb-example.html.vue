<template><div><h1 id="mongodb-connector-examples" tabindex="-1"><a class="header-anchor" href="#mongodb-connector-examples" aria-hidden="true">#</a> MongoDB connector examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/mongodb/mongodb.html">mongodb-connector</RouterLink></p>
<hr>
<p>Suppose starting a local MongoDB with connection url <code v-pre>mongodb://localhost:1234</code>.
We create a database <code v-pre>test_db</code> and a collection <code v-pre>test_collection</code> on it.</p>
<h2 id="mongodb-reader" tabindex="-1"><a class="header-anchor" href="#mongodb-reader" aria-hidden="true">#</a> MongoDB Reader</h2>
<p>If the documents contains (_id, string_field, int_field) these three fields, we can use the following configuration to read.</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb-writer" tabindex="-1"><a class="header-anchor" href="#mongodb-writer" aria-hidden="true">#</a> MongoDB Writer</h2>
<p>If you want to write (id, string_field, integer_field) these three fields into document, then you can use the following configuration.</p>
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


