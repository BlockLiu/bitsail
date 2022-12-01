import{_ as s,a as l,b as h}from"./license_header.e96c7835.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as u,a as e,b as t,d as o,w as p,e as a,r}from"./app.3771ef72.js";const _={},m=a('<h1 id="contributor-guide" tabindex="-1"><a class="header-anchor" href="#contributor-guide" aria-hidden="true">#</a> Contributor Guide</h1><p>BitSail community welcomes contributions from anyone!</p><h2 id="how-to-get-involved" tabindex="-1"><a class="header-anchor" href="#how-to-get-involved" aria-hidden="true">#</a> How To Get Involved</h2><ul><li>If you meet any issue when using BitSail, submit a GitHub issue to report.</li><li>If you want a new feature, submit a GitHub issue to request the feature.</li><li>Ask any question on the Slack channel, or help to answer other user&#39;s question.</li><li>Claim an issue to fix bug or develop new features.</li><li>Improve documentation, code comments, typos and test coverages.</li><li>Start a discussion on mailing list if you have a large feature to bring in.</li></ul><h2 id="open-a-github-issue" tabindex="-1"><a class="header-anchor" href="#open-a-github-issue" aria-hidden="true">#</a> Open a GitHub Issue</h2>',5),f=e("li",null,"Search for known issues to check whether there have been an existing topic",-1),g=e("li",null,"If Yes, you can participate in the discussion",-1),b={href:"https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue",target:"_blank",rel:"noopener noreferrer"},k=e("h2",{id:"environment-setup",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#environment-setup","aria-hidden":"true"},"#"),t(" Environment Setup")],-1),y=e("h2",{id:"code-style",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code-style","aria-hidden":"true"},"#"),t(" Code Style")],-1),v={href:"https://google.github.io/styleguide/javaguide.html",target:"_blank",rel:"noopener noreferrer"},w=a('<h2 id="ide-setup" tabindex="-1"><a class="header-anchor" href="#ide-setup" aria-hidden="true">#</a> IDE Setup</h2><p>We are using Intellij as an example for this set up.</p><h3 id="checkstyle" tabindex="-1"><a class="header-anchor" href="#checkstyle" aria-hidden="true">#</a> CheckStyle</h3><p>Install the checkstyle plugin on your IDE.</p><p><img src="'+l+'" alt="" loading="lazy"></p>',5),x={href:"https://github.com/bytedance/bitsail/blob/master/tools/maven/checkstyle.xml",target:"_blank",rel:"noopener noreferrer"},I=e("p",null,[e("img",{src:s,alt:"",loading:"lazy"})],-1),q=e("p",null,[t("After importing, run command "),e("code",null,"mvn checkstyle:check"),t(" to see if checkstyle satisfied.")],-1),S=e("h3",{id:"install-lombok",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-lombok","aria-hidden":"true"},"#"),t(" Install lombok")],-1),C={href:"https://projectlombok.org/",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"add-license-header",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-license-header","aria-hidden":"true"},"#"),t(" Add License Header")],-1),A={href:"https://www.apache.org/legal/src-headers#headers",target:"_blank",rel:"noopener noreferrer"},L=a('<p><img src="'+h+'" alt="" loading="lazy"></p><h2 id="developing-tips" tabindex="-1"><a class="header-anchor" href="#developing-tips" aria-hidden="true">#</a> Developing Tips</h2><h3 id="maven-dependency-enforcement" tabindex="-1"><a class="header-anchor" href="#maven-dependency-enforcement" aria-hidden="true">#</a> Maven Dependency Enforcement</h3><p>We check the overlapping packages during the build process. When you see a conflict error during the build process, please exclude the conflicting packages from the pom file.</p><h2 id="submit-a-pull-request" tabindex="-1"><a class="header-anchor" href="#submit-a-pull-request" aria-hidden="true">#</a> Submit a Pull Request</h2>',5),B={href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",target:"_blank",rel:"noopener noreferrer"},D={href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo",target:"_blank",rel:"noopener noreferrer"},G=e("em",null,[e("strong",null,"BitSail")],-1),W=e("li",null,"Checkout a new branch in your fork repo",-1),N=e("li",null,"Patch you code, including necessary test cases & coding-style check",-1),H=e("li",null,"Commit changes to the branch and push to the fork repo",-1),R=e("li",null,[t("Create a pull request to the "),e("em",null,[e("strong",null,"BitSail")]),t(" repo")],-1),j=e("h2",{id:"ask-for-a-code-review",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ask-for-a-code-review","aria-hidden":"true"},"#"),t(" Ask for a code review")],-1),P=e("p",null,"After you have your pull request ready, with all the items from the pull request checklist being completed. Tag a committer to review you pull request.",-1);function T(V,z){const n=r("ExternalLinkIcon"),i=r("RouterLink");return d(),u("div",null,[m,e("ul",null,[f,g,e("li",null,[t("If Not, create a new issue by yourself according to the doc "),e("a",b,[t("Create a New Issue"),o(n)])])]),k,e("p",null,[t("Link to "),o(i,{to:"/start/env_setup.html"},{default:p(()=>[t("environment setup")]),_:1})]),y,e("p",null,[t("We generally follow the "),e("a",v,[t("Google Java Style Guide"),o(n)])]),w,e("p",null,[t("We define check style in "),e("a",x,[t("tools/maven/checkstyle.xml"),o(n)]),t(". When developing in IDE, you can import this checkstyle configuration file.")]),I,q,S,e("p",null,[t("We use project "),e("a",C,[t("lombok"),o(n)]),t(". So please install this plugin as well.")]),E,e("p",null,[t("All the source files are required to add License header. Please add "),e("a",A,[t("Apache License header"),o(n)]),t(" to your IDE Copyright settings. After this step, IDE will add license to new source files automatically.")]),L,e("p",null,[t("If it is the first time to submit a pull request, you can read this doc "),e("a",B,[t("About Pull Request"),o(n)])]),e("ul",null,[e("li",null,[e("a",D,[t("Fork "),G,t(" Repo"),o(n)])]),W,N,H,R]),j,P])}const O=c(_,[["render",T],["__file","contributing.html.vue"]]);export{O as default};
