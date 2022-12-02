<template><div><h1 id="mongodb连接器" tabindex="-1"><a class="header-anchor" href="#mongodb连接器" aria-hidden="true">#</a> MongoDB连接器</h1>
<p><em><strong>BitSail</strong></em> MongoDB连接器支持读写Collections，主要功能点如下:</p>
<ul>
<li>支持批式读取Collection中文档</li>
<li>支持批式写入Collection</li>
</ul>
<h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-mongodb&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mongodb读取" tabindex="-1"><a class="header-anchor" href="#mongodb读取" aria-hidden="true">#</a> MongoDB读取</h2>
<h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3>
<p>MongoDB读连接器根据字段映射进行解析，支持以下数据类型:</p>
<h4 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h4>
<ul>
<li>string, character</li>
<li>boolean</li>
<li>short, int, long, float, double, bigint</li>
<li>date, time, timestamp</li>
</ul>
<h4 id="复合数据类型" tabindex="-1"><a class="header-anchor" href="#复合数据类型" aria-hidden="true">#</a> 复合数据类型</h4>
<ul>
<li>array, list</li>
<li>map</li>
</ul>
<h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3>
<p>写连接器参数在<code v-pre>job.reader</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.mongodb.source.MongoDBInputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"host"</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span>
      <span class="token property">"port"</span><span class="token operator">:</span> <span class="token number">1234</span><span class="token punctuation">,</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"collection_name"</span><span class="token operator">:</span> <span class="token string">"test_collection"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB读连接器类型, <code v-pre>com.bytedance.bitsail.connector.legacy.mongodb.sink.MongoDBInputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">db_name</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要读取的database</td>
