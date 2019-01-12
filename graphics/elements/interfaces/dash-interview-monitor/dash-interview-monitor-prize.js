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
const currentRunRep = nodecg.Replicant('currentRun');
/**
 * @customElement
 * @polymer
 */

let DashInterviewMonitorPrizeElement = class DashInterviewMonitorPrizeElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    currentRunRep.on('change', newVal => {
      this.currentRun = newVal;
    });
  }

  _computeBidType(prize) {
    return prize.sumdonations ? 'total' : 'single';
  }

  _computeClosed(prize, currentRun) {
    if (!prize || !currentRun) {
      return false;
    }

    return prize.endrun.order < currentRun.order;
  }

  _calcBidTypeChar(bidType) {
    if (!bidType) {
      return '';
    }

    return bidType.charAt(0);
  }

  _calcOpening(prize, currentRun) {
    if (!prize || !currentRun) {
      return '?';
    }

    if (prize.startrun.order <= currentRun.order) {
      return 'OPEN';
    }

    return prize.startrun.name;
  }

  _calcClosing(prize, currentRun) {
    if (!prize || !currentRun) {
      return '?';
    }

    if (prize.endrun.order < currentRun.order) {
      return 'CLOSED';
    }

    return prize.endrun.name;
  }

};

__decorate([property({
  type: Object
})], DashInterviewMonitorPrizeElement.prototype, "prize", void 0);

__decorate([property({
  type: Object
})], DashInterviewMonitorPrizeElement.prototype, "currentRun", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true,
  computed: '_computeBidType(prize)'
})], DashInterviewMonitorPrizeElement.prototype, "bidType", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_computeClosed(prize, currentRun)'
})], DashInterviewMonitorPrizeElement.prototype, "closed", void 0);

DashInterviewMonitorPrizeElement = __decorate([customElement('dash-interview-monitor-prize')], DashInterviewMonitorPrizeElement);
export default DashInterviewMonitorPrizeElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3ItcHJpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBc0IsWUFBdEIsQ0FBdEI7QUFFQTs7Ozs7QUFLQSxJQUFxQixnQ0FBZ0MsR0FBckQsTUFBcUIsZ0NBQXJCLFNBQThELE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUE5RCxDQUFrRztBQWFqRyxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUVBLElBQUEsYUFBYSxDQUFDLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsTUFBTSxJQUFHO0FBQ25DLFdBQUssVUFBTCxHQUFrQixNQUFsQjtBQUNBLEtBRkQ7QUFHQTs7QUFFRCxFQUFBLGVBQWUsQ0FBQyxLQUFELEVBQWE7QUFDM0IsV0FBTyxLQUFLLENBQUMsWUFBTixHQUFxQixPQUFyQixHQUErQixRQUF0QztBQUNBOztBQUVELEVBQUEsY0FBYyxDQUFDLEtBQUQsRUFBZ0IsVUFBaEIsRUFBZ0M7QUFDN0MsUUFBSSxDQUFDLEtBQUQsSUFBVSxDQUFDLFVBQWYsRUFBMkI7QUFDMUIsYUFBTyxLQUFQO0FBQ0E7O0FBRUQsV0FBTyxLQUFLLENBQUMsTUFBTixDQUFhLEtBQWIsR0FBcUIsVUFBVSxDQUFDLEtBQXZDO0FBQ0E7O0FBRUQsRUFBQSxnQkFBZ0IsQ0FBQyxPQUFELEVBQWlCO0FBQ2hDLFFBQUksQ0FBQyxPQUFMLEVBQWM7QUFDYixhQUFPLEVBQVA7QUFDQTs7QUFDRCxXQUFPLE9BQU8sQ0FBQyxNQUFSLENBQWUsQ0FBZixDQUFQO0FBQ0E7O0FBRUQsRUFBQSxZQUFZLENBQUMsS0FBRCxFQUFnQixVQUFoQixFQUFnQztBQUMzQyxRQUFJLENBQUMsS0FBRCxJQUFVLENBQUMsVUFBZixFQUEyQjtBQUMxQixhQUFPLEdBQVA7QUFDQTs7QUFFRCxRQUFJLEtBQUssQ0FBQyxRQUFOLENBQWUsS0FBZixJQUF3QixVQUFVLENBQUMsS0FBdkMsRUFBOEM7QUFDN0MsYUFBTyxNQUFQO0FBQ0E7O0FBRUQsV0FBTyxLQUFLLENBQUMsUUFBTixDQUFlLElBQXRCO0FBQ0E7O0FBRUQsRUFBQSxZQUFZLENBQUMsS0FBRCxFQUFnQixVQUFoQixFQUFnQztBQUMzQyxRQUFJLENBQUMsS0FBRCxJQUFVLENBQUMsVUFBZixFQUEyQjtBQUMxQixhQUFPLEdBQVA7QUFDQTs7QUFFRCxRQUFJLEtBQUssQ0FBQyxNQUFOLENBQWEsS0FBYixHQUFxQixVQUFVLENBQUMsS0FBcEMsRUFBMkM7QUFDMUMsYUFBTyxRQUFQO0FBQ0E7O0FBRUQsV0FBTyxLQUFLLENBQUMsTUFBTixDQUFhLElBQXBCO0FBQ0E7O0FBOURnRyxDQUFsRzs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsMENBQUEsRSxPQUFBLEUsS0FBYSxDQUFiLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDBDQUFBLEUsWUFBQSxFLEtBQWdCLENBQWhCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLEVBQUEsa0JBQWtCLEVBQUUsSUFBbkM7QUFBeUMsRUFBQSxRQUFRLEVBQUU7QUFBbkQsQ0FBRCxDQUNULENBQUEsRSwwQ0FBQSxFLFNBQUEsRSxLQUFnQixDQUFoQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxrQkFBa0IsRUFBRSxJQUFwQztBQUEwQyxFQUFBLFFBQVEsRUFBRTtBQUFwRCxDQUFELENBQ1QsQ0FBQSxFLDBDQUFBLEUsUUFBQSxFLEtBQWdCLENBQWhCLENBQUE7O0FBWG9CLGdDQUFnQyxHQUFBLFVBQUEsQ0FBQSxDQURwRCxhQUFhLENBQUMsOEJBQUQsQ0FDdUMsQ0FBQSxFQUFoQyxnQ0FBZ0MsQ0FBaEM7ZUFBQSxnQyIsInNvdXJjZVJvb3QiOiIifQ==