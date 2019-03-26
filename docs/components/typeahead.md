# Typeahead

@[code lang=vue transclude={5-5}](@/docs/components/typeahead.md)
<template>
	<typeahead query-url="http://ukivas.local/meddra/" label-key="hl" @selected="selected"/>
	<list-group class="mt-4">
		<list-group-item v-for="item in selectedItems">
			<span v-html="item.hl"></span>
			<span>{{item.label}}</span>
		</list-group-item>
	</list-group>
</template>

<script>
export default {
	data () {
  	return {
    	selectedItems:[]
  	}
  },
  methods:{
		selected(item){
			this.selectedItems.push(item)
			console.log('HERE',item) 
		}
  }
}
</script>