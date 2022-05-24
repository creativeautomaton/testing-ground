(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{153:function(e,a,t){},154:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(48),l=t.n(c),i=t(7),u=t(18),m=t(49),d=function(e){var a=e.children,t=e.query,n=e.id,c=Object(m.a)(t,{variables:{id:n}}),l=c.data,i=c.loading,u=c.error;return i?r.a.createElement("p",null,"Loading..."):u?r.a.createElement("p",null,"Error: ",JSON.stringify(u)):a({data:l})},o=t(17),s=t(15),E=t(16),v=t.n(E);function k(){var e=Object(s.a)(["\n  query Categories {\n    categories {\n      id\n      name\n    }\n  }\n"]);return k=function(){return e},e}var g=v()(k()),f=function(){return r.a.createElement("div",null,r.a.createElement(d,{query:g,id:null},(function(e){var a=e.data.categories;return r.a.createElement("div",null,r.a.createElement("nav",{className:"uk-navbar-container","data-uk-navbar":!0},r.a.createElement("div",{className:"uk-navbar-left"},r.a.createElement("ul",{className:"uk-navbar-nav"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Strapi Blog")))),r.a.createElement("div",{className:"uk-navbar-right"},r.a.createElement("ul",{className:"uk-navbar-nav"},a.map((function(e,a){return r.a.createElement("li",{key:e.id},r.a.createElement(o.b,{to:"/category/".concat(e.id),className:"uk-link-reset"},e.name))}))))))})))},p=function(e){var a=e.article,t=a.image.url;return r.a.createElement(o.b,{to:"/article/".concat(a.id),className:"uk-link-reset"},r.a.createElement("div",{className:"uk-card uk-card-muted"},r.a.createElement("div",{className:"uk-card-media-top"},r.a.createElement("img",{src:t,alt:a.image.url,height:"100"})),r.a.createElement("div",{className:"uk-card-body"},r.a.createElement("p",{id:"category",className:"uk-text-uppercase"},a.category.name),r.a.createElement("p",{id:"title",className:"uk-text-large"},a.title))))},h=function(e){var a=e.articles,t=Math.ceil(a.length/5),n=a.slice(0,t),c=a.slice(t,a.length);return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2","data-uk-grid":!0},r.a.createElement("div",null,n.map((function(e,a){return r.a.createElement(p,{article:e,key:"article__".concat(e.id)})}))),r.a.createElement("div",null,r.a.createElement("div",{className:"uk-child-width-1-2@m uk-grid-match","data-uk-grid":!0},c.map((function(e,a){return r.a.createElement(p,{article:e,key:"article__".concat(e.id)})}))))))};function b(){var e=Object(s.a)(["\n  query Articles {\n    articles {\n      id\n      title\n      category {\n        id\n        name\n      }\n      image {\n        url\n      }\n    }\n  }\n"]);return b=function(){return e},e}var y=v()(b()),N=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-large"},r.a.createElement("h1",null,"Strapi blog"),r.a.createElement(d,{query:y},(function(e){var a=e.data.articles;return r.a.createElement(h,{articles:a})})))))},q=t(29),x=t(56),O=t.n(x),j=t(57),w=t.n(j);function _(){var e=Object(s.a)(["\n  query Articles($id: ID!) {\n    article(id: $id) {\n      id\n      title\n      content\n      image {\n        url\n      }\n      category {\n        id\n        name\n      }\n      published_at\n    }\n  }\n"]);return _=function(){return e},e}var M=v()(_()),Y=function(){var e=Object(q.a)().id;return r.a.createElement(d,{query:M,id:e},(function(e){var a=e.data.article,t=a.image.url;return r.a.createElement("div",null,r.a.createElement("div",{id:"banner",className:"uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin","data-src":t,"data-srcset":t,"data-uk-img":!0},r.a.createElement("h1",null,a.title)),r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-small"},r.a.createElement(O.a,{source:a.content}),r.a.createElement("p",null,r.a.createElement(w.a,{format:"MMM Do YYYY"},a.published_at)))))}))};function $(){var e=Object(s.a)(["\n  query Category($id: ID!) {\n    category(id: $id) {\n      id\n      name\n      articles {\n        id\n        title\n        content\n        image {\n          url\n        }\n        category {\n          id\n          name\n        }\n      }\n    }\n  }\n"]);return $=function(){return e},e}var A=v()($()),D=function(){var e=Object(q.a)().id;return r.a.createElement(d,{query:A,id:e},(function(e){var a=e.data.category;return r.a.createElement("div",null,r.a.createElement("div",{className:"uk-section"},r.a.createElement("div",{className:"uk-container uk-container-large"},r.a.createElement("h1",null,a.name),r.a.createElement(h,{articles:a.articles}))))}))};var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/",component:N,exact:!0}),r.a.createElement(u.a,{path:"/article/:id",component:Y,exact:!0}),r.a.createElement(u.a,{path:"/category/:id",component:D,exact:!0})))},J=t(19),S=t(58),B=t(59),C=new S.a,L=new B.a({uri:"".concat("http://localhost:1337","graphql")}),z=new J.a({cache:C,link:L});t(153);l.a.render(r.a.createElement(o.a,null,r.a.createElement(i.a,{client:z},r.a.createElement(I,null))),document.getElementById("root"))},60:function(e,a,t){e.exports=t(154)}},[[60,1,2]]]);
//# sourceMappingURL=main.8ca154d1.chunk.js.map