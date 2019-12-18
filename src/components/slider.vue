<template>
  <div ref="sliderContainer" :class="containerClass" :id="sId">
    <slot name="popover-track" v-if="!hidePopover">
      <div class="popover-track">
        <div ref="popover1" class="slider-popover" :style="popoverStyle(1)">
          <slot name="popover1">
            <div v-if="range" v-html="getDisplayValue(this.value[0])" />
            <div v-else v-html="getDisplayValue(this.value)" />
          </slot>
        </div>
        <div v-if="range" ref="popover2" class="slider-popover" :style="popoverStyle(2)">
          <slot name="popover2">
            <div v-html="getDisplayValue(this.value[1])" />
          </slot>
        </div>
      </div>
    </slot>
    <div ref="slider" class="slider" @resize="resize" @click="clickSliderTrack">
      <div ref="sliderTrack" class="slider-track">
        <slot name="slider-track"></slot>
      </div>
      <div ref="sliderBar" class="slider-bar" :style="sliderBarStyle">
        <slot name="slider-bar"></slot>
      </div>
      <div ref="handle1" class="handle" :style="handleStyle" v-show="!hideHandle">
        <slot name="handle" :value="value"></slot>
      </div>
      <div v-if="range" ref="handle2" class="handle" :style="handleStyle" v-show="!hideHandle">
        <slot name="handle2" :value="value"></slot>
      </div>
    </div>
    <div ref="grid" :class="gridClass" v-if="!hideGrid">
      <div v-for="(n,i) in divisions + 1" class="grid-unit" :key="n"><span class="grid-num">{{getDisplayValue(getGridValue(i))}}</span></div>
    </div>
    <slot name="labels" v-if="labels">
      <div class="labels">
        <div class="float-left" v-html="this.labels.min" />
        <div class="float-right" v-html="this.labels.max" />
      </div>
    </slot>
  </div>
