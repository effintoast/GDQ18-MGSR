var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, TweenLite, Power2, Power4 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQBreakBidChallengeElement = class GDQBreakBidChallengeElement extends Polymer.Element {
  ready() {
    super.ready();
    const amountElem = this.$.amount;
    const percentElem = this.$.percent;
    amountElem.ease = Power2.easeOut;

    amountElem.displayValueTransform = displayValue => {
      return '$' + displayValue.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: false
      });
    };

    percentElem.ease = Power2.easeOut;

    percentElem.displayValueTransform = displayValue => {
      return displayValue.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: false
      }) + '%';
    };

    TweenLite.set(this, {
      opacity: 0
    });
    TweenLite.set(this.$.meter, {
      scaleX: 0
    });
    TweenLite.set(this.$['meter-line'], {
      scaleY: 0
    });
  }

  enter() {
    let meterPercent = this.bid.rawTotal / this.bid.rawGoal;
    meterPercent = Math.max(meterPercent, 0); // Clamp to min 0

    meterPercent = Math.min(meterPercent, 1); // Clamp to max 1

    if (Number.isNaN(meterPercent)) {
      meterPercent = 0;
    }

    const tl = new TimelineLite();
    const meterDuration = meterPercent * 0.75;
    tl.set(this.$.left, {
      width: `${meterPercent * 100}%`
    });
    tl.call(() => {
      this.$.goal.textContent = '$' + this.bid.rawGoal.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: false
      });

      if (this.$.meter.clientWidth < this.$.amount.clientWidth) {
        TweenLite.set(this.$.amount, {
          right: '',
          left: '100%'
        });
      }
    }, undefined, null, '+=0.03');
    tl.add(createMaybeRandomTween({
      target: this.style,
      propName: 'opacity',
      duration: 0.465,
      ease: Power4.easeIn,
      start: {
        probability: 1,
        normalValue: 0
      },
      end: {
        probability: 0,
        normalValue: 1
      }
    }));
    tl.to(this.$['meter-line'], 0.324, {
      scaleY: 1,
      ease: Power2.easeInOut
    });
    tl.to(this.$.meter, meterDuration, {
      scaleX: 1,
      ease: Power2.easeOut,
      onStart: () => {
        this.$.amount.tween(this.bid.rawTotal, meterDuration);
        this.$.percent.tween(Math.floor(meterPercent * 100), meterDuration);
      }
    });
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    tl.add(createMaybeRandomTween({
      target: this.style,
      propName: 'opacity',
      duration: 0.2,
      ease: Power4.easeIn,
      start: {
        probability: 1,
        normalValue: 1
      },
      end: {
        probability: 0,
        normalValue: 0
      }
    }));
    return tl;
  }

};

__decorate([property({
  type: Object
})], GDQBreakBidChallengeElement.prototype, "bid", void 0);

GDQBreakBidChallengeElement = __decorate([customElement('gdq-break-bid-challenge')], GDQBreakBidChallengeElement);
export default GDQBreakBidChallengeElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1icmVhay1iaWQtY2hhbGxlbmdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBUSxZQUFSLEVBQXNCLFNBQXRCLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLFFBQXNELG9EQUF0RDtBQUVBLFNBQVEsc0JBQVIsUUFBcUMsd0NBQXJDO0FBSUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLDJCQUEyQixHQUFoRCxNQUFxQiwyQkFBckIsU0FBeUQsT0FBTyxDQUFDLE9BQWpFLENBQXdFO0FBSXZFLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsVUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFMLENBQU8sTUFBMUI7QUFDQSxVQUFNLFdBQVcsR0FBRyxLQUFLLENBQUwsQ0FBTyxPQUEzQjtBQUVBLElBQUEsVUFBVSxDQUFDLElBQVgsR0FBa0IsTUFBTSxDQUFDLE9BQXpCOztBQUNBLElBQUEsVUFBVSxDQUFDLHFCQUFYLEdBQW1DLFlBQVksSUFBRztBQUNqRCxhQUFPLE1BQU0sWUFBWSxDQUFDLGNBQWIsQ0FBNEIsT0FBNUIsRUFBcUM7QUFDakQsUUFBQSxxQkFBcUIsRUFBRSxDQUQwQjtBQUVqRCxRQUFBLFdBQVcsRUFBRTtBQUZvQyxPQUFyQyxDQUFiO0FBSUEsS0FMRDs7QUFPQSxJQUFBLFdBQVcsQ0FBQyxJQUFaLEdBQW1CLE1BQU0sQ0FBQyxPQUExQjs7QUFDQSxJQUFBLFdBQVcsQ0FBQyxxQkFBWixHQUFvQyxZQUFZLElBQUc7QUFDbEQsYUFBTyxZQUFZLENBQUMsY0FBYixDQUE0QixPQUE1QixFQUFxQztBQUMzQyxRQUFBLHFCQUFxQixFQUFFLENBRG9CO0FBRTNDLFFBQUEsV0FBVyxFQUFFO0FBRjhCLE9BQXJDLElBR0YsR0FITDtBQUlBLEtBTEQ7O0FBT0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLElB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