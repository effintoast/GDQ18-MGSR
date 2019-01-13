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

let AtomGradientTextElement = class AtomGradientTextElement extends Polymer.Element {
  ready() {
    super.ready(); // Workaround for: https://bugs.chromium.org/p/chromium/issues/detail?id=844880

    this.shadowRoot.querySelectorAll('sc-fitted-text').forEach(node => {
      node.$.fittedContent.style.webkitBackgroundClip = 'text';
    });
  }

};

__decorate([property({
  type: String
})], AtomGradientTextElement.prototype, "text", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], AtomGradientTextElement.prototype, "align", void 0);

__decorate([property({
  type: Number
})], AtomGradientTextElement.prototype, "maxWidth", void 0);

AtomGradientTextElement = __decorate([customElement('atom-gradient-text')], AtomGradientTextElement);
export default AtomGradientTextElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF0b20tZ3JhZGllbnQtdGV4dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFFQTs7Ozs7QUFLQSxJQUFxQix1QkFBdUIsR0FBNUMsTUFBcUIsdUJBQXJCLFNBQXFELE9BQU8sQ0FBQyxPQUE3RCxDQUFvRTtBQVVuRSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTixHQURJLENBR0o7O0FBQ0EsU0FBSyxVQUFMLENBQWlCLGdCQUFqQixDQUFrQyxnQkFBbEMsRUFBb0QsT0FBcEQsQ0FBNEQsSUFBSSxJQUFHO0FBQ2pFLE1BQUEsSUFBWSxDQUFDLENBQWIsQ0FBZSxhQUFmLENBQTZCLEtBQTdCLENBQW1DLG9CQUFuQyxHQUEwRCxNQUExRDtBQUNELEtBRkQ7QUFHQTs7QUFqQmtFLENBQXBFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxpQ0FBQSxFLE1BQUEsRSxLQUFhLENBQWIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxrQkFBa0IsRUFBRTtBQUFuQyxDQUFELENBQ1QsQ0FBQSxFLGlDQUFBLEUsT0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxpQ0FBQSxFLFVBQUEsRSxLQUFpQixDQUFqQixDQUFBOztBQVJvQix1QkFBdUIsR0FBQSxVQUFBLENBQUEsQ0FEM0MsYUFBYSxDQUFDLG9CQUFELENBQzhCLENBQUEsRUFBdkIsdUJBQXVCLENBQXZCO2VBQUEsdUIiLCJzb3VyY2VSb290IjoiIn0=