</template>
<script>
import { scaleLinear, color, hsl } from "d3";
import { TweenLite } from "gsap";
import Draggable from 'gsap/Draggable';
export default {
  name: 'slider',
  props: {
    id: {},
    colours: Array,
    colourPopover: Boolean,
    colourHandle: Boolean,
    disabled: Boolean,
    hideGrid: Boolean,
    hideHandle: Boolean,
    hidePopover: Boolean,
    gridDivisions: Number,
    labels: Object,
    min: {
      // minimum possible value
      type: Number,
      default: 0
    },
    max: {
      // maximum possible value
      type: Number,
      default: 10
    },
    prefix: String,
    postfix: String,
    range: Boolean,
    reverse: Boolean,
    step: {
      // Set sliders step. Always > 0. Could be fractional
      type: Number,
      default: 1,
      validator: (value) => { return value >= 0 }
    },
    value: {},
    vertical: Boolean,
  },
  data() {
    return {
      handle1Pos: 0,
      handle2Pos: 0,
      handle1PosPx: 0,
      handle1: false,
      handle2: false,
      handleRadius: false,
    }
  },
  mounted() {
    window.addEventListener('resize', this.resize)
    this.setPositionFromValue()
    this.setupSlider()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resize)
  },
  computed: {
    sId() {
      if (this.id) return this.id
      return this._uid
    },
    containerClass() { return ['slider-container', { 'slider-container-vertical': this.vertical, 'disabled': this.disabled, 'unanswered': !this.handleVisible }] },
    dimension() { return this.vertical ? 'Y' : 'X' },
    divisions() { return this.gridDivisions ? this.gridDivisions : this.max - this.min },
    gridClass() { return ['grid', { 'grid-vertical': this.vertical, 'grid-reverse': this.reverse }] },
    handleStyle() {
      if (this.colours && this.colourHandle) {
        var colour = this.getColourFromValue(this.value)
        var d3Col = hsl(color(colour))
        d3Col.s = d3Col.s * 3
        d3Col.l = d3Col.l / 3
        return {
          border: 'none',
          background: 'radial-gradient(' + colour + ' 0%, ' + d3Col + ' 100%)'
        }
      } else return {}
    },
    handleVisible() { return this.value != null },
    handle1Value() {
      if (this.handle1) {
        var val = 0;
        if (this.reverse) {
          val = this.max + (this.handle1Pos / this.px.max * (this.max - this.min) * -1)
        } else {
          val = this.min + ((this.handle1Pos / this.px.max) * (this.max - this.min))
        }
        return parseFloat(Number.parseFloat(val).toFixed(this.stepDepth))
      } else return false
    },
    handle2Value() {
      if (this.handle2) {
        var val = 0;
        if (this.reverse) {
          val = this.max + (this.handle2Pos / this.px.max * (this.max - this.min) * -1)
        } else {
          val = this.min + ((this.handle2Pos / this.px.max) * (this.max - this.min))
        }
        return parseFloat(Number.parseFloat(val).toFixed(this.stepDepth))
      } else return false
    },
    px() {
      return { min: this.handle1['min' + this.dimension], max: this.handle1['max' + this.dimension] }
    },
    sliderBarStyle() {
      if (this.colours)
        return {
          'background': this.getGradient(),
          'background-size': this.getGradientSize(),
          'background-position': this.vertical && this.reverse ? 'bottom' : this.vertical ? 'top' : this.reverse ? 'right' : 'left'
        }
      else return false
    },
    stepDepth() { return (this.step + "").split(".").length == 2 ? (this.step + "").split(".")[1].length : 0 },
  },
  methods: {
    setupSlider() {
      this.setupHandle(1, this.$refs.handle1)
      if (this.range) {
        this.setupHandle(2, this.$refs.handle2)
      }
      this.setHandleRadius()
      this.setPositionFromValue()
    },
    setupHandle(num, ref) {
      this['handle' + num] = Draggable.create(ref, {
        type: this.dimension,
        bounds: this.$refs.slider,
        throwProps: true,
        onDrag: this['setHandle' + num + 'Position'],
        onDragEnd: this['setHandle' + num + 'PositionDrop'],
      })[0];
    },
    popoverPosition(n) { return this['handle' + n + 'Pos'] },
    popoverStyle(n) {
      var styleObj = {}
      styleObj[this.vertical ? 'top' : 'left'] = this.popoverPosition(n) + this.handleRadius - (this.popoverSize(n) / 2) + 'px'
      if (this.colours && this.colourPopover) styleObj.background = this.getColourFromValue(this.value)
      return styleObj
    },
    setHandleRadius() { this.handleRadius = parseInt(this.handle1.target.getBoundingClientRect()[this.vertical ? 'height' : 'width'] / 2); },
    popoverSize(n) { return this.$refs['popover' + n] ? this.$refs['popover' + n].getBoundingClientRect()[this.vertical ? 'height' : 'width'] : false },
    resize() {
      if (this['client' + this.dimension] == this.$el[this.vertical ? 'clientHeight' : 'clientWidth']) return;
      this.handle1.applyBounds(this.$refs.slider)
      this.setPositionFromValue()
    },
    getGradient() {
      var grads = this.colours.map((col, i) => { return col + ' ' + (i / (this.colours.length - 1) * 100) + '%' })
      var direction = this.vertical && this.reverse ? 'top' : this.vertical ? 'bottom' : this.reverse ? 'left' : 'right'
      return 'linear-gradient(to ' + direction + ', ' + grads.join(',') + ')';
    },
    getGradientSize() {
      var gradPc = ''
      if (this.handle1PosPx && this.colours) {
        var Pc = (this.handle1PosPx / this.px.max)
        if (this.reverse) { Pc = 1 - Pc }
        gradPc = 100 / Pc + '%'
        gradPc = this.vertical ? '100% ' + gradPc : gradPc + ' 100%'
      }
      return gradPc
    },
    getGridValue(i) { return scaleLinear().domain([0, this.divisions]).range([this.min, this.max])(i); },
    getDisplayValue(value) {
      if (value != null) {
        var val = Number.parseFloat(value)
        if (this.stepDepth) val = val.toFixed(this.stepDepth);
        if (this.prefix) val = this.prefix + val;
        if (this.postfix) val = val + this.postfix;
        return val
      }
    },
    getColourFromValue(val) {
      var domain = [this.min]
      for (var i = 1; i < this.colours.length - 1; i++) { domain.push(this.max / this.colours.length * i) }
      domain.push(this.max)
      return scaleLinear().domain(domain).range(this.colours)(val);
    },
    steps(value) {
      var step = (this.px.max / (this.max - this.min)) * this.step
      return Math.round(value / step) * step
    },
    setHandle1Position() {
      this.handle1Pos = this.handle1['end' + this.dimension]
      var pos = this.steps(this.handle1Pos)
      this.redrawBar(this.handle1Pos + (this.handleRadius / 2), true)
      this.handle1PosPx = pos
    },
    setHandle2Position() {
      this.handle2Pos = this.handle2['end' + this.dimension]
      this.handle2PosPx = this.steps(this.handle2Pos)
      this.redrawBar(this.handle2Pos + (this.handleRadius / 2), true)
    },
    setHandle1PositionDrop() {
      var pos = this.steps(this.handle1['end' + this.dimension])
      this.handle1Pos = pos
      this.handle1PosPx = pos
      TweenLite.to(this.$refs.handle1, 0.2, {
        [this.dimension.toLowerCase()]: pos
      });
      this.redrawBar(pos, true)
    },
    setHandle2PositionDrop() {
      var pos = this.steps(this.handle2['end' + this.dimension])
      this.handle2Pos = pos
      this.handle2PosPx = pos
      var handleProps = {
        [this.dimension.toLowerCase()]: pos
      }
      TweenLite.to(this.$refs.handle2, 0.2, handleProps);
      this.redrawBar(pos, true)
    },
    getPositionFromValue(val) {
      if (val === null) return false
      var pos = ((val - this.min) / (this.max - this.min) * this.handle1['max' + this.dimension])
      if (this.reverse) return this.handle1['max' + this.dimension] - pos
      return pos
    },
    setPositionFromValue() {
      var pos = 0
      if (this.value === null || !this.handle1) return false
      if (this.range) {
        pos = [this.getPositionFromValue(this.value[0]), this.getPositionFromValue(this.value[1])].sort((a, b) => { return a - b })
        TweenLite.to(this.$refs.handle1, 0.2, {
          [this.dimension.toLowerCase()]: pos[0]
        });
        TweenLite.to(this.$refs.handle2, 0.2, {
          [this.dimension.toLowerCase()]: pos[1]
        });
        this.handle1Pos = pos[0]
        this.handle1PosPx = pos[0]
        this.handle2Pos = pos[1]
        this.handle2PosPx = pos[1]
        this.redrawBar(pos, true)
      } else {
        pos = this.getPositionFromValue(this.value)
        TweenLite.to(this.$refs.handle1, 0.2, {
          [this.dimension.toLowerCase()]: pos
        });
        this.handle1Pos = pos
        this.redrawBar(pos, true)
        this.handle1PosPx = pos
      }
    },
    getWithinRange(number) { return (number < this.px.min) ? this.px.min : (number > this.px.max) ? this.px.max : (this.step) ? this.steps(number) : number },
    redrawBar(pos, animate) {
      var barProps = {}
      if (this.range) {
        var posArr = [this.getPositionFromValue(this.value[0]), this.getPositionFromValue(this.value[1])].sort((a, b) => { return a - b })
        barProps[this.dimension == 'X' ? 'x' : 'y'] = posArr[0] + 'px'
        barProps[this.dimension == 'X' ? 'width' : 'height'] = (posArr[1] - posArr[0]) + 'px'
      } else {
        if (this.reverse) {
          barProps[this.dimension == 'X' ? 'x' : 'y'] = pos + 'px'
          barProps[this.dimension == 'X' ? 'width' : 'height'] = ((this.px.max + this.handleRadius) - pos) + 'px'
        } else {
          barProps[this.dimension == 'X' ? 'width' : 'height'] = pos + 'px'
        }
      }
      TweenLite.to(this.$refs.sliderBar, animate ? 0.2 : 0, barProps);
    },
    getClosestHandle(px) {
      if (px < this.handle1Pos) {
        return 'handle1'
      } else if (px > this.handle2Pos) {
        return 'handle2'
      } else if ((px - this.handle1Pos) > (this.handle2Pos - px)) {
        return 'handle2'
      } else {
        return 'handle1'
      }
    },
    clickSliderTrack(e) {
      if (this.disabled || e.target.classList.contains('handle')) return;
      e.preventDefault()
      e.stopPropagation()
      var pos = this.getWithinRange(e['offset' + this.dimension] - this.handleRadius)
      if (this.range) {
        var handle = this.getClosestHandle(pos)
        this[handle + 'Pos'] = pos
        TweenLite.to(this.$refs[handle], 0.2, {
          [this.dimension.toLowerCase()]: pos
        });
        this.redrawBar(pos, true)
        this[handle + 'PosPx'] = pos
        this[handle].update()
      } else {

        this.handle1Pos = pos
        TweenLite.to(this.$refs.handle1, 0.2, {
          [this.dimension.toLowerCase()]: pos
        });
        this.redrawBar(pos, true)
        this.handle1PosPx = pos
        this.handle1.update()
      }
    }
  },
  watch: {
    steps() { if (this.handle1) { this.handle1.update() } },
    value(val) {
      if (val !== this.handle1Value) this.setPositionFromValue()
    },
    handle1Pos() {
      if (this.range) {
        this.$emit('input', [this.handle1Value, this.handle2Value].sort((a, b) => { return a - b }))

      } else {
        this.$emit('input', this.handle1Value)
      }
    },
    handle2Pos() {
      if (this.range) {
        this.$emit('input', [this.handle1Value, this.handle2Value].sort((a, b) => { return a - b }))
      }
    },
    handleVisible() {
      this.$nextTick(() => {
        this.setHandleRadius();
      })
    }
  }
}
</script>
<style lang="scss">
$sliderLength:400px;
$popoverSize:40px;
$sliderRadius:13.5px;
$gridDepth:10px;

