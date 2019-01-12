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
let DashInterviewLowerthirdRefillOptionElement = class DashInterviewLowerthirdRefillOptionElement extends Polymer.Element {
  accept() {
    this.dispatchEvent(new CustomEvent('accepted', {
      detail: {
        names: this.names.filter(name => name !== '(none)').map(name => {
          return {
            name
          };
        })
      }
    }));
  }

};

__decorate([property({
  type: String,
  reflectToAttribute: true
})], DashInterviewLowerthirdRefillOptionElement.prototype, "type", void 0);

__decorate([property({
  type: Array
})], DashInterviewLowerthirdRefillOptionElement.prototype, "names", void 0);

DashInterviewLowerthirdRefillOptionElement = __decorate([customElement('dash-interview-lowerthird-refill-option')], DashInterviewLowerthirdRefillOptionElement);
export default DashInterviewLowerthirdRefillOptionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LWxvd2VydGhpcmQtcmVmaWxsLW9wdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFHQSxJQUFxQiwwQ0FBMEMsR0FBL0QsTUFBcUIsMENBQXJCLFNBQXdFLE9BQU8sQ0FBQyxPQUFoRixDQUF1RjtBQU90RixFQUFBLE1BQU0sR0FBQTtBQUNMLFNBQUssYUFBTCxDQUFtQixJQUFJLFdBQUosQ0FBZ0IsVUFBaEIsRUFBNEI7QUFDOUMsTUFBQSxNQUFNLEVBQUU7QUFDUCxRQUFBLEtBQUssRUFBRSxLQUFLLEtBQUwsQ0FDTCxNQURLLENBQ0UsSUFBSSxJQUFJLElBQUksS0FBSyxRQURuQixFQUVMLEdBRkssQ0FFRCxJQUFJLElBQUc7QUFDWCxpQkFBTztBQUFDLFlBQUE7QUFBRCxXQUFQO0FBQ0EsU0FKSztBQURBO0FBRHNDLEtBQTVCLENBQW5CO0FBU0E7O0FBakJxRixDQUF2Rjs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxrQkFBa0IsRUFBRTtBQUFuQyxDQUFELENBQ1QsQ0FBQSxFLG9EQUFBLEUsTUFBQSxFLEtBQWEsQ0FBYixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxvREFBQSxFLE9BQUEsRSxLQUFnQixDQUFoQixDQUFBOztBQUxvQiwwQ0FBMEMsR0FBQSxVQUFBLENBQUEsQ0FEOUQsYUFBYSxDQUFDLHlDQUFELENBQ2lELENBQUEsRUFBMUMsMENBQTBDLENBQTFDO2VBQUEsMEMiLCJzb3VyY2VSb290IjoiIn0=