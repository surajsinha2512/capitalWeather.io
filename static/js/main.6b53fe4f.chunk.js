(this.webpackJsonpsuraj=this.webpackJsonpsuraj||[]).push([[0],{26:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(0),r=c(9),s=c.n(r),i=c(8),o=c(6),l=c(28),u=c(29),d="REQUEST",j="SUCCESS",b="FAIL",p=Object(o.combineReducers)({Reducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return{loading:!0,products:[]};case j:return{loading:!1,products:t.payload};case b:return{loading:!1,error:t.payload};default:return e}}}),h=[l.a],O=Object(o.createStore)(p,{},Object(u.composeWithDevTools)(o.applyMiddleware.apply(void 0,h))),m=c(4),x=c(17),v=c(11),f=c.n(v),g=c(16),y=c.n(g),w=c(30),N=c(65),S=function(){return Object(a.jsx)(N.a,{animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"},children:Object(a.jsx)("span",{className:"sr-only",children:"Loading..."})})},k=(c(26),function(e){var t=Object(i.b)(),c=Object(i.c)((function(e){return e.Reducer})),r=c.loading,s=c.products;return Object(n.useEffect)((function(){t(function(e){return function(){var t=Object(w.a)(y.a.mark((function t(c){var a,n,r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:d}),a="http://api.weatherstack.com/current?access_key=922be7ef63a20dd3876bf9a7d8b4e1e5&query=".concat(e.country),t.next=5,f.a.get(a);case 5:n=t.sent,r=n.data.current,c({type:j,payload:r}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),c({type:b,payload:t.t0.message});case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()}(e))}),[t]),Object(a.jsx)(a.Fragment,{children:r?Object(a.jsx)(S,{}):Object(a.jsxs)("div",{className:"container weather",style:{width:"30%"},children:[Object(a.jsx)("img",{src:s.weather_icons,style:{height:"10%",width:"10%"},className:"img"}),Object(a.jsx)("div",{className:"col m-10",children:"temperature : ".concat(s.temperature)}),Object(a.jsx)("div",{className:"col m-10",children:"Wind Speed : ".concat(s.wind_speed)}),Object(a.jsx)("div",{className:"col m-10",children:"Precipitation : ".concat(s.precip)})]})})}),C=function(e){var t=Object(n.useState)(e.data),c=Object(m.a)(t,2),r=c[0],s=(c[1],Object(n.useState)([])),i=Object(m.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),j=d[0],b=d[1];Object(n.useEffect)((function(){var e="https://restcountries.eu/rest/v2/name/".concat(r);f.a.get(e).then((function(e){return e.data})).then((function(e){l((function(t){return[].concat(Object(x.a)(t),Object(x.a)(e))}))}))}),[]);var p=function(){b(!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container round",children:o.map((function(e){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"country",children:[Object(a.jsxs)("div",{className:"col",children:[Object(a.jsxs)("div",{className:"row",children:[" Capital : ",e.capital]}),Object(a.jsxs)("div",{className:"row",children:["population : ",e.population]}),Object(a.jsxs)("div",{className:"row",children:["Latlng : ",e.latlng]})]}),Object(a.jsxs)("div",{className:"col",children:[Object(a.jsx)("img",{src:e.flag,style:{height:"20%",width:"30%"}}),Object(a.jsx)("button",{className:"btn btn-success m-5",onClick:p,children:" Capital Weather "})]})]})})}))}),j?Object(a.jsx)(k,{country:e.data}):null]})};var E=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),i=Object(m.a)(s,2),o=i[0],l=i[1],u=Object(n.useState)(!1),d=Object(m.a)(u,2),j=d[0],b=d[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("form",{children:[Object(a.jsx)("input",{placeholder:"Enter Country",value:c,onChange:function(e){0===e.target.value.length?l(!0):l(!1),r(e.target.value)},style:{margin:"10px"}}),Object(a.jsxs)("button",{onClick:function(e){e.preventDefault(),b(!0)},className:"btn btn-danger m-5",disabled:o,children:[" ","Submit"," "]})]})}),j?Object(a.jsx)(C,{data:c}):null]})};c(62);s.a.render(Object(a.jsx)(i.a,{store:O,children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.6b53fe4f.chunk.js.map