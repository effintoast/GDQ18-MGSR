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
const total = nodecg.Replicant('total');
const currentRun = nodecg.Replicant('currentRun');
const nextRun = nodecg.Replicant('nextRun');
const currentLayout = nodecg.Replicant('gdq:currentLayout');
const throwIncoming = nodecg.Replicant('interview:throwIncoming');
const interviewStopwatch = nodecg.Replicant('interview:stopwatch');
const checklistComplete = nodecg.Replicant('checklistComplete');
const prizeModeRep = nodecg.Replicant('interview:showPrizesOnMonitor');
let DashInterviewMonitorElement = class DashInterviewMonitorElement extends Polymer.MutableData(Polymer.Element) {
  constructor() {
    super(...arguments);
    this.throwIncoming = false;
    this.prizeMode = false;
  }

  ready() {
    super.ready();
    const totalAmountElem = this.$['total-amount'];

    totalAmountElem.displayValueTransform = displayValue => {
      return displayValue.toLocaleString('en-US', {
        maximumFractionDigits: 0
      });
    };

    total.on('change', newVal => {
      totalAmountElem.value = newVal.raw;
    });
    this.updateUpNextDisplay = this.updateUpNextDisplay.bind(this);
    currentLayout.on('change', this.updateUpNextDisplay);
    currentRun.on('change', this.updateUpNextDisplay);
    nextRun.on('change', this.updateUpNextDisplay);
    throwIncoming.on('change', newVal => {
      this.throwIncoming = newVal;
    });
    interviewStopwatch.on('change', newVal => {
      this.timeElapsed = newVal.time.formatted.split('.')[0];
    });
    checklistComplete.on('change', newVal => {
      const checklistStatusDiv = this.$.checklistStatus;

      if (newVal) {
        checklistStatusDiv.style.backgroundColor = '#cfffcf';
        checklistStatusDiv.innerText = 'DONE WITH SETUP';
      } else {
        checklistStatusDiv.style.backgroundColor = '#ffe2e2';
        checklistStatusDiv.innerText = 'STILL DOING SETUP';
      }
    });
    prizeModeRep.on('change', newVal => {
      this.prizeMode = newVal;
    });
  }

  updateUpNextDisplay() {
    let upNextRun = nextRun.value;

    if (currentLayout.value === 'break' || currentLayout.value === 'interview') {
      upNextRun = currentRun.value;
    }

    if (!upNextRun) {
      return;
    }

    this.upNextRunName = upNextRun.name.replace('\\n', ' ').trim();
    let concatenatedRunners;

    if (upNextRun.runners.length === 1) {
      concatenatedRunners = upNextRun.runners[0].name;
    } else {
      concatenatedRunners = upNextRun.runners.slice(1).reduce((prev, curr, index, array) => {
        if (index === array.length - 1) {
          return `${prev} &<br/>${curr.name}`;
        }

        return `${prev},<br/>${curr.name}`;
      }, upNextRun.runners[0].name);
    }

    this.$.nextRunners.innerHTML = String(concatenatedRunners);
  }

  _calcSelectedPage(prizeMode) {
    return prizeMode ? 1 : 0;
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], DashInterviewMonitorElement.prototype, "throwIncoming", void 0);

__decorate([property({
  type: String
})], DashInterviewMonitorElement.prototype, "timeElapsed", void 0);

__decorate([property({
  type: String
})], DashInterviewMonitorElement.prototype, "upNextRunName", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], DashInterviewMonitorElement.prototype, "prizeMode", void 0);

DashInterviewMonitorElement = __decorate([customElement('dash-interview-monitor')], DashInterviewMonitorElement);
export default DashInterviewMonitorElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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