import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as t,e as a}from"./app.3771ef72.js";const e={},o=a(`<h1 id="job-configuration-description" tabindex="-1"><a class="header-anchor" href="#job-configuration-description" aria-hidden="true">#</a> Job Configuration Description</h1><p><em><strong>BitSail</strong></em> script configuration is managed by JSON structure, follow scripts show the complete structure:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;common&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        ...
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Module Name</th><th>Description</th></tr></thead><tbody><tr><td>common</td><td>It is mainly responsible for general setting, such job metadata, plugins setting.</td></tr><tr><td>reader/readers</td><td>It is mainly responsible for setting relevant parameter information on the source data side. Taking the MySQL data source as an example, you need to set the JDBC connection information and the database table information of the operation under the subdomain of the reader.</td></tr><tr><td>writer/writers</td><td>Mainly responsible for setting the relevant parameters of the target data source, etc. Taking the Hive target data source as an example, you need to set the Hive metastore connection information under the writer&#39;s subdomain, and set the Hive database table and partition related information.</td></tr></tbody></table><h2 id="common-module" tabindex="-1"><a class="header-anchor" href="#common-module" aria-hidden="true">#</a> Common Module</h2><p>Example：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;common&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;bytedance_dts&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;instance_id&quot;</span><span class="token operator">:</span>-1L<span class="token punctuation">,</span>
            <span class="token property">&quot;job_id&quot;</span><span class="token operator">:</span>-1L<span class="token punctuation">,</span>
            <span class="token property">&quot;job_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;min_parallelism&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_parallelism&quot;</span><span class="token operator">:</span><span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;parallelism_chain&quot;</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;max_dirty_records_stored_num&quot;</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dirty_records_count_threshold&quot;</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;dirty_records_percentage_threshold&quot;</span><span class="token operator">:</span><span class="token number">-1</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Description：</p><p>Metadata Parameters:</p><table><thead><tr><th>Parameter name</th><th>Required</th><th>Default</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>user_name</td><td>TRUE</td><td>-</td><td>job&#39;s submitter</td><td>bitsail</td></tr><tr><td>job_id</td><td>TRUE</td><td>-</td><td>job&#39; unique id</td><td>12345</td></tr><tr><td>instance_id</td><td>TRUE</td><td>-</td><td>job&#39;s instance id, maybe use in some scheduler system.</td><td>12345</td></tr><tr><td>job_name</td><td>TRUE</td><td>-</td><td>job&#39;s name</td><td>bitsail_conf</td></tr></tbody></table><p>Parameter parallelism：</p><table><thead><tr><th>Parameter name</th><th>Required</th><th>Default</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>min_parallelism</td><td>FALSE</td><td>1</td><td>The minimum parallelism of the job, the parallelism from automatic calculation will be greater than or equal to the minimum parallelism.</td><td>2</td></tr><tr><td>max_parallelism</td><td>FALSE</td><td>512</td><td>The maximum parallelism of the job, the parallelism from automatic calculation will be less than or equal to the maximum parallelism.</td><td>2</td></tr><tr><td>parallelism_chain</td><td>FALSE</td><td>FALSE</td><td>Whether chain the operator between operators. If this option is enabled, will select min parallelism between readers and writers as final parallelism.</td><td>2</td></tr></tbody></table><p>Dirty record setting:(Only in batch mode)</p><table><thead><tr><th>Parameter name</th><th>Required</th><th>Default</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>max_dirty_records_stored_num</td><td>FALSE</td><td>50</td><td>Every task collect size for dirty record.</td><td>50</td></tr><tr><td>dirty_records_count_threshold</td><td>FALSE</td><td>-1</td><td>The threshold of the total dirty records, if dirty records bigger than the threshold, job will fail in final</td><td>-1</td></tr><tr><td>dirty_record_percentage_threshold</td><td>FALSE</td><td>-1</td><td>The percent threshold of the total dirty records, if dirty records percent bigger than the threshold, job will fail in final.</td><td>-1</td></tr></tbody></table><h2 id="reader-module" tabindex="-1"><a class="header-anchor" href="#reader-module" aria-hidden="true">#</a> Reader Module</h2><p>Examples：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;job&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span>
   
            <span class="token punctuation">{</span>
                <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bigint&quot;</span>
                    <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;varchar&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your table name&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your database name&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;password&quot;</span><span class="token operator">:</span><span class="token string">&quot;your database connection password&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;user_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your database connection username&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;split_pk&quot;</span><span class="token operator">:</span><span class="token string">&quot;your table primary key&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;connections&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;slaves&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                            <span class="token punctuation">{</span>
                                <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s port&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;db_url&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s url&quot;</span><span class="token punctuation">,</span>
                                <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s host&quot;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">]</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;shard_num&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;master&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                            <span class="token property">&quot;port&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s port&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;db_url&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s url&quot;</span><span class="token punctuation">,</span>
                            <span class="token property">&quot;host&quot;</span><span class="token operator">:</span><span class="token string">&quot;your connection&#39;s host&quot;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Common Parameter：</p><table><thead><tr><th>Parameter name</th><th>Required</th><th>Default</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>class</td><td>TRUE</td><td>-</td><td>Connector&#39;s class name</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat</td></tr><tr><td>reader_parallelism_num</td><td>FALSE</td><td>-</td><td>Specify the parallelism for the reader operator.</td><td>2</td></tr></tbody></table><p>Other parameters please check the <a href="./connectors">connector</a></p><h2 id="writer-module" tabindex="-1"><a class="header-anchor" href="#writer-module" aria-hidden="true">#</a> Writer Module</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;class&quot;</span><span class="token operator">:</span><span class="token string">&quot;com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your hive database&#39; name.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;your hive database&#39; table name.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;partition&quot;</span><span class="token operator">:</span><span class="token string">&quot;your partition which want to add.&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;metastore_properties&quot;</span><span class="token operator">:</span><span class="token string">&quot;{\\&quot;hive.metastore.uris\\&quot;:\\&quot;thrift://localhost:9083\\&quot;}&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;bigint&quot;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
            <span class="token property">&quot;write_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;overwrite&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;writer_parallelism_num&quot;</span><span class="token operator">:</span><span class="token number">1</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Common Parameters：</p><table><thead><tr><th>Parameter name</th><th>Required</th><th>Default</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>class</td><td>TRUE</td><td>-</td><td>Connector&#39;s class name</td><td>com.bytedance.bitsail.connector.legacy.hive.sink.HiveParquetOutputFormat</td></tr><tr><td>writer_parallelism_num</td><td>FALSE</td><td>-</td><td>Specify Writer&#39;s parallelism, default bitsail will calculate write parallelism for the job.</td><td>2</td></tr></tbody></table><p>Other parameters please check the <a href="./connectors">connector</a></p>`,25),p=[o];function r(i,l){return s(),t("div",null,p)}const d=n(e,[["render",r],["__file","config.html.vue"]]);export{d as default};
