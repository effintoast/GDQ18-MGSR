var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GDQBreakScheduleRunElement_1;
import { TweenLite, TimelineMax, Sine } from 'gsap';
const { customElement, property } = Polymer.decorators;
const DISPALY_DURATION = nodecg.bundleConfig.displayDuration;
/**
 * @customElement
 * @polymer
 */
let GDQBreakScheduleRunElement = GDQBreakScheduleRunElement_1 = class GDQBreakScheduleRunElement extends Polymer.MutableData(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.upNext = false;
        this._currentRunnerIndex = 0;
    }
    ready() {
        super.ready();
        this.hidden = true;
    }
    _runChanged(newVal) {
        this.hidden = !newVal;
        if (!newVal) {
            return;
        }
        const WIDTH_ADDED_BY_BORDERS = 2;
        const PADDING_OF_INFO_RUNNER = 48;
        const infoRunnerElem = this.$['info-runner'];
        this._killRunnerLoopTimeline();
        infoRunnerElem.maxWidth = 0;
        infoRunnerElem.text = this._getLongestName(newVal.runners);
        TweenLite.set(infoRunnerElem, { opacity: 1, width: 'auto' });
        TweenLite.set(infoRunnerElem.$.fittedContent, { scaleX: 1 });
        Polymer.RenderStatus.beforeNextRender(this, () => {
            infoRunnerElem.maxWidth =
                this.$.info.clientWidth -
                    WIDTH_ADDED_BY_BORDERS -
                    PADDING_OF_INFO_RUNNER -
                    this.$['info-category'].clientWidth;
            infoRunnerElem.style.width = `${this.$['info-runner'].clientWidth - PADDING_OF_INFO_RUNNER}px`;
            infoRunnerElem.text = newVal.runners[0].name;
            if (newVal.runners.length > 1) {
                this._killRunnerLoopTimeline();
                this._runnerTimeline = this._createRunnerLoopTimeline(newVal.runners);
            }
        });
    }
    _createRunnerLoopTimeline(runners) {
        const tl = new TimelineMax({ repeat: -1 });
        runners.slice(1).concat([runners[0]]).forEach(runner => {
            tl.to(this.$['info-runner'], 0.5, {
                opacity: 0,
                ease: Sine.easeInOut
            }, `+=${DISPALY_DURATION}`);
            tl.call(() => {
                this.$['info-runner'].text = runner.name;
            });
            tl.to(this.$['info-runner'], 0.5, {
                opacity: 1,
                ease: Sine.easeInOut
            }, '+=0.1');
        });
        return tl;
    }
    _killRunnerLoopTimeline() {
        if (this._runnerTimeline) {
            this._runnerTimeline.kill();
            this._runnerTimeline = null;
        }
    }
    _formatRunName(runName) {
        if (!runName || typeof runName !== 'string') {
            return '?';
        }
        return runName.replace(/\\n/g, ' ');
    }
    _getLongestName(runners) {
        return runners.reduce((accumulator, currentValue) => {
            if (!currentValue || !currentValue.name) {
                return accumulator;
            }
            return currentValue.name.length > accumulator.length ? currentValue.name : accumulator;
        }, '');
    }
};
__decorate([
    property({ type: Object, observer: GDQBreakScheduleRunElement_1.prototype._runChanged })
], GDQBreakScheduleRunElement.prototype, "run", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQBreakScheduleRunElement.prototype, "upNext", void 0);
__decorate([
    property({ type: Number })
], GDQBreakScheduleRunElement.prototype, "_currentRunnerIndex", void 0);
GDQBreakScheduleRunElement = GDQBreakScheduleRunElement_1 = __decorate([
    customElement('gdq-break-schedule-run')
], GDQBreakScheduleRunElement);
export default GDQBreakScheduleRunElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLXNjaGVkdWxlLXJ1bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1icmVhay1zY2hlZHVsZS1ydW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUVsRCxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQztBQUU3RDs7O0dBR0c7QUFFSCxJQUFxQiwwQkFBMEIsa0NBQS9DLE1BQXFCLDBCQUEyQixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUw1Rjs7O09BR0c7SUFDSDs7UUFNQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBR2Ysd0JBQW1CLEdBQUcsQ0FBQyxDQUFDO0lBd0Z6QixDQUFDO0lBcEZBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVyxDQUFDLE1BQVc7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1osT0FBTztTQUNQO1FBRUQsTUFBTSxzQkFBc0IsR0FBRyxDQUFDLENBQUM7UUFDakMsTUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDbEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQW9CLENBQUM7UUFFaEUsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7UUFFOUIsY0FBc0IsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLGNBQXNCLENBQUMsSUFBSSxHQUFHLElBQUks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