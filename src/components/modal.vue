<template>
  <div class="modal-container">
    <transition @enter="enterTransition" @after-enter="afterEnterTransition" @before-leave="beforeLeaveTransition" @leave="leaveTransition">
      <div v-if="show" ref="modal" :class="['modal',{'static show':inline,fade}]" @click.stop="close" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" :aria-hidden="!show">
        <div :class="['modal-dialog',size ? 'modal-'+size:'', {'modal-dialog-centered':centered}]" role="document" @click.stop="">
          <div class="modal-content">
            <slot name="header">
              <div class="modal-header">
                <slot name="header-inner">
                  <h5 class="modal-title" id="exampleModalLabel" v-html="title"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close">
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
                  <btn btn-class="secondary" @click.native="close">Close</btn>
                  <btn @click.native="save">Save changes</btn>
                </slot>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </transition>
    <div ref="backdrop" v-if="!inline" :class="['modal-backdrop d-none',{'static':inline,fade}]"></div>
  </div>
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
  },
  metaInfo() {
    return {
      bodyAttrs: {
        class: this.bodyClass
      }
    }
  },
  computed: {
    bodyClass() {
      return this.show && !this.static ? 'modal-open' : ''
    }
  },
  data() {
    return {
      showing: false,
      dBlock: false
    }
  },
  methods: {
    close() {
      this.$emit("close");
    },
    save() {
      this.$emit("save");
    },
    enterTransition() {
      this.dBlock = true
      if (!this.$refs.backdrop.classList.contains('d-block')) this.$refs.backdrop.classList.toggle("d-block");
      if (!this.$refs.modal.classList.contains('d-block')) this.$refs.modal.classList.toggle("d-block");
    },
    afterEnterTransition() {
      this.$emit("showing");
      this.showing = true
      if (!this.$refs.backdrop.classList.contains('show')) this.$refs.backdrop.classList.toggle("show");
      if (!this.$refs.modal.classList.contains('show')) this.$refs.modal.classList.toggle("show");
    },
    beforeLeaveTransition() {
      if (this.$refs.backdrop.classList.contains('show')) this.$refs.backdrop.classList.toggle("show");
      if (this.$refs.modal.classList.contains('show')) this.$refs.modal.classList.toggle("show");
    },
    leaveTransition() {
      this.dBlock = false
      if (this.$refs.backdrop.classList.contains('d-block')) this.$refs.backdrop.classList.toggle("d-block");
    },
  }
}
</script>
<style lang="scss" scoped>
.modal.static {
  display: block;
  position: static;
}

button.close {
  cursor: pointer;
}

// .modal-enter-active,
// .modal-leave-active {

//   .modal,
//   .modal-backdrop {

//     transition: opacity .5s linear;
//   }
// }

// .modal-enter,
// .modal-leave-to {

//   .modal,
//   .modal-backdrop {
//     opacity: 0;
//   }

// }

/* Transitions */
// .modal-enter-active,
// .modal-leave-active {
//   transition: opacity 1s linear;
// }

// .modal-enter-active .modal,
// .modal-leave-active .modal,
// .modal-enter-active .modal-backdrop,
// .modal-leave-active .modal-backdrop {
//   transition: opacity 1s linear;
// }

// .modal-enter .modal,
// .modal-leave-to .modal,
// .modal-leave-active .modal,
// .modal-enter .modal-backdrop,
// .modal-leave-to .modal-backdrop,
// .modal-leave-active .modal-backdrop {
//   opacity: 0;

// }

// .modal-enter-active .modal-dialog,
// .modal-leave-active .modal-dialog {
//   transition: transform .3s ease-out;
// }

// .modal-enter .modal-dialog,
// .modal-leave-to .modal-dialog,
// .modal-leave-active .modal-dialog {
//   transform: translate(0,-200px);
// }
</style>