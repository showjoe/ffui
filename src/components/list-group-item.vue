<script>
export default {
  name: 'list-group-item',
  props: {
    value: {},
    trueValue: {
      default: true,
    },
    falseValue: {
      default: false,
    },
    tag: {
      type: String,
      default: 'div'
    },
    disabled: Boolean,
    readonly: Boolean,
    isLink: Boolean,
    href: {},
    isRouterLink: Boolean,
    routerLinkActive: Boolean,
    routerLinkExact: Boolean,
    to: {}
  },
  render(h) {
    var tag = this.tag
    var self = this
    var propsObject = {
      class: [
        "list-group-item",
        { "disabled": this.disabled },
        { "list-group-item-action": !this.disabled && !this.readonly && this.isLink },
        { "active": this.active || this.isRouterLink && this.routerLinkActive || this.isRouterLink && this.routerLinkExact && this.routerLinkActive },
      ],

    }
    if (!this.disabled) {

      if (this.isLink) {
        if (this.href) {
          tag = 'a'
          propsObject.domProps = { href: this.href }
        } else {
          tag = 'button'
        }
        propsObject.on = { click: (e) => { self.$emit('click', e) } }
      }
      if (this.isRouterLink && this.to) {
        tag = 'button'
        propsObject.on = {
          click: () => { self.$router.push(self.to) },
        }
      } else {
        propsObject.on = { click: () => { self.toggleListGroupItem() } }
      }
    }
    return h(tag, propsObject, this.$slots.default)
  },
  methods: {
    toggleListGroupItem() {
      if (this.disabled || this.readonly) return false
      var value = this.falseValue
      if (this.value == this.trueValue) value = this.falseValue
      else value = this.trueValue

      if (this._inGroup) this.$parent.val = value
      this.$emit('input', value)
    }
  },
  computed: {
    active() { return this.value == this.trueValue }
  },
}
</script>