var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DashIncidentsCreatorElement_1;
const { customElement, property } = Polymer.decorators;
const log = new nodecg.Logger(`${nodecg.bundleName}:victorOps`);
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let DashIncidentsCreatorElement = DashIncidentsCreatorElement_1 = class DashIncidentsCreatorElement extends Polymer.MutableData(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     * @appliesMixin Polymer.MutableData
     */
    constructor() {
        super(...arguments);
        this._requestStatus = 'ready';
    }
    async send() {
        const detailsElem = this.$.details;
        log.info('Sending incident creation request...');
        this._requestStatus = 'sending';
        try {
            await nodecg.sendMessage('victorOps:createIncident', {
                routingKey: this._routingKey,
                subject: this._subject,
                details: detailsElem.value
            });
            log.info('Incident successfully created.');
            this._requestStatus = 'success';
            this._routingKey = '';
            this._subject = '';
            detailsElem.value = '';
        }
        catch (error) {
            log.warn('Failed to create incident:', error);
            this._requestStatus = 'failure';
        }
    }
    _computeSending(_requestStatus) {
        return _requestStatus === 'sending';
    }
    _requestStatusChanged(requestStatus) {
        clearTimeout(this._statusFadeTimeout);
        this.$.status.classList.remove('fade-out');
        if (requestStatus === 'success' || requestStatus === 'failure') {
            this._statusFadeTimeout = window.setTimeout(() => {
                this._statusFadeTimeout = undefined;
                this.$.status.classList.add('fade-out');
            }, 5000);
        }
    }
    _calcSendDisabled(sending, routingKey, subject) {
        return sending || !routingKey || !subject;
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true, computed: '_computeSending(_requestStatus)' })
], DashIncidentsCreatorElement.prototype, "sending", void 0);
__decorate([
    property({ type: String, observer: DashIncidentsCreatorElement_1.prototype._requestStatusChanged })
], DashIncidentsCreatorElement.prototype, "_requestStatus", void 0);
DashIncidentsCreatorElement = DashIncidentsCreatorElement_1 = __decorate([
    customElement('dash-incidents-creator')
], DashIncidentsCreatorElement);
export default DashIncidentsCreatorElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbmNpZGVudHMtY3JlYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhc2gtaW5jaWRlbnRzLWNyZWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsVUFBVSxZQUFZLENBQUMsQ0FBQztBQUVoRTs7OztHQUlHO0FBRUgsSUFBcUIsMkJBQTJCLG1DQUFoRCxNQUFxQiwyQkFBNEIsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFON0Y7Ozs7T0FJRztJQUNIOztRQU1DLG1CQUFjLEdBQUcsT0FBTyxDQUFDO0lBZ0QxQixDQUFDO0lBMUNBLEtBQUssQ0FBQyxJQUFJO1FBQ1QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUE4QixDQUFDO1FBQzFELEdBQUcsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztRQUVoQyxJQUFJO1lBQ0gsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLDBCQUEwQixFQUFFO2dCQUNwRCxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzVCLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdEIsT0FBTyxFQUFFLFdBQVcsQ0FBQyxLQUFLO2FBQzFCLENBQUMsQ0FBQztZQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztZQUVoQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNuQixXQUFXLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztTQUN2QjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsY0FBYyxHQUFHLFNBQVMsQ0FBQztTQUNoQztJQUNGLENBQUM7SUFFRCxlQUFlLENBQUMsY0FBc0I7UUFDckMsT0FBTyxjQUFjLEtBQUssU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxxQkFBcUIsQ0FBQyxhQUFxQjtRQUMxQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUUzQyxJQUFJLGFBQWEsS0FBSyxTQUFTLElBQUksYUFBYSxLQUFLLFNBQVMsRUFBRTtZQUMvRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1Q7SUFDRixDQUFDO0lBRUQsaUJBQWlCLENBQUMsT0FBZ0IsRUFBRSxVQUFrQixFQUFFLE9BQWU7UUFDdEUsT0FBTyxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDM0MsQ0FBQztDQUNELENBQUE7QUFuREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsaUNBQWlDLEVBQUMsQ0FBQzs0REFDaEY7QUFHakI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSw2QkFBMkIsQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUMsQ0FBQzttRUFDdkU7QUFMTCwyQkFBMkI7SUFEL0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0dBQ25CLDJCQUEyQixDQXFEL0M7ZUFyRG9CLDJCQUEyQiJ9