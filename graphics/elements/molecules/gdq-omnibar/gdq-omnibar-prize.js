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
let GDQOmnibarPrizeElement = class GDQOmnibarPrizeElement extends Polymer.Element {
    enter() {
        return this.$.listItem.enter();
    }
    exit() {
        return this.$.listItem.exit();
    }
    calcBidAmountText(prize) {
        return prize.sumdonations ?
            `${prize.minimumbid} in Total Donations` :
            `${prize.minimumbid} Single Donation`;
    }
};
__decorate([
    property({ type: Object })
], GDQOmnibarPrizeElement.prototype, "prize", void 0);
GDQOmnibarPrizeElement = __decorate([
    customElement('gdq-omnibar-prize')
], GDQOmnibarPrizeElement);
export default GDQOmnibarPrizeElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItcHJpemUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtb21uaWJhci1wcml6ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQ7OztHQUdHO0FBRUgsSUFBcUIsc0JBQXNCLEdBQTNDLE1BQXFCLHNCQUF1QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSWxFLEtBQUs7UUFDSixPQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBc0MsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSTtRQUNILE9BQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFzQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlELENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFZO1FBQzdCLE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLEdBQUcsS0FBSyxDQUFDLFVBQVUscUJBQXFCLENBQUMsQ0FBQztZQUMxQyxHQUFHLEtBQUssQ0FBQyxVQUFVLGtCQUFrQixDQUFDO0lBQ3hDLENBQUM7Q0FDRCxDQUFBO0FBZkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7cURBQ1o7QUFGTyxzQkFBc0I7SUFEMUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO0dBQ2Qsc0JBQXNCLENBaUIxQztlQWpCb0Isc0JBQXNCIn0=