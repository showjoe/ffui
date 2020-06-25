<template>
  <div :class="[typeClass,positionClass,{ 'w-100': this.justified }]" role="group">
    <slot name="btn" :toggle-dropdown="toggleDropdown" :chosen-label="chosenLabel" :show="show">
      <btn ref="trigger" :id="ddId" :btnClass="btnClass" :outline="btnOutline" :class="{'w-100': this.justified, 'dropdown-toggle':btnCaret&&!btnSplit}" role="button" aria-haspopup="true" :aria-expanded="show" :size="btnSize" @click.native="toggleDropdown">
        <slot name="btn-inner" :chosen-label="chosenLabel"></slot>
        <span v-if="!this.value" v-text="btnLabel"></span>
        <span v-else v-text="chosenLabel"></span>
      </btn>
    </slot>
    <btn v-if="btnSplit" :btnClass="btnClass" :outline="btnOutline" role="button" class="dropdown-toggle dropdown-toggle-split" @click.native="toggleDropdown"></btn>
    <slot></slot>
    <slot name="dropdown" :show="show" :toggle-dropdown="toggleDropdown" :items="items">
      <div ref="dropdown-menu" :class="['dropdown-menu',{'show':show}]" :aria-labelledby="ddId">
        <button :id="ddId+'_null'" :class="['dropdown-item',{disabled,readonly}]" v-if="nullOption" @click="selectItem({value:null})">
          <slot name="nullOption"> --- </slot>
        </button>
        <template v-if="group">
          <template v-for="(item_group,group_name) in items">
            <h6 class="dropdown-header" :key="group_name+'-header'">{{group_name}}</h6>
            <template v-for="item in item_group">
              <slot name="list" :item="item">
                <button :id="ddId+'_'+item.value" :key="item.value" :class="['dropdown-item',{'active':getValue(item) == value},{disabled,readonly}]" @click="selectItem(item)" :value="getValue(item)">
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
            <slot name="list" :item="item">
              <button :id="ddId+'_'+item.value" :key="item.value" :class="['dropdown-item',{'active':getValue(item) == value}]" @click="selectItem(item)" :value="getValue(item)">
                <slot name="list-item-prepend" :item="item"></slot>
                <span>{{getLabel(item)}}</span>
                <slot name="list-item-append" :item="item"></slot>
              </button>
            </slot>
          </template>
        </template>
      </div>
    </slot>
  </div>
</template>
<script>
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
export default {
  name: 'dropdown',
  props: {
    id: {},
    di: {},
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
    disabled: Boolean,
    readonly: Boolean
  },
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.popper = this.popperInstance()
  },
  updated() {
    this.popper = this.popperInstance()
  },
  computed: {
    ddId() {
      if (this.id) return this.id
      if (this.di) return this.di.name
      return this._uid
    },
    positionClass() {
      if (this.position) return 'drop' + this.position
      return false
    },
    typeClass() {
      var typeClassArr = []
      typeClassArr.push('btn-group dropdown')
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
      if (this.disabled || this.readonly) return false
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
      this.show = !this.show
    },
    popperInstance() {
      if (this.$refs && this.$refs.trigger && this.$refs.trigger.$el && this.$refs['dropdown-menu'] && this.$refs['dropdown-menu'].$el) {
        console.log('popper') 
        return createPopper(this.$refs.trigger.$el, this.$refs['dropdown-menu'].$el, {
          placement: 'bottom',
          modifiers: [flip, preventOverflow,
            {
              name: 'offset',
              options: {
                offset: [0, 4],
              },
            },
            {
              name: 'arrow',
              options: {
                padding: 5, // 5px from the edges of the popper
              },
            },
          ],
        });
      }

    },
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