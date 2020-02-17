(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}}),n("router-view")],1)},i=[],o=(n("5c0b"),n("2877")),c={},s=Object(o["a"])(c,a,i,!1,null,null,null),u=s.exports,l=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Clientes")]),n("div",{staticClass:"create-cliente"},[n("label",{attrs:{for:"nome"}},[e._v("Criar Cliente:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.cliente.nome,expression:"cliente.nome"}],attrs:{type:"text",name:"nome",placeholder:"Digite seu nome..."},domProps:{value:e.cliente.nome},on:{input:function(t){t.target.composing||e.$set(e.cliente,"nome",t.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:e.cliente.status,expression:"cliente.status"}],attrs:{name:"status"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.cliente,"status",t.target.multiple?n:n[0])}}},e._l(e.cliente.options,(function(t){return n("option",{key:t.text,domProps:{value:t.value}},[e._v(" "+e._s(t.text)+" ")])})),0),n("button",{on:{click:e.cadastrarCliente}},[e._v("Cadastrar")])]),n("hr"),e.erros?n("p",[e._v(e._s(e.erros))]):e._e(),n("div",{staticClass:"clientes-container"},e._l(e.clientes,(function(t,r){return n("div",{key:t._id,staticClass:"clientes",attrs:{item:t,index:r},on:{dblclick:function(n){return e.deletarCliente(t._id)}}},[e._v(" "+e._s(t.createdAt.getDate()+"/"+t.createdAt.getMonth()+"/"+t.createdAt.getFullYear())+" "),n("p",{staticClass:"text"},[e._v(e._s(t.nome))]),n("p",{staticClass:"text"},[e._v(e._s(t.status))])])})),0)])},d=[],f=(n("96cf"),n("1da1")),v=(n("d81d"),n("d3b7"),n("5530")),m=n("d4ec"),h=n("bee2"),b=n("bc3a"),g=n.n(b),_="api/cliente",y=function(){function e(){Object(m["a"])(this,e)}return Object(h["a"])(e,null,[{key:"getClientes",value:function(){return new Promise((function(e,t){try{var n=g.a.get(_);n.then((function(e){return e.data})).then((function(t){return e(t.map((function(e){return Object(v["a"])({},e,{createdAt:new Date(e.created_at)})})))}))}catch(r){t(r)}}))}},{key:"cadastrarCliente",value:function(e,t){g.a.post(_,{nome:e,status:t})}},{key:"deletarCliente",value:function(e){g.a.delete("".concat(_,"/").concat(e))}}]),e}(),C=y,w={name:"Clientes",data:function(){return{clientes:[],erros:"",cliente:{nome:"",status:null,options:[{text:"Ativado",value:!0},{text:"Desativado",value:!1}]}}},created:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getClientes();case 1:case"end":return t.stop()}}),t)})))()},methods:{getClientes:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C.getClientes();case 3:e.clientes=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.erros=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},cadastrarCliente:function(){C.cadastrarCliente(this.cliente.nome,this.cliente.status),this.getClientes()},deletarCliente:function(e){C.deletarCliente(e),this.getClientes}}},x=w,O=Object(o["a"])(x,p,d,!1,null,null,null),j=O.exports;r["a"].use(l["a"]);var k=[{path:"/",name:"Clientes",component:j}],P=new l["a"]({mode:"history",base:"/",routes:k}),A=P;r["a"].config.productionTip=!1,new r["a"]({router:A,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.1c174863.js.map