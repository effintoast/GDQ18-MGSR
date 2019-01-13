var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite, Sine } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const currentRun = nodecg.Replicant('currentRun');
const schedule = nodecg.Replicant('schedule');
/**
 * @customElement
 * @polymer
 */

let GDQBreakScheduleElement = class GDQBreakScheduleElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    currentRun.on('change', () => {
      this.update();
    });
    schedule.on('change', () => {
      this.update();
    });
    this._$runs = this.shadowRoot.querySelectorAll('gdq-break-schedule-run');
  }

  update() {
    this._updateDebouncer = Polymer.Debouncer.debounce(this._updateDebouncer, Polymer.Async.timeOut.after(16), this._update.bind(this));
  }

  _update() {
    const tl = new TimelineLite();

    if (schedule.status !== 'declared' || currentRun.status !== 'declared' || !schedule.value || !currentRun.value) {
      return tl;
    }

    tl.set(this._$runs, {
      willChange: 'opacity'
    });
    tl.to(this._$runs, 0.5, {
      opacity: 0,
      ease: Sine.easeInOut
    }, '+=0.25');
    tl.call(() => {
      this.upNext = currentRun.value;
      const onDeckRuns = [];
      schedule.value.some(item => {
        if (item.type !== 'run') {
          return false;
        }

        if (item.order <= currentRun.value.order) {
          return false;
        }

        onDeckRuns.push(item);
        return onDeckRuns.length >= 3;
      });
      this.onDeck = onDeckRuns;
    });
    tl.to(this._$runs, 0.5, {
      opacity: 1,
      ease: Sine.easeInOut
    }, '+=0.1');
    tl.set(this._$runs, {
      clearProps: 'will-change'
    });
    return tl;
  }

  _getArrayItem(array, index) {
    if (!array) {
      return null;
    }

    return array[index];
  }

};

__decorate([property({
  type: Object
})], GDQBreakScheduleElement.prototype, "upNext", void 0);

__decorate([property({
  type: Array
})], GDQBreakScheduleElement.prototype, "onDeck", void 0);

GDQBreakScheduleElement = __decorate([customElement('gdq-break-schedule')], GDQBreakScheduleElement);
export default GDQBreakScheduleElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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