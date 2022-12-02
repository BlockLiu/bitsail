<template><div><h1 id="doris连接器配置示例" tabindex="-1"><a class="header-anchor" href="#doris连接器配置示例" aria-hidden="true">#</a> Doris连接器配置示例</h1>
<h2 id="测试用doris配置" tabindex="-1"><a class="header-anchor" href="#测试用doris配置" aria-hidden="true">#</a> 测试用Doris配置</h2>
<p>假设doris集群配置如下:</p>
<ul>
<li>fe: <code v-pre>127.0.0.1:1234</code></li>
<li>jdbc query地址: <code v-pre>127.0.0.1:4321</code></li>
</ul>
<p>账户信息为:</p>
<ul>
<li>用户: <code v-pre>test_user</code></li>
<li>密码: <code v-pre>1234567</code></li>
</ul>
<p>要写入的库表为:</p>
<ul>
<li>库: test_db</li>
<li>表: test_doris_table</li>
</ul>
<p>该表的建表语句为:</p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>test_db<span class="token punctuation">`</span></span><span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">`</span>test_doris_table<span class="token punctuation">`</span></span> <span class="token punctuation">(</span> 
    <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">`</span>bigint_type<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">`</span>string_type<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">`</span>double_type<span class="token punctuation">`</span></span> <span class="token keyword">double</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">`</span>decimal_type<span class="token punctuation">`</span></span> <span class="token keyword">decimal</span><span class="token punctuation">(</span><span class="token number">27</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span><span class="token punctuation">,</span> 
    <span class="token identifier"><span class="token punctuation">`</span>date_type<span class="token punctuation">`</span></span> <span class="token keyword">date</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span><span class="token punctuation">,</span>
    <span class="token identifier"><span class="token punctuation">`</span>partition_date<span class="token punctuation">`</span></span> <span class="token keyword">date</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">""</span> 
<span class="token punctuation">)</span> 
<span class="token keyword">ENGINE</span><span class="token operator">=</span>OLAP 
<span class="token keyword">DUPLICATE</span> <span class="token keyword">KEY</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> 
<span class="token keyword">COMMENT</span> <span class="token string">"OLAP"</span> 
<span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> RANGE<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>partition_date<span class="token punctuation">`</span></span><span class="token punctuation">)</span> 
<span class="token punctuation">(</span>
    <span class="token keyword">PARTITION</span> p20221010 <span class="token keyword">VALUES</span> <span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token string">'2022-10-10'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">'2022-10-11'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> 
<span class="token keyword">DISTRIBUTED</span> <span class="token keyword">BY</span> <span class="token keyword">HASH</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span> BUCKETS <span class="token number">10</span> 
PROPERTIES 
<span class="token punctuation">(</span> 
    <span class="token string">"replication_num"</span> <span class="token operator">=</span> <span class="token string">"3"</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="doris写连接器" tabindex="-1"><a class="header-anchor" href="#doris写连接器" aria-hidden="true">#</a> Doris写连接器</h2>
<p>可用下面的配置写入上述<code v-pre>test_db.test_doris_table</code>表的 <code v-pre>p20221010</code> 分区:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
       <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.doris.sink.DorisSink"</span><span class="token punctuation">,</span>
       <span class="token property">"fe_hosts"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1:1234"</span><span class="token punctuation">,</span>
       <span class="token property">"mysql_hosts"</span><span class="token operator">:</span> <span class="token string">"127.0.0.1:4321"</span><span class="token punctuation">,</span>
       <span class="token property">"user"</span><span class="token operator">:</span> <span class="token string">"test_user"</span><span class="token punctuation">,</span>
       <span class="token property">"password"</span><span class="token operator">:</span> <span class="token string">"1234567"</span><span class="token punctuation">,</span>
       <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"test_db"</span><span class="token punctuation">,</span>
       <span class="token property">"table_name"</span><span class="token operator">:</span> <span class="token string">"test_doris_table"</span><span class="token punctuation">,</span>
       <span class="token property">"table_model"</span><span class="token operator">:</span> <span class="token string">"unique"</span><span class="token punctuation">,</span>
       <span class="token property">"partitions"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token punctuation">{</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"p20221010"</span><span class="token punctuation">,</span>
           <span class="token property">"start_range"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"2022-10-10"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
           <span class="token property">"end_range"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">"2022-10-11"</span><span class="token punctuation">]</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">]</span><span class="token punctuation">,</span>
       <span class="token property">"columns"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"id"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"bigint_type"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"bigint"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"string_type"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"varchar"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"double_type"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"decimal_type"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"double"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"date_type"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"date"</span>
         <span class="token punctuation">}</span><span class="token punctuation">,</span>
         <span class="token punctuation">{</span>
           <span class="token property">"index"</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
           <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"partition_date"</span><span class="token punctuation">,</span>
           <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"date"</span>
         <span class="token punctuation">}</span>
       <span class="token punctuation">]</span>
     <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


