var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQBreakBidManyOptionElement = class GDQBreakBidManyOptionElement extends Polymer.Element {
  ready() {
    super.ready();
    const amountElem = this.$.amount;
    amountElem.ease = Power2.easeOut;

    amountElem.displayValueTransform = displayValue => {
      return '$' + displayValue.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: false
      });
    };
  }

  enter() {
    let meterPercent = this.option.rawTotal / this.bid.options[0].rawTotal;
    meterPercent = Math.max(meterPercent, 0); // Clamp to min 0

    meterPercent = Math.min(meterPercent, 1); // Clamp to max 1

    if (Number.isNaN(meterPercent)) {
      meterPercent = 0;
    }

    const tl = new TimelineLite();
    const duration = meterPercent * 0.75;
    tl.fromTo(this.$.meter, duration, {
      scaleX: 0
    }, {
      scaleX: meterPercent,
      ease: Power2.easeOut,
      onStart: () => {
        this.$.amount.tween(this.option.rawTotal, duration);
      }
    });
    return tl;
  }

  _calcOptionName(option) {
    if (!option) {
      return '';
    }

    return option.description || option.name;
  }

};

__decorate([property({
  type: Object
})], GDQBreakBidManyOptionElement.prototype, "bid", void 0);

__decorate([property({
  type: Object
})], GDQBreakBidManyOptionElement.prototype, "option", void 0);

GDQBreakBidManyOptionElement = __decorate([customElement('gdq-break-bid-many-option')], GDQBreakBidManyOptionElement);
export default GDQBreakBidManyOptionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1icmVhay1iaWQtbWFueS1vcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQSxTQUFRLFlBQVIsRUFBc0IsTUFBdEIsUUFBbUMsb0RBQW5DO0FBR0EsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLDRCQUE0QixHQUFqRCxNQUFxQiw0QkFBckIsU0FBMEQsT0FBTyxDQUFDLE9BQWxFLENBQXlFO0FBT3hFLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsVUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFMLENBQU8sTUFBMUI7QUFDQSxJQUFBLFVBQVUsQ0FBQyxJQUFYLEdBQWtCLE1BQU0sQ0FBQyxPQUF6Qjs7QUFDQSxJQUFBLFVBQVUsQ0FBQyxxQkFBWCxHQUFtQyxZQUFZLElBQUc7QUFDakQsYUFBTyxNQUFNLFlBQVksQ0FBQyxjQUFiLENBQTRCLE9BQTVCLEVBQXFDO0FBQ2pELFFBQUEscUJBQXFCLEVBQUUsQ0FEMEI7QUFFakQsUUFBQSxXQUFXLEVBQUU7QUFGb0MsT0FBckMsQ0FBYjtBQUlBLEtBTEQ7QUFNQTs7QUFFRCxFQUFBLEtBQUssR0FBQTtBQUNKLFFBQUksWUFBWSxHQUFHLEtBQUssTUFBTCxDQUFZLFFBQVosR0FBdUIsS0FBSyxHQUFMLENBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFvQixRQUE5RDtBQUNBLElBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFMLENBQVMsWUFBVCxFQUF1QixDQUF2QixDQUFmLENBRkksQ0FFc0M7O0FBQzFDLElBQUEsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFMLENBQVMsWUFBVCxFQUF1QixDQUF2QixDQUFmLENBSEksQ0FHc0M7O0FBQzFDLFFBQUksTUFBTSxDQUFDLEtBQVAsQ0FBYSxZQUFiLENBQUosRUFBZ0M7QUFDL0IsTUFBQSxZQUFZLEdBQUcsQ0FBZjtBQUNBOztBQUVELFVBQU0sRUFBRSxHQUFHLElBQUksWUFBSixFQUFYO0FBQ0EsVUFBTSxRQUFRLEdBQUcsWUFBWSxHQUFHLElBQWhDO0FBRUEsSUFBQSxFQUFFLENBQUMsTUFBSCxDQUFVLEtBQUssQ0FBTCxDQUFPLEtBQWpCLEVBQXdCLFFBQXhCLEVBQWtDO0FBQ2pDLE1BQUEsTUFBTSxFQUFFO0FBRHlCLEtBQWxDLEVBRUc7QUFDRixNQUFBLE1BQU0sRUFBRSxZQUROO0FBRUYsTUFBQSxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BRlg7QUFHRixNQUFBLE9BQU8sRUFBRSxNQUFLO0FBQ1osYUFBSyxDQUFMLENBQU8sTUFBUCxDQUE0QyxLQUE1QyxDQUFrRCxLQUFLLE1BQUwsQ0FBWSxRQUE5RCxFQUF3RSxRQUF4RTtBQUNEO0FBTEMsS0FGSDtBQVVBLFdBQU8sRUFBUDtBQUNBOztBQUVELEVBQUEsZUFBZSxDQUFDLE1BQUQsRUFBaUI7QUFDL0IsUUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNaLGFBQU8sRUFBUDtBQUNBOztBQUVELFdBQU8sTUFBTSxDQUFDLFdBQVAsSUFBc0IsTUFBTSxDQUFDLElBQXBDO0FBQ0E7O0FBakR1RSxDQUF6RTs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsc0NBQUEsRSxLQUFBLEUsS0FBZSxDQUFmLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHNDQUFBLEUsUUFBQSxFLEtBQWlCLENBQWpCLENBQUE7O0FBTG9CLDRCQUE0QixHQUFBLFVBQUEsQ0FBQSxDQURoRCxhQUFhLENBQUMsMkJBQUQsQ0FDbUMsQ0FBQSxFQUE1Qiw0QkFBNEIsQ0FBNUI7ZUFBQSw0QiIsInNvdXJjZVJvb3QiOiIifQ==