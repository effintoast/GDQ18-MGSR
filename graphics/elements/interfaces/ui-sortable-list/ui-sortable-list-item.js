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

let UiSortableListItemElement = class UiSortableListItemElement extends Polymer.MutableData(Polymer.Element) {
  static get observers() {
    return ['_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)', '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)'];
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this._itemTemplateInstance) {
      const sortableList = this.parentNode.host;

      sortableList._ensureTemplatized();

      if (sortableList._itemTemplateClass) {
        this._itemTemplateInstance = new sortableList._itemTemplateClass();
        this.shadowRoot.appendChild(this._itemTemplateInstance.root);
      }
    }
  }

  _updateTemplateInstanceVariable(variable, value, _itemTemplateInstance) {
    if (variable === undefined || value === undefined || _itemTemplateInstance === undefined) {
      return;
    }

    _itemTemplateInstance[variable] = value;
  }

  _calcUpDisabled(index) {
    return index === 0;
  }

  _calcDownDisabled(index, items) {
    if (!items) {
      return true;
    }

    return index === items.length - 1;
  }

  _moveItemUpPressed() {
    this.dispatchEvent(new CustomEvent('move-item-up'));
  }

  _moveItemDownPressed() {
    this.dispatchEvent(new CustomEvent('move-item-down'));
  }

};

__decorate([property({
  type: Number
})], UiSortableListItemElement.prototype, "index", void 0);

__decorate([property({
  type: Object
})], UiSortableListItemElement.prototype, "item", void 0);

__decorate([property({
  type: Array
})], UiSortableListItemElement.prototype, "items", void 0);

UiSortableListItemElement = __decorate([customElement('ui-sortable-list-item')], UiSortableListItemElement);
export default UiSortableListItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLXNvcnRhYmxlLWxpc3QtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFFQTs7Ozs7QUFLQSxJQUFxQix5QkFBeUIsR0FBOUMsTUFBcUIseUJBQXJCLFNBQXVELE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUF2RCxDQUEyRjtBQXdCMUYsYUFBVyxTQUFYLEdBQW9CO0FBQ25CLFdBQU8sQ0FDTix3RUFETSxFQUVOLHNFQUZNLENBQVA7QUFJQTs7QUFFRCxFQUFBLGlCQUFpQixHQUFBO0FBQ2hCLFVBQU0saUJBQU47O0FBQ0EsUUFBSSxDQUFDLEtBQUsscUJBQVYsRUFBaUM7QUFDaEMsWUFBTSxZQUFZLEdBQUksS0FBSyxVQUFMLENBQXdCLElBQTlDOztBQUNBLE1BQUEsWUFBWSxDQUFDLGtCQUFiOztBQUNBLFVBQUksWUFBWSxDQUFDLGtCQUFqQixFQUFxQztBQUNwQyxhQUFLLHFCQUFMLEdBQTZCLElBQUksWUFBWSxDQUFDLGtCQUFqQixFQUE3QjtBQUNBLGFBQUssVUFBTCxDQUFpQixXQUFqQixDQUE4QixLQUFLLHFCQUFMLENBQW1DLElBQWpFO0FBQ0E7QUFDRDtBQUNEOztBQUVELEVBQUEsK0JBQStCLENBQUMsUUFBRCxFQUFvQixLQUFwQixFQUFpQyxxQkFBakMsRUFBNkU7QUFDM0csUUFBSSxRQUFRLEtBQUssU0FBYixJQUEwQixLQUFLLEtBQUssU0FBcEMsSUFBaUQscUJBQXFCLEtBQUssU0FBL0UsRUFBMEY7QUFDekY7QUFDQTs7QUFDQSxJQUFBLHFCQUE2QixDQUFDLFFBQUQsQ0FBN0IsR0FBMEMsS0FBMUM7QUFDRDs7QUFFRCxFQUFBLGVBQWUsQ0FBQyxLQUFELEVBQWM7QUFDNUIsV0FBTyxLQUFLLEtBQUssQ0FBakI7QUFDQTs7QUFFRCxFQUFBLGlCQUFpQixDQUFDLEtBQUQsRUFBZ0IsS0FBaEIsRUFBNEI7QUFDNUMsUUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNYLGFBQU8sSUFBUDtBQUNBOztBQUVELFdBQU8sS0FBSyxLQUFNLEtBQUssQ0FBQyxNQUFOLEdBQWUsQ0FBakM7QUFDQTs7QUFFRCxFQUFBLGtCQUFrQixHQUFBO0FBQ2pCLFNBQUssYUFBTCxDQUFtQixJQUFJLFdBQUosQ0FBZ0IsY0FBaEIsQ0FBbkI7QUFDQTs7QUFFRCxFQUFBLG9CQUFvQixHQUFBO0FBQ25CLFNBQUssYUFBTCxDQUFtQixJQUFJLFdBQUosQ0FBZ0IsZ0JBQWhCLENBQW5CO0FBQ0E7O0FBcEV5RixDQUEzRjs7QUFLQyxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRTtBQUFQLENBQUQsQ0FDVCxDQUFBLEUsbUNBQUEsRSxPQUFBLEUsS0FBYyxDQUFkLENBQUE7O0FBTUEsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLG1DQUFBLEUsTUFBQSxFLEtBQXNCLENBQXRCLENBQUE7O0FBTUEsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLG1DQUFBLEUsT0FBQSxFLEtBQTJCLENBQTNCLENBQUE7O0FBakJvQix5QkFBeUIsR0FBQSxVQUFBLENBQUEsQ0FEN0MsYUFBYSxDQUFDLHVCQUFELENBQ2dDLENBQUEsRUFBekIseUJBQXlCLENBQXpCO2VBQUEseUIiLCJzb3VyY2VSb290IjoiIn0=