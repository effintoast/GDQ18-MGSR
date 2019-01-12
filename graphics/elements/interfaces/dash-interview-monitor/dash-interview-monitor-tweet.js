var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashInterviewMonitorTweetElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
let DashInterviewMonitorTweetElement = DashInterviewMonitorTweetElement_1 = class DashInterviewMonitorTweetElement extends Polymer.Element {
  populateBody() {
    if (!this.tweet) {
      return;
    }

    this.$.body.innerHTML = this.tweet.text;
  }

};

__decorate([property({
  type: Object,
  observer: DashInterviewMonitorTweetElement_1.prototype.populateBody
})], DashInterviewMonitorTweetElement.prototype, "tweet", void 0);

DashInterviewMonitorTweetElement = DashInterviewMonitorTweetElement_1 = __decorate([customElement('dash-interview-monitor-tweet')], DashInterviewMonitorTweetElement);
export default DashInterviewMonitorTweetElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3ItdHdlZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUdBLElBQXFCLGdDQUFnQyxHQUFBLGtDQUFBLEdBQXJELE1BQXFCLGdDQUFyQixTQUE4RCxPQUFPLENBQUMsT0FBdEUsQ0FBNkU7QUFJNUUsRUFBQSxZQUFZLEdBQUE7QUFDWCxRQUFJLENBQUMsS0FBSyxLQUFWLEVBQWlCO0FBQ2hCO0FBQ0E7O0FBRUQsU0FBSyxDQUFMLENBQU8sSUFBUCxDQUFZLFNBQVosR0FBd0IsS0FBSyxLQUFMLENBQVcsSUFBbkM7QUFDQTs7QUFWMkUsQ0FBN0U7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLEVBQUEsUUFBUSxFQUFFLGtDQUFnQyxDQUFDLFNBQWpDLENBQTJDO0FBQXBFLENBQUQsQ0FDVCxDQUFBLEUsMENBQUEsRSxPQUFBLEUsS0FBYSxDQUFiLENBQUE7O0FBRm9CLGdDQUFnQyxHQUFBLGtDQUFBLEdBQUEsVUFBQSxDQUFBLENBRHBELGFBQWEsQ0FBQyw4QkFBRCxDQUN1QyxDQUFBLEVBQWhDLGdDQUFnQyxDQUFoQztlQUFBLGdDIiwic291cmNlUm9vdCI6IiJ9