# Figures

Anytime you need to display a piece of content—like an image with an optional caption, consider using a `<figure>`.

Use the included `.figure` , `.figure-img` and `.figure-caption` classes to provide some baseline styles for the HTML5 `<figure>` and `<figcaption>` elements. Images in figures have no explicit size, so be sure to add the `.img-fluid` class to your `<img>` to make it responsive.

::: demo
<figure class="figure">
  <img src="https://picsum.photos/300/320" alt="thumbnail" class="img-thumbnail">
  <figcaption class="figure-caption">A caption for the above image.</figcaption>
</figure>
:::

Aligning the figure's caption is easy with our [text utilities](./utilities/text/#text-alignment).

::: demo
<figure class="figure">
  <img src="https://picsum.photos/300/320" alt="thumbnail" class="img-thumbnail">
  <figcaption class="figure-caption text-right">A caption for the above image.</figcaption>
</figure>
:::



