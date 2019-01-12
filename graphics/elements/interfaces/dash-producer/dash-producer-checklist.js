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
      this.specialDuties = newVal.special;
    });
  }

  _calcItemName(item) {
    return item ? item.shortName || item.name : '';
  }

};

__decorate([property({
  type: Array
})], DashProducerChecklistElement.prototype, "stageTechDuties", void 0);

__decorate([property({
  type: Array
})], DashProducerChecklistElement.prototype, "extraContent", void 0);

__decorate([property({
  type: Array
})], DashProducerChecklistElement.prototype, "audioReady", void 0);

__decorate([property({
  type: Array
})], DashProducerChecklistElement.prototype, "techStationDuties", void 0);

__decorate([property({
  type: Array
})], DashProducerChecklistElement.prototype, "specialDuties", void 0);

DashProducerChecklistElement = __decorate([customElement('dash-producer-checklist')], DashProducerChecklistElement);
export default DashProducerChecklistElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtcHJvZHVjZXItY2hlY2tsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUNBLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQTRCLFdBQTVCLENBQWxCO0FBRUE7Ozs7O0FBS0EsSUFBcUIsNEJBQTRCLEdBQWpELE1BQXFCLDRCQUFyQixTQUEwRCxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBMUQsQ0FBOEY7QUFpQjdGLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBQ0EsSUFBQSxTQUFTLENBQUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsTUFBTSxJQUFHO0FBQy9CLFdBQUssWUFBTCxHQUFvQixNQUFNLENBQUMsWUFBM0I7QUFDQSxXQUFLLGlCQUFMLEdBQXlCLE1BQU0sQ0FBQyxpQkFBaEM7QUFDQSxXQUFLLGVBQUwsR0FBdUIsTUFBTSxDQUFDLGVBQTlCO0FBQ0EsV0FBSyxhQUFMLEdBQXFCLE1BQU0sQ0FBQyxPQUE1QjtBQUNBLEtBTEQ7QUFNQTs7QUFFRCxFQUFBLGFBQWEsQ0FBQyxJQUFELEVBQW9CO0FBQ2hDLFdBQU8sSUFBSSxHQUFJLElBQUksQ0FBQyxTQUFMLElBQWtCLElBQUksQ0FBQyxJQUEzQixHQUFtQyxFQUE5QztBQUNBOztBQTdCNEYsQ0FBOUY7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHNDQUFBLEUsaUJBQUEsRSxLQUFnQyxDQUFoQyxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxzQ0FBQSxFLGNBQUEsRSxLQUE2QixDQUE3QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxzQ0FBQSxFLFlBQUEsRSxLQUEyQixDQUEzQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxzQ0FBQSxFLG1CQUFBLEUsS0FBa0MsQ0FBbEMsQ0FBQTs7QUFJQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsc0NBQUEsRSxlQUFBLEUsS0FBOEIsQ0FBOUIsQ0FBQTs7QUFmb0IsNEJBQTRCLEdBQUEsVUFBQSxDQUFBLENBRGhELGFBQWEsQ0FBQyx5QkFBRCxDQUNtQyxDQUFBLEVBQTVCLDRCQUE0QixDQUE1QjtlQUFBLDRCIiwic291cmNlUm9vdCI6IiJ9