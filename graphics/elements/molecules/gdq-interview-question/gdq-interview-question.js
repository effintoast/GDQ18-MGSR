var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TimelineLite } from 'gsap';
const { customElement, property } = Polymer.decorators;
const questions = nodecg.Replicant('interview:questionTweets');
const questionSortMap = nodecg.Replicant('interview:questionSortMap');
const questionShowing = nodecg.Replicant('interview:questionShowing');
let GDQInterviewQuestionElement = class GDQInterviewQuestionElement extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.onScreenTweet = null;
        this._timeline = new TimelineLite({ autoRemoveChildren: true });
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
            }
            else {
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
__decorate([
    property({ type: Object, computed: 'calcOnScreenTweet(_questionsVal, _sortMapVal)' })
], GDQInterviewQuestionElement.prototype, "onScreenTweet", void 0);
GDQInterviewQuestionElement = __decorate([
    customElement('gdq-interview-question')
], GDQInterviewQuestionElement);
export default GDQInterviewQuestionElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLWludGVydmlldy1xdWVzdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdkcS1pbnRlcnZpZXctcXVlc3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQU9sQyxNQUFNLEVBQUMsYUFBYSxFQUFFLFFBQVEsRUFBQyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFFckQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBNEIsMEJBQTBCLENBQUMsQ0FBQztBQUMxRixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUE2QiwyQkFBMkIsQ0FBQyxDQUFDO0FBQ2xHLE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQTZCLDJCQUEyQixDQUFDLENBQUM7QUFHbEcsSUFBcUIsMkJBQTJCLEdBQWhELE1BQXFCLDJCQUE0QixTQUFRLE9BQU8sQ0FBQyxPQUFPO0lBRHhFOztRQUdDLGtCQUFhLEdBQWlCLElBQUksQ0FBQztRQUVuQyxjQUFTLEdBQUcsSUFBSSxZQUFZLENBQUMsRUFBQyxrQkFBa0IsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1FBR3pELGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBc0R0QixDQUFDO0lBcERBLEtBQUs7UUFDSixLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFZCxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxlQUFlLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxlQUFlLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNyQyxJQUFJLE1BQU0sRUFBRTtnQkFDWCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDWjtpQkFBTTtnQkFDTixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDWjtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELElBQUk7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QixPQUFPO1NBQ1A7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQXdCLENBQUM7UUFFaEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3hCLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQixPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxJQUFJO1FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdkIsT0FBTztTQUNQO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBeUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNyRCxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsYUFBeUMsRUFBRSxXQUF3QztRQUNwRyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ25DLE9BQU87U0FDUDtRQUVELE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQyxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7Q0FDRCxDQUFBO0FBM0RBO0lBREMsUUFBUSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsK0NBQStDLEVBQUMsQ0FBQztrRUFDakQ7QUFGZiwyQkFBMkI7SUFEL0MsYUFBYSxDQUFDLHdCQUF3QixDQUFDO0dBQ25CLDJCQUEyQixDQTZEL0M7ZUE3RG9CLDJCQUEyQiJ9