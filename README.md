# scroll-to-js
NPM package of a pure js scroll to element without the usage of jQuery

It's a simple function using promises to get the same effect as jQuery's animate without the use of the same

## Usage
The arguments are (element, target, duration), target it can be a number or the element's offset to top, usually i use this kind of functions to scroll the body

###### Just require it
 ```javascript
 let scroller = require('scroll-to-js')
 ```

###### Find an element
```javascript
let elem = document.querySelector('#element')
```

###### Execute it
```javascript
scroller(document.body, elem.offsetTop, 1000)
```

###### TODO
* Make document body as default
* Change arguments order
* Add more validations
