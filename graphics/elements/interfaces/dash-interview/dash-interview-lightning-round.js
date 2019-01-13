var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const questions = nodecg.Replicant('interview:questionTweets');
const questionShowing = nodecg.Replicant('interview:questionShowing');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let DashInterviewLightningRoundElement = class DashInterviewLightningRoundElement extends Polymer.MutableData(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     * @appliesMixin Polymer.MutableData
     */
    constructor() {
        super(...arguments);
        this.questionShowing = false;
    }
    ready() {
        super.ready();
        questions.on('change', newVal => {
            this.set('replies', newVal);
        });
        questionShowing.on('change', newVal => {
            this.questionShowing = newVal;
        });
    }
    openEndInterviewDialog() {
        this.$.endInterviewDialog.open();
    }
    endInterview() {
        nodecg.sendMessage('interview:end');
    }
};
__decorate([
    property({ type: Boolean, notify: true })
], DashInterviewLightningRoundElement.prototype, "questionShowing", void 0);
__decorate([
    property({ type: Object })
], DashInterviewLightningRoundElement.prototype, "replies", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewLightningRoundElement.prototype, "_markingTopQuestionAsDone", void 0);
DashInterviewLightningRoundElement = __decorate([
    customElement('dash-interview-lightning-round')
], DashInterviewLightningRoundElement);
export default DashInterviewLightningRoundElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbGlnaHRuaW5nLXJvdW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaC1pbnRlcnZpZXctbGlnaHRuaW5nLXJvdW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLDBCQUEwQixDQUFDLENBQUM7QUFDeEUsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBVSwyQkFBMkIsQ0FBQyxDQUFDO0FBRS9FOzs7O0dBSUc7QUFFSCxJQUFxQixrQ0FBa0MsR0FBdkQsTUFBcUIsa0NBQW1DLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBTnBHOzs7O09BSUc7SUFDSDs7UUFHQyxvQkFBZSxHQUFHLEtBQUssQ0FBQztJQTJCekIsQ0FBQztJQW5CQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxlQUFlLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxrQkFBeUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRUQsWUFBWTtRQUNYLE1BQU0sQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNELENBQUE7QUEzQkE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQzsyRUFDaEI7QUFHeEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7bUVBQ1I7QUFHakI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7cUZBQ1M7QUFSZixrQ0FBa0M7SUFEdEQsYUFBYSxDQUFDLGdDQUFnQyxDQUFDO0dBQzNCLGtDQUFrQyxDQTZCdEQ7ZUE3Qm9CLGtDQUFrQyJ9