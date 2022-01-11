import{_ as e,c as l,o as t,d as n,a as s,b as a}from"./app.e5c17f53.js";const v='{"title":"linux-06 shell\u57FA\u7840","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E00\u3001shell\u57FA\u7840","slug":"\u4E00\u3001shell\u57FA\u7840"},{"level":3,"title":"\u63A7\u5236\u5B57\u7B26","slug":"\u63A7\u5236\u5B57\u7B26"},{"level":3,"title":"\u8F93\u51FA\u989C\u8272","slug":"\u8F93\u51FA\u989C\u8272"},{"level":3,"title":"\u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6","slug":"\u8F93\u5165\u5185\u5BB9\u5230\u6587\u4EF6"},{"level":3,"title":"\u6267\u884Cshell\u811A\u672C","slug":"\u6267\u884Cshell\u811A\u672C"},{"level":3,"title":"\u8F93\u51FA\u91CD\u5B9A\u5411","slug":"\u8F93\u51FA\u91CD\u5B9A\u5411"},{"level":3,"title":"\u8F93\u5165\u91CD\u5B9A\u5411","slug":"\u8F93\u5165\u91CD\u5B9A\u5411"},{"level":3,"title":"\u591A\u547D\u4EE4\u987A\u5E8F","slug":"\u591A\u547D\u4EE4\u987A\u5E8F"},{"level":3,"title":"\u901A\u914D\u7B26","slug":"\u901A\u914D\u7B26"},{"level":3,"title":"\u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09","slug":"\u672C\u5730\u53D8\u91CF\uFF08\u53EA\u5728\u5F53\u524D\u53D8\u91CF\u751F\u6548\uFF09"},{"level":3,"title":"\u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09","slug":"\u73AF\u5883\u53D8\u91CF\uFF08\u5728\u6240\u6709\u53D8\u91CF\u751F\u6548\uFF09"},{"level":3,"title":"\u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF","slug":"\u4F4D\u7F6E\u53C2\u6570\u53D8\u91CF"},{"level":3,"title":"\u9884\u5B9A\u4E49\u53D8\u91CF","slug":"\u9884\u5B9A\u4E49\u53D8\u91CF"},{"level":3,"title":"\u63A5\u6536\u952E\u76D8\u8F93\u5165","slug":"\u63A5\u6536\u952E\u76D8\u8F93\u5165"},{"level":3,"title":"\u6570\u503C\u8FD0\u7B97\u7B26","slug":"\u6570\u503C\u8FD0\u7B97\u7B26"},{"level":3,"title":"expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177","slug":"expr\u6216let\u6570\u503C\u8FD0\u7B97\u5DE5\u5177"},{"level":2,"title":"\u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4","slug":"\u4E8C\u3001\u5B57\u7B26\u622A\u53D6\u547D\u4EE4"},{"level":3,"title":"cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4","slug":"cut\u5B57\u6BB5\u63D0\u53D6\u547D\u4EE4"},{"level":3,"title":"printf\u547D\u4EE4","slug":"printf\u547D\u4EE4"},{"level":3,"title":"awk\u547D\u4EE4","slug":"awk\u547D\u4EE4"},{"level":3,"title":"sed\u547D\u4EE4","slug":"sed\u547D\u4EE4"},{"level":2,"title":"\u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4","slug":"\u4E09\u3001\u5B57\u7B26\u5904\u7406\u547D\u4EE4"},{"level":3,"title":"\u6392\u5E8F\u547D\u4EE4sort","slug":"\u6392\u5E8F\u547D\u4EE4sort"},{"level":3,"title":"\u7EDF\u8BA1\u547D\u4EE4wc","slug":"\u7EDF\u8BA1\u547D\u4EE4wc"},{"level":3,"title":"\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B","slug":"\u5224\u65AD\u5B57\u7B26\u4E32\u662F\u5426\u5305\u542B"}],"relativePath":"src/frontend/Server/linux-06 shell\u57FA\u7840.md","lastUpdated":1626711128000}',o={},p=n("",30),c=s("ul",null,[s("li",{"10":""},[s("code",null,"$n"),a(" $0\u4EE3\u8868\u547D\u4EE4\u672C\u8EAB $1-$9\u4EE3\u8868\u7B2C1-9\u4E2A\u53C2\u6570 \u5341\u4EE5\u4E0A\u7684\u8868\u8FBE$")]),s("li",null,[s("code",null,"$*"),a(" \u6240\u6709\u53C2\u6570 \u770B\u6210\u6574\u4E2A\u53C2\u6570")]),s("li",null,[s("code",null,"$@"),a(" \u6240\u6709\u53C2\u6570 \u770B\u6210\u5355\u4E2A\u53C2\u6570")]),s("li",null,[s("code",null,"$#"),a(" \u4EE3\u8868\u591A\u5C11\u4E2A\u53C2\u6570")])],-1),i=n("",60),d=[p,c,i];function r(u,k,h,b,g,f){return t(),l("div",null,d)}var x=e(o,[["render",r]]);export{v as __pageData,x as default};
