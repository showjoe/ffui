# Badges

## Example
Badges scale to match the size of the immediate parent element by using relative font sizing and em units.

::: demo
<h1>Example heading <badge type="secondary">New</badge></h1>
<h2>Example heading <badge type="secondary">New</badge></h2>
<h3>Example heading <badge type="secondary">New</badge></h3>
<h4>Example heading <badge type="secondary">New</badge></h4>
<h5>Example heading <badge type="secondary">New</badge></h5>
<h6>Example heading <badge type="secondary">New</badge></h6>
:::

Badges can be used as part of links or buttons to provide a counter.

::: demo
<btn :outline="false">
  Notifications <badge type="light">4</badge>
</btn>
:::

Note that depending on how they are used, badges may be confusing for users of screen readers and similar assistive technologies. While the styling of badges provides a visual cue as to their purpose, these users will simply be presented with the content of the badge. Depending on the specific situation, these badges may seem like random additional words or numbers at the end of a sentence, link, or button.

Unless the context is clear (as with the “Notifications” example, where it is understood that the “4” is the number of notifications), consider including additional context with a visually hidden piece of additional text.

::: demo
<btn :outline="false">
  Profile <badge type="light">9</badge>
  <span class="sr-only">unread messages</span>
</btn>
:::


## Contextual variations
Add a `type` prop to set the styling.  Outline mode is on by default.

::: demo
<badge type="primary">Primary</badge>
<badge type="secondary">Secondary</badge>
<badge type="success">Success</badge>
<badge type="danger">Danger</badge>
<badge type="warning">Warning</badge>
<badge type="info">Info</badge>
<badge type="light">Light</badge>
<badge type="dark">Dark</badge>
:::

::: tip
<br/>
<h5>Conveying meaning to assistive technologies</h5>
Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .sr-only class.
:::
## pill
Add a pill prop to use a different shape badge.

::: demo
<badge pill type="primary">Primary</badge>
<badge pill type="secondary">Secondary</badge>
<badge pill type="success">Success</badge>
<badge pill type="danger">Danger</badge>
<badge pill type="warning">Warning</badge>
<badge pill type="info">Info</badge>
<badge pill type="light">Light</badge>
<badge pill type="dark">Dark</badge>
:::



## as link
If you'd like the badge to be a link just add the link prop with the correct url href value

::: demo
<div>
  <badge link="/components/badge.html#type">Link</badge>
</div>
:::

## as router-link
Using vue router? Use the is-router-link prop along with a `to` prop

::: demo
<div>
  <badge is-router-link :to="{path:'/components/badge.html#type'}">Router Link</badge>
</div>
:::

## Props
Name            | Type            | Description | Default
:--------       | :----:          | ----- | :--------:
v-model         |                 | Link to the record location ie. `records.value` | 
block           | Boolean         | add this prop to fill the available width | `false`
type       | String          | styling class. eg: `primary` | `"primary"`
disabled        | Boolean         | set the disabled state of the button | `false`
outline         | Boolean         | use outline mode | `true`
readonly        | Boolean         | set the readonly state of the button | `false`
size            | String          | Use `sm` or `lg` | `false`
type            | String          | btn type. eg: `checkbox` or `radio` | `"checkbox"`
true-value      |                 | value that should be used in the case of a true (or active) button | `true`
false-value     |                 | value that should be used in the case of a false (or deactive) button | `false`
is-router-link  | Boolean         | use a router link styled as button (must include a `to` prop) | `false`
to              | String / Object | accompanying route for the router link | `false`

### Computed Properties
Name             | Params | Description
---------------- | -------| -------------------
classObj         |        | Computed class array
active           |        | Defines the active state of the button

### Methods
Name             | Params | Description
---------------- | -------| -------------------
btnClick         |        | Triggers a buttons click

### Events
Name             | Params | Description
---------------- | -------| -------------------
input            |        | Emits input event on value change 

