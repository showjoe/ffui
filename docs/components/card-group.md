# Card-Group

## Groups
Use card groups to render cards as a single, attached element with equal width and height columns. Card groups use display: flex; to achieve their uniform sizing.

::: demo
<div>
	<card-group>
		<card head title="Card Title" class="border-primary text-primary mb-2">
			Example body content
		</card>
		<card head title="Card Title" class="border-secondary text-secondary mb-2">	
			Example body content is longer
		</card>
		<card head title="Card Title" class="border-success text-success mb-2">	
			Example body content
		</card>
	</card-group>
</div>
::: 

Card footers in groups will automatically line up.

::: demo
<div>
	<card-group>
		<card head foot title="Card Title" class="border-primary text-primary mb-2">
			This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
		<card head foot title="Card Title" class="border-secondary text-secondary mb-2">	
			This card has supporting text below as a natural lead-in to additional content.
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
		<card head foot title="Card Title" class="border-success text-success mb-2">	
			This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
	</card-group>
</div>
::: 
## Decks
Need a set of equal width and height cards that aren’t attached to one another? Use card decks.

::: demo
<div>
	<card-group deck>
		<card title="Card Title" class="border-primary text-primary mb-2">
			<template #header><img src="https://picsum.photos/400/400?random" class="card-img-top" alt="..."></template>
			Example body content
		</card>
		<card title="Card Title" class="border-secondary text-secondary mb-2">	
			Example body content is longer
			<template #header><img src="https://picsum.photos/400/400?random" class="card-img-top" alt="..."></template>
		</card>
		<card title="Card Title" class="border-success text-success mb-2">	
			Example body content
			<template #header><img src="https://picsum.photos/400/400?random" class="card-img-top" alt="..."></template>
		</card>
	</card-group>
</div>
::: 

Just like with card groups, card footers in decks will automatically line up.

::: demo
<div>
	<card-group deck>
		<card head foot title="Card Title" class="border-primary text-primary mb-2">
			This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
		<card head foot title="Card Title" class="border-secondary text-secondary mb-2">	
			This card has supporting text below as a natural lead-in to additional content.
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
		<card head foot title="Card Title" class="border-success text-success mb-2">	
			This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
	</card-group>
</div>
::: 

## Grid cards

Use the row and column components to control how many grid columns (wrapped around your cards) you show per row. For example, here’s .row-cols-1 laying out the cards on one column, and .row-cols-md-2 splitting four cards to equal width across multiple rows, from the medium breakpoint up.

::: demo
<row :sizes="[1,{md:2,lg:3,xl:4}]">
  <column class="mb-4">
    <card title="Card Title">	
			Example body content
			<template #header><img src="https://via.placeholder.com/350" class="card-img-top" alt="..."></template>
		</card>
  </column>
  <column class="mb-4">
    <card title="Card Title">	
			Example body content
			<template #header><img src="https://via.placeholder.com/350" class="card-img-top" alt="..."></template>
		</card>
  </column>
  <column class="mb-4">
    <card title="Card Title">	
			Example body content
			<template #header><img src="https://via.placeholder.com/350" class="card-img-top" alt="..."></template>
		</card>
  </column>
  <column class="mb-4">
    <card title="Card Title">	
			Example body content
			<template #header><img src="https://via.placeholder.com/350" class="card-img-top" alt="..."></template>
		</card>
  </column>
</row>
::: 

## Card columns
Cards can be organized into Masonry-like columns with just CSS by wrapping them in a card-group with the `columns` prop set. Cards are built with CSS column properties instead of flexbox for easier alignment. Cards are ordered from top to bottom and left to right.

Heads up! Your mileage with card columns may vary. To prevent cards breaking across columns, we must set them to display: inline-block as column-break-inside: avoid isn’t a bulletproof solution yet.


::: demo
<div>
	<card-group columns>
		<card v-for="i in 9" head foot :title="'Card Title '+i" class="border-primary text-primary mb-2">
			<template #header><img  v-dummy:200,400x200,400  class="card-img-top"/></template>
			<p v-dummy:8,20></p>
			<template #footer-inner> Last updated 3 mins ago </template>
		</card>
	</card-group>
</div>
::: 

Card columns can also be extended and customized with some additional code. Shown below is an extension of the .card-columns class using the same CSS we use—CSS columns— to generate a set of responsive tiers for changing the number of columns.

``` css
.card-columns {
  @include media-breakpoint-only(lg) {
    column-count: 4;
  }
  @include media-breakpoint-only(xl) {
    column-count: 5;
  }
}
```
---
## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
title       | String  | The title for the card | null

<script>
export default {
	data () {
      	return {

      	}
  	},
}
</script>
