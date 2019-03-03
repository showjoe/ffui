<template>
<div class="progress">
  <div class="progress-bar bg-success" :style="{width:validPercent}">
    <span class="sr-only">{{validPercent}} Complete</span>
  </div>
  <div class="progress-bar bg-danger" :style="{width:invalidPercent}">
    <span class="sr-only">{{invalidPercent}} Invalid</span>
  </div>
</div>
</template>
<script>
export default {
  name:'progress-bar',
    props: [
      'valid',
      'invalid',
      'total',
    ],
    computed:{
        validPercent (){
            if(Array.isArray(this.valid)&&this.valid.length&&this.total)
            return (this.valid.length/this.total)*100+'%';
            if(this.valid&&this.total)
            return (this.valid/this.total)*100+'%';
            return 0+'%';
        },
        invalidPercent (){
            if(Array.isArray(this.invalid)&&this.invalid.length&&this.total)
            return (this.invalid.length/this.total)*100+'%';
            if(this.invalid&&this.total)
            return (this.invalid/this.total)*100+'%';
            return 0+'%';
        }
    }
}
</script>