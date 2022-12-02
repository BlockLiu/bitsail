<template><div><h1 id="redis-connector-examples" tabindex="-1"><a class="header-anchor" href="#redis-connector-examples" aria-hidden="true">#</a> Redis connector examples</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/redis/redis.html">redis-connector</RouterLink></p>
<h2 id="redis-writer-example" tabindex="-1"><a class="header-anchor" href="#redis-writer-example" aria-hidden="true">#</a> Redis Writer example</h2>
<p>Suppose we start a local Redis with port 6379.</p>
<p>Configuration for writing the Redis cluster is:</p>
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


