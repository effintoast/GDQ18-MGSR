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
let DashHostBidElement = class DashHostBidElement extends Polymer.MutableData(Polymer.Element) {
  computeFailed(closed, bid) {
    return closed && bid.rawTotal < bid.rawGoal;
  }

  computeClosed(bid) {
    return bid.state.toLowerCase() === 'closed';
  }

  bidIsChallenge(bid) {
    return bid.type === 'challenge';
  }

  limitOptions(options) {
    if (!options) {
      return [];
    }

    return options.slice(0, 3);
  }

  bidHasMoreThanThreeOptions(bid) {
    if (!bid.options) {
      return false;
    }

    return bid.options.length > 3;
  }

  calcNumAdditionalOptions(bid) {
    if (!bid.options) {
      return 0;
    }

    return bid.options.length - 3;
  }

  calcBidName(description) {
    return description.replace(/\\n/g, ' ');
  }

  _computeType(bid) {
    return bid ? bid.type : '';
  }

};

__decorate([property({
  type: String,
  reflectToAttribute: true,
  computed: '_computeType(bid)'
})], DashHostBidElement.prototype, "type", void 0);

__decorate([property({
  type: Object
})], DashHostBidElement.prototype, "bid", void 0);

__decorate([property({
  type: Boolean,
  computed: 'computeFailed(closed, bid)',
  reflectToAttribute: true
})], DashHostBidElement.prototype, "failed", void 0);

__decorate([property({
  type: Boolean,
  computed: 'computeClosed(bid)',
  reflectToAttribute: true
})], DashHostBidElement.prototype, "closed", void 0);

DashHostBidElement = __decorate([customElement('dash-host-bid')], DashHostBidElement);
export default DashHostBidElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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