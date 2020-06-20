import Inputmask from 'inputmask'


Inputmask.extendAliases({
  'mysqldate': {
    regex:"([0-9]{4})-(0[1-9]|1[012]|00)-(0[1-9]|[12][0-9]|3[01]|00)",
  },
  'ffdate': {
    regex:"(0[1-9]|[12][0-9]|3[01]|--)/(0[1-9]|1[012]|--)/([0-9]{4})",
  },
  'ffdate_no_unknowns': {
    regex:"(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/([0-9]{4})",
  },
  'ffdate_ja': {
    regex: '([0-9]{4})年(0[1-9]|1[012]|--)月(0[1-9]|[12][0-9]|3[01]|--)日',
  },
  'ffdate_ja_no_unknowns': {
    regex: '([0-9]{4})年(0[1-9]|1[012])月(0[1-9]|[12][0-9]|3[01])日',
  }
});

export default {
  inserted: function(el, binding) {
    var mask = binding.value
    console.log(binding) 
    new Inputmask(mask).mask(el);
  }
}