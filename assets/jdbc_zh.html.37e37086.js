import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as o,a as t,b as d,d as l,w as c,e as h,r as i}from"./app.aafe12c1.js";const s={},u=h('<h1 id="jdbc-connector-介绍" tabindex="-1"><a class="header-anchor" href="#jdbc-connector-介绍" aria-hidden="true">#</a> Jdbc Connector 介绍</h1><p>Jdbc Connector 通过 JDBC 直连数据库，通过批式的方式，将数据导入到其他存储或者将其他存储的数据导入到数据库中。JDBC connectors 读取 slaves 以最小化对数据库的影响。</p><p>目前支持读取和写入 MySQL、Oracle、PgSQL、SqlServer 四种数据源。</p><h2 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h2><p>MySQL 支持以下数据类型</p><ul><li>bit</li><li>tinyint</li><li>tinyint unsigned</li><li>smallint</li><li>smallint unsigned</li><li>mediumint</li><li>mediumint unsigned</li><li>enum</li><li>int</li><li>int unsigned</li><li>bigint</li><li>bigint unsigned</li><li>timestamp</li><li>datetime</li><li>float</li><li>float unsigned</li><li>double</li><li>double unsigned</li><li>decimal</li><li>decimal unsigned</li><li>real</li><li>date</li><li>time</li><li>year</li><li>char</li><li>varchar</li><li>longvarchar</li><li>nvar</li><li>nvarchar</li><li>longnvarchar</li><li>tinytext</li><li>mediumtext</li><li>longtext</li><li>text</li><li>string</li><li>json</li><li>blob</li><li>mediumblob</li><li>tinyblob</li><li>longblob</li><li>binary</li><li>longvarbinary</li><li>varbinary</li><li>geometry</li><li>multipolygon</li><li>set</li></ul><h3 id="oracle-支持以下数据类型" tabindex="-1"><a class="header-anchor" href="#oracle-支持以下数据类型" aria-hidden="true">#</a> Oracle 支持以下数据类型</h3><ul><li>char</li><li>varchar</li><li>interval day</li><li>interval year</li><li>intervalds</li><li>intervalym</li><li>varchar2</li><li>nchar</li><li>nvarchar2</li><li>long</li><li>blob</li><li>clob</li><li>nclob</li><li>string</li><li>character</li><li>number</li><li>integer</li><li>int</li><li>smallint</li><li>float</li><li>double</li><li>double precision</li><li>numeric</li><li>decimal</li><li>real</li><li>bit</li><li>bool</li><li>date</li><li>timestamp</li><li>timestamp with time zone</li><li>timestamp with local time zone</li><li>datetime</li><li>blob</li><li>bfile</li><li>raw</li><li>long raw</li><li>rowid</li><li>urowid</li><li>xmltype</li><li>binary_float</li><li>binary_double</li></ul><p>PgSQL 支持以下数据类型</p><ul><li>char</li><li>bpchar</li><li>varchar</li><li>text</li><li>character varying</li><li>string</li><li>character</li><li>bigint</li><li>int8</li><li>integer</li><li>int</li><li>int4</li><li>smallserial</li><li>serial</li><li>bigserial</li><li>smallint</li><li>int2</li><li>double</li><li>money</li><li>double precision</li><li>float8</li><li>numeric</li><li>decimal</li><li>real</li><li>float</li><li>float4</li><li>boolean</li><li>bool</li><li>date</li><li>time</li><li>timetz</li><li>timestamp</li><li>timestamptz</li><li>bytea</li><li>bit</li><li>bit varying</li><li>varbit</li><li>uuid</li><li>cidr</li><li>xml</li><li>inet</li><li>macaddr</li><li>enum</li><li>json</li><li>jsonb</li><li>aclitem</li><li>_aclitem</li><li>_int2</li><li>_int4</li><li>_float4</li><li>_text</li><li>_char</li><li>cid</li><li>inet</li><li>int2vector</li><li>interval</li><li>oid</li><li>_oid</li><li>pg_node_tree</li></ul><p>SqlServer 支持以下数据类型：</p><ul><li>char</li><li>varchar</li><li>text</li><li>nchar</li><li>nvarchar</li><li>ntext</li><li>bigint</li><li>int</li><li>int identity</li><li>integer</li><li>smallint</li><li>tinyint</li><li>float</li><li>double precision</li><li>numeric</li><li>decimal</li><li>money</li><li>real</li><li>bit</li><li>date</li><li>timestamp</li><li>datetime</li><li>datetime2</li><li>time</li><li>binary</li><li>varbinary</li><li>image</li><li>datetimeoffset</li><li>smalldatetime</li><li>sql_variant</li><li>uniqueidentifier</li><li>xml</li></ul><h2 id="jdbc-source" tabindex="-1"><a class="header-anchor" href="#jdbc-source" aria-hidden="true">#</a> Jdbc Source</h2><blockquote><p>在使用MySQL相关功能时，需要再连接参数中增加<code>permitMysqlScheme</code>选项。</p></blockquote><h3 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能" aria-hidden="true">#</a> 主要功能</h3><ul><li>支持多种分片算法</li><li>支持分库分表库的读取</li><li>支持表同步和 SQL 同步</li><li>支持过滤语句</li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>通用参数</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat</td><td>Mysql 读取 connector class 名称</td></tr><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.OracleInputFormat</td><td>Oracle 读取 connector class 名称</td></tr><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.PostgresqlInputFormat</td><td>Pgsql 读取 connector class 名称</td></tr><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.SqlServerInputFormat</td><td>SqlServer 读取 connector class 名称</td></tr><tr><td>columns</td><td>-</td><td>是</td><td>list&lt;map&lt;string,string&gt;&gt;</td><td>&quot;[ { &quot;name&quot;:&quot;id&quot;, &quot;type&quot;:&quot;int&quot; }, { &quot;name&quot;:&quot;name&quot;, &quot;type&quot;:&quot;varchar&quot; } ]</td><td>Jdbc 读取的列信息。需要和writer的指定的columns数量保持一致。</td></tr></tbody></table><p>数据库连接配置</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>user_name</td><td>-</td><td>是</td><td>string</td><td>abc</td><td>Jdbc 连接用户名</td></tr><tr><td>password</td><td>-</td><td>是</td><td>string</td><td>password</td><td>Jdbc 连接密码</td></tr><tr><td>query_timeout_seconds</td><td>300</td><td>否</td><td>int</td><td>300</td><td>连接 jdbc timeout 时间</td></tr><tr><td>query_retry_times</td><td>3</td><td>否</td><td>int</td><td>3</td><td>Jdbc 重试次数</td></tr><tr><td>connections</td><td>-</td><td>是</td><td></td><td>[ { &quot;slaves&quot;: [ {&quot;db_url&quot;: &quot;jdbc:mysql://address=(protocol=tcp)(host=192.168.1.202)(port=3306)/test?permitMysqlScheme&amp;rewriteBatchedStatements=true&amp;autoReconnect=true&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull&amp;jdbcCompliantTruncation=false&quot;} ]} ]</td><td>连接 Jdbc 的信息</td></tr></tbody></table><p>表同步配置参数</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>db_name</td><td>-</td><td>是</td><td>string</td><td>db</td><td>Jdbc 连接db 名</td></tr><tr><td>table_schema</td><td>-</td><td>否</td><td>string</td><td>schema</td><td>Jdbc 连接Schema 名称，通常只用于 PgSql</td></tr><tr><td>table_name</td><td>-</td><td>表同步必须</td><td>string</td><td>table</td><td>同步的表名</td></tr><tr><td>split_pk</td><td>-</td><td>表同步必须</td><td>string</td><td>id</td><td>分片使用的主键</td></tr><tr><td>split_pk_jdbc_type</td><td>int</td><td>否</td><td>string</td><td>Int/String</td><td>分片键字段类型，支持数字类型和字符串类型</td></tr><tr><td>shard_split_mode</td><td>accurate</td><td>否</td><td>string</td><td>quick, accurate, parallelism</td><td>分片方式，accurate 会确保每次只拉取 reader_fetch_size 条数据，分片比较均匀，担心分片会比较慢；parallelism 将所有数据分片按照并发数量进行分片，分片会比较快，但是可能分片不均匀</td></tr><tr><td>reader_fetch_size</td><td>10000</td><td>否</td><td>int</td><td>10000</td><td>每次拉取数据条数</td></tr></tbody></table><p>SQL 同步配置参数</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>customized_sql</td><td>-</td><td>SQL 同步必须</td><td>string</td><td>Select id,name from xx.xx where id &gt; 10</td><td>自定义拉取SQL语句</td></tr></tbody></table><p>其他配置</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>filter</td><td>-</td><td>否</td><td>string</td><td>id&gt;100</td><td>读取数据时过滤信息，会通过 where 语句放置在查询语句后</td></tr></tbody></table><h2 id="jdbc-sink" tabindex="-1"><a class="header-anchor" href="#jdbc-sink" aria-hidden="true">#</a> Jdbc Sink</h2><blockquote><p>在使用MySQL相关功能时，需要再连接参数中增加<code>permitMysqlScheme</code>选项。</p></blockquote><h3 id="主要功能-1" tabindex="-1"><a class="header-anchor" href="#主要功能-1" aria-hidden="true">#</a> 主要功能</h3><ul><li>支持 TTL 清理，在执行导入任务前会按照用户配置的TTL参数删除过期数据，默认TTL为0，即数据永久有效。</li><li>支持多种写入模式：清除式写入模式和覆盖式写入模式 <ul><li>清除式写入: 需要有时间分区字段，写入时，若时间分区已存在，清除已有时间分区数据，再进行写入</li><li>覆盖式写入: 不需要时间分区字段，写入时，不清除数据，按照唯一键upsert，用新的数据覆盖旧数据。当写入出现duplicate key的时候，会进行on duplicate key update操作，来更新字段。另外注意分库分表不支持更新分片建，需要配置job.writer.shard_key参数，value为分片建，多个分片建以逗号分隔</li></ul></li></ul><h3 id="主要参数-1" tabindex="-1"><a class="header-anchor" href="#主要参数-1" aria-hidden="true">#</a> 主要参数</h3><p>通用参数</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCOutputFormat</td><td>Mysql 写入 connector class 名称</td></tr><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.OracleOutputFormat</td><td>Oracle 写入 connector class 名称</td></tr><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.PostgresqlOutputFormat</td><td>Pgsql 写入 connector class 名称</td></tr><tr><td>class</td><td>-</td><td>是</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.SqlServerOutputFormat</td><td>SqlServer 写入 connector class 名称</td></tr><tr><td>columns</td><td>-</td><td>是</td><td>list&lt;map&lt;string,string&gt;&gt;</td><td>&quot;[ { &quot;name&quot;:&quot;id&quot;, &quot;type&quot;:&quot;int&quot; }, { &quot;name&quot;:&quot;name&quot;, &quot;type&quot;:&quot;varchar&quot; } ]</td><td>Jdbc 写入的列信息。需要和reader的指定的columns数量保持一致。</td></tr></tbody></table><p>数据库连接配置</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>user_name</td><td>-</td><td>是</td><td>string</td><td>abc</td><td>Jdbc 连接用户名</td></tr><tr><td>password</td><td>-</td><td>是</td><td>string</td><td>password</td><td>Jdbc 连接密码</td></tr><tr><td>connections</td><td>-</td><td>是</td><td></td><td>[ { &quot;db_url&quot;: &quot;jdbc:mysql://address=(protocol=tcp)(host=192.168.1.202)(port=3306)/test?rewriteBatchedStatements=true&amp;autoReconnect=true&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull&amp;jdbcCompliantTruncation=false&quot; } ]</td><td>连接 Jdbc 的信息</td></tr><tr><td>db_name</td><td>-</td><td>是</td><td>string</td><td>db</td><td>Jdbc 连接db 名</td></tr><tr><td>table_schema</td><td>PgSQL 默认为public； Sql server默认为dbo</td><td>否</td><td>string</td><td>schema</td><td>Jdbc 连接Schema 名称，通常只用于 PgSql</td></tr><tr><td>table_name</td><td>-</td><td>是</td><td>string</td><td>table</td><td>同步的表名</td></tr></tbody></table><p>写入模式配置参数</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>write_mode</td><td>insert</td><td>否</td><td>string</td><td>insert</td><td>Insert 写入模式。为了保证重复执行结果的一致性。写入前会根据分区列清除数据。最终生成的写入语句类似INSERT INTO xx (xx) VALUES (xx)</td></tr><tr><td>write_mode</td><td></td><td></td><td></td><td>overwrite</td><td>Overwrite 写入模式。写入前不会清除数据。最终生成的写入语句类似 INSERT INTO xx (xx) VALUES (xx) ON DUPLICATE KEY UPDATE (xx) VALUES(xx)</td></tr></tbody></table><p>Insert 模式下会根据 partition 信息进行数据删除，下面的参数针对 insert 模式：</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>partition_name</td><td>-</td><td>是</td><td>string</td><td>date</td><td>分区名称，这是一个逻辑概念，写入数据前会根据该字段删除partition value的数据</td></tr><tr><td>partition_value</td><td>-</td><td>是</td><td>string</td><td>20220727</td><td>分区值</td></tr><tr><td>partition_pattern_format</td><td>-</td><td>否</td><td>string</td><td>yyyyMMdd/yyyy-MM-dd</td><td>分区字段模式</td></tr><tr><td>mysql_data_ttl</td><td>0</td><td>否</td><td>int</td><td>0</td><td>数据库数据保存的天数。会根据配置的ddl 和 partition_name 字段的值进行删除操作。比如 ttl 设置为3，partition name 为 date，partition value 设置为 20220727，则会将数据库中所有 date&lt;=20220724 的数据删除</td></tr><tr><td>delete_threshold</td><td>10000</td><td>否</td><td>int</td><td>10000</td><td>删除时，每次删除数据的条数</td></tr><tr><td>delete_interval_ms</td><td>100</td><td>否</td><td>int</td><td>100</td><td>两次删除之间的间隔</td></tr><tr><td>写入配置信息</td><td></td><td></td><td></td><td></td><td></td></tr></tbody></table><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>write_batch_interval</td><td>100</td><td>否</td><td>int</td><td>100</td><td>写入batch 大小</td></tr><tr><td>write_retry_times</td><td>3</td><td>否</td><td>int</td><td>3</td><td>写入时重试次数</td></tr><tr><td>retry_interval_seconds</td><td>10</td><td>否</td><td>int</td><td>10</td><td>两次重试间的间隔</td></tr></tbody></table><p>其他配置</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>pre_query</td><td>-</td><td>否</td><td>string</td><td>Select 1</td><td>连接数据库后最先执行的语句</td></tr><tr><td>verify_query</td><td>-</td><td>否</td><td>string</td><td>Select 1</td><td>任务运行后执行的校验语句</td></tr><tr><td>shard_key</td><td>-</td><td>否（分片库必须）</td><td>string</td><td>id</td><td>分片库的分片键，非分片库不用配置</td></tr></tbody></table><p>PgSql 写入的定制参数</p><table><thead><tr><th>参数名称</th><th>参数默认值</th><th>参数是否必须</th><th>参数类型</th><th>建议值 or 示例值</th><th>参数含义</th></tr></thead><tbody><tr><td>primary_key</td><td>-</td><td>否</td><td>string</td><td>id</td><td>表的主键，pgSQL 删除时如果需要限制速率需要利用主键值使用 select limit语句限制删除速率</td></tr><tr><td>upsert_key</td><td>-</td><td>否</td><td>string</td><td>id</td><td>唯一性索引，支持覆盖写，PG只支持对单个唯一性索引做覆盖写</td></tr><tr><td>delete_threshold_enabled</td><td>TRUE</td><td>否</td><td>string</td><td>Truefalse</td><td>是否需要限制删除速率，默认为true，false时不需要提供primary key</td></tr><tr><td>is_truncate_mode</td><td>FALSE</td><td>否</td><td>string</td><td>Truefalse</td><td>是否为truncate模式，true会先删除全表同时不需要分区列；非truncate模式需要有分区列</td></tr></tbody></table><p>Oracle 写入的定制参数</p>',46),b=t("thead",null,[t("tr",null,[t("th",null,"参数名称"),t("th",null,"参数默认值"),t("th",null,"参数是否必须"),t("th",null,"参数类型"),t("th",null,"建议值 or 示例值"),t("th",null,"参数含义")])],-1),m=t("tr",null,[t("td",null,"primary_key"),t("td",null,"-"),t("td",null,"是 (Sink)"),t("td",null,"string（区分大小写）"),t("td",null,"ID"),t("td",null,"表的主键，Oracle 删除时如果需要限制速率需要利用主键值使用 select limit语句限制删除速率")],-1),p=t("tr",null,[t("td",null,"partition_name"),t("td",null,"-"),t("td",null,"是"),t("td",null,"string (区分大小写)"),t("td",null,"DATETIME"),t("td",null,"跟通用参数相同，除了数值必須区分大小写")],-1),_=t("tr",null,[t("td",null,"db_name"),t("td",null,"-"),t("td",null,"是"),t("td",null,"string (区分大小写)"),t("td",null,"DB"),t("td",null,"跟通用参数相同，除了数值必須区分大小写")],-1),y={href:"http://columns.name",target:"_blank",rel:"noopener noreferrer"},g=t("td",null,"-",-1),q=t("td",null,"否",-1),v=t("td",null,"string (区分大小写)",-1),x=t("td",null,"COLUMN",-1),S=t("td",null,"跟通用参数相同，除了数值必須区分大小写",-1),f=t("h2",{id:"相关文档",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关文档","aria-hidden":"true"},"#"),d(" 相关文档")],-1);function j(k,L){const e=i("ExternalLinkIcon"),r=i("RouterLink");return n(),o("div",null,[u,t("table",null,[b,t("tbody",null,[m,p,_,t("tr",null,[t("td",null,[t("a",y,[d("columns.name"),l(e)])]),g,q,v,x,S])])]),f,t("p",null,[d("配置示例文档 "),l(r,{to:"/zh/connectors/Jdbc/jdbc_example_zh.html"},{default:c(()=>[d("Example")]),_:1}),d(".")])])}const J=a(s,[["render",j],["__file","jdbc_zh.html.vue"]]);export{J as default};
