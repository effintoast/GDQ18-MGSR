var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let DashHostBidOptionElement = class DashHostBidOptionElement extends Polymer.Element {
    calcOptionMeterFillStyle(bid, option) {
        if (!bid || !option || !bid.options || bid.options.length <= 0) {
            return '';
        }
        let percent = option.rawTotal / bid.options[0].rawTotal;
        percent = Math.max(percent, 0); // Clamp to min 0
        percent = Math.min(percent, 1); // Clamp to max 1
        if (Number.isNaN(percent)) {
            percent = 0;
        }
        return `transform: scaleX(${percent});`;
    }
};
__decorate([
    property({ type: Object })
], DashHostBidOptionElement.prototype, "bid", void 0);
__decorate([
    property({ type: Object })
], DashHostBidOptionElement.prototype, "option", void 0);
__decorate([
    property({ type: Number, reflectToAttribute: true })
], DashHostBidOptionElement.prototype, "index", void 0);
DashHostBidOptionElement = __decorate([
    customElement('dash-host-bid-option')
], DashHostBidOptionElement);
export default DashHostBidOptionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LWJpZC1vcHRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtYmlkLW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQ7OztHQUdHO0FBRUgsSUFBcUIsd0JBQXdCLEdBQTdDLE1BQXFCLHdCQUF5QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBVXBFLHdCQUF3QixDQUFDLEdBQWMsRUFBRSxNQUFnQjtRQUN4RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDL0QsT0FBTyxFQUFFLENBQUM7U0FDVjtRQUVELElBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7UUFDeEQsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO1FBQ2pELE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQjtRQUNqRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDMUIsT0FBTyxHQUFHLENBQUMsQ0FBQztTQUNaO1FBQ0QsT0FBTyxxQkFBcUIsT0FBTyxJQUFJLENBQUM7SUFDekMsQ0FBQztDQUNELENBQUE7QUFyQkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7cURBQ1Y7QUFHZjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzt3REFDUjtBQUdqQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUM7dURBQ3JDO0FBUk0sd0JBQXdCO0lBRDVDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztHQUNqQix3QkFBd0IsQ0F1QjVDO2VBdkJvQix3QkFBd0IifQ==