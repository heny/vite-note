import{e as a,u as e,f as t,g as s,h as l,o,c as i,a as c,i as n,t as r,_ as v,w as f,p as u,j as d,F as m,r as p,k as h,l as k}from"./app.f5909e71.js";const x=f("data-v-19c2f799");u("data-v-19c2f799");const y={key:0,class:"home-hero"},g={key:0,class:"figure"},$={key:1,id:"main-title",class:"title"},_={key:2,class:"description"};d();var I=a({expose:[],setup(a){const f=e(),u=t(),d=s((()=>u.value.heroImage||m.value||h.value||I.value)),m=s((()=>null!==u.value.heroText)),p=s((()=>u.value.heroText||f.value.title)),h=s((()=>null!==u.value.tagline)),k=s((()=>u.value.tagline||f.value.description)),I=s((()=>u.value.actionLink&&u.value.actionText)),T=s((()=>u.value.altActionLink&&u.value.altActionText));return x(((a,e)=>l(d)?(o(),i("header",y,[a.$frontmatter.heroImage?(o(),i("figure",g,[c("img",{class:"image",src:a.$withBase(a.$frontmatter.heroImage),alt:a.$frontmatter.heroAlt},null,8,["src","alt"])])):n("v-if",!0),l(m)?(o(),i("h1",$,r(l(p)),1)):n("v-if",!0),l(h)?(o(),i("p",_,r(l(k)),1)):n("v-if",!0),l(I)?(o(),i(v,{key:3,item:{link:l(u).actionLink,text:l(u).actionText},class:"action"},null,8,["item"])):n("v-if",!0),l(T)?(o(),i(v,{key:4,item:{link:l(u).altActionLink,text:l(u).altActionText},class:"action alt"},null,8,["item"])):n("v-if",!0)])):n("v-if",!0)))}});I.__scopeId="data-v-19c2f799";const T=f("data-v-7d3df8f4");u("data-v-7d3df8f4");const A={key:0,class:"home-features"},L={class:"wrapper"},w={class:"container"},b={class:"features"},j={key:0,class:"title"},B={key:1,class:"details"};d();var C=a({expose:[],setup(a){const e=t(),v=s((()=>e.value.features&&e.value.features.length>0)),f=s((()=>e.value.features?e.value.features:[]));return T(((a,e)=>l(v)?(o(),i("div",A,[c("div",L,[c("div",w,[c("div",b,[(o(!0),i(m,null,p(l(f),((a,e)=>(o(),i("section",{key:e,class:"feature"},[a.title?(o(),i("h2",j,r(a.title),1)):n("v-if",!0),a.details?(o(),i("p",B,r(a.details),1)):n("v-if",!0)])))),128))])])])])):n("v-if",!0)))}});C.__scopeId="data-v-7d3df8f4";const F={},q=f("data-v-765fa848");u("data-v-765fa848");const z={key:0,class:"footer"},D={class:"container"},E={class:"text"};d();const G=q(((a,e)=>a.$frontmatter.footer?(o(),i("footer",z,[c("div",D,[c("p",E,r(a.$frontmatter.footer),1)])])):n("v-if",!0)));F.render=G,F.__scopeId="data-v-765fa848";const H=f("data-v-9d516c10");u("data-v-9d516c10");const J={class:"home","aria-labelledby":"main-title"},K={class:"home-content"};d();var M=a({expose:[],setup:a=>H(((a,e)=>{const t=h("Content");return o(),i("main",J,[c(I),k(a.$slots,"hero"),c(C),c("div",K,[c(t)]),k(a.$slots,"features"),c(F),k(a.$slots,"footer")])}))});M.__scopeId="data-v-9d516c10";export default M;
