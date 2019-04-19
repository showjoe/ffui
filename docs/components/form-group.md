# Form Groups

Form groups are used to wrap labels and form inputs (textboxes / buttons etc) 
## Basic Example
Wrap a form input inside a form-group to display the label and input together

Here is a sample records object containing two records

<pre class="text-white">{{records}}</pre>

Here are two sample dataitem objects 

<pre class="text-white">{{dataitems}}</pre>

::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" cols="4|8" v-slot="{di}">
	 <textbox :di="di" v-model="records.MyDataitem1"/>
  </form-group>
  <form-group :di="dataitems.MyDataitem2" cols="4|8" v-slot="{di}">
    <btn-group  :di="di" v-model="records.MyDataitem2" justified/>
  </form-group>
</card>
:::

::: demo
<card>
  <row form>
    <form-group :di="dataitems.MyDataitem1" :sizes="{md:6}" v-slot="{di}">
      <textbox :di="di" v-model="records.MyDataitem1"/>
    </form-group>
    <form-group :di="dataitems.MyDataitem2" :sizes="{md:6}" v-slot="{di}">
      <btn-group :di="di" v-model="records.MyDataitem2" justified/>
    </form-group>
  </row>
</card>
:::

::: demo
<card>
  <form-group label="Alternative label" :sizes="{md:6}">
    <textbox :di="dataitems.MyDataitem1" v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::

## Using slots
Slots can be helpful for placing additional content in praticular places within the form-group.  You can use `pre_label`,`label`,`below_input`

::: demo
<card>
  <form-group label="A different way to customise the label" :sizes="{md:6}">
    <span slot="below_input" class="text-danger">below_input slot</span>
    <textbox :di="dataitems.MyDataitem1" v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::


## Slots
Name        | Description 
:--------   | ----------- 
pre_label   | puts content before the label within the form-group
label       | puts content in the label within the form-group
below_input | puts content below the input (default slot) within the form-group

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
di          | Object  | Link to the dataitem | `null`
sizes       | Number, Array, Object  | responsive breakpoints eg: `{md:6}` or `{md:4, sm:6}` | null
cols        | String  | Column split for label and input slot i.e. `"8|4"` will produce one col-8 for the label and one col-4 for the input | `null`
bp          | String  | Breakpoint prop associated with the cols prop - adds a breakpoint size to the col class i.e. `col-md-8` | `null`
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