<template><div><h1 id="bitsail-flink-row-parser" tabindex="-1"><a class="header-anchor" href="#bitsail-flink-row-parser" aria-hidden="true">#</a> BitSail-flink-row-parser</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/components/introduction.html">bitsail-components</RouterLink></p>
<h2 id="content" tabindex="-1"><a class="header-anchor" href="#content" aria-hidden="true">#</a> Content</h2>
<p>When developers processing data, they often need to process and parse bytes data. This module provides parsers for parsing several formats of bytes data.</p>
<table>
<thead>
<tr>
<th>Name</th>
<th>Supported format</th>
<th>link</th>
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
<p><code v-pre>CsvBytesParser</code> uses <code v-pre>org.apache.commons.csvCSVFormat</code> to parse csv format strings, and supporting the following parameters:</p>
<ul>
<li><code v-pre>job.common.csv_delimiter</code>: This parameter can be used to configure the delimiter, the default is <code v-pre>','</code></li>
<li><code v-pre>job.common.csv_escape</code>: The escape character can be configured through this parameter, it is not set by default.</li>
<li><code v-pre>job.common.csv_quote</code>: The quote character can be configured through this parameter, it is not set by default.</li>
<li><code v-pre>job.common.csv_with_null_string</code>: This parameter can be used to configure the conversion value of null data, which is not converted by default.</li>
</ul>
<h4 id="example-code" tabindex="-1"><a class="header-anchor" href="#example-code" aria-hidden="true">#</a> Example code</h4>
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
<p><code v-pre>JsonBytesParser</code> use <code v-pre>com.bytedance.bitsail.common.util.FastJsonUtil</code> to parse strings in json format, and supports the following parameters:</p>
<ul>
<li>
<p><code v-pre>job.common.case_insensitive</code>: This parameter can be used to configure whether the key is case sensitive. The default value is true.</p>
</li>
<li>
<p><code v-pre>job.common.json_serializer_features</code>: This parameter can be used to set properties used for parsing, the format is a <code v-pre>','</code> separated string, for example: &quot;QuoteFieldNames,WriteNullListAsEmpty&quot;.</p>
</li>
<li>
<p><code v-pre>job.common.convert_error_column_as_null</code>: This parameter can be used to configure whether to set the field to null when the field fails to convert. The default value is false.</p>
</li>
</ul>
<h4 id="example-code-1" tabindex="-1"><a class="header-anchor" href="#example-code-1" aria-hidden="true">#</a> Example code</h4>
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
<p><code v-pre>PbBytesParser</code> use the protobuf description file passed in by the user to parse the bytes data. The following parameters are supported:</p>
<ul>
<li><code v-pre>job.common.proto.descriptor</code>: This parameter is required and stores the protobuf descriptor in base64.</li>
<li><code v-pre>job.common.proto.class_name</code>: This parameter is required and specifies the class name used for parsing in the protobuf description file.</li>
</ul>
<h4 id="example-code-2" tabindex="-1"><a class="header-anchor" href="#example-code-2" aria-hidden="true">#</a> Example code</h4>
<p>A sample proto file<code v-pre>test.proto</code>:</p>
<div class="language-protobuf line-numbers-mode" data-ext="protobuf"><pre v-pre class="language-protobuf"><code><span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">"proto2"</span><span class="token punctuation">;</span>

<span class="token keyword">message</span> <span class="token class-name">ProtoTest</span> <span class="token punctuation">{</span>
  <span class="token keyword">required</span> <span class="token builtin">string</span> stringRow <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">required</span> <span class="token builtin">float</span> floatRow <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">required</span> <span class="token builtin">int64</span> int64Row <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>An example using the above proto is as follows:</p>
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


