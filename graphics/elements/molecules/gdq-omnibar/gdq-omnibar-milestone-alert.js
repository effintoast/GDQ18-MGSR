var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Power3 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const SLIDE_HOLD_DURATION = 4;
const recordTrackerEnabled = nodecg.Replicant('recordTrackerEnabled');
const total = nodecg.Replicant('total');
let GDQOmnibarMilestoneAlertElement = class GDQOmnibarMilestoneAlertElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.tl = new TimelineLite({
      autoRemoveChildren: true
    });
  }

  ready() {
    super.ready();
    let lastRaw;
    total.on('change', newVal => {
      if (!newVal || typeof newVal.raw !== 'number') {
        return;
      }

      if (!this._initialized) {
        lastRaw = newVal.raw;
        this._initialized = true;
        return;
      } // If we have manually disabled this feature, return.


      if (!recordTrackerEnabled.value) {
        return;
      }

      const highestPassedMilestone = this.milestones.slice(0).reverse().find(milestone => {
        return newVal.raw >= milestone.total;
      });

      if (!highestPassedMilestone) {
        return;
      }

      if (lastRaw && newVal.raw >= highestPassedMilestone.total && lastRaw < highestPassedMilestone.total) {
        const alertAnim = this.alertMilestonePassed(highestPassedMilestone);
        this.tl.add(alertAnim, '+=0.1');
      }

      lastRaw = newVal.raw;
    });
  }

  alertMilestonePassed(milestone) {
    const tl = new TimelineLite();
    tl.call(() => {
      this.displayingMilestone = milestone;
    }, undefined, null, '+=0.1');
    tl.to(this.$.layer1, 0.5, {
      clipPath: 'inset(0 0% 0 0%)',
      ease: Power3.easeInOut
    });
    tl.to(this.$.layer2, 0.5, {
      clipPath: 'inset(0 0% 0 0%)',
      ease: Power3.easeInOut
    }, `+=${SLIDE_HOLD_DURATION}`);
    tl.to(this.$.layer3, 0.5, {
      clipPath: 'inset(0 0% 0 0%)',
      ease: Power3.easeInOut
    }, `+=${SLIDE_HOLD_DURATION}`);
    tl.set([this.$.layer1, this.$.layer2], {
      opacity: 0
    });
    tl.set(this.$.layer3, {
      // Prevent GSAP from using shorthand, which would break the next anim.
      clipPath: 'inset(0.01px 0.01% 0.02px 0%)'
    });
    tl.to(this.$.layer3, 0.5, {
      clipPath: 'inset(0px 0% 0px 100%)',
      ease: Power3.easeInOut
    }, `+=${SLIDE_HOLD_DURATION}`);
    tl.set([this.$.layer1, this.$.layer2, this.$.layer3], {
      clearProps: 'all'
    });
    return tl;
  }

  _formatTotal(amount) {
    return '$' + amount.toLocaleString('en-US', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    });
  }

  _calcLayer3Message(succeedingMilestone) {
    if (succeedingMilestone) {
      return `NEXT MILESTONE:&nbsp;<b>${succeedingMilestone.name} - ${this._formatTotal(succeedingMilestone.total)}</b>`;
    }

    return '<b>NEW GAMES DONE QUICK PB!</b>';
  }

};

__decorate([property({
  type: Array
})], GDQOmnibarMilestoneAlertElement.prototype, "milestones", void 0);

__decorate([property({
  type: Object
})], GDQOmnibarMilestoneAlertElement.prototype, "displayingMilestone", void 0);

GDQOmnibarMilestoneAlertElement = __decorate([customElement('gdq-omnibar-milestone-alert')], GDQOmnibarMilestoneAlertElement);
export default GDQOmnibarMilestoneAlertElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLW1pbGVzdG9uZS1hbGVydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNBLFNBQVEsWUFBUixFQUFzQixNQUF0QixRQUFtQyxvREFBbkM7QUFJQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxtQkFBbUIsR0FBRyxDQUE1QjtBQUNBLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBdUMsc0JBQXZDLENBQTdCO0FBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBd0IsT0FBeEIsQ0FBZDtBQUdBLElBQXFCLCtCQUErQixHQUFwRCxNQUFxQiwrQkFBckIsU0FBNkQsT0FBTyxDQUFDLE9BQXJFLENBQTRFO0FBRDVFLEVBQUEsV0FBQSxHQUFBOztBQVFDLFNBQUEsRUFBQSxHQUFtQixJQUFJLFlBQUosQ0FBaUI7QUFBQyxNQUFBLGtCQUFrQixFQUFFO0FBQXJCLEtBQWpCLENBQW5CO0FBdUdBOztBQXBHQSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUVBLFFBQUksT0FBSjtBQUNBLElBQUEsS0FBSyxDQUFDLEVBQU4sQ0FBUyxRQUFULEVBQW1CLE1BQU0sSUFBRztBQUMzQixVQUFJLENBQUMsTUFBRCxJQUFXLE9BQU8sTUFBTSxDQUFDLEdBQWQsS0FBc0IsUUFBckMsRUFBK0M7QUFDOUM7QUFDQTs7QUFFRCxVQUFJLENBQUMsS0FBSyxZQUFWLEVBQXdCO0FBQ3ZCLFFBQUEsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFqQjtBQUNBLGFBQUssWUFBTCxHQUFvQixJQUFwQjtBQUNBO0FBQ0EsT0FUMEIsQ0FXM0I7OztBQUNBLFVBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUExQixFQUFpQztBQUNoQztBQUNBOztBQUVELFlBQU0sc0JBQXNCLEdBQUcsS0FBSyxVQUFMLENBQzdCLEtBRDZCLENBQ3ZCLENB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