# Form Groups

Form groups are used to wrap labels and form inputs (textboxes / buttons etc) 
## Basic Example
Wrap a form input inside a form-group to display the label and input together

::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" v-slot="{di}">
   <textbox :di="di" v-model="records.MyDataitem1"/>
  </form-group>
  <form-group :di="dataitems.MyDataitem2" v-slot="{di}">
    <btn-group  :di="di" v-model="records.MyDataitem2" justified/>
  </form-group>
</card>
:::

## cols
Use cols to define two column layouts within the form-group
Use a simple string version like so: '4|8' this will split the form-group into two columns with the two sizes given.
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

Use an object for more complex responsive layouts
::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" :cols="[{md:4},{md:8}]" v-slot="{di}">
   <textbox :di="di" v-model="records.MyDataitem1"/>
  </form-group>
  <form-group :di="dataitems.MyDataitem2" :cols="[{md:4},{md:8}]" v-slot="{di}">
    <btn-group  :di="di" v-model="records.MyDataitem2" justified/>
  </form-group>
</card>
:::

## sizes
The form-group can also act as a column when given appropriate `sizes` prop.  You should wrap form-groups in a row component when using sizes.
::: demo
<card>
  <row form>
    <form-group :di="dataitems.MyDataitem1" cols="4|8" :sizes="{md:6}" v-slot="{di}">
      <textbox :di="di" v-model="records.MyDataitem1"/>
    </form-group>
    <form-group :di="dataitems.MyDataitem2" cols="4|8" :sizes="{md:6}" v-slot="{di}">
      <btn-group :di="di" v-model="records.MyDataitem2" justified/>
    </form-group>
  </row>
</card>
:::

## label
Specify an alternative label (if not provided by dataitem)

::: demo
<card>
  <form-group label="Alternative label" :sizes="{md:6}">
    <textbox :di="dataitems.MyDataitem1" v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::

or use the label slot to replace with a different solution

::: demo
<card>
  <form-group :sizes="{md:6}" cols="4|8">
    <template #label>
      Alternative Label
    </template>
    <textbox :di="dataitems.MyDataitem1" v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::


## helptext
Specify helptext

::: demo
<card>
  <form-group helptext="Helpful text" :sizes="{md:6}">
    <textbox :di="dataitems.MyDataitem1" v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::

## Using slots
Slots can be helpful for placing additional content in praticular places within the form-group.  You can use `pre_label`,`label`,`below_input`

### pre_label
::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" :sizes="{md:6}">
    <template #pre_label>
      <span class="text-info">pre_label slot </span>
    </template>
    <textbox v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::
### label
::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" :sizes="{md:6}">
    <template #label>
      <span class="text-primary">label slot </span>
    </template>
    <textbox v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::
### below_input
::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" :sizes="{md:6}">
    <template #below_input>
      <span class="text-danger">below_input slot</span>
    </template>
    <textbox v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::
### helptext
::: demo
<card>
  <form-group :di="dataitems.MyDataitem1" :sizes="{md:6}">
    <template #helptext>helptext slot</template>
    <textbox v-model="records.MyDataitem1"/>
  </form-group>
</card>
:::
## Errors

::: demo
<!--  A Parent must have the class `was-validated` applied for validation to show -->
<card class="was-validated">
  <row>
    <form-group :di="dataitems.MyDataitem1" cols="4|8" :sizes="{lg:6}" :error="['required']">
      <textbox v-model="records.MyDataitem1"/>
    </form-group>
    <form-group :di="dataitems.MyDataitem1" cols="4|8"  :sizes="{lg:6}" :error="['required']">
      <textbox v-model="records.MyDataitem1"/>
    </form-group>
  </row>
</card>
:::

### With feedback child component
please note: use hide-error to hide the original error
::: demo
<!--  A Parent must have the class `was-validated` applied for validation to show -->
<card class="was-validated">
  <row>
    <!-- standard feedback -->
    <form-group :di="dataitems.MyDataitem1" cols="4|8" :sizes="{lg:6}" :error="['required']" hide-error v-slot="{error}">
      <textbox v-model="records.MyDataitem1"/>
      <feedback type="invalid">
        {{error}}
      </feedback>
    </form-group>
    <!-- tooltip style error using slot syntax -->
    <form-group :di="dataitems.MyDataitem1" cols="4|8"  :sizes="{lg:6}" :error="['required']" v-slot="{error}">
      <textbox v-model="records.MyDataitem1"/>
      <feedback tooltip slot="error" type="invalid" :message="error"/>
    </form-group>
  </row>
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