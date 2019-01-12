var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TimelineLite } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
const {
  customElement,
  property
} = Polymer.decorators;
const questions = nodecg.Replicant('interview:questionTweets');
const questionSortMap = nodecg.Replicant('interview:questionSortMap');
const questionShowing = nodecg.Replicant('interview:questionShowing');
let GDQInterviewQuestionElement = class GDQInterviewQuestionElement extends Polymer.Element {
  constructor() {
    super(...arguments);
    this.onScreenTweet = null;
    this._timeline = new TimelineLite({
      autoRemoveChildren: true
    });
    this._initialized = false;
  }

  ready() {
    super.ready();
    questions.on('change', newVal => {
      this._questionsVal = newVal.slice(0);
    });
    questionSortMap.on('change', newVal => {
      this._sortMapVal = newVal.slice(0);
    });
    questionShowing.on('change', newVal => {
      if (newVal) {
        this.show();
      } else {
        this.hide();
      }

      this._initialized = true;
    });
  }

  show() {
    if (!this.onScreenTweet) {
      return;
    }

    const tweetEl = this.$.tweet;

    this._timeline.call(() => {
      tweetEl._addReset();

      tweetEl._createEntranceAnim(this.onScreenTweet);
    }, undefined, null, '+=0.5');
  }

  hide() {
    if (!this._initialized) {
      return;
    }

    this._timeline.call(() => {
      this.$.tweet._createExitAnim();
    }, undefined, null, '+=0.5');
  }

  calcOnScreenTweet(_questionsVal, _sortMapVal) {
    if (!_questionsVal || !_sortMapVal) {
      return;
    }

    return _questionsVal.find(reply => {
      return _sortMapVal.indexOf(reply.id_str) === 0;
    });
  }

};

__decorate([property({
  type: Object,
  computed: 'calcOnScreenTweet(_questionsVal, _sortMapVal)'
})], GDQInterviewQuestionElement.prototype, "onScreenTweet", void 0);

GDQInterviewQuestionElement = __decorate([customElement('gdq-interview-question')], GDQInterviewQuestionElement);
export default GDQInterviewQuestionElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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