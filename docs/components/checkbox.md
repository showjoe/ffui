# Checkbox
## Basic Example
A basic checkbox form element.


<pre class="text-white">{{$data}}</pre>
::: demo
<div>
	<checkbox v-model="records.checkbox1"> A checkbox with a clickable label </checkbox>
	<checkbox v-model="records.checkbox2" true-value="ABC" :false-value="3" label="A second option" />
    <checkbox v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
	<checkbox v-model="records.checkbox4" readonly> A 4th way is readonly </checkbox>
</div>
:::

## Left aligned label
::: demo
<checkbox label-left v-model="records.checkbox1">
	A checkbox with a clickable label
</checkbox>
:::

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
label       | String  | string of label text | null
label-left  | Boolean | Show the label on the left hand side | `false`
label-right | Boolean | Show the label on the left hand side | `true`
true-value  |         | value that should be used in the case of a true (or active) button | `true`
false-value |         | value that should be used in the case of a false (or deactive) button | `false`
disabled    |         | disables the checkbox | `false`
readonly    |         | makes the checkbox readonly  | `false`

<script>
export default {
	data () {
    return {
    	records:{
    	checkbox1: false,
    	checkbox2: false,
        checkbox3: false,
    	checkbox4: true,
    	}
    }
  },
}
</script>