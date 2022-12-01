import{_ as n,r as l,o as i,c,a as e,d as a,w as s,b as o,e as r}from"./app.f58ef234.js";const d={},h=r('<h1 id="bitsail-conversion-flink" tabindex="-1"><a class="header-anchor" href="#bitsail-conversion-flink" aria-hidden="true">#</a> bitsail-conversion-flink</h1><h2 id="内容" tabindex="-1"><a class="header-anchor" href="#内容" aria-hidden="true">#</a> 内容</h2><p><em><strong>BitSail</strong></em> 在将数据传输到指定数据源时，需要将传输过程中使用的中间格式 <code>bitsail rows</code> 转化为数据源可接受的数据类型。 本模块提供了用于转化<code>bitsail rows</code>为其他数据类型的便捷工具。</p><ul><li>文中<code>bitsail rows</code>指由<code>org.apache.flink.types.Row</code>包住的<code>com.bytedance.bitsail.common.column.Column</code>数据。</li></ul><p>具体支持的数据类型如下：</p>',5),u=e("thead",null,[e("tr",null,[e("th",null,"子模块"),e("th",null,"支持的功能"),e("th",null,"链接")])],-1),_=e("td",null,[e("code",null,"bitsail-conversion-flink-hive")],-1),m=e("td",null,[o("提供转化"),e("code",null,"Row"),o("为hive "),e("code",null,"Writable"),o("的方法")],-1);function b(f,p){const t=l("RouterLink");return i(),c("div",null,[h,e("table",null,[u,e("tbody",null,[e("tr",null,[_,m,e("td",null,[a(t,{to:"/src/zh/components/conversion/hive-convert.html"},{default:s(()=>[o("link")]),_:1})])])])])])}const k=n(d,[["render",b],["__file","introduction.html.vue"]]);export{k as default};
