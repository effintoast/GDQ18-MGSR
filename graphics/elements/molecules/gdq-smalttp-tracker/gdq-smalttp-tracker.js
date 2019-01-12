var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const smalttpData = nodecg.Replicant('smalttpData');
/**
 * @customElement
 * @polymer
 */
let GDQSmalttpTrackerElement = class GDQSmalttpTrackerElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        smalttpData.on('change', newVal => {
            this.items = newVal;
        });
    }
    _advance(e) {
        const updated = e.model.item;
        if (updated.state === updated.maxState) {
            updated.state = 0;
        }
        else {
            updated.state++;
        }
    }
    _highlight(e) {
        e.model.item.highlight = !e.model.item.highlight;
    }
    _calcCellClass(itemOrPrize) {
        const classes = new Set(['cell']);
        if (itemOrPrize.state === 0) {
            classes.add('cell--dimmed');
        }
        if (itemOrPrize.highlight === true) {
            classes.add('cell--highlight');
        }
        return Array.from(classes).join(' ');
    }
    _calcToggleClass(itemOrPrize) {
        const classes = new Set(['cell']);
        if (itemOrPrize.highlight === true) {
            classes.add('cell--highlight');
        }
        return Array.from(classes).join(' ');
    }
    _calcCellSrc(itemOrPrize) {
        let src = itemOrPrize.name;
        if (itemOrPrize.state > 1) {
            src += itemOrPrize.state;
        }
        return src ? src : 'blank-pixel';
    }
};
__decorate([
    property({ type: Array })
], GDQSmalttpTrackerElement.prototype, "items", void 0);
GDQSmalttpTrackerElement = __decorate([
    customElement('gdq-smalttp-tracker')
], GDQSmalttpTrackerElement);
export default GDQSmalttpTrackerElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXNtYWx0dHAtdHJhY2tlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1zbWFsdHRwLXRyYWNrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWMsYUFBYSxDQUFDLENBQUM7QUFFakU7OztHQUdHO0FBRUgsSUFBcUIsd0JBQXdCLEdBQTdDLE1BQXFCLHdCQUF5QixTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQUl6RixLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUSxDQUFDLENBQU07UUFDZCxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLFFBQVEsRUFBRTtZQUN2QyxPQUFPLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjthQUFNO1lBQ04sT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2hCO0lBQ0YsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFNO1FBQ2hCLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsY0FBYyxDQUFDLFdBQWdCO1FBQzlCLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVsQyxJQUFJLFdBQVcsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDNUI7UUFFRCxJQUFJLFdBQVcsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMvQjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdCQUFnQixDQUFDLFdBQWdCO1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVsQyxJQUFJLFdBQVcsQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUMvQjtRQUVELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELFlBQVksQ0FBQyxXQUFnQjtRQUM1QixJQUFJLEdBQUcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDO1FBQzNCLElBQUksV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDMUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUM7U0FDekI7UUFDRCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDbEMsQ0FBQztDQUNELENBQUE7QUFyREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7dURBQ1g7QUFGTyx3QkFBd0I7SUFENUMsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0dBQ2hCLHdCQUF3QixDQXVENUM7ZUF2RG9CLHdCQUF3QiJ9