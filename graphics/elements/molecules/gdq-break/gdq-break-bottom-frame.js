var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TweenLite, Power1, TimelineMax } from 'gsap';
const { customElement } = Polymer.decorators;
const FADE_DURATION = 0.334;
const FADE_OUT_EASE = Power1.easeIn;
const FADE_IN_EASE = Power1.easeOut;
const currentHost = nodecg.Replicant('currentHost');
const nowPlaying = nodecg.Replicant('nowPlaying');
const LOGO_FADE_INTERVAL = 20;
const LOGO_FADE_DURATION = 1;
const LOGO_FADE_OUT_EASE = Power1.easeIn;
const LOGO_FADE_IN_EASE = Power1.easeOut;
/**
 * @customElement
 * @polymer
 */
let GDQBreakBottomFrameElement = class GDQBreakBottomFrameElement extends Polymer.Element {
    ready() {
        super.ready();
        currentHost.on('change', newVal => {
            this._changeText(this.$['host-text'], newVal);
        });
        nowPlaying.on('change', newVal => {
            this._changeText(this.$['music-text'], `${newVal.game || '?'} - ${newVal.title || '?'}`);
        });
        // Logo anim
        const logoTL = new TimelineMax({ repeat: -1 });
        logoTL.to(this.$.gdqLogo, LOGO_FADE_DURATION, {
            opacity: 1,
            ease: LOGO_FADE_IN_EASE
        });
        logoTL.to(this.$.gdqLogo, LOGO_FADE_DURATION, {
            opacity: 0,
            ease: LOGO_FADE_OUT_EASE
        }, `+=${LOGO_FADE_INTERVAL}`);
        logoTL.to(this.$.charityLogo, LOGO_FADE_DURATION, {
            opacity: 1,
            ease: LOGO_FADE_IN_EASE
        });
        logoTL.to(this.$.charityLogo, LOGO_FADE_DURATION, {
            opacity: 0,
            ease: LOGO_FADE_OUT_EASE
        }, `+=${LOGO_FADE_INTERVAL}`);
    }
    _changeText(element, newText) {
        TweenLite.to(element, FADE_DURATION, {
            opacity: 0,
            ease: FADE_OUT_EASE,
            callbackScope: this,
            onComplete() {
                element.text = newText;
                TweenLite.to(element, FADE_DURATION, {
                    opacity: 1,
                    ease: FADE_IN_EASE,
                    delay: 0.05
                });
            }
        });
    }
};
GDQBreakBottomFrameElement = __decorate([
    customElement('gdq-break-bottom-frame')
], GDQBreakBottomFrameElement);
export default GDQBreakBottomFrameElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWJyZWFrLWJvdHRvbS1mcmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1icmVhay1ib3R0b20tZnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBSXBELE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRTNDLE1BQU0sYUFBYSxHQUFHLEtBQUssQ0FBQztBQUM1QixNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0FBQ3BDLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFFcEMsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBYyxhQUFhLENBQUMsQ0FBQztBQUNqRSxNQUFNLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFhLFlBQVksQ0FBQyxDQUFDO0FBRTlELE1BQU0sa0JBQWtCLEdBQUcsRUFBRSxDQUFDO0FBQzlCLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUN6QyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUM7QUFFekM7OztHQUdHO0FBRUgsSUFBcUIsMEJBQTBCLEdBQS9DLE1BQXFCLDBCQUEyQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBQ3RFLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxXQUFXLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO1FBRUgsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBZ0IsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksR0FBRyxNQUFNLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6RyxDQUFDLENBQUMsQ0FBQztRQUVILFlBQVk7UUFDWixNQUFNLE1BQU0sR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFN0MsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtZQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxpQkFBaUI7U0FDdkIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRTtZQUM3QyxPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxrQkFBa0I7U0FDeEIsRUFBRSxLQUFLLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUU5QixNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFO1lBQ2pELE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBSSxFQUFFLGlCQUFpQjtTQUN2QixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLGtCQUFrQixFQUFFO1lBQ2pELE9BQU8sRUFBRSxDQUFDO1lBQ1YsSUFBSSxFQUFFLGtCQUFrQjtTQUN4QixFQUFFLEtBQUssa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBb0IsRUFBRSxPQUFlO1FBQ2hELFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRTtZQUNwQyxPQUFPLEVBQUUsQ0FBQztZQUNWLElBQUksRUFBRSxhQUFhO1lBQ25CLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFVBQVU7Z0JBQ1IsT0FBZSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7Z0JBQ2hDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLGFBQWEsRUFBRTtvQkFDcEMsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLEtBQUssRUFBRSxJQUFJO2lCQUNYLENBQUMsQ0FBQztZQUNKLENBQUM7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0NBQ0QsQ0FBQTtBQW5Eb0IsMEJBQTBCO0lBRDlDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztHQUNuQiwwQkFBMEIsQ0FtRDlDO2VBbkRvQiwwQkFBMEIifQ==