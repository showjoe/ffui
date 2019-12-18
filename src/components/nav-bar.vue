<template>
  <ul :class="['nav',{
      'nav-pills':pills,
      'nav-tabs':tabs,
      'nav-fill':fill,
      'nav-justified':justify,
      'justify-content-center':align=='center',
      'justify-content-end':align=='right',
      'flex-column':vertical
    }]" id="myTab" role="tablist">
    <slot name="nav-bar">
      <template v-for="(l,key) in links">
        <slot name="nav-item" :link="l" :link-key="key">
          <nav-item :id="nbId+'_'+key" :key="key" :link="key" :active="key==current" :invalid="l.invalid" @click.native="clickLink(key)" :disabled="l.disabled">
            <slot name="nav-item-inner" :link="l" :link-name="key">
              {{l.title}}
            </slot>
          </nav-item>
        </slot>
      </template>
      <slot></slot>
    </slot>
  </ul>
</template>
<script>
export default {
  name: 'nav-bar',
  props: {
    id: {},
    align: {},
    current: {},
    links: {},
    tabs: Boolean,
    pills: Boolean,
    fill: Boolean,
    justify: Boolean,
    vertical: Boolean,
  },
  computed: {
    nbId(){
      if(this.id) return this.id
      return this._uid
    },
  },
  methods: {
    clickLink(key) {
      if (this.links[key].disabled) return false
      this.$emit('change', key)
    }
  }
}
</script>