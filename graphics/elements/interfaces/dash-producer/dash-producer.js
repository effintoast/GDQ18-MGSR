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
let DashProducerElement = class DashProducerElement extends Polymer.MutableData(Polymer.Element) {
  constructor() {
    super(...arguments);
    this.selectedContentTab = 0;
    this.selectedBidsAndPrizesTab = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateCurrentTime = this.updateCurrentTime.bind(this);
    this.updateCurrentTime();
    setInterval(this.updateCurrentTime, 1000);
  }

  updateCurrentTime() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString('en-US', {
      hour12: true
    });
  }

};

__decorate([property({
  type: String
})], DashProducerElement.prototype, "currentTime", void 0);

__decorate([property({
  type: Number
})], DashProducerElement.prototype, "selectedContentTab", void 0);

__decorate([property({
  type: Number
})], DashProducerElement.prototype, "selectedBidsAndPrizesTab", void 0);

DashProducerElement = __decorate([customElement('dash-producer')], DashProducerElement);
export default DashProducerElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtcHJvZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBR0EsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFyQixTQUFpRCxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBakQsQ0FBcUY7QUFEckYsRUFBQSxXQUFBLEdBQUE7O0FBTUMsU0FBQSxrQkFBQSxHQUFxQixDQUFyQjtBQUdBLFNBQUEsd0JBQUEsR0FBMkIsQ0FBM0I7QUFhQTs7QUFYQSxFQUFBLGlCQUFpQixHQUFBO0FBQ2hCLFVBQU0saUJBQU47QUFDQSxTQUFLLGlCQUFMLEdBQXlCLEtBQUssaUJBQUwsQ0FBdUIsSUFBdkIsQ0FBNEIsSUFBNUIsQ0FBekI7QUFDQSxTQUFLLGlCQUFMO0FBQ0EsSUFBQSxXQUFXLENBQUMsS0FBSyxpQkFBTixFQUF5QixJQUF6QixDQUFYO0FBQ0E7O0FBRUQsRUFBQSxpQkFBaUIsR0FBQTtBQUNoQixVQUFNLElBQUksR0FBRyxJQUFJLElBQUosRUFBYjtBQUNBLFNBQUssV0FBTCxHQUFtQixJQUFJLENBQUMsa0JBQUwsQ0FBd0IsT0FBeEIsRUFBaUM7QUFBQyxNQUFBLE1BQU0sRUFBRTtBQUFULEtBQWpDLENBQW5CO0FBQ0E7O0FBcEJtRixDQUFyRjs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsNkJBQUEsRSxhQUFBLEUsS0FBb0IsQ0FBcEIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsNkJBQUEsRSxvQkFBQSxFLEtBQXVCLENBQXZCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDZCQUFBLEUsMEJBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQVJvQixtQkFBbUIsR0FBQSxVQUFBLENBQUEsQ0FEdkMsYUFBYSxDQUFDLGVBQUQsQ0FDMEIsQ0FBQSxFQUFuQixtQkFBbUIsQ0FBbkI7ZUFBQSxtQiIsInNvdXJjZVJvb3QiOiIifQ==