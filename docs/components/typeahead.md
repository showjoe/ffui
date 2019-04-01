# Typeahead

<template>
	<typeahead query-url="http://ukivas.local/api/meddra/" label-key="hl" array-key="items" @selected="selected"/>
	<list-group class="mt-4">
	  <list-group-item v-for="item in selectedItems">
	    <span v-html="item.label"></span>
	  </list-group-item>
	</list-group>
</template>

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