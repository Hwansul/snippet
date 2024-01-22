# Window.getComputedStyle()

Get the actual computed style of an element. This factors in browser default stylesheets as well as external styles you’ve specified.

```js
let sandwich = document.querySelector('#sandwich');
let bgColor = window.getComputedStyle(sandwich).backgroundColor;
```
