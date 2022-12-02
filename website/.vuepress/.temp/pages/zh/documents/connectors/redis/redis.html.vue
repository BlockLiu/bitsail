<template><div><h1 id="redis-connector" tabindex="-1"><a class="header-anchor" href="#redis-connector" aria-hidden="true">#</a> Redis connector</h1>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p><em><strong>BitSail</strong></em> Redis connector supports writing Redis. The main function points are as follows:</p>
<ul>
<li>Support batch write to Redis.</li>
<li>Support 4 kinds of data type in Redis.</li>
</ul>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-redis&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis-writer" tabindex="-1"><a class="header-anchor" href="#redis-writer" aria-hidden="true">#</a> Redis writer</h2>
<h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3>
<p>We support four kinds of data types in Redis:</p>
<ul>
<li><code v-pre>String, Set, Hash, Sorted Set</code>.</li>
</ul>
<p>Each data type has its own requirement for input data:</p>
<table>
<thead>
<tr>
<th>Data type</th>
<th>Required column numbers</th>
<th>1st column</th>
<th>2nd column</th>
<th>3rd column</th>
</tr>
</thead>
<tbody>
<tr>
<td>String</td>
<td>2</td>
<td>key</td>
<td>value</td>
<td></td>
</tr>
<tr>
<td>Set</td>
<td>2</td>
<td>key of set</td>
<td>value to insert into set</td>
<td></td>
</tr>
<tr>
<td>Hash</td>
<td>3</td>
<td>key of hash</td>
<td>key to insert to hash</td>
<td>value to insert to hash</td>
</tr>
<tr>
<td>Sorted Set (Zset)</td>
<td>3</td>
<td>key of Sorted set</td>
<td>score</td>
<td>value to insert to set</td>
</tr>
</tbody>
</table>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<p>The following mentioned parameters should be added to <code v-pre>job.writer</code> block when using, for example:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
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
<td style="text-align:left">Class name of redis writer, <code v-pre>com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">redis_host</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">host of redis</td>
</tr>
<tr>
<td style="text-align:left">redis_port</td>
<td style="text-align:left">Yes</td>
<td style="text-align:left"></td>
<td style="text-align:left">port of redis</td>
</tr>
</tbody>
</table>
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
<td style="text-align:left">writer_parallelism_num</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Writer parallelism num</td>
</tr>
<tr>
<td style="text-align:left">client_timeout_ms</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Timeout of redis connection. Default 60000 ms</td>
</tr>
<tr>
<td style="text-align:left">ttl</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Ttl of inserted data. Default -1 means not setting ttl</td>
</tr>
<tr>
<td style="text-align:left">ttl_type</td>
<td style="text-align:left">No</td>
<td style="text-align:left">&quot;DAY&quot;, &quot;HOUR&quot;, &quot;MINUTE&quot;, &quot;SECOND&quot;</td>
<td style="text-align:left">Time unit of ttl. Default &quot;DAY&quot;</td>
</tr>
<tr>
<td style="text-align:left">write_batch_interval</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Redis instruction write batch size. Default 50</td>
</tr>
<tr>
<td style="text-align:left">redis_data_type</td>
<td style="text-align:left">No</td>
<td style="text-align:left">&quot;string&quot;<br/>&quot;set&quot;<br/>&quot;hash&quot;<br/>&quot;sorted_set&quot;</td>
<td style="text-align:left">Data type to insert. Default &quot;string&quot;</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">No</td>
<td style="text-align:left"></td>
<td style="text-align:left">Password of redis</td>
</tr>
</tbody>
</table>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration examples: <RouterLink to="/zh/documents/connectors/redis/redis-example.html">redis-connector-example</RouterLink></p>
</div></template>


