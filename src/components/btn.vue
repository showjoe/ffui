<script>
// import {colours} from '../helpers/btn-classes.js'
export default {
  name:'btn',

  props: {
    id: {
      type: String,
      default: null
    },
    block:Boolean,
    btnClass: {
      type: String,
      default: 'primary',
    },
    outline:{
      type: Boolean,
      default:true,
    },
    value: {
      default: false
    },
    type: {
      type: String,
      default: 'checkbox'
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },

  },
  render (h) {
    /* tag could be one of: button / a / label / div */
    var tag = 'button';
    var children = [];
    var propObj = {
      class:this.classObj,
      on:{ click: this.btnClick }
    }
    if(this.type == 'checkbox'||this.type == 'radio'){
      // tag = 'label';
      // var inputProps = {
      //   domProps:{type:this.type}
      // }
      // var input = h('input',inputProps)
      // children.push(input)
    }
    children.push(this.$slots.default)
    return h(tag, propObj, children)
  },
  created () {
    const parent = this.$parent
    if (parent && parent._btnGroup) {
      this._inGroup = true
    }
  },
  computed: {
    classObj () {
      var outline = this.outline ? 'outline-':''
      var btnTheme = 'btn-' + outline + this.btnClass
      var classObj = [
      'btn',
      this.size? 'btn-'+this.size:'',
      btnTheme,
      {
        'btn-block':this.block,
        active:this.active,
        disabled:this.disabled,
        readonly:this.readonly
      }];
      return classObj
    },
    active () { return this.value === this.trueValue }
  },
  methods: {
    btnClick () {
      var value = this.falseValue
      if (this.type === 'checkbox') value = this.active ? this.falseValue : this.trueValue
      if (this.type === 'radio') {
        if (this.value) {
          if (this.value === this.trueValue) {
            value = this.falseValue
          } else {
            value = this.trueValue
          }
        } else {
          value = this.trueValue
        }
      }
      if (this._inGroup) this.$parent.val = value

      this.$emit('input', value)
    }
  }
}
</script>