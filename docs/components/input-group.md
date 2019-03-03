# Input Group
Input groups work like this:
## prepend slot
@[code lang=vue transclude={6-9}](@/docs/components/input-group.md)
<template>
<input-group :di="dataitems.MyDataitem1">
	<span slot="prepend" class="input-group-text">First Name</span>
	<textbox v-model="records.MyDataitem1" justified/>
</input-group>
</template>

## append slot
@[code lang=vue transclude={15-18}](@/docs/components/input-group.md)
<template>
<input-group :di="dataitems.MyDataitem1">
	<textbox v-model="records.MyDataitem1" justified/>
	<span slot="append" class="input-group-text">First Name</span>
</input-group>
</template>

## btn
@[code lang=vue transclude={24-29}](@/docs/components/input-group.md)
<template>
<input-group>
	<span slot="prepend" class="input-group-text">Test</span>
	<textbox v-model="records.MyDataitem1" justified/>
	<btn slot="append" class="input-group-btn">Button</btn>
	<btn slot="append" class="input-group-btn">Button</btn>
</input-group>
</template>

<script>
export default {
	data() {
	  return {
	    records: {
	      MyDataitem1: "Joe",
	    },
	    dataitems: {
	      MyDataitem1: {
	        name: "FirstName",
	        label: "First Name:"
	      }
	    },
	  }
	},
}
</script>