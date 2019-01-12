var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TweenLite, TimelineLite, Sine, Linear, Power2, Power4 } from 'gsap';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
const RIGHT_TIME_PER_PIXEL = 0.00107;
const LEFT_TIME_PER_PIXEL = 0.00107;
const PROGRESS_FILL_OFFSET = 10;
const TAIL_CHEVRON_WIDTH = 6;
const DIRECTION_CHANGE_DELAY = 0.1167;
/**
 * @customElement
 * @polymer
 */
let GDQOmnibarChallengeElement = class GDQOmnibarChallengeElement extends Polymer.Element {
    ready() {
        super.ready();
        TweenLite.set(this.$.tailChevron, { opacity: 0 });
        TweenLite.set(this.$.body, { opacity: 0 });
        TweenLite.set(this.$.total, { opacity: 0 });
        TweenLite.set(this.$.goal, { opacity: 0 });
    }
    enter() {
        const progressFillElem = this.$.progressFill;
        const progressBlockElem = this.$.progressBlock;
        const goalBlockElem = this.$.goalBlock;
        const tailChevronElem = this.$.tailChevron;
        const totalElem = this.$.total;
        let progressPercentage = this.bid.rawTotal / this.bid.rawGoal;
        progressPercentage = Math.min(progressPercentage, 1); // Clamp to 1 max.
        progressPercentage = Math.max(progressPercentage, 0); // Clamp to 0 min.
        const revealTweenWidth = this.$.body.clientWidth - tailChevronElem.clientWidth + PROGRESS_FILL_OFFSET;
        this._revealTweenWidth = revealTweenWidth;
        const progressBlockWidth = progressBlockElem.clientWidth;
        const tl = new TimelineLite();
        let didFlickerGoalBlock = false;
        /* This mess of bullshit is how we get the animated fill to be clipped how we want. */
        const progressFillGroup = progressFillElem.svgDoc.group();
        const progressFillClip = progressBlockElem.arrowBlock.clone();
        progressFillClip.attr({ filter: 'none' });
        TweenLite.set(progressFillElem.arrowBlock.node, { x: '-100%' });
        progressFillElem.arrowBlock.before(progressFillClip);
        progressFillElem.arrowBlock.before(progressFillGroup);
        progressFillElem.arrowBlock.addTo(progressFillGroup);
        progressFillGroup.clipWith(progressFillClip);
        /* End mess of bullshit. */
        tl.set(tailChevronElem, { opacity: 1 });
        tl.call(() => {
            goalBlockElem.arrowBlock.attr({ 'fill-opacity': 0 });
        });
        tl.fromTo(tailChevronElem.chevron.node, 0.334, {
            drawSVG: '0%'
        }, {
            drawSVG: '100%',
            ease: Linear.easeNone
        });
        tl.from(tailChevronElem.chevron.node, 0.2167, {
            fill: 'transparent'
        });
        tl.addLabel('slideRight', `-=${1 / 60}`);
        tl.to(tailChevronElem, revealTweenWidth * RIGHT_TIME_PER_PIXEL, {
            x: revealTweenWidth,
            ease: Sine.easeIn
        }, 'slideRight');
        tl.set(this.$.body, {
            clipPath: `inset(0 -13px 0 ${revealTweenWidth}px)`,
            opacity: 1
        });
        tl.addLabel('reveal', `+=${DIRECTION_CHANGE_DELAY}`);
        tl.to(tailChevronElem, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
            x: 0,
            ease: 'BidwarOptionReveal',
            onUpdate: () => {
                // Flicker the goal block shortly after it has been fully revealed.
                if (!didFlickerGoalBlock && tailChevronElem._gsTransform.x <= progressBlockWidth) {
                    didFlickerGoalBlock = true;
                    createMaybeRandomTween({
                        target: {},
                        propName: 'placeholder',
                        duration: 0.465,
                        delay: 0.1,
                        ease: Power4.easeIn,
                        start: { probability: 1, normalValue: 0 },
                        end: { probability: 0, normalValue: 1 },
                        onUpdate: randomValue => {
                            this.$.goal.style.opacity = String(randomValue);
                            this.$.goalBlock.arrowBlock.attr({ 'fill-opacity': randomValue });
                        }
                    });
                }
            }
        }, 'reveal');
        tl.to(this.$.body, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
            clipPath: 'inset(0 -13px 0 0px)',
            ease: 'BidwarOptionReveal',
            onComplete: () => {
                TweenLite.to(this.$.body, 0.18, {
                    clipPath: 'inset(0 -13px)'
                });
            }
        }, 'reveal');
        tl.set(tailChevronElem, { '--atom-chevron-background': 'transparent' });
        const progressFillWidth = progressFillElem.arrowBlock.node.getBoundingClientRect().width - PROGRESS_FILL_OFFSET;
        const tailChevronEndX = progressFillWidth * progressPercentage;
        this._progressTweenDuration = progressFillWidth * progressPercentage * RIGHT_TIME_PER_PIXEL;
        tl.addLabel('fillProgress', '+=0');
        tl.to(tailChevronElem, this._progressTweenDuration, {
            x: tailChevronEndX,
            ease: Power2.easeInOut,
            callbackScope: this,
            onUpdate() {
                if (tailChevronElem._gsTransform.x >= PROGRESS_FILL_OFFSET) {
                    TweenLite.set(progressFillElem.arrowBlock.node, {
                        x: tailChevronElem._gsTransform.x + PROGRESS_FILL_OFFSET
                    });
                }
            }
        }, 'fillProgress');
        const totalTextCanFitOnLeft = (tailChevronEndX - 7) >= (totalElem.$.gradientFill.clientWidth + 24);
        if (totalTextCanFitOnLeft) {
            totalElem.align = 'right';
            TweenLite.set(totalElem, { left: tailChevronEndX - 6 });
        }
        else {
            TweenLite.set(totalElem, { left: tailChevronEndX + totalElem.clientWidth + 25 });
        }
        tl.add(createMaybeRandomTween({
            target: totalElem.style,
            propName: 'opacity',
            duration: 0.465,
            ease: Power4.easeIn,
            start: { probability: 1, normalValue: 0 },
            end: { probability: 0, normalValue: 1 }
        }));
        return tl;
    }
    exit() {
        const tl = new TimelineLite();
        // Things seem to ignore the clip path when they have a will-change style.
        tl.set(this.$.goal, { willChange: 'unset' });
        tl.set(this.$.total, { willChange: 'unset' });
        tl.addLabel('concealFill', '+=0.1'); // Give the will-change sets above time to apply.
        tl.to(this.$.tailChevron, this._progressTweenDuration, {
            x: TAIL_CHEVRON_WIDTH,
            ease: Power2.easeInOut,
            onUpdate: () => {
                if (this.$.tailChevron._gsTransform.x >= PROGRESS_FILL_OFFSET) {
                    TweenLite.set(this.$.progressFill.arrowBlock.node, {
                        x: this.$.tailChevron._gsTransform.x + PROGRESS_FILL_OFFSET
                    });
                }
            }
        }, 'concealFill');
        tl.set(this.$.tailChevron, { clearProps: '--atom-chevron-background' });
        tl.set(this.$.body, { clipPath: 'inset(0 -13px 0 0px)' });
        tl.addLabel('concealAll', `+=${DIRECTION_CHANGE_DELAY}`);
        const concealTweenWidth = this._revealTweenWidth + TAIL_CHEVRON_WIDTH;
        tl.to(this.$.tailChevron, concealTweenWidth * RIGHT_TIME_PER_PIXEL, {
            x: concealTweenWidth,
            ease: Sine.easeInOut
        }, 'concealAll');
        tl.to(this.$.body, concealTweenWidth * RIGHT_TIME_PER_PIXEL, {
            clipPath: `inset(0 -13px 0 ${concealTweenWidth}px)`,
            ease: Sine.easeInOut
        }, 'concealAll');
        tl.add(createMaybeRandomTween({
            target: this.style,
            propName: 'opacity',
            duration: 0.465,
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 0 }
        }));
        return tl;
    }
    render() {
        const progressFillElem = this.$.progressFill;
        const progressBlockElem = this.$.progressBlock;
        this.$.goalBlock.render(); // Must be rendered before #progressBlock.
        this.$.tailChevron.render();
        progressBlockElem.render({ useContentWidth: false });
        this.$.separatorChevron.render();
        progressFillElem.render({ useContentWidth: false }); // Must be rendered after #progressBlock.
        // Set the progressFill svgDoc to be the same size as the progressBlock svgDoc.
        progressFillElem.svgDoc.size(progressBlockElem.svgDoc.width(), progressBlockElem.svgDoc.height());
        // Copy the points from the progressBlock shape to the progressFill shape.
        // This ensures that these shapes are identical.
        progressFillElem.arrowBlock.attr({
            points: progressBlockElem.arrowBlock.attr('points')
        });
    }
};
__decorate([
    property({ type: Object })
], GDQOmnibarChallengeElement.prototype, "bid", void 0);
GDQOmnibarChallengeElement = __decorate([
    customElement('gdq-omnibar-challenge')
], GDQOmnibarChallengeElement);
export default GDQOmnibarChallengeElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItY2hhbGxlbmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLW9tbmliYXItY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSxxQ0FBcUMsQ0FBQztBQU0zRSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQsTUFBTSxvQkFBb0IsR0FBRyxPQUFPLENBQUM7QUFDckMsTUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUM7QUFDcEMsTUFBTSxvQkFBb0IsR0FBRyxFQUFFLENBQUM7QUFDaEMsTUFBTSxrQkFBa0IsR0FBRyxDQUFDLENBQUM7QUFDN0IsTUFBTSxzQkFBc0IsR0FBRyxNQUFNLENBQUM7QUFFdEM7OztHQUdHO0FBRUgsSUFBcUIsMEJBQTBCLEdBQS9DLE1BQXFCLDBCQUEyQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBT3RFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUMxQyxTQUFTLENBQUMsR0FBRyxDQUFD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