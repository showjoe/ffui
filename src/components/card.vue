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
        <h5 class="card-title" v-html="title" />
        <h6 class="card-subtitle" v-html="subtitle" />
      </header>
    </slot>
    <slot name="body">
      <main :class="[this.imgOverlay ? 'card-img-overlay' : 'card-body']" v-if="body">
        <template v-if="!head">
          <h5 class="card-title" v-html="title" />
          <h6 class="card-subtitle" v-html="subtitle" />
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
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
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
  render(h) {
    var cardChildren = []
    var bodyChildren = []
    var cardProps = { class: 'card' }
    if (this.head) {
      if (this.$slots['header-right'])
        this.$slots['header-right'].forEach((headerVNode) => {
          if (!headerVNode.data.class) headerVNode.data.class = {};
          headerVNode.data.class['float-right'] = true;
          for (var key in headerVNode.data.class) {
            if (Array.isArray(headerVNode.data.class[key])) {
              headerVNode.data.class[key].flat();
            }
          }
        })
      if (this.$slots['header-left'])
        this.$slots['header-left'].forEach((headerVNode) => {
          if (!headerVNode.data.class) headerVNode.data.class = {};
          headerVNode.data.class['float-left'] = true;
        })
      var headerChildren = [
        this.$slots['header-right'],
        this.$slots['header-left'],
        h('h5', { class: 'card-title' }, [this.title]),
        this.subtitle ? h('h6', { class: 'card-subtitle' }, [this.subtitle]) : false
      ]
      var header = h('div', { class: 'card-header' }, headerChildren)
      cardChildren.push(header)
    }
    if (this.$slots.outerTop) cardChildren.push(this.$slots.outerTop)
    if (this.body) {
      if (!this.head && this.title) { bodyChildren.push(h('h5', { class: 'card-title' }, [this.title])) }
      if (!this.head && this.subtitle) { bodyChildren.push(h('h6', { class: 'card-subtitle' }, [this.subtitle])) }
      bodyChildren.push(this.$slots.default)
      cardChildren.push(h('div', { class: [this.imgOverlay ? 'card-img-overlay' : 'card-body'] }, bodyChildren))

    } else {
      cardChildren.push(this.$slots.default)
    }
    if (this.$slots.outerBottom) cardChildren.push(this.$slots.outerBottom)
    if (this.foot) {
      var footer = h('div', { class: 'card-footer' }, this.$slots.footer)
      cardChildren.push(footer)
    }
    return h('div', cardProps, cardChildren)
  },
}
</script>