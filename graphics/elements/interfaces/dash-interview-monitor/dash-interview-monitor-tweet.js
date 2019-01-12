var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DashInterviewMonitorTweetElement_1;
const { customElement, property } = Polymer.decorators;
let DashInterviewMonitorTweetElement = DashInterviewMonitorTweetElement_1 = class DashInterviewMonitorTweetElement extends Polymer.Element {
    populateBody() {
        if (!this.tweet) {
            return;
        }
        this.$.body.innerHTML = this.tweet.text;
    }
};
__decorate([
    property({ type: Object, observer: DashInterviewMonitorTweetElement_1.prototype.populateBody })
], DashInterviewMonitorTweetElement.prototype, "tweet", void 0);
DashInterviewMonitorTweetElement = DashInterviewMonitorTweetElement_1 = __decorate([
    customElement('dash-interview-monitor-tweet')
], DashInterviewMonitorTweetElement);
export default DashInterviewMonitorTweetElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbW9uaXRvci10d2VldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3ItdHdlZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUdyRCxJQUFxQixnQ0FBZ0Msd0NBQXJELE1BQXFCLGdDQUFpQyxTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSTVFLFlBQVk7UUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDekMsQ0FBQztDQUNELENBQUE7QUFUQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGtDQUFnQyxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUMsQ0FBQzsrREFDL0U7QUFGTyxnQ0FBZ0M7SUFEcEQsYUFBYSxDQUFDLDhCQUE4QixDQUFDO0dBQ3pCLGdDQUFnQyxDQVdwRDtlQVhvQixnQ0FBZ0MifQ==