<template>
<div :class="['tab-pane',{fade,show,active}]" role="tabpanel" :id="id">
  <slot/>
</div>
</template>
<script>
export default {
  name:'tab-pane',
  props: {
    fade:Boolean,
    active:Boolean,
    id:{}
  },
  watch:{
    active(){
      var self = this
      requestAnimationFrame(function() {
        self.show = self.active
      })
    }
  },
  data(){
    return {
      show:this.active
    }
  },
  computed: {
  },
  methods:{
  }
}
</script>