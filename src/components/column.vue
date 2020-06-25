<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'column',
  props: {
    auto: Boolean,
    bp: {},
    offset: {},
    order: {},
    sizes: {},
  },
  computed: {
    getClass() {
      var auto = this.auto ? '-auto' : ''
      var classes = ['col' + auto]
      if (this.sizes) classes.push(this.sizeClass)
      if (this.offset) classes.push(this.offsetClass)
      if (this.order) classes.push(this.orderClass)
      return classes
    },
    sizeClass() {
      var classes = []
      var bp = false
      // var autoStr = this.auto ? '-auto' : ''
      if (!this.sizes) return classes
      if (typeof this.sizes == "number" || typeof this.sizes == "string") {
        classes = ['col-' + this.sizes]
      } else if (Array.isArray(this.sizes)) {
        /* Sizes prop is array of objects */
        for (var key in this.sizes) {
          if (this.sizes.hasOwnProperty(key)) {
            var sizeArr = this.sizes[key]
            if (typeof sizeArr == "number") { classes.push('col-' + sizeArr) }
            for (bp in sizeArr) {
              if (sizeArr.hasOwnProperty(bp)) {
                classes.push('col-' + bp + '-' + sizeArr[bp])
              }
            }

          }
        }
      } else if (Object.prototype.toString.call(this.sizes)) {
        for (bp in this.sizes) { if (this.sizes.hasOwnProperty(bp)) classes.push('col-' + bp + '-' + this.sizes[bp]) }
      }
      return [classes]
    },
    offsetClass() {
      var classes = []
      var bp = false
      for (bp in this.offset) { if (this.offset.hasOwnProperty(bp)) classes.push('offset-' + bp + '-' + this.offset[bp]) }
      return [classes]
    },
    orderClass() {
      var classes = []
      if (!this.order) return classes
      if (typeof this.order == "number" || typeof this.order == "string") {
        classes = ['order-' + this.order]
      }
      return [classes]
    }
  }
}
</script>