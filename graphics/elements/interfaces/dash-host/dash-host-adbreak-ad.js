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
let DashHostAdbreakAdElement = class DashHostAdbreakAdElement extends Polymer.MutableData(Polymer.Element) {
  static get observers() {
    return ['_updateProgressBar(ad.state.*)'];
  }

  frameNumberToTimeString(fps, frameNumber) {
    if (typeof fps !== 'number' || Number.isNaN(fps) || typeof frameNumber !== 'number' || Number.isNaN(frameNumber)) {
      return ':??';
    }

    return this.formatSeconds(frameNumber / fps);
  }

  completeImageAd() {
    nodecg.sendMessage('intermissions:completeImageAd', this.ad.id);
  }

  _booleanReflect(bool) {
    return bool;
  }

  _updateProgressBar() {
    const progressFillElem = this.$['progress-fill'];

    if (!this.ad) {
      progressFillElem.style.transform = 'scaleX(0)';
      return;
    }

    let percent = this.ad.state.frameNumber / this.ad.state.durationFrames;
    percent = Math.max(percent, 0); // Clamp to minimum 0.

    percent = Math.min(percent, 1); // Clamp to maximum 1.

    progressFillElem.style.transform = `scaleX(${percent})`;
  }

  _calcAdvanceHidden(ad, adBreak) {
    if (!ad || !adBreak) {
      return true;
    }

    const lastAd = adBreak.ads[adBreak.ads.length - 1];
    return ad.adType.toLowerCase() !== 'image' || ad === lastAd;
  }
  /**
   * Formats a number of seconds into a string ([hh:]mm:ss).
   * @param seconds - The number of seconds to format.
   * @returns The formatted time sting.
   */


  formatSeconds(seconds) {
    const hms = {
      h: Math.floor(seconds / 3600),
      m: Math.floor(seconds % 3600 / 60),
      s: Math.floor(seconds % 3600 % 60)
    };
    let str = '';

    if (hms.h) {
      str += `${hms.h}:`;
    }

    str += `${hms.m < 10 ? `0${hms.m}` : hms.m}:${hms.s < 10 ? `0${hms.s}` : hms.s}`;
    return str;
  }

};

__decorate([property({
  type: Object
})], DashHostAdbreakAdElement.prototype, "adBreak", void 0);

__decorate([property({
  type: Object
})], DashHostAdbreakAdElement.prototype, "ad", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_booleanReflect(ad.state.completed)'
})], DashHostAdbreakAdElement.prototype, "completed", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_booleanReflect(ad.state.hasFile)'
})], DashHostAdbreakAdElement.prototype, "hasFile", void 0);

DashHostAdbreakAdElement = __decorate([customElement('dash-host-adbreak-ad')], DashHostAdbreakAdElement);
export default DashHostAdbreakAdElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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