<template><div><h1 id="贡献者指引" tabindex="-1"><a class="header-anchor" href="#贡献者指引" aria-hidden="true">#</a> 贡献者指引</h1>
<p><RouterLink to="/zh/contribute/contributing.html">English</RouterLink> | 简体中文</p>
<p>BitSail社区欢迎大家的贡献！</p>
<h2 id="如何参与" tabindex="-1"><a class="header-anchor" href="#如何参与" aria-hidden="true">#</a> 如何参与</h2>
<ul>
<li>如果你在使用 BitSail 时遇到任何问题，请提交GitHub Issue进行报告。</li>
<li>如果你希望能支持一个新功能，请提交GitHub Issue以请求该功能。</li>
<li>在 Slack 频道上可以提出任何问题，或帮助回答其他用户的问题。</li>
<li>通过认领GitHub Issue来修复Bug或开发新功能。</li>
<li>改进文档、代码注释、拼写错误和测试覆盖率。</li>
<li>如果你有一个大的功能要引入，可以在邮件列表中发起一个讨论，收集其他开发者的意见。</li>
</ul>
<h2 id="打开一个github-issue" tabindex="-1"><a class="header-anchor" href="#打开一个github-issue" aria-hidden="true">#</a> 打开一个GitHub Issue</h2>
<ul>
<li>搜索已知问题以检查是否存在现有主题</li>
<li>如果是，您可以参与讨论</li>
<li>如果不是，根据文档自己创建一个新问题<a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue" target="_blank" rel="noopener noreferrer">创建Issue<ExternalLinkIcon/></a></li>
</ul>
<h2 id="开发环境配置" tabindex="-1"><a class="header-anchor" href="#开发环境配置" aria-hidden="true">#</a> 开发环境配置</h2>
<p>跳转到<RouterLink to="/zh/contribute/env_setup_zh.html">环境配置</RouterLink></p>
<h2 id="代码风格" tabindex="-1"><a class="header-anchor" href="#代码风格" aria-hidden="true">#</a> 代码风格</h2>
<p>BitSail项目使用了<a href="https://google.github.io/styleguide/javaguide.html" target="_blank" rel="noopener noreferrer">Google Java Style Guide<ExternalLinkIcon/></a></p>
<h2 id="ide配置" tabindex="-1"><a class="header-anchor" href="#ide配置" aria-hidden="true">#</a> IDE配置</h2>
<p>我们使用了Intellij作为配置的例子</p>
<h3 id="checkstyle" tabindex="-1"><a class="header-anchor" href="#checkstyle" aria-hidden="true">#</a> CheckStyle</h3>
<p>在IDE中安装checkstyle插件</p>
<p><img src="images/checkstyle_plugin.png" alt="" loading="lazy"></p>
<p>我们为开发者定义了一份checkstyle配置 <a href="https://github.com/bytedance/bitsail/blob/master/tools/maven/checkstyle.xml" target="_blank" rel="noopener noreferrer">tools/maven/checkstyle.xml<ExternalLinkIcon/></a> 。
在IDE中进行开发时，可将上述checkstyle配置文件导入项目:</p>
<p><img src="images/set_checkstyle.png" alt="" loading="lazy"></p>
<p>导入完成后，运行指令 <code v-pre>mvn checkstyle:check</code> 即可检查是否满足checkstyle.</p>
<h3 id="安装lombok" tabindex="-1"><a class="header-anchor" href="#安装lombok" aria-hidden="true">#</a> 安装lombok</h3>
<p>我们使用了<a href="https://projectlombok.org/" target="_blank" rel="noopener noreferrer">lombok<ExternalLinkIcon/></a>.请在IDE插件安装lombok</p>
<h3 id="添加license配置" tabindex="-1"><a class="header-anchor" href="#添加license配置" aria-hidden="true">#</a> 添加License配置</h3>
<p>所有源文件都需要添加许可证头。请添加 <a href="https://www.apache.org/legal/src-headers#headers" target="_blank" rel="noopener noreferrer">Apache License header<ExternalLinkIcon/></a>
到您的 IDE 版权设置。完成此步骤后，IDE 将自动将许可证添加到新的源文件。</p>
<p><img src="images/license_header.png" alt="" loading="lazy"></p>
<h2 id="开发小技巧" tabindex="-1"><a class="header-anchor" href="#开发小技巧" aria-hidden="true">#</a> 开发小技巧</h2>
<h3 id="maven依赖强制检查" tabindex="-1"><a class="header-anchor" href="#maven依赖强制检查" aria-hidden="true">#</a> maven依赖强制检查</h3>
<p>我们在构建过程中检查重叠的包。当您在构建过程中看到冲突错误时，请从 pom 文件中排除有冲突的包。</p>
<h2 id="提交一个pull-request" tabindex="-1"><a class="header-anchor" href="#提交一个pull-request" aria-hidden="true">#</a> 提交一个Pull Request</h2>
<p>如果是第一次提交 pull request，可以阅读这个文档 <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" target="_blank" rel="noopener noreferrer">什么是Pull Request<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo" target="_blank" rel="noopener noreferrer">Fork <em><strong>BitSail</strong></em> 代码库<ExternalLinkIcon/></a></li>
<li>在你的fork的代码库中生成一个新分支</li>
<li>开发你的代码，包括必要的测试用例和编码风格检查</li>
<li>提交对分支的更改并推送到你fork的仓库</li>
<li>向 <em><strong>BitSail</strong></em> 存储库创建pull request</li>
</ul>
<h2 id="请求代码审查" tabindex="-1"><a class="header-anchor" href="#请求代码审查" aria-hidden="true">#</a> 请求代码审查</h2>
<p>准备好pull request后，请确保pull request模板清单中的所有项目都已完成。
在pull request中@任意一个项目的committer进行代码审查。</p>
</div></template>


