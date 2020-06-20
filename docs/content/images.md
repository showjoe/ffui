# Images

## Responsive images

Images in Bootstrap are made responsive with `.img-fluid`. `max-width: 100%;` and `height: auto;` are applied to the image so that it scales with the parent element.


:::demo
<img src="https://picsum.photos/600/250" width="100%" height="250" class="img-fluid" alt="Responsive image">
:::


:::tip
##### SVG images and IE 10
In Internet Explorer 10, SVG images with `.img-fluid` are disproportionately sized. To fix this, add `width: 100% \9;` where necessary. This fix improperly sizes other image formats, so Bootstrap doesn't apply it automatically.
:::

## Image thumbnails

In addition to our [border-radius utilities](./utilities/borders/), you can use `.img-thumbnail` to give an image a rounded 1px border appearance.

:::demo
<img src="https://picsum.photos/300/320" alt="thumbnail" class="img-thumbnail">
:::

## Aligning images

Align images with the [helper float classes](./utilities/float/) or [text alignment classes](./utilities/text/#text-alignment). `block`-level images can be centered using [the `.mx-auto` margin utility class](./utilities/spacing/#horizontal-centering).

:::demo
<div class="clearfix">
	<img src="https://picsum.photos/200/220" class="rounded float-left" alt="rounded float-left">
	<img src="https://picsum.photos/200/220" class="rounded float-right" alt="rounded float-right">
</div>
:::

:::demo
<img src="https://picsum.photos/200/220" class="rounded mx-auto d-block" alt="rounded mx-auto d-block">
:::

:::demo
<div class="text-center">
  <img src="https://picsum.photos/200/220" class="rounded" alt="rounded">
</div>
:::


## Picture

If you are using the `<picture>` element to specify multiple `<source>` elements for a specific `<img>`, make sure to add the `.img-*` classes to the `<img>` and not to the `<picture>` tag.

:::demo
<picture>
  <source media="(max-width: 799px)" srcset="https://picsum.photos/id/1043/540/480">
  <source media="(min-width: 800px)" srcset="https://picsum.photos/id/1043/800/480">
  <img src="https://picsum.photos/id/1043/800/600" alt="Chris standing up holding his daughter Elva" class="rounded mx-auto d-block" >
</picture>
:::