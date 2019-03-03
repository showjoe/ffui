<!-- <template>
<div :class="['form-group row',hasError ? 'is-invalid':'is-valid']">
    <slot v-if="!di"></slot>
    <div :class="colWidths(0)">
        <label class="col-form-label" :for="di.name" v-html="di.label"></label>
        <slot name="under_label"></slot>
    </div>
    <div :class="colWidths(1)">
        <slot :di="di"></slot>
        <div class="invalid-feedback" v-if="hasError">{{error[0]}}</div>
    </div>
    <slot name="under_row"></slot>
</div>
</template> -->
<script>
// import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'form-group',
  props: {
    di: Object,
    index: Number,
    label: String,
    hideLabel: Boolean,
    hideError: Boolean,
    cols: String,
    size: String,
    flip: Boolean
  },
  render(h) {
    var children = []
    var col0Children = []
    var labelProps = {
      class: 'col-form-label',
      attrs: {},
      domProps: { innerHTML: this.getLabel() }
    }
    if (this.di) { labelProps.attrs.for = this.di.name }
    var label = h('label', labelProps)

    if (this.$scopedSlots.pre_label)
      col0Children.push(this.$scopedSlots.pre_label({ di: this.di }))
    if (this.$slots.pre_label)
      col0Children.push(this.$slots.pre_label)
    if (!this.hideLabel)
      col0Children.push(label)
    if (this.cols) {
      var col1 = h('div', { class: [this.colWidths(0)] }, col0Children)
      children.push(col1)
      var slotChildren = [this.$slots.default]
      if (this.$scopedSlots.default)
        slotChildren.push(this.$scopedSlots.default({ di: this.di }))
      slotChildren.push(this.$slots.belowInput)
      var col2 = h('div', { class: [this.colWidths(1)] }, slotChildren)
      children.push(col2)
      if(this.flip) children.reverse()
    } else {
      children.push(col0Children)
      children.push(this.$slots.default)
      if (this.$scopedSlots.default)
        children.push(this.$scopedSlots.default({ di: this.di }))
    }
    if (!this.hideError)
      children.push(this.getErrorMessage(h))
    //   children.push(col2)
    return h('div', { class: ['form-group', { 'row': this.cols }, this.hasError ? 'is-invalid' : 'is-valid'] },
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
    questionnaireRef() {
      return this.$root.questionnaireRef
    },
    hasError() {
      return this.error ? this.error.length : false
      // return false
    }
  },
  methods: {
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
      str += this.size ? this.size + '-' : ''
      return str + cols[i]
    },
  }
}

</script>
