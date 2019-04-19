<template>
  <transition name="collapse" @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter" @beforeLeave="beforeLeave" @leave="leave" @afterLeave="afterLeave" :duration="duration">
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
    beforeEnter(el) {
      el.style.transition = this.transitionEnter
      el.style.height = 0
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    afterEnter(el) {
      el.style = null
    },
    beforeLeave(el) {
      el.style.transition = this.transitionLeave
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      this.$nextTick(() => { el.style.height = 0 })
    },
    afterLeave(el) {
      this.$nextTick(() => { el.style = null })
    },
  }
}
</script>
<style>
.collapse.show {
  overflow: hidden;
}
</style>