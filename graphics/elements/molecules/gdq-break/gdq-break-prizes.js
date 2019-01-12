var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import GDQBreakLoopMixin from "../../../mixins/gdq-break-loop-mixin.js";
import { TimelineLite, Power2, Sine, TweenLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { typeAnim } from "../../../../shared/lib/type-anims.js";
import { preloadImage } from "../../../../shared/lib/gdq-utils.js";
const {
  customElement
} = Polymer.decorators;
const EMPTY_OBJ = {};
const DISPLAY_DURATION = nodecg.bundleConfig.displayDuration;
const currentPrizes = nodecg.Replicant('currentPrizes');
/**
 * @customElement
 * @polymer
 */

let GDQBreakPrizesElement = class GDQBreakPrizesElement extends GDQBreakLoopMixin(Polymer.Element) {
  ready() {
    super.ready();
    currentPrizes.on('change', newVal => {
      this.availableItems = newVal;
    });
  }
  /**
   * Plays the entrance animation and kicks off the infinite loop of
   * showing all available prizes, one at a time.
   * @returns - A GSAP TimelineLite instance.
   */


  show() {
    const tl = new TimelineLite();
    const photoElem = this.$['photo-actual'];
    tl.call(() => {
      // Clear all content.
      this.$['info-description-text'].innerText = '';
      this.$['info-minimumBid-text'].innerText = '';
      this.$.provider.innerText = '';
      photoElem.$svg.image.load('');
    }, undefined, null, '+=0.03');
    tl.addLabel('start', '+=0');
    tl.to(photoElem.$svg.bgRect.node, 1.5, {
      drawSVG: '100%',
      ease: Power2.easeOut
    }, 'start');
    tl.to(this.$.info, 1, {
      x: '0%',
      ease: Power2.easeOut
    }, 'start+=0.5');
    tl.to(this.$['photo-label'], 0.5, {
      opacity: 1,
      x: 0,
      ease: Sine.easeOut
    }, 'start+=1');
    tl.to(photoElem.$svg.bgRect.node, 0.5, {
      'fill-opacity': 0.25,
      ease: Sine.easeOut
    }, 'start+=1');
    tl.call(() => {
      // Re-start the loop once we've finished entering.
      this._loop();
    });
    return tl;
  }
  /**
   * Plays the exit animation and kills the current loop of prize displaying.
   * This animation has a variable length due to it needing to wait for the current
   * loop to be at a good stopping point before beginning the exit animation.
   * @returns - A GSAP TimelineLite instance.
   */


  hide() {
    const tl = new TimelineLite();
    const photoElem = this.$['photo-actual'];
    let handledCall = false; // GSAP likes to run .calls again when you .resume

    tl.call(() => {
      if (handledCall) {
        return;
      }

      handledCall = true;
      tl.pause();

      if (photoElem.exiting) {
        photoElem.addEventListener('exited', () => {
          this._killLoop();

          tl.resume();
        }, {
          once: true,
          passive: true
        });
      } else if (photoElem.entering) {
        photoElem.addEventListener('entered', () => {
          this._killLoop();

          photoElem.exit({
            onComplete: () => {
              tl.resume();
            }
          });
        }, {
          once: true,
          passive: true
        });
      } else {
        this._killLoop();

        photoElem.exit({
          onComplete: () => {
            tl.resume();
          }
        });
      }
    }, undefined, null, '+=0.1');
    tl.addLabel('start', '+=0.5');
    tl.call(() => {
      this.currentItem = null;
    }, undefined, null, 'start');
    tl.to(photoElem.$svg.bgRect.node, 0.5, {
      'fill-opacity': 0,
      ease: Sine.easeIn
    }, 'start');
    tl.to(this.$['photo-label'], 0.5, {
      opacity: 0,
      x: -50,
      ease: Sine.easeIn
    }, 'start');
    tl.to(this.$.info, 1, {
      x: '-100%',
      ease: Power2.easeIn
    }, 'start');
    tl.to(photoElem.$svg.bgRect.node, 1.5, {
      drawSVG: '0%',
      ease: Power2.easeIn
    }, 'start');
    return tl;
  }

  _showItem(prize) {
    let useFallbackImage = !prize.image.trim();
    let changingProvider = true;
    let changingMinimumBid = true;
    const tl = new TimelineLite();
    const photoElem = this.$['photo-actual'];
    const providerTextElem = this.$.provider;
    const descriptionTextElem = this.$['info-description-text'];
    const minimumBidTextElem = this.$['info-minimumBid-text'];
    const minimumBidText = prize.sumdonations ? `${prize.minimumbid} in Total Donations` : `${prize.minimumbid} Single Donation`;
    tl.call(() => {
      tl.pause();
      preloadImage(prize.image).then(() => {
        tl.resume();
      }).catch(() => {
        nodecg.log.error(`Image "${prize.image}" failed to load for prize #${prize.id}.`);
        useFallbackImage = true;
        tl.resume();
      });
    }, undefined, null, '+=0.03');
    tl.addLabel('exit', '+=0');
    tl.add(photoElem.exit({
      onComplete: () => {
        const newSrc = useFallbackImage ? photoElem.fallbackSrc : prize.image;
        tl.pause();
        photoElem.$svg.image.load(newSrc).loaded(() => {
          tl.resume();
        }).error(error => {
          nodecg.log.error(error);
          photoElem.$svg.image.load(photoElem.fallbackSrc);
          tl.resume();
        });
      }
    }), 'exit');
    tl.call(() => {
      if (!providerTextElem.innerText && !descriptionTextElem.innerText) {
        return;
      }

      changingProvider = false;

      if (providerTextElem.innerText.trim() !== prize.provided) {
        changingProvider = true;
        TweenLite.to(this.$.provider, 0.5, {
          opacity: 0,
          ease: Sine.easeInOut
        });
      }

      changingMinimumBid = false;

      if (minimumBidTextElem.innerText.trim() !== minimumBidText) {
        changingMinimumBid = true;
        TweenLite.to(minimumBidTextElem, 0.5, {
          opacity: 0,
          ease: Sine.easeInOut
        });
      }

      TweenLite.to(this.$['info-description-text'], 0.5, {
        opacity: 0,
        ease: Sine.easeInOut
      });
    }, undefined, null, 'exit+=0.1');
    tl.addLabel('enter', '+=0');
    tl.call(() => {
      if (!changingProvider) {
        return;
      }

      providerTextElem.innerText = prize.provided;
      typeAnim(providerTextElem);
      TweenLite.set(providerTextElem, {
        opacity: 1
      });
    }, undefined, null, 'enter+=0.03');
    tl.add(photoElem.enter(), 'enter+=0.1');
    tl.call(() => {
      descriptionTextElem.innerText = prize.description;
      typeAnim(descriptionTextElem);
      TweenLite.set(descriptionTextElem, {
        opacity: 1
      });
    }, undefined, null, 'enter+=0.2');
    tl.call(() => {
      if (!changingMinimumBid) {
        return;
      }

      minimumBidTextElem.innerText = minimumBidText;
      typeAnim(minimumBidTextElem);
      TweenLite.set(minimumBidTextElem, {
        opacity: 1
      });
    }, undefined, null, 'enter+=0.3'); // Give the prize some time to show.

    tl.to(EMPTY_OBJ, DISPLAY_DURATION, EMPTY_OBJ);
    return tl;
  }

  _resetState() {
    this.$['photo-actual'].exiting = false;
  }

};
GDQBreakPrizesElement = __decorate([customElement('gdq-break-prizes')], GDQBreakPrizesElement);
export default GDQBreakPrizesElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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