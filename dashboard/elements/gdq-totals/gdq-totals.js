var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
__decorate([
    property({ type: String })
], GDQTotalsElement.prototype, "cashTotal", void 0);
__decorate([
    property({ type: String })
], GDQTotalsElement.prototype, "bitsTotal", void 0);
__decorate([
    property({ type: Boolean })
], GDQTotalsElement.prototype, "autoUpdateTotal", void 0);
__decorate([
    property({ type: Boolean })
], GDQTotalsElement.prototype, "recordTrackerEnabled", void 0);
__decorate([
    property({ type: String })
], GDQTotalsElement.prototype, "_editTarget", void 0);
GDQTotalsElement = __decorate([
    customElement('gdq-totals')
], GDQTotalsElement);
export default GDQTotalsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXRvdGFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS10b3RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVEsT0FBTyxDQUFDLENBQUM7QUFDbkQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBVSxpQkFBaUIsQ0FBQyxDQUFDO0FBR3JFLElBQXFCLGdCQUFnQixHQUFyQyxNQUFxQixnQkFBaUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUQ3RDs7UUFHQyxjQUFTLEdBQUcsR0FBRyxDQUFDO1FBR2hCLGNBQVMsR0FBRyxHQUFHLENBQUM7SUEyQ2pCLENBQUM7SUFoQ0EsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUNILGVBQWUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWE7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRTtZQUNyQixPQUFPO1NBQ1A7UUFDQSxJQUFJLENBQUMsQ0FBQyxDQUFDLGNBQW9DLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBaUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQsNkJBQTZCLENBQUMsQ0FBUTtRQUNyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUNkLE9BQU87U0FDUDtRQUNELGVBQWUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFFLENBQUMsQ0FBQyxNQUFtQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCwwQkFBMEI7UUFDekIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsY0FBb0MsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRixDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQTlDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzttREFDVDtBQUdoQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzttREFDVDtBQUdoQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQzt5REFDRDtBQUd6QjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQzs4REFDSTtBQUc5QjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztxREFDTDtBQWRBLGdCQUFnQjtJQURwQyxhQUFhLENBQUMsWUFBWSxDQUFDO0dBQ1AsZ0JBQWdCLENBZ0RwQztlQWhEb0IsZ0JBQWdCIn0=