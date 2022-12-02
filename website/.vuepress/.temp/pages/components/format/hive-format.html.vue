<template><div><h1 id="bitsail-component-format-flink-hive" tabindex="-1"><a class="header-anchor" href="#bitsail-component-format-flink-hive" aria-hidden="true">#</a> bitsail-component-format-flink-hive</h1>
<p>本模块中的<code v-pre>HiveGeneralRowBuilder</code>支持将从hive读出的原始<code v-pre>Writable</code>格式数据转化为<code v-pre>bitsail row</code>。</p>
<h2 id="如何构造" tabindex="-1"><a class="header-anchor" href="#如何构造" aria-hidden="true">#</a> 如何构造</h2>
<p><code v-pre>HiveGeneralRowBuilder</code>的工作原理是先从hive metastore中获取指定hive表的元信息，然后根据元信息中的<code v-pre>ObjectInspector</code>来解析数据。</p>
<p>因此在构造方法中需要两种参数：</p>
<ol>
<li>用于获取hive元信息的参数
<ul>
<li><code v-pre>database</code>: hive库名</li>
<li><code v-pre>table</code>: hive表名</li>
<li><code v-pre>hiveProperties</code>: 以Map形式存储的用于连接metastore的properties</li>
</ul>
</li>
<li><code v-pre>columnMapping</code>: 构建的row中字段顺序，以Map&lt;String,Integer&gt;形式存储。key为row的最终字段名，value表示该字段在hive中的index。</li>
</ol>
<h3 id="构建示例" tabindex="-1"><a class="header-anchor" href="#构建示例" aria-hidden="true">#</a> 构建示例</h3>
<p>以下面的hive表 <span id="jump_example_table"><code v-pre>test_db.test_table</code></span> 为例:</p>
<ul>
<li>元数据存储的thrift URI为 <code v-pre>thrift://localhost:9083</code></li>
</ul>
<table>
<thead>
<tr>
<th>字段名</th>
<th>字段类型</th>
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
<p>则可使用如下方法构造<code v-pre>HiveGeneralRowBuilder</code>:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何解析writable" tabindex="-1"><a class="header-anchor" href="#如何解析writable" aria-hidden="true">#</a> <span id="jump_parse">如何解析Writable</span></h2>
<p>为了解析<code v-pre>Writable</code>数据，需要hive数据表中的<code v-pre>deserializer</code>信息和<code v-pre>ObjectInspector</code>等元信息。</p>
<p>本模块支持的HiveGeneralRowBuilder根据用户传入的hive信息（包括database、table、以及一些其他用于连接metastore的properties），获取到解析需要的元信息。</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何转化为row" tabindex="-1"><a class="header-anchor" href="#如何转化为row" aria-hidden="true">#</a> 如何转化为Row</h2>
<p><code v-pre>HiveGeneralRowBuilder</code>扩展了如下接口，用以解析并构建row。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>void build(Object objectValue, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo) throws BitSailException {
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在此方法中:</p>
<ol>
<li>按照<a href="#jump_parse">如何解析Writable</a>获取解析需要使用的<code v-pre>deseiralizer</code>和<code v-pre>structFields</code>。</li>
<li>按照<code v-pre>rowTypeInfo</code>，依次从<code v-pre>columnMapping</code>中获取字段在hive中的<code v-pre>structField</code>，并以此解析出原始数据。</li>
<li>根据<code v-pre>rowTypeInfo</code>中的数据类型将解析后的原始数据转化为相应的<code v-pre>Column</code>，再存储到<code v-pre>reuse</code>中。</li>
</ol>
<p>以上面提到的 <a href="#jump_example_table"><code v-pre>test_db.test_table</code></a> 为例，可按照如下方式构建<code v-pre>rowTypeInfo</code>和<code v-pre>columnMapping</code>:</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用上面的<code v-pre>columnMapping</code>构建<code v-pre>HiveGeneralRowBuilder</code>和<code v-pre>rowTypeInfo</code>调用build方法后，即可获得内容按字段顺序为<code v-pre>id</code>, <code v-pre>state</code>, <code v-pre>county</code>的<code v-pre>row</code>。</p>
<h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2>
<p><code v-pre>HiveGeneralRowBuiler</code>支持解析常见的Hive内置数据类型，包括所有的基础数据类型，以及Map和List两种复杂数据类型。</p>
<p>基础数据类型解析后以 <code v-pre>com.bytedance.bitsail.common.column.Column</code> 类型存储，并支持一定的数据类型转化，具体见下表:</p>
<table>
<thead>
<tr>
<th>hive数据类型</th>
<th>支持的转化类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>TINYINT<br>SMALLINT<br>INT<br>BIGINT</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>LongColumn</code><br>3. <code v-pre>DoubleColumn</code><br></td>
<td>以<code v-pre>1234L</code>为例，转化后的数据分别为:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;1234&quot;</code><br>2. <code v-pre>LongColumn</code>: <code v-pre>1234</code><br>3. <code v-pre>DoubleColumn</code>: <code v-pre>1234.0</code></td>
</tr>
<tr>
<td>BOOLEAN</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>BooleanColumn</code></td>
<td>以<code v-pre>false</code>为例，转化后的数据分别为:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;false&quot;</code><br> 2. <code v-pre>BooleanColumn</code>: <code v-pre>false</code></td>
</tr>
<tr>
<td>FLOAT<br>DOUBLE<br>DECIMAL</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>DoubleColumn</code></td>
<td>以<code v-pre>3.141592</code>为例，转化后的数据分别为:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;3.141592&quot;</code><br> 2. <code v-pre>DoubleColumn</code>: <code v-pre>3.141592</code></td>
</tr>
<tr>
<td>STRING<br>CHAR<br>VARCHAR</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>LongColumn</code><br>3. <code v-pre>DoubleColumn</code><br>4. <code v-pre>BooleanColumn</code><br>5. <code v-pre>DateColumn</code></td>
<td>1. <code v-pre>LongColumn</code>: 使用<code v-pre>BigDecimal</code>来处理字符类型数据，字符串需要满足<code v-pre>BigDecimal</code>的格式需求。<br>2. <code v-pre>DoubleColumn</code>: 使用<code v-pre>Double.parseDouble</code>处理字符类型浮点数，字符串需要满足<code v-pre>Double</code>格式需求。<br>3. <code v-pre>BooleanColumn</code>: 仅识别字符串<code v-pre>&quot;0&quot;, &quot;1&quot;, &quot;true&quot;, &quot;false&quot;</code>。</td>
</tr>
<tr>
<td>BINARY</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>BytesColumn</code></td>
<td>以<code v-pre>byte[]{1, 2, 3}</code>为例，转化后的数据分别为:<br> 1. <code v-pre>StringColumn</code>: <code v-pre>&quot;[B@1d29cf23&quot;</code><br> 2. <code v-pre>BytesColumn</code>: <code v-pre>AQID</code></td>
</tr>
<tr>
<td>TIMESTAMP</td>
<td>1. <code v-pre>StringColumn</code><br>2. <code v-pre>LongColumn</code></td>
<td>以 <code v-pre>2022-01-01 10:00:00</code>为例，转化后的数据分别为:<br>1. <code v-pre>StringColumn</code>: <code v-pre>&quot;2022-01-01 10:00:00&quot;</code><br>2. <code v-pre>LongColumn</code>: <code v-pre>1641002400</code></td>
</tr>
<tr>
<td>DATE</td>
<td>1. <code v-pre>StringColumn</code><br> 2. <code v-pre>DateColumn</code> 3. <code v-pre>LongColumn</code></td>
<td>以 <code v-pre>2022-01-01</code>为例，转化后的数据分别为:<br>1. <code v-pre>StringColumn</code>: <code v-pre>&quot;2022-01-01&quot;</code><br>2. <code v-pre>DateColumn</code>: <code v-pre>2022-01-01</code><br>3. <code v-pre>LongColumn</code>: <code v-pre>1640966400</code></td>
</tr>
</tbody>
</table>
<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2>
<p>使用上面提到的<a href="#jump_example_table"><code v-pre>test_db.test_table</code></a>为例，下面的代码展示了如何转化这张hive表中读取的<code v-pre>Writable</code>数据为想要的<code v-pre>Row</code>数据。</p>
<table>
<thead>
<tr>
<th>字段名</th>
<th>字段类型</th>
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
<li>元数据存储的thrift URI为 <code v-pre>thrift://localhost:9083</code></li>
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


