<template>
  <div :class="alertClass">
    <button v-if="dismissable" @click="dismiss" type="button" class="close" style="margin-right: -8px;margin-top: -8px;" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <h4 v-if="heading" class="alert-heading" v-text="heading"></h4>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'alert',
  props: {
    dismissable:Boolean,
    heading: {
      type: String
    },
    type: {
      type: String,
      default: 'warning',
    },
    value:{}
  },
  computed: {
    alertClass() {
      return 'alert alert-' + this.type
    }
  },
  methods:{
    dismiss(){
      this.$emit('input', true)
    },
  }
}
</script>