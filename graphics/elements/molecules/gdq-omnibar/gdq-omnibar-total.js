var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement } = Polymer.decorators;
const total = nodecg.Replicant('total');
let GDQOmnibarTotalElement = class GDQOmnibarTotalElement extends Polymer.Element {
    ready() {
        super.ready();
        const totalTextAmountElem = this.$.totalTextAmount;
        totalTextAmountElem.displayValueTransform = this._totalDisplayValueTransform.bind(this);
        total.on('change', newVal => {
            totalTextAmountElem.value = newVal.raw;
        });
    }
    _totalDisplayValueTransform(displayValue) {
        const formatted = displayValue.toLocaleString('en-US', {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0
        }).replace(/1/ig, '\u00C0');
        // Part of the workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=67029
        this.$.totalTextAmountPlaceholder.textContent = formatted;
        return formatted;
    }
};
GDQOmnibarTotalElement = __decorate([
    customElement('gdq-omnibar-total')
], GDQOmnibarTotalElement);
export default GDQOmnibarTotalElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItdG90YWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtb21uaWJhci10b3RhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUMzQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFRLE9BQU8sQ0FBQyxDQUFDO0FBRy9DLElBQXFCLHNCQUFzQixHQUEzQyxNQUFxQixzQkFBdUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUNsRSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQTRDLENBQUM7UUFDaEYsbUJBQW1CLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RixLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMzQixtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxZQUFvQjtRQUMvQyxNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUN0RCxxQkFBcUIsRUFBRSxDQUFDO1lBQ3hCLHFCQUFxQixFQUFFLENBQUM7U0FDeEIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFNUIseUZBQXlGO1FBQ3pGLElBQUksQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztRQUUxRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0NBQ0QsQ0FBQTtBQXJCb0Isc0JBQXNCO0lBRDFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztHQUNkLHNCQUFzQixDQXFCMUM7ZUFyQm9CLHNCQUFzQiJ9