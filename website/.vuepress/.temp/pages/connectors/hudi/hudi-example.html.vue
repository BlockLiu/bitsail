<template><div><h1 id="hudi连接器使用示例" tabindex="-1"><a class="header-anchor" href="#hudi连接器使用示例" aria-hidden="true">#</a> Hudi连接器使用示例</h1>
<h2 id="hudi读连接器示例" tabindex="-1"><a class="header-anchor" href="#hudi读连接器示例" aria-hidden="true">#</a> Hudi读连接器示例</h2>
<p>读取hudi表的用户配置:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi写连接器示例" tabindex="-1"><a class="header-anchor" href="#hudi写连接器示例" aria-hidden="true">#</a> Hudi写连接器示例</h2>
<p>写入hudi表的用户配置:</p>
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
      <span class="token property">"format_type"</span><span class="token operator">:</span> <span class="token string">"json"</span><span class="token punctuation">,</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi-compaction示例" tabindex="-1"><a class="header-anchor" href="#hudi-compaction示例" aria-hidden="true">#</a> Hudi compaction示例</h2>
<p>实例参数用于压缩Hudi表:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/path/to/table"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.hudi.source.HudiCompactSourceDAGBuilder"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"writer"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"path"</span><span class="token operator">:</span><span class="token string">"/path/to/table"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.hudi.sink.HudiCompactSinkDAGBuilder"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


