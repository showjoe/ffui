# Datepicker
## Basic Example

::: demo
<div class="was-validated">
      <form-group>
            <datepicker v-model="records.date1" />
      </form-group>
</div>
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
<datepicker max-date="2019-05-01" v-model="records.date6"/>
:::

### min and max combined
Minimum date is set with the first picker and passed as a prop to the second.
Maximum date is set with the second picker and passed as a prop to the first.

::: demo
<row>
      <column><datepicker :max-date="records.date6" v-model="records.date6"/></column>
      <column><datepicker :min-date="records.date7" v-model="records.date7"/></column>
</row>
:::
<pre class="text-white">
date6:{{records.date6?records.date6:'null'}}
date7:{{records.date7?records.date7:'null'}}
</pre>

## Types
date (default) or time or datetime can be used to customize the datepicker
TODO

### time

::: demo
<datepicker type="time" v-model="records.time1"/>
:::
<pre class="text-white">time1:{{records.time1?records.time1:'null'}}</pre>

### datetime

::: demo
<datepicker type="datetime" v-model="records.datetime1"/>
:::
## Unknown Day & Unknown Month
::: demo
<datepicker v-model="records.date8"/>
<datepicker v-model="records.date9"/>
:::
<pre class="text-white">
date8:{{records.date8?records.date8:'null'}}
date9:{{records.date9?records.date9:'null'}}
</pre>

## View-mode
Define which view datepicker should start with.
::: demo
<datepicker view-mode="decades" v-model="records.date10"/>
:::

## keep-open
The datepicker will not be dismissed on selection of a date
::: demo
<datepicker keep-open v-model="records.date11"/>
:::

## In a collapse
See if this works
::: demo
<div>
<btn @click.native="showCollapse=!showCollapse">Show</btn>
<collapse :show="showCollapse">
      <datepicker v-model="records.date12"/>
</collapse>
{{showCollapse}}
</div>
:::

### Props
Name        | Type      | Description | Default
----        | :----:    | ----------- | -----
v-model     |           | Link to the record location ie. `records.date1` | 
size        | String    | Use `sm` or `lg`                                | `false`
type        | String    | Use `date` or `time` or `datetime`              | `date`
future      | Boolean   | Allow future dates                              | `false`
min-date    | String    | Set a minimum date (format: `YYYY-MM-DD`)       | `false`
max-date    | String    | Set a maximum date (format: `YYYY-MM-DD`)       | `false`
mask        | String    | Set a custom mask                               | `(99|--)/(99|--)/9999`
placeholder | String    | Set a custom placeholder                        | `DD/MM/YYYY`

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
                  showCollapse:false,
      		records:{
      			date1:'1978-10-02',
      			date2:null,
      			date3:null,
      			date4:null,
                        date5:null,
                        date6:null,
                        date7:null,
                        date8:'2010-02-00',
                        date9:'2010-00-00',
                        date10:null,
                        date11:null,
      			date12:null,
      			time1:'01:02',
      			datetime1:null,
      		},
      	}
  	},
}
</script>
