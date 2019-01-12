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
const cashTotal = nodecg.Replicant('total');
const bitsTotal = nodecg.Replicant('bits:total');
let DashHostTotalsElement = class DashHostTotalsElement extends Polymer.Element {
  connectedCallback() {
    super.connectedCallback();
    cashTotal.on('change', newVal => {
      this.cashTotal = newVal.formatted;
    });
    bitsTotal.on('change', newVal => {
      this.bitsTotal = newVal.toLocaleString('en-US');
    });
  }

};

__decorate([property({
  type: String
})], DashHostTotalsElement.prototype, "cashTotal", void 0);

__decorate([property({
  type: String
})], DashHostTotalsElement.prototype, "bitsTotal", void 0);

DashHostTotalsElement = __decorate([customElement('dash-host-totals')], DashHostTotalsElement);
export default DashHostTotalsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaG9zdC10b3RhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFHQSxNQUFNO0FBQUMsRUFBQSxhQUFEO0FBQWdCLEVBQUE7QUFBaEIsSUFBNEIsT0FBTyxDQUFDLFVBQTFDO0FBQ0EsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBd0IsT0FBeEIsQ0FBbEI7QUFDQSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUE4QixZQUE5QixDQUFsQjtBQUdBLElBQXFCLHFCQUFxQixHQUExQyxNQUFxQixxQkFBckIsU0FBbUQsT0FBTyxDQUFDLE9BQTNELENBQWtFO0FBT2pFLEVBQUEsaUJBQWlCLEdBQUE7QUFDaEIsVUFBTSxpQkFBTjtBQUNBLElBQUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLE1BQU0sSUFBRztBQUMvQixXQUFLLFNBQUwsR0FBaUIsTUFBTSxDQUFDLFNBQXhCO0FBQ0EsS0FGRDtBQUdBLElBQUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLE1BQU0sSUFBRztBQUMvQixXQUFLLFNBQUwsR0FBaUIsTUFBTSxDQUFDLGNBQVAsQ0FBc0IsT0FBdEIsQ0FBakI7QUFDQSxLQUZEO0FBR0E7O0FBZmdFLENBQWxFOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwrQkFBQSxFLFdBQUEsRSxLQUFrQixDQUFsQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSwrQkFBQSxFLFdBQUEsRSxLQUFrQixDQUFsQixDQUFBOztBQUxvQixxQkFBcUIsR0FBQSxVQUFBLENBQUEsQ0FEekMsYUFBYSxDQUFDLGtCQUFELENBQzRCLENBQUEsRUFBckIscUJBQXFCLENBQXJCO2VBQUEscUIiLCJzb3VyY2VSb290IjoiIn0=