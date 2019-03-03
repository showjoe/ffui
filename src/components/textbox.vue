<template>
<input
:id="name"
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
    di:{},
    size:String
  },
  computed: {
    name () {
      if(this.di) return this.di.name
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