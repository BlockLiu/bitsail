<template><div><h1 id="bitsail-flink-row-parser" tabindex="-1"><a class="header-anchor" href="#bitsail-flink-row-parser" aria-hidden="true">#</a> bitsail-flink-row-parser</h1>
<hr>
<p>上级文档: <RouterLink to="/zh/documents/components/introduction_zh.html">bitsail-components</RouterLink></p>
<h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2>
<p>开发者在处理数据时，经常需要处理并解析bytes数据。本模块提供了数种格式的parser用于解析bytes数据。</p>
<table>
<thead>
<tr>
<th>类名</th>
<th>支持的格式</th>
<th>链接</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>CsvBytesParser</code></td>
<td>CSV</td>
<td><a href="#jump_csv">link</a></td>
</tr>
<tr>
<td><code v-pre>JsonBytesParser</code></td>
<td>JSON</td>
<td><a href="#jump_json">link</a></td>
</tr>
<tr>
<td><code v-pre>PbBytesParser</code></td>
<td>Protobuf</td>
<td><a href="#jump_protobuf">link</a></td>
</tr>
</tbody>
</table>
<h3 id="csvbytesparser" tabindex="-1"><a class="header-anchor" href="#csvbytesparser" aria-hidden="true">#</a> <span id="jump_csv">CsvBytesParser</span></h3>
<p><code v-pre>CsvBytesParser</code>使用<code v-pre>org.apache.commons.csvCSVFormat</code>来解析csv格式的字符串，并支持以下参数:</p>
<ul>
<li><code v-pre>job.common.csv_delimiter</code>: 可通过此参数来配置分隔符，默认为 <code v-pre>,</code>。</li>
<li><code v-pre>job.common.csv_escape</code>: 可通过此参数来配置escape字符，默认不设置。</li>
<li><code v-pre>job.common.csv_quote</code>: 可通过此参数来配置quote字符，默认不设置。</li>
<li><code v-pre>job.common.csv_with_null_string</code>: 可通过此参数来配置null数据的转化值，默认不转化。</li>
</ul>
<h4 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public static void main(String[] args) throws Exception {
    String line = "123,test_string,3.14";
    RowTypeInfo rowTypeInfo = new RowTypeInfo(
      PrimitiveColumnTypeInfo.LONG_COLUMN_TYPE_INFO,
      PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO,
      PrimitiveColumnTypeInfo.DOUBLE_COLUMN_TYPE_INFO
    );

    BitSailConfiguration jobConf = BitSailConfiguration.newDefault();
    jobConf.set(RowParserOptions.CSV_DELIMITER, ",");
    jobConf.set(RowParserOptions.CSV_QUOTE, '"');
    jobConf.set(RowParserOptions.CSV_WITH_NULL_STRING, "null");

    CsvBytesParser parser = new CsvBytesParser(jobConf);

    Row row = new Row(3);
    byte[] bytes = line.getBytes();
    parser.parse(row, bytes, 0, bytes.length, "UTF-8", rowTypeInfo);
    System.out.println(row);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jsonbytesparser" tabindex="-1"><a class="header-anchor" href="#jsonbytesparser" aria-hidden="true">#</a> <span id="jump_json">JsonBytesParser</span></h3>
<p><code v-pre>JsonBytesParser</code>使用<code v-pre>com.bytedance.bitsail.common.util.FastJsonUtil</code>来解析json格式的字符串，并支持以下参数:</p>
<ul>
<li><code v-pre>job.common.case_insensitive</code>: 可通过此参数来配置是否对key大小写敏感，默认为<code v-pre>true</code>。</li>
<li><code v-pre>job.common.json_serializer_features</code>: 可通过此参数来设置用于<code v-pre>FastJsonUtil</code>解析时的properties，格式为 <code v-pre>','</code> 分隔的字符串，例如: <code v-pre>&quot;QuoteFieldNames,WriteNullListAsEmpty&quot;</code>。</li>
<li><code v-pre>job.common.convert_error_column_as_null</code>: 可通过此参数来配置是否在字段转化报错时，将该字段设置为null，默认为<code v-pre>false</code>。</li>
</ul>
<h4 id="示例代码-1" tabindex="-1"><a class="header-anchor" href="#示例代码-1" aria-hidden="true">#</a> 示例代码</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>public static void main(String[] args) {
    String line = "{\"id\":123, \"state\":\"California\", \"county\":\"Los Angeles\"}";
    RowTypeInfo rowTypeInfo = new RowTypeInfo(
      PrimitiveColumnTypeInfo.LONG_COLUMN_TYPE_INFO,
      PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO,
      PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO
    );

    BitSailConfiguration jobConf = BitSailConfiguration.newDefault();
    jobConf.set(RowParserOptions.JSON_SERIALIZER_FEATURES, "QuoteFieldNames");
    JsonBytesParser parser = new JsonBytesParser(jobConf);
    
    Row row = new Row(3);
    byte[] bytes = line.getBytes();
    parser.parse(row, bytes, 0, bytes.length, "UTF-8", rowTypeInfo);
    System.out.println(row);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pbbytesparser" tabindex="-1"><a class="header-anchor" href="#pbbytesparser" aria-hidden="true">#</a> <span id="jump_protobuf">PbBytesParser</span></h3>
<p><code v-pre>PbBytesParser</code>使用用户传入的protobuf描述文件来解析bytes数据，支持以下参数:</p>
<ul>
<li><code v-pre>job.common.proto.descriptor</code>: 此参数为必需参数，用base64方式存储protobuf descriptor。</li>
<li><code v-pre>job.common.proto.class_name</code>: 此参数为必需参数，指定protobuf描述文件中用于解析的类名。</li>
</ul>
<h4 id="示例代码-2" tabindex="-1"><a class="header-anchor" href="#示例代码-2" aria-hidden="true">#</a> 示例代码</h4>
<p>示例proto文件<code v-pre>test.proto</code>如下:</p>
<div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre v-pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">"proto2"</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">ProtoTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">required</span> <span class="token builtin">string</span> stringRow <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">required</span> <span class="token builtin">float</span> floatRow <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">required</span> <span class="token builtin">int64</span> int64Row <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上面proto的<code v-pre>PbBytesParser</code>示例如下:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>private transient Descriptor descriptor = null;

public void parsePbData(byte[] pbData) throws Exception {
  byte[] descriptor = IOUtils.toByteArray(new File("test.proto").toURI());
  RowTypeInfo rowTypeInfo = new RowTypeInfo(
    PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO,
    PrimitiveColumnTypeInfo.DOUBLE_COLUMN_TYPE_INFO,
    PrimitiveColumnTypeInfo.LONG_COLUMN_TYPE_INFO
  );
    
  BitSailConfiguration jobConf = BitSailConfiguration.newDefault();
  jobConf.set(RowParserOptions.PROTO_DESCRIPTOR, new String(descriptor));
  jobConf.set(RowParserOptions.PROTO_CLASS_NAME, "ProtoTest");
  PbBytesParser parser = new PbBytesParser(jobConf);

  Row row = new Row(3);
  parser.parse(row, pbData, 0, pbData.length, null, rowTypeInfo);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


