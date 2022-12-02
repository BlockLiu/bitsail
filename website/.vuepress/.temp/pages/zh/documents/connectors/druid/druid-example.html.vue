<template><div><h1 id="druid-connector-configuration-examples" tabindex="-1"><a class="header-anchor" href="#druid-connector-configuration-examples" aria-hidden="true">#</a> Druid connector configuration examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/druid/druid.html">druid-connector</RouterLink></p>
<h2 id="druid-writer-example" tabindex="-1"><a class="header-anchor" href="#druid-writer-example" aria-hidden="true">#</a> Druid writer example</h2>
<p>Assuming there is a test druid cluster with master address &quot;127.0.0.1:64086&quot;, then we can use the following configuration to write into <code v-pre>test_druid_datasource</code> datasource.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"common"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"job_id"</span><span class="token operator">:</span> <span class="token number">-2413</span><span class="token punctuation">,</span>
      <span class="token property">"job_name"</span><span class="token operator">:</span> <span class="token string">"bitsail_fake_to_druid_test"</span><span class="token punctuation">,</span>
      <span class="token property">"instance_id"</span><span class="token operator">:</span> <span class="token number">-20413</span><span class="token punctuation">,</span>
      <span class="token property">"user_name"</span><span class="token operator">:</span> <span class="token string">"user"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.fake.source.FakeSource"</span><span class="token punctuation">,</span>
      <span class="token property">"total_count"</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
      <span class="token property">"rate"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">"null_percentage"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"int_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"long_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"float_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"float"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"double_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.kudu.sink.KuduSink"</span><span class="token punctuation">,</span>
      <span class="token property">"datasource"</span><span class="token operator">:</span> <span class="token string">"test_druid_datasource"</span><span class="token punctuation">,</span>
      <span class="token property">"coordinator_url"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1:64086"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"int_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"long_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"float_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"float"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"double_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


