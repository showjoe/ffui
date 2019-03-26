<template>
  <div class="typeahead dropdown">
    <input-group>
      <div slot="prepend" class="input-group-text">
        <fa icon="search" />
      </div>
      <input type="text" class="form-control typeahead-toggle" v-model="searchQuery" data-toggle="dropdown" />
      <div slot="append" class="input-group-text">
        <fa icon="cog" :spin="isCalculating" />
      </div>
      <div :class="['dropdown-menu w-100']">
        <template v-for="item in response">
          <button :key="item[valueKey]" :class="['dropdown-item typeahead-response']" @click="update(item)">
            <span v-html="item[labelKey]" />
          </button>
        </template>
      </div>
    </input-group>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'typeahead',
  props: {
    valueKey: { type: String, default: 'value' },
    labelKey: { type: String, default: 'label' },
    queryUrl: String,
    queryFunction: [Function, Promise],
    minimumLength: { type: Number, default: 4 }
  },
  data() {
    return {
      response: [],
      searchQuery: '',
      searchQueryIsDirty: false,
      isCalculating: false
    }
  },
  mounted() {
    import('bootstrap')
    $('.typeahead-toggle').dropdown()
  },
  watch: {
    searchQuery: function() {
      if (this.searchQueryHasMinimumLength) {
        this.debounce()(this.query(), 500)
      }
      // this.debounce(this.query,300)
    }
  },
  computed: {
    searchIndicator() {
      return false
    },
    searchQueryHasMinimumLength() {
      return this.searchQuery.length >= this.minimumLength
    }
  },
  methods: {
    update(item) {
      this.$emit('selected', item)
    },
    query() {
      if (this.queryUrl) {
        var url = this.queryUrl + this.searchQuery
        return axios.get(url)
          .then((resp) => {
            this.response = resp.data
            $('.typeahead-toggle').dropdown('toggle')
          });
      }
      if (this.queryFunction) {
        /* To do */
      }
    },
    debounce(func, wait = 100) {
      var self = this
      self.isCalculating = true
      let timeout;
      return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          self.isCalculating = false
          self.searchQueryIsDirty = false
          if (func) func.apply(self, args);
        }, wait);
      };
    }
  }
}
</script>
<style>
.typeahead-response em {
  font-weight: bold;
}
</style>