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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1hdWRpby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtYXVkaW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBS0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFDM0QsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO0FBQ25GLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQU0sWUFBWSxDQUFDLENBQUM7QUFDdkQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxXQUFXLENBQUMsQ0FBQztBQUczRCxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQWlCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBNEJqRixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBR2QsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGVBQWlDLENBQUM7WUFDM0QsSUFBSSxNQUFNLEVBQUU7Z0JBQ1gsU0FBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUM1QyxTQUFTLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNOLFNBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztnQkFDNUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxlQUFlLENBQUM7YUFDdEM7UUFDRixDQUFDLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxF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