---
title: Forms
description: Examples and usage guidelines for components within forms.
pageClass: show-form-groups
---

<h4 class="display-4">{{$frontmatter.title}}</h4>
<h3>{{$frontmatter.description}}</h3>
<div class="sticky-top p-2">
  <btn @click.native="addClassDynamically">Toggle outlines</btn>
</div>

## Overview

Bootstrap's form controls expand on their Rebooted form styles with classes. FFUI uses these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Here's a quick example to demonstrate some ffui components within a form

::: demo
<form>
  <form-group :di="{label:'Email address'}" helptext="We'll never share your email with anyone else.">
    <textbox type="email"/>
  </form-group>
  <form-group :di="{label:'Password'}">
    <textbox type="password"/>
  </form-group>
  <form-group>
    <checkbox label="Check me out"/>
  </form-group>
  <btn type="submit">Submit</btn>
</form>
:::

## Form controls

Textual form control components —like `<textbox>`s, `<number>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

Be sure to explore our [custom forms](#custom-forms) to further style `<select>`s.

::: demo
<form>
  <form-group :di="{label:'Email address'}">
    <textbox type="email" placeholder="name@example.com"/>
  </form-group>
  <form-group :di="{label:'Example select'}">
    <select class="form-control">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </form-group>
  <form-group :di="{label:'Example multiple select'}">
    <select multiple class="form-control">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </form-group>
  <form-group :di="{label:'Example textarea'}">
    <textarea class="form-control" rows="3"></textarea>
  </form-group>
</form>
:::

For file inputs, swap the `.form-control` for `.form-control-file`.

::: demo
<form>
  <form-group :di="{label:'Example file input'}">
    <input type="file" class="form-control-file" >
  </form-group>
</form>
:::

### Sizing

Set component sizing using the size prop.

::: demo
<textbox size="lg" placeholder="size = lg" class="mb-2"/>
<textbox placeholder="Default input" class="mb-2"/>
<textbox size="sm" placeholder="size = sm" class="mb-2"/>
:::

::: demo
<select class="form-control form-control-lg mb-2">
  <option>Large select</option>
</select>
<select class="form-control mb-2">
  <option>Default select</option>
</select>
<select class="form-control form-control-sm mb-2">
  <option>Small select</option>
</select>
:::


### Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

::: demo
<textbox placeholder="Readonly input here..." readonly />
:::

### Readonly plain text

If you want to have textbox components in your form styled as plain text, use the `plaintext` prop to remove the default form field styling and preserve the correct margin and padding.

::: demo
<form>
  <form-group :di="{label:'Email'}" cols="2|10">
    <textbox value="email@example.com" readonly plaintext/>
  </form-group>
  <form-group :di="{label:'Password'}" cols="2|10">
    <textbox type="password" />
  </form-group>
</form>
:::

## Range Inputs

Bootstrap has range inputs using `.form-control-range`.

::: demo
<form>
  <form-group :di="{label:'Example Range input'}">
    <input type="range" class="form-control-range" id="formControlRange">
  </form-group>
</form>
:::

For more advanced options look at the [FFUI slider](./slider.md)

::: demo
<form>
  <form-group :di="{label:'Example Range input'}">
    <slider v-model="sliderVal"/>
  </form-group>
</form>
:::

## Checkboxes and radios

Default checkboxes and radios are improved upon with the help of `.form-check`, **a single class for both input types that improves the layout and behavior of their HTML elements**. Checkboxes are for selecting one or several options in a list, while radios are for selecting one option from many.

Disabled checkboxes and radios are supported. The `disabled` attribute will apply a lighter color to help indicate the input's state.

Checkboxes and radio buttons support HTML-based form validation and provide concise, accessible labels. As such, our `<input>`s and `<label>`s are sibling elements as opposed to an `<input>` within a `<label>`. This is slightly more verbose as you must specify `id` and `for` attributes to relate the `<input>` and `<label>`.

### Default (stacked)

By default, any number of checkboxes and radios that are immediate sibling will be vertically stacked and appropriately spaced with `.form-check`.

::: demo
<form>
    <checkbox label="Default checkbox" :true-value="1" v-model="checkVal"/>
    <checkbox label="Second default checkbox" :true-value="1" v-model="checkVal"/>
    <checkbox label="Disabled checkbox" disabled :true-value="2" v-model="checkVal"/>
</form>
:::

::: demo
<form class="was-validated">
    <checkbox label="Default radio" value="1" v-model="radioVal" :error="error"/>
    <radio label="Default radio" value="1" v-model="radioVal" :error="error"/>
    <radio label="Second default radio" value="2" v-model="radioVal"/>
    <radio label="Disabled radio" disabled value="3" v-model="radioVal"/>
</form>
:::

### Inline

Group checkboxes or radios on the same horizontal row by adding `inline` prop.

::: demo
<form >
    <radio inline label="Default radio" value="1" v-model="radioVal"/>
    <radio inline label="Second default radio" value="2" v-model="radioVal"/>
    <radio inline label="Disabled radio" disabled value="3" v-model="radioVal"/>
</form>
:::

### Without labels

Add `.position-static` to inputs within `.form-check` that don't have any label text. Remember to still provide some form of label for assistive technologies (for instance, using `aria-label`).

::: demo
<checkbox label="Default radio" value="1" v-model="radioVal" :error="error"/>
<checkbox label="Default radio" hide-label value="1" v-model="radioVal" :error="error"/>
:::

## Layout

Since Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form groups

The `form-group` component is the easiest way to add some structure to forms. It provides a flexible component that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed.

:::demo
<form>
  <form-group :di="{label:'Example label'}">
    <textbox placeholder="Example input placeholder"/>
  </form-group>
  <div class="form-group">
    <label for="formGroupExampleInput2">Another label</label>
    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
  </div>
</form>
:::

### Form grid
More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

:::demo
<row>
  <column>
    <form-group :di="{label:'First name'}">
      <textbox placeholder="First name"/>
    </form-group>
  </column>
  <column>
    <form-group :di="{label:'Last name'}">
      <textbox placeholder="Last name"/>
    </form-group>
  </column> 
</row>  
:::

### Form row

You may also add a form prop to the row, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

:::demo
<row form>
  <column>
    <form-group :di="{label:'First name'}">
      <textbox placeholder="First name"/>
    </form-group>
  </column>
  <column>
    <form-group :di="{label:'Last name'}">
      <textbox placeholder="Last name"/>
    </form-group>
  </column> 
</row>  
:::


Alternatively - if you are using form-group's as rows then you can add the form-row prop to apply this styling..

:::demo
<legend>With:</legend>
<row form>
  <form-group :di="{label:'First name'}" cols="4|8" :sizes="{sm:6}" form-row>
    <textbox placeholder="First name"/>
  </form-group>
  <form-group :di="{label:'Last name'}" cols="4|8" :sizes="{sm:6}" form-row>
    <textbox placeholder="Last name"/>
  </form-group>
</row>  
<legend>Without:</legend>
<row>
  <form-group :di="{label:'First name'}" cols="4|8" :sizes="{sm:6}" >
    <textbox placeholder="First name"/>
  </form-group>
  <form-group :di="{label:'Last name'}" cols="4|8" :sizes="{sm:6}">
    <textbox placeholder="Last name"/>
  </form-group>
</row>  
:::

More complex layouts can also be created with the grid system.
::: demo
<form>
  <row form>
    <form-group label="Email" :sizes="{md:6}">
      <textbox type="email" />
    </form-group>
    <form-group label="Password" :sizes="{md:6}">
      <textbox type="password" />
    </form-group>
  </row>
  <form-group label="Address">
    <textbox placeholder="1234 Main St"/>
  </form-group>
  <form-group label="Address 2">
    <textbox placeholder="Apartment, studio, or floor"/>
  </form-group>
  <row form>
    <form-group label="City" :sizes="{md:6}">
      <textbox/>
    </form-group>
    <form-group label="State" :sizes="{md:4}">
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </form-group>
    <form-group label="Zip" :sizes="{md:2}">
      <textbox/>
    </form-group>
  </row>
  <form-group>
    <checkbox label="Check me out"></checkbox>
  </form-group>
  <btn>Sign in</btn>
</form>
:::

### Horizontal form

Create horizontal forms with the grid by adding the `:cols` prop to form groups. Using this will assign the correct classes to the columns to specify the width of your labels and controls. 

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

::: demo
<form class="was-validated">
  <form-group label="Email" :cols="[{sm:2},{sm:10}]">
    <textbox type="email" />
  </form-group>
  <form-group label="Password" :cols="[{sm:2},{sm:10}]">
    <textbox type="password" />
  </form-group>
  <form-group tag="fieldset">
    <row form>
      <column :sizes="{sm:2}">
        <legend class="col-form-label pt-0">Radios</legend>
      </column>
      <column :sizes="{sm:10}">
        <radio v-model="radioVal" :value="1"> A radio with a clickable label </radio>
        <radio v-model="radioVal" value="ABC" label="A second option" />
        <radio v-model="radioVal" :value="2" disabled> A third way is disabled </radio>
      </column>
    </row>
  </form-group>
  <form-group label="Checkbox" :cols="[{sm:2},{sm:10}]">
    <checkbox label="Example checkbox" :error="['required']"/>  
  </form-group>
  <form-group class="row">
      <column :sizes="{sm:10}" :offset="{sm:2}"><btn>Sign in</btn></column>
  </form-group>
</form>
:::

### Horizontal form label sizing

Be sure to use `.col-form-label-sm` or `.col-form-label-lg` to your `<label>`s or `<legend>`s to correctly follow the size of `.form-control-lg` and `.form-control-sm`.

::: demo
<form>
  <form-group label="Email" :cols="[{sm:2},{sm:10}]" size="sm">
    <textbox placeholder="col-form-label-sm" size="sm"></textbox>
  </form-group>
    <form-group label="Email" :cols="[{sm:2},{sm:10}]">
    <textbox placeholder="col-form-label"></textbox>
  </form-group>
    <form-group label="Email" :cols="[{sm:2},{sm:10}]" size="lg">
    <textbox placeholder="col-form-label-lg" size="lg"></textbox>
  </form-group>
</form>
:::


<script>
  export default {
    data(){
      return {
        sliderVal:null,
        checkVal:null,
        radioVal:null,
        error:['required']
      }
    },
    methods:{
      addClassDynamically(){
        var container = document.querySelector('.show-form-groups')
        if(container.classList.contains('active'))
          container.classList.remove('active')
        else
          container.classList.add('active')
      }
    }
  }
</script>