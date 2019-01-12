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
let AtomGradientTextElement = class AtomGradientTextElement extends Polymer.Element {
    ready() {
        super.ready();
        // Workaround for: https://bugs.chromium.org/p/chromium/issues/detail?id=844880
        this.shadowRoot.querySelectorAll('sc-fitted-text').forEach(node => {
            node.$.fittedContent.style.webkitBackgroundClip = 'text';
        });
    }
};
__decorate([
    property({ type: String })
], AtomGradientTextElement.prototype, "text", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], AtomGradientTextElement.prototype, "align", void 0);
__decorate([
    property({ type: Number })
], AtomGradientTextElement.prototype, "maxWidth", void 0);
AtomGradientTextElement = __decorate([
    customElement('atom-gradient-text')
], AtomGradientTextElement);
export default AtomGradientTextElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1ncmFkaWVudC10ZXh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRvbS1ncmFkaWVudC10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQix1QkFBdUIsR0FBNUMsTUFBcUIsdUJBQXdCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFVbkUsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLCtFQUErRTtRQUMvRSxJQUFJLENBQUMsVUFBVyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2pFLElBQVksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUM7UUFDbkUsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQWhCQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztxREFDWjtBQUdiO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztzREFDckM7QUFHZDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzt5REFDUjtBQVJHLHVCQUF1QjtJQUQzQyxhQUFhLENBQUMsb0JBQW9CLENBQUM7R0FDZix1QkFBdUIsQ0FrQjNDO2VBbEJvQix1QkFBdUIifQ==