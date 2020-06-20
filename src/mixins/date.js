import moment from 'moment'
export default {
  methods: {
    formatDateForStorage(date) {
      /* Accept date in locale based format - Convert to mysqldate format  (yyyy-mm-dd) */
      var dateLocale = this.$t('components.datepicker', this.locale)
      var dateChars = ['D', 'M', 'Y']
      var mappedDate = {}
      var dateArr = date.split('')
      dateArr.map((d, i) => {
        var indexInMaps = dateLocale.mask_replace[i]
        if (dateChars.includes(indexInMaps)) {
          if (d == "-") d = "0"
          if (!mappedDate[indexInMaps]) mappedDate[indexInMaps] = []
          mappedDate[indexInMaps].push(d)
        }
      })
      return mappedDate.Y.join('') + '-' + mappedDate.M.join('') + '-' + mappedDate.D.join('')
    },
    formatDateForDisplay(date) {
      /* Accept date in mysqldate format (yyyy-mm-dd) - convert to locale based formar*/
      var dateLocale = this.$t('components.datepicker', this.locale)
      date = this.getCleanedDates(date,'--')
      var displayFormat = dateLocale.mask_replace
      return displayFormat.replace("YYYY", date.y).replace("MM", date.m).replace("DD", date.d)
    },
    getSafeMoment(date) {
      date = this.getCleanedDates(date,'01')
      return moment([date.y,date.m,date.d].join('-'), "YYYY-MM-DD")
    },
    getCleanedDates(date,replace){
      var y = date.substring(0, 4)
      var m = date.substring(5, 7)
      var d = date.substring(8, 10)
      if (m == '00') m = replace
      if (d == '00') d = replace
      return {y,m,d}  
    }
  }
}