var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
let GDQTimekeeperRunnerElement = class GDQTimekeeperRunnerElement extends Polymer.Element {
    calcRunnerStatus(results, index) {
        if (!results) {
            return;
        }
        if (results[index] && results[index].time) {
            return results[index].time.formatted;
        }
        return 'Running';
    }
    calcRunnerStatusClass(results, index) {
        if (!results) {
            return;
        }
        if (results[index] && !results[index].forfeit) {
            return 'finished';
        }
        return '';
    }
    calcFinishHidden(results, index) {
        if (!results) {
            return;
        }
        return results[index] && !results[index].forfeit;
    }
    calcResumeHidden(results, index) {
        if (!results) {
            return;
        }
        return !results[index];
    }
    calcForfeitHidden(results, index) {
        if (!results) {
            return;
        }
        return results[index] && results[index].forfeit;
    }
    calcEditDisabled(results, runnerIndex) {
        if (!results) {
            return;
        }
        return !results[runnerIndex];
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
};
__decorate([
    property({ type: String })
], GDQTimekeeperRunnerElement.prototype, "importPath", void 0);
__decorate([
    property({ type: Number })
], GDQTimekeeperRunnerElement.prototype, "index", void 0);
__decorate([
    property({ type: Object })
], GDQTimekeeperRunnerElement.prototype, "runner", void 0);
__decorate([
    property({ type: Array })
], GDQTimekeeperRunnerElement.prototype, "results", void 0);
GDQTimekeeperRunnerElement = __decorate([
    customElement('gdq-timekeeper-runner')
], GDQTimekeeperRunnerElement);
export default GDQTimekeeperRunnerElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXRpbWVrZWVwZXItcnVubmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLXRpbWVrZWVwZXItcnVubmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUdyRCxJQUFxQiwwQkFBMEIsR0FBL0MsTUFBcUIsMEJBQTJCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFhdEUsZ0JBQWdCLENBQUMsT0FBMEIsRUFBRSxLQUFhO1FBQ3pELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPO1NBQ1A7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFO1lBQzFDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDckM7UUFFRCxPQUFPLFNBQVMsQ0FBQztJQUNsQixDQUFDO0lBRUQscUJBQXFCLENBQUMsT0FBMEIsRUFBRSxLQUFhO1FBQzlELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPO1NBQ1A7UUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDOUMsT0FBTyxVQUFVLENBQUM7U0FDbEI7UUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNYLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxPQUEwQixFQUFFLEtBQWE7UUFDekQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU87U0FDUDtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUNsRCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsT0FBMEIsRUFBRSxLQUFhO1FBQ3pELElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixPQUFPO1NBQ1A7UUFFRCxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxPQUEwQixFQUFFLEtBQWE7UUFDMUQsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU87U0FDUDtRQUVELE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDakQsQ0FBQztJQUVELGdCQUFnQixDQUFDLE9BQTBCLEVBQUUsV0FBbUI7UUFDL0QsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNiLE9BQU87U0FDUDtRQUVELE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU07UUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE9BQU87UUFDTixNQUFNLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELE1BQU07UUFDTCxNQUFNLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFFBQVE7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLFdBQVcsRUFBRSxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0NBQ0QsQ0FBQTtBQWxGQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs4REFDTjtBQUduQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzt5REFDWDtBQUdkO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzBEQUNWO0FBR2Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7MkRBQ1k7QUFYaEIsMEJBQTBCO0lBRDlDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztHQUNsQiwwQkFBMEIsQ0FvRjlDO2VBcEZvQiwwQkFBMEIifQ==