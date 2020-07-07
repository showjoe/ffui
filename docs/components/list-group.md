---
title: List group
description: List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.

---
<h4 class="display-4">{{$frontmatter.title}}</h4>
<h3>{{$frontmatter.description}}</h3>

## Basic Example

::: demo vue
<div class="list-group-demo">
  <list-group>
    <list-group-item>Cras justo odio</list-group-item>
    <list-group-item>Dapibus ac facilisis in</list-group-item>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <list-group-item>Morbi leo risus</list-group-item>
    <list-group-item>Porta ac consectetur ac</list-group-item>
    <list-group-item>Vestibulum at eros</list-group-item>
  </list-group>
</div>
:::

## Nested lists

::: demo
<div class="list-group-demo">
  <list-group>
    <list-group-item>Item 1</list-group-item>
    <list-group-item>Item 2</list-group-item>
    <list-group-item>
      Item 3
      <list-group class="mt-3">
        <list-group-item>Sub Item 1</list-group-item>
        <list-group-item>Sub Item 2</list-group-item>
        <list-group-item>Sub Item 3</list-group-item>
      </list-group>
    </list-group-item>
  </list-group>
</div>
:::

## flush
add a flush prop to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).  You should disable the card body or use the body slot to insert your list-group

::: demo
<card title="Card Title" head :body="false" style="max-width:400px">
  <list-group flush>
    <list-group-item>Item 1</list-group-item>
    <list-group-item>Item 2</list-group-item>
    <list-group-item>Item 3</list-group-item>
  </list-group>
</card>
:::

## horizontal
add a horizontal prop to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively, choose a responsive variant `sm|md|lg|xl` to make a list group horizontal starting at that breakpoint's `min-width`. Currently **horizontal list groups cannot be combined with flush list groups.**

**ProTip:** Want equal-width list group items when horizontal? Add `.flex-fill` or `w-100` to each list group item.

::: demo
<list-group horizontal="lg">
  <list-group-item v-for="i in 5" v-dummy:1,2 class="w-100"/>
</list-group>
:::

## items
add an array or object of items and the list-group will render selectable list-group-items as it's children. This will only work when a v-model is supplied

::: demo
<div class="list-group-demo">
  <list-group :items="items" v-model="item_1" />
</div>
:::

## Dataitem (:di)
Alternatively add a dataitem object with a suitable lookup and the list-group will render selectable list-group-items as it's children. This will only work when a v-model is supplied

::: demo
<div class="list-group-demo">
  <list-group :di="example_dataitem" v-model="item_1" />
</div>
:::
<pre class="text-white">
  example_dataitem:{{example_dataitem}}
</pre>
You can customise the generated list-group-items using the item-inner slot
::: demo
<div class="list-group-demo">
  <list-group :items="items" v-model="item_1">
    <template #item-inner="{item,k,value}">
      Custom {{item.label}} - {{k}} - {{value}}
    </template> 
  </list-group>
</div>
:::

Or recreate the entire list-group-item template for each item using the item slot.  Be careful to re-establish any event handlers and accessibility attributes when using this slot
::: demo
<div class="list-group-demo">
  <list-group :items="items" v-model="item_1" class="mb-3">
    <template #item="{item,k,value}">
      <list-group-item is-link :true-value="item.value" v-model="item_1" :class="['d-flex list-group-item-'+types[k]]">
        <span class="ml-auto">Custom {{item.label}} - {{k}}</span>
        <badge :type="types[k]" class="m-auto">{{types[k]}}</badge>
      </list-group-item>
    </template> 
  </list-group>
  <code class="mt-3">types:{{types}}</code>
</div>
:::

## list-group props
Name        | Type       | Description | Default
:--------   | :----:     | ----------- | :-----:
flush       | `Boolean`  | if true the list group will have no margin (Useful for list-groups inside other elements like cards) | false


<script>
export default {
  data () {
    return {
      types: ['primary','secondary','success','danger','warning','info','light','dark'],
      items:[
        { label:'Item 1', value:1 },
        { label:'Item 2', value:2 },
        { label:'Item 3', value:3 },
        { label:'Item 4', value:4 },
        { label:'Item 5', value:5 },
        { label:'Item 6', value:6 },
        { label:'Item 7', value:7 },
        { label:'Item 8', value:8 },
      ],
      item_1: false,
      item_2: false,
      example_dataitem:{
        label:'Dataitem',
        lookup:{
          items:[{label:'Label 1', value:1},{label:'Label 2', value:2},{label:'Label 3', value:3}]
        }
      }
    }
  },
}
</script>