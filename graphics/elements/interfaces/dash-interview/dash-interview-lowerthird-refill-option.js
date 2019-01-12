var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let DashInterviewLowerthirdRefillOptionElement = class DashInterviewLowerthirdRefillOptionElement extends Polymer.Element {
    accept() {
        this.dispatchEvent(new CustomEvent('accepted', {
            detail: {
                names: this.names
                    .filter(name => name !== '(none)')
                    .map(name => {
                    return { name };
                })
            }
        }));
    }
};
__decorate([
    property({ type: String, reflectToAttribute: true })
], DashInterviewLowerthirdRefillOptionElement.prototype, "type", void 0);
__decorate([
    property({ type: Array })
], DashInterviewLowerthirdRefillOptionElement.prototype, "names", void 0);
DashInterviewLowerthirdRefillOptionElement = __decorate([
    customElement('dash-interview-lowerthird-refill-option')
], DashInterviewLowerthirdRefillOptionElement);
export default DashInterviewLowerthirdRefillOptionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbG93ZXJ0aGlyZC1yZWZpbGwtb3B0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaC1pbnRlcnZpZXctbG93ZXJ0aGlyZC1yZWZpbGwtb3B0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUdyRCxJQUFxQiwwQ0FBMEMsR0FBL0QsTUFBcUIsMENBQTJDLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFPdEYsTUFBTTtRQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsVUFBVSxFQUFFO1lBQzlDLE1BQU0sRUFBRTtnQkFDUCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7cUJBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQztxQkFDakMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNYLE9BQU8sRUFBQyxJQUFJLEVBQUMsQ0FBQztnQkFDZixDQUFDLENBQUM7YUFDSDtTQUNELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNELENBQUE7QUFoQkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO3dFQUN0QztBQUdiO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3lFQUNSO0FBTEksMENBQTBDO0lBRDlELGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQztHQUNwQywwQ0FBMEMsQ0FrQjlEO2VBbEJvQiwwQ0FBMEMifQ==