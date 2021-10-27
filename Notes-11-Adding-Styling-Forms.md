# CSS - The Complete Guide 2020

## Section 11: Adding & Styling Forms

__Code Samples:__
- practicing-06


### Introduction

- Styling Inputs & Buttons
- Validation Feedback Styles


### Understanding Advanced Attribute Selectors

Element with attribute
```
[type] { color: red; }
<input type="text">
```

Element with specific attribute value
```
[type="email"] { color: red; }
<input type="email">
```

Element with specific attribute value in list
```
[lang~"en-us"] { color: red; }
<p lang="en-us en-gb">Hi!</p>
```

Element with specific attribute value/value
```
[lang|"en"] { color: red; }
<p lang="en-us">Hi!</p>
```

Element with specific attribute value prefix
```
[href^"#"] { color: red; }
<a href="#all">LINK</a>
```

Element with specific attribute value suffix
```
[href$".de"] { color: red; }
<a href="abc.de">LINK</a>
```

Element with at least one attribute value
```
[src*cdn#"] { color: red; }
<img src="abc.cdn.com">
```

Element with at least one attribute value with Case-Insensitively
```
[src*cdn#" i] { color: red; }
<img src="abc.CDN.com">
```


### Styling the Checkbox
For inputs like "select" or "checkbox", we need override browser css
Example:
```
.signup-form input[type="checkbox"] {
    border: 1px solid #ccc;
    background: white;
    width: 1rem;
    height: 1rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}

.signup-form input[type="checkbox"]:checked {
    background: #2ddf5c;
    border-color:  #0e4f1f;
}
```

### Providing Validation Feedback
Solution 1 - manual approach
- in css define a class
    ```
    .signup-form input.invalid,
    .signup-form select.invalid {
        border-color: red;
        background-color: #faacac;
    }
    ```
- in html add class to input form elements
    ```
    <input type="checkbox" id="agree-terms" class="invalid">
    ```

Solution 2 - use special sudo selectors
- in css use valid/invalid
    ```
    .signup-form :invalid{
        border-color: red !important;
        background-color: #faacac;
    }
    ```
- in html add properties to inputs:
    - Examples:
        - `required`
        - uses HTML 5 validators
        - use inputs with internally validators: like email


### Summary

- Styling Inputs
    - Input elements tend to have many browser default styles
    - Use pseudo-selectors (:focus) to provide good user feedback
    - _outline_ vs _border_
- Validation Feedback
    - `:valid` and `:invalid` pseudo selectors
    - Manual validation feedback via class addition (e.g. invalid)


### Useful Resources & Links

- Styling Form Elements: https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Styling_HTML_forms
- Styling a <select>  Element: https://stackoverflow.com/questions/1895476/how-to-style-a-select-dropdown-with-css-only-without-javascript