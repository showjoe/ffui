# Slider
## Basic Example
@[code lang=vue transclude={6-6}](@/docs/components/slider.md)

<template>
  <slider v-model="records.sliderVal"/>
</template>

::: tip
By default the handle isn't shown so it doesn't influence the user
:::

## Colours
@[code lang=vue transclude={17-17}](@/docs/components/slider.md)

<template>
  <slider :colours="['#fff','#000']" v-model="records.sliderVal"/>
</template>

## colour-popover
Use the current colour value as the background colour to the popover

@[code lang=vue transclude={25-25}](@/docs/components/slider.md)
<template>
  <slider :colours="['red','blue']" colour-popover v-model="records.sliderVal"/>
</template>

## colour-handle
Use the current colour value as the background colour to the handle

@[code lang=vue transclude={33-33}](@/docs/components/slider.md)
<template>
  <slider :colours="['blue','green']" colour-popover colour-handle v-model="records.sliderVal"/>
</template>

## disabled
Disable the slider

@[code lang=vue transclude={41-41}](@/docs/components/slider.md)
<template>
  <slider disabled v-model="records.sliderVal"/>
</template>

## hide-grid
Hide the grid

@[code lang=vue transclude={49-49}](@/docs/components/slider.md)
<template>
  <slider hide-grid v-model="records.sliderVal"/>
</template>

## grid-divisions
How many divisions to show on the grid

@[code lang=vue transclude={57-57}](@/docs/components/slider.md)
<template>
  <slider :grid-divisions="20" v-model="records.sliderVal"/>
</template>

## labels
Set min and max labels

@[code lang=vue transclude={65-65}](@/docs/components/slider.md)
<template>
  <slider :labels="{min:'Minimum', max:'Maximum'}" v-model="records.sliderVal"/>
</template>

## min
Set minimum value

@[code lang=vue transclude={73-73}](@/docs/components/slider.md)
<template>
  <slider :min="-5" v-model="records.sliderVal2"/>
</template>

## max
Set maximum value

@[code lang=vue transclude={81-81}](@/docs/components/slider.md)
<template>
  <slider :max="15" v-model="records.sliderVal3"/>
</template>

## hide-popover
Hide popover

@[code lang=vue transclude={89-89}](@/docs/components/slider.md)
<template>
  <slider hide-popover v-model="records.sliderVal"/>
</template>

## prefix
Set a prefix to the value

@[code lang=vue transclude={97-97}](@/docs/components/slider.md)
<template>
  <slider prefix="£" v-model="records.sliderVal"/>
</template>

## postfix
Set a 'postfix' to the end of the value

@[code lang=vue transclude={105-105}](@/docs/components/slider.md)
<template>
  <slider postfix="K" v-model="records.sliderVal"/>
</template>

## range
Accept a range of two values

@[code lang=vue transclude={113-113}](@/docs/components/slider.md)
<template>
  <slider range v-model="records.sliderVal5"/>
</template>
{{records.sliderVal5}}

## reverse
Flip the direction of the slider

@[code lang=vue transclude={122-122}](@/docs/components/slider.md)
<template>
  <slider reverse v-model="records.sliderVal"/>
</template>

## step
Set the incremental step of the slider. Must be a positive number.

@[code lang=vue transclude={130-130}](@/docs/components/slider.md)
<template>
  <slider :step="0.1" v-model="records.sliderVal4"/>
</template>

## vertical
Display the slider in vertical mode. 

@[code lang=vue transclude={139-140}](@/docs/components/slider.md)
<template>
  <div class="clearfix">
  	<slider vertical v-model="records.sliderVal"/>
  	<slider vertical reverse v-model="records.sliderVal"/>
  </div>
</template>

<hr>

### Props
Name           | Type   | Description                                                                     | Default
----           | :----: | -----------------------------------------------------------------------------   | -----
colours        |Array   | Array of colours to fill the slider bar eg. `['#fff','#000']`                   | 
colour-popover |Boolean | Use the current colour value as the background colour to the popover            | false
colour-handle  |Boolean | Use the current colour value as the background colour of the handle             | false
disabled       |Boolean | Disable the slider                                                              | false
grid           |Boolean | Show the grid                                                                   | true
grid-divisions |Number  | How many divisions to show on the grid                                          | 10
labels         |Object  | Set min and max labels eg. `{min:'Minimum', max:'Maximum'}`                     | 
min            |Number  | Minimum possible value                                                          | 0
max            |Number  | Maximum possible value                                                          | 10
popover        |Boolean | Show the popover                                                                | true
prefix         |Text    | Set a prefix for the value.   Will be set up right before the number: **$**100  |
postfix        |Text    | Set postfix for values. Will be set up right after the number: 100k             |
range          |Boolean | Collect a minimum and maximum value                                             | false
reverse				 |Boolean | Set the slider range to show in reverse order                                   | false
step					 |Number  | Set the incremental step of the slider. Must be a positive number.              | 1
vertical       |Boolean | Display the slider in vertical mode.                                            | falses
v-model        |        | Link to the record location ie. `records.sliderVal`                             | 


### Methods
Name             | Params | Description
---------------- | -------| -------------------

### Events
Name             | Params | Description
---------------- | -------| -------------------

<script>
export default {
  data () {
        return {
          records:{
          	sliderVal:null,
          	sliderVal2:null,
          	sliderVal3:null,
          	sliderVal4:null,
          	sliderVal5:[0,10],
          },
        }
    },
}
</script>