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
const canPlayTwitchAd = nodecg.Replicant('twitch:canPlayAd');
const timeLeft = nodecg.Replicant('twitch:timeLeftInAd');
const timeSince = nodecg.Replicant('twitch:timeSinceLastAd');
let DashHostTwitchAdsElement = class DashHostTwitchAdsElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.canPlay = false;
    this.cantPlayReason = '';
    this.timeLeft = '8:88';
    this.timeSince = '8:88:88';
    this.hideControls = false;
  }

  ready() {
    super.ready();
    canPlayTwitchAd.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this.canPlay = newVal.canPlay;
      this.cantPlayReason = newVal.reason;
    });
    timeLeft.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this.timeLeft = newVal.formatted.split('.')[0];
    });
    timeSince.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this.timeSince = newVal.formatted.split('.')[0];
    });
  }

  play() {
    this.$.confirmDialog.open();
  }

  _handleConfirmDialogClosed(e) {
    if (e.detail.confirmed === true) {
      const listbox = this.$.listbox;
      const selectedItem = listbox.selectedItem;

      if (!selectedItem) {
        return;
      }

      const duration = parseInt(selectedItem.getAttribute('data-value'), 10);
      nodecg.sendMessage('twitch:playAd', duration);
    }
  }

  _calcPlayButtonLabel(canPlay, cantPlayReason) {
    if (canPlay) {
      return 'Play Twitch Ad';
    }

    return cantPlayReason;
  }

};

__decorate([property({
  type: Boolean
})], DashHostTwitchAdsElement.prototype, "canPlay", void 0);

__decorate([property({
  type: String
})], DashHostTwitchAdsElement.prototype, "cantPlayReason", void 0);

__decorate([property({
  type: String
})], DashHostTwitchAdsElement.prototype, "timeLeft", void 0);

__decorate([property({
  type: String
})], DashHostTwitchAdsElement.prototype, "timeSince", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], DashHostTwitchAdsElement.prototype, "hideControls", void 0);

DashHostTwitchAdsElement = __decorate([customElement('dash-host-twitch-ads')], DashHostTwitchAdsElement);
export default DashHostTwitchAdsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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