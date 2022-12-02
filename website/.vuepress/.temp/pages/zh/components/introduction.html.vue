<template><div><h1 id="bitsail-components" tabindex="-1"><a class="header-anchor" href="#bitsail-components" aria-hidden="true">#</a> bitsail-components</h1>
<h3 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h3>
<p>本模块包含多种可用于应用开发的基本功能组件。目前我们支持了五种基本的功能模块：</p>
<ul>
<li>
<p><code v-pre>bitsail-component-clients</code>:</p>
<ul>
<li>支持创建各种client，例如<code v-pre>KafkaProducer</code>。</li>
<li>细节可参考：<RouterLink to="/zh/components/clients/introduction.html">bitsail_component_clients</RouterLink></li>
</ul>
</li>
<li>
<p><code v-pre>bitsail-component-formats-flink</code>:</p>
<ul>
<li>支持将各种数据源的数据类型（例如hive的 <code v-pre>Writables</code>）转化为 <code v-pre>bitsail rows</code>。</li>
<li>细节可参考：<RouterLink to="/zh/components/format/introduction.html">bitsail_component_formats_flink</RouterLink></li>
</ul>
</li>
<li>
<p><code v-pre>bitsail-conversion-flink</code>:</p>
<ul>
<li>支持将 <code v-pre>bitsail rows</code> 转化为各种数据源的数据类型（比如hive的 <code v-pre>Writables</code>）。</li>
<li>细节可参考：<RouterLink to="/zh/components/conversion/introduction.html">bitsail_conversion_flink</RouterLink></li>
</ul>
</li>
<li>
<p><code v-pre>bitsail-flink-row-parser</code>:</p>
<ul>
<li>支持按照指定格式解析 <code v-pre>bytes</code> 数组为 <code v-pre>bitsail rows</code>。</li>
<li>细节可参考：<RouterLink to="/zh/components/parser/introduction.html">bitsail_flink_row_parser</RouterLink></li>
</ul>
</li>
</ul>
<hr>
<h3 id="如何使用" tabindex="-1"><a class="header-anchor" href="#如何使用" aria-hidden="true">#</a> 如何使用</h3>
<p>开发者可通过如下方式导入依赖来使用相应的功能模块：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>&lt;dependency>
    &lt;groupId>com.bytedance.bitsail&lt;/groupId>
    &lt;artifactId>bitsail-xxxxx&lt;/artifactId>
    &lt;version>${revision}&lt;/version>
    &lt;scope>compile&lt;/scope>
&lt;/dependency>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


