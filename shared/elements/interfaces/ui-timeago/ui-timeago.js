var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UiTimeagoElement_1;
import moment from 'moment';
const { customElement, property } = Polymer.decorators;
moment.updateLocale('en', {
    relativeTime: {
        future: 'in %s',
        past: '%s',
        s: 'just now',
        ss: '%ds',
        m: '1m',
        mm: '%dm',
        h: '1h',
        hh: '%dh',
        d: '1d',
        dd: '%dd',
        M: '1mo',
        MM: '%dmo',
        y: '1y',
        yy: '%dy'
    }
});
let UiTimeagoElement = UiTimeagoElement_1 = class UiTimeagoElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.timeago = '';
        this.datetime = '0000-00-00T00:00:00.000Z';
    }
    ready() {
        super.ready();
        this.restartInterval();
    }
    restartInterval() {
        this.recalculate();
        clearInterval(this.interval);
        this.interval = window.setInterval(this.recalculate.bind(this), 60000);
    }
    recalculate() {
        // TODO: This is the only thing in this entire codebase that uses Moment. Can we eliminate this dependency?
        this.timeago = moment(new Date(this.datetime)).fromNow();
    }
    _datetimeChanged() {
        this.restartInterval();
    }
};
__decorate([
    property({ type: String, notify: true })
], UiTimeagoElement.prototype, "timeago", void 0);
__decorate([
    property({ type: String, observer: UiTimeagoElement_1.prototype._datetimeChanged })
], UiTimeagoElement.prototype, "datetime", void 0);
UiTimeagoElement = UiTimeagoElement_1 = __decorate([
    customElement('ui-timeago')
], UiTimeagoElement);
export default UiTimeagoElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdGltZWFnby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLXRpbWVhZ28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUU1QixNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7SUFDekIsWUFBWSxFQUFFO1FBQ2IsTUFBTSxFQUFFLE9BQU87UUFDZixJQUFJLEVBQUUsSUFBSTtRQUNWLENBQUMsRUFBRSxVQUFVO1FBQ2IsRUFBRSxFQUFFLEtBQUs7UUFDVCxDQUFDLEVBQUUsSUFBSTtRQUNQLEVBQUUsRUFBRSxLQUFLO1FBQ1QsQ0FBQyxFQUFFLElBQUk7UUFDUCxFQUFFLEVBQUUsS0FBSztRQUNULENBQUMsRUFBRSxJQUFJO1FBQ1AsRUFBRSxFQUFFLEtBQUs7UUFDVCxDQUFDLEVBQUUsS0FBSztRQUNSLEVBQUUsRUFBRSxNQUFNO1FBQ1YsQ0FBQyxFQUFFLElBQUk7UUFDUCxFQUFFLEVBQUUsS0FBSztLQUNUO0NBQ0QsQ0FBQyxDQUFDO0FBR0gsSUFBcUIsZ0JBQWdCLHdCQUFyQyxNQUFxQixnQkFBaUIsU0FBUSxPQUFPLENBQUMsT0FBTztJQUQ3RDs7UUFHQyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR2IsYUFBUSxHQUFHLDBCQUEwQixDQUFDO0lBdUJ2QyxDQUFDO0lBbkJBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGVBQWU7UUFDZCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELFdBQVc7UUFDViwyR0FBMkc7UUFDM0csSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVELGdCQUFnQjtRQUNmLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN4QixDQUFDO0NBQ0QsQ0FBQTtBQTFCQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQyxDQUFDO2lEQUMxQjtBQUdiO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsa0JBQWdCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFDLENBQUM7a0RBQzFDO0FBTGxCLGdCQUFnQjtJQURwQyxhQUFhLENBQUMsWUFBWSxDQUFDO0dBQ1AsZ0JBQWdCLENBNEJwQztlQTVCb0IsZ0JBQWdCIn0=