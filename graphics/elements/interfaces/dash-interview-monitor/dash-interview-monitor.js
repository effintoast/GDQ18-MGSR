var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
            }
            else {
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
        }
        else {
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
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], DashInterviewMonitorElement.prototype, "throwIncoming", void 0);
__decorate([
    property({ type: String })
], DashInterviewMonitorElement.prototype, "timeElapsed", void 0);
__decorate([
    property({ type: String })
], DashInterviewMonitorElement.prototype, "upNextRunName", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], DashInterviewMonitorElement.prototype, "prizeMode", void 0);
DashInterviewMonitorElement = __decorate([
    customElement('dash-interview-monitor')
], DashInterviewMonitorElement);
export default DashInterviewMonitorElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbW9uaXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBTUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVEsT0FBTyxDQUFDLENBQUM7QUFDL0MsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBTSxZQUFZLENBQUMsQ0FBQztBQUN2RCxNQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFNLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQXFCLG1CQUFtQixDQUFDLENBQUM7QUFDaEYsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBVSx5QkFBeUIsQ0FBQyxDQUFDO0FBQzNFLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBdUIscUJBQXFCLENBQUMsQ0FBQztBQUN6RixNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVUsbUJBQW1CLENBQUMsQ0FBQztBQUN6RSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLCtCQUErQixDQUFDLENBQUM7QUFHaEYsSUFBcUIsMkJBQTJCLEdBQWhELE1BQXFCLDJCQUE0QixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUQ3Rjs7UUFHQyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQVN0QixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBMkVuQixDQUFDO0lBekVBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBOEIsQ0FBQztRQUU1RSxlQUFlLENBQUMscUJBQXFCLEdBQUcsWUFBWSxDQUFDLEVBQUU7WUFDdEQsT0FBTyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRTtnQkFDM0MscUJBQXFCLEVBQUUsQ0FBQzthQUN4QixDQUFDLENBQUM7UUFDSixDQUFDLENBQUM7UUFDRixLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMzQixlQUFlLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNyRCxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUUvQyxhQUFhLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUVILGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUM7UUFFSCxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3ZDLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxlQUFpQyxDQUFDO1lBQ3BFLElBQUksTUFBTSxFQUFFO2dCQUNYLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO2dCQUNyRCxrQkFBa0IsQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7YUFDakQ7aUJBQU07Z0JBQ04sa0JBQWtCLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7Z0JBQ3JELGtCQUFrQixDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQzthQUNuRDtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsbUJBQW1CO1FBQ2xCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxhQUFhLENBQUMsS0FBSyxLQUFLLE9BQU8sSUFBSSxhQUFhLENBQUMsS0FBSyxLQUFLLFdBQVcsRUFBRTtZQUMzRSxTQUFTLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztTQUM3QjtRQUVELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUUvRCxJQUFJLG1CQUFtQixDQUFDO1FBQ3hCLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ25DLG1CQUFtQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1NBQ2hEO2FBQU07WUFDTixtQkFBbUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDcEYsSUFBSSxLQUFLLEtBQUssS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQy9CLE9BQU8sR0FBRyxJQUFJLFVBQVUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNwQztnQkFFRCxPQUFPLEdBQUcsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM5QjtRQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBOEIsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUVELGlCQUFpQixDQUFDLFNBQWtCO1FBQ25DLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQixDQUFDO0NBQ0QsQ0FBQTtBQXBGQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUM7a0VBQzlCO0FBR3RCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2dFQUNMO0FBR3BCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2tFQUNIO0FBR3RCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQzs4REFDbEM7QUFYRSwyQkFBMkI7SUFEL0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0dBQ25CLDJCQUEyQixDQXNGL0M7ZUF0Rm9CLDJCQUEyQiJ9