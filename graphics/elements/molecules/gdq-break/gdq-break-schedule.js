var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Sine } from 'gsap';
const { customElement, property } = Polymer.decorators;
const currentRun = nodecg.Replicant('currentRun');
const schedule = nodecg.Replicant('schedule');
/**
 * @customElement
 * @polymer
 */
let GDQBreakScheduleElement = class GDQBreakScheduleElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentRun.on('change', () => {
            this.update();
        });
        schedule.on('change', () => {
            this.update();
        });
        this._$runs = this.shadowRoot.querySelectorAll('gdq-break-schedule-run');
    }
    update() {
        this._updateDebouncer = Polymer.Debouncer.debounce(this._updateDebouncer, Polymer.Async.timeOut.after(16), this._update.bind(this));
    }
    _update() {
        const tl = new TimelineLite();
        if (schedule.status !== 'declared' ||
            currentRun.status !== 'declared' ||
            !schedule.value ||
            !currentRun.value) {
            return tl;
        }
        tl.set(this._$runs, { willChange: 'opacity' });
        tl.to(this._$runs, 0.5, {
            opacity: 0,
            ease: Sine.easeInOut
        }, '+=0.25');
        tl.call(() => {
            this.upNext = currentRun.value;
            const onDeckRuns = [];
            schedule.value.some(item => {
                if (item.type !== 'run') {
                    return false;
                }
                if (item.order <= currentRun.value.order) {
                    return false;
                }
                onDeckRuns.push(item);
                return onDeckRuns.length >= 3;
            });
            this.onDeck = onDeckRuns;
        });
        tl.to(this._$runs, 0.5, {
            opacity: 1,
            ease: Sine.easeInOut
        }, '+=0.1');
        tl.set(this._$runs, { clearProps: 'will-change' });
        return tl;
    }
    _getArrayItem(array, index) {
        if (!array) {
            return null;
        }
        return array[index];
    }
};
__decorate([
    property({ type: Object })
], GDQBreakScheduleElement.prototype, "upNext", void 0);
__decorate([
    property({ type: Array })
], GDQBreakScheduleElement.prototype, "onDeck", void 0);
GDQBreakScheduleElement = __decorate([
    customElement('gdq-break-schedule')
], GDQBreakScheduleElement);
export default GDQBreakScheduleElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLXNjaGVkdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLWJyZWFrLXNjaGVkdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQUUsSUFBSSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBSXhDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRCxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFNLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLFVBQVUsQ0FBQyxDQUFDO0FBRTlEOzs7R0FHRztBQUVILElBQXFCLHVCQUF1QixHQUE1QyxNQUFxQix1QkFBd0IsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFVeEYsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyx3QkFBd0IsQ0FBMkMsQ0FBQztJQUNySCxDQUFDO0lBRUQsTUFBTTtRQUNMLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDakQsSUFBSSxDQUFDLGdCQUFnQixFQUNyQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxD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