var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Sine, SlowMo } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement
} = Polymer.decorators;
const FLAG_ENTRANCE_DURATION = 0.334;
let GDQOmnibarLabelElement = class GDQOmnibarLabelElement extends Polymer.Element {
  ready() {
    super.ready();
    this.show = this.show.bind(this);
    this.change = this.change.bind(this);
    this.playFlag = this.playFlag.bind(this);
    this.hide = this.hide.bind(this);
  }
  /**
   * Creates an animation timeline for showing the label.
   * @param text - The text to show.
   * @param options - Options for this animation.
   * @returns An animation timeline.
   */


  show(text, {
    avatarIconName,
    flagHoldDuration,
    ringColor,
    flagColor
  }) {
    const showTL = new TimelineLite();
    showTL.set(this, {
      '--gdq-omnibar-label-ring-color': ringColor,
      '--gdq-omnibar-label-flag-color': flagColor
    });
    showTL.set(this.$['avatar-icon'], {
      icon: `omnibar:${avatarIconName}`
    });
    showTL.set(this.$['flag-text'], {
      textContent: text
    });
    showTL.add(createMaybeRandomTween({
      target: this.$.avatar.style,
      propName: 'opacity',
      duration: 0.465,
      start: {
        probability: 1,
        normalValue: 1
      },
      end: {
        probability: 0,
        normalValue: 1
      }
    }));
    showTL.add(this.playFlag(flagHoldDuration));
    showTL.call(() => {
      this._showing = true;
    });
    return showTL;
  }
  /**
   * Creates an animation timeline for changing the label.
   * This should only be called after `.show()`.
   * @param text - The text to show.
   * @param options - Options for this animation.
   * @returns An animation timeline.
   */


  change(text, {
    avatarIconName,
    flagHoldDuration,
    ringColor,
    flagColor
  }) {
    const changeTL = new TimelineLite();
    changeTL.add(this.playFlag(flagHoldDuration), 0);
    changeTL.to(this.$['avatar-icon'], 0.182, {
      opacity: 0,
      ease: Sine.easeIn,
      onComplete: () => {
        this.$['avatar-icon'].icon = `omnibar:${avatarIconName}`;
        this.$['flag-text'].textContent = text;
        createMaybeRandomTween({
          target: this.$['avatar-icon'].style,
          propName: 'opacity',
          duration: 0.465,
          start: {
            probability: 1,
            normalValue: 1
          },
          end: {
            probability: 0,
            normalValue: 1
          }
        });
      }
    }, 0);
    /* This is a bandaid fix for issues caused by all the time-traveling and
     * pausing we do in gdq-omnibar.
     *
     * It appears that when calling .resume(), GSAP sometimes wants to restore its last
     * known snapshot of the world. This normally is fine and doesn't cause any issues.
     * However, the `MaybeRandom` tween we create above doesn't update GSAP's knowledge
     * of the world state, due to it doing all of its work in the `onUpdate` callback.
     *
     * The fix here is to call .set to forcibly update GSAP's snapshot of the world.
     * This .set is never visible in the actual graphic, because the MaybeRandom tween
     * immediately overwrites the opacity that we are setting. But, it's enough to update
     * GSAP's snapshot, which prevents the opacity from reverting back to zero when we
     * later pause, edit, and resume the timeline in gdq-omnibar.
     */

    changeTL.set(this.$['avatar-icon'], {
      opacity: 1
    });
    changeTL.to(this.$['avatar-ring'], FLAG_ENTRANCE_DURATION, {
      rotation: '+=360',
      ease: Sine.easeInOut
    }, 0);
    changeTL.to(this, FLAG_ENTRANCE_DURATION, {
      '--gdq-omnibar-label-ring-color': ringColor,
      '--gdq-omnibar-label-flag-color': flagColor,
      ease: Sine.easeInOut
    }, 0);
    return changeTL;
  }
  /**
   * Shows, holds, and hides the label flag.
   * @param  holdDuration - How long, in seconds, to display the flag before hiding it.
   * @returns n animation timeline.
   */


  playFlag(holdDuration) {
    const playFlagTL = new TimelineLite();
    playFlagTL.addLabel('enter', '+=0');
    playFlagTL.addLabel('exit', `enter+=${holdDuration}`); // Enter.

    playFlagTL.to(this.$.avatar, 0.232, {
      x: 5,
      ease: Sine.easeInOut
    }, 'enter');
    playFlagTL.fromTo(this.$.flag, FLAG_ENTRANCE_DURATION, {
      clipPath: 'inset(0 100% 0 0)'
    }, {
      clipPath: 'inset(0 0% 0 0)',
      immediateRender: false,
      ease: Sine.easeInOut
    }, 'enter'); // Exit.

    playFlagTL.fromTo(this.$.flag, FLAG_ENTRANCE_DURATION, {
      clipPath: 'inset(0 0% 0 0)'
    }, {
      clipPath: 'inset(0 100% 0 0)',
      immediateRender: false,
      ease: Sine.easeInOut
    }, 'exit');
    playFlagTL.to(this.$.avatar, 0.232, {
      x: 0,
      ease: Sine.easeInOut
    }, `exit+=${FLAG_ENTRANCE_DURATION - 0.232}`);
    return playFlagTL;
  }
  /**
   * Creates an animation timeline for hiding the label.
   * @returns  An animation timeline.
   */


  hide() {
    const hideTL = new TimelineLite();
    hideTL.to(this.$.avatar, 0.434, {
      opacity: 0,
      ease: SlowMo.ease.config(0.5, 0.7, false)
    });
    hideTL.call(() => {
      this._showing = false;
    });
    return hideTL;
  }

};
GDQOmnibarLabelElement = __decorate([customElement('gdq-omnibar-label')], GDQOmnibarLabelElement);
export default GDQOmnibarLabelElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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