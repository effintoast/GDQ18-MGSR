var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQBreakTopFrameElement = class GDQBreakTopFrameElement extends Polymer.Element {
  ready() {
    super.ready();
    const totalTextAmountElem = this.$.totalTextAmount;
    totalTextAmountElem.displayValueTransform = this._totalDisplayValueTransform.bind(this);
    nodecg.readReplicant('total', totalVal => {
      totalTextAmountElem.value = totalVal.raw;
      nodecg.listenFor('donation', this._handleDonation.bind(this));
    });
    nodecg.listenFor('total:manuallyUpdated', totalVal => {
      totalTextAmountElem.value = totalVal.raw;
    });
  }

  addDonationAlert(formattedAmount, rawAmount) {
    let backgroundColor = 'white';

    if (rawAmount >= 500) {
      backgroundColor = '#FF68B9';
    } else if (rawAmount >= 100) {
      backgroundColor = '#FFFBBD';
    } else if (rawAmount >= 20) {
      backgroundColor = '#00ffff';
    }

    this.$.donationAlerts.addAlert({
      text: formattedAmount,
      backgroundColor,
      holdDuration: rawAmount >= 500 ? 1 : 0.067
    });
  }

  _handleDonation({
    amount,
    rawAmount,
    rawNewTotal
  }) {
    this.addDonationAlert(amount, rawAmount);
    this.$.totalTextAmount.value = rawNewTotal;
  }

  _totalDisplayValueTransform(displayValue) {
    return displayValue.toLocaleString('en-US', {
      maximumFractionDigits: 0
    }).replace(/1/ig, '\u00C0');
  }

};
GDQBreakTopFrameElement = __decorate([customElement('gdq-break-top-frame')], GDQBreakTopFrameElement);
export default GDQBreakTopFrameElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1icmVhay10b3AtZnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxNQUFNO0FBQUMsRUFBQTtBQUFELElBQWtCLE9BQU8sQ0FBQyxVQUFoQztBQUVBOzs7OztBQUtBLElBQXFCLHVCQUF1QixHQUE1QyxNQUFxQix1QkFBckIsU0FBcUQsT0FBTyxDQUFDLE9BQTdELENBQW9FO0FBQ25FLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsVUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUwsQ0FBTyxlQUFuQztBQUNBLElBQUEsbUJBQW1CLENBQUMscUJBQXBCLEdBQTRDLEtBQUssMkJBQUwsQ0FBaUMsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBNUM7QUFFQSxJQUFBLE1BQU0sQ0FBQyxhQUFQLENBQXFCLE9BQXJCLEVBQStCLFFBQUQsSUFBb0I7QUFDakQsTUFBQSxtQkFBbUIsQ0FBQyxLQUFwQixHQUE0QixRQUFRLENBQUMsR0FBckM7QUFDQSxNQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLFVBQWpCLEVBQTZCLEtBQUssZUFBTCxDQUFxQixJQUFyQixDQUEwQixJQUExQixDQUE3QjtBQUNBLEtBSEQ7QUFLQSxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLHVCQUFqQixFQUEyQyxRQUFELElBQW9CO0FBQzdELE1BQUEsbUJBQW1CLENBQUMsS0FBcEIsR0FBNEIsUUFBUSxDQUFDLEdBQXJDO0FBQ0EsS0FGRDtBQUdBOztBQUVELEVBQUEsZ0JBQWdCLENBQUMsZUFBRCxFQUEwQixTQUExQixFQUEyQztBQUMxRCxRQUFJLGVBQWUsR0FBRyxPQUF0Qjs7QUFDQSxRQUFJLFNBQVMsSUFBSSxHQUFqQixFQUFzQjtBQUNyQixNQUFBLGVBQWUsR0FBRyxTQUFsQjtBQUNBLEtBRkQsTUFFTyxJQUFJLFNBQVMsSUFBSSxHQUFqQixFQUFzQjtBQUM1QixNQUFBLGVBQWUsR0FBRyxTQUFsQjtBQUNBLEtBRk0sTUFFQSxJQUFJLFNBQVMsSUFBSSxFQUFqQixFQUFxQjtBQUMzQixNQUFBLGVBQWUsR0FBRyxTQUFsQjtBQUNBOztBQUVBLFNBQUssQ0FBTCxDQUFPLGNBQVAsQ0FBZ0QsUUFBaEQsQ0FBeUQ7QUFDekQsTUFBQSxJQUFJLEVBQUUsZUFEbUQ7QUFFekQsTUFBQSxlQUZ5RDtBQUd6RCxNQUFBLFlBQVksRUFBRSxTQUFTLElBQUksR0FBYixHQUFtQixDQUFuQixHQUF1QjtBQUhvQixLQUF6RDtBQUtEOztBQUVELEVBQUEsZUFBZSxDQUNkO0FBQUMsSUFBQSxNQUFEO0FBQVMsSUFBQSxTQUFUO0FBQW9CLElBQUE7QUFBcEIsR0FEYyxFQUM4RTtBQUU1RixTQUFLLGdCQUFMLENBQXNCLE1BQXRCLEVBQThCLFNBQTlCO0FBQ0MsU0FBSyxDQUFMLENBQU8sZUFBUCxDQUFxRCxLQUFyRCxHQUE2RCxXQUE3RDtBQUNEOztBQUVELEVBQUEsMkJBQTJCLENBQUMsWUFBRCxFQUFxQjtBQUMvQyxXQUFPLFlBQVksQ0FBQyxjQUFiLENBQTRCLE9BQTVCLEVBQXFDO0FBQzNDLE1BQUEscUJBQXFCLEVBQUU7QUFEb0IsS0FBckMsRUFFSixPQUZJLENBRUksS0FGSixFQUVXLFFBRlgsQ0FBUDtBQUdBOztBQTVDa0UsQ0FBcEU7QUFBcUIsdUJBQXVCLEdBQUEsVUFBQSxDQUFBLENBRDNDLGFBQWEsQ0FBQyxxQkFBRCxDQUM4QixDQUFBLEVBQXZCLHVCQUF1QixDQUF2QjtlQUFBLHVCIiwic291cmNlUm9vdCI6IiJ9