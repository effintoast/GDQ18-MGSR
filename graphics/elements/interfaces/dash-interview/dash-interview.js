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
const compositingOBSStatus = nodecg.Replicant('compositingOBS:websocket');
const compositingOBSTransitioning = nodecg.Replicant('compositingOBS:transitioning');
const interviewStopwatch = nodecg.Replicant('interview:stopwatch');
const lowerthirdTimeRemaining = nodecg.Replicant('interview:lowerthirdTimeRemaining');
const programScene = nodecg.Replicant('compositingOBS:programScene');
const questionShowing = nodecg.Replicant('interview:questionShowing');
const questionSortMap = nodecg.Replicant('interview:questionSortMap');
const questionTimeRemaining = nodecg.Replicant('interview:questionTimeRemaining');
const showPrizesOnMonitorRep = nodecg.Replicant('interview:showPrizesOnMonitor');
const baseClass = Polymer.SCDataBindingHelpers(Polymer.MutableData(Polymer.Element));
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 * @appliesMixin Polymer.SCDataBindingHelpers
 */

let DashInterviewElement = class DashInterviewElement extends baseClass {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   * @appliesMixin Polymer.SCDataBindingHelpers
   */
  constructor() {
    super(...arguments);
    this._programSceneName = '';
    this._markingTopQuestionAsDone = false;
    this._sendingTransitionCommand = false;
  }

  ready() {
    super.ready();
    lowerthirdTimeRemaining.on('change', newVal => {
      this.lowerthirdTimeRemaining = newVal;
    });
    questionTimeRemaining.on('change', newVal => {
      this.questionTimeRemaining = newVal;
    });
    compositingOBSTransitioning.on('change', newVal => {
      this._transitioning = newVal;
    });
    programScene.on('change', newVal => {
      this._programSceneName = newVal ? newVal.name : '';
    });
    compositingOBSStatus.on('change', newVal => {
      this._disconnectedFromOBS = Boolean(!newVal || newVal.status !== 'connected');
    });
    interviewStopwatch.on('change', newVal => {
      this._timeElapsed = newVal.time.formatted.split('.')[0];
    });
    showPrizesOnMonitorRep.on('change', newVal => {
      this._modeToggleChecked = !newVal;
    });
    this.addEventListener('error-toast', event => {
      this.$.toast.showErrorToast(event.detail.text);
    });
  }

  showLowerthird() {
    this.$.lowerthirdControls.autoLowerthird();
  }

  hideLowerthird() {
    this.$.lowerthirdControls.hideLowerthird();
  }

  showQuestion() {
    if (!questionSortMap.value) {
      return;
    }

    this._markingTopQuestionAsDone = true;
    nodecg.sendMessage('pulseInterviewQuestion', questionSortMap.value[0], error => {
      this._markingTopQuestionAsDone = false;

      if (error) {
        this.$.toast.showErrorToast('Failed to load next interview question.');
        nodecg.log.error(error);
      }
    });
  }

  hideQuestion() {
    questionShowing.value = false;
    this._markingTopQuestionAsDone = false;
  }

  openInterviewTransitionConfirmation() {
    this.$.interviewTransitionConfirmation.open();
  }

  async transitionToInterview() {
    return this.transitionToScene('Interview');
  }

  async transitionToBreak() {
    return this.transitionToScene('Break');
  }

  async transitionToScene(sceneName, transitionName = 'Blank Stinger') {
    const toastElem = this.$.toast;
    this._sendingTransitionCommand = true;

    try {
      await nodecg.sendMessage('compositingOBS:transition', {
        name: transitionName,
        sceneName
      });
      toastElem.showSuccessToast(`Successfully started transition to "${sceneName}".`);
    } catch (error) {
      let errorString = error;

      if (error.message) {
        errorString = error.message;
      } else if (error.error) {
        errorString = error.error;
      }

      toastElem.showErrorToast('Failed to transition: ' + errorString);
    }

    this._sendingTransitionCommand = false;
  }

  _computeTransitionToBreakDisabled(_sendingTransitionCommand, _transitioning, _disconnectedFromOBS, _programSceneName) {
    return _sendingTransitionCommand || _transitioning || _disconnectedFromOBS || _programSceneName === 'Break';
  }

  _any(...args) {
    return args.find(arg => Boolean(arg));
  }

  _handleModeToggleChange(e) {
    showPrizesOnMonitorRep.value = !e.target.checked;
  }

};

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], DashInterviewElement.prototype, "lowerthirdShowing", void 0);

__decorate([property({
  type: Number
})], DashInterviewElement.prototype, "lowerthirdTimeRemaining", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], DashInterviewElement.prototype, "questionShowing", void 0);

__decorate([property({
  type: Number
})], DashInterviewElement.prototype, "questionTimeRemaining", void 0);

__decorate([property({
  type: String
})], DashInterviewElement.prototype, "_programSceneName", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewElement.prototype, "_markingTopQuestionAsDone", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewElement.prototype, "_sendingTransitionCommand", void 0);

__decorate([property({
  type: String
})], DashInterviewElement.prototype, "_errorToastText", void 0);

__decorate([property({
  type: String
})], DashInterviewElement.prototype, "_successToastText", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewElement.prototype, "_transitioning", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewElement.prototype, "_disconnectedFromOBS", void 0);

__decorate([property({
  type: Boolean,
  computed: '_computeTransitionToBreakDisabled(_sendingTransitionCommand, _transitioning, _disconnectedFromOBS, _programSceneName)'
})], DashInterviewElement.prototype, "_transitionToBreakDisabled", void 0);

__decorate([property({
  type: String
})], DashInterviewElement.prototype, "_timeElapsed", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewElement.prototype, "_modeToggleChecked", void 0);

DashInterviewElement = __decorate([customElement('dash-interview')], DashInterviewElement);
export default DashInterviewElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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