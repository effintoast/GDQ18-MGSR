var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { Power1, TimelineMax, TweenLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const NAME_FADE_IN_EASE = Power1.easeOut;
const NAME_FADE_OUT_EASE = Power1.easeIn;
let AtomNameplateElement = class AtomNameplateElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.noLeftCap = false;
    this.noRightCap = false;
    this.name = '';
    this.twitch = '';
    /**
     * How long, in seconds, to fade names in/out.
     *
     * For example, a value of 0.33 means that the fade out will take 0.33
     * seconds, and then the subsequent fade in will take another 0.33 seconds.
     */

    this.nameFadeDuration = 0.33;
    this._nameTL = new TimelineMax({
      repeat: -1,
      paused: true
    });
  }

  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      // Workaround for: https://bugs.chromium.org/p/chromium/issues/detail?id=844880
      this.shadowRoot.querySelectorAll('sc-fitted-text').forEach(node => {
        node.$.fittedContent.style.webkitBackgroundClip = 'text';
      }); // Create looping anim for main nameplate.

      this._nameTL.to(this.$.names, this.nameFadeDuration, {
        onStart: () => {
          this.$.namesTwitch.classList.remove('hidden');
          this.$.namesName.classList.add('hidden');
        },
        opacity: 1,
        ease: NAME_FADE_IN_EASE
      });

      this._nameTL.to(this.$.names, this.nameFadeDuration, {
        opacity: 0,
        ease: NAME_FADE_OUT_EASE
      }, '+=10');

      this._nameTL.to(this.$.names, this.nameFadeDuration, {
        onStart: () => {
          this.$.namesTwitch.classList.add('hidden');
          this.$.namesName.classList.remove('hidden');
        },
        opacity: 1,
        ease: NAME_FADE_IN_EASE
      });

      this._nameTL.to(this.$.names, this.nameFadeDuration, {
        opacity: 0,
        ease: NAME_FADE_OUT_EASE
      }, '+=80');
    });
  }

  updateName({
    alias = '?',
    twitchAlias = '',
    rotate = true
  } = {}) {
    const doTheDangThing = () => {
      this.name = alias;
      this.twitch = twitchAlias;
      this.$.namesName.classList.add('hidden');
      this.$.namesTwitch.classList.remove('hidden');

      if (!this.twitch) {
        this._nameTL.pause();

        this.$.namesName.classList.remove('hidden');
        this.$.namesTwitch.classList.add('hidden');
        TweenLite.to(this.$.names, this.nameFadeDuration, {
          opacity: 1,
          ease: NAME_FADE_IN_EASE
        });
      } else if (rotate) {
        this._nameTL.restart();
      } else {
        this._nameTL.pause();

        TweenLite.to(this.$.names, this.nameFadeDuration, {
          opacity: 1,
          ease: NAME_FADE_IN_EASE
        });
      }

      Polymer.RenderStatus.afterNextRender(this, this.fitName);
    };

    if (window.__SCREENSHOT_TESTING__) {
      doTheDangThing();
      return;
    }

    TweenLite.to(this.$.names, this.nameFadeDuration, {
      opacity: 0,
      ease: NAME_FADE_OUT_EASE,
      callbackScope: this,
      onComplete: doTheDangThing
    });
  }

  fitName() {
    Polymer.flush();
    const MAX_NAME_WIDTH = this.$.names.clientWidth - 32;
    const MAX_TWITCH_WIDTH = MAX_NAME_WIDTH - 20;
    const twitchText = this.$.namesTwitch.querySelector('sc-fitted-text');
    this.$.namesName.maxWidth = MAX_NAME_WIDTH;
    twitchText.maxWidth = MAX_TWITCH_WIDTH;
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], AtomNameplateElement.prototype, "noLeftCap", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], AtomNameplateElement.prototype, "noRightCap", void 0);

__decorate([property({
  type: String
})], AtomNameplateElement.prototype, "name", void 0);

__decorate([property({
  type: String
})], AtomNameplateElement.prototype, "twitch", void 0);

__decorate([property({
  type: Number
})], AtomNameplateElement.prototype, "nameFadeDuration", void 0);

__decorate([property({
  type: Object
})], AtomNameplateElement.prototype, "_nameTL", void 0);

AtomNameplateElement = __decorate([customElement('atom-nameplate')], AtomNameplateElement);
export default AtomNameplateElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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