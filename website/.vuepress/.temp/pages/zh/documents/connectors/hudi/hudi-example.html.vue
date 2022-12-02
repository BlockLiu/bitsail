<template><div><h1 id="hudi-connector-examples" tabindex="-1"><a class="header-anchor" href="#hudi-connector-examples" aria-hidden="true">#</a> Hudi connector examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/hudi/hudi.html">hudi-connector</RouterLink></p>
<h2 id="hudi-reader-example" tabindex="-1"><a class="header-anchor" href="#hudi-reader-example" aria-hidden="true">#</a> Hudi reader example</h2>
<p>Configuration for reading the test hudi table:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi-writer-example" tabindex="-1"><a class="header-anchor" href="#hudi-writer-example" aria-hidden="true">#</a> Hudi writer example</h2>
<p>Configuration for writing the test hudi table:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hudi-compaction-example" tabindex="-1"><a class="header-anchor" href="#hudi-compaction-example" aria-hidden="true">#</a> Hudi compaction example</h2>
<p>Configuration for compacting the test hudi table:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


