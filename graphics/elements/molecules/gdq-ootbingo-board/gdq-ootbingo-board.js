var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQOotbingoBoardElement_1;
import { TweenLite, Sine, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const boardRep = nodecg.Replicant('ootBingo:board');
const urlParams = new URLSearchParams(window.location.search);
const embiggenUrlParam = urlParams.get('embiggen');
let EMBIGGEN;

if (embiggenUrlParam === 'true') {
  EMBIGGEN = true;
  window.title += ' - EMBIGGENED';
} else if (embiggenUrlParam === 'false') {
  EMBIGGEN = false;
  window.title += ' - debiggened';
} else {
  EMBIGGEN = null;
}
/**
 * @customElement
 * @polymer
 */


let GDQOotbingoBoardElement = GDQOotbingoBoardElement_1 = class GDQOotbingoBoardElement extends Polymer.Element {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.embiggened = Boolean(EMBIGGEN);
    this._embiggenState = false;
    this._hiddenState = false;
  }

  ready() {
    super.ready();
    boardRep.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this._embiggenState = newVal.embiggen;
      this._hiddenState = newVal.cardHidden;
    });
  }

  _embiggenStateChanged(newVal) {
    if (EMBIGGEN === null) {
      return;
    }

    if (newVal && EMBIGGEN || !newVal && !EMBIGGEN) {
      TweenLite.to(this, 0.3, {
        opacity: 1,
        ease: Sine.easeInOut
      });
    } else {
      TweenLite.to(this, 0.3, {
        opacity: 0,
        ease: Sine.easeInOut
      });
    }
  }

  _hiddenStateChanged(newVal) {
    if (newVal) {
      TweenLite.to(this.$.cover, 0.3, {
        y: '0%',
        ease: Power2.easeOut
      });
    } else {
      TweenLite.to(this.$.cover, 0.3, {
        y: '-100%',
        ease: Power2.easeIn
      });
    }
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQOotbingoBoardElement.prototype, "embiggened", void 0);

__decorate([property({
  type: Boolean,
  observer: GDQOotbingoBoardElement_1.prototype._embiggenStateChanged
})], GDQOotbingoBoardElement.prototype, "_embiggenState", void 0);

__decorate([property({
  type: Boolean,
  observer: GDQOotbingoBoardElement_1.prototype._hiddenStateChanged
})], GDQOotbingoBoardElement.prototype, "_hiddenState", void 0);

GDQOotbingoBoardElement = GDQOotbingoBoardElement_1 = __decorate([customElement('gdq-ootbingo-board')], GDQOotbingoBoardElement);
export default GDQOotbingoBoardElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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