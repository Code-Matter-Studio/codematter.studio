(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(t,e,n){t.exports=n.p+"img/space-pattern.bec54dd.jpg"},390:function(t,e,n){"use strict";n.r(e);var r=n(34),c=n(29),l=(n(11),n(67),n(69),n(354)),o=n.n(l),d={layout:"non-header",data:function(){return{spacePatterImg:o.a}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,l,article,o,d,v,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,c=t.params,l=t.error,e.prev=1,e.next=4,n("articles",c.slug).fetch();case 4:article=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",l({message:"Article not found"}));case 10:return e.next=12,n("articles").only(["title","slug"]).surround(c.slug).fetch();case 12:return o=e.sent,d=Object(r.a)(o,2),v=d[0],f=d[1],e.abrupt("return",{article:article,prev:v,next:f});case 17:case"end":return e.stop()}}),e,null,[[1,7]])})))()},head:function(){return{title:this.article.title,description:this.article.description}}},v=n(50),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"section bg-center bg-fixed effect-section",style:{backgroundImage:"url("+t.spacePatterImg+")"}},[n("div",{staticClass:"mask theme-bg opacity-9"}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center p-50px-t"},[n("div",{staticClass:"col-lg-8 text-center"},[n("h2",{staticClass:"white-color h1 m-20px-b"},[t._v(t._s(t.article.title))]),t._v(" "),n("ol",{staticClass:"breadcrumb white justify-content-center"},[n("li",[n("NuxtLink",{attrs:{to:t.localePath("articles")}},[t._v(t._s(t.$t("links.go_to_other_articles")))])],1)])])])])]),t._v(" "),n("section",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("nuxt-content",{attrs:{document:t.article}})],1)])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);