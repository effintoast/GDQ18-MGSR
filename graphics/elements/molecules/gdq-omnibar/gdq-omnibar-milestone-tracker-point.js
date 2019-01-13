var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GDQOmnibarMilestoneTrackerPointElement_1;
const { customElement, property } = Polymer.decorators;
const ONE_MILLION = 1000000;
let GDQOmnibarMilestoneTrackerPointElement = GDQOmnibarMilestoneTrackerPointElement_1 = class GDQOmnibarMilestoneTrackerPointElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.align = 'left';
        this.dropTrailingZeroes = false;
    }
    _alignChanged(newVal) {
        const bodyElem = this.$.body;
        if (newVal !== 'center') {
            bodyElem.style.left = '';
        }
        const bodyRect = this.$.body.getBoundingClientRect();
        bodyElem.style.left = `${(bodyRect.width / -2) + 1.5}px`;
    }
    _calcDisplayAmount(amount) {
        return `$${this._formatAmount(amount / ONE_MILLION)}M`;
    }
    _formatAmount(amount) {
        let amountString = String(amount).substr(0, 4);
        if (this.dropTrailingZeroes) {
            while ((amountString.endsWith('0') || amountString.endsWith('.')) &&
                amountString.length > 1) {
                amountString = amountString.slice(0, -1);
            }
        }
        // Use the monospace version of the "1" character in the gdqpixel font.
        return amountString.replace(/1/ig, '\u00C0');
    }
};
__decorate([
    property({ type: String, reflectToAttribute: true, observer: GDQOmnibarMilestoneTrackerPointElement_1.prototype._alignChanged })
], GDQOmnibarMilestoneTrackerPointElement.prototype, "align", void 0);
__decorate([
    property({ type: Number })
], GDQOmnibarMilestoneTrackerPointElement.prototype, "amount", void 0);
__decorate([
    property({ type: Boolean })
], GDQOmnibarMilestoneTrackerPointElement.prototype, "dropTrailingZeroes", void 0);
GDQOmnibarMilestoneTrackerPointElement = GDQOmnibarMilestoneTrackerPointElement_1 = __decorate([
    customElement('gdq-omnibar-milestone-tracker-point')
], GDQOmnibarMilestoneTrackerPointElement);
export default GDQOmnibarMilestoneTrackerPointElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItbWlsZXN0b25lLXRyYWNrZXItcG9pbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtb21uaWJhci1taWxlc3RvbmUtdHJhY2tlci1wb2ludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUk1QixJQUFxQixzQ0FBc0MsOENBQTNELE1BQXFCLHNDQUF1QyxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBRG5GOztRQUdDLFVBQUssR0FBYyxNQUFNLENBQUM7UUFNMUIsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO0lBK0I1QixDQUFDO0lBN0JBLGFBQWEsQ0FBQyxNQUFpQjtRQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQXNCLENBQUM7UUFDL0MsSUFBSSxNQUFNLEtBQUssUUFBUSxFQUFFO1lBQ3hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUN6QjtRQUVELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDckQsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztJQUMxRCxDQUFDO0lBRUQsa0JBQWtCLENBQUMsTUFBYztRQUNoQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUN4RCxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWM7UUFDM0IsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFL0MsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsT0FDQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUQsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQ3JCO2dCQUNGLFlBQVksR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Q7UUFFRCx1RUFBdUU7UUFDdkUsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QyxDQUFDO0NBQ0QsQ0FBQTtBQXJDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSx3Q0FBc0MsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFDLENBQUM7cUVBQ25HO0FBRzFCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3NFQUNWO0FBR2Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7a0ZBQ0M7QUFSUCxzQ0FBc0M7SUFEMUQsYUFBYSxDQUFDLHFDQUFxQyxDQUFDO0dBQ2hDLHNDQUFzQyxDQXVDMUQ7ZUF2Q29CLHNDQUFzQyJ9