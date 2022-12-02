import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as s,a as t,b as e,d,w as a,e as h,r}from"./app.53e2dd6b.js";const c={},u=t("h1",{id:"jdbc-connector",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#jdbc-connector","aria-hidden":"true"},"#"),e(" Jdbc Connector")],-1),m=h('<p>The Jdbc Connector directly connects to the database through JDBC, and imports data into other storages or imports other stored data into the database in a batch manner. JDBC connectors internally read from slaves to minimize the impact on DB.</p><p>Currently, supports reading and writing three kinds of data sources including MySQL, Oracle, PgSQL, SqlServer.</p><h2 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h2><h3 id="supported-by-mysql" tabindex="-1"><a class="header-anchor" href="#supported-by-mysql" aria-hidden="true">#</a> Supported by MySQL</h3><ul><li>bit</li><li>tinyint</li><li>tinyint unsigned</li><li>smallint</li><li>smallint unsigned</li><li>mediumint</li><li>mediumint unsigned</li><li>enum</li><li>int</li><li>int unsigned</li><li>bigint</li><li>bigint unsigned</li><li>timestamp</li><li>datetime</li><li>float</li><li>float unsigned</li><li>double</li><li>double unsigned</li><li>decimal</li><li>decimal unsigned</li><li>real</li><li>date</li><li>time</li><li>year</li><li>char</li><li>varchar</li><li>longvarchar</li><li>nvar</li><li>nvarchar</li><li>longnvarchar</li><li>tinytext</li><li>mediumtext</li><li>longtext</li><li>text</li><li>string</li><li>json</li><li>blob</li><li>mediumblob</li><li>tinyblob</li><li>longblob</li><li>binary</li><li>longvarbinary</li><li>varbinary</li><li>geometry</li><li>multipolygon</li><li>set</li></ul><h3 id="supported-by-oracle" tabindex="-1"><a class="header-anchor" href="#supported-by-oracle" aria-hidden="true">#</a> Supported by Oracle</h3><ul><li>char</li><li>varchar</li><li>interval day</li><li>interval year</li><li>intervalds</li><li>intervalym</li><li>varchar2</li><li>nchar</li><li>nvarchar2</li><li>long</li><li>blob</li><li>clob</li><li>nclob</li><li>string</li><li>character</li><li>number</li><li>integer</li><li>int</li><li>smallint</li><li>float</li><li>double</li><li>double precision</li><li>numeric</li><li>decimal</li><li>real</li><li>bit</li><li>bool</li><li>date</li><li>timestamp</li><li>timestamp with time zone</li><li>timestamp with local time zone</li><li>datetime</li><li>blob</li><li>bfile</li><li>raw</li><li>long raw</li><li>rowid</li><li>urowid</li><li>xmltype</li><li>binary_float</li><li>binary_double</li></ul><h3 id="supported-by-pgsql" tabindex="-1"><a class="header-anchor" href="#supported-by-pgsql" aria-hidden="true">#</a> Supported by PgSQL</h3><ul><li>char</li><li>bpchar</li><li>varchar</li><li>text</li><li>character varying</li><li>string</li><li>character</li><li>bigint</li><li>int8</li><li>integer</li><li>int</li><li>int4</li><li>smallserial</li><li>serial</li><li>bigserial</li><li>smallint</li><li>int2</li><li>double</li><li>money</li><li>double precision</li><li>float8</li><li>numeric</li><li>decimal</li><li>real</li><li>float</li><li>float4</li><li>boolean</li><li>bool</li><li>date</li><li>time</li><li>timetz</li><li>timestamp</li><li>timestamptz</li><li>bytea</li><li>bit</li><li>bit varying</li><li>varbit</li><li>uuid</li><li>cidr</li><li>xml</li><li>inet</li><li>macaddr</li><li>enum</li><li>json</li><li>jsonb</li><li>aclitem</li><li>_aclitem</li><li>_int2</li><li>_int4</li><li>_float4</li><li>_text</li><li>_char</li><li>cid</li><li>inet</li><li>int2vector</li><li>interval</li><li>oid</li><li>_oid</li><li>pg_node_tree</li></ul><h3 id="supported-by-sqlserver" tabindex="-1"><a class="header-anchor" href="#supported-by-sqlserver" aria-hidden="true">#</a> Supported by SqlServer</h3><ul><li>char</li><li>varchar</li><li>text</li><li>nchar</li><li>nvarchar</li><li>ntext</li><li>bigint</li><li>int</li><li>int identity</li><li>integer</li><li>smallint</li><li>tinyint</li><li>float</li><li>double precision</li><li>numeric</li><li>decimal</li><li>money</li><li>real</li><li>bit</li><li>date</li><li>timestamp</li><li>datetime</li><li>datetime2</li><li>time</li><li>binary</li><li>varbinary</li><li>image</li><li>datetimeoffset</li><li>smalldatetime</li><li>sql_variant</li><li>uniqueidentifier</li><li>xml</li></ul><h2 id="jdbc-source" tabindex="-1"><a class="header-anchor" href="#jdbc-source" aria-hidden="true">#</a> Jdbc Source</h2><blockquote><p>Please add property `permitMysqlScheme in connection url when use MySQL.</p></blockquote><h3 id="main-function" tabindex="-1"><a class="header-anchor" href="#main-function" aria-hidden="true">#</a> Main function</h3><ul><li>Supports multiple sharding algorithms</li><li>Support the reading of sub-database and sub-table database</li><li>Support table synchronization and SQL synchronization</li><li>Support filter statement</li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><h4 id="general-parameters" tabindex="-1"><a class="header-anchor" href="#general-parameters" aria-hidden="true">#</a> General parameters</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Required</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCInputFormat</td><td>Reader class name for mysql</td></tr><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.OracleInputFormat</td><td>Reader class name for Oracle</td></tr><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.PostgresqlInputFormat</td><td>Reader class name for Pgsql</td></tr><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.SqlServerInputFormat</td><td>Reader class name for SqlServer</td></tr><tr><td>columns</td><td>-</td><td>Yes</td><td>list&lt;map&lt;string,string&gt;&gt;</td><td>&quot;[ { &quot;name&quot;:&quot;id&quot;, &quot;type&quot;:&quot;int&quot; }, { &quot;name&quot;:&quot;name&quot;, &quot;type&quot;:&quot;varchar&quot; } ]</td><td>Describing fields&#39; names and types. It needs to be consistent with the number of columns specified by the writer.</td></tr></tbody></table><h4 id="database-connection-configuration" tabindex="-1"><a class="header-anchor" href="#database-connection-configuration" aria-hidden="true">#</a> Database connection configuration</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Required</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>user_name</td><td>-</td><td>Yes</td><td>string</td><td>abc</td><td>Jdbc username</td></tr><tr><td>password</td><td>-</td><td>Yes</td><td>string</td><td>password</td><td>Jdbc password</td></tr><tr><td>query_timeout_seconds</td><td>300</td><td>No</td><td>int</td><td>300</td><td>Jdbc connection timeout (s)</td></tr><tr><td>query_retry_times</td><td>3</td><td>No</td><td>int</td><td>3</td><td>Max retry times for Jdbc query</td></tr><tr><td>connections</td><td>-</td><td>Yes</td><td></td><td>[ { &quot;slaves&quot;: [ {&quot;db_url&quot;: &quot;jdbc:mysql://address=(protocol=tcp)(host=192.168.1.202)(port=3306)/test?permitMysqlScheme&amp;rewriteBatchedStatements=true&amp;autoReconnect=true&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull&amp;jdbcCompliantTruncation=false&quot;} ]} ]</td><td>Jdbc connection urls</td></tr></tbody></table><h4 id="table-synchronization-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#table-synchronization-configuration-parameters" aria-hidden="true">#</a> Table synchronization configuration parameters</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Required</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>db_name</td><td>-</td><td>Yes</td><td>string</td><td>db</td><td>Jdbc connection database name</td></tr><tr><td>table_schema</td><td>-</td><td>No</td><td>string</td><td>schema</td><td>Jdbc connection schema name, usually only used for PgSql</td></tr><tr><td>table_name</td><td>-</td><td>Necessary if using table synchronization</td><td>string</td><td>table</td><td>Table to read</td></tr><tr><td>split_pk</td><td>-</td><td>Necessary if using table synchronization</td><td>string</td><td>id</td><td>The primary key used by the shard</td></tr><tr><td>split_pk_jdbc_type</td><td>int</td><td>No</td><td>string</td><td>Int/String</td><td>Shard key field type, supports numeric and string types</td></tr><tr><td>shard_split_mode</td><td>accurate</td><td>No</td><td>string</td><td>quick, accurate, parallelism</td><td>Splitting mode<br>accurate: ensure that only <code>reader_fetch_size</code> if pulled from table in each request.<br>parallelism: Splitting all data according to the reader parallelism num. The splitting will be fast, but may be nonuniform.</td></tr><tr><td>reader_fetch_size</td><td>10000</td><td>No</td><td>int</td><td>10000</td><td>Number of data pulled each time</td></tr></tbody></table><h4 id="sql-synchronization-configuration-parameters" tabindex="-1"><a class="header-anchor" href="#sql-synchronization-configuration-parameters" aria-hidden="true">#</a> SQL Synchronization Configuration Parameters</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Required</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>customized_sql</td><td>-</td><td>Necessary if using SQL Synchronization</td><td>string</td><td>Select id,name from xx.xx where id &gt; 10</td><td>Custom SQL Statement for pulling data from table</td></tr></tbody></table><h4 id="other-parameters" tabindex="-1"><a class="header-anchor" href="#other-parameters" aria-hidden="true">#</a> Other parameters</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Required</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>filter</td><td>-</td><td>No</td><td>string</td><td>id&gt;100</td><td>Filter conditions when pulling data. Will be placed after the query statement through the where statement</td></tr></tbody></table><hr><h2 id="jdbc-sink" tabindex="-1"><a class="header-anchor" href="#jdbc-sink" aria-hidden="true">#</a> Jdbc Sink</h2><blockquote><p>Please add property `permitMysqlScheme in connection url when use MySQL.</p></blockquote><h3 id="main-function-1" tabindex="-1"><a class="header-anchor" href="#main-function-1" aria-hidden="true">#</a> Main function</h3><ul><li>Supports TTL. <ul><li>Before executing the import task, expired data will be deleted according to the TTL parameter configured by the user.</li><li>The default TTL is 0, that is, the data is permanently valid.</li></ul></li><li>Supports multiple write modes: <b>clear</b> write mode and <b>overwrite</b> write mode <ul><li>Clear write: A time partition field is required. When writing, if the time partition already exists, clear the existing time partition data, and then write.</li><li>Overwrite write: No time partition field is required. When writing, the data is not cleared. According to the unique key upsert, the old data is overwritten with the new data. When a duplicate key appears in the write, the on duplicate key update operation will be performed to update the field. In addition, note that sharding and sharding do not support updating shards. You need to configure the <code>job.writer.shard_key</code> parameter. The value is sharding. Multiple shards are separated by <code>&#39;,&#39;</code>.</li></ul></li></ul><h3 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h3><h4 id="general-parameters-1" tabindex="-1"><a class="header-anchor" href="#general-parameters-1" aria-hidden="true">#</a> General parameters</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.JDBCOutputFormat</td><td>Writer class name for mysql</td></tr><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.OracleOutputFormat</td><td>Writer class name for Oracle</td></tr><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.PostgresqlOutputFormat</td><td>Writer class name for Pgsql</td></tr><tr><td>class</td><td>-</td><td>Yes</td><td>string</td><td>com.bytedance.bitsail.connector.legacy.jdbc.source.SqlServerOutputFormat</td><td>Writer class name for SqlServer</td></tr><tr><td>columns</td><td>-</td><td>Yes</td><td>list&lt;map&lt;string,string&gt;&gt;</td><td>&quot;[ { &quot;name&quot;:&quot;id&quot;, &quot;type&quot;:&quot;int&quot; }, { &quot;name&quot;:&quot;name&quot;, &quot;type&quot;:&quot;varchar&quot; } ]</td><td>Describing fields&#39; names and types. It needs to be consistent with the number of columns specified by the reader.</td></tr></tbody></table><h4 id="database-connection-configuration-1" tabindex="-1"><a class="header-anchor" href="#database-connection-configuration-1" aria-hidden="true">#</a> Database connection configuration</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>user_name</td><td>-</td><td>Yes</td><td>string</td><td>abc</td><td>Jdbc username</td></tr><tr><td>password</td><td>-</td><td>Yes</td><td>string</td><td>password</td><td>Jdbc password</td></tr><tr><td>connections</td><td>-</td><td>Yes</td><td></td><td>[ { &quot;db_url&quot;: &quot;jdbc:mysql://address=(protocol=tcp)(host=192.168.1.202)(port=3306)/test?rewriteBatchedStatements=true&amp;autoReconnect=true&amp;useUnicode=true&amp;characterEncoding=utf-8&amp;zeroDateTimeBehavior=convertToNull&amp;jdbcCompliantTruncation=false&quot; } ]</td><td>Jdbc connection urls</td></tr><tr><td>db_name</td><td>-</td><td>Yes</td><td>string</td><td>db</td><td>Database to connect</td></tr><tr><td>table_schema</td><td>&quot;public&quot; for PgSql<br>&quot;dbo&quot; for Sqlserver</td><td>No</td><td>string</td><td>schema</td><td>Schema to connect，usually used only in PgSql</td></tr><tr><td>table_name</td><td>-</td><td>Yes</td><td>string</td><td>table</td><td>Table to write</td></tr></tbody></table><h4 id="write-mode-configuration-parameter" tabindex="-1"><a class="header-anchor" href="#write-mode-configuration-parameter" aria-hidden="true">#</a> Write Mode Configuration Parameter</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>write_mode</td><td>insert</td><td>No</td><td>string</td><td>insert</td><td>Insert Write mode. In order to ensure the consistency of repeated execution results, data is cleared according to the partition column before writing. The resulting write statement is similar to INSERT INTO xx (xx) VALUES (xx)</td></tr><tr><td>write_mode</td><td></td><td></td><td></td><td>overwrite</td><td>Overwrite write mode. Data is not cleared before writing. The resulting write statement looks like INSERT INTO xx (xx) VALUES (xx) ON DUPLICATE KEY UPDATE (xx) VALUES(xx)</td></tr></tbody></table><p>In insert mode, data will be deleted according to partition information. The following parameters are for insert mode:</p><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>partition_name</td><td>-</td><td>Yes</td><td>string</td><td>date</td><td>Partition name, this is a logical concept, meaning the data of partition value will be deleted according to this field before writing data.</td></tr><tr><td>partition_value</td><td>-</td><td>Yes</td><td>string</td><td>20220727</td><td>Partition value</td></tr><tr><td>partition_pattern_format</td><td>-</td><td>No</td><td>string</td><td>yyyyMMdd/yyyy-MM-dd</td><td>Partition Field format</td></tr><tr><td>mysql_data_ttl</td><td>0</td><td>No</td><td>int</td><td>0</td><td>The number of days that data is kept in database. The delete operation will be performed according to the value of the configured ddl and partition_name fields.<br>For example, if ttl is set to 3, partition name is date, and partition value is set to 20220727, all data with date&lt;=20220724 in the database will be deleted.</td></tr><tr><td>delete_threshold</td><td>10000</td><td>No</td><td>int</td><td>10000</td><td>When deleting, the number of pieces of data deleted each time</td></tr><tr><td>delete_interval_ms</td><td>100</td><td>No</td><td>int</td><td>100</td><td>Interval between deletes</td></tr></tbody></table><h4 id="parameters-for-batch-write" tabindex="-1"><a class="header-anchor" href="#parameters-for-batch-write" aria-hidden="true">#</a> Parameters for batch write</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>write_batch_interval</td><td>100</td><td>No</td><td>int</td><td>100</td><td>write batch interval</td></tr><tr><td>write_retry_times</td><td>3</td><td>No</td><td>int</td><td>3</td><td>max retry time when writing</td></tr><tr><td>retry_interval_seconds</td><td>10</td><td>No</td><td>int</td><td>10</td><td>retry interval (s)</td></tr></tbody></table><h4 id="other-parameters-1" tabindex="-1"><a class="header-anchor" href="#other-parameters-1" aria-hidden="true">#</a> Other parameters</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>pre_query</td><td>-</td><td>No</td><td>string</td><td>Select 1</td><td>The first statement to execute after connecting to the database</td></tr><tr><td>verify_query</td><td>-</td><td>No</td><td>string</td><td>Select 1</td><td>Validation statement to be executed after the task runs</td></tr><tr><td>shard_key</td><td>-</td><td>Necessary for sharded database</td><td>string</td><td>id</td><td>The shard key of the sharded database, no need to configure the non-sharded database</td></tr></tbody></table><h4 id="parameters-for-pgsql" tabindex="-1"><a class="header-anchor" href="#parameters-for-pgsql" aria-hidden="true">#</a> Parameters for PgSql</h4><table><thead><tr><th>Param name</th><th>Default value</th><th>Is necessary</th><th>Parameter type</th><th>Recommended value / Example value</th><th>Description</th></tr></thead><tbody><tr><td>primary_key</td><td>-</td><td>No</td><td>string</td><td>id</td><td>The primary key of the table, if you need to limit the rate when pgSQL deletes, you need to use the primary key value to use the select limit statement to limit the delete rate</td></tr><tr><td>upsert_key</td><td>-</td><td>No</td><td>string</td><td>id</td><td>Unique index, supports overwriting, PG only supports overwriting for a single unique index</td></tr><tr><td>delete_threshold_enabled</td><td>TRUE</td><td>No</td><td>string</td><td>Truefalse</td><td>Whether to limit the deletion rate, the default is true, when false, you do not need to provide the primary key</td></tr><tr><td>is_truncate_mode</td><td>FALSE</td><td>No</td><td>string</td><td>Truefalse</td><td>Whether it is truncate mode, true will delete the whole table first and no partition column is required; non-truncate mode requires a partition column</td></tr></tbody></table><h4 id="parameters-for-oracle" tabindex="-1"><a class="header-anchor" href="#parameters-for-oracle" aria-hidden="true">#</a> Parameters for Oracle</h4>',47),p=t("thead",null,[t("tr",null,[t("th",null,"Param name"),t("th",null,"Default value"),t("th",null,"Is necessary"),t("th",null,"Parameter type"),t("th",null,"Recommended value / Example value"),t("th",null,"Description")])],-1),b=t("tr",null,[t("td",null,"primary_key"),t("td",null,"-"),t("td",null,"Yes in Sink"),t("td",null,"string (case sensitive)"),t("td",null,"ID"),t("td",null,"The primary key of the table, if you need to limit the rate when Oracle deletes, you need to use the primary key value to use the select limit statement to limit the delete rate")],-1),y=t("tr",null,[t("td",null,"partition_name"),t("td",null,"-"),t("td",null,"Yes"),t("td",null,"string (case sensitive)"),t("td",null,"DATETIME"),t("td",null,"Same as general parameters except value is case sensitive.")],-1),g=t("tr",null,[t("td",null,"db_name"),t("td",null,"-"),t("td",null,"Yes"),t("td",null,"string (case sensitive)"),t("td",null,"DB"),t("td",null,"Same as general parameters except value is case sensitive.")],-1),f={href:"http://columns.name",target:"_blank",rel:"noopener noreferrer"},v=t("td",null,"-",-1),_=t("td",null,"No",-1),q=t("td",null,"string (case sensitive)",-1),x=t("td",null,"COLUMN",-1),w=t("td",null,"Same as general parameters except value is case sensitive.",-1),S=t("h2",{id:"related-document",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#related-document","aria-hidden":"true"},"#"),e(" Related document")],-1);function P(D,N){const i=r("RouterLink"),l=r("ExternalLinkIcon");return o(),s("div",null,[u,t("p",null,[e("Parent document: "),d(i,{to:"/en/documents/connectors.html"},{default:a(()=>[e("connectors")]),_:1})]),m,t("table",null,[p,t("tbody",null,[b,y,g,t("tr",null,[t("td",null,[t("a",f,[e("columns.name"),d(l)])]),v,_,q,x,w])])]),S,t("p",null,[e("Configuration examples: "),d(i,{to:"/en/documents/docs/connectors/Jdbc/jdbc_example.html"},{default:a(()=>[e("jdbc-connector-example")]),_:1})])])}const E=n(c,[["render",P],["__file","jdbc.html.vue"]]);export{E as default};
