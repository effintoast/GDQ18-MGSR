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
const checklistComplete = nodecg.Replicant('checklistComplete');
const stopwatch = nodecg.Replicant('stopwatch');
const currentRun = nodecg.Replicant('currentRun');
/**
 * @customElement
 * @polymer
 */

let DashHostCurrentrunElement = class DashHostCurrentrunElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   */
  constructor() {
    super(...arguments);
    this.checklistComplete = false;
  }

  ready() {
    super.ready();
    checklistComplete.on('change', newVal => {
      this.checklistComplete = newVal;
    });
    currentRun.on('change', newVal => {
      this.$.currentRunName.innerHTML = newVal.name.replace('\\n', '<br/>').trim();
      this.runners = newVal.runners;
    });
    stopwatch.on('change', newVal => {
      this.stopwatchTime = newVal.time.formatted;
      this.stopwatchResults = newVal.results;
    });
  }

  isValidResult(result, index, runners) {
    const runner = runners[index];
    return result && result !== null && runner && runner.name;
  }

  _calcStatusText(newVal) {
    return newVal ? 'READY' : 'NOT READY';
  }

  _unionRunnersAndResults(runners, results) {
    if (!runners || !results) {
      return;
    }

    return runners.map((runner, index) => {
      return {
        runner,
        result: results[index]
      };
    });
  }

  _calcRunnerStatus(result) {
    if (result && result.time) {
      return result.time.formatted;
    }

    return 'Running';
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], DashHostCurrentrunElement.prototype, "checklistComplete", void 0);

__decorate([property({
  type: String
})], DashHostCurrentrunElement.prototype, "stopwatchTime", void 0);

__decorate([property({
  type: Array
})], DashHostCurrentrunElement.prototype, "stopwatchResults", void 0);

__decorate([property({
  type: Array
})], DashHostCurrentrunElement.prototype, "runners", void 0);

DashHostCurrentrunElement = __decorate([customElement('dash-host-currentrun')], DashHostCurrentrunElement);
export default DashHostCurrentrunElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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