var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const {
  customElement,
  property
} = Polymer.decorators;
const questions = nodecg.Replicant('interview:questionTweets');
const questionShowing = nodecg.Replicant('interview:questionShowing');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */

let DashInterviewLightningRoundElement = class DashInterviewLightningRoundElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   */
  constructor() {
    super(...arguments);
    this.questionShowing = false;
  }

  ready() {
    super.ready();
    questions.on('change', newVal => {
      this.set('replies', newVal);
    });
    questionShowing.on('change', newVal => {
      this.questionShowing = newVal;
    });
  }

  openEndInterviewDialog() {
    this.$.endInterviewDialog.open();
  }

  endInterview() {
    nodecg.sendMessage('interview:end');
  }

};

__decorate([property({
  type: Boolean,
  notify: true
})], DashInterviewLightningRoundElement.prototype, "questionShowing", void 0);

__decorate([property({
  type: Object
})], DashInterviewLightningRoundElement.prototype, "replies", void 0);

__decorate([property({
  type: Boolean
})], DashInterviewLightningRoundElement.prototype, "_markingTopQuestionAsDone", void 0);

DashInterviewLightningRoundElement = __decorate([customElement('dash-interview-lightning-round')], DashInterviewLightningRoundElement);
export default DashInterviewLightningRoundElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LWxpZ2h0bmluZy1yb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEwQiwwQkFBMUIsQ0FBbEI7QUFDQSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUCxDQUEwQiwyQkFBMUIsQ0FBeEI7QUFFQTs7Ozs7O0FBTUEsSUFBcUIsa0NBQWtDLEdBQXZELE1BQXFCLGtDQUFyQixTQUFnRSxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBaEUsQ0FBb0c7QUFOcEc7Ozs7O0FBS0EsRUFBQSxXQUFBLEdBQUE7O0FBR0MsU0FBQSxlQUFBLEdBQWtCLEtBQWxCO0FBMkJBOztBQW5CQSxFQUFBLEtBQUssR0FBQTtBQUNKLFVBQU0sS0FBTjtBQUVBLElBQUEsU0FBUyxDQUFDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLE1BQU0sSUFBRztBQUMvQixXQUFLLEdBQUwsQ0FBUyxTQUFULEVBQW9CLE1BQXBCO0FBQ0EsS0FGRDtBQUlBLElBQUEsZUFBZSxDQUFDLEVBQWhCLENBQW1CLFFBQW5CLEVBQTZCLE1BQU0sSUFBRztBQUNyQyxXQUFLLGVBQUwsR0FBdUIsTUFBdkI7QUFDQSxLQUZEO0FBR0E7O0FBRUQsRUFBQSxzQkFBc0IsR0FBQTtBQUNwQixTQUFLLENBQUwsQ0FBTyxrQkFBUCxDQUFpRCxJQUFqRDtBQUNEOztBQUVELEVBQUEsWUFBWSxHQUFBO0FBQ1gsSUFBQSxNQUFNLENBQUMsV0FBUCxDQUFtQixlQUFuQjtBQUNBOztBQTVCa0csQ0FBcEc7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsT0FBUDtBQUFnQixFQUFBLE1BQU0sRUFBRTtBQUF4QixDQUFELENBQ1QsQ0FBQSxFLDRDQUFBLEUsaUJBQUEsRSxLQUF3QixDQUF4QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSw0Q0FBQSxFLFNBQUEsRSxLQUFpQixDQUFqQixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSw0Q0FBQSxFLDJCQUFBLEUsS0FBbUMsQ0FBbkMsQ0FBQTs7QUFSb0Isa0NBQWtDLEdBQUEsVUFBQSxDQUFBLENBRHRELGFBQWEsQ0FBQyxnQ0FBRCxDQUN5QyxDQUFBLEVBQWxDLGtDQUFrQyxDQUFsQztlQUFBLGtDIiwic291cmNlUm9vdCI6IiJ9