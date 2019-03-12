<template>
  <transition
  name="collapse"
  @beforeEnter="beforeEnter"
  @enter="enter"
  @beforeLeave="beforeLeave"
  @leave="leave"
  :duration="duration"
  >
    <div ref="collapsible" v-if="show" :class="['collapse',{'show':show}]">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'collapse',
  props: {
    show:Boolean,
    duration:{
      default: 150
    },
    ease:{
      default: 'ease-out'
    }
  },
  computed: {},
  mounted () {
    var collapsible = this.$refs.collapsible
    this.durationEnter = typeof this.duration == 'object' ? this.duration.enter : this.duration
    this.durationLeave = typeof this.duration == 'object' ? this.duration.leave : this.duration
    if(this.show){
      var trans = this.show ? this.durationEnter:this.durationLeave
      collapsible.style.height = collapsible.scrollHeight + 'px'
      collapsible.style.transition = trans +'ms ' + this.ease
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.transition = this.durationEnter+'ms ' + this.ease
      el.style.height = 0
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    beforeLeave(el) {
      el.style.transition = this.durationLeave+'ms ' + this.ease
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      el.style.height = 0
      // el.style.opacity = 0
    },
  }
}
</script>
<style>
  .collapse{
    overflow: hidden;
    /*transition: 1000ms ease-out;*/
  }

</style>