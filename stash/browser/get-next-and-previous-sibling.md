# Node.nextElementSibling & Node.previousElementSibling

Get the next and previous sibling element of an element.

```html
<ul>
 <!-- The gray wizard -->
 <li>Gandalf</li>
 <li>Radagast</li>
 <li id="hermione">Hermione</li>
 <!-- The surprise hero -->
 <li>Neville</li>
</ul>
```

```js
let hermione = document.querySelector('#hermione');

// returns <li>Neville</li>
let next = hermione.nextElementSibling;

// returns <li>Radagast</li>
let previous = hermione.previousElementSibling;
```
