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
		title="Modal Title"
		:show="modal1.show"
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
		title="Modal Title"
		:show="modal2.show"
		fade
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
	title="Modal Title"
	:show="modal3.show"
	fade
	centered
	@close="modal3.show = false"
	@save="modal3.saved = true; modal3.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal3}}</pre>

## Custom transition duration
::: demo
<div>
	<btn @click.native="modal4.show = true">Show</btn>
	<modal
	title="Modal Title"
	:show="modal4.show"
	fade
	centered
	:transition-duration="500"
	@close="modal4.show = false"
	@save="modal4.saved = true; modal4.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal4}}</pre>


## Sizes
::: demo
<div>
	<btn @click.native="modal5.size = 'sm'; modal5.show = true">Show Small</btn>
	<btn @click.native="modal5.size = 'lg'; modal5.show = true">Show Large</btn>
	<btn @click.native="modal5.size = 'xl'; modal5.show = true">Show XL</btn>
	<modal
	title="Modal Title"
	:show="modal5.show"
	:size="modal5.size"
	fade
	centered
	@close="modal5.show = false"
	@save="modal5.saved = true; modal5.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::

## Scrollable

By default the entire modal will scroll if content is long enough.

::: demo
<div>
	<btn @click.native="modal5a.show = true">Show Modal</btn>
	<modal :show="modal5a.show" fade @close="modal5a.show = false">
		<p v-dummy:350></p>
	</modal>
</div>
:::

Add a scrollable prop and the dialog window will scroll.

::: demo
<div>
	<btn @click.native="modal5b.show = true">Show Modal</btn>
	<modal scrollable :show="modal5b.show" fade @close="modal5b.show = false">
		<form-group>
			<textbox />
		</form-group>
		<p v-dummy:350></p>
	</modal>
</div>
:::

## backdrop-inactive
::: demo
<div>
	<btn @click.native="modal6.show = true">Show with inactive background</btn>
	<modal
	title="Modal Title"
	:show="modal6.show"
	backdrop-inactive
	@close="modal6.show = false"
	>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal6}}</pre>

## Slots
### header
::: demo
<div>
	<btn @click.native="modal7.show = true">Show</btn>
	<modal :show="modal7.show" fade title="Modal Title" @close="modal7.show = false">
		<template #header>
			<div class="modal-header bg-success text-white">
				Custom Header
				<button type="button" class="close" aria-label="Close" @click="modal7.show = false">
          <span aria-hidden="true">&times;</span>
        </button>
			</div>
		</template>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal7}}</pre>

### header-inner
::: demo
<div>
	<btn @click.native="modal8.show = true">Show</btn>
	<modal :show="modal8.show" fade title="Modal Title" @close="modal8.show = false">
		<template #header-inner>
			Custom Header
			<button type="button" class="close" aria-label="Close" @click="modal8.show = false">
        <span aria-hidden="true">&times;</span>
      </button>
		</template>
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal8}}</pre>

### body
::: demo
<div>
	<btn @click.native="modal9.show = true">Show</btn>
	<modal :show="modal9.show" fade title="Modal Title" @close="modal9.show = false">
		<template #body>
			<div class="modal-body bg-success text-white">
				Custom Body
			</div>
		</template>
	</modal>
</div>
:::
<pre class="text-white">{{modal9}}</pre>

### default
::: demo
<div>
	<btn @click.native="modal10.show = true">Show</btn>
	<modal :show="modal10.show" fade title="Modal Title" @close="modal10.show = false">
		Default slot is inside modal body
	</modal>
</div>
:::
<pre class="text-white">{{modal10}}</pre>

### footer
::: demo
<div>
	<btn @click.native="modal11.show = true">Show</btn>
	<modal :show="modal11.show" fade title="Modal Title" @close="modal11.show = false" class="bg-success">
		Some body to my modal
		<template #footer>
			<div class="modal-footer">
				<span class="mr-auto">Custom Footer</span>
				<btn :outline="false" btn-class="secondary" @click.native="modal11.show = false">Close</btn>
				<btn :outline="false" btn-class="success" @click.native="modal11.saved = true; modal11.show = false">Save</btn>
			</div>
		</template>
	</modal>
</div>
:::
<pre class="text-white">{{modal11}}</pre>


### source-coords
::: demo
<div>
	<btn ref="sourceCoordsBtn" @click.native="modal12.show = true">Show</btn>
	<modal :show="modal12.show" fade :source-coords="sourceCoords()" title="Modal Title" @close="modal12.show = false" class="bg-success">
		Some body to my modal
	</modal>
</div>
:::
<pre class="text-white">{{modal12}}</pre>

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
    	modal5a:{
				saved:false,
				show:false
    	},
    	modal5b:{
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
    	modal10:{
				saved:false,
				show:false
    	},
    	modal11:{
				saved:false,
				show:false
    	},
    	modal12:{
				saved:false,
				show:false
    	},
    	modal13:{
				saved:false,
				show:false
    	},
    	modal14:{
				saved:false,
				show:false
    	},
    }
  },
  methods:{
  	sourceCoords(){
  		if(this.$refs.sourceCoordsBtn){
  			var co = this.$refs.sourceCoordsBtn.$el.getBoundingClientRect()
  			var coAdjusted = {
  				top:co.top - 74,
  				left:co.left - 218,
  				width:co.width,
  				height:co.height,
  			}
	  		return coAdjusted
	  	}
  	}
  }
}
</script>

