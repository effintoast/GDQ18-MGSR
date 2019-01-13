var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GDQScheduleRuninfoElement_1;
const { customElement, property } = Polymer.decorators;
let GDQScheduleRuninfoElement = GDQScheduleRuninfoElement_1 = class GDQScheduleRuninfoElement extends Polymer.Element {
    _notesChanged(newVal) {
        const notes = this.$.notes;
        const valueDiv = notes.querySelector('.value');
        if (newVal) {
            valueDiv.innerHTML = newVal.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>');
        }
        else {
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
        return (original === undefined || original === null) ? '' : 'modified';
    }
};
__decorate([
    property({ type: String, observer: GDQScheduleRuninfoElement_1.prototype._notesChanged })
], GDQScheduleRuninfoElement.prototype, "notes", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], GDQScheduleRuninfoElement.prototype, "label", void 0);
__decorate([
    property({ type: Boolean })
], GDQScheduleRuninfoElement.prototype, "coop", void 0);
__decorate([
    property({ type: String })
], GDQScheduleRuninfoElement.prototype, "releaseYear", void 0);
__decorate([
    property({ type: String })
], GDQScheduleRuninfoElement.prototype, "console", void 0);
__decorate([
    property({ type: String })
], GDQScheduleRuninfoElement.prototype, "estimate", void 0);
__decorate([
    property({ type: String })
], GDQScheduleRuninfoElement.prototype, "category", void 0);
__decorate([
    property({ type: String })
], GDQScheduleRuninfoElement.prototype, "name", void 0);
__decorate([
    property({ type: Object })
], GDQScheduleRuninfoElement.prototype, "originalValues", void 0);
__decorate([
    property({ type: Array })
], GDQScheduleRuninfoElement.prototype, "runners", void 0);
__decorate([
    property({ type: Number })
], GDQScheduleRuninfoElement.prototype, "order", void 0);
GDQScheduleRuninfoElement = GDQScheduleRuninfoElement_1 = __decorate([
    customElement('gdq-schedule-runinfo')
], GDQScheduleRuninfoElement);
export default GDQScheduleRuninfoElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXNjaGVkdWxlLXJ1bmluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtc2NoZWR1bGUtcnVuaW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBR3JELElBQXFCLHlCQUF5QixpQ0FBOUMsTUFBcUIseUJBQTBCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFrQ3JFLGFBQWEsQ0FBQyxNQUFjO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBb0IsQ0FBQztRQUMxQyxNQUFNLFFBQVEsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBbUIsQ0FBQztRQUNqRSxJQUFJLE1BQU0sRUFBRTtZQUNYLFFBQVEsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM5RTthQUFNO1lBQ04sUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDO0lBRUQsTUFBTSxDQUFDLEdBQVE7UUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO1FBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO1FBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztRQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUM7SUFDMUMsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUF3QjtRQUNoQyxJQUFJLElBQUksRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBYTtRQUN6QixPQUFPLENBQUMsUUFBUSxLQUFLLFNBQVMsSUFBSSxRQUFRLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO0lBQ3hFLENBQUM7Q0FDRCxDQUFBO0FBbEVBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsMkJBQXlCLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBQyxDQUFDO3dEQUN4RTtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQzt3REFDckM7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQzt1REFDWjtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzhEQUNMO0FBR3BCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzBEQUNUO0FBR2hCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzJEQUNSO0FBR2pCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzJEQUNSO0FBR2pCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3VEQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7aUVBQ2dCO0FBR3pDO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDOzBEQUNRO0FBR2hDO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3dEQUNYO0FBaENNLHlCQUF5QjtJQUQ3QyxhQUFhLENBQUMsc0JBQXNCLENBQUM7R0FDakIseUJBQXlCLENBb0U3QztlQXBFb0IseUJBQXlCIn0=