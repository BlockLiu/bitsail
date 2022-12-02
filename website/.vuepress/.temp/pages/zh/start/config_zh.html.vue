<template><div><h1 id="任务配置说明" tabindex="-1"><a class="header-anchor" href="#任务配置说明" aria-hidden="true">#</a> 任务配置说明</h1>
<p><RouterLink to="/zh/start/config.html">English</RouterLink> | 简体中文</p>
<p><em><strong>BitSail</strong></em> 完整配置脚本是由一个 JSON 组成的，完整示意结构如下所示：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"job"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"common"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"reader"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">"writer"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>模块名称</th>
<th>参数含义</th>
</tr>
</thead>
<tbody>
<tr>
<td>common</td>
<td>主要负责设置一些通用的参数配置，如标注作业的元数据信息，标注作业所需要插件的实现方案等。</td>
</tr>
<tr>
<td>reader/readers</td>
<td>主要负责设置源数据侧相关参数信息等。以MySQL数据源进行举例，需要在reader的子域下设置JDBC的连接信息，操作的库表信息等。</td>
</tr>
<tr>
<td>writer/writers</td>
<td>主要负责设置目标数据源的相关参数等。以Hive目标数据源为例，需要在writer的子域下设置Hive的metastore连接信息，设置Hive库表、分区的相关信息等。</td>
</tr>
</tbody>
</table>
<h2 id="common-模块" tabindex="-1"><a class="header-anchor" href="#common-模块" aria-hidden="true">#</a> Common 模块</h2>
<p>示例：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"job"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"common"</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">"user_name"</span><span class="token operator">:</span><span class="token string">"bytedance_dts"</span><span class="token punctuation">,</span>
            <span class="token property">"instance_id"</span><span class="token operator">:</span>-1L<span class="token punctuation">,</span>
            <span class="token property">"job_id"</span><span class="token operator">:</span>-1L<span class="token punctuation">,</span>
            <span class="token property">"job_name"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span>
            <span class="token property">"min_parallelism"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">"max_parallelism"</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">"parallelism_chain"</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">"max_dirty_records_stored_num"</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token property">"dirty_records_count_threshold"</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
            <span class="token property">"dirty_records_percentage_threshold"</span><span class="token operator">:</span><span class="token number">-1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p>
