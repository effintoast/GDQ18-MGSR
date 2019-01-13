var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomTextGreebleElement_1;
import Random from "../../../../shared/lib/vendor/random.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let AtomTextGreebleElement = AtomTextGreebleElement_1 = class AtomTextGreebleElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    /**
     * The number of characters this greeble should be in length.
     */

    this.length = 15;
    /**
     * How many times per second to update the text.
     */

    this.tickRate = 5;
    /**
     * The set of characters from which to create the random strings.
     */

    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  }

  update() {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      // tslint:disable-line:prefer-for-of
      str += Random.pick(Random.engines.browserCrypto, this._charactersArray);
    }

    if (window.__SCREENSHOT_TESTING__) {
      str = new Array(this.length).fill('0').join('');
    }

    this.text = str;
  }

  _tickRateChanged(newVal) {
    if (this._tickInterval) {
      clearInterval(this._tickInterval);
    }

    this._tickInterval = window.setInterval(() => {
      this.update();
    }, 1000 / newVal);
  }

  _computeCharactersArray(characters) {
    return characters.split('');
  }

};

__decorate([property({
  type: Number
})], AtomTextGreebleElement.prototype, "length", void 0);

__decorate([property({
  type: Number,
  observer: AtomTextGreebleElement_1.prototype._tickRateChanged
})], AtomTextGreebleElement.prototype, "tickRate", void 0);

__decorate([property({
  type: String
})], AtomTextGreebleElement.prototype, "characters", void 0);

__decorate([property({
  type: String
})], AtomTextGreebleElement.prototype, "text", void 0);

__decorate([property({
  type: Array,
  computed: '_computeCharactersArray(characters)'
})], AtomTextGreebleElement.prototype, "_charactersArray", void 0);

AtomTextGreebleElement = AtomTextGreebleElement_1 = __decorate([customElement('atom-text-greeble')], AtomTextGreebleElement);
export default AtomTextGreebleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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