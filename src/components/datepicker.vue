<template>
  <div :class="['input-group','date',{show}]" ref="datepicker" :id="_uid">
    <div class="input-group-append" v-if="$scopedSlots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input :id="dpId" :disabled="disabled" ref="datepickerinput" :pattern="inputPattern" :type="inputType" :class="['form-control datetimepicker-input',size?'form-control-'+size:'',{show}]" :value="val" @change="inputChange" v-mask="{mask, greedy: true, placeholder }" />
    <div :class="['datepicker-backdrop',{show}]" @click="togglePicker"></div>
    <div :class="['input-group-append']" @click="togglePicker">
      <button role="button" :aria-haspopup="show" class="btn btn-outline-secondary py-0"><i :class="['mt-1 mb-0 fasvg', {'fa-calendar':type=='date'||type=='datetime', 'fa-clock':type=='time'}]" /></button>
    </div>
    <div class="input-group-append" v-if="$slots.append||$scopedSlots.append">
      <slot name="append"></slot>
    </div>
    <transition name="fade">
      <div v-if="show" :class="['calendar','calendar-'+size,{show}]" aria-controls="date" aria-hidden="false">
        <header class="calendar-header">
          <div class="mr-auto">
            <div role="button" @click="prev" class="prev-button">
              <div class="fasvg fa-chevron-left"></div>
              <i class="hover-circle"></i>
            </div>
          </div>
          <div class="m-auto">
            <span v-if="mode=='time'" class="month-button py-2" v-text="visible_date.format('HH:mm')" />
            <span v-if="mode=='days'" @click="mode='months'" class="month-button py-2" v-text="visible_date.format('MMMM YYYY')" />
            <span v-if="mode=='months'" @click="mode='years'" class="year-button py-2" v-text="visible_date.format('YYYY')" />
            <span v-if="mode=='years'" @click="mode='decades'" class="year-button py-2" v-text="visible_date.format('YYYY').substring(0,3) + '0s'" />
            <span v-if="mode=='decades'" class="year-button py-2" v-text="visible_date.format('YYYY').substring(0,2) + '00'" />
          </div>
          <div class="ml-auto">
            <div role="button" @click="next" class="next-button">
              <div class="fasvg fa-chevron-right"></div>
              <i class="hover-circle"></i>
            </div>
          </div>
        </header>
        <div v-if="mode=='time'" class="time-body">
          <div ref="timePicker" class="picker">
            <transition-group name="scroll-list" tag="div" class="hours">
              <span class="hour" v-for="h in hourArr" :key="h" @click="visible_date = visible_date.clone().hour(h)">
                <span>{{h}}</span>
              </span>
            </transition-group>
            <transition-group name="scroll-list" tag="div" class="minutes">
              <span class="minute" v-for="m in minuteArr" :key="m" @click="visible_date = visible_date.clone().minute(m)">
                <span>{{m}}</span>
              </span>
            </transition-group>
          </div>
        </div>
        <div v-if="mode=='days'" class="calendar-body">
          <div class="days-of-week">
            <span v-for="i in 7" :key="'weekdays_'+i" class="day-block" :title="$options.moment.weekdays(i)" v-text="$options.moment.weekdaysShort(i)" />
          </div>
          <div class="days-of-month">
            <span v-for="n in 42" :key="'days_'+n" :id="'day'+_uid+'_'+getCalendarDate('day',n).format('YYYY-MM-DD')" role="button" @click="clickDate(getCalendarDate('day',n))" :class="getBlockClass('day',n)" :tabindex="visible_date.isSame(getCalendarDate('day',n), 'day') ? 0:-1" @keydown="keyDown">
              <span class="date" v-text="getCalendarDate('day',n).format('D')" />
              <i class="hover-circle"></i>
            </span>
          </div>
        </div>
        <div v-if="mode=='months'" class="months-body">
          <div class="months">
            <span v-for="(m,n) in $options.moment.months()" :key="'month_'+n" @click="setMonth(n)" :class="getBlockClass('month',n)">
              <i class="hover-circle"></i>
              <span class="date" v-text="m" />
            </span>
          </div>
        </div>
        <div v-if="mode=='years'" class="years-body">
          <div class="years">
            <span v-for="(y,n) in getDecade()" :key="'year_'+y" @click="setYear(y)" :class="getBlockClass('year',y,n)">
              <i class="hover-circle"></i>
              <span class="date" v-text="y" />
            </span>
          </div>
        </div>
        <div v-if="mode=='decades'" class="years-body">
          <div class="years">
            <span v-for="(d,n)  in getCentury()" :key="'decade_'+n" @click="setDecade(d)" :class="getBlockClass('decade',d,n)" class="year-block">
              <i class="hover-circle"></i>
              <span class="date" v-text="d" />
            </span>
          </div>
        </div>
        <div class="calendar-footer">
          <form-group v-if="mode=='days'" class="mx-auto" hide-label>
            <checkbox label="Unknown Day" class="m-auto" v-model="unknownDay" />
          </form-group>
          <form-group v-if="mode=='months'" class="mx-auto" hide-label>
            <checkbox label="Unknown Month" class="m-auto" v-model="unknownMonth" />
          </form-group>
        </div>
      </div>
    </transition>
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
    id: {},
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
        if (props.type && props.type == 'time') return 'HH:mm'
        if (props.type && props.type == 'datetime') return 'DD/MM/YYYY HH:mm'
        return 'DD/MM/YYYY'
      }
    },
    size: {
      type: String,
      default: 'md'
    },
    type: {
      type: String,
      default: 'date'
    },
    value: {},
    viewMode: {
      type: String,
      default: function() {
        var props = this.$options.propsData
        if (props.type && (props.type == 'time' || props.type == 'datetime')) return props.type
        return 'days'
      }
    },
    keepOpen: Boolean,
    disabled: {
      default: false
    }
  },
  formats: {
    datetime: 'DD/MM/YYYY HH:mm',
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
      unknownDay: false,
      unknownMonth: false,
      currentTime: { h: false, m: false }
    }
  },
  mounted() {
    window.moment = moment
    if (this.value) this.setupDatePicker()
  },
  watch: {
    date() {
      var format = 'YYYY-MM-DD'
      if (this.mode == 'time') { format = 'HH:mm' }
      if (this.date.isValid()) this.updateDate(this.date.format(format))
    },
    value() {
      this.setupDatePicker()
    },
    unknownDay() {
      var y = 'YYYY'
      var m = this.unknownMonth ? '00' : 'MM'
      var d = this.unknownDay ? '00' : 'DD'
      var format = y + '-' + m + '-' + d
      this.updateDate(this.visible_date.format(format))
    },
    unknownMonth() {
      this.unknownDay = true
      var y = 'YYYY'
      var m = this.unknownMonth ? '00' : 'MM'
      var d = this.unknownDay ? '00' : 'DD'
      var format = y + '-' + m + '-' + d
      this.updateDate(this.visible_date.format(format))
    }
  },
  computed: {
    dpId() {
      if (this.id) return this.id
      if (this.di) return this.di.name
      return this._uid
    },
    format() {
      return this.$options.formats[this.mode]
    },
    inputType() {
      return this.type == 'time' ? this.type : false
    },
    inputPattern() {
      var string = this.type == 'date' ? "\\d{1,2}/\\d{1,2}/\\d{4}|--/\\d{1,2}/\\d{4}|--/--/\\d{4}" : ""

      return string
    },
    currentMonth() {
      return this.visible_date.clone().month()
    },
    currentHour() {
      return this.visible_date.clone().hour()
    },
    currentMinute() {
      return this.visible_date.clone().minute()
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
    hourArr() {
      var h = this.currentHour
      var hArr = []
      for (var i = 4; i > 0; i--) hArr.push(this.visible_date.clone().hour(h - i).format('HH'))
      for (var j = 0; j <= 4; j++) hArr.push(this.visible_date.clone().hour(h + j).format('HH'))
      return hArr
    },
    minuteArr() {
      var m = this.currentMinute
      var mArr = []
      for (var i = 4; i > 0; i--) mArr.push(this.visible_date.clone().minute(m - i).format('mm'))
      for (var j = 0; j <= 4; j++) mArr.push(this.visible_date.clone().minute(m + j).format('mm'))
      return mArr
    },
    parentType() {
      var m = this.mode
      var p = 'months'
      if (m == 'time') p = 'hours'
      if (m == 'months' || m == 'years' || m == 'decades') p = 'years'
      return p
    },
    today() {
      return moment()
    }
  },
  methods: {
    setupDatePicker() {
      if (this.value) {
        this.date = moment(this.value, this.$options.formats[this.mode]);
        if (this.mode == 'time') {
          this.visible_date = this.date.clone()
          this.val = this.value;
        } else {
          this.visible_date = this.getSafeMoment(this.value);
          this.val = this.formatDateForDisplay(this.value);
          this.unknownDay = this.value.substring(8, 10) == '00'
          this.unknownMonth = this.value.substring(5, 10) == '00-00'
        }
      }
    },
    togglePicker() {
      if (this.value) {
        this.setupDatePicker()
      } else {
        this.val = null
        this.visible_date = moment()
      }
      this.show = !this.show
      this.mode = this.viewMode
      if (this.mode == 'days' && this.unknownMonth) this.mode = 'months'
      if (this.mode == 'decades' && this.value) this.mode = 'days'
      // var today = this.$el.querySelectorAll('.day-block.active')
    },
    clickDate(date) {
      if (this.disabled || this.dayIsDisabled(date)) return false
      this.date = date
      this.visible_date = date
      this.unknownDay = false
      var self = this
      if (!this.keepOpen) setTimeout(() => { self.show = false }, 250);
      this.updateDate(this.date.format('YYYY-MM-DD'))
    },
    keyDown(event) {
      if (this.disabled) return;
      console.log('key ' + event.key + ' (' + event.keyCode + ')', this.visible_date, event.target)
      var preventDefault = true
      switch (event.keyCode) {
        case 9:
          preventDefault = false
          break;
        case 32:
          this.date = this.visible_date
          break;
        case 33:
          break;
        case 34:
          break;
        case 35:
          break;
        case 36:
          break;
        case 38:
          this.visible_date = this.visible_date.clone().subtract(1, 'week')
          break;
        case 39:
          /* right cursor */
          this.visible_date = this.visible_date.clone().add(1, 'day')
          break;
        case 37:
          /* left cursor */
          this.visible_date = this.visible_date.clone().subtract(1, 'day')
          break;
        case 40:
          this.visible_date = this.visible_date.clone().add(1, 'week')
          break;
        default:
          // code block
      }
      if (preventDefault) event.preventDefault()
      var el = this.$el.querySelector('#day' + this._uid + '_' + this.visible_date.format('YYYY-MM-DD'))
      el.focus()
      console.log(preventDefault, el)

    },
    getSafeMoment(date) {
      var d = date.substr(0, 10).split('-');
      var c = this.getCleanDates(d).join('-')
      var m = moment(c, "YYYY-MM-DD")
      return m
    },
    next() {
      var n = this.mode == 'years' ? 10 : this.mode == 'decades' ? 100 : 1;
      this.visible_date = this.visible_date.clone().add(n, this.parentType)
    },
    prev() {
      var n = this.mode == 'years' ? 10 : this.mode == 'decades' ? 100 : 1;
      this.visible_date = this.visible_date.clone().subtract(n, this.parentType)
    },
    getCalendarDate(type, n) {
      n = type == 'day' ? n - 1 : n
      var date = this.calendarStart.clone().add(n, type + 's')
      return date
    },
    getBlockClass(type, n, i) {
      var classes = {}
      var givenCalendarDate = false
      var active = false
      var disabled = false
      var format = this.mode == 'months' ? 'YYYY-MM' : this.mode == 'years' ? 'YYYY' : false
      if (this.visible_date) {
        if (type == 'day') {
          givenCalendarDate = this.getCalendarDate(type, n)
          classes = {
            active: this.date.isSame(givenCalendarDate, type),
            disabled: this.dayIsDisabled(givenCalendarDate),
            'prev-month': givenCalendarDate.month() < this.currentMonth,
            'next-month': givenCalendarDate.month() > this.currentMonth,
            today: this.today.isSame(givenCalendarDate, type)
          }
        } else {
          if (type == 'decade') {
            givenCalendarDate = this.visible_date.clone().year(n)
            if (this.value) active = this.getSafeMoment(this.value).format('YYYY').substring(0, 3) + '0' == n
            disabled = this.dayIsDisabled(givenCalendarDate)
          } else {
            givenCalendarDate = this.visible_date.clone()[type](n)
            if (this.value) active = this.getSafeMoment(this.value).format(format) == givenCalendarDate.format(format)
            if (type == 'month' && this.unknownMonth) active = false

            disabled = this.dayIsDisabled(givenCalendarDate)
          }
          classes = { active, disabled }
          if (type == 'year' || type == 'decade') {
            classes['prev-' + type] = i == 0;
            classes['next-' + type] = i == 11;
          }
        }
      }
      return [type + '-block', classes]
    },
    dayIsDisabled(day) {
      if (this.minDate && day.isBefore(this.getSafeMoment(this.minDate))) return true
      if (this.maxDate && day.isAfter(this.getSafeMoment(this.maxDate))) return true
      if (!this.future && day.isAfter(this.today)) return true
      return false
    },
    setMonth(n) {
      this.visible_date = this.visible_date.clone().month(n)
      this.unknownMonth = false
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
      for (var i = 0; i <= 9; i++) { arr.push(decade + '' + i) }
      arr.push(parseInt(decade + 1) + '0')
      return arr
    },
    getCentury() {
      var century = parseInt(this.visible_date.year().toString().substring(0, 2))
      var arr = [parseInt(century - 1) + '90']
      for (var i = 0; i <= 9; i++) { arr.push(century + '' + i + '0') }
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
      if (date && this.mode != 'time') {
        var d = date.substr(0, 10).split('/');
        d = this.storeIncompleteDates(d).reverse().join('-')
        if (date.length == 16) {
          var t = date.substr(10, 6);
          d = d + t + ':00'
        }
        return d
      }
      return date
    },
    formatDateForDisplay(date) {
      if (date) {
        var d = date.substr(0, 10).split('-').reverse();
        d = this.displayIncompleteDates(d).join('/')
        if (date.length == 19) {
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
$font-size: $day-block-width/3;

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

.calendar.calendar-lg {
  $width: $width*1.4;
  width: $width;
  $day-block-width: $width/7;
  $font-size: $day-block-width/3;
  font-size: $font-size;

  .day-block {
    flex-basis: $day-block-width;
    min-height: $day-block-width;
    font-size: $font-size;
  }

  .prev-button,
  .next-button {
    position: relative;
    display: flex;
    width: $day-block-width;
    height: $day-block-width;
  }
}

.calendar.calendar-sm {
  $width: $width*0.8;
  width: $width;
  $day-block-width: $width/7;
  $font-size: $day-block-width/2.6;
  font-size: $font-size;

  .day-block {
    flex-basis: $day-block-width;
    min-height: $day-block-width;
    font-size: $font-size;
  }

  .prev-button,
  .next-button {
    position: relative;
    display: flex;
    width: $day-block-width;
    height: $day-block-width;
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

.picker {
  position: relative;
  width: 40%;
  margin: auto;
  user-select: none;

  // .hours-slider {
  //   position: absolute;
  //   border: 1px solid green;
  //   background: rgba(255, 0, 0, 0.1);
  //   opacity: 0.1;
  //   width: 50%;
  //   height: 184px;
  //   // pointer-events: none;
  // }

  .hours,
  .minutes {
    width: 50%;
    height: $width;
    border: thin solid;
    float: left;
    pointer-events: auto;

    .hour,
    .minute {
      width: 100%;
      position: relative;
      display: block;
      border: 1px solid #ccc;
      justify-content: center;
      align-items: center;
      text-align: center;

      &:nth-child(-n+2),
      &:nth-child(n+8) {
        transition: all .5s;
        // height: 0;
        // border:none;
        // overflow: hidden;
      }

      &.scroll-list-move {
        transition: all .5s;
      }

      &.scroll-list-enter {
        transition: all .5s;
      }

      &.scroll-list-enter-active {
        transition: all .5s;
        background: green;
      }

      &.scroll-list-enter-to {
        transition: all .5s;
        background: red;
      }
    }
  }
}

// .hour:nth-of-type(1),
// .minute:nth-of-type(1) {
//   // height: 4.28%;
//   transform: rotateX(30deg);
//   opacity: 0.2;
// }

// .hour:nth-of-type(2),
// .minute:nth-of-type(2) {
//   transform: rotateX(20deg);
//   opacity: 0.4;
// }

// .hour:nth-of-type(3),
// .minute:nth-of-type(3) {
//   transform: rotateX(10deg);
//   opacity: 0.6;
// }

// .hour:nth-of-type(5),
// .minute:nth-of-type(5) {
//   transform: rotateX(-10deg);
//   opacity: 0.6;
// }

// .hour:nth-of-type(6),
// .minute:nth-of-type(6) {
//   transform: rotateX(-20deg);
//   opacity: 0.4;
// }

// .hour:nth-of-type(7),
// .minute:nth-of-type(7) {
//   transform: rotateX(-30deg);
//   opacity: 0.2;
// }
// .hour {
//   // transition: all .5s;
// }

// .scroll-list-move {
//   transition: all 5s;
// }

// .scroll-list-enter-to {
//   transition: all 5s;
// }

// .scroll-list-enter-active {
//   transition: all 5s;
//   background: green;
// }

// .scroll-list-leave-active {
//   transition: all 5s;
//   background: red;
// }

// .scroll-list-enter {
//   height:0px;
//   overflow: hidden;
//   // transform: translateY(-60px);

// }
// .picker .hour:nth-child(-n+2){
//   // opacity: 0;
//   // height:0px;
//   border:none;
// }
// .picker .hour:nth-child(n+8){
//   // opacity: 0;
//   // height:0px;
//   overflow: hidden;
//   border:none;
// }
// .scroll-list-enter:nth-of-type(1) {
//   // transform: translateY(-30px);
//   // opacity: 0;

// }

// .scroll-list-leave-to:nth-of-type(1) {
//   // opacity: 0;
//   // transform: translateY(30px);
// }


.time-body,
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
  font-size: $font-size;


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

}

.prev-month,
.prev-year,
.prev-decade {
  background: repeating-linear-gradient(45deg, #f2f2f2, #f2f2f2 6px, #f2f2f200 6px, #f2f2f200 12px)
}

.next-month,
.next-year,
.next-decade {
  background: repeating-linear-gradient(-45deg, #f2f2f2, #f2f2f2 6px, #f2f2f200 6px, #f2f2f200 12px)
}


.calendar-footer {
  display: flex;
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

  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 448 512'><path d='M4.465 263.536l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L207 92.113V468c0 6.627 5.373 12 12 12h10c6.627 0 12-5.373 12-12V92.113l178.494 178.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.05c-4.686-4.686-12.284-4.686-16.971 0L4.465 246.566c-4.687 4.686-4.687 12.284 0 16.97z'/></svg>") !important;
}

.fasvg.fa-arrow-down {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 448 512'><path d='M443.5 248.5l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L241 419.9V44c0-6.6-5.4-12-12-12h-10c-6.6 0-12 5.4-12 12v375.9L28.5 241.4c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.8 4.8-12.3.1-17z'/></svg>") !important;
}

.fasvg.fa-calendar {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 448 512'><path d='M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z'/></svg>") !important;
}

.fasvg.fa-clock {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 512 512'><path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z'/></svg>") !important;
}

.fasvg.fa-chevron-left {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 256 512'><path d='M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z'/></svg>") !important;
}

.fasvg.fa-chevron-right {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 256 512'><path d='M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z'/></svg>") !important;
}
</style>