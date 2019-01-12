var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  property
} = Polymer.decorators;
/**
 * @mixinFunction
 * @polymer
 */

export default Polymer.dedupingMixin(base => {
  /**
   * @mixinClass
   * @polymer
   *
   * A base class for iterating through an array of items and playing an animation for each one in series.
   * This element is not useful on its own, it needs to be extended by some other element which implements
   * a _showItem method.
   */
  class GDQBreakLoopMixin extends base {
    constructor() {
      super(...arguments);
      this.noAutoLoop = false;
      this.maxNoMoreItemsRetries = Infinity;
      this.itemIdField = 'id';
      this._noMoreItemsRetries = 0;
    }

    ready() {
      super.ready();

      if (!this.noAutoLoop) {
        this._loop();
      }
    }

    _loop() {
      if (window.__SCREENSHOT_TESTING__) {
        return;
      } // If there's no items, do nothing and try again in one second.


      if (!this.availableItems || this.availableItems.length <= 0) {
        clearTimeout(this._loopRetryTimeout);
        this._loopRetryTimeout = window.setTimeout(() => {
          this._loop();
        }, 1000);
        return;
      }

      const availableItems = this.availableItems;
      let nextIdx = 0;

      if (this.currentItem && this.currentItem[this.itemIdField]) {
        // Figure out the array index of the current item.
        let currentIdx = -1;
        availableItems.some((item, index) => {
          if (item[this.itemIdField] === this.currentItem[this.itemIdField]) {
            currentIdx = index;
            return true;
          }

          return false;
        });
        nextIdx = currentIdx + 1;
      } // If this index is greater than the max, loop back to the start.


      if (nextIdx >= availableItems.length) {
        nextIdx = 0;
      }

      const nextItem = availableItems[nextIdx]; // If the next item is the same as the current item, do nothing and try again in one second.

      if (this.currentItem && nextItem[this.itemIdField] === this.currentItem[this.itemIdField] && this._noMoreItemsRetries < this.maxNoMoreItemsRetries) {
        this._noMoreItemsRetries++;
        clearTimeout(this._loopRetryTimeout);
        this._loopRetryTimeout = window.setTimeout(() => {
          this._loop();
        }, 1000);
        return;
      } // Kill any existing loop, if one was somehow running.
      // This also resets our internal state, used to make things like the enter/exit anims more seamless.


      this._killLoop(); // Show the next item.


      this.currentItem = nextItem;

      const tl = this._showItem(nextItem);

      tl.call(() => {
        this._loop();
      });
      this._currentLoopIterationTimeline = tl;
    }

    _killLoop() {
      if (this._currentLoopIterationTimeline) {
        this._currentLoopIterationTimeline.clear();

        this._currentLoopIterationTimeline.kill();

        this._currentLoopIterationTimeline = undefined;
      }

      clearTimeout(this._loopRetryTimeout);
      this._noMoreItemsRetries = 0;

      if (this._resetState) {
        this._resetState();
      }
    }

  }

  __decorate([property({
    type: Array
  })], GDQBreakLoopMixin.prototype, "availableItems", void 0);

  __decorate([property({
    type: Object
  })], GDQBreakLoopMixin.prototype, "currentItem", void 0);

  __decorate([property({
    type: Boolean
  })], GDQBreakLoopMixin.prototype, "noAutoLoop", void 0);

  __decorate([property({
    type: Number
  })], GDQBreakLoopMixin.prototype, "maxNoMoreItemsRetries", void 0);

  __decorate([property({
    type: String
  })], GDQBreakLoopMixin.prototype, "itemIdField", void 0);

  __decorate([property({
    type: Number
  })], GDQBreakLoopMixin.prototype, "_noMoreItemsRetries", void 0);

  return GDQBreakLoopMixin;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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