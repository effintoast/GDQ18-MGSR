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
const cyclingRecordingsRep = nodecg.Replicant('obs:cyclingRecordings');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */

let UiObsStatusItemElement = class UiObsStatusItemElement extends Polymer.MutableData(Polymer.Element) {
  static get observers() {
    return ['_updateStatus(_websocket.status, _cyclingRecordings)'];
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

__decorate([property({
  type: String
})], UiObsStatusItemElement.prototype, "namespace", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true
})], UiObsStatusItemElement.prototype, "status", void 0);

UiObsStatusItemElement = __decorate([customElement('ui-obs-status-item')], UiObsStatusItemElement);
export default UiObsStatusItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLW9icy1zdGF0dXMtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQXlDLHVCQUF6QyxDQUE3QjtBQUVBOzs7Ozs7QUFNQSxJQUFxQixzQkFBc0IsR0FBM0MsTUFBcUIsc0JBQXJCLFNBQW9ELE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUFwRCxDQUF3RjtBQVV2RixhQUFXLFNBQVgsR0FBb0I7QUFDbkIsV0FBTyxDQUNOLHNEQURNLENBQVA7QUFHQTs7QUFFRCxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUNBLElBQUEsb0JBQW9CLENBQUMsRUFBckIsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBTSxJQUFHO0FBQzFDLFdBQUssa0JBQUwsR0FBMEIsTUFBMUI7QUFDQSxLQUZEO0FBR0E7O0FBRUQsRUFBQSxvQkFBb0IsQ0FBQyxTQUFELEVBQWtCO0FBQ3JDLFdBQU8sU0FBUyxDQUFDLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBQyxDQUFwQixDQUFQO0FBQ0E7O0FBRUQsRUFBQSxhQUFhLENBQUMsZUFBRCxFQUFxQyxpQkFBckMsRUFBK0Q7QUFDM0UsU0FBSyxNQUFMLEdBQWMsS0FBSyxXQUFMLENBQWlCLGVBQWpCLEVBQWtDLGlCQUFsQyxDQUFkO0FBQ0E7O0FBRUQsRUFBQSxXQUFXLENBQUMsZUFBRCxFQUFxQyxpQkFBckMsRUFBK0Q7QUFDekUsUUFBSSxlQUFlLEtBQUssV0FBeEIsRUFBcUM7QUFDcEMsYUFBTyxpQkFBaUIsR0FBRyxTQUFILEdBQWUsZUFBdkM7QUFDQTs7QUFFRCxXQUFPLGVBQVA7QUFDQTs7QUFyQ3NGLENBQXhGOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxnQ0FBQSxFLFdBQUEsRSxLQUFrQixDQUFsQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLGtCQUFrQixFQUFFO0FBQW5DLENBQUQsQ0FDVCxDQUFBLEUsZ0NBQUEsRSxRQUFBLEUsS0FBZSxDQUFmLENBQUE7O0FBTG9CLHNCQUFzQixHQUFBLFVBQUEsQ0FBQSxDQUQxQyxhQUFhLENBQUMsb0JBQUQsQ0FDNkIsQ0FBQSxFQUF0QixzQkFBc0IsQ0FBdEI7ZUFBQSxzQiIsInNvdXJjZVJvb3QiOiIifQ==