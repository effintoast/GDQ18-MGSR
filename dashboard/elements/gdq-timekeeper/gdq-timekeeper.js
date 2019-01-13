var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
const stopwatch = nodecg.Replicant('stopwatch');
const currentRun = nodecg.Replicant('currentRun');
const checklistComplete = nodecg.Replicant('checklistComplete');
let GDQTimekeeperElement = class GDQTimekeeperElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.checklistIncomplete = true;
  }

  ready() {
    super.ready();
    stopwatch.on('change', this.stopwatchChanged.bind(this));
    currentRun.on('change', newVal => {
      if (!newVal) {
        return;
      }

      const runners = newVal.runners.slice(0);
      runners.length = 4;

      for (let i = 0; i < 4; i++) {
        runners[i] = runners[i] || false;
      }

      this.runners = runners;
      this.coop = newVal.coop;
    });
    checklistComplete.on('change', newVal => {
      this.checklistIncomplete = !newVal;
    });
  }

  stopwatchChanged(newVal) {
    if (!newVal) {
      return;
    }

    this.state = newVal.state;
    this.time = newVal.time.formatted;
    this.results = newVal.results.slice(0);
    this.notStarted = newVal.state === 'not_started';
    this.paused = newVal.state === 'paused';
  }

  confirmReset() {
    this.$.resetDialog.open();
  }

  startTimer() {
    nodecg.sendMessage('startTimer');
  }

  stopTimer() {
    nodecg.sendMessage('stopTimer');
  }

  resetTimer() {
    nodecg.sendMessage('resetTimer');
  }

  calcStartDisabled(checklistIncomplete, state) {
    return checklistIncomplete || state === 'running' || state === 'finished';
  }

  calcStartText(state) {
    switch (state) {
      case 'paused':
        return 'Resume';

      default:
        return 'Start';
    }
  }

  calcPauseDisabled(state) {
    return state !== 'running';
  }

  editMasterTime() {
    this.$['editDialog-text'].textContent = 'Enter a new master time.';
    this.$.editDialog.setAttribute('data-index', 'master');
    this.$['editDialog-input'].value = this.time;
    this.$.editDialog.open();
  }

  saveEditedTime() {
    const inputEl = this.$['editDialog-input'];
    nodecg.sendMessage('editTime', {
      index: this.$.editDialog.getAttribute('data-index'),
      newTime: inputEl.value
    });
    inputEl.value = '';
  }

  editRunnerTime(e) {
    const model = e.model;
    this.$['editDialog-text'].innerHTML = `Enter a new final time for <b>${model.runner.name}.</b>`;
    this.$.editDialog.setAttribute('data-index', model.index);
    const result = this.results[model.index];

    if (result) {
      this.$['editDialog-input'].value = result.time.formatted;
      this.$.editDialog.open();
    }
  }

  editCoopTime() {
    this.$['editDialog-text'].innerHTML = 'Enter a new final time for <b>all runners.</b>';
    this.$.editDialog.setAttribute('data-index', '0');
    const result = this.results[0];

    if (result) {
      this.$['editDialog-input'].value = result.time.formatted;
      this.$.editDialog.open();
    }
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQTimekeeperElement.prototype, "checklistIncomplete", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], GDQTimekeeperElement.prototype, "state", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], GDQTimekeeperElement.prototype, "paused", void 0);

__decorate([property({
  type: Array
})], GDQTimekeeperElement.prototype, "results", void 0);

__decorate([property({
  type: Boolean
})], GDQTimekeeperElement.prototype, "coop", void 0);

__decorate([property({
  type: Boolean
})], GDQTimekeeperElement.prototype, "notStarted", void 0);

__decorate([property({
  type: Array
})], GDQTimekeeperElement.prototype, "runners", void 0);

__decorate([property({
  type: String
})], GDQTimekeeperElement.prototype, "time", void 0);

GDQTimekeeperElement = __decorate([customElement('gdq-timekeeper')], GDQTimekeeperElement);
export default GDQTimekeeperElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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