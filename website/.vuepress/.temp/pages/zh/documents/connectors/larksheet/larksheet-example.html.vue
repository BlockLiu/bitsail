<template><div><h1 id="larksheet-connector-examples" tabindex="-1"><a class="header-anchor" href="#larksheet-connector-examples" aria-hidden="true">#</a> LarkSheet connector examples</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/connectors/larksheet/larksheet.html">larksheet-connector</RouterLink></p>
<h2 id="reader-example" tabindex="-1"><a class="header-anchor" href="#reader-example" aria-hidden="true">#</a> Reader example</h2>
<p>The sheets to be read are:</p>
<ul>
<li><a href="https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq" target="_blank" rel="noopener noreferrer">test_sheet_1<ExternalLinkIcon/></a></li>
<li><a href="https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=FJhAlN" target="_blank" rel="noopener noreferrer">test_sheet_2<ExternalLinkIcon/></a></li>
</ul>
<p>Here is the example job configuration:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"sheet_urls"</span><span class="token operator">:</span> <span class="token string">"https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq,https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=FJhAlN"</span><span class="token punctuation">,</span>
      <span class="token property">"app_id"</span><span class="token operator">:</span> <span class="token string">"fake_app_id"</span><span class="token punctuation">,</span>
      <span class="token property">"app_secret"</span><span class="token operator">:</span> <span class="token string">"fake_app_secret"</span><span class="token punctuation">,</span>
      <span class="token property">"batch_size"</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">"skip_nums"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"year"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"month"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"day"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"日期"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


