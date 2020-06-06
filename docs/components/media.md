# Media object

## Example

::: demo
<media title="Media Title">
	<img slot="media" src="https://picsum.photos/100?random" class="mr-3">
	Some body to my media
</media>
:::

## Nesting

Media objects can be infinitely nested, though we suggest you stop at some point. Place nested media within the parent media object's default slot.

::: demo
<media title="Media Title">
	<img slot="media" src="https://picsum.photos/100?random" class="mr-3">
	<!-- Lorem ipsum -->
	<p v-dummy="'100'"></p>
	<!-- Nested media -->
	<media title="Media Title 2">
		<img slot="media" src="https://picsum.photos/100?random" class="mr-3">
		<!-- Lorem ipsum -->
		<p v-dummy="'100'"></p>
	</media>
</media>
:::

## Alignment
Media in a media object can be aligned with flexbox utilities to the top (default), middle, or end of your .media-body content.

::: demo
<media title="Top-aligned media">
	<img slot="media" src="https://picsum.photos/100?random" class="align-self-start mr-3">
	<p v-dummy="'100'"></p>
</media>
<media title="Center-aligned media">
	<img slot="media" src="https://picsum.photos/100?random" class="align-self-center mr-3">
	<p v-dummy="'100'"></p>
</media>
<media title="Bottom-aligned media">
	<img slot="media" src="https://picsum.photos/100?random" class="align-self-end mr-3">
	<p v-dummy="'100'"></p>
</media>
:::

## Order
Change the order of content by adding some custom flexbox CSS to set the order property (to an integer of your choosing).
::: demo
<media title="Top-aligned media">
	<p v-dummy="'100'" class="order-0"></p>
	<img slot="media" class="order-1 ml-5" src="https://picsum.photos/100?random">
</media>
:::

<script>
export default {
	data () {
    return {
    	
    }
  },
  methods:{

  }
}
</script>

