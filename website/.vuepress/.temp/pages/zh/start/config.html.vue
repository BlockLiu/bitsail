<template><div><h1 id="job-configuration-description" tabindex="-1"><a class="header-anchor" href="#job-configuration-description" aria-hidden="true">#</a> Job Configuration Description</h1>
<p>English | <RouterLink to="/zh/start/config_zh.html">简体中文</RouterLink></p>
<p><em><strong>BitSail</strong></em> script configuration is managed by JSON structure, follow scripts show the complete structure:</p>
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
<th>Module Name</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>common</td>
<td>It is mainly responsible for general setting, such job metadata, plugins setting.</td>
</tr>
<tr>
<td>reader/readers</td>
<td>It is mainly responsible for setting relevant parameter information on the source data side. Taking the MySQL data source as an example, you need to set the JDBC connection information and the database table information of the operation under the subdomain of the reader.</td>
</tr>
<tr>
<td>writer/writers</td>
<td>Mainly responsible for setting the relevant parameters of the target data source, etc. Taking the Hive target data source as an example, you need to set the Hive metastore connection information under the writer's subdomain, and set the Hive database table and partition related information.</td>
</tr>
</tbody>
</table>
<h2 id="common-module" tabindex="-1"><a class="header-anchor" href="#common-module" aria-hidden="true">#</a> Common Module</h2>
<p>Example：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Description：</p>
<p>Metadata Parameters:</p>
<table>
<thead>
<tr>
<th>Parameter name</th>
<th>Required</th>
<th>Default</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>user_name</td>
<td>TRUE</td>
<td>-</td>
<td>job's submitter</td>
<td>bitsail</td>
</tr>
<tr>
<td>job_id</td>
<td>TRUE</td>
<td>-</td>
<td>job' unique id</td>
<td>12345</td>
</tr>
<tr>
<td>instance_id</td>
<td>TRUE</td>
<td>-</td>
<td>job's instance id, maybe use in some scheduler system.</td>
<td>12345</td>
</tr>
<tr>
<td>job_name</td>
<td>TRUE</td>
<td>-</td>
<td>job's name</td>
<td>bitsail_conf</td>
</tr>
</tbody>
</table>
<p>Parameter parallelism：</p>
<table>
<thead>
<tr>
<th>Parameter name</th>
<th>Required</th>
<th>Default</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>min_parallelism</td>
<td>FALSE</td>
<td>1</td>
<td>The minimum parallelism of the job, the parallelism from automatic calculation will be greater than or equal to the minimum parallelism.</td>
<td>2</td>
</tr>
<tr>
<td>max_parallelism</td>
<td>FALSE</td>
<td>512</td>
<td>The maximum parallelism of the job, the parallelism from automatic calculation will be less than or equal to the maximum parallelism.</td>
<td>2</td>
</tr>
<tr>
<td>parallelism_chain</td>
<td>FALSE</td>
<td>FALSE</td>
<td>Whether chain the operator between operators. If this option is enabled, will select min parallelism between readers and writers as final parallelism.</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>Dirty record setting:(Only in batch mode)</p>
<table>
<thead>
<tr>
<th>Parameter name</th>
<th>Required</th>
<th>Default</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>max_dirty_records_stored_num</td>
<td>FALSE</td>
<td>50</td>
<td>Every task collect size for dirty record.</td>
<td>50</td>
</tr>
<tr>
<td>dirty_records_count_threshold</td>
<td>FALSE</td>
<td>-1</td>
<td>The threshold of the total dirty records, if dirty records bigger than the threshold, job will fail in final</td>
<td>-1</td>
</tr>
<tr>
<td>dirty_record_percentage_threshold</td>
<td>FALSE</td>
<td>-1</td>
<td>The percent threshold of the total dirty records, if dirty records percent bigger than the threshold,     job will fail in final.</td>
<td>-1</td>
</tr>
</tbody>
</table>
<h2 id="reader-module" tabindex="-1"><a class="header-anchor" href="#reader-module" aria-hidden="true">#</a> Reader Module</h2>
<p>Examples：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Common Parameter：</p>
<table>
<thead>
<tr>
<th>Parameter name</th>
<th>Required</th>
<th>Default</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>TRUE</td>
<td>-</td>
<td>Connector's class name</td>
<td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat</td>
</tr>
<tr>
<td>reader_parallelism_num</td>
<td>FALSE</td>
<td>-</td>
<td>Specify the parallelism for the reader operator.</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>Other parameters please check the <a href="./connectors">connector</a></p>
<h2 id="writer-module" tabindex="-1"><a class="header-anchor" href="#writer-module" aria-hidden="true">#</a> Writer Module</h2>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Common Parameters：</p>
<table>
<thead>
<tr>
<th>Parameter name</th>
<th>Required</th>
<th>Default</th>
<th>Description</th>
<th>Example</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>TRUE</td>
<td>-</td>
<td>Connector's class name</td>
<td>com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat</td>
</tr>
<tr>
<td>writer_parallelism_num</td>
<td>FALSE</td>
<td>-</td>
<td>Specify Writer's parallelism, default bitsail will calculate write parallelism for the job.</td>
<td>2</td>
</tr>
</tbody>
</table>
<p>Other parameters please check the <a href="./connectors">connector</a></p>
</div></template>


