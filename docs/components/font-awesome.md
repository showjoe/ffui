# Font-Awesome
## Basic Example

Use `<fa icon="..."/>` to add an icon

::: demo
<fa icon="cog"/>
:::

## Size

Use `<fa icon="..." size="..."/>` to specify a size

::: demo
<fa icon="cog" size="xs"/>
<fa icon="cog"/>
<fa icon="cog" size="lg"/>
<fa icon="cog" size="2x"/>
<fa icon="cog" size="3x"/>
<fa icon="cog" size="4x"/>
<fa icon="cog" size="5x"/>
<fa icon="cog" size="6x"/>
:::

## Fixed-width

Use `<fa icon="..." fixed-width />` to set it to a fixed width

::: demo
<fa icon="cog" fixed-width/>
:::

## Rotation

Use `<fa icon="..." rotation="..."/>` to specify a rotation

::: demo
<fa icon="spinner" size="6x" rotation="90" />
<fa icon="spinner" size="6x" rotation="180" />
<fa icon="spinner" size="6x" rotation="270" />
:::

## Flip

Use `<fa icon="..." flip="..."/>` to specify a flip direction

::: demo
<fa icon="spinner" size="6x" flip="horizontal" />
<fa icon="spinner" size="6x" flip="vertical" />
<fa icon="spinner" size="6x" flip="both" />
:::

## Spin and Pulse

Use `<fa icon="..." spin />` to specify spinning or pulsing

::: demo
<fa icon="spinner" size="6x" spin />
<fa icon="spinner" size="6x" pulse />
:::

## Border

Use `<fa icon="..." size="..."/>` to specify a border

::: demo
<fa icon="spinner" size="6x" border />
:::

## Pull

Use `<fa icon="..." pull="left" />` to pull left or right

::: demo
<fa icon="spinner" size="6x" pull="left" />
<fa icon="spinner" size="6x" pull="right" />
:::

## Power Transforms

Use `<fa icon="..." transform="shrink-6 left-4" />` to apply transforms

::: demo
<fa icon="spinner" transform="shrink-6 left-4" />
<fa icon="spinner" :transform="{ rotate: 42 }" />
:::

## Masking

Use `<fa icon="..." :mask="['far', ...]" />` to use a second icon as a mask

::: demo
<fa size="6x" icon="coffee" mask="circle" />
:::

## Symbols

Use `<fa icon="..." symbol />` to use as symbol

::: demo
<fa icon="edit" symbol="edit-icon" />
<svg><use xlink:href="#edit-icon"></use></svg>
:::

## Layers

::: demo
<fa-layers class="fa-6x">
  <fa icon="circle" />
  <fa icon="check" transform="shrink-6" :style="{ color: 'white' }" />
</fa-layers>
:::

## Layers Text

::: demo
<fa-layers full-width class="fa-4x">
  <fa icon="chess-queen"/>
  <fa-layers-text class="gray8" transform="down-1 shrink-8" value="Q" />
</fa-layers>
:::

<hr>

### Props
Name    | Type   | Description | Default
----    | :----: | ----------- | -----
v-model |        | Link to the record location ie. `records.text1` | 
size    | String | Use `sm` or `lg` | false

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
	
}
</script>
<style>
.fa-layers-text.gray8 {
    color: #ccc;
}
</style>	