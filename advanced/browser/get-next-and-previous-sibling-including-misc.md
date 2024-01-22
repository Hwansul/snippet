# Node.nextSibling & Node.previousSibling

Get the next and previous sibling node of an element, including nodes that aren’t elements (such as comments and text fragments).

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

// returns <!-- The surprise hero -->
let next = hermione.nextSibling;

// returns <li>Radagast</li>
let previous = hermione.previousSibling;
```
