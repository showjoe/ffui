# Card

## Basic Example
Add `<card>My First Card</card>` to the template in the `*.vue` file you are working on to add a card with the correct bootstrap classes.
It should look like this: <card>My First Card</card>

## Title
@[code lang=vue transclude={9-9}](@/docs/components/card.md)
<card title="Card Title">Text inside the body</card>

## Subtitle
@[code lang=vue transclude={13-13}](@/docs/components/card.md)
<card title="Card Title" subtitle="Card Subtitle">Text inside the body</card>

## Head, Body & Foot
### Head
@[code lang=vue transclude={19-19}](@/docs/components/card.md)
becomes
<card head title="Card Title">Text inside the body</card>

### Foot
@[code lang=vue transclude={24-24}](@/docs/components/card.md)
becomes
<card foot title="Card Title">Text inside the body</card>
### Body
Body is true by default use `:body="false"` to disable the card-body class (Useful for list-groups etc)

@[code lang=vue transclude={30-30}](@/docs/components/card.md)
becomes
<card head :body="false" title="Card Title">Body container has no class</card>

## Slots
#### header-left
@[code lang=vue transclude={36-38}](@/docs/components/card.md)
<template>
<card head title="Card Title">
	<btn slot="header-left" class="mr-4">Button</btn>
</card>
</template>

#### header-right
@[code lang=vue transclude={44-46}](@/docs/components/card.md)
<template>
<card head title="Card Title">
	<btn slot="header-right" class="ml-4">Button</btn>
</card>
</template>

#### footer
@[code lang=vue transclude={52-54}](@/docs/components/card.md)
<template>
<card head foot title="Card Title">
	<btn slot="footer">Button</btn>
</card>
</template>

Name         | Description 
:--------    | ----------- 
outerTop     | Above the body of the card
header-left  | Left of the card title (`head` prop must be true)
header-right | Right aligned slot in the header (`head` prop must be true)
default      | The default will render inside a `.card-body` container unless `body` is set to false
outerBottom  | Below the body of the card
footer       | Inside the footer (`foot` prop must be true)

## Images
add an image with a class of `.card-img-top` or `.card-img-bottom` and use the card slots `outerTop` and `outerBottom`

@[code lang=vue transclude={72-85}](@/docs/components/card.md)
<template>
<row>
	<column>
		<card title="Card Title">
			<img slot="outerTop" src="https://picsum.photos/400/200" class="card-img-top img-responsive">
			<div class="card-body">Some body content</div>
		</card>
	</column>
	<column>
		<card title="Card Title">
			<img slot="outerBottom" src="https://picsum.photos/400/200" class="card-img-bottom img-responsive">
			<div class="card-body">Some body content</div>
		</card>
	</column>
</row>
</template>

use `img-overlay` prop on card to overlay your text 

@[code lang=vue transclude={93-96}](@/docs/components/card.md)
<template>
<card title="Card title" img-overlay class="bg-dark text-white">
  <img slot="outerTop" src="https://picsum.photos/400/100?random" class="card-img" alt="...">
  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
</card>
</template>


## Horizontal
With a combination of rows and columns you can make a horizontal layout:

@[code lang=vue transclude={103-116}](@/docs/components/card.md)
<template>
<card :body="false" class="mb-3">
  <row class="no-gutters">
    <column :sizes="{md:4}">
      <img src="https://picsum.photos/100?random" class="card-img">
    </column>
    <column :sizes="{md:8}">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </column>
  </row>
</card>
</template>

## Styles
Use text and background utilities to change the appearance of a card.

@[code lang=vue transclude={124-147}](@/docs/components/card.md)
<template>
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
</template>


## Border
Use text and border utilities to change the appearance of a card.

@[code lang=vue transclude={156-179}](@/docs/components/card.md)
<template>
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
</template>

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

