# Node.childNodes

Get the immediate descendants of an element, including text fragments and other non-element nodes.

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

// returns all nodes, including the comments
let descendants = wizards.childNodes;
```
