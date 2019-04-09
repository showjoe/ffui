<script>
// import {colours} from '../helpers/btn-classes.js'
export default {
  name: 'btn',
  props: {
    id: {
      type: String,
      default: null
    },
    block: Boolean,
    btnClass: {
      type: String,
      default: 'primary',
    },
    outline: {
      type: Boolean,
      default: true,
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
  render(h) {
    /* tag could be one of: button / a / label / div */
    var tag = 'button';
    var children = [];
    var propObj = {
      class: this.classObj,
      domProps: {
        type: 'button',
        disabled: this.disabled,
        readonly: this.readonly
      },
      on: { click: this.btnClick }
    }
    children.push(this.$slots.default)
    return h(tag, propObj, children)
  },
  created() {},
  computed: {
    classObj() {
      var outline = this.outline ? 'outline-' : ''
      var btnTheme = 'btn-' + outline + this.btnClass
      var classObj = [
        'btn',
        this.size ? 'btn-' + this.size : '',
        btnTheme,
        {
          'btn-block': this.block,
          active: this.active,
          disabled: this.disabled,
          readonly: this.readonly
        }
      ];
      return classObj
    },
    active() { return this.value == this.trueValue }
  },
  methods: {
    btnClick() {
      var value = this.falseValue
      if (this.type === 'checkbox') value = this.active ? this.falseValue : this.trueValue
      if (this.type === 'radio') {
        if (this.value) {
          if (this.value == this.trueValue) {
            value = this.falseValue
          } else {
            value = this.trueValue
          }
        } else {
          value = this.trueValue
        }
      }
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss">
.btn.disabled,
.btn[disabled] {
  &.active {
    background-color: rgba(112, 127, 143, 0.4);
  }
}
</style>