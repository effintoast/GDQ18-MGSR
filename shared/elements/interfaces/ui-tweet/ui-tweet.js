var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UiTweetElement_1;
const {
  customElement,
  property
} = Polymer.decorators;
let UiTweetElement = UiTweetElement_1 = class UiTweetElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.noAvatar = false;
  }

  computeProfileUrl(tweet) {
    if (!tweet || !tweet.user) {
      return;
    }

    return `https://twitter.com/${tweet.user.screen_name}`;
  }

  computeTweetUrl(profileUrl, tweet) {
    if (!profileUrl || !tweet) {
      return;
    }

    return `${profileUrl}/status/${tweet.id_str}`;
  }

  populateBody() {
    if (!this.tweet) {
      return;
    }

    this.$.body.innerHTML = this.tweet.text;
  }

};

__decorate([property({
  type: Object,
  observer: UiTweetElement_1.prototype.populateBody
})], UiTweetElement.prototype, "tweet", void 0);

__decorate([property({
  type: String,
  computed: 'computeProfileUrl(tweet)'
})], UiTweetElement.prototype, "profileUrl", void 0);

__decorate([property({
  type: String,
  computed: 'computeTweetUrl(profileUrl, tweet)'
})], UiTweetElement.prototype, "tweetUrl", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true
})], UiTweetElement.prototype, "noAvatar", void 0);

UiTweetElement = UiTweetElement_1 = __decorate([customElement('ui-tweet')], UiTweetElement);
export default UiTweetElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVpLXR3ZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFHQSxJQUFxQixjQUFjLEdBQUEsZ0JBQUEsR0FBbkMsTUFBcUIsY0FBckIsU0FBNEMsT0FBTyxDQUFDLE9BQXBELENBQTJEO0FBRDNELEVBQUEsV0FBQSxHQUFBOztBQVlDLFNBQUEsUUFBQSxHQUFXLEtBQVg7QUF5QkE7O0FBdkJBLEVBQUEsaUJBQWlCLENBQUMsS0FBRCxFQUFjO0FBQzlCLFFBQUksQ0FBQyxLQUFELElBQVUsQ0FBQyxLQUFLLENBQUMsSUFBckIsRUFBMkI7QUFDMUI7QUFDQTs7QUFFRCxXQUFPLHVCQUF1QixLQUFLLENBQUMsSUFBTixDQUFXLFdBQVcsRUFBcEQ7QUFDQTs7QUFFRCxFQUFBLGVBQWUsQ0FBQyxVQUFELEVBQXNCLEtBQXRCLEVBQW1DO0FBQ2pELFFBQUksQ0FBQyxVQUFELElBQWUsQ0FBQyxLQUFwQixFQUEyQjtBQUMxQjtBQUNBOztBQUVELFdBQU8sR0FBRyxVQUFVLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBM0M7QUFDQTs7QUFFRCxFQUFBLFlBQVksR0FBQTtBQUNYLFFBQUksQ0FBQyxLQUFLLEtBQVYsRUFBaUI7QUFDaEI7QUFDQTs7QUFFRCxTQUFLLENBQUwsQ0FBTyxJQUFQLENBQVksU0FBWixHQUF3QixLQUFLLEtBQUwsQ0FBVyxJQUFuQztBQUNBOztBQW5DeUQsQ0FBM0Q7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLEVBQUEsUUFBUSxFQUFFLGdCQUFjLENBQUMsU0FBZixDQUF5QjtBQUFsRCxDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsT0FBQSxFLEtBQWEsQ0FBYixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE1BQVA7QUFBZSxFQUFBLFFBQVEsRUFBRTtBQUF6QixDQUFELENBQ1QsQ0FBQSxFLHdCQUFBLEUsWUFBQSxFLEtBQW1CLENBQW5CLENBQUE7O0FBR0EsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUUsTUFBUDtBQUFlLEVBQUEsUUFBUSxFQUFFO0FBQXpCLENBQUQsQ0FDVCxDQUFBLEUsd0JBQUEsRSxVQUFBLEUsS0FBaUIsQ0FBakIsQ0FBQTs7QUFHQSxVQUFBLENBQUEsQ0FEQyxRQUFRLENBQUM7QUFBQyxFQUFBLElBQUksRUFBRSxPQUFQO0FBQWdCLEVBQUEsa0JBQWtCLEVBQUU7QUFBcEMsQ0FBRCxDQUNULENBQUEsRSx3QkFBQSxFLFVBQUEsRSxLQUFpQixDQUFqQixDQUFBOztBQVhvQixjQUFjLEdBQUEsZ0JBQUEsR0FBQSxVQUFBLENBQUEsQ0FEbEMsYUFBYSxDQUFDLFVBQUQsQ0FDcUIsQ0FBQSxFQUFkLGNBQWMsQ0FBZDtlQUFBLGMiLCJzb3VyY2VSb290IjoiIn0=