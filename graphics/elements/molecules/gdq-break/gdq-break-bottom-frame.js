var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TweenLite, Power1, TimelineMax } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement
} = Polymer.decorators;
const FADE_DURATION = 0.334;
const FADE_OUT_EASE = Power1.easeIn;
const FADE_IN_EASE = Power1.easeOut;
const currentHost = nodecg.Replicant('currentHost');
const nowPlaying = nodecg.Replicant('nowPlaying');
const LOGO_FADE_INTERVAL = 20;
const LOGO_FADE_DURATION = 1;
const LOGO_FADE_OUT_EASE = Power1.easeIn;
const LOGO_FADE_IN_EASE = Power1.easeOut;
/**
 * @customElement
 * @polymer
 */

let GDQBreakBottomFrameElement = class GDQBreakBottomFrameElement extends Polymer.Element {
  ready() {
    super.ready();
    currentHost.on('change', newVal => {
      this._changeText(this.$['host-text'], newVal);
    });
    nowPlaying.on('change', newVal => {
      this._changeText(this.$['music-text'], `${newVal.game || '?'} - ${newVal.title || '?'}`);
    }); // Logo anim

    const logoTL = new TimelineMax({
      repeat: -1
    });
    logoTL.to(this.$.gdqLogo, LOGO_FADE_DURATION, {
      opacity: 1,
      ease: LOGO_FADE_IN_EASE
    });
    logoTL.to(this.$.gdqLogo, LOGO_FADE_DURATION, {
      opacity: 0,
      ease: LOGO_FADE_OUT_EASE
    }, `+=${LOGO_FADE_INTERVAL}`);
    logoTL.to(this.$.charityLogo, LOGO_FADE_DURATION, {
      opacity: 1,
      ease: LOGO_FADE_IN_EASE
    });
    logoTL.to(this.$.charityLogo, LOGO_FADE_DURATION, {
      opacity: 0,
      ease: LOGO_FADE_OUT_EASE
    }, `+=${LOGO_FADE_INTERVAL}`);
  }

  _changeText(element, newText) {
    TweenLite.to(element, FADE_DURATION, {
      opacity: 0,
      ease: FADE_OUT_EASE,
      callbackScope: this,

      onComplete() {
        element.text = newText;
        TweenLite.to(element, FADE_DURATION, {
          opacity: 1,
          ease: FADE_IN_EASE,
          delay: 0.05
        });
      }

    });
  }

};
GDQBreakBottomFrameElement = __decorate([customElement('gdq-break-bottom-frame')], GDQBreakBottomFrameElement);
export default GDQBreakBottomFrameElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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