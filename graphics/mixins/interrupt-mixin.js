var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  property
} = Polymer.decorators;
const EMPTY_OBJ = {};
/**
 * @mixinFunction
 * @polymer
 */

export default Polymer.dedupingMixin(base => {
  /**
   * @mixinClass
   * @polymer
   */
  class InterruptMixin extends base {
    constructor() {
      super(...arguments);
      this.timeline = new TimelineLite({
        autoRemoveChildren: true
      });
      /**
       * How long, in seconds, to hold items for after they have finished entering.
       */

      this.itemDisplayDuration = 9;
      /**
       * If true, it means that we're currently showing an item,
       * and are at a point in the animation where we can show another one
       * without performing a full exit/enter cycle again.
       */

      this.canExtend = false;
    }

    ready() {
      super.ready();

      if (this.bindToMessage && this.bindToMessage.length > 0 && this.bindToMessage !== 'false') {
        nodecg.listenFor(this.bindToMessage, this.playItem.bind(this));
      }
    }
    /**
     * Plays the entrance animation for this element.
     * Then, holds it for itemDisplayDuration seconds.
     * Then, plays the exit animation for this element.
     *
     * If this.companionElement is defined, this method will run this.companionElement.hide()
     * before playing the entrance animation for this element.
     *
     * @param item - The item to show.
     * @returns - A GSAP TimelineLite instance.
     */


    playItem(item) {
      const tl = this.timeline;

      if (!item) {
        return tl;
      }

      let companionElementsArray;

      if (Array.isArray(this.companionElement)) {
        companionElementsArray = this.companionElement;
      } else {
        companionElementsArray = [this.companionElement];
      }

      companionElementsArray.filter(companionElement => {
        return companionElement && typeof companionElement.hide === 'function';
      });

      if (this.canExtend) {
        const newAnim = new TimelineLite();
        newAnim.add(this._createChangeAnim(item));
        newAnim.add(this._createHold());
        tl.add(newAnim, 'exit-=0.01');
        tl.shiftChildren(newAnim.duration(), true, tl.getLabelTime('exit'));
      } else {
        this._addReset(); // Wait for prizes to hide, if applicable.


        tl.call(() => {
          this._setCanExtend(true);

          if (companionElementsArray.length <= 0) {
            return;
          }

          tl.pause(null, false);
          const companionExitTl = new TimelineLite();
          companionElementsArray.forEach(companionElement => {
            companionExitTl.add(companionElement.hide(), 0);
          });
          companionExitTl.call(() => {
            tl.resume(null, false);
          });
        }, undefined, null, '+=0.03');

        if (companionElementsArray.length > 0) {
          tl.addPause();
        }

        tl.add(this._createEntranceAnim(item), '+=0.03');

        if (window.__SCREENSHOT_TESTING__) {
          return tl;
        }

        tl.add(this._createHold());
        tl.addLabel('exit', '+=0');
        const exitAnim = new TimelineLite({
          onStart: () => {
            this._setCanExtend(false);
          }
        });
        exitAnim.add(this._createExitAnim());
        tl.add(exitAnim);

        if (companionElementsArray.length > 0) {
          tl.addLabel('companionEnter', '+=0');
          companionElementsArray.forEach(companionElement => {
            tl.add(companionElement.show(), 'companionEnter');
          });
        } // Padding


        tl.to(EMPTY_OBJ, 0.1, EMPTY_OBJ);
      }

      return tl;
    }
    /**
     * Creates a dummy tween which can be used to hold something as-is
     * for itemDisplayDuration seconds.
     * @returns - A GSAP animation timeline.
     */


    _createHold() {
      const tl = new TimelineLite();
      tl.to(EMPTY_OBJ, this.itemDisplayDuration, EMPTY_OBJ);
      return tl;
    }

    _canExtendChanged(newVal) {
      if (newVal) {
        this.dispatchEvent(new CustomEvent('can-extend'));
      }
    }

  }

  __decorate([property({
    type: Object
  })], InterruptMixin.prototype, "companionElement", void 0);

  __decorate([property({
    type: Object
  })], InterruptMixin.prototype, "timeline", void 0);

  __decorate([property({
    type: String
  })], InterruptMixin.prototype, "bindToMessage", void 0);

  __decorate([property({
    type: Number
  })], InterruptMixin.prototype, "itemDisplayDuration", void 0);

  __decorate([property({
    type: Boolean,
    notify: true,
    observer: InterruptMixin.prototype._canExtendChanged,
    readOnly: true
  })], InterruptMixin.prototype, "canExtend", void 0);

  return InterruptMixin;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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