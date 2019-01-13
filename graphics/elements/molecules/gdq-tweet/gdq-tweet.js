var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Linear, Sine, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import InterruptMixin from "../../../mixins/interrupt-mixin.js";
import { typeAnim, untypeAnim } from "../../../../shared/lib/type-anims.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
import * as DrawSVGPlugin from "../../../../shared/lib/vendor/DrawSVGPlugin.js";
window._gsapPlugins = [DrawSVGPlugin]; // prevent tree shaking

const {
  customElement,
  property
} = Polymer.decorators;
const SVG = window.svgjs || window.SVG;
/**
 * @customElement
 * @polymer
 */

let GDQTweetElement = class GDQTweetElement extends InterruptMixin(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.label = '';
    this.companionElement = document.querySelector('gdq-sponsors');
    this.bindToMessage = 'showTweet';
    this.backgroundOpacity = 0.25;
  }

  ready() {
    super.ready();

    this._initBackgroundSVG();

    this._addReset();

    Polymer.RenderStatus.beforeNextRender(this, () => {
      const layoutAppElement = document.querySelector('layout-app');

      if (!this.companionElement && layoutAppElement) {
        const sponsorsElement = layoutAppElement.shadowRoot.querySelector('gdq-sponsors');

        if (sponsorsElement) {
          this.companionElement = sponsorsElement;
        }
      }
    });
  }
  /**
   * Adds a reset to the master timeline.
   */


  _addReset() {
    const tl = this.timeline;
    tl.call(() => {
      this.$['body-actual'].innerHTML = '';
      this.$.name.innerHTML = '';
    }, undefined, null, '+=0.03');
    tl.set(this.$svg.bgRect.node, {
      drawSVG: '0%',
      'fill-opacity': 0
    });
    tl.set([this.$.label, this.$.name], {
      scaleX: 0,
      color: 'transparent',
      clipPath: ''
    });
    tl.set(this.$['body-actual'], {
      opacity: 1
    });
  }
  /**
   * Creates an entrance animation timeline.
   * @param tweet - The tweet to enter.
   * @returns A GSAP animation timeline.
   */


  _createEntranceAnim(tweet) {
    const tl = new TimelineLite();
    tl.addLabel('start', '+=0.03');
    tl.call(() => {
      this.$.name.innerText = `@${tweet.user.screen_name}`;
    }, undefined, null, 'start');
    tl.to(this.$svg.bgRect.node, 0.75, {
      drawSVG: '100%',
      ease: Linear.easeNone
    }, 'start');
    tl.to(this.$.name, 0.334, {
      scaleX: 1,
      ease: Sine.easeInOut,
      onComplete: () => {
        this.$.name.style.color = '';
        typeAnim(this.$.name);
      }
    }, 'start+=0.05');
    tl.to(this.$.label, 0.334, {
      scaleX: 1,
      ease: Sine.easeInOut,
      onComplete: () => {
        this.$.label.style.color = '';
        typeAnim(this.$.label);
      }
    }, 'start+=0.4');
    tl.to(this.$svg.bgRect.node, 0.5, {
      'fill-opacity': this.backgroundOpacity,
      ease: Sine.easeOut
    }, 'start+=1');
    tl.call(() => {
      this.$['body-actual'].innerHTML = tweet.text;
      typeAnim(this.$['body-actual'], {
        typeInterval: 0.01
      });
    });
    return tl;
  }
  /**
   * Creates an animation for changing the currently displayed tweet.
   * This is only used when hot-swapping tweets
   * (i.e., changing tweets while the graphic is already showing).
   * @param tweet - The new tweet to show.
   * @returns A GSAP animation timeline.
   */


  _createChangeAnim(tweet) {
    const tl = new TimelineLite();
    let exitedPreviousTweet = false;
    tl.call(() => {
      if (exitedPreviousTweet) {
        return;
      }

      tl.pause();
      const exitTextTl = new TimelineLite();
      exitTextTl.add(untypeAnim(this.$.name, 0.01), 0);
      exitTextTl.add(untypeAnim(this.$['body-actual'], 0.01), 0.08);
      exitTextTl.call(() => {
        exitedPreviousTweet = true;
        tl.resume();
      });
    }, undefined, null, '+=0.03');
    tl.call(() => {
      this.$.name.innerText = `@${tweet.user.screen_name}`;
      this.$['body-actual'].innerHTML = tweet.text;
      const enterTextTl = new TimelineLite();
      enterTextTl.add(typeAnim(this.$.name, {
        typeInterval: 0.01
      }), 0);
      enterTextTl.add(typeAnim(this.$['body-actual'], {
        typeInterval: 0.01
      }), 0.08);
    }, undefined, null, '+=0.03');
    return tl;
  }
  /**
   * Creates an exit animation timeline.
   * @returns A GSAP animation timeline.
   */


  _createExitAnim() {
    const tl = new TimelineLite();
    tl.add('exit');
    tl.add(createMaybeRandomTween({
      target: this.$['body-actual'].style,
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
    }), 'exit');
    tl.to(this.$svg.bgRect.node, 0.5, {
      'fill-opacity': 0,
      ease: Sine.easeOut
    }, 'exit');
    tl.to(this.$svg.bgRect.node, 1.5, {
      drawSVG: '0%',
      ease: Power2.easeIn
    }, 'exit');
    tl.fromTo(this.$.label, 0.334, {
      clipPath: 'inset(0 0% 0 0)'
    }, {
      clipPath: 'inset(0 100% 0 0)',
      ease: Sine.easeInOut
    }, 'exit+=0.9');
    tl.fromTo(this.$.name, 0.334, {
      clipPath: 'inset(0 0 0 0%)'
    }, {
      clipPath: 'inset(0 0 0 100%)',
      ease: Sine.easeInOut
    }, 'exit+=1.3');
    return tl;
  }

  _initBackgroundSVG() {
    if (this._initialized) {
      throw new Error('this element has already been initialized');
    }

    this._initialized = true;
    const STROKE_SIZE = 1;
    this.$svg = {};
    const svgDoc = SVG(this.$.background);
    const bgRect = svgDoc.rect();
    this.$svg.svgDoc = svgDoc;
    this.$svg.bgRect = bgRect; // Intentionally flip the width and height.
    // This is part of how we get the drawSVG anim to go in the direction we want.

    bgRect.stroke({
      color: 'white',
      // Makes it effectively STROKE_SIZE, because all SVG strokes
      // are center strokes, and the outer half is cut off.
      width: STROKE_SIZE * 2
    });
    bgRect.fill({
      color: 'black',
      opacity: this.backgroundOpacity
    });
    this.resize();
  }

  resize() {
    if (!this._initialized) {
      return;
    }

    const ELEMENT_WIDTH = this.$.background.clientWidth;
    const ELEMENT_HEIGHT = this.$.background.clientHeight;
    this.$svg.svgDoc.size(ELEMENT_WIDTH, ELEMENT_HEIGHT);
    this.$svg.bgRect.size(ELEMENT_HEIGHT, ELEMENT_WIDTH); // Rotate and translate such that drawSVG anims start from the top right
    // and move clockwise to un-draw, counter-clockwise to un-draw.

    this.$svg.bgRect.style({
      transform: `rotate(90deg) translateY(${-ELEMENT_WIDTH}px)`
    });
  }

  _falsey(value) {
    return !value;
  }

};

__decorate([property({
  type: String
})], GDQTweetElement.prototype, "label", void 0);

__decorate([property({
  type: Object
})], GDQTweetElement.prototype, "companionElement", void 0);

__decorate([property({
  type: String
})], GDQTweetElement.prototype, "bindToMessage", void 0);

__decorate([property({
  type: Number
})], GDQTweetElement.prototype, "backgroundOpacity", void 0);

GDQTweetElement = __decorate([customElement('gdq-tweet')], GDQTweetElement);
export default GDQTweetElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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