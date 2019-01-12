var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiRundownElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
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
      const ignore = operations ? operations.every(operation => {
        return operation.path.endsWith('/state');
      }) : false;

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
    if (currentRun.status !== 'declared' || schedule.status !== 'declared' || stopwatch.status !== 'declared' || currentIntermission.status !== 'declared' || !currentIntermission.value || !currentRun.value || !schedule.value) {
      return;
    }

    let currentItems = [currentRun.value];

    if (currentIntermission.value.preOrPost === 'pre') {
      currentItems = [...currentIntermission.value.content, ...currentItems];
    } else {
      currentItems = currentItems.concat(currentIntermission.value.content);
    } // Start after whatever the last item was in currentItems.


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
    } else {
      this.remainderItems = endIndex > -1 ? schedule.value.slice(startIndex, startIndex + endIndex + 1) : schedule.value.slice(startIndex);
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

    this.$['tooltip-content'].innerHTML = notes.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>');
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

__decorate([property({
  type: Array
})], UiRundownElement.prototype, "schedule", void 0);

__decorate([property({
  type: Array
})], UiRundownElement.prototype, "remainderItems", void 0);

__decorate([property({
  type: Array
})], UiRundownElement.prototype, "currentItems", void 0);

__decorate([property({
  type: Number,
  observer: UiRundownElement_1.prototype._maxRunsToShowChanged
})], UiRundownElement.prototype, "maxRunsToShow", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], UiRundownElement.prototype, "allowScrollback", void 0);

UiRundownElement = UiRundownElement_1 = __decorate([customElement('ui-rundown')], UiRundownElement);
export default UiRundownElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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