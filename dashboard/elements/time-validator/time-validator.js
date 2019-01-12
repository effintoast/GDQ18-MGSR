var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement } = Polymer.decorators;
let TimeValidatorElement = class TimeValidatorElement extends Polymer.mixinBehaviors([Polymer.IronValidatorBehavior], Polymer.Element) {
    validate(value) {
        // This regex validates incomplete times (by design)
        return !value || value.match(/^[0-9]{0,2}:[0-9]{0,2}$/);
    }
};
TimeValidatorElement = __decorate([
    customElement('time-validator')
], TimeValidatorElement);
export default TimeValidatorElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW1lLXZhbGlkYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUczQyxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDekgsUUFBUSxDQUFDLEtBQWE7UUFDckIsb0RBQW9EO1FBQ3BELE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRCxDQUFBO0FBTG9CLG9CQUFvQjtJQUR4QyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7R0FDWCxvQkFBb0IsQ0FLeEM7ZUFMb0Isb0JBQW9CIn0=