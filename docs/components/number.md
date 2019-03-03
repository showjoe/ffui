
# Number
## Basic Example

Add `<number/>` to the template in the `*.vue` file you are working on to add a number input with the correct bootstrap classes.
When rendered `<number/>` becomes `<input type="number" step="1" min="0" class="form-control">`
and will look like this:

<number/>

## Other Sizes
@[code lang=vue transclude={13-13}](@/docs/components/number.md)
<number size="sm" value="123"/>
or

@[code lang=vue transclude={17-17}](@/docs/components/number.md)
<number size="lg" value="456"/>

## v-model
Use v-model to link to the number in your data object
eg.

`{{$data}}`

@[code lang=vue transclude={26-26}](@/docs/components/number.md)
<number v-model="records.number" />

### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
v-model |        | Link to the record location ie. `records.number` | 
size    | String | Use `sm` or `lg` | false
step    | Number | A step value     | 1
min     | Number | A minimum value  | 0
max     | Number | A maximum value  | 

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
      records:{"number":1},
    }
  },
}
</script>