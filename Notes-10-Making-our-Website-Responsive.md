# CSS - The Complete Guide 2020

## Section 10: Making our Website Responsive

__Code Samples:__
- practicing-05


### Introduction

- Hardware vs. Software Pixels
- The "viewport" `<meta>` Tag in HTML
- Media Queries with @meta


### Comparing the Viewport Metatag (HTML) and Media Queries (CSS)

Witch Tools do we have to have a responsible design?
- Viewport - HTML
    - Adjust ste to device viewport
        - Example: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
    - Can not design changes
- Media Queries - CSS
    - Allow change design depending on size
    - Design changes are defined by us (in css code)


### Understanding the "viewport" Metatag

`<meta name="viewport" content="width=device-width, initial-scale=1.5, maximum-scale=2.0, minimum-scale=1.0">`
- viewport - target is viewport
- content
    - device-width - set with of page
        - for smaller device it will implement pixel ratio conversion
    - initial-scale - define zoom level of device
        - 1.0 = default value
    - user-scalable -  not recommended
        - values: yes (default), no
    - maximum-scale
    - minimum-scale


### Adding our First Media Queries

```
@media(min-width: 40rem) {
    #product-overview {
        height: 40vh;
        background-position: 50% 25%;
    }
    #product-overview h1 {
        font-size: 3rem;
    }
}
```


### Finding the Right Breaking Points

Search information on site: mydevice.io.

Look for compare devices, and see width column CSS.

Good breaking point:
- small tablet - 768
- big screen - 1000

In CSS file, the media queries should be placed at the bottom of file.



### Summary

- Responsive Design
    - Required to ensure that our website looks beautiful on all devices
- The Viewport Metatag
    - Should be added to your HTML files to adjust the viewport to device size
    - Converts "hardware pixels" into "software pixels" and therefore takes into account the actual device width
- Media Queries
    - Allow us to change properties and therefore the entire design depending on device widths/heights
    - Added to the CSS code with @media


### Useful Resources & Links

- https://www.mydevice.io/#compare-devices
- Dive Deeper into Selected Topics
    - Absolute lengths on W3.org: https://www.w3.org/TR/css-values-3/#absolute-lengths
    - More about device sizes: https://bjango.com/articles/min-device-pixel-ratio/
    - Media queries theory: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries
    - Applying media queries: https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries