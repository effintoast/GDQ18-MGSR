var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, TweenLite, Power3, Sine } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQNameplateResultElement = class GDQNameplateResultElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this._tl = new TimelineLite({
      autoRemoveChildren: true
    });
  }

  ready() {
    super.ready();
    TweenLite.set(this, {
      x: 0
    });
    TweenLite.set(this.$.cover, {
      scaleX: 1
    });
    TweenLite.set(this.$.place, {
      scaleX: 0
    });
  }

  show() {
    const anim = new TimelineLite();
    anim.to(this, 0.5, {
      x: this.side === 'left' ? '-100%' : '100%',
      ease: Power3.easeIn
    });
    anim.to(this.$.cover, 0.5, {
      scaleX: 0,
      ease: Power3.easeOut
    });
    anim.to(this.$.place, 0.182, {
      scaleX: 1,
      ease: Sine.easeOut
    });
    return anim;
  }

  hide() {
    const anim = new TimelineLite();
    anim.to(this.$.place, 0.182, {
      scaleX: 0,
      ease: Sine.easeIn
    });
    anim.to(this.$.cover, 0.5, {
      scaleX: 1,
      ease: Power3.easeIn
    });
    anim.to(this, 0.5, {
      x: '0%',
      ease: Power3.easeOut
    });
    return anim;
  }

  _showingChanged(newVal) {
    const anim = newVal ? this.show() : this.hide();

    this._tl.add(anim);
  }

  _calcPlaceText(place, forfeit) {
    return forfeit ? 'X' : place;
  }

};

__decorate([property({
  type: Boolean,
  observer: '_showingChanged'
})], GDQNameplateResultElement.prototype, "showing", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], GDQNameplateResultElement.prototype, "side", void 0);

__decorate([property({
  type: Number
})], GDQNameplateResultElement.prototype, "place", void 0);

__decorate([property({
  type: String
})], GDQNameplateResultElement.prototype, "time", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQNameplateResultElement.prototype, "firstPlace", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQNameplateResultElement.prototype, "lastPlace", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQNameplateResultElement.prototype, "forfeit", void 0);

