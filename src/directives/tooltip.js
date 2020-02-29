import Vue from 'vue'
import tooltipComponent from '../components/tooltip'
var tooltipClass = Vue.extend(tooltipComponent)

export default {
  inserted: function(el, binding) {
    var instance = new tooltipClass({
      propsData: {
        target: el,
        ...binding.value
      }
    })
    instance.$mount();
    el.parentNode.appendChild(instance.$el);
  }
}