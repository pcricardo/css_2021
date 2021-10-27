# CSS - The Complete Guide 2020

## Section 8:Size & Units

__Code Samples:__
- practicing-03

### Introduction

- Theory - witch units can we use
- "%" and the container block
- "min-width" and "max-width"
- Understand "rem" vs "em"
- Working "vw" and "vh"

### Where Units Matter - Pixels, Percentage & More

Units:
- pixels [px]
- percentage [%]
- root em [rem] - refers font size
- em [em] - refers to font size
- viewport height [vh]
- viewport width [vw]

Which property can I use in connection with these units?
- font-size
- padding, border, margin
- width, height
- top, bottom, left, right

How is the size calculated?
- Absolute Lengths
    - mostly ignore user settings
    - example: px cm, mm, etc
- Viewport Lengths
    - adjust to current viewport length
    - example: vh, vw, vmin, vmax
- Font-Relative Lengths
    - adjust to default font size
    - example: rem, em
- Percentage - special case

What is the right unit to choose?
- see pdf attachment: Notes-08-css-units-slides.pdf

How is the box size for % units calculated?
- box height
- box with

### Rules to remember

Fixed position & "%"
- Element with  `position: fixed`
    - when we set width - the container block is the viewport
    - example: main-header
- Element with  `position: absolute`
    - when we set width - the container block is ancestor content + padding
    - how identify ancestor - element with position absolute, relative, fixed, or sticky (i.e. not static)
    - example: product overview text
- Element with `position: static` or `position: relative`
    - when we set width - the container block is ancestor content (not include padding)
    - how identify ancestor - closest block level element
    - example: testimonial__image-container

### Defining the Font Size in the Root Element
Normally it is not used.

To use, set font in html tag.
Example: `html { font-size: 75px; }`

### Using "min-width/height" & "max-width/height"
Example: we can combine multiple sizes
```
  .testimonial__image-container {
    width: 65%;
    max-width: 580px;
    min-width: 300px;
  }
```

### Working with "rem" & "em"

- prefers "rem" instead of "em"
- "rem" uses initial font-size

### Adding "rem" to Additional Properties

- we can use in another properties like: margin, padding
- it is not recommended use "em"/"rem" with: borders, box-shadow

### Understanding the Viewport Units "vw" &"vh"

- 100vh = 100% or viewport
- 80vw = 80% of viewport
- vmin - the small viewport (height or width)
- vmax - the maximum viewport (height or width)
- __Downside__: partial support in IE (https://caniuse.com/?search=vw)

### Windows, Viewport Units & Scrollbars

Hiding Scrollbars on Windows machines

After adding `vw` , you probably saw that the scrollbars appeared in case you are working on Windows.
This happens as using `vw`  on Windows does not include the scrollbars - `vw: 100`  is  equal to 100% of the viewport width + the scrollbars.
On the Mac this is not an issue, but when using Windows it is as the scrollbars are displayed by default.

In case you don't want to display these scrollbars, you can use one of these solutions:

- Use `width: 100%`  instead of `vw: 100`
- Add `overflow-x: hidden;` to the `body` selector in the shared.css file to hide the horizontal scrollbar (or `overflow-y: hidden` to hide the vertical scrollbar)

Alternatively you could also use the ``::-webkit-scrollbar` pseudo element. Simply add the following code to the shared.css file:
```
    body: :-webkit-scrollbar {
        width: 0
    }
```

To make sure this works correctly on different browsers, you have to add additional code to it.
This [blog post](https://web.archive.org/web/20180505112131/https://blogs.msdn.microsoft.com/kurlak/2013/11/03/hiding-vertical-scrollbars-with-pure-css-in-chrome-ie-6-firefox-opera-and-safari/)
nicely summarizes all the code needed right here.

Make sure to follow these approaches in case you don't want to display the scrollbars on Windows machines.

### Choosing the Right Unit

Property |"Recommended" Unit  |
------------------- | -------------------
| font-size (root element)|"%", "nothing"|
| font-size (in general) | "rem", <br> "em" (only for children) |
| padding | "rem" |
| margin | "rem" |
| border | "px" |
| width, height | "%", vw, vh |
| top, bottom | "%" |
| left, right | "%" |

###  Using "auto" to Center Elements

Example:
```
.plan__list {
  width: 80%;
  margin: auto;
  text-align: center;
}
```
- `margin: auto` only works for block level elements with an explicitly assigned width though.

### Summary

- Units:
    - pixels (px)
    - percentages (%)
    - rem & em
    - viewport ( vh & vw)
    - auto (for margins, to align object to the center)
- The container block
    - The reference point when applying % units to an element
    - Depends on the position property applied to this element
    - Can be the closest ancestor or the viewport
- 100% Height
    - The element itself and the ancestor use position _static/relative_ => 100% height is not working
    - Adding 100% height to all ancestor fixes this issue
    - Position _fixed/absolute_ or using viewport units (vw or vh) as alternatives
-  Min/Max-Width property
    - Always use theses in combination with the _width_ property
    - Set _width_ to a relative value (e.g. %) and the _min/max_ value to _px_ to limit the element size
    - Also available to _height_
- Em & Rem
    - Sizes always depend on the font-size of the root element (rem) or the element itself (em)
    - Not restricted to _font_size_

### Useful Resources & Links

Dive Deeper into Selected Topics:
- Font size properties and values: https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
- Viewport units and browser support: https://caniuse.com/#search=vh