GDQNameplateResultElement = __decorate([customElement('gdq-runner-nameplate-result')], GDQNameplateResultElement);
export default GDQNameplateResultElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1ydW5uZXItbmFtZXBsYXRlLXJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVEsWUFBUixFQUFzQixTQUF0QixFQUFpQyxNQUFqQyxFQUF5QyxJQUF6QyxRQUFvRCxvREFBcEQ7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBRUE7Ozs7O0FBS0EsSUFBcUIseUJBQXlCLEdBQTlDLE1BQXFCLHlCQUFyQixTQUF1RCxPQUFPLENBQUMsT0FBL0QsQ0FBc0U7QUFMdEU7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUF1QmtCLFNBQUEsR0FBQSxHQUFNLElBQUksWUFBSixDQUFpQjtBQUFDLE1BQUEsa0JBQWtCLEVBQUU7QUFBckIsS0FBakIsQ0FBTjtBQXlEakI7O0FBdkRBLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLElBQWQsRUFBb0I7QUFBQyxNQUFBLENBQUMsRUFBRTtBQUFKLEtBQXBCO0FBQ0EsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLEtBQUssQ0FBTCxDQUFPLEtBQXJCLEVBQTRCO0FBQUMsTUFBQSxNQUFNLEVBQUU7QUFBVCxLQUE1QjtBQUNBLElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxLQUFLLENBQUwsQ0FBTyxLQUFyQixFQUE0QjtBQUFDLE1BQUEsTUFBTSxFQUFFO0FBQVQsS0FBNUI7QUFDQTs7QUFFRCxFQUFBLElBQUksR0FBQTtBQUNILFVBQU0sSUFBSSxHQUFHLElBQUksWUFBSixFQUFiO0FBQ0EsSUFBQSxJQUFJLENBQUMsRUFBTCxDQUFRLElBQVIsRUFBYyxHQUFkLEVBQW1CO0FBQ2xCLE1BQUEsQ0FBQyxFQUFFLEtBQUssSUFBTCxLQUFjLE1BQWQsR0FBdUIsT0FBdkIsR0FBaUMsTUFEbEI7QUFFbEIsTUFBQSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBRkssS0FBbkI7QUFLQSxJQUFBLElBQUksQ0FBQyxFQUFMLENBQVEsS0FBSyxDQUFMLENBQU8sS0FBZixFQUFzQixHQUF0QixFQUEyQjtBQUMxQixNQUFBLE1BQU0sRUFBRSxDQURrQjtBQUUxQixNQUFBLElBQUksRUFBRSxNQUFNLENBQUM7QUFGYSxLQUEzQjtBQUtBLElBQUEsSUFBSSxDQUFDLEVBQUwsQ0FBUSxLQUFLLENBQUwsQ0FBTyxLQUFmLEVBQXNCLEtBQXRCLEVBQTZCO0FBQzVCLE1BQUEsTUFBTSxFQUFFLENBRG9CO0FBRTVCLE1BQUEsSUFBSSxFQUFFLElBQUksQ0FBQztBQUZpQixLQUE3QjtBQUtBLFdBQU8sSUFBUDtBQUNBOztBQUVELEVBQUEsSUFBSSxHQUFBO0FBQ0gsVUFBTSxJQUFJLEdBQUcsSUFBSSxZQUFKLEVBQWI7QUFDQSxJQUFBLElBQUksQ0FBQyxFQUFMLENBQVEsS0FBSyxDQUFMLENBQU8sS0FBZixFQUFzQixLQUF0QixFQUE2QjtBQUM1QixNQUFBLE1BQU0sRUFBRSxDQURvQjtBQUU1QixNQUFBLElBQUksRUFBRSxJQUFJLENBQUM7QUFGaUIsS0FBN0I7QUFLQSxJQUFBLElBQUksQ0FBQyxFQUFMLENBQVEsS0FBSyxDQUFMLENBQU8sS0FBZixFQUFzQixHQUF0QixFQUEyQjtBQUMxQixNQUFBLE1BQU0sRUFBRSxDQURrQjtBQUUxQixNQUFBLElBQUksRUFBRSxNQUFNLENBQUM7QUFGYSxLQUEzQjtBQUtBLElBQUEsSUFBSSxDQUFDLEVBQUwsQ0FBUSxJQUFSLEVBQWMsR0FBZCxFQUFtQjtBQUNsQixNQUFBLENBQUMsRUFBRSxJQURlO0FBRWxCLE1BQUEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUZLLEtBQW5CO0FBS0EsV0FBTyxJQUFQO0FBQ0E7O0FBRUQsRUFBQSxlQUFlLENBQUMsTUFBRCxFQUFnQjtBQUM5QixVQUFNLElBQUksR0FBRyxNQUFNLEdBQUcsS0FBSyxJQUFMLEVBQUgsR0FBaUIsS0FBSyxJQUFMLEVBQXBDOztBQUNBLFNBQUssR0FBTCxDQUFTLEdBQVQsQ0FBYSxJQUFiO0FBQ0E7O0FBRUQsRUFBQSxjQUFjLENBQUMsS0FBRCxFQUFnQixPQUFoQixFQUFnQztBQUM3QyxXQUFPLE9BQU8sR0FBRyxHQUFILEdBQVMsS0FBdkI7QUFDQTs7QUE5RW9FLENBQXRFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxRQUFRLEVBQUU7QUFBMUIsQ0FBRCxDQUNULENBQUEsRSxtQ0FBQSxFLFNBQUEsRSxLQUFpQixDQUFqQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLGtCQUFrQixFQUFFO0FBQW5DLENBQUQsQ0FDVCxDQUFBLEUsbUNBQUEsRSxNQUFBLEUsS0FBYSxDQUFiLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLG1DQUFBLEUsT0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxtQ0FBQSxFLE1BQUEsRSxLQUFhLENBQWIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsa0JBQWtCLEVBQUU7QUFBcEMsQ0FBRCxDQUNULENBQUEsRSxtQ0FBQSxFLFlBQUEsRSxLQUFvQixDQUFwQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxrQkFBa0IsRUFBRTtBQUFwQyxDQUFELENBQ1QsQ0FBQSxFLG1DQUFBLEUsV0FBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsT0FBUDtBQUFnQixFQUFBLGtCQUFrQixFQUFFO0FBQXBDLENBQUQsQ0FDVCxDQUFBLEUsbUNBQUEsRSxTQUFBLEUsS0FBaUIsQ0FBakIsQ0FBQTs7QUFwQm9CLHlCQUF5QixHQUFBLFVBQUEsQ0FBQSxDQUQ3QyxhQUFhLENBQUMsNkJBQUQsQ0FDZ0MsQ0FBQSxFQUF6Qix5QkFBeUIsQ0FBekI7ZUFBQSx5QiIsInNvdXJjZVJvb3QiOiIifQ==