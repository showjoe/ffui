<template>
  <a :class="['nav-item nav-link',{active,disabled,invalid}]" role="tab" :href="'#'+link">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'nav-item',
  props: {
    active: Boolean,
    link: {},
    invalid: Boolean,
    disabled: Boolean,
  },
  computed: {},
  methods: {}
}
</script>
