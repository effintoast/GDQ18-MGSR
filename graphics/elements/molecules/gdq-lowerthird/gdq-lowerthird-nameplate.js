var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GDQLowerthirdNameplateElement_1;
import { Power2, TimelineLite, TweenLite } from 'gsap';
const ENTRANCE_ANIM_DURATION = 0.5;
const ENTRANCE_ANIM_EASE = Power2.easeInOut;
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQLowerthirdNameplateElement = GDQLowerthirdNameplateElement_1 = class GDQLowerthirdNameplateElement extends Polymer.Element {
    /**
     * @customElement
     * @polymer
     */
    constructor() {
        super(...arguments);
        this.header = false;
    }
    enter() {
        const tl = new TimelineLite();
        tl.to(this.$.occluder, ENTRANCE_ANIM_DURATION, {
            x: '250%',
            ease: ENTRANCE_ANIM_EASE
        }, 0);
        tl.to(this.$.clipped, ENTRANCE_ANIM_DURATION, {
            clipPath: 'inset(0 0% 0 0)',
            ease: ENTRANCE_ANIM_EASE
        }, 0);
        tl.to(this.$.title, 0.4, {
            y: '0%',
            ease: Power2.easeOut,
            onStart: () => {
                this.$.title.style.opacity = '1';
                this.$['title-text'].maxWidth = this.$.title.clientWidth - 60;
            }
        }, '-=0.1');
        return tl;
    }
    reset() {
        TweenLite.set(this.$.occluder, { x: '-100%' });
        TweenLite.set(this.$.clipped, { clipPath: 'inset(0 100% 0 0)' });
        TweenLite.set(this.$.title, { y: '-100%', opacity: 0 });
    }
    _nameChanged(newVal) {
        return this.$.nameplate.updateName({ alias: newVal, rotate: false });
    }
    _computeHasTitle(title) {
        return Boolean(title && title.trim().length > 0);
    }
};
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQLowerthirdNameplateElement.prototype, "header", void 0);
__decorate([
    property({ type: String, observer: GDQLowerthirdNameplateElement_1.prototype._nameChanged })
], GDQLowerthirdNameplateElement.prototype, "name", void 0);
__decorate([
    property({ type: String })
], GDQLowerthirdNameplateElement.prototype, "title", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true, computed: '_computeHasTitle(title)' })
], GDQLowerthirdNameplateElement.prototype, "hasTitle", void 0);
GDQLowerthirdNameplateElement = GDQLowerthirdNameplateElement_1 = __decorate([
    customElement('gdq-lowerthird-nameplate')
], GDQLowerthirdNameplateElement);
export default GDQLowerthirdNameplateElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWxvd2VydGhpcmQtbmFtZXBsYXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLWxvd2VydGhpcmQtbmFtZXBsYXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFHckQsTUFBTSxzQkFBc0IsR0FBRyxHQUFHLENBQUM7QUFDbkMsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0FBQzVDLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQiw2QkFBNkIscUNBQWxELE1BQXFCLDZCQUE4QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBTDFFOzs7T0FHRztJQUNIOztRQUdDLFdBQU0sR0FBRyxLQUFLLENBQUM7SUFpRGhCLENBQUM7SUF0Q0EsS0FBSztRQUNKLE1BQU0sRUFBRSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTtZQUM5QyxDQUFDLEVBQUUsTUFBTTtZQUNULElBQUksRUFBRSxrQkFBa0I7U0FDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVOLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUU7WUFDN0MsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixJQUFJLEVBQUUsa0JBQWtCO1NBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtZQUN4QixDQUFDLEVBQUUsSUFBSTtZQUNQLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTztZQUNwQixPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBd0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztnQkFDcEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN4RSxDQUFDO1NBQ0QsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUVaLE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELEtBQUs7UUFDSixTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFDN0MsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBbUIsRUFBQyxDQUFDLENBQUM7UUFDL0QsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELFlBQVksQ0FBQyxNQUFjO1FBQzFCLE9BQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFrQyxDQUFDLFVBQVUsQ0FBQyxFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWE7UUFDN0IsT0FBTyxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNELENBQUE7QUFqREE7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBQyxDQUFDOzZEQUNyQztBQUdmO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsK0JBQTZCLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBQyxDQUFDOzJEQUM1RTtBQUdiO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDOzREQUNYO0FBR2Q7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUMsQ0FBQzsrREFDdkU7QUFYRSw2QkFBNkI7SUFEakQsYUFBYSxDQUFDLDBCQUEwQixDQUFDO0dBQ3JCLDZCQUE2QixDQW1EakQ7ZUFuRG9CLDZCQUE2QiJ9