# Utils.js

A small collection of simple JavaScript utility functions.
No dependencies, single file, easy to use.

## Features

* Lightweight
* No dependencies
* Works in browser and Node.js
* Copy & use immediately

## Usage

### Browser

```html
<script type='text/javascript' src='Utils.js'></script>
<script type='text/javascript'>
	console.log(Utils.Romanize(12));//XII
</script>
```

### Node.js

```js
const Utils=require('./Utils');

console.log(Utils.choose([1,2,3]));
```

## Functions

### DOM

* `l(what)` — Shortcut for `document.getElementById`

### Text

* `EscapeRegExp(str)` — Escape special regex characters
* `ReplaceAll(find, replace, str)`
* `Lig(str)` — Replace ligatures (ffi, fl, etc.)
* `utf8_to_b64(str)`
* `b64_to_utf8(str)`

### Utilities

* `choose(arr)` — Random element from array
* `Romanize(num)` — Convert number to Roman numerals

### Events

* `AddEvent(el, ev, func)`
* `RemoveEvent(handle)`

## License

MIT License
