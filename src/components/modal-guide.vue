<template>
  <div>
    <modal arrow ref="modal" :show="show" :target="currentStep.target" position="auto" :head="false" size="sm" key="modal-guide" backdrop-hidden>
      <slot :name="'step'+(index+1)">
        <div v-html="currentStep.html"></div>
      </slot>
      <template #footer>
        <div class="modal-footer p-1">
          <btn v-if="nextStepAvailable" size="sm" class="m-0" @click.native="nextStep">
            <fa icon="arrow-circle-right" />
            Next
          </btn>
          <btn v-else size="sm" class="m-0" @click.native="$emit('close')">
            <fa icon="check" />
            Close
          </btn>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
export default {
  name: 'modal-guide',
  props: {
    index: {},
    guide: {},
    show: Boolean
  },
  computed: {
    currentStep() {
      return this.guide.steps[this.index]
    },
    nextStepAvailable() {
      return this.guide.steps.length - 1 > this.index
    }
  },
  watch: {
    show() {
      this.scrollToModal()
    }
  },
  methods: {
    nextStep() {
      if (this.nextStepAvailable) {
        this.$emit('next-step')
        this.scrollToModal()
      }
    },
    close() {
      this.$emit('close')
    },
    scrollToModal() {
      var self = this;
      this.$nextTick(() => {
        var el = document.getElementById(self.currentStep.target)
        el.scrollIntoView(false);
      });
    }
  },
}
</script>