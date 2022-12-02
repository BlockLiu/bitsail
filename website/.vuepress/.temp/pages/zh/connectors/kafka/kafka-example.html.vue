<template><div><h1 id="kafka连接器使用示例" tabindex="-1"><a class="header-anchor" href="#kafka连接器使用示例" aria-hidden="true">#</a> Kafka连接器使用示例</h1>
<h2 id="测试kafka配置示例" tabindex="-1"><a class="header-anchor" href="#测试kafka配置示例" aria-hidden="true">#</a> 测试Kafka配置示例</h2>
<p>假设测试使用的kafka配置如下:</p>
<ul>
<li><code v-pre>bootstrap.servers</code>: PLAINTEXT://localhost:9092</li>
<li><code v-pre>topic</code>: test_topic</li>
<li><code v-pre>group_id</code>: test_consumer_group</li>
</ul>
<h2 id="kafka读连接器示例" tabindex="-1"><a class="header-anchor" href="#kafka读连接器示例" aria-hidden="true">#</a> Kafka读连接器示例</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">"connector"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"connector"</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">"bootstrap.servers"</span><span class="token operator">:</span><span class="token string">"PLAINTEXT://localhost:9092"</span><span class="token punctuation">,</span>
          <span class="token property">"topic"</span><span class="token operator">:</span><span class="token string">"test_topic"</span><span class="token punctuation">,</span>
          <span class="token property">"startup-mode"</span><span class="token operator">:</span><span class="token string">"earliest-offset"</span><span class="token punctuation">,</span>
          <span class="token property">"group"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">"id"</span><span class="token operator">:</span><span class="token string">"test_consumer_group"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"child_connector_type"</span><span class="token operator">:</span><span class="token string">"kafka"</span><span class="token punctuation">,</span>
      <span class="token property">"format_type"</span><span class="token operator">:</span> <span class="token string">"json"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span>
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
      <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.kafka.source.KafkaSourceFunctionDAGBuilder"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka写连接器示例" tabindex="-1"><a class="header-anchor" href="#kafka写连接器示例" aria-hidden="true">#</a> Kafka写连接器示例</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.kafka.sink.KafkaOutputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"kafka_servers"</span><span class="token operator">:</span> <span class="token string">"PLAINTEXT://localhost:9092"</span><span class="token punctuation">,</span>
      <span class="token property">"topic_name"</span><span class="token operator">:</span> <span class="token string">"test_topic"</span><span class="token punctuation">,</span>
      <span class="token property">"writer_parallelism_num"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      <span class="token property">"log_failures_only"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"long"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"state"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"county"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


