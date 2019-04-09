<template>
  <transition name="collapse" @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter" @afterLeave="afterLeave" @beforeLeave="beforeLeave" @leave="leave" :duration="duration">
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
  methods: {
    beforeEnter(el) {
      el.style.transition = this.durationEnter + 'ms ' + this.ease
      el.style.height = 0
    },
    enter(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    afterEnter(el) {
      el.style = null
    },
    beforeLeave(el) {
      el.style.transition = this.durationLeave + 'ms ' + this.ease
      el.style.height = el.scrollHeight + 'px'
    },
    leave(el) {
      this.$nextTick(() => {
        el.style.height = 0
      })
    },
    afterLeave(el) {
      el.style.height = 0
      el.style = null
    },
  }
}
</script>
<style>
.collapse {
  overflow: hidden;
}
</style>