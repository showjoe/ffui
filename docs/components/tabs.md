# Tabs
## Basic Example

::: demo
<div>
	<nav-bar tabs fill :links="getPages()" :current="currentTab" @change="changeTab"/>
	<tab-content :tabs="getPages()" :current="currentTab" fade>
		<template #home>
			<h4>Home page</h4>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, aliquam. Doloremque doloribus assumenda vel, eveniet accusantium porro neque ipsam aliquam labore, sit aspernatur tempora, et sapiente placeat, deserunt laudantium recusandae!
		</template>
		<template #profile>
			<h4>Profile page</h4>
			Some text for my profile page!
			<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates magni reprehenderit, quasi dolor architecto, repudiandae nulla, obcaecati eius quos quisquam maxime dolore voluptatibus, modi id. Cupiditate minima tempora eum placeat.</div>
		</template>
	</tab-content>
</div>
:::

<hr>

### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----

### Methods
Name             | Params | Description
---------------- | -------| -------------------
update           |        | Input of textbox triggers update method

### Events
Name             | Params | Description
---------------- | -------| -------------------
input            |        | Emits input event on value change 

<script>
export default {
	data () {
      	return {
      		currentTab:'home'
      	}
  	},
  	methods:{
  		getPages(){
  			return {
  				home:{
  					title:'Home',
  				},
  				profile:{
  					title:'Profile',
  				},
  				contact:{
  					title:'Contact',
  				},
  				disabled:{
  					title:'Disabled',
  					disabled:true
  				},
  			}
  		},
  		changeTab(p){
  			console.log('changePage',p) 
  			this.currentTab = p
  		}
  	}
}
</script>