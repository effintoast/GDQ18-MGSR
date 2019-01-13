var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { property } = Polymer.decorators;
/**
 * @mixinFunction
 * @polymer
 */
export default Polymer.dedupingMixin((base) => {
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
            }
            // If there's no items, do nothing and try again in one second.
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
            }
            // If this index is greater than the max, loop back to the start.
            if (nextIdx >= availableItems.length) {
                nextIdx = 0;
            }
            const nextItem = availableItems[nextIdx];
            // If the next item is the same as the current item, do nothing and try again in one second.
            if (this.currentItem
                && nextItem[this.itemIdField] === this.currentItem[this.itemIdField]
                && this._noMoreItemsRetries < this.maxNoMoreItemsRetries) {
                this._noMoreItemsRetries++;
                clearTimeout(this._loopRetryTimeout);
                this._loopRetryTimeout = window.setTimeout(() => {
                    this._loop();
                }, 1000);
                return;
            }
            // Kill any existing loop, if one was somehow running.
            // This also resets our internal state, used to make things like the enter/exit anims more seamless.
            this._killLoop();
            // Show the next item.
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
    __decorate([
        property({ type: Array })
    ], GDQBreakLoopMixin.prototype, "availableItems", void 0);
    __decorate([
        property({ type: Object })
    ], GDQBreakLoopMixin.prototype, "currentItem", void 0);
    __decorate([
        property({ type: Boolean })
    ], GDQBreakLoopMixin.prototype, "noAutoLoop", void 0);
    __decorate([
        property({ type: Number })
    ], GDQBreakLoopMixin.prototype, "maxNoMoreItemsRetries", void 0);
    __decorate([
        property({ type: String })
    ], GDQBreakLoopMixin.prototype, "itemIdField", void 0);
    __decorate([
        property({ type: Number })
    ], GDQBreakLoopMixin.prototype, "_noMoreItemsRetries", void 0);
    return GDQBreakLoopMixin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWxvb3AtbWl4aW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtYnJlYWstbG9vcC1taXhpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQVl0Qzs7O0dBR0c7QUFDSCxlQUFlLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFpQyxFQUFFLEVBQUU7SUFDMUU7Ozs7Ozs7T0FPRztJQUNILE1BQWUsaUJBQTRCLFNBQVEsSUFBSTtRQUF2RDs7WUFRQyxlQUFVLEdBQUcsS0FBSyxDQUFDO1lBR25CLDBCQUFxQixHQUFHLFFBQVEsQ0FBQztZQUdqQyxnQkFBVyxHQUFtQixJQUFzQixDQUFDO1lBR3JELHdCQUFtQixHQUFHLENBQUMsQ0FBQztRQStGekIsQ0FBQztRQXZGQSxLQUFLO1lBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNiO1FBQ0YsQ0FBQztRQUVELEtBQUs7WUFDSixJQUFLLE1BQWMsQ0FBQyxzQkFBc0IsRUFBRTtnQkFDM0MsT0FBTzthQUNQO1lBRUQsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUQsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNyQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDZCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ1QsT0FBTzthQUNQO1lBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGNB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