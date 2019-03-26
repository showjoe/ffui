# Dropdown

Dropdowns can be used with a dataitem's lookup like so:

<pre class="text-white">{{dataitems.Country.lookup}}</pre>
<pre class="text-white">{{records}}</pre>

@[code lang=vue transclude={10-10}](@/docs/components/dropdown.md)
<template>
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country"></dropdown>
</template>

## btn-class and outline
Just like a regular btn you can specify `btn-class` and `btn-outline` props to change the style of the button

@[code lang=vue transclude={18-18}](@/docs/components/dropdown.md)
<template>
  <dropdown btn-class="danger" :btn-outline="false" :items="dataitems.Country.lookup.items" v-model="records.Country"></dropdown>
</template>

## btn-split
Add a `btn-split` prop to show the dropdown with a separated button label and caret

@[code lang=vue transclude={26-26}](@/docs/components/dropdown.md)
<template>
  <dropdown btn-split :items="dataitems.Country.lookup.items" v-model="records.Country"></dropdown>
</template>

## justified
Add a `justified` prop to show the dropdown as full width

@[code lang=vue transclude={34-34}](@/docs/components/dropdown.md)
<template>
  <dropdown justified :items="dataitems.Country.lookup.items" v-model="records.Country"></dropdown>
</template>

## null-option
add a `null-option` prop to show an empty selectable option first in the list.  This is useful when you want to be able 'unselect' an option.

@[code lang=vue transclude={42-42}](@/docs/components/dropdown.md)
<template>
  <dropdown null-option :items="dataitems.Country.lookup.items" v-model="records.Country"></dropdown>
</template>

## Slots

Default slot will be after dropdown trigger button.

@[code lang=vue transclude={51-53}](@/docs/components/dropdown.md)
<template>
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <div>Extra Content</div>
  </dropdown>
</template>

---
`btn` slot will be inside dropdown trigger button.

@[code lang=vue transclude={61-63}](@/docs/components/dropdown.md)
<template>
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <div slot="btn">Extra Content</div>
  </dropdown>
</template>

---
Add child content using `slot="list"` to alter content in the list - the slot represents an entire dropdown-item so will need to reimplement click handlers and other classes

@[code lang=vue transclude={71-79}](@/docs/components/dropdown.md)
<template>
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <img v-if="records.Country" slot="btn" :src="countryFlagUrl(records.Country)">
    <template #list="{item}">
      <a :class="['dropdown-item',{'active':item.value == records.Country}]" @click="records.Country = item.value">
        <img :src="countryFlagUrl(item.value)">
        <span>{{item.label}}</span>
      </a>
    </template>
  </dropdown>
</template>
Or choose to alter the contents of each dropdown-item in the list using `slot="list-item-prepend"` or  `slot="list-item-append"` this will avoid needing to duplicate the necessary classes and props for the dropdown-item

@[code lang=vue transclude={85-90}](@/docs/components/dropdown.md)
<template>
<dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
  <img v-if="records.Country" slot="btn" :src="countryFlagUrl(records.Country)">
  <template #list-item-prepend="{item}">
    <img :src="countryFlagUrl(item.value)">
  </template>
</dropdown>
</template>

## grouping
Group your items by giving a name to the key in the lookups object this requires the items are sent as a keyed object

@[code lang=vue transclude={98-105}](@/docs/components/dropdown.md)
<template>
<form-group :di="deathCauses" v-slot="{di}">
  <dropdown
  :group="di.lookup.group"
  :items="di.lookup.items"
  v-model="records.DeathCause"
  btn-split justified>
  </dropdown>
</form-group>
</template>

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
      records: {
        Country: null,
        DeathCause: null
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