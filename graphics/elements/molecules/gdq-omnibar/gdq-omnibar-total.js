var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement
} = Polymer.decorators;
const total = nodecg.Replicant('total');
let GDQOmnibarTotalElement = class GDQOmnibarTotalElement extends Polymer.Element {
  ready() {
    super.ready();
    const totalTextAmountElem = this.$.totalTextAmount;
    totalTextAmountElem.displayValueTransform = this._totalDisplayValueTransform.bind(this);
    total.on('change', newVal => {
      totalTextAmountElem.value = newVal.raw;
    });
  }

  _totalDisplayValueTransform(displayValue) {
    const formatted = displayValue.toLocaleString('en-US', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).replace(/1/ig, '\u00C0'); // Part of the workaround for https://bugs.chromium.org/p/chromium/issues/detail?id=67029

    this.$.totalTextAmountPlaceholder.textContent = formatted;
    return formatted;
  }

};
GDQOmnibarTotalElement = __decorate([customElement('gdq-omnibar-total')], GDQOmnibarTotalElement);
export default GDQOmnibarTotalElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLXRvdGFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0EsTUFBTTtBQUFDLEVBQUE7QUFBRCxJQUFrQixPQUFPLENBQUMsVUFBaEM7QUFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUCxDQUF3QixPQUF4QixDQUFkO0FBR0EsSUFBcUIsc0JBQXNCLEdBQTNDLE1BQXFCLHNCQUFyQixTQUFvRCxPQUFPLENBQUMsT0FBNUQsQ0FBbUU7QUFDbEUsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU47QUFDQSxVQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBTCxDQUFPLGVBQW5DO0FBQ0EsSUFBQSxtQkFBbUIsQ0FBQyxxQkFBcEIsR0FBNEMsS0FBSywyQkFBTCxDQUFpQyxJQUFqQyxDQUFzQyxJQUF0QyxDQUE1QztBQUNBLElBQUEsS0FBSyxDQUFDLEVBQU4sQ0FBUyxRQUFULEVBQW1CLE1BQU0sSUFBRztBQUMzQixNQUFBLG1CQUFtQixDQUFDLEtBQXBCLEdBQTRCLE1BQU0sQ0FBQyxHQUFuQztBQUNBLEtBRkQ7QUFHQTs7QUFFRCxFQUFBLDJCQUEyQixDQUFDLFlBQUQsRUFBcUI7QUFDL0MsVUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLGNBQWIsQ0FBNEIsT0FBNUIsRUFBcUM7QUFDdEQsTUFBQSxxQkFBcUIsRUFBRSxDQUQrQjtBQUV0RCxNQUFBLHFCQUFxQixFQUFFO0FBRitCLEtBQXJDLEVBR2YsT0FIZSxDQUdQLEtBSE8sRUFHQSxRQUhBLENBQWxCLENBRCtDLENBTS9DOztBQUNBLFNBQUssQ0FBTCxDQUFPLDBCQUFQLENBQWtDLFdBQWxDLEdBQWdELFNBQWhEO0FBRUEsV0FBTyxTQUFQO0FBQ0E7O0FBcEJpRSxDQUFuRTtBQUFxQixzQkFBc0IsR0FBQSxVQUFBLENBQUEsQ0FEMUMsYUFBYSxDQUFDLG1CQUFELENBQzZCLENBQUEsRUFBdEIsc0JBQXNCLENBQXRCO2VBQUEsc0IiLCJzb3VyY2VSb290IjoiIn0=