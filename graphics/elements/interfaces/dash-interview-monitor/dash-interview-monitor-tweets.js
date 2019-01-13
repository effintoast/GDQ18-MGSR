var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MapSortMixin from '../../../mixins/map-sort-mixin';
const { customElement, property } = Polymer.decorators;
const questionTweetsRep = nodecg.Replicant('interview:questionTweets');
const questionSortMapRep = nodecg.Replicant('interview:questionSortMap');
/**
 * @customElement
 * @polymer
 * @appliesMixin window.MapSortMixin
 */
let DashInterviewMonitorTweetsElement = class DashInterviewMonitorTweetsElement extends MapSortMixin(Polymer.MutableData(Polymer.Element)) {
    /**
     * @customElement
     * @polymer
     * @appliesMixin window.MapSortMixin
     */
    constructor() {
        super(...arguments);
        this.pgmTweet = null;
    }
    ready() {
        super.ready();
        // Fades new question nodes from purple to white when added.
        this._flashAddedNodes(this.shadowRoot, 'dash-interview-monitor-tweet', node => {
            const firstChild = this.shadowRoot.querySelector('dash-interview-monitor-tweet');
            const isFirstChild = node === firstChild;
            return !isFirstChild;
        });
        questionTweetsRep.on('change', newVal => {
            if (!newVal || newVal.length === 0) {
                this.questionTweets = [];
                return;
            }
            this.questionTweets = newVal;
        });
        questionSortMapRep.on('change', (newVal, _oldVal, operations) => {
            this._sortMapVal = newVal;
            this.$.repeat.render();
            if (newVal.length > 0 && this._shouldFlash(operations)) {
                this._flashElementBackground(this);
            }
        });
    }
    _computeNoQuestionTweets(questionTweets) {
        return !questionTweets || questionTweets.length <= 0;
    }
    _calcPgmTweet(questionTweets, _sortMapVal) {
        if (!questionTweets || !_sortMapVal) {
            return;
        }
        return questionTweets.find(tweet => {
            return _sortMapVal.indexOf(tweet.id_str) === 0;
        });
    }
    _pgmTweetChanged(newVal, oldVal) {
        if (!newVal) {
            return;
        }
        if (newVal && oldVal && newVal.id_str === oldVal.id_str) {
            return;
        }
        this.$.repeat.render();
        Polymer.flush();
        const firstMonitorTweet = this.shadowRoot.querySelector('dash-interview-monitor-tweet');
        if (!firstMonitorTweet) {
            return;
        }
        this._flashElementBackground(firstMonitorTweet.$.material, { endColor: '#DDFEDF' });
    }
};
__decorate([
    property({ type: Array })
], DashInterviewMonitorTweetsElement.prototype, "questionTweets", void 0);
__decorate([
    property({ type: Boolean, computed: '_computeNoQuestionTweets(questionTweets)' })
], DashInterviewMonitorTweetsElement.prototype, "noQuestionTweets", void 0);
__decorate([
    property({
        type: Object,
        computed: '_calcPgmTweet(questionTweets, _sortMapVal)',
        observer: '_pgmTweetChanged'
    })
], DashInterviewMonitorTweetsElement.prototype, "pgmTweet", void 0);
DashInterviewMonitorTweetsElement = __decorate([
    customElement('dash-interview-monitor-tweets')
], DashInterviewMonitorTweetsElement);
export default DashInterviewMonitorTweetsElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGFzaC1pbnRlcnZpZXctbW9uaXRvci10d2VldHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkYXNoLWludGVydmlldy1tb25pdG9yLXR3ZWV0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxPQUFPLFlBQVksTUFBTSxnQ0FBZ0MsQ0FBQztBQUkxRCxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDckQsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFVLDBCQUEwQixDQUFDLENBQUM7QUFDaEYsTUFBTSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUE2QiwyQkFBMkIsQ0FBQyxDQUFDO0FBRXJHOzs7O0dBSUc7QUFFSCxJQUFxQixpQ0FBaUMsR0FBdEQsTUFBcUIsaUNBQWtDLFNBQVEsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBTmpIOzs7O09BSUc7SUFDSDs7UUFhQyxhQUFRLEdBQWlCLElBQUksQ0FBQztJQWdFL0IsQ0FBQztJQTlEQSxLQUFLO1FBQ0osS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWQsNERBQTREO1FBQzVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBVyxFQUFFLDhCQUE4QixFQUFFLElBQUksQ0FBQyxFQUFFO1lBQzlFLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFXLENBQUMsYUFBYSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDbEYsTUFBTSxZQUFZLEdBQUcsSUFBSSxLQUFLLFVBQVUsQ0FBQztZQUN6QyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRUgsaUJBQWlCLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FB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