
# Progress Bar
## Basic Example

::: demo
<progress-bar :valid="records.valid" :total="records.total" :invalid="records.invalid"/>
:::

`records: {{records}}`

<btn v-on:click.native="randomizeScore">Randomize</btn>

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
      getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
      },
  		randomizeScore(){
  			var total = 10
  			var valid = this.getRandomInt(total)
  			var invalid = this.getRandomInt(total - valid)
  			this.records.valid = valid
  			this.records.invalid = invalid
  		}
  	}
}
</script>