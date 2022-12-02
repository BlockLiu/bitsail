<template><div><h1 id="hadoop连接器使用示例" tabindex="-1"><a class="header-anchor" href="#hadoop连接器使用示例" aria-hidden="true">#</a> Hadoop连接器使用示例</h1>
<p>上级文档: <RouterLink to="/zh/documents/connectors/hadoop/hadoop_zh.html">hadoop连接器</RouterLink></p>
<p>下面展示了如何使用用户参数配置读取如下json格式hdfs文件。</p>
<ul>
<li>示例json数据</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">"id"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">"string_type"</span><span class="token operator">:</span><span class="token string">"test_string"</span><span class="token punctuation">,</span><span class="token property">"map_string_string"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">"k1"</span><span class="token operator">:</span><span class="token string">"v1"</span><span class="token punctuation">,</span><span class="token property">"k2"</span><span class="token operator">:</span><span class="token string">"v2"</span><span class="token punctuation">,</span><span class="token property">"k3"</span><span class="token operator">:</span><span class="token string">"v3"</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">"array_string"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"a1"</span><span class="token punctuation">,</span><span class="token string">"a2"</span><span class="token punctuation">,</span><span class="token string">"a3"</span><span class="token punctuation">,</span><span class="token string">"a4"</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>用于读取上述格式hdfs文件的配置</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.hadoop.source.HadoopInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"path_list"</span><span class="token operator">:</span> <span class="token string">"hdfs://test_namespace/test.json"</span><span class="token punctuation">,</span>
      <span class="token property">"content_type"</span><span class="token operator">:</span><span class="token string">"json"</span><span class="token punctuation">,</span>
      <span class="token property">"reader_parallelism_num"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"int"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string_type"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"map_string_string"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"map&lt;string,string>"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"array_string"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"list&lt;string>"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


