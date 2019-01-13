var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite } from 'gsap';
const { customElement, property } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let GDQOmnibarChallengesElement = class GDQOmnibarChallengesElement extends Polymer.Element {
    enter(displayDuration) {
        const tl = new TimelineLite();
        this.challenges.forEach((challenge, index) => {
            const challengeElement = document.createElement('gdq-omnibar-challenge');
            challengeElement.classList.add('challenge');
            challengeElement.bid = challenge;
            this.$.challenges.appendChild(challengeElement);
            tl.call(() => {
                this.$.challenges.select(index);
            }, undefined, null, '+=0.03');
            if (index === 0) {
                tl.add(this.$.label.enter(challenge.description));
            }
            else {
                tl.add(this.$.label.change(challenge.description));
            }
            tl.call(() => {
                tl.pause();
                challengeElement.render();
                const tempTl = challengeElement.enter();
                tempTl.call(tl.resume, undefined, tl);
            });
            tl.call(() => {
                tl.pause();
                const tempTl = challengeElement.exit();
                tempTl.call(tl.resume, undefined, tl);
            }, undefined, null, `+=${displayDuration}`);
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
], GDQOmnibarChallengesElement.prototype, "challenges", void 0);
GDQOmnibarChallengesElement = __decorate([
    customElement('gdq-omnibar-challenges')
], GDQOmnibarChallengesElement);
export default GDQOmnibarChallengesElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItY2hhbGxlbmdlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLWNoYWxsZW5nZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUlsQyxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQ7OztHQUdHO0FBRUgsSUFBcUIsMkJBQTJCLEdBQWhELE1BQXFCLDJCQUE0QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBSXZFLEtBQUssQ0FBQyxlQUF1QjtRQUM1QixNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQzVDLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBdUIsQ0FBK0IsQ0FBQztZQUN2RyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLGdCQUFnQixDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFFaEQsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFrQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxRCxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUU5QixJQUFJLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ2hCLEVBQUUsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUF1QyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzthQUNyRjtpQkFBTTtnQkFDTixFQUFFLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBdUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDdEY7WUFFRCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ1gsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQzFCLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUN4QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNYLE1BQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3ZDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssZUFBZSxFQUFFLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sRUFBRSxDQUFDO0lBQ1gsQ0FBQztJQUVELElBQUk7UUFDSCxNQUFNLEVBQUUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzlCLEVBQUUsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUF1QyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDL0QsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0QsQ0FBQTtBQTNDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQzsrREFDQTtBQUZKLDJCQUEyQjtJQUQvQyxhQUFhLENBQUMsd0JBQXdCLENBQUM7R0FDbkIsMkJBQTJCLENBNkMvQztlQTdDb0IsMkJBQTJCIn0=