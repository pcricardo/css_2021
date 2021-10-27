# CSS - The Complete Guide 2020

## Section 14: Using the CSS Grid

__Code Samples:__
- practicing-09
- Section14


### Introduction

- What is CSS Grid?
- Grid vs. Flexbox


Notes:
- To debug we can user Chrome or Firefox.
- The Firefox is better.
- To use grid, the elements can not be display with 'fixed' or 'absolute'.

### Positioning Child Elements in a Grid

Container - define layout
```
    display: grid;
    grid-template-columns: 200px 2fr 20% 1fr;
    grid-template-rows: 5rem 2.5rem;
```
Child elements - define position
```
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
```


### Using "element-sizing", "repeat" & "minmax"

Use _auto_ to set size to occupy the left space (can not be use with _fr_)
```
    height: 300px;
    grid-template-columns: 200px 20% 20% auto;
    grid-template-rows: 5rem auto;
```

Use _repeat_
- param 1 - number of repetition
- param 2 - size in px,%,etc
```
    grid-template-columns: repeat(4, 25%);
```

Use min max
```
    grid-template-rows: 5rem minmax(10px, 100px);
```


### Advanced Element Positioning

Use _span_ instead of define _end_
```
.el3 {
    background: rgba(0, 128, 0, 0.5);
    grid-column-start: 3;
    grid-column-end: span 2;
    grid-row-start: 1;
    grid-row-end: 3;
}
```

Use _negative end_ to define element occupy entire row
```
    grid-column-start: 1;
    grid-column-end: -1;
```


### Working with Named Lines

First define names in container
```
   grid-template-rows: [row-1-start] 5rem [row-1-end row-2-start] minmax(10px, 100px) [row-2-end row-3-start] 100px [row-3-end];
```

Second, use the names instead of grid rows numbers
```
    /* before */
    grid-row-start: 1;
    grid-row-end: 3;
    /* after */
    grid-row-start: row-1-start;
    grid-row-end: row-3-start;
```


### Understanding Column & Row Shorthands

Longer version
```
    grid-column-start: 1;
    grid-column-end: -1;
    grid-row-start: row-2-start;
    grid-row-end: span 1;
```
is equals to:
```
    grid-column: 1 / -1;
    grid-row: row-2-start / span ;
```

Grid area : row start / column start / row end / column end
```
    grid-column-start: 2;
    grid-column-end: span 3;
    grid-row-start: row-1-start;
    grid-row-end: row-2-end;
```
is equals to:
```
    grid-area: row-1-start / 2 / row-2-end / span 3
```


### Working with Gaps

At content.
```
    grid-row-gap: 10px;
    grid-column-gap: 20px;
```
Shorthand
```
    grid-gap: 10px 20px;
```


### Adding Named Template Areas

At content add 'grid-template-areas':
```
    grid-template-areas: "header header header header"
                         ". . main main"
                         "footer footer footer footer";
```
Use names in elements 'grid-area' to replace 'grid-column' and 'grid.row':
```
.el4 {
    background: rgba(0, 4, 255, 0.5);
    grid-area: footer;
}
```


### Creating Automatically Generated Grid Areas

We can also use area names in _grid-template_columns_ and _grid-template_rows_.
```
    grid-template-columns: [hd-start] repeat(4, [col-start] 25% [col-end]) [hd-end];
    grid-template-rows: [hd-start] 5rem [hd-end row-2-start] minmax(10px, 100px) [row-2-end row-3-start] 100px [row-3-end];

```


### Working with "fit-content"

fit-content
```
 grid-template-rows: 3.5rem auto fit-content(8rem);
```


### Positioning Grid Elements

In container.
__justify-items__: align XX axis
- stretch (default)
- center
- start
- end

__align-items__: align YY axis
- stretch (default)
- center
- start
- end


### Positioning the Entire Grid Content

Only works when there is no auto size, and the container has defined width and/or height.

In container.
__justify-content__: position in X axis
- start (default)
- center
- end
- stretch (equals start)

__align-content__: position in XY
- start (default)
- center
- end
- stretch (equals start)


### Positioning Elements Individually

Define properties in class element.
- justify-sel
- align-self

Example:
```
.el2 {
    background: rgba(255, 0, 0, 0.5);
    grid-area: main;
    z-index: 10;
    justify-self: center;
    align-self: center;
}
```


###  Applying Autoflow

The default of grid is:
- By just add `display: grid`, to a DOM element, the grid will create necessary rows, and add all DOM child element into the grid.

grid-auto-rows: define height of rows
- auto (default)
- value in rem / px / minmax

grid-auto-flow: define where new element should be added
- row (auto)
- column

grid-auto-columns: define width of columns (only works with `grid-auto-flow: column`
- auto (default)
- value in rem / px / minmax


### Comparing the Explicit & Implicit Grid

Explicit is when we define:
```
    grid-template-columns: 15rem 15rem;
    grid-template-rows: 20rem;
```

Implicit is when we define:
```
    grid-auto-rows: minmax(8rem, auto);
    grid-auto-flow: row;
    grid-auto-columns: 5rem;
```


### Understanding "auto-fill" & "auto-fit"

Add as much items is possible in the row, to use amount of space there is available.
- `grid-template-columns: repeat(auto-fill 15rem)`
    - if there are few elements, the elements are align to left
- `grid-template-columns: repeat(auto-fit 15rem)`
    - if there are few elements, the elements are align to center


### Creating a Dense Grid

When we do not user lines names or number, and use `grid-column: span 2` to a specific element to define number of columns to occupy.
Then we can create gaps in the grid, because he following elements will not occupy the gap.

We can override this behavior (next elements occupy gaps), by using __dense__ `grid-auto-flow: row dense;` .
But be aware this only change the visibility, not the dom order. So this could break thing like browser reader.


### Comparing Grid & Flexbox

__CSS grid__
- Two-dimensional position (rows and columns)

__CSS Flexbox__
- One-dimensional position


### Summary

- Creating a Grid
    - `display: grid` creates a grid where child elements are automatically placed in rows
    - This default can be overwritten with `grid-auto-flow` (and then also `grid-auto-rows` or `grid-auto-columns`)
    - Use `grid-gap`to add gaps between columns and rows
- Defining the Grid Structure
    - You define columns and/ or rows explictly via `grid-template-columns` / `grid-template-rows`
    - Use `repeat(times, size)` to create multiple columns or rows with ease
    - Use `auto-fill` / `auto-fit` to derive the number of columns automatically
    - Use `minmax`for dynamic sizing
- Placing Elements
    - Position elements in the grid via `grid-row` and/ or `grid-column`
    - Use `span X` to span an element over multiple columns or rows
    - Use line numbers, line names or named areas
- Aligning Elements
    - Align grid items via `justify-items` (X-axis) and `align-items` (Y-axis)
    - Align the entire grid content via `justify-content` (X-axis) and `align-content` (Y-axis)


### Useful Resources & Links

- A really great article series on the CSS Grid: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout
- A complete guide to CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/