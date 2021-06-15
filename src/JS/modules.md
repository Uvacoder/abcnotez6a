# Modules

[MDN JS Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

[javascript.info/modules-intro](https://javascript.info/modules-intro)



[freecodecamp - Modules Beginners guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc/)



In complex applications it makes sense to split JavaScript programs up into separate modules that can be imported when needed.  Modern browsers  support module functionality natively.



node.js uses `require`, modern versions of node can also use `import/export`



------

## Why use modules?

There are a lot of benefits to using modules:

**1) Maintainability:** Updating a single module is much easier when the module is decoupled from other pieces of code.

**2) Namespacing:** In JavaScript, variables outside the scope of a top-level function are global. Sharing global variables between unrelated code is a big [no-no in development](http://c2.com/cgi/wiki?GlobalVariablesAreBad).  Modules allow us to avoid namespace pollution by creating a private space for our variables.

**3) Reusability**



## [What is a module?](https://javascript.info/modules-intro#what-is-a-module)

A module is just a file. One script is one module. 

Modules can load each other and use  `export` and `import` to interchange functionality, call functions of one module from another one:

- `export` keyword labels variables and functions that should be accessible from outside the current module
- `import` allows the import of functionality from other modules.

```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hello, ${user}!`);
}
```

 another file may import and use it:

```javascript
// 📁 main.js
import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John!
```

##### in HTML

```html
<script type="module" src="index.js"></script>
```

`type="module"  ` is nescessary, otherwise it won't work

Modules support special keywords and features, we must tell the browser that a script should be treated as a module, by using the attribute `<script type="module">`.

```html
<script type="module">
	import { sayHi } from './sayHi.js';
	document.body.innerHTML = sayHi('John');
</script>
```

or

```html
<script src="app.js" type="module"></script>
```

> **Modules work only via HTTP(s), not locally** -> Use a local web-server like "live-server"

### Module-level scope

Each module has its own top-level scope -> each module has independent variables

Modules should `export` what they want to be accessible from outside and `import` what they need. Use import/export instead of relying on global variables.

##### A module code is evaluated only the first time when imported

If the same module is imported into multiple other modules, its code is executed only once, upon the first import. Then its exports are given to all further importers.

The module is executed only once. Exports are generated, and then they are shared between importers,

### [In a module, “this” is undefined](https://javascript.info/modules-intro#in-a-module-this-is-undefined)

```html
<script>
  alert(this); // window
</script>

<script type="module">
  alert(this); // undefined
</script>
```

------

## Syntax

------

### Export

[MDN export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)

There are two types of exports:

1. Named Exports (Zero or more exports per module)
2. Default Exports (One per module)

```js
// Exporting individual features
export let name1, name2, …, nameN; // also var, const
export let name1 = …, name2 = …, …, nameN; // also var, const
export function functionName(){...}
export class ClassName {...}

// Export list
export { name1, name2, …, nameN };

// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };

// Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;

```



```js
// ninjas.js
export const ninjas = ['shaun', 'yoshi', 'mario', 'peach'];

export const greet = () => {
  console.log(ninjas[0] + ' says hello');
};
```

or:

```js
// ninjas.js
const ninjas = ['shaun', 'yoshi', 'mario', 'peach'];

const greet = () => {
    console.log(ninjas[0] + ' says hello');
}

export { ninjas, greet }
```

You can also rename named exports to avoid naming conflicts:

```js
export { myFunction as function1,
         myVariable as variable };
```

### Default Export

- -> not importing an object!
- import can be any name
- only 1 default export!

```js
// Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
```

```js
// module "my-module.js"

export default function cube(x) {
  return x * x * x;
}
```

```js
import cube from './my-module.js';
console.log(cube(3)); // 27
```



------

### Import

[MDN import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

```js
// index.js

import { ninjas, greet } from './module.js'

console.log(ninjas);
greet()
```

or

```js
import * as module from './module.js';

