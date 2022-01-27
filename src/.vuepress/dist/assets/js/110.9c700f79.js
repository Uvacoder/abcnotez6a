(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{497:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nested-callbacks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nested-callbacks"}},[t._v("#")]),t._v(" Nested Callbacks")]),t._v(" "),a("p",[t._v("JS can handle callbacks.")]),t._v(" "),a("p",[t._v("When your application grows more complex, you can have callbacks in callbacks in callbacks...")]),t._v(" "),a("p",[t._v("hard to read and hard to understand -›  callback hell")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Tip:")]),t._v(' Using callbacks can be quite "messy"  This problem is commonly known as "callback hell". This problem can be reduced by good coding practices (see http://callbackhell.com/), using a module like '),a("a",{attrs:{href:"https://www.npmjs.com/package/async",target:"_blank",rel:"noopener noreferrer"}},[t._v("async"),a("OutboundLink")],1),t._v(", or moving to ES6 features like "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"}},[t._v("Promises"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Note:")]),t._v(" A common convention for Node and Express is to use error-first callbacks: the first value in your "),a("em",[t._v("callback functions")]),t._v(" is an error value, while subsequent arguments contain success data.  good explanation: "),a("a",{attrs:{href:"http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Node.js Way - Understanding Error-First Callbacks"),a("OutboundLink")],1),t._v(" (fredkschott.com).")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction#using_asynchronous_apis",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Using asynchronous APIs"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Using callbacks is slightly old-fashioned now, but you'll still see them in use in a number of older-but-still-commonly-used APIs.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("btn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'You clicked me!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pElem "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  pElem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a newly-added paragraph.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pElem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Note that not all callbacks are async — some run synchronously. An example is when we use "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Array.prototype.forEach()")]),a("OutboundLink")],1)]),t._v(" "),a("blockquote",[a("p",[t._v("Better to use Promises")])])])}),[],!1,null,null,null);s.default=n.exports}}]);