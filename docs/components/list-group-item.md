# List Group Items

<ol class="list-group">
  <li class="list-group-item disabled" aria-disabled="true">Cras justo odio</li>
  <li class="list-group-item">Dapibus ac facilisis in</li>
  <li class="list-group-item">Morbi leo risus</li>
  <li class="list-group-item">Porta ac consectetur ac</li>
  <li class="list-group-item">Vestibulum at eros</li>
</ol>

## v-model
You can use v-model to associate a record with a list-group-item.

::: demo
<list-group>
  <list-group-item is-link v-model="item_1">List Item 1 </list-group-item>
</list-group>
:::

<pre class="text-white">item_1:{{item_1}}</pre>

## true-value & false-value
Use the true-value prop to define the value you would like to assign to the record when the list-group-item is selected.

::: demo
<list-group>
  <list-group-item is-link v-model="item_2" :true-value="1" :false-value="null">List Item 1 </list-group-item>
  <list-group-item is-link v-model="item_2" :true-value="2" :false-value="null">List Item 2 </list-group-item>
  <list-group-item is-link v-model="item_2" :true-value="3" :false-value="null">List Item 3 </list-group-item>
</list-group>
:::

## disabled
Use the disabled prop to stop triggering of click events.

::: demo
<list-group>
  <list-group-item  v-model="item_2" :true-value="1" :false-value="null">List Item 1  </list-group-item>
  <list-group-item  v-model="item_2" :true-value="2" :false-value="null" disabled>List Item 2 </list-group-item>
</list-group>
:::

## readonly
Use the readonly prop to stop triggering of click events.

::: demo
<list-group>
  <list-group-item  v-model="item_2" :true-value="1" :false-value="null">List Item 1  </list-group-item>
  <list-group-item  v-model="item_2" :true-value="2" :false-value="null" readonly>List Item 2 </list-group-item>
</list-group>
:::

## href
Use a href prop along with is-link to use as a traditional link

::: demo
<list-group>
  <list-group-item is-link href="http://www.google.com" >Google</list-group-item>
  <list-group-item is-link href="http://www.facebook.com" >Facebook</list-group-item>
</list-group>
:::

## With badges
Add badges to any list group item to show unread counts, activity, and more with the help of some [utilities](../utilities/flex/).


::: demo
<div class="list-group-demo">
  <list-group>
    <list-group-item v-for="i in 5" class="d-flex justify-content-between align-items-center">
      <span v-dummy:1,2></span>
      <badge type="primary" pill v-html="i"></badge>
    </list-group-item>
  </list-group>
</div>
:::

## Custom content

Add nearly any HTML within, even for linked list groups like the one below, with the help of [flexbox utilities](../utilities/flex/).

::: demo
<div class="list-group-demo">
  <list-group>
    <list-group-item v-for="i in 3" is-link :true-value="i" v-model="item_1">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </div>
      <p class="mb-1" v-dummy:5,20></p>
      <small  v-dummy:3,7></small>
    </list-group-item>
  </list-group>
</div>
:::

## list-group-item props
Name          | Type       | Description                                                            | Default
:--------     | :----:     | -----------                                                            | :-----:
id            | `String`   | Pass in a custom id for accessibility                                  | 
:di           | `Object`   | Pass a FormFactory Dataitem to use it's label.                         | 
v-model       |            | Link the list-group-item to a record.  This will use true-value.       | 
:true-value   |            | the value associated with the list-group-item being selected           | `true`
:false-value  |            | the value associated with the list-group-item being deselected         | `false`
tag           | `String`   | Specify an alternative html tag for the list-group-item e.g. 'li'      | `div`
href          | `String`   | navigation link                                                        | `false`
is-link       | `Boolean`  | shows the item as selectable                                           | `false`
is-router-link| `Boolean`  | uses the `:to` prop to create a valid vue-router link                  | `false`
disabled      | `Boolean`  | if true the list-group-item is disabled                                | `false`
readonly      | `Boolean`  | if true the list-group-item is readonly                                | `false`



id: {},
    di: Object,
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
    tag: {
      type: String,
      default: 'div'
    },
    disabled: Boolean,
    readonly: Boolean,
    isLink: Boolean,
    href: {},
    isRouterLink: Boolean,
    routerLinkActive: Boolean,
    routerLinkExact: Boolean,
    to: {}

<script>
export default {
  data () {
    return {
        item_1:false,
        item_2:false,
    }
  },
}
</script>