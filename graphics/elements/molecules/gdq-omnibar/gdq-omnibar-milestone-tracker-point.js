var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQOmnibarMilestoneTrackerPointElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
const ONE_MILLION = 1000000;
let GDQOmnibarMilestoneTrackerPointElement = GDQOmnibarMilestoneTrackerPointElement_1 = class GDQOmnibarMilestoneTrackerPointElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.align = 'left';
    this.dropTrailingZeroes = false;
  }

  _alignChanged(newVal) {
    const bodyElem = this.$.body;

    if (newVal !== 'center') {
      bodyElem.style.left = '';
    }

    const bodyRect = this.$.body.getBoundingClientRect();
    bodyElem.style.left = `${bodyRect.width / -2 + 1.5}px`;
  }

  _calcDisplayAmount(amount) {
    return `$${this._formatAmount(amount / ONE_MILLION)}M`;
  }

  _formatAmount(amount) {
    let amountString = String(amount).substr(0, 4);

    if (this.dropTrailingZeroes) {
      while ((amountString.endsWith('0') || amountString.endsWith('.')) && amountString.length > 1) {
        amountString = amountString.slice(0, -1);
      }
    } // Use the monospace version of the "1" character in the gdqpixel font.


    return amountString.replace(/1/ig, '\u00C0');
  }

};

__decorate([property({
  type: String,
  reflectToAttribute: true,
  observer: GDQOmnibarMilestoneTrackerPointElement_1.prototype._alignChanged
})], GDQOmnibarMilestoneTrackerPointElement.prototype, "align", void 0);

__decorate([property({
  type: Number
})], GDQOmnibarMilestoneTrackerPointElement.prototype, "amount", void 0);

__decorate([property({
  type: Boolean
})], GDQOmnibarMilestoneTrackerPointElement.prototype, "dropTrailingZeroes", void 0);

GDQOmnibarMilestoneTrackerPointElement = GDQOmnibarMilestoneTrackerPointElement_1 = __decorate([customElement('gdq-omnibar-milestone-tracker-point')], GDQOmnibarMilestoneTrackerPointElement);
export default GDQOmnibarMilestoneTrackerPointElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLW1pbGVzdG9uZS10cmFja2VyLXBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLFdBQVcsR0FBRyxPQUFwQjtBQUlBLElBQXFCLHNDQUFzQyxHQUFBLHdDQUFBLEdBQTNELE1BQXFCLHNDQUFyQixTQUFvRSxPQUFPLENBQUMsT0FBNUUsQ0FBbUY7QUFEbkYsRUFBQSxXQUFBLEdBQUE7O0FBR0MsU0FBQSxLQUFBLEdBQW1CLE1BQW5CO0FBTUEsU0FBQSxrQkFBQSxHQUFxQixLQUFyQjtBQStCQTs7QUE3QkEsRUFBQSxhQUFhLENBQUMsTUFBRCxFQUFrQjtBQUM5QixVQUFNLFFBQVEsR0FBRyxLQUFLLENBQUwsQ0FBTyxJQUF4Qjs7QUFDQSxRQUFJLE1BQU0sS0FBSyxRQUFmLEVBQXlCO0FBQ3hCLE1BQUEsUUFBUSxDQUFDLEtBQVQsQ0FBZSxJQUFmLEdBQXNCLEVBQXRCO0FBQ0E7O0FBRUQsVUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFMLENBQU8sSUFBUCxDQUFZLHFCQUFaLEVBQWpCO0FBQ0EsSUFBQSxRQUFRLENBQUMsS0FBVCxDQUFlLElBQWYsR0FBc0IsR0FBSSxRQUFRLENBQUMsS0FBVCxHQUFpQixDQUFDLENBQW5CLEdBQXdCLEdBQUcsSUFBcEQ7QUFDQTs7QUFFRCxFQUFBLGtCQUFrQixDQUFDLE1BQUQsRUFBZTtBQUNoQyxXQUFPLElBQUksS0FBSyxhQUFMLENBQW1CLE1BQU0sR0FBRyxXQUE1QixDQUF3QyxHQUFuRDtBQUNBOztBQUVELEVBQUEsYUFBYSxDQUFDLE1BQUQsRUFBZTtBQUMzQixRQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBRCxDQUFOLENBQWUsTUFBZixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFuQjs7QUFFQSxRQUFJLEtBQUssa0JBQVQsRUFBNkI7QUFDNUIsYUFDQyxDQUFDLFlBQVksQ0FBQyxRQUFiLENBQXNCLEdBQXRCLEtBQThCLFlBQVksQ0FBQyxRQUFiLENBQXNCLEdBQXRCLENBQS9CLEtBQ0EsWUFBWSxDQUFDLE1BQWIsR0FBc0IsQ0FGdkIsRUFHRztBQUNGLFFBQUEsWUFBWSxHQUFHLFlBQVksQ0FBQyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQUMsQ0FBdkIsQ0FBZjtBQUNBO0FBQ0QsS0FWMEIsQ0FZM0I7OztBQUNBLFdBQU8sWUFBWSxDQUFDLE9BQWIsQ0FBcUIsS0FBckIsRUFBNEIsUUFBNUIsQ0FBUDtBQUNBOztBQXRDaUYsQ0FBbkY7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLEVBQUEsa0JBQWtCLEVBQUUsSUFBbkM7QUFBeUMsRUFBQSxRQUFRLEVBQUUsd0NBQXNDLENBQUMsU0FBdkMsQ0FBaUQ7QUFBcEcsQ0FBRCxDQUNULENBQUEsRSxnREFBQSxFLE9BQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxnREFBQSxFLFFBQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsZ0RBQUEsRSxvQkFBQSxFLEtBQTJCLENBQTNCLENBQUE7O0FBUm9CLHNDQUFzQyxHQUFBLHdDQUFBLEdBQUEsVUFBQSxDQUFBLENBRDFELGFBQWEsQ0FBQyxxQ0FBRCxDQUM2QyxDQUFBLEVBQXRDLHNDQUFzQyxDQUF0QztlQUFBLHNDIiwic291cmNlUm9vdCI6IiJ9