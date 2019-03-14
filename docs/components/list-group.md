# List Groups
## Basic Example

@[code lang=vue transclude={7-11}](@/docs/components/list-group.md)

<template>
<list-group>
	<list-group-item>Item 1</list-group-item>
	<list-group-item>Item 2</list-group-item>
	<list-group-item>Item 3</list-group-item>
</list-group>
</template>

## flush
add a flush prop to remove the margin around the list-group

@[code lang=vue transclude={20-26}](@/docs/components/list-group.md)

<template>
<card title="Card Title" head :body="false">
	<list-group flush>
		<list-group-item>Item 1</list-group-item>
		<list-group-item>Item 2</list-group-item>
		<list-group-item>Item 3</list-group-item>
	</list-group>
</card>
</template>

## items
add a flush prop to remove the margin around the list-group

@[code lang=vue transclude={20-26}](@/docs/components/list-group.md)

<template>
<card title="Card Title" head :body="false">
	<list-group flush>
		<list-group-item>Item 1</list-group-item>
		<list-group-item>Item 2</list-group-item>
		<list-group-item>Item 3</list-group-item>
	</list-group>
</card>
</template>

## list-group props
Name        | Type       | Description | Default
:--------   | :----:     | ----------- | :-----:
flush				| `Boolean`  | if true the list group will have no margin (Useful for list-groups inside other elements like cards) | false

## List Group Items
## v-model
You can use v-model to associate a record with a list-group-item.

@[code lang=vue transclude={41-43}](@/docs/components/list-group.md)

<template>
<list-group>
	<list-group-item is-link v-model="item_1">List Item 1	</list-group-item>
</list-group>
</template>

<pre class="text-white">item_1:{{item_1}}</pre>

## true-value & false-value
Use the true-value prop to define the value you would like to assign to the record when the list-group-item is selected.

@[code lang=vue transclude={55-59}](@/docs/components/list-group.md)

<template>
<list-group>
	<list-group-item is-link v-model="item_2" :true-value="1" :false-value="null">List Item 1	</list-group-item>
	<list-group-item is-link v-model="item_2" :true-value="2" :false-value="null">List Item 2	</list-group-item>
	<list-group-item is-link v-model="item_2" :true-value="3" :false-value="null">List Item 3	</list-group-item>
</list-group>
</template>

## disabled
Use the disabled prop to stop triggering of click events.

@[code lang=vue transclude={83-84}](@/docs/components/list-group.md)

<template>
<list-group>
	<list-group-item  v-model="item_2" :true-value="1" :false-value="null">List Item 1	</list-group-item>
	<list-group-item  v-model="item_2" :true-value="2" :false-value="null" disabled>List Item 2	</list-group-item>
</list-group>
</template>

## readonly
Use the readonly prop to stop triggering of click events.

@[code lang=vue transclude={95-96}](@/docs/components/list-group.md)

<template>
<list-group>
	<list-group-item  v-model="item_2" :true-value="1" :false-value="null">List Item 1	</list-group-item>
	<list-group-item  v-model="item_2" :true-value="2" :false-value="null" readonly>List Item 2	</list-group-item>
</list-group>
</template>

## href
Use a href prop along with is-link to use as a traditional link

@[code lang=vue transclude={106-109}](@/docs/components/list-group.md)

<template>
<list-group>
	<list-group-item is-link href="http://www.google.com" >Google</list-group-item>
	<list-group-item is-link href="http://www.facebook.com" >Facebook</list-group-item>
</list-group>
</template>


## list-group-item props
Name        | Type       | Description 																														| Default
:--------   | :----:     | ----------- 																														| :-----:
true-value  | 					 | the value associated with the list-group-item being selected 					| `true`
false-value | 					 | the value associated with the list-group-item being deselected 				| `false`
tag 		  	| `String`   | Specify an alternative html tage for the list-group-item e.g. 'li'			| `div`
href		  	| `String`   | navigation link 																												| `false`
is-link	  	| `Boolean`  | shows the item as selectable 																					| `false`
disabled    | `Boolean`  | if true the list-group-item is disabled 																| `false`
readonly    | `Boolean`  | if true the list-group-item is readonly 																| `false`

<script>
export default {
	data () {
    return {
    		item_1:false,
    		item_2:false,
    }
  },
}
</script>