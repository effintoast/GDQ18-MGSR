var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UiElementTesterElement_1;
const { customElement } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let UiElementTesterElement = UiElementTesterElement_1 = class UiElementTesterElement extends Polymer.Element {
    static calcPropertyInputType(propertyType) {
        switch (propertyType) {
            case String:
                return 'text';
            case Number:
                return 'number';
            case Boolean:
                return 'checkbox';
            default:
                return 'text';
        }
    }
    static createPropertyInput(element, propertyName, property) {
        let input;
        let valuePrefix;
        const elementTesterOpts = property.elementTester || {};
        if (elementTesterOpts.enum) {
            input = document.createElement('paper-dropdown-menu');
            const listBox = document.createElement('paper-listbox');
            listBox.slot = 'dropdown-content';
            listBox.selected = 0;
            property.elementTester.enum.forEach((allowedValue) => {
                const item = document.createElement('paper-item');
                item.value = allowedValue;
                item.innerText = allowedValue;
                listBox.appendChild(item);
            });
            input.appendChild(listBox);
        }
        else {
            input = document.createElement('paper-input');
            input.type = UiElementTesterElement_1.calcPropertyInputType(property.type);
            if (elementTesterOpts.type) {
                input.type = property.elementTester.type;
            }
            if (input.type === 'color' || input.type === 'checkbox') {
                valuePrefix = document.createElement('div');
                valuePrefix.classList.add('prefix');
                valuePrefix.classList.add(`prefix-${input.type}`);
                valuePrefix.slot = 'prefix';
                valuePrefix.setAttribute('prefix', 'true');
                valuePrefix.innerText = property.value;
                input.appendChild(valuePrefix);
            }
            if (input.type === 'checkbox') {
                input.alwaysFloatLabel = true;
                input.addEventListener('click', () => {
                    input.value = !input.value;
                });
            }
            input.setAttribute('type', input.type);
        }
        input.label = propertyName;
        input.value = property.value;
        input.classList.add('control');
        input.addEventListener('value-changed', e => {
            const detail = e.detail;
            const target = e.target;
            let newValue = detail.value;
            if (target.type === 'number') {
                newValue = parseFloat(newValue);
            }
            else if (target.type === 'checkbox') {
                if (newValue === 'false') {
                    newValue = false;
                }
                else if (newValue === 'true') {
                    newValue = true;
                }
                newValue = Boolean(newValue);
            }
            if (valuePrefix) {
                valuePrefix.innerText = newValue;
            }
            element[propertyName] = newValue;
        });
        return input;
    }
    ready() {
        super.ready();
        this._elementSlotObserver = new Polymer.FlattenedNodesObserver(this.$.elementSlot, (_target, info) => {
            this._removeInputs();
            const firstElementNode = info.addedNodes.find(addedNode => addedNode.nodeName !== '#text');
            if (firstElementNode) {
                Polymer.RenderStatus.beforeNextRender(this, () => {
                    this._attachToElement(firstElementNode);
                });
            }
        });
    }
    _attachToElement(element) {
        const props = Object.entries(element.constructor.properties)
            .filter(arr => {
            const propDecl = arr[1];
            return !propDecl.readOnly &&
                !propDecl.computed &&
                typeof propDecl.value !== 'function';
        });
        props.forEach(([propName, propDecl]) => {
            const input = UiElementTesterElement_1.createPropertyInput(element, propName, propDecl);
            this.$.controls.appendChild(input);
        });
    }
    _removeInputs() {
        this.$.controls.innerHTML = '';
    }
};
UiElementTesterElement = UiElementTesterElement_1 = __decorate([
    customElement('ui-element-tester')
], UiElementTesterElement);
export default UiElementTesterElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktZWxlbWVudC10ZXN0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1aS1lbGVtZW50LXRlc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFM0M7OztHQUdHO0FBRUgsSUFBcUIsc0JBQXNCLDhCQUEzQyxNQUFxQixzQkFBdUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUdsRSxNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBaUI7UUFDN0MsUUFBUSxZQUFZLEVBQUU7WUFDckIsS0FBSyxNQUFNO2dCQUNWLE9BQU8sTUFBTSxDQUFDO1lBQ2YsS0FBSyxNQUFNO2dCQUNWLE9BQU8sUUFBUSxDQUFDO1lBQ2pCLEtBQUssT0FBTztnQkFDWCxPQUFPLFVBQVUsQ0FBQztZQUNuQjtnQkFDQyxPQUFPLE1BQU0sQ0FBQztTQUNmO0lBQ0YsQ0FBQztJQUVELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUF3QixFQUFFLFlBQW9CLEVBQUUsUUFBYTtRQUN2RixJQUFJLEtBQW1ELENBQUM7UUFDeEQsSUFBSSxXQUEyQixDQUFDO1FBRWhDLE1BQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsSUFBSSxFQUFFLENBQUM7UUFDdkQsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUU7WUFDM0IsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLENBQTZCLENBQUM7WUFFbEYsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQXdCLENBQUM7WUFDL0UsT0FBTyxDQUFDLElBQUksR0FBRyxrQkFBa0IsQ0FBQztZQUNsQyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUVyQixRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFpQixFQUFFLEVBQUU7Z0JBQ3pELE1BQU0s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