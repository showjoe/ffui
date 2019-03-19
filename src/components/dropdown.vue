<template>
  <div :class="[typeClass,positionClass,{ 'w-100': this.justified }]">
    <btn :btnClass="btnClass" :outline="btnOutline" :class="{'w-100': this.justified, 'dropdown-toggle':btnCaret&&!btnSplit}" aria-haspopup="true" :aria-expanded="show" @click.native="toggleDropdown" :size="btnSize">
      <span v-if="!this.value" v-text="btnLabel"></span>
      <span v-else v-text="btnLabelChosen"></span>
      <slot name="btn"></slot>
    </btn>
    <btn v-if="btnSplit" @click.native="toggleDropdown"  :btnClass="btnClass" :outline="btnOutline" class="dropdown-toggle dropdown-toggle-split"></btn>
    <slot></slot>  
    <div :class="['dropdown-menu',{'show':show}]">
      <slot name="list"></slot>
      <a class="dropdown-item" v-if="nullOption" @click="selectItem({value:null})" ><slot name="nullOption"> --- </slot></a>
      <a v-for="item in items" :key="item.value" :class="['dropdown-item',{'active':getValue(item) == value}]" v-html="getLabel(item)" @click="selectItem(item)" :value="getValue(item)"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'dropdown',
  props: {
    items: {},
    label: {},
    labelName: {
      type:String,
      default: 'label'
    },
    value: {
      default: false
    },
    valueName: {
      type:String,
      default: 'value'
    },
    nullOption:Boolean,
    position: {},
    btnLabel:{
      default:'Choose..'
    },
    btnSplit: Boolean,
    btnCaret: {
      type:Boolean,
      default:true
    },
    btnClass: {},
    btnOutline: {},
    btnSize: {},
    justified: Boolean,
  },
  data () {
    return {
      show:false,
    }
  },
  computed: {
    positionClass(){
      if(this.position) return 'drop'+this.position
      return false
    },
    typeClass(){
      var typeClassArr = []
      if(this.btnSplit) typeClassArr.push('btn-group')
        else typeClassArr.push('dropdown')
      return typeClassArr
    },
    btnLabelChosen(){
      if(!this.value) return this.btnLabel
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
      return this.items.find((item)=>{
        return item[self.valueName] == value
      })
    },
    toggleDropdown() {
      this.show = !this.show
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