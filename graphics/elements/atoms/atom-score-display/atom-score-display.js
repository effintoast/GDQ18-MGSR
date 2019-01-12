var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { Power1, TweenLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const SCORE_FADE_IN_EASE = Power1.easeOut;
const SCORE_FADE_OUT_EASE = Power1.easeIn;
const scoresRep = nodecg.Replicant('scores');
let AtomScoreDisplayElement = class AtomScoreDisplayElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    /**
     * How long, in seconds, to fade scores in/out.
     *
     * For example, a value of 0.33 means that the fade out will take 0.33
     * seconds, and then the subsequent fade in will take another 0.33 seconds.
     */

    this.scoreFadeDuration = 0.33;
  }

  ready() {
    super.ready(); // Workaround for: https://bugs.chromium.org/p/chromium/issues/detail?id=844880

    this.shadowRoot.querySelectorAll('sc-fitted-text').forEach(node => {
      node.$.fittedContent.style.webkitBackgroundClip = 'text';
    });
    Polymer.RenderStatus.afterNextRender(this, () => {
      scoresRep.on('change', this.updateScore.bind(this));
    });
  }

  updateScore(newScores) {
    if (!newScores || typeof newScores[this.teamIndex] !== 'number') {
      return;
    }

    if (newScores[this.teamIndex] === this.score) {
      return;
    }

    TweenLite.to(this.$.scoreText, this.scoreFadeDuration, {
      opacity: 0,
      ease: SCORE_FADE_OUT_EASE,
      callbackScope: this,

      onComplete() {
        this.score = newScores[this.teamIndex];
        TweenLite.to(this.$.scoreText, this.scoreFadeDuration, {
          opacity: 1,
          ease: SCORE_FADE_IN_EASE
        });
      }

    });
  }

};

__decorate([property({
  type: Number
})], AtomScoreDisplayElement.prototype, "score", void 0);

__decorate([property({
  type: Number
})], AtomScoreDisplayElement.prototype, "teamIndex", void 0);

__decorate([property({
  type: Number
})], AtomScoreDisplayElement.prototype, "scoreFadeDuration", void 0);

AtomScoreDisplayElement = __decorate([customElement('atom-score-display')], AtomScoreDisplayElement);
export default AtomScoreDisplayElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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