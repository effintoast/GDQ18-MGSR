var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let DashHostAdbreakElement = class DashHostAdbreakElement extends Polymer.MutableData(Polymer.Element) {
    start() {
        this.dispatchEvent(new CustomEvent('start', {
            detail: {
                adBreakId: this.adBreak.id
            },
            bubbles: true,
            composed: true
        }));
    }
    cancel() {
        this.dispatchEvent(new CustomEvent('cancel', {
            detail: {
                adBreakId: this.adBreak.id
            },
            bubbles: true,
            composed: true
        }));
    }
    complete() {
        this.dispatchEvent(new CustomEvent('complete', {
            detail: {
                adBreakId: this.adBreak.id
            },
            bubbles: true,
            composed: true
        }));
    }
    _calcStartButtonText(adBreakState) {
        if (adBreakState.canStart) {
            return 'Start Break';
        }
        if (adBreakState.cantStartReason) {
            return adBreakState.cantStartReason;
        }
        return 'Prequisites unmet';
    }
    _calcCompleteButtonHidden(adBreak) {
        const lastAd = adBreak.ads[adBreak.ads.length - 1];
        return lastAd.adType.toLowerCase() !== 'image';
    }
    any(...args) {
        return args.find(arg => Boolean(arg));
    }
};
__decorate([
    property({ type: Object })
], DashHostAdbreakElement.prototype, "adBreak", void 0);
DashHostAdbreakElement = __decorate([
    customElement('dash-host-adbreak')
], DashHostAdbreakElement);
export default DashHostAdbreakElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LWFkYnJlYWsuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtYWRicmVhay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsSUFBcUIsc0JBQXNCLEdBQTNDLE1BQXFCLHNCQUF1QixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUl2RixLQUFLO1FBQ0osSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDM0MsTUFBTSxFQUFFO2dCQUNQLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDMUI7WUFDRCxPQUFPLEVBQUUsSUFBSTtZQUNiLFFBQVEsRUFBRSxJQUFJO1NBQ2QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQzVDLE1BQU0sRUFBRTtnQkFDUCxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2FBQzFCO1lBQ0QsT0FBTyxFQUFFLElBQUk7WUFDYixRQUFRLEVBQUUsSUFBSTtTQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFVBQVUsRUFBRTtZQUM5QyxNQUFNLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTthQUMxQjtZQUNELE9BQU8sRUFBRSxJQUFJO1lBQ2IsUUFBUSxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxZQUEwQjtRQUM5QyxJQUFJLFlBQVksQ0FBQyxRQUFRLEVBQUU7WUFDMUIsT0FBTyxhQUFhLENBQUM7U0FDckI7UUFFRCxJQUFJLFlBQVksQ0FBQyxlQUFlLEVBQUU7WUFDakMsT0FBTyxZQUFZLENBQUMsZUFBZSxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDO0lBRUQseUJBQXlCLENBQUMsT0FBZ0I7UUFDekMsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNuRCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxDQUFDO0lBQ2hELENBQUM7SUFFRCxHQUFHLENBQUMsR0FBRyxJQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FDRCxDQUFBO0FBcERBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3VEQUNSO0FBRkcsc0JBQXNCO0lBRDFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztHQUNkLHNCQUFzQixDQXNEMUM7ZUF0RG9CLHNCQUFzQiJ9