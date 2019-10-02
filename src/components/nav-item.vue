<template>
  <a :class="['nav-item nav-link',{active,disabled}]" role="tab" :href="'#'+link">
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: 'nav-item',
  props: {
    active: Boolean,
    link: {},
    disabled: Boolean,
  },
  computed: {},
  methods: {}
}
</script>