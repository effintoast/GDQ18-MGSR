var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UiTweetElement_1;
const { customElement, property } = Polymer.decorators;
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
__decorate([
    property({ type: Object, observer: UiTweetElement_1.prototype.populateBody })
], UiTweetElement.prototype, "tweet", void 0);
__decorate([
    property({ type: String, computed: 'computeProfileUrl(tweet)' })
], UiTweetElement.prototype, "profileUrl", void 0);
__decorate([
    property({ type: String, computed: 'computeTweetUrl(profileUrl, tweet)' })
], UiTweetElement.prototype, "tweetUrl", void 0);
__decorate([
    property({ type: Boolean, reflectToAttribute: true })
], UiTweetElement.prototype, "noAvatar", void 0);
UiTweetElement = UiTweetElement_1 = __decorate([
    customElement('ui-tweet')
], UiTweetElement);
export default UiTweetElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWktdHdlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1aS10d2VldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRUEsTUFBTSxFQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUMsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0FBR3JELElBQXFCLGNBQWMsc0JBQW5DLE1BQXFCLGNBQWUsU0FBUSxPQUFPLENBQUMsT0FBTztJQUQzRDs7UUFZQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBeUJsQixDQUFDO0lBdkJBLGlCQUFpQixDQUFDLEtBQWE7UUFDOUIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7WUFDMUIsT0FBTztTQUNQO1FBRUQsT0FBTyx1QkFBdUIsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN4RCxDQUFDO0lBRUQsZUFBZSxDQUFDLFVBQW1CLEVBQUUsS0FBYTtRQUNqRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzFCLE9BQU87U0FDUDtRQUVELE9BQU8sR0FBRyxVQUFVLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxZQUFZO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pDLENBQUM7Q0FDRCxDQUFBO0FBbENBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZ0JBQWMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFDLENBQUM7NkNBQzdEO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSwwQkFBMEIsRUFBQyxDQUFDO2tEQUM1QztBQUduQjtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLG9DQUFvQyxFQUFDLENBQUM7Z0RBQ3hEO0FBR2pCO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQztnREFDbkM7QUFYRyxjQUFjO0lBRGxDLGFBQWEsQ0FBQyxVQUFVLENBQUM7R0FDTCxjQUFjLENBb0NsQztlQXBDb0IsY0FBYyJ9