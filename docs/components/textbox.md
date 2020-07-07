# Textbox
## Basic Example

Add `<textbox/>` to the template in the `*.vue` file you are working on to add a text input with the correct bootstrap classes.
`<textbox/>`
becomes
`<input type="text" class="form-control">`

will generate this:
<textbox/>

## Other Sizes
::: demo
<textbox size="sm" value="A small input"/>
or
<textbox size="lg" value="A large input"/>
:::

## v-model
Use v-model to link to a string in your data object

`{{$data}}`

::: demo
<textbox v-model="records.text1" />
:::

## disabled or readonly
Use disabled or readonly to disable the input

::: demo
<textbox v-model="records.text1" disabled class="mb-2" />
<textbox v-model="records.text1" readonly/>
:::

## plaintext
If you want to have textbox components in your form styled as plain text, use the `plaintext` prop to remove the default form field styling and preserve the correct margin and padding.

::: demo
<form>
	<form-group :di="{label:'Email'}" cols="2|10">
		<textbox value="email@example.com" readonly plaintext/>
	</form-group>
	<form-group :di="{label:'Password'}" cols="2|10">
		<textbox type="password" />
	</form-group>
</form>
:::



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