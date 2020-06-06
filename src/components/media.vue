<template>
  <div class="media">
    <slot name="outer">
      <slot name="media"></slot>
      <div class="media-body">
        <slot name="title"><h5 v-if="title" v-html="title"></h5></slot>
        <slot></slot>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'media',
  props: {
    title: {},
  },
  methods: {


  }
}
</script>