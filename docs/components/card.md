# Card

## Basic Example
Add `<card>My First Card</card>` to the template in the `*.vue` file you are working on to add a card with the correct bootstrap classes.
It should look like this:
<card>My First Card</card>

## Title
::: demo
<card title="Card Title">
	Text inside the body
</card>
:::

## Subtitle
::: demo
<card title="Card Title" subtitle="Card Subtitle">
	Text inside the body
</card>
:::

## Head, Body & Foot
### Head
::: demo
<card head title="Card Title">
	Text inside the body
</card>
:::

### Body
Body is true by default use `:body="false"` to disable the card-body class (Useful for list-groups etc)

::: demo
<card head :body="false" title="Card Title">
	Body container has no class
</card>
:::

### Foot
::: demo
<card foot title="Card Title">
	Text inside the body
</card>
:::

## Slots
#### header
the entire header slot will be replaced with these contents (You may need to reimplement other features like title etc or adding .card-header class)

::: demo
<card head title="Card Title">
	<template #header>
		<div class="card-header text-center">
			<btn class="float-left">Button</btn>
			<h5 class="card-title">Card Title</h5>
		</div>
	</template>
</card>
:::

#### header-left
header-left slot container is within a div that is floated left and independant of other header contents

::: demo
<card head title="Card Title">
	<template #header-left>
		<btn class="mr-4">Button</btn>
	</template>
</card>
:::

#### header-right
header-right slot container is within a div that is floated right and independant of other header contents

::: demo
<card head title="Card Title">
	<template #header-right>
		<btn class="ml-4">Button</btn>
	</template>
</card>
:::

#### footer
::: demo
<card foot title="Card Title">
	<template #footer-left>
		<btn>Left Button</btn>
	</template>
	<template #footer-right>
		<btn>Right Button</btn>
	</template>
</card>
:::
or
::: demo
<card foot title="Card Title">
	<template #footer>
		<div class="card-footer bg-success"></div>
	</template>
</card>
:::

Name         | Description 
:--------    | ----------- 
outerTop     | Above the body of the card
header-left  | Left of the card title (`head` prop must be true)
header-right | Right aligned slot in the header (`head` prop must be true)
default      | The default will render inside a `.card-body` container unless `body` is set to false
outerBottom  | Below the body of the card
footer       | Inside the footer (`foot` prop must be true)

## Images
add an image with a class of `.card-img-top` or `.card-img-bottom` and use the card slots `header` and `footer`

::: demo
<template>
<row>
	<column>
		<card title="Card Title">
			<template #header>
				<img src="https://picsum.photos/400/200" class="card-img-top img-responsive">
			</template>
			<p class="card-text">Some body content</p>
		</card>
	</column>
	<column>
		<card title="Card Title">
			<template #footer>
				<img src="https://picsum.photos/400/200" class="card-img-bottom img-responsive">
			</template>
			<p class="card-text">Some body content</p>
		</card>
	</column>
</row>
</template>
:::

use `img-overlay` prop on card to overlay your text 

::: demo
<card title="Card title" img-overlay class="bg-dark text-white text-outline">
	<template #header>
  	<img src="https://picsum.photos/400/100?random" class="card-img" alt="...">
	</template>
  <h5 class="card-text">
  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
	</h5>
</card>
:::

## Horizontal
With a combination of rows and columns you can make a horizontal layout:

::: demo
<card :body="false" class="mb-3">
  <row class="no-gutters">
    <column :sizes="{md:4}">
      <img src="https://picsum.photos/100?random" class="card-img rounded-left">
    </column>
    <column :sizes="{md:8}">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
        	This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      	</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </column>
  </row>
</card>
:::

## Styles
Use text and background utilities to change the appearance of a card.

::: demo
<div>
	<card head title="Card Title" class="text-white bg-primary mb-2">
		Example body content
	</card>
	<card head title="Card Title" class="text-white bg-secondary mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="text-white bg-success mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="text-white bg-danger mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="text-white bg-warning mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="text-white bg-info mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="bg-light mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="text-white bg-dark mb-2">
		Example body content
	</card>
</div>
:::

## Border
Use text and border utilities to change the appearance of a card.

::: demo
<div>
	<card head title="Card Title" class="border-primary text-primary mb-2">
		Example body content
	</card>
	<card head title="Card Title" class="border-secondary text-secondary mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="border-success text-success mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="border-danger text-danger mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="border-warning text-warning mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="border-info text-info mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="border-light mb-2">	
		Example body content
	</card>
	<card head title="Card Title" class="border-dark text-dark mb-2">
		Example body content
	</card>
</div>
::: 

---
## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
title       | String  | The title for the card | null
subtitle    | String  | The subtitle for the card | null
head        | Boolean | Show the card's header | false
foot        | Boolean | Show the card's footer | false
body        | Boolean | Show the card's body class | true
img-overlay | Boolean | Card is an 'image' card and should use `card-img-overlay` as body class | false

<style>
	.card-header .card-title{
		margin-bottom: .5rem;
	}
	.card-header .float-left .btn,.card-footer .float-left .btn{
		    margin: -6px 0 -6px -12px;
	}
	.card-header .float-right .btn,.card-footer .float-right .btn{
		    margin: -6px -12px -6px -0;
	}
	.text-outline{
		text-shadow: -1px -1px 0 #0006, 1px -1px 0 #0006, -1px 2px 0 #0006, 1px 2px 0 #0006;
	}
</style>