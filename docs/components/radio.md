# Radio
## Basic Example
A basic radio form element.


<pre class="text-white">{{$data}}</pre>
::: demo
<radio type="standard" v-model="records.radio1" :value="1" > A radio with a clickable label </radio>
<radio type="standard" v-model="records.radio1" value="ABC" label="A second option" />
<radio type="standard" v-model="records.radio1" :value="2" disabled> A third way is disabled </radio>
:::

## custom-radio
A version using bootstrap's `custom-radio` is the default type
::: demo
<radio v-model="records.radio1" :value="1"> A radio with a clickable label </radio>
<radio v-model="records.radio1" value="ABC" label="A second option" />
<radio v-model="records.radio1" :value="2" disabled> A third way is disabled </radio>
:::


## Left aligned label
::: demo
<div class="w-25 text-right">
    <radio v-model="records.radio1" :value="1" type="standard" label-left > A radio with a clickable label </radio>
    <radio v-model="records.radio1" value="ABC" label="A second option" label-left />
    <radio v-model="records.radio1" :value="2" disabled label-left> A third way is disabled </radio>
</div>
:::

## Inline
Group radioes or radios on the same horizontal row by adding inline prop.
::: demo
<radio inline v-model="records.radio1" :value="1"> A radio with a clickable label </radio>
<radio inline v-model="records.radio1" value="ABC" label="A second option" />
<radio inline v-model="records.radio1" :value="2" disabled> A third way is disabled </radio>
:::

## Size
add a size prop with value of `sm` or `lg` to change the size of the radioes
::: demo
<radio  size="sm" v-model="records.radio1" :value="1"> A radio with a clickable label </radio>
<radio  size="sm" v-model="records.radio1" value="ABC" label="A second option" />
<radio  size="sm" v-model="records.radio1" :value="2" disabled> A third way is disabled </radio>
<hr>
<radio  size="lg" v-model="records.radio1" :value="1"> A radio with a clickable label </radio>
<radio  size="lg" v-model="records.radio1" value="ABC" label="A second option" />
<radio  size="lg" v-model="records.radio1" :value="2" disabled> A third way is disabled </radio>
<hr>
<radio label-left size="lg" v-model="records.radio1" :value="1"> A radio with a clickable label </radio>
<radio label-left size="lg" v-model="records.radio1" value="ABC" label="A second option" />
<radio label-left size="lg" v-model="records.radio1" :value="2" disabled> A third way is disabled </radio>
:::

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
inline       | String  | string of label text | null
label       | String  | string of label text | null
label-left  | Boolean | Show the label on the left hand side | `false`
label-right | Boolean | Show the label on the left hand side | `true`
value  |         | value that should be used in the case of a true (or active) button | `true`
false-value |         | value that should be used in the case of a false (or deactive) button | `false`
disabled    |         | disables the radio | `false`
readonly    |         | makes the radio readonly  | `false`

<script>
export default {
	data () {
    return {
    	records:{
    	radio1: 2,
    	}
    }
  },
}
</script>