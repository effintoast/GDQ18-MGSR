var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement
} = Polymer.decorators;
let TimeValidatorElement = class TimeValidatorElement extends Polymer.mixinBehaviors([Polymer.IronValidatorBehavior], Polymer.Element) {
  validate(value) {
    // This regex validates incomplete times (by design)
    return !value || value.match(/^[0-9]{0,2}:[0-9]{0,2}$/);
  }

};
TimeValidatorElement = __decorate([customElement('time-validator')], TimeValidatorElement);
export default TimeValidatorElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWUtdmFsaWRhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTTtBQUFDLEVBQUE7QUFBRCxJQUFrQixPQUFPLENBQUMsVUFBaEM7QUFHQSxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXJCLFNBQWtELE9BQU8sQ0FBQyxjQUFSLENBQXVCLENBQUMsT0FBTyxDQUFDLHFCQUFULENBQXZCLEVBQXdELE9BQU8sQ0FBQyxPQUFoRSxDQUFsRCxDQUEwSDtBQUN6SCxFQUFBLFFBQVEsQ0FBQyxLQUFELEVBQWM7QUFDckI7QUFDQSxXQUFPLENBQUMsS0FBRCxJQUFVLEtBQUssQ0FBQyxLQUFOLENBQVkseUJBQVosQ0FBakI7QUFDQTs7QUFKd0gsQ0FBMUg7QUFBcUIsb0JBQW9CLEdBQUEsVUFBQSxDQUFBLENBRHhDLGFBQWEsQ0FBQyxnQkFBRCxDQUMyQixDQUFBLEVBQXBCLG9CQUFvQixDQUFwQjtlQUFBLG9CIiwic291cmNlUm9vdCI6IiJ9