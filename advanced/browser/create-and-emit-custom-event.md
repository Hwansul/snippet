# CustomEvent()

Create and emit custom events.

The `CustomEvent()` method accepts two arguments: an event name, and and object of options. In the options, you can specify if the event should bubble and be cancelable (both `false` by default). You can also pass along additional information that an event listener can use with the `detail` property.

After setting up your event, call the `dispatchEvent()` method on your element and pass in the event as an argument.

```js
// Create a new event
let event = new CustomEvent('myCustomEvent', {
 bubbles: true,
 cancelable: true,
 detail: {
  someDetail: 'the detail value'
 }
});

// Dispatch the event
let elem = document.querySelector('#the-element-to-emit-on');
elem.dispatchEvent(event);
```
