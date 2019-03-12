# Alerts
## Basic Example
Alerts are available for any length of text, as well as an optional dismiss button.
For proper styling, use one of the eight types (e.g., `success`)

@[code lang=vue transclude={8-15}](@/docs/components/alert.md)
<template>
<alert type="primary"> a primary alert! </alert>
<alert type="secondary"> a secondary alert! </alert>
<alert type="success"> a success alert! </alert>
<alert type="danger"> a danger alert! </alert>
<alert type="warning"> a warning alert! </alert>
<alert type="info"> an info alert! </alert>
<alert type="light"> a light alert! </alert>
<alert type="dark"> a dark alert! </alert>
</template>

## Alert Links
use links with a class `alert-link` for correct colouring

@[code lang=vue transclude={23-30}](@/docs/components/alert.md)
<template>
<alert type="primary"> a primary alert <a class="alert-link">with a link</a>! </alert>
<alert type="secondary"> a secondary alert <a class="alert-link">with a link</a>! </alert>
<alert type="success"> a success alert <a class="alert-link">with a link</a>! </alert>
<alert type="danger"> a danger alert <a class="alert-link">with a link</a>! </alert>
<alert type="warning"> a warning alert <a class="alert-link">with a link</a>! </alert>
<alert type="info"> an info alert <a class="alert-link">with a link</a>! </alert>
<alert type="light"> a light alert <a class="alert-link">with a link</a>! </alert>
<alert type="dark"> a dark alert <a class="alert-link">with a link</a>! </alert>
</template>

## Headings
Add a heading prop for that to be styled correctly:

@[code lang=vue transclude={38-38}](@/docs/components/alert.md)
<template>
<alert type="primary" heading="My Alert Heading!"> a primary alert! </alert>
</template>

## Dismissable
Add a dismissable prop and a v-model prop (pointing to a Boolean in your data)

<pre class="language-js"><code> { alert_dismissed: {{alert_dismissed}} }</code></pre>

@[code lang=vue transclude={48-50}](@/docs/components/alert.md)
<template>
<alert type="primary" dismissable v-model="alert_dismissed" v-if="!alert_dismissed">
a dismissable primary alert!
</alert>
</template>

## Props
Name        | Type    | Description | Default
:--------   | :----:  | ----------- | :-----:
type        | String  | one of the 8 available types: `primary`,`secondary`,`success`,`danger`,`warning`,`info`,`light`,`dark` | `warning`
heading			| String	| Optional heading to be shown before contents of alert |
dismissable | Boolean	| Optional switch to show a dismiss button

### Methods
Name             | Params | Description
---------------- | -------| -------------------
dismiss          |        | dismisses the alert

### Events
Name             | Params | Description
---------------- | -------| -------------------
input            |        | Updates the external data (provided by v-model)

<script>
export default {
	data () {
    return {
    	alert_dismissed: false,
    	types: ['primary','secondary','success','danger','warning','info','light','dark'],
    }
  },
}
</script>