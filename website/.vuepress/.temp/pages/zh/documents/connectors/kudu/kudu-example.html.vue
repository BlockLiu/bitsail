<template><div><h1 id="kudu-connector-configration-examples" tabindex="-1"><a class="header-anchor" href="#kudu-connector-configration-examples" aria-hidden="true">#</a> Kudu connector configration examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/kudu/kudu.html">kudu-connector</RouterLink></p>
<h2 id="kudu-reader-example" tabindex="-1"><a class="header-anchor" href="#kudu-reader-example" aria-hidden="true">#</a> Kudu reader example</h2>
<p>Assuming there is a test kudu cluster with master address &quot;127.0.0.1:64086&quot;, then we can use the following configuration to read <code v-pre>test_kudu_table</code> table.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">"common"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"instance_id"</span><span class="token operator">:</span><span class="token number">3124</span><span class="token punctuation">,</span>
      <span class="token property">"job_name"</span><span class="token operator">:</span><span class="token string">"bitsail_kudu_to_print_test"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"reader"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"kudu_table_name"</span><span class="token operator">:</span><span class="token string">"test_kudu_table"</span><span class="token punctuation">,</span>
      <span class="token property">"kudu_master_address_list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">"127.0.0.1:64086"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"read_mode"</span><span class="token operator">:</span><span class="token string">"READ_LATEST"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"key"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"int64"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"field_boolean"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"boolean"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"field_int"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"field_double"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"double"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"field_date"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"date"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"field_string"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"field_binary"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"binary"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"split_config"</span><span class="token operator">:</span><span class="token string">"{\"complete\":false,\"lower_bound\":500,\"name\":\"key\",\"split_num\":3}"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.kudu.source.KuduSource"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"writer"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.print.sink.PrintSink"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kudu-writer-example" tabindex="-1"><a class="header-anchor" href="#kudu-writer-example" aria-hidden="true">#</a> Kudu writer example</h2>
<p>Assuming there is a test kudu cluster with master address &quot;127.0.0.1:64086&quot;, then we can use the following configuration to write into <code v-pre>test_kudu_table</code> table.</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"common"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"job_id"</span><span class="token operator">:</span> <span class="token number">-2413</span><span class="token punctuation">,</span>
      <span class="token property">"job_name"</span><span class="token operator">:</span> <span class="token string">"bitsail_fake_to_kudu_test"</span><span class="token punctuation">,</span>
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
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"key"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span><span class="token punctuation">,</span>
          <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token string">"unique"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"fake_boolean"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"boolean"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"fake_int"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"fake_double"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"fake_date"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"date.date"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"fake_string"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"fake_binary"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"binary"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.kudu.sink.KuduSink"</span><span class="token punctuation">,</span>
      <span class="token property">"kudu_worker_count"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">"kudu_table_name"</span><span class="token operator">:</span><span class="token string">"test_kudu_table"</span><span class="token punctuation">,</span>
      <span class="token property">"kudu_master_address_list"</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token string">"127.0.0.1:64086"</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"key"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span><span class="token punctuation">,</span>
          <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token string">"unique"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"field_boolean"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"boolean"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"field_int"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"field_double"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"field_date"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"date"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"field_string"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
          <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token string">"nullable"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"field_binary"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"binary"</span><span class="token punctuation">,</span>
          <span class="token property">"properties"</span><span class="token operator">:</span> <span class="token string">"nullable"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


