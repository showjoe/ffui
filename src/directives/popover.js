import Vue from 'vue'
import popoverComponent from '../components/popover'
var popoverClass = Vue.extend(popoverComponent)

export default {
  inserted: function(el, binding) {
    var instance = new popoverClass({
      propsData: {
        target: el,
        ...binding.value
      }
    })
    instance.$mount();
    el.parentNode.appendChild(instance.$el);
  }
}