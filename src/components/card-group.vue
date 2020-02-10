<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'card-group',
  props: {
    deck: Boolean,
    columns: Boolean,
  },
  computed:{
    classes(){
      if(this.deck) return 'card-deck'
      if(this.columns) return 'card-columns'
      return 'card-group'
    }
  }
}
</script>