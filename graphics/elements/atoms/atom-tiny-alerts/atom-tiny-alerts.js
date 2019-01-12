var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Power1 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import Random from "../../../../shared/lib/vendor/random.js";
const {
  customElement
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */

let AtomTinyAlertsElement = class AtomTinyAlertsElement extends Polymer.Element {
  addAlert({
    text,
    textColor = 'black',
    backgroundColor = 'white',
    holdDuration = 0.067
  }) {
    const div = document.createElement('div');
    div.classList.add('alert');
    div.innerText = text;
    div.style.color = textColor;
    div.style.backgroundColor = backgroundColor;
    this.shadowRoot.appendChild(div);
    div.style.left = `${randomInt(0, this.clientWidth - div.clientWidth)}px`;
    div.style.bottom = `${randomInt(2, 8)}px`;
    const tl = new TimelineLite();
    tl.to(div, 0.1834, {
      clipPath: 'inset(0 0%)',
      ease: Power1.easeIn
    });
    tl.addLabel('exit', holdDuration);
    tl.to(div, 0.934, {
      y: -21,
      ease: Power1.easeIn
    }, 'exit');
    tl.to(div, 0.5167, {
      opacity: 0,
      ease: Power1.easeIn
    }, 'exit+=0.4167');
    tl.call(() => {
      div.remove();
    });
    return tl;
  }

};
AtomTinyAlertsElement = __decorate([customElement('atom-tiny-alerts')], AtomTinyAlertsElement);
export default AtomTinyAlertsElement;
/**
 * Generates a random integer.
 * @param min - The minimum number, inclusive.
 * @param max - The maximmum number, inclusive.
 * @returns - A random number between min and max, inclusive.
 */

function randomInt(min, max) {
  return Random.integer(min, max)(Random.engines.browserCrypto);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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