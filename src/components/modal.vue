<template>
  <transition name="modal" :duration="transitionDuration" @enter="enterTransition">
    <div class="modal-container" v-if="show" :style="customCssProps">
      <div ref="modal" :class="['modal',{'static':inline,fade}]" @click.stop="close('backdrop')" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" :aria-hidden="!show">
        <div ref="modal-dialog" :class="['modal-dialog',size ? 'modal-'+size:'', {'modal-dialog-centered':centered,'modal-dialog-scrollable':scrollable}]" role="document" @click.stop="">
          <div ref="content" class="modal-content">
            <slot name="header">
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
      <div ref="backdrop" v-if="!inline" :class="['modal-backdrop show',{'static':inline,fade}]"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'modal',
  props: {
    title: {
      default: '',
    },
    head: Boolean,
    body: {
      type: Boolean,
      default: true,
    },
    foot: Boolean,
    show: Boolean,
    inline: Boolean,
    fade: Boolean,
    centered: Boolean,
    size: String,
    scrollable: Boolean,
    backdropInactive: Boolean,
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
  mounted() {
    if (this.showing) document.body.classList.add('modal-open')
  },
  watch: {
    showing() {
      if (this.showing) document.body.classList.add('modal-open')
    }
  },
  methods: {
    close(target) {
      if (this.backdropInactive && target == 'backdrop') return false
      document.body.classList.remove('modal-open')
      this.$emit("close");
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
      if (this.sourceCoords) {
        this.$refs.modal.classList.add('show')
        var co = this.getInvertedTranslation(this.sourceCoords,this.$refs['content'].getBoundingClientRect())
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
        if (self.showing) document.body.classList.add('modal-open')
      });
    },

  }
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

.modal-enter-active,
.modal-leave-active {
  .modal.show {
    .modal-backdrop {}

    .modal-dialog {
      transition: all $td ease;
    }
  }
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
</style>