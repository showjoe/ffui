# Button

## Basic Example
Add `<btn>My First Button</btn>` to the template in the `*.vue` file you are working on to add a btn with the correct bootstrap classes.

<p>It should look like this: <btn>My First Button</btn></p>

## block
add the `block` prop to make the button fill the available width:

@[code lang=js transclude={12-12}](@/docs/components/btn.md)
<btn block> Block Button </btn>

## btn-class
Add a btn-class prop to set the styling.  Outline mode is on by default.

@[code lang=js transclude={18-26}](@/docs/components/btn.md)
<btn btn-class="primary">Primary</btn>
<btn btn-class="secondary">Secondary</btn>
<btn btn-class="success">Success</btn>
<btn btn-class="danger">Danger</btn>
<btn btn-class="warning">Warning</btn>
<btn btn-class="info">Info</btn>
<btn btn-class="light">Light</btn>
<btn btn-class="dark">Dark</btn>
<btn btn-class="link">Link</btn>

Or to not use the outline mode

@[code lang=js transclude={31-39}](@/docs/components/btn.md)
<btn :outline="false" btn-class="primary">Primary</btn>
<btn :outline="false" btn-class="secondary">Secondary</btn>
<btn :outline="false" btn-class="success">Success</btn>
<btn :outline="false" btn-class="danger">Danger</btn>
<btn :outline="false" btn-class="warning">Warning</btn>
<btn :outline="false" btn-class="info">Info</btn>
<btn :outline="false" btn-class="light">Light</btn>
<btn :outline="false" btn-class="dark">Dark</btn>
<btn :outline="false" btn-class="link">Link</btn>

## btn-size
Add a btn-class prop to set the styling

@[code lang=js transclude={45-46}](@/docs/components/btn.md)
<btn size="sm"> Small Button </btn>
<btn size="lg"> Large Button </btn>

## v-model
Using v-model with individual buttons.  By default they will act as boolean 'checkbox' style buttons 

<small>`{{records}}`</small>

@[code lang=js transclude={54-58}](@/docs/components/btn.md)
<btn v-model="records.input_1">Input 1</btn>
<btn btn-class="secondary" v-model="records.input_2">Input 2</btn>
<btn btn-class="info" v-model="records.input_3">Input 3</btn>
<btn btn-class="warning" v-model="records.input_4">Input 4</btn>
<btn btn-class="danger" v-model="records.input_5">Input 5</btn>

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----- | :--------:
v-model     |         | Link to the record location ie. `records.value` | 
block       | Boolean | add this prop to fill the available width | `false`
btn-class   | String  | styling class. eg: `primary` | `"primary"`
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
      			input_1:true,
      			input_2:true,
      			input_3:true,
      			input_4:true,
      			input_5:true,
      		},
      	}
  	},
}
</script>