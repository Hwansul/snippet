# Node.firstChild & Node.lastChild

Get the first and last child nodes of a parent element, including nodes that aren’t elements (such as comments and text fragments).

```html
<ul>
 <!-- The gray wizard -->
 <li>Gandalf</li>
 <li>Radagast</li>
 <li>Hermione</li>
 <!-- The surprise hero -->
 <li>Neville</li>
</ul>
```

```js
let wizards = document.querySelector('ul');

// returns the comment node <!-- The gray wizard -->
let firstDescendant = wizards.firstChild;

// returns <li>Neville</li>
let lastDescendant = wizards.lastChild;
```
