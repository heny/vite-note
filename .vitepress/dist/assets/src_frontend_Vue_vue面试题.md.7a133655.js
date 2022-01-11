import{_ as e,c as a,o as t,d as i}from"./app.e5c17f53.js";const V='{"title":"Vue\u9762\u8BD5\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"MVVM","slug":"mvvm"},{"level":2,"title":"Virtual DOM","slug":"virtual-dom"},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u64CD\u4F5CDOM\u6162","slug":"\u4E3A\u4EC0\u4E48\u64CD\u4F5Cdom\u6162"},{"level":3,"title":"\u63D2\u5165\u51E0\u4E07\u4E2ADOM\u5982\u4F55\u5B9E\u73B0\u9875\u9762\u4E0D\u5361\u987F","slug":"\u63D2\u5165\u51E0\u4E07\u4E2Adom\u5982\u4F55\u5B9E\u73B0\u9875\u9762\u4E0D\u5361\u987F"},{"level":3,"title":"\u4EC0\u4E48\u662FVirtual DOM","slug":"\u4EC0\u4E48\u662Fvirtual-dom"},{"level":3,"title":"Virtual DOM\u6700\u5927\u7684\u4F18\u52BF","slug":"virtual-dom\u6700\u5927\u7684\u4F18\u52BF"},{"level":3,"title":"\u8BBE\u7F6Ekey\u548C\u4E0D\u8BBE\u7F6Ekey\u7684\u533A\u522B","slug":"\u8BBE\u7F6Ekey\u548C\u4E0D\u8BBE\u7F6Ekey\u7684\u533A\u522B"},{"level":2,"title":"diff\u7B97\u6CD5","slug":"diff\u7B97\u6CD5"},{"level":2,"title":"\u8FDB\u7A0B\u7EBF\u7A0B","slug":"\u8FDB\u7A0B\u7EBF\u7A0B"},{"level":2,"title":"\u8DEF\u7531\u539F\u7406","slug":"\u8DEF\u7531\u539F\u7406"},{"level":3,"title":"hash\u6A21\u5F0F","slug":"hash\u6A21\u5F0F"},{"level":3,"title":"History\u6A21\u5F0F","slug":"history\u6A21\u5F0F"},{"level":3,"title":"hash\u548Chistory\u7684\u5BF9\u6BD4","slug":"hash\u548Chistory\u7684\u5BF9\u6BD4"},{"level":2,"title":"Vue\u548CReact\u4E4B\u95F4\u7684\u533A\u522B","slug":"vue\u548Creact\u4E4B\u95F4\u7684\u533A\u522B"}],"relativePath":"src/frontend/Vue/vue\u9762\u8BD5\u9898.md","lastUpdated":1615699077000}',r={},l=i('<h1 id="vue\u9762\u8BD5\u9898" tabindex="-1">Vue\u9762\u8BD5\u9898 <a class="header-anchor" href="#vue\u9762\u8BD5\u9898" aria-hidden="true">#</a></h1><h2 id="mvvm" tabindex="-1">MVVM <a class="header-anchor" href="#mvvm" aria-hidden="true">#</a></h2><ol><li>MVC\u662F\u540E\u7AEF\u7684\u5206\u5C42\u5F00\u53D1\u6982\u5FF5\uFF0C\u5355\u7EBF\u63A7</li></ol><p>\u4F20\u7EDF\u7684MVC\u67B6\u6784\u901A\u5E38\u662F\u4F7F\u7528\u63A7\u5236\u5668\u66F4\u65B0\u6A21\u578B\uFF0C\u89C6\u56FE\u4ECE\u6A21\u578B\u4E2D\u83B7\u53D6\u6570\u636E\u53BB\u6E32\u67D3\uFF0C\u5F53\u7528\u6237\u6709\u8F93\u5165\u65F6\uFF0C\u4F1A\u901A\u8FC7\u63A7\u5236\u5668\u53BB\u66F4\u65B0\u6A21\u578B\uFF0C\u5E76\u4E14\u901A\u77E5\u89C6\u56FE\u8FDB\u884C\u66F4\u65B0\uFF1BMVC\u6709\u4E00\u4E2A\u5DE8\u5927\u7684\u7F3A\u9677\u5C31\u662F\uFF1A<strong>\u63A7\u5236\u5668\u627F\u62C5\u7684\u8D23\u4EFB</strong>\u592A\u5927\u4E86\uFF1B</p><p>MVC\u6846\u67B6\u7684\u4E3B\u8981\u95EE\u9898\uFF1A</p><ul><li>\u5BF9DOM\u64CD\u4F5C\u7684\u4EE3\u4EF7\u975E\u5E38\u9AD8</li><li>\u7A0B\u5E8F\u8FD0\u884C\u7F13\u6162\u4E14\u6548\u7387\u4F4E\u4E0B</li><li>\u5185\u5B58\u6D6A\u8D39\u4E25\u91CD</li><li>\u7531\u4E8E\u5FAA\u73AF\u4F9D\u8D56\u6027\uFF0C\u7EC4\u4EF6\u6A21\u578B\u9700\u8981\u56F4\u7ED5models\u548Cviews\u8FDB\u884C\u521B\u5EFA\uFF1B</li></ul><ol start="2"><li><p>MVVM\u662F\u524D\u7AEF\u89C6\u56FE\u5C42\u7684\u5206\u5C42\u5F00\u53D1\u601D\u60F3\uFF0CMVVM\u628A\u524D\u7AEF\u7684\u89C6\u56FE\u5C42\u5206\u4E3A\u4E86\u4E09\u90E8\u5206\uFF1AModel\u3001View\u3001VM ViewModel\uFF0CVM\u662FMVVM\u601D\u60F3\u7684\u6838\u5FC3\uFF0C\u56E0\u4E3AVM\u662FM\u548CV\u4E4B\u95F4\u7684\u8C03\u5EA6\u8005\uFF0C\u6BCF\u5F53V\u60F3\u8981\u83B7\u53D6\u4FDD\u5B58\u540E\u7684\u6570\u636E\u7684\u65F6\u5019\uFF0C\u90FD\u7531VM\u505A\u4E2D\u95F4\u5904\u7406\uFF1B</p></li><li><p>MVVM\u63D0\u4F9B\u4E86\u53CC\u5411\u6570\u636E\u7ED1\u5B9A\uFF0C\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\u662F\u7531VM\u63D0\u4F9B\u7684\uFF1B</p></li></ol><p>View\u662F\u7528\u6237\u770B\u5230\u7684\u89C6\u56FE\uFF0CModel\u4E00\u822C\u662F\u672C\u5730\u6570\u636E\u548C\u6570\u636E\u5E93\u4E2D\u7684\u6570\u636E\uFF1B</p><p>ViewModel\u53EA\u5173\u5FC3\u6570\u636E\u548C\u4E1A\u52A1\u7684\u5904\u7406\uFF0C \u4E0D\u5173\u5FC3View\u5982\u4F55\u5904\u7406\u6570\u636E\uFF1B</p><p>\u5BF9\u4E8EMVVM\u6765\u8BF4\uFF0C\u5176\u5B9E\u6700\u91CD\u8981\u7684\u5E76\u4E0D\u662F\u901A\u8FC7\u53CC\u5411\u7ED1\u5B9A\u6216\u8005\u5176\u4ED6\u7684\u65B9\u5F0F\u5C06View\u4E0EViewModel\u7ED1\u5B9A\u8D77\u6765\uFF0C\u800C\u662F<strong>\u901A\u8FC7ViewModel\u5C06\u89C6\u56FE\u4E2D\u7684\u72B6\u6001\u548C\u7528\u6237\u7684\u884C\u4E3A\u5206\u79BB\u51FA\u4E00\u4E2A\u62BD\u8C61\uFF0C\u8FD9\u624D\u662FMVVM\u7684\u7CBE\u9AD3\uFF1B</strong></p><h2 id="virtual-dom" tabindex="-1">Virtual DOM <a class="header-anchor" href="#virtual-dom" aria-hidden="true">#</a></h2><h3 id="\u4E3A\u4EC0\u4E48\u64CD\u4F5Cdom\u6162" tabindex="-1">\u4E3A\u4EC0\u4E48\u64CD\u4F5CDOM\u6162 <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u64CD\u4F5Cdom\u6162" aria-hidden="true">#</a></h3><p>\u56E0\u4E3ADOM\u662F\u5C5E\u4E8E\u6E32\u67D3\u5F15\u64CE\u4E2D\u7684\u4E1C\u897F\uFF0C\u800CJS\u53C8\u662FJS\u5F15\u64CE\u4E2D\u7684\u4E1C\u897F\uFF0C\u5F53\u6211\u4EEC\u901A\u8FC7JS\u64CD\u4F5CDOM\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u8FD9\u4E2A\u64CD\u4F5C\u6D89\u53CA\u5230\u4E86\u4E24\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u90A3\u4E48\u52BF\u5FC5\u4F1A\u5E26\u6765\u4E00\u4E9B\u6027\u80FD\u4E0A\u7684\u635F\u8017\u3002\u64CD\u4F5CDOM\u6B21\u6570\u4E00\u591A\uFF0C\u4E5F\u5C31\u7B49\u540C\u4E8E\u4E00\u76F4\u5728\u8FDB\u884C\u7EBF\u7A0B\u4E4B\u95F4\u7684\u901A\u4FE1\uFF0C\u5E76\u4E14\u64CD\u4F5CDOM\u53EF\u80FD\u8FD8\u4F1A\u5E26\u6765\u91CD\u7ED8\u56DE\u6D41\u7684\u60C5\u51B5\uFF0C\u6240\u4EE5\u4E5F\u5C31\u5BFC\u81F4\u4E86\u6027\u80FD\u4E0A\u7684\u95EE\u9898\uFF1B</p><h3 id="\u63D2\u5165\u51E0\u4E07\u4E2Adom\u5982\u4F55\u5B9E\u73B0\u9875\u9762\u4E0D\u5361\u987F" tabindex="-1">\u63D2\u5165\u51E0\u4E07\u4E2ADOM\u5982\u4F55\u5B9E\u73B0\u9875\u9762\u4E0D\u5361\u987F <a class="header-anchor" href="#\u63D2\u5165\u51E0\u4E07\u4E2Adom\u5982\u4F55\u5B9E\u73B0\u9875\u9762\u4E0D\u5361\u987F" aria-hidden="true">#</a></h3><p>\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8\u7684\u6280\u672F\uFF0C\u539F\u7406\u662F\u53EA\u6E32\u67D3\u53EF\u89C6\u533A\u57DF\u5185\u7684\u5185\u5BB9\uFF0C\u975E\u53EF\u89C1\u533A\u57DF\u7684\u90A3\u5C31\u5B8C\u5168\u4E0D\u6E32\u67D3\u4E86\uFF0C\u5F53\u7528\u6237\u5728\u6EDA\u52A8\u7684\u65F6\u5019\u5C31\u5B9E\u65F6\u53BB\u66FF\u6362\u6E32\u67D3\u7684\u5185\u5BB9\uFF1B</p><h3 id="\u4EC0\u4E48\u662Fvirtual-dom" tabindex="-1">\u4EC0\u4E48\u662FVirtual DOM <a class="header-anchor" href="#\u4EC0\u4E48\u662Fvirtual-dom" aria-hidden="true">#</a></h3><p>\u4E5F\u5C31\u662F\u865A\u62DF\u8282\u70B9\uFF0C\u5B83\u901A\u8FC7JS\u5BF9\u8C61\u6765\u63CF\u8FF0DOM\u7684\u8282\u70B9\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u7279\u5B9A\u7684render\u65B9\u6CD5\u5C06\u5176\u6E32\u67D3\u6210\u771F\u5B9EDOM\u8282\u70B9\uFF0C\u901A\u8FC7\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u6211\u4EEC\u80FD\u7CBE\u51C6\u77E5\u9053\u54EA\u4E9B\u771F\u5B9EDOM\u6539\u53D8\u4E86\uFF0C\u4ECE\u800C\u5C3D\u91CF\u51CF\u5C11DOM\u64CD\u4F5C\u7684\u6027\u80FD\u5F00\u9500\uFF0CVirtual DOM\u901A\u8FC7\u5BF9\u6BD4\u4E24\u68F5\u6811\u7684\u5DEE\u5F02\uFF0C\u901A\u8FC7\u5DEE\u5F02\u53BB\u5C40\u90E8\u66F4\u65B0DOM\uFF0C\u5B9E\u73B0\u6027\u80FD\u7684\u6700\u4F18\u5316\uFF1B</p><p>Vue\u7684diff\u4F4D\u4E8Epatch.js\u6587\u4EF6\u4E2D\uFF0C\u590D\u6742\u5EA6\u4E3AO(n)\uFF1B</p><h3 id="virtual-dom\u6700\u5927\u7684\u4F18\u52BF" tabindex="-1">Virtual DOM\u6700\u5927\u7684\u4F18\u52BF <a class="header-anchor" href="#virtual-dom\u6700\u5927\u7684\u4F18\u52BF" aria-hidden="true">#</a></h3><ul><li>\u5C06Virtual DOM\u4F5C\u4E3A\u4E00\u4E2A\u517C\u5BB9\u5C42\uFF0C\u8BA9\u6211\u4EEC\u8FD8\u80FD\u5BF9\u63A5\u975Eweb\u7AEF\u7684\u7CFB\u7EDF\uFF0C\u5B9E\u73B0\u8DE8\u7AEF\u5F00\u53D1\uFF1B</li><li>\u540C\u6837\u7684\uFF0C\u901A\u8FC7Virtual DOM\u6211\u4EEC\u53EF\u4EE5\u6E32\u67D3\u5230\u5176\u4ED6\u7684\u5E73\u53F0\uFF0C\u6BD4\u5982\u5B9E\u73B0SSR\u3001\u540C\u6784\u6E32\u67D3\u7B49\u7B49\uFF1B</li><li>\u5B9E\u73B0\u7EC4\u4EF6\u7684\u9AD8\u5EA6\u62BD\u8C61\u5316\uFF1B</li></ul><h3 id="\u8BBE\u7F6Ekey\u548C\u4E0D\u8BBE\u7F6Ekey\u7684\u533A\u522B" tabindex="-1">\u8BBE\u7F6Ekey\u548C\u4E0D\u8BBE\u7F6Ekey\u7684\u533A\u522B <a class="header-anchor" href="#\u8BBE\u7F6Ekey\u548C\u4E0D\u8BBE\u7F6Ekey\u7684\u533A\u522B" aria-hidden="true">#</a></h3><ul><li>\u4E0D\u8BBEkey\uFF0C\u65B0\u5BF9\u8C61\u548C\u65E7\u5BF9\u8C61\u53EA\u4F1A\u8FDB\u884C\u5934\u5C3E\u4E24\u7AEF\u7684\u76F8\u4E92\u6BD4\u8F83</li><li>\u8BBEkey\u540E\uFF0C\u9664\u4E86\u5934\u5C3E\u4E24\u7AEF\u7684\u6BD4\u8F83\u5916\uFF0C\u8FD8\u4F1A\u4ECE \u7528key\u751F\u6210\u7684\u5BF9\u8C61index\u4E2D\u67E5\u627E\u5339\u914D\u7684\u8282\u70B9\uFF0C\u6240\u4EE5\u4E3A\u8282\u70B9\u8BBE\u7F6Ekey\u53EF\u4EE5\u66F4\u9AD8\u6548\u7684\u5229\u7528dom\uFF1B</li></ul><h2 id="diff\u7B97\u6CD5" tabindex="-1">diff\u7B97\u6CD5 <a class="header-anchor" href="#diff\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u628A\u6811\u5F62\u7ED3\u6784\u6309\u7167\u5C42\u7EA7\u5206\u89E3\uFF0C\u53EA\u6BD4\u8F83\u540C\u7EA7\u5143\u7D20</p><p>\u7ED9\u5217\u8868\u7ED3\u6784\u7684\u6BCF\u4E2A\u5355\u5143\u6DFB\u52A0\u552F\u4E00\u7684key\u5C5E\u6027\uFF0C\u65B9\u4FBF\u6BD4\u8F83</p><p>React\u53EA\u4F1A\u5339\u914D\u76F8\u540Cclass\u7684component(\u8FD9\u91CC\u9762\u7684class\u6307\u7684\u662F\u7EC4\u4EF6\u7684\u540D\u5B57)</p><p>\u5408\u5E76\u64CD\u4F5C\uFF0C\u8C03\u7528component\u7684setState\u65B9\u6CD5\u7684\u65F6\u5019\uFF0CReact\u5C06\u5176\u6807\u8BB0\u4E3Adirty\u5230\u6BCF\u4E00\u4E2A\u4E8B\u4EF6\u5FAA\u73AF\u7ED3\u675F\uFF0CReact\u68C0\u67E5\u6240\u6709\u6807\u8BB0dirty\u7684component\u91CD\u65B0\u7ED8\u5236</p><p>\u9009\u62E9\u6027\u5B50\u6811\u6E32\u67D3\uFF0C\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u91CD\u5199shouldComponentUpdate\u63D0\u9AD8diff\u7684\u6027\u80FD\uFF1B</p><h2 id="\u8FDB\u7A0B\u7EBF\u7A0B" tabindex="-1">\u8FDB\u7A0B\u7EBF\u7A0B <a class="header-anchor" href="#\u8FDB\u7A0B\u7EBF\u7A0B" aria-hidden="true">#</a></h2><p>\u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7B80\u5355\u6765\u8BF4\u90FD\u662FCPU\u5DE5\u4F5C\u65F6\u95F4\u7247\u7684\u4E00\u4E2A\u63CF\u8FF0\uFF1B</p><p>\u8FDB\u7A0B\u63CF\u8FF0\u4E86CPU\u5728\u8FD0\u884C\u6307\u4EE4\u53CA\u52A0\u8F7D\u548C\u4FDD\u5B58\u4E0A\u4E0B\u6587\u6240\u9700\u7684\u65F6\u95F4\uFF0C\u653E\u5728\u5E94\u7528\u4E0A\u6765\u8BF4\u5C31\u4EE3\u8868\u4E86\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u7EBF\u7A0B\u662F\u8FDB\u7A0B\u4E2D\u7684\u66F4\u5C0F\u5355\u4F4D\uFF0C\u63CF\u8FF0\u4E86\u6267\u884C\u4E00\u6BB5\u6307\u4EE4\u6240\u9700\u7684\u65F6\u95F4\uFF1B</p><p>\u4E00\u4E2A\u8FDB\u7A0B\u4E2D\u53EF\u4EE5\u6709\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u6BD4\u5982\u6E32\u67D3\u7EBF\u7A0B\u3001JS\u5F15\u64CE\u7EBF\u7A0B\u3001HTTP\u8BF7\u6C42\u7EBF\u7A0B\u7B49\u7B49\uFF0C\u5F53\u53D1\u8D77\u4E00\u4E2A\u8BF7\u6C42\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u521B\u5EFA\u4E86\u4E00\u4E2A\u7EBF\u7A0B\uFF0C\u5F53\u8BF7\u6C42\u7ED3\u675F\u540E\uFF0C\u8BE5\u7EBF\u7A0B\u53EF\u80FD\u5C31\u4F1A\u88AB\u9500\u6BC1\uFF1B</p><h2 id="\u8DEF\u7531\u539F\u7406" tabindex="-1">\u8DEF\u7531\u539F\u7406 <a class="header-anchor" href="#\u8DEF\u7531\u539F\u7406" aria-hidden="true">#</a></h2><p>\u524D\u7AEF\u8DEF\u7531\u5B9E\u73B0\uFF1A**\u672C\u8D28\u662F\u76D1\u542CURL\u7684\u53D8\u5316\uFF0C\u7136\u540E\u5339\u914D\u8DEF\u7531\u89C4\u5219\uFF0C\u663E\u793A\u76F8\u5E94\u7684\u9875\u9762\uFF0C\u5E76\u4E14\u65E0\u987B\u5237\u65B0\u9875\u9762\uFF1B**\u76EE\u524D\u524D\u7AEF\u4F7F\u7528\u7684\u8DEF\u7531\u5C31\u53EA\u6709\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F</p><h3 id="hash\u6A21\u5F0F" tabindex="-1">hash\u6A21\u5F0F <a class="header-anchor" href="#hash\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><a href="http://www.test.com/#/%E5%B0%B1%E6%98%AFHash" target="_blank" rel="noopener noreferrer">www.test.com/#/\u5C31\u662FHash</a> URL\uFF0C\u5F53#\u540E\u9762\u7684\u54C8\u5E0C\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7hashchange\u4E8B\u4EF6\u76D1\u542C\u5230URL\u7684\u53D8\u5316\uFF0C\u4ECE\u800C\u8FDB\u884C\u8DF3\u8F6C\u9875\u9762\uFF0C\u5E76\u4E14\u65E0\u8BBA\u54C8\u5E0C\u503C\u5982\u4F55\u53D8\u5316\uFF0C<a href="http://xn--URLwww-or3j92ai73jjbcu7c12zyd311nw3nlj8dl3nwye.test.com" target="_blank" rel="noopener noreferrer">\u670D\u52A1\u7AEF\u6536\u5230\u7684URL\u8BF7\u6C42\u6C38\u8FDC\u90FD\u662Fwww.test.com</a></p><h3 id="history\u6A21\u5F0F" tabindex="-1">History\u6A21\u5F0F <a class="header-anchor" href="#history\u6A21\u5F0F" aria-hidden="true">#</a></h3><p><strong>history\u6A21\u5F0F\u662FHTML5\u65B0\u63A8\u51FA\u7684\u529F\u80FD</strong>\uFF0C\u4E3B\u8981\u4F7F\u7528history.pushState\u548Chistory.replaceState\u6539\u53D8URL\uFF0C\u901A\u8FC7History\u6A21\u5F0F\u6539\u53D8URL\u540C\u6837\u4E0D\u4F1A\u5F15\u8D77\u9875\u9762\u7684\u5237\u65B0\uFF0C\u53EA\u4F1A\u66F4\u65B0\u6D4F\u89C8\u5668\u7684\u5386\u53F2\u8BB0\u5F55\uFF1B</p><h3 id="hash\u548Chistory\u7684\u5BF9\u6BD4" tabindex="-1">hash\u548Chistory\u7684\u5BF9\u6BD4 <a class="header-anchor" href="#hash\u548Chistory\u7684\u5BF9\u6BD4" aria-hidden="true">#</a></h3><p>hash\u6A21\u5F0F\u65E0\u9700\u540E\u7AEF\u914D\u7F6E\uFF0C\u800C\u4E14\u517C\u5BB9\u6027\u597D\uFF0Chistory\u6A21\u5F0F\u5728\u7528\u6237\u62D6\u52A8\u8F93\u5165\u5730\u5740\u6216\u8005\u5237\u65B0\u9875\u9762\u7684\u65F6\u5019\u4F1A\u53D1\u8D77URL\u6A21\u5F0F\uFF0C\u540E\u7AEF\u9700\u8981\u914D\u7F6Eindex.html\u9875\u9762\u7528\u4E8E\u5339\u914D\u4E0D\u5230\u9759\u6001\u8D44\u6E90\u7684\u65F6\u5019\uFF1B</p><h2 id="vue\u548Creact\u4E4B\u95F4\u7684\u533A\u522B" tabindex="-1">Vue\u548CReact\u4E4B\u95F4\u7684\u533A\u522B <a class="header-anchor" href="#vue\u548Creact\u4E4B\u95F4\u7684\u533A\u522B" aria-hidden="true">#</a></h2><ol><li>Vue\u7684\u8868\u5355\u53EF\u4EE5\u4F7F\u7528v-model\u652F\u6301\u53CC\u5411\u7ED1\u5B9A\uFF0C\u76F8\u6BD4react\u5F00\u53D1\u4E0A\u66F4\u52A0\u65B9\u4FBF\uFF1B</li><li>Vue\u4FEE\u6539\u72B6\u6001\u6BD4react\u66F4\u52A0\u7B80\u5355\uFF0Creact\u9700\u8981\u4F7F\u7528setState\u6765\u6539\u53D8\u72B6\u6001\uFF1B</li><li>react\u9700\u8981\u4F7F\u7528jsx\uFF0C\u5E76\u4E14\u9700\u8981\u4E00\u6574\u5957\u5DE5\u5177\u94FE\u652F\u6301\uFF0C\u4F46\u662F\u5B8C\u5168\u53EF\u4EE5\u901A\u8FC7js\u6765\u63A7\u5236\u9875\u9762\uFF0C\u66F4\u52A0\u7075\u6D3B\uFF0Cvue\u4F7F\u7528\u6A21\u677F\u8BED\u6CD5\uFF0C\u76F8\u6BD4\u4E8Ejsx\u6765\u8BF4\u6CA1\u6709\u90A3\u4E48\u7075\u6D3B\uFF0C\u4F46\u662F\u5B8C\u5168\u53EF\u4EE5\u8131\u79BB\u5DE5\u5177\u94FE\uFF0C\u901A\u8FC7\u76F4\u63A5\u7F16\u5199render\u51FD\u6570\u5C31\u80FD\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\uFF1B</li><li>\u751F\u6001\u4E0Areact\u7684\u7528\u6237\u662F\u8FDC\u8FDC\u9AD8\u4E8Evue\u7684\uFF1B</li><li>\u4E0A\u624B\u6210\u672C\u4E0A\uFF0Cvue\u662F\u5C3D\u53EF\u80FD\u7684\u964D\u4F4E\u524D\u7AEF\u5F00\u53D1\u7684\u95E8\u69DB\uFF0C\u800Creact\u66F4\u591A\u7684\u662F\u53BB\u6539\u53D8\u7528\u6237\u53BB\u63A5\u53D7\u5B83\u7684\u6982\u5FF5\u548C\u601D\u60F3\uFF0C\u76F8\u8F83\u4E8Evue\u4E0A\u624B\u6210\u672C\u7565\u9AD8\uFF1B</li></ol>',42),h=[l];function d(s,o,n,u,c,p){return t(),a("div",null,h)}var v=e(r,[["render",d]]);export{V as __pageData,v as default};
