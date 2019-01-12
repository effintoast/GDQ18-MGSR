var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Sine, TimelineLite } from 'gsap';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQOmnibarListItemElement = class GDQOmnibarListItemElement extends Polymer.Element {
    ready() {
        super.ready();
        this._$borderBodies = this.shadowRoot.querySelectorAll('.border-body');
        this._$leftBorderCaps = this.shadowRoot.querySelectorAll('.border-cap:first-child');
        this._$rightBorderCaps = this.shadowRoot.querySelectorAll('.border-cap:last-child');
    }
    enter() {
        const enterTL = new TimelineLite();
        enterTL.fromTo(this, 0.234, {
            x: 20,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            ease: Sine.easeOut
        });
        return enterTL;
    }
    exit() {
        const exitTL = new TimelineLite();
        exitTL.to(this._$borderBodies, 0.465, {
            scaleX: 0,
            ease: Sine.easeInOut
        }, 0);
        exitTL.to(this._$rightBorderCaps, 0.465, {
            x: -this.clientWidth + 2,
            ease: Sine.easeInOut
        }, 0);
        exitTL.add(createMaybeRandomTween({
            target: this.$.text.style,
            propName: 'opacity',
            duration: 0.465,
            start: { probability: 1, normalValue: 0 },
            end: { probability: 0, normalValue: 0 }
        }), 0);
        exitTL.to([this._$leftBorderCaps, this._$rightBorderCaps], 0.165, {
            scaleX: 0,
            ease: Sine.easeInOut
        });
        return exitTL;
    }
};
__decorate([
    property({ type: String })
], GDQOmnibarListItemElement.prototype, "firstLine", void 0);
__decorate([
    property({ type: String })
], GDQOmnibarListItemElement.prototype, "secondLine", void 0);
GDQOmnibarListItemElement = __decorate([
    customElement('gdq-omnibar-list-item')
], GDQOmnibarListItemElement);
export default GDQOmnibarListItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItbGlzdC1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLW9tbmliYXItbGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxJQUFJLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQix5QkFBeUIsR0FBOUMsTUFBcUIseUJBQTBCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFXckUsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVyxDQUFDLGdCQUFnQixDQUFDLHdCQUF3QixDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELEtBQUs7UUFDSixNQUFNLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRW5DLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUMzQixDQUFDLEVBQUUsRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ1YsRUFBRTtZQUNGLENBQUMsRUFBRSxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU87U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUVELElBQUk7UUFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUU7WUFDckMsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDcEIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLEtBQUssRUFBRTtZQUN4QyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUM7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3BCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLE1BQU0sRUFBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQXVCLENBQUMsS0FBSztZQUM3QyxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsS0FBSztZQUNmLEtBQUssRUFBRSxFQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsRUFBQztZQUN2QyxHQUFHLEVBQUUsRUFBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLFdBQVcsRUFBRSxDQUFDLEVBQUM7U0FDckMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRVAsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUU7WUFDakUsTUFBTSxFQUFFLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDcEIsQ0FBQyxDQUFDO1FBRUgsT0FBTyxNQUFNLENBQUM7SUFDZixDQUFDO0NBQ0QsQ0FBQTtBQTNEQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs0REFDUDtBQUdsQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQzs2REFDTjtBQUxDLHlCQUF5QjtJQUQ3QyxhQUFhLENBQUMsdUJBQXVCLENBQUM7R0FDbEIseUJBQXlCLENBNkQ3QztlQTdEb0IseUJBQXlCIn0=