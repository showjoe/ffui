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

## Props
Name     | Type    | Description | Default
:--------| :----:  | ----------- | :-----:
title    | String  | The title for the card | null
subtitle | String  | The subtitle for the card | null
head     | Boolean | Show the card's header | false
foot     | Boolean | Show the card's footer | false
body     | Boolean | Show the card's body class | true
