<template><div><h1 id="redis连接器配置示例" tabindex="-1"><a class="header-anchor" href="#redis连接器配置示例" aria-hidden="true">#</a> Redis连接器配置示例</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/redis/redis_zh.html">redis-connector</RouterLink></p>
<h2 id="redis写连接器" tabindex="-1"><a class="header-anchor" href="#redis写连接器" aria-hidden="true">#</a> Redis写连接器</h2>
<p>假设在本地起了一个端口为6379的Redis。用于写入该Redis的配置如下:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat"</span><span class="token punctuation">,</span>
       <span class="token property">"redis_data_type"</span><span class="token operator">:</span> <span class="token string">"string"</span><span class="token punctuation">,</span>
       <span class="token property">"redis_host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
       <span class="token property">"redis_port"</span><span class="token operator">:</span> <span class="token number">6379</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


