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

let DashHostBidOptionElement = class DashHostBidOptionElement extends Polymer.Element {
  calcOptionMeterFillStyle(bid, option) {
    if (!bid || !option || !bid.options || bid.options.length <= 0) {
      return '';
    }

    let percent = option.rawTotal / bid.options[0].rawTotal;
    percent = Math.max(percent, 0); // Clamp to min 0

    percent = Math.min(percent, 1); // Clamp to max 1

    if (Number.isNaN(percent)) {
      percent = 0;
    }

    return `transform: scaleX(${percent});`;
  }

};

__decorate([property({
  type: Object
})], DashHostBidOptionElement.prototype, "bid", void 0);

__decorate([property({
  type: Object
})], DashHostBidOptionElement.prototype, "option", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], DashHostBidOptionElement.prototype, "index", void 0);

DashHostBidOptionElement = __decorate([customElement('dash-host-bid-option')], DashHostBidOptionElement);
export default DashHostBidOptionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaG9zdC1iaWQtb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLHdCQUF3QixHQUE3QyxNQUFxQix3QkFBckIsU0FBc0QsT0FBTyxDQUFDLE9BQTlELENBQXFFO0FBVXBFLEVBQUEsd0JBQXdCLENBQUMsR0FBRCxFQUFpQixNQUFqQixFQUFpQztBQUN4RCxRQUFJLENBQUMsR0FBRCxJQUFRLENBQUMsTUFBVCxJQUFtQixDQUFDLEdBQUcsQ0FBQyxPQUF4QixJQUFtQyxHQUFHLENBQUMsT0FBSixDQUFZLE1BQVosSUFBc0IsQ0FBN0QsRUFBZ0U7QUFDL0QsYUFBTyxFQUFQO0FBQ0E7O0FBRUQsUUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVAsR0FBa0IsR0FBRyxDQUFDLE9BQUosQ0FBWSxDQUFaLEVBQWUsUUFBL0M7QUFDQSxJQUFBLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBTCxDQUFTLE9BQVQsRUFBa0IsQ0FBbEIsQ0FBVixDQU53RCxDQU14Qjs7QUFDaEMsSUFBQSxPQUFPLEdBQUcsSUFBSSxDQUFDLEdBQUwsQ0FBUyxPQUFULEVBQWtCLENBQWxCLENBQVYsQ0FQd0QsQ0FPeEI7O0FBQ2hDLFFBQUksTUFBTSxDQUFDLEtBQVAsQ0FBYSxPQUFiLENBQUosRUFBMkI7QUFDMUIsTUFBQSxPQUFPLEdBQUcsQ0FBVjtBQUNBOztBQUNELFdBQU8scUJBQXFCLE9BQU8sSUFBbkM7QUFDQTs7QUF0Qm1FLENBQXJFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxrQ0FBQSxFLEtBQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsa0NBQUEsRSxRQUFBLEUsS0FBaUIsQ0FBakIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxrQkFBa0IsRUFBRTtBQUFuQyxDQUFELENBQ1QsQ0FBQSxFLGtDQUFBLEUsT0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQVJvQix3QkFBd0IsR0FBQSxVQUFBLENBQUEsQ0FENUMsYUFBYSxDQUFDLHNCQUFELENBQytCLENBQUEsRUFBeEIsd0JBQXdCLENBQXhCO2VBQUEsd0IiLCJzb3VyY2VSb290IjoiIn0=