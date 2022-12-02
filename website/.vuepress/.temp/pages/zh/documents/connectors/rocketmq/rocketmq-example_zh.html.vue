<template><div><h1 id="rocketmq连接器配置示例" tabindex="-1"><a class="header-anchor" href="#rocketmq连接器配置示例" aria-hidden="true">#</a> RocketMQ连接器配置示例</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/rocketmq/rocketmq_zh.html">rocketmq-connector</RouterLink></p>
<h2 id="rocketmq-writer-example" tabindex="-1"><a class="header-anchor" href="#rocketmq-writer-example" aria-hidden="true">#</a> RocketMQ Writer example</h2>
<p>假设我们在本地启动了一个RocketMQ服务，其name server地址为 &quot;127.0.0.1:9876&quot;, 并且我们在其中创建了一个名为 &quot;test_topic&quot; 的topic。</p>
<p>那么我们可以使用如下的配置文档写入上述topic：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.rocketmq.sink.RocketMQOutputFormat"</span><span class="token punctuation">,</span>
       <span class="token property">"name_server_address"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1:9876"</span><span class="token punctuation">,</span>
       <span class="token property">"topic"</span><span class="token operator">:</span> <span class="token string">"test_topic"</span><span class="token punctuation">,</span>
       
       <span class="token property">"producer_group"</span><span class="token operator">:</span> <span class="token string">"test_producer_group"</span><span class="token punctuation">,</span>
       <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"itcase_test"</span><span class="token punctuation">,</span>
       <span class="token property">"key"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
       <span class="token property">"partition_fields"</span><span class="token operator">:</span> <span class="token string">"id,date_field"</span><span class="token punctuation">,</span>
       
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
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"int_field"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"double_field"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"date_field"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"date"</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


