import{_ as t,r as o,o as p,c as e,a as n,b as s,d as c,w as u,e as l}from"./app.f58ef234.js";const i={},r=n("h1",{id:"hadoop-connector-examples",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hadoop-connector-examples","aria-hidden":"true"},"#"),s(" Hadoop connector examples")],-1),d=l(`<p>The following configuration shows how to organize parameter configuration to read the following json format hdfs file.</p><ul><li>Example json data</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;string_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;test_string&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;map_string_string&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;k1&quot;</span><span class="token operator">:</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;k2&quot;</span><span class="token operator">:</span><span class="token string">&quot;v2&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;k3&quot;</span><span class="token operator">:</span><span class="token string">&quot;v3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token property">&quot;array_string&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;a1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;a4&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Configuration file used to read the above hdfs file:</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.hadoop.source.HadoopInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;path_list&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hdfs://test_namespace/test.json&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;content_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;json&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;reader_parallelism_num&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;int&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string_type&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;map_string_string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;map&lt;string,string&gt;&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;array_string&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list&lt;string&gt;&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function k(q,v){const a=o("RouterLink");return p(),e("div",null,[r,n("p",null,[s("Parent document: "),c(a,{to:"/src/connectors/hadoop/hadoop.html"},{default:u(()=>[s("hadoop-connector")]),_:1})]),d])}const g=t(i,[["render",k],["__file","hadoop-example.html.vue"]]);export{g as default};