.slider-container {
  position: relative;
  margin-bottom: 1em;
  height: $popoverSize + ($sliderRadius * 2) + ($gridDepth * 3) + 10;

  &.disabled {
    opacity: 0.6;

    .slider-popover,
    .handle,
    .slider-bar {
      display: none;
    }

  }

  &.unanswered {

    .slider-popover,
    .handle,
    .slider-bar {
      display: none;
    }

  }
}

.popover-track {
  position: relative;
  height: $popoverSize;

  .slider-popover {
    transition: 0.05s linear;
    position: absolute;
    padding: 4px;
    border-radius: 4px;
    background: #638cae;
    text-shadow: 0px 2px 2px #062741;
    color: white;
    border: thin solid #ccc;

    &:empty {
      display: none;
    }
  }
}

.slider {
  position: relative;
  height: $sliderRadius * 2;

  .slider-track,
  .slider-bar {
    position: absolute;
    width: calc(100% - #{$sliderRadius});
    height: 50%;
    top: 25%;
    z-index: 1;
    left: $sliderRadius / 2;
    cursor: pointer;
  }

  .slider-bar {
    position: absolute;
    width: 0px;
    height: 50%;
    top: 25%;
    z-index: 1;
    left: $sliderRadius / 2;
  }
}

.slider-track {
  border-radius: $sliderRadius;
  border: 1px solid #CCC;
  background: linear-gradient(to bottom, #DDD -50%, #FFF 150%);
  box-shadow: inset 0px 1px 2px 1px rgba(0, 0, 0, 0.2), inset 0px 1px 13px 0px rgba(0, 0, 0, 0.1);

}

.slider-bar {
  box-shadow: inset -1px -1px 2px 3px rgba(0, 0, 0, 0.2), inset 5px -7px 12px 3px rgba(255, 255, 255, 0.3), -1px 2px 4px 0px rgba(111, 111, 111, 0.3);
  pointer-events: none;
  border-radius: $sliderRadius;
  background: linear-gradient(to top, #428bca 0%, #7fc3e8 100%);
}

.slider-container-vertical {
  float: left;
  width: ($popoverSize * 2) + ($sliderRadius * 2) + ($gridDepth * 3) + $sliderRadius;
  height: $sliderLength;
  margin-right: 1em;

  .popover-track {
    float: left;
    left: 0;
    width: $popoverSize * 2;
    height: $sliderLength;

    .slider-popover {
      right: 0;
    }
  }

  .slider {
    float: left;
    width: $sliderRadius * 2;
    height: $sliderLength;

    .slider-track,
    .slider-bar {
      width: 50%;
      height: calc(100% - #{$sliderRadius} * 2);
      left: 25%;
      top: $sliderRadius / 2;
    }

    .slider-track {
      background: linear-gradient(to right, #DDD -50%, #FFF 150%);
      box-shadow: inset 1px 0px 2px 1px rgba(0, 0, 0, 0.2), inset 2px 0px 13px 0px rgba(0, 0, 0, 0.1);
    }

    .slider-bar {
      box-shadow: inset -1px -1px 2px 3px rgba(0, 0, 0, 0.2), inset -7px 5px 12px 3px rgba(255, 255, 255, 0.3), 2px -1px 4px 0px rgba(111, 111, 111, 0.3);
      background: linear-gradient(to left, #428bca 0%, #7fc3e8 100%);

    }
  }
}

.handle {
  position: absolute;
  cursor: pointer;
  width: $sliderRadius * 2;
  height: $sliderRadius * 2;
  border: 1px solid #AAA;
  border-radius: 50%;
  background: linear-gradient(to bottom, white 0%, gainsboro 20%, white 100%);
  box-shadow: 0px 3px 11px 3px rgba(0, 0, 0, 0.1), 0px 3px 2px 0px rgba(0, 0, 0, 0.2), inset 1px -4px 4px 1px rgba(0, 0, 0, 0.2);
  z-index: 10;

  &:hover {
    background: linear-gradient(to bottom, white 0%, gainsboro 50%, white 100%);
  }
}

.grid {
  position: relative;

  width: calc(100% - #{$sliderRadius}*2);
  height: $gridDepth;
  left: $sliderRadius;
  top: - $gridDepth +3px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;

  &.grid-reverse {
    flex-direction: row-reverse;

    .grid-unit:last-child {
      flex: auto;
    }

    .grid-unit:first-child {
      flex: none;
    }
  }

  .grid-unit {
    border-left: 1px solid #777;
    flex: auto;
    justify-content: center;
    position: relative;

    &:last-child {
      flex: none;
    }

    background: linear-gradient(to right, transparent, transparent 24%, #d0cece 25%, transparent 26%, transparent 49%, #d0cece 50%, transparent 51%, transparent 74%, #d0cece 75%, transparent 76%);
    background-size: 100% 50%;
    background-repeat-y: no-repeat;
  }

  .grid-num {
    position: absolute;
    font-size: 12px;

  }

  &:not(.grid-vertical) {
    .grid-num {
      width: 100%;
      margin-left: -50%;
      text-align: center;
      top: 0.8em;
      left: 0;
    }

    .grid-unit:last-of-type {
      .grid-num {
        width: 5em;
        left: -2.5em;
      }
    }

    &.grid-reverse .grid-unit:last-of-type {
      .grid-num {
        width: 5em;
        left: 2.5em;
      }
    }
  }

  &.grid-vertical {
    float: left;
    left: - $gridDepth+3px;
    top: $sliderRadius;
    width: $gridDepth;
    height:calc(100% - #{$sliderRadius}*2);
    flex-direction: column;

    .grid-unit {
      border-left: none;
      border-top: 1px solid #ccc;
      background: linear-gradient(to bottom, transparent, transparent 23%, #d0cece 25%, transparent 27%, transparent 48%, #d0cece 50%, transparent 52%, transparent 73%, #d0cece 75%, transparent 77%);
      background-size: 50% 100%;
      background-repeat-x: no-repeat;
    }

    .grid-num {
      left: 1.4em;
      top: -0.8em;
    }

    &.grid-reverse {
      flex-direction: column-reverse;
    }

  }

}
</style>