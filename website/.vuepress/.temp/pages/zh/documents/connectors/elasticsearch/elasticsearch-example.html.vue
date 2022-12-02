<template><div><h1 id="elasticsearch-connector-examples" tabindex="-1"><a class="header-anchor" href="#elasticsearch-connector-examples" aria-hidden="true">#</a> Elasticsearch connector examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/elasticsearch/elasticsearch.html">elasticsearch-connector</RouterLink></p>
<p>The following configuration shows how to organize parameter configuration to write the specified Elasticsearch index.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.elasticsearch.sink.ElasticsearchSink"</span><span class="token punctuation">,</span>
      <span class="token property">"es_id_fields"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
      <span class="token property">"es_index"</span><span class="token operator">:</span> <span class="token string">"es_index_test"</span><span class="token punctuation">,</span>
      <span class="token property">"es_hosts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"http://localhost:1234"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"json_serializer_features"</span><span class="token operator">:</span> <span class="token string">"QuoteFieldNames,UseSingleQuotes"</span><span class="token punctuation">,</span>
      <span class="token property">"bulk_backoff_max_retry_count"</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"double_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"text_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"text"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"bigint_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


