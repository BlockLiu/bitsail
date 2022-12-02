<template><div><h1 id="kafka-connector" tabindex="-1"><a class="header-anchor" href="#kafka-connector" aria-hidden="true">#</a> Kafka connector</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/connectors/introduction.html">connectors</RouterLink></p>
<p>The Kafka connector supports the following functional points:</p>
<ul>
<li><code v-pre>At Least Once</code> write in batch scenarios</li>
<li><code v-pre>Exactly Once</code> read in streaming scenarios</li>
</ul>
<h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2>
<p>The Kafka connector internally uses <code v-pre>org.apache.kafka:kafka-clients</code> (version 1.0.1) for data writing. So when using kafka to write the connector, you need to pay attention that the target kafka cluster should be able to use this version of kafka-clients.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
   &lt;groupId>com.bytedance.bitsail&lt;/groupId>
   &lt;artifactId>bitsail-connector-kafka&lt;/artifactId>
   &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka-reader" tabindex="-1"><a class="header-anchor" href="#kafka-reader" aria-hidden="true">#</a> Kafka reader</h2>
<h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3>
<table>
<thead>
<tr>
<th>Param name</th>
<th>Required</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td>Yes</td>
<td></td>
<td>Reader class name for kafka connector,<code v-pre>com.bytedance.bitsail.connector.legacy.kafka.source.KafkaSourceFunctionDAGBuilder</code></td>
</tr>
<tr>
<td>child_connector_type</td>
<td>Yes</td>
<td></td>
<td>Only could be <code v-pre>kafka</code></td>
</tr>
<tr>
<td>reader_parallelism_num</td>
<td>No</td>
<td></td>
<td>Reader parallelism num</td>
</tr>
</tbody>
</table>
<h4 id="parameters-for-kafkaconsumer" tabindex="-1"><a class="header-anchor" href="#parameters-for-kafkaconsumer" aria-hidden="true">#</a> Parameters for KafkaConsumer</h4>
<p>The underlying Kafka connector uses <code v-pre>FlinkKafkaConsumer</code> for reading. The properties or kafka information of the initialized FlinkKafkaConsumer are passed in through options <code v-pre>job.reader.connector</code>. You can specify them as follows:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"connector"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"prop_key"</span><span class="token operator">:</span> <span class="token string">"prop_value"</span>   <span class="token comment">// "prop_key" means property key, while "prop_val" means property value</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>job.reader.connector</code> supports KV configuration in the form of &lt;string,string&gt;, where:</p>
<ul>
<li><code v-pre>prop_key</code>: FlinkKafkaConsumer property key</li>
<li><code v-pre>prop_value</code>: FlinkKafkaConsumer property key</li>
</ul>
<p>Some common property used are listed below:</p>
<p><b>1. Kafka cluster properties</b></p>
<table>
<thead>
<tr>
<th>Property key</th>
<th>Required</th>
<th>Default value</th>
<th>Optional value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>connector.bootstrap.servers</td>
<td>Yes</td>
<td></td>
<td></td>
<td>kafka cluster address</td>
</tr>
<tr>
<td>connector.topic</td>
<td>Yes</td>
<td></td>
<td></td>
<td>topic to read</td>
</tr>
<tr>
<td><a href="http://connector.group.id" target="_blank" rel="noopener noreferrer">connector.group.id<ExternalLinkIcon/></a></td>
<td>Yes</td>
<td></td>
<td></td>
<td>kafka consumer group</td>
</tr>
</tbody>
</table>
<p><b>2. Where to start consuming</b></p>
<table>
<thead>
<tr>
<th>Property key</th>
<th>Is necessary</th>
<th>Default value</th>
<th>Optional value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>connector.startup-mode</td>
<td>No</td>
<td>group-offsets</td>
<td>1. <code v-pre>ealiest-offset</code>: Consume from the earliest offset of the partition<br>2. <code v-pre>latest-offset</code>: Consume from the latest offset of the partition<br>3. <code v-pre>group-offsets</code>: Comsume from the offset of the current consumer group<br>4. <code v-pre>specific-offsets</code>: Specify the offset for each partition, cooperate with <code v-pre>connector.specific-offsets</code><br>5. <code v-pre>specific-timestamp</code>: Consume messages after a certain point in time, cooperate with <code v-pre>connector.specific-timestamp</code></td>
<td>Decide from which offsets to consume</td>
</tr>
<tr>
<td>connector.specific-offsets</td>
<td>No</td>
<td></td>
<td></td>
<td>Used with specific-offsets, the format is a standard json string.<br>For example:<br><code v-pre>[{&quot;partition&quot;:1,&quot;offset&quot;:100},{&quot;partition&quot;:2,&quot;offset&quot;:200}]</code></td>
</tr>
<tr>
<td>connector.specific-timestamp</td>
<td>No</td>
<td></td>
<td></td>
<td>Used with specific-timestamp (ms) to specify the offset to consume</td>
</tr>
</tbody>
</table>
<p><b>3. Other FlinkKafkaConsumer parameters</b></p>
<p>FlinkKafkaConsumer supports many parameters, please refer to <a href="https://kafka.apache.org/21/javadoc/?org/apache/kafka/clients/consumer/ConsumerConfig.html">ConsumerConfig(2.1.0) API]</a> for details .
If the user needs to set these parameters, it can be configured through <code v-pre>connector.XXX</code>.</p>
<p>For example, to set MAX_PARTITION_FETCH_BYTES_CONFIG to 1024, add the parameter:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"reader"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"connector"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"connector.max.partition.fetch.bytes"</span><span class="token operator">:</span> <span class="token string">"1024"</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="parameters-for-debugging" tabindex="-1"><a class="header-anchor" href="#parameters-for-debugging" aria-hidden="true">#</a> Parameters for debugging</h4>
<p>The Kafka read connector is used in streaming scenarios and will be consumed all the time under normal circumstances.
If the user wants to debug by consuming only a limited amount of data, the following parameters can be configured. Note that these parameters need to be added to <code v-pre>job.reader</code> block.</p>
<table>
<thead>
<tr>
<th>Property key</th>
<th>Is necessary</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>enable_count_mode</td>
<td>No</td>
<td>false</td>
<td>Whether to end the current task after sending a piece of data, generally used for testing</td>
</tr>
<tr>
<td>count_mode_record_threshold</td>
<td>No</td>
<td>10000</td>
<td>If <code v-pre>enable_count_mode=true</code>, the current task ends after consuming <code v-pre>count_mode_record_threshold</code> pieces of messages</td>
</tr>
<tr>
<td>count_mode_run_time_threshold</td>
<td>No</td>
<td>600</td>
<td>If <code v-pre>enable_count_mode=true</code>, end the current task after running <code v-pre>count_mode_record_threshold</code> seconds</td>
</tr>
</tbody>
</table>
<h3 id="supported-message-parsing-modes" tabindex="-1"><a class="header-anchor" href="#supported-message-parsing-modes" aria-hidden="true">#</a> Supported message parsing modes</h3>
<p>Messages can be pulled from KafkaConsumer in format of ConsumerRecord. <em><strong>BitSail</strong></em> supports two ways to handle ConsumerRecordof. The user can use <code v-pre>job.reader.format</code> to decide which method to use.</p>
<ul>
<li><code v-pre>job.reader.format_type=&quot;json&quot;</code>: Parse according to json format
<ul>
<li>In this mode, <em><strong>BitSail</strong></em> parses the json format string represented by value in ConsumerRecord according to the parameters <code v-pre>job.reader.columns</code>  set by the user.</li>
<li>Therefore, the parameters <code v-pre>job.reader.columns</code> is required in this mode</li>
</ul>
</li>
<li><code v-pre>job.reader.format_type=&quot;streaming_file&quot;</code>: Use raw byte value
<ul>
<li>In this mode, <em><strong>BitSail</strong></em> directly deliver the raw bytes value in ConsumerRecord. The specific structure is as follows:</li>
</ul>
</li>
</ul>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code>   <span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token property">"index"</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"key"</span><span class="token punctuation">,</span> <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"binary"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>     <span class="token comment">// message key</span>
    <span class="token punctuation">{</span><span class="token property">"index"</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"value"</span><span class="token punctuation">,</span> <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"binary"</span><span class="token punctuation">}</span><span class="token punctuation">,</span>   <span class="token comment">// message value</span>
    <span class="token punctuation">{</span><span class="token property">"index"</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"partition"</span><span class="token punctuation">,</span> <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"string"</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// partition of the message</span>
    <span class="token punctuation">{</span><span class="token property">"index"</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token property">"name"</span><span class="token operator">:</span><span class="token string">"offset"</span><span class="token punctuation">,</span> <span class="token property">"type"</span><span class="token operator">:</span><span class="token string">"long"</span><span class="token punctuation">}</span>     <span class="token comment">// offset of the meesage in partition</span>
   <span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kafka-writer" tabindex="-1"><a class="header-anchor" href="#kafka-writer" aria-hidden="true">#</a> Kafka Writer</h2>
<h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3>
<p>Note that these parameters should be added to <code v-pre>job.writer</code> block.</p>
<h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4>
<table>
<thead>
<tr>
<th>Param names</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>class</td>
<td></td>
<td>Writer class name of kafka connector, <code v-pre>com.bytedance.bitsail.connector.legacy.kafka.sink.KafkaOutputFormat</code></td>
</tr>
<tr>
<td>kafka_servers</td>
<td></td>
<td>Kafka's bootstrap server address, multiple bootstrap server addresses are separated by <code v-pre>','</code></td>
</tr>
<tr>
<td>topic_name</td>
<td></td>
<td>kafka topic</td>
</tr>
<tr>
<td>columns</td>
<td></td>
<td>Describing fields' names and data types</td>
</tr>
</tbody>
</table>
<h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4>
<table>
<thead>
<tr>
<th>Param names</th>
<th>Default value</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>writer_parallelism_num</td>
<td></td>
<td>writer parallelism num</td>
</tr>
<tr>
<td>partition_field</td>
<td></td>
<td><code v-pre>partition_field</code> contains one or several fields from <code v-pre>job.writer.columns</code>, separated by commas (<i>e.g.</i> &quot;id,timestamp&quot;). If partition_field is not empty, when sending data to kafka topic, it will decide which topic to write based on the hash values ​​of these fields in the record</td>
</tr>
<tr>
<td>log_failures_only</td>
<td>false</td>
<td>When KafkaProducer fails to perform an asynchronous send operation:<br> 1. If <code v-pre>log_failures_only=true</code>, only log failure information<br> 2. If <code v-pre>log_failures_only=false</code>, throw an exception</td>
</tr>
<tr>
<td>retries</td>
<td>10</td>
<td>Number of failed retries for KafkaProducer</td>
</tr>
<tr>
<td>retry_backoff_ms</td>
<td>1000</td>
<td>KafkaProducer's failure retry interval (ms)</td>
</tr>
<tr>
<td>linger_ms</td>
<td>5000</td>
<td>The maximum waiting time (ms) for KafkaProducer to create a single batch</td>
</tr>
</tbody>
</table>
<h4 id="other-parameters" tabindex="-1"><a class="header-anchor" href="#other-parameters" aria-hidden="true">#</a> Other parameters</h4>
<p>When initializing the KafkaProducer, the user can use <code v-pre>job.common.optional</code> to pass initialization parameters, for example:</p>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">"job"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">"common"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
         <span class="token property">"optional"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"batch.size"</span><span class="token operator">:</span> <span class="token number">16384</span><span class="token punctuation">,</span>
            <span class="token property">"buffer.memory"</span><span class="token operator">:</span> <span class="token number">33554432</span>
         <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>
<p>Configuration examples: <RouterLink to="/zh/documents/connectors/kafka/kafka-example.html">kafka-connector-example</RouterLink></p>
</div></template>


