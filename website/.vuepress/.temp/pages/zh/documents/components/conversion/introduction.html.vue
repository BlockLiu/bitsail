<template><div><h1 id="bitsail-conversion-flink" tabindex="-1"><a class="header-anchor" href="#bitsail-conversion-flink" aria-hidden="true">#</a> bitsail-conversion-flink</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/components/introduction.html">bitsail-components</RouterLink></p>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2>
<p>When <em><strong>BitSail</strong></em> transmits data to a specified data source, it needs to convert the intermediate format (<code v-pre>bitsail rows</code>) used in the transmission process into a data type acceptable to the data source.
This module provides convenient tools for converting.</p>
<ul>
<li>In this context, <code v-pre>bitsail rows</code> means <code v-pre>com.bytedance.bitsail.common.column.Column</code> data wrapped by <code v-pre>org.apache.flink.types.Row</code>。</li>
</ul>
<p>Specific supported data types are as follows:</p>
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
<td><code v-pre>bitsail-conversion-flink-hive</code></td>
<td>Provides a way to convert <code v-pre>Row</code> to hive <code v-pre>Writable</code></td>
<td><RouterLink to="/zh/documents/components/conversion/hive-convert.html">link</RouterLink></td>
</tr>
</tbody>
</table>
</div></template>


