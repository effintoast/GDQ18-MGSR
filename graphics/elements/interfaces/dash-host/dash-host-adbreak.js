var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
let DashHostAdbreakElement = class DashHostAdbreakElement extends Polymer.MutableData(Polymer.Element) {
  start() {
    this.dispatchEvent(new CustomEvent('start', {
      detail: {
        adBreakId: this.adBreak.id
      },
      bubbles: true,
      composed: true
    }));
  }

  cancel() {
    this.dispatchEvent(new CustomEvent('cancel', {
      detail: {
        adBreakId: this.adBreak.id
      },
      bubbles: true,
      composed: true
    }));
  }

  complete() {
    this.dispatchEvent(new CustomEvent('complete', {
      detail: {
        adBreakId: this.adBreak.id
      },
      bubbles: true,
      composed: true
    }));
  }

  _calcStartButtonText(adBreakState) {
    if (adBreakState.canStart) {
      return 'Start Break';
    }

    if (adBreakState.cantStartReason) {
      return adBreakState.cantStartReason;
    }

    return 'Prequisites unmet';
  }

  _calcCompleteButtonHidden(adBreak) {
    const lastAd = adBreak.ads[adBreak.ads.length - 1];
    return lastAd.adType.toLowerCase() !== 'image';
  }

  any(...args) {
    return args.find(arg => Boolean(arg));
  }

};

__decorate([property({
  type: Object
})], DashHostAdbreakElement.prototype, "adBreak", void 0);

DashHostAdbreakElement = __decorate([customElement('dash-host-adbreak')], DashHostAdbreakElement);
export default DashHostAdbreakElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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