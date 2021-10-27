# CSS - The Complete Guide 2020

## Section 12: Working with Text and Fonts

__Code Samples:__
- practicing-07


### Introduction

- Generic & Font Families
- Using & Importing Font Families
- Font Properties
- Font Shorthand


### Comparing Generic Families & Font Families
- Generic:
    - serif
    - sans-serif
    - cursive
    - monospace
    - fantasy (not usual used)
- Font examples:
    - serif         -> Times New Roman, Georgia
    - sans-serif    -> Helvetica, Verdana
    - cursive       -> Brush Script, Mistral
    - monospace     -> Courier New, Lucia Bright


### Understanding the Browser Settings

What will be displayed?
1. Default: the font used is the default font defined in browser's preferences.
2. Generic Family: the font used is the default generic defined in browser's preferences.
3. Font Family: the font used is the font specified in the css

For the 3. option, the Font Family could not be available in browser.
In this case he user can import the font by:
- Safe locally in user's computer (should not by used)
- Web fonts - retrieve the front from third party
- Retrieved from server (example host server where website is deployed)


### Working with Google Fonts
- Fonts available in website: https://fonts.google.com

Import:
- option 1 - standard: add `<link>` to each HTML page
    - Example: `<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">`
    - cons: this could be error prone because developer can do mistakes
- option 2 - _@import_ - allow tto import in css file
    - Example: `@import url('https://fonts.googleapis.com/css?family=Roboto');`
    - pros: we can use a main css file that is included in all html file

### Understanding Font Faces & "font-style"
font-weight:
- 100 to 900
- 400 = normal

If we want to use other values, we need to empirically it in the import
Example: `@import url('https://fonts.googleapis.com/css?family=Roboto:400,900');`


### Importing our Custom Fonts

This approach is not recommended, because we are defining our own fonts, instead of using exiting ones

How to implement:
- Download font from https://fonts.google.com
- add download file into project
- in css file add `@font-face {
       font-family: "AnonymousPro";
       src: url("anonymousPro-Regular.ttf");
    }`


### Understanding Font Formats

Check compatibility in https://caniuse.com/

- ttf - TrueType and OpenType font
    - IE not full support
- woff - web open fon format
    - can be used in IE
    - the size is smaller, so better performance
- woff2
    - IE not support
    - Safari not full support
    - has the best performance


### Diving into Font Properties
- font-size
- font-variant
- font-stretch
- letter-spacing
- white-space
- line-height - depends of font family
- text-decoration
- text-shadow

Font Shorthand
- Must values:
    - font size
    - font family
- Optional values:
    - font-weight
    - font variant
    - font style
    - line-height

Order: style, variant, weight, size, line-height, family

System Fonts shorthand
```
font: menu;
```
```
font: status-bar;
```


### Loading Performance & "font-display"

It is used with _@font-face_.

Values:
- swap
- block
- fallback
- optional
- auto (default)

For more details check PDF file: See Notes-12-css-fonts-slides.pdf

Check compatibility in https://caniuse.com/

It is not support with all browsers (IE, Edge)


### Summary

__Generic & Font Families__
- Generic families as fallback in case font family is not available
- Define exact font by using a specific font family

__Importing Font Families__
- Font families must be available to be displayed correctly on the browser
- Locally installed font families vs. embedded font-families with `@font-face`
- Import font families from Google Fonts

__The “font” Properties__
- font-size
- font-style
- font-weight
- font-stretch
- font-variant
- letter-spacing
- white-space
- line-height
- text-decoration
- text-shadow

__font-display__
- Define the font family loading behaviour to ensure fonts are immediately visible for the user
- Available values mainly differentiate in block-period and swap-period

__The "font" Shorthand__
- Apply font family according to available systems fonts
- Shorthand for multiple font properties
- `font-size`& `font-family` are obligatory


### Useful Resources & Links

Dive Deeper into Selected Topics
- Web Safe Fonts: https://www.cssfontstack.com/
- Google Fonts: https://fonts.google.com/
- The "line-height" property: https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
