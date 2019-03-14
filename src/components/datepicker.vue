<template>
  <div class="input-group date" ref="datepicker" :id="_uid">
    <div class="input-group-append" v-if="$slots.prepend||$scopedSlots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input :id="id" :disabled="disabled" ref="datepickerinput" type="text" :class="['form-control datetimepicker-input',size?'form-control-'+size:'']" :value="val" @change="inputChange" v-mask="{mask, greedy: true, placeholder }" />
    <div class="input-group-append" :data-target="'#'+_uid" data-toggle="datetimepicker">
      <div class="input-group-text"><i :class="['fasvg', {'fa-calendar':type=='date'||type=='datetime', 'fa-clock':type=='time'}]" /></div>
    </div>
    <div class="input-group-append" v-if="$slots.append||$scopedSlots.append">
      <slot name="append"></slot>
      }
    </div>
  </div>
</template>
<script>
import date_mixin from '../mixins/date'
const $ = require('jquery')
const moment = require('moment')
export default {
  name: 'datepicker',
  mixins: [date_mixin],
  props: {
    di: Object,
    future: Boolean,
    minDate: {
      default: false
    },
    maxDate: {
      default: false
    },
    mask: {
      type: String,
      default: function() {
        var props = this.$options.propsData
        if(props.mask) return props.mask
        if(props.type && props.type=='time') return '99:99'
        if(props.type && props.type=='datetime') return '(99|--)/(99|--)/9999 99:99'
        return '(99|--)/(99|--)/9999'
      }
    },
    placeholder: {
      type: String,
      default: function() {
        var props = this.$options.propsData
        if(props.type && props.type=='time') return 'HH:MM'
        if(props.type && props.type=='datetime') return 'DD/MM/YYYY HH:MM'
        return 'DD/MM/YYYY'
      }
    },
    size: String,
    type: {
      type: String,
      default: 'date'
    },
    value: {},
    viewMode: {
      type: String,
      default: 'days'
    },
    disabled: {
      default: false
    }
  },
  formats: {
    datetime: 'DD/MM/YYYY H:mm',
    date: 'DD/MM/YYYY',
    time: 'HH:mm'
  },
  datetimePickerConfig: {
    debug: true,
    keepInvalid: true,
    locale: 'en',
    // viewMode: this.viewMode,
    useCurrent: false,
    icons: {
      time: 'fasvg fa-clock',
      date: 'fasvg fa-calendar',
      up: 'fasvg fa-arrow-up',
      down: 'fasvg fa-arrow-down',
      previous: 'fasvg fa-chevron-left',
      next: 'fasvg fa-chevron-right',
      today: 'fasvg fa-calendar-check',
      clear: 'fasvg fa-trash-alt',
      close: 'fasvg fa-times-circle'
    }
  },
  data() {
    return {
      val: null
    }
  },

  mounted() {
    this.$nextTick(()=>{
      this.datepicker = $(this.$refs.datepicker)
      this.createDatePicker()

    })
  },
  destroyed() {
    this.destroyDatePicker()
  },
  watch: {
    value(value) {
      // value = this.formatDateForDisplay(value)
      if (value) this.setDate(this.value)
    },
    minDate(value) {
      // value = this.formatDateForDisplay(value)
      if (value) this.datepicker.datetimepicker('minDate', value);
    },
    maxDate(value) {
      // value = this.formatDateForDisplay(value)
      if (value) this.datepicker.datetimepicker('maxDate', value);
    }
  },
  computed: {
    id() {
      if (this.di) return this.di.name
        return false
    },
  },
  methods: {
    createDatePicker() {
      var config = $.extend({}, this.$options.datetimePickerConfig)
      // var config = _.clone(this.$options.datetimePickerConfig)
      this.format = this.$options.formats[this.type];
      config.placeholder = this.placeholder
      config.format = this.format
      config.viewMode = this.viewMode
      config = this.setupMinMaxDates(config)
      this.datepicker.datetimepicker(config)
      if (this.type == 'time') {
        this.val = this.value
        this.datepicker.datetimepicker()
      } else {
        this.val = this.formatDateForDisplay(this.value)
        this.datepicker.datetimepicker(config)
      }
      this.setDate(this.val)
      this.datepicker.on('change.datetimepicker', this.datePickerChange);
    },
    destroyDatePicker() {
      $(this.$refs.datepicker).datetimepicker('destroy');
    },
    setupMinMaxDates(config) {
      if (this.type == 'date' || this.type == 'datetime') {
        var minDate = this.minDate
        var maxDate = this.maxDate
        if (minDate == 'today') minDate = moment()
        if (maxDate == 'today' || !this.future) maxDate = moment()
        if (minDate) { config.minDate = minDate }
        if (maxDate) { config.maxDate = maxDate }
      }

      return config
    },
    datePickerChange(e) {
      if (this.disabled) return false
      // if(!e.date.isValid()) 
      var date = e.date
      if (date) {
        this.updateDate(date)
      } else {
        // this.datepicker.datetimepicker('clear')
      }
    },
    inputChange(e) {
      if (this.disabled) return false
      this.updateDate(e.target.value)
    },
    setDate(value) {
      if (value) {
        this.$emit('input', value)
        this.val = this.formatDateForDisplay(value)
        this.datepicker.datetimepicker('date', this.val);
      }
    },
    updateDate(value) {
      if (this.disabled) return false
      if (this.type == 'date' || this.type == 'datetime') {
        if (value) {
          if (moment.isMoment(value)) value = value.format(this.format)
          value = this.formatDateForStorage(value)
        }
        this.val = this.formatDateForDisplay(value)
      }
      if (this.type == 'time') {
        if (value) {
          if (moment.isMoment(value)) value = value.format("HH:mm")
          this.val = value;
          this.datepicker.datetimepicker('date', value);
        }
      }
      this.$emit('input', value)
    }
  }
}
</script>
<style lang="scss">
.fasvg {
  display: inline-block;
  width: 18px;
  height: 18px;
  max-width: 32px;
  max-height: 32px;
  background-repeat: no-repeat !important;
  background-position: center center !important;
}

.fasvg.fa-arrow-up {
  background-image: url("../assets/icons/arrow-up.svg") !important;
}

.fasvg.fa-arrow-down {
  background-image: url("../assets/icons/arrow-down.svg") !important;
}

.fasvg.fa-calendar {
  background-image: url("../assets/icons/calendar-alt.svg") !important;
}

.fasvg.fa-clock {
  background-image: url("../assets/icons/clock.svg") !important;
}

.fasvg.fa-chevron-left {
  background-image: url("../assets/icons/chevron-left.svg") !important;
}

.fasvg.fa-chevron-right {
  background-image: url("../assets/icons/chevron-right.svg") !important;
}
</style>