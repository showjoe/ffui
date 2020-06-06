<script>
export default {
  name: 'feedback',
  props: {
    message: {},
    type: {},
    tooltip: Boolean
  },
  render(h) {
    var tag = 'div';
    var children = [this.message, this.$slots.default];
    var fbType = this.tooltip ? 'tooltip' : 'feedback'
    var propObj = {
      class: [this.type + '-' + fbType]
    }
    return h(tag, propObj, children)
  },
}
</script>