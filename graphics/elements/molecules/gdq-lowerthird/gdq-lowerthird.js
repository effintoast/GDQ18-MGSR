var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Power4, Power3, TweenLite } from 'gsap';
import Random from '../../../../shared/lib/vendor/random';
const { customElement, property } = Polymer.decorators;
const NAME_ELEMENT_ENTRANCE_STAGGER = 0.15;
const interviewNames = nodecg.Replicant('interview:names');
const lowerthirdShowing = nodecg.Replicant('interview:lowerthirdShowing');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */
let GDQLowerthirdElement = class GDQLowerthirdElement extends Polymer.MutableData(Polymer.Element) {
    /**
     * @customElement
     * @polymer
     * @appliesMixin Polymer.MutableData
     */
    constructor() {
        super(...arguments);
        this.preview = false;
        this.tl = new TimelineLite({ autoRemoveChildren: true });
    }
    ready() {
        super.ready();
        this._$nameElements = Array.from(this.shadowRoot.querySelectorAll('#mainNames gdq-lowerthird-nameplate, #hostName'));
        if (!this.preview && !window.__SCREENSHOT_TESTING__) {
            lowerthirdShowing.on('change', newVal => {
                if (newVal) {
                    this.tl.add(this.show());
                }
                else {
                    this.tl.add(this.hide());
                }
            });
        }
    }
    connectedCallback() {
        super.connectedCallback();
        Polymer.RenderStatus.beforeNextRender(this, () => {
            this.reset();
        });
    }
    updatePreview(names) {
        this.show(names).progress(1);
    }
    show(prefilledNames) {
        const tl = new TimelineLite();
        const names = prefilledNames ?
            prefilledNames :
            interviewNames.value && interviewNames.value.filter(({ name }) => {
                return Boolean(name) && name.trim().length > 0;
            });
        if (!names || names.length <= 0) {
            return tl;
        }
        const nameElementsToShow = this._$nameElements.slice(0, names.length);
        const randomizedNameElements = Random.shuffle(Random.engines.browserCrypto, nameElementsToShow.slice(0).concat([this.$.header]));
        this.reset();
        tl.call(() => {
            this.numNames = names.length;
        });
        // Set names
        tl.call(() => {
            this._$nameElements.forEach((nameElement, index) => {
                nameElement.hidden = !names[index] || !names[index].name;
                if (!nameElement.hidden) {
                    nameElement.name = names[index].name;
                    nameElement.title = names[index].title;
                }
            });
        }, undefined, null, '+=0.3'); // Give time for interviewNames replicant to update.
        tl.to(this.$.background, 0.75, {
            y: '0%',
            ease: Power4.easeOut
        });
        tl.addLabel('nameElementsEnter', '+=0');
        tl.call(() => {
            // tl.timeScale(0.2);
        }, undefined, null, 'nameElementsEnter');
        randomizedNameElements.forEach((nameElem, index) => {
            tl.add(nameElem.enter(), `nameElementsEnter+=${NAME_ELEMENT_ENTRANCE_STAGGER * index}`);
        });
        return tl;
    }
    hide() {
        const tl = new TimelineLite();
        tl.to(this, 0.5, {
            y: '100%',
            ease: Power3.easeIn
        });
        return tl;
    }
    reset() {
        this.$.header.reset();
        this._$nameElements.forEach(nameElem => nameElem.reset());
        TweenLite.set(this.$.background, { y: '100%' });
        TweenLite.set(this, { y: '0%', opacity: 1 });
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQLowerthirdElement.prototype, "preview", void 0);
__decorate([
    property({ type: Number, reflectToAttribute: true })
], GDQLowerthirdElement.prototype, "numNames", void 0);
GDQLowerthirdElement = __decorate([
    customElement('gdq-lowerthird')
], GDQLowerthirdElement);
export default GDQLowerthirdElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWxvd2VydGhpcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtbG93ZXJ0aGlyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sTUFBTSxNQUFNLHNDQUFzQyxDQUFDO0FBRzFELE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLDZCQUE2QixHQUFHLElBQUksQ0FBQztBQUMzQyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFtQixpQkFBaUIsQ0FBQyxDQUFDO0FBQzdFLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBVSw2QkFBNkIsQ0FBQyxDQUFDO0FBRW5GOzs7O0dBSUc7QUFFSCxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBTnRGOzs7O09BSUc7SUFDSDs7UUFHQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBS1AsT0FBRSxHQUFHLElBQUksWUFBWSxDQUFDLEVBQUMsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQWdHNUQsQ0FBQztJQTdGQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFXLENBQUMsZ0JBQWdCLENBQUMsZ0RBQWdELENBQUMsQ0FBQyxDQUFDO1FBRXRILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUUsTUFBYyxDQUFDLHNCQUFzQixFQUFFO1lBQzdELGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxD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