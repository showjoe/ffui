# Checkbox
## Basic Example
A basic checkbox form element.

@[code lang=vue transclude={10-12}](@/docs/components/checkbox.md)

<pre class="text-white">{{$data}}</pre>

<template>
<checkbox v-model="records.checkbox1"> A checkbox with a clickable label </checkbox>
<checkbox v-model="records.checkbox2" true-value="ABC" :false-value="3" label="A second option" />
<checkbox v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
</template>

## Left aligned label
@[code lang=vue transclude={18-18}](@/docs/components/checkbox.md)
<template>
<checkbox label-left v-model="records.checkbox1"> A checkbox with a clickable label </checkbox>
</template>


## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
true-value  |         | value that should be used in the case of a true (or active) button | `true`
false-value |         | value that should be used in the case of a false (or deactive) button | `false`
label-left |   Boolean      | Show the label on the left hand side | `false`

<script>
export default {
	data () {
    return {
    	records:{
    	checkbox1: false,
    	checkbox2: false,
    	checkbox3: false,
    	}
    }
  },
}
</script>