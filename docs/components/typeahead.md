# Typeahead

@[code lang=vue transclude={5-20}](@/docs/components/typeahead.md)
<template>
<typeahead
		query-url="http://version1.api.memegenerator.net//Generators_Search"
		label-key="displayName"
		@selected="selectedMeme"
		api-key="7e9be3d6-7135-4946-a292-5656c7b10400"
		query-key="q"
		array-key="result"
/>
<!-- result -->
<row class="mt-4">
		<column v-for="item in selectedMemes" :sizes="{md:4}">
			<div>{{item.displayName}}</div>
			<img :src="item.imageUrl" class="img-fluid">
		</column>
	</row>
</template>

<script>
export default {
	data () {
  	return {
    	selectedItems:[],
    	selectedMemes:[],
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