# Dropdown

Dropdowns can be used with a dataitem's lookup like so:

<pre class="text-white">{{dataitems.Country.lookup}}</pre>
<pre class="text-white">{{records}}</pre>

::: demo
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country" />
:::

## btn-class and outline
Just like a regular btn you can specify `btn-class` and `btn-outline` props to change the style of the button

::: demo
  <dropdown btn-class="danger" :btn-outline="false" :items="dataitems.Country.lookup.items" v-model="records.Country"/>
:::

## btn-split
Add a `btn-split` prop to show the dropdown with a separated button label and caret

::: demo
  <dropdown btn-split :items="dataitems.Country.lookup.items" v-model="records.Country"/>
:::

## justified
Add a `justified` prop to show the dropdown as full width

::: demo
  <dropdown justified :items="dataitems.Country.lookup.items" v-model="records.Country"/>
:::

## null-option
add a `null-option` prop to show an empty selectable option first in the list.  This is useful when you want to be able 'unselect' an option.

::: demo
  <dropdown null-option :items="dataitems.Country.lookup.items" v-model="records.Country"/>
:::

## Slots

Default slot will be after dropdown trigger button.

::: demo
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <div>Extra Content</div>
  </dropdown>
:::

`btn` slot will be inside dropdown trigger button.

::: demo
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <div slot="btn">Extra Content</div>
  </dropdown>
:::

Add child content using `slot="list"` to alter content in the list - the slot represents an entire dropdown-item so will need to reimplement click handlers and other classes

::: demo
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <img v-if="records.Country" slot="btn" :src="countryFlagUrl(records.Country)">
    <template #list="{item}">
      <a :class="['dropdown-item',{'active':item.value == records.Country}]" @click="records.Country = item.value">
        <img :src="countryFlagUrl(item.value)">
        <span>{{item.label}}</span>
      </a>
    </template>
  </dropdown>
:::

Or choose to alter the contents of each dropdown-item in the list using `slot="list-item-prepend"` or  `slot="list-item-append"` this will avoid needing to duplicate the necessary classes and props for the dropdown-item

::: demo
<dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
  <img v-if="records.Country" slot="btn" :src="countryFlagUrl(records.Country)">
  <template #list-item-prepend="{item}">
    <img :src="countryFlagUrl(item.value)">
  </template>
</dropdown>
:::


## grouping
Group your items by giving a name to the key in the lookups object this requires the items are sent as a keyed object

::: demo
<form-group :di="deathCauses" v-slot="{di}">
  <dropdown :group="di.lookup.group" :items="di.lookup.items" v-model="records.DeathCause" btn-split justified />
</form-group>
:::

## dropdown in a modal
A quick test to prove it works..

::: demo
<div>
  <btn @click.native="modalShow=!modalShow">Show Modal</btn>
  <modal :show="modalShow" @close="modalShow = false">
    <form-group :di="deathCauses" v-slot="{di}">
      <dropdown :group="di.lookup.group" :items="di.lookup.items" v-model="records.DeathCause" btn-split justified />
    </form-group>
  </modal>
</div>
:::

## dropdown in a collapse
A quick test to prove it works..

::: demo
<div>
  <btn @click.native="collapseShow=!collapseShow">Show Dropdown</btn>
  <collapse :show="collapseShow">
    <form-group :di="deathCauses" v-slot="{di}">
      <dropdown :group="di.lookup.group" :items="di.lookup.items" v-model="records.DeathCause" btn-split justified />
    </form-group>
  </collapse>
</div>
:::

## disabled

::: demo
<form-group :di="deathCauses" v-slot="{di}">
  <dropdown disabled :group="di.lookup.group" :items="di.lookup.items" v-model="records.DeathCause2" btn-split justified />
</form-group>
:::

## readonly

::: demo
<form-group :di="deathCauses" v-slot="{di}">
  <dropdown readonly :group="di.lookup.group" :items="di.lookup.items" v-model="records.DeathCause3" btn-split justified />
</form-group>
:::

## Slots
Name              | Description 
:--------         | ----------- 
default           | Positioned between btn and dropdown menu
btn               | Positioned inside btn
list              | Replaces dropdown-item template
list-item-prepend | Positioned before each dropdown-item label
list-item-append | Positioned after each dropdown-item label


## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
`btn-class` | String  | Standard btn-class | `primary`
`btn-size`  | String  | 'sm' or 'lg'  | null
`btn-split` | Boolean | Split the button | false
`justified` | Boolean | Make btn full-width | false

<script>
  import deathCauses from './sample-data/death-causes.json'
export default {
  methods:{
    countryFlagUrl(country_code){
      return 'https://www.countryflags.io/'+country_code+'/shiny/32.png'
    }
  },
  data() {
    return {
      collapseShow:false,
      modalShow:false,
      records: {
        Country: null,
        DeathCause: null,
        DeathCause2: 6,
        DeathCause3: 7,
      },
      dataitems: {
        Country: {
          name: 'Country',
          label: 'Choose a country',
          lookup: {
            name: 'CountryList',
            items: [
              { label: 'United Arab Emirates', value: 'AE' },
              { label: 'United Kingdom', value: 'GB' },
              { label: 'United States', value: 'US' },
            ]
          }
        },
        OtherCountry: {
          name: 'Country',
          label: 'Choose a country',
          lookup: {
            name: 'CountryList',
            items: [
              { label: 'United Arab Emirates', value: 'AE' },
              { label: 'United Kingdom', value: 'GB' },
              { label: 'United States', value: 'US' },
            ]
          }
        }
      },
      deathCauses:deathCauses
    }
  },
}
</script>