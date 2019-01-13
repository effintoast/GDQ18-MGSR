var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQBreakTopFrameElement = class GDQBreakTopFrameElement extends Polymer.Element {
    ready() {
        super.ready();
        const totalTextAmountElem = this.$.totalTextAmount;
        totalTextAmountElem.displayValueTransform = this._totalDisplayValueTransform.bind(this);
        nodecg.readReplicant('total', (totalVal) => {
            totalTextAmountElem.value = totalVal.raw;
            nodecg.listenFor('donation', this._handleDonation.bind(this));
        });
        nodecg.listenFor('total:manuallyUpdated', (totalVal) => {
            totalTextAmountElem.value = totalVal.raw;
        });
    }
    addDonationAlert(formattedAmount, rawAmount) {
        let backgroundColor = 'white';
        if (rawAmount >= 500) {
            backgroundColor = '#FF68B9';
        }
        else if (rawAmount >= 100) {
            backgroundColor = '#FFFBBD';
        }
        else if (rawAmount >= 20) {
            backgroundColor = '#00ffff';
        }
        this.$.donationAlerts.addAlert({
            text: formattedAmount,
            backgroundColor,
            holdDuration: rawAmount >= 500 ? 1 : 0.067
        });
    }
    _handleDonation({ amount, rawAmount, rawNewTotal }) {
        this.addDonationAlert(amount, rawAmount);
        this.$.totalTextAmount.value = rawNewTotal;
    }
    _totalDisplayValueTransform(displayValue) {
        return displayValue.toLocaleString('en-US', {
            maximumFractionDigits: 0
        }).replace(/1/ig, '\u00C0');
    }
};
GDQBreakTopFrameElement = __decorate([
    customElement('gdq-break-top-frame')
], GDQBreakTopFrameElement);
export default GDQBreakTopFrameElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLXRvcC1mcmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1icmVhay10b3AtZnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFM0M7OztHQUdHO0FBRUgsSUFBcUIsdUJBQXVCLEdBQTVDLE1BQXFCLHVCQUF3QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBQ25FLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBNEMsQ0FBQztRQUNoRixtQkFBbUIsQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXhGLE1BQU0sQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBZSxFQUFFLEVBQUU7WUFDakQsbUJBQW1CLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7WUFDekMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxRQUFlLEVBQUUsRUFBRTtZQUM3RCxtQkFBbUIsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxlQUF1QixFQUFFLFNBQWlCO1FBQzFELElBQUksZUFBZSxHQUFHLE9BQU8sQ0FBQztRQUM5QixJQUFJLFNBQVMsSUFBSSxHQUFHLEVBQUU7WUFDckIsZUFBZSxHQUFHLFNBQVMsQ0FBQztTQUM1QjthQUFNLElBQUksU0FBUyxJQUFJLEdBQUcsRUFBRTtZQUM1QixlQUFlLEdBQUcsU0FBUyxDQUFDO1NBQzVCO2FBQU0sSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFO1lBQzNCLGVBQWUsR0FBRyxTQUFTLENBQUM7U0FDNUI7UUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQXdDLENBQUMsUUFBUSxDQUFDO1lBQ3pELElBQUksRUFBRSxlQUFlO1lBQ3JCLGVBQWU7WUFDZixZQUFZLEVBQUUsU0FBUyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQzFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlLENBQ2QsRUFBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBNkQ7UUFFNUYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQTZDLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQztJQUMzRSxDQUFDO0lBRUQsMkJBQTJCLENBQUMsWUFBb0I7UUFDL0MsT0FBTyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtZQUMzQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3hCLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRCxDQUFBO0FBN0NvQix1QkFBdUI7SUFEM0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0dBQ2hCLHVCQUF1QixDQTZDM0M7ZUE3Q29CLHVCQUF1QiJ9