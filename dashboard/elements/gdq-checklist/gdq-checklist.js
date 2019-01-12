var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
const checklist = nodecg.Replicant('checklist');
let GDQChecklistElement = class GDQChecklistElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    checklist.on('change', newVal => {
      if (!newVal) {
        return;
      }

      this.extraContent = newVal.extraContent;
      this.techStationDuties = newVal.techStationDuties;
      this.stageTechDuties = newVal.stageTechDuties;
      const cycleRecordingsTask = newVal.special.find(task => task.name === 'Cycle Recordings');

      if (cycleRecordingsTask) {
        this.recordingsCycled = cycleRecordingsTask.complete;
      }
    });
    this._checkboxChanged = this._checkboxChanged.bind(this);
    this.addEventListener('change', this._checkboxChanged);
  }

  _checkboxChanged(e) {
    const target = e.composedPath()[0];
    const category = target.getAttribute('category');
    const name = target.hasAttribute('name') ? target.getAttribute('name') : target.innerText.trim();

    if (!category) {
      return;
    }

    checklist.value[category].find(task => {
      if (task.name === name) {
        task.complete = Boolean(target.checked);
        return true;
      }

      return false;
    });
  }

};

__decorate([property({
  type: Array
})], GDQChecklistElement.prototype, "stageTechDuties", void 0);

__decorate([property({
  type: Array
})], GDQChecklistElement.prototype, "extraContent", void 0);

__decorate([property({
  type: Array
})], GDQChecklistElement.prototype, "techStationDuties", void 0);

__decorate([property({
  type: Boolean
})], GDQChecklistElement.prototype, "recordingsCycled", void 0);

GDQChecklistElement = __decorate([customElement('gdq-checklist')], GDQChecklistElement);
export default GDQChecklistElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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