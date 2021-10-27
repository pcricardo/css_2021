# CSS - The Complete Guide 2020

## Section 9: Working with JavaScript & CSS

__Code Samples:__
- practicing-04


### Introduction

- Manipulating styles via JavaScript
- Adding & Removing CSS classes via JS


### Selecting & Manipulating Styles with JavaScript

How organize code?
- Good practice, javascript code should be added in separate file.

How Import javascript file into html file
- at end of _body_ tag, add `<script src="shared.js"></script>`
- by add import at end of body, we have sure all html page is loaded before we start run javascript code.

JS document
- querySelector: select the __first__ element that it found
- querySelectorAll: select all elements found
- Styles presented are inline styles(it is not styled added in css files)

JS debug:
- console.log()
- console.dir();

### Adding an Event Listener

- add event listener to HTML element
- create function in JS code

Example change style using JS
```
var selectPlanButton = document.querySelectorAll('.plan button');
for(var i = 0; i < selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}
```


### Manipulating Element Classes

We learn how to manipulate element by using _style_.
For example: `modal.style.display = 'block';`.
But there is another way.

- In CSS add a class (example: `.open { display: block; }`
- In JS override DOM class. __This will actually override the complete class.__
    - Example: `modal.className = 'open';`
- In JS add/remove class do DOM element, by using _classList_ property
    - _classList_: add, remove, toggle
    - Example: `modal.classList.add('open');`


### Understanding Property

How to access properties in JS?
- camel case - `modal.style.backgroundImage`
- property name - `modal.style['background-image']`


### Summary

- Accessing Style Properties
    - Access CSS _styles_ on DOM elements via the _style_ property
    - Access via camelCase notation (e.g. backgroundImage) or by using strings (e.g. 'background-image')
- Add & Remove CSS Classes
    - Use _className_ or _classList_
    - _classList_ is easier and more flexible


### Useful Resources & Links

- JavaScript Basics: https://academind.com/learn/javascript
- JavaScript CSS Styles: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
- classList : https://developer.mozilla.org/en-US/docs/Web/API/Element/classList