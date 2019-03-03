<template>
  <div :class="[form ? 'form-row':'row']">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'row',
  props: {
    form: Boolean
  },
}
</script>