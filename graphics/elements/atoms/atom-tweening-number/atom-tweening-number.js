var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomTweeningNumberElement_1;
import { TweenLite, Power2 } from 'gsap';
const { customElement, property } = Polymer.decorators;
// By default, displayValueTransform converts displayValue to a display with no fraction.
const defaultDisplayValueTransform = (displayValue) => {
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
__decorate([
    property({ type: Number, observer: AtomTweeningNumberElement_1.prototype._valueChanged })
], AtomTweeningNumberElement.prototype, "value", void 0);
__decorate([
    property({ type: Object })
], AtomTweeningNumberElement.prototype, "displayValueTransform", void 0);
__decorate([
    property({ type: Number })
], AtomTweeningNumberElement.prototype, "intervalLength", void 0);
__decorate([
    property({ type: Number })
], AtomTweeningNumberElement.prototype, "timePerValueInterval", void 0);
__decorate([
    property({ type: Number })
], AtomTweeningNumberElement.prototype, "maxDuration", void 0);
__decorate([
    property({ type: Object })
], AtomTweeningNumberElement.prototype, "ease", void 0);
__decorate([
    property({ type: Boolean })
], AtomTweeningNumberElement.prototype, "skipInitial", void 0);
__decorate([
    property({ type: Number })
], AtomTweeningNumberElement.prototype, "_displayValue", void 0);
__decorate([
    property({ type: Boolean })
], AtomTweeningNumberElement.prototype, "_initialized", void 0);
AtomTweeningNumberElement = AtomTweeningNumberElement_1 = __decorate([
    customElement('atom-tweening-number')
], AtomTweeningNumberElement);
export default AtomTweeningNumberElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS10d2VlbmluZy1udW1iZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdG9tLXR3ZWVuaW5nLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBUSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFJN0MsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJELHlGQUF5RjtBQUN6RixNQUFNLDRCQUE0QixHQUFHLENBQUMsWUFBb0IsRUFBRSxFQUFFO0lBQzdELE9BQU8sWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7UUFDM0MscUJBQXFCLEVBQUUsQ0FBQztLQUN4QixDQUFDLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRjs7O0dBR0c7QUFFSCxJQUFxQix5QkFBeUIsaUNBQTlDLE1BQXFCLHlCQUEwQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBTHRFOzs7T0FHRztJQUNIOztRQVFDOzs7O1dBSUc7UUFFSCwwQkFBcUIsR0FBMEIsNEJBQTRCLENBQUM7UUFHNUUsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFbkI7OztXQUdHO1FBRUgseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBRTVCOztXQUVHO1FBRUgsZ0JBQVcsR0FBRyxDQUFDLENBQUM7UUFFaEI7O1dBRUc7UUFFSCxTQUFJLEdBQVMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUU1Qjs7V0FFRztRQUVILGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5COztXQUVHO1FBRUgsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFFbEI7OztXQUdHO1FBRUgsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFFckIsV0FBTSxHQUFxQixJQUFJLENBQUM7SUFxQ2pDLENBQUM7SUFuQ0E7Ozs7T0FJRztJQUNILGlCQUFpQixDQUFDLFVBQWtCO1FBQ25DLE1BQU0sY0FBYyxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsYUFBYSxDQUFDLFFBQWdCO1FBQzdCLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7WUFDOUIsT0FBTztTQUNQO1FBRUQsTUFBTSxVQUFVLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUN2QyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNuQjtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFO1lBQzFDLGFBQWEsRUFBRSxRQUFRO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNmLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNwQixDQUFDO0NBQ0QsQ0FBQTtBQXhGQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLDJCQUF5QixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUMsQ0FBQzt3REFDeEU7QUFRZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzt3RUFDbUQ7QUFHNUU7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7aUVBQ047QUFPbkI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7dUVBQ0c7QUFNNUI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7OERBQ1Q7QUFNaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7dURBQ0c7QUFNNUI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7OERBQ1A7QUFNbkI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0VBQ1A7QUFPbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7K0RBQ0w7QUF0REQseUJBQXlCO0lBRDdDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztHQUNqQix5QkFBeUIsQ0E2RjdDO2VBN0ZvQix5QkFBeUIifQ==