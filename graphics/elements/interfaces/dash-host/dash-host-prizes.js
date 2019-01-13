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
const currentPrizes = nodecg.Replicant('currentPrizes');
let DashHostPrizesElement = class DashHostPrizesElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    currentPrizes.on('change', newVal => {
      this.prizes = newVal;
    });
    nodecg.listenFor('prizes:updating', () => {
      this.$.cooldown.indeterminate = true;
    });
    nodecg.listenFor('prizes:updated', () => {
      this.$.cooldown.startCountdown(60);
    });
  }

  computePrizesFilter(str) {
    if (str) {
      // Return a filter function for the current search string.
      const regexp = new RegExp(str, 'ig');
      return prize => {
        return regexp.test(prize.description);
      };
    } // Set filter to null to disable filtering.


    return null;
  }

};

__decorate([property({
  type: Array
})], DashHostPrizesElement.prototype, "prizes", void 0);

__decorate([property({
  type: String,
  notify: true
})], DashHostPrizesElement.prototype, "prizeFilterString", void 0);

DashHostPrizesElement = __decorate([customElement('dash-host-prizes')], DashHostPrizesElement);
export default DashHostPrizesElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaG9zdC1wcml6ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBMEIsZUFBMUIsQ0FBdEI7QUFHQSxJQUFxQixxQkFBcUIsR0FBMUMsTUFBcUIscUJBQXJCLFNBQW1ELE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUFuRCxDQUF1RjtBQU90RixFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLElBQUEsYUFBYSxDQUFDLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsTUFBTSxJQUFHO0FBQ25DLFdBQUssTUFBTCxHQUFjLE1BQWQ7QUFDQSxLQUZEO0FBSUEsSUFBQSxNQUFNLENBQUMsU0FBUCxDQUFpQixpQkFBakIsRUFBb0MsTUFBSztBQUN2QyxXQUFLLENBQUwsQ0FBTyxRQUFQLENBQWdELGFBQWhELEdBQWdFLElBQWhFO0FBQ0QsS0FGRDtBQUlBLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsZ0JBQWpCLEVBQW1DLE1BQUs7QUFDdEMsV0FBSyxDQUFMLENBQU8sUUFBUCxDQUFnRCxjQUFoRCxDQUErRCxFQUEvRDtBQUNELEtBRkQ7QUFHQTs7QUFFRCxFQUFBLG1CQUFtQixDQUFDLEdBQUQsRUFBWTtBQUM5QixRQUFJLEdBQUosRUFBUztBQUNSO0FBQ0EsWUFBTSxNQUFNLEdBQUcsSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFnQixJQUFoQixDQUFmO0FBQ0EsYUFBUSxLQUFELElBQWlCO0FBQ3ZCLGVBQU8sTUFBTSxDQUFDLElBQVAsQ0FBWSxLQUFLLENBQUMsV0FBbEIsQ0FBUDtBQUNBLE9BRkQ7QUFHQSxLQVA2QixDQVM5Qjs7O0FBQ0EsV0FBTyxJQUFQO0FBQ0E7O0FBakNxRixDQUF2Rjs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsK0JBQUEsRSxRQUFBLEUsS0FBZ0IsQ0FBaEIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxNQUFNLEVBQUU7QUFBdkIsQ0FBRCxDQUNULENBQUEsRSwrQkFBQSxFLG1CQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFMb0IscUJBQXFCLEdBQUEsVUFBQSxDQUFBLENBRHpDLGFBQWEsQ0FBQyxrQkFBRCxDQUM0QixDQUFBLEVBQXJCLHFCQUFxQixDQUFyQjtlQUFBLHFCIiwic291cmNlUm9vdCI6IiJ9