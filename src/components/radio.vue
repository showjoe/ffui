<template>
  <div :class="rdContainerClass">
    <input v-if="type!='standard'||type=='standard'&&!labelLeft" type="radio" :class="rdInputClass" :id="rdId" @change="update" :value="value" :disabled="disabled" :checked="isChecked" ref="input">
    <label :for="rdId" :class="rdLabelClass" :id="'label'+rdId">
      <slot>{{label}}</slot>
    </label>
    <input v-if="type=='standard'&&labelLeft" type="radio" :class="rdInputClass" :id="rdId" @change="update" :value="value" :disabled="disabled" :checked="isChecked" ref="input">
    <feedback type="invalid" class="mb-2">{{firstError}}</feedback>
  </div>
</template>
<script>
export default {
  name: 'radio',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: {},
    id: {},
    error: {},
    inline: Boolean,
    label: {},
    labelLeft: Boolean,
    labelRight: {
      type: Boolean,
      default: true
    },
    value: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    size: {
      type: String,
    },
    type: {
      type: String,
      default: 'custom'
    },
    disabled: Boolean,
  },
  data() {
    return {
      // checked: (this.value == this.trueValue)
    }
  },
  mounted() {
    this.setValidity()
  },
  computed: {
    hasError() {
      return this.error ? this.error.length > 0 : false
    },
    firstError() {
      if (this.hasError) return this.error[0]
        return false
    },
    rdId() {
      if (this.id) return this.id
      return this._uid
    },
    rdContainerClass() {
      return [{
          'form-check': this.type == 'standard',
          'form-check-inline': this.type == 'standard' && this.inline,
          'custom-control custom-radio': this.type == 'custom',
          'custom-control custom-switch': this.type == 'switch',
          ['custom-control-' + this.size]: this.type == 'custom' && this.size,

          'custom-control-inline': this.type == 'custom' && this.inline,
          'label-left': this.labelLeft,
          'is-invalid': this.hasError,
          'is-valid': !this.hasError,
        },
        { checked: this.isChecked, disabled: this.disabled, readonly: this.readonly }
      ]
    },
    rdInputClass() {
      return [{
        'form-check-input': this.type == 'standard',
        'custom-control-input': this.type == 'custom' || this.type == 'switch'
      }]
    },
    rdLabelClass() {
      return [{
        'form-check-label': this.type == 'standard',
        'custom-control-label': this.type == 'custom' || this.type == 'switch'
      }]
    },
    isChecked() {
      return this.value!=undefined && this.value == this.checked
    },
  },
  watch: {
    error: {
      handler() {
        this.setValidity()
      },
      deep: true
    }
  },
  methods: {
    setValidity() {
      var error = this.hasError ? this.error : ''
      if (this.$refs.input) this.$refs.input.setCustomValidity(error)
    },
    update() {
      if (this.disabled || this.readonly) return false
      this.$emit('change', this.value)
    }
  }
}
</script>