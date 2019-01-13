var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiTimeagoElement_1;
import moment from "/bundles/gdqx18-layouts/node_modules/moment/src/moment.js";
const {
  customElement,
  property
} = Polymer.decorators;
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

__decorate([property({
  type: String,
  notify: true
})], UiTimeagoElement.prototype, "timeago", void 0);

__decorate([property({
  type: String,
  observer: UiTimeagoElement_1.prototype._datetimeChanged
})], UiTimeagoElement.prototype, "datetime", void 0);

UiTimeagoElement = UiTimeagoElement_1 = __decorate([customElement('ui-timeago')], UiTimeagoElement);
export default UiTimeagoElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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