<template>
  <ul :class="getClass">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'list-group',
  props: {
    flush: Boolean,
    horizontal: {
      default: false
    }
  },
  computed: {
    getClass() {
      var classes = ['list-group']
      if (this.flush) classes.push('list-group-flush')
      if (this.horizontal !== false) {
        if (this.horizontal == '') classes.push('list-group-horizontal')
        else {
          classes.push('list-group-horizontal-' + this.horizontal)
        }
      }
      return classes
    }
  }
}
</script>