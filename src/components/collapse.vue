<template>
  <transition name="collapse" @enter="enter" @after-enter="afterEnter" @before-leave="beforeLeave" @leave="leave" :duration="duration">
    <div ref="collapsible" v-if="show" :class="['collapse',{show}]">
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
    },
    slide: {
      type: Boolean,
      default: true
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
      if (this.slide) {
        el.style.transform = 'translateY(-' + el.scrollHeight + 'px)'
        el.style.clipPath = 'inset(' + el.scrollHeight + 'px 0px 0px 0px)'
      }
      requestAnimationFrame(function() {
        el.style.height = el.scrollHeight + 'px'
        el.style.transition = self.transitionEnter
        if (self.slide) {
          el.style.transform = 'translateY(0px)'
          el.style.clipPath = 'inset(0px 0px 0px 0px)'
        }
      })
    },
    afterEnter(el) {
      // console.log('afterEnter',el.style.height) 
      el.style.height = ''
      if (this.slide) {
        el.style.transform = ''
        el.style.clipPath = ''
      }

    },
    beforeLeave(el) {
      // console.log('beforeLeave',el.style.height) 
      el.style.transition = self.transitionLeave
      el.style.height = el.scrollHeight + 'px'
      if (this.slide) {
        el.style.transform = 'translateY(0px)'
        el.style.clipPath = 'inset(0px 0px 0px 0px)'
      }

    },
    leave(el) {
      var self = this
      el.style.transition = self.transitionLeave
      el.style.height = el.scrollHeight + 'px'
      if (this.slide) {
        el.style.transform = 'translateY(0px)'
        el.style.clipPath = 'inset(0px 0px 0px 0px)'
      }
      requestAnimationFrame(function() {
        el.style.height = 0;
        if (self.slide) {
          el.style.transform = 'translateY(-' + el.scrollHeight + 'px)'
          el.style.clipPath = 'inset(' + el.scrollHeight + 'px 0px 0px 0px)'
        }
      })
    },
  }
}
</script>
<style>
.collapse-enter-active,
.collapse-leave-active {
  transition: height .5s;
}

.collapse-enter,
.collapse-leave-to {
  height: 0
}
</style>