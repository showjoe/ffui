<template>
  <div :class="['input-group','date',{show}]" ref="datepicker" :id="_uid">
    <div class="input-group-append" v-if="$scopedSlots.prepend">
      <slot name="prepend"></slot>
    </div>
    <input :id="dpId" :disabled="disabled" ref="datepickerinput" :type="inputType" :class="['form-control datetimepicker-input',size?'form-control-'+size:'',{show}]" :value="val" @change="inputChange" v-mask="vmask" />
    <div key="bg" :class="['datepicker-backdrop',{show}]" @click="show?togglePicker:false"></div>
    <div :class="['input-group-append']" v-if="type!='time'">
      <btn @click.native="togglePicker" role="button" :aria-haspopup="show" class="btn btn-outline-secondary py-0">
        <i :class="['mt-1 mb-0 fasvg', {'fa-calendar':type=='date'||type=='datetime', 'fa-clock':type=='time'}]" />
      </btn>
    </div>
    <div class="input-group-append" v-if="$slots.append||$scopedSlots.append">
      <slot name="append"></slot>
    </div>
    <div :id="'calendar_'+_uid" ref="calendar" :class="['calendar','calendar-'+size,{show}]" aria-controls="date" aria-hidden="false">
      <div  v-if="visible_date">
        <header class="calendar-header">
          <div class="mr-auto">
            <div role="button" @click="prev" class="prev-button">
              <div class="fasvg fa-chevron-left"></div>
              <i class="hover-circle"></i>
            </div>
          </div>
          <div class="m-auto">
            <span v-if="mode=='time'" class="month-button py-2" v-text="visible_date.format(formats.time)" />
            <span v-if="mode=='days'" @click="mode='months'" class="month-button py-2" v-text="visible_date.format(formats.month_year)" />
            <span v-if="mode=='months'" @click="mode='years'" class="year-button py-2" v-text="visible_date.format(formats.year)" />
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
        <div v-if="localeData&&mode=='days'" class="calendar-body">
          <div class="days-of-week">
            <span v-for="i in 7" :key="'weekdays_'+i" class="day-block" v-tooltip="{text:localeData._weekdays[i-1]}" :title="localeData._weekdays[i-1]" v-text="localeData._weekdaysShort[i-1]" />
          </div>
          <div class="days-of-month">
            <span v-for="n in 42" :key="'days_'+n" :id="'day'+_uid+'_'+getCalendarDate('day',n).format(formats.mysqldate)" role="button" @click="clickDate(getCalendarDate('day',n))" :class="getBlockClass('day',n)" :tabindex="visible_date.isSame(getCalendarDate('day',n), 'day') ? 0:-1" @keydown="keyDown">
              <span class="date" v-text="getCalendarDate('day',n).format('D')" />
              <i class="hover-circle"></i>
            </span>
          </div>
        </div>
        <div v-if="localeData&&mode=='months'" class="months-body">
          <div class="months">
            <span v-for="(m,n) in localeData._months" :key="'month_'+n" @click="setMonth(n)" :class="getBlockClass('month',n)">
              <i class="hover-circle"></i>
              <span class="date" v-text="m" />
            </span>
          </div>
        </div>
        <div v-if="mode=='years'" class="years-body">
          <div class="years">
            <span v-for="(y,n) in getDecade()" :key="'year_'+y" @click="setYear(y)" :class="getBlockClass('year',y,n)">
              <i class="hover-circle"></i>
              <span class="date" v-text="moment(y).format(formats.year)" />
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
          <form-group v-if="mode=='days'&&!noUnknowns" class="mx-auto mb-1" hide-label>
            <checkbox :label="lang('unknown_day')" v-model="unknownDay" />
          </form-group>
          <form-group v-if="mode=='months'&&!noUnknowns" class="mx-auto mb-1" hide-label>
            <checkbox :label="lang('unknown_month')" v-model="unknownMonth" />
          </form-group>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import date_mixin from '../mixins/date'
import { createPopper } from '@popperjs/core/lib/popper-lite';
import flip from '@popperjs/core/lib/modifiers/flip';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
// import arrow from '@popperjs/core/lib/modifiers/arrow';
// import computeStyles from '@popperjs/core/lib/modifiers/computeStyles';


