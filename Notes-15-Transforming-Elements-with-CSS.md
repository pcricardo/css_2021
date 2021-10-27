# CSS - The Complete Guide 2020

## Section 15: Transforming Elements with CSS

__Code Samples:__
- practicing-10


### Introduction

Rotating, Moving, Skewing & Scaling Elements.

3D Transformations


### Rotating Elements and setting transform-origin

Example:
```
    transform: rotateZ(45deg) translateX(3.5rem) translateY(-1rem);
    transform-origin: center;
```

### Working with "skew" and "scale"

Example:
```
  .testimonial__image-container {
    transform: skew(20deg);
    overflow: hidden;
  }

  .testimonial__image {
    transform: skew(-20deg) scale(1.4);
  }
```


### Applying Transformation Shorthands

- rotate(45deg) = rotateZ(45deg)
- translate(3.5rem) = translateX(3.5rem)
- translate(3.5rem, -1rem) = translateX(3.5rem) translateY(-1rem)
- skew(20deg) = skewX(20deg)
- skew(20deg, 30deg) = skewX(20deg)  skewY(30deg)


### Understanding the "perspective" Property

Function - apply to element

Example: `transform:  perspective(200px) rotateX(0deg) rotateY(80deg);`

Property - apply to container

Example:
```
    perspective: 1000px;
    perspective-origin: 500px;
```

###  Moving Elements along the Z-Axis with "translateZ"

Example:
```
    transform:  translateX(1rem) translateZ(-100rem);
```

### Rotating the Container with "transform style"

transform-style:
- flat (default)
- preserve-3d

Example:
```
    transform: rotateY(130deg);
    transform-style: preserve-3d;
```


### Flipping Elements & "backface-visibility"

backface-visibility
- hidden
- visible (default)


### Summary

- The ?transform? Property
    - Allows you to _translate()_, _scale()_, _rotate()_ and _skew()_ elements
    - 3D transformations are possible via the Z-axis
    - _transform-origin_ and _transform-style_ for customization
- Perspective
  - _perspective_ allows you to define the perspective of the viewer
  - _perspective-origin_ allows you to manipulate the origin of the viewer


### Useful Resources & Links

- CSS Transforms: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms
- 3D Transforms: https://desandro.github.io/3dtransforms/