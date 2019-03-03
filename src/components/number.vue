<template>
<input
:id="name"
type="number"
ref="textbox"
:step="step"
:value="value"
:min="min"
:max="max"
:disabled="disabled"
@input="update"
:class="['form-control',size ? 'form-control-'+size:'']"
/>
</template>
<script>
export default {
  name:'number',
  props: {
    step:{
      type:Number,
      default:1
    },
    min:{
      type:Number,
      default:0
    },
    max:{
      type:Number,
    },
    value:{},
    di:{},
    disabled:Boolean,
    size:String
  },
  computed: {
    name () {
      if(this.di) return this.di.name
        return ''
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