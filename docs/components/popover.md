
# Popover

Popover is enabled by using the v-popover directive or the popover component

## popover directive
::: demo
<btn v-popover="{title:'Popover title',body:'And heres some amazing content. Its very engaging. Right?'}">Click to toggle popover</btn>
:::

## popover component
::: demo
<btn id="pop-target-1">Click to toggle popover</btn>
<popover event="click" target="pop-target-1" title="Popover title" body="And heres some amazing content. Its very engaging. Right?"/>
<btn id="pop-target-2">Hover to toggle popover</btn>
<popover event="hover" target="pop-target-2" title="Popover title" body="And heres some amazing content. Its very engaging. Right?"/>
:::

## position

By default should automatically choose most sensible position.  You can configure it to use a specific relative position like so:

::: demo
<btn id="pop-target-3">Popover on top</btn>
<btn id="pop-target-4">Popover on right</btn>
<btn id="pop-target-5">Popover on bottom</btn>
<btn id="pop-target-6">Popover on left</btn>
<popover event="click" position="top" target="pop-target-3" title="Popover title" body="And heres some amazing content. Its very engaging. Right?"/>
<popover event="click" position="right" target="pop-target-4" title="Popover title" body="And heres some amazing content. Its very engaging. Right?"/>
<popover event="click" position="bottom" target="pop-target-5" title="Popover title" body="And heres some amazing content. Its very engaging. Right?"/>
<popover event="click" position="left" target="pop-target-6" title="Popover title" body="And heres some amazing content. Its very engaging. Right?"/>
:::


## html

Put html content inside the popover:

::: demo
<btn v-popover="{title:'Popover title',html:'<b>Popover</b> text'}">Popover with HTML from directive</btn>
<btn id="popover-target-7">Popover with HTML from component</btn>
<popover target="popover-target-7" title="Popover title" html="<b>Popover</b> text"/>
:::


## slots

### default
The default slot will replace the contents inside the popover
You should use the click event to trigger so you can interact with contents of popover
::: demo
<btn id="popover-target-8">Tooltip with HTML from default slot</btn>
<popover event="click" target="popover-target-8" title="Popover title">
    <div class="d-flex">
      <btn class="mx-auto mb-4" btn-class="secondary">Click</btn>
    </div>
</popover>
:::

### header
The header slot will be placed inside the popover-header container

::: demo
<btn id="popover-target-9">Tooltip with HTML from header slot</btn>
<popover event="click" target="popover-target-9">
  <template v-slot:header>
    <b>Alternative title</b>
  </template>
</popover>
:::




### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
event   | String | click or hover  | null
target  | 		 | id of dom node that will trigger popover  | null
title   |      | Title of popover  | null
body    |      | body text of popover  | null
html    | 		 | body markup of popover  | null

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