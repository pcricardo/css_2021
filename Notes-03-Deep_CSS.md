# CSS - The Complete Guide 2020

## Section 3:Diving Deeper into CSS

### Introduction
- The box model
- Height & Width
- The "dysplay" property
- Properties worth to remember
- Pseudo classes & elements

### The Box Model
- Padding
- Border 
- Margin

In general: Use either _margin-top_ or _margin-bottom_. 
Because of margin collapsing, bigger margin "wins".

**Deep Dive on "Margin Collapsing"**

When working with margins, you can get unexpected results. 

Why are two adjacent elements sharing one margin even though each element has its own one?

Why does a parent element (e.g. `<section>`  as in the videos) suddenly take on the margin of the child element (e.g. `<h1>` )?

It's always related to margin collapsing. You can dive deeply into it with the help of the following awesome article: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing

There, three base cases are described:

1. Adjacent siblings which both have margins
2. A parent which holds one or more child elements where the first and/ or last (or the only) child has margins
3. An element without content, padding, border and height

Let's explore these cases:

1. Adjacent Siblings

In this case, the first element might have a margin of 10px  (on all sides let's say) and the second one has 5px  (or 20px  - the values don't matter).

CSS will collapse the margins and only add the bigger one between the elements. So if we got margins of 10px  and 5px , a 10px  margin would be added between the elements?

2. A parent with children that have a margin

To be precise, the first and/ or last or the only child has to have margins (top and/ or bottom). In that case, the parent elements margin will collapse with the child element(s)' margins. Again, the bigger margin wins and will be applied to the parent element.

If the parent element has padding, inline content (other than the child elements) or a border, this behavior should not occur, the child margin will instead be added to the content of the wrapping parent element.

3. An empty element with margins

This case probably doesn't occur that often but if you got an element with no content, no padding, no border and no height, then the top and bottom margin will be merged into one single margin. Again, the bigger one wins.

### Height & Width
By default when define height and width, it does not include padding, border, or margin.

To include padding or border, there is a need to define `box-sizing: border-box;`. 

Margin is not included.

The `box-sizing: border-box;`is very used, that usualy it is declared in universal selector.
Example:
```
* {
	box-sizing: border-box;
}
```


### The "display" Property
- none - remove element from document flow (not from DOM) 
- inline (default)
- block
- inline-block

**display: none vs visibility: hidden**

We had a look at `display: none;`. This value removes the element from the document flow. This means that the element is not visible and it also doesn't "block its position". Other elements can (and will) take its place instead.

There is an alternative to that though.

If you only want to hide an element but you want to keep its place (i.e. other elements don't fill the empty spot), you can use `visibility: hidden;` 

### Properties worth to remember
- color
- background-color
- display
- padding
- border
- margin
- width
- height
- text-decoration: removes underline if anchors tags
- vertical-align

### Pseudo Classes & Elements
- class (: class name): defines the styçe of a __special state__ of an element.
- Element (: : element name): defines the style of a __specific part__ of an element.

### Summary
- The Box Model	
	- Content
	- Padding
	- Border
	- Margin
- Styling Width & Height
	- px or % (or other units)
	- % refers to container
	- width and height
	- box-sizing can be 'content-box' (default) or 'border-box'
- The "display" property
	- Control behavior (block vs inline) of elements
	- Mix behavior via 'inline-block'
	- Remove elements via 'none'
	
### Resources
- CSS Box Model: https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model
- box-sizing : https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
- More on height & width: https://www.w3schools.com/css/css_dimension.asp
- The display  Property: https://developer.mozilla.org/en-US/docs/Web/CSS/display
- Pseudo Classes on the MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
- Dive deeper into Pseudo Elements: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
