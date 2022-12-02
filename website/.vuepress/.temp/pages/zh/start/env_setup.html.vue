<template><div><h1 id="environment-setup" tabindex="-1"><a class="header-anchor" href="#environment-setup" aria-hidden="true">#</a> Environment Setup</h1>
<p>English | <RouterLink to="/zh/start/env_setup_zh.html">简体中文</RouterLink></p>
<hr>
<h2 id="prerequisite" tabindex="-1"><a class="header-anchor" href="#prerequisite" aria-hidden="true">#</a> Prerequisite</h2>
<p><strong>Bitsail</strong> supports run integration tests on local IDE. To achieve that, you need:</p>
<ul>
<li>JDK1.8</li>
<li>maven 3.6+</li>
<li><a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker desktop<ExternalLinkIcon/></a></li>
</ul>
<p>After correctly installing the above required components, we are able to run integration tests on your local IDE.</p>
<h2 id="build-from-source-code" tabindex="-1"><a class="header-anchor" href="#build-from-source-code" aria-hidden="true">#</a> Build From Source Code</h2>
<ul>
<li>Run the build script to package with flink embedded.
<code v-pre>bash build.sh</code>
If you have your own flink package provided by the cluster, you can also package without flink.
<code v-pre>mvn clean package -pl bitsail-dist -am -Dmaven.test.skip=true</code></li>
</ul>
<p>After building the project, the output jar files are in the folder <code v-pre>bitsail-dist/target/</code>.</p>
<p>The project production file structure is as follows:</p>
<div class="language-simple line-numbers-mode" data-ext="simple"><pre v-pre class="language-simple"><code>bitsail-archive-${version}-SNAPSHOT    
    /bin  
        /bitsail #Startup script
    /conf
        /bitsail.conf #bitsail system config
    /embedded
        /flink #embedded flink
    /examples #examples configuration files
        /example-datas #examples data
        /Fake_xx_Example.json #Fake source to xx examples config files
        /xx_Print_Example.json #xx to print sink examples config files
    /libs #jar libs
        /bitsail-core.jar #entering jar package
        /connectors #connector plugin jars
            /mapping #connector plugin config files
        /components #components jars，such as metric、dirty-collector
        /clients #bitsail client jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-local-integration-tests" tabindex="-1"><a class="header-anchor" href="#run-local-integration-tests" aria-hidden="true">#</a> Run Local Integration Tests</h2>
<p>In <a href="https://github.com/bytedance/bitsail/tree/master/bitsail-test/bitsail-connector-test" target="_blank" rel="noopener noreferrer"><code v-pre>bitsail-connector-test</code><ExternalLinkIcon/></a> module, we provide the <a href="https://github.com/bytedance/bitsail/blob/master/bitsail-test/bitsail-connector-test/src/main/java/com/bytedance/bitsail/test/connector/test/EmbeddedFlinkCluster.java" target="_blank" rel="noopener noreferrer">EmbeddedFlinkCluster<ExternalLinkIcon/></a> class that can be used to start a job in local Flink MiniCluster.</p>
<p>For example, we build an integration test <a href="https://github.com/bytedance/bitsail/blob/master/bitsail-connectors/bitsail-connectors-legacy/bitsail-connector-kafka/src/test/java/com/bytedance/bitsail/connector/legacy/kafka/source/KafkaSourceITCase.java" target="_blank" rel="noopener noreferrer">KafkaSourceITCase<ExternalLinkIcon/></a> for Kafka source connector.
It uses <a href="https://www.testcontainers.org/modules/kafka/" target="_blank" rel="noopener noreferrer">test container<ExternalLinkIcon/></a> to start kafka service in local docker.
We can run the <code v-pre>testKafkaSource</code> method to start a kafka2print task in local flink MiniCluster.</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaSourceITCase</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testKafkaSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">BitSailConfiguration</span> configuration <span class="token operator">=</span> <span class="token class-name">JobConfUtils</span><span class="token punctuation">.</span><span class="token function">fromClasspath</span><span class="token punctuation">(</span><span class="token string">"kafka_to_print.json"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">updateConfiguration</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">EmbeddedFlinkCluster</span><span class="token punctuation">.</span><span class="token function">submitJob</span><span class="token punctuation">(</span>configuration<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


