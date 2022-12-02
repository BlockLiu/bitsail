<template><div><h1 id="飞书表格连接器" tabindex="-1"><a class="header-anchor" href="#飞书表格连接器" aria-hidden="true">#</a> 飞书表格连接器</h1>
<p><em><strong>Bitsail</strong></em>飞书表格连接器可用于支持读取飞书表格，主要功能如下:</p>
<ul>
<li>支持批式一次读取多张飞书表格</li>
<li>支持token和 <a href="https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology?lang=en-US" target="_blank" rel="noopener noreferrer">application<ExternalLinkIcon/></a> 两种鉴权方式</li>
<li>支持读取表格中的部分列</li>
</ul>
<h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-larksheet&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="飞书表格读取" tabindex="-1"><a class="header-anchor" href="#飞书表格读取" aria-hidden="true">#</a> 飞书表格读取</h3>
<h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3>
<p>飞书表格连接器以 <code v-pre>string</code> 格式读取所有数据。</p>
<h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3>
<p>读连接器参数在<code v-pre>job.reader</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"sheet_urls"</span><span class="token operator">:</span> <span class="token string">"https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq"</span><span class="token punctuation">,</span>
      <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"datetime"</span><span class="token punctuation">,</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"string"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">飞书表格读连接器名, <code v-pre>com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">sheet_urls</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要读取的飞书表格列表。多个列表链接用英文逗号分隔</td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">描述字段名称和字段类型。字段名称与飞书表格中的header相关（header即为第一行）。</td>
</tr>
</tbody>
</table>
<p>下面的参数用于鉴权，用户至少需要设置 (<code v-pre>sheet_token</code>) 或者 (<code v-pre>app_id</code> and <code v-pre>app_secret</code>)其中一个。</p>
<table>
    <tr>
        <th>参数名称</th>
        <th>是否必须</th>
        <th>参数枚举值</th>
        <th>参数描述</th>
    </tr>
    <tr>
        <td>sheet_token</td>
        <td rowspan="3">至少设置下述一项:<br/>1. `sheet_token`<br/>2. `app_id` and `app_secret`</td>
        <td></td>
        <td>用于<a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">飞书 open api</a>鉴权的token.</td>
    </tr>
    <tr>
        <td>app_id</td>
        <td></td>
        <td rowspan="2">使用`app_id` 和 `app_secret` 来生成用于<a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">飞书 open api</a>鉴权的token.</td>
    </tr>
    <tr>
        <td>app_secret</td>
        <td></td>
    </tr>
</table>
<p>注意，<code v-pre>sheet_token</code>可能在任务运行中过期。
如果使用<code v-pre>app_id</code> 和 <code v-pre>app_secret</code>，会主动刷新过期token。</p>
<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必须</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">reader_parallelism_num</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">读并发</td>
</tr>
<tr>
<td style="text-align:left">batch_size</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">从open api一次拉取的数据行数</td>
</tr>
<tr>
<td style="text-align:left">skip_nums</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">对于每个表格可指定跳过开头的行数。用list表示</td>
</tr>
</tbody>
</table>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>
<p>配置示例文档: <RouterLink to="/zh_backup/connectors/larksheet/larksheet-example_zh.html">larksheet-connector-example</RouterLink></p>
</div></template>


