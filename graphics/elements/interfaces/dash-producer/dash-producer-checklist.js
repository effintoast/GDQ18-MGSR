var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const checklist = nodecg.Replicant('checklist');
/**
 * @customElement
 * @polymer
 */
let DashProducerChecklistElement = class DashProducerChecklistElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        checklist.on('change', newVal => {
            this.extraContent = newVal.extraContent;
            this.techStationDuties = newVal.techStationDuties;
            this.stageTechDuties = newVal.stageTechDuties;
            this.audioEngineerDuties = newVal.audioEngineerDuties;
            this.specialDuties = newVal.special;
        });
    }
    _calcItemName(item) {
        return item ? (item.shortName || item.name) : '';
    }
};
__decorate([
    property({ type: Array })
], DashProducerChecklistElement.prototype, "stageTechDuties", void 0);
__decorate([
    property({ type: Array })
], DashProducerChecklistElement.prototype, "extraContent", void 0);
__decorate([
    property({ type: Array })
], DashProducerChecklistElement.prototype, "audioReady", void 0);
__decorate([
    property({ type: Array })
], DashProducerChecklistElement.prototype, "techStationDuties", void 0);
__decorate([
    property({ type: Array })
], DashProducerChecklistElement.prototype, "audioEngineerDuties", void 0);
__decorate([
    property({ type: Array })
], DashProducerChecklistElement.prototype, "specialDuties", void 0);
DashProducerChecklistElement = __decorate([
    customElement('dash-producer-checklist')
], DashProducerChecklistElement);
export default DashProducerChecklistElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1wcm9kdWNlci1jaGVja2xpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLXByb2R1Y2VyLWNoZWNrbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxXQUFXLENBQUMsQ0FBQztBQUUzRDs7O0dBR0c7QUFFSCxJQUFxQiw0QkFBNEIsR0FBakQsTUFBcUIsNEJBQTZCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBbUI3RixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUMsaUJBQWlCLENBQUM7WUFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQzlDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFtQjtRQUNoQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2xELENBQUM7Q0FDRCxDQUFBO0FBL0JBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3FFQUNRO0FBR2hDO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO2tFQUNLO0FBRzdCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO2dFQUNHO0FBRzNCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3VFQUNVO0FBR2xDO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3lFQUNZO0FBR3BDO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO21FQUNNO0FBakJWLDRCQUE0QjtJQURoRCxhQUFhLENBQUMseUJBQXlCLENBQUM7R0FDcEIsNEJBQTRCLENBaUNoRDtlQWpDb0IsNEJBQTRCIn0=