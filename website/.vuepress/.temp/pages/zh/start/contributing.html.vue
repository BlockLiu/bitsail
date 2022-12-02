<template><div><h1 id="contributor-guide" tabindex="-1"><a class="header-anchor" href="#contributor-guide" aria-hidden="true">#</a> Contributor Guide</h1>
<p>English | <RouterLink to="/zh/start/contributing_zh.html">简体中文</RouterLink></p>
<p>BitSail community welcomes contributions from anyone!</p>
<h2 id="how-to-get-involved" tabindex="-1"><a class="header-anchor" href="#how-to-get-involved" aria-hidden="true">#</a> How To Get Involved</h2>
<ul>
<li>If you meet any issue when using BitSail, submit a GitHub issue to report.</li>
<li>If you want a new feature, submit a GitHub issue to request the feature.</li>
<li>Ask any question on the Slack channel, or help to answer other user's question.</li>
<li>Claim an issue to fix bug or develop new features.</li>
<li>Improve documentation, code comments, typos and test coverages.</li>
<li>Start a discussion on mailing list if you have a large feature to bring in.</li>
</ul>
<h2 id="open-a-github-issue" tabindex="-1"><a class="header-anchor" href="#open-a-github-issue" aria-hidden="true">#</a> Open a GitHub Issue</h2>
<ul>
<li>Search for known issues to check whether there have been an existing topic</li>
<li>If Yes, you can participate in the discussion</li>
<li>If Not, create a new issue by yourself according to the doc <a href="https://docs.github.com/en/issues/tracking-your-work-with-issues/creating-an-issue" target="_blank" rel="noopener noreferrer">Create a New Issue<ExternalLinkIcon/></a></li>
</ul>
<h2 id="environment-setup" tabindex="-1"><a class="header-anchor" href="#environment-setup" aria-hidden="true">#</a> Environment Setup</h2>
<p>Link to <RouterLink to="/zh/start/env_setup.html">environment setup</RouterLink></p>
<h2 id="code-style" tabindex="-1"><a class="header-anchor" href="#code-style" aria-hidden="true">#</a> Code Style</h2>
<p>We generally follow the <a href="https://google.github.io/styleguide/javaguide.html" target="_blank" rel="noopener noreferrer">Google Java Style Guide<ExternalLinkIcon/></a></p>
<h2 id="ide-setup" tabindex="-1"><a class="header-anchor" href="#ide-setup" aria-hidden="true">#</a> IDE Setup</h2>
<p>We are using Intellij as an example for this set up.</p>
<h3 id="checkstyle" tabindex="-1"><a class="header-anchor" href="#checkstyle" aria-hidden="true">#</a> CheckStyle</h3>
<p>Install the checkstyle plugin on your IDE.</p>
<p><img src="images/checkstyle_plugin.png" alt="" loading="lazy"></p>
<p>We define check style in <a href="https://github.com/bytedance/bitsail/blob/master/tools/maven/checkstyle.xml" target="_blank" rel="noopener noreferrer">tools/maven/checkstyle.xml<ExternalLinkIcon/></a>.
When developing in IDE, you can import this checkstyle configuration file.</p>
<p><img src="images/set_checkstyle.png" alt="" loading="lazy"></p>
<p>After importing, run command <code v-pre>mvn checkstyle:check</code> to see if checkstyle satisfied.</p>
<h3 id="install-lombok" tabindex="-1"><a class="header-anchor" href="#install-lombok" aria-hidden="true">#</a> Install lombok</h3>
<p>We use project <a href="https://projectlombok.org/" target="_blank" rel="noopener noreferrer">lombok<ExternalLinkIcon/></a>. So please install this plugin as well.</p>
<h3 id="add-license-header" tabindex="-1"><a class="header-anchor" href="#add-license-header" aria-hidden="true">#</a> Add License Header</h3>
<p>All the source files are required to add License header. Please add <a href="https://www.apache.org/legal/src-headers#headers" target="_blank" rel="noopener noreferrer">Apache License header<ExternalLinkIcon/></a>
to your IDE Copyright settings. After this step, IDE will add license to new source files automatically.</p>
<p><img src="images/license_header.png" alt="" loading="lazy"></p>
<h2 id="developing-tips" tabindex="-1"><a class="header-anchor" href="#developing-tips" aria-hidden="true">#</a> Developing Tips</h2>
<h3 id="maven-dependency-enforcement" tabindex="-1"><a class="header-anchor" href="#maven-dependency-enforcement" aria-hidden="true">#</a> Maven Dependency Enforcement</h3>
<p>We check the overlapping packages during the build process. When you see a conflict error during the build process,
please exclude the conflicting packages from the pom file.</p>
<h2 id="submit-a-pull-request" tabindex="-1"><a class="header-anchor" href="#submit-a-pull-request" aria-hidden="true">#</a> Submit a Pull Request</h2>
<p>If it is the first time to submit a pull request, you can read this doc <a href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests" target="_blank" rel="noopener noreferrer">About Pull Request<ExternalLinkIcon/></a></p>
<ul>
<li><a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo" target="_blank" rel="noopener noreferrer">Fork <em><strong>BitSail</strong></em> Repo<ExternalLinkIcon/></a></li>
<li>Checkout a new branch in your fork repo</li>
<li>Patch you code, including necessary test cases &amp; coding-style check</li>
<li>Commit changes to the branch and push to the fork repo</li>
<li>Create a pull request to the <em><strong>BitSail</strong></em> repo</li>
</ul>
<h2 id="ask-for-a-code-review" tabindex="-1"><a class="header-anchor" href="#ask-for-a-code-review" aria-hidden="true">#</a> Ask for a code review</h2>
<p>After you have your pull request ready, with all the items from the pull request checklist being completed.
Tag a committer to review you pull request.</p>
</div></template>


