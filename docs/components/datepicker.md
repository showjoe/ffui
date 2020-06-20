# Datepicker
## Basic Example

::: demo
<div class="form-inline was-validated">
      <form-group>
            <datepicker v-model="records.date1" />
      </form-group>
</div>
:::
<pre class="text-white">date1:{{records.date1?records.date1:'null'}}</pre>

## Other Sizes

::: demo
<div class="form-inline">
      sm
      <datepicker size="sm" v-model="records.date2" class="mx-2"/>
      or
      <datepicker size="lg" v-model="records.date3" class="mx-2"/>
      lg
</div>
:::


### future
allow future dates
::: demo
<div class="form-inline"><datepicker future v-model="records.date4"/></div>
:::

### min-date
Specify a minimum start date
::: demo
<div class="form-inline"><datepicker min-date="2019-05-01" v-model="records.date5"/></div>
:::

### max-date
Specify a maximum start date
::: demo
<div class="form-inline"><datepicker max-date="2019-05-01" v-model="records.date6"/></div>
:::

### min and max combined
Minimum date is set with the first picker and passed as a prop to the second.
Maximum date is set with the second picker and passed as a prop to the first.

::: demo
<div class="form-inline">
      <form-group class="mr-2">
            <datepicker :max-date="records.date7" v-model="records.date6"/>
            maximum:{{records.date7}}
      </form-group>
      <form-group >
            <datepicker :min-date="records.date6" v-model="records.date7"/>
            minimum:{{records.date6}}
      </form-group>
</div>
:::
<pre class="text-white">
date6:{{records.date6?records.date6:'null'}}
date7:{{records.date7?records.date7:'null'}}
</pre>

## Time

::: demo
<div class="form-inline">
      <datepicker type="time" v-model="records.time1"/>
</div>

:::
<pre class="text-white">time1:{{records.time1?records.time1:'null'}}</pre>


## Unknown Day & Unknown Month
::: demo
<div class="form-inline">
      <form-group label="Unknown Day" class="mr-2"><datepicker v-model="records.date8"/></form-group>
      <form-group label="Unknown Month"><datepicker v-model="records.date9"/></form-group>
</div>
:::
date8:{{records.date8?records.date8:'null'}}
date9:{{records.date9?records.date9:'null'}}

## View-mode
Define which view datepicker should start with.
::: demo
<div class="form-inline">
      days
      <datepicker view-mode="days" v-model="records.date10" class="m-2"/>
      months
      <datepicker view-mode="months" v-model="records.date10" class="m-2"/>
      decades
      <datepicker view-mode="decades" v-model="records.date10" class="m-2"/>
</div>
:::

## keep-open
The datepicker will not be dismissed on selection of a date
::: demo
<datepicker keep-open v-model="records.date11"/>
:::

## no-unknowns

Don't show Unknown Day / Unknown Month or allow dashes to be entered

::: demo
<datepicker no-unknowns v-model="records.date12"/>
:::

## In a collapse
See if this works
::: demo
<div>
<btn @click.native="showCollapse=!showCollapse">Show</btn>
<collapse :show="showCollapse">
      <datepicker v-model="records.date13"/>
</collapse>
{{showCollapse}}
</div>
:::

## i18n Internationalisation

Here is an example of using the built in internationalisation (vue-i18n)
This uses both moment locales and a lang file for other terms and styles

::: demo
<datepicker size="lg" v-model="records.date14" locale="ja" />
:::

<pre class="text-white">{{records.date14}}</pre>

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
import moment from 'moment';
export default {
	data () {
      	return {
                  maxDate: moment().add(7, 'days'),
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
                        date13:null,
      			date14:'2010-02-00',
      			time1:'01:02',
      			datetime1:null,
      		},
      	}
  	},
}
</script>
