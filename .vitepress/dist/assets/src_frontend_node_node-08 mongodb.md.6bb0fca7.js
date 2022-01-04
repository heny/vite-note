import{_ as e,c as o,o as n,d as a}from"./app.310fb107.js";const m='{"title":"node-08 mongodb","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001mongodb","slug":"\u4E00\u3001mongodb"},{"level":3,"title":"Mongodb\u7B80\u4ECB","slug":"mongodb\u7B80\u4ECB"},{"level":3,"title":"\u4F20\u7EDF\u7684\u6570\u636E\u5E93","slug":"\u4F20\u7EDF\u7684\u6570\u636E\u5E93"},{"level":3,"title":"\u5B89\u88C5MongoDB","slug":"\u5B89\u88C5mongodb"},{"level":3,"title":"\u4F7F\u7528MongoDB\u6570\u636E\u5E93","slug":"\u4F7F\u7528mongodb\u6570\u636E\u5E93"},{"level":3,"title":"\u6570\u636E\u5E93\u7684\u6982\u5FF5","slug":"\u6570\u636E\u5E93\u7684\u6982\u5FF5"},{"level":2,"title":"\u4E00\u3001\u6570\u636E\u5E93\u57FA\u672C\u64CD\u4F5C","slug":"\u4E00\u3001\u6570\u636E\u5E93\u57FA\u672C\u64CD\u4F5C"},{"level":2,"title":"\u4E8C\u3001\u63D2\u5165db\u6570\u636E","slug":"\u4E8C\u3001\u63D2\u5165db\u6570\u636E"},{"level":2,"title":"\u4E09\u3001\u67E5\u627Efind()","slug":"\u4E09\u3001\u67E5\u627Efind"},{"level":3,"title":"\u67E5\u8BE2\u7684\u5173\u952E\u8BCD","slug":"\u67E5\u8BE2\u7684\u5173\u952E\u8BCD"},{"level":3,"title":"\u4F7F\u7528\u67E5\u8BE2\u5173\u952E\u8BCD","slug":"\u4F7F\u7528\u67E5\u8BE2\u5173\u952E\u8BCD"},{"level":3,"title":"\u9650\u5236\u6761\u6570limit","slug":"\u9650\u5236\u6761\u6570limit"},{"level":3,"title":"\u8DF3\u8FC7skip","slug":"\u8DF3\u8FC7skip"},{"level":3,"title":"\u6392\u5E8Fsort","slug":"\u6392\u5E8Fsort"},{"level":3,"title":"\u8FD4\u56DE\u8BB0\u5F55\u6761\u6570count","slug":"\u8FD4\u56DE\u8BB0\u5F55\u6761\u6570count"},{"level":2,"title":"\u56DB\u3001\u4FEE\u6539update()","slug":"\u56DB\u3001\u4FEE\u6539update"},{"level":2,"title":"\u4E94\u3001\u5220\u9664remove()","slug":"\u4E94\u3001\u5220\u9664remove"},{"level":2,"title":"\u516D\u3001\u5176\u4ED6\u65B9\u6CD5","slug":"\u516D\u3001\u5176\u4ED6\u65B9\u6CD5"},{"level":2,"title":"\u4E03\u3001\u6570\u636E\u5E93\u5907\u4EFD","slug":"\u4E03\u3001\u6570\u636E\u5E93\u5907\u4EFD"},{"level":3,"title":"\u5BFC\u51FAmongodump\u5907\u4EFD","slug":"\u5BFC\u51FAmongodump\u5907\u4EFD"},{"level":3,"title":"\u8FD8\u539F\u6570\u636E\u5E93","slug":"\u8FD8\u539F\u6570\u636E\u5E93"},{"level":3,"title":"\u5BFC\u51FA\u8868","slug":"\u5BFC\u51FA\u8868"},{"level":3,"title":"\u5BFC\u5165\u8868","slug":"\u5BFC\u5165\u8868"},{"level":2,"title":"\u516D\u3001\u5176\u4ED6\u6570\u636E\u5E93","slug":"\u516D\u3001\u5176\u4ED6\u6570\u636E\u5E93"}],"relativePath":"src/frontend/node/node-08 mongodb.md","lastUpdated":1615699077000}',p={},s=a(`<h1 id="node-08-mongodb"><a class="header-anchor" href="#node-08-mongodb" aria-hidden="true">#</a> node-08 mongodb</h1><h2 id="\u4E00\u3001mongodb"><a class="header-anchor" href="#\u4E00\u3001mongodb" aria-hidden="true">#</a> \u4E00\u3001mongodb</h2><ol><li><p>\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u6570\u636E\u5E93</p><p>\u628A\u6570\u636E\u8FDB\u884C\u6301\u4E45\u5316\uFF0C\u4E4B\u524D\u5B66\u4E60\u7684\u6587\u4EF6\u6570\u636E\u6301\u4E45\u5316\u4E0D\u5B89\u5168\uFF0C\u800C\u4E14\u64CD\u4F5C\u6570\u636E\u4E0D\u65B9\u4FBF\uFF1B</p></li></ol><h3 id="mongodb\u7B80\u4ECB"><a class="header-anchor" href="#mongodb\u7B80\u4ECB" aria-hidden="true">#</a> Mongodb\u7B80\u4ECB</h3><ul><li>MongoDB\u662F\u4E00\u4E2ANoSQL\u7684\u6570\u636E\u5E93\uFF1B</li><li>MongoDB\u662F\u4E00\u6B3E\u6587\u6863\u578B\u6570\u636E\u5E93\uFF1B</li><li>\u6570\u636E\u5E93\u6307\u7684\u5C31\u662F\u4E00\u4E2A\u5B58\u50A8\u6570\u636E\u7684\u4ED3\u5E93\uFF0C\u6570\u636E\u5E93\u53EF\u4EE5\u4F7F\u6211\u4EEC\u5B8C\u6210\u5BF9\u6570\u636E\u7684\u6301\u4E45\u5316\u7684\u64CD\u4F5C</li><li>MongoDB\u6570\u636E\u5E93\u4E2D\u5B58\u50A8\u7684\u6570\u636E\u7684\u57FA\u672C\u5355\u4F4D\u5C31\u662F\u6587\u6863\uFF0C\u6240\u8C13\u6587\u6863\u5176\u5B9E\u5C31\u662F\u4E00\u4E2Ajson\uFF1B</li><li>MongoDB\u4E2D\u7684\u201Cjson\u201D \u6211\u4EEC\u79F0\u4E3ABSON\uFF0C\u6BD4\u666E\u901A\u7684JSON\u7684\u529F\u80FD\u8981\u66F4\u52A0\u7684\u5F3A\u5927\uFF1B</li><li>MongoDB\u6570\u636E\u5E93\u4F7F\u7528\u7684\u662FJavaScript\u8FDB\u884C\u64CD\u4F5C\u7684\uFF0C\u5176\u5B9E\u5C31\u662F\u63D0\u4F9B\u4E86\u4E00\u4E2Ajavascript\u7684\u8FD0\u884C\u73AF\u5883\uFF0C\u53EF\u4EE5\u4F7F\u7528javascript\u7684\u4EE3\u7801\uFF0C\u5728MongoDB\u542B\u6709\u4E00\u4E2A\u5BF9ES\u6807\u51C6\u5B9E\u73B0\u7684\u5F15\u64CE\uFF0C\u5728MongoDB\u4E2D\u6240\u6709ES\u4E2D\u7684\u8BED\u6CD5\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528\uFF1B</li><li>nodejs\u548Cmongodb\u6570\u636E\u5E93\u662F\u6807\u914D\uFF1B</li></ul><h3 id="\u4F20\u7EDF\u7684\u6570\u636E\u5E93"><a class="header-anchor" href="#\u4F20\u7EDF\u7684\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4F20\u7EDF\u7684\u6570\u636E\u5E93</h3><p>\u5148\u5B89\u88C5\u6570\u636E\u5E93\u8F6F\u4EF6---\u6570\u636E\u5E93--\u6570\u636E\u8868--\u6570\u636E\u8868\u624D\u662F\u771F\u6B63\u7684\u6570\u636E\uFF08\u8BB0\u5F55\uFF09</p><p>Nosql\u5F53\u4E2D</p><p>\u5148\u5B89\u88C5\u6570\u636E\u5E93\u8F6F\u4EF6--\u6570\u636E\u5E93--\u96C6\u5408--\u6587\u6863</p><p>\u6BD4\u5982\u6DD8\u5B9D\u7528\u7684Mysql\u6570\u636E\u5E93</p><p>\u5B89\u88C5mysql--taobao--user|product.....\u5C0F\u660E\uFF08\u4EBA|\u5BF9\u8C61|\u6587\u6863|\u7EAA\u5F55\uFF09\uFF1B</p><h3 id="\u5B89\u88C5mongodb"><a class="header-anchor" href="#\u5B89\u88C5mongodb" aria-hidden="true">#</a> \u5B89\u88C5MongoDB</h3><p>\u5B98\u7F51\uFF1A<a href="https://www.mongodb.com" target="_blank" rel="noopener noreferrer">https://www.mongodb.com</a></p><p>\u4E0B\u8F7D\uFF1A<a href="https://www.mongodb.com/download-center/community" target="_blank" rel="noopener noreferrer">https://www.mongodb.com/download-center/community</a></p><p>\u5B89\u88C5\u65F6\uFF0C\u6709\u4E00\u4E2A\u4E1C\u897F\u4E0D\u80FD\u52FE\u9009\uFF0C\u5426\u5219\u4F1A\u4E00\u76F4\u5361\u4F4F\uFF1B</p><p><img src="https://notecdn.heny.vip/images/node-08_mongodb-01.png" alt="image"></p><p>\u5B89\u88C5\u4E4B\u540E\u6DFB\u52A0\u73AF\u5883\uFF1B</p><p>\u56FE\u5F62\u5316\u5DE5\u5177\uFF1AStudio 3T</p><p>\u65E0\u9650\u8BD5\u7528\uFF1A <a href="https://www.lanzous.com/i4jycdc" target="_blank" rel="noopener noreferrer">https://www.lanzous.com/i4jycdc</a></p><h3 id="\u4F7F\u7528mongodb\u6570\u636E\u5E93"><a class="header-anchor" href="#\u4F7F\u7528mongodb\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4F7F\u7528MongoDB\u6570\u636E\u5E93</h3><ol><li><p>\u542F\u52A8\u6570\u636E\u5E93\u670D\u52A1</p></li><li><p>\u5728C\u76D8\u6839\u76EE\u5F55\u4E0B\u521B\u5EFAdata\u6587\u4EF6\u5939\uFF0C\u5728data\u4E0B\u521B\u5EFAdb\u6587\u4EF6\u5939</p></li><li><p>\u8FDB\u5165\u5B89\u88C5\u7684mongoDB\u76EE\u5F55\uFF0C\u5728bin\u6587\u4EF6\u5939\u4E0B\u6253\u5F00cmd\uFF0C\u8F93\u5165\uFF1A<code>mongod</code></p><p>\u6CE8\uFF1A\u9ED8\u8BA4\u4FDD\u5B58\u7684\u6570\u636E\u76EE\u5F55\u5728c:/data/db\u6587\u4EF6\uFF1B</p><p>\u9ED8\u8BA4\u547D\u4EE4\u7AEF\u53E3\u662F27017\uFF1B</p><p>\u5F00\u542F\u4E4B\u540E\u547D\u4EE4\u7A97\u53E3\u4E0D\u80FD\u5173\u95ED\uFF1B\u4E4B\u540E\u518D\u5F00\u4E00\u4E2Acmd\u7A97\u53E3\uFF0C\u8F93\u5165mongo\u5373\u53EF\u4F7F\u7528\u4E86</p></li><li><p>\u6307\u5B9A\u8DEF\u5F84\u6216\u7AEF\u53E3\u7684\u542F\u52A8\uFF1A</p><p><code>mongod --dbpath \u6570\u636E\u5E93\u8DEF\u5F84[--port\u7AEF\u53E3\u53F7]</code></p><p>\u8BED\u6CD5\uFF1Amongod --dbpath=c:/data/db</p><p>\u4E00\u822C\u4E0D\u9700\u8981\u6307\u5B9A\u8DEF\u5F84\uFF1B</p></li></ol><h3 id="\u6570\u636E\u5E93\u7684\u6982\u5FF5"><a class="header-anchor" href="#\u6570\u636E\u5E93\u7684\u6982\u5FF5" aria-hidden="true">#</a> \u6570\u636E\u5E93\u7684\u6982\u5FF5</h3><p><strong>\u6570\u636E\u5E93\uFF08database\uFF09</strong>\uFF1A</p><p>---\u5728MongoDB\u4E2D\uFF0C\u6570\u636E\u5E93\u548C\u96C6\u5408\u4F1A\u5728\u521B\u5EFA\u6587\u6863\u65F6\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF1B</p><p><strong>\u96C6\u5408\uFF08collections\uFF09</strong>\uFF1A</p><p>---\u96C6\u5408\u5C31\u662F\u4E00\u7EC4\u6587\u6863\uFF0C\u4E5F\u5C31\u662F\u96C6\u5408\u662F\u7528\u6765\u5B58\u653E\u6587\u6863\u7684\uFF1B</p><p>---\u96C6\u5408\u4E2D\u5B58\u50A8\u7684\u6587\u6863\u53EF\u4EE5\u662F\u5404\u79CD\u5404\u6837\u7684\uFF0C\u6CA1\u6709\u683C\u5F0F\u8981\u6C42</p><p><strong>\u6587\u6863\uFF08document\uFF09\u5BF9\u8C61</strong>\uFF1B</p><p>---\u7C7B\u4F3C\u4E8EJS\u4E2D\u7684\u5BF9\u8C61\uFF0C\u5728MongoDB\u4E2D\u6BCF\u4E00\u6761\u6570\u636E\u90FD\u662F\u4E00\u4E2A\u6587\u6863\uFF1B</p><p>\u591A\u4E2A\u6587\u6863\u7EC4\u6210\u96C6\u5408\uFF0C\u591A\u4E2A\u96C6\u5408\u7EC4\u6210\u6570\u636E\u5E93\uFF1B</p><h2 id="\u4E00\u3001\u6570\u636E\u5E93\u57FA\u672C\u64CD\u4F5C"><a class="header-anchor" href="#\u4E00\u3001\u6570\u636E\u5E93\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u4E00\u3001\u6570\u636E\u5E93\u57FA\u672C\u64CD\u4F5C</h2><ol><li><p>\u8FDE\u63A5<code>mongodb</code>\uFF1A</p><p>\u542F\u52A8mongodb\uFF1Amongod\uFF1B\u542F\u52A8\u4E4B\u540E\u4E0D\u80FD\u5173\u95ED</p><p>\u8FDE\u63A5mongodb\uFF1Amongo\uFF1B</p></li><li><p>mongodb\u57FA\u672C\u8BED\u6CD5\uFF1A</p><p><code>show dbs</code>\uFF1A\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93\uFF1B</p><p><code>use demo</code>\uFF1A\u4F7F\u7528\u6570\u636E\u5E93\uFF0C\u6CA1\u6709\u5219\u521B\u5EFA</p><p><code>db</code>\uFF1A\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93\uFF1B</p><p><code>show collections</code>\uFF1A\u663E\u793A\u5F53\u524D\u6570\u636E\u5E93\u4E2D\u7684\u96C6\u5408</p></li></ol><h2 id="\u4E8C\u3001\u63D2\u5165db\u6570\u636E"><a class="header-anchor" href="#\u4E8C\u3001\u63D2\u5165db\u6570\u636E" aria-hidden="true">#</a> \u4E8C\u3001\u63D2\u5165db\u6570\u636E</h2><p><code>db.collections.insert()</code></p><p>\u62EC\u53F7\u53EF\u4EE5\u5199\u6570\u7EC4\u3001\u5BF9\u8C61\uFF1B</p><p>\u5982\u679C\u6DFB\u52A0\u7684\u5BF9\u8C61\u91CC\u7684\u952E\u540D\u5728\u524D\u9762\u6CA1\u6709\uFF0C\u4E5F\u4E0D\u5F71\u54CD\uFF1B</p><p>\u793A\u4F8B\uFF1A<code>db.shops.insert([{gid:1,gname:&#39;\u5F20\u4E09&#39;},{gid:2,gname:&#39;\u674E\u56DB&#39;}])</code></p><ul><li><p><code>insert()</code>\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E2A\u6216\u591A\u4E2A\u6587\u6863\uFF0C\u53EF\u4EE5\u662F\u4E00\u4E2A\u5BF9\u8C61\u6216\u4E00\u4E2A\u6570\u7EC4\uFF1B</p></li><li><p>\u53EF\u4EE5\u662F\u5BF9\u8C61\u6216\u6570\u7EC4\u4E2D\u7684\u5BF9\u8C61\uFF1B</p></li><li><p>\u6DFB\u52A0\u65F6\u5982\u679C\u96C6\u5408\u6216\u6570\u636E\u5E93\u4E0D\u5B58\u5728\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA\uFF1B</p></li><li><p>\u63D2\u5165\u7684\u6587\u6863\u5BF9\u8C61\u4F1A\u9ED8\u8BA4\u6DFB\u52A0_id\u5C5E\u6027\uFF0C\u662F\u6587\u6863\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u4E0D\u540C\u4E8E\u5176\u5B83\u6570\u636E\u5E93\uFF1B</p></li><li><p>id\u751F\u6210\u7684\u539F\u7406\uFF1A\u673A\u5668\u7801+\u65F6\u95F4\u6233</p></li></ul><h2 id="\u4E09\u3001\u67E5\u627Efind"><a class="header-anchor" href="#\u4E09\u3001\u67E5\u627Efind" aria-hidden="true">#</a> \u4E09\u3001\u67E5\u627Efind()</h2><p><code>db.collections.find({\u67E5\u8BE2\u6761\u4EF6},{\u8981\u663E\u793A\u7684\u5C5E\u6027[1:\u663E\u793A,0:\u9690\u85CF]})</code></p><p><code>mongodb</code>\u5E95\u5C42\u4E0D\u4F1A\u9690\u5F0F\u8F6C\u6362\u6570\u636E\u7C7B\u578B\uFF0C\u5982\u679C\u6570\u5B57\u52A0\u5F15\u53F7\uFF0C\u5219\u67E5\u8BE2\u65F6\u4E5F\u5FC5\u987B\u52A0\u5F15\u53F7\uFF1B</p><p><code>mongodb</code>\u5C31\u662F\u63D0\u4F9B\u4E86\u4E00\u4E2AJavaScript\u8FD0\u884C\u73AF\u5883</p><ul><li>\u4E0D\u586B\u5199\u53C2\u6570\u65F6\uFF0C\u9ED8\u8BA4\u663E\u793A\u5168\u90E8\u7684\u6570\u636E(\u8868)\uFF1B</li></ul><p><code>db.user.find({gname:&#39;\u5F20\u4E09&#39;},{gid:1,_id:0})</code>; \u663E\u793Agname\u662F\u5F20\u4E09\u7684\uFF0C\u53EA\u663E\u793Agid\uFF1B</p><p><code>ObjectId()</code>\uFF1B\u662Fmongodb\u65B0\u589E\u7684\u4E00\u79CD\u7C7B\u578B\uFF1B\u76F4\u63A5\u8FD0\u884C\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684id\uFF1B</p><p>\u5982\u679C\u662F\u4F7F\u7528<code>_id</code>\u67E5\u8BE2\uFF0C\u9700\u8981\u4F7F\u7528<code>_id:ObjectId(&#39;id&#39;)</code>\uFF1B</p><h3 id="\u67E5\u8BE2\u7684\u5173\u952E\u8BCD"><a class="header-anchor" href="#\u67E5\u8BE2\u7684\u5173\u952E\u8BCD" aria-hidden="true">#</a> \u67E5\u8BE2\u7684\u5173\u952E\u8BCD</h3><p><code>$lt</code>(\u5C0F\u4E8E)\u3001<code>$lte</code>(\u5C0F\u4E8E\u7B49\u4E8E)\u3001<code>$gt</code>\u3001<code>$gte</code>\u3001<code>$ne</code>(\u4E0D\u7B49\u4E8E)\u3001<code>$in</code>(\u5305\u542B)\u3001<code>$nin</code>(not)\u3001<code>$or</code>(\u6216)</p><h3 id="\u4F7F\u7528\u67E5\u8BE2\u5173\u952E\u8BCD"><a class="header-anchor" href="#\u4F7F\u7528\u67E5\u8BE2\u5173\u952E\u8BCD" aria-hidden="true">#</a> \u4F7F\u7528\u67E5\u8BE2\u5173\u952E\u8BCD</h3><ul><li><p>\u5C0F\u4E8E\uFF1A<code>db.collections.find({age:{$lt:8}})</code></p></li><li><p>\u5305\u542B\uFF1A<code>db.collections.find({age:{$in:[18,20]}})</code> $in\u5FC5\u987B\u6709\u4E2D\u62EC\u53F7;</p></li><li><p>\u6216\u8005\uFF1A<code>db.collections.find({$or:[{age:18},{age:20}]})</code> \u7B49\u4EF7\u4E8E$in;</p></li><li><p>\u5E76\u4E14\uFF1A<code>db.collections.find({name:&#39;\u5F20\u4E09&#39;,age:18})</code>\uFF1B</p></li><li><p>\u67E5\u8BE2\u7C7B\u522B\u4E3A11\u7684\u5546\u54C1\u4EF7\u683C\u5927\u4E8E4000\u6216\u5546\u54C1\u540D\u79F0\u4E3A\u5C0F\u7C73\u624B\u673A\u7684\u5546\u54C1\u4FE1\u606F</p><p><code>db.goods.find({cateid:11,$or:[{price:{$gt:4000}},{gname:&#39;\u5C0F\u7C73\u624B\u673A&#39;}]})</code></p><p>\u67E5\u8BE2\u51FA\u6765\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u53EF\u4EE5\u52A0[0]\u663E\u793A\u7B2C\u4E00\u6761\u4FE1\u606F\uFF1B</p></li></ul><h3 id="\u9650\u5236\u6761\u6570limit"><a class="header-anchor" href="#\u9650\u5236\u6761\u6570limit" aria-hidden="true">#</a> \u9650\u5236\u6761\u6570limit</h3><p><code>db.goods.find().limit(5)</code></p><h3 id="\u8DF3\u8FC7skip"><a class="header-anchor" href="#\u8DF3\u8FC7skip" aria-hidden="true">#</a> \u8DF3\u8FC7skip</h3><p><code>db.goods.find().limit(5).skip(5)</code></p><p>\u5206\u9875\u89C4\u5219\uFF1Askip\u4E2D\u7684\u503C=(\u9875\u6570-1)*\u6761\u6570\uFF1B</p><h3 id="\u6392\u5E8Fsort"><a class="header-anchor" href="#\u6392\u5E8Fsort" aria-hidden="true">#</a> \u6392\u5E8Fsort</h3><p>\u6709\u4E24\u4E2A\u503C\uFF1A1\uFF1A\u5347\u5E8F\uFF0C-1\uFF1A\u5012\u5E8F</p><p>sort\u503C\u53EF\u4EE5\u662F\u591A\u4E2A\u6761\u4EF6\uFF0C\u4E0B\u9762\u793A\u4F8B\u5F53\u4EF7\u683C\u76F8\u5F53\u5219\u6309\u7167gid\u6392\u5E8F\uFF1B</p><p><code>db.goods.find({cateId:{$in:[11,12]}}).sort({price:-1,gid:1})</code></p><h3 id="\u8FD4\u56DE\u8BB0\u5F55\u6761\u6570count"><a class="header-anchor" href="#\u8FD4\u56DE\u8BB0\u5F55\u6761\u6570count" aria-hidden="true">#</a> \u8FD4\u56DE\u8BB0\u5F55\u6761\u6570count</h3><p><code>db.goods.find().count()</code></p><h2 id="\u56DB\u3001\u4FEE\u6539update"><a class="header-anchor" href="#\u56DB\u3001\u4FEE\u6539update" aria-hidden="true">#</a> \u56DB\u3001\u4FEE\u6539update()</h2><p><code>db.goods.update({find\u6761\u4EF6},{\u5BF9\u8C61})</code></p><p>\u5982\u679C\u76F4\u63A5\u8FD9\u6837\u5199\uFF0C\u4F1A\u628A\u6EE1\u8DB3\u6761\u4EF6\u7684\u8BB0\u5F55\u4FEE\u6539\u6210\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF1B</p><p><strong>\u4FEE\u6539$set</strong></p><p><code>db.goods.update({},{$set:{}},{multi:true})</code>\uFF1B</p><p>\u5982\u679C\u4FEE\u6539\u591A\u4E2A\u9700\u8981\u52A0<code>{multi:true}</code>\uFF1B</p><p><strong>\u79FB\u9664$unset</strong></p><p><code>db.goods.update({},{$unset:{}})</code></p><p>\u5C5E\u6027\u503C\u4E0D\u80FD\u7701\u7565\uFF1B</p><p>\u6CE8\u610F\uFF1Aupdate()\u9ED8\u8BA4\u53EA\u4FEE\u6539\u6EE1\u8DB3\u6761\u4EF6\u7684\u4E00\u6761\u8BB0\u5F55\uFF0C\u4FEE\u6539\u591A\u4E2A\u9700\u8981\u52A0<code>{multi:true}</code>;</p><p><code>updateOne()</code>\uFF1B\u53EA\u4FEE\u6539\u6EE1\u8DB3\u6761\u4EF6\u7684\u4E00\u6761\u8BB0\u5F55\uFF1B</p><p><code>updateMany()</code>\uFF1B\u66F4\u65B0\u591A\u4E2A\uFF1B</p><p>\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>{multi:true}</code>\uFF1B</p><h2 id="\u4E94\u3001\u5220\u9664remove"><a class="header-anchor" href="#\u4E94\u3001\u5220\u9664remove" aria-hidden="true">#</a> \u4E94\u3001\u5220\u9664remove()</h2><p><strong>\u7269\u7406\u5220\u9664</strong></p><p><code>db.&lt;collection&gt;.remove({find\u6761\u4EF6},\u662F\u5426\u5220\u9664\u4E00\u6761)</code>\uFF1B\u9ED8\u8BA4\u5220\u9664\u591A\u6761\uFF1B</p><p>\u76F4\u63A5\u4F7F\u7528<code>remove()</code>\u53EB\u7269\u7406\u5220\u9664\uFF0C\u4E0D\u5B89\u5168</p><p><strong>\u903B\u8F91\u5220\u9664</strong></p><p>\u5F00\u53D1\u4E2D\u4F7F\u7528\u7684\u662F\u903B\u8F91\u5220\u9664\uFF0C\u4E00\u822C\u90FD\u662F\u7528\u903B\u8F91\u5220\u9664\u7684\uFF1B</p><p>\u903B\u8F91\u5220\u9664\u9700\u8981\u5B9A\u4E49\u4E00\u4E2Aid\uFF0C\u5E76\u81EA\u5B9A\u4E49\u503C\uFF0C\u4F8B\uFF1A1\uFF1A\u5220\u9664\uFF0C0\uFF1A\u4FEE\u6539\uFF1B</p><p>\u9700\u8981\u5220\u9664\u7684\u65F6\u5019\u4F7F\u7528<code>update</code>\u4FEE\u6539\u5B9A\u4E49\u7684id\u503C\uFF1B\u5B9E\u5728\u4E0D\u9700\u8981\u53EF\u4EE5\u4F7F\u7528<code>remove</code>\u5220\u9664\uFF1B</p><h2 id="\u516D\u3001\u5176\u4ED6\u65B9\u6CD5"><a class="header-anchor" href="#\u516D\u3001\u5176\u4ED6\u65B9\u6CD5" aria-hidden="true">#</a> \u516D\u3001\u5176\u4ED6\u65B9\u6CD5</h2><ol><li><code>db.&lt;collection&gt;.drop()</code>\uFF1B\u5220\u9664\u96C6\u5408(\u8868)\uFF1B</li></ol><p><code>remove</code>\u53EA\u4F1A\u6E05\u7A7A\u96C6\u5408\u91CC\u9762\u7684\u6570\u636E\uFF0C\u4E0D\u4F1A\u5220\u9664\u96C6\u5408\uFF1B</p><ol start="2"><li>\u4F18\u5316mongodb\uFF1A</li></ol><p>\u5FAA\u73AF\u6DFB\u52A0</p><div class="language-js"><pre><code><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">30000</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    db<span class="token punctuation">.</span>goods<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u4F18\u5316</p><div class="language-js"><pre><code><span class="token keyword">let</span> arr<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> x<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>x<span class="token operator">&lt;</span><span class="token number">30000</span><span class="token punctuation">;</span>x<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
db<span class="token punctuation">.</span>goods<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u4E03\u3001\u6570\u636E\u5E93\u5907\u4EFD"><a class="header-anchor" href="#\u4E03\u3001\u6570\u636E\u5E93\u5907\u4EFD" aria-hidden="true">#</a> \u4E03\u3001\u6570\u636E\u5E93\u5907\u4EFD</h2><p>\u6CE8\u610F\uFF1A\u4F7F\u7528\u547D\u4EE4\u5BFC\u51FA\u5FC5\u987B\u9000\u51FAmongo\u73AF\u5883</p><h3 id="\u5BFC\u51FAmongodump\u5907\u4EFD"><a class="header-anchor" href="#\u5BFC\u51FAmongodump\u5907\u4EFD" aria-hidden="true">#</a> \u5BFC\u51FAmongodump\u5907\u4EFD</h3><p><code>mongodump -d \u6570\u636E\u5E93 -o \u6587\u4EF6\u8DEF\u5F84</code>\uFF1B</p><p>\uFF082\uFF09\u5E38\u7528\uFF1A<code>mongodump -d myblog -o c:/data/dbs</code></p><p>\uFF083\uFF09-d\u7701\u7565\u5BFC\u51FA\u6240\u6709\u6570\u636E\u5E93</p><h3 id="\u8FD8\u539F\u6570\u636E\u5E93"><a class="header-anchor" href="#\u8FD8\u539F\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FD8\u539F\u6570\u636E\u5E93</h3><p><code>mongorestore -d \u6570\u636E\u5E93 --drop \u6587\u4EF6\u8DEF\u5F84</code>\uFF1B</p><p>--drop\uFF1A\u5148\u5220\u9664\u6240\u6709\u7684\u8BB0\u5F55\uFF0C\u7136\u540E\u6062\u590D\uFF1B</p><p>\uFF082\uFF09\u5E38\u7528\uFF1A<code>mongorestore c:/data/dbs</code>\uFF1B\u8FD8\u539F\u6240\u6709\uFF1B</p><p>dump\u548C\u8FD8\u539F\u683C\u5F0F\u662Fjson\u548Cbson\uFF0C\u65E0\u6CD5\u6307\u5B9A\u8868</p><h3 id="\u5BFC\u51FA\u8868"><a class="header-anchor" href="#\u5BFC\u51FA\u8868" aria-hidden="true">#</a> \u5BFC\u51FA\u8868</h3><p>mongoexport\u5BFC\u51FA\u8868\uFF0C\u6216\u8005\u8868\u4E2D\u90E8\u5206\u5B57\u6BB5\uFF1B</p><p><code>mongoexport -d \u6570\u636E\u5E93 -c \u8868\u540D -f \u5B57\u6BB5 -q \u6761\u4EF6\u5BFC\u51FA --csv -o \u6587\u4EF6\u540D</code></p><p>\u793A\u4F8B\uFF1A<code>mongoexport -d demo -c users --csv -f name,age,city -q &quot;{uid:{$gt:1}}&quot; -o c:data/demo.csv</code>;</p><p>--csv \u5BFC\u51FA\u7684\u6587\u4EF6\u683C\u5F0F\u4E3Acsv\u7684\uFF0C\u5927\u90E8\u5206\u5173\u7CFB\u578B\u6570\u636E\u5E93\u90FD\u662F\u652F\u6301csv\u7684\uFF1B\uFF08\u6BD4\u8F83\u6709\u7528\uFF09</p><p>-q \u9700\u8981\u662F\u53CC\u5F15\u53F7\uFF1B</p><p>\uFF082\uFF09\u5E38\u7528\uFF1A<code>mongoexport -d demo -c users -o c:/data/mydemo.dat</code>\uFF1B\u5BFC\u51FA\u6574\u5F20\u8868\uFF1B</p><p>\u683C\u5F0F\u53EF\u4EE5\u662Fdat\u3001csv\u3001json\u90FD\u884C</p><h3 id="\u5BFC\u5165\u8868"><a class="header-anchor" href="#\u5BFC\u5165\u8868" aria-hidden="true">#</a> \u5BFC\u5165\u8868</h3><ul><li>\u8FD8\u539F\u975Ecsv\u6587\u4EF6\u6574\u5F20\u8868\uFF1B</li></ul><div class="language-bash"><pre><code>mogoimport -d \u6570\u636E\u5E93 -c \u8868\u540D --upsert --drop\u6587\u4EF6\u540D\uFF1B
<span class="token comment"># \u793A\u4F8B\uFF1A</span>
mongoimport -d demo -c <span class="token function">users</span> --upsert c:/data/users.dat<span class="token punctuation">;</span>
</code></pre></div><p>--upsert\uFF1A\u63D2\u5165\u6216\u8005\u66F4\u65B0\u73B0\u6709\u7684\u6570\u636E\uFF1B</p><ul><li>\u8FD8\u539F\u90E8\u5206\u5B57\u6BB5\u7684\u5BFC\u51FA\u6587\u4EF6</li></ul><div class="language-bash"><pre><code>mogoimport -d \u6570\u636E\u5E93 -c \u8868\u540D --upsertFields \u5B57\u6BB5 --drop \u6587\u4EF6\u540D\uFF1B
<span class="token comment"># \u793A\u4F8B\uFF1A</span>
mongoimport -d demo -c <span class="token function">users</span> --upsertFields uid,name /data/users.json<span class="token punctuation">;</span>
</code></pre></div><p><code>--upsertFields</code>\u548C<code>--upsert</code>\u4E00\u6837\uFF1B</p><ul><li>\u8FD8\u539F\u5BFC\u51FA\u7684csv\u6587\u4EF6</li></ul><div class="language-bash"><pre><code>mongoimport -d \u6570\u636E\u5E93 -c \u8868\u540D --type \u7C7B\u578B --headerline --upsert --drop \u6587\u4EF6\u540D\uFF1B
<span class="token comment"># \u793A\u4F8B\uFF1A</span>
mongoimport -d demo -c <span class="token function">users</span> --type csv --headerline --file /data/users.csv<span class="token punctuation">;</span>
</code></pre></div><h2 id="\u516D\u3001\u5176\u4ED6\u6570\u636E\u5E93"><a class="header-anchor" href="#\u516D\u3001\u5176\u4ED6\u6570\u636E\u5E93" aria-hidden="true">#</a> \u516D\u3001\u5176\u4ED6\u6570\u636E\u5E93</h2><ol><li><p>\u5C06\u6570\u636E\u653E\u5728json\u6587\u4EF6\u7684\u7F3A\u9677\uFF1A\u68C0\u7D22\u3001\u67E5\u8BE2\u3001\u66F4\u65B0\u3001\u5220\u9664\u6BD4\u8F83\u9EBB\u70E6\uFF1B</p></li><li><p>\u6570\u636E\u5E93\u5206\u4E3A\u4E24\u7C7B\uFF1A</p><p>\uFF081\uFF09sql\u6570\u636E\u5E93\uFF08\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF09\uFF1ASQLserver\u3001Mysql\u3001Orcale\u3001Mongodb\uFF1B</p><p>\uFF082\uFF09NoSql\u6570\u636E\u5E93\uFF08\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF09\uFF1A\u4E0D\u4EC5\u4EC5\u662Fsql\u3002Mongodb\uFF1B</p></li><li><p>\u6570\u636E\u5E93\u4E3B\u8981\u5206\u6210\u4E24\u79CD</p><p>\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF1A\u5173\u7CFB\u6570\u636E\u5E93\u4E2D\u5168\u90E8\u662F\u8868\uFF1B</p><p>\u6570\u636E\u5E93&lt;\u8868&lt;\u8BB0\u5F55\uFF1A\u4F20\u7EDF\u7684\u6570\u636E\u5E93\u5B58\u653E\u7684\u662F\u8868\uFF0C\u8868\u91CC\u7684\u6570\u636E\u53EB\u8BB0\u5F55(\u4FE1\u606F|\u6570\u636E)\uFF1B</p><p>\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93\uFF1ANosql \u662F\u4EE5json\u7684\u952E\u503C\u5BF9\u5B58\u50A8\u6570\u636E\uFF0C\u5B58\u653E\u7684\u662F\u96C6\u5408\uFF0C\u96C6\u5408\u91CC\u9762\u7684\u662F\u5BF9\u8C61\uFF1B</p></li><li><p>\u5176\u4ED6sql\u8BED\u8A00\u7528\u6CD5\uFF08\u4E86\u89E3\uFF09\uFF1A</p><ul><li><p>\u67E5\u8BE2\uFF1Aselect * from \u6587\u4EF6\u540D where uname=&#39;admin&#39;\uFF1B</p></li><li><p>\u4FEE\u6539\uFF1Aupdate \u6587\u4EF6\u540D set pwd=&#39;33&#39;,tel=&#39;123&#39; where uname=&#39;admin&#39;\uFF1B</p></li><li><p>\u5220\u9664\uFF1Adelete from \u6587\u4EF6\u540D where uname=&#39;admin&#39;\uFF1B</p></li><li><p>\u6DFB\u52A0\uFF1Ainsert into \u6587\u4EF6\u540D (uname,upwd)values(&#39;zs&#39;,&#39;123&#39;)\uFF1B</p></li></ul></li><li><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF1A\u4E00\u4E2A\u9879\u76EE\u5BF9\u5E94\u4E00\u4E2A\u6570\u636E\u5E93\uFF1B</p><p>\u4E00\u4E2A\u6570\u636E\u5E93\u5C31\u662F\u4E00\u4E2A\u6587\u4EF6\u5939\uFF0C</p><p>\u65E0\u8BBA\u4EC0\u4E48\u6570\u636E\u5E93\u90FD\u8981\u5B89\u88C5\u5728\u7535\u8111\u4E0A\uFF0C\u5177\u4F53\u7684\u6570\u636E\u5B58\u50A8\u5728\u6570\u636E\u5E93\u6587\u4EF6\u4E2D\uFF0C\u5176\u5B9E\u4E5F\u662F\u6587\u4EF6\uFF0C\u6570\u636E\u5E93\u9700\u8981\u7279\u6B8A\u5F62\u5F0F\u6253\u5F00\uFF1B</p></li><li><p>mongodb\uFF1A\u975E\u5173\u7CFB\u578B\u6570\u636E\u5E93</p><p>\u6570\u636E\u5E93&lt;\u96C6\u5408&lt;\u5BF9\u8C61(\u6587\u6863|\u8BB0\u5F55)\uFF1B</p></li></ol>`,120),d=[s];function t(c,l,i,r,u,h){return n(),o("div",null,d)}var b=e(p,[["render",t]]);export{m as __pageData,b as default};
