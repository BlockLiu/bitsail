<template><div><h1 id="bitsail-component-format-flink-hive" tabindex="-1"><a class="header-anchor" href="#bitsail-component-format-flink-hive" aria-hidden="true">#</a> bitsail-component-format-flink-hive</h1>
<hr>
<p>Parent document: <RouterLink to="/zh/documents/components/format/introduction.html">bitsail-component-format-flink</RouterLink></p>
<p>This module provides <code v-pre>HiveGeneralRowBuilder</code> for supportinig converting hive <code v-pre>Writable</code> data into <code v-pre>Row</code>.</p>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> how to use</h2>
<p>The working principle is to first obtain the meta information of the target hive table from the hive metastore, and then convert data according to the meta information <code v-pre>ObjectInspector</code>.</p>
<p>So we need two kinds of parameters to construct a <code v-pre>HiveGeneralRowBuilder</code>:</p>
<ol>
<li>Parameters for getting hive meta information:
<ul>
<li><code v-pre>database</code>: hive database name</li>
<li><code v-pre>table</code>: hive table name</li>
<li><code v-pre>hiveProperties</code>: Properties of hive configuration to connect to hive metastore, which is stored as a Map.</li>
</ul>
</li>
<li><code v-pre>columnMapping</code>: The fields order of row to construct, which  si stored as Map&lt;String, Integer&gt;. Map key is the field name, while value is the index of this field in hive table.</li>
</ol>
<h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3>
<p>Take the following hive table <span id="jump_example_table"><code v-pre>test_db.test_table</code></span> as a example:</p>
<ul>
<li>Thrift uri for hive metastore is: <code v-pre>thrift://localhost:9083</code></li>
</ul>
<table>
<thead>
<tr>
<th>field name</th>
<th>field type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>id</code></td>
<td><code v-pre>BIGINT</code></td>
</tr>
<tr>
<td><code v-pre>state</code></td>
<td><code v-pre>STRING</code></td>
</tr>
<tr>
<td><code v-pre>county</code></td>
<td><code v-pre>STRING</code></td>
</tr>
</tbody>
</table>
<p>So we can use the following codes to construct a <code v-pre>HiveGeneralRowBuilder</code>:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>Map&lt;String, Integer> columnMapping = ImmutableMap.of(
  "id", 0,
  "state", 1,
  "county", 2
);

