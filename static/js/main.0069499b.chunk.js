(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(7),c=n.n(s),i=n(1),r=n(8),o=n(9),a=(n(14),n(15),n(5)),l=n.n(a),u=n(3),b=n(0),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j="alphabet",h="length",f={field:"",isReversed:!1},O=function(){var e=Object(u.useState)(f),t=Object(r.a)(e,2),n=t[0],s=t[1],c=function(e,t){var n=Object(o.a)(e).sort((function(e,n){switch(t.field){case j:return e.localeCompare(n);case h:return e.length-n.length;default:return 0}}));return t.isReversed?n.reverse():n}(d,n),a=n.field,O=n.isReversed;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":!(a===j)}),onClick:function(){return s(Object(i.a)(Object(i.a)({},n),{},{field:j}))},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":!(a===h)}),onClick:function(){return s(Object(i.a)(Object(i.a)({},n),{},{field:h}))},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!O}),onClick:function(){return s(Object(i.a)(Object(i.a)({},n),{},{isReversed:!O}))},children:"Reverse"}),a||O?Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return s({field:"",isSorted:!1})},children:"Reset"}):""]}),Object(b.jsx)("ul",{children:c.map((function(e){return Object(b.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})};c.a.render(Object(b.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0069499b.chunk.js.map