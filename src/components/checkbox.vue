<template>
  <div :class="cbContainerClass">
    <input v-if="type!='standard'||type=='standard'&&!labelLeft" type="checkbox" :class="cbInputClass" :id="cbId" @change="update" :value="value" :disabled="disabled" :checked="isChecked" ref="input"  :aria-label="label">
    <label :for="cbId" :class="cbLabelClass" :id="'label'+cbId">
      <slot v-if="!hideLabel">{{label}}</slot>
    </label>
    <input v-if="type=='standard'&&labelLeft" type="checkbox" :class="cbInputClass" :id="cbId" @change="update" :value="value" :disabled="disabled" :checked="isChecked" ref="input" :aria-label="label">
    <feedback type="invalid" class="mb-2">{{firstError}}</feedback>
  </div>
</template>
<script>
export default {
  name: 'checkbox',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    id: {},
    error: {},
    hideLabel: Boolean,
    inline: Boolean,
    label: {},
    labelLeft: Boolean,
    labelRight: {
      type: Boolean,
      default: true
    },
    value: {},
    trueValue: {
      default: 1
    },
    falseValue: {
      default: null
    },
    size: {
      type: String,
    },
    type: {
      type: String,
      default: 'custom'
    },
    disabled: Boolean,
    readonly: Boolean
  },
  mounted() {
    this.setValidity()
  },
  computed: {
    cbId() {
      if (this.id) return this.id
      return this._uid
    },
    noLabel() {
      return (!this.label && !this.$slots.default) || this.hideLabel
    },
    cbContainerClass() {
      return [{
          'form-check': this.type == 'standard',
          'form-check-inline': this.type == 'standard' && this.inline,
          'custom-control custom-checkbox': this.type == 'custom',
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
    cbInputClass() {
      return [{
        'form-check-input': this.type == 'standard',
        'custom-control-input': this.type == 'custom' || this.type == 'switch',
        'position-static': this.type == 'standard' || this.noLabel
      }]
    },
    cbLabelClass() {
      return [{
        'form-check-label': this.type == 'standard',
        'custom-control-label': this.type == 'custom' || this.type == 'switch'
      }]
    },
    hasError() {
      return this.error ? this.error.length > 0 : false
    },
    firstError(){
      if(this.hasError) return this.error[0]
        return false;
    },
    isChecked() {
      // if(this.value != this.trueValue){ this.$set('record', this.falseValue); }
      return this.value == this.trueValue
    },
  },
  data() {
    return {
      checked: (this.value == this.trueValue)
    }
  },
  watch: {
    isChecked() {
      this.checked = this.isChecked
    },
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
    update(event) {
      if (this.disabled || this.readonly) return false
      this.$emit('change', event.target.checked ? this.trueValue : this.falseValue)
    }
  }
}
</script>