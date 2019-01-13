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
let DashHostElement = class DashHostElement extends Polymer.MutableData(Polymer.Element) {
  constructor() {
    super(...arguments);
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
})], DashHostElement.prototype, "currentTime", void 0);

__decorate([property({
  type: Number
})], DashHostElement.prototype, "selectedBidsAndPrizesTab", void 0);

DashHostElement = __decorate([customElement('dash-host')], DashHostElement);
export default DashHostElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFHQSxJQUFxQixlQUFlLEdBQXBDLE1BQXFCLGVBQXJCLFNBQTZDLE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUE3QyxDQUFpRjtBQURqRixFQUFBLFdBQUEsR0FBQTs7QUFNQyxTQUFBLHdCQUFBLEdBQTJCLENBQTNCO0FBYUE7O0FBWEEsRUFBQSxpQkFBaUIsR0FBQTtBQUNoQixVQUFNLGlCQUFOO0FBQ0EsU0FBSyxpQkFBTCxHQUF5QixLQUFLLGlCQUFMLENBQXVCLElBQXZCLENBQTRCLElBQTVCLENBQXpCO0FBQ0EsU0FBSyxpQkFBTDtBQUNBLElBQUEsV0FBVyxDQUFDLEtBQUssaUJBQU4sRUFBeUIsSUFBekIsQ0FBWDtBQUNBOztBQUVELEVBQUEsaUJBQWlCLEdBQUE7QUFDaEIsVUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFKLEVBQWI7QUFDQSxTQUFLLFdBQUwsR0FBbUIsSUFBSSxDQUFDLGtCQUFMLENBQXdCLE9BQXhCLEVBQWlDO0FBQUMsTUFBQSxNQUFNLEVBQUU7QUFBVCxLQUFqQyxDQUFuQjtBQUNBOztBQWpCK0UsQ0FBakY7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHlCQUFBLEUsYUFBQSxFLEtBQW9CLENBQXBCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHlCQUFBLEUsMEJBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUxvQixlQUFlLEdBQUEsVUFBQSxDQUFBLENBRG5DLGFBQWEsQ0FBQyxXQUFELENBQ3NCLENBQUEsRUFBZixlQUFlLENBQWY7ZUFBQSxlIiwic291cmNlUm9vdCI6IiJ9