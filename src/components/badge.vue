<script>
export default {
  name: 'badge',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    link:{},
    pill:Boolean,
    isRouterLink:Boolean,
    to:{}
  },
  render(h){
    var tag = this.link ? 'a' : this.isRouterLink ? 'router-link' : 'div'
    return h(tag,{class:this.badgeClass,props:{to:this.to},domProps:{href:this.link}},this.$slots.default)
  },
  computed: {
    badgeClass() {
      var classes = ['badge']
      if(this.pill) classes.push('badge-pill')
      classes.push('badge-' + this.type)
      return classes
    }
  },
}
</script>
default<!-- badge badge-primary -->
pill <!-- badge badge-pill badge-primary -->
link