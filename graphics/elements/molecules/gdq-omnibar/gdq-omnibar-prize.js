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

let GDQOmnibarPrizeElement = class GDQOmnibarPrizeElement extends Polymer.Element {
  enter() {
    return this.$.listItem.enter();
  }

  exit() {
    return this.$.listItem.exit();
  }

  calcBidAmountText(prize) {
    return prize.sumdonations ? `${prize.minimumbid} in Total Donations` : `${prize.minimumbid} Single Donation`;
  }

};

__decorate([property({
  type: Object
})], GDQOmnibarPrizeElement.prototype, "prize", void 0);

GDQOmnibarPrizeElement = __decorate([customElement('gdq-omnibar-prize')], GDQOmnibarPrizeElement);
export default GDQOmnibarPrizeElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLXByaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLHNCQUFzQixHQUEzQyxNQUFxQixzQkFBckIsU0FBb0QsT0FBTyxDQUFDLE9BQTVELENBQW1FO0FBSWxFLEVBQUEsS0FBSyxHQUFBO0FBQ0osV0FBUSxLQUFLLENBQUwsQ0FBTyxRQUFQLENBQThDLEtBQTlDLEVBQVI7QUFDQTs7QUFFRCxFQUFBLElBQUksR0FBQTtBQUNILFdBQVEsS0FBSyxDQUFMLENBQU8sUUFBUCxDQUE4QyxJQUE5QyxFQUFSO0FBQ0E7O0FBRUQsRUFBQSxpQkFBaUIsQ0FBQyxLQUFELEVBQWE7QUFDN0IsV0FBTyxLQUFLLENBQUMsWUFBTixHQUNOLEdBQUcsS0FBSyxDQUFDLFVBQVUscUJBRGIsR0FFTixHQUFHLEtBQUssQ0FBQyxVQUFVLGtCQUZwQjtBQUdBOztBQWhCaUUsQ0FBbkU7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLGdDQUFBLEUsT0FBQSxFLEtBQWEsQ0FBYixDQUFBOztBQUZvQixzQkFBc0IsR0FBQSxVQUFBLENBQUEsQ0FEMUMsYUFBYSxDQUFDLG1CQUFELENBQzZCLENBQUEsRUFBdEIsc0JBQXNCLENBQXRCO2VBQUEsc0IiLCJzb3VyY2VSb290IjoiIn0=