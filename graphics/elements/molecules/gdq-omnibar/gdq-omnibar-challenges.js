var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarChallengesElement = class GDQOmnibarChallengesElement extends Polymer.Element {
  enter(displayDuration) {
    const tl = new TimelineLite();
    this.challenges.forEach((challenge, index) => {
      const challengeElement = document.createElement('gdq-omnibar-challenge');
      challengeElement.classList.add('challenge');
      challengeElement.bid = challenge;
      this.$.challenges.appendChild(challengeElement);
      tl.call(() => {
        this.$.challenges.select(index);
      }, undefined, null, '+=0.03');

      if (index === 0) {
        tl.add(this.$.label.enter(challenge.description));
      } else {
        tl.add(this.$.label.change(challenge.description));
      }

      tl.call(() => {
        tl.pause();
        challengeElement.render();
        const tempTl = challengeElement.enter();
        tempTl.call(tl.resume, undefined, tl);
      });
      tl.call(() => {
        tl.pause();
        const tempTl = challengeElement.exit();
        tempTl.call(tl.resume, undefined, tl);
      }, undefined, null, `+=${displayDuration}`);
    });
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    tl.add(this.$.label.exit());
    return tl;
  }

};

__decorate([property({
  type: Array
})], GDQOmnibarChallengesElement.prototype, "challenges", void 0);

GDQOmnibarChallengesElement = __decorate([customElement('gdq-omnibar-challenges')], GDQOmnibarChallengesElement);
export default GDQOmnibarChallengesElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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