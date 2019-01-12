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
const currentHost = nodecg.Replicant('currentHost');
/**
 * @customElement
 * @polymer
 */

let DashHostNameElement = class DashHostNameElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this._enteredName = '';
  }

  ready() {
    super.ready();
    currentHost.on('change', newVal => {
      this.currentHost = newVal;
    });
  }

  take() {
    currentHost.value = this._enteredName;
    this._enteredName = '';
  }

  _falsey(value) {
    return !value;
  }

};

__decorate([property({
  type: String
})], DashHostNameElement.prototype, "currentHost", void 0);

__decorate([property({
  type: String
})], DashHostNameElement.prototype, "_enteredName", void 0);

DashHostNameElement = __decorate([customElement('dash-host-name')], DashHostNameElement);
export default DashHostNameElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaG9zdC1uYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUNBLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQThCLGFBQTlCLENBQXBCO0FBRUE7Ozs7O0FBS0EsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFyQixTQUFpRCxPQUFPLENBQUMsT0FBekQsQ0FBZ0U7QUFMaEU7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFNQyxTQUFBLFlBQUEsR0FBZSxFQUFmO0FBaUJBOztBQWZBLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsSUFBQSxXQUFXLENBQUMsRUFBWixDQUFlLFFBQWYsRUFBeUIsTUFBTSxJQUFHO0FBQ2pDLFdBQUssV0FBTCxHQUFtQixNQUFuQjtBQUNBLEtBRkQ7QUFHQTs7QUFFRCxFQUFBLElBQUksR0FBQTtBQUNILElBQUEsV0FBVyxDQUFDLEtBQVosR0FBb0IsS0FBSyxZQUF6QjtBQUNBLFNBQUssWUFBTCxHQUFvQixFQUFwQjtBQUNBOztBQUVELEVBQUEsT0FBTyxDQUFDLEtBQUQsRUFBVztBQUNqQixXQUFPLENBQUMsS0FBUjtBQUNBOztBQXJCOEQsQ0FBaEU7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDZCQUFBLEUsYUFBQSxFLEtBQW9CLENBQXBCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDZCQUFBLEUsY0FBQSxFLEtBQWtCLENBQWxCLENBQUE7O0FBTG9CLG1CQUFtQixHQUFBLFVBQUEsQ0FBQSxDQUR2QyxhQUFhLENBQUMsZ0JBQUQsQ0FDMEIsQ0FBQSxFQUFuQixtQkFBbUIsQ0FBbkI7ZUFBQSxtQiIsInNvdXJjZVJvb3QiOiIifQ==