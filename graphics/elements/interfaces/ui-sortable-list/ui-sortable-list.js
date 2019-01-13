var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import MapSortMixin from "../../../mixins/map-sort-mixin.js";
const {
  customElement,
  property
} = Polymer.decorators;
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 * @appliesMixin MapSortMixin
 */

let UiSortableListElement = class UiSortableListElement extends MapSortMixin(Polymer.MutableData(Polymer.Element)) {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   * @appliesMixin MapSortMixin
   */
  constructor() {
    super(...arguments);
    this.replicantBundle = nodecg.bundleName;
    this.itemIdField = '';
    this.useSortMap = false;
    this._templatized = false;
  }

  static get observers() {
    return ['_updateSortFunction(useSortMap, itemIdField)'];
  }

  ready() {
    super.ready();

    this._flashAddedNodes(this.shadowRoot, 'ui-sortable-list-item');

    this.$.replicant.addEventListener('value-changed', () => {
      if (this.useSortMap) {
        this._sortMapVal = this.$.replicant.value;
      } else {
        this._sortMapVal = null;
      }
    });
  }

  _computeActualItems(items, _itemsReplicantValue) {
    if (Array.isArray(items)) {
      return items;
    }

    return _itemsReplicantValue;
  }

  _ensureTemplatized() {
    if (!this._templatized) {
      this._templatized = true;
      const templateElement = this.querySelector('template[slot="item-body"]');

      if (templateElement) {
        this._itemTemplateClass = Polymer.Templatize.templatize(templateElement, this, {
          forwardHostProp(prop, value) {
            if (prop === 'item' || prop === 'index') {
              return;
            }

            const items = Array.from(this.shadowRoot.querySelectorAll('ui-sortable-list-item'));
            items.forEach(item => {
              if (item._itemTemplateInstance) {
                item._itemTemplateInstance.set(prop, value);
              }
            });
          },

          parentModel: true
        });
      }
    }
  }

  _moveItemUpPressed(event) {
    this._sendItemAction('moveItemUp', event);
  }

  _moveItemDownPressed(event) {
    this._sendItemAction('moveItemDown', event);
  }

  _sendItemAction(actionName, event) {
    nodecg.sendMessage(`sortable-list:${actionName}`, {
      replicantName: this.replicantName,
      replicantBundle: this.replicantBundle,
      itemIndex: event.model.index,
      itemId: this.itemIdField && event.model.item[this.itemIdField],
      itemIdField: this.itemIdField,
      useSortMap: this.useSortMap
    });
  }

  _updateSortFunction(useSortMap, itemIdField) {
    const repeat = this.$.repeat;

    if (useSortMap && itemIdField) {
      repeat.sort = this._createMapSort(itemIdField);
    } else {
      repeat.sort = null;
    }
  }

};

__decorate([property({
  type: String
})], UiSortableListElement.prototype, "replicantName", void 0);

__decorate([property({
  type: String
})], UiSortableListElement.prototype, "replicantBundle", void 0);

__decorate([property({
  type: String
})], UiSortableListElement.prototype, "itemIdField", void 0);

__decorate([property({
  type: Array
})], UiSortableListElement.prototype, "items", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], UiSortableListElement.prototype, "useSortMap", void 0);

__decorate([property({
  type: Array,
  computed: '_computeActualItems(items, _itemsReplicantValue)'
})], UiSortableListElement.prototype, "_actualItems", void 0);

UiSortableListElement = __decorate([customElement('ui-sortable-list')], UiSortableListElement);
export default UiSortableListElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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