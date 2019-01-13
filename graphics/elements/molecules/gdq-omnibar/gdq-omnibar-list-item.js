var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { Sine, TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarListItemElement = class GDQOmnibarListItemElement extends Polymer.Element {
  ready() {
    super.ready();
    this._$borderBodies = this.shadowRoot.querySelectorAll('.border-body');
    this._$leftBorderCaps = this.shadowRoot.querySelectorAll('.border-cap:first-child');
    this._$rightBorderCaps = this.shadowRoot.querySelectorAll('.border-cap:last-child');
  }

  enter() {
    const enterTL = new TimelineLite();
    enterTL.fromTo(this, 0.234, {
      x: 20,
      opacity: 0
    }, {
      x: 0,
      opacity: 1,
      ease: Sine.easeOut
    });
    return enterTL;
  }

  exit() {
    const exitTL = new TimelineLite();
    exitTL.to(this._$borderBodies, 0.465, {
      scaleX: 0,
      ease: Sine.easeInOut
    }, 0);
    exitTL.to(this._$rightBorderCaps, 0.465, {
      x: -this.clientWidth + 2,
      ease: Sine.easeInOut
    }, 0);
    exitTL.add(createMaybeRandomTween({
      target: this.$.text.style,
      propName: 'opacity',
      duration: 0.465,
      start: {
        probability: 1,
        normalValue: 0
      },
      end: {
        probability: 0,
        normalValue: 0
      }
    }), 0);
    exitTL.to([this._$leftBorderCaps, this._$rightBorderCaps], 0.165, {
      scaleX: 0,
      ease: Sine.easeInOut
    });
    return exitTL;
  }

};

__decorate([property({
  type: String
})], GDQOmnibarListItemElement.prototype, "firstLine", void 0);

__decorate([property({
  type: String
})], GDQOmnibarListItemElement.prototype, "secondLine", void 0);

GDQOmnibarListItemElement = __decorate([customElement('gdq-omnibar-list-item')], GDQOmnibarListItemElement);
export default GDQOmnibarListItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWxpc3QtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVEsSUFBUixFQUFjLFlBQWQsUUFBaUMsb0RBQWpDO0FBQ0EsU0FBUSxzQkFBUixRQUFxQyx3Q0FBckM7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBRUE7Ozs7O0FBS0EsSUFBcUIseUJBQXlCLEdBQTlDLE1BQXFCLHlCQUFyQixTQUF1RCxPQUFPLENBQUMsT0FBL0QsQ0FBc0U7QUFXckUsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU47QUFDQSxTQUFLLGNBQUwsR0FBc0IsS0FBSyxVQUFMLENBQWlCLGdCQUFqQixDQUFrQyxjQUFsQyxDQUF0QjtBQUNBLFNBQUssZ0JBQUwsR0FBd0IsS0FBSyxVQUFMLENBQWlCLGdCQUFqQixDQUFrQyx5QkFBbEMsQ0FBeEI7QUFDQSxTQUFLLGlCQUFMLEdBQXlCLEtBQUssVUFBTCxDQUFpQixnQkFBakIsQ0FBa0Msd0JBQWxDLENBQXpCO0FBQ0E7O0FBRUQsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLE9BQU8sR0FBRyxJQUFJLFlBQUosRUFBaEI7QUFFQSxJQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsSUFBZixFQUFxQixLQUFyQixFQUE0QjtBQUMzQixNQUFBLENBQUMsRUFBRSxFQUR3QjtBQUUzQixNQUFBLE9BQU8sRUFBRTtBQUZrQixLQUE1QixFQUdHO0FBQ0YsTUFBQSxDQUFDLEVBQUUsQ0FERDtBQUVGLE1BQUEsT0FBTyxFQUFFLENBRlA7QUFHRixNQUFBLElBQUksRUFBRSxJQUFJLENBQUM7QUFIVCxLQUhIO0FBU0EsV0FBTyxPQUFQO0FBQ0E7O0FBRUQsRUFBQSxJQUFJLEdBQUE7QUFDSCxVQUFNLE1BQU0sR0FBRyxJQUFJLFlBQUosRUFBZjtBQUVBLElBQUEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxLQUFLLGNBQWYsRUFBK0IsS0FBL0IsRUFBc0M7QUFDckMsTUFBQSxNQUFNLEVBQUUsQ0FENkI7QUFFckMsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBRjBCLEtBQXRDLEVBR0csQ0FISDtBQUtBLElBQUEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxLQUFLLGlCQUFmLEVBQWtDLEtBQWxDLEVBQXlDO0FBQ3hDLE1BQUEsQ0FBQyxFQUFFLENBQUMsS0FBSyxXQUFOLEdBQW9CLENBRGlCO0FBRXhDLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQztBQUY2QixLQUF6QyxFQUdHLENBSEg7QUFLQSxJQUFBLE1BQU0sQ0FBQyxHQUFQLENBQVcsc0JBQXNCLENBQUM7QUFDakMsTUFBQSxNQUFNLEVBQUcsS0FBSyxDQUFMLENBQU8sSUFBUCxDQUErQixLQURQO0FBRWpDLE1BQUEsUUFBUSxFQUFFLFNBRnVCO0FBR2pDLE1BQUEsUUFBUSxFQUFFLEtBSHVCO0FBSWpDLE1BQUEsS0FBSyxFQUFFO0FBQUMsUUFBQSxXQUFXLEVBQUUsQ0FBZDtBQUFpQixRQUFBLFdBQVcsRUFBRTtBQUE5QixPQUowQjtBQUtqQyxNQUFBLEdBQUcsRUFBRTtBQUFDLFFBQUEsV0FBVyxFQUFFLENBQWQ7QUFBaUIsUUFBQSxXQUFXLEVBQUU7QUFBOUI7QUFMNEIsS0FBRCxDQUFqQyxFQU1JLENBTko7QUFRQSxJQUFBLE1BQU0sQ0FBQyxFQUFQLENBQVUsQ0FBQyxLQUFLLGdCQUFOLEVBQXdCLEtBQUssaUJBQTdCLENBQVYsRUFBMkQsS0FBM0QsRUFBa0U7QUFDakUsTUFBQSxNQUFNLEVBQUUsQ0FEeUQ7QUFFakUsTUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDO0FBRnNELEtBQWxFO0FBS0EsV0FBTyxNQUFQO0FBQ0E7O0FBNURvRSxDQUF0RTs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsbUNBQUEsRSxXQUFBLEUsS0FBa0IsQ0FBbEIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsbUNBQUEsRSxZQUFBLEUsS0FBbUIsQ0FBbkIsQ0FBQTs7QUFMb0IseUJBQXlCLEdBQUEsVUFBQSxDQUFBLENBRDdDLGFBQWEsQ0FBQyx1QkFBRCxDQUNnQyxDQUFBLEVBQXpCLHlCQUF5QixDQUF6QjtlQUFBLHlCIiwic291cmNlUm9vdCI6IiJ9