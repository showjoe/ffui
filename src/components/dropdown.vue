<template>
  <div :class="[typeClass,positionClass,{ 'w-100': this.justified }]">
    <btn :btnClass="btnClass" :outline="btnOutline" :class="{'w-100': this.justified, 'dropdown-toggle':btnCaret&&!btnSplit}" aria-haspopup="true" :aria-expanded="show" :size="btnSize" data-toggle="dropdown">
      <slot name="btn" :chosen-label="chosenLabel"></slot>
      <span v-if="!this.value" v-text="btnLabel"></span>
      <span v-else v-text="chosenLabel"></span>
    </btn>
    <btn v-if="btnSplit" :btnClass="btnClass" :outline="btnOutline" class="dropdown-toggle dropdown-toggle-split" data-toggle="dropdown"></btn>
    <slot></slot>
    <div :class="['dropdown-menu',{'show':show}]">
      <button class="dropdown-item" v-if="nullOption" @click="selectItem({value:null})">
        <slot name="nullOption"> --- </slot>
      </button>
      <template v-if="group">
        <template v-for="(item_group,group_name) in items">
          <h6 class="dropdown-header" :key="group_name+'-header'">{{group_name}}</h6>
          <template v-for="item in item_group">
            <slot name="list" :item="item">
              <button :key="item.value" :class="['dropdown-item',{'active':getValue(item) == value}]" @click="selectItem(item)" :value="getValue(item)">
                <slot name="list-item-prepend" :item="item"></slot>
                <span>{{getLabel(item)}}</span>
                <slot name="list-item-append" :item="item"></slot>
              </button>
            </slot>
          </template>
          <div class="dropdown-divider" :key="group_name+'-footer'"></div>
        </template>
      </template>
      <template v-if="!group">
        <template v-for="item in items">
          <slot name="list" :item="item" >
            <button :key="item.value" :class="['dropdown-item',{'active':getValue(item) == value}]" @click="selectItem(item)" :value="getValue(item)">
              <slot name="list-item-prepend" :item="item"></slot>
              <span>{{getLabel(item)}}</span>
              <slot name="list-item-append" :item="item"></slot>
            </button>
          </slot>
        </template>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dropdown',
  props: {
    group: {},
    items: {},
    label: {},
    labelName: {
      type: String,
      default: 'label'
    },
    value: {
      default: false
    },
    valueName: {
      type: String,
      default: 'value'
    },
    nullOption: Boolean,
    position: {},
    btnLabel: {
      default: 'Choose..'
    },
    btnSplit: Boolean,
    btnCaret: {
      type: Boolean,
      default: true
    },
    btnClass: {},
    btnOutline: {},
    btnSize: {},
    justified: Boolean,
  },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    import('bootstrap')
  },
  computed: {
    positionClass() {
      if (this.position) return 'drop' + this.position
      return false
    },
    typeClass() {
      var typeClassArr = []
      if (this.btnSplit) typeClassArr.push('btn-group')
      else typeClassArr.push('dropdown')
      return typeClassArr
    },
    chosenLabel() {
      if (!this.value) return this.btnLabel
      else {
        return this.findItemByValue(this.value)[this.labelName]
      }
    }
  },
  methods: {
    getLabel(item) {
      return item[this.labelName]
    },
    getValue(item) {
      return item[this.valueName]
    },
    selectItem(item) {
      this.$emit('input', item[this.valueName])
      this.show = false
    },
    findItemByValue(value) {
      var self = this;
      var items = this.items
      if (this.group) {
        var keys = Object.keys(this.items)
        for (var i = keys.length - 1; i >= 0; i--) {
          var test = items[keys[i]].find((item) => {
            return item[self.valueName] == value
          })
          if (test) break;
        }
        return test
      } else {
        return this.items.find((item) => { return item[self.valueName] == value })
      }


    },
    toggleDropdown() {
      // this.show = !this.show
    }
  }
}
</script>
<style>
.dropdown-menu {
  max-height: 50vh;
  overflow-y: auto;
}

a.dropdown-item:hover {
  text-decoration: none;
  cursor: pointer;
}
</style>