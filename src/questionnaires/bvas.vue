<template>
  <card title="BVAS" head>
    <form-group v-if="dataitems" class="text-right" :di="dataitems.BV_AssessorName" cols="6|6" :error="errors.BV_AssessorName">
      <textbox v-model="records.BV_AssessorName" />
    </form-group>
    <form-group v-if="dataitems" :di="dataitems.BV_FirstAssessment" cols="6|6" :error="errors.BV_FirstAssessment" v-slot="{di}">
      <btn-group :di="dataitems[di.name]" justified v-model="records[di.name]" />
    </form-group>
    <row v-if="dataitems">
      <column>
        <template v-for="(group,n) in column1">
          <transition name="fade" mode="out-in" :key="'transition1_'+n">
            <card :key="n" :title="group.title" head :body="false" :class="['mb-2',{'border-danger':hasError(group.none.name)}]">
              <form-group :di="group.none" :error="diErrors(group.none.name)" slot="header-right" hide-label hide-error :class="['mb-0',{'text-danger':hasError(group.none.name)}]">
                <checkbox :true-value="1" :false-value="null" :readonly="readOnly" v-model="records[group.none.name]" :label="group.none.label" :aria-controls="'group1_'+n"/>
              </form-group>
              <collapse :show="!records[group.none.name]" :duration="group.count * 50" :id="'group1_'+n" :aria-label="group.title">
                <list-group flush :aria-label="group.title">
                  <list-group-item is-link    v-for="field in group.fields" :key="field.index" :id="field.name" :ref="field.name" popover-placement="left" :true-value="1" :false-value="null" v-model="records[field.name]" :readonly="readOnly" type="checkbox">
                    <fa v-if="field.json.major" icon="certificate" />
                    <span>
                      <b v-if="field.json.major" v-html="field.label"></b>
                      <span v-else v-html="field.label"></span>
                    </span>
                  </list-group-item>
                </list-group>
              </collapse>
            </card>
          </transition>
        </template>
      </column>
      <column>
        <template v-for="(group,n) in column2">
          <transition name="fade" mode="out-in" :key="'transition2_'+n">
            <card :key="n" :title="group.title" head :body="false" :class="['mb-2',{'border-danger':hasError(group.none.name)}]">
              <form-group :di="group.none" :error="diErrors(group.none.name)" slot="header-right" hide-label hide-error :class="['mb-0',{'text-danger':hasError(group.none.name)}]">
                <checkbox type="custom" :true-value="1" :false-value="null" :readonly="readOnly" v-model="records[group.none.name]" :label="group.none.label" label-left :aria-controls="'group1_'+n"/>
              </form-group>
              <collapse :show="!records[group.none.name]" :duration="group.count * 50" :id="'group1_'+n" :aria-label="group.title">
                <list-group flush :aria-label="group.title">
                  <list-group-item is-link    v-for="field in group.fields" :key="field.index" :id="field.name" :ref="field.name" popover-placement="left" :true-value="1" :false-value="null" v-model="records[field.name]" :readonly="readOnly" type="checkbox">
                    <fa v-if="field.json.major" icon="certificate" />
                    <span>
                      <b v-if="field.json.major" v-html="field.label"></b>
                      <span v-else v-html="field.label"></span>
                    </span>
                  </list-group-item>
                </list-group>
              </collapse>
            </card>
          </transition>
        </template>
        <form-group :di="dataitems.BV_PD_Only" hide-label v-slot="{di}">
          <btn v-model="records.BV_PD_Only">
            <checkbox :true-value="1" :false-value="null" v-model="records[di.name]" />
            <div v-html="di.label" />
          </btn>
        </form-group>
        <br>
        <btn btn-class="primary" block :readonly="readOnly" @click.native="hideEmptySections">
          No other abnormalities to record
        </btn>
        <br>
        <alert type="info">
          <strong>BVAS Score:</strong>
          <h2>{{bvas_score()}}</h2>
        </alert>
      </column>
    </row>
    <!-- <questionnaire-footer slot="footer" /> -->
  </card>
</template>
<script>
  import * as _ from 'lodash'
  import DATA from './bvas_data.json'
// import encounter_mixin from '~/mixins/encounter'
// import questionnaire_mixin from '~/mixins/questionnaire'
// import date_mixin from '~/mixins/date'
// import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'bvas',
  // mixins: [questionnaire_mixin, encounter_mixin, date_mixin],
  data () {
    return {
      dataitems: DATA.dataitems,
      encounter: DATA.encounter,
      lang: DATA.lang,
      questionnaire: DATA.questionnaire,
      records: DATA.records,
      validation: DATA.validation,
      errors:{}
    }
  },
  computed: {
    groups() {
      var groups = []
      for (var i = 0; i < 10; i++) {
        var dis = _.pickBy(this.dataitems, (di) => {
          return di.json && di.json.group == i + 1
        })
        if(_.isEmpty(dis)) return false
        var none = _.find(dis, (di) => { return di.json.none });
        groups.push({
          title: this.lang.groups[i].title,
          none,
          fields: _.pickBy(dis, (di) => { return !di.json.none }),
          count: Object.keys(dis).length,
          persistent: none ? none.json.persistent:null,
          worse: none ? none.json.worse:null,
        })
      }
      return groups
    },
    column1() {
      return this.groups.slice(0, 6)
    },
    column2() {
      return this.groups.slice(6, 11)
    },
    readOnly() {
      return this.encounter.locked == 1 || this.records.locked
    },
  },
  methods: {
    // ...mapActions('questionnaires', ['updateRecord']),
    hasTextbox(field) {
      return _.has(this.otherText, field.name)
    },
    hasError(){},
    diErrors(){},
    isMajor(field) {
      return _.indexOf(this.$options.major_items, field.name) > -1
    },
    setContainerActive(str, field) {
      var value = str.trim() != "" ? 1 : null
      this.updateRecord({ field: field.name, value });
    },
    hideEmptySections() {
      if (this.readOnly) return;
      for (var i = 0; i < 10; i++) {
        var group = this.groups[i];
        var count = 0;
        for (var diname in group.fields) {
          if (this.records[diname]) count++;
        }
        if (count == 0){
          this.updateRecord({ field: group.none.name, value: 1 });
        }
      }
    },
    bvas_score() {
      var score = 0;
      var PD_ONLY = this.records.BV_PD_Only;
      for (var i = 0; i < 10; i++) {
        var group = this.groups[i];
        var sectionScore = 0;
        for (var diname in group.fields) {
          var di = group.fields[diname]
          if (this.records[diname] && di.json.persistent) {
            if (PD_ONLY) sectionScore += di.json.persistent
            else sectionScore += di.json.worse
          }
        }
        if (PD_ONLY) {
          score += sectionScore > group.persistent ? group.persistent : sectionScore
        } else {
          score += sectionScore > group.worse ? group.worse : sectionScore
        }
      }
      return score;
    }
  }
}

</script>
