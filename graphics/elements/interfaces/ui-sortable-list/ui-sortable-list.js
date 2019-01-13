var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MapSortMixin from '../../../mixins/map-sort-mixin';
const { customElement, property } = Polymer.decorators;
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
        return [
            '_updateSortFunction(useSortMap, itemIdField)'
        ];
    }
    ready() {
        super.ready();
        this._flashAddedNodes(this.shadowRoot, 'ui-sortable-list-item');
        this.$.replicant.addEventListener('value-changed', () => {
            if (this.useSortMap) {
                this._sortMapVal = this.$.replicant.value;
            }
            else {
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
        }
        else {
            repeat.sort = null;
        }
    }
};
__decorate([
    property({ type: String })
], UiSortableListElement.prototype, "replicantName", void 0);
__decorate([
    property({ type: String })
], UiSortableListElement.prototype, "replicantBundle", void 0);
__decorate([
    property({ type: String })
], UiSortableListElement.prototype, "itemIdField", void 0);
__decorate([
    property({ type: Array })
], UiSortableListElement.prototype, "items", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], UiSortableListElement.prototype, "useSortMap", void 0);
__decorate([
    property({ type: Array, computed: '_computeActualItems(items, _itemsReplicantValue)' })
], UiSortableListElement.prototype, "_actualItems", void 0);
UiSortableListElement = __decorate([
    customElement('ui-sortable-list')
], UiSortableListElement);
export default UiSortableListElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc29ydGFibGUtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLXNvcnRhYmxlLWxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxZQUFZLE1BQU0sZ0NBQWdDLENBQUM7QUFHMUQsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRXJEOzs7OztHQUtHO0FBRUgsSUFBcUIscUJBQXFCLEdBQTFDLE1BQXFCLHFCQUFzQixTQUFRLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQVByRzs7Ozs7T0FLRztJQUNIOztRQU1DLG9CQUFlLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUdwQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQU1qQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBU1gsaUJBQVksR0FBRyxLQUFLLENBQUM7SUErRTlCLENBQUM7SUE3RUEsTUFBTSxLQUFLLFNBQVM7UUFDbkIsT0FBTztZQUNOLDhDQUE4QztTQUM5QyxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVcsRUFBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7WUFDdkQsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBaUIsQ0FBQyxLQUFLLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ04sSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDeEI7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxt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