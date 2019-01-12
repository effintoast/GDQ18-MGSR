var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, TweenLite, Sine } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { typeAnim } from "../../../../shared/lib/type-anims.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
const countdownRunning = nodecg.Replicant('countdownRunning');
const countdownTime = nodecg.Replicant('countdown');
const nowPlaying = nodecg.Replicant('nowPlaying');
/**
 * @customElement
 * @polymer
 */

let GDQCountdownElement = class GDQCountdownElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.countdownTimeline = new TimelineLite({
      autoRemoveChildren: true
    });
    this._fooDebouncer = null;
  }

  ready() {
    super.ready();
    TweenLite.set(this.$.countdown, {
      opacity: 0
    });
    countdownRunning.on('change', newVal => {
      if (newVal) {
        this.showTimer();
      } else {
        this._debounceFoo();
      }
    });
    countdownTime.on('change', newVal => {
      this.$.countdownMinutesTens.innerText = String(Math.floor(newVal.minutes / 10));
      this.$.countdownMinutesOnes.innerText = String(newVal.minutes % 10);
      this.$.countdownSecondsTens.innerText = String(Math.floor(newVal.seconds / 10));
      this.$.countdownSecondsOnes.innerText = String(newVal.seconds % 10);

      if (newVal.raw <= 60000) {
        if (!this._didTweenRed) {
          this._didTweenRed = true;
          this._didTweenTeal = false;
          TweenLite.to(this.$.countdown, 1, {
            color: '#ED5A5A',
            ease: Sine.easeInOut
          });
        }
      } else if (!this._didTweenTeal) {
        // eslint-disable-line no-lonely-if
        this._didTweenRed = false;
        this._didTweenTeal = true;
        TweenLite.to(this.$.countdown, 1, {
          color: '#00FFFF',
          ease: Sine.easeInOut
        });
      }

      if (newVal.raw <= 0) {
        this.$.countdown.classList.add('blink');

        this._debounceFoo();
      } else {
        this.$.countdown.classList.remove('blink');
      }
    });
    nowPlaying.on('change', newVal => {
      this.$.nowPlaying.textContent = `${newVal.game || '?'} - ${newVal.title || '?'}`;
      typeAnim(this.$.nowPlaying);
    });
  }

  showTimer() {
    if (!this._initialized) {
      this._initialized = true;
    }

    clearTimeout(this._fooTimeout);
    const tl = this.countdownTimeline;
    tl.add(createMaybeRandomTween({
      target: this.$.pressStart.style,
      propName: 'opacity',
      duration: 0.465,
      start: {
        probability: 1,
        normalValue: 1
      },
      end: {
        probability: 0,
        normalValue: 0
      }
    }), 'flickerTotal');
    tl.set(this.$.countdown, {
      opacity: 1
    });
    tl.staggerFromTo([this.$.countdownMinutesTens, this.$.countdownMinutesOnes, this.$.countdownColon, this.$.countdownSecondsTens, this.$.countdownSecondsOnes], 0.001, {
      visibility: 'hidden'
    }, {
      visibility: 'visible'
    }, 0.03);
  }

  hideTimer() {
    if (!this._initialized) {
      this._initialized = true;
      return;
    }

    const tl = this.countdownTimeline;
    tl.add(createMaybeRandomTween({
      target: this.$.countdown.style,
      propName: 'opacity',
      duration: 0.465,
      start: {
        probability: 1,
        normalValue: 1
      },
      end: {
        probability: 0,
        normalValue: 0
      }
    }), 'flickerTotal');
    tl.set(this.$.pressStart, {
      opacity: 1
    });
    tl.add(typeAnim(this.$.pressStart));
  }

  _debounceFoo() {
    this._fooDebouncer = Polymer.Debouncer.debounce(this._fooDebouncer, Polymer.Async.timeOut.after(300), this._foo.bind(this));
  }

  _foo() {
    clearTimeout(this._fooTimeout);

    if (countdownRunning.value === false) {
      if (countdownTime.value && countdownTime.value.raw <= 0) {
        this._fooTimeout = window.setTimeout(() => {
          this.hideTimer();
        }, 120);
      } else {
        this.hideTimer();
      }
    }
  }

};

__decorate([property({
  type: Object
})], GDQCountdownElement.prototype, "countdownTimeline", void 0);

GDQCountdownElement = __decorate([customElement('gdq-countdown')], GDQCountdownElement);
export default GDQCountdownElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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