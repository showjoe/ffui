# v-mask

This is a wrapper for Robin Herbots [Inputmask library](https://github.com/RobinHerbots/Inputmask)

Use the mask directive when you want to control the text that is input.
The mask can be used on the datepicker as well as textbox and number components.

::: demo
<textbox v-mask="'99999 999999'"/>
:::

## mask object
::: demo
<textbox v-mask="{mask:'(999) 999-9999'}"/>
:::

## dynamic syntax
mask with dynamic syntax
::: demo
<textbox v-mask="{mask:'9-a{1,3}9{1,3}'}"/>
:::

## aliases
::: demo
<row>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">ffdate</div>
			<textbox name="date" v-mask="{alias: 'ffdate'}" />
		</input-group>
	</column>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">currency</div>
			<textbox v-mask="{alias: 'currency'}"/>
		</input-group>
	</column>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">decimal</div>
			<textbox v-mask="{alias: 'decimal'}"/>
		</input-group>
	</column>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">{mask: '9'}</div>
			<textbox v-mask="{mask: '9'}"/>
		</input-group>
	</column>
</row>
<row>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">cssunit</div>
			<textbox name="date" v-mask="{alias: 'cssunit'}" />
		</input-group>
	</column>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">url</div>
			<textbox v-mask="{alias: 'url'}"/>
		</input-group>
	</column>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">ip</div>
			<textbox v-mask="{alias: 'ip'}"/>
		</input-group>
	</column>
	<column>
		<input-group>
			<div slot="prepend" class="input-group-text mb-2">email</div>
			<textbox v-mask="{alias: 'email'}"/>
		</input-group>
	</column>
</row>
:::

<script>
	export default {
		data(){
			return {
				model1:'',
			}
		}
	}
</script>