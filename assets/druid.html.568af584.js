import{_ as a,r as n,o as s,c as d,a as i,b as t,d as l,w as r,e as o}from"./app.f58ef234.js";const c={},u=o(`<h1 id="druid连接器" tabindex="-1"><a class="header-anchor" href="#druid连接器" aria-hidden="true">#</a> Druid连接器</h1><p><em><strong>BitSail</strong></em> Druid连接器支持批式读写Druid资料源。</p><h2 id="依赖引入" tabindex="-1"><a class="header-anchor" href="#依赖引入" aria-hidden="true">#</a> 依赖引入</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.bytedance.bitsail&lt;/groupId&gt;
   &lt;artifactId&gt;connector-druid&lt;/artifactId&gt;
   &lt;version&gt;\${revision}&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="druid写入" tabindex="-1"><a class="header-anchor" href="#druid写入" aria-hidden="true">#</a> Druid写入</h2><h3 id="支持的数据类型" tabindex="-1"><a class="header-anchor" href="#支持的数据类型" aria-hidden="true">#</a> 支持的数据类型</h3><p>支持写入常见的Druid数据类型:</p><ul><li>整型 Long</li><li>浮点类型 Float, Double</li><li>字符类型 String</li></ul><h3 id="支持的操作类型" tabindex="-1"><a class="header-anchor" href="#支持的操作类型" aria-hidden="true">#</a> 支持的操作类型</h3><p>支持以下操作类型:</p><ul><li>INSERT</li></ul><h3 id="主要参数" tabindex="-1"><a class="header-anchor" href="#主要参数" aria-hidden="true">#</a> 主要参数</h3><p>写连接器参数在<code>job.writer</code>中配置，实际使用时请注意路径前缀。示例:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;writer&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.druid.sink.DruidSink&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;datasource&quot;</span><span class="token operator">:</span> <span class="token string">&quot;testDruidDataSource&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;coordinator_url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;localhost:8888&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="必需参数" tabindex="-1"><a class="header-anchor" href="#必需参数" aria-hidden="true">#</a> 必需参数</h4><table><thead><tr><th style="text-align:left;">参数名称</th><th style="text-align:left;">是否必填</th><th style="text-align:left;">参数枚举值</th><th style="text-align:left;">参数含义</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Druid写连接器类型, <code>com.bytedance.bitsail.connector.druid.sink.DruidSink</code></td></tr><tr><td style="text-align:left;">datasource</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">要写入的Druid资料源</td></tr><tr><td style="text-align:left;">coordinator_url</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">Druid master地址, 格式是 <code>&lt;host&gt;:&lt;port&gt;</code></td></tr><tr><td style="text-align:left;">columns</td><td style="text-align:left;">是</td><td style="text-align:left;"></td><td style="text-align:left;">要写入的数据列的列名和类型</td></tr></tbody></table><hr><h2 id="相关文档" tabindex="-1"><a class="header-anchor" href="#相关文档" aria-hidden="true">#</a> 相关文档</h2>`,19);function p(h,g){const e=n("RouterLink");return s(),d("div",null,[u,i("p",null,[t("配置示例文档: "),l(e,{to:"/src/zh/connectors/druid/druid-example_zh.html"},{default:r(()=>[t("druid-connector-example")]),_:1})])])}const b=a(c,[["render",p],["__file","druid.html.vue"]]);export{b as default};
