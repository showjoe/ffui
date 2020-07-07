<template>
  <transition name="modal" :duration="transitionDuration" @enter="enterTransition">
    <div class="modal-container" v-show="show">
      <div ref="modal" :class="['modal',{'static':inline,fade,show}]" @click.stop="close('backdrop')" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" :aria-hidden="!show">
        <div ref="modal-dialog" :class="['modal-dialog', size ? 'modal-'+size:'', {'modal-dialog-centered':centered,'modal-dialog-scrollable':scrollable,'shadow-lg':backdropHidden}]" role="document" @click.stop="" v-bind="$attrs">
          <div v-if="arrow" class="arrow"></div>
          <div ref="content" class="modal-content">
            <slot name="header" v-if="head">
              <div class="modal-header">
                <slot name="header-inner">
                  <h5 class="modal-title" id="exampleModalLabel" v-html="title"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close('button')">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </slot>
              </div>
            </slot>
            <slot name="body">
              <div class="modal-body">
                <slot></slot>
              </div>
            </slot>
            <slot name="footer">
              <div class="modal-footer">
                <slot name="footer-inner">
                  <btn btn-class="secondary" @click.native="close('button')">Close</btn>
                  <btn @click.native="save">Save changes</btn>
                </slot>
              </div>
            </slot>
          </div>
        </div>
      </div>
      <div ref="backdrop" v-if="!inline&&!backdropHidden" :class="['modal-backdrop show',{'static':inline,fade}]"></div>
    </div>
  </transition>
</template>
<script>
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles';
export default {
  name: 'modal',
  inheritAttrs: false,
  props: {
    arrow: Boolean,
    title: {
      default: '',
    },
    head: {
      type: Boolean,
      default: true,
    },
    body: {
      type: Boolean,
      default: true,
    },
    foot: Boolean,
    show: Boolean,
    inline: Boolean,
    fade: Boolean,
    centered: Boolean,
    position: {
      default: 'auto'
    },
    size: String,
    scrollable: Boolean,
    backdropInactive: Boolean,
    backdropHidden: Boolean,
    target: {},
    sourceCoords: {},
    transitionDuration: {
      default: 150
    }
  },
  computed: {
    customCssProps() {
      var css = {
        '--transition-duration': this.transitionDuration / 1000 + 's'
      }
      // if (this.sourceCoords) {
      //   css['--source-x'] = this.sourceCoords.x
      //   css['--source-y'] = this.sourceCoords.y
      //   css['--source-width'] = this.sourceCoords.width
      //   css['--source-height'] = this.sourceCoords.height
      // }
      // if (this.sourceCoords && this.$refs.content) {
      //   css['--target-width'] = this.$refs.content.width
      // }
      return css
    }
  },
  data() {
    return {
      showing: false,
    }
  },
  destroyed() { if (this.popper) this.popper.destroy() },
  mounted() { this.setupModal() },
  watch: {
    showing() { this.setupModal() },
    target() { this.setupModal() },
    show() { this.showing = this.show },
  },
  methods: {
    setupModal() {
      if (this.showing) {
        if (!this.backdropHidden && !document.body.classList.contains('modal-open')) document.body.classList.add('modal-open')
        if (this.target) this.$nextTick(() => { this.popper = this.popperInstance() })
      }
    },
    close(target) {
      if (this.backdropInactive && target == 'backdrop') return false
      if (document.body.classList.contains('modal-open')) document.body.classList.remove('modal-open')
      this.$emit("close");
      this.showing = false
    },
    save() {
      this.$emit("save");
    },
    getInvertedTranslation(collapsed, expanded) {
      // console.log('getInvertedTranslation') 
      return {
        top: parseInt(collapsed.top - expanded.top),
        left: parseInt(collapsed.left - expanded.left),
        width: collapsed.width / expanded.width,
        height: collapsed.height / expanded.height,
      }
    },
    enterTransition() {
      console.log('modal enterTransition') 
      if (this.sourceCoords) {
        this.$refs.modal.classList.add('show')
        var co = this.getInvertedTranslation(this.sourceCoords, this.$refs['content'].getBoundingClientRect())
        var t = 'translate(' + co.left + 'px, ' + co.top + 'px) scale(' + co.width + ', ' + co.height + ')'
        this.$refs['content'].style.transform = t
      }
      var self = this
      requestAnimationFrame(function() {
        self.$emit("showing");
        self.showing = true
        self.$refs.modal.classList.add('show')
        self.$refs['content'].style.transition = '1s ease'
        self.$refs['content'].style.transform = ''
        if (self.showing && !self.backdropHidden) document.body.classList.add('modal-open')
      });
    },
    popperInstance() {
      console.log('popperInstance',this.popper) 
      var target = this.target && typeof this.target == 'object' ? this.target : document.querySelector(this.target);
      console.log(target, this.$refs['modal-dialog']) 
      if (target && this.$refs && this.$refs['modal-dialog']) return createPopper(target, this.$refs['modal-dialog'], {
        placement: this.position,
        modifiers: [arrow,flip, preventOverflow, offset, computeStyles,

          {
            name: 'computeStyles',
            options: {
              adaptive: false,
            },
          }, {
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
  },

}
</script>
<style lang="scss">
$td: var(--transition-duration);

.modal.show {
  transform: inherit;
  display: block;
}

.modal.static {
  display: block;
  position: static;
}

button.close {
  cursor: pointer;
}

.modal-enter,
.modal-leave-to {
  .modal-backdrop.show {
    opacity: 0;
  }

  .modal.show {
    .modal-dialog {
      // transform: translateY(-50px);
    }
  }

  .modal.fade {
    .modal-dialog {
      opacity: 0;
    }
  }
}

.modal-dialog {
  transition: all $td ease;
  z-index: 99 !important;
}
</style>