var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

import { TweenLite, TimelineLite, Power2, Power1 } from "/bundles/gdqx18-layouts/node_modules/gsap/index.js";
import { createMaybeRandomTween } from "../../../../shared/lib/maybe-random.js";
const {
  customElement,
  property
} = Polymer.decorators;
let GDQOmnibarMilestoneTrackerElement = class GDQOmnibarMilestoneTrackerElement extends Polymer.Element {
  ready() {
    super.ready();
    const startElem = this.$.start;
    const currentElem = this.$.current;
    const endElem = this.$.end;
    TweenLite.set([startElem.$.line, currentElem.$.line, endElem.$.line], {
      scaleY: 0
    });
    TweenLite.set(currentElem, {
      x: 0
    });
    TweenLite.set(startElem.$['body-content'], {
      x: '100%'
    });
    TweenLite.set(currentElem.$['body-content'], {
      x: '-105%'
    });
    TweenLite.set(endElem.$['body-content'], {
      x: '-100%'
    });
    TweenLite.set(this.$.nextGoalLabel, {
      x: '101%'
    });
  }

  enter(displayDuration) {
    const tl = new TimelineLite();
    const startElem = this.$.start;
    const currentElem = this.$.current;
    const endElem = this.$.end;
    const milestoneStart = this.milestone.precedingMilestone.total;
    const percentCompleted = (this.currentTotal - milestoneStart) / (this.milestone.total - milestoneStart);
    const availableSpace = this.$.body.getBoundingClientRect().width - currentElem.$.line.clientWidth;
    const currentPointBodyRect = currentElem.$.body.getBoundingClientRect();

    this._updateCurrentBody({
      percent: 0,
      availableSpace,
      currentPointBodyRect
    });

    tl.to([startElem.$.line, endElem.$.line], 0.25, {
      scaleY: 1,
      ease: Power2.easeInOut
    });
    tl.to([startElem.$['body-content'], endElem.$['body-content'], this.$.nextGoalLabel], 0.75, {
      x: '0%',
      ease: Power2.easeInOut
    });
    tl.to(currentElem.$.line, 0.25, {
      scaleY: 1,
      ease: Power2.easeInOut
    }, '+=0.08');
    tl.to(currentElem.$['body-content'], 0.25, {
      x: '0%',
      ease: Power2.easeInOut
    });
    const fooTween = TweenLite.to([currentElem, this.$.fill], percentCompleted * 3 + 0.5, {
      x: `${percentCompleted * availableSpace}px`,
      ease: Power1.easeInOut,
      onUpdate: self => {
        this._updateCurrentBody({
          percent: self.progress(),
          startValue: this.milestone.precedingMilestone.total,
          endValue: this.currentTotal,
          availableSpace,
          currentPointBodyRect
        });
      },
      onUpdateParams: ['{self}']
    });
    tl.add(fooTween);
    tl.to({}, displayDuration, {});
    return tl;
  }

  exit() {
    const tl = new TimelineLite();
    tl.add(createMaybeRandomTween({
      target: this.style,
      propName: 'opacity',
      duration: 0.465,
      start: {
        probability: 1,
        normalValue: 0
      },
      end: {
        probability: 0,
        normalValue: 0
      }
    }));
    return tl;
  }

  _updateCurrentBody({
    percent = 0,
    startValue = 0,
    endValue = 0,
    availableSpace,
    currentPointBodyRect
  }) {
    const currentElem = this.$.current;
    const availableLeftSpace = currentElem._gsTransform.x;
    const availableRightSpace = availableSpace - currentElem._gsTransform.x;
    const centeredOverhang = currentPointBodyRect.width / 2 - 1.5;
    const leftDefecit = Math.max(centeredOverhang - availableLeftSpace, 0);
    const rightDefecit = Math.max(centeredOverhang - availableRightSpace, 0);
    const finalTransform = leftDefecit - rightDefecit;
    TweenLite.set(currentElem.$.body, {
      x: finalTransform
    });
    const delta = endValue - startValue;
    currentElem.amount = startValue + delta * percent;
  }

};

__decorate([property({
  type: Number
})], GDQOmnibarMilestoneTrackerElement.prototype, "currentTotal", void 0);

__decorate([property({
  type: Object
})], GDQOmnibarMilestoneTrackerElement.prototype, "milestone", void 0);

GDQOmnibarMilestoneTrackerElement = __decorate([customElement('gdq-omnibar-milestone-tracker')], GDQOmnibarMilestoneTrackerElement);
export default GDQOmnibarMilestoneTrackerElement;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdkcS1vbW5pYmFyLW1pbGVzdG9uZS10cmFja2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsU0FBUSxTQUFSLEVBQW1CLFlBQW5CLEVBQWlDLE1BQWpDLEVBQXlDLE1BQXpDLFFBQXNELG9EQUF0RDtBQUVBLFNBQVEsc0JBQVIsUUFBcUMsd0NBQXJDO0FBRUEsTUFBTTtBQUFDLEVBQUEsYUFBRDtBQUFnQixFQUFBO0FBQWhCLElBQTRCLE9BQU8sQ0FBQyxVQUExQztBQVVBLElBQXFCLGlDQUFpQyxHQUF0RCxNQUFxQixpQ0FBckIsU0FBK0QsT0FBTyxDQUFDLE9BQXZFLENBQThFO0FBTzdFLEVBQUEsS0FBSyxHQUFBO0FBQ0osVUFBTSxLQUFOO0FBRUEsVUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFMLENBQU8sS0FBekI7QUFDQSxVQUFNLFdBQVcsR0FBRyxLQUFLLENBQUwsQ0FBTyxPQUEzQjtBQUNBLFVBQU0sT0FBTyxHQUFHLEtBQUssQ0FBTCxDQUFPLEdBQXZCO0FBRUEsSUFBQSxTQUFTLENBQUMsR0FBVixDQUFjLENBQ2IsU0FBUyxDQUFDLENBQVYsQ0FBWSxJQURDLEVBRWIsV0FBVyxDQUFDLENBQVosQ0FBYyxJQUZELEVBR2IsT0FBTyxDQUFDLENBQVIsQ0FBVSxJQUhHLENBQWQsRUFJRztBQUNGLE1BQUEsTUFBTSxFQUFFO0FBRE4sS0FKSDtBQVFBLElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxXQUFkLEVBQTJCO0FBQUMsTUFBQSxDQUFDLEVBQUU7QUFBSixLQUEzQjtBQUNBLElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxTQUFTLENBQUMsQ0FBVixDQUFZLGNBQVosQ0FBZCxFQUEyQztBQUFDLE1BQUEsQ0FBQyxFQUFFO0FBQUosS0FBM0M7QUFDQSxJQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsV0FBVyxDQUFDLENBQVosQ0FBYyxjQUFkLENBQWQsRUFBNkM7QUFBQyxNQUFBLENBQUMsRUFBRTtBQUFKLEtBQTdDO0FB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