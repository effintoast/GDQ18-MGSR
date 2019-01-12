var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CustomEase } from '../../../../shared/lib/vendor/CustomEase';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
import { TimelineLite, Sine, TweenLite, Linear, Power4 } from 'gsap';
const { customElement, property } = Polymer.decorators;
const RIGHT_TIME_PER_PIXEL = 0.00157;
const LEFT_TIME_PER_PIXEL = 0.00157;
const TAIL_CHEVRON_WIDTH = 6;
CustomEase.create('BidwarOptionReveal', 'M0,0 C0.166,0.166 0.234,1 1,1');
/**
 * @customElement
 * @polymer
 */
let GDQOmnibarBidwarOptionElement = class GDQOmnibarBidwarOptionElement extends Polymer.Element {
    ready() {
        super.ready();
        TweenLite.set(this.$.tailChevron, { opacity: 0 });
        TweenLite.set(this.$.body, { opacity: 0 });
        TweenLite.set(this.$.total, { opacity: 0 });
    }
    enter() {
        const tailChevronElem = this.$.tailChevron;
        const totalBlockElem = this.$.totalBlock;
        const tl = new TimelineLite();
        const revealTweenWidth = this.$.body.clientWidth - tailChevronElem.clientWidth + TAIL_CHEVRON_WIDTH;
        this._revealTweenWidth = revealTweenWidth;
        tl.set(tailChevronElem, { opacity: 1 });
        tl.call(() => {
            totalBlockElem.arrowBlock.attr({ 'fill-opacity': 0 });
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
        tl.addLabel('reveal', '+=0.1167');
        tl.to(tailChevronElem, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
            x: 0,
            ease: 'BidwarOptionReveal'
        }, 'reveal');
        tl.to(this.$.body, revealTweenWidth * LEFT_TIME_PER_PIXEL, {
            clipPath: 'inset(0 -13px 0 0px)',
            ease: 'BidwarOptionReveal'
        }, 'reveal');
        tl.addLabel('flickerTotal', '-=0.667');
        tl.add(createMaybeRandomTween({
            target: {},
            propName: 'placeholder',
            duration: 0.465,
            ease: Power4.easeIn,
            start: { probability: 1, normalValue: 0 },
            end: { probability: 0, normalValue: 1 },
            onUpdate: randomValue => {
                this.$.total.style.opacity = String(randomValue);
                totalBlockElem.arrowBlock.attr({ 'fill-opacity': randomValue });
            }
        }), 'flickerTotal');
        return tl;
    }
    exit() {
        const tl = new TimelineLite();
        // The total seems to ignore the clip path when it has a will-change style.
        tl.set(this.$.total, { willChange: 'unset' });
        tl.addLabel('conceal', '+=0.1');
        tl.to(this.$.tailChevron, this._revealTweenWidth * RIGHT_TIME_PER_PIXEL, {
            x: this._revealTweenWidth,
            ease: Sine.easeInOut
        }, 'conceal');
        tl.to(this.$.body, this._revealTweenWidth * RIGHT_TIME_PER_PIXEL, {
            clipPath: `inset(0 -13px 0 ${this._revealTweenWidth}px)`,
            ease: Sine.easeInOut
        }, 'conceal');
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
        this.$.tailChevron.render();
        this.$.labelBlock.render();
        this.$.totalBlock.render();
    }
    formatOptionDescription(bid) {
        const fallback = 'Be the first to bid!';
        if (bid && !(bid.description || bid.name)) {
            nodecg.log.error('Got weird bid war option:', JSON.stringify(bid, null, 2));
            return fallback;
        }
        return bid ? (bid.description || bid.name) : fallback;
    }
};
__decorate([
    property({ type: Object })
], GDQOmnibarBidwarOptionElement.prototype, "bid", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQOmnibarBidwarOptionElement.prototype, "placeholder", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQOmnibarBidwarOptionElement.prototype, "winning", void 0);
GDQOmnibarBidwarOptionElement = __decorate([
    customElement('gdq-omnibar-bidwar-option')
], GDQOmnibarBidwarOptionElement);
export default GDQOmnibarBidwarOptionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItYmlkd2FyLW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWJpZHdhci1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBDQUEwQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBTW5FLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRCxNQUFNLG9CQUFvQixHQUFHLE9BQU8sQ0FBQztBQUNyQyxNQUFNLG1CQUFtQixHQUFHLE9BQU8sQ0FBQztBQUNwQyxNQUFNLGtCQUFrQixHQUFHLENBQUMsQ0FBQztBQUU3QixVQUFVLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLCtCQUErQixDQUFDLENBQUM7QUFFekU7OztHQUdHO0FBRUgsSUFBcUIsNkJBQTZCLEdBQWxELE1BQXFCLDZCQUE4QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBWXpFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO1FBQ3pDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBQyxPQUFPLEVBQUUsQ0FBQyxFQUFDLENBQUMs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