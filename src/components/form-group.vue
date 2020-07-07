<script>
export default {
  name: 'form-group',
  props: {
    id: String,
    di: Object,
    formRow:Boolean,
    index: Number,
    label: String,
    helptext: String,
    hideLabel: Boolean,
    hideError: Boolean,
    cols: [String, Array, Object],
    bp: String,
    size: String,
    sizes: Object,
    flip: Boolean,
    error: {},
    tag:{
      type:String,
      default:'div'
    }
  },
  inputChildren: ['textbox'],
  data() {
    return {
      inputId: null
    }
  },
  created() {
    this.$on('setInputId', this.setInputId)
  },
  render(h) {
    var children = []
    if (this.cols) {
      children.push(this.renderCol1(h), this.renderCol2(h))
      if (this.flip) children.reverse()
    } else {
      children.push(this.renderSingleCol(h))
    }
    if(this.cols && this.sizes){
      /* create a parent div with a class of row */
      return h(this.tag, {
        class: ['form-group', this.sizeClass, this.hasError ? 'is-invalid' : 'is-valid'],
        domProps: {
          id: this.fgId
        }
      },
      [h('div',{class:['row',{'form-row':this.formRow }]},[children])])
    } else
    return h(this.tag, {
        class: ['form-group', this.sizeClass, { 'row': this.cols,'form-row':this.formRow }, this.hasError ? 'is-invalid' : 'is-valid'],
        domProps: {
          id: this.fgId
        }
      },
      children)
  },
  computed: {
    fgId() {
      if (this.id) return this.id
      return this.$options.name + '_' + this._uid
    },
    labelId() {
      // var id = this.id ? this.id : this._uid
      return 'label_' + this._uid
    },
    helptextId() {
      return 'helptext_' + this._uid
    },
    questionnaireRef() { return this.$root.questionnaireRef },
    hasError() { return this.error ? this.error.length > 0 : false },
    hasHelptext() {
      return this.helptextComputed ? true : false
    },
    helptextComputed() {
      return this.$scopedSlots.helptext ? this.$scopedSlots.helptext() : this.helptext ? this.helptext : this.di && this.di.json && this.di.json.helptext ? this.di.json.helptext : false
    },
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
    makeSizeClass(sizes) {
      var classes = []
      for (var bp in sizes) {
        classes.push('col-' + bp + '-' + sizes[bp])
      }
      return classes
    },
    renderLabel(h) {
      var labelClass = []
      if (!this.hideLabel) {
        if (this.$scopedSlots['label-outer']){
          return this.$scopedSlots['label-outer']({di:this.di})
        }
        else if(this.$slots.label||this.getLabelText()){
            var slotContents = this.$scopedSlots.default({di:this.di})
            for (var i = slotContents.length - 1; i >= 0; i--) {
              if(slotContents[i].componentOptions&&['textbox','number','datepicker','dropdown'].includes(slotContents[i].componentOptions.tag)){
                labelClass = ['col-form-label', this.size ? 'col-form-label-' + this.size : '']
              }
            }
          return h('label', { class: labelClass, attrs: { for: this.inputId, id: this.labelId } }, [this.$slots.label ? this.$slots.label : this.getLabelText()])
        }
        else return false
      }
    },
    renderPreLabel() {
      return this.$scopedSlots.pre_label ? this.$scopedSlots.pre_label({ di: this.di }) : false
    },
    renderErrorMessage(h) {
      return this.hasError && this.error ? h('feedback', { props: { type: this.hasError ? 'invalid' : 'valid' } }, [this.getErrorMessage()]) : false
    },
    renderErrorSlot() {
      return this.$scopedSlots.error ? this.$scopedSlots.error({ error: this.getErrorMessage() }) : false
    },
    renderInput() {
      return this.$scopedSlots.default({ di: this.di, size: this.size, error: this.getErrorMessage() })
    },
    renderHelptext(h) {
      if (this.helptextComputed) return h('small', { attrs: { id: this.helptextId }, class: ['form-text text-muted'] }, [this.helptextComputed])
    },
    renderBelowInput() {
      return this.$scopedSlots.below_input ? this.$scopedSlots.below_input({ di: this.di }) : false
    },
    renderCol1(h) {
      return h('div', { class: [this.colWidths(0)] }, [
        this.renderPreLabel(), this.renderLabel(h)
      ])
    },
    renderSingleCol(h) {
      return [
        this.renderPreLabel(), this.renderLabel(h), this.renderInput(), this.renderHelptext(h), this.renderBelowInput(), this.hideError ? false : this.renderErrorMessage(h), this.renderErrorSlot(h)
      ]
    },
    renderCol2(h) {
      return h('div', { class: [this.colWidths(1)] },
        [
          this.renderInput(), this.renderHelptext(h), this.renderBelowInput(), this.hideError ? false : this.renderErrorMessage(h), this.renderErrorSlot(h)
        ]
      )
    },
    setInputId(e) {
      // console.log('setInputId', e)
      this.inputId = e
    },
    getLabelText() {
      var label = this.label
      if (this.di) label = this.di.label
      return label
    },
    getErrorMessage() {
      // console.log(this) 
      return this.error ? this.error[0] : false
    },
    colWidths(i) {
      if (this.cols) {
        if (typeof this.cols == 'object') {
          return this.makeSizeClass(this.cols[i])
        } else {
          var cols = this.cols.split('|')
          var str = 'col-'
          str += this.bp ? this.bp + '-' : ''
          return str + cols[i]
        }
      }
    },
    getLabelId() {

    }
  }
}
</script>
<style lang="scss">
</style>