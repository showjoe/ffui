<script>
export default {
  name: 'list-group',
  props: {
    di: { type: Object },
    flush: Boolean,
    horizontal: { default: false },
    items: { type: [Array, Object] },
    labelField: { type: String, default: 'label' },
    valueField: { type: String, default: 'value' },
    value: {}
  },
  render(h) {
    var tagName = (this.$slots.default) && this.testIfGroupContainsLinks(this.$slots.default)||this.items||this.di ? 'div' : 'ul'
    var props = {
      class: this.getClass,
      attrs: { role: 'group' }
    }
    var children = [this.$slots.default]
    if (this.items) {
      for (var k in this.items) {
        var item = this.items[k]
        children.push(this.renderItem(h, item, k))
      }
    }else if(this.di&&this.di.lookup){
      for (var l in this.di.lookup.items) {
        var di_item = this.di.lookup.items[l]
        children.push(this.renderItem(h, di_item, l))
      }
    }
    return h(tagName, props, children)
  },
  computed: {
    getClass() {
      var classes = ['list-group']
      if (this.flush) classes.push('list-group-flush')
      if (this.horizontal !== false) {
        if (this.horizontal == '') classes.push('list-group-horizontal')
        else {
          classes.push('list-group-horizontal-' + this.horizontal)
        }
      }
      return classes
    }
  },
  methods: {
    input(val) {
      this.$emit('input', val)
    },
    renderItem(h, item, k) {
      if (this.$scopedSlots.item)
        return this.$scopedSlots.item({ item, k, value: this.value })
      return h('list-group-item', {
        props: {
          trueValue: item[this.valueField],
          isLink: true,
          value: this.value
        },
        on: {
          input: this.input
        },
      }, [
        this.$scopedSlots['item-inner'] ? this.$scopedSlots['item-inner']({ item, k, value: this.value }) : item[this.labelField]
      ])
    },
    testIfGroupContainsLinks(slot) {
      var hasLinks = false
      for (var i = slot.length - 1; i >= 0; i--) {
        var vNode = slot[i]
        if (vNode.componentOptions && vNode.componentOptions.tag == 'list-group-item') {
          var pd = vNode.componentOptions.propsData
          if (pd.isLink == "") hasLinks = true
        } else {
          if (vNode.tag && vNode.tag !== 'li') hasLinks = true
        }

      }
      return hasLinks
    }
  }
}
</script>