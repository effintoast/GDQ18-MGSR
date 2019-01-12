var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashIncidentsCreatorElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
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
    } catch (error) {
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

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_computeSending(_requestStatus)'
})], DashIncidentsCreatorElement.prototype, "sending", void 0);

__decorate([property({
  type: String,
  observer: DashIncidentsCreatorElement_1.prototype._requestStatusChanged
})], DashIncidentsCreatorElement.prototype, "_requestStatus", void 0);

DashIncidentsCreatorElement = DashIncidentsCreatorElement_1 = __decorate([customElement('dash-incidents-creator')], DashIncidentsCreatorElement);
export default DashIncidentsCreatorElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW5jaWRlbnRzLWNyZWF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUNBLE1BQU0sR0FBRyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQVgsQ0FBa0IsR0FBRyxNQUFNLENBQUMsVUFBVSxZQUF0QyxDQUFaO0FBRUE7Ozs7OztBQU1BLElBQXFCLDJCQUEyQixHQUFBLDZCQUFBLEdBQWhELE1BQXFCLDJCQUFyQixTQUF5RCxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBekQsQ0FBNkY7QUFON0Y7Ozs7O0FBS0EsRUFBQSxXQUFBLEdBQUE7O0FBTUMsU0FBQSxjQUFBLEdBQWlCLE9BQWpCO0FBZ0RBOztBQTFDQSxRQUFNLElBQU4sR0FBVTtBQUNULFVBQU0sV0FBVyxHQUFHLEtBQUssQ0FBTCxDQUFPLE9BQTNCO0FBQ0EsSUFBQSxHQUFHLENBQUMsSUFBSixDQUFTLHNDQUFUO0FBQ0EsU0FBSyxjQUFMLEdBQXNCLFNBQXRCOztBQUVBLFFBQUk7QUFDSCxZQUFNLE1BQU0sQ0FBQyxXQUFQLENBQW1CLDBCQUFuQixFQUErQztBQUNwRCxRQUFBLFVBQVUsRUFBRSxLQUFLLFdBRG1DO0FBRXBELFFBQUEsT0FBTyxFQUFFLEtBQUssUUFGc0M7QUFHcEQsUUFBQSxPQUFPLEVBQUUsV0FBVyxDQUFDO0FBSCtCLE9BQS9DLENBQU47QUFLQSxNQUFBLEdBQUcsQ0FBQyxJQUFKLENBQVMsZ0NBQVQ7QUFDQSxXQUFLLGNBQUwsR0FBc0IsU0FBdEI7QUFFQSxXQUFLLFdBQUwsR0FBbUIsRUFBbkI7QUFDQSxXQUFLLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxNQUFBLFdBQVcsQ0FBQyxLQUFaLEdBQW9CLEVBQXBCO0FBQ0EsS0FaRCxDQVlFLE9BQU8sS0FBUCxFQUFjO0FBQ2YsTUFBQSxHQUFHLENBQUMsSUFBSixDQUFTLDRCQUFULEVBQXVDLEtBQXZDO0FBQ0EsV0FBSyxjQUFMLEdBQXNCLFNBQXRCO0FBQ0E7QUFDRDs7QUFFRCxFQUFBLGVBQWUsQ0FBQyxjQUFELEVBQXVCO0FBQ3JDLFdBQU8sY0FBYyxLQUFLLFNBQTFCO0FBQ0E7O0FBRUQsRUFBQSxxQkFBcUIsQ0FBQyxhQUFELEVBQXNCO0FBQzFDLElBQUEsWUFBWSxDQUFDLEtBQUssa0JBQU4sQ0FBWjtBQUNBLFNBQUssQ0FBTCxDQUFPLE1BQVAsQ0FBYyxTQUFkLENBQXdCLE1BQXhCLENBQStCLFVBQS9COztBQUVBLFFBQUksYUFBYSxLQUFLLFNBQWxCLElBQStCLGFBQWEsS0FBSyxTQUFyRCxFQUFnRTtBQUMvRCxXQUFLLGtCQUFMLEdBQTBCLE1BQU0sQ0FBQyxVQUFQLENBQWtCLE1BQUs7QUFDaEQsYUFBSyxrQkFBTCxHQUEwQixTQUExQjtBQUNBLGFBQUssQ0FBTCxDQUFPLE1BQVAsQ0FBYyxTQUFkLENBQXdCLEdBQXhCLENBQTRCLFVBQTVCO0FBQ0EsT0FIeUIsRUFHdkIsSUFIdUIsQ0FBMUI7QUFJQTtBQUNEOztBQUVELEVBQUEsaUJBQWlCLENBQUMsT0FBRCxFQUFtQixVQUFuQixFQUF1QyxPQUF2QyxFQUFzRDtBQUN0RSxXQUFPLE9BQU8sSUFBSSxDQUFDLFVBQVosSUFBMEIsQ0FBQyxPQUFsQztBQUNBOztBQXBEMkYsQ0FBN0Y7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsT0FBUDtBQUFnQixFQUFBLGtCQUFrQixFQUFFLElBQXBDO0FBQTBDLEVBQUEsUUFBUSxFQUFFO0FBQXBELENBQUQsQ0FDVCxDQUFBLEUscUNBQUEsRSxTQUFBLEUsS0FBaUIsQ0FBakIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxNQUFQO0FBQWUsRUFBQSxRQUFRLEVBQUUsNkJBQTJCLENBQUMsU0FBNUIsQ0FBc0M7QUFBL0QsQ0FBRCxDQUNULENBQUEsRSxxQ0FBQSxFLGdCQUFBLEUsS0FBeUIsQ0FBekIsQ0FBQTs7QUFMb0IsMkJBQTJCLEdBQUEsNkJBQUEsR0FBQSxVQUFBLENBQUEsQ0FEL0MsYUFBYSxDQUFDLHdCQUFELENBQ2tDLENBQUEsRUFBM0IsMkJBQTJCLENBQTNCO2VBQUEsMkIiLCJzb3VyY2VSb290IjoiIn0=