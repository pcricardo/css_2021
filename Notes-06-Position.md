# CSS - The Complete Guide 2020

## Section 6:Positioning Elements with CSS

__Code Samples:__
- Section6-Fixed-Position
- practicing-01


### Introduction
- Understanding the "position" property
- Fixed navigation bars with "fixed"
- Position elements with "z-index"
- Using "absolute" and "relative" - stans alone and combined
- "Sticky" position
- The "Stacking Context"


### Understanding the "position" property
Position:
- static - default
- absolute
- relative
- fixed
- sticky

Document flow: top, right, bottom, left

Position Context: div, viewport, html, body, etc

### Fixed navigation bars with "fixed"

Example:
```
.parent .child-1 {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	margin: 0;
	box-sizing: border-box /* to include right border in page */
}
```

In example, the position __fixed__ is related to viewport.

We can apply `position: fixed` to:
- inline element like _span_
- or block level element like _div_

### Position elements with "z-index"
- z-index auto equals to 0
- z-index does not have impact for elements that has default position 

### Using "absolute" and "relative" - stans alone and combined

Example:
```
.package {
    position: relative;
}

.package__badge {
    position: absolute;

}
```

In the example, the position of _badge_, will be relative with the ancestor _package_, because the ancestors was relative position defined. 


Absolute:
- if we do __not__ have any ancestors with position property applied, then the position context is the HTLM element.
- if we do have any ancestors with position property applied, then the element will be positioned in relation to the closest ancestor which has such a position property applied.

### Working with "overflow" and Relative Positioning

```
overflow: hidden;
```

It hidde child elements if thwey get outside the parent.

If parent is _body_ we need a workarround.
That is, we nedd apply `overflow: hidden`into body and html.


### "Sticky" position


### The "Stacking Context"


### Summary
- The "position" Property
	- static (default)
	- fixed
	- absolute
	- relative
	- sticky
- The "Document Flow"
	- The default position behaviour of html elements
	- Can be changed with _position_
	- Elements can remain in the document flow or be excluded from it
- Moving Elements
	- top, bottom, left, right
- Positioning Context
	- Defines the anchor point for your position change
	- For _fixed_, the viewport is the position context
	- For _absolute_, another element is the position context
	- For _relative_, the element itself is the position context
	- The viewport and another element for _sticky_
- Z-Index
	- Changes the default element position along the z-axis
	- _auto (0)_ as the default value
	- Changes only possible when _position_ is applied
	- Larger value = element is positioned on top of other elements
- Stacking Context
	- Created when applying _fixed / sticky_, or _absolute / relative_ in combination with _z-index_
	- Defines ctacking behaviour of child elements


### Useful Resources & Links

Dive Deeper into Selected Topics

- Positioning theory: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning
- More about the "position" property: https://developer.mozilla.org/en-US/docs/Web/CSS/position
- The z-index: https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
- The Stacking Context: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
- The "sticky" value and current browser support: https://caniuse.com/#search=sticky
