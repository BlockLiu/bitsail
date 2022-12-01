import{_ as a,r as s,o as d,c as n,a as l,b as t,d as i,w as r,e as o}from"./app.f58ef234.js";const c={},u=o(`<h1 id="redis连接器" tabindex="-1"><a class="header-anchor" href="#redis连接器" aria-hidden="true">#</a> Redis连接器</h1><p><em><strong>BitSail</strong></em> Redis连接器支持写redis库，主要功能点如下:</p><ul><li>支持批式写入Redis</li><li>支持写入多种格式</li></ul><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;bitsail-connector-redis&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="redis写入" tabindex="-1"><a class="header-anchor" href="#redis写入" aria-hidden="true">#</a> Redis写入</h2><h3 id="支持数据类型" tabindex="-1"><a class="header-anchor" href="#支持数据类型" aria-hidden="true">#</a> 支持数据类型</h3><p>目前支持以Redis中的String, Set, Hash, Sorted Set四种格式写入。 每种格式对要写入的数据的具体要求如下：</p><table><thead><tr><th>数据类型</th><th>要求的列数</th><th>第一列</th><th>第二列</th><th>第三列</th></tr></thead><tbody><tr><td>String</td><td>2</td><td>key</td><td>value</td><td></td></tr><tr><td>Set</td><td>2</td><td>key</td><td>要插入到Set中的value</td><td></td></tr><tr><td>Hash</td><td>3</td><td>key</td><td>hash中的key</td><td>hash中的value</td></tr><tr><td>Sorted Set (Zset)</td><td>3</td><td>key</td><td>score</td><td>要插入到Set中的value</td></tr></tbody></table><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;redis_data_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;redis_host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;redis_port&quot;</span><span class="token operator">:</span> <span class="token number">6379</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Redis写连接器类型, <code>com.bytedance.bitsail.connector.legacy.redis.sink.RedisOutputFormat</code></td></tr><tr><td style="text-align:left;">redis_host</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Redis连接地址</td></tr><tr><td style="text-align:left;">redis_port</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Redis连接端口</td></tr></tbody></table><h4 id="可选参数" tabindex="-1"><a class="header-anchor" href="#可选参数" aria-hidden="true">#</a> 可选参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">writer_parallelism_num</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">指定redis写并发</td></tr><tr><td style="text-align:left;">client_timeout_ms</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">Redis的连接/请求超时, 默认60000ms</td></tr><tr><td style="text-align:left;">ttl</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">写入数据的ttl, 默认-1表示不设置</td></tr><tr><td style="text-align:left;">ttl_type</td><td style="text-align:left;">否</td><td style="text-align:left;">&quot;DAY&quot;, &quot;HOUR&quot;, &quot;MINUTE&quot;, &quot;SECOND&quot;</td><td style="text-align:left;">上面指定的ttl单位, 默认&quot;DAY&quot;</td></tr><tr><td style="text-align:left;">write_batch_interval</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">Redis指令攒批写入的大小, 默认50</td></tr><tr><td style="text-align:left;">redis_data_type</td><td style="text-align:left;">否</td><td style="text-align:left;">&quot;string&quot;<br>&quot;set&quot;<br>&quot;hash&quot;<br>&quot;sorted_set&quot;</td><td style="text-align:left;">写入Redis的数据格式, 默认 string</td></tr><tr><td style="text-align:left;">password</td><td style="text-align:left;">否</td><td style="text-align:left;"></td><td style="text-align:left;">Redis连接密码</td></tr></tbody></table><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,17);function p(h,g){const e=s("RouterLink");return d(),n("div",null,[u,l("p",null,[t("配置示例文档: "),i(e,{to:"/src/zh/connectors/redis/redis-example_zh.html"},{default:r(()=>[t("redis-connector-example")]),_:1})])])}const x=a(c,[["render",p],["__file","redis.html.vue"]]);export{x as default};
