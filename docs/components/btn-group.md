# Button Group
## Basic Example
@[code lang=vue transclude={5-11}](@/docs/components/btn-group.md)
<template>
<btn-group>
	<btn btn-class="primary">Primary</btn>
	<btn btn-class="secondary">Secondary</btn>
	<btn btn-class="success">Success</btn>
	<btn btn-class="danger">Danger</btn>
	<btn btn-class="warning" disabled>Warning</btn>
</btn-group>
</template>

## btn-class
Set a standard class for all buttons in group

@[code lang=vue transclude={18-18}](@/docs/components/btn-group.md)
<btn-group btn-class="warning" :di="dataitems.MyDataitem"/>

## Justified
@[code lang=vue transclude={23-26}](@/docs/components/btn-group.md)
<template>
<btn-group justified>
	<btn btn-class="primary">Primary</btn>
	<btn btn-class="secondary">Secondary</btn>
</btn-group>
</template>

## Vertical
Adding justified makes the button group fill the available width.

@[code lang=vue transclude={34-37}](@/docs/components/btn-group.md)
<template>
<btn-group vertical>
	<btn btn-class="primary">Primary</btn>
	<btn btn-class="secondary">Secondary</btn>
</btn-group>
</template>

## Dataitem Example
Using a FormFactory Dataitem (with a lookup) as a btn-group
A dataitem might look something like this:

@[code lang=js transclude={88-98}](@/docs/components/btn-group.md)

@[code lang=vue transclude={47-47}](@/docs/components/btn-group.md)
<btn-group :di="dataitems.MyDataitem" v-model="records.MyDataitem"/>
`records.MyDataitem: {{records.MyDataitem ? records.MyDataitem:'null'}}`

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
v-model     |         | Link to the record location ie. `records.value` | 
block       | Boolean | add this prop to fill the available width | `false`
btn-class   | String  | styling class. eg: `primary` | `"primary"`
justified   | Boolean | set the justified state of the button group | `false`
disabled    | Boolean | set the disabled state of the button | `false`
outline     | Boolean | use outline mode | `true`
readonly    | Boolean | set the readonly state of the button | `false`
size        | String  | Use `sm` or `lg` | `false`
type        | String  | btn type. eg: `checkbox` or `radio` | `"checkbox"`
true-value  |         | value that should be used in the case of a true (or active) button | `true`
false-value |         | value that should be used in the case of a false (or deactive) button | `false`

### Computed Properties
Name             | Params | Description
---------------- | -------| -------------------
classObj         |        | Computed class array
active           |        | Defines the active state of the button

### Methods
Name             | Params | Description
---------------- | -------| -------------------
btnClick         |        | Triggers a buttons click

### Events
Name             | Params | Description
---------------- | -------| -------------------
input            |        | Emits input event on value change 

<script>
export default {
	data () {
    return {
      records:{
      	MyDataitem:1
      },
		  dataitems:{
				MyDataitem:{
					name: "YesNo",
					lookup:{
						items:[
						  {label: "Yes", value: 1},
						  {label: "No", value: 2}
						]
					}
				}
			},
    }
  },
}
</script>