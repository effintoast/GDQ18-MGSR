var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite, Power1 } from 'gsap';
import Random from '../../../../shared/lib/vendor/random';
const { customElement } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let AtomTinyAlertsElement = class AtomTinyAlertsElement extends Polymer.Element {
    addAlert({ text, textColor = 'black', backgroundColor = 'white', holdDuration = 0.067 }) {
        const div = document.createElement('div');
        div.classList.add('alert');
        div.innerText = text;
        div.style.color = textColor;
        div.style.backgroundColor = backgroundColor;
        this.shadowRoot.appendChild(div);
        div.style.left = `${randomInt(0, this.clientWidth - div.clientWidth)}px`;
        div.style.bottom = `${randomInt(2, 8)}px`;
        const tl = new TimelineLite();
        tl.to(div, 0.1834, {
            clipPath: 'inset(0 0%)',
            ease: Power1.easeIn
        });
        tl.addLabel('exit', holdDuration);
        tl.to(div, 0.934, {
            y: -21,
            ease: Power1.easeIn
        }, 'exit');
        tl.to(div, 0.5167, {
            opacity: 0,
            ease: Power1.easeIn
        }, 'exit+=0.4167');
        tl.call(() => {
            div.remove();
        });
        return tl;
    }
};
AtomTinyAlertsElement = __decorate([
    customElement('atom-tiny-alerts')
], AtomTinyAlertsElement);
export default AtomTinyAlertsElement;
/**
 * Generates a random integer.
 * @param min - The minimum number, inclusive.
 * @param max - The maximmum number, inclusive.
 * @returns - A random number between min and max, inclusive.
 */
function randomInt(min, max) {
    return Random.integer(min, max)(Random.engines.browserCrypto);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS10aW55LWFsZXJ0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF0b20tdGlueS1hbGVydHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDMUMsT0FBTyxNQUFNLE1BQU0sc0NBQXNDLENBQUM7QUFTMUQsTUFBTSxFQUFDLGFBQWEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFM0M7OztHQUdHO0FBRUgsSUFBcUIscUJBQXFCLEdBQTFDLE1BQXFCLHFCQUFzQixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBQ2pFLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsT0FBTyxFQUFFLGVBQWUsR0FBRyxPQUFPLEVBQUUsWUFBWSxHQUFHLEtBQUssRUFBUTtRQUMzRixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUM1QixHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFFNUMsSUFBSSxDQUFDLFVBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDekUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFMUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5QixFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUU7WUFDbEIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ25CLENBQUMsQ0FBQztRQUVILEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRTtZQUNqQixDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ04sSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNO1NBQ25CLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDWCxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUU7WUFDbEIsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDbkIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUVuQixFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0QsQ0FBQTtBQW5Db0IscUJBQXFCO0lBRHpDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztHQUNiLHFCQUFxQixDQW1DekM7ZUFuQ29CLHFCQUFxQjtBQXFDMUM7Ozs7O0dBS0c7QUFDSCxTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsR0FBVztJQUMxQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0QsQ0FBQyJ9