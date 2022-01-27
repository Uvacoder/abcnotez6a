(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{455:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"env"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#env"}},[e._v("#")]),e._v(" .ENV")]),e._v(" "),s("h2",{attrs:{id:"use-the-env-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-env-file"}},[e._v("#")]),e._v(" Use the .env File")]),e._v(" "),s("p",[e._v("a hidden file that is used to pass environment variables to your application.")]),e._v(" "),s("p",[e._v("This file is secret, no one but you can access it, and it can be used to store data that you want to keep private or hidden. For example, you can store API keys from external services or your database URI. You can also use it to store configuration options.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("environment variables are accessible from the app as "),s("code",[e._v("process.env.VAR_NAME")]),e._v(".")])]),e._v(" "),s("li",[s("p",[s("code",[e._v("process.env")]),e._v("  is a global Node object, and variables are passed as strings.")])]),e._v(" "),s("li",[s("p",[e._v("By convention, the variable names are all uppercase, with words separated by an underscore")])]),e._v(" "),s("li",[s("p",[s("code",[e._v(".env")]),e._v(" is a shell file, so you don’t need to wrap names or values in quotes")])]),e._v(" "),s("li",[s("p",[e._v("there cannot be space around the equals sign when you are assigning values to your variables, e.g. "),s("code",[e._v("VAR_NAME=value")])])]),e._v(" "),s("li",[s("p",[e._v("Usually, you will put each variable definition on a separate line.")])])]),e._v(" "),s("h2",{attrs:{id:"dotenv"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dotenv"}},[e._v("#")]),e._v(" DOTENV")]),e._v(" "),s("p",[e._v("Loads environment variables from a "),s("code",[e._v(".env")]),e._v(" file into "),s("a",{attrs:{href:"https://nodejs.org/docs/latest/api/process.html#process_process_env",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("process.env")]),s("OutboundLink")],1)]),e._v(" "),s("p",[e._v("https://www.npmjs.com/package/dotenv")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm i dotenv\n")])])]),s("p",[e._v("As early as possible in your application, require and configure dotenv.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("require('dotenv').config()\n")])])]),s("p",[e._v("Create a "),s("code",[e._v(".env")]),e._v(" file in the root directory")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("DB_HOST=localhost\nDB_USER=root\nDB_PASS=s1mpl3\n")])])]),s("p",[s("code",[e._v("process.env")]),e._v(" now has the keys and values you defined in your "),s("code",[e._v(".env")]),e._v(" file.")]),e._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" db "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'db'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\ndb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  host"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("DB_HOST")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  username"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("DB_USER")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[e._v("DB_PASS")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("blockquote",[s("p",[e._v("convention: also add a "),s("code",[e._v(".env.example")]),e._v(" file, that shows the structure")])]),e._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/github/gitignore",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github collection of .gitignore-templates"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);