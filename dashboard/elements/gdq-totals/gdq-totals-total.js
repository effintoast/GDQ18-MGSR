var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let GDQTotalsTotalElement = class GDQTotalsTotalElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.value = '?';
    }
    edit() {
        this.dispatchEvent(new CustomEvent('edit', { bubbles: true, composed: true }));
    }
    equal(a, b) {
        return a === b;
    }
};
__decorate([
    property({ type: String })
], GDQTotalsTotalElement.prototype, "value", void 0);
__decorate([
    property({ type: String })
], GDQTotalsTotalElement.prototype, "currency", void 0);
GDQTotalsTotalElement = __decorate([
    customElement('gdq-totals-total')
], GDQTotalsTotalElement);
export default GDQTotalsTotalElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXRvdGFscy10b3RhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS10b3RhbHMtdG90YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBR3JELElBQXFCLHFCQUFxQixHQUExQyxNQUFxQixxQkFBc0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQURsRTs7UUFHQyxVQUFLLEdBQUcsR0FBRyxDQUFDO0lBWWIsQ0FBQztJQVBBLElBQUk7UUFDSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsS0FBSyxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0QsQ0FBQTtBQVpBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO29EQUNiO0FBR1o7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7dURBQ1I7QUFMRyxxQkFBcUI7SUFEekMsYUFBYSxDQUFDLGtCQUFrQixDQUFDO0dBQ2IscUJBQXFCLENBY3pDO2VBZG9CLHFCQUFxQiJ9