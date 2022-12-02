<template><div><h1 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置" aria-hidden="true">#</a> 环境配置</h1>
<p><RouterLink to="/zh/start/env_setup.html">English</RouterLink> | 简体中文</p>
<hr>
<h2 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h2>
<p><strong>Bitsail</strong>支持在本地IDE运行集成测试，为此需要:</p>
<ul>
<li>JDK1.8</li>
<li>maven 3.6+</li>
<li><a href="https://www.docker.com/products/docker-desktop/" target="_blank" rel="noopener noreferrer">Docker desktop<ExternalLinkIcon/></a></li>
</ul>
<p>在安装上述必需组件后，您可以在本地的IDE上直接运行已有的集成测试。</p>
<h2 id="从源代码编译" tabindex="-1"><a class="header-anchor" href="#从源代码编译" aria-hidden="true">#</a> 从源代码编译</h2>
<ul>
<li>运行此脚本在编译时将Flink嵌入到BitSail的包中。<code v-pre>bash build.sh</code>。如果Flink已经在你们的集群中提供，则可以打包时只包含BitSail相关代码 <code v-pre>mvn clean package -pl bitsail-dist -am -Dmaven.test.skip=true</code></li>
</ul>
<p>完成打包后，输出的文件在此目录下<code v-pre>bitsail-dist/target/</code>.</p>
<p>产物的目录结构如下:</p>
<div class="language-simple line-numbers-mode" data-ext="simple"><pre v-pre class="language-simple"><code>bitsail-archive-${version}-SNAPSHOT    
    /bin  
        /bitsail #提交启动脚本
    /conf
        /bitsail.conf #bitsail 系统配置
    /embedded
        /flink #内嵌flink
    /examples #e运行样例配置
        /example-datas #运行样例数据
        /Fake_xx_Example.json #Fake source 导入到 xx 的样例配置文件
        /xx_Print_Example.json #xx 导入到 print sink 的样例配置文件
    /libs #运行需要的jar包
        /bitsail-core.jar #入口 jar 包
        /connectors #connector plugin实现jar包
            /mapping #connector plugin 配置文件
        /components #各个组件的实现包，例如metric、dirty-collector
        /clients #bitsail client jar 包
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行本地集成测试" tabindex="-1"><a class="header-anchor" href="#运行本地集成测试" aria-hidden="true">#</a> 运行本地集成测试</h2>
<p>在 <a href="https://github.com/bytedance/bitsail/tree/master/bitsail-test/bitsail-connector-test" target="_blank" rel="noopener noreferrer"><code v-pre>bitsail-connector-test</code><ExternalLinkIcon/></a> 模块中，我们提供了 <a href="https://github.com/bytedance/bitsail/blob/master/bitsail-test/bitsail-connector-test/src/main/java/com/bytedance/bitsail/test/connector/test/EmbeddedFlinkCluster.java" target="_blank" rel="noopener noreferrer">EmbeddedFlinkCluster<ExternalLinkIcon/></a> 类用于启动一个本地运行的flink作业。</p>
<p>例如，我们为Kafka读连接器构建了一个集成测试 <a href="https://github.com/bytedance/bitsail/blob/master/bitsail-connectors/bitsail-connectors-legacy/bitsail-connector-kafka/src/test/java/com/bytedance/bitsail/connector/legacy/kafka/source/KafkaSourceITCase.java" target="_blank" rel="noopener noreferrer">KafkaSourceITCase<ExternalLinkIcon/></a> 。
在这个测试中，首先会使用 <a href="https://www.testcontainers.org/modules/kafka/" target="_blank" rel="noopener noreferrer">test container<ExternalLinkIcon/></a> 在本地docker中启动Kafka服务。此后便可以通过 <code v-pre>testKafkaSource</code> 方法来启动一个本地的 kafka2print flink作业。</p>
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


