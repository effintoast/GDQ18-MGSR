var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
        this.addEventListener('error-toast', (event) => {
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
        }
        catch (error) {
            let errorString = error;
            if (error.message) {
                errorString = error.message;
            }
            else if (error.error) {
                errorString = error.error;
            }
            toastElem.showErrorToast('Failed to transition: ' + errorString);
        }
        this._sendingTransitionCommand = false;
    }
    _computeTransitionToBreakDisabled(_sendingTransitionCommand, _transitioning, _disconnectedFromOBS, _programSceneName) {
        return _sendingTransitionCommand ||
            _transitioning ||
            _disconnectedFromOBS ||
            _programSceneName === 'Break';
    }
    _any(...args) {
        return args.find(arg => Boolean(arg));
    }
    _handleModeToggleChange(e) {
        showPrizesOnMonitorRep.value = !e.target.checked;
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], DashInterviewElement.prototype, "lowerthirdShowing", void 0);
__decorate([
    property({ type: Number })
], DashInterviewElement.prototype, "lowerthirdTimeRemaining", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], DashInterviewElement.prototype, "questionShowing", void 0);
__decorate([
    property({ type: Number })
], DashInterviewElement.prototype, "questionTimeRemaining", void 0);
__decorate([
    property({ type: String })
], DashInterviewElement.prototype, "_programSceneName", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewElement.prototype, "_markingTopQuestionAsDone", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewElement.prototype, "_sendingTransitionCommand", void 0);
__decorate([
    property({ type: String })
], DashInterviewElement.prototype, "_errorToastText", void 0);
__decorate([
    property({ type: String })
], DashInterviewElement.prototype, "_successToastText", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewElement.prototype, "_transitioning", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewElement.prototype, "_disconnectedFromOBS", void 0);
__decorate([
    property({
        type: Boolean,
        computed: '_computeTransitionToBreakDisabled(_sendingTransitionCommand, _transitioning, _disconnectedFromOBS, _programSceneName)'
    })
], DashInterviewElement.prototype, "_transitionToBreakDisabled", void 0);
__decorate([
    property({ type: String })
], DashInterviewElement.prototype, "_timeElapsed", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewElement.prototype, "_modeToggleChecked", void 0);
DashInterviewElement = __decorate([
    customElement('dash-interview')
], DashInterviewElement);
export default DashInterviewElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWludGVydmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFrQiwwQkFBMEIsQ0FBQyxDQUFDO0FBQzNGLE1BQU0sMkJBQTJCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBVSw4QkFBOEIsQ0FBQyxDQUFDO0FBQzlGLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxxQkFBcUIsQ0FBQyxDQUFDO0FBQzlFLE1BQU0sdUJBQXVCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBUyxtQ0FBbUMsQ0FBQyxDQUFDO0FBQzlGLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVEsNkJBQTZCLENBQUMsQ0FBQztBQUM1RSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLDJCQUEyQixDQUFDLENBQUM7QUFDL0UsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBNkIsMkJBQTJCLENBQUMsQ0FBQztBQUNsRyxNQUFNLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVMsaUNBQWlDLENBQUMsQ0FBQztBQUMxRixNQUFNLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVUsK0JBQStCLENBQUMsQ0FBQztBQUMxRixNQUFNLFNBQVMsR0FBSSxPQUFlLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQStCLENBQUM7QUFFNUg7Ozs7O0dBS0c7QUFFSCxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsU0FBUztJQVAzRDs7Ozs7T0FLRztJQUNIOztRQWVDLHNCQUFp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