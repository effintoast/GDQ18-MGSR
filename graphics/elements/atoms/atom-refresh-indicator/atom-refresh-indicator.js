var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AtomRefreshIndicatorElement_1;
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let AtomRefreshIndicatorElement = AtomRefreshIndicatorElement_1 = class AtomRefreshIndicatorElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.indeterminate = true;
        this.timeUntilRefresh = ':??';
    }
    startCountdown(seconds) {
        const meterFillElem = this.$['meter-fill'];
        this.indeterminate = false;
        this.stopCountdown();
        meterFillElem.style.transform = '';
        const startTimestamp = Date.now();
        this._countdownInterval = window.setInterval(() => {
            const nowTimestamp = Date.now();
            const millisecondsElapsed = nowTimestamp - startTimestamp;
            const secondsRemaining = seconds - Math.ceil(millisecondsElapsed / 1000);
            const percentElapsed = Math.min(millisecondsElapsed / (seconds * 1000), 1) * 100;
            meterFillElem.style.transform = `translateX(-${percentElapsed}%)`;
            this.timeUntilRefresh = `:${String(secondsRemaining).padStart(2, '0')}`;
            if (secondsRemaining <= 0) {
                clearInterval(this._countdownInterval);
                this.indeterminate = true;
            }
        }, 1 / 60);
    }
    stopCountdown() {
        if (this._countdownInterval) {
            clearInterval(this._countdownInterval);
        }
    }
    _indeterminateChanged(newVal) {
        if (newVal) {
            this.stopCountdown();
            this.timeUntilRefresh = ':00';
        }
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true, observer: AtomRefreshIndicatorElement_1.prototype._indeterminateChanged })
], AtomRefreshIndicatorElement.prototype, "indeterminate", void 0);
__decorate([
    property({ type: String })
], AtomRefreshIndicatorElement.prototype, "timeUntilRefresh", void 0);
AtomRefreshIndicatorElement = AtomRefreshIndicatorElement_1 = __decorate([
    customElement('atom-refresh-indicator')
], AtomRefreshIndicatorElement);
export default AtomRefreshIndicatorElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1yZWZyZXNoLWluZGljYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0b20tcmVmcmVzaC1pbmRpY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQiwyQkFBMkIsbUNBQWhELE1BQXFCLDJCQUE0QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBTHhFOzs7T0FHRztJQUNIOztRQUdDLGtCQUFhLEdBQUcsSUFBSSxDQUFDO1FBR3JCLHFCQUFnQixHQUFHLEtBQUssQ0FBQztJQXVDMUIsQ0FBQztJQW5DQSxjQUFjLENBQUMsT0FBZTtRQUM3QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBbUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsYUFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRW5DLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7WUFDakQsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLE1BQU0sbUJBQW1CLEdBQUcsWUFBWSxHQUFHLGNBQWMsQ0FBQztZQUMxRCxNQUFNLGdCQUFnQixHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDO1lBQ3pFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBRWpGLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGVBQWUsY0FBYyxJQUFJLENBQUM7WUFDbEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDO1lBRXhFLElBQUksZ0JBQWdCLElBQUksQ0FBQyxFQUFFO2dCQUMxQixhQUFhLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3ZDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2FBQzFCO1FBQ0YsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxhQUFhO1FBQ1osSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsYUFBYSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0YsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQWU7UUFDcEMsSUFBSSxNQUFNLEVBQUU7WUFDWCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNGLENBQUM7Q0FDRCxDQUFBO0FBMUNBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLDZCQUEyQixDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBQyxDQUFDO2tFQUN0RztBQUdyQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztxRUFDQTtBQUxMLDJCQUEyQjtJQUQvQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7R0FDbkIsMkJBQTJCLENBNEMvQztlQTVDb0IsMkJBQTJCIn0=