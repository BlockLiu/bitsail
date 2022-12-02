<template><div><h2 id="hdfs-s-example" tabindex="-1"><a class="header-anchor" href="#hdfs-s-example" aria-hidden="true">#</a> HDFS's Example</h2>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"hdfs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"replication"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">"dump_type"</span><span class="token operator">:</span> <span class="token string">"hdfs.dump_type.json"</span><span class="token punctuation">,</span>
        <span class="token property">"compression_codec"</span><span class="token operator">:</span> <span class="token string">"none"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"dump"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"output_dir"</span><span class="token operator">:</span> <span class="token string">"file:///tmp/streaming_file_hdfs/"</span><span class="token punctuation">,</span>
        <span class="token property">"format"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"hdfs"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.streamingfile.sink.FileSystemSinkFunctionDAGBuilder"</span><span class="token punctuation">,</span>
      <span class="token property">"partition_infos"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"date\",\"type\":\"TIME\"},{\"name\":\"hour\",\"type\":\"TIME\"}]"</span><span class="token punctuation">,</span>
      <span class="token property">"enable_event_time"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">"event_time_fields"</span><span class="token operator">:</span> <span class="token string">"timestamp"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-example-static-partition" tabindex="-1"><a class="header-anchor" href="#hive-example-static-partition" aria-hidden="true">#</a> HIVE' Example (Static Partition)</h2>
<h3 id="job-writer-s-configuration" tabindex="-1"><a class="header-anchor" href="#job-writer-s-configuration" aria-hidden="true">#</a> job writer's configuration</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span>
      <span class="token property">"table_name"</span><span class="token operator">:</span> <span class="token string">"bitsail_test_static"</span><span class="token punctuation">,</span>
      <span class="token property">"hdfs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"dump_type"</span><span class="token operator">:</span> <span class="token string">"hdfs.dump_type.json"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"dump"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"format"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"hive"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"metastore_properties"</span><span class="token operator">:</span> <span class="token string">"{\"hive.metastore.uris\":\"thrift:localhost:9083\"}"</span><span class="token punctuation">,</span>
      <span class="token property">"partition_infos"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"date\",\"type\":\"TIME\"},{\"name\":\"hour\",\"type\":\"TIME\"}]"</span><span class="token punctuation">,</span>
      <span class="token property">"enable_event_time"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
      <span class="token property">"event_time_fields"</span><span class="token operator">:</span> <span class="token string">"timestamp"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.streamingfile.sink.FileSystemSinkFunctionDAGBuilder"</span><span class="token punctuation">,</span>
      <span class="token property">"source_schema"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"id\",\"type\":\"bigint\"},{\"name\":\"text\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"bigint\"}]"</span><span class="token punctuation">,</span>
      <span class="token property">"sink_schema"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"id\",\"type\":\"bigint\"},{\"name\":\"text\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"bigint\"}]"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-s-example-table-ddl" tabindex="-1"><a class="header-anchor" href="#job-s-example-table-ddl" aria-hidden="true">#</a> job's example table ddl.</h3>
<div class="language-hiveql line-numbers-mode" data-ext="hiveql"><pre v-pre class="language-hiveql"><code>CREATE TABLE IF NOT EXISTS `default`.`bitsail_test_static`
(
    `id`        bigint,
    `text`      string,
    `timestamp` bigint
) PARTITIONED BY (`date` string, `hour` string)
    ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
    STORED AS INPUTFORMAT 'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat'
        OUTPUTFORMAT 'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-example-dynamic-partition" tabindex="-1"><a class="header-anchor" href="#hive-example-dynamic-partition" aria-hidden="true">#</a> HIVE' Example (Dynamic Partition)</h2>
<h3 id="job-writer-s-configuration-dynamic" tabindex="-1"><a class="header-anchor" href="#job-writer-s-configuration-dynamic" aria-hidden="true">#</a> job writer's configuration(dynamic)</h3>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"writer"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"db_name"</span><span class="token operator">:</span> <span class="token string">"default"</span><span class="token punctuation">,</span>
      <span class="token property">"table_name"</span><span class="token operator">:</span> <span class="token string">"bitsail_test_dynamic"</span><span class="token punctuation">,</span>
      <span class="token property">"hdfs"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"dump_type"</span><span class="token operator">:</span> <span class="token string">"hdfs.dump_type.json"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"dump"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"format"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"hive"</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">"metastore_properties"</span><span class="token operator">:</span> <span class="token string">"{\"hive.metastore.uris\":\"thrift:localhost:9083\"}"</span><span class="token punctuation">,</span>
      <span class="token property">"partition_infos"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"date\",\"type\":\"TIME\"},{\"name\":\"hour\",\"type\":\"TIME\"},{\"name\":\"app_name\",\"type\":\"DYNAMIC\"}]"</span><span class="token punctuation">,</span>
      <span class="token property">"enable_event_time"</span><span class="token operator">:</span> <span class="token string">"true"</span><span class="token punctuation">,</span>
      <span class="token property">"event_time_fields"</span><span class="token operator">:</span> <span class="token string">"timestamp"</span><span class="token punctuation">,</span>
      <span class="token property">"class"</span><span class="token operator">:</span> <span class="token string">"com.bytedance.bitsail.connector.legacy.streamingfile.sink.FileSystemSinkFunctionDAGBuilder"</span><span class="token punctuation">,</span>
      <span class="token property">"source_schema"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"id\",\"type\":\"bigint\"},{\"name\":\"text\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"bigint\"},{\"name\":\"app_name\",\"type\":\"string\"}]"</span><span class="token punctuation">,</span>
      <span class="token property">"sink_schema"</span><span class="token operator">:</span> <span class="token string">"[{\"name\":\"id\",\"type\":\"bigint\"},{\"name\":\"text\",\"type\":\"string\"},{\"name\":\"timestamp\",\"type\":\"bigint\"},{\"name\":\"app_name\",\"type\":\"string\"}]"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="job-s-example-table-ddl-dynamic" tabindex="-1"><a class="header-anchor" href="#job-s-example-table-ddl-dynamic" aria-hidden="true">#</a> job's example table ddl (dynamic).</h3>
<div class="language-hiveql line-numbers-mode" data-ext="hiveql"><pre v-pre class="language-hiveql"><code>CREATE TABLE IF NOT EXISTS `default`.`bitsail_test_dynamic`
(
    `id`        bigint,
    `text`      string,
    `timestamp` bigint
) PARTITIONED BY (`date` string, `hour` string, `app_name` string)
    ROW FORMAT SERDE 'org.apache.hadoop.hive.ql.io.parquet.serde.ParquetHiveSerDe'
    STORED AS INPUTFORMAT 'org.apache.hadoop.hive.ql.io.parquet.MapredParquetInputFormat'
        OUTPUTFORMAT 'org.apache.hadoop.hive.ql.io.parquet.MapredParquetOutputFormat' 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


