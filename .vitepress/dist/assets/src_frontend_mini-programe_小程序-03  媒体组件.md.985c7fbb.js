import{_ as l,c as a,o as i,d as e}from"./app.8aafc8a7.js";const m='{"title":"\u5C0F\u7A0B\u5E8F-03  \u5A92\u4F53\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001camera \u76F8\u673A\u7EC4\u4EF6","slug":"\u4E00\u3001camera-\u76F8\u673A\u7EC4\u4EF6"},{"level":2,"title":"\u4E8C\u3001audio \u97F3\u9891\u7EC4\u4EF6","slug":"\u4E8C\u3001audio-\u97F3\u9891\u7EC4\u4EF6"},{"level":2,"title":"\u4E09\u3001video \u89C6\u9891\u7EC4\u4EF6","slug":"\u4E09\u3001video-\u89C6\u9891\u7EC4\u4EF6"},{"level":2,"title":"\u56DB\u3001navigator \u9875\u9762\u94FE\u63A5","slug":"\u56DB\u3001navigator-\u9875\u9762\u94FE\u63A5"},{"level":2,"title":"\u4E94\u3001map  \u5730\u56FE\u7EC4\u4EF6","slug":"\u4E94\u3001map-\u5730\u56FE\u7EC4\u4EF6"}],"relativePath":"src/frontend/mini-programe/\u5C0F\u7A0B\u5E8F-03  \u5A92\u4F53\u7EC4\u4EF6.md","lastUpdated":1615699077000}',n={},t=e(`<h1 id="\u5C0F\u7A0B\u5E8F-03-\u5A92\u4F53\u7EC4\u4EF6" tabindex="-1">\u5C0F\u7A0B\u5E8F-03 \u5A92\u4F53\u7EC4\u4EF6 <a class="header-anchor" href="#\u5C0F\u7A0B\u5E8F-03-\u5A92\u4F53\u7EC4\u4EF6" aria-hidden="true">#</a></h1><h2 id="\u4E00\u3001camera-\u76F8\u673A\u7EC4\u4EF6" tabindex="-1">\u4E00\u3001camera \u76F8\u673A\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E00\u3001camera-\u76F8\u673A\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u4F7F\u7528camera\u4F5C\u4E3A\u6807\u7B7E\u540D\u521B\u5EFA\u76F8\u673A\uFF0C\u9700\u8981\u7ED9camera\u8BBE\u7F6E\u5BBD\u9AD8\u5C5E\u6027\uFF1B</li></ol><ul><li>mode\uFF1A normal / scanCode \u76F8\u673A\u6A21\u5F0F/\u626B\u7801\u6A21\u5F0F\uFF1B</li><li>device-position\uFF1A back / front \u540E\u7F6E/\u524D\u7F6E\uFF1B</li><li>flash\uFF1A auto/on/off \u81EA\u52A8/\u6253\u5F00\u95EA\u5149\u706F/\u5173\u95ED\u95EA\u5149\u706F</li><li>binderror\uFF1A \u7528\u6237\u4E0D\u5141\u8BB8\u4F7F\u7528\u6444\u50CF\u5934\u65F6\u89E6\u53D1\u4E8B\u4EF6\uFF1B</li></ul><ol start="2"><li>wx.createCameraContext()\uFF0C\u521B\u5EFAcamera\u5B9E\u4F8B\uFF0C\u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5\uFF1A \uFF081\uFF09takePhoto()\uFF1A\u62CD\u6444\u7167\u7247\uFF0C\u5C06\u4EE5\u4E0B\u4F5C\u4E3Akey-value\u5BF9\u586B\u5199\u5C0F\u62EC\u53F7\u91CC\uFF1B</li></ol><ul><li>quality\uFF1Ahigh/normal/low \u9AD8\u8D28\u91CF/\u666E\u901A/\u4F4E \u6210\u50CF\u8D28\u91CF\uFF1B</li><li>success\uFF1A\u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\uFF1B</li><li>fail\uFF1A \u8C03\u7528\u5931\u8D25\u7684\u56DE\u8C03\uFF1B</li></ul><p>\uFF082\uFF09startRecord()\uFF1A\u5F00\u59CB\u5F55\u50CF\uFF1B \uFF083\uFF09stopRecord()\uFF1A\u7ED3\u675F\u5F55\u50CF\uFF1B</p><div class="language-js"><pre><code><span class="token keyword">const</span> ctx <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">createCameraContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ctx<span class="token punctuation">.</span><span class="token function">takePhoto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token string">&#39;high&#39;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">success</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="\u4E8C\u3001audio-\u97F3\u9891\u7EC4\u4EF6" tabindex="-1">\u4E8C\u3001audio \u97F3\u9891\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E8C\u3001audio-\u97F3\u9891\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>audio\uFF1A \u97F3\u9891\u9ED8\u8BA4\u7EC4\u4EF6\uFF08\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF0C\u5EFA\u8BAE\u76F4\u63A5\u521B\u5EFA\uFF09</li></ol><ul><li>id\uFF1A audio\u7EC4\u4EF6\u7684\u6807\u8BC6\uFF0C\u7528\u6765\u521B\u5EFAwx.createAudioContext\u65F6\u7ED1\u5B9A\uFF1B</li><li>src\uFF1A \u97F3\u9891\u8D44\u6E90\u5730\u5740\uFF1B</li><li>loop\uFF1A\u5F00\u542F\u5FAA\u73AF\u64AD\u653E\uFF1B</li><li>controls\uFF1A\u663E\u793A\u9ED8\u8BA4\u63A7\u4EF6\uFF0C\u9ED8\u8BA4\u4E3Afalse\uFF1B</li><li>poster\uFF1A\u97F3\u9891\u5C01\u9762\u5730\u5740\uFF1B</li><li>name\uFF1A \u97F3\u9891\u9ED8\u8BA4\u540D\u5B57\uFF1B</li><li>author\uFF1A \u97F3\u9891\u4F5C\u8005\uFF1B</li><li>binderror\uFF1A \u64AD\u653E\u9519\u8BEF\u65F6\u89E6\u53D1\uFF1B</li><li>bindplay\uFF1A \u5F00\u59CB\u64AD\u653E\u65F6\u89E6\u53D1\uFF1B</li><li>bindpause\uFF1A \u6682\u505C\u65F6\u89E6\u53D1\uFF1B</li><li>bindended\uFF1A \u64AD\u653E\u5230\u672A\u5C3E\u65F6\u89E6\u53D1\uFF1B</li></ul><p>\uFF081\uFF09error\u7684code\u7801\uFF1A1 \u83B7\u53D6\u8D44\u6E90\u88AB\u7528\u6237\u7981\u6B62\uFF0C2 \u7F51\u7EDC\u9519\u8BEF 3 \u89E3\u7801\u9519\u8BEF 4 \u4E0D\u5408\u9002\u8D44\u6E90</p><ol start="2"><li><p>wx.createInnerAudioContext \u521B\u5EFA\u4E00\u4E2A\u97F3\u9891\uFF1B\u521B\u5EFA\u4E4B\u540E\u53EF\u4EE5\u4F7F\u7528\u97F3\u9891\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u5C5E\u6027\u901A\u8FC7\u53D8\u91CF.src = &#39;&#39;\uFF0C\u65B9\u6CD5\uFF1A\u53D8\u91CF.play()\uFF1B</p></li><li><p>\u53EF\u7528\u5C5E\u6027</p></li></ol><ul><li>src\uFF1A \u8D44\u6E90\u5730\u5740\uFF1B</li><li>startTime\uFF1A \u5F00\u59CB\u64AD\u653E\u4F4D\u7F6E\uFF0C\u5355\u4F4Ds\uFF1B</li><li>autoplay\uFF1A \u662F\u5426\u81EA\u52A8\u64AD\u653E\uFF1B</li><li>loop\uFF1A \u662F\u5426\u5FAA\u73AF\uFF1B</li><li>duration\uFF1A\u5F53\u524D\u97F3\u9891\u7684\u957F\u5EA6\uFF0C\u5355\u4F4Ds\uFF1B\uFF08\u53EA\u8BFB\uFF09</li><li>currentTime\uFF1A \u5F53\u524D\u97F3\u9891\u7684\u64AD\u653E\u4F4D\u7F6E\uFF0C\u67096\u4F4D\u5C0F\u6570\u70B9\uFF1B\uFF08\u53EA\u8BFB\uFF09</li><li>paused\uFF1A \u5F53\u524D\u662F\u5426\u662F\u6682\u505C\u6216\u505C\u6B62\u72B6\u6001\uFF08\u53EA\u8BFB\uFF09</li><li>buffered\uFF1A \u97F3\u9891\u7F13\u51B2\u7684\u65F6\u95F4\u70B9\uFF1B</li></ul><ol start="4"><li>\u53EF\u7528\u65B9\u6CD5\uFF1A</li></ol><ul><li>play()\uFF1A \u64AD\u653E\uFF1B</li><li>pause()\uFF1A \u6682\u505C\uFF1B</li><li>stop()\uFF1A \u505C\u6B62\uFF0C\u4F1A\u4ECE\u5F00\u5934\u5F00\u59CB\u64AD\u653E\uFF1B</li><li>seek()\uFF1A\u8DF3\u8F6C\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF0C\u5355\u4F4D\u6570\u5B57\uFF1B</li><li>onPlay()\uFF1A \u76D1\u542C\u64AD\u653E\u4E8B\u4EF6\uFF1B</li><li>onError()\uFF1A \u76D1\u542C\u64AD\u653E\u9519\u8BEF\u4E8B\u4EF6\uFF1B</li><li>onWaiting()\uFF1A\u76D1\u542C\u97F3\u9891\u52A0\u8F7D\u4E8B\u4EF6\uFF1B</li><li>destory()\uFF1A\u9500\u6BC1\u5F53\u524D\u5B9E\u4F8B\uFF0C\u5728\u9875\u9762\u5378\u8F7D\u65F6\uFF0C\u5C06\u6B4C\u66F2\u5173\u95ED\uFF1B</li></ul><ol start="5"><li>wx.playBackgroundAudio({})</li></ol><p>\u4F7F\u7528\u540E\u53F0\u64AD\u653E\u5668\u64AD\u653E\u97F3\u4E50\uFF0C\u540E\u53F0\u64AD\u653E\u53EA\u80FD\u6709\u4E00\u4E2A\u97F3\u4E50\u5728\u64AD\u653E\uFF0C\u5F53\u7528\u6237\u79BB\u5F00\u5C0F\u7A0B\u5E8F\u4E4B\u540E\u6682\u505C\u64AD\u653E\uFF0C\u5F53\u4F7F\u7528\u5176\u4ED6\u5C0F\u7A0B\u5E8F\u5360\u7528\u4E86\u97F3\u4E50\u64AD\u653E\u5219\u505C\u6B62\u64AD\u653E\uFF1B</p><ul><li>dataUrl\uFF1A \u97F3\u4E50\u94FE\u63A5</li><li>title\uFF1A \u97F3\u4E50\u6807\u9898</li><li>coverImgUrl\uFF1A \u5C01\u9762URL</li><li>success\uFF1A \u63A5\u53E3\u8C03\u7528\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</li></ul><h2 id="\u4E09\u3001video-\u89C6\u9891\u7EC4\u4EF6" tabindex="-1">\u4E09\u3001video \u89C6\u9891\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E09\u3001video-\u89C6\u9891\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u53EF\u7528\u5C5E\u6027\uFF1A</li></ol><ul><li>src\uFF1A \u89C6\u9891\u5730\u5740\uFF1B</li><li>duration\uFF1A \u6307\u5B9A\u89C6\u9891\u65F6\u957F</li><li>controls\uFF1A \u663E\u793A\u9ED8\u8BA4\u63A7\u4EF6\uFF0C\u9ED8\u8BA4true\uFF1B</li><li>autoplay\uFF1A \u662F\u5426\u81EA\u52A8\u64AD\u653E\uFF1B</li><li>loop\uFF1A \u662F\u5426\u5FAA\u73AF\u64AD\u653E\uFF1B</li><li>enable-progress-gesture\uFF1A \u662F\u5426\u5F00\u542F\u63A7\u5236\u8FDB\u5EA6\u7684\u624B\u52BF\uFF1B</li><li>enable-play-gesture\uFF1A \u5F00\u542F\u53CC\u51FB\u5207\u6362\u64AD\u653E/\u6682\u505C\uFF1B</li><li>poster\uFF1A \u89C6\u9891\u5C01\u9762\u7684\u56FE\u7247\u7F51\u7EDC\u8D44\u6E90\u5730\u5740\uFF1B</li></ul><ol start="2"><li>\u53D1\u5F39\u5E55\uFF0C\u9700\u8981\u5728video\u6807\u7B7E\u4E0A\uFF0C\u8BBE\u7F6Edanmu-btn\uFF0C\u663E\u793A\u5F39\u5E55\u6309\u94AE\uFF0Cdanmu-list\uFF0C\u8D4B\u503C\u4E00\u4E2A\u521D\u59CB\u7684\u6570\u7EC4\uFF0C\u5DF2\u6709\u5F39\u5E55\uFF1B</li><li>wx.createVideoContext\uFF0C\u521B\u5EFAvideo\u5B9E\u4F8B\uFF0C\u4F7F\u7528\u63A7\u5236\u529F\u80FD\uFF0C\u9700\u8981\u7ED9video\u6807\u7B7E\u7ED1\u5B9A\u4E00\u4E2Aid\uFF0C\u64CD\u4F5C\u5BF9\u5E94\u7684video\u7EC4\u4EF6\uFF1B</li></ol><ul><li>play()\uFF1A \u64AD\u653E\u89C6\u9891\uFF1B</li><li>pause()\uFF1A \u6682\u505C\u89C6\u9891\uFF1B</li><li>stop()\uFF1A \u505C\u6B62\u89C6\u9891\uFF1B</li><li>seek()\uFF1A \u8DF3\u8F6C\u5230\u6307\u5B9A\u4F4D\u7F6E\uFF1B</li><li>sendDanmu()\uFF1A\u53D1\u9001\u5F39\u5E55\uFF1B\u5BF9\u8C61\u4E24\u4E2A\u5C5E\u6027\uFF0Ctext/color\uFF0C\u5F39\u5E55\u6587\u5B57\u4EE5\u53CA\u5F39\u5E55\u989C\u8272\uFF1B</li><li>playbackRate()\uFF1A \u8BBE\u7F6E\u500D\u901F\u64AD\u653E\uFF1B</li><li>requestFullScreen()\uFF1A \u8FDB\u5165\u5168\u5C4F\uFF1B</li><li>exitFullScreen()\uFF1A \u9000\u51FA\u5168\u5C4F\uFF1B</li></ul><h2 id="\u56DB\u3001navigator-\u9875\u9762\u94FE\u63A5" tabindex="-1">\u56DB\u3001navigator \u9875\u9762\u94FE\u63A5 <a class="header-anchor" href="#\u56DB\u3001navigator-\u9875\u9762\u94FE\u63A5" aria-hidden="true">#</a></h2><ol><li>\u76F8\u5F53\u4E8Ea\u6807\u7B7E\uFF0C\u53EF\u4EE5\u8DF3\u8F6C\u9875\u9762\uFF0C\u9ED8\u8BA4\u4E3A\u5757\u6807\u7B7E\uFF0C\u4F7F\u7528url\u6307\u5B9A\u8DF3\u8F6C\u5730\u5740\uFF1B</li><li>open-type\u5C5E\u6027\uFF1A</li></ol><ul><li>navigate\uFF1A \u5BF9\u5E94wx.navigateTo\uFF1B</li><li>redirect\uFF1A \u5BF9\u5E94wx.redirectTo\uFF1B</li><li>switchTab\uFF1A \u5BF9\u5E94wx.switchTab\uFF1B</li><li>reLaunch\uFF1A \u5BF9\u5E94wx.reLaunch\uFF1B</li><li>navigateBack\uFF1A \u5BF9\u5E94wx.navigateBack\uFF1B</li></ul><h2 id="\u4E94\u3001map-\u5730\u56FE\u7EC4\u4EF6" tabindex="-1">\u4E94\u3001map \u5730\u56FE\u7EC4\u4EF6 <a class="header-anchor" href="#\u4E94\u3001map-\u5730\u56FE\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ol><li>\u6DFB\u52A0map\u6807\u7B7E\uFF0C\u53EF\u7528\u5C5E\u6027\uFF1A</li></ol><ul><li>longitude/latitude\uFF1A \u7ECF\u5EA6/\u7EAC\u5EA6\uFF0C\u5355\u4F4Dnumber\uFF1B</li><li>scale\uFF1A \u7F29\u653E\u7EA7\u522B\uFF0C\u53D6\u503C3-20\uFF1B</li><li>show-compass\uFF1A \u663E\u793A\u6307\u5357\u9488</li><li>enable-overlooking\uFF1A \u5F00\u542F\u4FEF\u89C6</li><li>enable-zoom\uFF1A \u5F00\u542F\u7F29\u653E\uFF1B</li><li>enable-scroll\uFF1A \u5F00\u542F\u62D6\u52A8\uFF1B</li><li>enable-rotate\uFF1A \u5F00\u542F\u65CB\u8F6C\uFF1B</li><li>enable-satellite\uFF1A \u5F00\u542F\u536B\u661F\u56FE\uFF1B</li><li>enable-traffic\uFF1A \u5F00\u542F\u5B9E\u65F6\u8DEF\u51B5\uFF1B</li></ul>`,30),o=[t];function s(r,c,p,u,d,h){return i(),a("div",null,o)}var _=l(n,[["render",s]]);export{m as __pageData,_ as default};
