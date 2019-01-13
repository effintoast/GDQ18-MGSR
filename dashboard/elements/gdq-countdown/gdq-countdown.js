var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement } = Polymer.decorators;
const countdownRunning = nodecg.Replicant('countdownRunning');
const countdown = nodecg.Replicant('countdown');
let GDQCountdownElement = class GDQCountdownElement extends Polymer.Element {
    connectedCallback() {
        super.connectedCallback();
        Polymer.RenderStatus.beforeNextRender(this, () => {
            countdown.on('change', newVal => {
                if (newVal) {
                    const timeInput = this.$.timeInput;
                    timeInput.setMS(newVal.minutes, newVal.seconds);
                }
            });
            countdownRunning.on('change', newVal => {
                if (newVal) {
                    this.$.countdownContainer.setAttribute('disabled', 'true');
                    this.$.start.setAttribute('disabled-running', 'true');
                    this.$.stop.removeAttribute('disabled');
                }
                else {
                    this.$.countdownContainer.removeAttribute('disabled');
                    this.$.start.removeAttribute('disabled-running');
                    this.$.stop.setAttribute('disabled', 'true');
                }
                this.checkStartButton();
            });
        });
    }
    start() {
        nodecg.sendMessage('startCountdown', this.$.timeInput.value);
    }
    stop() {
        nodecg.sendMessage('stopCountdown');
    }
    _handleTimeInvalidChanged(e) {
        if (e.detail && e.detail.value) {
            this.$.start.setAttribute('disabled-invalid', 'true');
        }
        else {
            this.$.start.removeAttribute('disabled-invalid');
        }
        this.checkStartButton();
    }
    /**
     * Enables or disables the timer start button based on some criteria.
     */
    checkStartButton() {
        if (this.$.start.hasAttribute('disabled-invalid') || this.$.start.hasAttribute('disabled-running')) {
            this.$.start.setAttribute('disabled', 'true');
        }
        else {
            this.$.start.removeAttribute('disabled');
        }
    }
};
GDQCountdownElement = __decorate([
    customElement('gdq-countdown')
], GDQCountdownElement);
export default GDQCountdownElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWNvdW50ZG93bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1jb3VudGRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDM0MsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFtQixrQkFBa0IsQ0FBQyxDQUFDO0FBQ2hGLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQVksV0FBVyxDQUFDLENBQUM7QUFHM0QsSUFBcUIsbUJBQW1CLEdBQXhDLE1BQXFCLG1CQUFvQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBQy9ELGlCQUFpQjtRQUNoQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUUxQixPQUFPLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDaEQsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksTUFBTSxFQUFFO29CQUNYLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBNkIsQ0FBQztvQkFDdkQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDaEQ7WUFDRixDQUFDLENBQUMsQ0FBQztZQUVILGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7Z0JBQ3RDLElBQUksTUFBTSxFQUFFO29CQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLE1BQU0sQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNOLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDN0M7Z0JBRUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxLQUFLO1FBQ0osTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQThCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELElBQUk7UUFDSCxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx5QkFBeUIsQ0FBQyxDQUFRO1FBQ2pDLElBQUssQ0FBUyxDQUFDLE1BQU0sSUFBSyxDQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNqRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdEQ7YUFBTTtZQUNOLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ2pEO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ2YsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBRTtZQUNuRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDTixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekM7SUFDRixDQUFDO0NBQ0QsQ0FBQTtBQXhEb0IsbUJBQW1CO0lBRHZDLGFBQWEsQ0FBQyxlQUFlLENBQUM7R0FDVixtQkFBbUIsQ0F3RHZDO2VBeERvQixtQkFBbUIifQ==