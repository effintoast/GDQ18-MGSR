var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiRundownItemElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
let UiRundownItemElement = UiRundownItemElement_1 = class UiRundownItemElement extends Polymer.Element {
  _itemChanged(item) {
    this.itemType = item ? item.type : '';
    this.$.topRight.innerHTML = '';
    this.$.bottomLeft.innerHTML = '';
    this.$.bottomRight.innerHTML = '';

    switch (item.type) {
      case 'run':
        this.name = item.name.replace(/\\n/g, ' ');
        this.$.topRight.innerHTML = item.category;
        this.$.bottomRight.textContent = `${item.console} - ${item.estimate}`;
        item.runners.forEach(runner => {
          const span = document.createElement('span');
          span.textContent = `${runner.name}, `;
          this.$.bottomLeft.appendChild(span);
        });

        if (this.$.bottomLeft.lastChild && this.$.bottomLeft.lastChild.textContent) {
          this.$.bottomLeft.lastChild.textContent = this.$.bottomLeft.lastChild.textContent.substr(0, this.$.bottomLeft.lastChild.textContent.length - 2);
        }

        break;

      case 'adBreak':
        this.name = 'Ad Break';
        item.ads.forEach(ad => {
          const span = document.createElement('span');
          span.textContent = `${ad.adType} - ${ad.filename}`;
          this.$.topRight.appendChild(span);
        });
        break;

      case 'interview':
        this.name = `INTERVIEW - ${item.subject}`;
        item.interviewers.forEach(interviewer => {
          const span = document.createElement('span');
          span.textContent = `${interviewer}, `;
          span.classList.add('interviewer');
          this.$.topRight.appendChild(span);
        });
        item.interviewees.forEach(interviewees => {
          const span = document.createElement('span');
          span.textContent = `${interviewees}, `;
          this.$.topRight.appendChild(span);
        });

        if (this.$.topRight.lastChild && this.$.topRight.lastChild.textContent) {
          this.$.topRight.lastChild.textContent = this.$.topRight.lastChild.textContent.substr(0, this.$.topRight.lastChild.textContent.length - 2);
        }

        break;

      default:
        throw new Error(`'Unexpected content type "${this.itemType}" in item: ${JSON.stringify(item)}`);
    }
  }

  _itemHasNotes(item) {
    return item && 'notes' in item && item.notes.trim().length > 0;
  }

};

__decorate([property({
  type: Object,
  observer: UiRundownItemElement_1.prototype._itemChanged
})], UiRundownItemElement.prototype, "item", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], UiRundownItemElement.prototype, "current", void 0);

__decorate([property({
  type: String
})], UiRundownItemElement.prototype, "name", void 0);

__decorate([property({
  type: Object,
  reflectToAttribute: true
})], UiRundownItemElement.prototype, "itemType", void 0);

UiRundownItemElement = UiRundownItemElement_1 = __decorate([customElement('ui-rundown-item')], UiRundownItemElement);
export default UiRundownItemElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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