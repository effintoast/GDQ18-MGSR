var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TweenLite, Power3 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQNameplateAudioIndicatorElement = class GDQNameplateAudioIndicatorElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.vertPos = 'top';
    this.horizPos = 'left';
    this.animationDuration = 0.25;
    this._maskProxy = [-10, -10, 0];
  }

  ready() {
    super.ready();
    this.$.body.style.webkitMaskImage = `linear-gradient(
			to right,
			rgba(0,0,0,1) ${this._maskProxy[0]}%,
			rgba(0,0,0,1) ${this._maskProxy[1]}%,
			rgba(0,0,0,0) ${this._maskProxy[2]}%
		)`;
  }

  show() {
    return this._animateMask(100, 100, 110);
  }

  hide() {
    return this._animateMask(-10, -10, 0);
  }

  _animateMask(stopOne, stopTwo, stopThree) {
    return TweenLite.to(this._maskProxy, this.animationDuration, {
      0: stopOne,
      1: stopTwo,
      2: stopThree,
      ease: Power3.easeOut,
      callbackScope: this,

      onUpdate() {
        this.$.body.style.webkitMaskImage = `linear-gradient(
					to right,
					rgba(0,0,0,1) ${this._maskProxy[0]}%,
					rgba(0,0,0,1) ${this._maskProxy[1]}%,
					rgba(0,0,0,0) ${this._maskProxy[2]}%
				)`;
      }

    });
  }

  _showingChanged(newVal) {
    if (newVal) {
      return this.show();
    }

    return this.hide();
  }

};

__decorate([property({
  type: Boolean,
  observer: '_showingChanged'
})], GDQNameplateAudioIndicatorElement.prototype, "showing", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], GDQNameplateAudioIndicatorElement.prototype, "vertPos", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], GDQNameplateAudioIndicatorElement.prototype, "horizPos", void 0);

__decorate([property({
  type: Number
})], GDQNameplateAudioIndicatorElement.prototype, "animationDuration", void 0);

__decorate([property({
  type: Array
})], GDQNameplateAudioIndicatorElement.prototype, "_maskProxy", void 0);

GDQNameplateAudioIndicatorElement = __decorate([customElement('gdq-runner-nameplate-audio-indicator')], GDQNameplateAudioIndicatorElement);
export default GDQNameplateAudioIndicatorElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1ydW5uZXItbmFtZXBsYXRlLWF1ZGlvLWluZGljYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVEsU0FBUixFQUFtQixNQUFuQixRQUFnQyxvREFBaEM7QUFFQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBRUE7Ozs7O0FBS0EsSUFBcUIsaUNBQWlDLEdBQXRELE1BQXFCLGlDQUFyQixTQUErRCxPQUFPLENBQUMsT0FBdkUsQ0FBOEU7QUFMOUU7Ozs7QUFJQSxFQUFBLFdBQUEsR0FBQTs7QUFNQyxTQUFBLE9BQUEsR0FBVSxLQUFWO0FBR0EsU0FBQSxRQUFBLEdBQVcsTUFBWDtBQUdBLFNBQUEsaUJBQUEsR0FBb0IsSUFBcEI7QUFHaUIsU0FBQSxVQUFBLEdBQWEsQ0FBQyxDQUFDLEVBQUYsRUFBTSxDQUFDLEVBQVAsRUFBVyxDQUFYLENBQWI7QUE2Q2pCOztBQTNDQSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNDLFNBQUssQ0FBTCxDQUFPLElBQVAsQ0FBb0IsS0FBcEIsQ0FBMEIsZUFBMUIsR0FBNEM7O21CQUU1QixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBa0I7bUJBQ2xCLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUFrQjttQkFDbEIsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQWtCO0lBSmxDO0FBTUQ7O0FBRUQsRUFBQSxJQUFJLEdBQUE7QUFDSCxXQUFPLEtBQUssWUFBTCxDQUFrQixHQUFsQixFQUF1QixHQUF2QixFQUE0QixHQUE1QixDQUFQO0FBQ0E7O0FBRUQsRUFBQSxJQUFJLEdBQUE7QUFDSCxXQUFPLEtBQUssWUFBTCxDQUFrQixDQUFDLEVBQW5CLEVBQXVCLENBQUMsRUFBeEIsRUFBNEIsQ0FBNUIsQ0FBUDtBQUNBOztBQUVELEVBQUEsWUFBWSxDQUFDLE9BQUQsRUFBa0IsT0FBbEIsRUFBbUMsU0FBbkMsRUFBb0Q7QUFDL0QsV0FBTyxTQUFTLENBQUMsRUFBVixDQUFhLEtBQUssVUFBbEIsRUFBOEIsS0FBSyxpQkFBbkMsRUFBc0Q7QUFDNUQsU0FBRyxPQUR5RDtBQUU1RCxTQUFHLE9BRnlEO0FBRzVELFNBQUcsU0FIeUQ7QUFJNUQsTUFBQSxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BSitDO0FBSzVELE1BQUEsYUFBYSxFQUFFLElBTDZDOztBQU01RCxNQUFBLFFBQVEsR0FBQTtBQUNQLGFBQUssQ0FBTCxDQUFPLElBQVAsQ0FBWSxLQUFaLENBQWtCLGVBQWxCLEdBQW9DOztxQkFFbkIsS0FBSyxVQUFMLENBQWdCLENBQWhCLENBQWtCO3FCQUNsQixLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBa0I7cUJBQ2xCLEtBQUssVUFBTCxDQUFnQixDQUFoQixDQUFrQjtNQUpuQztBQU1BOztBQWIyRCxLQUF0RCxDQUFQO0FBZUE7O0FBRUQsRUFBQSxlQUFlLENBQUMsTUFBRCxFQUFnQjtBQUM5QixRQUFJLE1BQUosRUFBWTtBQUNYLGFBQU8sS0FBSyxJQUFMLEVBQVA7QUFDQTs7QUFFRCxXQUFPLEtBQUssSUFBTCxFQUFQO0FBQ0E7O0FBMUQ0RSxDQUE5RTs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsUUFBUSxFQUFFO0FBQTFCLENBQUQsQ0FDVCxDQUFBLEUsMkNBQUEsRSxTQUFBLEUsS0FBaUIsQ0FBakIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxrQkFBa0IsRUFBRTtBQUFuQyxDQUFELENBQ1QsQ0FBQSxFLDJDQUFBLEUsU0FBQSxFLEtBQWdCLENBQWhCLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLEVBQUEsa0JBQWtCLEVBQUU7QUFBbkMsQ0FBRCxDQUNULENBQUEsRSwyQ0FBQSxFLFVBQUEsRSxLQUFrQixDQUFsQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwyQ0FBQSxFLG1CQUFBLEUsS0FBeUIsQ0FBekIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsMkNBQUEsRSxZQUFBLEUsS0FBNEMsQ0FBNUMsQ0FBQTs7QUFkb0IsaUNBQWlDLEdBQUEsVUFBQSxDQUFBLENBRHJELGFBQWEsQ0FBQyxzQ0FBRCxDQUN3QyxDQUFBLEVBQWpDLGlDQUFpQyxDQUFqQztlQUFBLGlDIiwic291cmNlUm9vdCI6IiJ9