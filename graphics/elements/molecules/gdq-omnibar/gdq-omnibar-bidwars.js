var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite } from 'gsap';
const { customElement, property } = Polymer.decorators;
const MAX_OPTIONS = 4;
/**
 * @customElement
 * @polymer
 */
let GDQOmnibarBidwarsElement = class GDQOmnibarBidwarsElement extends Polymer.Element {
    enter(displayDuration, scrollHoldDuration) {
        const tl = new TimelineLite();
        const labelElem = this.$.label;
        this.bidWars.forEach((bidWar, bidIndex) => {
            // Show at most MAX_OPTIONS options.
            const bidElements = bidWar.options.slice(0, MAX_OPTIONS).map((option, index) => {
                const element = document.createElement('gdq-omnibar-bidwar-option');
                element.bid = option;
                element.winning = index === 0;
                return element;
            });
            if (bidElements.length <= 0) {
                const placeholder = document.createElement('gdq-omnibar-bidwar-option');
                placeholder.bid = {};
                placeholder.placeholder = true;
                bidElements.push(placeholder);
            }
            const listElement = document.createElement('gdq-omnibar-list');
            listElement.classList.add('list');
            listElement.marginSize = -8;
            bidElements.forEach(element => {
                listElement.appendChild(element);
            });
            this.$.lists.appendChild(listElement);
            Polymer.flush();
            bidElements.slice(0).reverse().forEach((element, index) => {
                element.render();
                element.style.zIndex = String(index); // First item has highest z-index, last item has lowest.
            });
            tl.call(() => {
                this.$.lists.select(bidIndex);
            });
            if (bidIndex === 0) {
                tl.add(labelElem.enter(bidWar.description));
            }
            else {
                tl.add(labelElem.change(bidWar.description));
            }
            tl.call(() => {
                tl.pause();
                const fooTl = listElement.enter(displayDuration, scrollHoldDuration);
                fooTl.call(tl.resume, undefined, tl);
            });
            tl.add(listElement.exit());
        });
        return tl;
    }
    exit() {
        const tl = new TimelineLite();
        tl.add(this.$.label.exit());
        return tl;
    }
};
__decorate([
    property({ type: Array })
], GDQOmnibarBidwarsElement.prototype, "bidWars", void 0);
GDQOmnibarBidwarsElement = __decorate([
    customElement('gdq-omnibar-bidwars')
], GDQOmnibarBidwarsElement);
export default GDQOmnibarBidwarsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItYmlkd2Fycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWJpZHdhcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQU1sQyxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBRXRCOzs7R0FHRztBQUVILElBQXFCLHdCQUF3QixHQUE3QyxNQUFxQix3QkFBeUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUlwRSxLQUFLLENBQUMsZUFBdUIsRUFBRSxrQkFBMEI7UUFDeEQsTUFBTSxFQUFFLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQXNDLENBQUM7UUFFaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEVBQUU7WUFDekMsb0NBQW9DO1lBQ3BDLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQzlFLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsMkJBQTJCLENBQWtDLENBQUM7Z0JBQ3JHLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO2dCQUNyQixPQUFPLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxDQUFDLENBQUM7Z0JBQzlCLE9BQU8sT0FBTyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxXQUFXLEdBQUcs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