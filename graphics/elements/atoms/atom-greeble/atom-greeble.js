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
/**
 * @customElement
 * @polymer
 */

let AtomGreebleElement = class AtomGreebleElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.align = 'left';
  }

};

__decorate([property({
  type: String,
  reflectToAttribute: true
})], AtomGreebleElement.prototype, "align", void 0);

AtomGreebleElement = __decorate([customElement('atom-greeble')], AtomGreebleElement);
export default AtomGreebleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20tZ3JlZWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFFQTs7Ozs7QUFLQSxJQUFxQixrQkFBa0IsR0FBdkMsTUFBcUIsa0JBQXJCLFNBQWdELE9BQU8sQ0FBQyxPQUF4RCxDQUErRDtBQUwvRDs7OztBQUlBLEVBQUEsV0FBQSxHQUFBOztBQUdDLFNBQUEsS0FBQSxHQUEwQixNQUExQjtBQUNBOztBQUg4RCxDQUEvRDs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxrQkFBa0IsRUFBRTtBQUFuQyxDQUFELENBQ1QsQ0FBQSxFLDRCQUFBLEUsT0FBQSxFLEtBQWlDLENBQWpDLENBQUE7O0FBRm9CLGtCQUFrQixHQUFBLFVBQUEsQ0FBQSxDQUR0QyxhQUFhLENBQUMsY0FBRCxDQUN5QixDQUFBLEVBQWxCLGtCQUFrQixDQUFsQjtlQUFBLGtCIiwic291cmNlUm9vdCI6IiJ9