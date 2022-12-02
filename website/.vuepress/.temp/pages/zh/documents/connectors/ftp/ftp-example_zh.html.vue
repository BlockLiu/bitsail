<template><div><h1 id="ftp-sftp连接器使用示例" tabindex="-1"><a class="header-anchor" href="#ftp-sftp连接器使用示例" aria-hidden="true">#</a> FTP/SFTP连接器使用示例</h1>
<p>上级文档: <RouterLink to="/zh/documents/connectors/ftp/hadoop_zh.html">FTP/SFTP连接器</RouterLink></p>
<p>下面展示了如何使用用户参数配置读取如下csv格式文件。</p>
<ul>
<li>示例csv数据</li>
</ul>
<div class="language-csv line-numbers-mode" data-ext="csv"><pre v-pre class="language-csv"><code><span class="token value">c1</span><span class="token punctuation">,</span><span class="token value">c2</span>
<span class="token value">aaa</span><span class="token punctuation">,</span><span class="token value">bbb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>用于读取上述格式文件的配置</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.ftp.source.FtpInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"protocol"</span><span class="token operator">:</span><span class="token string">"FTP"</span><span class="token punctuation">,</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">21</span><span class="token punctuation">,</span>
      <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"user"</span><span class="token punctuation">,</span>
      <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"password"</span><span class="token punctuation">,</span>
      <span class="token property">"path_list"</span><span class="token operator">:</span> <span class="token string">"/upload/"</span><span class="token punctuation">,</span>
      <span class="token property">"success_file_path"</span><span class="token operator">:</span> <span class="token string">"/upload/_SUCCESS"</span><span class="token punctuation">,</span>
      <span class="token property">"content_type"</span><span class="token operator">:</span> <span class="token string">"csv"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"c1"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"c2"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


