<template>
  <div class="card">
    <slot name="header">
      <header class="card-header" v-if="head">
        <div class="float-right" v-if="$scopedSlots['header-right']">
          <slot name="header-right"></slot>
        </div>
        <div class="float-left" v-if="$scopedSlots['header-left']">
          <slot name="header-left"></slot>
        </div>
        <h5 v-if="title" class="card-title" v-html="title" />
        <h6 v-if="subtitle" class="card-subtitle" v-html="subtitle" />
      </header>
    </slot>
    <slot name="body">
      <main :class="[this.imgOverlay ? 'card-img-overlay' : 'card-body']" v-if="body">
        <template v-if="!head">
          <h5 v-if="title" class="card-title" v-html="title" />
          <h6 v-if="subtitle" class="card-subtitle" v-html="subtitle" />
        </template>
        <slot></slot>
      </main>
      <slot v-if="!body"></slot>
    </slot>
    <slot name="footer">
      <footer class="card-footer" v-if="foot">
        <div class="float-right" v-if="$scopedSlots['footer-right']">
          <slot name="footer-right"></slot>
        </div>
        <div class="float-left" v-if="$scopedSlots['footer-left']">
          <slot name="footer-left"></slot>
        </div>        
      </footer>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'card',
  props: {
    title: {
      default: '',
    },
    subtitle: {
      default: '',
    },
    head: Boolean,
    body: {
      type: Boolean,
      default: true,
    },
    foot: Boolean,
    imgOverlay: Boolean
  },
}
</script>