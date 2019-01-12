var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomBinaryClockElement_1;
import Random from '../../../../shared/lib/vendor/random';
const NUM_BITS = 4;
const { customElement, property } = Polymer.decorators;
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
        [
            'hourOnes',
            'minuteTens',
            'minuteOnes',
            'secondTens',
            'secondOnes',
            'millisecondHundredths'
        ].forEach((columnName, index) => {
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
        }
        else {
            this.stopRandomFlashing();
        }
    }
    _setColumn(num, cells) {
        num
            .toString(2)
            .padStart(NUM_BITS, '0')
            .split('')
            .forEach((oneOrZero, index) => {
            const on = oneOrZero === '1';
            cells[index].classList.toggle('cell--on', on);
        });
    }
};
__decorate([
    property({ type: Number, observer: AtomBinaryClockElement_1.prototype._updateHours })
], AtomBinaryClockElement.prototype, "hours", void 0);
__decorate([
    property({ type: Number, observer: AtomBinaryClockElement_1.prototype._updateMinutes })
], AtomBinaryClockElement.prototype, "minutes", void 0);
__decorate([
    property({ type: Number, observer: AtomBinaryClockElement_1.prototype._updateSeconds })
], AtomBinaryClockElement.prototype, "seconds", void 0);
__decorate([
    property({ type: Number, observer: AtomBinaryClockElement_1.prototype._updateMilliseconds })
], AtomBinaryClockElement.prototype, "milliseconds", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], AtomBinaryClockElement.prototype, "pulsating", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true, observer: AtomBinaryClockElement_1.prototype._randomizedChanged })
], AtomBinaryClockElement.prototype, "randomized", void 0);
AtomBinaryClockElement = AtomBinaryClockElement_1 = __decorate([
    customElement('atom-binary-clock')
], AtomBinaryClockElement);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1iaW5hcnktY2xvY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdG9tLWJpbmFyeS1jbG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sc0NBQXNDLENBQUM7QUFFMUQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQixzQkFBc0IsOEJBQTNDLE1BQXFCLHNCQUF1QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBTG5FOzs7T0FHRztJQUNIOztRQWVDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFHbEIsZUFBVSxHQUFHLEtBQUssQ0FBQztJQWtHcEIsQ0FBQztJQXhGQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFFckU7WUFDQyxVQUFVO1lBQ1YsWUFBWTtZQUNaLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtZQUNaLHVCQUF1QjtTQUN2QixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQixNQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDO1lBQy9CLElBQVksQ0FBQyxLQUFLLFVBQVUsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG1CQUFtQjtRQUNsQixJQUFLLE1BQWMsQ0FBQyxzQkFBc0IsRUFBRTtZQUMzQyxPQUFPO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FB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