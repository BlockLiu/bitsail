import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as n,b as s,d as a,w as r,e as u,r as t}from"./app.b0521d59.js";const i={},d=n("h1",{id:"larksheet-connector-v1-example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#larksheet-connector-v1-example","aria-hidden":"true"},"#"),s(" LarkSheet connector-v1 example")],-1),k=n("h2",{id:"reader-example",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#reader-example","aria-hidden":"true"},"#"),s(" Reader example")],-1),v=n("p",null,"The sheets to be read are:",-1),m={href:"https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq",target:"_blank",rel:"noopener noreferrer"},q={href:"https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=FJhAlN",target:"_blank",rel:"noopener noreferrer"},h=u(`<p>Here is the example job configuration:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;job&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;reader&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;class&quot;</span><span class="token operator">:</span> <span class="token string">&quot;com.bytedance.bitsail.connector.legacy.larksheet.source.LarkSheetInputFormat&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sheet_urls&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=ZbzDHq,https://e4163pj5kq.feishu.cn/sheets/shtcnQmZNlZ9PjZUJKT5oU3Sjjg?sheet=FJhAlN&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;app_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_app_id&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;app_secret&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fake_app_secret&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;batch_size&quot;</span><span class="token operator">:</span> <span class="token number">1000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;skip_nums&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;columns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;year&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;month&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;day&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;日期&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;string&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(_,g){const o=t("RouterLink"),e=t("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[s("Parent document: "),a(o,{to:"/en/documents/connectors/larksheet/v1/larksheet-v1.html"},{default:r(()=>[s("LarkSheet connector v1")]),_:1})]),k,v,n("ul",null,[n("li",null,[n("a",m,[s("test_sheet_1"),a(e)])]),n("li",null,[n("a",q,[s("test_sheet_2"),a(e)])])]),h])}const j=p(i,[["render",b],["__file","larksheet-example.html.vue"]]);export{j as default};
