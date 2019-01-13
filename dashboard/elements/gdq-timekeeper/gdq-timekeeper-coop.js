var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let GDQTimekeeperCoopElement = class GDQTimekeeperCoopElement extends Polymer.Element {
    calcRunnerStatus(results) {
        if (results[0]) {
            return results[0].time.formatted;
        }
        return 'Running';
    }
    calcRunnerStatusClass(results) {
        if (results[0] && !results[0].forfeit) {
            return 'finished';
        }
        return '';
    }
    calcFinishHidden(results) {
        return results[0] && !results[0].forfeit;
    }
    calcResumeHidden(results) {
        return !results[0];
    }
    calcForfeitHidden(results) {
        return results[0] && results[0].forfeit;
    }
    calcEditDisabled(results) {
        return !results[0];
    }
    finish() {
        nodecg.sendMessage('completeRunner', { index: this.index, forfeit: false });
    }
    forfeit() {
        nodecg.sendMessage('completeRunner', { index: this.index, forfeit: true });
    }
    resume() {
        nodecg.sendMessage('resumeRunner', this.index);
    }
    editTime() {
        this.dispatchEvent(new CustomEvent('edit-time', { bubbles: true, composed: true }));
    }
    calcConcatenatedRunners(runners) {
        let concatenatedRunners = runners[0].name;
        if (runners.length > 1) {
            concatenatedRunners = runners.slice(1).reduce((prev, curr, index, array) => {
                if (!curr || !curr.name) {
                    return prev;
                }
                if (index === array.length - 1) {
                    return `${prev} & ${curr.name}`;
                }
                return `${prev}, ${curr.name}`;
            }, concatenatedRunners);
        }
        return concatenatedRunners;
    }
};
__decorate([
    property({ type: String })
], GDQTimekeeperCoopElement.prototype, "importPath", void 0);
__decorate([
    property({ type: Number })
], GDQTimekeeperCoopElement.prototype, "index", void 0);
__decorate([
    property({ type: Array })
], GDQTimekeeperCoopElement.prototype, "runners", void 0);
__decorate([
    property({ type: Array })
], GDQTimekeeperCoopElement.prototype, "results", void 0);
GDQTimekeeperCoopElement = __decorate([
    customElement('gdq-timekeeper-coop')
], GDQTimekeeperCoopElement);
export default GDQTimekeeperCoopElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXRpbWVrZWVwZXItY29vcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS10aW1la2VlcGVyLWNvb3AudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBR0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBR3JELElBQXFCLHdCQUF3QixHQUE3QyxNQUFxQix3QkFBeUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQWFwRSxnQkFBZ0IsQ0FBQyxPQUEwQjtRQUMxQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNmLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDakM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBMEI7UUFDL0MsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFO1lBQ3RDLE9BQU8sVUFBVSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBMEI7UUFDMUMsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUEwQjtRQUMxQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUEwQjtRQUMzQyxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUEwQjtRQUMxQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxNQUFNO1FBQ0wsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxPQUFPO1FBQ04sTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxNQUFNO1FBQ0wsTUFBTSxDQUFDLFdBQVcsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxRQUFRO1FBQ1AsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLEVBQUUsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkYsQ0FBQztJQUVELHVCQUF1QixDQUFDLE9BQWlCO1FBQ3hDLElBQUksbUJBQW1CLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMxQyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUN4QixPQUFPLElBQUksQ0FBQztpQkFDWjtnQkFFRCxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0IsT0FBTyxHQUFHLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2hDO2dCQUVELE9BQU8sR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDO0NBQ0QsQ0FBQTtBQTVFQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs0REFDTjtBQUduQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzt1REFDWDtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3lEQUNOO0FBR2xCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBQyxDQUFDO3lEQUNZO0FBWGhCLHdCQUF3QjtJQUQ1QyxhQUFhLENBQUMscUJBQXFCLENBQUM7R0FDaEIsd0JBQXdCLENBOEU1QztlQTlFb0Isd0JBQXdCIn0=