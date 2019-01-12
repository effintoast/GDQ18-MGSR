var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UiRundownElement_1;
const { customElement, property } = Polymer.decorators;
const currentIntermission = nodecg.Replicant('currentIntermission');
const currentRun = nodecg.Replicant('currentRun');
const schedule = nodecg.Replicant('schedule');
const stopwatch = nodecg.Replicant('stopwatch');
let UiRundownElement = UiRundownElement_1 = class UiRundownElement extends Polymer.MutableData(Polymer.Element) {
    constructor() {
        super(...arguments);
        this.maxRunsToShow = 4;
        this.allowScrollback = false;
    }
    ready() {
        super.ready();
        this._debounceUpdateScheduleSlice = this._debounceUpdateScheduleSlice.bind(this);
        this._updateScheduleSlice = this._updateScheduleSlice.bind(this);
        currentIntermission.on('change', (_newVal, _oldVal, operations) => {
            const ignore = operations ?
                operations.every(operation => {
                    return operation.path.endsWith('/state');
                }) :
                false;
            if (ignore) {
                return;
            }
            this._debounceUpdateScheduleSlice();
        });
        currentRun.on('change', this._debounceUpdateScheduleSlice);
        schedule.on('change', this._debounceUpdateScheduleSlice);
        stopwatch.on('change', (newVal, oldVal) => {
            if (!oldVal || newVal.state !== oldVal.state || newVal.time.raw < oldVal.time.raw) {
                return this._debounceUpdateScheduleSlice();
            }
        });
    }
    scrollToFuture() {
        // There don't seem to be typings for IronListElement...
        this.$.remainderItems.scrollToIndex(this._futureStartIndex);
    }
    _debounceUpdateScheduleSlice() {
        this._updateScheduleSliceDebouncer = Polymer.Debouncer.debounce(this._updateScheduleSliceDebouncer, Polymer.Async.timeOut.after(10), this._updateScheduleSlice);
    }
    _updateScheduleSlice() {
        if (currentRun.status !== 'declared' ||
            schedule.status !== 'declared' ||
            stopwatch.status !== 'declared' ||
            currentIntermission.status !== 'declared' ||
            !currentIntermission.value ||
            !currentRun.value ||
            !schedule.value) {
            return;
        }
        let currentItems = [currentRun.value];
        if (currentIntermission.value.preOrPost === 'pre') {
            currentItems = [
                ...currentIntermission.value.content,
                ...currentItems
            ];
        }
        else {
            currentItems = currentItems.concat(currentIntermission.value.content);
        }
        // Start after whatever the last item was in currentItems.
        const lastCurrentItem = currentItems[currentItems.length - 1];
        const startIndex = schedule.value.findIndex(item => {
            return item.id === lastCurrentItem.id && item.type === lastCurrentItem.type;
        }) + 1;
        let numFoundRuns = 0;
        let endIndex = -1;
        let lastRunOrder = currentRun.value.order;
        schedule.value.slice(startIndex).some((item, index) => {
            if (numFoundRuns < this.maxRunsToShow) {
                if (item.type === 'run') {
                    lastRunOrder = item.order;
                    numFoundRuns++;
                    if (numFoundRuns >= this.maxRunsToShow) {
                        endIndex = index;
                        return false;
                    }
                }
                return false;
            }
            if (item.type !== 'run' && item.order === lastRunOrder) {
                endIndex = index;
                return false;
            }
            return true;
        });
        if (this.allowScrollback) {
            this.remainderItems = schedule.value.slice(0);
            this._futureStartIndex = startIndex;
            this.scrollToFuture();
        }
        else {
            this.remainderItems = endIndex > -1 ?
                schedule.value.slice(startIndex, startIndex + endIndex + 1) :
                schedule.value.slice(startIndex);
        }
        this.currentItems = currentItems;
    }
    _maxRunsToShowChanged() {
        this._debounceUpdateScheduleSlice();
    }
    _showTooltip(e) {
        const notes = e.model.item.notes;
        if (!notes || notes.trim().length <= 0 || !e.target) {
            return;
        }
        this.$['tooltip-content'].innerHTML = notes
            .replace(/\r\n/g, '<br/>')
            .replace(/\n/g, '<br/>');
        const thisRect = this.getBoundingClientRect();
        const itemRect = e.target.getBoundingClientRect();
        const tooltipRect = this.$['tooltip-content'].getBoundingClientRect();
        const offset = -4;
        const tooltip = this.$.tooltip;
        tooltip.style.opacity = '1';
        tooltip.style.top = `${itemRect.top - thisRect.top - tooltipRect.height + offset}px`;
    }
    _hideTooltip() {
        this.$.tooltip.style.opacity = '0';
    }
};
__decorate([
    property({ type: Array })
], UiRundownElement.prototype, "schedule", void 0);
__decorate([
    property({ type: Array })
], UiRundownElement.prototype, "remainderItems", void 0);
__decorate([
    property({ type: Array })
], UiRundownElement.prototype, "currentItems", void 0);
__decorate([
    property({ type: Number, observer: UiRundownElement_1.prototype._maxRunsToShowChanged })
], UiRundownElement.prototype, "maxRunsToShow", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], UiRundownElement.prototype, "allowScrollback", void 0);
UiRundownElement = UiRundownElement_1 = __decorate([
    customElement('ui-rundown')
], UiRundownElement);
export default UiRundownElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcnVuZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLXJ1bmRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRCxNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQXNCLHFCQUFxQixDQUFDLENBQUM7QUFDekYsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBTSxZQUFZLENBQUMsQ0FBQztBQUN2RCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFpQixVQUFVLENBQUMsQ0FBQztBQUM5RCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFZLFdBQVcsQ0FBQyxDQUFDO0FBRzNELElBQXFCLGdCQUFnQix3QkFBckMsTUFBcUIsZ0JBQWlCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRGxGOztRQVlDLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBR2xCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBd0l6QixDQUFDO0lBbklBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRSxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRTtZQUNqRSxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsVUFBVSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFB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