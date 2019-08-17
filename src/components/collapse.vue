<template>
  <transition name="collapse" @enter="enter" @leave="leave" :duration="duration">
    <div ref="collapsible" v-if="show" :class="['collapse',{'show':show}]">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'collapse',
  props: {
    show: Boolean,
    duration: {
      default: 150
    },
    ease: {
      default: 'ease-out'
    }
  },
  computed: {
    durationEnter() { return typeof this.duration == 'object' ? this.duration.enter : this.duration },
    durationLeave() { return typeof this.duration == 'object' ? this.duration.leave : this.duration },
    transitionEnter() { return this.durationEnter + 'ms ' + this.ease },
    transitionLeave() { return this.durationLeave + 'ms ' + this.ease },
  },
  methods: {
    enter(el) {
      var self = this
      el.style.height = 0
      requestAnimationFrame(function() {
        el.style.transition = self.transitionEnter
        el.style.height = el.scrollHeight + 'px'
      })
    },
    leave(el) {
      var self = this
      requestAnimationFrame(function() {
        el.style.transition = self.transitionLeave
        el.style.height = 0;
      })
    },
  }
}
</script>
<style>
</style>