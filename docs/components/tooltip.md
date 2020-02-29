
# Tooltip

Tooltip is enabled by using the v-tooltip directive or the tooltip component.
The tooltip will default to the hover event to trigger.

## Tooltip directive
::: demo
<btn v-tooltip="{text:'Tooltip text'}">Click to toggle tooltip</btn>
:::

## Tooltip component
::: demo
<btn id="tooltip-target-1">Click to toggle tooltip</btn>
<tooltip event="click" target="tooltip-target-1" text="Tooltip text"/>
<btn id="tooltip-target-2">Hover to toggle tooltip</btn>
<tooltip target="tooltip-target-2" text="Tooltip text"/>
:::

## position

By default should automatically choose most sensible position.  You can configure it to use a specific relative position like so:

::: demo
<btn id="tooltip-target-3">Tooltip on top</btn>
<btn id="tooltip-target-4">Tooltip on right</btn>
<btn id="tooltip-target-5">Tooltip on bottom</btn>
<btn id="tooltip-target-6">Tooltip on left</btn>
<tooltip position="top" target="tooltip-target-3" text="Tooltip text"/>
<tooltip position="right" target="tooltip-target-4" text="Tooltip text"/>
<tooltip position="bottom" target="tooltip-target-5" text="Tooltip text"/>
<tooltip position="left" target="tooltip-target-6" text="Tooltip text"/>
:::

## html

Put html content inside the tooltip:

::: demo
<btn v-tooltip="{html:'<b>Tooltip</b> text'}">Tooltip with HTML from directive</btn>
<btn id="tooltip-target-7">Tooltip with HTML from component</btn>
<tooltip target="tooltip-target-7" html="<b>Tooltip</b> text"/>
:::

## slots

### default
The default slot will replace the contents inside the tooltip
You should use the click event to trigger so you can interact with contents of tooltip
::: demo
<btn id="tooltip-target-8">Tooltip with HTML from default slot</btn>
<tooltip event="click" target="tooltip-target-8">
		<btn btn-class="secondary">Click</btn>
</tooltip>
:::

### outer
The outer slot will replace the tooltip-inner container

::: demo
<btn id="tooltip-target-9">Tooltip with HTML from outer slot</btn>
<tooltip event="click" target="tooltip-target-9">
	<template v-slot:outer>
		<btn btn-class="secondary">Click</btn>
	</template>
</tooltip>
:::



### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
event   | String | `click` or `hover`  | `hover`
target  | 		   | id of dom node that will trigger tooltip  | null
text    |        | Text of tooltip  | null
html    | 		   | HTML markup for tooltip  | null

### Slots
Name    | Type   | Description
----    | :----: | ----------- | -----
default |        | inside the tooltip inner  | null
outer   | 		   | replaces the tooltip-inner container  | null


<script>
export default {
	data () {
      	return {
      		
      	}
  	},
    mounted(){

    },
  	methods:{
      
  	}
}
</script>