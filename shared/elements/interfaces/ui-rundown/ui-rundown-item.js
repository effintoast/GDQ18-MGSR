var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UiRundownItemElement_1;
const { customElement, property } = Polymer.decorators;
let UiRundownItemElement = UiRundownItemElement_1 = class UiRundownItemElement extends Polymer.Element {
    _itemChanged(item) {
        this.itemType = (item ? item.type : '');
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
                    this.$.bottomLeft.lastChild.textContent =
                        this.$.bottomLeft.lastChild.textContent.substr(0, this.$.bottomLeft.lastChild.textContent.length - 2);
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
                    this.$.topRight.lastChild.textContent =
                        this.$.topRight.lastChild.textContent.substr(0, this.$.topRight.lastChild.textContent.length - 2);
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
__decorate([
    property({ type: Object, observer: UiRundownItemElement_1.prototype._itemChanged })
], UiRundownItemElement.prototype, "item", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], UiRundownItemElement.prototype, "current", void 0);
__decorate([
    property({ type: String })
], UiRundownItemElement.prototype, "name", void 0);
__decorate([
    property({ type: Object, reflectToAttribute: true })
], UiRundownItemElement.prototype, "itemType", void 0);
UiRundownItemElement = UiRundownItemElement_1 = __decorate([
    customElement('ui-rundown-item')
], UiRundownItemElement);
export default UiRundownItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktcnVuZG93bi1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidWktcnVuZG93bi1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFHckQsSUFBcUIsb0JBQW9CLDRCQUF6QyxNQUFxQixvQkFBcUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQWFoRSxZQUFZLENBQUMsSUFBa0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFbEMsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2xCLEtBQUssS0FBSztnQkFDVCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7Z0JBRTFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFdBQVcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUV0RSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFD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