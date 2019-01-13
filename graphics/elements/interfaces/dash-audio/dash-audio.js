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
const checklist = nodecg.Replicant('checklist');
const checklistComplete = nodecg.Replicant('checklistComplete');
const currentRun = nodecg.Replicant('currentRun');
const stopwatch = nodecg.Replicant('stopwatch');
let DashAudioElement = class DashAudioElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    checklistComplete.on('change', newVal => {
      const statusDiv = this.$.checklistStatus;

      if (newVal) {
        statusDiv.style.backgroundColor = '#cfffcf';
        statusDiv.innerText = 'READY TO START';
      } else {
        statusDiv.style.backgroundColor = '#ffe2e2';
        statusDiv.innerText = 'NOT READY YET';
      }
    });
    currentRun.on('change', newVal => {
      this.$['currentRun-name'].innerHTML = newVal.name.replace('\\n', '<br/>').trim();
      this.runners = newVal.runners;
    });
    stopwatch.on('change', newVal => {
      this.stopwatchState = newVal.state;
      this.stopwatchTime = newVal.time.formatted;
      this.stopwatchResults = newVal.results;
    });
    this._checkboxChanged = this._checkboxChanged.bind(this);
    this.addEventListener('change', this._checkboxChanged);
  }

  calcRunnersString(runners) {
    let concatenatedRunners = runners[0].name;

    if (runners.length >= 1) {
      concatenatedRunners = runners.slice(1).reduce((prev, curr, index, array) => {
        if (index === array.length - 1) {
          return `${prev} & ${curr.name}`;
        }

        return `${prev}, ${curr.name}`;
      }, concatenatedRunners);
    }

    return concatenatedRunners;
  }

  _checkboxChanged(e) {
    if (!checklist.value) {
      return;
    }

    const target = e.composedPath()[0];
    const category = target.getAttribute('category');
    const name = target.innerText.trim();
    checklist.value[category].find(task => {
      if (task.name === name) {
        task.complete = Boolean(target.checked);
        return true;
      }

      return false;
    });
  }

};

__decorate([property({
  type: Array
})], DashAudioElement.prototype, "runners", void 0);

__decorate([property({
  type: String
})], DashAudioElement.prototype, "stopwatchTime", void 0);

__decorate([property({
  type: String
})], DashAudioElement.prototype, "stopwatchState", void 0);

__decorate([property({
  type: Array
})], DashAudioElement.prototype, "stopwatchResults", void 0);

DashAudioElement = __decorate([customElement('dash-audio')], DashAudioElement);
export default DashAudioElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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