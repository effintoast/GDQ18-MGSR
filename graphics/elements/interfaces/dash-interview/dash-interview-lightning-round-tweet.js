var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const { customElement, property } = Polymer.decorators;
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
__decorate([
    property({ type: Object })
], DashInterviewLightningRoundTweetElement.prototype, "tweet", void 0);
__decorate([
    property({ type: String, reflectToAttribute: true, computed: '_computeTweetId(tweet.id_str)' })
], DashInterviewLightningRoundTweetElement.prototype, "tweetId", void 0);
__decorate([
    property({
        type: Boolean,
        reflectToAttribute: true,
        computed: '_computeFirst(tweet, _questionSortMap)',
        observer: '_firstChanged'
    })
], DashInterviewLightningRoundTweetElement.prototype, "first", void 0);
__decorate([
    property({ type: Array })
], DashInterviewLightningRoundTweetElement.prototype, "_questionSortMap", void 0);
DashInterviewLightningRoundTweetElement = __decorate([
    customElement('dash-interview-lightning-round-tweet')
], DashInterviewLightningRoundTweetElement);
export default DashInterviewLightningRoundTweetElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbGlnaHRuaW5nLXJvdW5kLXR3ZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGFzaC1pbnRlcnZpZXctbGlnaHRuaW5nLXJvdW5kLXR3ZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNyRCxNQUFNLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQTZCLDJCQUEyQixDQUFDLENBQUM7QUFFckc7Ozs7R0FJRztBQUVILElBQXFCLHVDQUF1QyxHQUE1RCxNQUFxQix1Q0FBd0MsU0FBUSxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFOekc7Ozs7T0FJRztJQUNIOztRQW1CUyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQXVFOUIsQ0FBQztJQXJFQSxpQkFBaUI7UUFDaEIsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsa0JBQWtCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUVELE9BQU87UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNoQixPQUFPO1NBQ1A7UUFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQTZCLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDdkIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUMvRSxNQUFNLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUN4QixJQUFJLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksV0FBVyxDQUFDLGFBQWEsRUFBRTtvQkFDakQsTUFBTSxFQUFFO3dCQUNQLElBQUksRUFBRSx1Q0FBdUM7cUJBQzdDO29CQUNELE9BQU8sRUFBRSxJQUFJO29CQUNiLFFBQVEsRUFBRSxJQUFJO2lCQUNkLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDRixDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEIsT0FBTztTQUNQO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUE0QixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxXQUFXLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDN0UsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDeEIsSUFBSSxLQUFLLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxhQUFhLEVBQUU7b0JBQ2pELE1BQU0sRUFBRTt3QkFDUCxJQUFJLEVBQUUsc0NBQXNDO3FCQUM1QztvQkFDRCxPQUFPLEVBQUUsSUFBSTtvQkFDYixRQUFRLEVBQUUsSUFBSTtpQkFDZCxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0YsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLE9BQWU7UUFDOUIsT0FBTyxPQUFPLENBQUM7SUFDaEIsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFhLEVBQUUsZUFBNEM7UUFDeEUsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDOUMsT0FBTztTQUNQO1FBRUQsTUFBTSxZQUFZLEdBQUcsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JGLE9BQU8sWUFBWSxLQUFLLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQWU7UUFDM0IsSUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQy9FLENBQUM7Q0FDRCxDQUFBO0FBdkZBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFDO3NFQUNaO0FBR2I7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsK0JBQStCLEVBQUMsQ0FBQzt3RUFDOUU7QUFRaEI7SUFOQyxRQUFRLENBQUM7UUFDVCxJQUFJLEVBQUUsT0FBTztRQUNiLGtCQUFrQixFQUFFLElBQUk7UUFDeEIsUUFBUSxFQUFFLHdDQUF3QztRQUNsRCxRQUFRLEVBQUUsZUFBZTtLQUN6QixDQUFDO3NFQUNhO0FBR2Y7SUFEQyxRQUFRLENBQUMsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFDLENBQUM7aUZBQ3FCO0FBaEJ6Qix1Q0FBdUM7SUFEM0QsYUFBYSxDQUFDLHNDQUFzQyxDQUFDO0dBQ2pDLHVDQUF1QyxDQXlGM0Q7ZUF6Rm9CLHVDQUF1QyJ9