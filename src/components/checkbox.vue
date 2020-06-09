<template>
  <div :class="cbContainerClass">
    <input
    v-if="type!='standard'||type=='standard'&&!labelLeft"
    type="checkbox"
    :class="cbInputClass"
    :id="cbId"
    @change="update"
    :value="value"
    :disabled="disabled"
    :checked="isChecked"
    >
    <label :for="cbId" :class="cbLabelClass" :id="'label'+cbId">
      <slot>{{label}}</slot>
    </label>
    <input
    v-if="type=='standard'&&labelLeft"
    type="checkbox"
    :class="cbInputClass"
    :id="cbId"
    @change="update"
    :value="value"
    :disabled="disabled"
    :checked="isChecked"
    >
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
  computed: {
    cbId() {
      if (this.id) return this.id
      return this._uid
    },
    noLabel(){
      return !this.label && !this.$slots.default
    },
    cbContainerClass() {
      return [{
          'form-check': this.type == 'standard',
          'form-check-inline': this.type == 'standard' && this.inline,
          'custom-control custom-checkbox': this.type == 'custom',
          'custom-control custom-switch': this.type == 'switch',
          ['custom-control-' + this.size]: this.type == 'custom' && this.size,

          'custom-control-inline': this.type == 'custom' && this.inline,
          'label-left': this.labelLeft
        },
        { checked: this.isChecked, disabled: this.disabled, readonly: this.readonly }
      ]
    },
    cbInputClass() {
      return [{
        'form-check-input': this.type == 'standard',
        'custom-control-input': this.type == 'custom' || this.type == 'switch',
        'position-static': this.type == 'standard'&&this.noLabel
      }]
    },
    cbLabelClass() {
      return [{
        'form-check-label': this.type == 'standard',
        'custom-control-label': this.type == 'custom' || this.type == 'switch'
      }]
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
    }
  },
  methods: {
    update(event) {
      if (this.disabled || this.readonly) return false
      this.$emit('change',event.target.checked ? this.trueValue:this.falseValue)
    }
  }
}
</script>