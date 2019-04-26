<template>
  <transition name="modal" :duration="transitionDuration" @enter="enterTransition" @after-enter="afterEnterTransition" @before-leave="beforeLeaveTransition" @leave="leaveTransition">
    <div class="modal-container" v-if="show" :style="customCssProps">
      <div ref="modal" :class="['modal show',{'static':inline,fade}]" @click.stop="close('backdrop')" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" :aria-hidden="!show">
        <div :class="['modal-dialog',size ? 'modal-'+size:'', {'modal-dialog-centered':centered}]" role="document" @click.stop="">
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
    backdropInactive: Boolean,
    sourceCoords: DOMRect,
    transitionDuration: {
      default: 150
    }
  },
  computed: {
    customCssProps() {
      var css = { '--transition-duration': this.transitionDuration / 1000 + 's' }
      if(this.sourceCoords){
        css['--source-x'] = this.sourceCoords.x
        css['--source-y'] = this.sourceCoords.y
        css['--source-width'] = this.sourceCoords.width
        css['--source-height'] = this.sourceCoords.height
      }
      if(this.sourceCoords&&this.$refs.content){
        css['--target-width'] = this.$refs.content.width
      }
      return css
    }
  },
  data() {
    return {
      showing: false,
      dBlock: false
    }
  },
  methods: {
    close(target) {
      if (this.backdropInactive && target == 'backdrop') return false
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
    enterTransition() {
      this.dBlock = true
    },
    afterEnterTransition() {
      document.body.classList.add("modal-open")
      this.$emit("showing");
      this.showing = true
    },
    beforeLeaveTransition() {
      document.body.classList.remove("modal-open")
    },
    leaveTransition() {
      this.dBlock = false
    },
  }
}
</script>
<style lang="scss">
$duration: var(--transition-duration);

.modal.show {
  display: block;

  .modal-dialog {
    transform: inherit;
  }
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
  transition: opacity calc($duration * 2) linear;

  .modal.fade,
  .modal-backdrop {
    transition: opacity $duration linear;
  }

  .modal-dialog {
    transition: transform $duration ease-in;
  }
}

.modal-enter,
.modal-leave-to,
.modal-leave-active {

  .modal,
  .modal-backdrop {
    opacity: 0;
  }

  .modal.show .modal-dialog {
    transform: translate(-25%,-25%) scale(0.2);
  }

}
</style>