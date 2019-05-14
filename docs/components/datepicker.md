# Datepicker
## Basic Example

::: demo
<datepicker v-model="records.date1" />
:::
<pre class="text-white">date1:{{records.date1?records.date1:'null'}}</pre>

## Other Sizes

::: demo
<datepicker size="sm" v-model="records.date2"/>
or
<datepicker size="lg" v-model="records.date3"/>
:::
<pre class="text-white">date2:{{records.date2?records.date2:'null'}}</pre>
<pre class="text-white">date3:{{records.date3?records.date3:'null'}}</pre>

### future
allow future dates
::: demo
<datepicker future v-model="records.date4"/>
:::

### min-date
Specify a minimum start date
::: demo
<datepicker min-date="2019-05-01" v-model="records.date5"/>
:::

### max-date
Specify a maximum start date
::: demo
<datepicker max-date="2019-05-01" v-model="records.date5"/>
:::

## Types
date (default) or time or datetime can be used to customize the datepicker
TODO

### time

::: demo
<datepicker type="time" v-model="records.time1"/>
<pre class="text-white">time1:{{records.time1?records.time1:'null'}}</pre>
:::

### datetime

::: demo
<datepicker type="datetime" v-model="records.datetime1"/>
:::

### Props
Name        | Type   | Description | Default
----        | :----: | ----------- | -----
v-model     |        | Link to the record location ie. `records.date1` | 
size        | String | Use `sm` or `lg`                                | `false`
type        | String | Use `date` or `time` or `datetime`              | `date`
future      | Boolean| Allow future dates                              | `false`
min-date    | Boolean| Set a minimum date                              | `false`
max-date    | Boolean| Set a maximum date                              | `false`
mask        | String | Set a custom mask                               | `(99|--)/(99|--)/9999`
placeholder | String | Set a custom placeholder                        | `DD/MM/YYYY`

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
	data () {
      	return {
      		records:{
      			date1:'1978-10-02',
      			date2:null,
      			date3:null,
      			date4:null,
      			date5:null,
      			time1:null,
      			datetime1:null
      		},
      	}
  	},
}
</script>
