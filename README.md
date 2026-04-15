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

* `l(_what)` — Shortcut for `document.getElementById`

### Text

* `EscapeRegExp(_str)` — Escape special regex characters
* `ReplaceAll(_find,_replace,_str)`
* `Lig(_str)` — Replace ligatures (ffi, fl, etc.)
* `utf8_to_b64(_str)`
* `b64_to_utf8(_str)`

### Utilities

* `choose(_arr)` — Random element from array
* `Romanize(_num)` — Convert number to Roman numerals

### Events

* `AddEvent(_el,_ev,_func)`
* `RemoveEvent(_handle)`

## License

MIT License
