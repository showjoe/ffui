<template>
  <div :class="['btn-group dropleft',{ 'w-100': this.justified }]">
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" :aria-expanded="show" @click="toggleDropdown">
      Action
    </button>
    <div :class="['dropdown-menu',{'show':show}]">
      <a v-for="item in items" :key="item" :class="['dropdown-item',{'active':getValue(item) == value}]" v-html="getLabel(item)" @click="selectItem(item)" :value="getValue(item)"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dropdown',
  props: {
    items: {

    },
    label: {},
    labelName: {
      default: 'label'
    },
    value: {
      default: false
    },
    valueName: {
      default: 'value'
    },
    dropUp: {},
    size: {},
    justified: {},
  },
  data () {
    return {
      show:false
    }
  },
  // render(h) {
  // var self = this
  // var children = []
  // var dropdownBtn = h('btn', {
  //   ref: 'dropdown-toggle',
  //   attrs: { 'data-toggle': 'dropdown' },
  //   class: [
  //     'dropdown-toggle',
  //     { 'w-100': this.justified },
  //     { 'btn-sm': this.size == "sm" },
  //   ],
  //   props: { btnClass: 'secondary' }
  // }, [this.labelText])
  // children.push(dropdownBtn)
  // if (this.$slots.default) {
  //   children.push(this.$slots.default)
  // }
  // var dropdownItems = []
  // dropdownItems.push(this.$slots.prepend_list)
  // if (this.items) dropdownItems.push(
  //   this.items.map((item) => {
  //     if (_.isObject(item)) {
  //       var label = item[this.labelName]
  //       var value = item[this.valueName]
  //     } else {
  //       label = item
  //       value = item
  //     }
  //     return h('a', {
  //       class: [
  //         'dropdown-item',
  //         this.value == value ? 'active' : ''
  //       ],
  //       domProps: {
  //         innerHTML: label
  //       },
  //       attrs: { 'data-value': value },
  //       on: { click: self.selectItem }
  //     })
  //   })
  // )
  // dropdownItems.push(this.$slots.list)
  // var dropdownMenu = h('div', { class: 'dropdown-menu' }, dropdownItems)
  // children.push(dropdownMenu)

  // return h('div', {
  //   class: [
  //     'btn-group',
  //     { 'w-100': this.justified },
  //     this.dropUp ? 'dropup' : 'dropdown'
  //   ]
  // }, children)
  // },
  mounted() {
    // $(this.dropdownBtn).dropdown();
  },
  computed: {

  },
  methods: {
    getLabel(item) {
      return item[this.labelName]
    },
    getValue(item) {
      return item[this.valueName]
    },
    selectItem(item) {
      // var value = $(event.target).data('value')
      this.$emit('input', item[this.valueName])
      this.show = false

    },
    toggleDropdown() {
      this.show = !this.show
      // $(this.dropdownBtn).dropdown('toggle')

    }
  }
}
</script>
<style>
  a.dropdown-item:hover {
    text-decoration: none;
    cursor:pointer;
  }
</style>