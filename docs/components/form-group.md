# Form Group
Form groups are used to wrap labels and form inputs (textboxes / buttons etc) 
## Basic Example
Wrap a form input inside a form-group to display the label and input together

Here is a sample records object containing two records

@[code lang=js transclude={39-42}](@/docs/components/form-group.md)

Here are two sample dataitems objects 

@[code lang=js transclude={43-58}](@/docs/components/form-group.md)

@[code lang=vue transclude={16-21}](@/docs/components/form-group.md)
<template>
<form-group :di="dataitems.MyDataitem1" cols="4|8">
	<textbox slot-scope="{ di }" :di="di" v-model="records.MyDataitem1"/>
</form-group>
<form-group :di="dataitems.MyDataitem2" cols="4|8">
	<btn-group slot-scope="{ di }" :di="di" v-model="records.MyDataitem2" justified/>
</form-group>
</template>

`records: {{records}}`
## Slots
Name        | Description 
:--------   | ----------- 
pre_label   | puts content before the label within the form-group
belowInput  | puts content below the input (default slot) within the form-group

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
di          | Object  | Link to the dataitem | `null`
cols        | String  | Column split for label and input slot i.e. `"8|4"` will produce one col-8 for the label and one col-4 for the input | `null`
size        | String  | Size prop associated with the cols prop - adds a breakpoint size to the col class i.e. `col-md-8` | `null`
label       | String  | Alternative label when not using a dataitem | `null`
hide-label  | String  | hides the label in the formgroup | `false`
hide-error  | Boolean | hides the error message in the formgroup | `false`

<script>
export default {
  data() {
    return {
      records: {
        MyDataitem1: "Joe",
        MyDataitem2: 1,
      },
      dataitems: {
        MyDataitem1: {
          name: "FirstName",
          label: "First Name:"
        },
        MyDataitem2: {
          name: "YesNo",
          label: "Are you sure?",
          lookup: {
            items: [
              { label: "Yes", value: 1 },
              { label: "No", value: 2 }
            ]
          }
        }
      },
    }
  },
}
</script>