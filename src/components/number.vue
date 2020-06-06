<template>
  <input :id="nId" type="number" inputmode="numeric" ref="textbox" :step="step" :value="value" :min="min" :max="max" :disabled="disabled" @input="update" :class="['form-control',size ? 'form-control-'+size:'']" />
</template>
<script>
export default {
  name: 'number',
  props: {
    id: {},
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
    },
    value: {},
    di: {},
    disabled: Boolean,
    size: String
  },
  computed: {
    nId() {
      if (this.id) return this.id
      if (this.di) return this.di.name
      return this._uid
    }
  },
  methods: {
    update(e) {
      var val = e.target.value
      this.$emit('input', val)
    },
  }
}
</script>