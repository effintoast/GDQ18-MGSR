var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const checklist = nodecg.Replicant('checklist');
const checklistComplete = nodecg.Replicant('checklistComplete');
const currentRun = nodecg.Replicant('currentRun');
const stopwatch = nodecg.Replicant('stopwatch');
let DashAudioElement = class DashAudioElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        checklist.on('change', newVal => {
            this.audioEngineerDuties = newVal.audioEngineerDuties;
        });
        checklistComplete.on('change', newVal => {
            const statusDiv = this.$.checklistStatus;
            if (newVal) {
                statusDiv.style.backgroundColor = '#cfffcf';
                statusDiv.innerText = 'READY TO START';
            }
            else {
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
__decorate([
    property({ type: Array })
], DashAudioElement.prototype, "audioEngineerDuties", void 0);
__decorate([
    property({ type: Array })
], DashAudioElement.prototype, "runners", void 0);
__decorate([
    property({ type: String })
], DashAudioElement.prototype, "stopwatchTime", void 0);
__decorate([
    property({ type: String })
], DashAudioElement.prototype, "stopwatchState", void 0);
__decorate([
    property({ type: Array })
], DashAudioElement.prototype, "stopwatchResults", void 0);
DashAudioElement = __decorate([
    customElement('dash-audio')
], DashAudioElement);
export default DashAudioElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1hdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtYXVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFDM0QsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO0FBQ25GLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQU0sWUFBWSxDQUFDLENBQUM7QUFDdkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxXQUFXLENBQUMsQ0FBQztBQUczRCxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQWlCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBNkJqRixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDdkMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFpQyxDQUFDO1lBQzNELElBQUksTUFBTSxFQUFFO2dCQUNYLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztnQkFDNUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQzthQUN2QztpQkFBTTtnQkFDTixTQUFTLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FB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