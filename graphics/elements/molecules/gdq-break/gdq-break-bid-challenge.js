var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, TweenLite, Power2, Power4 } from 'gsap';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQBreakBidChallengeElement = class GDQBreakBidChallengeElement extends Polymer.Element {
    ready() {
        super.ready();
        const amountElem = this.$.amount;
        const percentElem = this.$.percent;
        amountElem.ease = Power2.easeOut;
        amountElem.displayValueTransform = displayValue => {
            return '$' + displayValue.toLocaleString('en-US', {
                maximumFractionDigits: 0,
                useGrouping: false
            });
        };
        percentElem.ease = Power2.easeOut;
        percentElem.displayValueTransform = displayValue => {
            return displayValue.toLocaleString('en-US', {
                maximumFractionDigits: 0,
                useGrouping: false
            }) + '%';
        };
        TweenLite.set(this, { opacity: 0 });
        TweenLite.set(this.$.meter, { scaleX: 0 });
        TweenLite.set(this.$['meter-line'], { scaleY: 0 });
    }
    enter() {
        let meterPercent = this.bid.rawTotal / this.bid.rawGoal;
        meterPercent = Math.max(meterPercent, 0); // Clamp to min 0
        meterPercent = Math.min(meterPercent, 1); // Clamp to max 1
        if (Number.isNaN(meterPercent)) {
            meterPercent = 0;
        }
        const tl = new TimelineLite();
        const meterDuration = meterPercent * 0.75;
        tl.set(this.$.left, {
            width: `${meterPercent * 100}%`
        });
        tl.call(() => {
            this.$.goal.textContent = '$' + this.bid.rawGoal.toLocaleString('en-US', {
                maximumFractionDigits: 0,
                useGrouping: false
            });
            if (this.$.meter.clientWidth < this.$.amount.clientWidth) {
                TweenLite.set(this.$.amount, {
                    right: '',
                    left: '100%'
                });
            }
        }, undefined, null, '+=0.03');
        tl.add(createMaybeRandomTween({
            target: this.style,
            propName: 'opacity',
            duration: 0.465,
            ease: Power4.easeIn,
            start: { probability: 1, normalValue: 0 },
            end: { probability: 0, normalValue: 1 }
        }));
        tl.to(this.$['meter-line'], 0.324, {
            scaleY: 1,
            ease: Power2.easeInOut
        });
        tl.to(this.$.meter, meterDuration, {
            scaleX: 1,
            ease: Power2.easeOut,
            onStart: () => {
                this.$.amount.tween(this.bid.rawTotal, meterDuration);
                this.$.percent.tween(Math.floor(meterPercent * 100), meterDuration);
            }
        });
        return tl;
    }
    exit() {
        const tl = new TimelineLite();
        tl.add(createMaybeRandomTween({
            target: this.style,
            propName: 'opacity',
            duration: 0.2,
            ease: Power4.easeIn,
            start: { probability: 1, normalValue: 1 },
            end: { probability: 0, normalValue: 0 }
        }));
        return tl;
    }
};
__decorate([
    property({ type: Object })
], GDQBreakBidChallengeElement.prototype, "bid", void 0);
GDQBreakBidChallengeElement = __decorate([
    customElement('gdq-break-bid-challenge')
], GDQBreakBidChallengeElement);
export default GDQBreakBidChallengeElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWJpZC1jaGFsbGVuZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtYnJlYWstYmlkLWNoYWxsZW5nZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBSTNFLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQiwyQkFBMkIsR0FBaEQsTUFBcUIsMkJBQTRCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFJdkUsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBbUMsQ0FBQztRQUM5RCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQW9DLENBQUM7UUFFaEUsVUFBVSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2pDLFVBQVUsQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsRUFBRTtZQUNqRCxPQUFPLEdBQUcsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDakQscUJBQXFCLEVBQUUsQ0FBQztnQkFDeEIsV0FBVyxFQUFFLEtBQUs7YUFDbEIsQ0FBQyxDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRUYsV0FBVyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ2xDLFdBQVcsQ0FBQyxxQkFBcUIsR0FBRyxZQUFZLENBQUMsRUFBRTtZQUNsRCxPQUFPLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFO2dCQUMzQyxxQkFBcUIsRUFBRSxDQUFDO2dCQUN4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