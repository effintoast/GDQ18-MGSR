var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Power4 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let GDQBreakBidManyElement = class GDQBreakBidManyElement extends Polymer.Element {
  enter() {
    this.$.optionRepeat.render();
    const tl = new TimelineLite();
    const optionElements = Array.from(this.shadowRoot.querySelectorAll('gdq-break-bid-many-option'));
    tl.addLabel('flickerOptions', '+=0');
    optionElements.forEach((optionElement, index) => {
      optionElement.style.opacity = '0';
      tl.add(createMaybeRandomTween({
        target: optionElement.style,
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
      }), `flickerOptions+=${index * 0.1}`);
    });
    tl.addLabel('enterOptions', '+=0');
    optionElements.forEach((optionElement, index) => {
      tl.add(optionElement.enter(), `enterOptions+=${index * 0.1}`);
    });
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    const optionElements = Array.from(this.shadowRoot.querySelectorAll('gdq-break-bid-many-option'));
    tl.addLabel('flickerOptions', '+=0');
    optionElements.slice(0).reverse().forEach((optionElement, index) => {
      tl.add(createMaybeRandomTween({
        target: optionElement.style,
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
      }), `flickerOptions+=${index * 0.1}`);
    });
    return tl;
  }

  _calcOptions(bid) {
    if (!bid) {
      return [];
    }

    return bid.options.slice(0, 5);
  }

};

__decorate([property({
  type: Object
})], GDQBreakBidManyElement.prototype, "bid", void 0);

GDQBreakBidManyElement = __decorate([customElement('gdq-break-bid-many')], GDQBreakBidManyElement);
export default GDQBreakBidManyElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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