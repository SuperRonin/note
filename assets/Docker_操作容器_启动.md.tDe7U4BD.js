import{_ as a,c as i,a2 as e,o as t}from"./chunks/framework.RKshPt33.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Docker/操作容器/启动.md","filePath":"Docker/操作容器/启动.md","lastUpdated":1728983294000}'),n={name:"Docker/操作容器/启动.md"};function l(r,s,h,p,d,k){return t(),i("div",null,s[0]||(s[0]=[e('<h4 id="打包镜像" tabindex="-1">打包镜像 <a class="header-anchor" href="#打包镜像" aria-label="Permalink to &quot;打包镜像&quot;">​</a></h4><p>进入项目目录，执行</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="运行镜像" tabindex="-1">运行镜像 <a class="header-anchor" href="#运行镜像" aria-label="Permalink to &quot;运行镜像&quot;">​</a></h4><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-docker-container</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8888:80</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vue-docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',5)]))}const F=a(n,[["render",l]]);export{c as __pageData,F as default};
