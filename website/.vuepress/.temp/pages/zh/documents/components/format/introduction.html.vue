<template><div><h1 id="bitsail-component-formats-flink" tabindex="-1"><a class="header-anchor" href="#bitsail-component-formats-flink" aria-hidden="true">#</a> bitsail-component-formats-flink</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/components/introduction.html">bitsail-components</RouterLink></p>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2>
<p>When <em><strong>BitSail</strong></em> uses flink as the engine, it uses <code v-pre>flink rows</code> as intermediate format.
So developers need to convert data from data source into <code v-pre>flink rows</code>.
This module offers convenient methods to convert some kinds of data into <code v-pre>flink rows</code>.
The specific supported formats are as follows:</p>
<p>so it needs to be converted to after reading the data from the data source bitsail rows. This module is used to provide bitsail rowsa . The specific supported formats are as follows:</p>
<ul>
<li>The <code v-pre>flink rows</code> mentioned above are actually <code v-pre>com.bytedance.bitsail.common.column.Column</code> data wrapped by <code v-pre>org.apache.flink.types.Row</code>.</li>
</ul>
<table>
<thead>
<tr>
<th>Name</th>
<th>Function</th>
<th>Link</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>bitsail-component-format-flink-api</code></td>
<td>Provide interface for converting data to <code v-pre>Row</code></td>
<td><a href="#jump_api">link</a></td>
</tr>
<tr>
<td><code v-pre>bitsail-component-format-flink-hive</code></td>
<td>Providing method for converting hive <code v-pre>Writable</code></td>
<td><RouterLink to="/zh/documents/components/format/hive-format.html">link</RouterLink></td>
</tr>
<tr>
<td><code v-pre>bitsail-component-format-flink-json</code></td>
<td>Providing method for converting json string</td>
<td><RouterLink to="/zh/documents/components/format/json-format.html">link</RouterLink></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="rowbuilder-interface" tabindex="-1"><a class="header-anchor" href="#rowbuilder-interface" aria-hidden="true">#</a> <span id="jump_api">RowBuilder interface</span></h3>
<p>As the name implies, <code v-pre>RowBuilder</code> is a builder that converts raw data in a certain format into <code v-pre>Row</code>.
Therefore it requires at least two parameters:</p>
<ol>
<li><code v-pre>value</code>: Raw data, such as Writables, JSON strings, <i>etc.</i>.</li>
<li><code v-pre>rowTypeInfo</code>: Describing the structure of raw data, so we can know that what the fields name and data type to extract.</li>
</ol>
<p>A basic <code v-pre>build</code> method is as follows:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * @param value Raw data to transform to 'bitsail rows'.
 * @param reuse The transformed `bitsail row`.
 * @param rowTypeInfo Determine the format (field name, data types) of the transformed row.
 */
void build(Object value, Row reuse, RowTypeInfo rowTypeInfo) throws BitSailException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In addition to the above parameters, the <code v-pre>build</code> process can also be guided by other parameters, such as character encoding, the index range of fields <i>etc.</i>. So <code v-pre>RowBuilder</code> provides the following two extension interfaces:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo) throws BitSailException;

/**
 * @param fieldIndexes Indices of fields in row data that should be included while building.
 */
void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo, int[] fieldIndexes);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


