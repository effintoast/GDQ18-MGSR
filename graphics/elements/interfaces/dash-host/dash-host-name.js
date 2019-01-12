var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentHost = nodecg.Replicant('currentHost');
/**
 * @customElement
 * @polymer
 */
let DashHostNameElement = class DashHostNameElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this._enteredName = '';
    }
    ready() {
        super.ready();
        currentHost.on('change', newVal => {
            this.currentHost = newVal;
        });
    }
    take() {
        currentHost.value = this._enteredName;
        this._enteredName = '';
    }
    _falsey(value) {
        return !value;
    }
};
__decorate([
    property({ type: String })
], DashHostNameElement.prototype, "currentHost", void 0);
__decorate([
    property({ type: String })
], DashHostNameElement.prototype, "_enteredName", void 0);
DashHostNameElement = __decorate([
    customElement('dash-host-name')
], DashHostNameElement);
export default DashHostNameElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1ob3N0LW5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWhvc3QtbmFtZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBYyxhQUFhLENBQUMsQ0FBQztBQUVqRTs7O0dBR0c7QUFFSCxJQUFxQixtQkFBbUIsR0FBeEMsTUFBcUIsbUJBQW9CLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFMaEU7OztPQUdHO0lBQ0g7O1FBTUMsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFpQm5CLENBQUM7SUFmQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsV0FBVyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNILFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVU7UUFDakIsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7Q0FDRCxDQUFBO0FBcEJBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3dEQUNMO0FBR3BCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3lEQUNQO0FBTEUsbUJBQW1CO0lBRHZDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztHQUNYLG1CQUFtQixDQXNCdkM7ZUF0Qm9CLG1CQUFtQiJ9