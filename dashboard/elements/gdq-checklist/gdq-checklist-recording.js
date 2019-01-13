var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property, observe } = Polymer.decorators;
const checklistRep = nodecg.Replicant('checklist');
const stopwatchRep = nodecg.Replicant('stopwatch');
const cyclingRecordingsRep = nodecg.Replicant('obs:cyclingRecordings');
/**
 * @customElement
 * @polymer
 */
let GDQChecklistRecordingElement = class GDQChecklistRecordingElement extends Polymer.Element {
    ready() {
        super.ready();
        checklistRep.on('change', newVal => {
            if (!newVal) {
                return;
            }
            const incompleteTasks = [];
            for (const key in newVal) { // tslint:disable-line:no-for-in
                if (!{}.hasOwnProperty.call(newVal, key)) {
                    continue;
                }
                const category = newVal[key];
                category.forEach(task => {
                    if (!task.complete) {
                        incompleteTasks.push(task);
                    }
                });
            }
            this.warning = incompleteTasks.length > 1 && incompleteTasks[0].name !== 'Cycle Recordings';
        });
        stopwatchRep.on('change', newVal => {
            if (!newVal) {
                return;
            }
            this._stopwatchState = newVal.state === 'running';
        });
        cyclingRecordingsRep.on('change', newVal => {
            this._cyclingRecordings = newVal;
        });
        nodecg.listenFor('obs:recordingsCycled', error => {
            const toast = this.$.toast;
            if (error) {
                let errorString = error;
                if (error.message) {
                    errorString = error.message;
                }
                else if (error.error) {
                    errorString = error.error;
                }
                toast.showErrorToast('Failed to cycle recordings: ' + errorString);
            }
            else {
                toast.showSuccessToast('Recordings cycled.');
            }
        });
        this.addEventListener('click', () => {
            const checkbox = this.$.checkbox;
            checkbox.click();
        });
    }
    _calcDisabled(stopwatchState, cyclingRecordings) {
        this.disabled = Boolean(stopwatchState || cyclingRecordings);
    }
    _calcContextPage(warning, disabled, cyclingRecordings) {
        if (cyclingRecordings) {
            return 'cycling';
        }
        if (disabled) {
            return 'disabled';
        }
        if (warning) {
            return 'warning';
        }
        return 'all-clear';
    }
};
__decorate([
    property({ type: String })
], GDQChecklistRecordingElement.prototype, "name", void 0);
__decorate([
    property({ type: String })
], GDQChecklistRecordingElement.prototype, "category", void 0);
__decorate([
    property({ type: Boolean, notify: true, reflectToAttribute: true })
], GDQChecklistRecordingElement.prototype, "checked", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQChecklistRecordingElement.prototype, "warning", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQChecklistRecordingElement.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], GDQChecklistRecordingElement.prototype, "_stopwatchState", void 0);
__decorate([
    property({ type: Boolean })
], GDQChecklistRecordingElement.prototype, "_cyclingRecordings", void 0);
__decorate([
    observe('_stopwatchState', '_cyclingRecordings')
], GDQChecklistRecordingElement.prototype, "_calcDisabled", null);
GDQChecklistRecordingElement = __decorate([
    customElement('gdq-checklist-recording')
], GDQChecklistRecordingElement);
export default GDQChecklistRecordingElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWNoZWNrbGlzdC1yZWNvcmRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtY2hlY2tsaXN0LXJlY29yZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFJQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBQzlELE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFDOUQsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBWSxXQUFXLENBQUMsQ0FBQztBQUM5RCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVUsdUJBQXVCLENBQUMsQ0FBQztBQUVoRjs7O0dBR0c7QUFFSCxJQUFxQiw0QkFBNEIsR0FBakQsTUFBcUIsNEJBQTZCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFzQnhFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNaLE9BQU87YUFDUDtZQUVELE1BQU0sZUFBZSxHQUFtQixFQUFFLENBQUM7WUFDM0MsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsRUFBRSxnQ0FBZ0M7Z0JBQzNELElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEVBQUU7b0JBQ3pDLFNBQVM7aUJBQ1Q7Z0JBRUQsTUFBTSxRQUFRLEdBQUksTUFBYyxDQUFDLEdBQUcsQ0FBbUIsQ0FBQztnQkFDeEQsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ25CLGVBQWUsQ0FBQyxJQUFJLENB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