# CSS - The Complete Guide 2020

## Section 2:Diving Into the Basics of CSS

### Introduction

- How to add CSS to HTML
- Seting up CSS Rules
- Selectors, Properties, and Values
- Confliting Styles


**Selectors**
| Type | Desc. | HTML | CSS |
| --- | --- | --- | --- |
| Elements | Set equal style for these elements | `<h1>Our header</h1>` | `h1 { color: red; }` |
| Classes | Set equal style for elements within the same class | `<h1 class="blog-post">The blog post</h1>` | `.blog-post { color: red; }` |
| Universal | Rerely used. Inefficient with front-family | `<h1>Our header</h1> <h1 class="blog-post">The blog post</h1>` | `* { collor: red; }` |
| IDs | Set style to one specific element | `<h1 id="main-tile">Our header</h1>` | `#main-tile { color: red; }` |
| Attributes | Set equal styles to all elements with attribute(s) | `<button> disabled>Click</button>` | `[disabled] { collor: red; }` |

**Cascading Styles Sheets & Specificity**

Cascading: Multiple rules can apply to the same element.

Specificity: resolve conflicts arising from multiple rules
1. inline Styles
2. IDs selectors
3. class, pseudo-class and attribute selectors
4. tags and pseudo-elements selectors

**Combinator**

Adjacent Sibling: Selects `<p>` elements that are placed immediately after `<div>` elements
- Elements share the same parent
- Second element comes __immediately__ after first element
- `div + p {...}`

General Sibling: Selects `<p>` elements that are preceded by a `<div>` element
- Elements share the same parent
- Second element comes after first element
- `div ~ p {...}`

Child: Selects `<p>` elements where the __parent__ is a `<div>` element
- Second element is a direct child of first element
- `div > p {...}`

Descendant: Selects all `<p>` elements inside (in any sub level) `<div>` elements
- Second element is child of first element
- `div p {...}`
