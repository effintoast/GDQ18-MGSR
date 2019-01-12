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
let UiSortableListItemElement = class UiSortableListItemElement extends Polymer.MutableData(Polymer.Element) {
    static get observers() {
        return [
            '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)',
            '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)'
        ];
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
        return index === (items.length - 1);
    }
    _moveItemUpPressed() {
        this.dispatchEvent(new CustomEvent('move-item-up'));
    }
    _moveItemDownPressed() {
        this.dispatchEvent(new CustomEvent('move-item-down'));
    }
};
__decorate([
    property({ type: Number })
], UiSortableListItemElement.prototype, "index", void 0);
__decorate([
    property({ type: Object })
], UiSortableListItemElement.prototype, "item", void 0);
__decorate([
    property({ type: Array })
], UiSortableListItemElement.prototype, "items", void 0);
UiSortableListItemElement = __decorate([
    customElement('ui-sortable-list-item')
], UiSortableListItemElement);
export default UiSortableListItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktc29ydGFibGUtbGlzdC1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidWktc29ydGFibGUtbGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQix5QkFBeUIsR0FBOUMsTUFBcUIseUJBQTBCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBd0IxRixNQUFNLEtBQUssU0FBUztRQUNuQixPQUFPO1lBQ04sd0VBQXdFO1lBQ3hFLHNFQUFzRTtTQUN0RSxDQUFDO0lBQ0gsQ0FBQztJQUVELGlCQUFpQjtRQUNoQixLQUFLLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQ2hDLE1BQU0sWUFBWSxHQUFJLElBQUksQ0FBQyxVQUFrQixDQUFDLElBQTZCLENBQUM7WUFDNUUsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDbEMsSUFBSSxZQUFZLENBQUMsa0JBQWtCLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLFlBQVksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO2dCQUNuRSxJQUFJLENBQUMsVUFBVyxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMscUJBQTZCLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkU7U0FDRDtJQUNGLENBQUM7SUFFRCwrQkFBK0IsQ0FBQyxRQUFpQixFQUFFLEtBQVcsRUFBRSxxQkFBNEM7UUFDM0csSUFBSSxRQUFRLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUkscUJBQXFCLEtBQUssU0FBUyxFQUFFO1lBQ3pGLE9BQU87U0FDUDtRQUNBLHFCQUE2QixDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztJQUNsRCxDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDNUIsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsS0FBWTtRQUM1QyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDWjtRQUVELE9BQU8sS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsb0JBQW9CO1FBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRCxDQUFBO0FBaEVBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3dEQUNYO0FBTWQ7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7dURBQ0g7QUFNdEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7d0RBQ0c7QUFqQlAseUJBQXlCO0lBRDdDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBQztHQUNsQix5QkFBeUIsQ0FxRTdDO2VBckVvQix5QkFBeUIifQ==