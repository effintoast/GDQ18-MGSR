var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
            return { runner, result: results[index] };
        });
    }
    _calcRunnerStatus(result) {
        if (result && result.time) {
            return result.time.formatted;
        }
        return 'Running';
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], DashHostCurrentrunElement.prototype, "checklistComplete", void 0);
__decorate([
    property({ type: String })
], DashHostCurrentrunElement.prototype, "stopwatchTime", void 0);
__decorate([
    property({ type: Array })
], DashHostCurrentrunElement.prototype, "stopwatchResults", void 0);
__decorate([
    property({ type: Array })
], DashHostCurrentrunElement.prototype, "runners", void 0);
DashHostCurrentrunElement = __decorate([
    customElement('dash-host-currentrun')
], DashHostCurrentrunElement);
export default DashHostCurrentrunElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LWN1cnJlbnRydW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtY3VycmVudHJ1bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFvQixtQkFBbUIsQ0FBQyxDQUFDO0FBQ25GLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFDM0QsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBTSxZQUFZLENBQUMsQ0FBQztBQUV2RDs7O0dBR0c7QUFFSCxJQUFxQix5QkFBeUIsR0FBOUMsTUFBcUIseUJBQTBCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBTDNGOzs7T0FHRztJQUNIOztRQUdDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztJQXVEM0IsQ0FBQztJQTVDQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3RSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQzNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxNQUE4QixFQUFFLEtBQWEsRUFBRSxPQUFpQjtRQUM3RSxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFXLENBQUM7UUFDeEMsT0FBTyxNQUFNLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQztJQUMzRCxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWU7UUFDOUIsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxPQUFrQixFQUFFLE9BQXlCO1FBQ3BFLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDekIsT0FBTztTQUNQO1FBRUQsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ3BDLE9BQU8sRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFHLE9BQWUsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGlCQUFpQixDQUFDLE1BQXVCO1FBQ3hDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDMUIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUM3QjtRQUVELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7Q0FDRCxDQUFBO0FBdkRBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztvRUFDMUI7QUFHMUI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7Z0VBQ0g7QUFHdEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7bUVBQ3FCO0FBRzdDO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOzBEQUNOO0FBWEUseUJBQXlCO0lBRDdDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztHQUNqQix5QkFBeUIsQ0F5RDdDO2VBekRvQix5QkFBeUIifQ==