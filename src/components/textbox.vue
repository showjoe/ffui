<template>
<input
:id="tbId"
type="text"
ref="textbox"
:value="value"
@input="update"
:class="[plaintext ? 'form-control-plaintext':'form-control',size ? 'form-control-'+size:'']"
:aria-describedby="computedDescribedBy"
/>
</template>
<script>
export default {
  name:'textbox',
  props: {
    id:{},
    di:{},
    describedBy:{},
    plaintext:Boolean,
    value:{},
    size:String
  },
  mounted(){
    this.$parent.$emit('setInputId',this.tbId)
  },
  computed:{
    tbId(){
      if (this.id) return this.id
      return this.$options.name + this._uid
    },
    computedDescribedBy(){ 
      if(this.$parent.hasHelptext) return this.$parent.helptextId
        return false
    }
  },
  methods:{
    update(e){
      var val = e.target.value
      this.$emit('input', val)
    },
  }
}
</script>