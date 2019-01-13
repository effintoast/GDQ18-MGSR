var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Linear, Sine, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import InterruptMixin from "../../../mixins/interrupt-mixin.js";
import { typeAnim } from "../../../../shared/lib/type-anims.js";
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

let GDQBreakFanartElement = class GDQBreakFanartElement extends InterruptMixin(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.backgroundOpacity = 0.25;
  }

  ready() {
    super.ready();
    this.$.tweet.companionElement = null;

    this._initBackgroundSVG();
  }

  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      this._addReset();
    });
  }
  /**
   * Adds a reset to the master timeline.
   */


  _addReset() {
    const tl = this.timeline;
    tl.set(this._bgRect.node, {
      drawSVG: '0%',
      'fill-opacity': 0
    });
    tl.set(this.$.label, {
      scaleX: 0,
      color: 'transparent',
      clipPath: ''
    });
    tl.call(this.$.tweet._addReset, undefined, this.$.tweet);
  }
  /**
   * Creates an entrance animation timeline.
   * @param tweet - The tweet to enter.
   * @returns A GSAP animation timeline.
   */


  _createEntranceAnim(tweet) {
    const tl = new TimelineLite();
    const $image = this.$.image;
    const media = tweet.gdqMedia;

    if (!media) {
      return tl;
    }

    let didStartingWork = false; // GSAP likes to run .calls again when you .resume

    tl.call(() => {
      if (didStartingWork) {
        return;
      }

      didStartingWork = true;
      tl.pause();
      $image.$svg.image.load(media[0].media_url_https).loaded(() => {
        tl.resume();
      }).error(error => {
        nodecg.log.error(error);
        tl.clear();
        tl.resume();
      });
    }, undefined, null, '+=0.03');
    tl.addLabel('start', '+=0.03');
    tl.to(this._bgRect.node, 0.75, {
      drawSVG: '100%',
      ease: Linear.easeNone
    }, 'start');
    tl.add($image.enter(), 'start');
    tl.add(this.$.tweet._createEntranceAnim(tweet), 'start+=0.1');
    tl.to(this.$.label, 0.334, {
      scaleX: 1,
      ease: Sine.easeInOut,
      onComplete: () => {
        this.$.label.style.color = '';
        typeAnim(this.$.label);
      }
    }, 'start+=0.4');
    tl.to(this._bgRect.node, 0.5, {
      'fill-opacity': this.backgroundOpacity,
      ease: Sine.easeOut
    }, 'start+=1');

    if (media.length > 1) {
      media.slice(1).forEach(mediaEntity => {
        tl.add(this._createHold());
        tl.add(this._changeImage(mediaEntity.media_url_https));
      });
    }

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

    if (!tweet.gdqMedia) {
      return tl;
    }

    let exitedPreviousItem = false; // GSAP likes to run .calls again when you .resume

    tl.call(() => {
      if (exitedPreviousItem) {
        return;
      }

      tl.pause();
      const exitTextTl = new TimelineLite();
      exitTextTl.add(this.$.tweet._createChangeAnim(tweet), 0);
      exitTextTl.call(() => {
        exitedPreviousItem = true;
        tl.resume();
      });
    }, undefined, null, '+=0.03');
    tl.add(this._changeImage(tweet.gdqMedia[0].media_url_https), '+=0.03');

    if (tweet.gdqMedia.length > 1) {
      tweet.gdqMedia.slice(1).forEach(mediaEntity => {
        tl.add(this._createHold());
        tl.add(this._changeImage(mediaEntity.media_url_https));
      });
    }

    return tl;
  }
  /**
   * Changes just the image, without changing the tweet body.
   * Used in tweets which have more than one image (they can have up to four).
   * @param newSrc - The url of the new image to show.
   * @returns A GSAP animation timeline.
   */


  _changeImage(newSrc) {
    const tl = new TimelineLite();
    const $image = this.$.image;
    tl.add($image.exit({
      onComplete: () => {
        tl.pause();
        $image.$svg.image.load(newSrc).loaded(() => {
          tl.resume();
        }).error(error => {
          nodecg.log.error(error);
          tl.resume();
        });
      }
    }));
    tl.add($image.enter(), '+=0.05');
    return tl;
  }
  /**
   * Creates an exit animation timeline.
   * @returns A GSAP animation timeline.
   */


  _createExitAnim() {
    const tl = new TimelineLite();
    tl.add('exit');
    tl.to(this._bgRect.node, 0.5, {
      'fill-opacity': 0,
      ease: Sine.easeOut
    }, 'exit');
    tl.to(this._bgRect.node, 1.5, {
      drawSVG: '0%',
      ease: Power2.easeIn
    }, 'exit');
    tl.fromTo(this.$.label, 0.334, {
      clipPath: 'inset(0 0% 0 0)'
    }, {
      clipPath: 'inset(0 100% 0 0)',
      ease: Sine.easeInOut
    }, 'exit+=0.9');
    tl.add(this.$.tweet._createExitAnim(), 'exit');
    tl.add(this.$.image.exit(), 'exit+=0.1');
    return tl;
  }

  _initBackgroundSVG() {
    const STROKE_SIZE = 1;
    const ELEMENT_WIDTH = this.$.background.clientWidth;
    const ELEMENT_HEIGHT = this.$.background.clientHeight;
    const svgDoc = SVG(this.$.background);
    const bgRect = svgDoc.rect();
    this._bgRect = bgRect;
    svgDoc.size(ELEMENT_WIDTH, ELEMENT_HEIGHT); // Intentionally flip the width and height.
    // This is part of how we get the drawSVG anim to go in the direction we want.

    bgRect.size(ELEMENT_HEIGHT, ELEMENT_WIDTH);
    bgRect.stroke({
      color: 'white',
      // Makes it effectively STROKE_SIZE, because all SVG strokes
      // are center strokes, and the outer half is cut off.
      width: STROKE_SIZE * 2
    });
    bgRect.fill({
      color: 'black',
      opacity: this.backgroundOpacity
    }); // Rotate and translate such that drawSVG anims start from the bottom right
    // and move counter-clockwise to draw, clockwise to un-draw.

    bgRect.style({
      transform: `rotate(90deg) scaleX(-1) translateX(${-ELEMENT_HEIGHT}px) translateY(${-ELEMENT_WIDTH}px)`
    });
  }

};

__decorate([property({
  type: Number
})], GDQBreakFanartElement.prototype, "backgroundOpacity", void 0);

GDQBreakFanartElement = __decorate([customElement('gdq-break-fanart')], GDQBreakFanartElement);
export default GDQBreakFanartElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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