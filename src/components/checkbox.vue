<template>
  <div :class="['checkbox',{'checked':isChecked},{disabled},{readonly}]">
    <label v-if="labelLeft" :for="cbId" class="mr-2">
      <slot>{{label}}</slot>
    </label>
    <fa size="lg" :icon="isChecked ? 'check-square':'square'" @click="toggleCheck" class="align-middle" />
    <input type="checkbox" class="d-none" :id="cbId" :value="checked" :checked="isChecked" @change="update" :disabled="disabled">
    <label v-if="labelRight&&!labelLeft" :for="cbId" class="ml-2">
      <slot>{{label}}</slot>
    </label>
  </div>
</template>
<script>
  import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSquare,faCheckSquare} from '@fortawesome/free-solid-svg-icons'
library.add(faSquare,faCheckSquare)
Vue.component('fa', FontAwesomeIcon)
export default {
  name: 'checkbox',
  props: {
    id: {},
    label: {},
    labelLeft: Boolean,
    labelRight: {
      type:Boolean,
      default: true
    },
    value: {},
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    disabled: Boolean,
    readonly: Boolean
  },
  computed: {
    cbId() {
      if(this.id) return this.id
      return this._uid
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
  watch:{
    isChecked(){
      this.checked = this.isChecked
    }
  },
  methods: {
    update() {
      if (this.disabled || this.readonly) return false
      this.$emit('input', (this.value == this.trueValue) ? this.falseValue : this.trueValue)
    },
    toggleCheck() {
      if (this.disabled || this.readonly) return false
      var value = this.checked ? this.falseValue : this.trueValue
      this.checked = value
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss">
.checkbox {
  .checkbox-icon {
    display: inline-block;
    background-repeat: no-repeat !important;
    background-position: center center !important;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    background-image: url("../assets/icons/square.svg") !important;
  }
  &.disabled {
    color:grey;
  }

}
.checkbox.checked {
  .checkbox-icon {
    background-image: url("../assets/icons/check-square.svg") !important;
  }
}

</style>