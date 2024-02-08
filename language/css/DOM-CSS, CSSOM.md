# DOM-CSS / CSSOM

| Major object types 1 | Major object types 2 | Important method |
| ---- | ---- | ---- |
| [`Document.styleSheets`](https://developer.mozilla.org/en-US/docs/Web/API/Document/styleSheets) | [`HTMLElement.style`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) | [`CSSStyleSheet.insertRule()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule) |
| `styleSheets[i].cssRules` | `HTMLElement.style.cssText` (just style) | [`CSSStyleSheet.deleteRule()`](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule) |
| `cssRules[i].cssText` (selector & style) | [`Element.className`](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) |  |
| `cssRules[i].selectorText` | [`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) |  |