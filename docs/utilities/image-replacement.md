# Image replacement
Swap text for background images with the image replacement class.

::: warning
The `text-hide()` class and mixin has been deprecated as of v4.1. It will be removed entirely in v5.
:::

Utilize the `.text-hide` class or mixin to help replace an element's text content with a background image.

```html
<h1 class="text-hide">Custom heading</h1>
```

```scss
// Usage as a mixin
.heading {
  @include text-hide;
}
```

Use the `.text-hide` class to maintain the accessibility and SEO benefits of heading tags, but want to utilize a `background-image` instead of text.

<div class="bd-example">
  <h1 class="text-hide" style="background-image: url('https://picsum.photos/75/75'); width: 75px; height: 75px;">Bootstrap</h1>
</div>

```html
<h1 class="text-hide" style="background-image: url('...');">Bootstrap</h1>
```