var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AtomRefreshIndicatorElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
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

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  observer: AtomRefreshIndicatorElement_1.prototype._indeterminateChanged
})], AtomRefreshIndicatorElement.prototype, "indeterminate", void 0);

__decorate([property({
  type: String
})], AtomRefreshIndicatorElement.prototype, "timeUntilRefresh", void 0);

AtomRefreshIndicatorElement = AtomRefreshIndicatorElement_1 = __decorate([customElement('atom-refresh-indicator')], AtomRefreshIndicatorElement);
export default AtomRefreshIndicatorElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20tcmVmcmVzaC1pbmRpY2F0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLDJCQUEyQixHQUFBLDZCQUFBLEdBQWhELE1BQXFCLDJCQUFyQixTQUF5RCxPQUFPLENBQUMsT0FBakUsQ0FBd0U7QUFMeEU7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFHQyxTQUFBLGFBQUEsR0FBZ0IsSUFBaEI7QUFHQSxTQUFBLGdCQUFBLEdBQW1CLEtBQW5CO0FBdUNBOztBQW5DQSxFQUFBLGNBQWMsQ0FBQyxPQUFELEVBQWdCO0FBQzdCLFVBQU0sYUFBYSxHQUFHLEtBQUssQ0FBTCxDQUFPLFlBQVAsQ0FBdEI7QUFDQSxTQUFLLGFBQUwsR0FBcUIsS0FBckI7QUFDQSxTQUFLLGFBQUw7QUFDQSxJQUFBLGFBQWEsQ0FBQyxLQUFkLENBQW9CLFNBQXBCLEdBQWdDLEVBQWhDO0FBRUEsVUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUwsRUFBdkI7QUFDQSxTQUFLLGtCQUFMLEdBQTBCLE1BQU0sQ0FBQyxXQUFQLENBQW1CLE1BQUs7QUFDakQsWUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUwsRUFBckI7QUFDQSxZQUFNLG1CQUFtQixHQUFHLFlBQVksR0FBRyxjQUEzQztBQUNBLFlBQU0sZ0JBQWdCLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFMLENBQVUsbUJBQW1CLEdBQUcsSUFBaEMsQ0FBbkM7QUFDQSxZQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLG1CQUFtQixJQUFJLE9BQU8sR0FBRyxJQUFkLENBQTVCLEVBQWlELENBQWpELElBQXNELEdBQTdFO0FBRUEsTUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQixTQUFwQixHQUFnQyxlQUFlLGNBQWMsSUFBN0Q7QUFDQSxXQUFLLGdCQUFMLEdBQXdCLElBQUksTUFBTSxDQUFDLGdCQUFELENBQU4sQ0FBeUIsUUFBekIsQ0FBa0MsQ0FBbEMsRUFBcUMsR0FBckMsQ0FBeUMsRUFBckU7O0FBRUEsVUFBSSxnQkFBZ0IsSUFBSSxDQUF4QixFQUEyQjtBQUMxQixRQUFBLGFBQWEsQ0FBQyxLQUFLLGtCQUFOLENBQWI7QUFDQSxhQUFLLGFBQUwsR0FBcUIsSUFBckI7QUFDQTtBQUNELEtBYnlCLEVBYXZCLElBQUksRUFibUIsQ0FBMUI7QUFjQTs7QUFFRCxFQUFBLGFBQWEsR0FBQTtBQUNaLFFBQUksS0FBSyxrQkFBVCxFQUE2QjtBQUM1QixNQUFBLGFBQWEsQ0FBQyxLQUFLLGtCQUFOLENBQWI7QUFDQTtBQUNEOztBQUVELEVBQUEscUJBQXFCLENBQUMsTUFBRCxFQUFnQjtBQUNwQyxRQUFJLE1BQUosRUFBWTtBQUNYLFdBQUssYUFBTDtBQUNBLFdBQUssZ0JBQUwsR0FBd0IsS0FBeEI7QUFDQTtBQUNEOztBQTNDc0UsQ0FBeEU7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsT0FBUDtBQUFnQixFQUFBLGtCQUFrQixFQUFFLElBQXBDO0FBQTBDLEVBQUEsUUFBUSxFQUFFLDZCQUEyQixDQUFDLFNBQTVCLENBQXNDO0FBQTFGLENBQUQsQ0FDVCxDQUFBLEUscUNBQUEsRSxlQUFBLEUsS0FBcUIsQ0FBckIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUscUNBQUEsRSxrQkFBQSxFLEtBQXlCLENBQXpCLENBQUE7O0FBTG9CLDJCQUEyQixHQUFBLDZCQUFBLEdBQUEsVUFBQSxDQUFBLENBRC9DLGFBQWEsQ0FBQyx3QkFBRCxDQUNrQyxDQUFBLEVBQTNCLDJCQUEyQixDQUEzQjtlQUFBLDJCIiwic291cmNlUm9vdCI6IiJ9