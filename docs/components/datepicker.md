# Datepicker
## Basic Example
You need to add the following to your site for the datepicker to work
``` js
require('tempusdominus-bootstrap-4');
import "tempusdominus-bootstrap-4/build/css/tempusdominus-bootstrap-4.css";
```

::: demo
<datepicker v-model="records.date1" />
:::
<pre class="text-white">date1:{{records.date1?records.date1:'null'}}</pre>

## Other Sizes

::: demo
<datepicker size="sm" v-model="records.date1"/>
or
<datepicker size="lg" v-model="records.date1"/>
:::
<pre class="text-white">date1:{{records.date1?records.date1:'null'}}</pre>


## Types
date (default) or time or datetime can be used to customize the datepicker

### time

::: demo
<datepicker type="time" v-model="records.time1"/>
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
      		records:{ date1:null,time1:null,datetime1:null},
      	}
  	},
}
</script>
