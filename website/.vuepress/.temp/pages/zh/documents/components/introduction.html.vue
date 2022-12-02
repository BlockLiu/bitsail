<template><div><h1 id="bitsail-components" tabindex="-1"><a class="header-anchor" href="#bitsail-components" aria-hidden="true">#</a> bitsail-components</h1>
<hr>
<h2 id="contents" tabindex="-1"><a class="header-anchor" href="#contents" aria-hidden="true">#</a> Contents</h2>
<p>This module contains components supporting various basic functions, which can be used for developing.
Currently, we support 5 functional components:</p>
<ul>
<li>
<p><code v-pre>bitsail-component-clients</code>:</p>
<ul>
<li>Support conveniently creating some clients, such as KafkaProducer.</li>
<li>Details can be seen: <RouterLink to="/zh/documents/components/clients/introduction.html">bitsail_component_clients</RouterLink></li>
</ul>
</li>
<li>
<p><code v-pre>bitsail-component-formats-flink</code>:</p>
<ul>
<li>Support converting different data types (such as hive <code v-pre>Writables</code>) into <code v-pre>bitsail rows</code>.</li>
<li>Details can be seen: <RouterLink to="/zh/documents/components/format/introduction.html">bitsail_component_format</RouterLink></li>
</ul>
</li>
<li>
<p><code v-pre>bitsail-conversion-flink</code>:</p>
<ul>
<li>Support converting <code v-pre>bitsail</code> rows into different data types (such as hive <code v-pre>Writables</code>).</li>
<li>Details can be seen: <RouterLink to="/zh/documents/components/conversion/introduction.html">bitsail_component_conversion</RouterLink></li>
</ul>
</li>
<li>
<p><code v-pre>bitsail-flink-row-parser</code>:</p>
<ul>
<li>Support converting <code v-pre>bytes</code> array into <code v-pre>bitsail</code> rows according to determined format.</li>
<li>Details can be seen: <RouterLink to="/zh/documents/components/parser/introduction.html">bitsail_component_parser</RouterLink></li>
</ul>
</li>
</ul>
<hr>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2>
<p>Developers can use these modules by importing them in maven dependencies.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
    &lt;groupId>com.bytedance.bitsail&lt;/groupId>
    &lt;artifactId>bitsail-xxxxx&lt;/artifactId>
    &lt;version>${revision}&lt;/version>
    &lt;scope>compile&lt;/scope>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


