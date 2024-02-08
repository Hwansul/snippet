### Advanced topics

#### CORS enabled image
- The crossorigin attribute, in combination with an appropriate [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) header, allows images defined by the `<img>` element to be loaded from foreign origins and used in a `<canvas>` element as if they were being loaded from the current origin.

#### CORS settings attributes
- Some HTML elements that provide support for [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), such as `<img>` or `<video>`, have a `crossorigin` attribute (`crossOrigin` property), which lets you configure the CORS requests for the element's fetched data.

#### Preloading content with rel="preload"
- The `preload` value of the `<link>` element's `rel` attribute allows you to write declarative fetch requests in your HTML `<head>`, specifying resources that your pages will need very soon after loading, which you therefore want to start preloading early in the lifecycle of a page load, before the browser's main rendering machinery kicks in. This ensures that they are made available earlier and are less likely to block the page's first render, leading to performance improvements. This article provides a basic guide to how `preload` works.