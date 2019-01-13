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
 * @appliesMixin Polymer.MutableData
 */
let FanartItemElement = class FanartItemElement extends Polymer.MutableData(Polymer.Element) {
    preview() {
        this.dispatchEvent(new CustomEvent('preview'));
    }
    accept() {
        nodecg.sendMessage('acceptFanart', this.value);
    }
    reject() {
        nodecg.sendMessage('rejectTweet', this.value.id_str);
    }
    _calcIndicatorHidden(tweetMedia) {
        return !tweetMedia || !Array.isArray(tweetMedia) || tweetMedia.length <= 1;
    }
    _computeImageUrl(tweetMedia) {
        if (tweetMedia && tweetMedia[0]) {
            return tweetMedia[0].media_url_https;
        }
        return '';
    }
};
__decorate([
    property({ type: Object })
], FanartItemElement.prototype, "value", void 0);
FanartItemElement = __decorate([
    customElement('fanart-item')
], FanartItemElement);
export default FanartItemElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFuYXJ0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmYW5hcnQtaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQ7Ozs7R0FJRztBQUVILElBQXFCLGlCQUFpQixHQUF0QyxNQUFxQixpQkFBa0IsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFJbEYsT0FBTztRQUNOLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTTtRQUNMLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsTUFBTTtRQUNMLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG9CQUFvQixDQUFDLFVBQXVCO1FBQzNDLE9BQU8sQ0FBQyxVQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUF1QjtRQUN2QyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsT0FBTyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1NBQ3JDO1FBRUQsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0QsQ0FBQTtBQXpCQTtJQURDLFFBQVEsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztnREFDWjtBQUZPLGlCQUFpQjtJQURyQyxhQUFhLENBQUMsYUFBYSxDQUFDO0dBQ1IsaUJBQWlCLENBMkJyQztlQTNCb0IsaUJBQWlCIn0=