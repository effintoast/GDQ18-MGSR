var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQLowerthirdNameplateElement_1;
import { Power2, TimelineLite, TweenLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const ENTRANCE_ANIM_DURATION = 0.5;
const ENTRANCE_ANIM_EASE = Power2.easeInOut;
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQLowerthirdNameplateElement = GDQLowerthirdNameplateElement_1 = class GDQLowerthirdNameplateElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.header = false;
  }

  enter() {
    const tl = new TimelineLite();
    tl.to(this.$.occluder, ENTRANCE_ANIM_DURATION, {
      x: '250%',
      ease: ENTRANCE_ANIM_EASE
    }, 0);
    tl.to(this.$.clipped, ENTRANCE_ANIM_DURATION, {
      clipPath: 'inset(0 0% 0 0)',
      ease: ENTRANCE_ANIM_EASE
    }, 0);
    tl.to(this.$.title, 0.4, {
      y: '0%',
      ease: Power2.easeOut,
      onStart: () => {
        this.$.title.style.opacity = '1';
        this.$['title-text'].maxWidth = this.$.title.clientWidth - 60;
      }
    }, '-=0.1');
    return tl;
  }

  reset() {
    TweenLite.set(this.$.occluder, {
      x: '-100%'
    });
    TweenLite.set(this.$.clipped, {
      clipPath: 'inset(0 100% 0 0)'
    });
    TweenLite.set(this.$.title, {
      y: '-100%',
      opacity: 0
    });
  }

  _nameChanged(newVal) {
    return this.$.nameplate.updateName({
      alias: newVal,
      rotate: false
    });
  }

  _computeHasTitle(title) {
    return Boolean(title && title.trim().length > 0);
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQLowerthirdNameplateElement.prototype, "header", void 0);

__decorate([property({
  type: String,
  observer: GDQLowerthirdNameplateElement_1.prototype._nameChanged
})], GDQLowerthirdNameplateElement.prototype, "name", void 0);

__decorate([property({
  type: String
})], GDQLowerthirdNameplateElement.prototype, "title", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_computeHasTitle(title)'
})], GDQLowerthirdNameplateElement.prototype, "hasTitle", void 0);

