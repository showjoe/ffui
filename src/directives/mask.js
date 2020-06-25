
export default {
  inserted: function(el, binding) {
    const Inputmask =  require('inputmask')
    var mask = binding.value
    new Inputmask(mask).mask(el);
  }
}