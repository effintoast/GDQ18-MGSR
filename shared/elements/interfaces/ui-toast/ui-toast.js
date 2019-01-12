var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let UiToastElement = class UiToastElement extends Polymer.Element {
    showSuccessToast(text) {
        this._successToastText = text;
        this.$.successToast.show();
    }
    showErrorToast(text) {
        this._errorToastText = text;
        this.$.errorToast.show();
    }
};
__decorate([
    property({ type: String })
], UiToastElement.prototype, "_successToastText", void 0);
__decorate([
    property({ type: String })
], UiToastElement.prototype, "_errorToastText", void 0);
UiToastElement = __decorate([
    customElement('ui-toast')
], UiToastElement);
export default UiToastElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdG9hc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1aS10b2FzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQ7OztHQUdHO0FBRUgsSUFBcUIsY0FBYyxHQUFuQyxNQUFxQixjQUFlLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFPMUQsZ0JBQWdCLENBQUMsSUFBWTtRQUM1QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBa0MsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFnQyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pELENBQUM7Q0FDRCxDQUFBO0FBZEE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7eURBQ0M7QUFHMUI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7dURBQ0Q7QUFMSixjQUFjO0lBRGxDLGFBQWEsQ0FBQyxVQUFVLENBQUM7R0FDTCxjQUFjLENBZ0JsQztlQWhCb0IsY0FBYyJ9