var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
__decorate([
    property({ type: String, notify: true })
], DashLowerthirdNameInputElement.prototype, "selectedItem", void 0);
__decorate([
    property({ type: String, notify: true })
], DashLowerthirdNameInputElement.prototype, "name", void 0);
__decorate([
    property({ type: String, notify: true })
], DashLowerthirdNameInputElement.prototype, "title", void 0);
__decorate([
    property({ type: Boolean })
], DashLowerthirdNameInputElement.prototype, "disabled", void 0);
__decorate([
    property({ type: Array })
], DashLowerthirdNameInputElement.prototype, "items", void 0);
DashLowerthirdNameInputElement = __decorate([
    customElement('dash-lowerthird-name-input')
], DashLowerthirdNameInputElement);
export default DashLowerthirdNameInputElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1sb3dlcnRoaXJkLW5hbWUtaW5wdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWxvd2VydGhpcmQtbmFtZS1pbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsSUFBcUIsOEJBQThCLEdBQW5ELE1BQXFCLDhCQUErQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBZ0IxRSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFXLENBQUM7UUFDcEMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDekMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDNUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDMUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDMUMsQ0FBQztJQUVELEtBQUs7UUFDSixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQVcsQ0FBQztRQUNwQyxRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixRQUFRLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0NBQ0QsQ0FBQTtBQTlCQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO29FQUNsQjtBQUdyQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDOzREQUMxQjtBQUdiO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7NkRBQ3pCO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7Z0VBQ1I7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7NkRBQ1I7QUFkSSw4QkFBOEI7SUFEbEQsYUFBYSxDQUFDLDRCQUE0QixDQUFDO0dBQ3ZCLDhCQUE4QixDQWdDbEQ7ZUFoQ29CLDhCQUE4QiJ9