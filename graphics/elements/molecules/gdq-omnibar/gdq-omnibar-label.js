var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Sine, SlowMo } from 'gsap';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement } = Polymer.decorators;
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
    show(text, { avatarIconName, flagHoldDuration, ringColor, flagColor }) {
        const showTL = new TimelineLite();
        showTL.set(this, {
            '--gdq-omnibar-label-ring-color': ringColor,
            '--gdq-omnibar-label-flag-color': flagColor
        });
        showTL.set(this.$['avatar-icon'], { icon: `omnibar:${avatarIconName}` });
        showTL.set(this.$['flag-text'], { textContent: text });
        showTL.add(createMaybeRandomTween({
            target: this.$.avatar.style,
            propName: 'opacity',
            duration: 0.465,
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 1 }
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
    change(text, { avatarIconName, flagHoldDuration, ringColor, flagColor }) {
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
                    start: { probability: 1, normalValue: 1 },
                    end: { probability: 0, normalValue: 1 }
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
        changeTL.set(this.$['avatar-icon'], { opacity: 1 });
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
        playFlagTL.addLabel('exit', `enter+=${holdDuration}`);
        // Enter.
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
        }, 'enter');
        // Exit.
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
GDQOmnibarLabelElement = __decorate([
    customElement('gdq-omnibar-label')
], GDQOmnibarLabelElement);
export default GDQOmnibarLabelElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItbGFiZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtb21uaWJhci1sYWJlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0scUNBQXFDLENBQUM7QUFFM0UsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFnQjNDLE1BQU0sc0JBQXNCLEdBQUcsS0FBSyxDQUFDO0FBR3JDLElBQXFCLHNCQUFzQixHQUEzQyxNQUFxQixzQkFBdUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUdsRSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxJQUFJLENBQUMsSUFBWSxFQUFFLEVBQUMsY0FBYyxFQUFFLGdCQUFnQixFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQTRCO1FBQ3JHLE1BQU0sTUFBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUU7WUFDaEIsZ0NBQWdDLEVBQUUsU0FBUztZQUMzQyxn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