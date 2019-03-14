export default {
  methods: {
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
    storeIncompleteDates(date) {
      date[0] = date[0].replace('--', '00')
      date[1] = date[1].replace('--', '00')
      return date
    },
    displayIncompleteDates(date) {
      date[0] = date[0].replace('00', '--');
      date[1] = date[1].replace('00', '--');
      return date
    }
  }
}