GDQLowerthirdNameplateElement = GDQLowerthirdNameplateElement_1 = __decorate([customElement('gdq-lowerthird-nameplate')], GDQLowerthirdNameplateElement);
export default GDQLowerthirdNameplateElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1sb3dlcnRoaXJkLW5hbWVwbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxTQUFRLE1BQVIsRUFBZ0IsWUFBaEIsRUFBOEIsU0FBOUIsUUFBOEMsb0RBQTlDO0FBR0EsTUFBTSxzQkFBc0IsR0FBRyxHQUEvQjtBQUNBLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFNBQWxDO0FBQ0EsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLDZCQUE2QixHQUFBLCtCQUFBLEdBQWxELE1BQXFCLDZCQUFyQixTQUEyRCxPQUFPLENBQUMsT0FBbkUsQ0FBMEU7QUFMMUU7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFHQyxTQUFBLE1BQUEsR0FBUyxLQUFUO0FBaURBOztBQXRDQSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sRUFBRSxHQUFHLElBQUksWUFBSixFQUFYO0FBRUEsSUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLFFBQWIsRUFBdUIsc0JBQXZCLEVBQStDO0FBQzlDLE1BQUEsQ0FBQyxFQUFFLE1BRDJDO0FBRTlDLE1BQUEsSUFBSSxFQUFFO0FBRndDLEtBQS9DLEVBR0csQ0FISDtBQUtBLElBQUEsRUFBRSxDQUFDLEVBQUgsQ0FBTSxLQUFLLENBQUwsQ0FBTyxPQUFiLEVBQXNCLHNCQUF0QixFQUE4QztBQUM3QyxNQUFBLFFBQVEsRUFBRSxpQkFEbUM7QUFFN0MsTUFBQSxJQUFJLEVBQUU7QUFGdUMsS0FBOUMsRUFHRyxDQUhIO0FBS0EsSUFBQSxFQUFFLENBQUMsRUFBSCxDQUFNLEtBQUssQ0FBTCxDQUFPLEtBQWIsRUFBb0IsR0FBcEIsRUFBeUI7QUFDeEIsTUFBQSxDQUFDLEVBQUUsSUFEcUI7QUFFeEIsTUFBQSxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BRlc7QUFHeEIsTUFBQSxPQUFPLEVBQUUsTUFBSztBQUNaLGFBQUssQ0FBTCxDQUFPLEtBQVAsQ0FBZ0MsS0FBaEMsQ0FBc0MsT0FBdEMsR0FBZ0QsR0FBaEQ7QUFDQSxhQUFLLENBQUwsQ0FBTyxZQUFQLEVBQTZCLFFBQTdCLEdBQXdDLEtBQUssQ0FBTCxDQUFPLEtBQVAsQ0FBYSxXQUFiLEdBQTJCLEVBQW5FO0FBQ0Q7QUFOdUIsS0FBekIsRUFPRyxPQVBIO0FBU0EsV0FBTyxFQUFQO0FBQ0E7O0FBRUQsRUFBQSxLQUFLLEdBQUE7QUFDSixJQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsS0FBSyxDQUFMLENBQU8sUUFBckIsRUFBK0I7QUFBQyxNQUFBLENBQUMsRUFBRTtBQUFKLEtBQS9CO0FBQ0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLEtBQUssQ0FBTCxDQUFPLE9BQXJCLEVBQThCO0FBQUMsTUFBQSxRQUFRLEVBQUU7QUFBWCxLQUE5QjtBQUNBLElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxLQUFLLENBQUwsQ0FBTyxLQUFyQixFQUE0QjtBQUFDLE1BQUEsQ0FBQyxFQUFFLE9BQUo7QUFBYSxNQUFBLE9BQU8sRUFBRTtBQUF0QixLQUE1QjtBQUNBOztBQUVELEVBQUEsWUFBWSxDQUFDLE1BQUQsRUFBZTtBQUMxQixXQUFRLEtBQUssQ0FBTCxDQUFPLFNBQVAsQ0FBMEMsVUFBMUMsQ0FBcUQ7QUFBQyxNQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCLE1BQUEsTUFBTSxFQUFFO0FBQXhCLEtBQXJELENBQVI7QUFDQTs7QUFFRCxFQUFBLGdCQUFnQixDQUFDLEtBQUQsRUFBYztBQUM3QixXQUFPLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLElBQU4sR0FBYSxNQUFiLEdBQXNCLENBQWhDLENBQWQ7QUFDQTs7QUFsRHdFLENBQTFFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxrQkFBa0IsRUFBRTtBQUFwQyxDQUFELENBQ1QsQ0FBQSxFLHVDQUFBLEUsUUFBQSxFLEtBQWUsQ0FBZixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLFFBQVEsRUFBRSwrQkFBNkIsQ0FBQyxTQUE5QixDQUF3QztBQUFqRSxDQUFELENBQ1QsQ0FBQSxFLHVDQUFBLEUsTUFBQSxFLEtBQWEsQ0FBYixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSx1Q0FBQSxFLE9BQUEsRSxLQUFjLENBQWQsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsa0JBQWtCLEVBQUUsSUFBcEM7QUFBMEMsRUFBQSxRQUFRLEVBQUU7QUFBcEQsQ0FBRCxDQUNULENBQUEsRSx1Q0FBQSxFLFVBQUEsRSxLQUFrQixDQUFsQixDQUFBOztBQVhvQiw2QkFBNkIsR0FBQSwrQkFBQSxHQUFBLFVBQUEsQ0FBQSxDQURqRCxhQUFhLENBQUMsMEJBQUQsQ0FDb0MsQ0FBQSxFQUE3Qiw2QkFBNkIsQ0FBN0I7ZUFBQSw2QiIsInNvdXJjZVJvb3QiOiIifQ==