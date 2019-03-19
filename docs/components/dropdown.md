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

@[code lang=vue transclude={34-34}](@/docs/components/dropdown.md)
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
Add child content using `slot="list"` to show additional content in the list

@[code lang=vue transclude={71-74}](@/docs/components/dropdown.md)
<template>
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country">
    <a slot="list" class="dropdown-item" href="#">Extra item in list</a>
    <div slot="list" class="dropdown-divider"></div>
  </dropdown>
</template>


## Slots
Name        | Description 
:--------   | ----------- 
default     | Positioned between btn and dropdown menu
btn         | Positioned inside btn
list        | Positioned at start of dropdown menu


## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
`btn-class` | String  | Standard btn-class | `primary`
`btn-size`  | String  | 'sm' or 'lg'  | null
`btn-split` | Boolean | Split the button | false
`justified` | Boolean | Make btn full-width | false

<script>
export default {
  data() {
    return {
      records: {
        Country: null
      },
      dataitems: {
        Country: {
          name: 'Country',
          label: 'Choose a country',
          lookup: {
            name: 'CountryList',
            items: [
              { label: 'United Arab Emirates', value: 'UAE' },
              { label: 'United Kingdom', value: 'UK' },
              { label: 'United States', value: 'USA' },
            ]
          }
        },
        OtherCountry: {
          name: 'Country',
          label: 'Choose a country',
          lookup: {
            name: 'CountryList',
            items: [
              { label: 'United Arab Emirates', value: 'UAE' },
              { label: 'United Kingdom', value: 'UK' },
              { label: 'United States', value: 'USA' },
            ]
          }
        }
      }
    }
  },
}
</script>