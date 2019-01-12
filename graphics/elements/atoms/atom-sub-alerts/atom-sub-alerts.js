var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import AtomTinyAlertsElement from '../atom-tiny-alerts/atom-tiny-alerts';
const { customElement } = Polymer.decorators;
/**
 * @customElement
 * @polymer
 */
let AtomSubAlertsElement = class AtomSubAlertsElement extends AtomTinyAlertsElement {
    ready() {
        super.ready();
        nodecg.listenFor('subscription', this._handleSubscription.bind(this));
    }
    _handleSubscription(subscription) {
        let backgroundColor = 'white';
        let holdDuration = 0.067;
        let text = 'New';
        if (subscription.sub_plan && subscription.sub_plan.toLowerCase() === 'prime') {
            backgroundColor = '#6441a4';
            text = 'Prime';
        }
        else if (subscription.context && subscription.context.toLowerCase() === 'subgift') {
            backgroundColor = '#00ffff';
            text = 'Gift';
        }
        else if (subscription.sub_plan === '2000') {
            backgroundColor = '#ffba00';
            holdDuration *= 3;
            text = '$9.99';
        }
        else if (subscription.sub_plan === '3000') {
            backgroundColor = '#ff0099';
            holdDuration *= 6;
            text = '$24.99';
        }
        if (subscription.months <= 1) {
            text += ' Sub';
        }
        else {
            text += ` Resub x${subscription.months}`;
        }
        this.addAlert({
            text,
            backgroundColor,
            holdDuration
        });
    }
};
AtomSubAlertsElement = __decorate([
    customElement('atom-sub-alerts')
], AtomSubAlertsElement);
export default AtomSubAlertsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXRvbS1zdWItYWxlcnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXRvbS1zdWItYWxlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8scUJBQXFCLE1BQU0sc0NBQXNDLENBQUM7QUFtQnpFLE1BQU0sRUFBQyxhQUFhLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBRTNDOzs7R0FHRztBQUVILElBQXFCLG9CQUFvQixHQUF6QyxNQUFxQixvQkFBcUIsU0FBUSxxQkFBcUI7SUFDdEUsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsbUJBQW1CLENBQUMsWUFBZ0M7UUFDbkQsSUFBSSxlQUFlLEdBQUcsT0FBTyxDQUFDO1FBQzlCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLElBQUksR0FBRyxLQUFLLENBQUM7UUFFakIsSUFBSSxZQUFZLENBQUMsUUFBUSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssT0FBTyxFQUFFO1lBQzdFLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNmO2FBQU0sSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ3BGLGVBQWUsR0FBRyxTQUFTLENBQUM7WUFDNUIsSUFBSSxHQUFHLE1BQU0sQ0FBQztTQUNkO2FBQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUM1QyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQzVCLFlBQVksSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLE9BQU8sQ0FBQztTQUNmO2FBQU0sSUFBSSxZQUFZLENBQUMsUUFBUSxLQUFLLE1BQU0sRUFBRTtZQUM1QyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQzVCLFlBQVksSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxHQUFHLFFBQVEsQ0FBQztTQUNoQjtRQUVELElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxJQUFJLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTixJQUFJLElBQUksV0FBVyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQ2IsSUFBSTtZQUNKLGVBQWU7WUFDZixZQUFZO1NBQ1osQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUE7QUF2Q29CLG9CQUFvQjtJQUR4QyxhQUFhLENBQUMsaUJBQWlCLENBQUM7R0FDWixvQkFBb0IsQ0F1Q3hDO2VBdkNvQixvQkFBb0IifQ==