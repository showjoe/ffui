# Navs
## Base Nav Example

Base nav's have no active state styling.

::: demo
<nav-bar :links="getPages()" :current="currentTab" @change="changeTab"/>
:::

## Horizontal Alignment

By default, navs are left-aligned, but you can easily change them to center or right aligned.

::: demo
<nav-bar :links="getPages()" :current="currentTab" @change="changeTab" class="mb-4"/>
<nav-bar align="center" :links="getPages()" :current="currentTab" @change="changeTab" class="mb-4"/>
<nav-bar align="right" :links="getPages()" :current="currentTab" @change="changeTab" class="mb-4"/>
:::

## Vertical

By default, navs are left-aligned, but you can easily change them to center or right aligned.

::: demo
<nav-bar vertical :links="getPages()" :current="currentTab" @change="changeTab" class="mb-4"/>
:::

## Tabs

Add the tabs prop to style as tabs

::: demo
<nav-bar tabs :links="getPages()" :current="currentTab" @change="changeTab" class="mb-4"/>
:::

## Pills

Add the pills prop to style as pills

::: demo
<nav-bar pills :links="getPages()" :current="currentTab" @change="changeTab" class="mb-4"/>
:::

## Fill and Justify

Force your nav’s contents to extend the full available width one of two modifier classes. To proportionately fill all available space with your nav-items, use fill. Notice that all horizontal space is occupied, but not every nav item has the same width.

::: demo
<nav-bar tabs fill :links="getPages2()" :current="currentTab" @change="changeTab" />
:::

For equal-width elements, use justify. All horizontal space will be occupied by nav links, but unlike the fill above, every nav item will be the same width.

::: demo
<nav-bar tabs justify :links="getPages2()" :current="currentTab" @change="changeTab" />
:::


## Template based nav items

::: demo
<nav-bar pills @change="changeTab">
  <nav-item link="p1" @click.native="currentTab = 'p1'" :active="currentTab == 'p1'">Page 1</nav-item>
  <nav-item link="p2" @click.native="currentTab = 'p2'" :active="currentTab == 'p2'">Page 2</nav-item>
  <nav-item link="p3" @click.native="currentTab = 'p3'" :active="currentTab == 'p3'">Page 3</nav-item>
</nav-bar>
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
      getPages2(){
        return {
          home:{
            title:'Home',
          },
          profile:{
            title:'Extra long tab title',
          },
          contact:{
            title:'Contact',
          },
        }
      },
      isActive(){},
      isCurrent(){},
  		changeTab(p){
  			console.log('changePage',p) 
  			this.currentTab = p
  		}
  	}
}
</script>