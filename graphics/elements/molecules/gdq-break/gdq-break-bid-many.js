var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Power4 } from 'gsap';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQBreakBidManyElement = class GDQBreakBidManyElement extends Polymer.Element {
    enter() {
        this.$.optionRepeat.render();
        const tl = new TimelineLite();
        const optionElements = Array.from(this.shadowRoot.querySelectorAll('gdq-break-bid-many-option'));
        tl.addLabel('flickerOptions', '+=0');
        optionElements.forEach((optionElement, index) => {
            optionElement.style.opacity = '0';
            tl.add(createMaybeRandomTween({
                target: optionElement.style,
                propName: 'opacity',
                duration: 0.465,
                ease: Power4.easeIn,
                start: { probability: 1, normalValue: 0 },
                end: { probability: 0, normalValue: 1 }
            }), `flickerOptions+=${index * 0.1}`);
        });
        tl.addLabel('enterOptions', '+=0');
        optionElements.forEach((optionElement, index) => {
            tl.add(optionElement.enter(), `enterOptions+=${index * 0.1}`);
        });
        return tl;
    }
    exit() {
        const tl = new TimelineLite();
        const optionElements = Array.from(this.shadowRoot.querySelectorAll('gdq-break-bid-many-option'));
        tl.addLabel('flickerOptions', '+=0');
        optionElements.slice(0).reverse().forEach((optionElement, index) => {
            tl.add(createMaybeRandomTween({
                target: optionElement.style,
                propName: 'opacity',
                duration: 0.2,
                ease: Power4.easeIn,
                start: { probability: 1, normalValue: 1 },
                end: { probability: 0, normalValue: 0 }
            }), `flickerOptions+=${index * 0.1}`);
        });
        return tl;
    }
    _calcOptions(bid) {
        if (!bid) {
            return [];
        }
        return bid.options.slice(0, 5);
    }
};
__decorate([
    property({ type: Object })
], GDQBreakBidManyElement.prototype, "bid", void 0);
GDQBreakBidManyElement = __decorate([
    customElement('gdq-break-bid-many')
], GDQBreakBidManyElement);
export default GDQBreakBidManyElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWJpZC1tYW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLWJyZWFrLWJpZC1tYW55LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTFDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBSTNFLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQixzQkFBc0IsR0FBM0MsTUFBcUIsc0JBQXVCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFJbEUsS0FBSztRQUNILElBQUksQ0FBQyxDQUFDLENBQUMsWUFBa0MsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVwRCxNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FBQyxDQUFtQyxDQUFDO1FBRXBJLEVBQUUsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDckMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDN0IsTUFBTSxFQUFFLGFBQWEsQ0FBQyxLQUFLO2dCQUMzQixRQUFRLEVBQUUsU0FBUztnQkFDbkIsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dCQUNuQixLQUFLLEVBQUUsRUFBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUM7Z0JBQ3ZDLEdBQUcsRUFBRSxFQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBQzthQUNyQyxDQUFDLEVBQUUsbUJBQW1CLEtBQUssR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsRUFBRSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxFQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxpQkFBaUIsS0FBSyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFJO1FBQ0gsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsZ0JBQWdCLENBQUMsMkJBQTJCLENBQUMsQ0FBbUMsQ0FBQztRQUVwSSxFQUFFLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2xFLEVBQUUsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxhQUFhLENBQUMsS0FBSztnQkFDM0IsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxHQUFHO2dCQUNiLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDbkIsS0FBSyxFQUFFLEVBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFDO2dCQUN2QyxHQUFHLEVBQUUsRUFBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUM7YUFDckMsQ0FBQyxFQUFFLG1CQUFtQixLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELFlBQVksQ0FBQyxHQUFjO1FBQzFCLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDVCxPQUFPLEVBQUUsQ0FBQztTQUNWO1FBRUQsT0FBTyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztDQUNELENBQUE7QUF4REE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bURBQ1Y7QUFGSyxzQkFBc0I7SUFEMUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDO0dBQ2Ysc0JBQXNCLENBMEQxQztlQTFEb0Isc0JBQXNCIn0=