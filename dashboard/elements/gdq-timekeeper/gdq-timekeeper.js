var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQTimekeeperElement.prototype, "checklistIncomplete", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], GDQTimekeeperElement.prototype, "state", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQTimekeeperElement.prototype, "paused", void 0);
__decorate([
    property({ type: Array })
], GDQTimekeeperElement.prototype, "results", void 0);
__decorate([
    property({ type: Boolean })
], GDQTimekeeperElement.prototype, "coop", void 0);
__decorate([
    property({ type: Boolean })
], GDQTimekeeperElement.prototype, "notStarted", void 0);
__decorate([
    property({ type: Array })
], GDQTimekeeperElement.prototype, "runners", void 0);
__decorate([
    property({ type: String })
], GDQTimekeeperElement.prototype, "time", void 0);
GDQTimekeeperElement = __decorate([
    customElement('gdq-timekeeper')
], GDQTimekeeperElement);
export default GDQTimekeeperElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXRpbWVrZWVwZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtdGltZWtlZXBlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxXQUFXLENBQUMsQ0FBQztBQUMzRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFhLFlBQVksQ0FBQyxDQUFDO0FBQzlELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBb0IsbUJBQW1CLENBQUMsQ0FBQztBQUduRixJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFEakU7O1FBR0Msd0JBQW1CLEdBQUcsSUFBSSxDQUFDO0lBOEg1QixDQUFDO0lBdkdBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1A7WUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUMzQixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxJ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