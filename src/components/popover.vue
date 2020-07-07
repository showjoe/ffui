<template>
  <div v-show="show" :class="['popover', {fade,show}]">
    <div ref="arrow" class="arrow"></div>
    <h3 class="popover-header">
      <slot name="header">
        <template v-if="title">{{title}}</template>
      </slot>
    </h3>
    <div class="popover-body">
      <slot name="body">
        <template v-if="body">{{body}}</template>
        <div v-if="html" v-html="html" />
      </slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
export default {
  name: 'popover',
  props: {
    title: {},
    fade: {
      type: Boolean,
      default: true
    },
    body: {},
    html: {},
    target: {},
    position: {
      default: 'bottom'
    },
    event: {
      default: 'click',
      validator: (value) => {
        return ['click', 'hover'].indexOf(value) !== -1
      }
    },
  },
  mounted() {
    this.popper = this.popperInstance()
  },
  updated() {
    if (!this.popper) this.popperInstance()
    this.popper.update()
  },
  data() {
    return {
      show: false,
      t: this.target
    }
  },
  computed: {

  },
  destroyed() {
    this.popper.destroy()
    this.popper = null
  },
  methods: {
    popperInstance() {
      var button = this.target && typeof this.target == 'object' ? this.target : document.getElementById(this.target);
      this.t = button
      if (this.target && this.$el) {

        if (button) {
          if (this.event == 'hover') {
            button.addEventListener('mouseover', this.toggle)
            button.addEventListener('mouseout', this.toggle)

          } else {
            button.addEventListener(this.event, this.toggle)
          }

          return createPopper(button, this.$el, {
            placement: this.position,
            modifiers: [flip, preventOverflow,offset,
              {
                name: 'offset',
                options: {
                  offset: [0, 6],
                },
              },

              {
                name: 'arrow',
                options: {
                  offset: [0, 8],
                  padding: 5, // 5px from the edges of the popper
                },
              },
            ],
          });
        }
      }
    },
    toggle() {
      if (this.popper) this.popper.update()
      this.show = !this.show
    }
  },
}
</script>