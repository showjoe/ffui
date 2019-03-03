<template>
<div :class="['checkbox',{'disabled':disabled}]">
  <fa :icon="isChecked ? 'check-square':'square'" @click="toggleCheck" />
  <input type="checkbox" class="d-none" :id="id" :value="checked" :checked="isChecked" @change="update" :disabled="disabled">
  <label :for="id">{{label}}</label>
</div>
</template>
<script>
export default {
  name:'checkbox',
  props: {
    label:{},
    value:{},
    trueValue:{
      default:true
    },
    falseValue:{
      default:false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  computed:{
    id () {
      return this._uid
    },
    isChecked () {
      // if(this.value != this.trueValue){ this.$set('record', this.falseValue); }
      return this.value == this.trueValue
    },
  },
  data () {
    return {
      checked: (this.value == this.trueValue)
    }
  },
  methods:{
    update () {
      this.$emit('input',(this.value == this.trueValue) ? this.falseValue : this.trueValue)
    },
    toggleCheck () {
      if (this.disabled || this.readonly) return false
      var value = this.checked ? this.falseValue : this.trueValue
      this.checked = value
      this.$emit('input', value)
    }
  }
}
</script>
