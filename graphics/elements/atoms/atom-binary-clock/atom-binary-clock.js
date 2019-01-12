var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomBinaryClockElement_1;
import Random from "../../../../shared/lib/vendor/random.js";
const NUM_BITS = 4;
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let AtomBinaryClockElement = AtomBinaryClockElement_1 = class AtomBinaryClockElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.pulsating = false;
    this.randomized = false;
  }

  ready() {
    super.ready();
    const cells = Array.from(this.shadowRoot.querySelectorAll('.cell'));
    ['hourOnes', 'minuteTens', 'minuteOnes', 'secondTens', 'secondOnes', 'millisecondHundredths'].forEach((columnName, index) => {
      const offset = index * NUM_BITS;
      this[`_$${columnName}Cells`] = cells.slice(offset, offset + NUM_BITS);
    });
  }

  startRandomFlashing() {
    if (window.__SCREENSHOT_TESTING__) {
      return;
    }

    if (this._randomFlashingInterval) {
      return this._randomFlashingInterval;
    }

    this._randomFlashingInterval = window.setInterval(() => {
      this.flashRandomCell();
    }, 100);
    return this._randomFlashingInterval;
  }

  stopRandomFlashing() {
    const cells = Array.from(this.shadowRoot.querySelectorAll('.cell--flash'));
    cells.forEach(cell => cell.classList.remove('cell--flash'));
    clearInterval(this._randomFlashingInterval);
    this._randomFlashingInterval = undefined;
  }

  flashRandomCell() {
    const availableCells = Array.from(this.shadowRoot.querySelectorAll('.cell:not(.cell--flash)'));

    if (availableCells.length === 0) {
      return;
    }

    const cell = Random.pick(Random.engines.browserCrypto, availableCells);
    cell.classList.add('cell--flash');
    setTimeout(() => {
      cell.classList.remove('cell--flash', 'cell--on');
    }, 450);
  }

  _updateHours() {
    this._setColumn(numberPlace(this.hours, 1), this._$hourOnesCells);
  }

  _updateMinutes() {
    this._setColumn(numberPlace(this.minutes, 10), this._$minuteTensCells);

    this._setColumn(numberPlace(this.minutes, 1), this._$minuteOnesCells);
  }

  _updateSeconds() {
    this._setColumn(numberPlace(this.seconds, 10), this._$secondTensCells);

    this._setColumn(numberPlace(this.seconds, 1), this._$secondOnesCells);
  }

  _updateMilliseconds() {
    this._setColumn(numberPlace(this.milliseconds, 100), this._$millisecondHundredthsCells);
  }

  _randomizedChanged(newVal) {
    if (newVal) {
      this.startRandomFlashing();
    } else {
      this.stopRandomFlashing();
    }
  }

  _setColumn(num, cells) {
    num.toString(2).padStart(NUM_BITS, '0').split('').forEach((oneOrZero, index) => {
      const on = oneOrZero === '1';
      cells[index].classList.toggle('cell--on', on);
    });
  }

};

__decorate([property({
  type: Number,
  observer: AtomBinaryClockElement_1.prototype._updateHours
})], AtomBinaryClockElement.prototype, "hours", void 0);

__decorate([property({
  type: Number,
  observer: AtomBinaryClockElement_1.prototype._updateMinutes
})], AtomBinaryClockElement.prototype, "minutes", void 0);

__decorate([property({
  type: Number,
  observer: AtomBinaryClockElement_1.prototype._updateSeconds
})], AtomBinaryClockElement.prototype, "seconds", void 0);

__decorate([property({
  type: Number,
  observer: AtomBinaryClockElement_1.prototype._updateMilliseconds
})], AtomBinaryClockElement.prototype, "milliseconds", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], AtomBinaryClockElement.prototype, "pulsating", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  observer: AtomBinaryClockElement_1.prototype._randomizedChanged
})], AtomBinaryClockElement.prototype, "randomized", void 0);

AtomBinaryClockElement = AtomBinaryClockElement_1 = __decorate([customElement('atom-binary-clock')], AtomBinaryClockElement);
export default AtomBinaryClockElement;

function numberPlace(num, place) {
  if (typeof place !== 'number') {
    throw new Error('must provide a place and it must be a number');
  }

  if (place === 1) {
    return num % 10;
  }

  return Math.floor(num / place);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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