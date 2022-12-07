import{_ as n,c as s,o as a,d as t}from"./app.5f8a9231.js";const m='{"title":"node-01 http nodejs","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001HTTP\u534F\u8BAE","slug":"\u4E00\u3001http\u534F\u8BAE"},{"level":2,"title":"\u4E8C\u3001HTTP\u8BF7\u6C42","slug":"\u4E8C\u3001http\u8BF7\u6C42"},{"level":2,"title":"\u4E09\u3001HTTP\u54CD\u5E94","slug":"\u4E09\u3001http\u54CD\u5E94"},{"level":2,"title":"\u56DB\u3001\u547D\u4EE4\u884C","slug":"\u56DB\u3001\u547D\u4EE4\u884C"},{"level":2,"title":"\u4E94\u3001\u73AF\u5883\u53D8\u91CF(\u4E86\u89E3)","slug":"\u4E94\u3001\u73AF\u5883\u53D8\u91CF-\u4E86\u89E3"},{"level":2,"title":"\u516D\u3001Node \u7B80\u4ECB","slug":"\u516D\u3001node-\u7B80\u4ECB"},{"level":2,"title":"\u4E03\u3001Node\u7279\u70B9:","slug":"\u4E03\u3001node\u7279\u70B9"},{"level":2,"title":"\u516B\u3001Node\u73AF\u5883\u5B89\u88C5","slug":"\u516B\u3001node\u73AF\u5883\u5B89\u88C5"},{"level":2,"title":"\u4E5D\u3001node\u642D\u5EFA\u670D\u52A1\u5668","slug":"\u4E5D\u3001node\u642D\u5EFA\u670D\u52A1\u5668"},{"level":2,"title":"\u5341\u3001fs\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9","slug":"\u5341\u3001fs\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9"},{"level":2,"title":"\u5341\u4E00\u3001\u4E8B\u4EF6\u8BA2\u9605\u4E0E\u53D1\u5E03  \u6A21\u5757\uFF1Aevents","slug":"\u5341\u4E00\u3001\u4E8B\u4EF6\u8BA2\u9605\u4E0E\u53D1\u5E03-\u6A21\u5757\uFF1Aevents"}],"relativePath":"src/frontend/node/node-01 http nodejs.md","lastUpdated":1645597797000}',p={},e=t(`<h1 id="node-01-http-nodejs" tabindex="-1">node-01 http nodejs <a class="header-anchor" href="#node-01-http-nodejs" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001http\u534F\u8BAE" tabindex="-1">\u4E00\u3001HTTP\u534F\u8BAE <a class="header-anchor" href="#\u4E00\u3001http\u534F\u8BAE" aria-hidden="true">#</a></h2><ol><li>\u4EC0\u4E48\u662F\u534F\u8BAE</li></ol><p>HTTP(Hyper Text Transfer Protocol,\u8D85\u6587\u672C\u4F20\u8F93\u534F\u8BAE)\uFF0CHTTP\u662F\u4E00\u4E2A\u57FA\u4E8E\u8BF7\u6C42\u4E0E\u54CD\u5E94\u6A21\u5F0F\u7684\u3001\u65E0\u72B6\u6001\u7684\u3001\u5E94\u7528\u5C42\u7684\u534F\u8BAE\uFF1Bhttp\u7528\u4E8E\u4ECEweb\u670D\u52A1\u5668(\u5982:apache/nginx/iis)\u4F20\u8F93\u8D85\u6587\u672C\u5230\u672C\u5730\u5BA2\u6237\u673A(\u5982:\u6D4F\u89C8\u5668)\u7684\u4F20\u9001\u534F\u8BAE\u3002HTTP\u662F\u65E0\u72B6\u6001\u7684\uFF0C\u670D\u52A1\u5668\u5176\u5B9E\u662F\u4E0D\u77E5\u9053\u8C01\u8BBF\u95EE\u7684\u5B83\uFF1B</p><p>\u7B80\u5355\u6765\u8BF4HTTP\u534F\u8BAE\u5C31\u662F\u8BA1\u7B97\u673A\u4E0E\u8BA1\u7B97\u673A\u4E4B\u95F4\u901A\u4FE1\u7684\u6807\u51C6\u3002</p><ol start="2"><li>http\u534F\u8BAE\u7684\u539F\u7406\uFF1A[\u91CD\u70B9]</li></ol><p>\u25CF\u5EFA\u7ACB\u8FDE\u63A5\uFF1A\u5BA2\u6237\u7AEF\u4E0Eweb\u670D\u52A1\u5668\u5EFA\u7ACB\u8FDE\u63A5\uFF0C\u670D\u52A1\u7AEF\u7ED9\u51FA\u54CD\u5E94\u5C31\u53EF\u4EE5\u5EFA\u7ACB\u8FDE\u63A5\u4E86\u3002</p><p>\u25CF\u53D1\u9001\u8BF7\u6C42\uFF1A\u5BA2\u6237\u7AEF\u6309\u7167\u534F\u8BAE\u7684\u8981\u6C42\u901A\u8FC7\u8FDE\u63A5\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u81EA\u5DF1\u7684\u8BF7\u6C42\u3002</p><p>\u25CF\u7ED9\u51FA\u5E94\u7B54\uFF1A\u670D\u52A1\u7AEF\u6309\u7167\u5BA2\u6237\u7AEF\u7684\u8981\u6C42\u7ED9\u51FA\u5E94\u7B54\uFF0C\u628A\u7ED3\u679C\uFF08HTML \u6587\u4EF6\uFF09\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</p><p>\u25CF\u5173\u95ED\u8FDE\u63A5\uFF1A\u5BA2\u6237\u7AEF\u63A5\u5230\u5E94\u7B54\u540E\u5173\u95ED\u8FDE\u63A5</p><ol start="3"><li>\u5E38\u89C1\u7684\u534F\u8BAE\u6709\uFF1Ahttp[s]\u3001smtp[\u53D1\u90AE\u4EF6]\u3001pop3[\u6536\u90AE\u4EF6]\u3001ftp[\u6587\u4EF6\u4E0A\u4F20\u4E0B\u8F7D]</li></ol><p>DNS[\u57DF\u540D\u89E3\u6790\u670D\u52A1\u5668]\u670D\u52A1\u5668\uFF1A<a href="http://www.baidu.com" target="_blank" rel="noopener noreferrer">www.baidu.com</a>[\u57DF\u540D]\u4E0E\u670D\u52A1\u5668ip\u5BF9\u5E94\uFF1B</p><p>\u4E86\u89E3\uFF1A</p><p>HTTP1.0\u7528\u7684\u662F\u975E\u6301\u4E45\u8FDE\u63A5\uFF0C\u5BA2\u6237\u7AEF\u5FC5\u987B\u4E3A\u6BCF\u4E00\u4E2A\u5F85\u8BF7\u6C42\u7684\u5BF9\u8C61\u5EFA\u7ACB\u5E76\u7EF4\u62A4\u4E00\u4E2A\u65B0\u7684\u8FDE\u63A5\u3002\u56E0\u4E3A\u540C\u4E00\u4E2A\u9875\u9762\u53EF\u80FD\u5B58\u5728\u591A\u4E2A\u5BF9\u8C61\uFF0C\u6240\u4EE5\u975E\u6301\u4E45\u8FDE\u63A5\u53EF\u80FD\u4F7F\u4E00\u4E2A\u9875\u9762\u7684\u4E0B\u8F7D\u53D8\u5F97\u5341\u5206\u7F13\u6162\uFF0C\u800C\u4E14\u8FD9\u79CD\u77ED\u8FDE\u63A5\u589E\u52A0\u4E86\u7F51\u7EDC\u4F20\u8F93\u7684\u8D1F\u62C5\u3002</p><p>HTTP1.1\u5F15\u5165\u4E86\u6301\u4E45\u8FDE\u63A5\uFF0C\u5141\u8BB8\u5728\u540C\u4E00\u4E2A\u8FDE\u63A5\u4E2D\u5B58\u5728\u591A\u6B21\u6570\u636E\u8BF7\u6C42\u548C\u54CD\u5E94\uFF0C\u5373\u5728\u6301\u4E45\u8FDE\u63A5\u60C5\u51B5\u4E0B\uFF0C\u670D\u52A1\u5668\u5728\u53D1\u9001\u5B8C\u54CD\u5E94\u540E\u5E76\u4E0D\u5173\u95EDTCP\u8FDE\u63A5\uFF0C\u800C\u5BA2\u6237\u7AEF\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u8FDE\u63A5\u7EE7\u7EED\u8BF7\u6C42\u5176\u4ED6\u5BF9\u8C61\u3002</p><h2 id="\u4E8C\u3001http\u8BF7\u6C42" tabindex="-1">\u4E8C\u3001HTTP\u8BF7\u6C42 <a class="header-anchor" href="#\u4E8C\u3001http\u8BF7\u6C42" aria-hidden="true">#</a></h2><ol><li><p>HTTP\u8BF7\u6C42\u7531\u4E09\u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u662F\uFF1A\u8BF7\u6C42\u884C\u3001\u6D88\u606F\u62A5\u5934\u3001\u8BF7\u6C42\u6B63\u6587[\u53EF\u4E3A\u7A7A]</p><p>\u8BF7\u6C42\u884C\u4EE5\u8BF7\u6C42\u65B9\u6CD5\u5F00\u5934\uFF0C\u4EE5\u7A7A\u683C\u5206\u5F00\uFF0C\u540E\u9762\u8DDF\u7740\u8BF7\u6C42\u7684URL\u548C\u534F\u8BAE\u7684\u7248\u672C\uFF1B</p><p>\u683C\u5F0F\uFF1AMethod Request-URI HTTP-Version CRLF\uFF08\u56DE\u8F66\u6216\u6362\u884C\uFF09</p><p>GET /demo.html HTTP/1.1</p></li></ol><p>\u6D88\u606F\u62A5\u5934\u683C\u5F0F\uFF1Ahost:www.baidu.com</p><h2 id="\u4E09\u3001http\u54CD\u5E94" tabindex="-1">\u4E09\u3001HTTP\u54CD\u5E94 <a class="header-anchor" href="#\u4E09\u3001http\u54CD\u5E94" aria-hidden="true">#</a></h2><ol><li><p>HTTP\u54CD\u5E94\u4E5F\u662F\u7531\u4E09\u4E2A\u90E8\u5206\u7EC4\u6210\uFF0C\u5206\u522B\u662F\uFF1A\u72B6\u6001\u884C\u3001\u6D88\u606F\u62A5\u5934\u3001\u54CD\u5E94\u6B63\u6587</p><p>\u72B6\u6001\u884C\u683C\u5F0F\u4E3A\uFF1AHTTP-Version Status-Code Reason-Phrase CRLF</p><p>\u200B HTTP/1.1 200 OK</p><pre><code>HTTP-Version      \u670D\u52A1\u5668HTTP\u534F\u8BAE\u7684\u7248\u672C\uFF1B

Status-Code        \u670D\u52A1\u5668\u53D1\u56DE\u7684\u54CD\u5E94\u72B6\u6001\u4EE3\u7801\uFF1B

Reason-Phrase    \u72B6\u6001\u4EE3\u7801\u7684\u6587\u672C\u63CF\u8FF0\u3002
</code></pre></li></ol><p>\u5E38\u89C1\u7684\u6D88\u606F\u62A5\u5934\u6709\uFF1Acontent-type\uFF1Atext/html</p><p>\u200B content-length: \u4F20\u8F93\u5B57\u7B26\u7684\u957F\u5EA6\uFF1B</p><ol start="2"><li>\u72B6\u6001\u7801</li></ol><p>\u72B6\u6001\u4EE3\u7801\u7531\u4E09\u4F4D\u6570\u5B57\u7EC4\u6210\uFF0C\u7B2C\u4E00\u4E2A\u6570\u5B57\u5B9A\u4E49\u4E86\u54CD\u5E94\u7684\u7C7B\u522B\uFF0C\u4E14\u6709\u4E94\u79CD\u53EF\u80FD\u53D6\u503C\uFF1A</p><p>1xx\uFF1A\u6307\u793A\u4FE1\u606F--------\u8BF7\u6C42\u5DF2\u63A5\u6536\uFF0C\u7EE7\u7EED\u5904\u7406</p><p>2xx\uFF1A\u6210\u529F-------------\u8BF7\u6C42\u5DF2\u88AB\u6210\u529F\u63A5\u6536\u3001\u7406\u89E3\u3001\u63A5\u53D7</p><p>3xx\uFF1A\u91CD\u5B9A\u5411-----------\u8981\u5B8C\u6210\u8BF7\u6C42\u5FC5\u987B\u8FDB\u884C\u66F4\u8FDB\u4E00\u6B65\u7684\u64CD\u4F5C</p><p>4xx\uFF1A\u5BA2\u6237\u7AEF\u9519\u8BEF------\u8BF7\u6C42\u6709\u8BED\u6CD5\u9519\u8BEF\u6216\u8BF7\u6C42\u65E0\u6CD5\u5B9E\u73B0</p><p>5xx\uFF1A\u670D\u52A1\u5668\u7AEF\u9519\u8BEF----\u670D\u52A1\u5668\u672A\u80FD\u5B9E\u73B0\u5408\u6CD5\u7684\u8BF7\u6C42</p><p>\u5E38\u89C1\u72B6\u6001\u4EE3\u7801\u3001\u72B6\u6001\u63CF\u8FF0\u3001\u8BF4\u660E\uFF1A</p><p>200 OK \u5BA2\u6237\u7AEF\u8BF7\u6C42\u6210\u529F</p><p>400 Bad Request \u5BA2\u6237\u7AEF\u8BF7\u6C42\u6709\u8BED\u6CD5\u9519\u8BEF\uFF0C\u4E0D\u80FD\u88AB\u670D\u52A1\u5668\u6240\u7406\u89E3</p><p>401 Unauthorized \u8BF7\u6C42\u672A\u7ECF\u6388\u6743\uFF0C\u8FD9\u4E2A\u72B6\u6001\u4EE3\u7801\u5FC5\u987B\u548CWWW-Authenticate\u62A5\u5934\u57DF\u4E00\u8D77\u4F7F\u7528</p><p>403 Forbidden \u670D\u52A1\u5668\u6536\u5230\u8BF7\u6C42\uFF0C\u4F46\u662F\u62D2\u7EDD\u63D0\u4F9B\u670D\u52A1</p><p>404 Not Found \u8BF7\u6C42\u8D44\u6E90\u4E0D\u5B58\u5728\uFF0Ceg\uFF1A\u8F93\u5165\u4E86\u9519\u8BEF\u7684URL</p><p>500 Internal Server Error \u670D\u52A1\u5668\u53D1\u751F\u4E0D\u53EF\u9884\u671F\u7684\u9519\u8BEF</p><p>503 Server Unavailable \u670D\u52A1\u5668\u5F53\u524D\u4E0D\u80FD\u5904\u7406\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\uFF0C\u4E00\u6BB5\u65F6\u95F4\u540E\u53EF\u80FD\u6062\u590D\u6B63\u5E38</p><p>Telnet\u6A21\u62DFHTTP\u7684GET\u8BF7\u6C42\uFF1A\uFF08\u4E86\u89E3\uFF09</p><p>\uFF081\uFF09\u6253\u5F00cmd\u63A7\u5236\u9762\u677F</p><p>\uFF082\uFF09telnet 192.168.1.100 80\uFF1B</p><p>\uFF083\uFF09ctrl+] \u6253\u5F00\u672C\u5730\u56DE\u663E\u529F\u80FD\uFF0C\u4E4B\u540E\u76F4\u63A5\u56DE\u8F66\uFF1B</p><p>\uFF084\uFF09\u8F93\u5165GET\u8BF7\u6C42\uFF1A</p><p>\u8BF7\u6C42\u884C\uFF1Aget /test.php HTTP/1.1</p><p>\u8BF7\u6C42\u5934\uFF1Ahost:localhost \u8BBF\u95EE\u672C\u5730\uFF1B</p><p>\u8BF7\u6C42\u5934\u4FE1\u606F\u4E0E\u8BF7\u6C42\u6B63\u6587\u4E4B\u95F4\u5FC5\u987B\u7A7A\u683C\uFF1B</p><h2 id="\u56DB\u3001\u547D\u4EE4\u884C" tabindex="-1">\u56DB\u3001\u547D\u4EE4\u884C <a class="header-anchor" href="#\u56DB\u3001\u547D\u4EE4\u884C" aria-hidden="true">#</a></h2><ol><li><p>\u547D\u4EE4\u884C\u7A97\u53E3\u3001CMD\u7A97\u53E3 \uFF1A</p><p>\u53EF\u4EE5\u6267\u884C\u4E00\u4E9B\u5185\u90E8\u547D\u4EE4\uFF0C\u53EF\u4EE5\u6267\u884C\u4E00\u4E9Bexe\u7A0B\u5E8F\uFF0C\u540C\u65F6\u4E5F\u80FD\u6253\u5F00\u6587\u4EF6</p></li><li><p>\u8FD0\u884C\u65B9\u5F0F\uFF1A</p></li></ol><p>\uFF081\uFF09\u5F00\u59CB\u83DC\u5355 win+r \u6253\u5F00\u8F93\u5165cmd\uFF1B</p><p>\uFF082\uFF09\u5FEB\u6377\u65B9\u5F0F\uFF1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B shift+\u53F3\u952E-&gt;\u5728\u6B64\u5904\u6253\u5F00\u547D\u4EE4\u7A97\u53E3</p><p>\uFF083\uFF09\u8D44\u6E90\u7BA1\u7406\u5668\u5730\u5740\u680F\u76F4\u63A5\u8F93\u5165cmd</p><ol start="3"><li>cmd\u5E38\u7528\u7684\u6307\u4EE4\uFF1A</li></ol><p>cls \u6E05\u5C4F\uFF0Cdir \u76EE\u5F55\uFF0Ccd \u8FDB\u5165\u6307\u5B9A\u76EE\u5F55\uFF0Ctab \u5FEB\u901F\u5B9E\u4F8B\uFF0Cmd \u521B\u5EFA\u76EE\u5F55\uFF0Cctrl+c \u7EC8\u6B62\u5F53\u524D\u547D\u4EE4\uFF1B</p><p>D:\u5192\u53F7\u5207\u6362\u76D8\u7B26\uFF1B\u4E00\u4E2A\u70B9\u8868\u793A\u5F53\u524D\u76EE\u5F55\uFF0C\u4E24\u4E2A\u70B9\u8868\u793A\u4E0A\u4E00\u7EA7\u76EE\u5F55\uFF1B</p><p>\u200B</p><h2 id="\u4E94\u3001\u73AF\u5883\u53D8\u91CF-\u4E86\u89E3" tabindex="-1">\u4E94\u3001\u73AF\u5883\u53D8\u91CF(\u4E86\u89E3) <a class="header-anchor" href="#\u4E94\u3001\u73AF\u5883\u53D8\u91CF-\u4E86\u89E3" aria-hidden="true">#</a></h2><p>\uFF081\uFF09\u5168\u5C40\u53D8\u91CF\uFF0C\u5C06\u76EE\u5F55\u7684\u7EDD\u5BF9\u8DEF\u5F84\u52A0&amp;\u590D\u5236\u5230Path(\u8DEF\u5F84)\u6700\u540E\u9762\uFF0C\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528cmd\u547D\u4EE4\u6253\u5F00\u76F8\u5E94\u7684\u8F6F\u4EF6\uFF1B</p><p>\uFF082\uFF09\u73AF\u5883\u53D8\u91CF\u6709\u7528\u6237\u7EA7\u53D8\u91CF\u548C\u7CFB\u7EDF\u7EA7\u53D8\u91CF\uFF1B</p><p>\uFF083\uFF09\u7CFB\u7EDF\u521A\u521A\u5B89\u88C5\u5B8C\uFF0C\u6709\u65F6\u5019\u7528\u6237\u7684\u53D8\u91CF\u5F53\u4E2D\u662F\u6CA1\u6709path\u7684\u3002 \u53D8\u91CF\u540D\u4E0D\u533A\u5206\u5927\u5C0F\u5199\uFF1B</p><p>\uFF084\uFF09\u8BBE\u7F6E\u597Dpath\u4EE5\u540E\uFF0C\u91CD\u542Fcmd\uFF0C\u4F60\u65B0\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u624D\u751F\u6548</p><h2 id="\u516D\u3001node-\u7B80\u4ECB" tabindex="-1">\u516D\u3001Node \u7B80\u4ECB <a class="header-anchor" href="#\u516D\u3001node-\u7B80\u4ECB" aria-hidden="true">#</a></h2><ol><li>\u4E86\u89E3\uFF1A</li></ol><p>\uFF081\uFF09Node.js\u662F\u4E00\u4E2A\u80FD\u591F\u5728\u670D\u52A1\u5668\u7AEF\uFF08\u540E\u7AEF\uFF09\u8FD0\u884CJavaScript\u7684\u5F00\u653E\u6E90\u4EE3\u7801\u3001\u8DE8\u5E73\u53F0JavaScript\u8FD0\u884C\u73AF\u5883\uFF0C\u76F4\u63A5\u8FD0\u884Cjs\u6587\u4EF6\u662F\u65E0\u6CD5\u8FD0\u884C\u7684\uFF0CNode \u73AF\u5883\u5C31\u662F\u8FD0\u884Cjavascript\u4EE3\u7801\uFF08 \u8FD0\u884CECMAscript \uFF09</p><p>\uFF082\uFF09Node\u91C7\u7528Google\u5F00\u53D1\u7684V8\u5F15\u64CE\u8FD0\u884Cjs\u4EE3\u7801\uFF0C\u4F7F\u7528\u4E8B\u4EF6\u9A71\u52A8\u3001\u975E\u963B\u585E\u548C\u5F02\u6B65I/O\u6A21\u578B\u7B49\u6280\u672F\u6765\u63D0\u9AD8\u6027\u80FD\uFF0C\u53EF\u4F18\u5316\u5E94\u7528\u7A0B\u5E8F\u7684\u4F20\u8F93\u91CF\u548C\u89C4\u6A21\u3002</p><p>\uFF083\uFF09Node.js\u7684\u6838\u5FC3\u6A21\u5757\u5305\u62EC\u6587\u4EF6\u7CFB\u7EDFI/O\u3001\u7F51\u7EDC\uFF08HTTP\u3001TCP\u3001UDP\u3001DNS\u3001TLS/SSL\u7B49\uFF09\u3001\u4E8C\u8FDB\u5236\u6570\u636E\u6D41\u3001\u52A0\u5BC6\u7B97\u6CD5\u3001\u6570\u636E\u6D41\u7B49\u7B49\u3002Node\u6A21\u5757\u7684API\u5F62\u5F0F\u7B80\u5355\uFF0C\u964D\u4F4E\u4E86\u7F16\u7A0B\u7684\u590D\u6742\u5EA6\u3002</p><p>\uFF084\uFF09\u4F7F\u7528\u6846\u67B6\u53EF\u4EE5\u52A0\u901F\u5F00\u53D1\u3002\u5E38\u7528\u7684\u6846\u67B6\u6709Express.js\u3001Socket.IO\u548CConnect\u7B49Node.js\u7684\u7A0B\u5E8F\u53EF\u4EE5\u5728Windows\u3001Linux\u3001Unix\u3001Mac OS X\u7B49\u670D\u52A1\u5668\u4E0A\u8FD0\u884C\uFF1B</p><p>\uFF085\uFF09I/O (Input/Output) I/O\u64CD\u4F5C\u6307\u7684\u662F\u5BF9\u78C1\u76D8\u7684\u8BFB\u5199\u64CD\u4F5C</p><p>\uFF086\uFF09node.js \u4E0D\u5C5E\u4E8E\u524D\u7AEF\uFF0C\u5B83\u5C5E\u4E8E\u540E\u7AEF\uFF0C\u5B83\u5C31\u662F\u4E00\u4E2A\u73AF\u5883</p><p>\uFF087\uFF09node.js\u64CD\u4F5C\u7684\u662F\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\uFF0C\u4E0D\u662F\u672C\u5730\u7684\u6587\u4EF6\uFF1B</p><p><img src="https://notecdn.hrhe.cn/images/node-01_http_nodejs-01.png" alt="image"></p><ol start="2"><li>\u91CD\u70B9\uFF1A</li></ol><p>\uFF081\uFF09\u901A\u8FC7Node\u73AF\u5883\uFF0Cjs\u4EE3\u7801\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7AEF\u8FD0\u884C</p><p>\uFF082\uFF09Node\u5B9E\u73B0\u4E86ECMAscript\u7684\u6807\u51C6\uFF08\u8BED\u6CD5\uFF09\uFF0CNode\u662F\u6CA1\u6709DOM\u548CBOM</p><p>\uFF083\uFF09Node\u4E2D\u53EF\u4EE5\u4F7F\u7528ECMAscript\u63D0\u4F9B\u7684\u6240\u6709\u7684\u5185\u7F6E\u5BF9\u8C61</p><p>\u200B String Number Boolean Math Date RexExp Function Object Array</p><p>\uFF084\uFF09\u5C01\u88C5\u51FA\u4E86\u5176\u5B83\u7684api\u65B9\u6CD5\uFF08\u51FD\u6570\uFF09</p><h2 id="\u4E03\u3001node\u7279\u70B9" tabindex="-1">\u4E03\u3001Node\u7279\u70B9: <a class="header-anchor" href="#\u4E03\u3001node\u7279\u70B9" aria-hidden="true">#</a></h2><ol><li>node.js\u662F\u57FA\u4E8E\u6A21\u5757\u5316\u5F00\u53D1\u7684\uFF0C\u4F7F\u7528require()\u65B9\u6CD5\u8C03\u7528\u6A21\u5757\uFF1B</li><li>\u975E\u963B\u585E\u5F02\u6B65\u56DE\u8C03\uFF0Cerr\uFF08\u9519\u8BEF\u4F18\u5148\u601D\u60F3\uFF09\uFF1B</li><li>\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u57FA\u4E8E\u4E8B\u4EF6\u9A71\u52A8\uFF08\u4E8B\u4EF6\u8BA2\u9605\u4E0E\u53D1\u5E03\u673A\u5236\uFF09\uFF1B</li><li>node.js\u662F\u5355\u7EBF\u7A0B\u7684\uFF1B</li></ol><p>node\u7684\u7279\u70B9\uFF1A \u2460\u6A21\u5757\u5316\uFF0C\u2461\u4E8B\u4EF6\u673A\u5236\uFF0C\u2462\u975E\u963B\u585E\u5F02\u6B65\u56DE\u8C03\uFF1B</p><h2 id="\u516B\u3001node\u73AF\u5883\u5B89\u88C5" tabindex="-1">\u516B\u3001Node\u73AF\u5883\u5B89\u88C5 <a class="header-anchor" href="#\u516B\u3001node\u73AF\u5883\u5B89\u88C5" aria-hidden="true">#</a></h2><ol><li><p>\u5B83\u81EA\u5DF1\u4F1A\u628A\u4EE5\u4E0B\u4E24\u4E2A\u76F8\u5173\u7684\u8DEF\u5F84\u52A0\u5230path\u91CC\u9762</p><p>C:\\Users\\Administrator\\AppData\\Roaming\\npm</p><p>C:\\Program Files\\nodejs</p></li></ol><p>nodejs\u7684api\u5F00\u53D1\u624B\u518C:<a href="http://nodejs.cn/" target="_blank" rel="noopener noreferrer">http://nodejs.cn/</a></p><p>node -v \u67E5\u770Bnode\u7248\u672C</p><p>cmd\u9762\u677F\u8F93\u5165node \u52A0\u76F8\u5E94\u7684js\u6587\u4EF6\u53EF\u4EE5\u6253\u5F00node\u670D\u52A1\u5668\uFF1B</p><p>node\u81EA\u52A8\u8865\u9F50\uFF1Anpm i -g typings</p><p>\u542F\u7528\uFF1A\u5728\u9879\u76EE\u6240\u5728\u76EE\u5F55(\u5728\u8FD9\u91CC\u662FNodeSnippet\u6587\u4EF6\u5939\u4E2D)\u589E\u52A0\u4E00\u4E2A\u540D\u4E3Ajsconfig.json\u7684\u7A7A\u6587\u4EF6\u3002</p><h2 id="\u4E5D\u3001node\u642D\u5EFA\u670D\u52A1\u5668" tabindex="-1">\u4E5D\u3001node\u642D\u5EFA\u670D\u52A1\u5668 <a class="header-anchor" href="#\u4E5D\u3001node\u642D\u5EFA\u670D\u52A1\u5668" aria-hidden="true">#</a></h2><ol><li>\u5F15\u5165HTTP\u6A21\u5757</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   
 <span class="token comment">//\u5F15\u5165http\u6A21\u5757[\u8BE5\u6A21\u5757\u662Fnode\u5185\u7F6E\u6A21\u5757]\uFF0C\u7528\u6765\u521B\u5EFA\u670D\u52A1\u5668\uFF1B</span>
</code></pre></div><ol start="2"><li>\u521B\u5EFAweb\u670D\u52A1\u5668</li></ol><div class="language-js"><pre><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\uFF1B
</code></pre></div><ol start="3"><li>\u76D1\u542C</li></ol><div class="language-js"><pre><code>    <span class="token comment">//\u6CE8\u610F\uFF1Anode\u662F\u57FA\u4E8E\u4E8B\u4EF6\u9A71\u52A8</span>
    <span class="token comment">//\u4E3Ahttp\u5BF9\u8C61\u7ED1\u5B9A\u4E00\u4E2Arequest\u4E8B\u4EF6\uFF08\u8BF7\u6C42\uFF09</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;request&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span>res</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u8BBE\u7F6E\u54CD\u5E94\u5934 \u7684\u72B6\u6001\u7801\u53CA\u6587\u4EF6\u7F16\u7801</span>
    res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;content-type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/html;charset=utf-8&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token comment">//\u5982\u679C\u4E0D\u8BBE\u7F6EwriteHeader\u5219\u4E0D\u4F1A\u7F16\u7801\u6807\u7B7E\uFF1B</span>
    res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;h1&gt;hello&lt;/h1&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//\u7ED9\u524D\u7AEF\u8FD4\u56DE\u6570\u636E\uFF0C\u800C\u4E14\u8FD4\u56DE\u7684\u5FC5\u987B\u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u6570\u636E \u6216 Buffer\uFF08\u4E8C\u8FDB\u5236\uFF09</span>
    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//\u8FD4\u56DE\u54CD\u5E94\u5B8C\u6210\u4E86\uFF0Cend\u53EA\u80FD\u5199\u4E00\u6B21\uFF1B</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u56DE\u8C03\u51FD\u6570\u91CC\u9762\u7684\u4E24\u4E2A\u5F62\u53C2\uFF1Arequire\u8BF7\u6C42\uFF0Cresponse\u54CD\u5E94\uFF1B</p><p>\uFF084\uFF09\u3001\u8BBE\u7F6E\u76D1\u542C\u7AEF\u53E3</p><p>server.listen(8088)\uFF1B//8080\u662F\u7AEF\u53E3\u53F7</p><p>\u8BA1\u7B97\u673A\u7AEF\u53E3\u9ED8\u8BA4\u67090-65535\u4E4B\u95F4\uFF0C\u5176\u4E2D\u5C0F\u4E8E1024\u7684\u7AEF\u53E3\u88AB\u8BA1\u7B97\u673A\u5E38\u7528\u670D\u52A1\u5360\u7528\uFF1B</p><p>js\u6587\u4EF6\u6709\u53D8\u52A8\uFF0C\u9700\u8981cmd\u91CD\u65B0\u6267\u884C\u4E00\u4E0B\u547D\u4EE4\uFF1B</p><p>res.writeHead();\u8BBE\u7F6E\u5934\u4FE1\u606F\uFF0C\u5982\u679C\u4E0D\u8BBE\u7F6E\u4E0D\u4F1A\u7F16\u7801\u6807\u7B7E\uFF1B</p><p>res.write()\uFF1B\u9875\u9762\u4E0A\u6DFB\u52A0\u5185\u5BB9\uFF0C\u53EF\u4EE5\u591A\u4E2A\uFF1B</p><p>res.end()\uFF1B\u54CD\u5E94\u5B8C\u6210\uFF0C\u4E00\u4E2A\u9875\u9762end\u53EA\u80FD\u5199\u4E00\u6B21\uFF1B</p><p>server.listen()\uFF1B\u8BBE\u7F6E\u76D1\u542C\u7AEF\u53E3\uFF1B</p><p>req.url \u83B7\u53D6path\u8DEF\u5F84\uFF1B</p><p>req.method \u83B7\u53D6\u63D0\u4EA4\u65B9\u5F0F\uFF0C\u9700\u8981\u5927\u5199</p><h2 id="\u5341\u3001fs\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9" tabindex="-1">\u5341\u3001fs\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9 <a class="header-anchor" href="#\u5341\u3001fs\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a></h2><p><code>fs.readFile(path[, options], callback)</code></p><p>__dirname:\u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u6240\u5728\u7EDD\u5BF9\u8DEF\u5F84</p><p>__filename:\u83B7\u53D6\u5F53\u524D\u6587\u4EF6\u7684\u5B8C\u6574\u7EDD\u5BF9\u8DEF\u5F84</p><p>options\u53EF\u4EE5\u653E\u4E00\u4E2A\u5BF9\u8C61\uFF1A\u5BF9\u8C61\u503C\u586B\u5199encoding:&#39;utf-8&#39;\uFF0C\u5219\u8F93\u5165\u7684\u6570\u636E\u4E0D\u9700\u8981.toString()\u4E5F\u80FD\u770B\u61C2\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//\u5F15\u5165fs\u6A21\u5757</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>__dirname<span class="token operator">+</span><span class="token string">&#39;a.txt&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span>data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u9519\u8BEF\u4FE1\u606F&#39;</span><span class="token punctuation">)</span>      \u76F4\u63A5\u629B\u51FA\u9519\u8BEF\uFF1B
</code></pre></div><h2 id="\u5341\u4E00\u3001\u4E8B\u4EF6\u8BA2\u9605\u4E0E\u53D1\u5E03-\u6A21\u5757\uFF1Aevents" tabindex="-1">\u5341\u4E00\u3001\u4E8B\u4EF6\u8BA2\u9605\u4E0E\u53D1\u5E03 \u6A21\u5757\uFF1Aevents <a class="header-anchor" href="#\u5341\u4E00\u3001\u4E8B\u4EF6\u8BA2\u9605\u4E0E\u53D1\u5E03-\u6A21\u5757\uFF1Aevents" aria-hidden="true">#</a></h2><p>\u53C2\u8003\u5730\u5740\uFF1A<a href="https://www.jianshu.com/p/0aacfec05046" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/0aacfec05046</a></p><p>\u4E8B\u4EF6\u673A\u5236\uFF1A\u53D1\u5E03\u548C\u8BA2\u9605\u529F\u80FD</p><ol><li>\u5B9A\u4E49\uFF1A</li></ol><p>\uFF081\uFF09\u5927\u591A\u6570 Node.js \u6838\u5FC3 API \u6784\u5EFA\u4E8E\u60EF\u7528\u7684\u5F02\u6B65\u4E8B\u4EF6\u9A71\u52A8\u67B6\u6784\uFF0C\u5176\u4E2D\u67D0\u4E9B\u7C7B\u578B\u7684\u5BF9\u8C61\uFF08\u53C8\u79F0\u89E6\u53D1\u5668\uFF0CEmitter\uFF09\u4F1A\u89E6\u53D1\u547D\u540D\u4E8B\u4EF6\u6765\u8C03\u7528\u51FD\u6570\uFF08\u53C8\u79F0\u76D1\u542C\u5668\uFF0CListener\uFF09\u3002</p><p>\uFF082\uFF09\u6240\u6709\u80FD\u89E6\u53D1\u4E8B\u4EF6\u7684\u5BF9\u8C61\u90FD\u662FEventEmitter\u7C7B\u7684\u5B9E\u4F8B\uFF0C\u6709\u4E00\u4E2AeventEmitter.on()\u51FD\u6570\uFF0C\u7528\u4E8E\u5C06\u4E00\u4E2A\u6216\u591A\u4E2A\u51FD\u6570\u7ED1\u5B9A\u5230\u547D\u540D\u4E8B\u4EF6\u4E0A\uFF0C\u4E8B\u4EF6\u7684\u547D\u540D\u901A\u5E38\u662F\u9A7C\u5CF0\u5F0F\u7684\u5B57\u7B26\u4E32\uFF1B</p><p>\uFF083\uFF09EventEmitter\u5BF9\u8C61\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6\u65F6\uFF0C\u6240\u6709\u7ED1\u5B9A\u5728\u8BE5\u4E8B\u4EF6\u4E0A\u7684\u51FD\u6570\u90FD\u4F1A\u88AB\u540C\u6B65\u8C03\u7528\uFF1B</p><p>.on()\uFF1A\u6CE8\u518C\u76D1\u542C\u5668\uFF0C.emit()\uFF1B\u7528\u4E8E\u89E6\u53D1\u4E8B\u4EF6\uFF1B</p><p>\u521B\u5EFA\u4E00\u4E2A\u4E8B\u4EF6\u76D1\u542C\uFF1A</p><div class="language-js"><pre><code>\u2460\u3001\u5F15\u5165events\u6A21\u5757
<span class="token keyword">const</span> eventEmitter <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u2461\u3001\u5B9E\u4F8B\u5316\u7C7B
<span class="token keyword">const</span> myEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">eventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
\u2462\u3001\u76D1\u542C\u4E8B\u4EF6
myEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u76D1\u542C\u4E2D.....&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
\u2463\u3001\u89E6\u53D1\u76D1\u542C\u7684\u4E8B\u4EF6
myEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;event&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//event\u662F\u81EA\u5B9A\u4E49\u7684\u4E8B\u4EF6\u540D\uFF1B</span>
</code></pre></div><ol start="2"><li>\u4F20\u53C2\u548Cthis\u6307\u5411</li></ol><p>\u4E8B\u4EF6\u7684this\u6307\u5411\u76D1\u542C\u5668\u6240\u7ED1\u5B9A\u7684\u5B9E\u4F8B\uFF0C\u5982\u679C\u662F\u7BAD\u5934\u51FD\u6570\u7684this\u6307\u5411\u5916\u5C42this\uFF1B</p><p>\u5728emit\u65B9\u6CD5\u62EC\u53F7\u91CC\u7D27\u8DDF\u7740\u4E8B\u4EF6\u4F20\u53C2\uFF0C\u5728on\u76D1\u542C\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570\u5F62\u53C2\u6765\u63A5\u6536\uFF0C\u53EF\u4EE5\u4F20\u591A\u4E2A\uFF1B</p><pre><code>     \u5982\uFF1AeventEmitter.emit(&#39;event&#39;,&#39;a&#39;,&#39;b&#39;)
</code></pre><ol start="3"><li>\u5F02\u6B65vs\u540C\u6B65 EventEmitter\u662F\u540C\u6B65\u987A\u5E8F\u6267\u884C\u6240\u6709\u76D1\u542C\u5668\u7684\uFF0C\u6240\u4EE5\u5FC5\u987B\u786E\u4FDD\u4E8B\u4EF6\u6392\u5E8F\u6B63\u786E\uFF1B</li></ol><p>\u4F7F\u7528 setImmediate() \u6216 process.nextTick() \u5207\u6362\u5230\u5F02\u6B65\u6A21\u5F0F\uFF1A</p><ol start="4"><li>\u4E8B\u4EF6\u4EC5\u8C03\u7528\u4E00\u6B21\uFF1B</li></ol><p>eventEmitter.on() \u6CE8\u518C\u76D1\u542C\u5668\u65F6\uFF0C\u4F1A\u6BCF\u6B21emit\u89E6\u53D1\u547D\u540D\u4E8B\u4EF6\u90FD\u4F1A\u8C03\u7528\u4E00\u6B21\uFF0C\u589E\u52A0\u4E00\u6B21\uFF1B</p><p>\u53EF\u4EE5\u4F7F\u7528 eventEmitter.once() \u53EF\u4EE5\u6CE8\u518C\u6700\u591A\u53EF\u8C03\u7528\u4E00\u6B21\u7684\u76D1\u542C\u5668\uFF1B\u5F53\u4E8B\u4EF6\u88AB\u89E6\u53D1\u65F6\uFF0C\u76D1\u542C\u5668\u4F1A\u6CE8\u9500\u518D\u8C03\u7528\uFF0C\u53EA\u80FD\u8C03\u7528\u4E00\u6B21\uFF1B</p><ol start="5"><li>\u9519\u8BEF\u4E8B\u4EF6</li></ol><p>\u5F53eventEmitter\u5B9E\u4F8B\u51FA\u9519\u65F6\uFF0C\u9700\u8981\u629B\u51FA\u9519\u8BEF</p><p>\u6CE8\u518C\u9519\u8BEF\u4E8B\u4EF6\uFF1AmyEmitter.on(&#39;error&#39;,(err)=&gt;{console.log(&#39;\u9519\u8BEF\u4FE1\u606F&#39;)})</p><p>\u629B\u51FA\u9519\u8BEF\uFF1AmyEmitter.emit(&#39;error&#39;,new Error(&#39;\u9519\u8BEF\u4FE1\u606F&#39;))\uFF1B</p><p>\u5982\u679C\u4E0D\u6CE8\u518C\u9519\u8BEF\u4E8B\u4EF6\u4F1A\u9020\u6210node.js\u5D29\u6E83\uFF1B</p><ol start="6"><li>EventEmitter\u7C7B</li></ol><p>\u7531events\u6A21\u5757\u5B9A\u4E49\uFF1B</p><p>\u5F53\u65B0\u589E\u76D1\u542C\u5668\u65F6\uFF0C\u4F1A\u89E6\u53D1newListener\u4E8B\u4EF6\uFF0C\u5F53\u79FB\u9664\u5DF2\u5B58\u5728\u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u65F6\uFF0C\u5219\u89E6\u53D1removeListener\uFF1B</p><p>newListener\u4E8B\u4EF6\uFF1A</p><p>ES5\u9762\u5411\u5BF9\u8C61\u521B\u5EFA\u8BA2\u9605\u53D1\u5E03\u7684\u4F8B\u5B50\uFF1A</p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">Even</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u58F0\u660E\u4E00\u4E2A\u7A7A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5B58\u50A8\u503C;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// on\u7528\u6765\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\uFF0C\u5E76\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E00\u4E2A\u662F\u4E8B\u4EF6\u540D\uFF0C\u4E00\u4E2A\u662F\u56DE\u8C03\u51FD\u6570;</span>
<span class="token class-name">Even</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">on</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventname<span class="token punctuation">,</span>callback</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u5224\u65AD\u8BE5\u51FD\u6570\u91CC\u7684\u4E8B\u4EF6\u540D\u662F\u5426\u5B58\u5728</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u5B58\u5728\u5219\u65B0\u589E\u4E00\u4E2A\u65B9\u6CD5;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u4E0D\u5B58\u5728\u5219\u4F7F\u7528\u6570\u7EC4\u65B9\u5F0F\u5B58\u5165\u4E00\u4E2A\u4E8B\u4EF6;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>callback<span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// emit\u7528\u6765\u89E6\u53D1\u4E00\u4E2A\u4E8B\u4EF6,\u4E00\u4E2A\u662F\u89E6\u53D1\u7684\u4E8B\u4EF6\u540D,\u7B2C\u4E8C\u4E2A\u662F\u4F20\u5165\u7684\u53C2\u6570;</span>
<span class="token class-name">Even</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">emit</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">eventname<span class="token punctuation">,</span><span class="token operator">...</span>args</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// emit\u7528\u6765\u76D1\u542C\u4E00\u4E2A\u4E8B\u4EF6\u7684\u89E6\u53D1</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// \u5982\u679C\u6709\u8BE5\u4E8B\u4EF6\uFF0C\u5219\u5FAA\u73AF\u8BE5\u4E8B\u4EF6\u5E76\u6267\u884C\u8BE5\u4E8B\u4EF6</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>eventBus<span class="token punctuation">[</span>eventname<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token operator">=&gt;</span><span class="token function">item</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,139),o=[e];function c(l,i,r,u,k,d){return a(),s("div",null,o)}var v=n(p,[["render",c]]);export{m as __pageData,v as default};