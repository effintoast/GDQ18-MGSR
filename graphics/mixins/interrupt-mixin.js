var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite } from 'gsap';
const { property } = Polymer.decorators;
const EMPTY_OBJ = {};
/**
 * @mixinFunction
 * @polymer
 */
export default Polymer.dedupingMixin((base) => {
    /**
     * @mixinClass
     * @polymer
     */
    class InterruptMixin extends base {
        constructor() {
            super(...arguments);
            this.timeline = new TimelineLite({ autoRemoveChildren: true });
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
            }
            else {
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
            }
            else {
                this._addReset();
                // Wait for prizes to hide, if applicable.
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
                }
                // Padding
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
    __decorate([
        property({ type: Object })
    ], InterruptMixin.prototype, "companionElement", void 0);
    __decorate([
        property({ type: Object })
    ], InterruptMixin.prototype, "timeline", void 0);
    __decorate([
        property({ type: String })
    ], InterruptMixin.prototype, "bindToMessage", void 0);
    __decorate([
        property({ type: Number })
    ], InterruptMixin.prototype, "itemDisplayDuration", void 0);
    __decorate([
        property({ type: Boolean, notify: true, observer: InterruptMixin.prototype._canExtendChanged, readOnly: true })
    ], InterruptMixin.prototype, "canExtend", void 0);
    return InterruptMixin;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJydXB0LW1peGluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50ZXJydXB0LW1peGluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFvQmxDLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3RDLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztBQUVyQjs7O0dBR0c7QUFDSCxlQUFlLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFpQyxFQUFFLEVBQUU7SUFDMUU7OztPQUdHO0lBQ0gsTUFBZSxjQUFlLFNBQVEsSUFBSTtRQUExQzs7WUFLQyxhQUFRLEdBQWlCLElBQUksWUFBWSxDQUFDLEVBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQVF0RTs7ZUFFRztZQUVILHdCQUFtQixHQUFHLENBQUMsQ0FBQztZQUV4Qjs7OztlQUlHO1lBRUgsY0FBUyxHQUFHLEtBQUssQ0FBQztRQTJIbkIsQ0FBQztRQXBIQSxLQUFLO1lBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRWQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLE9BQU8sRUFBRTtnQkFDMUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDL0Q7UUFDRixDQUFDO1FBRUQ7Ozs7Ozs7Ozs7V0FVRztRQUNILFFBQVEsQ0FBQyxJQUFTO1lBQ2pCLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFFekIsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDVixPQUFPLEVBQUUsQ0FBQzthQUNWO1lBRUQs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