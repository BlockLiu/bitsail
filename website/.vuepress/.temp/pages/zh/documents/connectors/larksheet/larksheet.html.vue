<template><div><h1 id="larksheet-connector" tabindex="-1"><a class="header-anchor" href="#larksheet-connector" aria-hidden="true">#</a> LarkSheet connector</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p>The <em><strong>Bitsail</strong></em> LarkSheet connector supports reading lark sheets.
The main function points are as follows:</p>
<ul>
<li>Support batch read from single or multiple lark sheets at once.</li>
<li>Support authentication by static token and <a href="https://open.feishu.cn/document/ukTMukTMukTM/uYTM5UjL2ETO14iNxkTN/terminology?lang=en-US" target="_blank" rel="noopener noreferrer">application<ExternalLinkIcon/></a>.</li>
<li>Support read a portion of columns from sheets.</li>
</ul>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-larksheet&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="larksheet-reader" tabindex="-1"><a class="header-anchor" href="#larksheet-reader" aria-hidden="true">#</a> LarkSheet reader</h3>
<h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3>
<p>Bitsail LarkSheet reader processes all data as string.</p>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.reader</code> block when using, for example:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Param name</th>
<th style="text-align:left">Required</th>
<th style="text-align:left">Optional value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">LarkSheet reader class name, <code v-pre>com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">sheet_urls</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">A list of sheet to read. Multi sheets urls are separated by comma.</td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Describing fields' names and types.</td>
</tr>
</tbody>
</table>
<p>The following parameters are for authentication, you have to set (<code v-pre>sheet_token</code>) or (<code v-pre>app_id</code> and <code v-pre>app_secret</code>) in your configuration.</p>
<table>
    <tr>
        <th>Param name</th>
        <th>Required</th>
        <th>Optional value</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>sheet_token</td>
        <td rowspan="3">At least set one:<br/>1. `sheet_token`<br/>2. `app_id` and `app_secret`</td>
        <td></td>
        <td>Token for get permission to visit <a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">feishu open api</a>.</td>
    </tr>
    <tr>
        <td>app_id</td>
        <td></td>
        <td rowspan="2">Use `app_id` and `app_secret` to generate token for visiting <a href="https://open.feishu.cn/document/ukTMukTMukTM/ugTMzUjL4EzM14COxMTN">feishu open api</a>.</td>
    </tr>
    <tr>
        <td>app_secret</td>
        <td></td>
    </tr>
</table>
<p>Note that if you use <code v-pre>sheet_token</code>, it may expire when the job runs.
If you use <code v-pre>app_id</code> and <code v-pre>app_secret</code>, the token will be refreshed if it expires.</p>
<h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4>
<table>
<thead>
<tr>
<th style="text-align:left">Param name</th>
<th style="text-align:left">Required</th>
<th style="text-align:left">Optional value</th>
<th style="text-align:left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">reader_parallelism_num</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Read parallelism num</td>
</tr>
<tr>
<td style="text-align:left">batch_size</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Number of lines extracted once.</td>
</tr>
<tr>
<td style="text-align:left">skip_nums</td>
<td style="text-align:left">no</td>
<td style="text-align:left"></td>
<td style="text-align:left">A list of numbers indicating how many lines should be skipped in each sheet.</td>
</tr>
</tbody>
</table>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration examples: <RouterLink to="/zh/documents/connectors/larksheet/larksheet-example.html">larksheet-connector-example</RouterLink></p>
</div></template>


