# Stretched link
Make any HTML element or Bootstrap component clickable by "stretching" a nested link via CSS.


Add `.stretched-link` to a link to make its [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block) clickable via a `::after` pseudo element. In most cases, this means that an element with `position: relative;` that contains a link with the `.stretched-link` class is clickable.

Cards have `position: relative` by default in Bootstrap, so in this case you can safely add the `.stretched-link` class to a link in the card without any other HTML changes.

Multiple links and tap targets are not recommended with stretched links. However, some `position` and `z-index` styles can help should this be required.

:::demo
<card title="Card with stretched link" style="width: 18rem;">
  <img slot="header" src="https://picsum.photos/180/180" alt="rounded" width="100%" height="180" class="card-img-top" >
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <btn href="#" :outline="false" class="stretched-link">Go somewhere</btn>
</card>
:::

Media objects do not have `position: relative` by default, so we need to add the `.position-relative` here to prevent the link from stretching outside the media object.

:::demo
<media class="position-relative">
  <img slot="media" src="https://picsum.photos/144/144" alt="Generic placeholder image" width="144" height="144" class="mr-3" >
  <h5 class="mt-0">Media with stretched link</h5>
  <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
  <a href="#" class="stretched-link">Go somewhere</a>
</media>
:::

Columns are `position: relative` by default, so clickable columns only require the `.stretched-link` class on a link. However, stretching a link over an entire `.row` requires `.position-static` on the column and `.position-relative` on the row.

:::demo
<row class="no-gutters bg-light position-relative">
  <column :sizes="[{md:6}]" class="p-md-4 mb-md-0">
    <img src="https://picsum.photos/200/100" alt="Generic placeholder image" width="100%" height="200" class="w-100" >
  </column>
  <column :sizes="[{md:6}]" class="position-static p-4 pl-md-0">
    <h5 class="mt-0">Columns with stretched link</h5>
    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
    <a href="#" class="stretched-link">Go somewhere</a>
  </column>
</row>
:::

## Identifying the containing block

If the stretched link doesn't seem to work, the [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#Identifying_the_containing_block) will probably be the cause. The following CSS properties will make an element the containing block:

- A `position` value other than `static`
- A `transform` or `perspective` value other than `none`
- A `will-change` value of `transform` or `perspective`
- A `filter` value other than `none` or a `will-change` value of `filter` (only works on Firefox)

:::demo
<div class="card" style="width: 18rem;">
  <img slot="header" src="https://picsum.photos/200/180" alt="Card image cap" width="100%" height="180" class="card-img-top" >
  <div class="card-body">
    <h5 class="card-title">Card with stretched links</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p class="card-text">
      <a href="#" class="stretched-link text-danger" style="position: relative;">Stretched link will not work here, because <code>position: relative</code> is added to the link</a>
    </p>
    <p class="card-text bg-light" style="transform: rotate(0);">
      This <a href="#" class="text-warning stretched-link">stretched link</a> will only be spread over the <code>p</code>-tag, because a transform is applied to it.
    </p>
  </div>
</div>
:::