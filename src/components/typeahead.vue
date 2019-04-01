<template>
  <input-group class="typeahead">
    <div slot="prepend" class="input-group-text" @click="$refs.typeaheadInput.focus()">
      <fa icon="search" />
    </div>
    <input ref="typeaheadInput" type="text" class="form-control" v-model="searchQuery" @keydown.down="tabToNextItem" @keyup.up="moveCursorToEnd" />
    <div ref="typeaheadList" class="typeahead-list list-group" :style="[listRect]">
      <template v-for="(item,n) in response">
        <button :key="item[valueKey]" :class="['typeahead-list-item list-group-item py-1 px-2',{'rounded-0 border-top-0':n==0}]" @click="update(item)" @keydown.down="tabToNextItem" @keydown.up="tabToPrevItem">
          <span v-html="item[labelKey]" />
        </button>
      </template>
    </div>
    <div slot="append" class="input-group-text">
      <fa icon="cog" :spin="isCalculating" />
    </div>
  </input-group>
</template>
<script>
import axios from 'axios'
export default {
  name: 'typeahead',
  props: {
    apiKey: String,
    apiKeyName: { type: String, default: 'apiKey' },
    arrayKey: String,
    valueKey: { type: String, default: 'value' },
    labelKey: { type: String, default: 'label' },
    queryKey: { type: String, default: 'q' },
    queryUrl: String,
    queryFunction: [Function, Promise],
    minimumLength: { type: Number, default: 4 }
  },
  data() {
    return {
      response: [],
      searchQuery: '',
      searchQueryIsDirty: false,
      isCalculating: false,
      listRect: false,
      input: this.$refs.typeaheadInput,
      list: this.$refs.typeaheadList
    }
  },
  mounted() {
    this.setDropdownPosition()
  },
  watch: {
    searchQuery: function() {
      if (this.searchQueryHasMinimumLength) {
        this.debounce()(this.query(), 500)
      }
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
    tabToPrevItem(e) {
      if (e.target.previousSibling) e.target.previousSibling.focus()
      else this.input.focus()
    },
    tabToNextItem(e) {
      if (e.target === this.input) this.list.children[0].focus()
      else if (e.target.nextSibling) e.target.nextSibling.focus()
    },
    isFocussed(dom_node) {
      return dom_node === document.activeElement
    },
    moveCursorToEnd() {
      var el = this.input
      el.focus()
      el.selectionStart = el.selectionEnd = el.value.length;
      el.selectionStart = el.value.length
    },
    update(item) {
      this.$emit('selected', item)
      this.searchQuery = ''
      this.response = []
    },
    setDropdownPosition() {
      this.$nextTick(() => {
        this.input = this.$refs.typeaheadInput
        this.list = this.$refs.typeaheadList
        this.listRect = {
          top: this.input.offsetHeight + 'px',
          left: this.input.offsetLeft + 'px',
          width: this.input.offsetWidth + 'px'
        }
      });
    },
    query() {
      if (this.queryUrl) {
        var url = this.queryUrl
        var params = {}
        if (this.queryKey) {
          params[this.queryKey] = this.searchQuery
        } else {
          url += this.searchQuery
        }
        if (this.apiKey) {
          params[this.apiKeyName] = this.apiKey

        }
        return axios.get(url, { params })
          .then((resp) => {
            if (this.arrayKey) this.response = resp.data[this.arrayKey]
            else this.response = resp.data
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
<style lang="scss">
.typeahead {
  position: relative;

  .typeahead-list {
    z-index: 2;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 11px 19px 2px rgba(0, 0, 0, 0.1);

    .typeahead-list-item {
      transition: all 0.4s;
      text-align: left;

      &:focus {
        z-index: 2;
        background-color: rgba(0, 0, 200, 0.2)
      }

      em {
        font-weight: bold;
      }
    }
  }

}
</style>