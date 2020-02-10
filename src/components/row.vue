<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'row',
  props: {
    form: Boolean,
    sizes: {},
  },
  computed: {
    getClass() {
      var classes = ['row']
      if (this.form) classes.push('form-row')
      if (this.sizes) classes.push(this.sizeClass)
      return classes
    },
    sizeClass() {
      var classes = []
      var bp = false
      if (!this.sizes) return classes
      if (typeof this.sizes == "number") {
        classes = ['col-' + this.sizes]
      } else if (Array.isArray(this.sizes)) {
        /* Sizes prop is array of objects */
        for (var key in this.sizes) {
          if (this.sizes.hasOwnProperty(key)) {
            var sizeArr = this.sizes[key]
            if (typeof sizeArr == "number") { classes.push('row-cols-' + sizeArr) }
            for (bp in sizeArr) {
              if (sizeArr.hasOwnProperty(bp)) {
                classes.push('row-cols-' + bp + '-' + sizeArr[bp])
              }
            }

          }
        }
      } else if (Object.prototype.toString.call(this.sizes)) {
        for (bp in this.sizes) { if (this.sizes.hasOwnProperty(bp)) classes.push('col-' + bp + '-' + this.sizes[bp]) }
      }
      return [classes]
    },
  }
}
</script>