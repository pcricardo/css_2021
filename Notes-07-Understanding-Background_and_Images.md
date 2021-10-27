# CSS - The Complete Guide 2020

## Section 7:Understanding Background Images & Images

__Code Samples:__
- practicing-02


### Introduction
- Understanding the "background" property
- Images & Background Images
- Gradients
- Filters

### Understanding "background"
- background-size
    - 300px 300px - define width and height
    - auto - 100%
    - cover - insure the image fills the entire container
    - contain - insure the full image is visible in the container
- background-repeat:
    - no-repeat
    - repeat-x
    - repeat-y
- background-position: "left" "top" "right" "bottom"
    - px
    - %
    - center = 50% 50%
    - left top = 0% 0%
    - left bottom

### The "background" Shorthand - Theory
- background is a shorthand property
- change image
    - background-image
    - background-position
    - background-size
    - background-repeat
    - background-origin - set background position area
    - background-attachment
- not change image
    - background-color
    - background-clip - define whether background extends underneath border

### Styling Images
How to show large image `<img>` that only only occupy the size of parent?
- In parent set:
    - height to some px
    - display to `inline-block`
- In image set height to 100%

Example:
```
.main-header__brand {
    height: 22px;
    display: inline-block;
}

.main-header__brand img {
    height: 100%;
}
```

### Understanding Linear Gradients
- Gradients are treated as images
- Example: `background-image: linear-gradient(red, blue);`
- function linear-gradient applyed to `background-image`
    - first parameter: color or direction
    - other params: list of colors

### Radial Gradients
- features:
    - shape: elipse (default) or circle
        - `radial-gradient(circle, red, blue, green)`
    - position
        - `radial-gradient(circle at top left, red, blue, green)`
        - `radial-gradient(circle at 20% 50%, red, blue, green);`

### Stacking Multiple Backgrounds
- background - we can define multiple backgrounds
    - url(...)
    - linear-gradient
    - url(...)
    - color - only one background-color can be used!

### Filter
- options:
    - url
    - blur
    - contrast
    - grayscale
    - hue-rotate
    - drop-rotate
    - (...)

### Summary
The “background” Property
- background-image
- background-color
- background-position
- background-size
- background-origin
- background-clip
- background-repeat
- background-attachment

The “background” Shorthand
- Watch out for `background-position`and `background-size` (center/cover)
- As all shorthands: Overwrites other properties

Gradients
- Linear and radial gradients
- Linear gradients: Direction + color stops
- Radial gradients: shape, size, position and color stops

Multiple Backgrounds
- You can stack background images(only one solid color which has to beat the bottom)
- Using transparency can create cool effects

Image vs background-image
- `<img>` is better for accessibility but way more difficult to style
- background-image can be sized and positioned easier

Filters
- Easily add visual effects to boxes
- Affect all content

### Resources
- The background  Property: https://developer.mozilla.org/en-US/docs/Web/CSS/background
- Styling Images: https://www.w3schools.com/css/css3_images.asp
- Filters: https://developer.mozilla.org/en-US/docs/Web/CSS/filter
- Styling SVG: https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/SVG_and_CSS
