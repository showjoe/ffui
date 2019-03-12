# Collapse
## Basic Example
Used to show and hide content with a transition.

@[code lang=vue transclude={10-15}](@/docs/components/collapse.md)

<pre class="text-white">collapse1:{{collapse1}}</pre>

<template>
<btn v-model="collapse1" type="checkbox">collapsed is {{collapse1}}</btn>
<collapse :show="!collapse1">
	<alert class="mt-2">
		Some content that will be shown if collapsed is {{collapse1}} 
	</alert>
</collapse>
</template>

## Duration
Add a duration property to specify the transition duration for the collapse.  You can specify separate durations for enter and leave like so: {enter: 100,leave: 200}

@[code lang=vue transclude={26-31}](@/docs/components/collapse.md)

<pre class="text-white">collapse2:{{collapse2}}</pre>

<template>
<btn v-model="collapse2" type="checkbox">collapsed is {{collapse2}}</btn>
<collapse :show="!collapse2" :duration="300">
	<alert class="mt-2">
		Some content that will be shown if collapsed is {{collapse2}} 
	</alert>
</collapse>
</template>

## Easing
Add an easing prop to specify the easing mode: `linear` `ease` `ease-in` `ease-out` `ease-in-out`

@[code lang=vue transclude={42-47}](@/docs/components/collapse.md)

<pre class="text-white">collapse3:{{collapse3}}</pre>

<template>
<btn v-model="collapse3" type="checkbox">collapsed is {{collapse3}}</btn>
<collapse :show="!collapse3" ease="ease-in">
	<alert class="mt-2">
		Some content that will be shown if collapsed is {{collapse3}} 
	</alert>
</collapse>
</template>


## Props
Name        | Type                 | Description | Default
:--------   | :----:               | ----------- | :-----:
show				| `Boolean`            | Collapsible area is shown if `show` is `true` | false
duration  	| `Number` or `Object` | Specify transition duration either as an integer (ms) or as an object:  `{enter: 100,leave: 200}` | 150
ease      	| `String`             | Specify easing mode: `linear` `ease` `ease-in` `ease-out` `ease-in-out` | 'ease-out'


<script>
export default {
	data () {
    return {
    	collapse1: false,
    	collapse2: false,
    	collapse3: false,
    }
  },
}
</script>