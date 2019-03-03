# Rows & Columns
Use rows and columns to layout your grid
```vue
<row>
	<column>Column 1</column>
	<column>Column 2</column>
	<column>Column 3</column>
</row>
<row>
	<column>Column 4</column>
	<column>Column 5</column>
	<column>Column 6</column>
</row>
```
will render:
<template>
<row class="example-row">
	<column>Column 1</column>
	<column>Column 2</column>
	<column>Column 3</column>
</row>
<row class="example-row">
	<column>Column 4</column>
	<column>Column 5</column>
	<column>Column 6</column>
</row>
</template>


# Rows
## Form
Add a form prop to the row for tighter and more compact layouts. 

```vue{1}
<row form>
	<column>Column 1</column>
	<column>Column 2</column>
	<column>Column 3</column>
</row>
<row>
	<column>Column 4</column>
	<column>Column 5</column>
	<column>Column 6</column>
</row>
```
<template>
<row form class="example-row">
	<column>Column 1</column>
	<column>Column 2</column>
	<column>Column 3</column>
</row>
<row class="example-row">
	<column>Column 4</column>
	<column>Column 5</column>
	<column>Column 6</column>
</row>
<row class="example-row">
	<column>Column 7</column>
	<column>Column 8</column>
	<column>Column 9</column>
</row>
</template>

# Columns
## Auto
adding the auto prop to the column will mean your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

```vue{6}
<row>
	<column>Column 1</column>
	<column>Column 2</column>
	<column>Column 3</column>
</row>
<row>
	<column auto>Column 4</column>
	<column auto>Column 5 With extra content </column>
	<column auto>Column 6</column>
</row>
<row>
	<column auto>Column 7</column>
	<column auto>Column 8</column>
	<column auto>Column 9</column>
</row>
```
<template>
<row class="example-row">
	<column>Column 1</column>
	<column>Column 2</column>
	<column>Column 3</column>
</row>
<row class="example-row">
	<column auto>Column 4</column>
	<column auto>Column 5 With extra content </column>
	<column auto>Column 6</column>
</row>
<row class="example-row">
	<column auto>Column 7</column>
	<column auto>Column 8</column>
	<column auto>Column 9</column>
</row>
</template>

## Sizes
Sizes can be defined using a number, an object or an array of objects
```vue
<row>
	<column :sizes="3">Column 1</column>
	<column :sizes="6">Column 2</column>
	<column>Column 3</column>
</row>
<row>
	<column :sizes="{sm:12, md:3, lg:3}">Column 4</column>
	<column :sizes="{md:6}">Column 5</column>
	<column :sizes="{md:3}">Column 6</column>
</row>
<row>
	<column :sizes="[{sm:12},{md:4},{lg:3}]">Column 7</column>
	<column :sizes="[4,{md:4},{lg:6}]">Column 8</column>
	<column :sizes="[{sm:12},{md:4},{lg:3}]">Column 9</column>
</row>
```
<template>
<row class="example-row">
	<column :sizes="3">Column 1</column>
	<column :sizes="6">Column 2</column>
	<column>Column 3</column>
</row>
<row class="example-row">
	<column :sizes="{sm:12, md:3, lg:3}">Column 4</column>
	<column :sizes="{md:6}">Column 5</column>
	<column :sizes="{md:3}">Column 6</column>
</row>
<row class="example-row">
	<column :sizes="[{sm:12},{md:4},{lg:3}]">Column 7</column>
	<column :sizes="[4,{md:4},{lg:6}]">Column 8</column>
	<column :sizes="[{sm:12},{md:4},{lg:3}]">Column 9</column>
</row>
</template>

## Offset
```vue
<row class="example-row">
	<column :sizes="{sm:4}" :offset="{md:4}">Column 1</column>
	<column :sizes="{sm:4}">Column 2</column>
</row>
```
<template>
<row class="example-row">
	<column :sizes="{sm:4}" :offset="{md:4}">Column 1</column>
	<column :sizes="{sm:4}">Column 2</column>
</row>
</template>

## Row Props
Name     | Type    | Description | Default
:--------| :----:  | ----------- | :-----:
form     | Boolean |  a variation of bootstrap standard grid row that overrides the default column gutters for tighter and more compact layouts. | null

## Column Props
Name     | Type    | Description | Default
:--------| :----:  | ----------- | :-----:
auto     | Boolean | Auto-sizing - your columns only take up as much space as needed. | null
sizes    | Number, Array, Object  | responsive breakpoints eg: `{md:6}` or `{md:4, sm:6}` | null
offset   | Object  | responsive breakpoints eg: `{md:6}` or `{md:4, sm:6}` | null

<style>
	.example-row .col,.example-row [class^=col-]{
		padding-top: .75rem;
    	padding-bottom: .75rem;
    	background-color: rgba(86,61,124,.15);
    	border: 1px solid rgba(86,61,124,.2);
	}
</style>