<script>
// import {colours} from '../helpers/btn-classes.js'
export default {
  name:'btn-group',
  props: {
    btnClass: {
      type: String,
      default: 'primary'
    },
    outline:{
      type: Boolean,
      default:true,
    },
    justified:Boolean,
    di:{
      type: Object,
    },
    value: {
      default: false
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    vertical:{
      type: Boolean,
      default:false
    }
  },
  render (h) {
    /* tag could be one of: button / a / label / div */
    var self =this
    var tag = 'div';
    var children = [];
    var propObj = {
      props:this.$options.props,
      class:this.classObj,
    }
    if(this.di&&this.di.lookup){
      this.di.lookup.items.map((lui)=>{
        var value = lui.value
        if(this.di.type == 'integer') value = parseInt(value)
        var btnProps = {
          class:[
          {'w-100':this.justified},
          ],
          domProps:{innerHTML:lui.label},
          props:{value:self.value,trueValue:value,falseValue:null, btnClass:this.btnClass},
          on:{input:self.updateValue}
        }
        children.push(h('btn',btnProps))
      })
    }
    children.push(this.$slots.default)
    return h(tag, propObj, children)
  },
  computed: {
    classObj () {
      var classObj = [
      this.vertical ? 'btn-group-vertical':'btn-group',
      {'d-flex':this.justified},
      ];
      return classObj
    }
  },
  methods: {
    updateValue(val){
      this.$emit('input',val)
    }
  }
}
</script>