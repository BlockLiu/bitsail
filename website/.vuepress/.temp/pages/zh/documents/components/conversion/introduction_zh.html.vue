<template><div><h1 id="bitsail-conversion-flink" tabindex="-1"><a class="header-anchor" href="#bitsail-conversion-flink" aria-hidden="true">#</a> bitsail-conversion-flink</h1>
<hr>
<p>上级文档: <RouterLink to="/zh/documents/components/introduction_zh.html">bitsail-components</RouterLink></p>
<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2>
<p><em><strong>BitSail</strong></em> 在将数据传输到指定数据源时，需要将传输过程中使用的中间格式 <code v-pre>bitsail rows</code> 转化为数据源可接受的数据类型。
本模块提供了用于转化<code v-pre>bitsail rows</code>为其他数据类型的便捷工具。</p>
<ul>
<li>文中<code v-pre>bitsail rows</code>指由<code v-pre>org.apache.flink.types.Row</code>包住的<code v-pre>com.bytedance.bitsail.common.column.Column</code>数据。</li>
</ul>
<p>具体支持的数据类型如下：</p>
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
<td><code v-pre>bitsail-conversion-flink-hive</code></td>
<td>提供转化<code v-pre>Row</code>为hive <code v-pre>Writable</code>的方法</td>
<td><RouterLink to="/zh/documents/components/conversion/hive-convert_zh.html">link</RouterLink></td>
</tr>
</tbody>
</table>
</div></template>


