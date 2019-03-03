# Textbox
## Basic Example

Add `<textbox/>` to the template in the `*.vue` file you are working on to add a text input with the correct bootstrap classes.
`<textbox/>`
becomes
`<input type="text" class="form-control">`

will generate this:
<textbox/>

## Other Sizes
@[code lang=vue transclude={18-18}](@/docs/components/textbox.md)

or

@[code lang=vue transclude={20-20}](@/docs/components/textbox.md)
<textbox size="sm" value="A small input"/>
or
<textbox size="lg" value="A large input"/>

## v-model
Use v-model to link to a string in your data object

`{{$data}}`

@[code lang=vue transclude={28-28}](@/docs/components/textbox.md)
<textbox v-model="records.text1" />

<hr>

### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
v-model |        | Link to the record location ie. `records.text1` | 
size    | String | Use `sm` or `lg` | false

### Methods
Name             | Params | Description
---------------- | -------| -------------------
update           |        | Input of textbox triggers update method

### Events
Name             | Params | Description
---------------- | -------| -------------------
input            |        | Emits input event on value change 

<script>
export default {
	data () {
      	return {
      		records:{text1:"Text linked to data"},
      	}
  	},
}
</script>