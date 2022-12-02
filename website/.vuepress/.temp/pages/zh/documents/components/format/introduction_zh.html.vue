<template><div><h1 id="bitsail-component-formats-flink" tabindex="-1"><a class="header-anchor" href="#bitsail-component-formats-flink" aria-hidden="true">#</a> bitsail-component-formats-flink</h1>
<hr>
<p>上级文档: <RouterLink to="/zh/documents/components/introduction_zh.html">bitsail-components</RouterLink></p>
<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2>
<p><em><strong>BitSail</strong></em> 在使用flink作为引擎时，各个connector的数据传输过程中使用 <code v-pre>bitsail rows</code> 作为传输中间格式，因此在将数据从数据源读入后需要转化为 <code v-pre>bitsail rows</code> 。
本模块用于提供将常见格式数据转化为 <code v-pre>bitsail rows</code> 的便捷方法，具体支持的格式如下：</p>
<ul>
<li>文中<code v-pre>bitsail rows</code>指由<code v-pre>org.apache.flink.types.Row</code>包住的<code v-pre>com.bytedance.bitsail.common.column.Column</code>数据。</li>
</ul>
<table>
<thead>
<tr>
<th>子模块</th>
<th>支持的功能</th>
<th>链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bitsail-component-format-flink-api</code></td>
<td>提供<code v-pre>Row</code>转化的接口</td>
<td><a href="#jump_api">link</a></td>
</tr>
<tr>
<td><code v-pre>bitsail-component-format-flink-hive</code></td>
<td>提供 hive <code v-pre>Writable</code>的转化方法</td>
<td><RouterLink to="/zh/documents/components/format/hive-format_zh.html">link</RouterLink></td>
</tr>
<tr>
<td><code v-pre>bitsail-component-format-flink-json</code></td>
<td>提供json格式字符串的转化方法</td>
<td><RouterLink to="/zh/documents/components/format/json-format.html">link</RouterLink></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="rowbuilder-接口" tabindex="-1"><a class="header-anchor" href="#rowbuilder-接口" aria-hidden="true">#</a> <span id="jump_api"><code v-pre>RowBuilder</code> 接口</span></h3>
<p><code v-pre>RowBuilder</code>顾名思义，即将原始数据转化按照某种格式转化成Row的构建器。因此<code v-pre>RowBuilder</code>的转化方法需要至少两个必须的参数：</p>
<ol>
<li><code v-pre>value</code>: 原始数据，例如Writables, JSON字符串等</li>
<li><code v-pre>rowTypeInfo</code>: 转化row的具体格式，例如字段名称&amp;字段类型</li>
</ol>
<p>转化产生的产物<code v-pre>Row</code>使用参数的方式加载，开发者需要在<code v-pre>build</code>方法中对此<code v-pre>Row</code>进行赋值。
因此一个基础的构建接口如下：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * @param value Raw data to transform to 'bitsail rows'.
 * @param reuse The transformed `bitsail row`.
 * @param rowTypeInfo Determine the format (field name, data types) of the transformed row.
 */
void build(Object value, Row reuse, RowTypeInfo rowTypeInfo) throws BitSailException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面参数外，还可以通过其他的参数指导<code v-pre>Row</code>的构建，例如字符编码、包含的字段范围等。因此<code v-pre>RowBuilder</code>还提供了以下两个扩展接口:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo) throws BitSailException;

/**
 * @param fieldIndexes Indices of fields in row data that should be included while building.
 */
void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo, int[] fieldIndexes);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


