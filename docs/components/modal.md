# Modal

## Inline
::: demo
<modal inline show title="Modal Title">
	Some body to my modal
</modal>
:::

## Triggered by a button
::: demo
<div>
	<btn @click.native="modal1.show = true">Show</btn>
	<modal
		:show="modal1.show"
		title="Modal Title"
		@close="modal1.show = false"
		@save="modal1.saved = true; modal1.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal1}}</pre>


## Fade in
::: demo
<div>
	<btn @click.native="modal2.show = true">Show</btn>
	<modal
		:show="modal2.show"
		fade
		title="Modal Title"
		@close="modal2.show = false"
		@save="modal2.saved = true; modal2.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal1}}</pre>


## Vertically centered
::: demo
<div>
	<btn @click.native="modal3.show = true">Show</btn>
	<modal
	:show="modal3.show"
	fade
	centered
	title="Modal Title"
	@close="modal3.show = false"
	@save="modal3.saved = true; modal3.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal3}}</pre>


## Sizes
::: demo
<div>
	<btn @click.native="modal4.size = 'sm'; modal4.show = true">Show Small</btn>
	<btn @click.native="modal4.size = 'lg'; modal4.show = true">Show Large</btn>
	<btn @click.native="modal4.size = 'xl'; modal4.show = true">Show XL</btn>
	<modal
	:show="modal4.show"
	:size="modal4.size"
	fade
	centered
	title="Modal Title"
	@close="modal4.show = false"
	@save="modal4.saved = true; modal4.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal4}}</pre>

## Slots
### header
::: demo
<div>
	<btn @click.native="modal5.show = true">Show</btn>
	<modal :show="modal5.show" fade title="Modal Title" @close="modal5.show = false">
		<template #header>
			<div class="modal-header bg-success text-white">
				Custom Header
				<button type="button" class="close" aria-label="Close" @click="modal5.show = false">
          <span aria-hidden="true">&times;</span>
        </button>
			</div>
		</template>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal5}}</pre>

### header-inner
::: demo
<div>
	<btn @click.native="modal6.show = true">Show</btn>
	<modal :show="modal6.show" fade title="Modal Title" @close="modal6.show = false">
		<template #header-inner>
			Custom Header
			<button type="button" class="close" aria-label="Close" @click="modal6.show = false">
        <span aria-hidden="true">&times;</span>
      </button>
		</template>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal6}}</pre>

### body
::: demo
<div>
	<btn @click.native="modal7.show = true">Show</btn>
	<modal :show="modal7.show" fade title="Modal Title" @close="modal7.show = false">
		<template #body>
			<div class="modal-body bg-success text-white">
				Custom Body
			</div>
		</template>
	</modal>
</div>
:::
<pre class="text-white">{{modal7}}</pre>

### default
::: demo
<div>
	<btn @click.native="modal7.show = true">Show</btn>
	<modal :show="modal7.show" fade title="Modal Title" @close="modal7.show = false">
		Default slot is inside modal body
	</modal>
</div>
:::
<pre class="text-white">{{modal7}}</pre>

### footer
::: demo
<div>
	<btn @click.native="modal8.show = true">Show</btn>
	<modal :show="modal8.show" fade title="Modal Title" @close="modal8.show = false" class="bg-success">
		Some body to my modal
		<template #footer>
			<div class="modal-footer">
				<span class="mr-auto">Custom Footer</span>
				<btn :outline="false" btn-class="secondary" @click.native="modal8.show = false">Close</btn>
				<btn :outline="false" btn-class="success" @click.native="modal8.saved = true; modal8.show = false">Save</btn>
			</div>
		</template>
	</modal>
</div>
:::
<pre class="text-white">{{modal8}}</pre>


<script>
export default {
	data () {
    return {
    	modal1:{
				saved:false,
				show:false
    	},
    	modal2:{
				saved:false,
				show:false
    	},
    	modal3:{
				saved:false,
				show:false
    	},
    	modal4:{
    		size:'',
				saved:false,
				show:false
    	},
    	modal5:{
				saved:false,
				show:false
    	},
    	modal6:{
				saved:false,
				show:false
    	},
    	modal7:{
				saved:false,
				show:false
    	},
    	modal8:{
				saved:false,
				show:false
    	},
    	modal9:{
				saved:false,
				show:false
    	},
    }
  },
}
</script>

