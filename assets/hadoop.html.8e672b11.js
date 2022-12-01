import{_ as n,r as s,o,c as i,f as a,a as t,b as e,d as r,w as c,e as l}from"./app.f58ef234.js";const h={},u=l(`<h1 id="hadoop连接器" tabindex="-1"><a class="header-anchor" href="#hadoop连接器" aria-hidden="true">#</a> Hadoop连接器</h1><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h2><p>Hadoop连接器可用于批式场景下的hdfs文件读取。其功能点主要包括:</p><ul><li>支持同时读取多个hdfs目录下的文件</li><li>支持读取多种格式的hdfs文件</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;bitsail-connector-hadoop&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2><ul><li>支持的基础数据类型如下: <ul><li>整数类型: <ul><li>short</li><li>int</li><li>long</li><li>bitinteger</li></ul></li><li>浮点类型: <ul><li>float</li><li>double</li><li>bigdecimal</li></ul></li><li>时间类型: <ul><li>timestamp</li><li>date</li><li>time</li></ul></li><li>字符类型: <ul><li>string</li></ul></li><li>布尔类型: <ul><li>boolean</li></ul></li><li>二进制类型: <ul><li>binary</li></ul></li></ul></li><li>支持的复杂数据类型包括: <ul><li>map</li><li>list</li></ul></li></ul><h2 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h2><p>以下参数使用在<code>job.reader</code>配置中，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path_list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs://test_path/test.csv&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数是否必需</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Hadoop读连接器类名，只能为<code>com.bytedance.bitsail.connector.hadoop.source.HadoopInputFormat</code></td></tr><tr><td style="text-align:left;">path_list</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">指定读入文件的路径。可指定多个路径，使用<code>&#39;,&#39;</code>分隔</td></tr><tr><td style="text-align:left;">content_type</td><td style="text-align:left;">是</td><td style="text-align:left;">JSON<br>CSV</td><td style="text-align:left;">指定读入文件的格式，详情参考<a href="#jump_format">支持的文件格式</a></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">数据字段名称及类型</td></tr></tbody></table><h3 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h3><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">参数是否必需</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">hadoop_conf</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定hadoop的读入配置，格式为标准json格式字符串</td></tr><tr><td style="text-align:left;">reader_parallelism_num</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">读并发数</td></tr></tbody></table><h2 id="支持的文件格式" tabindex="-1"><a class="header-anchor" href="#支持的文件格式" aria-hidden="true">#</a> <span id="jump_format">支持的文件格式</span></h2><p>支持对以下格式的文件进行解读:</p><ul><li><a href="#jump_json">JSON</a></li><li><a href="#jump_csv">CSV</a></li></ul>`,18),p=l('<h3 id="json" tabindex="-1"><a class="header-anchor" href="#json" aria-hidden="true">#</a> <span id="jump_json">JSON</span></h3><p>支持对json格式的文本文件进行解析，要求每行均为标准的json字符串。 支持以下参数对json解析方式进行调整:</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td><code>job.common.case_insensitive</code></td><td>true</td><td>是否对json字段中的key大小写敏感</td></tr><tr><td><code>job.common.json_serializer_features</code></td><td></td><td>指定<code>FastJsonUtil</code>进行解析时的模式，格式为<code>&#39;,&#39;</code>分隔的字符串，例如<code>&quot;QuoteFieldNames,UseSingleQuotes&quot;</code></td></tr><tr><td><code>job.common.convert_error_column_as_null</code></td><td>false</td><td>是否将解析出错的字段置为null</td></tr></tbody></table><h3 id="csv" tabindex="-1"><a class="header-anchor" href="#csv" aria-hidden="true">#</a> <span id="jump_csv">CSV</span></h3><p>支持对csv格式的文本文件进行解析，要求每行均为标准的csv字符串。 支持以下参数对csv解析方式进行调整:</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数说明</th></tr></thead><tbody><tr><td><code>job.common.csv_delimiter</code></td><td><code>&#39;,&#39;</code></td><td>csv分隔符</td></tr><tr><td><code>job.common.csv_escape</code></td><td></td><td>escape字符</td></tr><tr><td><code>job.common.csv_quote</code></td><td></td><td>quote字符</td></tr><tr><td><code>job.common.csv_with_null_string</code></td><td></td><td>指定null字段的转化值，默认不转化</td></tr></tbody></table>',6),m=t("hr",null,null,-1),b=t("h2",{id:"相关文档",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关文档","aria-hidden":"true"},"#"),e(" 相关文档")],-1);function f(g,x){const d=s("RouterLink");return o(),i("div",null,[u,a(" - [PROTOBUF]&#40;#jump_protobuf&#41; ) "),p,a(`
### <span id="jump_protobuf">PROTOBUF</span>

支持对protobuf格式文件进行解析。

解析protobuf格式文件时，必需以下参数:


| 参数名称 | 参数是否必需   | 参数说明 |

|--------|----------|---------|

|\`job.common.proto.descriptor\`| 是 |base64方式存储protobufm描述文件|

|\`job.common.proto.class_name\`| 是 |指定protobuf描述文件中用于解析的类名|
`),m,b,t("p",null,[e("配置示例文档 "),r(d,{to:"/src/zh/connectors/hadoop/hadoop-example_zh.html"},{default:c(()=>[e("hadoop连接器示例")]),_:1})])])}const _=n(h,[["render",f],["__file","hadoop.html.vue"]]);export{_ as default};
