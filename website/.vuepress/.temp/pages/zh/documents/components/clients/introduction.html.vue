<template><div><h1 id="bitsail-component-clients" tabindex="-1"><a class="header-anchor" href="#bitsail-component-clients" aria-hidden="true">#</a> bitsail-component-clients</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/components/introduction.html">bitsail-components</RouterLink></p>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2>
<p>In the process of application development, applications often need to connect and interact with various components, such as Kafka, rds, <i>etc.</i>. This module is used to provide clients that connect to various big data components. Developers can easily create clients by introducing corresponding dependencies.</p>
<p>Currently, this module provides the following clients:</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Component</th>
<th>Function</th>
<th>Link</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bitsail-components-client-kafka</code></td>
<td><code v-pre>Kafka</code></td>
<td>Create KafkaProducer</td>
<td><a href="#jump_kafka">link</a></td>
</tr>
</tbody>
</table>
<hr>
<h2 id="bitsail-components-client-kafka" tabindex="-1"><a class="header-anchor" href="#bitsail-components-client-kafka" aria-hidden="true">#</a> <span id="jump_kafka">bitsail-components-client-kafka</span></h2>
<h3 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
    &lt;groupId>com.bytedance.bitsail&lt;/groupId>
    &lt;artifactId>bitsail-component-client-kafka&lt;/artifactId>
    &lt;version>${revision}&lt;/version>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h3>
<p>This module is based on <code v-pre>org.apache.kafka.clients.producer.KafkaProducer</code> to providing a wrapped KafkaProducer that supports connecting to a specified kafka cluster and sending data to a specified topic in a synchronous or asynchronous manner.</p>
<h4 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> Constructor</h4>
<p>The constructor accepts the following parameters:</p>
<ol>
<li><code v-pre>bootstrap.servers</code>: The address to connect to the kafka cluster</li>
<li><code v-pre>topic</code>: kafka topic</li>
<li><code v-pre>userConfigs</code>(optional): User-defined producer build properties</li>
</ol>
<p>This constructor supports the following default properties (Refer to <code v-pre>org.apache.kafka.clients.producer.ProducerConfig</code> for detailed property definitions):</p>
<ol>
<li><code v-pre>acks</code>: all</li>
<li><code v-pre>retries</code>: 0</li>
<li><code v-pre>batch_size</code>: 16384</li>
<li><code v-pre>linger.ms</code>: 1000</li>
<li><code v-pre>buffer.memory</code>: 33554432</li>
<li><code v-pre>key.serializer</code>: org.apache.kafka.common.serialization.StringSerializer</li>
<li><code v-pre>value.serializer</code>: org.apache.kafka.common.serialization.StringSerializer</li>
</ol>
<p>The usage example is as follows:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>String bootstrapAddr = "localhost:9092";
String topic = "testTopic";
Map&lt;String, String> userConfigs = ImmutableMap.of(
  "group.id", "test_group",
  "batch.size", 16384
);
KafkaProducer kafkaProducer = new KafkaProducer(bootstrapAddr, topic, userConfigs);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="synchronous-asynchronous-send" tabindex="-1"><a class="header-anchor" href="#synchronous-asynchronous-send" aria-hidden="true">#</a> Synchronous/Asynchronous send</h4>
<p>Developers can use synchronous send, or pass in a callback method to use asynchronous send. The send methods are as follows:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// Sync
public Future&lt;RecordMetadata> send(String value);
public Future&lt;RecordMetadata> send(String value, int partitionId);
public Future&lt;RecordMetadata> send(String key, String value);

// Async
public Future&lt;RecordMetadata> send(String value, Callback callback);
public Future&lt;RecordMetadata> send(String value, int partitionId, Callback callback);
public Future&lt;RecordMetadata> send(String key, String value, Callback callback);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4>
<p>The following is a complete and runnable sample code using this KafkaProducer to send 300 pieces of specified data to a topic. You can test the run locally after substituting the relevant kafka cluster parameters.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>bytedance<span class="token punctuation">.</span>bitsail<span class="token punctuation">.</span>component<span class="token punctuation">.</span>client<span class="token punctuation">.</span>kafka</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaProducerExample</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">assert</span> args<span class="token punctuation">.</span>length <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> bootstrapServer <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> topic <span class="token operator">=</span> args<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">KafkaProducer</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KafkaProducer</span><span class="token punctuation">(</span>bootstrapServer<span class="token punctuation">,</span> topic<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">300</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">String</span> key <span class="token operator">=</span> <span class="token string">"key_"</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
      <span class="token class-name">String</span> value <span class="token operator">=</span> <span class="token string">"value_"</span> <span class="token operator">+</span> i<span class="token punctuation">;</span>
      producer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    producer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


