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
let GDQTotalsTotalElement = class GDQTotalsTotalElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.value = '?';
  }

  edit() {
    this.dispatchEvent(new CustomEvent('edit', {
      bubbles: true,
      composed: true
    }));
  }

  equal(a, b) {
    return a === b;
  }

};

__decorate([property({
  type: String
})], GDQTotalsTotalElement.prototype, "value", void 0);

__decorate([property({
  type: String
})], GDQTotalsTotalElement.prototype, "currency", void 0);

GDQTotalsTotalElement = __decorate([customElement('gdq-totals-total')], GDQTotalsTotalElement);
export default GDQTotalsTotalElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS10b3RhbHMtdG90YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBR0EsSUFBcUIscUJBQXFCLEdBQTFDLE1BQXFCLHFCQUFyQixTQUFtRCxPQUFPLENBQUMsT0FBM0QsQ0FBa0U7QUFEbEUsRUFBQSxXQUFBLEdBQUE7O0FBR0MsU0FBQSxLQUFBLEdBQVEsR0FBUjtBQVlBOztBQVBBLEVBQUEsSUFBSSxHQUFBO0FBQ0gsU0FBSyxhQUFMLENBQW1CLElBQUksV0FBSixDQUFnQixNQUFoQixFQUF3QjtBQUFDLE1BQUEsT0FBTyxFQUFFLElBQVY7QUFBZ0IsTUFBQSxRQUFRLEVBQUU7QUFBMUIsS0FBeEIsQ0FBbkI7QUFDQTs7QUFFRCxFQUFBLEtBQUssQ0FBQyxDQUFELEVBQVMsQ0FBVCxFQUFlO0FBQ25CLFdBQU8sQ0FBQyxLQUFLLENBQWI7QUFDQTs7QUFiZ0UsQ0FBbEU7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLCtCQUFBLEUsT0FBQSxFLEtBQVksQ0FBWixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwrQkFBQSxFLFVBQUEsRSxLQUFpQixDQUFqQixDQUFBOztBQUxvQixxQkFBcUIsR0FBQSxVQUFBLENBQUEsQ0FEekMsYUFBYSxDQUFDLGtCQUFELENBQzRCLENBQUEsRUFBckIscUJBQXFCLENBQXJCO2VBQUEscUIiLCJzb3VyY2VSb290IjoiIn0=