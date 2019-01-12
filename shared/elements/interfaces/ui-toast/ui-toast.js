var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
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

__decorate([property({
  type: String
})], UiToastElement.prototype, "_successToastText", void 0);

__decorate([property({
  type: String
})], UiToastElement.prototype, "_errorToastText", void 0);

UiToastElement = __decorate([customElement('ui-toast')], UiToastElement);
export default UiToastElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLXRvYXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUVBOzs7OztBQUtBLElBQXFCLGNBQWMsR0FBbkMsTUFBcUIsY0FBckIsU0FBNEMsT0FBTyxDQUFDLE9BQXBELENBQTJEO0FBTzFELEVBQUEsZ0JBQWdCLENBQUMsSUFBRCxFQUFhO0FBQzVCLFNBQUssaUJBQUwsR0FBeUIsSUFBekI7QUFDQyxTQUFLLENBQUwsQ0FBTyxZQUFQLENBQTBDLElBQTFDO0FBQ0Q7O0FBRUQsRUFBQSxjQUFjLENBQUMsSUFBRCxFQUFhO0FBQzFCLFNBQUssZUFBTCxHQUF1QixJQUF2QjtBQUNDLFNBQUssQ0FBTCxDQUFPLFVBQVAsQ0FBd0MsSUFBeEM7QUFDRDs7QUFmeUQsQ0FBM0Q7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsbUJBQUEsRSxLQUEwQixDQUExQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLGlCQUFBLEUsS0FBd0IsQ0FBeEIsQ0FBQTs7QUFMb0IsY0FBYyxHQUFBLFVBQUEsQ0FBQSxDQURsQyxhQUFhLENBQUMsVUFBRCxDQUNxQixDQUFBLEVBQWQsY0FBYyxDQUFkO2VBQUEsYyIsInNvdXJjZVJvb3QiOiIifQ==