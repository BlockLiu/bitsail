import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as e,b as t,d as l,w as n,e as d,r as o}from"./app.d85c4cc3.js";const p={},c=e("h1",{id:"hive-connector",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#hive-connector","aria-hidden":"true"},"#"),t(" Hive connector")],-1),u=d(`<p>The <em><strong>BitSail</strong></em> hive connector supports reading and writing to hive tables. The main function points are as follows:</p><ul><li>Support reading partitioned and non-partitioned tables</li><li>Support writing to partition table</li><li>Support reading and writing hive tables in multiple formats, such as parquet, orc and text</li></ul><h2 id="supported-hive-versions" tabindex="-1"><a class="header-anchor" href="#supported-hive-versions" aria-hidden="true">#</a> Supported hive versions</h2><ul><li>1.2 <ul><li>1.2.0</li><li>1.2.1</li><li>1.2.2</li></ul></li><li>2.0 <ul><li>2.0.0</li><li>2.1.0</li><li>2.1.1</li><li>2.3.0</li><li>2.3.9</li></ul></li><li>3.0 <ul><li>3.1.0</li><li>3.1.2</li></ul></li></ul><h2 id="maven-dependency" tabindex="-1"><a class="header-anchor" href="#maven-dependency" aria-hidden="true">#</a> Maven dependency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-hive<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hive-reader" tabindex="-1"><a class="header-anchor" href="#hive-reader" aria-hidden="true">#</a> Hive reader</h2><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><ul><li></li><li>Basic Data types: <ul><li>Integer type: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>Time type: <ul><li>timestamp</li><li>date</li></ul></li><li>String type: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li><li>Binary type: <ul><li>binary</li></ul></li></ul></li><li>Composited data types: <ul><li>map</li><li>array</li></ul></li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.reader</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_database&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Hive read connector class name, <code>com.bytedance.bitsail.connector.legacy.hive.source.HiveInputFormat</code></td></tr><tr><td style="text-align:left;">db_name</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">hive database name</td></tr><tr><td style="text-align:left;">table_name</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">hive table name</td></tr><tr><td style="text-align:left;">metastore_properties</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Metastore property string in standard json format</td></tr></tbody></table><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">partition</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">The hive partition to read. If not set, read the entire hive table</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types. If not set, get it from metastore</td></tr><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">No</td><td style="text-align:left;"></td><td style="text-align:left;">Read parallelism num</td></tr></tbody></table><h2 id="hive-writer" tabindex="-1"><a class="header-anchor" href="#hive-writer" aria-hidden="true">#</a> Hive writer</h2><h3 id="supported-data-type" tabindex="-1"><a class="header-anchor" href="#supported-data-type" aria-hidden="true">#</a> Supported data type</h3><ul><li>Basic data types supported: <ul><li>Integer type: <ul><li>tinyint</li><li>smallint</li><li>int</li><li>bigint</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>decimal</li></ul></li><li>Time type: <ul><li>timestamp</li><li>date</li></ul></li><li>String type: <ul><li>string</li><li>varchar</li><li>char</li></ul></li><li>Bool type: <ul><li>boolean</li></ul></li><li>Binary type: <ul><li>binary</li></ul></li></ul></li><li>Composited data types supported: <ul><li>map</li><li>array</li></ul></li></ul><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to <code>job.writer</code> block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_database&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;table_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;test_table&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters-1" tabindex="-1"><a class="header-anchor" href="#necessary-parameters-1" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Is necessary</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">db_name</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">hive database name</td></tr><tr><td style="text-align:left;">table_name</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">hive table name</td></tr><tr><td style="text-align:left;">partition</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">hive partition to write</td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">Yes</td><td style="text-align:left;"></td><td style="text-align:left;">Describing fields&#39; names and types</td></tr></tbody></table><h4 id="optional-parameters-1" tabindex="-1"><a class="header-anchor" href="#optional-parameters-1" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Is necessary</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">date_to_string_as_long</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">Whether to convert date data to integer timestamp</td></tr><tr><td style="text-align:left;">null_string_as_null</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">Whether to convert null data to null. If false, convert it to an empty string <code>&quot;&quot;</code></td></tr><tr><td style="text-align:left;">date_precision</td><td style="text-align:left;">second</td><td style="text-align:left;">second<br>millisecond</td><td style="text-align:left;">Precision when converting date data to integer timestamps</td></tr><tr><td style="text-align:left;">convert_error_column_as_null</td><td style="text-align:left;">false</td><td style="text-align:left;"></td><td style="text-align:left;">Whether to set the conversion error field to null. If false, throw an exception if the conversion fails</td></tr><tr><td style="text-align:left;">hive_parquet_compression</td><td style="text-align:left;">gzip</td><td style="text-align:left;"></td><td style="text-align:left;">When the hive file is in parquet format, specify the compression method of the file</td></tr></tbody></table><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,27);function h(g,y){const a=o("RouterLink");return i(),r("div",null,[c,e("p",null,[t("Parent document: "),l(a,{to:"/en/documents/connectors.html"},{default:n(()=>[t("connectors")]),_:1})]),u,e("p",null,[t("Configuration examples: "),l(a,{to:"/en/documents/docs/connectors/hive/hive-example.html"},{default:n(()=>[t("hive-connector-example")]),_:1})])])}const v=s(p,[["render",h],["__file","hive.html.vue"]]);export{v as default};