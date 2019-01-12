var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
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
      return bid => {
        return regexp.test(bid.description);
      };
    } // Set filter to null to disable filtering.


    return null;
  }

  recalcRelevantBids() {
    if (allBids.status !== 'declared' || currentRun.status !== 'declared' || runOrderMap.status !== 'declared' || !allBids.value || !runOrderMap.value || !currentRun.value) {
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

__decorate([property({
  type: Array
})], DashHostBidsElement.prototype, "relevantBids", void 0);

__decorate([property({
  type: String,
  notify: true
})], DashHostBidsElement.prototype, "bidFilterString", void 0);

__decorate([property({
  type: Object
})], DashHostBidsElement.prototype, "dialogBid", void 0);

__decorate([property({
  type: Array
})], DashHostBidsElement.prototype, "bidTypes", void 0);

DashHostBidsElement = __decorate([customElement('dash-host-bids')], DashHostBidsElement);
export default DashHostBidsElement;

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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akIsSUFWaUIsQ0FVWixDQUFDLENBQUQsRUFBSSxDQUFKLEtBQVM7QUFDaEIsYUFBUSxXQUFXLENBQUMsS0FBWixDQUEyQixDQUFDLENBQUMsUUFBN0IsSUFBMEMsV0FBVyxDQUFDLEtBQVosQ0FBMkIsQ0FBQyxDQUFDLFFBQTdCLENBQWxEO0FBQ0EsS0FabUIsQ0FBcEI7QUFhQTs7QUFFRCxFQUFBLFdBQVcsQ0FBQyxXQUFELEVBQW9CO0FBQzlCLFdBQU8sV0FBVyxDQUFDLE9BQVosQ0FBb0IsSUFBcEIsRUFBMEIsTUFBMUIsQ0FBUDtBQUNBOztBQUVELEVBQUEsYUFBYSxDQUFDLENBQUQsRUFBTztBQUNuQixRQUFJLENBQUMsQ0FBQyxNQUFGLENBQVMsR0FBVCxDQUFhLElBQWIsS0FBc0IsYUFBMUIsRUFBeUM7QUFDeEM7QUFDQTs7QUFFRCxTQUFLLFNBQUwsR0FBaUIsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxHQUExQjtBQUNDLFNBQUssQ0FBTCxDQUFPLE1BQVAsQ0FBcUMsSUFBckM7QUFDRDs7QUF6Rm1GLENBQXJGOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSw2QkFBQSxFLGNBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLE1BQU0sRUFBRTtBQUF2QixDQUFELENBQ1QsQ0FBQSxFLDZCQUFBLEUsaUJBQUEsRSxLQUF3QixDQUF4QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSw2QkFBQSxFLFdBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSw2QkFBQSxFLFVBQUEsRSxLQUE0QyxDQUE1QyxDQUFBOztBQVhvQixtQkFBbUIsR0FBQSxVQUFBLENBQUEsQ0FEdkMsYUFBYSxDQUFDLGdCQUFELENBQzBCLENBQUEsRUFBbkIsbUJBQW1CLENBQW5CO2VBQUEsbUI7O0FBNEZyQixTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBa0M7QUFDakMsU0FBTyxJQUFJLENBQUMsT0FBTCxDQUFhLDBCQUFiLEVBQXlDLE1BQXpDLENBQVA7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==