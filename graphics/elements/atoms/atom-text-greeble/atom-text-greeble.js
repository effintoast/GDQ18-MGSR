var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomTextGreebleElement_1;
import Random from '../../../../shared/lib/vendor/random';
const { customElement, property } = Polymer.decorators;
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
        for (let i = 0; i < this.length; i++) { // tslint:disable-line:prefer-for-of
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
__decorate([
    property({ type: Number })
], AtomTextGreebleElement.prototype, "length", void 0);
__decorate([
    property({ type: Number, observer: AtomTextGreebleElement_1.prototype._tickRateChanged })
], AtomTextGreebleElement.prototype, "tickRate", void 0);
__decorate([
    property({ type: String })
], AtomTextGreebleElement.prototype, "characters", void 0);
__decorate([
    property({ type: String })
], AtomTextGreebleElement.prototype, "text", void 0);
__decorate([
    property({ type: Array, computed: '_computeCharactersArray(characters)' })
], AtomTextGreebleElement.prototype, "_charactersArray", void 0);
AtomTextGreebleElement = AtomTextGreebleElement_1 = __decorate([
    customElement('atom-text-greeble')
], AtomTextGreebleElement);
export default AtomTextGreebleElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS10ZXh0LWdyZWVibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdG9tLXRleHQtZ3JlZWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsT0FBTyxNQUFNLE1BQU0sc0NBQXNDLENBQUM7QUFFMUQsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJEOzs7R0FHRztBQUVILElBQXFCLHNCQUFzQiw4QkFBM0MsTUFBcUIsc0JBQXVCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFMbkU7OztPQUdHO0lBQ0g7O1FBRUM7O1dBRUc7UUFFSCxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBRVo7O1dBRUc7UUFFSCxhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWI7O1dBRUc7UUFFSCxlQUFVLEdBQUcsc0NBQXNDLENBQUM7SUF1Q3JELENBQUM7SUExQkEsTUFBTTtRQUNMLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNiLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsb0NBQW9DO1lBQzNFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQ3hFO1FBRUQsSUFBSyxNQUFjLENBQUMsc0JBQXNCLEVBQUU7WUFDM0MsR0FBRyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWM7UUFDOUIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLGFBQWEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLENBQUMsRUFBRSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELHVCQUF1QixDQUFDLFVBQWtCO1FBQ3pDLE9BQU8sVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0QsQ0FBQTtBQW5EQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztzREFDYjtBQU1aO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsd0JBQXNCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFDLENBQUM7d0RBQ3pFO0FBTWI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7MERBQzJCO0FBTXBEO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO29EQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxxQ0FBcUMsRUFBQyxDQUFDO2dFQUM5QztBQTFCUCxzQkFBc0I7SUFEMUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0dBQ2Qsc0JBQXNCLENBd0QxQztlQXhEb0Isc0JBQXNCIn0=