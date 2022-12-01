import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,a as e,d as i,w as l,e as t,b as o,r as s}from"./app.aafe12c1.js";const c={},u=t('<h1 id="bitsail-component-formats-flink" tabindex="-1"><a class="header-anchor" href="#bitsail-component-formats-flink" aria-hidden="true">#</a> bitsail-component-formats-flink</h1><h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2><p><em><strong>BitSail</strong></em> 在使用flink作为引擎时，各个connector的数据传输过程中使用 <code>bitsail rows</code> 作为传输中间格式，因此在将数据从数据源读入后需要转化为 <code>bitsail rows</code> 。 本模块用于提供将常见格式数据转化为 <code>bitsail rows</code> 的便捷方法，具体支持的格式如下：</p><ul><li>文中<code>bitsail rows</code>指由<code>org.apache.flink.types.Row</code>包住的<code>com.bytedance.bitsail.common.column.Column</code>数据。</li></ul>',4),m=e("thead",null,[e("tr",null,[e("th",null,"子模块"),e("th",null,"支持的功能"),e("th",null,"链接")])],-1),h=e("tr",null,[e("td",null,[e("code",null,"bitsail-component-format-flink-api")]),e("td",null,[o("提供"),e("code",null,"Row"),o("转化的接口")]),e("td",null,[e("a",{href:"#jump_api"},"link")])],-1),p=e("td",null,[e("code",null,"bitsail-component-format-flink-hive")],-1),f=e("td",null,[o("提供 hive "),e("code",null,"Writable"),o("的转化方法")],-1),b=e("td",null,[e("code",null,"bitsail-component-format-flink-json")],-1),v=e("td",null,"提供json格式字符串的转化方法",-1),w=t(`<hr><h3 id="rowbuilder-接口" tabindex="-1"><a class="header-anchor" href="#rowbuilder-接口" aria-hidden="true">#</a> <span id="jump_api"><code>RowBuilder</code> 接口</span></h3><p><code>RowBuilder</code>顾名思义，即将原始数据转化按照某种格式转化成Row的构建器。因此<code>RowBuilder</code>的转化方法需要至少两个必须的参数：</p><ol><li><code>value</code>: 原始数据，例如Writables, JSON字符串等</li><li><code>rowTypeInfo</code>: 转化row的具体格式，例如字段名称&amp;字段类型</li></ol><p>转化产生的产物<code>Row</code>使用参数的方式加载，开发者需要在<code>build</code>方法中对此<code>Row</code>进行赋值。 因此一个基础的构建接口如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @param value Raw data to transform to &#39;bitsail rows&#39;.
 * @param reuse The transformed \`bitsail row\`.
 * @param rowTypeInfo Determine the format (field name, data types) of the transformed row.
 */
void build(Object value, Row reuse, RowTypeInfo rowTypeInfo) throws BitSailException;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上面参数外，还可以通过其他的参数指导<code>Row</code>的构建，例如字符编码、包含的字段范围等。因此<code>RowBuilder</code>还提供了以下两个扩展接口:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo) throws BitSailException;

/**
 * @param fieldIndexes Indices of fields in row data that should be included while building.
 */
void build(Object value, Row reuse, String mandatoryEncoding, RowTypeInfo rowTypeInfo, int[] fieldIndexes);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function _(x,R){const n=s("RouterLink");return a(),r("div",null,[u,e("table",null,[m,e("tbody",null,[h,e("tr",null,[p,f,e("td",null,[i(n,{to:"/zh/components/format/hive-format.html"},{default:l(()=>[o("link")]),_:1})])]),e("tr",null,[b,v,e("td",null,[i(n,{to:"/zh/components/format/json-format.html"},{default:l(()=>[o("link")]),_:1})])])])]),w])}const y=d(c,[["render",_],["__file","introduction.html.vue"]]);export{y as default};
