var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQOmnibarListElement_1;
import { TimelineLite, TweenLite, Sine, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
/* Minimum amount of content overflow, in pixels, required before the scrolling behavior kicks in.
 * We have this because if the content just scrolls a few pixels, it looks kinda bad.
 * We've found it's better to just not scroll it at all in those cases, and let it
 * cut off those few pixels. */

const MIN_CONTENT_SCROLL_DISTANCE = 3; // How much time, in seconds, to spend scrolling on a single pixel.

const CONTENT_SCROLL_TIME_PER_PIXEL = 0.002; // The opacity to set on list items which are partially occluded by the total.

const OCCLUDED_OPACITY = 0.25;
/**
 * @customElement
 * @polymer
 */

let GDQOmnibarListElement = GDQOmnibarListElement_1 = class GDQOmnibarListElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    /**
     * How much space, in pixels, to put between items in the list.
     */

    this.marginSize = 6;
  }

  enter(displayDuration, scrollHoldDuration) {
    const listWidth = this.clientWidth;
    const contentWidth = this.$.content.clientWidth;
    const contentOverflowWidth = contentWidth - listWidth;
    const tl = new TimelineLite();
    const elements = this.getListItems();
    elements.forEach((element, index) => {
      tl.add(element.enter(), index * 0.1134);
    });

    if (contentOverflowWidth < MIN_CONTENT_SCROLL_DISTANCE) {
      tl.to({}, displayDuration, {});
    } else {
      // Display the content cards long enough for people to read.
      // Scroll the list of cards if necessary to show them all.
      const occludedElements = new Set();
      const observerMap = new Map();
      const observers = elements.map(element => {
        const observer = new IntersectionObserver(entries => {
          if (!entries || entries.length < 1) {
            return;
          }

          const entry = entries[0];
          const occluded = entry.intersectionRatio < 1;

          if (occluded) {
            occludedElements.add(element);
          } else {
            occludedElements.delete(element);
          }

          TweenLite.to(element, 0.224, {
            opacity: occluded ? OCCLUDED_OPACITY : 1,
            ease: Sine.easeInOut
          });
        }, {
          root: this,
          rootMargin: '0px',
          threshold: [0, 1]
        });
        observer.observe(element);
        observerMap.set(element, observer);
        return observer;
      }); // Figure out how many items we need to exit before all items are visible.

      let recoveredWidth = 0;
      const leadingElementsToExit = [];

      while (recoveredWidth < contentOverflowWidth - MIN_CONTENT_SCROLL_DISTANCE) {
        const leadingElement = elements[leadingElementsToExit.length];
        leadingElementsToExit.push(leadingElement);
        recoveredWidth += this.getPreciseElementWidth(leadingElement);
      }

      leadingElementsToExit.forEach(leadingElement => {
        const leadingElementWidth = this.getPreciseElementWidth(leadingElement);
        const trailingElements = elements.slice(elements.indexOf(leadingElement) + 1);
        tl.add(leadingElement.exit(), `+=${scrollHoldDuration}`);
        tl.to(trailingElements, leadingElementWidth * CONTENT_SCROLL_TIME_PER_PIXEL, {
          x: -leadingElementWidth - this.marginSize,
          ease: Power2.easeInOut
        });
        tl.call(() => {
          leadingElement.remove();
          observerMap.get(leadingElement).disconnect();
          TweenLite.set(trailingElements, {
            x: 0
          });
          occludedElements.delete(leadingElement);
        });
      });
      tl.call(() => {
        observers.forEach(observer => observer.disconnect());
      }, undefined, null, `+=${scrollHoldDuration}`);
    }

    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    const elements = this.getListItems();
    elements.slice(0).reverse().forEach((element, index) => {
      tl.add(element.exit(), index * 0.3134);
    });
    return tl;
  }

  getListItems() {
    return Array.from(this.$.contentSlot.assignedElements());
  }

  getPreciseElementWidth(element) {
    return element.getBoundingClientRect().width;
  }

  _marginSizeChanged(newVal) {
    this.updateStyles({
      '--gdq-omnibar-list-margin-size': `${newVal}px`
    });
  }

};

__decorate([property({
  type: Number,
  observer: GDQOmnibarListElement_1.prototype._marginSizeChanged
})], GDQOmnibarListElement.prototype, "marginSize", void 0);

GDQOmnibarListElement = GDQOmnibarListElement_1 = __decorate([customElement('gdq-omnibar-list')], GDQOmnibarListElement);
export default GDQOmnibarListElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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