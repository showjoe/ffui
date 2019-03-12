# Dropdown

Dropdowns can be used with a dataitem's lookup like so:

<pre class="text-white">{{dataitems.Country.lookup}}</pre>
<pre class="text-white">{{records}}</pre>

@[code lang=vue transclude={10-10}](@/docs/components/dropdown.md)
<template>
  <dropdown :items="dataitems.Country.lookup.items" v-model="records.Country"></dropdown>
</template>


## Slots
Name        | Description 
:--------   | ----------- 

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:

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
        }
      }
    }
  },
}
</script>