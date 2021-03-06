# Input Groups
Input groups work like this:
## prepend slot

::: demo
<div>
	<input-group :di="dataitems.MyDataitem1">
		<span slot="prepend" class="input-group-text">First Name</span>
		<textbox v-model="records.MyDataitem1" justified></textbox>
	</input-group>
</div>
:::

## size
add an optional size prop to see a small or large version.  The child version will resize to fit.

::: demo
<div>
	<input-group size="sm" :di="dataitems.MyDataitem1">
		<span slot="prepend" class="input-group-text">First Name</span>
		<textbox size="sm" v-model="records.MyDataitem1" justified></textbox>
	</input-group>
	<hr>
	<input-group size="lg" :di="dataitems.MyDataitem1">
		<span slot="prepend" class="input-group-text">First Name</span>
		<textbox v-model="records.MyDataitem1" justified></textbox>
	</input-group>
</div>
:::

## append slot

::: demo
<div>
	<input-group :di="dataitems.MyDataitem1">
		<textbox v-model="records.MyDataitem1" justified/>
		<span slot="append" class="input-group-text">First Name</span>
	</input-group>
</div>
:::

## btn

::: demo
<div>
	<input-group>
		<span slot="prepend" class="input-group-text">Test</span>
		<textbox v-model="records.MyDataitem1" justified/>
		<btn slot="append" class="input-group-btn">Button</btn>
		<btn slot="append" class="input-group-btn">Button</btn>
	</input-group>
</div>
:::

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