<template>
<div :class="getClass">
  <slot></slot>
</div>
</template>
<script>
export default {
  name:'column',
  props: {
    offset:{},
    sizes:{},
    auto:Boolean,
  },
  computed:{
    getClass(){
      var classes = []
      if(this.auto) return ['col-auto']
      if(this.sizes) classes.push(this.sizeClass)
      if(this.offset) classes.push(this.offsetClass)
      if(classes.length == 0) classes = ['col']
        return classes
    },
    sizeClass () {
      var classes = []
      if(typeof this.sizes == "number"){
        classes = ['col-'+ this.sizes]
      } else if(Array.isArray(this.sizes)){
      /* Sizes prop is array of objects */
        classes = this.sizes.map((sizeArr)=>{
          if(typeof sizeArr == "number"){
            return 'col-'+ sizeArr
          }
          return sizeArr.map((size,bp)=>{
            return 'col-'+bp+'-'+size
          })
        })
      }else if(Object.prototype.toString.call(this.sizes)){
        classes = this.sizes.map((size,bp)=>{
          return 'col-'+bp+'-'+size
        })
      }
      return [classes]
    },
    offsetClass () {
      var classes = this.offset.map((size,bp)=>{
        return 'offset-'+bp+'-'+size
      })
      return [classes]
    }
  }
}
</script>