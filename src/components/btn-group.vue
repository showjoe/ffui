<template>
  <div :class="[classObj]">
    <slot>
      <template v-if="btns">
        <template v-for="btn in btns">
          <slot name="btn" :btn="btn">
            <btn :id="di.name+'_'+btn.value" type="radio" :key="btn.value" @input="updateValue" v-bind="btnProps(btn)">
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
    disabled: Boolean,
    readonly: Boolean,
    size: {
      type: String,
      default: ''
    },
    vertical: Boolean
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
        size: this.size,
      }
    },
  }
}
</script>