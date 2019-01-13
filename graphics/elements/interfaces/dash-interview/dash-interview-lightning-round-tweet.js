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
const questionSortMapRep = nodecg.Replicant('interview:questionSortMap');
/**
 * @customElement
 * @polymer
 * @appliesMixin Polymer.MutableData
 */

let DashInterviewLightningRoundTweetElement = class DashInterviewLightningRoundTweetElement extends Polymer.MutableData(Polymer.Element) {
  /**
   * @customElement
   * @polymer
   * @appliesMixin Polymer.MutableData
   */
  constructor() {
    super(...arguments);
    this._initialized = false;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this._initialized) {
      this._initialized = true;
      questionSortMapRep.on('change', newVal => {
        this._questionSortMap = newVal;
      });
    }
  }

  promote() {
    if (!this.tweet) {
      return;
    }

    const button = this.$.promote;
    button.disabled = true;
    nodecg.sendMessage('interview:promoteQuestionToTop', this.tweet.id_str, error => {
      button.disabled = false;

      if (error) {
        this.dispatchEvent(new CustomEvent('error-toast', {
          detail: {
            text: 'Failed to promote interview question.'
          },
          bubbles: true,
          composed: true
        }));
      }
    });
  }

  reject() {
    if (!this.tweet) {
      return;
    }

    const button = this.$.reject;
    button.disabled = true;
    nodecg.sendMessage('interview:markQuestionAsDone', this.tweet.id_str, error => {
      button.disabled = false;

      if (error) {
        this.dispatchEvent(new CustomEvent('error-toast', {
          detail: {
            text: 'Failed to reject interview question.'
          },
          bubbles: true,
          composed: true
        }));
      }
    });
  }

  _computeTweetId(prizeId) {
    return prizeId;
  }

  _computeFirst(tweet, questionSortMap) {
    if (!tweet || !Array.isArray(questionSortMap)) {
      return;
    }

    const sortMapIndex = questionSortMap.findIndex(entry => entry === this.tweet.id_str);
    return sortMapIndex === 0;
  }

  _firstChanged(newVal) {
    this.parentNode.host.style.backgroundColor = newVal ? '#BDE7C4' : '';
  }

};

__decorate([property({
  type: Object
})], DashInterviewLightningRoundTweetElement.prototype, "tweet", void 0);

__decorate([property({
  type: String,
  reflectToAttribute: true,
  computed: '_computeTweetId(tweet.id_str)'
})], DashInterviewLightningRoundTweetElement.prototype, "tweetId", void 0);

__decorate([property({
  type: Boolean,
  reflectToAttribute: true,
  computed: '_computeFirst(tweet, _questionSortMap)',
  observer: '_firstChanged'
})], DashInterviewLightningRoundTweetElement.prototype, "first", void 0);

__decorate([property({
  type: Array
})], DashInterviewLightningRoundTweetElement.prototype, "_questionSortMap", void 0);

DashInterviewLightningRoundTweetElement = __decorate([customElement('dash-interview-lightning-round-tweet')], DashInterviewLightningRoundTweetElement);
export default DashInterviewLightningRoundTweetElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LWxpZ2h0bmluZy1yb3VuZC10d2VldC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUdBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQTZDLDJCQUE3QyxDQUEzQjtBQUVBOzs7Ozs7QUFNQSxJQUFxQix1Q0FBdUMsR0FBNUQsTUFBcUIsdUNBQXJCLFNBQXFFLE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUFyRSxDQUF5RztBQU56Rzs7Ozs7QUFLQSxFQUFBLFdBQUEsR0FBQTs7QUFtQlMsU0FBQSxZQUFBLEdBQWUsS0FBZjtBQXVFUjs7QUFyRUEsRUFBQSxpQkFBaUIsR0FBQTtBQUNoQixVQUFNLGlCQUFOOztBQUVBLFFBQUksQ0FBQyxLQUFLLFlBQVYsRUFBd0I7QUFDdkIsV0FBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0EsTUFBQSxrQkFBa0IsQ0FBQyxFQUFuQixDQUFzQixRQUF0QixFQUFnQyxNQUFNLElBQUc7QUFDeEMsYUFBSyxnQkFBTCxHQUF3QixNQUF4QjtBQUNBLE9BRkQ7QUFHQTtBQUNEOztBQUVELEVBQUEsT0FBTyxHQUFBO0FBQ04sUUFBSSxDQUFDLEtBQUssS0FBVixFQUFpQjtBQUNoQjtBQUNBOztBQUVELFVBQU0sTUFBTSxHQUFHLEtBQUssQ0FBTCxDQUFPLE9BQXRCO0FBQ0EsSUFBQSxNQUFNLENBQUMsUUFBUCxHQUFrQixJQUFsQjtBQUNBLElBQUEsTUFBTSxDQUFDLFdBQVAsQ0FBbUIsZ0NBQW5CLEVBQXFELEtBQUssS0FBTCxDQUFXLE1BQWhFLEVBQXdFLEtBQUssSUFBRztBQUMvRSxNQUFBLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLEtBQWxCOztBQUNBLFVBQUksS0FBSixFQUFXO0FBQ1YsYUFBSyxhQUFMLENBQW1CLElBQUksV0FB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