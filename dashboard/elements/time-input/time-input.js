var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property, observe } = Polymer.decorators;
let TimeInputElement = class TimeInputElement extends Polymer.mixinBehaviors([Polymer.IronValidatableBehavior], Polymer.Element) {
    constructor() {
        super(...arguments);
        this.invalid = false;
        this.validator = 'time-validator';
    }
    _computeValue(minutes, seconds) {
        this.value = `${minutes}:${seconds}`;
    }
    setMS(m, s) {
        this._minutes = m < 10 ? `0${m}` : m;
        this._seconds = s < 10 ? `0${s}` : s;
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], TimeInputElement.prototype, "invalid", void 0);
__decorate([
    property({ type: String, notify: true })
], TimeInputElement.prototype, "value", void 0);
__decorate([
    property({ type: Number })
], TimeInputElement.prototype, "_minutes", void 0);
__decorate([
    property({ type: Number })
], TimeInputElement.prototype, "_seconds", void 0);
__decorate([
    property({ type: String })
], TimeInputElement.prototype, "validator", void 0);
__decorate([
    observe('_minutes', '_seconds')
], TimeInputElement.prototype, "_computeValue", null);
TimeInputElement = __decorate([
    customElement('time-input')
], TimeInputElement);
export default TimeInputElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1pbnB1dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRpbWUtaW5wdXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUc5RCxJQUFxQixnQkFBZ0IsR0FBckMsTUFBcUIsZ0JBQWlCLFNBQVEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFEeEg7O1FBR0MsWUFBTyxHQUFHLEtBQUssQ0FBQztRQVloQixjQUFTLEdBQUcsZ0JBQWdCLENBQUM7SUFXOUIsQ0FBQztJQVJBLGFBQWEsQ0FBQyxPQUFlLEVBQUUsT0FBZTtRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxLQUFLLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztDQUNELENBQUE7QUF2QkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO2lEQUNwQztBQUdoQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOytDQUN6QjtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2tEQUNDO0FBRzFCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO2tEQUNDO0FBRzFCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO21EQUNJO0FBRzdCO0lBREMsT0FBTyxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUM7cURBRy9CO0FBbkJtQixnQkFBZ0I7SUFEcEMsYUFBYSxDQUFDLFlBQVksQ0FBQztHQUNQLGdCQUFnQixDQXlCcEM7ZUF6Qm9CLGdCQUFnQiJ9