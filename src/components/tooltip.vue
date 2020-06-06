<template>
  <div v-show="show" :class="['tooltip','bs-tooltip-'+position, {fade,show}]">
    <div class="arrow"></div>
    <slot name="outer">
      <div class="tooltip-inner">
        <div v-html="html"></div>
        <slot>
          {{text}}
        </slot>
      </div>
    </slot>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
export default {
  name: 'tooltip',
  props: {
    fade: {
      type: Boolean,
      default: true
    },
    text: {},
    html: {},
    target: {},
    position: {
      default: 'bottom'
    },
    event: {
      default: 'hover',
      validator: (value) => {
        return ['click', 'hover'].indexOf(value) !== -1
      }
    },
  },
  mounted() {
    this.popper = this.popperInstance()
  },
  updated() {
    this.popper = this.popperInstance()
  },
  data() {
    return {
      show: false
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
            modifiers: [flip, preventOverflow,
              {
                name: 'offset',
                options: {
                  offset: [0, 4],
                },
              },
              {
                name: 'arrow',
                options: {
                  padding: 5, // 5px from the edges of the popper
                },
              },
            ],
          });
        }
      }
    },
    toggle() {
      this.show = !this.show
    }
  },
}
</script>