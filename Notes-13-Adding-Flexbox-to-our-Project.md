# CSS - The Complete Guide 2020

## Section 12: Adding Flexbox to our Project

__Code Samples:__
- practicing-08
- Section13-flexbox-creating-a-flex-container-starting-code


### Introduction

Flexbox new modern way to develop website.

- The Flex-Container
- Main Axis vs. Cross Axis
- The Flex Items


### Understanding Flexbox
Parent = Fex Container

Property:
- display
    - flex
    - inline-flex
- flex-direction
    - row (default)
    - row-reverse
    - column
    - column-reverse
- flex-wrap
    - nowrap (default)
    - wrap
    - wrap-reverse
- flex-flow
- justify-content
    - center
    - flex-end
    - space-between
- align-content
    - center
    - flex-start
- align-items
    - stretch (default)
    - center
    - flex-start
    - flex-end


Children = Flex Items

Property:
- order
    - default = 0;
- flex-grow
- align-self: allow define position of single element in cross axis
    - flex-start
    - flex-end
- flex-shrink
    - 1 => default
    - 0 => do not shrink
    - grater than 0 => define "amount" of shrink related with others items with flex-shrink defined
- flex-basis
    - when flex direction equals row
        - auto => default
        - flex-basis override with
    - when flex direction equals column
            - auto => default
            - flex-basis override height


### Understanding the Importance of Main Axis & Cross Axis

flex-direction:
- row - XY = top left
- row-reverse - XY = top right
- column - XY = top left
- column-reverse - XY = bottom left


### Improving the Navigation Bar with Flexbox

By using flexbox we can replace:
- display inline block
- with calc function


### Flexbox and the Z-Index

In the position module we learned that adding the __z-index__ to an element only has an effect, if the __position__ property with a value different from __static__ was applied to this element.

One exception from this behaviour is flexbox: Applying the __z-index__ to flex-items (so the elements inside of the flex-container) will change the order of these items even if no __position__ property was applied.

You will need the __z-index__ for flex-items in the following assignment, so keep that special behaviour in mind.


### Summary

- Flexbox
    - Changes the way elements are displayed on a website
    - Flexbox consists of theFlex-Container and Flex-Items
- Flex Container
    - Adding `display: flex` to an element will turn it into a Flex-Container
- Flex Container - Properties
    - display: (inline-)flex
    - flex-direction
    - flex-wrap
    - flex-flow (shorthand)
    - align-items
    - justify-content
    - align-content
- Main Axis vs Cross Axis
    - `flex-direction` defines main axis
    - Properties refer to main or cross axis
    - Behaviour of Flex-Items changes depending on `flex-direction`
- Flex Items
    - All elements/children of theFlex-Container will become Flex-Items
    - Behaviour can be changed by properties applied to theFlex-Container and applied to individual Flex-Items
- Flex Items - Properties
    - order
    - align-self
    - flex-grow
    - flex-shrink
    - flex-basis
    - flex (shorthand)

### Useful Resources & Links

Dive Deeper into Selected Topics
- Flexbox and browser compatibility: https://caniuse.com/#search=flexbox
- The theory behind flexbox: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox
- The flex container: https://developer.mozilla.org/en-US/docs/Glossary/Flex_Container