/*! Copyright (c) WEDN.NET */
webpackJsonp([2,18],{114:function(e,t,o){var c,n;o(146),c=o(130);var r=o(151);n=c=c||{},"object"!=typeof c.default&&"function"!=typeof c.default||(n=c=c.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,e.exports=c},130:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"demo",data:function(){for(var e=[],t=0;t<100;t++)e.push({text:"JavaScript "+t,competed:t%2});return{todos:e}}}},141:function(e,t,o){t=e.exports=o(107)(),t.push([e.i,"",""])},146:function(e,t,o){var c=o(141);"string"==typeof c&&(c=[[e.i,c,""]]);o(108)(c,{});c.locals&&(e.exports=c.locals)},151:function(e,t){e.exports={render:function(){var e=this;e.$createElement;return e._c("div",[e._c("h1",{staticClass:"content-title"},[e._v(e._s(e.$t("demo")))]),e._v(" "),e._c("ul",e._l(e.todos,function(t){return e._c("li",[e._c("input",{directives:[{name:"model",rawName:"v-model",value:t.competed,expression:"todo.competed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.competed)?e._i(t.competed,null)>-1:t.competed},on:{change:function(o){var c=t.competed,n=o.target,r=!!n.checked;if(Array.isArray(c)){var a=null,s=e._i(c,a);r?s<0&&(t.competed=c.concat(a)):s>-1&&(t.competed=c.slice(0,s).concat(c.slice(s+1)))}else t.competed=r}}}),e._v(" "),e._c("span",[e._v(e._s(t.text))])])}))])},staticRenderFns:[]}}});
//# sourceMappingURL=2.7f9e99.js.map