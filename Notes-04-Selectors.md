# CSS - The Complete Guide 2020

## Section 4:More on Selectors & CSS Features
	
### Introduction to CSS/Box model
- More on CSS Classes
- !Important
- More on Pseudo Classes & Elements
- :not()

### Using Multiple CSS Classes & Combined Selectors

You can use multiple classes on the same element . Like `class="class2 class2"`

You can select a same-element combination. Example:
```
[HTML] 
<a href="#" class="active">
[CSS]
a.active {..}
```

### CSS class vs ID
- Class 
	- Re-usage
	- Allow you to "mark" and name things for styling purpose only
	- Most-used selector type
- ID
	- Only used once per page
	- Also got non-CSS meaning (e.g. on-page link)
	- Use if available anyways

### !Important
- It overrides specificity and all other selectors
- In general, do not use 

### More on Pseudo Classes & Elements


### :not()


### Summary
- CSS Class Selectors
	- You can apply more than one class to an element
	- You can chain selectors (e.g. 'a.active`, `.priority.highlighted')
	- Class selectors are the most-used type of CSS selectors
- !important
	- Do not use 'important' in 99% of cases
- Pseudo Selectors & :not
	- You use the same pseudo-selectors in most cases (':hover, :active')
	- Explore your possibilities to solve edge cases with ease
	- User ':note' with caution but when needed to exclude certain elements

### Resources 
- A discussion on "classes vs IDs": https://stackoverflow.com/questions/12889362/difference-between-id-and-class-in-css-and-when-to-use-it
- When is using _!important_  okay? => https://css-tricks.com/when-using-important-is-the-right-choice/
- The _:not()_  pseudo class: https://developer.mozilla.org/en-US/docs/Web/CSS/:not
- Can I Use: https://caniuse.com/
