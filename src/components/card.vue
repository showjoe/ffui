<!-- <template>
<div class="card card-default">
    <div class="card-header" v-if="head">
        <div class="float-right">
            <slot name="header-right"></slot>
        </div>
        <span class="card-title" v-html="title"></span>
    </div>
    <div v-if="body" class="card-body">
        <h5 v-if="!head" class="card-title" v-html="title"></h5>
        <h6 v-if="!head&&subtitle" class="card-subtitle" v-html="title"></h6>
        <slot></slot>
    </div>
    <slot v-else></slot>
</div>
</template> -->
<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: '',
      gui: { tag: 'textbox' }
    },
    subtitle: {
      type: String,
      default: '',
      gui: { tag: 'textbox' }
    },
    head: {
      type: Boolean,
      default: false,
      gui: { tag: 'checkbox' }
    },
    body: {
      type: Boolean,
      default: true,
      gui: { tag: 'checkbox' }
    },
    foot: {
      type: Boolean,
      default: false,
      gui: { tag: 'checkbox' }
    },
  },
  render(h) {
    var cardChildren = []
    var bodyChildren = []
    var cardProps = { class: 'card' }
    if (this.head) {
      if(this.$slots['header-right'])
      this.$slots['header-right'].forEach((headerVNode) => {
        if (!headerVNode.data.class) headerVNode.data.class = {};
        headerVNode.data.class['float-right'] = true;
        for (var key in headerVNode.data.class) {
          if(Array.isArray(headerVNode.data.class[key])){
            headerVNode.data.class[key].flat();
          }
        }
      })
      if(this.$slots['header-left'])
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
    if (this.body) {
      if (!this.head && this.title) { bodyChildren.push(h('h5', { class: 'card-title' }, [this.title])) }
      if (!this.head && this.subtitle) { bodyChildren.push(h('h6', { class: 'card-subtitle' }, [this.subtitle])) }
      bodyChildren.push(this.$slots.default)
      cardChildren.push(h('div', { class: 'card-body' }, bodyChildren))
    } else {
      cardChildren.push(this.$slots.default)
    }
    if (this.foot) {
      var footer = h('div', { class: 'card-footer' }, this.$slots.footer)
      cardChildren.push(footer)
    }
    return h('div', cardProps, cardChildren)
  },
}

</script>
