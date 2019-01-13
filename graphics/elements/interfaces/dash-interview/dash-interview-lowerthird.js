var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const currentIntermissionRep = nodecg.Replicant('currentIntermission');
const currentRunRep = nodecg.Replicant('currentRun');
const interviewNamesRep = nodecg.Replicant('interview:names');
const lowerthirdShowingRep = nodecg.Replicant('interview:lowerthirdShowing');
const runnersRep = nodecg.Replicant('runners');
const scheduleRep = nodecg.Replicant('schedule');
/**
 * @customElement
 * @polymer
 */
let DashInterviewLowerthirdElement = class DashInterviewLowerthirdElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.lowerthirdShowing = false;
        this._typeaheadCandidates = [];
    }
    connectedCallback() {
        super.connectedCallback();
        Polymer.RenderStatus.beforeNextRender(this, () => {
            runnersRep.on('change', newVal => {
                if (newVal && newVal.length > 0) {
                    this._typeaheadCandidates = newVal.filter(Boolean).map(runner => runner.name).map(String).sort();
                }
                else {
                    this._typeaheadCandidates = [];
                }
            });
            interviewNamesRep.on('change', newVal => {
                this.setNames(newVal);
            });
            lowerthirdShowingRep.on('change', newVal => {
                this.lowerthirdShowing = newVal;
            });
        });
    }
    openPreview() {
        this.$.lowerthirdPreview.updatePreview(this.getNames());
        this.$.lowerthirdPreviewDialog.open();
    }
    calcStartDisabled(lowerthirdShowing, questionShowing) {
        return lowerthirdShowing || questionShowing;
    }
    showLowerthird() {
        this.takeNames();
        lowerthirdShowingRep.value = true;
    }
    hideLowerthird() {
        lowerthirdShowingRep.value = false;
    }
    autoLowerthird() {
        this.takeNames();
        nodecg.sendMessage('pulseInterviewLowerthird', 10);
    }
    /**
     * Takes the names currently entered into the inputs.
     */
    takeNames() {
        interviewNamesRep.value = this.getNames();
    }
    /**
     * Returns an array of the names currently entered into the inputs.
     */
    getNames() {
        return this.getInputs().map(input => {
            return {
                name: input.name,
                title: input.title
            };
        });
    }
    setNames(names) {
        const typeaheads = this.getInputs();
        if (!names || names.length <= 0) {
            typeaheads.forEach(input => {
                input.name = '';
                input.title = '';
            });
            return;
        }
        typeaheads.forEach((input, index) => {
            input.name = String(names[index] ? names[index].name : '');
            input.title = String(names[index] ? names[index].title : '');
        });
    }
    /**
     * Retrieves the name inputs as an array of DOM elements.
     */
    getInputs() {
        return Array.from(this.$.nameInputs.shadowRoot.querySelectorAll('ui-sortable-list-item'))
            .map(uiSortableListItem => uiSortableListItem.shadowRoot.querySelector('dash-lowerthird-name-input'));
    }
    any(...args) {
        return args.find(arg => arg);
    }
    openRefillDialog() {
        if (!currentIntermissionRep.value ||
            !scheduleRep.value ||
            !currentRunRep.value) {
            return;
        }
        const currentInterview = currentIntermissionRep.value.content.find(item => item.type === 'interview');
        const nextInterview = scheduleRep.value.find(scheduleItem => {
            // Ignore items which are not interviews.
            if (scheduleItem.type !== 'interview') {
                return false;
            }
            // If we have a currentInterview, return the first interview after it.
            if (currentInterview) {
                return scheduleItem.order > currentInterview.order;
            }
            // If we don't have a currentInterview, return the first interview after the currentRun.
            // Ignore items before the currentRun.
            return scheduleItem.order >= currentRunRep.value.order;
        });
        let currentInterviewNames = [];
        let nextInterviewNames = [];
        if (currentInterview) {
            currentInterviewNames = currentInterview.interviewers.concat(currentInterview.interviewees);
        }
        if (nextInterview) {
            nextInterviewNames = nextInterview.interviewers.concat(nextInterview.interviewees);
        }
        while (currentInterviewNames.length < 5) {
            currentInterviewNames.push('(none)');
        }
        while (nextInterviewNames.length < 5) {
            nextInterviewNames.push('(none)');
        }
        this.$.currentLowerthirdRefillOption.names = currentInterviewNames;
        this.$.nextLowerthirdRefillOption.names = nextInterviewNames;
        this.$.lowerthirdRefillDialog.open();
        nodecg.log.info('currentInterview:', currentInterview);
        nodecg.log.info('currentInterviewNames:', currentInterviewNames);
        nodecg.log.info('nextInterview:', nextInterview);
        nodecg.log.info('nextInterviewNames:', nextInterviewNames);
    }
    closeRefillDialog() {
        this.$.lowerthirdRefillDialog.close();
    }
    _handleRefillOptionAccepted(e) {
        this.setNames(e.detail.names);
        this.takeNames();
        this.closeRefillDialog();
    }
    _handleNameInputChange(event) {
        if (!interviewNamesRep.value) {
            return;
        }
        interviewNamesRep.value[event.model.index] = {
            name: event.target.name,
            title: event.target.title
        };
    }
};
__decorate([
    property({ type: Boolean, notify: true })
], DashInterviewLowerthirdElement.prototype, "lowerthirdShowing", void 0);
__decorate([
    property({ type: Boolean })
], DashInterviewLowerthirdElement.prototype, "questionShowing", void 0);
__decorate([
    property({ type: Array })
], DashInterviewLowerthirdElement.prototype, "_typeaheadCandidates", void 0);
DashInterviewLowerthirdElement = __decorate([
    customElement('dash-interview-lowerthird')
], DashInterviewLowerthirdElement);
export default DashInterviewLowerthirdElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbG93ZXJ0aGlyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LWxvd2VydGhpcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBT0EsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQ3JELE1BQU0sc0JBQXNCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBc0IscUJBQXFCLENBQUMsQ0FBQztBQUM1RixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFNLFlBQVksQ0FBQyxDQUFDO0FBQzFELE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBbUIsaUJBQWlCLENBQUMsQ0FBQztBQUNoRixNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVUsNkJBQTZCLENBQUMsQ0FBQztBQUN0RixNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQWlCLFVBQVUsQ0FBQyxDQUFDO0FBRWpFOzs7R0FHRztBQUVILElBQXFCLDhCQUE4QixHQUFuRCxNQUFxQiw4QkFBK0IsU0FBUSxPQUFPLENBQUMsT0FBTztJQUwzRTs7O09BR0c7SUFDSDs7UUFHQyxzQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFNMUIseUJBQW9CLEdBQWEsRUFBRSxDQUFDO0lBc0tyQyxDQUFDO0lBcEtBLGlCQUFpQjtRQUNoQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDaEQsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNoQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO2lCQUNqRztxQkFBTTtvQkFDTixJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO2lCQUMvQjtZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUgsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQUMsQ0FBQztZQUVILG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxNQUFNLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLENBQUMsQ0FBQyxpQkFBMEMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDakYsSUFBSSxDQUFDLENBQUMsQ0FBQyx1QkFBOEMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQsaUJBQWlCLENBQUMsaUJBQTBCLEVBQUUsZUFBd0I7UUFDckUsT0FBTyxpQkFBaUIsSUFBSSxlQUFlLENBQUM7SUFDN0MsQ0FBQztJQUVELGNBQWM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsb0JBQW9CLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsY0FBYztRQUNiLG9CQUFvQixDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDcEMsQ0FBQztJQUVELGNBQWM7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsTUFBTSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxTQUFTO1FBQ1IsaUJBQWlCLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRO1FBQ1AsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25DLE9BQU87Z0JBQ04sSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO2dCQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7YUFDbEIsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUF3QztRQUNoRCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFcEMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNoQyxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztnQkFDaEIsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1A7UUFFRCxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25DLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDM0QsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVyxDQUFDLGdCQUFnQixDQUFDLHVCQUF1QixDQUFDLENBQUM7YUFDeEYsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFXLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQXFDLENBQUM7SUFDN0ksQ0FBQztJQUVELEdBQUcsQ0FBQyxHQUFHLElBQVc7UUFDakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLO1lBQ2hDLENBQUMsV0FBVyxDQUFDLEtBQUs7WUFDbEIsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFO1lBQ3RCLE9BQU87U0FDUDtRQUVELE1BQU0sZ0JBQWdCLEdBQUcsc0JBQXNCLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsQ0FBYyxDQUFDO1FBQ25ILE1BQU0sYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzNELHlDQUF5QztZQUN6QyxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO2dCQUN0QyxPQUFPLEtBQUssQ0FBQzthQUNiO1lBRUQsc0VBQXNFO1lBQ3RFLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ3JCLE9BQU8sWUFBWSxDQUFDLEtBQUssR0FBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7YUFDbkQ7WUFFRCx3RkFBd0Y7WUFDeEYsc0NBQXNDO1lBQ3RDLE9BQU8sWUFBWSxDQUFDLEtBQUssSUFBSSxhQUFhLENBQUMsS0FBTSxDQUFDLEtBQUssQ0FBQztRQUN6RCxDQUFDLENBQTRCLENBQUM7UUFFOUIsSUFBSSxxQkFBcUIsR0FBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxrQkFBa0IsR0FBYSxFQUFFLENBQUM7UUFFdEMsSUFBSSxnQkFBZ0IsRUFBRTtZQUNyQixxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQzVGO1FBRUQsSUFBSSxhQUFhLEVBQUU7WUFDbEIsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ25GO1FBRUQsT0FBTyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNyQztRQUVELE9BQU8sa0JBQWtCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNyQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7UUFFQSxJQUFJLENBQUMsQ0FBQyxDQUFDLDZCQUE0RSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUNsSCxJQUFJLENBQUMsQ0FBQyxDQUFDLDBCQUF5RSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQztRQUM1RyxJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUE2QyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRTdELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLENBQUM7UUFDdkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNqRCxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLHNCQUE2QyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCwyQkFBMkIsQ0FBQyxDQUFNO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFzQixDQUFDLEtBQVU7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRTtZQUM3QixPQUFPO1NBQ1A7UUFDRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRztZQUM1QyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJO1lBQ3ZCLEtBQUssRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDekIsQ0FBQztJQUNILENBQUM7Q0FDRCxDQUFBO0FBNUtBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDLENBQUM7eUVBQ2Q7QUFHMUI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLENBQUM7dUVBQ0Q7QUFHekI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7NEVBQ1k7QUFSaEIsOEJBQThCO0lBRGxELGFBQWEsQ0FBQywyQkFBMkIsQ0FBQztHQUN0Qiw4QkFBOEIsQ0E4S2xEO2VBOUtvQiw4QkFBOEIifQ==