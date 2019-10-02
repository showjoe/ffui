<template>
<ul 
:class="[
'nav',
{
  'nav-pills':pills,
  'nav-tabs':tabs,
  'nav-fill':fill,
  'nav-justified':justify,
  'justify-content-center':align=='center',
  'justify-content-end':align=='right',
  'flex-column':vertical
}]"
id="myTab" role="tablist">
  <slot name="nav-bar">
    <template v-for="(l,key) in links">
      <nav-item :key="key" :link="key" :active="key==current" @click.native="clickLink(key)" :disabled="l.disabled">{{l.title}}</nav-item>
    </template>
    <slot></slot>
  </slot>
</ul>
</template>
<script>
export default {
  name:'nav-bar',
  props: {
    align:{},
    current:{},
    links: {},
    tabs: Boolean,
    pills: Boolean,
    fill: Boolean,
    justify: Boolean,
    vertical: Boolean,
  },
  computed: {
  },
  methods:{
    clickLink(key){
      if(this.links[key].disabled) return false
      this.$emit('change',key)
    }
  }
}
</script>