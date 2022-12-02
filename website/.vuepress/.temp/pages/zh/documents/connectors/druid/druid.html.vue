<template><div><h1 id="druid-connector" tabindex="-1"><a class="header-anchor" href="#druid-connector" aria-hidden="true">#</a> Druid connector</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p><em><strong>BitSail</strong></em> Druid connector supports writing druid data-sources.</p>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>connector-druid&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="druid-writer" tabindex="-1"><a class="header-anchor" href="#druid-writer" aria-hidden="true">#</a> Druid Writer</h2>
<h3 id="supported-data-type" tabindex="-1"><a class="header-anchor" href="#supported-data-type" aria-hidden="true">#</a> Supported data type</h3>
<p>Support common Druid data types:</p>
<ul>
<li>Long</li>
<li>Float</li>
<li>Double</li>
<li>String</li>
</ul>
<h3 id="supported-operation-type" tabindex="-1"><a class="header-anchor" href="#supported-operation-type" aria-hidden="true">#</a> Supported operation type</h3>
<p>Support the following operations:</p>
<ul>
<li>INSERT</li>
</ul>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.writer</code> block when using, for example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.druid.sink.DruidSink"</span><span class="token punctuation">,</span>
      <span class="token property">"datasource"</span><span class="token operator">:</span> <span class="token string">"testDruidDataSource"</span><span class="token punctuation">,</span>
      <span class="token property">"coordinator_url"</span><span class="token operator">:</span> <span class="token string">"localhost:8888"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Druid writer's class name, <code v-pre>com.bytedance.bitsail.connector.druid.sink.DruidSink</code></td>
</tr>
<tr>
<td style="text-align:left">datasource</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Druid DataSource to write</td>
</tr>
<tr>
<td style="text-align:left">coordinator_url</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">Druid master addresses. Format is <code v-pre>&lt;host&gt;:&lt;port&gt;</code></td>
</tr>
<tr>
<td style="text-align:left">columns</td>
<td style="text-align:left">yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">The name and type of columns to write</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration example: <RouterLink to="/zh/documents/connectors/druid/druid-example.html">druid-connector-example</RouterLink></p>
</div></template>