<p>元数据配置：任务的基本信息配置</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必须</th>
<th>默认值</th>
<th>参数含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>user_name</td>
<td>TRUE</td>
<td>-</td>
<td>提交作业的用户</td>
<td>bitsail</td>
</tr>
<tr>
<td>job_id</td>
<td>TRUE</td>
<td>-</td>
<td>提交作业的id</td>
<td>12345</td>
</tr>
<tr>
<td>instance_id</td>
<td>TRUE</td>
<td>-</td>
<td>作业的实例id</td>
<td>12345</td>
</tr>
<tr>
<td>job_name</td>
<td>TRUE</td>
<td>-</td>
<td>作业的名称，用于指定作业在外部资源provider的名称；</td>
<td>bitsail_conf</td>
</tr>
</tbody>
</table>
<p>并行度配置：配置任务的读写并发信息</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必须</th>
<th>默认值</th>
<th>参数含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>min_parallelism</td>
<td>FALSE</td>
<td>1</td>
<td>作业最小的并行度，自动计算的并行度会大于等于最小并行度</td>
<td>2</td>
</tr>
<tr>
<td>max_parallelism</td>
<td>FALSE</td>
<td>512</td>
<td>作业最大的并行度，自动计算的并行度会小于等于最大并行度</td>
<td>2</td>
</tr>
<tr>
<td>parallelism_chain</td>
<td>FALSE</td>
<td>FALSE</td>
<td>算子之间是否需要统一并行度。如果开启该设计，会选择reader和writer之间最小的并行度来进行设置。</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>脏数据配置：任务的脏数据配置</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必须</th>
<th>默认值</th>
<th>参数含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>max_dirty_records_stored_num</td>
<td>FALSE</td>
<td>50</td>
<td>每个task级别脏数据的收集数量，默认为50条</td>
<td>50</td>
</tr>
<tr>
<td>dirty_records_count_threshold</td>
<td>FALSE</td>
<td>-1</td>
<td>整体脏数据的阈值设置，如果在传输结束后发现脏数据多于该设置，作业失败。</td>
<td>-1</td>
</tr>
<tr>
<td>dirty_record_percentage_threshold</td>
<td>FALSE</td>
<td>-1</td>
<td>整体脏数据占整体传输数据的比例，如果传输结束后发现脏数据的比例大于该阈值，作业失败。</td>
<td>-1</td>
</tr>
</tbody>
</table>
<h2 id="reader-模块" tabindex="-1"><a class="header-anchor" href="#reader-模块" aria-hidden="true">#</a> Reader 模块</h2>
<p>字节跳动数据集成目前支持多数据源写入的同时读取，在支持多数据源读取的场景下，要求上游数据源的输入数据schema需要保持一致，下面介绍Reader模块的具体信息。</p>
<p>示例：</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"job"</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">"reader"</span><span class="token operator">:</span>
   
            <span class="token punctuation">{</span>
                <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat"</span><span class="token punctuation">,</span>
                <span class="token property">"columns"</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"id"</span><span class="token punctuation">,</span>
                        <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"bigint"</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"name"</span><span class="token punctuation">,</span>
                        <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"varchar"</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">"table_name"</span><span class="token operator">:</span><span class="token string">"your table name"</span><span class="token punctuation">,</span>
                <span class="token property">"db_name"</span><span class="token operator">:</span><span class="token string">"your database name"</span><span class="token punctuation">,</span>
                <span class="token property">"password"</span><span class="token operator">:</span><span class="token string">"your database connection password"</span><span class="token punctuation">,</span>
                <span class="token property">"user_name"</span><span class="token operator">:</span><span class="token string">"your database connection username"</span><span class="token punctuation">,</span>
                <span class="token property">"split_pk"</span><span class="token operator">:</span><span class="token string">"your table primary key"</span><span class="token punctuation">,</span>
                <span class="token property">"connections"</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">"slaves"</span><span class="token operator">:</span><span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">"port"</span><span class="token operator">:</span><span class="token string">"your connection's port"</span><span class="token punctuation">,</span>
                                <span class="token property">"db_url"</span><span class="token operator">:</span><span class="token string">"your connection's url"</span><span class="token punctuation">,</span>
                                <span class="token property">"host"</span><span class="token operator">:</span><span class="token string">"your connection's host"</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">"shard_num"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">"master"</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token property">"port"</span><span class="token operator">:</span><span class="token string">"your connection's port"</span><span class="token punctuation">,</span>
                            <span class="token property">"db_url"</span><span class="token operator">:</span><span class="token string">"your connection's url"</span><span class="token punctuation">,</span>
                            <span class="token property">"host"</span><span class="token operator">:</span><span class="token string">"your connection's host"</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通用参数：</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必须</th>
<th>默认值</th>
<th>参数含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>TRUE</td>
<td>-</td>
<td>标识使用的connector的 class 名称</td>
<td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat</td>
</tr>
<tr>
<td>reader_parallelism_num</td>
<td>FALSE</td>
<td>-</td>
<td>指定该Reader的并行度，默认情况下数据引擎会按照其实现逻辑计算得到一个并行度。</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>其他参数详情：参考具体 connector 实现参数</p>
<h2 id="writer-模块" tabindex="-1"><a class="header-anchor" href="#writer-模块" aria-hidden="true">#</a> Writer 模块</h2>
<p>字节跳动数据集成目前支持同时写出到多个目标数据源，多个写出的目标数据源的schema需要保持一致。下面介绍Writer模块的具体组成信息。</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token property">"class"</span><span class="token operator">:</span><span class="token string">"com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat"</span><span class="token punctuation">,</span>
            <span class="token property">"db_name"</span><span class="token operator">:</span><span class="token string">"your hive database' name."</span><span class="token punctuation">,</span>
            <span class="token property">"table_name"</span><span class="token operator">:</span><span class="token string">"your hive database' table name."</span><span class="token punctuation">,</span>
            <span class="token property">"partition"</span><span class="token operator">:</span><span class="token string">"your partition which want to add."</span><span class="token punctuation">,</span>
            <span class="token property">"metastore_properties"</span><span class="token operator">:</span><span class="token string">"{\"hive.metastore.uris\":\"thrift://localhost:9083\"}"</span><span class="token punctuation">,</span>
            <span class="token property">"columns"</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"id"</span><span class="token punctuation">,</span>
                    <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"bigint"</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">"write_mode"</span><span class="token operator">:</span><span class="token string">"overwrite"</span><span class="token punctuation">,</span>
            <span class="token property">"writer_parallelism_num"</span><span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通用参数：</p>
<table>
<thead>
<tr>
<th>参数名称</th>
<th>是否必须</th>
<th>默认值</th>
<th>参数含义</th>
<th>示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>TRUE</td>
<td>-</td>
<td>标识使用的connector的 class 名称</td>
<td>com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat</td>
</tr>
<tr>
<td>writer_parallelism_num</td>
<td>FALSE</td>
<td>-</td>
<td>指定该Writer的并行度，默认情况下数据引擎会按照其实现逻辑计算得到一个并行度。</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>其他参数详情：参考具体 connector 实现参数</p>
</div></template>


