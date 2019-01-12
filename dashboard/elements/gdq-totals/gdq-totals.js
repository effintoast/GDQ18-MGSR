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
const cashTotal = nodecg.Replicant('total');
const autoUpdateTotal = nodecg.Replicant('autoUpdateTotal');
let GDQTotalsElement = class GDQTotalsElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.cashTotal = '?';
    this.bitsTotal = '?';
  }

  ready() {
    super.ready();
    cashTotal.on('change', newVal => {
      this.cashTotal = newVal.formatted;
    });
    autoUpdateTotal.on('change', newVal => {
      this.autoUpdateTotal = newVal;
    });
  }

  editCashTotal() {
    if (!cashTotal.value) {
      return;
    }

    this.$.editTotalInput.value = String(cashTotal.value.raw);
    this._editTarget = 'cash';
    this.$.editDialog.open();
  }

  _handleAutoUpdateToggleChange(e) {
    if (!e.target) {
      return;
    }

    autoUpdateTotal.value = Boolean(e.target.checked);
  }

  _handleEditDialogConfirmed() {
    nodecg.sendMessage('setTotal', {
      type: this._editTarget,
      newValue: parseFloat(String(this.$.editTotalInput.value))
    });
  }

};

__decorate([property({
  type: String
})], GDQTotalsElement.prototype, "cashTotal", void 0);

__decorate([property({
  type: String
})], GDQTotalsElement.prototype, "bitsTotal", void 0);

__decorate([property({
  type: Boolean
})], GDQTotalsElement.prototype, "autoUpdateTotal", void 0);

__decorate([property({
  type: Boolean
})], GDQTotalsElement.prototype, "recordTrackerEnabled", void 0);

__decorate([property({
  type: String
})], GDQTotalsElement.prototype, "_editTarget", void 0);

GDQTotalsElement = __decorate([customElement('gdq-totals')], GDQTotalsElement);
export default GDQTotalsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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