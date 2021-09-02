"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[160],{1287:(e,t,r)=>{r(7327),r(1539),r(8674),r(7042),r(8309),r(1038),r(8783),r(2526),r(1817),r(2165),r(6992),r(3948),r(9753);var n=r(538),s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"alert",class:{"alert-success":e.success,"alert-warning":e.fail},attrs:{role:"alert"}},[e._v(e._s(e.message))])};s._withStripped=!0;const i={name:"message-api",delimiters:["${","}$"],props:{message:String,success:Boolean,fail:Boolean}};var o=(0,r(1900).Z)(i,s,[],!1,null,null,null);o.options.__file="assets/components/admin/courriels/MessageApi.vue";const a=o.exports;function l(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,s=function(){};return{s,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(a)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}new n.Z({el:"#courrielsTable",delimiters:["${","}$"],components:{MessageApi:a},data:{courrielsToDelete:[],messageApi:"",successApi:!1,failApi:!1},methods:{onStoreCourrielsToDelete:function(e){var t=e.target,r={id:t.dataset.courrielid,token:t.dataset._token};t.checked?this.courrielsToDelete.push(r):this.courrielsToDelete=this.courrielsToDelete.filter((function(e){return e.id!=r.id&&e.token!=r.token}))},deleteCourriels:function(){var e,t=this,r=0,n=l(this.courrielsToDelete);try{var s=function(){var n=e.value;fetch("/admin/api/courriels/"+n.id,{method:"DELETE",mode:"same-origin",headers:{Authorization:n.token,"X-Requested-With":"XMLHttpRequest"}}).then((function(e){200==e.status?($("#courriel_"+n.id).parents("tr").remove(),t.messageApi="Elément(s) supprimés",t.successApi=!0,t.failApi=!1):(t.messageApi="Une erreur est survenue: "+e.status+" "+e.statusText,t.successApi=!1,t.failApi=!0),++r==t.courrielsToDelete.length&&t.tryToRefresh()})).catch((function(e){t.messageApi="Une erreur est survenue: "+e.message,t.successApi=!1,t.failApi=!0}))};for(n.s();!(e=n.n()).done;)s()}catch(e){n.e(e)}finally{n.f()}},tryToRefresh:function(){this.courrielsToDelete=[]}}})},7327:(e,t,r)=>{var n=r(2109),s=r(2092).filter;n({target:"Array",proto:!0,forced:!r(1194)("filter")},{filter:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},1900:(e,t,r)=>{function n(e,t,r,n,s,i,o,a){var l,u="function"==typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),s&&s.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=l):s&&(l=a?function(){s.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:s),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(e,t){return l.call(t),c(e,t)}}else{var f=u.beforeCreate;u.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:u}}r.d(t,{Z:()=>n})}},e=>{e.O(0,[1,311,761,674],(()=>{return t=1287,e(e.s=t);var t}));e.O()}]);