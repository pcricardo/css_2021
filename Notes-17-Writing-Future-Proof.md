# CSS - The Complete Guide 2020

## Section 17: Writing Future-Proof CSS Code

### CSS Modules & Their Working

CSS Modules & Working Groups: https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group

### Using CSS Variables
Steps:
- define var in root selector (`:root`).
    - start with "--"
- replace value with var defined in root selector
    - we can define default value if the var is not defined

Example:
```
    :root {
        --my-color: #fa923f;
    }
    .element-1 {
        color: var(--my-color);
    }
    .element-2 {
        color: var(--my-color);
    }
    .element-3 {
        color: var(--my-color, #fa923f);
    }
```

_Note:_ it is not supported by IE 11.

### Understanding & Using Vendor Prefixes

Browsers implement new features differently and at different speed.

See link: Vendor Prefixes: https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix

Vendor prefix example:

```
    .container {
        display: -webkit-box; /* safary */
        display: -ms-flexbox; /* IE */
        display: -webkit-flex;
        display: flex;
    }
```


### Which Prefixes Should You Use?

Which Vendor Prefixes should you use? => http://shouldiprefix.com/

There is a tool that automatically fetches a list of properties you should prefix, and adds the prefixes in your code.
- https://autoprefixer.github.io/
- https://github.com/postcss/autoprefixer


### Detecting Browser Support with @supports

Some features just are not implemented (yet) in some Browsers.

The supports query can help with that.

Example:

```
@supports (display: grid) {
    .container {
        display: grid;
    }
}
```


### Polyfills

A Polyfill is a JavaScript Package which enables certain CSS Features in Browsers which would not support it otherwise.

Polyfills are not available for every CSS feature.
For example the grid is not available in Polyfills.

_Remember:_ Polyfill come at a cost. The JavaScript has to be loaded and parsed.

CSS Polyfills: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills


### Eliminating Cross-Browser Inconsistencies

Browsers use different defaults.

Possible solutions:
- reset styles manually.
    - Example: `* { box-sizing: border-box; }`
- use Reset-Library e.g. Normalise.css
    - disadvantage - Normalise resets a bunch of values, and maybe  we just need reset a few.


### How to Name CSS Classes

- Do:
    - Use kebab-case. Because CSS is case-insensitive
    - Name by feature. For example `.page-title`
- Do NOT:
    - Use snakeCase. Because CSS is a case-insensitive
    - Name by style. For example `.title-blue`

__Block Element Modifier (BEM)__

Convention to uniform and consistent way of naming tou CSS classes

Rule: "." + BLOCK + "__" + ELEMENT + "--" + MODIFIER

Example: `.menu-main__item--size-big


### Vanilla CSS vs Frameworks

- Vanilla CSS - Write all your style and layouts on your own
    - Advantage:
        - Full control
        - No unnecessary code
        - Name classes as you like
    - Disadvantage:
        - Build everything from scratch
        - Danger of "bad code"
- Component Frameworks - Choose from a rich suite of pre-styled components & utility features/classes. Examples: Bootstrap, Foundation
    - Advantage:
        - Rapid development
        - Follow best practices
        - No need bo be an expert
    - Disadvantage:
        - No or little control
        - Unnecessary overhead code
        - "All websites look the same"
- Utility Frameworks - Build tour own styles and layouts with help of utility features and classes
    - Advantage:
        - Faster development
        - Follow best practices
        - No expert knowledge needed
    - Disadvantage:
        - Little control
        - Unnecessary overhead code


### Summary

__CSS Variables__
- `--your-name: 1rem;`
- Define values once, use them multiple times
- Only supported in modern browsers

__Cross-Browser Support__
- Browser implement new features differently and with different speed
- Use vendor-prefixes to use cutting-edge features AND support older browsers (partly)
- `@supports` allows you to check for feature-support before using a property
- Polyfills can enables ome CSS features which wouldn’t work otherwise
- Consider normalizing CSS defaults across browsers

__Naming CSS Classes__
- Use kebab-case (e.g. `page-title`) and name classes by feature not by style (e.g. `title-blue`)
- Avoid class name collisions, for example by using BEM class names

__Vanilla CSS vs Frameworks__
- Writing all styles from scratch gives you full control but comes with more work and responsibility
- Component frameworks(e.g.Bootstrap4) allow you to build webpages rapidly but with less control
- Utility frameworks can be a good compromise

### Useful Resources & Links

- CSS Modules & Working Groups: https://www.w3.org/TR/tr-groups-all#tr_Cascading_Style_Sheets__CSS__Working_Group
- CSS Variables: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
- Vendor Prefixes: https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix
- Which Vendor Prefixes should you use? => http://shouldiprefix.com/
- @supports: https://developer.mozilla.org/en-US/docs/Web/CSS/%40supports
- BEM in Detail: http://getbem.com/introduction/
- An introduction to Bootstrap 4: https://academind.com/learn/css/bootstrap-4-tutorial/
- CSS Polyfills: https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-Browser-Polyfills
	