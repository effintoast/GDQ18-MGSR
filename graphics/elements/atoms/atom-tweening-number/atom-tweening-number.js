var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomTweeningNumberElement_1;
import { TweenLite, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators; // By default, displayValueTransform converts displayValue to a display with no fraction.

const defaultDisplayValueTransform = displayValue => {
  return displayValue.toLocaleString('en-US', {
    maximumFractionDigits: 0
  });
};
/**
 * @customElement
 * @polymer
 */


let AtomTweeningNumberElement = AtomTweeningNumberElement_1 = class AtomTweeningNumberElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    /**
     * An optional function which takes in the currently displaying value
     * and transforms it in some way. By default, it converts _displayValue
     * to USD with no cents (whole integer dollar amounts only).
     */

    this.displayValueTransform = defaultDisplayValueTransform;
    this.intervalLength = 1;
    /**
     * How much time to add to the duration of the tween for
     * each "interval" in the value. (Default interval length is 1).
     */

    this.timePerValueInterval = 0.03;
    /**
     * The maximum duration, in seconds, that a single value tween can be.
     */

    this.maxDuration = 3;
    /**
     * The ease to use when tweening between the old value and the new value.
     */

    this.ease = Power2.easeOut;
    /**
     * If true, doesn't tween the first time value is set.
     */

    this.skipInitial = true;
    /**
     * The value displaying right now, this is what actually gets tweened.
     */

    this._displayValue = 0;
    /**
     * Whether or not we have done the first-time setup of the value, which simply sets
     * it with no tween.
     */

    this._initialized = false;
    this._tween = null;
  }
  /**
   * Computes how long the tween will be for a given value delta.
   * @param deltaValue - The delta to compute a tween duration for.
   * @returns - The computed tween duration, in seconds.
   */


  calcTweenDuration(deltaValue) {
    const deltaIntervals = deltaValue / this.intervalLength;
    return Math.min(deltaIntervals * this.timePerValueInterval, this.maxDuration);
  }

  _valueChanged(newValue) {
    if (this.skipInitial && !this._initialized) {
      this._initialized = true;
      this._displayValue = newValue;
      return;
    }

    const deltaValue = newValue - this._displayValue;
    const duration = this.calcTweenDuration(deltaValue);
    this.tween(newValue, duration);
  }

  tween(newValue, duration) {
    if (this._tween) {
      this._tween.kill();

      this._tween = null;
    }

    this._tween = TweenLite.to(this, duration, {
      _displayValue: newValue,
      ease: this.ease
    });
    return this._tween;
  }

};

__decorate([property({
  type: Number,
  observer: AtomTweeningNumberElement_1.prototype._valueChanged
})], AtomTweeningNumberElement.prototype, "value", void 0);

__decorate([property({
  type: Object
})], AtomTweeningNumberElement.prototype, "displayValueTransform", void 0);

__decorate([property({
  type: Number
})], AtomTweeningNumberElement.prototype, "intervalLength", void 0);

__decorate([property({
  type: Number
})], AtomTweeningNumberElement.prototype, "timePerValueInterval", void 0);

__decorate([property({
  type: Number
})], AtomTweeningNumberElement.prototype, "maxDuration", void 0);

__decorate([property({
  type: Object
})], AtomTweeningNumberElement.prototype, "ease", void 0);

__decorate([property({
  type: Boolean
})], AtomTweeningNumberElement.prototype, "skipInitial", void 0);

__decorate([property({
  type: Number
})], AtomTweeningNumberElement.prototype, "_displayValue", void 0);

__decorate([property({
  type: Boolean
})], AtomTweeningNumberElement.prototype, "_initialized", void 0);

AtomTweeningNumberElement = AtomTweeningNumberElement_1 = __decorate([customElement('atom-tweening-number')], AtomTweeningNumberElement);
export default AtomTweeningNumberElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20tdHdlZW5pbmctbnVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLFNBQVEsU0FBUixFQUF5QixNQUF6QixRQUFzQyxvREFBdEM7QUFJQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDLEMsQ0FFQTs7QUFDQSxNQUFNLDRCQUE0QixHQUFJLFlBQUQsSUFBeUI7QUFDN0QsU0FBTyxZQUFZLENBQUMsY0FBYixDQUE0QixPQUE1QixFQUFxQztBQUMzQyxJQUFBLHFCQUFxQixFQUFFO0FBRG9CLEdBQXJDLENBQVA7QUFHQSxDQUpEO0FBTUE7Ozs7OztBQUtBLElBQXFCLHlCQUF5QixHQUFBLDJCQUFBLEdBQTlDLE1BQXFCLHlCQUFyQixTQUF1RCxPQUFPLENBQUMsT0FBL0QsQ0FBc0U7QUFMdEU7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFRQzs7Ozs7O0FBTUEsU0FBQSxxQkFBQSxHQUErQyw0QkFBL0M7QUFHQSxTQUFBLGNBQUEsR0FBaUIsQ0FBakI7QUFFQTs7Ozs7QUFLQSxTQUFBLG9CQUFBLEdBQXVCLElBQXZCO0FBRUE7Ozs7QUFJQSxTQUFBLFdBQUEsR0FBYyxDQUFkO0FBRUE7Ozs7QUFJQSxTQUFBLElBQUEsR0FBYSxNQUFNLENBQUMsT0FBcEI7QUFFQTs7OztBQUlBLFNBQUEsV0FBQSxHQUFjLElBQWQ7QUFFQTs7OztBQUlBLFNBQUEsYUFBQSxHQUFnQixDQUFoQjtBQUVBOzs7OztBQUtBLFNBQUEsWUFBQSxHQUFlLEtBQWY7QUFFQSxTQUFBLE1BQUEsR0FBMkIsSUFBM0I7QUFxQ0E7QUFuQ0E7Ozs7Ozs7QUFLQSxFQUFBLGlCQUFpQixDQUFDLFVBQUQsRUFBbUI7QUFDbkMsVUFBTSxjQUFjLEdBQUcsVUFBVSxHQUFHLEtBQUssY0FBekM7QUFDQSxXQUFPLElBQUksQ0FBQyxHQUFMLENBQVMsY0FBYyxHQUFHLEtBQUssb0JBQS9CLEVBQXFELEtB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