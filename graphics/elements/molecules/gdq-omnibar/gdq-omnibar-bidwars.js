var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const MAX_OPTIONS = 4;
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarBidwarsElement = class GDQOmnibarBidwarsElement extends Polymer.Element {
  enter(displayDuration, scrollHoldDuration) {
    const tl = new TimelineLite();
    const labelElem = this.$.label;
    this.bidWars.forEach((bidWar, bidIndex) => {
      // Show at most MAX_OPTIONS options.
      const bidElements = bidWar.options.slice(0, MAX_OPTIONS).map((option, index) => {
        const element = document.createElement('gdq-omnibar-bidwar-option');
        element.bid = option;
        element.winning = index === 0;
        return element;
      });

      if (bidElements.length <= 0) {
        const placeholder = document.createElement('gdq-omnibar-bidwar-option');
        placeholder.bid = {};
        placeholder.placeholder = true;
        bidElements.push(placeholder);
      }

      const listElement = document.createElement('gdq-omnibar-list');
      listElement.classList.add('list');
      listElement.marginSize = -8;
      bidElements.forEach(element => {
        listElement.appendChild(element);
      });
      this.$.lists.appendChild(listElement);
      Polymer.flush();
      bidElements.slice(0).reverse().forEach((element, index) => {
        element.render();
        element.style.zIndex = String(index); // First item has highest z-index, last item has lowest.
      });
      tl.call(() => {
        this.$.lists.select(bidIndex);
      });

      if (bidIndex === 0) {
        tl.add(labelElem.enter(bidWar.description));
      } else {
        tl.add(labelElem.change(bidWar.description));
      }

      tl.call(() => {
        tl.pause();
        const fooTl = listElement.enter(displayDuration, scrollHoldDuration);
        fooTl.call(tl.resume, undefined, tl);
      });
      tl.add(listElement.exit());
    });
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    tl.add(this.$.label.exit());
    return tl;
  }

};

__decorate([property({
  type: Array
})], GDQOmnibarBidwarsElement.prototype, "bidWars", void 0);

GDQOmnibarBidwarsElement = __decorate([customElement('gdq-omnibar-bidwars')], GDQOmnibarBidwarsElement);
export default GDQOmnibarBidwarsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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