!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).VueStripeCheckout={})}(this,(function(e){"use strict";var t=["auto","da","de","en","es","es-419","fi","fr","it","ja","nb","nl","pl","pt","sv","zh"],n=["auto","book","donate","pay"],r=["required","auto"],o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"v3",n=arguments.length>2?arguments[2]:void 0;if(window.Stripe)n();else{var r=document.createElement("script");r.src="".concat("https://js.stripe.com","/").concat(t),r.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(r),r.addEventListener("load",n)}};function i(e,t,n,r,o,i,a,s,c,l){"boolean"!=typeof a&&(c=s,s=a,a=!1);const u="function"==typeof n?n.options:n;let d;if(e&&e.render&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns,u._compiled=!0,o&&(u.functional=!0)),r&&(u._scopeId=r),i?(d=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(i)},u._ssrRegister=d):t&&(d=a?function(e){t.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,s(e))}),d)if(u.functional){const e=u.render;u.render=function(t,n){return d.call(n),e(t,n)}}else{const e=u.beforeCreate;u.beforeCreate=e?[].concat(e,d):[d]}return n}const a={props:{pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return n.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return r.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},locale:{type:String,default:"auto",validator:function(e){return t.includes(e)}},shippingAddressCollection:{type:Object,validator:function(e){return e.hasOwnProperty("allowedCountries")}}},methods:{redirectToCheckout:function(){var e=this;this.$emit("loading",!0),o(this.pk,"v3",(function(){try{var t,n=window.Stripe(e.pk);if(e.sessionId)return void n.redirectToCheckout({sessionId:e.sessionId});if((null===(t=e.lineItems)||void 0===t?void 0:t.length)&&!e.mode)return void console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode");var r={billingAddressCollection:e.billingAddressCollection,cancelUrl:e.cancelUrl,clientReferenceId:e.clientReferenceId,customerEmail:e.customerEmail,items:e.items,lineItems:e.lineItems,locale:e.locale,mode:e.mode,shippingAddressCollection:e.shippingAddressCollection,submitType:e.submitType,successUrl:e.successUrl};n.redirectToCheckout(r)}catch(t){console.error(t),e.$emit("error",t)}finally{e.$emit("loading",!1)}}))}}};var s=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[this._t("checkout-button",[t("button",{on:{click:this.redirectToCheckout}},[this._v("Checkout")])])],2)};s._withStripped=!0;const c=i({render:s,staticRenderFns:[]},void 0,a,void 0,!1,void 0,!1,void 0,void 0,void 0);var l=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t=function(e){var t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),a=new x(r||[]);return i._invoke=function(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=A(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var u={};function d(){}function p(){}function f(){}var h={};h[o]=function(){return this};var m=Object.getPrototypeOf,v=m&&m(m(S([])));v&&v!==t&&n.call(v,o)&&(h=v);var y=f.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var r;this._invoke=function(o,i){function a(){return new t((function(r,a){!function r(o,i,a,s){var c=l(e[o],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function A(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,A(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var o=r.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=y.constructor=f,f.constructor=p,p.displayName=s(f,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,a,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new b(c(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},g(y),s(y,a,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=S,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),E(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));var u=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};function d(e,t,n,r,o,i,a){try{var s=e[i](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,o)}var p=function(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){d(i,r,o,a,s,"next",e)}function s(e){d(i,r,o,a,s,"throw",e)}a(void 0)}))}};function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={props:{pk:{type:String,required:!0},amount:{type:Number},stripeAccount:{type:String},apiVersion:{type:String},locale:{type:String,default:"auto"},styleObject:{type:Object}},data:function(){return{loading:!1,stripe:null,elements:null,card:null}},computed:{style:function(){return{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},form:function(){return document.getElementById("payment-form")}},methods:{submit:function(){this.$refs.submitButtonRef.click()}},mounted:function(){var e=this;o(this.pk,"v3",(function(){var t={stripeAccount:e.stripeAccount,apiVersion:e.apiVersion,locale:e.locale};e.stripe=window.Stripe(e.pk,t),e.elements=e.stripe.elements(),e.card=e.elements.create("card",{style:e.styleObject||e.style}),e.card.mount("#card-element"),e.card.addEventListener("change",(function(e){var t=e.error,n=document.getElementById("card-errors");n.textContent=t?t.message:""})),e.form.addEventListener("submit",function(){var t=p(l.mark((function t(n){var r,o,i,a;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.$emit("loading",!0),n.preventDefault(),r=h({},e.card),e.amount&&(r.amount=e.amount),t.next=7,e.stripe.createToken(r);case 7:if(o=t.sent,i=o.token,!(a=o.error)){t.next=16;break}return document.getElementById("card-errors").textContent=a.message,console.error(a),e.$emit("error 1",a),t.abrupt("return");case 16:e.$emit("token",i),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(0),console.error(t.t0),e.$emit("error",t.t0);case 23:return t.prev=23,e.$emit("loading",!1),t.finish(23);case 26:case"end":return t.stop()}}),t,null,[[0,19,23,26]])})));return function(e){return t.apply(this,arguments)}}())}))}};const v="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function y(e){return(e,t)=>function(e,t){const n=v?t.media||"default":e,r=b[n]||(b[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===g&&(g=document.head||document.getElementsByTagName("head")[0]),g.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),o=r.element.childNodes;o[e]&&r.element.removeChild(o[e]),o.length?r.element.insertBefore(t,o[e]):r.element.appendChild(t)}}}(e,t)}let g;const b={};const A=m;var w=function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("form",{attrs:{id:"payment-form"}},[this._t("card-element",[t("div",{attrs:{id:"card-element"}})]),this._v(" "),this._t("card-errors",[t("div",{attrs:{id:"card-errors",role:"alert"}})]),this._v(" "),t("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])};w._withStripped=!0;const E=i({render:w,staticRenderFns:[]},(function(e){e&&e("data-v-1998d06b_0",{source:"\n.StripeElement[data-v-1998d06b] {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n.StripeElement--focus[data-v-1998d06b] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.StripeElement--invalid[data-v-1998d06b] {\n  border-color: #fa755a;\n}\n.StripeElement--webkit-autofill[data-v-1998d06b] {\n  background-color: #fefde5 !important;\n}\n.hide[data-v-1998d06b] {\n  visibility: hidden;\n}\n",map:{version:3,sources:["/Users/aldo/Development/others/vue-stripe-checkout/src/Elements.vue"],names:[],mappings:";AA6HA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,kBAAA;AACA",file:"Elements.vue",sourcesContent:["<template>\n  <div>\n    <form id=\"payment-form\">\n      <slot name=\"card-element\">\n        <div id=\"card-element\"></div>\n      </slot>\n      <slot name=\"card-errors\">\n        <div id=\"card-errors\" role=\"alert\"></div>\n      </slot>\n      <button ref=\"submitButtonRef\" type=\"submit\" class=\"hide\"></button>\n    </form>\n  </div>\n</template>\n\n<script>\nimport { loadStripeSdk } from './load-checkout';\nexport default {\n  props: {\n    pk: {\n      type: String,\n      required: true,\n    },\n    amount: {\n      type: Number,\n    },\n    stripeAccount: {\n      type: String,\n    },\n    apiVersion: {\n      type: String,\n    },\n    locale: {\n      type: String,\n      default: 'auto',\n    },\n    styleObject: {\n      type: Object,\n    }\n  },\n  data () {\n    return {\n      loading: false,\n      stripe: null,\n      elements: null,\n      card: null,\n    };\n  },\n  computed: {\n    style () {\n      return {\n        base: {\n          color: '#32325d',\n          fontFamily: '\"Helvetica Neue\", Helvetica, sans-serif',\n          fontSmoothing: 'antialiased',\n          fontSize: '16px',\n          '::placeholder': {\n            color: '#aab7c4'\n          }\n        },\n        invalid: {\n          color: '#fa755a',\n          iconColor: '#fa755a'\n        }\n      };\n    },\n    form () {\n      return document.getElementById('payment-form');\n    },\n  },\n  methods: {\n    submit () {\n      this.$refs.submitButtonRef.click();\n    },\n  },\n  mounted () {\n    loadStripeSdk(this.pk, 'v3', () => {\n      const options = {\n        stripeAccount: this.stripeAccount,\n        apiVersion: this.apiVersion,\n        locale: this.locale,\n      };\n      this.stripe = window.Stripe(this.pk, options);\n      this.elements = this.stripe.elements();\n      this.card = this.elements.create('card', { style: this.styleObject || this.style });\n      this.card.mount('#card-element');\n\n      this.card.addEventListener('change', ({ error }) => {\n        const displayError = document.getElementById('card-errors');\n        if (error) {\n          displayError.textContent = error.message;\n          return;\n        }\n        displayError.textContent = '';\n      });\n      \n      this.form.addEventListener('submit', async (event) => {\n        try {\n          this.$emit('loading', true);\n          event.preventDefault();\n          const data = {\n            ...this.card\n          };\n          if (this.amount) data.amount = this.amount;\n          const { token, error } = await this.stripe.createToken(data);\n          if (error) {\n            const errorElement = document.getElementById('card-errors');\n            errorElement.textContent = error.message;\n            console.error(error);\n            this.$emit('error 1', error);\n            return;\n          }\n          this.$emit('token', token);\n        } catch (error) {\n          console.error(error);\n          this.$emit('error', error);\n        } finally {\n          this.$emit('loading', false);\n        }\n      });\n    });\n  }\n}\n<\/script>\n\n<style scoped>\n.StripeElement {\n  box-sizing: border-box;\n\n  height: 40px;\n\n  padding: 10px 12px;\n\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  -webkit-transition: box-shadow 150ms ease;\n  transition: box-shadow 150ms ease;\n}\n\n.StripeElement--focus {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n\n.StripeElement--invalid {\n  border-color: #fa755a;\n}\n\n.StripeElement--webkit-autofill {\n  background-color: #fefde5 !important;\n}\n\n.hide {\n  visibility: hidden;\n}\n</style>\n"]},media:void 0})}),A,"data-v-1998d06b",!1,void 0,!1,y,void 0,void 0);e.StripeCheckout=c,e.StripeElements=E,Object.defineProperty(e,"__esModule",{value:!0})}));
