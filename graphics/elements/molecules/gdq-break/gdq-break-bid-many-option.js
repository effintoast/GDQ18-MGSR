var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Power2 } from 'gsap';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQBreakBidManyOptionElement = class GDQBreakBidManyOptionElement extends Polymer.Element {
    ready() {
        super.ready();
        const amountElem = this.$.amount;
        amountElem.ease = Power2.easeOut;
        amountElem.displayValueTransform = displayValue => {
            return '$' + displayValue.toLocaleString('en-US', {
                maximumFractionDigits: 0,
                useGrouping: false
            });
        };
    }
    enter() {
        let meterPercent = this.option.rawTotal / this.bid.options[0].rawTotal;
        meterPercent = Math.max(meterPercent, 0); // Clamp to min 0
        meterPercent = Math.min(meterPercent, 1); // Clamp to max 1
        if (Number.isNaN(meterPercent)) {
            meterPercent = 0;
        }
        const tl = new TimelineLite();
        const duration = meterPercent * 0.75;
        tl.fromTo(this.$.meter, duration, {
            scaleX: 0
        }, {
            scaleX: meterPercent,
            ease: Power2.easeOut,
            onStart: () => {
                this.$.amount.tween(this.option.rawTotal, duration);
            }
        });
        return tl;
    }
    _calcOptionName(option) {
        if (!option) {
            return '';
        }
        return option.description || option.name;
    }
};
__decorate([
    property({ type: Object })
], GDQBreakBidManyOptionElement.prototype, "bid", void 0);
__decorate([
    property({ type: Object })
], GDQBreakBidManyOptionElement.prototype, "option", void 0);
GDQBreakBidManyOptionElement = __decorate([
    customElement('gdq-break-bid-many-option')
], GDQBreakBidManyOptionElement);
export default GDQBreakBidManyOptionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWJpZC1tYW55LW9wdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1icmVhay1iaWQtbWFueS1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHMUMsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJEOzs7R0FHRztBQUVILElBQXFCLDRCQUE0QixHQUFqRCxNQUFxQiw0QkFBNkIsU0FBUSxPQUFPLENBQUMsT0FBTztJQU94RSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFtQyxDQUFDO1FBQzlELFVBQVUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqQyxVQUFVLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDLEVBQUU7WUFDakQsT0FBTyxHQUFHLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2pELHFCQUFxQixFQUFFLENBQUM7Z0JBQ3hCLFdBQVcsRUFBRSxLQUFLO2FBQ2xCLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0osSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO1FBQ3ZFLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtRQUMzRCxZQUFZLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUI7UUFDM0QsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQy9CLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDakI7UUFFRCxNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLE1BQU0sUUFBUSxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUM7UUFFckMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUU7WUFDakMsTUFBTSxFQUFFLENBQUM7U0FDVCxFQUFFO1lBQ0YsTUFBTSxFQUFFLFlBQVk7WUFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFvQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNwRixDQUFDO1NBQ0QsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWdCO1FBQy9CLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDMUMsQ0FBQztDQUNELENBQUE7QUFoREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7eURBQ1Y7QUFHZjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs0REFDUjtBQUxHLDRCQUE0QjtJQURoRCxhQUFhLENBQUMsMkJBQTJCLENBQUM7R0FDdEIsNEJBQTRCLENBa0RoRDtlQWxEb0IsNEJBQTRCIn0=