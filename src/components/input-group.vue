<template>
<div class="input-group">
  <div class="input-group-prepend" v-if="$slots.prepend||$scopedSlots.prepend">
    <slot name="prepend"></slot>
  </div>
  <slot></slot>
  <div class="input-group-append" v-if="$slots.append||$scopedSlots.append">
    <slot name="append"></slot>
  </div>
</div>
</template>
<script>
export default {
  name:'inputGroup',
  props: {
    value:{},
    di:{}
  },  
}
</script>