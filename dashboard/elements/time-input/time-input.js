var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property,
  observe
} = Polymer.decorators;
let TimeInputElement = class TimeInputElement extends Polymer.mixinBehaviors([Polymer.IronValidatableBehavior], Polymer.Element) {
  constructor() {
    super(...arguments);
    this.invalid = false;
    this.validator = 'time-validator';
  }

  _computeValue(minutes, seconds) {
    this.value = `${minutes}:${seconds}`;
  }

  setMS(m, s) {
    this._minutes = m < 10 ? `0${m}` : m;
    this._seconds = s < 10 ? `0${s}` : s;
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], TimeInputElement.prototype, "invalid", void 0);

__decorate([property({
  type: String,
  notify: true
})], TimeInputElement.prototype, "value", void 0);

__decorate([property({
  type: Number
})], TimeInputElement.prototype, "_minutes", void 0);

__decorate([property({
  type: Number
})], TimeInputElement.prototype, "_seconds", void 0);

__decorate([property({
  type: String
})], TimeInputElement.prototype, "validator", void 0);

__decorate([observe('_minutes', '_seconds')], TimeInputElement.prototype, "_computeValue", null);

TimeInputElement = __decorate([customElement('time-input')], TimeInputElement);
export default TimeInputElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUEsUUFBaEI7QUFBMEIsRUFBQTtBQUExQixJQUFxQyxPQUFPLENBQUMsVUFBbkQ7QUFHQSxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQXJCLFNBQThDLE9BQU8sQ0FBQyxjQUFSLENBQXVCLENBQUMsT0FBTyxDQUFDLHVCQUFULENBQXZCLEVBQTBELE9BQU8sQ0FBQyxPQUFsRSxDQUE5QyxDQUF3SDtBQUR4SCxFQUFBLFdBQUEsR0FBQTs7QUFHQyxTQUFBLE9BQUEsR0FBVSxLQUFWO0FBWUEsU0FBQSxTQUFBLEdBQVksZ0JBQVo7QUFXQTs7QUFSQSxFQUFBLGFBQWEsQ0FBQyxPQUFELEVBQWtCLE9BQWxCLEVBQWlDO0FBQzdDLFNBQUssS0FBTCxHQUFhLEdBQUcsT0FBTyxJQUFJLE9BQU8sRUFBbEM7QUFDQTs7QUFFRCxFQUFBLEtBQUssQ0FBQyxDQUFELEVBQVksQ0FBWixFQUFxQjtBQUN6QixTQUFLLFFBQUwsR0FBZ0IsQ0FBQyxHQUFHLEVBQUosR0FBUyxJQUFJLENBQUMsRUFBZCxHQUFtQixDQUFuQztBQUNBLFNBQUssUUFBTCxHQUFnQixDQUFDLEdBQUcsRUFBSixHQUFTLElBQUksQ0FBQyxFQUFkLEdBQW1CLENBQW5DO0FBQ0E7O0FBeEJzSCxDQUF4SDs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsa0JBQWtCLEVBQUU7QUFBcEMsQ0FBRCxDQUNULENBQUEsRSwwQkFBQSxFLFNBQUEsRSxLQUFnQixDQUFoQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLE1BQU0sRUFBRTtBQUF2QixDQUFELENBQ1QsQ0FBQSxFLDBCQUFBLEUsT0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwwQkFBQSxFLFVBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwwQkFBQSxFLFVBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwwQkFBQSxFLFdBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLE9BQU8sQ0FBQyxVQUFELEVBQWEsVUFBYixDQUNSLENBQUEsRSwwQkFBQSxFLGVBQUEsRUFFQyxJQUZELENBQUE7O0FBakJvQixnQkFBZ0IsR0FBQSxVQUFBLENBQUEsQ0FEcEMsYUFBYSxDQUFDLFlBQUQsQ0FDdUIsQ0FBQSxFQUFoQixnQkFBZ0IsQ0FBaEI7ZUFBQSxnQiIsInNvdXJjZVJvb3QiOiIifQ==