</tr>
<tr>
<td style="text-align:left">collection_name</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要读取的collection</td>
</tr>
<tr>
<td style="text-align:left">hosts_str</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB的连接地址，多个地址用逗号分隔</td>
</tr>
<tr>
<td style="text-align:left">host</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB的单个host</td>
</tr>
<tr>
<td style="text-align:left">port</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB的连接port</td>
</tr>
<tr>
<td style="text-align:left">split_pk</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于分片的字段</td>
</tr>
</tbody>
</table>
<ul>
<li>注意，上述 (hosts_str) 和 (host, port) 二选一组合即可，优先使用hosts_str.</li>
<li>hosts_str格式为: <code v-pre>host1:port1,host2:port2,...</code></li>
</ul>
<h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">reader_parallelism_num</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">指定MongoDB读并发</td>
</tr>
<tr>
<td style="text-align:left">user_name</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于鉴权的user name</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于鉴权的password</td>
</tr>
<tr>
<td style="text-align:left">auth_db_name</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于鉴权的db名</td>
</tr>
<tr>
<td style="text-align:left">reader_fetch_size</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">单次最多获取的文档数, 默认100000</td>
</tr>
<tr>
<td style="text-align:left">filter</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">过滤collection中的document</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="mongodb写入" tabindex="-1"><a class="header-anchor" href="#mongodb写入" aria-hidden="true">#</a> MongoDB写入</h2>
<h3 id="支持数据类型-1" tabindex="-1"><a class="header-anchor" href="#支持数据类型-1" aria-hidden="true">#</a> 支持数据类型</h3>
<p>MongoDB写连接器将用户定义的一行数据写入到一个document中，然后插入collection。
支持的数据类型包括:</p>
<h4 id="基本数据类型-1" tabindex="-1"><a class="header-anchor" href="#基本数据类型-1" aria-hidden="true">#</a> 基本数据类型</h4>
<ul>
<li>undefined</li>
<li>string</li>
<li>objectid</li>
<li>date</li>
<li>timestamp</li>
<li>bindata</li>
<li>bool</li>
<li>int</li>
<li>long</li>
<li>object</li>
<li>javascript</li>
<li>regex</li>
<li>double</li>
<li>decimal</li>
</ul>
<h4 id="复合数据类型-1" tabindex="-1"><a class="header-anchor" href="#复合数据类型-1" aria-hidden="true">#</a> 复合数据类型</h4>
<ul>
<li>array</li>
</ul>
<h3 id="主要参数-1" tabindex="-1"><a class="header-anchor" href="#主要参数-1" aria-hidden="true">#</a> 主要参数</h3>
<p>写连接器参数在<code v-pre>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.mongodb.source.MongoDBOutputFormat"</span><span class="token punctuation">,</span>
      <span class="token property">"unique_key"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
      <span class="token property">"client_mode"</span><span class="token operator">:</span> <span class="token string">"url"</span><span class="token punctuation">,</span>
      <span class="token property">"mongo_url"</span><span class="token operator">:</span> <span class="token string">"mongodb://localhost:1234/test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
      <span class="token property">"collection_name"</span><span class="token operator">:</span> <span class="token string">"test_collection"</span><span class="token punctuation">,</span>
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
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数-1" tabindex="-1"><a class="header-anchor" href="#必需参数-1" aria-hidden="true">#</a> 必需参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">class</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB写连接器类型, <code v-pre>com.bytedance.bitsail.connector.legacy.mongodb.sink.MongoDBOutputFormat</code></td>
</tr>
<tr>
<td style="text-align:left">db_name</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要写入的database</td>
</tr>
<tr>
<td style="text-align:left">collection_name</td>
<td style="text-align:left">是</td>
<td style="text-align:left"></td>
<td style="text-align:left">要插入的collection</td>
</tr>
<tr>
<td style="text-align:left">client_mode</td>
<td style="text-align:left">是</td>
<td style="text-align:left">url<br/>host_without_credential<br/>host_with_credential</td>
<td style="text-align:left">指定如何创建mongo client</td>
</tr>
<tr>
<td style="text-align:left">url</td>
<td style="text-align:left">如果client_mode=url，则必需</td>
<td style="text-align:left"></td>
<td style="text-align:left">MongoDB连接url, 例如 &quot;mongodb://localhost:1234&quot;</td>
</tr>
<tr>
<td style="text-align:left">mongo_hosts_str</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">mongo连接地址，多个地址用逗号分隔</td>
</tr>
<tr>
<td style="text-align:left">mongo_host</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">mongo单个连接地址</td>
</tr>
<tr>
<td style="text-align:left">mongo_port</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
<td style="text-align:left">mongo单个连接端口</td>
</tr>
<tr>
<td style="text-align:left">user_name</td>
<td style="text-align:left">如果client_mode=host_with_credential，则必需</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于鉴权的user name</td>
</tr>
<tr>
<td style="text-align:left">password</td>
<td style="text-align:left">如果client_mode=host_with_credential，则必需</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于鉴权的password</td>
</tr>
</tbody>
</table>
<ul>
<li>注意，当client_mode为host_without_credential或者host_with_credential时，需要从上述 (mongo_hosts_str) 和 (mongo_host, mongo_port) 二选一组合进行设置，优先使用mongo_hosts_str.</li>
</ul>
<h4 id="可选参数-1" tabindex="-1"><a class="header-anchor" href="#可选参数-1" aria-hidden="true">#</a> 可选参数</h4>
<table>
<thead>
<tr>
<th style="text-align:left">参数名称</th>
<th style="text-align:left">是否必填</th>
<th style="text-align:left">参数枚举值</th>
<th style="text-align:left">参数含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">writer_parallelism_num</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">指定redis写并发</td>
</tr>
<tr>
<td style="text-align:left">pre_sql</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">数据写入前执行的sql</td>
</tr>
<tr>
<td style="text-align:left">auth_db_name</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于鉴权的db名</td>
</tr>
<tr>
<td style="text-align:left">batch_size</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">单次写入文档数, 默认100</td>
</tr>
<tr>
<td style="text-align:left">unique_key</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">用于判断document是否唯一的字段</td>
</tr>
<tr>
<td style="text-align:left">connect_timeout_ms</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">连接超时，默认10000 ms</td>
</tr>
<tr>
<td style="text-align:left">max_wait_time_ms</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">从连接池获取超时，默认120000 ms</td>
</tr>
<tr>
<td style="text-align:left">socket_timeout_ms</td>
<td style="text-align:left">否</td>
<td style="text-align:left"></td>
<td style="text-align:left">Socket超时，默认0不设置</td>
</tr>
<tr>
<td style="text-align:left">write_concern</td>
<td style="text-align:left">否</td>
<td style="text-align:left">0, 1, 2, 3</td>
<td style="text-align:left">数据写入保障级别, 默认为1</td>
</tr>
</tbody>
</table>
<h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>
<p>配置示例文档: <RouterLink to="/zh/connectors/mongodb/mongodb-example_zh.html">mongodb-connector-example</RouterLink></p>
</div></template>


