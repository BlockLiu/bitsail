import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as e,b as t,d as n,w as s,e as p,r}from"./app.b0521d59.js";const d={},c=e("h1",{id:"fake连接器",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fake连接器","aria-hidden":"true"},"#"),t(" Fake连接器")],-1),u=p(`<p><em><strong>BitSail</strong></em> Fake is a read connector. After you specify the name and type of some columns, the Fake connector will generate the specified number of data rows for you; it is a good helper for functional testing, and is usually the read connector for the HelloWorld program for BitSail beginners.</p><h2 id="maven-depedency" tabindex="-1"><a class="header-anchor" href="#maven-depedency" aria-hidden="true">#</a> Maven depedency</h2><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-connector-fake<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fake-reader" tabindex="-1"><a class="header-anchor" href="#fake-reader" aria-hidden="true">#</a> Fake Reader</h2><h3 id="supported-data-types" tabindex="-1"><a class="header-anchor" href="#supported-data-types" aria-hidden="true">#</a> Supported data types</h3><ul><li>Basic Data types: <ul><li>Integer type: <ul><li>short</li><li>int</li><li>long</li><li>biginteger</li></ul></li><li>Float type: <ul><li>float</li><li>double</li><li>bigdecimal</li></ul></li><li>Time type: <ul><li>time</li><li>timestamp</li><li>date</li><li>date.date</li><li>date.time</li><li>date.datetime</li></ul></li><li>String type: <ul><li>string</li></ul></li><li>Bool type: <ul><li>not support</li></ul></li><li>Binary type: <ul><li>binary</li><li>bytes</li></ul></li></ul></li></ul><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h3><p>The following mentioned parameters should be added to job.reader block when using, for example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.fake.source.FakeSource&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;total_count&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
      <span class="token property">&quot;rate&quot;</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">,</span>
      <span class="token property">&quot;random_null_rate&quot;</span><span class="token operator">:</span> <span class="token number">0.1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="necessary-parameters" tabindex="-1"><a class="header-anchor" href="#necessary-parameters" aria-hidden="true">#</a> Necessary parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">class</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">Fake reader&#39;s class name, <code>com.bytedance.bitsail.connector.legacy.fake.source.FakeSource</code></td></tr><tr><td style="text-align:left;">total_count</td><td style="text-align:left;">yes</td><td style="text-align:left;"></td><td style="text-align:left;">total number of data to generate</td></tr></tbody></table><h4 id="optional-parameters" tabindex="-1"><a class="header-anchor" href="#optional-parameters" aria-hidden="true">#</a> Optional parameters</h4><table><thead><tr><th style="text-align:left;">Param name</th><th style="text-align:left;">Required</th><th style="text-align:left;">Optional value</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">rate</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">The frequency of data generation, the larger the value, the more data generated per unit time</td></tr><tr><td style="text-align:left;">lower_limit</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Together with upper_limit, it is used as the seed to generate float, double, bigdecimal type fields, not the boundary of field values</td></tr><tr><td style="text-align:left;">upper_limit</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Together with lower_limit, it is used as the seed to generate float, double, bigdecimal type fields, not the boundary of field values</td></tr><tr><td style="text-align:left;">from_timestamp</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Together with to_timestamp, it is used as the seed for generating time type fields, not the boundary of field values</td></tr><tr><td style="text-align:left;">to_timestamp</td><td style="text-align:left;">no</td><td style="text-align:left;"></td><td style="text-align:left;">Together with from_timestamp, it is used as the seed for generating time type fields, not the boundary of field values</td></tr></tbody></table><h2 id="related-document" tabindex="-1"><a class="header-anchor" href="#related-document" aria-hidden="true">#</a> Related document</h2>`,14);function m(g,h){const a=r("RouterLink");return o(),i("div",null,[c,e("p",null,[t("Parent document: "),n(a,{to:"/en/documents/connectors/"},{default:s(()=>[t("connectors")]),_:1})]),u,e("p",null,[t("Configuration example: "),n(a,{to:"/en/documents/connectors/fake/fake-example.html"},{default:s(()=>[t("fake-connector-example")]),_:1})])])}const y=l(d,[["render",m],["__file","fake.html.vue"]]);export{y as default};