RowBuilder rowBuilder = new HiveGeneralRowBuilder(
  columnMapping,
  "test_db",
  "test_table",
  ImmutableMap.of("metastore_uri", "thrift://localhost:9083")
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-parse-writable" tabindex="-1"><a class="header-anchor" href="#how-to-parse-writable" aria-hidden="true">#</a> <span id="jump_parse">How to parse writable</span></h2>
<p>To parse <code v-pre>Writable</code> data, one needs <code v-pre>deserializer</code> and <code v-pre>ObjectInspector</code> information from hive table.</p>
<p><code v-pre>HiveGeneralRowBuilder</code> supports getting these meta information according to the hive information (including database, table, and some other properties used to connect to the metastore) passed in by the user.</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>// step1. Get hive meta info from metastore.
HiveMetaClientUtil.init();
HiveConf hiveConf = HiveMetaClientUtil.getHiveConf(hiveProperties);
StorageDescriptor storageDescriptor = HiveMetaClientUtil.getTableFormat(hiveConf, db, table);

// step2. Construct deserializer.
deserializer = (Deserializer) Class.forName(storageDescriptor.getSerdeInfo().getSerializationLib()).newInstance();
SerDeUtils.initializeSerDe(deserializer, conf, properties, null);

// step3. Construct `ObjectInspector`
structObjectInspector = (StructObjectInspector) deserializer.getObjectInspector();
structFields = structObjectInspector.getAllStructFieldRefs();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-to-convert-to-row" tabindex="-1"><a class="header-anchor" href="#how-to-convert-to-row" aria-hidden="true">#</a> How to Convert to Row</h2>
<p><code v-pre>HiveGeneralRowBuilder</code> implements the following interface to convert hive data to a <code v-pre>Row</code>:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>void build(Object objectValue, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo) throws BitSailException {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>In this method, it has three steps:</p>
<ol>
<li>
<p>According to <a href="#jump_parse">&quot;How to parse writable&quot;</a>, it gets the <code v-pre>deseiralizer</code> and <code v-pre>structFields</code> for parsing.</p>
</li>
<li>
<p>According to <code v-pre>rowTypeInfo</code>, it extracts fields in order from <code v-pre>columnMapping</code> and <code v-pre>structField</code>.
Based on these two information, it can extract the raw data.</p>
</li>
<li>
<p>According to the field type in <code v-pre>rowTypeInfo</code>, it converts the extracted raw data into <code v-pre>com.bytedance.bitsail.common.column.Column</code>, and then wraps it with <code v-pre>org.apache.flink.types.Row</code>.</p>
</li>
</ol>
<p>Take the above mentioned hive table <a href="#jump_example_table"><code v-pre>test_db.test_table</code></a> as an example, one can build <code v-pre>rowTypeInfo</code> and <code v-pre>columnMapping</code> as follows:</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>import com.bytedance.bitsail.flink.core.typeinfo.PrimitiveColumnTypeInfo;
import org.apache.flink.api.common.typeinfo.TypeInformation;
import org.apache.flink.api.java.typeutils.RowTypeInfo;

TypeInformation&lt;?>[] fieldTypes = new TypeInformation[] {
  PrimitiveColumnTypeInfo.LONG_COLUMN_TYPE_INFO,
  PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO,
  PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO
};
RowTypeInfo rowTypeInfo = new RowTypeInfo(
  fieldTypes,
  new String[] {"id_field", "state_field", "county_field"}
);

Map&lt;String, Integer> columnMapping = ImmutableMap.of(
  "id_field", 0,
  "state_field", 1,
  "county_field", 2
);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using the above <code v-pre>rowTypeInfo</code> and <code v-pre>columnMapping</code>, one can get a <code v-pre>row</code> of field <code v-pre>id</code>, <code v-pre>state</code>, <code v-pre>county</code> by calling build method.</p>
<h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2>
<p><code v-pre>HiveGeneralRowBuiler</code> supports parsing common hive built-in data types, including all basic data types, and two complex data types, Map and List.</p>
<p>We support some types of data type conversion as follows:</p>
<table>
<thead>
<tr>
<th>Hive data type</th>
<th>You can convert the hive data type to</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>TINYINT<br>SMALLINT<br>INT<br>BIGINT</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>LongColumn</code><br>3. <code v-pre>DoubleColumn</code><br></td>
<td>Take <code v-pre>1234L</code> as an example，the converted columns are:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;1234&quot;</code><br>2. <code v-pre>LongColumn</code>: <code v-pre>1234</code><br>3. <code v-pre>DoubleColumn</code>: <code v-pre>1234.0</code></td>
</tr>
<tr>
<td>BOOLEAN</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>BooleanColumn</code></td>
<td>Take <code v-pre>false</code> as an example，the converted columns are:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;false&quot;</code><br> 2. <code v-pre>BooleanColumn</code>: <code v-pre>false</code></td>
</tr>
<tr>
<td>FLOAT<br>DOUBLE<br>DECIMAL</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>DoubleColumn</code></td>
<td>Take <code v-pre>3.141592</code> as an example，the converted columns are:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;3.141592&quot;</code><br> 2. <code v-pre>DoubleColumn</code>: <code v-pre>3.141592</code></td>
</tr>
<tr>
<td>STRING<br>CHAR<br>VARCHAR</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>LongColumn</code><br>3. <code v-pre>DoubleColumn</code><br>4. <code v-pre>BooleanColumn</code><br>5. <code v-pre>DateColumn</code></td>
<td>1. <code v-pre>LongColumn</code>: Use <code v-pre>BigDecimal</code> to convert string to integer.<br>2. <code v-pre>DoubleColumn</code>: Use <code v-pre>Double.parseDouble</code> to convert string to float number<br>3. <code v-pre>BooleanColumn</code>: Only recognize<code v-pre>&quot;0&quot;, &quot;1&quot;, &quot;true&quot;, &quot;false&quot;</code></td>
</tr>
<tr>
<td>BINARY</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>BytesColumn</code></td>
<td>Take <code v-pre>byte[]{1, 2, 3}</code> as an example，the converted columns are:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;[B@1d29cf23&quot;</code><br> 2. <code v-pre>BytesColumn</code>: <code v-pre>AQID</code></td>
</tr>
<tr>
<td>TIMESTAMP</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>LongColumn</code></td>
<td>Take <code v-pre>2022-01-01 10:00:00</code> as an example，the converted columns are:<br>1. <code v-pre>StringColumn</code>: <code v-pre>&quot;2022-01-01 10:00:00&quot;</code><br>2. <code v-pre>LongColumn</code>: <code v-pre>1641002400</code></td>
</tr>
<tr>
<td>DATE</td>
<td>1. <code v-pre>StringColumn</code><br> 2. <code v-pre>DateColumn</code> 3. <code v-pre>LongColumn</code></td>
<td>Take <code v-pre>2022-01-01</code> as example，the converted columns are:<br>1. <code v-pre>StringColumn</code>: <code v-pre>&quot;2022-01-01&quot;</code><br>2. <code v-pre>DateColumn</code>: <code v-pre>2022-01-01</code><br>3. <code v-pre>LongColumn</code>: <code v-pre>1640966400</code></td>
</tr>
</tbody>
</table>
<h2 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h2>
<p>Take the above mentioned hive table <a href="#jump_example_table"><code v-pre>test_db.test_table</code></a> as an example，the following codes show how to convert the <code v-pre>Writable</code> data in thie hive table to <code v-pre>Row</code>.</p>
<table>
<thead>
<tr>
<th>field name</th>
<th>field type</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>id</code></td>
<td><code v-pre>BIGINT</code></td>
</tr>
<tr>
<td><code v-pre>state</code></td>
<td><code v-pre>STRING</code></td>
</tr>
<tr>
<td><code v-pre>county</code></td>
<td><code v-pre>STRING</code></td>
</tr>
</tbody>
</table>
<ul>
<li>Thrift uri of metastore: <code v-pre>thrift://localhost:9083</code></li>
</ul>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>/**
 * @param rawData Writable data for building a row.
 */
public Row buildRow(Writable rawData) {
  // 1. Initialize hive row builder
  String database = "test_db";
  String table = "test_table";
  Map&lt;String, Integer> columnMapping = ImmutableMap.of(
    "id", 0,
    "state", 1,
    "county", 2
  );
  Map&lt;String, String> hiveProperties = ImmutableMap.of(
    "metastore_uri", "thrift://localhost:9083"
  );
  RowBuilder rowBuilde = new HiveGeneralRowBuilder(
    columnMapping, database, table, hiveProperties
  );

  // 2. Construct row type infomation.
  TypeInformation&lt;?>[] typeInformationList = {
    PrimitiveColumnTypeInfo.LONG_COLUMN_TYPE_INFO,
    PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO,
    PrimitiveColumnTypeInfo.STRING_COLUMN_TYPE_INFO
  };
  RowTypeInfo rowTypeInfo = new RowTypeInfo(typeInformationList,
    new String[] {"id", "state", "county"}
  );
  
  // 3. Parse rawData and build row.
  Row reuse = new Row(3);
  rowBuilder.build(rawData, reuse, "UTF-8", rowTypeInfo);
  return reuse;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


