var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Sine, Power2 } from 'gsap';
import GDQBreakLoopMixin from '../../../mixins/gdq-break-loop-mixin';
import { typeAnim } from '../../../../shared/lib/type-anims';
const { customElement } = Polymer.decorators;
const EMPTY_OBJ = {};
const DISPLAY_DURATION = nodecg.bundleConfig.displayDuration;
const currentBids = nodecg.Replicant('currentBids');
/**
 * @customElement
 * @polymer
 */
let GDQBreakBidsElement = class GDQBreakBidsElement extends GDQBreakLoopMixin(Polymer.Element) {
    ready() {
        super.ready();
        this.maxNoMoreItemsRetries = 30;
        currentBids.on('change', newVal => {
            this.availableItems = newVal;
        });
    }
    show() {
        const tl = new TimelineLite();
        tl.to(this, 0.333, {
            opacity: 1,
            ease: Sine.easeInOut
        }, 0);
        tl.to(this, 1, {
            x: '0%',
            ease: Power2.easeOut
        }, 0);
        return tl;
    }
    hide() {
        const tl = new TimelineLite();
        tl.to(this, 1, {
            x: '-100%',
            ease: Power2.easeIn
        });
        tl.to(this, 0.333, {
            opacity: 0,
            ease: Sine.easeInOut
        }, '-=0.333');
        return tl;
    }
    _showItem(bid) {
        let elementTagName;
        if (bid.type === 'choice-many') {
            elementTagName = 'gdq-break-bid-many';
        }
        else if (bid.type === 'choice-binary') {
            elementTagName = 'gdq-break-bid-binary';
        }
        else if (bid.type === 'challenge') {
            elementTagName = 'gdq-break-bid-challenge';
        }
        else {
            nodecg.log.error('Got bid of unexpected type (%s):', bid.type, JSON.stringify(bid, null, 2));
        }
        const tl = new TimelineLite();
        if (!elementTagName) {
            return tl;
        }
        const previousElement = this._previousBidElement;
        const element = document.createElement(elementTagName);
        element.bid = bid;
        this._previousBidElement = element;
        this.$.content.appendChild(element);
        if (previousElement) {
            tl.add(previousElement.exit());
            tl.call(() => {
                previousElement.remove();
            });
        }
        tl.call(() => {
            const contentElem = this.$.content;
            contentElem.selectIndex(contentElem.indexOf(element));
            this.$['description-actual'].innerHTML = bid.description.replace(/\\n/g, '</br>');
            typeAnim(this.$['description-actual']);
        }, undefined, null, '+=0.1');
        tl.add(element.enter());
        // Give the bid some time to show.
        tl.to(EMPTY_OBJ, DISPLAY_DURATION, EMPTY_OBJ);
        return tl;
    }
};
GDQBreakBidsElement = __decorate([
    customElement('gdq-break-bids')
], GDQBreakBidsElement);
export default GDQBreakBidsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWJpZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtYnJlYWstYmlkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxpQkFBaUIsTUFBTSxzQ0FBc0MsQ0FBQztBQUVyRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFFM0QsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFRM0MsTUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUM7QUFDN0QsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBYyxhQUFhLENBQUMsQ0FBQztBQUVqRTs7O0dBR0c7QUFFSCxJQUFxQixtQkFBbUIsR0FBeEMsTUFBcUIsbUJBQW9CLFNBQVEsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBWTtJQUc3RixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLEVBQUUsQ0FBQztRQUNoQyxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJO1FBQ0gsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDcEIsRUFBRSxDQUFDLENBQUMsQ0FB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