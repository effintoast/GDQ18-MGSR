var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Sine, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import GDQBreakLoopMixin from "../../../mixins/gdq-break-loop-mixin.js";
import { typeAnim } from "../../../../shared/lib/type-anims.js";
const {
  customElement
} = Polymer.decorators;
const EMPTY_OBJ = {};
const DISPLAY_DURATION = nodecg.bundleConfig.displayDuration;
const currentBids = nodecg.Replicant('currentBids');
/**
 * @customElement
 * @polymer
 */

let GDQBreakBidsElement = class GDQBreakBidsElement extends GDQBreakLoopMixin(Polymer.Element) {
  ready() {
    super.ready();
    this.maxNoMoreItemsRetries = 30;
    currentBids.on('change', newVal => {
      this.availableItems = newVal;
    });
  }

  show() {
    const tl = new TimelineLite();
    tl.to(this, 0.333, {
      opacity: 1,
      ease: Sine.easeInOut
    }, 0);
    tl.to(this, 1, {
      x: '0%',
      ease: Power2.easeOut
    }, 0);
    return tl;
  }

  hide() {
    const tl = new TimelineLite();
    tl.to(this, 1, {
      x: '-100%',
      ease: Power2.easeIn
    });
    tl.to(this, 0.333, {
      opacity: 0,
      ease: Sine.easeInOut
    }, '-=0.333');
    return tl;
  }

  _showItem(bid) {
    let elementTagName;

    if (bid.type === 'choice-many') {
      elementTagName = 'gdq-break-bid-many';
    } else if (bid.type === 'choice-binary') {
      elementTagName = 'gdq-break-bid-binary';
    } else if (bid.type === 'challenge') {
      elementTagName = 'gdq-break-bid-challenge';
    } else {
      nodecg.log.error('Got bid of unexpected type (%s):', bid.type, JSON.stringify(bid, null, 2));
    }

    const tl = new TimelineLite();

    if (!elementTagName) {
      return tl;
    }

    const previousElement = this._previousBidElement;
    const element = document.createElement(elementTagName);
    element.bid = bid;
    this._previousBidElement = element;
    this.$.content.appendChild(element);

    if (previousElement) {
      tl.add(previousElement.exit());
      tl.call(() => {
        previousElement.remove();
      });
    }

    tl.call(() => {
      const contentElem = this.$.content;
      contentElem.selectIndex(contentElem.indexOf(element));
      this.$['description-actual'].innerHTML = bid.description.replace(/\\n/g, '</br>');
      typeAnim(this.$['description-actual']);
    }, undefined, null, '+=0.1');
    tl.add(element.enter()); // Give the bid some time to show.

    tl.to(EMPTY_OBJ, DISPLAY_DURATION, EMPTY_OBJ);
    return tl;
  }

};
GDQBreakBidsElement = __decorate([customElement('gdq-break-bids')], GDQBreakBidsElement);
export default GDQBreakBidsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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