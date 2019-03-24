<template>
  <div :class="[classObj]">
    <slot>
      <template v-if="btns">
        <template v-for="btn in btns">
          <slot name="btn" :btn="btn">
            <btn :key="btn.value" @input="updateValue(btn.value)" v-bind="btnProps(btn)">
              <slot name="btn-prepend" :btn="btn"></slot>
              <slot name="btn-label" :btn="btn">
                <span v-html="getLabel(btn)"></span>
              </slot>
              <slot name="btn-append" :btn="btn"></slot>
            </btn>
          </slot>
        </template>
      </template>
    </slot>
  </div>
</template>
<script>
export default {
  name: 'btn-group',
  props: {
    btnClass: {
      type: String,
      default: 'primary'
    },
    outline: {
      type: Boolean,
      default: true,
    },
    justified: Boolean,
    di: {
      type: Object,
    },
    value: {
      default: false
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    /* tag could be one of: button / a / label / div */
    var self = this
    var tag = 'div';
    var children = [];
    var propObj = {
      props: this.$options.props,
      class: this.classObj,
    }
    if (this.di && this.di.lookup) {
      this.di.lookup.items.map((lui) => {
        var value = lui.value
        if (this.di.type == 'integer') value = parseInt(value)
        var btnProps = {
          class: [
            { 'w-100': this.justified },
          ],
          domProps: { innerHTML: lui.label },
          props: {
            value: self.value,
            trueValue: value,
            falseValue: null,
            btnClass: this.btnClass,
            disabled: this.disabled,
            readonly: this.readonly,
          },
          on: {
            input: self.updateValue
          }
        }
        children.push(h('btn', btnProps))
      })
    }
    children.push(this.$slots.default)
    return h(tag, propObj, children)
  },
  computed: {

    btns() {
      if (this.di) return this.di.lookup.items
        return false
    },
    classObj() {
      var classObj = [
        this.vertical ? 'btn-group-vertical' : 'btn-group',
        { 'd-flex': this.justified },
      ];
      return classObj
    }
  },
  methods: {
    getLabel(btn) {
      return btn.label
    },
    updateValue(val) {
      if (this.disabled || this.readonly) return false
      this.$emit('input', val)
    },
    btnProps(btn) {
      return {
        value: this.value,
        trueValue: btn.value,
        falseValue: null,
        btnClass: this.btnClass,
        disabled: this.disabled,
        readonly: this.readonly,
      }
    },
  }
}
</script>