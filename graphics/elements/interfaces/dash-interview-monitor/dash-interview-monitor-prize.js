var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentRunRep = nodecg.Replicant('currentRun');
/**
 * @customElement
 * @polymer
 */
let DashInterviewMonitorPrizeElement = class DashInterviewMonitorPrizeElement extends Polymer.MutableData(Polymer.Element) {
    ready() {
        super.ready();
        currentRunRep.on('change', newVal => {
            this.currentRun = newVal;
        });
    }
    _computeBidType(prize) {
        return prize.sumdonations ? 'total' : 'single';
    }
    _computeClosed(prize, currentRun) {
        if (!prize || !currentRun) {
            return false;
        }
        return prize.endrun.order < currentRun.order;
    }
    _calcBidTypeChar(bidType) {
        if (!bidType) {
            return '';
        }
        return bidType.charAt(0);
    }
    _calcOpening(prize, currentRun) {
        if (!prize || !currentRun) {
            return '?';
        }
        if (prize.startrun.order <= currentRun.order) {
            return 'OPEN';
        }
        return prize.startrun.name;
    }
    _calcClosing(prize, currentRun) {
        if (!prize || !currentRun) {
            return '?';
        }
        if (prize.endrun.order < currentRun.order) {
            return 'CLOSED';
        }
        return prize.endrun.name;
    }
};
__decorate([
    property({ type: Object })
], DashInterviewMonitorPrizeElement.prototype, "prize", void 0);
__decorate([
    property({ type: Object })
], DashInterviewMonitorPrizeElement.prototype, "currentRun", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true, computed: '_computeBidType(prize)' })
], DashInterviewMonitorPrizeElement.prototype, "bidType", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true, computed: '_computeClosed(prize, currentRun)' })
], DashInterviewMonitorPrizeElement.prototype, "closed", void 0);
DashInterviewMonitorPrizeElement = __decorate([
    customElement('dash-interview-monitor-prize')
], DashInterviewMonitorPrizeElement);
export default DashInterviewMonitorPrizeElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbW9uaXRvci1wcml6ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3ItcHJpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQU0sWUFBWSxDQUFDLENBQUM7QUFFMUQ7OztHQUdHO0FBRUgsSUFBcUIsZ0NBQWdDLEdBQXJELE1BQXFCLGdDQUFpQyxTQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztJQWFqRyxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsYUFBYSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQVk7UUFDM0IsT0FBTyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNoRCxDQUFDO0lBRUQsY0FBYyxDQUFDLEtBQWEsRUFBRSxVQUFnQjtRQUM3QyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLE9BQU8sS0FBSyxDQUFDO1NBQ2I7UUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7SUFDOUMsQ0FBQztJQUVELGdCQUFnQixDQUFDLE9BQWdCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQztTQUNWO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYSxFQUFFLFVBQWdCO1FBQzNDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDMUIsT0FBTyxHQUFHLENBQUM7U0FDWDtRQUVELElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxLQUFLLElBQUksVUFBVSxDQUFDLEtBQUssRUFBRTtZQUM3QyxPQUFPLE1BQU0sQ0FBQztTQUNkO1FBRUQsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWEsRUFBRSxVQUFnQjtRQUMzQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQzFCLE9BQU8sR0FBRyxDQUFDO1NBQ1g7UUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUU7WUFDMUMsT0FBTyxRQUFRLENBQUM7U0FDaEI7UUFFRCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzFCLENBQUM7Q0FDRCxDQUFBO0FBN0RBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOytEQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7b0VBQ1Q7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUMsQ0FBQztpRUFDdkU7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsbUNBQW1DLEVBQUMsQ0FBQztnRUFDbkY7QUFYSSxnQ0FBZ0M7SUFEcEQsYUFBYSxDQUFDLDhCQUE4QixDQUFDO0dBQ3pCLGdDQUFnQyxDQStEcEQ7ZUEvRG9CLGdDQUFnQyJ9