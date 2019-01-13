var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
        const name = target.hasAttribute('name') ?
            target.getAttribute('name') :
            target.innerText.trim();
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
__decorate([
    property({ type: Array })
], GDQChecklistElement.prototype, "stageTechDuties", void 0);
__decorate([
    property({ type: Array })
], GDQChecklistElement.prototype, "extraContent", void 0);
__decorate([
    property({ type: Array })
], GDQChecklistElement.prototype, "techStationDuties", void 0);
__decorate([
    property({ type: Boolean })
], GDQChecklistElement.prototype, "recordingsCycled", void 0);
GDQChecklistElement = __decorate([
    customElement('gdq-checklist')
], GDQChecklistElement);
export default GDQChecklistElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWNoZWNrbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1jaGVja2xpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFHM0QsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFvQixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQWFwRixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDWixPQUFPO2FBQ1A7WUFDRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7WUFFOUMsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssa0JBQWtCLENBQUMsQ0FBQztZQUMxRixJQUFJLG1CQUFtQixFQUFFO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDO2FBQ3JEO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxDQUFRO1FBQ3hCLE1BQU0sTUFBTSxHQUFHLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQXlCLENBQUM7UUFDM0QsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekMsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNkLE9BQU87U0FDUDtRQUNDLFNBQVMsQ0FBQyxLQUFhLENBQUMsUUFBUSxDQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsRSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFO2dCQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sSUFBSSxDQUFDO2FBQ1o7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUFqREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7NERBQ1E7QUFHaEM7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7eURBQ0s7QUFHN0I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7OERBQ1U7QUFHbEM7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7NkRBQ0E7QUFYTixtQkFBbUI7SUFEdkMsYUFBYSxDQUFDLGVBQWUsQ0FBQztHQUNWLG1CQUFtQixDQW1EdkM7ZUFuRG9CLG1CQUFtQiJ9