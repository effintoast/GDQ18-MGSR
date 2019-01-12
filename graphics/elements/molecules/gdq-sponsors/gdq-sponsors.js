var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import GDQBreakLoopMixin from "../../../mixins/gdq-break-loop-mixin.js";
import { TimelineLite, Power1, TweenLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement
} = Polymer.decorators;
const DISPLAY_DURATION = 20;
const EMPTY_OBJ = {};
let GDQSponsorsElement = class GDQSponsorsElement extends GDQBreakLoopMixin(Polymer.Element) {
  ready() {
    this.itemIdField = 'sum';
    this.noAutoLoop = true;
    super.ready();
    let sponsors = nodecg.Replicant('assets:sponsors-standard_1');
    const layoutName = window.location.pathname.split('/').pop();

    switch (layoutName) {
      case 'widescreen_1.html':
      case 'gba_1.html':
        sponsors = nodecg.Replicant('assets:sponsors-widescreen_1');
        break;

      default: // Do nothing.

    }

    Polymer.RenderStatus.beforeNextRender(this, () => {
      sponsors.on('change', newVal => {
        this.availableItems = newVal; // If no sponsor is showing yet, show the first sponsor immediately

        if (!this.currentItem && newVal.length > 0) {
          this.currentItem = newVal[0];
          this.$.image.$svg.image.load(newVal[0].url);
        }
      });

      this._loop();
    });
  }

  show() {
    const tl = new TimelineLite();
    tl.call(() => {
      // Clear all content.
      this.$.image.$svg.image.load('');
    }, undefined, null, '+=0.03');
    tl.to(this, 0.334, {
      opacity: 1,
      ease: Power1.easeIn
    });
    tl.call(() => {
      // Re-start the loop once we've finished entering.
      this._loop();
    });
    return tl;
  }

  hide() {
    const tl = new TimelineLite();
    const imageElem = this.$.image;
    tl.call(() => {
      tl.pause();

      if (imageElem.exiting) {
        imageElem.addEventListener('exited', () => {
          this._killLoop();

          tl.resume();
        }, {
          once: true,
          passive: true
        });
      } else if (imageElem.entering) {
        imageElem.addEventListener('entered', () => {
          this._killLoop();

          imageElem.exit({
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

        imageElem.exit({
          onComplete: () => {
            tl.resume();
          }
        });
      }
    }, undefined, null, '+=0.1');
    tl.to(this, 0.334, {
      opacity: 0,
      ease: Power1.easeOut
    });
    return tl;
  }

  resize() {
    this.$.image.resize();
  }

  _showItem(sponsorAsset) {
    const tl = new TimelineLite();
    const imageElem = this.$.image;
    tl.addLabel('exit', '+=0');
    tl.add(imageElem.exit({
      onComplete: () => {
        const newSrc = sponsorAsset.url;
        tl.pause();
        imageElem.$svg.image.load(newSrc).loaded(() => {
          tl.resume();
        }).error(error => {
          nodecg.log.error('Failed to load sponsor image:', error);
          TweenLite.set(imageElem, {
            opacity: 0
          });
          tl.clear();

          this._loop();
        });
      }
    }), 'exit');
    tl.addLabel('enter', '+=0');
    tl.set(imageElem, {
      opacity: 1
    });
    tl.add(imageElem.enter(), 'enter+=0.1'); // Give the prize some time to show.

    tl.to(EMPTY_OBJ, DISPLAY_DURATION, EMPTY_OBJ);
    return tl;
  }

};
GDQSponsorsElement = __decorate([customElement('gdq-sponsors')], GDQSponsorsElement);
export default GDQSponsorsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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