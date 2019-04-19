# Slider
## Basic Example
::: demo
  <slider v-model="records.sliderVal"/>
:::

::: tip
By default the handle isn't shown so it doesn't influence the user
:::

## Colours
::: demo
  <slider :colours="['#fff','#000']" v-model="records.sliderVal"/>
:::

## colour-popover
Use the current colour value as the background colour to the popover

::: demo
  <slider :colours="['red','blue']" colour-popover v-model="records.sliderVal"/>
:::

## colour-handle
Use the current colour value as the background colour to the handle

::: demo
  <slider :colours="['blue','green']" colour-popover colour-handle v-model="records.sliderVal"/>
:::

## disabled
Disable the slider

::: demo
  <slider disabled v-model="records.sliderVal"/>
:::

## hide-grid
Hide the grid

::: demo
  <slider hide-grid v-model="records.sliderVal"/>
:::

## grid-divisions
How many divisions to show on the grid

::: demo
  <slider :grid-divisions="20" v-model="records.sliderVal"/>
:::

## labels
Set min and max labels

::: demo
  <slider :labels="{min:'Minimum', max:'Maximum'}" v-model="records.sliderVal"/>
:::

## min
Set minimum value

::: demo
  <slider :min="-5" v-model="records.sliderVal2"/>
:::

## max
Set maximum value

::: demo
  <slider :max="15" v-model="records.sliderVal3"/>
:::

## hide-popover
Hide popover

::: demo
  <slider hide-popover v-model="records.sliderVal"/>
:::

## prefix
Set a prefix to the value

::: demo
  <slider prefix="£" v-model="records.sliderVal"/>
:::

## postfix
Set a 'postfix' to the end of the value

::: demo
  <slider postfix="K" v-model="records.sliderVal"/>
:::

## range
Accept a range of two values

::: demo
  <slider range v-model="records.sliderVal5"/>
:::
{{records.sliderVal5}}

## reverse
Flip the direction of the slider

::: demo
  <slider reverse v-model="records.sliderVal"/>
:::

## step
Set the incremental step of the slider. Must be a positive number.
::: demo
  <slider :step="0.1" v-model="records.sliderVal4"/>
:::

## vertical
Display the slider in vertical mode. 

::: demo
  <div class="clearfix">
  	<slider vertical v-model="records.sliderVal"/>
  	<slider vertical reverse v-model="records.sliderVal"/>
  </div>
:::

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