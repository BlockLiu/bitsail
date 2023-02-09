import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as n,b as s,d as a,w as e,e as i,r as p}from"./app.b0521d59.js";const u={},d=n("h1",{id:"components",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#components","aria-hidden":"true"},"#"),s(" Components")],-1),r=n("hr",null,null,-1),m=n("h2",{id:"contents",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#contents","aria-hidden":"true"},"#"),s(" Contents")],-1),h=n("p",null,"This module contains components supporting various basic functions, which can be used for developing. Currently, we support 5 functional components:",-1),_=n("p",null,[n("code",null,"bitsail-component-clients"),s(":")],-1),k=n("li",null,"Support conveniently creating some clients, such as KafkaProducer.",-1),g=n("p",null,[n("code",null,"bitsail-component-formats-flink"),s(":")],-1),b=n("li",null,[s("Support converting different data types (such as hive "),n("code",null,"Writables"),s(") into "),n("code",null,"bitsail rows"),s(".")],-1),v=n("p",null,[n("code",null,"bitsail-conversion-flink"),s(":")],-1),f=n("li",null,[s("Support converting "),n("code",null,"bitsail"),s(" rows into different data types (such as hive "),n("code",null,"Writables"),s(").")],-1),x=n("p",null,[n("code",null,"bitsail-flink-row-parser"),s(":")],-1),w=n("li",null,[s("Support converting "),n("code",null,"bytes"),s(" array into "),n("code",null,"bitsail"),s(" rows according to determined format.")],-1),y=i(`<hr><h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2><p>Developers can use these modules by importing them in maven dependencies.</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.bytedance.bitsail<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>bitsail-xxxxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${revision}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function C(D,S){const t=p("RouterLink");return l(),c("div",null,[d,r,m,h,n("ul",null,[n("li",null,[_,n("ul",null,[k,n("li",null,[s("Details can be seen: "),a(t,{to:"/en/documents/components/clients/introduction.html"},{default:e(()=>[s("bitsail_component_clients")]),_:1})])])]),n("li",null,[g,n("ul",null,[b,n("li",null,[s("Details can be seen: "),a(t,{to:"/en/documents/components/format/introduction.html"},{default:e(()=>[s("bitsail_component_format")]),_:1})])])]),n("li",null,[v,n("ul",null,[f,n("li",null,[s("Details can be seen: "),a(t,{to:"/en/documents/components/conversion/introduction.html"},{default:e(()=>[s("bitsail_component_conversion")]),_:1})])])]),n("li",null,[x,n("ul",null,[w,n("li",null,[s("Details can be seen: "),a(t,{to:"/en/documents/components/parser/introduction.html"},{default:e(()=>[s("bitsail_component_parser")]),_:1})])])])]),y])}const V=o(u,[["render",C],["__file","index.html.vue"]]);export{V as default};
