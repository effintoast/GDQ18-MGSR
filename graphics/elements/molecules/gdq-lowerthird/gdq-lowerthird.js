var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Power4, Power3, TweenLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import Random from "../../../../shared/lib/vendor/random.js";
const {
  customElement,
  property
} = Polymer.decorators;
const NAME_ELEMENT_ENTRANCE_STAGGER = 0.15;
const interviewNames = nodecg.Replicant('interview:names');
const lowerthirdShowing = nodecg.Replicant('interview:lowerthirdShowing');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */

let GDQLowerthirdElement = class GDQLowerthirdElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   */
  constructor() {
    super(...arguments);
    this.preview = false;
    this.tl = new TimelineLite({
      autoRemoveChildren: true
    });
  }

  ready() {
    super.ready();
    this._$nameElements = Array.from(this.shadowRoot.querySelectorAll('#mainNames gdq-lowerthird-nameplate, #hostName'));

    if (!this.preview && !window.__SCREENSHOT_TESTING__) {
      lowerthirdShowing.on('change', newVal => {
        if (newVal) {
          this.tl.add(this.show());
        } else {
          this.tl.add(this.hide());
        }
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();
    Polymer.RenderStatus.beforeNextRender(this, () => {
      this.reset();
    });
  }

  updatePreview(names) {
    this.show(names).progress(1);
  }

  show(prefilledNames) {
    const tl = new TimelineLite();
    const names = prefilledNames ? prefilledNames : interviewNames.value && interviewNames.value.filter(({
      name
    }) => {
      return Boolean(name) && name.trim().length > 0;
    });

    if (!names || names.length <= 0) {
      return tl;
    }

    const nameElementsToShow = this._$nameElements.slice(0, names.length);

    const randomizedNameElements = Random.shuffle(Random.engines.browserCrypto, nameElementsToShow.slice(0).concat([this.$.header]));
    this.reset();
    tl.call(() => {
      this.numNames = names.length;
    }); // Set names

    tl.call(() => {
      this._$nameElements.forEach((nameElement, index) => {
        nameElement.hidden = !names[index] || !names[index].name;

        if (!nameElement.hidden) {
          nameElement.name = names[index].name;
          nameElement.title = names[index].title;
        }
      });
    }, undefined, null, '+=0.3'); // Give time for interviewNames replicant to update.

    tl.to(this.$.background, 0.75, {
      y: '0%',
      ease: Power4.easeOut
    });
    tl.addLabel('nameElementsEnter', '+=0');
    tl.call(() => {// tl.timeScale(0.2);
    }, undefined, null, 'nameElementsEnter');
    randomizedNameElements.forEach((nameElem, index) => {
      tl.add(nameElem.enter(), `nameElementsEnter+=${NAME_ELEMENT_ENTRANCE_STAGGER * index}`);
    });
    return tl;
  }

  hide() {
    const tl = new TimelineLite();
    tl.to(this, 0.5, {
      y: '100%',
      ease: Power3.easeIn
    });
    return tl;
  }

  reset() {
    this.$.header.reset();

    this._$nameElements.forEach(nameElem => nameElem.reset());

    TweenLite.set(this.$.background, {
      y: '100%'
    });
    TweenLite.set(this, {
      y: '0%',
      opacity: 1
    });
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQLowerthirdElement.prototype, "preview", void 0);

__decorate([property({
  type: Number,
  reflectToAttribute: true
})], GDQLowerthirdElement.prototype, "numNames", void 0);

GDQLowerthirdElement = __decorate([customElement('gdq-lowerthird')], GDQLowerthirdElement);
export default GDQLowerthirdElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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