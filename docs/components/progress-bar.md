
# Progress Bar
## Basic Example
@[code lang=vue transclude={6-9}](@/docs/components/progress-bar.md)
<template>
<progress-bar
  :valid="records.valid"
  :total="records.total"
  :invalid="records.invalid"/>
</template>

`records: {{records}}`

<template>
<btn v-on:click.native="randomizeScore">Randomize</btn>
</template>

### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
valid   | 		 | Valid Array or Number  | null
invalid | 		 | Invalid Array or Number  | null
total   | 		 | Total Array or Number  | null

<script>
export default {
	data () {
      	return {
      		records:{
	      		valid: 6,
	      		invalid: 1,
	      		total: 10
	      	}
      	}
  	},
  	methods:{
  		randomizeScore(){
  			var total = 10
  			var valid = _.random(0, total)
  			var invalid = _.random(0, total - valid)
  			this.records.valid = valid
  			this.records.invalid = invalid
  		}
  	}
}
</script>