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
let GDQOmnibarRunElement = class GDQOmnibarRunElement extends Polymer.Element {
    enter() {
        return this.$.listItem.enter();
    }
    exit() {
        return this.$.listItem.exit();
    }
    formatName(name) {
        return name.replace('\\n', ' ').trim();
    }
    concatenateRunners(run) {
        if (run.pk === 2640) {
            // Pre-Show
            return 'SpikeVegeta, feasel, Blechy, Protomagicalgirl & JHobz';
        }
        if (run.pk === 2779) {
            // Mega Man 1 - 3 Team Relay Race Any%
            return '12 Runners';
        }
        let concatenatedRunners = run.runners[0] ? run.runners[0].name : '';
        if (run.runners.length > 1) {
            concatenatedRunners = run.runners.slice(1).reduce((prev, curr, index, array) => {
                if (index === array.length - 1) {
                    return `${prev} & ${curr.name}`;
                }
                return `${prev}, ${curr.name}`;
            }, concatenatedRunners);
        }
        return concatenatedRunners;
    }
};
__decorate([
    property({ type: Object })
], GDQOmnibarRunElement.prototype, "run", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], GDQOmnibarRunElement.prototype, "first", void 0);
GDQOmnibarRunElement = __decorate([
    customElement('gdq-omnibar-run')
], GDQOmnibarRunElement);
export default GDQOmnibarRunElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItcnVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ2RxLW9tbmliYXItcnVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUVyRDs7O0dBR0c7QUFFSCxJQUFxQixvQkFBb0IsR0FBekMsTUFBcUIsb0JBQXFCLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFPaEUsS0FBSztRQUNKLE9BQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFzQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQy9ELENBQUM7SUFFRCxJQUFJO1FBQ0gsT0FBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQXNDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUQsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELGtCQUFrQixDQUFDLEdBQVE7UUFDMUIsSUFBSSxHQUFHLENBQUMsRUFBRSxLQUFLLElBQUksRUFBRTtZQUNwQixXQUFXO1lBQ1gsT0FBTyx1REFBdUQsQ0FBQztTQUMvRDtRQUVELElBQUksR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDcEIsc0NBQXNDO1lBQ3RDLE9BQU8sWUFBWSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxtQkFBbUIsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BFLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUM5RSxJQUFJLEtBQUssS0FBSyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0IsT0FBTyxHQUFHLElBQUksTUFBTSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ2hDO2dCQUVELE9BQU8sR0FBRyxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLENBQUMsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxtQkFBbUIsQ0FBQztJQUM1QixDQUFDO0NBQ0QsQ0FBQTtBQXhDQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztpREFDaEI7QUFHVDtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsSUFBSSxFQUFDLENBQUM7bURBQ3JDO0FBTEssb0JBQW9CO0lBRHhDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztHQUNaLG9CQUFvQixDQTBDeEM7ZUExQ29CLG9CQUFvQiJ9