<template>
<input
type="text"
ref="textbox"
:value="value"
@input="update"
:class="['form-control',size ? 'form-control-'+size:'']"
/>
</template>
<script>
export default {
  name:'textbox',
  props: {
    value:{},
    size:String
  },
  methods:{
    update(e){
      var val = e.target.value
      this.$emit('input', val)
    },
  }
}
</script>