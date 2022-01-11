import{_ as e,c,o as a,d}from"./app.e5c17f53.js";const g='{"title":"linux-03 \u6587\u4EF6\u64CD\u4F5C","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001 \u6587\u4EF6\u64CD\u4F5C\u547D\u4EE4","slug":"\u4E00\u3001-\u6587\u4EF6\u64CD\u4F5C\u547D\u4EE4"},{"level":3,"title":"\u521B\u5EFA","slug":"\u521B\u5EFA"},{"level":3,"title":"\u5220\u9664","slug":"\u5220\u9664"},{"level":3,"title":"\u590D\u5236","slug":"\u590D\u5236"},{"level":3,"title":"\u67E5\u770B\u6587\u4EF6","slug":"\u67E5\u770B\u6587\u4EF6"},{"level":2,"title":"\u4E09\u3001\u663E\u793A\u6587\u4EF6\u5185\u5BB9","slug":"\u4E09\u3001\u663E\u793A\u6587\u4EF6\u5185\u5BB9"},{"level":2,"title":"\u56DB\u3001\u6743\u9650\u7BA1\u7406\u547D\u4EE4","slug":"\u56DB\u3001\u6743\u9650\u7BA1\u7406\u547D\u4EE4"},{"level":2,"title":"\u4E94\u3001\u538B\u7F29\u89E3\u538B","slug":"\u4E94\u3001\u538B\u7F29\u89E3\u538B"},{"level":3,"title":"gzip\u6587\u4EF6","slug":"gzip\u6587\u4EF6"},{"level":3,"title":"tar.gz\u6587\u4EF6","slug":"tar-gz\u6587\u4EF6"},{"level":3,"title":"zip\u6587\u4EF6","slug":"zip\u6587\u4EF6"},{"level":3,"title":"bzip2\u6587\u4EF6","slug":"bzip2\u6587\u4EF6"},{"level":3,"title":"rar\u6587\u4EF6","slug":"rar\u6587\u4EF6"},{"level":2,"title":"\u516D\u3001\u641C\u7D22","slug":"\u516D\u3001\u641C\u7D22"}],"relativePath":"src/frontend/Server/linux-03 \u6587\u4EF6\u64CD\u4F5C.md","lastUpdated":1641262766928}',o={},i=d(`<h1 id="linux-03-\u6587\u4EF6\u64CD\u4F5C" tabindex="-1">linux-03 \u6587\u4EF6\u64CD\u4F5C <a class="header-anchor" href="#linux-03-\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001-\u6587\u4EF6\u64CD\u4F5C\u547D\u4EE4" tabindex="-1">\u4E00\u3001 \u6587\u4EF6\u64CD\u4F5C\u547D\u4EE4 <a class="header-anchor" href="#\u4E00\u3001-\u6587\u4EF6\u64CD\u4F5C\u547D\u4EE4" aria-hidden="true">#</a></h2><blockquote><p>\u547D\u4EE4\u683C\u5F0F\uFF1A<code>\u547D\u4EE4 [-\u9009\u9879] [\u53C2\u6570]</code></p></blockquote><h3 id="\u521B\u5EFA" tabindex="-1">\u521B\u5EFA <a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a></h3><ul><li><p>\u521B\u5EFA\u76EE\u5F55\uFF1A<code>mkdir</code> (-p\u53EF\u4EE5\u9012\u5F52\u521B\u5EFA)</p></li><li><p>\u521B\u5EFA\u6587\u4EF6\uFF1A<code>touch</code></p></li><li><p>\u751F\u6210\u94FE\u63A5\u6587\u4EF6\uFF1A<code>ln -s [old][new] -s</code>\u751F\u6210\u8F6F\u94FE\u63A5\uFF1B</p><p>\u7C7B\u4F3Cwindow\u5FEB\u6377\u65B9\u5F0F\uFF1B\u8F6F\u94FE\u63A5\u7684\u6587\u4EF6\u6743\u9650\u90FD\u662Frwxrwxrwx\uFF1B</p></li></ul><h3 id="\u5220\u9664" tabindex="-1">\u5220\u9664 <a class="header-anchor" href="#\u5220\u9664" aria-hidden="true">#</a></h3><ul><li><p>\u5220\u9664\u7A7A\u76EE\u5F55\uFF1A<code>rmdir</code></p></li><li><p>\u5220\u9664\u6587\u4EF6\uFF1A<code>rm -rf</code> \u6587\u4EF6\u6216\u76EE\u5F55</p><p><code>r</code> \u5F3A\u884C\u5220\u9664\uFF0C<code>f</code> \u5F3A\u5236\u6267\u884C\uFF1B</p></li></ul><p><code>shopt -s extglob</code>\u6267\u884C\u4E4B\u540E\u53EF\u4EE5\u6267\u884C\uFF1A<code>rm -rf !(\u6392\u9664\u7684\u67D0\u4E2A\u6587\u4EF6\u4E0D\u88AB\u5220\u9664)</code></p><p><code>shopt -s</code> \uFF0C\u67E5\u770B<code>extglob</code>\u662F\u5426\u4E3Aon</p><h3 id="\u590D\u5236" tabindex="-1">\u590D\u5236 <a class="header-anchor" href="#\u590D\u5236" aria-hidden="true">#</a></h3><ul><li><p>\u590D\u5236\uFF1A<code>cp -rp [old][new]</code></p><p><code>r</code> \u590D\u5236 <code>p</code> \u4FDD\u7559\u6587\u4EF6\u5C5E\u6027\uFF1B</p></li><li><p>\u526A\u5207\u6216\u91CD\u547D\u540D\uFF1A<code>mv [old][new]</code></p></li></ul><h3 id="\u67E5\u770B\u6587\u4EF6" tabindex="-1">\u67E5\u770B\u6587\u4EF6 <a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6" aria-hidden="true">#</a></h3><ul><li><code>cd</code> \u5207\u6362\u76EE\u5F55\uFF1B</li><li><code>pwd</code> \u663E\u793A\u5F53\u524D\u76EE\u5F55</li><li><code>ls</code> \u663E\u793A\u6240\u6709\u6587\u4EF6</li><li><code>ll</code> \u663E\u793A\u6240\u4EE5\u6587\u4EF6\u5305\u542B\u6587\u4EF6\u5C5E\u6027\uFF1B</li></ul><h2 id="\u4E09\u3001\u663E\u793A\u6587\u4EF6\u5185\u5BB9" tabindex="-1">\u4E09\u3001\u663E\u793A\u6587\u4EF6\u5185\u5BB9 <a class="header-anchor" href="#\u4E09\u3001\u663E\u793A\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a></h2><ul><li><code>cat</code> \u6B63\u5E8F\u663E\u793A\uFF1B -n\u663E\u793A\u884C\u53F7\uFF1B</li><li><code>tac</code> \u53CD\u5411\u5217\u793A</li><li><code>more</code> \u5206\u9875\u663E\u793A\uFF08f\u6216\u7A7A\u683C\u7FFB\u9875\uFF0Center\u6362\u884C\uFF0Cq\u6216Q\u9000\u51FA\uFF09</li><li><code>less</code> \u5206\u9875\u663E\u793A\uFF0C\u53EF\u4EE5\u5411\u4E0A\u7FFB\u9875\uFF1B</li><li><code>head</code> \u663E\u793A\u6587\u4EF6\u524D\u9762\u51E0\u884C\uFF1B\uFF08\u5728\u6587\u4EF6\u524D\u9762\u6DFB\u52A0-n\uFF0C\u6307\u5B9A\u884C\u6570\uFF09</li><li><code>tail</code> \u663E\u793A\u6587\u4EF6\u540E\u9762\u51E0\u884C\uFF08-n\uFF0C\u6307\u5B9A\u884C\u6570\uFF09\uFF0C-f \u652F\u6301\u52A8\u6001\u67E5\u770B\uFF0C\u6587\u4EF6\u5237\u65B0\u5373\u6301\u7EED\u66F4\u65B0</li></ul><h2 id="\u56DB\u3001\u6743\u9650\u7BA1\u7406\u547D\u4EE4" tabindex="-1">\u56DB\u3001\u6743\u9650\u7BA1\u7406\u547D\u4EE4 <a class="header-anchor" href="#\u56DB\u3001\u6743\u9650\u7BA1\u7406\u547D\u4EE4" aria-hidden="true">#</a></h2><ol><li><p><code>chmod</code>\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u6743\u9650\uFF08/bin/chmod\uFF09</p><p><code>chmod [{ugoa}{+-=}{rwx}] [\u6587\u4EF6\u6216\u76EE\u5F55]</code></p><p><code>[mode=421] [\u6587\u4EF6\u6216\u76EE\u5F55]</code></p><p><code>-R</code> \u9012\u5F52\u4FEE\u6539\uFF1B</p></li><li><p>\u6743\u9650\u7684\u6570\u5B57\u8868\u793A\uFF1Ar=4 w=2 x=1\uFF1B \u793A\u4F8B\uFF1Arwxrw-r-- 764</p><p>\u793A\u4F8B\uFF1A<code>chmod g+w testfile</code> \u8D4B\u4E88testfile\u6587\u4EF6\u6240\u5C5E\u7EC4\u6DFB\u52A0\u5199\u6743\u9650</p><p><code>chmod -R 777 testdir</code> \u4FEE\u6539testdir\u76EE\u5F55\u4E0B\u6240\u6709\u6587\u4EF6\u5177\u6709\u5168\u90E8\u6743\u9650\uFF1B</p></li><li><p><code>chown</code>\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u6709\u8005\uFF08/bin/chown\uFF09</p><p><code>chown [\u7528\u6237] [\u6587\u4EF6\u6216\u76EE\u5F55]</code></p></li><li><p><code>chgrp</code>\uFF1A\u6539\u53D8\u6587\u4EF6\u6216\u76EE\u5F55\u7684\u6240\u5C5E\u7EC4\uFF08/bin/chgrp\uFF09</p><p><code>chgrp [\u7528\u6237\u7EC4] [\u6587\u4EF6\u6216\u76EE\u5F55]</code></p></li><li><p><code>umask</code>\uFF1A\u663E\u793A\u3001\u8BBE\u7F6E\u6587\u4EF6\u7684\u7F3A\u7701\u6743\u9650\uFF08shell\u5185\u7F6E\uFF09</p><p><code>umask [S]</code> -S\u4EE5 rwx\u5F62\u5F0F\u663E\u793A\u65B0\u5EFA\u6587\u4EF6\u7F3A\u7701\u6743\u9650</p></li></ol><h2 id="\u4E94\u3001\u538B\u7F29\u89E3\u538B" tabindex="-1">\u4E94\u3001\u538B\u7F29\u89E3\u538B <a class="header-anchor" href="#\u4E94\u3001\u538B\u7F29\u89E3\u538B" aria-hidden="true">#</a></h2><h3 id="gzip\u6587\u4EF6" tabindex="-1">gzip\u6587\u4EF6 <a class="header-anchor" href="#gzip\u6587\u4EF6" aria-hidden="true">#</a></h3><ul><li><p><code>gzip [\u6587\u4EF6]</code> \u538B\u7F29\u6587\u4EF6\uFF0C\u538B\u7F29\u540E\u683C\u5F0F.gz\uFF1B</p></li><li><p><code>gunzip [\u538B\u7F29\u6587\u4EF6]</code> \u89E3\u538B\u538B\u7F29.gz\u7684\u6587\u4EF6\uFF1B</p></li></ul><h3 id="tar-gz\u6587\u4EF6" tabindex="-1">tar.gz\u6587\u4EF6 <a class="header-anchor" href="#tar-gz\u6587\u4EF6" aria-hidden="true">#</a></h3><p><code>tar [-zcf] [\u538B\u7F29\u540E\u6587\u4EF6\u540D] [\u76EE\u5F55]</code> \u6253\u5305\u76EE\u5F55\uFF0C\u683C\u5F0F.tar.gz</p><ul><li><code>-c</code> \u521B\u5EFAtar\u5305\uFF0C</li><li><code>-x</code> \u89E3\u5305</li><li><code>-v</code> \u663E\u793A\u8BE6\u7EC6\u4FE1\u606F</li><li><code>-f</code> \u6307\u5B9A\u6587\u4EF6\u540D</li><li><code>-z</code> \u901A\u8FC7gzip\u538B\u7F29\u6216\u89E3\u538B</li><li><code>-t</code> \u4E0D\u89E3\u538B\u67E5\u770B\u5305\u5185\u5BB9</li></ul><div class="language-bash"><pre><code><span class="token comment">#\u89E3\u538B\uFF1Ax \u89E3\u5305\uFF0Cz\u89E3\u538B\u7F29\uFF0C-f\uFF0C-v\uFF1B</span>
<span class="token comment"># \u538B\u7F29: </span>
<span class="token function">tar</span> -zcvf build.tar.gz ./build
<span class="token comment"># \u89E3\u538B:</span>
<span class="token function">tar</span> -zxvf build.tar.gz

<span class="token comment"># \u6253\u5305\u5F53\u524D\u6587\u4EF6\u5939\u6240\u6709\u6587\u4EF6</span>
<span class="token function">tar</span> -cvf build.tar *

<span class="token comment"># \u67E5\u770B\u5F53\u524D\u5305\u7684\u5185\u5BB9</span>
<span class="token function">tar</span> -tvf build.tar
</code></pre></div><p><strong>\u6CE8\u610F</strong>\uFF1A\u6DFB\u52A0\u4E86z\uFF0C\u624B\u52A8\u6253\u5F00\u538B\u7F29\u5305\u770B\u5230\u7684\u53EA\u662F\u4E00\u4E2A\u6587\u4EF6\uFF0C\u8BE5\u6587\u4EF6\u9700\u8981\u518D\u6B21\u89E3\u538B\uFF0C\u5982\u679C\u662F\u76F4\u63A5\u8F93\u5165zxvf\u547D\u4EE4\u89E3\u538B\u5219\u4E0D\u7528\u5728\u610F\uFF1B</p><div class="language-bash"><pre><code><span class="token comment"># \u4E0B\u8F7D\u5305rar, \u5E76\u5B89\u88C5</span>
<span class="token function">wget</span> http://www.rarlab.com/rar/rarlinux-x64-5.3.0.tar.gz
<span class="token function">tar</span> -xf rarlinux-x64-5.3.0.tar.gz
<span class="token builtin class-name">cd</span> <span class="token function">rar</span>
<span class="token comment"># \u5236\u4F5C</span>
<span class="token function">make</span>
</code></pre></div><p><strong>\u6392\u9664\u67D0\u4E2A\u6587\u4EF6\u5939</strong></p><ul><li><code>--exclude=dir</code></li></ul><div class="language-bash"><pre><code><span class="token comment"># \u4E0D\u4F7F\u7528\u6392\u9664\u538B\u7F29</span>
<span class="token function">tar</span> -zcvf build.gz *
<span class="token comment"># \u4F7F\u7528\u6392\u9664\u538B\u7F29</span>
<span class="token function">tar</span> -zcvf build.gz --exclude<span class="token operator">=</span>node_modules *
</code></pre></div><h3 id="zip\u6587\u4EF6" tabindex="-1">zip\u6587\u4EF6 <a class="header-anchor" href="#zip\u6587\u4EF6" aria-hidden="true">#</a></h3><p><code>zip [-r] [\u538B\u7F29\u540E\u7684\u6587\u4EF6\u540D] [\u6587\u4EF6\u6216\u76EE\u5F55]</code> \u538B\u7F29\u6587\u4EF6\u6216\u76EE\u5F55\uFF0C\u683C\u5F0Fzip\uFF1B</p><ul><li><p><code>-r</code> \u538B\u7F29\u76EE\u5F55\uFF1B</p><p>\u89E3\u538B\uFF1A<code>unzip [\u538B\u7F29\u6587\u4EF6]</code></p></li></ul><h3 id="bzip2\u6587\u4EF6" tabindex="-1">bzip2\u6587\u4EF6 <a class="header-anchor" href="#bzip2\u6587\u4EF6" aria-hidden="true">#</a></h3><p><code>bzip2 [-k] [\u6587\u4EF6]</code> \u538B\u7F29\u540E\u683C\u5F0F.bz2\uFF1B-k\u4EA7\u751F\u538B\u7F29\u6587\u4EF6\u540E\u4FDD\u7559\u539F\u6587\u4EF6\uFF1B</p><p>\u89E3\u538B\uFF1A<code>bunzip2 [-k] [\u538B\u7F29\u6587\u4EF6]</code> <code>-k</code> \u89E3\u538B\u7F29\u540E\u4FDD\u7559\u539F\u6587\u4EF6\uFF1B</p><p><code>tar -xjf Japan.tar.bz2</code> j\u53EF\u4EE5\u89E3\u538Bbzip2\u7684\u6587\u4EF6\uFF1B</p><h3 id="rar\u6587\u4EF6" tabindex="-1">rar\u6587\u4EF6 <a class="header-anchor" href="#rar\u6587\u4EF6" aria-hidden="true">#</a></h3><p>\u89E3\u538Brar\u6587\u4EF6</p><p>\u538B\u7F29: <code>rar a \u538B\u7F29\u6587\u4EF6 ./*</code></p><p>\u89E3\u538B:</p><ul><li><code>rar x etc.rar</code></li><li><code>unrar -e etc.tar</code></li></ul><h2 id="\u516D\u3001\u641C\u7D22" tabindex="-1">\u516D\u3001\u641C\u7D22 <a class="header-anchor" href="#\u516D\u3001\u641C\u7D22" aria-hidden="true">#</a></h2><ol><li><p><code>find</code>\uFF1A\u6587\u4EF6\u641C\u7D22\uFF08/bin/find\uFF09</p><p>find [\u641C\u7D22\u8303\u56F4] [\u5339\u914D\u6761\u4EF6]</p></li><li><p><code>find /etc -name init</code></p><p>\u5728\u76EE\u5F55etc\u67E5\u627E\u6587\u4EF6init -iname\u53EF\u4EE5\u4E0D\u533A\u5206\u5927\u5C0F\u5199</p></li><li><p><code>find / -size +204800</code></p><p>\u5728\u6839\u76EE\u5F55\u4E0B\u67E5\u627E\u5927\u4E8E100M\u7684\u6587\u4EF6 +n \u5927\u4E8E -n \u5C0F\u4E8E n \u7B49\u4E8E</p></li><li><p><code>find /home -user shenchao</code></p><p>\u5728\u6839\u76EE\u5F55\u4E0B\u67E5\u627E\u6240\u6709\u8005\u4E3Ashencao\u7684\u6587\u4EF6 -group\u6839\u636E\u6240\u5C5E\u7EC4\u627E</p></li><li><p><code>find /etc -cmin -5</code></p><p>\u5728etc\u4E0B\u67E5\u627E5\u5206\u949F\u5185\u88AB\u4FEE\u6539\u8FC7\u5C5E\u6027\u7684\u6587\u4EF6\u548C\u76EE\u5F55</p><p><code>-amin</code> \u8BBF\u95EE\u65F6\u95F4 <code>-cmin</code> \u6587\u4EF6\u5C5E\u6027 <code>-mmin</code> \u6587\u4EF6\u5185\u5BB9</p></li><li><p><code>find /etc -size +163840 -a -size -204800</code></p><p>\u67E5\u627E\u5927\u4E8E80MB\u5C0F\u4E8E100MB\u6587\u4EF6 -a \u4E24\u4E2A\u6761\u4EF6\u540C\u65F6\u6EE1\u8DB3 -o\u6EE1\u8DB3\u4E00\u4E2A</p></li><li><p><code>find /etc -name inittab -exec ls -l {} \\</code>;</p><p>\u67E5\u627Einitab\u6587\u4EF6\u5E76\u663E\u793A\u5176\u8BE6\u7EC6\u4FE1\u606F -exec/-ok \u547D\u4EE4 {} \\\u5BF9\u641C\u7D22\u7ED3\u679C\u6267\u884C\u64CD\u4F5C</p></li><li><p><code>-type</code> \u6839\u636E\u6587\u4EF6\u7C7B\u578B\u67E5\u627E\uFF1B f\u6587\u4EF6 d\u76EE\u5F55 l\u8F6F\u94FE\u63A5 <code>-inum</code> \u6839\u636Ei\u8282\u70B9\u67E5\u627E\uFF1B</p></li><li><p><code>locate</code>\uFF1A\u5728\u6587\u4EF6\u8D44\u6E90\u5E93\u4E2D\u67E5\u627E\uFF08/usr/bin/locate\uFF09</p><p><code>locate \u6587\u4EF6\u540D</code></p></li><li><p><code>grep</code>\uFF1A\u5728\u6587\u4EF6\u4E2D\u641C\u5BFB\u5B57\u4E32\u5339\u914D\u7684\u884C\u5E76\u8F93\u51FA</p><p><code>grep -iv [\u6307\u5B9A\u5B57\u4E32] [\u6587\u4EF6]</code> -i\u4E0D\u533A\u522B\u5927\u5C0F\u5199 -v\u6392\u961F\u6307\u5B9A\u5B57\u4E32</p><p><code>grep Vue app.js</code> \u5728app.js\u4E2D\u67E5\u627EVue\u5B57\u7B26\u4E32;</p><p>\u6587\u6863\uFF1A<a href="https://www.cnblogs.com/flyor/p/6411140.html" target="_blank" rel="noopener noreferrer">linux\u4E2Dgrep\u547D\u4EE4\u7684\u7528\u6CD5</a></p></li></ol>`,43),l=[i];function n(p,r,t,s,h,u){return a(),c("div",null,l)}var m=e(o,[["render",n]]);export{g as __pageData,m as default};
