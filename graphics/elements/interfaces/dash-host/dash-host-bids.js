var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const allBids = nodecg.Replicant('allBids');
const currentRun = nodecg.Replicant('currentRun');
const runOrderMap = nodecg.Replicant('runOrderMap');
let DashHostBidsElement = class DashHostBidsElement extends Polymer.MutableData(Polymer.Element) {
    constructor() {
        super(...arguments);
        this.bidTypes = ['choice-many', 'choice-binary'];
    }
    ready() {
        super.ready();
        allBids.on('change', () => {
            this.recalcRelevantBids();
        });
        currentRun.on('change', () => {
            this.recalcRelevantBids();
        });
        runOrderMap.on('change', () => {
            this.recalcRelevantBids();
        });
        nodecg.listenFor('bids:updating', () => {
            this.$.cooldown.indeterminate = true;
        });
        nodecg.listenFor('bids:updated', () => {
            this.$.cooldown.startCountdown(60);
        });
    }
    closeDialog() {
        this.$.dialog.close();
    }
    computeBidsFilter(str) {
        if (str) {
            // Return a filter function for the current search string.
            const regexp = new RegExp(escapeRegExp(str), 'ig');
            return (bid) => {
                return regexp.test(bid.description);
            };
        }
        // Set filter to null to disable filtering.
        return null;
    }
    recalcRelevantBids() {
        if (allBids.status !== 'declared' ||
            currentRun.status !== 'declared' ||
            runOrderMap.status !== 'declared' ||
            !allBids.value ||
            !runOrderMap.value ||
            !currentRun.value) {
            return;
        }
        this.relevantBids = allBids.value.filter(bid => {
            if (!this.bidTypes.includes(bid.type)) {
                return false;
            }
            if (bid.speedrun in runOrderMap.value) {
                return runOrderMap.value[bid.speedrun] >= currentRun.value.order;
            }
            return true;
        }).sort((a, b) => {
            return runOrderMap.value[a.speedrun] - runOrderMap.value[b.speedrun];
        });
    }
    calcBidName(description) {
        return description.replace('||', ' -- ');
    }
    _handleBidTap(e) {
        if (e.target.bid.type !== 'choice-many') {
            return;
        }
        this.dialogBid = e.target.bid;
        this.$.dialog.open();
    }
};
__decorate([
    property({ type: Array })
], DashHostBidsElement.prototype, "relevantBids", void 0);
__decorate([
    property({ type: String, notify: true })
], DashHostBidsElement.prototype, "bidFilterString", void 0);
__decorate([
    property({ type: Object })
], DashHostBidsElement.prototype, "dialogBid", void 0);
__decorate([
    property({ type: Array })
], DashHostBidsElement.prototype, "bidTypes", void 0);
DashHostBidsElement = __decorate([
    customElement('dash-host-bids')
], DashHostBidsElement);
export default DashHostBidsElement;
function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LWJpZHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtYmlkcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBYyxTQUFTLENBQUMsQ0FBQztBQUN6RCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFNLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVcsYUFBYSxDQUFDLENBQUM7QUFHOUQsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFvQixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQURyRjs7UUFZQyxhQUFRLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7SUErRTdDLENBQUM7SUE3RUEsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLE9BQU8sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILFdBQVcsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLEdBQUcsRUFBRTtZQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFD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