console.log(module.ninjas);
module.greet();
```



#### Import entire content

```js
import * as myModule from '/modules/my-module.js';
```

call it like this:

```js
myModule.functionFromTheModule();
```

#### Import a single export

```js
import {myExport} from '/modules/my-module.js';
```

#### Import multiple exports

```js
import {foo, bar} from '/modules/my-module.js';
```

#### Import with alias

```js
import {reallyReallyLongModuleExportName as shortName}
  from '/modules/my-module.js';
```

```js
import {
  reallyReallyLongModuleExportName as shortName,
  anotherLongModuleName as short
} from '/modules/my-module.js';
```



### Import defaults

if you have a default export..

```js
import myDefault from '/modules/my-module.js';
```

combined:

```js
import myDefault, * as myModule from '/modules/my-module.js';
// myModule used as a namespace
```

or

```js
import myDefault, {foo, bar} from '/modules/my-module.js';
// specific, named imports
```





#### [Import a module for its side effects only](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#import_a_module_for_its_side_effects_only)

Import an entire module for side effects only, without importing anything. This runs the module's global code, but doesn't actually import any values.

```
import '/modules/my-module.js';
```

This works with [dynamic imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports) as well:

```
(async () => {
  if (somethingIsTrue) {
    // import module for side effects
    await import('/modules/my-module.js');
  }
})();
```



------

### [Dynamic Imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports)



------

## Modules in Node - require

- node [uses CJS module format](https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/).
- CJS imports module synchronously
- When CJS imports, it will give you a **copy** of the imported object.
- CJS will not work in the browser. 

[https://www.sitepoint.com/understanding-module-exports-exports-node-js/](https://www.sitepoint.com/understanding-module-exports-exports-node-js/)

### module.exports

To make  functions available to other files, add them as properties to the built-in `module.exports` object:

(This shows 2 ways of exporting functions from a module - Both approaches  store a function within the `module.exports` object. )

```js
/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}
 
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
 
module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};
```

or 

```js
module.exports = celsiusToFahrenheit
```

`module.exports` is an object that is built-in to the Node.js runtime environment. Other files can now import this object, and make use of these  functions, with the `require()` function.

### require()

The `require()` function accepts a string as an argument. That string provides the [file path](https://www.freecodecamp.org/news/requiring-modules-in-node-js-everything-you-need-to-know-e7fbd119be8/) to the module you would like to import.

```js
/* water-limits.js */
const converters = require('./converters.js');
```

`./` is a relative path indicating that **converters.js** is stored in the same folder as **water-limits.js**. When you use `require()`, the entire `module.exports` object is returned and stored in the variable `converters`. 

All exported methods can be used by `converters.methodName`

### Using Object Destructuring to be more Selective With `require()`

You can use object destructuring to extract only the needed functions.

```js
/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./converters.js');
const fahrenheitValue = celsiusToFahrenheit(input);
```

-> you can access the function directly 

### Export

```js
function requestHandler(req, res) { 
	// ...
}

// or:

// const requestHandler = (req, res) => {
//		// ...
// }

module.exports = requesthandler
```

or to use as: `modulename.handler`

```js
module.exports = {
	handler: requestHandler,
	someText: 'Some hard coded text'
}
```

or

```js
module.exports.handler = requestHandler;
module.exports.someText = 'Some hard coded text'
```

or shortcut:

```js
exports.handler = requestHandler;
exports.someText = 'Some hard coded text'
```

#### Function directily in the Object:

```js
module.exports = {
    circleArea:  (radiusLength) => {
    return PI * radiusLength * radiusLength
  },
    squareArea: function (sideLength) {
    return sideLength**2
  }
}
```

or

```js
module.exports = {
  circleArea (radiusLength) {
  	return Math.PI * radiusLength * radiusLength
  },
  squareArea (sideLength) {
  	return sideLength**2
  )
}
```

### Import

use `require` -> node will look for `module.exports`

```js
const module = require('./module.js')
```

example:

```js
const http = require('http')

const routes = require ('./routes,js') // custom module

const server = http.createServer(routes)
//-> will use the function stored in routes for incoming requests

server.listen(3000)

```



------

#### CommonJS format 

the standard in Node.js
