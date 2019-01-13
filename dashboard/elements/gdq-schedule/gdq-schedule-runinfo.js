var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GDQScheduleRuninfoElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
let GDQScheduleRuninfoElement = GDQScheduleRuninfoElement_1 = class GDQScheduleRuninfoElement extends Polymer.Element {
  _notesChanged(newVal) {
    const notes = this.$.notes;
    const valueDiv = notes.querySelector('.value');

    if (newVal) {
      valueDiv.innerHTML = newVal.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>');
    } else {
      valueDiv.innerHTML = '';
    }
  }

  setRun(run) {
    this.name = run.name;
    this.console = run.console;
    this.runners = run.runners;
    this.releaseYear = String(run.releaseYear);
    this.estimate = run.estimate;
    this.category = run.category;
    this.order = run.order;
    this.notes = run.notes;
    this.coop = run.coop;
    this.originalValues = run.originalValues;
  }

  calcName(name) {
    if (name) {
      return name.split('\\n').join(' ');
    }

    return name;
  }

  calcModified(original) {
    return original === undefined || original === null ? '' : 'modified';
  }

};

__decorate([property({
  type: String,
  observer: GDQScheduleRuninfoElement_1.prototype._notesChanged
})], GDQScheduleRuninfoElement.prototype, "notes", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], GDQScheduleRuninfoElement.prototype, "label", void 0);

__decorate([property({
  type: Boolean
})], GDQScheduleRuninfoElement.prototype, "coop", void 0);

__decorate([property({
  type: String
})], GDQScheduleRuninfoElement.prototype, "releaseYear", void 0);

__decorate([property({
  type: String
})], GDQScheduleRuninfoElement.prototype, "console", void 0);

__decorate([property({
  type: String
})], GDQScheduleRuninfoElement.prototype, "estimate", void 0);

__decorate([property({
  type: String
})], GDQScheduleRuninfoElement.prototype, "category", void 0);

__decorate([property({
  type: String
})], GDQScheduleRuninfoElement.prototype, "name", void 0);

__decorate([property({
  type: Object
})], GDQScheduleRuninfoElement.prototype, "originalValues", void 0);

__decorate([property({
  type: Array
})], GDQScheduleRuninfoElement.prototype, "runners", void 0);

__decorate([property({
  type: Number
})], GDQScheduleRuninfoElement.prototype, "order", void 0);

GDQScheduleRuninfoElement = GDQScheduleRuninfoElement_1 = __decorate([customElement('gdq-schedule-runinfo')], GDQScheduleRuninfoElement);
export default GDQScheduleRuninfoElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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