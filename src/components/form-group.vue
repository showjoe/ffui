<script>
export default {
  name: 'form-group',
  props: {
    di: Object,
    index: Number,
    label: String,
    hideLabel: Boolean,
    hideError: Boolean,
    cols: String,
    bp: String,
    sizes: Object,
    flip: Boolean,
    error: {}
  },
  render(h) {
    var children = []
    var col0Children = []
    var labelProps = { class: 'col-form-label', attrs: {}, domProps: { innerHTML: this.getLabel() } }

    this.injectSlot('pre_label', { di: this.di }, col0Children)

    if (this.di) labelProps.attrs.for = this.di.name
    var label = h('label', labelProps)
    if (!this.hideLabel) col0Children.push(label)
    this.injectSlot('label', { di: this.di }, col0Children)

    if (this.cols) {

      var col1 = h('div', { class: [this.colWidths(0)] }, col0Children)
      children.push(col1)

      var slotChildren = []

      this.injectSlot('default', { di: this.di }, slotChildren)
      this.injectSlot('below_input', { di: this.di }, slotChildren)

      var col2 = h('div', { class: [this.colWidths(1)] }, slotChildren)
      children.push(col2)
      if (this.flip) children.reverse()
    } else {
      children.push(col0Children)
      this.injectSlot('default', { di: this.di }, children)
      this.injectSlot('below_input', { di: this.di }, children)
    }
    if (!this.hideError)
      children.push(this.getErrorMessage(h))
    //   children.push(col2)
    return h('div', { class: ['form-group', this.sizeClass, { 'row': this.cols }, this.hasError ? 'is-invalid' : 'is-valid'] },
      children)
  },
  computed: {
    // ...mapState({
    //   error(state) {
    //     if (this.di && _.has(this.di, 'section') && this.index > -1) {
    //       return state.errors[this.di.section+'.'+this.index+'.'+this.di.name]
    //     }
    //     return state.errors[this.di.name]
    //   }
    // }),
    questionnaireRef() { return this.$root.questionnaireRef },
    hasError() { return this.error ? this.error.length > 0 : false },
    sizeClass() {
      var classes = []
      var bp = false
      if (!this.sizes) return classes
      if (typeof this.sizes == "number") {
        classes = ['col-' + this.sizes]
      } else if (Array.isArray(this.sizes)) {
        /* Sizes prop is array of objects */
        for (var key in this.sizes) {
          if (this.sizes.hasOwnProperty(key)) {
            var sizeArr = this.sizes[key]
            if (typeof sizeArr == "number") { classes.push('col-' + sizeArr) }
            for (bp in sizeArr) {
              if (sizeArr.hasOwnProperty(bp)) {
                classes.push('col-' + bp + '-' + sizeArr[bp])
              }
            }

          }
        }
      } else if (Object.prototype.toString.call(this.sizes)) {
        for (bp in this.sizes) { if (this.sizes.hasOwnProperty(bp)) classes.push('col-' + bp + '-' + this.sizes[bp]) }
      }
      return [classes]
    },
  },
  methods: {
    injectSlot(slot, data, parent) {
      if (this.$scopedSlots[slot]) parent.push(this.$scopedSlots[slot](data))
      else if (this.$slots[slot]) parent.push(this.$slots[slot])
    },
    getLabel() {
      var label = this.label
      if (this.di) label = this.di.label
      return label
    },
    getErrorMessage(h) {
      return this.hasError && this.error ? h('div', { class: { 'col invalid-feedback': this.hasError } }, [this.error[0]]) : false
    },
    colWidths(i) {
      var cols = this.cols.split('|')
      var str = 'col-'
      str += this.bp ? this.bp + '-' : ''
      return str + cols[i]
    },
  }
}
</script>
<style lang="scss">

</style>