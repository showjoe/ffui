# Checkbox
## Basic Example
A basic checkbox form element.


<pre class="text-white">{{$data}}</pre>
::: demo
<checkbox type="standard" v-model="records.checkbox1"> A checkbox with a clickable label </checkbox>
<checkbox type="standard" v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox type="standard" v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
:::

## custom-checkbox
A version using bootstrap's `custom-checkbox` is the default type
::: demo
<checkbox v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
<checkbox v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
:::

## Switches
Use type == 'switch' to show as a toggle switch
::: demo
<checkbox type="switch" v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
<checkbox type="switch" v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox type="switch" v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
:::

## Left aligned label
::: demo
<div class="w-25 text-right">
    <checkbox type="standard" label-left v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
    <checkbox label-left v-model="records.checkbox2" true-value="ABC" label="A second option" />
    <checkbox type="switch" label-left v-model="records.checkbox3" > A third way is disabled </checkbox>
</div>
:::

## Inline
Group checkboxes or radios on the same horizontal row by adding inline prop.
::: demo
<checkbox inline v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
<checkbox inline v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox inline v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
:::

## Size
add a size prop with value of `sm` or `lg` to change the size of the checkboxes
::: demo
<checkbox size="sm" v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
<checkbox size="sm" v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox size="sm" v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
<hr>
<checkbox size="lg" v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
<checkbox size="lg" v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox size="lg" v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
<hr>
<checkbox label-left size="lg" v-model="records.checkbox1" :true-value="1"> A checkbox with a clickable label </checkbox>
<checkbox label-left size="lg" v-model="records.checkbox2" true-value="ABC" label="A second option" />
<checkbox label-left size="lg" v-model="records.checkbox3" disabled> A third way is disabled </checkbox>
:::

## Without labels
If you want to separate the checkbox from it's label you must remember to still provide some form of label for assistive technologies (for instance, using `aria-labelledby`)

::: demo
<media class="border">
    <checkbox size="lg" id="cb1" v-model="records.checkbox1" aria-labelledby="cb-label" class="m-5"></checkbox>
    <template #body>
        <label for="cb1" id="cb-label" class="mt-0">
            <h5>Label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aut ipsa, natus tenetur suscipit quod reprehenderit quisquam! Eaque, beatae quisquam dolores, in, fugit at cupiditate molestias maiores neque animi minima.</p>
        </label>
    </template>
</media>
:::

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
inline       | String  | string of label text | null
label       | String  | string of label text | null
label-left  | Boolean | Show the label on the left hand side | `false`
label-right | Boolean | Show the label on the left hand side | `true`
true-value  |         | value that should be used in the case of a true (or active) button | `true`
false-value |         | value that should be used in the case of a false (or deactive) button | `false`
disabled    |         | disables the checkbox | `false`
readonly    |         | makes the checkbox readonly  | `false`

<script>
export default {
	data () {
    return {
    	records:{
        	checkbox1: 1,
        	checkbox2: null,
            checkbox3: null,
    	}
    }
  },
}
</script>