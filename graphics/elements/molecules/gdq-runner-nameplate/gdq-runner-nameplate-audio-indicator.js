var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TweenLite, Power3 } from 'gsap';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQNameplateAudioIndicatorElement = class GDQNameplateAudioIndicatorElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.vertPos = 'top';
        this.horizPos = 'left';
        this.animationDuration = 0.25;
        this._maskProxy = [-10, -10, 0];
    }
    ready() {
        super.ready();
        this.$.body.style.webkitMaskImage = `linear-gradient(
			to right,
			rgba(0,0,0,1) ${this._maskProxy[0]}%,
			rgba(0,0,0,1) ${this._maskProxy[1]}%,
			rgba(0,0,0,0) ${this._maskProxy[2]}%
		)`;
    }
    show() {
        return this._animateMask(100, 100, 110);
    }
    hide() {
        return this._animateMask(-10, -10, 0);
    }
    _animateMask(stopOne, stopTwo, stopThree) {
        return TweenLite.to(this._maskProxy, this.animationDuration, {
            0: stopOne,
            1: stopTwo,
            2: stopThree,
            ease: Power3.easeOut,
            callbackScope: this,
            onUpdate() {
                this.$.body.style.webkitMaskImage = `linear-gradient(
					to right,
					rgba(0,0,0,1) ${this._maskProxy[0]}%,
					rgba(0,0,0,1) ${this._maskProxy[1]}%,
					rgba(0,0,0,0) ${this._maskProxy[2]}%
				)`;
            }
        });
    }
    _showingChanged(newVal) {
        if (newVal) {
            return this.show();
        }
        return this.hide();
    }
};
__decorate([
    property({ type: Boolean, observer: '_showingChanged' })
], GDQNameplateAudioIndicatorElement.prototype, "showing", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], GDQNameplateAudioIndicatorElement.prototype, "vertPos", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true })
], GDQNameplateAudioIndicatorElement.prototype, "horizPos", void 0);
__decorate([
    property({ type: Number })
], GDQNameplateAudioIndicatorElement.prototype, "animationDuration", void 0);
__decorate([
    property({ type: Array })
], GDQNameplateAudioIndicatorElement.prototype, "_maskProxy", void 0);
GDQNameplateAudioIndicatorElement = __decorate([
    customElement('gdq-runner-nameplate-audio-indicator')
], GDQNameplateAudioIndicatorElement);
export default GDQNameplateAudioIndicatorElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLXJ1bm5lci1uYW1lcGxhdGUtYXVkaW8taW5kaWNhdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLXJ1bm5lci1uYW1lcGxhdGUtYXVkaW8taW5kaWNhdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQixpQ0FBaUMsR0FBdEQsTUFBcUIsaUNBQWtDLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFMOUU7OztPQUdHO0lBQ0g7O1FBTUMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUdoQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR2xCLHNCQUFpQixHQUFHLElBQUksQ0FBQztRQUdSLGVBQVUsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBNkM3QyxDQUFDO0lBM0NBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQVksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHOzttQkFFNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7bUJBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO21CQUNsQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDSCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBSTtRQUNILE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsWUFBWSxDQUFDLE9BQWUsRUFBRSxPQUFlLEVBQUUsU0FBaUI7UUFDL0QsT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzVELENBQUMsRUFBRSxPQUFPO1lBQ1YsQ0FBQyxFQUFFLE9BQU87WUFDVixDQUFDLEVBQUUsU0FBUztZQUNaLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTztZQUNwQixhQUFhLEVBQUUsSUFBSTtZQUNuQixRQUFRO2dCQUNQLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUc7O3FCQUVuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztxQkFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO01BQ2pDLENBQUM7WUFDSixDQUFDO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFlO1FBQzlCLElBQUksTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDbkI7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNwQixDQUFDO0NBQ0QsQ0FBQTtBQXpEQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFDLENBQUM7a0VBQ3RDO0FBR2pCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztrRUFDbkM7QUFHaEI7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDO21FQUNqQztBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs0RUFDQTtBQUd6QjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQztxRUFDb0I7QUFkeEIsaUNBQWlDO0lBRHJELGFBQWEsQ0FBQyxzQ0FBc0MsQ0FBQztHQUNqQyxpQ0FBaUMsQ0EyRHJEO2VBM0RvQixpQ0FBaUMifQ==