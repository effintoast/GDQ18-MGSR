var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQTimerElement_1;
import { TimelineLite, Power2 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const stopwatch = nodecg.Replicant('stopwatch');
let GDQTimerElement = GDQTimerElement_1 = class GDQTimerElement extends Polymer.Element {
  ready() {
    super.ready();
    const timerTL = new TimelineLite({
      autoRemoveChildren: true
    });
    stopwatch.on('change', (newVal, oldVal) => {
      this.hours = newVal.time.hours;
      this.minutes = newVal.time.minutes;
      this.seconds = newVal.time.seconds;
      this.milliseconds = newVal.time.milliseconds;

      if (oldVal) {
        if (newVal.state === 'running' && oldVal.state !== 'running') {
          timerTL.from(this.$.startFlash, 1, {
            opacity: 0.5,
            ease: Power2.easeIn
          });
        } else if (newVal.state !== 'running' && newVal.state !== oldVal.state) {
          timerTL.clear();
          this.$.startFlash.style.opacity = '0';
        }

        if (newVal.state === 'finished' && oldVal.state !== 'finished') {
          timerTL.from(this.$.startFlash, 1, {
            opacity: 0.5,
            ease: Power2.easeIn
          });
        }
      }

      this.notStarted = newVal.state === 'not_started';
      this.paused = newVal.state === 'paused';
      this.finished = newVal.state === 'finished';
    });
  }

  pausedChanged(newVal) {
    if (newVal && this.finished) {
      this.finished = false;
    }
  }

  finishedChanged(newVal) {
    if (newVal && this.paused) {
      this.paused = false;
    }
  }

  _lessThanEqZero(num) {
    return num <= 0;
  }

  _padTime(num) {
    return String(num).padStart(2, '0');
  }

  _formatMilliseconds(milliseconds) {
    return Math.floor(milliseconds / 100);
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQTimerElement.prototype, "notStarted", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  observer: GDQTimerElement_1.prototype.pausedChanged
})], GDQTimerElement.prototype, "paused", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  observer: GDQTimerElement_1.prototype.finishedChanged
})], GDQTimerElement.prototype, "finished", void 0);

__decorate([property({
  type: Number
})], GDQTimerElement.prototype, "hours", void 0);

__decorate([property({
  type: Number
})], GDQTimerElement.prototype, "minutes", void 0);

__decorate([property({
  type: Number
})], GDQTimerElement.prototype, "seconds", void 0);

__decorate([property({
  type: Number
})], GDQTimerElement.prototype, "milliseconds", void 0);

GDQTimerElement = GDQTimerElement_1 = __decorate([customElement('gdq-timer')], GDQTimerElement);
export default GDQTimerElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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