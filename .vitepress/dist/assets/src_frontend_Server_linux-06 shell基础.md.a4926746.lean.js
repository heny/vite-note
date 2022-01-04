import{_ as s,c as a,o as n,d as e}from"./app.310fb107.js";const g='{"title":"linux-06 shell\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001shell\u57FA\u7840","slug":"\u4E00\u3001shell\u57FA\u7840"},{"level":3,"title":"\u63A7\u5236\u5B57\u7B26","slug":"\u63A7\u5236\u5B57\u7B26"},{"level":3,"title":"\u8F93\u51FA\u989C\u8272","slug":"\u8F93\u51FA\u989C\u8272"},{"level":3,"title":"\u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6","slug":"\u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6"},{"level":3,"title":"\u6267\u884Cshell\u811A\u672C","slug":"\u6267\u884Cshell\u811A\u672C"},{"level":3,"title":"\u8F93\u51FA\u91CD\u5B9A\u5411","slug":"\u8F93\u51FA\u91CD\u5B9A\u5411"},{"level":3,"title":"\u8F93\u5165\u91CD\u5B9A\u5411","slug":"\u8F93\u5165\u91CD\u5B9A\u5411"},{"level":3,"title":"\u591A\u547D\u4EE4\u987A\u5E8F","slug":"\u591A\u547D\u4EE4\u987A\u5E8F"},{"level":3,"title":"\u901A\u914D\u7B26","slug":"\u901A\u914D\u7B26"},{"level":3,"title":"\u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09","slug":"\u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09"},{"level":3,"title":"\u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09","slug":"\u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09"},{"level":3,"title":"\u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF","slug":"\u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF"},{"level":3,"title":"\u9884\u5B9A\u4E49\u53D8\u91CF","slug":"\u9884\u5B9A\u4E49\u53D8\u91CF"},{"level":3,"title":"\u63A5\u6536\u952E\u76D8\u8F93\u5165","slug":"\u63A5\u6536\u952E\u76D8\u8F93\u5165"},{"level":3,"title":"\u6570\u503C\u8FD0\u7B97\u7B26","slug":"\u6570\u503C\u8FD0\u7B97\u7B26"},{"level":3,"title":"expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177","slug":"expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177"},{"level":2,"title":"\u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4","slug":"\u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4"},{"level":3,"title":"cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4","slug":"cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4"},{"level":3,"title":"printf\u547D\u4EE4","slug":"printf\u547D\u4EE4"},{"level":3,"title":"awk\u547D\u4EE4","slug":"awk\u547D\u4EE4"},{"level":3,"title":"sed\u547D\u4EE4","slug":"sed\u547D\u4EE4"},{"level":2,"title":"\u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4","slug":"\u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4"},{"level":3,"title":"\u6392\u5E8F\u547D\u4EE4sort","slug":"\u6392\u5E8F\u547D\u4EE4sort"},{"level":3,"title":"\u7EDF\u8BA1\u547D\u4EE4wc","slug":"\u7EDF\u8BA1\u547D\u4EE4wc"},{"level":3,"title":"\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B","slug":"\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B"}],"relativePath":"src/frontend/Server/linux-06 shell\u57FA\u7840.md","lastUpdated":1626711128000}',l={},o=e(`__VP_STATIC_START__<h1 id="linux-06-shell\u57FA\u7840"><a class="header-anchor" href="#linux-06-shell\u57FA\u7840" aria-hidden="true">#</a> linux-06 shell\u57FA\u7840</h1><h2 id="\u4E00\u3001shell\u57FA\u7840"><a class="header-anchor" href="#\u4E00\u3001shell\u57FA\u7840" aria-hidden="true">#</a> \u4E00\u3001shell\u57FA\u7840</h2><p><code>echo -e</code> \u652F\u6301\u53CD\u659C\u7EBF\u63A7\u5236\u7684\u5B57\u7B26\u8F6C\u6362</p><h3 id="\u63A7\u5236\u5B57\u7B26"><a class="header-anchor" href="#\u63A7\u5236\u5B57\u7B26" aria-hidden="true">#</a> \u63A7\u5236\u5B57\u7B26</h3><ul><li><code>\\\\</code> \u8F93\u51FA\\\u672C\u8EAB</li><li><code>\\b</code> \u9000\u683C\u952E</li><li><code>\\e</code> ESCAPE\u952E</li><li><code>\\f</code>\u6362\u9875\u7B26</li><li><code>\\n</code>\u6362\u884C\u7B26</li><li><code>\\r</code> \u56DE\u8F66\u7B26</li><li><code>\\t</code> \u5236\u8868\u7B26(tab\u952E)</li><li><code>\\0nnn</code> (nnn\u4E09\u4F4D\u516B\u8FDB\u5236)</li><li><code>\\xhh</code> \u6309\u7167\u5341\u516D\u8FDB\u5236</li></ul><h3 id="\u8F93\u51FA\u989C\u8272"><a class="header-anchor" href="#\u8F93\u51FA\u989C\u8272" aria-hidden="true">#</a> \u8F93\u51FA\u989C\u8272</h3><p><code>echo -e &quot;\\e[1;31m abcd \\e[0m&quot;</code></p><p>30m\u9ED1\u8272\u300131m\u7EA2\u8272\u300132m\u7EFF\u8272\u300133m\u9EC4\u8272\u300134m\u84DD\u8272\u300135m\u6D0B\u8272 \u300136m\u9752\u8272\u300137m\u767D\u8272</p><h3 id="\u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6"><a class="header-anchor" href="#\u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6" aria-hidden="true">#</a> \u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6</h3><ul><li>\u8986\u76D6\uFF1A<code>echo &#39;content&#39; &gt; a.txt</code></li><li>\u8FFD\u52A0\uFF1A<code>echo &#39;string&#39; &gt;&gt; a.txt</code></li></ul><h3 id="\u6267\u884Cshell\u811A\u672C"><a class="header-anchor" href="#\u6267\u884Cshell\u811A\u672C" aria-hidden="true">#</a> \u6267\u884Cshell\u811A\u672C</h3><ul><li><code>chmod 755 hello.sh</code></li><li><code>./hello.sh</code></li><li><code>bash hello.sh</code></li></ul><h3 id="\u8F93\u51FA\u91CD\u5B9A\u5411"><a class="header-anchor" href="#\u8F93\u51FA\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u8F93\u51FA\u91CD\u5B9A\u5411</h3><ul><li><code>\u547D\u4EE4 &gt; \u6587\u4EF6 2&gt;&amp;1</code> \u4EE5\u8986\u76D6\u65B9\u5F0F \u628A\u6B63\u786E\u548C\u9519\u8BEF\u8F93\u5165\u5230\u4E00\u4E2A\u6587\u4EF6</li><li><code>\u547D\u4EE4 &gt;&gt; \u6587\u4EF6 2&gt;&amp;</code> \u4EE5\u8FFD\u52A0\u65B9\u5F0F \u628A\u6B63\u786E\u548C\u9519\u8BEF\u8F93\u5165\u5230\u4E00\u4E2A\u6587\u4EF6</li><li><code>\u547D\u4EE4 &amp;&gt; \u6587\u4EF6</code> \u4EE5\u8986\u76D6\u65B9\u5F0F \u628A\u6B63\u786E\u548C\u9519\u8BEF\u8F93\u5165\u5230\u4E00\u4E2A\u6587\u4EF6</li><li><code>\u547D\u4EE4 &amp;&gt;&gt; \u6587\u4EF6</code> \u4EE5\u8FFD\u52A0\u65B9\u5F0F \u628A\u6B63\u786E\u548C\u9519\u8BEF\u8F93\u5165\u5230\u4E00\u4E2A\u6587\u4EF6</li><li><code>\u547D\u4EE4&gt;&gt;\u6587\u4EF61 2&gt;&gt;\u6587\u4EF62</code> \u628A\u6B63\u786E\u8FFD\u52A0\u52301 \u9519\u8BEF\u8FFD\u52A0\u52302</li></ul><h3 id="\u8F93\u5165\u91CD\u5B9A\u5411"><a class="header-anchor" href="#\u8F93\u5165\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u8F93\u5165\u91CD\u5B9A\u5411</h3><p><code>wc \u9009\u9879 \u6587\u4EF6\u540D</code> <code>-c</code>\u7EDF\u8BA1\u5B57\u8282 <code>-w</code>\u7EDF\u8BA1\u5355\u8BCD <code>-l</code>\u7EDF\u8BA1\u884C\u6570</p><h3 id="\u591A\u547D\u4EE4\u987A\u5E8F"><a class="header-anchor" href="#\u591A\u547D\u4EE4\u987A\u5E8F" aria-hidden="true">#</a> \u591A\u547D\u4EE4\u987A\u5E8F</h3><p>\u547D\u4EE4 ; \u547D\u4EE4 ; \u547D\u4EE4 \u591A\u547D\u4EE4\u6267\u884C</p><div class="language-bash"><pre><code><span class="token function">date</span> <span class="token punctuation">;</span> <span class="token function">dd</span> <span class="token assign-left variable">if</span><span class="token operator">=</span>\u8F93\u5165\u6587\u4EF6 <span class="token assign-left variable">of</span><span class="token operator">=</span>\u8F93\u51FA\u6587\u4EF6 <span class="token assign-left variable">bs</span><span class="token operator">=</span>\u5B57\u8282\u6570 <span class="token assign-left variable">count</span><span class="token operator">=</span>\u4E2A\u6570 <span class="token punctuation">;</span> <span class="token function">date</span> \u8BA1\u7B97\u590D\u5236\u901F\u5EA6
</code></pre></div><ul><li><code>&amp;&amp;</code>\uFF1A\u903B\u8F91\u4E0E\uFF0C\u7B2C\u4E00\u6761\u6267\u884C\u518D\u6267\u884C\u7B2C\u4E8C\u6761</li><li><code>||</code>\uFF1A\u903B\u8F91\u6216 \uFF0C\u7B2C\u4E00\u6761\u9519\u8BEF\u6267\u884C\u7B2C\u4E8C\u6761 \u7B2C\u4E00\u6761\u6B63\u786E\u4E0D\u6267\u884C\u7B2C\u4E8C\u6761</li><li>\u5224\u65AD\u547D\u4EE4\u662F\u5426\u6B63\u786E\uFF1A\u547D\u4EE4 &amp;&amp; echo yes || echo no</li><li>\u547D\u4EE41\u7684\u6B63\u786E\u8F93\u51FA\u4F5C\u4E3A\u547D\u4EE42\u7684\u64CD\u4F5C\u5BF9\u8C61\uFF1A\u547D\u4EE4 | \u547D\u4EE42</li></ul><h3 id="\u901A\u914D\u7B26"><a class="header-anchor" href="#\u901A\u914D\u7B26" aria-hidden="true">#</a> \u901A\u914D\u7B26</h3><ul><li><code>?</code>\u5355\u4E2A\u5B57\u7B26</li><li><code>*</code>\u5305\u542B\u4EFB\u610F\u5B57\u7B26</li><li><code>[a-z]a-z</code>\u7684\u5B57\u7B26</li><li><code>[^a-z]</code>\u53EA\u6709\u6570\u5B57 \u6CA1\u6709\u5B57\u6BCD</li><li><code>&#39;&#39;</code>\u6CA1\u6709\u7279\u6B8A\u610F\u4E49</li><li><code>&quot;&quot;</code>\u6709\u7279\u6B8A\u542B\u4E49</li><li>\`\`\u76F4\u63A5\u6267\u884C\u547D\u4EE4</li><li><code>$()</code>\u548C\u53CD\u5F15\u53F7\u4E00\u6837</li><li><code>#</code>\u6CE8\u91CA</li><li><code>$</code>\u8C03\u7528\u53D8\u91CF</li><li><code>\\</code>\u8F6C\u610F\u7B26</li></ul><h3 id="\u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09"><a class="header-anchor" href="#\u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09" aria-hidden="true">#</a> \u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09</h3><p>\u672C\u5730\u53D8\u91CF\u5B9A\u4E49\uFF1Aname=sc</p><ul><li>\u53D8\u91CF\u53E0\u52A0 <ul><li><code>aa=&quot;$aa&quot;456</code></li><li><code>aa=\${aa}789</code></li></ul></li><li><code>set</code> \u53D8\u91CF\u67E5\u770B</li><li><code>unset \u53D8\u91CF</code> \u53D8\u91CF\u5220\u9664</li><li><code>echo $name</code> \u8C03\u7528\u53D8\u91CF \u53D8\u91CF\u524D\u52A0$</li></ul><p>\u5982\u679C\u60F3\u83B7\u53D6\u4E00\u6761\u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\uFF0C\u9700\u8981\u4F7F\u7528\u53CD\u5F15\u53F7\`\`</p><div class="language-bash"><pre><code><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">git</span> pull<span class="token variable">\`</span></span>
<span class="token builtin class-name">echo</span> <span class="token variable">$name</span>
</code></pre></div><h3 id="\u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09</h3><ul><li><p><code>pstree</code> \u67E5\u770B\u5F53\u524D\u53D8\u91CF\u7B49\u7EA7</p></li><li><p><code>export age=18</code> \u5B9A\u4E49\u73AF\u5883\u53D8\u91CF</p></li><li><p><code>env</code> \u67E5\u770B\u73AF\u5883\u53D8\u91CF</p></li><li><p><code>echo $PATH</code> \u67E5\u627E\u7CFB\u7EDF\u547D\u4EE4\u8DEF\u52B2</p></li><li><p><code>PS1</code> \u5B9A\u4E49\u7CFB\u7EDF\u63D0\u793A\u7B26\u7684\u53D8\u91CF</p><p><code>PS1=&#39;[\\u@\\t \\W]\\$ &#39;</code> -t\u65F6\u95F4 -u\u7528\u6237 -h\u4E3B\u673A\u540D -W\u663E\u793A\u6700\u540E\u4E00\u4E2A\u76EE\u5F55 $\u63D0\u793A\u7B26</p></li></ul><h3 id="\u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF"><a class="header-anchor" href="#\u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF" aria-hidden="true">#</a> \u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF</h3><ul><li><code>$n</code> $0\u4EE3\u8868\u547D\u4EE4\u672C\u8EAB $1-$9\u4EE3\u8868\u7B2C1-9\u4E2A\u53C2\u6570 \u5341\u4EE5\u4E0A\u7684\u8868\u8FBE\${10}</li><li><code>$*</code> \u6240\u6709\u53C2\u6570 \u770B\u6210\u6574\u4E2A\u53C2\u6570</li><li><code>$@</code> \u6240\u6709\u53C2\u6570 \u770B\u6210\u5355\u4E2A\u53C2\u6570</li><li><code>$#</code> \u4EE3\u8868\u591A\u5C11\u4E2A\u53C2\u6570</li></ul><h3 id="\u9884\u5B9A\u4E49\u53D8\u91CF"><a class="header-anchor" href="#\u9884\u5B9A\u4E49\u53D8\u91CF" aria-hidden="true">#</a> \u9884\u5B9A\u4E49\u53D8\u91CF</h3><ul><li><p><code>$?</code> \u8FD4\u56DE\u7ED3\u679C0\u6B63\u786E\u6267\u884C \u8FD4\u56DE\u975E0\u9519\u8BEF\u6267\u884C</p></li><li><p><code>$$</code> \u5F53\u524D\u8FDB\u7A0B\u7684\u8FDB\u7A0B\u53F7pid</p></li><li><p><code>$!</code> \u6700\u540E\u4E00\u4E2A\u8FDB\u7A0B\u540E\u53F0pid</p></li><li><p><code>&amp;</code> \u653E\u5165\u540E\u53F0</p></li></ul><h3 id="\u63A5\u6536\u952E\u76D8\u8F93\u5165"><a class="header-anchor" href="#\u63A5\u6536\u952E\u76D8\u8F93\u5165" aria-hidden="true">#</a> \u63A5\u6536\u952E\u76D8\u8F93\u5165</h3><p>read \u9009\u9879 \u53D8\u91CF\u540D -p &quot;\u63D0\u793A\u4FE1\u606F&quot; \u8F93\u5165\u63D0\u793A\u4FE1\u606F -t \u79D2\u6570 -n \u5B57\u7B26\u6570 -s \u9690\u85CF\u5B57\u7B26</p><h3 id="\u6570\u503C\u8FD0\u7B97\u7B26"><a class="header-anchor" href="#\u6570\u503C\u8FD0\u7B97\u7B26" aria-hidden="true">#</a> \u6570\u503C\u8FD0\u7B97\u7B26</h3><p>declare [+/-]\u9009\u9879 \u53D8\u91CF\u540D</p><ul><li><code>-</code> \u8BBE\u5B9A\u53D8\u91CF\u5C5E\u6027</li><li><code>+</code> \u53D6\u6D88\u53D8\u91CF\u5C5E\u6027</li><li><code>-i</code> \u58F0\u660E\u53D8\u91CF\u6574\u5F62</li><li><code>-x</code> \u58F0\u660E\u73AF\u5883\u53D8\u91CF</li><li><code>-p</code> \u67E5\u770B\u53D8\u91CF\u7C7B\u578B</li></ul><div class="language-bash"><pre><code><span class="token builtin class-name">declare</span> -i <span class="token assign-left variable">cc</span><span class="token operator">=</span><span class="token variable">$aa</span>+<span class="token variable">$bb</span>
</code></pre></div><h3 id="expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177"><a class="header-anchor" href="#expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177" aria-hidden="true">#</a> expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177</h3><div class="language-bash"><pre><code><span class="token assign-left variable">dd</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">expr</span> $aa+$bb<span class="token variable">)</span></span>
<span class="token builtin class-name">let</span> <span class="token assign-left variable">hh</span><span class="token operator">=</span><span class="token variable">$aa</span>+<span class="token variable">$bb</span>
<span class="token assign-left variable">ff</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> $aa<span class="token operator">+</span>$bb <span class="token variable">))</span></span>
<span class="token assign-left variable">gg</span><span class="token operator">=</span>$<span class="token punctuation">[</span> <span class="token variable">$aa</span>+<span class="token variable">$bb</span> <span class="token punctuation">]</span>

<span class="token assign-left variable">bb</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> <span class="token number">14</span><span class="token operator">%</span><span class="token number">3</span> <span class="token variable">))</span></span> <span class="token comment"># \u5F97\u4F59\u6570</span>
<span class="token assign-left variable">cc</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> <span class="token number">1</span><span class="token operator">&amp;&amp;</span><span class="token number">0</span> <span class="token variable">))</span></span> <span class="token comment"># \u903B\u8F91\u4E0E\u8FD0\u7B97</span>
</code></pre></div><h2 id="\u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4"><a class="header-anchor" href="#\u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4" aria-hidden="true">#</a> \u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4</h2><p>student.txt\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-bash"><pre><code><span class="token function">vi</span> student.txt

ID Name PHP Linux MySQL Average
<span class="token number">1</span> Liming <span class="token number">82</span> <span class="token number">95</span> <span class="token number">86</span> <span class="token number">87.66</span>
<span class="token number">2</span> Sc <span class="token number">74</span> <span class="token number">96</span> <span class="token number">87</span> <span class="token number">85.66</span>
<span class="token number">3</span> Gao <span class="token number">99</span> <span class="token number">83</span> <span class="token number">93</span> <span class="token number">91.66</span>
</code></pre></div><h3 id="cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4"><a class="header-anchor" href="#cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4" aria-hidden="true">#</a> cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4</h3><p><code>cut [\u9009\u9879] \u6587\u4EF6\u540D</code></p><ul><li><code>-f \u5217\u53F7</code>\uFF1A\u63D0\u53D6\u7B2C\u51E0\u5217</li><li><code>-d \u5206\u9694\u7B26</code>\uFF1A\u6309\u7167\u6307\u5B9A\u5206\u9694\u7B26\u5206\u5272\u5217</li></ul><div class="language-bash"><pre><code><span class="token function">cut</span> -f <span class="token number">2</span> student.txt
<span class="token function">cut</span> -f <span class="token number">2,3</span> student.txt
<span class="token function">cut</span> -d <span class="token string">&#39;:&#39;</span> -f <span class="token number">1,3</span> /etc/passwd

<span class="token comment">#cut\u547D\u4EE4\u7684\u5C40\u9650</span>
<span class="token function">df</span> -h <span class="token operator">|</span> <span class="token function">cut</span> -d <span class="token string">&quot; &quot;</span> -f <span class="token number">1,3</span>
</code></pre></div><h3 id="printf\u547D\u4EE4"><a class="header-anchor" href="#printf\u547D\u4EE4" aria-hidden="true">#</a> printf\u547D\u4EE4</h3><p><code>printf &#39;[\u8F93\u51FA\u7C7B\u578B\u8F93\u51FA\u683C\u5F0F]&#39; \u8F93\u51FA\u5185\u5BB9</code></p><ul><li><code>%ns</code>\uFF1A\u8F93\u51FA\u5B57\u7B26\u4E32\uFF0Cn\u6307\u4EE3\u8F93\u51FA\u51E0\u4E2A\u5B57\u7B26</li><li><code>%ni</code>\uFF1A\u8F93\u51FA\u6574\u6570n\u6307\u4EE3\u8F93\u51FA\u51E0\u4E2A\u5B57\u7B26</li><li><code>%m.nf</code>\uFF1A\u8F93\u51FA\u6D6E\u70B9\u6570\uFF0Cm\u548Cn\u662F\u6570\u5B57\uFF0C\u6307\u4EE3\u8F93\u51FA\u7684\u6574\u6570\u548C\u5C0F\u6570\uFF0C%8.2f\u4EE3\u8868\u5171\u8F93\u51FA8\u4F4D\u6570\uFF0C2\u4F4D\u5C0F\u6570\uFF0C6\u4F4D\u6574\u6570\uFF1B</li></ul><p>\u8F93\u51FA\u683C\u5F0F\uFF1A</p><ul><li><code>\\a</code>\uFF1A\u8F93\u51FA\u8B66\u544A\u58F0\u97F3</li><li><code>\\b</code>\uFF1A\u8F93\u51FA\u9000\u683C\u952E</li><li><code>\\f</code>\uFF1A\u6E05\u9664\u5C4F\u5E55</li><li><code>\\n</code>\uFF1A\u6362\u884C</li><li><code>\\r</code>\uFF1A\u56DE\u8F66</li><li><code>\\t</code>\uFF1A\u6C34\u5E73\u8F93\u51FA\u9000\u683C\uFF0Ctab\u952E</li><li><code>\\v</code>\uFF1A\u5782\u76F4\u8F93\u51FA\u9000\u683C\uFF0Ctab\u952E</li></ul><div class="language-bash"><pre><code><span class="token builtin class-name">printf</span> <span class="token string">&#39;%s %s %s \\n&#39;</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span>
</code></pre></div><p>\u5728awt\u547D\u4EE4\u7684\u8F93\u51FA\u4E2D\u652F\u6301print\u548Cprintf\u547D\u4EE4\uFF1A</p><ul><li>print\uFF1Aprint\u4F1A\u5728\u6BCF\u4E2A\u8F93\u51FA\u4E4B\u540E\u81EA\u52A8\u52A0\u5165\u4E00\u4E2A\u6362\u884C\u7B26\uFF08linux\u9ED8\u8BA4\u6CA1\u6709print\u547D\u4EE4\uFF09</li><li>printf\uFF1Aprintf\u662F\u6807\u51C6\u683C\u5F0F\u8F93\u51FA\u547D\u4EE4\uFF0C\u5E76\u4E0D\u4F1A\u81EA\u52A8\u52A0\u5165\u6362\u884C\u7B26\uFF0C\u5982\u679C\u9700\u8981\u6362\u884C\u9700\u8981\u624B\u5DE5\u52A0\u5165\u6362\u884C\u7B26\uFF1B</li></ul><h3 id="awk\u547D\u4EE4"><a class="header-anchor" href="#awk\u547D\u4EE4" aria-hidden="true">#</a> awk\u547D\u4EE4</h3><p><code>awk &#39;\u6761\u4EF61{\u52A8\u4F5C1} \u6761\u4EF62{\u52A8\u4F5C2}...&#39; \u6587\u4EF6\u540D</code></p><p>\u6761\u4EF6\uFF1A\u4E00\u822C\u4F7F\u7528\u5173\u7CFB\u8868\u8FBE\u5F0F\u4F5C\u4E3A\u6761\u4EF6</p><ul><li>x &gt; 10 \uFF1A\u5224\u65AD\u53D8\u91CFx\u662F\u5426\u5927\u4E8E10</li><li>x &gt;= 10</li><li>x &lt;= 10</li></ul><p>\u52A8\u4F5C\uFF1A</p><ul><li>\u683C\u5F0F\u5316\u8F93\u51FA</li><li>\u6D41\u7A0B\u63A7\u5236\u8BED\u53E5</li></ul><div class="language-bash"><pre><code><span class="token function">awk</span> <span class="token string">&#39;{printf $2 &quot;\\t&quot; $6 &quot;\\n&quot;}&#39;</span> student.txt
<span class="token function">df</span> -h <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $1 &quot;\\t&quot; $3}&#39;</span>
</code></pre></div><p>BEGIN</p><div class="language-bash"><pre><code><span class="token function">awk</span> <span class="token string">&#39;BEGIN{printf &quot;This is a transcript \\n&quot;} {printf $2 &quot;\\t&quot; $6 &quot;\\n&quot;}&#39;</span> student.txt
</code></pre></div><p>END</p><div class="language-bash"><pre><code><span class="token function">awk</span> <span class="token string">&#39;END{printf &quot;the end \\n&quot;}{printf $2 &quot;\\t&quot; $6 &quot;\\n&quot;}&#39;</span> student.txt
</code></pre></div><p>FS\u5185\u7F6E\u53D8\u91CF</p><div class="language-bash"><pre><code><span class="token function">cat</span> /etc/passwd <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;/bin/bash&quot;</span> <span class="token operator">|</span> <span class="token punctuation">\\</span>
<span class="token function">awk</span> <span class="token string">&#39;BEGIN {FS=&quot;:&quot;} {printf $1 &quot;\\t&quot; $3 &quot;\\n&quot;}&#39;</span>
</code></pre></div><p>\u5173\u7CFB\u8FD0\u7B97\u7B26</p><div class="language-bash"><pre><code><span class="token function">cat</span> student.txt <span class="token operator">|</span> <span class="token function">grep</span> -v Name <span class="token operator">|</span> <span class="token punctuation">\\</span>
<span class="token function">awk</span> <span class="token string">&#39;$6 &gt;= 87 {printf $2 &quot;\\n&quot;}&#39;</span>
</code></pre></div><h3 id="sed\u547D\u4EE4"><a class="header-anchor" href="#sed\u547D\u4EE4" aria-hidden="true">#</a> sed\u547D\u4EE4</h3><p>sed\u662F\u4E00\u79CD\u51E0\u4E4E\u5305\u62EC\u5728\u6240\u6709UNIX\u5E73\u53F0\uFF08\u5305\u62ECLinux\uFF09\u7684\u8F7B\u91CF\u7EA7\u6D41\u7F16\u8F91\u5668\uFF0Csed\u4E3B\u8981\u662F\u7528\u6765\u5C06\u6570\u636E\u8FDB\u884C\u9009\u53D6\u3001\u66FF\u6362\u3001\u5220\u9664\u3001\u65B0\u589E\u7684\u547D\u4EE4</p><p><code>sed [\u9009\u9879] &#39;[\u52A8\u4F5C]&#39; \u6587\u4EF6\u540D</code></p><ul><li><code>-n</code>\uFF1A\u4E00\u822Csed\u547D\u4EE4\u4F1A\u628A\u6240\u6709\u7684\u6570\u636E\u90FD\u8F93\u51FA\u5230\u5C4F\u5E55\uFF0C\u5982\u679C\u52A0\u5165\u6B64\u9009\u62E9\uFF0C\u5219\u53EA\u4F1A\u628A\u7ECF\u8FC7sed\u547D\u4EE4\u5904\u7406\u7684\u884C\u8F93\u51FA\u5230\u5C4F\u5E55</li><li><code>-e</code>\uFF1A\u5141\u8BB8\u5BF9\u8F93\u5165\u6570\u636E\u5E94\u7528\u591A\u6761sed\u547D\u4EE4\u7F16\u8F91</li><li><code>-i</code>\uFF1A\u7528sed\u7684\u4FEE\u6539\u7ED3\u679C\u76F4\u63A5\u4FEE\u6539\u8BFB\u53D6\u6570\u636E\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u662F\u5C4F\u5E55\u8F93\u51FA</li></ul><p>\u52A8\u4F5C\uFF1A</p><ul><li><code>a \\</code>\uFF1A \u8FFD\u52A0\uFF0C\u5728\u5F53\u524D\u884C\u540E\u6DFB\u52A0\u4E00\u884C\u6216\u591A\u884C\u3002\u6DFB\u52A0\u591A\u884C\u65F6\uFF0C\u9664\u6700\u540E \u4E00\u884C \u5916\uFF0C\u6BCF\u884C\u672B\u5C3E\u9700\u8981\u7528\u201C\\\u201D\u4EE3\u8868\u6570\u636E\u672A\u5B8C\u7ED3\u3002</li><li><code>c \\</code>\uFF1A \u884C\u66FF\u6362\uFF0C\u7528c\u540E\u9762\u7684\u5B57\u7B26\u4E32\u66FF\u6362\u539F\u6570\u636E\u884C\uFF0C\u66FF\u6362\u591A\u884C\u65F6\uFF0C\u9664\u6700 \u540E\u4E00\u884C\u5916\uFF0C\u6BCF\u884C\u672B\u5C3E\u9700\u7528\u201C\\\u201D\u4EE3\u8868\u6570\u636E\u672A\u5B8C\u7ED3\u3002</li><li><code>i \\</code>\uFF1A \u63D2\u5165\uFF0C\u5728\u5F53\u671F\u884C\u524D\u63D2\u5165\u4E00\u884C\u6216\u591A\u884C\u3002\u63D2\u5165\u591A\u884C\u65F6\uFF0C\u9664\u6700\u540E \u4E00\u884C \u5916\uFF0C\u6BCF\u884C\u672B\u5C3E\u9700\u8981\u7528\u201C\\\u201D\u4EE3\u8868\u6570\u636E\u672A\u5B8C\u7ED3\u3002</li><li><code>d</code>\uFF1A \u5220\u9664\uFF0C\u5220\u9664\u6307\u5B9A\u7684\u884C\u3002</li><li><code>p</code>\uFF1A \u6253\u5370\uFF0C\u8F93\u51FA\u6307\u5B9A\u7684\u884C\u3002</li><li><code>s</code>\uFF1A \u5B57\u4E32\u66FF\u6362\uFF0C\u7528\u4E00\u4E2A\u5B57\u7B26\u4E32\u66FF\u6362\u53E6\u5916\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002\u683C\u5F0F\u4E3A\u201C\u884C\u8303 \u56F4s/\u65E7\u5B57\u4E32/\u65B0\u5B57\u4E32/g\u201D\uFF08\u548Cvim\u4E2D\u7684\u66FF\u6362\u683C\u5F0F\u7C7B\u4F3C\uFF09</li></ul><p>\u5B66\u751F\u6210\u7EE9\u8868</p><div class="language-bash"><pre><code><span class="token function">vi</span> student.txt
ID Name PHP Linux MySQL Average
<span class="token number">1</span> Liming <span class="token number">82</span> <span class="token number">95</span> <span class="token number">86</span> <span class="token number">87.66</span>
<span class="token number">2</span> Sc <span class="token number">74</span> <span class="token number">96</span> <span class="token number">87</span> <span class="token number">85.66</span>
<span class="token number">3</span> Gao <span class="token number">99</span> <span class="token number">83</span> <span class="token number">93</span> <span class="token number">91.66</span>
</code></pre></div><p>\u884C\u6570\u636E\u64CD\u4F5C</p><div class="language-bash"><pre><code><span class="token comment"># \u67E5\u770B\u7B2C2\u884C</span>
<span class="token function">sed</span> <span class="token string">&#39;2p&#39;</span> student.txt
<span class="token function">sed</span> -n <span class="token string">&#39;2p&#39;</span> student.txt

<span class="token comment"># \u5220\u9664\u7B2C\u4E8C\u884C\u5230\u7B2C\u56DB\u884C\u7684\u6570\u636E\uFF0C\u4F46\u4E0D\u4FEE\u6539\u6587\u4EF6\u672C\u8EAB</span>
<span class="token function">sed</span> <span class="token string">&#39;2,4d&#39;</span> student.txt

<span class="token comment"># \u5728\u7B2C\u4E8C\u884C\u540E\u8FFD\u52A0hello</span>
<span class="token function">sed</span> <span class="token string">&#39;2a hello&#39;</span> student.txt

<span class="token comment"># \u5728\u7B2C\u4E8C\u884C\u524D\u63D2\u5165\u4E24\u884C\u6570\u636E</span>
<span class="token function">sed</span> <span class="token string">&#39;2i hello world&#39;</span> student.txt

<span class="token comment"># \u6570\u636E\u66FF\u6362</span>
<span class="token function">sed</span> <span class="token string">&#39;2c Nosuch person&#39;</span> student.txt

<span class="token comment"># sed\u64CD\u4F5C\u7684\u6570\u636E\u76F4\u63A5\u5199\u5165\u6587\u4EF6</span>
<span class="token function">sed</span> -i <span class="token string">&#39;3s/74/99/g&#39;</span>  student.txt

<span class="token comment">#\u540C\u65F6\u628A\u201C Liming \u201D\u548C\u201C Gao \u201D\u66FF\u6362\u4E3A\u7A7A</span>
<span class="token function">sed</span> -e <span class="token string">&#39;s/Liming//g ; s/Gao//g&#39;</span> student.txt
</code></pre></div><h2 id="\u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4"><a class="header-anchor" href="#\u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4" aria-hidden="true">#</a> \u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4</h2><h3 id="\u6392\u5E8F\u547D\u4EE4sort"><a class="header-anchor" href="#\u6392\u5E8F\u547D\u4EE4sort" aria-hidden="true">#</a> \u6392\u5E8F\u547D\u4EE4sort</h3><p><code>sort [\u9009\u9879] \u6587\u4EF6\u540D</code></p><ul><li><code>-f</code>\uFF1A \u5FFD\u7565\u5927\u5C0F\u5199</li><li><code>-n</code>\uFF1A \u4EE5\u6570\u503C\u578B\u8FDB\u884C\u6392\u5E8F\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u5B57\u7B26\u4E32\u578B\u6392\u5E8F</li><li><code>-r</code>\uFF1A \u53CD\u5411\u6392\u5E8F</li><li><code>-t</code>\uFF1A \u6307\u5B9A\u5206\u9694\u7B26\uFF0C\u9ED8\u8BA4\u662F\u5206\u9694\u7B26\u662F\u5236\u8868\u7B26</li><li><code>-k n[,m]</code>\uFF1A \u6309\u7167\u6307\u5B9A\u7684\u5B57\u6BB5\u8303\u56F4\u6392\u5E8F\u3002\u4ECE\u7B2Cn\u5B57\u6BB5\u5F00\u59CB\uFF0C m\u5B57\u6BB5\u7ED3\u675F\uFF08\u9ED8\u8BA4\u5230\u884C\u5C3E</li></ul><div class="language-bash"><pre><code><span class="token function">sort</span> /etc/passwd
<span class="token function">sort</span> -r /etc/passwd

<span class="token comment"># \u6307\u5B9A\u5206\u9694\u7B26\u662F\u201C\uFF1A\u201D\uFF0C\u7528\u7B2C\u4E09\u5B57\u6BB5\u5F00\u5934\uFF0C\u7B2C\u4E09\u5B57\u6BB5\u7ED3\u5C3E\u6392\u5E8F\uFF0C\u5C31\u662F\u53EA\u7528\u7B2C\u4E09\u5B57\u6BB5\u6392\u5E8F</span>
<span class="token function">sort</span> -t <span class="token string">&quot;:&quot;</span> -k <span class="token number">3,3</span> /etc/passwd
</code></pre></div><h3 id="\u7EDF\u8BA1\u547D\u4EE4wc"><a class="header-anchor" href="#\u7EDF\u8BA1\u547D\u4EE4wc" aria-hidden="true">#</a> \u7EDF\u8BA1\u547D\u4EE4wc</h3><p><code>wc [\u9009\u9879] \u6587\u4EF6\u540D</code></p><ul><li><code>-l</code>\uFF1A \u53EA\u7EDF\u8BA1\u884C\u6570</li><li><code>-w</code>\uFF1A \u53EA\u7EDF\u8BA1\u5355\u8BCD\u6570</li><li><code>-m</code>\uFF1A \u53EA\u7EDF\u8BA1\u5B57\u7B26\u6570</li></ul><h3 id="\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B"><a class="header-anchor" href="#\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B" aria-hidden="true">#</a> \u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B</h3><ol><li><p>\u5229\u7528\u5B57\u7B26\u4E32\u8FD0\u7B97\u7B26</p><div class="language-bash"><pre><code><span class="token assign-left variable">strA</span><span class="token operator">=</span><span class="token string">&quot;helloworld&quot;</span>
<span class="token assign-left variable">strB</span><span class="token operator">=</span><span class="token string">&quot;low&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$strA</span> <span class="token operator">=~</span> <span class="token variable">$strB</span> <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5305\u542B&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4E0D\u5305\u542B&quot;</span>
<span class="token keyword">fi</span>
</code></pre></div></li><li><p>\u5229\u7528\u901A\u914D\u7B26</p><div class="language-bash"><pre><code><span class="token assign-left variable">A</span><span class="token operator">=</span><span class="token string">&quot;helloworld&quot;</span>
<span class="token assign-left variable">B</span><span class="token operator">=</span><span class="token string">&quot;low&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$A</span> <span class="token operator">==</span> *<span class="token variable">$B</span>* <span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u5305\u542B&quot;</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;\u4E0D\u5305\u542B&quot;</span>
<span class="token keyword">fi</span>
</code></pre></div></li></ol>__VP_STATIC_END__`,91),t=[o];function p(c,i,d,r,u,k){return n(),a("div",null,t)}var b=s(l,[["render",p]]);export{g as __pageData,b as default};
