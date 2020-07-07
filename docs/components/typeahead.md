# Typeahead

:::demo
<div style="min-height:600px">
	<typeahead query-url="https://www.themealdb.com/api/json/v1/1/search.php" query-key="s" label-key="strMeal" array-key="meals" @selected="selected" class="mb-4"/>
	<media v-for="item in selectedItems" :title="item.strMeal" class="mb-4">
		<img slot="media" :src="item.strMealThumb" width="100" :alt="item.strMeal"  class="mr-3">
		{{item.strInstructions}}
	</media>	
</div>
:::

<script>
export default {
	data () {
  	return {
    	selectedItems:[],
  	}
  },
  methods:{
		selected(item){
			this.selectedItems.push(item)
		},
		selectedMeme(item){
			this.selectedMemes.push(item)
		}
  }
}
</script>