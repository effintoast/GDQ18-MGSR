var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiElementTesterElement_1;
const {
  customElement
} = Polymer.decorators;
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
      property.elementTester.enum.forEach(allowedValue => {
        const item = document.createElement('paper-item');
        item.value = allowedValue;
        item.innerText = allowedValue;
        listBox.appendChild(item);
      });
      input.appendChild(listBox);
    } else {
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
      } else if (target.type === 'checkbox') {
        if (newValue === 'false') {
          newValue = false;
        } else if (newValue === 'true') {
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
    const props = Object.entries(element.constructor.properties).filter(arr => {
      const propDecl = arr[1];
      return !propDecl.readOnly && !propDecl.computed && typeof propDecl.value !== 'function';
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
UiElementTesterElement = UiElementTesterElement_1 = __decorate([customElement('ui-element-tester')], UiElementTesterElement);
export default UiElementTesterElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU47QUFDQSxTQUFLLG9CQUFMLEdBQTRCLElBQUksT0FBTyxDQUFDLHNCQUFaLENBQW1DLEtBQUssQ0FBTCxDQUFPLFdBQTFDLEVBQXVELENBQUMsT0FBRCxFQUFVLElBQVYsS0FBa0I7QUFDcEcsV0FBSyxhQUFMOztBQUNBLFlBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsU0FBUyxJQUFJLFNBQVMsQ0FBQyxRQUFWLEtBQXVCLE9BQXpELENBQXpCOztBQUNBLFVBQUksZ0JBQUosRUFBc0I7QUFDckIsUUFBQSxPQUFPLENBQUMsWUFBUixDQUFxQixnQkFBckIsQ0FBc0MsSUFBdEMsRUFBNEMsTUFBSztBQUNoRCxlQUFLLGdCQUFMLENBQXNCLGdCQUF0QjtBQUNBLFNBRkQ7QUFHQTtBQUNELEtBUjJCLENBQTVCO0FBU0E7O0FBRUQsRUFBQSxnQkFBZ0IsQ0FBQyxPQUFELEVBQXlCO0FBQ3hDLFVBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFQLENBQWdCLE9BQU8sQ0FBQyxXQUFSLENBQTRCLFVBQTVDLEVBQ1osTUFEWSxDQUNMLEdBQUcsSUFBRztBQUNiLFlBQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFELENBQXBCO0FBQ0EsYUFBTyxDQUFDLFFBQVEsQ0FBQyxRQUFWLElBQ04sQ0FBQyxRQUFRLENBQUMsUUFESixJQUVOLE9BQU8sUUFBUSxDQUFDLEtBQWhCLEtBQTBCLFVBRjNCO0FBR0EsS0FOWSxDQUFkO0FBT0EsSUFBQSxLQUFLLENBQUMsT0FBTixDQUFjLENBQUMsQ0FBQyxRQUFELEVBQVcsUUFBWCxDQUFELEtBQXlCO0FBQ3RDLFlBQU0sS0FBSyxHQUFHLHdCQUFzQixDQUFDLG1CQUF2QixDQUEyQyxPQUEzQyxFQUFvRCxRQUFwRCxFQUE4RCxRQUE5RCxDQUFkO0FBQ0EsV0FBSyxDQUFMLENBQU8sUUFBUCxDQUFnQixXQUFoQixDQUE0QixLQUE1QjtBQUNBLEtBSEQ7QUFJQTs7QUFFRCxFQUFBLGFBQWEsR0FBQTtBQUNaLFNBQUssQ0FBTCxDQUFPLFFBQVAsQ0FBZ0IsU0FBaEIsR0FBNEIsRUFBNUI7QUFDQTs7QUExSGlFLENBQW5FO0FBQXFCLHNCQUFzQixHQUFBLHdCQUFBLEdBQUEsVUFBQSxDQUFBLENBRDFDLGFBQWEsQ0FBQyxtQkFBRCxDQUM2QixDQUFBLEVBQXRCLHNCQUFzQixDQUF0QjtlQUFBLHNCIiwic291cmNlUm9vdCI6IiJ9