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
const currentLayout = nodecg.Replicant('gdq:currentLayout');
const tweets = nodecg.Replicant('tweets');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */

let GDQTwitterControlsElement = class GDQTwitterControlsElement extends Polymer.MutableData(Polymer.Element) {
  ready() {
    super.ready();
    const cover = this.$.cover;
    currentLayout.on('change', newVal => {
      switch (newVal) {
        case 'countdown':
        case 'interview':
        case 'standard_4':
        case 'widescreen_4':
        case 'gameboy_4':
        case 'ds':
          cover.style.display = 'flex';
          break;

        default:
          cover.style.display = 'none';
      }
    });
    tweets.on('change', newVal => {
      this.$.empty.style.display = newVal.length > 0 ? 'none' : 'flex';
      this.tweets = newVal;
    });
  }

  _sortTweets(a, b) {
    // @ts-ignore
    return new Date(b.created_at) - new Date(a.created_at);
  }

};

__decorate([property({
  type: Array
})], GDQTwitterControlsElement.prototype, "tweets", void 0);

GDQTwitterControlsElement = __decorate([customElement('gdq-twitter-controls')], GDQTwitterControlsElement);
export default GDQTwitterControlsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS10d2l0dGVyLWNvbnRyb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQUNBLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQXFDLG1CQUFyQyxDQUF0QjtBQUNBLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQXlCLFFBQXpCLENBQWY7QUFFQTs7Ozs7O0FBTUEsSUFBcUIseUJBQXlCLEdBQTlDLE1BQXFCLHlCQUFyQixTQUF1RCxPQUFPLENBQUMsV0FBUixDQUFvQixPQUFPLENBQUMsT0FBNUIsQ0FBdkQsQ0FBMkY7QUFJMUYsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU47QUFDQSxVQUFNLEtBQUssR0FBRyxLQUFLLENBQUwsQ0FBTyxLQUFyQjtBQUVBLElBQUEsYUFBYSxDQUFDLEVBQWQsQ0FBaUIsUUFBakIsRUFBMkIsTUFBTSxJQUFHO0FBQ25DLGNBQVEsTUFBUjtBQUNDLGFBQUssV0FBTDtBQUNBLGFBQUssV0FBTDtBQUNBLGFBQUssWUFBTDtBQUNBLGFBQUssY0FBTDtBQUNBLGFBQUssV0FBTDtBQUNBLGFBQUssSUFBTDtBQUNDLFVBQUEsS0FBSyxDQUFDLEtBQU4sQ0FBWSxPQUFaLEdBQXNCLE1BQXRCO0FBQ0E7O0FBQ0Q7QUFDQyxVQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksT0FBWixHQUFzQixNQUF0QjtBQVZGO0FBWUEsS0FiRDtBQWVBLElBQUEsTUFBTSxDQUFDLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLE1BQU0sSUFBRztBQUMzQixXQUFLLENBQUwsQ0FBTyxLQUFQLENBQTZCLEtBQTdCLENBQW1DLE9BQW5DLEdBQTZDLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQWhCLEdBQW9CLE1BQXBCLEdBQTZCLE1BQTFFO0FBQ0QsV0FBSyxNQUFMLEdBQWMsTUFBZDtBQUNBLEtBSEQ7QUFJQTs7QUFFRCxFQUFBLFdBQVcsQ0FBQyxDQUFELEVBQVcsQ0FBWCxFQUFtQjtBQUM3QjtBQUNBLFdBQU8sSUFBSSxJQUFKLENBQVMsQ0FBQyxDQUFDLFVBQVgsSUFBeUIsSUFBSSxJQUFKLENBQVMsQ0FBQyxDQUFDLFVBQVgsQ0FBaEM7QUFDQTs7QUFoQ3lGLENBQTNGOztBQUVDLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFO0FBQVAsQ0FBRCxDQUNULENBQUEsRSxtQ0FBQSxFLFFBQUEsRSxLQUFlLENBQWYsQ0FBQTs7QUFGb0IseUJBQXlCLEdBQUEsVUFBQSxDQUFBLENBRDdDLGFBQWEsQ0FBQyxzQkFBRCxDQUNnQyxDQUFBLEVBQXpCLHlCQUF5QixDQUF6QjtlQUFBLHlCIiwic291cmNlUm9vdCI6IiJ9