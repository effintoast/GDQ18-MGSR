var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import MapSortMixin from "../../../mixins/map-sort-mixin.js";
const {
  customElement,
  property
} = Polymer.decorators;
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
    super.ready(); // Fades new question nodes from purple to white when added.

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

    this._flashElementBackground(firstMonitorTweet.$.material, {
      endColor: '#DDFEDF'
    });
  }

};

__decorate([property({
  type: Array
})], DashInterviewMonitorTweetsElement.prototype, "questionTweets", void 0);

__decorate([property({
  type: Boolean,
  computed: '_computeNoQuestionTweets(questionTweets)'
})], DashInterviewMonitorTweetsElement.prototype, "noQuestionTweets", void 0);

__decorate([property({
  type: Object,
  computed: '_calcPgmTweet(questionTweets, _sortMapVal)',
  observer: '_pgmTweetChanged'
})], DashInterviewMonitorTweetsElement.prototype, "pgmTweet", void 0);

DashInterviewMonitorTweetsElement = __decorate([customElement('dash-interview-monitor-tweets')], DashInterviewMonitorTweetsElement);
export default DashInterviewMonitorTweetsElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2gtaW50ZXJ2aWV3LW1vbml0b3ItdHdlZXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0EsT0FBTyxZQUFQLE1BQXlCLG1DQUF6QjtBQUlBLE1BQU07QUFBQyxFQUFBLGFBQUQ7QUFBZ0IsRUFBQTtBQUFoQixJQUE0QixPQUFPLENBQUMsVUFBMUM7QUFDQSxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxTQUFQLENBQTBCLDBCQUExQixDQUExQjtBQUNBLE1BQU0sa0JBQWtCLEdBQUcsTUFBTSxDQUFDLFNBQVAsQ0FBNkMsMkJBQTdDLENBQTNCO0FBRUE7Ozs7OztBQU1BLElBQXFCLGlDQUFpQyxHQUF0RCxNQUFxQixpQ0FBckIsU0FBK0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFSLENBQW9CLE9BQU8sQ0FBQyxPQUE1QixDQUFELENBQTNFLENBQWlIO0FBTmpIOzs7OztBQUtBLEVBQUEsV0FBQSxHQUFBOztBQWFDLFNBQUEsUUFBQSxHQUF5QixJQUF6QjtBQWdFQTs7QUE5REEsRUFBQSxLQUFLLEdBQUE7QUFDSixVQUFNLEtBQU4sR0FESSxDQUdKOztBQUNBLFNBQUssZ0JBQUwsQ0FBc0IsS0FBSyxVQUEzQixFQUF3Qyw4QkFBeEMsRUFBd0UsSUFBSSxJQUFHO0FBQzlFLFlBQU0sVUFBVSxHQUFHLEtBQUssVUFBTCxDQUFpQixhQUFqQixDQUErQiw4QkFBL0IsQ0FBbkI7QUFDQSxZQUFNLFlBQVksR0FBRyxJQUFJLEtBQUssVUFBOUI7QUFDQSxhQUFPLENBQUMsWUFBUjtBQUNBLEtBSkQ7O0FBTUEsSUFBQSxpQkFBaUIsQ0FBQyxFQUFsQixDQUFxQixRQUFyQixFQUErQixNQUFNLElBQUc7QUFDdkMsVUFBSSxDQUFDLE1BQUQsSUFBVyxNQUFNLENBQUMsTUFBUCxLQUFrQixDQUFqQyxFQUFvQztBQUNuQyxhQUFLLGNBQUwsR0FBc0IsRUFBdEI7QUFDQTtBQUNBOztBQUVELFdBQUssY0FBTCxHQUFzQixNQUF0QjtBQUNBLEtBUEQ7QUFTQSxJQUFBLGtCQUFrQixDQUFDLEVBQW5CLENBQXNCLFFBQXRCLEVBQWdDLENBQUMsTUFBRCxFQUFTLE9BQVQsRUFBa0IsVUFBbEIsS0FBZ0M7QUFDL0QsV0FBSyxXQUFMLEdBQW1CLE1BQW5CO0FBQ0MsV0FBSyxDQUFMLENBQU8sTUFBUCxDQUFvQyxNQUFwQzs7QUFFRCxVQUFJLE1BQU0sQ0FBQyxNQUFQLEdBQWdCLENBQWhCLElBQXFCLEtBQUssWUFBTCxDQUFrQixVQUFsQixDQUF6QixFQUF3RDtBQUN2RCxhQUFLLHVCQUFMLENBQTZCLElBQTdCO0FBQ0E7QUFDRCxLQVBEO0FBUUE7O0FBRUQsRUFBQSx3QkFBd0IsQ0FBQyxjQUFELEVBQXlCO0FBQ2hELFdBQU8sQ0FBQyxjQUFELElBQW1CLGNBQWMsQ0FBQyxNQUFmLElBQXlCLENBQW5EO0FBQ0E7O0FBRUQsRUFBQSxhQUFhLENBQUMsY0FBRCxFQUEyQixXQUEzQixFQUFtRTtBQUMvRSxRQUFJLENBQUMsY0FBRCxJQUFtQixDQUFDLFdBQXhCLEVBQXFDO0FBQ3BDO0FBQ0E7O0FBRUQsV0FBTyxjQUFjLENBQUMsSUFBZixDQUFvQixLQUFLLElBQUc7QUFDbEMsYUFBTyxXQUFXLENBQUMsT0FBWixDQUFvQixLQUFLLENBQUMsTUFBMUIsTUFBc0MsQ0FBN0M7QUFDQSxLQUZNLENBQVA7QUFHQTs7QUFFRCxFQUFBLGdCQUFnQixDQUFDLE1BQUQsRUFBdUIsTUFBdkIsRUFBMkM7QUFDMUQsUUFBSSxDQUFDLE1BQUwsRUFBYTtBQUNaO0FBQ0E7O0FBRUQsUUFBSSxNQUFNLElBQUksTUFBVixJQUFvQixNQUFNLENBQUMsTUFBUCxLQUFrQixNQUFNLENBQUMsTUFBakQsRUFBeUQ7QUFDeEQ7QUFDQTs7QUFFQSxTQUFLLENBQUwsQ0FBTyxNQUFQLENBQW9DLE1BQXBDO0FBQ0QsSUFBQSxPQUFPLENBQUMsS0FBUjtBQUVBLFVBQU0saUJBQWlCLEdBQUcsS0FBSyxVQUFMLENBQWlCLGFBQWpCLENBQStCLDhCQUEvQixDQUExQjs7QUFDQSxRQUFJLENBQUMsaUJBQUwsRUFBd0I7QUFDdkI7QUFDQTs7QUFFRCxTQUFLLHVCQUFMLENBQTZCLGlCQUFpQixDQUFDLENBQWxCLENBQW9CLFFBQWpELEVBQTBFO0FBQUMsTUFBQSxRQUFRLEVBQUU7QUFBWCxLQUExRTtBQUNBOztBQTNFK0csQ0FBakg7O0FBRUMsVUFBQSxDQUFBLENBREMsUUFBUSxDQUFDO0FBQUMsRUFBQSxJQUFJLEVBQUU7QUFBUCxDQUFELENBQ1QsQ0FBQSxFLDJDQUFBLEUsZ0JBQUEsRSxLQUF3QixDQUF4QixDQUFBOztBQUdBLFVBQUEsQ0FBQSxDQURDLFFBQVEsQ0FBQztBQUFDLEVBQUEsSUFBSSxFQUFFLE9BQVA7QUFBZ0IsRUFBQSxRQUFRLEVBQUU7QUFBMUIsQ0FBRCxDQUNULENBQUEsRSwyQ0FBQSxFLGtCQUFBLEUsS0FBMEIsQ0FBMUIsQ0FBQTs7QUFPQSxVQUFBLENBQUEsQ0FMQyxRQUFRLENBQUM7QUFDVCxFQUFBLElBQUksRUFBRSxNQURHO0FBRVQsRUFBQSxRQUFRLEVBQUUsNENBRkQ7QUFHVCxFQUFBLFFBQVEsRUFBRTtBQUhELENBQUQsQ0FLVCxDQUFBLEUsMkNBQUEsRSxVQUFBLEUsS0FBOEIsQ0FBOUIsQ0FBQTs7QUFab0IsaUNBQWlDLEdBQUEsVUFBQSxDQUFBLENBRHJELGFBQWEsQ0FBQywrQkFBRCxDQUN3QyxDQUFBLEVBQWpDLGlDQUFpQyxDQUFqQztlQUFBLGlDIiwic291cmNlUm9vdCI6IiJ9