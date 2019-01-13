var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
const cyclingRecordingsRep = nodecg.Replicant('obs:cyclingRecordings');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let UiObsStatusItemElement = class UiObsStatusItemElement extends Polymer.MutableData(Polymer.Element) {
    static get observers() {
        return [
            '_updateStatus(_websocket.status, _cyclingRecordings)'
        ];
    }
    ready() {
        super.ready();
        cyclingRecordingsRep.on('change', newVal => {
            this._cyclingRecordings = newVal;
        });
    }
    _transformsNamespace(namespace) {
        return namespace.slice(0, -3);
    }
    _updateStatus(websocketStatus, cyclingRecordings) {
        this.status = this._calcStatus(websocketStatus, cyclingRecordings);
    }
    _calcStatus(websocketStatus, cyclingRecordings) {
        if (websocketStatus === 'connected') {
            return cyclingRecordings ? 'cycling' : websocketStatus;
        }
        return websocketStatus;
    }
};
__decorate([
    property({ type: String })
], UiObsStatusItemElement.prototype, "namespace", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], UiObsStatusItemElement.prototype, "status", void 0);
UiObsStatusItemElement = __decorate([
    customElement('ui-obs-status-item')
], UiObsStatusItemElement);
export default UiObsStatusItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktb2JzLXN0YXR1cy1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidWktb2JzLXN0YXR1cy1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQXlCLHVCQUF1QixDQUFDLENBQUM7QUFFL0Y7Ozs7R0FJRztBQUVILElBQXFCLHNCQUFzQixHQUEzQyxNQUFxQixzQkFBdUIsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFVdkYsTUFBTSxLQUFLLFNBQVM7UUFDbkIsT0FBTztZQUNOLHNEQUFzRDtTQUN0RCxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxNQUFNLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsb0JBQW9CLENBQUMsU0FBaUI7UUFDckMsT0FBTyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhLENBQUMsZUFBa0MsRUFBRSxpQkFBMEI7UUFDM0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxXQUFXLENBQUMsZUFBa0MsRUFBRSxpQkFBMEI7UUFDekUsSUFBSSxlQUFlLEtBQUssV0FBVyxFQUFFO1lBQ3BDLE9BQU8saUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1NBQ3ZEO1FBRUQsT0FBTyxlQUFlLENBQUM7SUFDeEIsQ0FBQztDQUNELENBQUE7QUFwQ0E7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7eURBQ1A7QUFHbEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO3NEQUNwQztBQUxLLHNCQUFzQjtJQUQxQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7R0FDZixzQkFBc0IsQ0FzQzFDO2VBdENvQixzQkFBc0IifQ==