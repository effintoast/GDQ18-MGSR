var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let DashProducerElement = class DashProducerElement extends Polymer.MutableData(Polymer.Element) {
    constructor() {
        super(...arguments);
        this.selectedContentTab = 0;
        this.selectedBidsAndPrizesTab = 0;
    }
    connectedCallback() {
        super.connectedCallback();
        this.updateCurrentTime = this.updateCurrentTime.bind(this);
        this.updateCurrentTime();
        setInterval(this.updateCurrentTime, 1000);
    }
    updateCurrentTime() {
        const date = new Date();
        this.currentTime = date.toLocaleTimeString('en-US', { hour12: true });
    }
};
__decorate([
    property({ type: String })
], DashProducerElement.prototype, "currentTime", void 0);
__decorate([
    property({ type: Number })
], DashProducerElement.prototype, "selectedContentTab", void 0);
__decorate([
    property({ type: Number })
], DashProducerElement.prototype, "selectedBidsAndPrizesTab", void 0);
DashProducerElement = __decorate([
    customElement('dash-producer')
], DashProducerElement);
export default DashProducerElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1wcm9kdWNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtcHJvZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBR3JELElBQXFCLG1CQUFtQixHQUF4QyxNQUFxQixtQkFBb0IsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFEckY7O1FBTUMsdUJBQWtCLEdBQUcsQ0FBQyxDQUFDO1FBR3ZCLDZCQUF3QixHQUFHLENBQUMsQ0FBQztJQWE5QixDQUFDO0lBWEEsaUJBQWlCO1FBQ2hCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Q0FDRCxDQUFBO0FBbkJBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3dEQUNMO0FBR3BCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOytEQUNGO0FBR3ZCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3FFQUNJO0FBUlQsbUJBQW1CO0lBRHZDLGFBQWEsQ0FBQyxlQUFlLENBQUM7R0FDVixtQkFBbUIsQ0FxQnZDO2VBckJvQixtQkFBbUIifQ==