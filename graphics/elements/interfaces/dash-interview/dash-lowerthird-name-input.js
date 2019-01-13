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
let DashLowerthirdNameInputElement = class DashLowerthirdNameInputElement extends Polymer.Element {
  ready() {
    super.ready();
    const nameElem = this.$.name;
    nameElem.$.input.style.fontSize = '24px';
    nameElem.$.input.style.height = '45px';
    nameElem.$.toggleIcon.style.height = '100%';
    nameElem.$.toggleIcon.style.padding = '0';
    nameElem.$.clearIcon.style.height = '100%';
    nameElem.$.clearIcon.style.padding = '0';
  }

  clear() {
    const nameElem = this.$.name;
    nameElem.value = '';
    nameElem.value = '';
  }

};

__decorate([property({
  type: String,
  notify: true
})], DashLowerthirdNameInputElement.prototype, "selectedItem", void 0);

__decorate([property({
  type: String,
  notify: true
})], DashLowerthirdNameInputElement.prototype, "name", void 0);

__decorate([property({
  type: String,
  notify: true
})], DashLowerthirdNameInputElement.prototype, "title", void 0);

__decorate([property({
  type: Boolean
})], DashLowerthirdNameInputElement.prototype, "disabled", void 0);

__decorate([property({
  type: Array
})], DashLowerthirdNameInputElement.prototype, "items", void 0);

DashLowerthirdNameInputElement = __decorate([customElement('dash-lowerthird-name-input')], DashLowerthirdNameInputElement);
export default DashLowerthirdNameInputElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtbG93ZXJ0aGlyZC1uYW1lLWlucHV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUdBLElBQXFCLDhCQUE4QixHQUFuRCxNQUFxQiw4QkFBckIsU0FBNEQsT0FBTyxDQUFDLE9BQXBFLENBQTJFO0FBZ0IxRSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLFVBQU0sUUFBUSxHQUFHLEtBQUssQ0FBTCxDQUFPLElBQXhCO0FBQ0EsSUFBQSxRQUFRLENBQUMsQ0FBVCxDQUFXLEtBQVgsQ0FBaUIsS0FBakIsQ0FBdUIsUUFBdkIsR0FBa0MsTUFBbEM7QUFDQSxJQUFBLFFBQVEsQ0FBQyxDQUFULENBQVcsS0FBWCxDQUFpQixLQUFqQixDQUF1QixNQUF2QixHQUFnQyxNQUFoQztBQUNBLElBQUEsUUFBUSxDQUFDLENBQVQsQ0FBVyxVQUFYLENBQXNCLEtBQXRCLENBQTRCLE1BQTVCLEdBQXFDLE1BQXJDO0FBQ0EsSUFBQSxRQUFRLENBQUMsQ0FBVCxDQUFXLFVBQVgsQ0FBc0IsS0FBdEIsQ0FBNEIsT0FBNUIsR0FBc0MsR0FBdEM7QUFDQSxJQUFBLFFBQVEsQ0FBQyxDQUFULENBQVcsU0FBWCxDQUFxQixLQUFyQixDQUEyQixNQUEzQixHQUFvQyxNQUFwQztBQUNBLElBQUEsUUFBUSxDQUFDLENBQVQsQ0FBVyxTQUFYLENBQXFCLEtBQXJCLENBQTJCLE9BQTNCLEdBQXFDLEdBQXJDO0FBQ0E7O0FBRUQsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLFFBQVEsR0FBRyxLQUFLLENBQUwsQ0FBTyxJQUF4QjtBQUNBLElBQUEsUUFBUSxDQUFDLEtBQVQsR0FBaUIsRUFBakI7QUFDQSxJQUFBLFFBQVEsQ0FBQyxLQUFULEdBQWlCLEVBQWpCO0FBQ0E7O0FBL0J5RSxDQUEzRTs7QUFFQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxNQUFNLEVBQUU7QUFBdkIsQ0FBRCxDQUNULENBQUEsRSx3Q0FBQSxFLGNBQUEsRSxLQUFxQixDQUFyQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLE1BQU0sRUFBRTtBQUF2QixDQUFELENBQ1QsQ0FBQSxFLHdDQUFBLEUsTUFBQSxFLEtBQWEsQ0FBYixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLE1BQU0sRUFBRTtBQUF2QixDQUFELENBQ1QsQ0FBQSxFLHdDQUFBLEUsT0FBQSxFLEtBQWMsQ0FBZCxDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSx3Q0FBQSxFLFVBQUEsRSxLQUFrQixDQUFsQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSx3Q0FBQSxFLE9BQUEsRSxLQUFnQixDQUFoQixDQUFBOztBQWRvQiw4QkFBOEIsR0FBQSxVQUFBLENBQUEsQ0FEbEQsYUFBYSxDQUFDLDRCQUFELENBQ3FDLENBQUEsRUFBOUIsOEJBQThCLENBQTlCO2VBQUEsOEIiLCJzb3VyY2VSb290IjoiIn0=