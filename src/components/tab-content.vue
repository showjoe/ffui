<template>
<div class="tab-content">
  <slot name="tab-panes">
    <template v-for="(t,key) in tabs">
      <tab-pane :key="key" :active="key==current" :fade="fade" :id="key+'_tab'">
        <slot :name="key">
          {{t.title}}
        </slot>  
      </tab-pane>
    </template>
  </slot>
</div>
</template>
<script>
export default {
  name:'tab-content',
  props: {
    tabs:{},
    current:{},
    fade:Boolean,
  },
  computed: {
  },
  methods:{
  }
}
</script>