<template>
  <div :class="['input-group','date',{show}]" ref="datepicker" :id="_uid">
    <div class="input-group-append" v-if="$scopedSlots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input :id="id" :disabled="disabled" ref="datepickerinput" type="text" :class="['form-control datetimepicker-input',size?'form-control-'+size:'',{show}]" :value="val" @change="inputChange" v-mask="{mask, greedy: true, placeholder }" />
    <div :class="['datepicker-backdrop',{show}]" @click="togglePicker"></div>
    <transition name="fade">
      <div v-if="show" :class="['calendar',{show}]">
        <header class="calendar-header">
          <div class="mr-auto">
            <div @click="prev" class="prev-button">
              <div class="fasvg fa-chevron-left"></div>
              <i class="hover-circle"></i>
            </div>
          </div>
          <div class="m-auto">
            <span v-if="mode=='days'" @click="showMonths" class="month-button py-2">{{visible_date.format('MMMM YYYY')}}</span>
            <span v-if="mode=='months'" @click="showYears" class="year-button py-2">{{visible_date.format('YYYY')}}</span>
            <span v-if="mode=='years'" @click="showDecades" class="year-button py-2">
              {{visible_date.format('YYYY').substring(0,3) + '0s'}}
            </span>
            <span v-if="mode=='decades'" class="year-button py-2">
              {{visible_date.format('YYYY').substring(0,2) + '00'}}
            </span>
          </div>
          <div class="ml-auto">
            <div @click="next" class="next-button">
              <div class="fasvg fa-chevron-right"></div>
              <i class="hover-circle"></i>
            </div>
          </div>
        </header>
        <div v-if="mode=='days'" class="calendar-body">
          <div class="days-of-week">
            <span v-for="i in 7" :key="'weekdays_'+i" class="day-block" :title="$options.moment.weekdays(i)">{{$options.moment.weekdaysShort(i)}}</span>
          </div>
          <div class="days-of-month">
            <span v-for="n in 42" :key="'days_'+n" @click="clickDate(getCalendarDate('day',n))" :class="getBlockClass('day',n)">
              <span class="date">{{getCalendarDate('day',n).format('D')}}</span>
              <i class="hover-circle"></i>
            </span>
          </div>
        </div>
        <div v-if="mode=='months'" class="months-body">
          <div class="months">
            <span v-for="(m,n) in $options.moment.months()" :key="'month_'+n" @click="setMonth(n)" :class="getBlockClass('month',n)">
              <i class="hover-circle"></i>
              <span class="date">{{m}}</span>
            </span>
          </div>
        </div>
        <div v-if="mode=='years'" class="years-body">
          <div class="years">
            <span v-for="y in getDecade()" :key="'year_'+y" @click="setYear(y)" class="year-block"><i class="hover-circle"></i><span class="date">{{y}}</span></span>
          </div>
        </div>
        <div v-if="mode=='decades'" class="years-body">
          <div class="years">
            <span v-for="d in getCentury()" :key="'decade_'+d" @click="setDecade(d)" class="year-block"><i class="hover-circle"></i><span class="date">{{d}}</span></span>
          </div>
        </div>
        <div class="calendar-footer">Footer</div>
      </div>
    </transition>
    <div :class="['input-group-append',{show}]" :data-target="'#'+_uid" @click="togglePicker">
      <div class="input-group-text"><i :class="['fasvg', {'fa-calendar':type=='date'||type=='datetime', 'fa-clock':type=='time'}]" /></div>
    </div>
    <div class="input-group-append" v-if="$slots.append||$scopedSlots.append">
      <slot name="append"></slot>
    </div>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  name: 'datepicker',
  moment,
  props: {
    model: {
      prop: 'value',
      event: 'input'
    },
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
        if (props.mask) return props.mask
        if (props.type && props.type == 'time') return '99:99'
        if (props.type && props.type == 'datetime') return '(99|--)/(99|--)/9999 99:99'
        return '(99|--)/(99|--)/9999'
      }
    },
    placeholder: {
      type: String,
      default: function() {
        var props = this.$options.propsData
        if (props.type && props.type == 'time') return 'HH:MM'
        if (props.type && props.type == 'datetime') return 'DD/MM/YYYY HH:MM'
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
  data() {
    return {
      show: false,
      mode: this.viewMode,
      val: null,
      date: moment(),
      visible_date: moment(),
    }
  },
  destroyed() {
    this.destroyDatePicker()
  },
  watch: {
    date() {
      if (this.date.isValid()) this.updateDate(this.date.format('YYYY-MM-DD'))
    },
    value() {
      if (this.value) {
        this.date = moment(this.value, "YYYY-MM-DD");
        this.visible_date = this.getSafeMoment(this.value);
        this.val = this.formatDateForDisplay(this.value);
      } else {
        this.visible_date = false
      }
    }
  },
  computed: {
    id() {
      if (this.di) return this.di.name
      return false
    },
    currentMonth() {
      return this.visible_date.clone().month()
    },
    firstDayOfMonth() {
      return this.visible_date.clone().subtract(this.visible_date.date() - 1, 'days')
    },
    calendarEnd() {
      return this.calendarStart.clone().add(41, 'days')
    },
    calendarStart() {
      if (this.firstDayOfMonth.days() > 0) {
        return this.firstDayOfMonth.clone().subtract(this.firstDayOfMonth.days() - 1, 'days')
      } else {
        return this.firstDayOfMonth.clone().subtract(7, 'days')
      }
    },
    parentType() {
      var p = 'months'
      var m = this.mode
      if (m == 'months' || m == 'years' || m == 'decades') p = 'years'
      return p
    },
    today() {
      return moment()
    }
  },
  methods: {
    togglePicker() {
      if (this.value) {
        this.date = moment(this.value, "YYYY-MM-DD")
      }
      this.show = !this.show
      this.mode = this.viewMode
    },
    clickDate(date) {
      if (this.disabled || this.dayIsDisabled(date)) return false
      this.date = date
      this.visible_date = date
    },
    getSafeMoment(date) {
      var d = date.substr(0, 10).split('-');
      var c = this.getCleanDates(d).join('-')
      var m = moment(c, "YYYY-MM-DD")
      return m
    },
    next() {
      var n = 1;
      if (this.mode == 'years') n = 10
      if (this.mode == 'decades') n = 100
      this.visible_date = this.visible_date.clone().add(n, this.parentType)
    },
    prev() {
      var n = 1;
      if (this.mode == 'years') n = 10
      if (this.mode == 'decades') n = 100
      this.visible_date = this.visible_date.clone().subtract(n, this.parentType)
    },
    getCalendarDate(type, n) {
      n = type == 'day' ? n - 1 : n
      var date = this.calendarStart.clone().add(n, type + 's')
      return date
    },
    getBlockClass(type, n) {
      var givenCalendarDate = type == 'day' ? this.getCalendarDate(type, n) : this.visible_date.clone()[type](n)
      if (type == 'day')
        return [type + '-block',
          {
            'active': this.date.isSame(givenCalendarDate, type),
            'prev-month': givenCalendarDate.month() < this.currentMonth,
            'next-month': givenCalendarDate.month() > this.currentMonth,
            'today': this.today.isSame(givenCalendarDate, type),
            'disabled': this.dayIsDisabled(givenCalendarDate)
          }
        ]
      var test = [type + '-block',
        {
          'active': this.visible_date.format('YYYY-MM') == givenCalendarDate.format('YYYY-MM'),
          'disabled': this.dayIsDisabled(givenCalendarDate)
        }
      ]
      return test
    },
    dayIsDisabled(day) {
      if (this.minDate && day.isBefore(this.getSafeMoment(this.minDate))) return true
      if (this.maxDate && day.isAfter(this.getSafeMoment(this.maxDate))) return true
      if (!this.future && day.isAfter(this.today)) return true
      return false
    },
    showMonths() {
      this.mode = 'months'
    },
    showYears() {
      this.mode = 'years'
    },
    showDecades() {
      this.mode = 'decades'
    },
    setMonth(n) {
      this.visible_date = this.visible_date.clone().month(n)
      this.mode = 'days'
    },
    setYear(n) {
      this.visible_date = this.visible_date.clone().year(n)
      this.mode = 'months'
    },
    setDecade(n) {
      this.visible_date = this.visible_date.clone().year(n)
      this.mode = 'years'
    },
    getDecade() {
      var decade = parseInt(this.visible_date.year().toString().substring(0, 3))
      var arr = [parseInt(decade - 1) + '9']
      for (var i = 0; i <= 9; i++) {
        arr.push(decade + '' + i)
      }
      arr.push(parseInt(decade + 1) + '0')
      return arr
    },
    getCentury() {
      var century = parseInt(this.visible_date.year().toString().substring(0, 2))
      var arr = [parseInt(century - 1) + '90']
      for (var i = 0; i <= 9; i++) {
        arr.push(century + '' + i + '0')
      }
      arr.push(parseInt(century + 1) + '00')
      return arr
    },
    inputChange(e) {
      if (this.disabled) return false
      this.updateDate(this.formatDateForStorage(e.target.value))
    },
    updateDate(value) {
      if (value == this.value) return false
      this.$emit('input', value)
    },
    formatDateForStorage(date) {
      if (date) {
        var d = date.substr(0, 10).split('/');
        d = this.storeIncompleteDates(d).reverse().join('-')
        if (date.length == 16) {
          /* datetime */
          var t = date.substr(10, 6);
          d = d + t + ':00'
        }
        return d
      }
    },
    formatDateForDisplay(date) {
      if (date) {
        var d = date.substr(0, 10).split('-').reverse();
        d = this.displayIncompleteDates(d).join('/')
        if (date.length == 19) {
          /* datetime */
          var t = date.substr(10, 6);
          d = d + t
        }
        return d
      }
    },
    getCleanDates(dateArray) {
      dateArray[1] = dateArray[1].replace('00', '01')
      dateArray[2] = dateArray[2].replace('00', '01')
      return dateArray
    },
    storeIncompleteDates(dateArray) {
      dateArray[0] = dateArray[0].replace('--', '00')
      dateArray[1] = dateArray[1].replace('--', '00')
      return dateArray
    },
    displayIncompleteDates(dateArray) {
      dateArray[0] = dateArray[0].replace('00', '--');
      dateArray[1] = dateArray[1].replace('00', '--');
      return dateArray
    }
  }
}
</script>
<style lang="scss">
$width: 300px;
$day-block-width: $width/7;

.input-group,
.input-group-append,
.datetimepicker-input,
.calendar {
  &.show {
    z-index: 10;
  }
}

.calendar {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  width: $width;
  box-sizing: border-box;
  box-shadow: 0px 5px 20px -11px #000;
  transition: all .3s;
  border-radius: 0.25rem;

  &.show {
    display: flex;
    flex-direction: column;
  }
}

.calendar-header {
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  .month-button,
  .year-button {
    position: relative;
    cursor: pointer;
    box-sizing: border-box;

    &:hover {
      font-weight: bold;
      color: var(--primary);
    }
  }

  .prev-button,
  .next-button {
    position: relative;
    display: flex;
    width: $day-block-width;
    height: $day-block-width;
    text-align: center;
    align-items: center;
    justify-content: center;

    &:hover {
      .hover-circle {
        margin: auto;
        transition: all .3s;
        opacity: 0.4;
        border-radius: 50%;
        width: 80%;
        height: 80%;
      }
    }

    &::before {
      content: '';
      background-color: var(--primary);
    }

    .fasvg {
      margin: auto;
    }
  }
}

.calendar-body,
.months-body,
.years-body {
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
  font-weight: bold;
}

.days-of-week,
.days-of-month {
  //Make the container display flex
  display: flex;
  //Move the days to the next row
  flex-wrap: wrap;
  width: 100%;
  border-right: none;
  border-bottom: none;
  cursor: default;
}

.days-of-month {
  cursor: pointer;
}

.months,
.years {
  height: $width;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}

.hover-circle {
  transition: all .3s;
  opacity: 0;
  position: absolute;
  width: 0%;
  height: 0%;
  border-radius: 50%;
  background-color: var(--primary);
}

.day-block,
.month-block,
.year-block {
  position: relative;
  display: flex;
  height: 16.6%;
  border: 1px solid #ccc;
  justify-content: center;
  align-items: center;
  text-align: center;

  &.disabled {
    cursor: not-allowed;
    background: #ddd;
  }

  &:hover:not(.disabled):not(.active) {
    .hover-circle {
      opacity: 0.4;
      border-radius: 1em;
      width: 70%;
      height: 70%;
    }
  }

  &.active:not(.disabled) {
    color: var(--white);

    .date {
      z-index: 1;
    }

    .hover-circle {
      width: 100%;
      height: 100%;
      border-radius: 0%;
      opacity: 0.5;
    }

  }

  &:not(.active),
  &:not(.disabled) {
    .hover-circle {
      width: 10%;
      height: 10%;
      border-radius: 50%;
      opacity: 0;
    }

  }
}

.day-block {
  flex-basis: $day-block-width;
  min-height: $day-block-width;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-left: none;
  border-top: none;

  &:nth-child(7n) {
    border-right: none;

  }

  &.disabled {
    cursor: not-allowed;
    background: #ddd;
  }

  &.today {
    border-width: 2px;
    border-color: var(--primary);
  }





  &.prev-month {
    background: repeating-linear-gradient(45deg, #f2f2f2, #f2f2f2 6px, #f2f2f200 6px, #f2f2f200 12px)
  }

  &.next-month {
    background: repeating-linear-gradient(-45deg, #f2f2f2, #f2f2f2 6px, #f2f2f200 6px, #f2f2f200 12px)
  }
}




.calendar-footer {
  box-sizing: border-box;
  // border: 1px solid rgba(0, 0, 0, 0.15);
}

.datepicker-backdrop {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0;
  transition: opacity 1s;
  z-index: 1;

  &.show {
    opacity: 0.1;
    display: block;
  }
}

/*  Datepicker enter leave transitions */
.fade-enter-active {
  transition: all .3s ease;
}

.fade-leave-active {
  transition: all .3s ease;
}

.fade-enter,
.fade-leave-to

/* .slide-fade-leave-active below version 2.1.8 */
  {
  transform: translateX(10px);
  opacity: 0;
}

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