import{_ as o,c as e,o as t,d as a}from"./app.8aafc8a7.js";const g='{"title":"ubuntu\u914D\u7F6E","description":"","frontmatter":{},"headers":[{"level":2,"title":"ubuntu\u7CFB\u7EDF\u76EE\u5F55","slug":"ubuntu\u7CFB\u7EDF\u76EE\u5F55"},{"level":2,"title":"ubuntu\u4E0B\u5B89\u88C5mongodb","slug":"ubuntu\u4E0B\u5B89\u88C5mongodb"}],"relativePath":"src/frontend/Server/ubuntu\u6559\u7A0B.md","lastUpdated":1626521365000}',d={},n=a(`<h1 id="ubuntu\u914D\u7F6E" tabindex="-1">ubuntu\u914D\u7F6E <a class="header-anchor" href="#ubuntu\u914D\u7F6E" aria-hidden="true">#</a></h1><p>\u5C06\u5305\u63D0\u5347\u5230\u6700\u65B0\uFF1A</p><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">apt</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt</span> upgrade -y
</code></pre></div><h2 id="ubuntu\u7CFB\u7EDF\u76EE\u5F55" tabindex="-1">ubuntu\u7CFB\u7EDF\u76EE\u5F55 <a class="header-anchor" href="#ubuntu\u7CFB\u7EDF\u76EE\u5F55" aria-hidden="true">#</a></h2><ul><li>\u642D\u5EFA\u9759\u6001\u7F51\u7AD9\uFF1A<code>/data/html/</code> \u653E\u7F6E\u9759\u6001\u6587\u4EF6</li><li>\u914D\u7F6Enginx\uFF1A<code>/data/config/nginx/conf.d/</code></li><li>\u914D\u7F6E\u4E4B\u540E\u91CD\u542Fdocker\uFF1A<code>docker restart data_nginx_1</code></li><li>\u67E5\u770B\u9519\u8BEF\u65E5\u5FD7\uFF1A <ul><li><code>docker logs data_nginx_1</code></li><li><code>tail /data/log/nginx/error.log</code></li></ul></li><li>\u914D\u7F6E\u7F51\u7AD9\u7684root\u6839\u8DEF\u5F84\uFF1A<code>/usr/share/nginx/html</code> \u5F00\u5934\uFF0C\u6587\u4EF6\u653E\u5728<code>/data/html</code>\u4E0B</li><li>\u67E5\u770B\u5BF9\u5E94\u76EE\u5F55\uFF1A<code>cat /data/docker-compose.yml</code></li><li>\u4FEE\u6539vim\u914D\u7F6E\uFF1A<code>vim /etc/vim/vimrc</code></li></ul><h2 id="ubuntu\u4E0B\u5B89\u88C5mongodb" tabindex="-1">ubuntu\u4E0B\u5B89\u88C5mongodb <a class="header-anchor" href="#ubuntu\u4E0B\u5B89\u88C5mongodb" aria-hidden="true">#</a></h2><ol><li><p>\u5B89\u88C5</p><div class="language-bash"><pre><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> mongodb
</code></pre></div></li><li><p>\u4F7F\u7528\u547D\u4EE4</p><ul><li><code>sudo systemctl status mongodb</code> \u67E5\u770B\u72B6\u6001</li><li><code>sudo systemctl stop mongodb</code> \u505C\u6B62</li><li><code>sudo systemctl start mongodb</code> \u542F\u52A8</li><li><code>sudo systemctl restart mongodb</code> \u91CD\u542F</li></ul></li><li><p>\u4FEE\u6539\u662F\u5426\u81EA\u52A8\u968F\u7CFB\u7EDF\u542F\u52A8\uFF08\u9ED8\u8BA4\u542F\u7528\uFF09</p><ul><li><code>sudo systemctl disable mongodb</code></li><li><code>sudo systemctl enable mongodb</code></li></ul></li><li><p><code>mongo</code> \u5F00\u59CB\u4F7F\u7528\u6570\u636E\u5E93</p></li><li><p>\u5378\u8F7D</p><ul><li><code>sudo systemctl stop mongodb</code></li><li><code>sudo apt purge mongodb</code></li><li><code>sudo apt autoremove</code></li></ul></li></ol>`,7),l=[n];function s(c,i,u,r,p,m){return t(),e("div",null,l)}var _=o(d,[["render",s]]);export{g as __pageData,_ as default};