export default {
  name: 'datepicker',
  mixins: [date_mixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    id: {},
    di: Object,
    future: Boolean,
    locale: {
      type: String,
      default () {
        return this.$options.propsData.locale ? this.$options.propsData.locale : this.$i18n ? this.$i18n.locale : 'en'
      }
    },
    position: {
      default: 'bottom'
    },
    minDate: {
      default: false
    },
    maxDate: {
      default: false
    },
    mask: {},
    placeholder: {
      type: String,
      default () {
        var props = this.$options.propsData
        if (props.type && props.type == 'time') return this.$options.formats.time
        if (props.type && props.type == 'datetime') return this.$options.formats.datetime
        return this.$options.formats.date
      }
    },
    noUnknowns: Boolean,
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
      default: 'days'
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
      date: null,
      visible_date: null,
      unknownDay: false,
      unknownMonth: false,
      currentTime: { h: false, m: false }
    }
  },
  created() {
    this.localeData = this.moment.localeData(this.locale)

  },
  mounted() {
    this.$nextTick(() => {
          this.popper = this.popperInstance()
      })
    // this.$i18n.locale = this.locale
    this.setupVal()
  },
  destroy() {
    console.log('destroy', this.popper)
    if (this.popper) this.popper.destroy()
  },
  watch: {
    date() {
      var format = this.formats.mysqldate
      if (this.mode == 'time') { format = this.formats.time }
      if (this.date.isValid()) this.updateDate(this.date.format(format))
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
    },
    value() {
      this.setupVal()
    }
  },
  computed: {
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
    currentMinute() {
      return this.visible_date.clone().minute()
    },
    currentMonth() {
      return this.visible_date.clone().month()
    },
    currentHour() {
      return this.visible_date.clone().hour()
    },
    dpId() {
      if (this.id) return 'dp' + this.id
      if (this.di) return 'dp' + this.di.name
      return 'dp' + this._uid
    },
    firstDayOfMonth() {
      return this.visible_date.clone().subtract(this.visible_date.date() - 1, 'days')
    },
    format() {
      return this.formats[this.mode]
    },
    formats() {
      return this.lang('formats')
    },
    hourArr() {
      var h = this.currentHour
      var hArr = []
      for (var i = 4; i > 0; i--) hArr.push(this.visible_date.clone().hour(h - i).format('HH'))
      for (var j = 0; j <= 4; j++) hArr.push(this.visible_date.clone().hour(h + j).format('HH'))
      return hArr
    },
    inputType() {
      return this.type == 'time' ? this.type : false
    },
    inputPattern() {
      var string = this.type == 'date' ? "\\d{1,2}/\\d{1,2}/\\d{4}|--/\\d{1,2}/\\d{4}|--/--/\\d{4}" : ""

      return string
    },
    moment() {
      return moment
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
      return this.moment()
    },
    vmask() {
      if (this.mask) return this.mask
      var alias = this.noUnknowns ? this.lang('alias_no_unknowns') : this.lang('alias')
      var placeholder = this.lang('placeholder')
      return { alias, placeholder }
    }
  },
  methods: {
    clickDate(date) {
      if (this.disabled || this.dayIsDisabled(date)) return false
      date.locale(this.locale)
      this.date = date
      this.visible_date = date
      this.unknownDay = false
      var self = this
      if (!this.keepOpen) setTimeout(() => { self.show = false }, 250);
      this.updateDate(this.date.format(this.formats.mysqldate))
    },
    dayIsDisabled(day) {
      if (this.minDate && day.isBefore(this.getSafeMoment(this.minDate))) return true
      if (this.maxDate && day.isAfter(this.getSafeMoment(this.maxDate))) return true
      if (!this.future && day.isAfter(this.today)) return true
      return false
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
            active: this.date ? this.date.isSame(givenCalendarDate, type) : false,
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
    getCalendarDate(type, n) {
      n = type == 'day' ? n - 1 : n
      var date = this.calendarStart.clone().add(n, type + 's')
      return date
    },
    getCentury() {
      var century = parseInt(this.visible_date.year().toString().substring(0, 2))
      var arr = [parseInt(century - 1) + '90']
      for (var i = 0; i <= 9; i++) { arr.push(century + '' + i + '0') }
      arr.push(parseInt(century + 1) + '00')
      return arr
    },
    getCleanDates(dateArray) {
      dateArray[1] = dateArray[1].replace('00', '01')
      dateArray[2] = dateArray[2].replace('00', '01')
      return dateArray
    },
    getDecade() {
      var decade = parseInt(this.visible_date.year().toString().substring(0, 3))
      var arr = [parseInt(decade - 1) + '9']
      for (var i = 0; i <= 9; i++) { arr.push(decade + '' + i) }
      arr.push(parseInt(decade + 1) + '0')
      return arr
    },
    inputChange(e) {
      if (this.disabled) return false
      if (this.type == 'time') { this.updateDate(e.target.value); return false; }
      this.updateDate(this.maskCompleted() ? this.formatDateForStorage(e.target.value) : null)
    },
    keyDown(event) {
      if (this.disabled) return;
      // console.log('key ' + event.key + ' (' + event.keyCode + ')', this.visible_date, event.target)
      var preventDefault = true
      switch (event.keyCode) {
        case 9:
          preventDefault = false
          break;
        case 13:
          this.clickDate(this.visible_date)
          break;
        case 32:
          this.clickDate(this.visible_date)
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
      var el = this.$el.querySelector('#day' + this._uid + '_' + this.visible_date.format(this.formats.mysqldate))
      el.focus()
    },
    lang(path) {
      return this.$t('components.datepicker.' + path, this.locale)
    },
    maskCompleted() {
      return this.$refs.datepickerinput.inputmask.isComplete()
    },
    next() {
      var n = this.mode == 'years' ? 10 : this.mode == 'decades' ? 100 : 1;
      this.visible_date = this.visible_date.clone().add(n, this.parentType)
    },
    prev() {
      var n = this.mode == 'years' ? 10 : this.mode == 'decades' ? 100 : 1;
      this.visible_date = this.visible_date.clone().subtract(n, this.parentType)
    },
    setDecade(n) {
      this.visible_date = this.visible_date.clone().year(n)
      this.mode = 'years'
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
    setupVal() {
      if (this.value) {
        if (this.type == 'time') {
          this.date = this.moment(new Date(this.value))
          this.visible_date = this.date.clone()
          this.val = this.value;
        } else {
          this.date = this.moment(this.value, this.format).locale(this.locale);
          this.visible_date = this.getSafeMoment(this.value).locale(this.locale);
          this.val = this.formatDateForDisplay(this.value);
          this.unknownDay = this.value.substring(8, 10) == '00'
          this.unknownMonth = this.value.substring(5, 10) == '00-00'
        }
      } else {
        this.visible_date = this.moment().locale(this.locale)
      }
    },
    setupDatePicker() {
      console.log('setupDatePicker', this.value)


    },
    // storeIncompleteDates(dateArray) {
    //   dateArray[0] = dateArray[0].replace('--', '00')
    //   dateArray[1] = dateArray[1].replace('--', '00')
    //   return dateArray
    // },
    togglePicker() {
      this.setupVal()
      // if (!this.value) {
      //   this.val = null
      //   this.visible_date = this.moment().locale(this.locale)
      // }
      this.mode = this.viewMode
      if (this.mode == 'days' && this.unknownMonth) this.mode = 'months'
      this.show = !this.show
      
    },
    updateDate(value) {
      if (value == this.value) return false
      this.$emit('input', value)
    },
    popperInstance() {

      // console.log('createPopper', this.popper)
      const reference = document.querySelector('#' + this.dpId);
      const popper = document.querySelector('#calendar_' + this._uid);
      // console.log(reference,popper,'#calendar_' + this.dpId) 
      // if(this.popper) {const state = await this.popper.update(); }
      // else
      return createPopper(reference, popper, {
        placement: this.position,
        onFirstUpdate: state => console.log('Popper positioned on', state.placement),
        modifiers: [
        flip, 
        offset, 
        preventOverflow,
          {
            name: 'flip',
            options: {
              fallbackPlacements: ['top'],
            },
          },
          {
            name: 'preventOverflow',
            options: {},
          },
          {
            name: 'offset',
            options: {
              offset: [0, 2],
            },
          }
        ],
      });
    },

  }
}
</script>
<style lang="scss">
.input-group,
.input-group-append,
.datetimepicker-input,
.calendar {
  &.show {
    z-index: 10;
  }
}

.calendar {
  opacity: 0;
  --width: 18rem;
  --day-block-width: calc(var(--width)/7.01);
  --font-size: calc(var(--day-block-width)/3);
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  width: var(--width);
  box-sizing: border-box;
  box-shadow: 0px 5px 20px -11px #000;
  transition: all .3s;
  border-radius: 0.25rem;
  font-size: var(--font-size);

  &.show {
    opacity: 1;
    display: flex;
    flex-direction: column;
  }
}


.calendar.calendar-lg {
  --width: 24rem;
  font-size: calc(var(--font-size) * 1.2);

  .day-block {
    flex-basis: var(--day-block-width);
    min-height: var(--day-block-width);
    font-size: var(--font-size);
  }


  .prev-button,
  .next-button {
    position: relative;
    display: flex;
    width: var(--day-block-width);
    height: var(--day-block-width);
  }
}

@media (max-width: 425px) {
  .input-group.date {
  }

  .calendar.calendar-lg {
    --width: 22rem;
  }
}

// @media (min-width: 426px) {
//   .calendar.calendar-lg {
//     $width: 24rem;
//     width: $width;
//     $day-block-width: $width/7;
//     $font-size: $day-block-width/3;
//     font-size: $font-size * 1.2;

//     .day-block {
//       flex-basis: $day-block-width;
//       min-height: $day-block-width;
//       font-size: $font-size;
//     }


//     .prev-button,
//     .next-button {
//       position: relative;
//       display: flex;
//       width: $day-block-width;
//       height: $day-block-width;
//     }
//   }
// }

.calendar.calendar-sm {
  --width: 14rem;

  // .day-block {
  //   flex-basis: $day-block-width;
  //   min-height: $day-block-width;
  //   font-size: $font-size;
  // }

  // .prev-button,
  // .next-button {
  //   position: relative;
  //   display: flex;
  //   width: $day-block-width;
  //   height: $day-block-width;
  // }
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
    width: var(--day-block-width);
    height: var(--day-block-width);
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

.time-body,
.calendar-body,
.months-body,
.years-body {
  box-sizing: border-box;
  flex-wrap: wrap;
  width: 100%;
  font-weight: bold;
}

.days-of-week {
  // font-size: $font-size;
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
  height: var(--width);
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
  flex-basis: var(--day-block-width);
  min-height: var(--day-block-width);
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
  // display: none;
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