var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { TweenLite, TimelineLite, Power2, Power1 } from 'gsap';
import { createMaybeRandomTween } from '../../../../shared/lib/maybe-random';
const { customElement, property } = Polymer.decorators;
let GDQOmnibarMilestoneTrackerElement = class GDQOmnibarMilestoneTrackerElement extends Polymer.Element {
    ready() {
        super.ready();
        const startElem = this.$.start;
        const currentElem = this.$.current;
        const endElem = this.$.end;
        TweenLite.set([
            startElem.$.line,
            currentElem.$.line,
            endElem.$.line
        ], {
            scaleY: 0
        });
        TweenLite.set(currentElem, { x: 0 });
        TweenLite.set(startElem.$['body-content'], { x: '100%' });
        TweenLite.set(currentElem.$['body-content'], { x: '-105%' });
        TweenLite.set(endElem.$['body-content'], { x: '-100%' });
        TweenLite.set(this.$.nextGoalLabel, { x: '101%' });
    }
    enter(displayDuration) {
        const tl = new TimelineLite();
        const startElem = this.$.start;
        const currentElem = this.$.current;
        const endElem = this.$.end;
        const milestoneStart = this.milestone.precedingMilestone.total;
        const percentCompleted = (this.currentTotal - milestoneStart) / (this.milestone.total - milestoneStart);
        const availableSpace = this.$.body.getBoundingClientRect().width -
            currentElem.$.line.clientWidth;
        const currentPointBodyRect = currentElem.$.body.getBoundingClientRect();
        this._updateCurrentBody({
            percent: 0,
            availableSpace,
            currentPointBodyRect
        });
        tl.to([
            startElem.$.line,
            endElem.$.line
        ], 0.25, {
            scaleY: 1,
            ease: Power2.easeInOut
        });
        tl.to([
            startElem.$['body-content'],
            endElem.$['body-content'],
            this.$.nextGoalLabel
        ], 0.75, {
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
        const fooTween = TweenLite.to([
            currentElem,
            this.$.fill
        ], (percentCompleted * 3) + 0.5, {
            x: `${percentCompleted * availableSpace}px`,
            ease: Power1.easeInOut,
            onUpdate: (self) => {
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
            start: { probability: 1, normalValue: 0 },
            end: { probability: 0, normalValue: 0 }
        }));
        return tl;
    }
    _updateCurrentBody({ percent = 0, startValue = 0, endValue = 0, availableSpace, currentPointBodyRect }) {
        const currentElem = this.$.current;
        const availableLeftSpace = currentElem._gsTransform.x;
        const availableRightSpace = availableSpace - currentElem._gsTransform.x;
        const centeredOverhang = (currentPointBodyRect.width / 2) - 1.5;
        const leftDefecit = Math.max(centeredOverhang - availableLeftSpace, 0);
        const rightDefecit = Math.max(centeredOverhang - availableRightSpace, 0);
        const finalTransform = leftDefecit - rightDefecit;
        TweenLite.set(currentElem.$.body, { x: finalTransform });
        const delta = endValue - startValue;
        currentElem.amount = startValue + (delta * percent);
    }
};
__decorate([
    property({ type: Number })
], GDQOmnibarMilestoneTrackerElement.prototype, "currentTotal", void 0);
__decorate([
    property({ type: Object })
], GDQOmnibarMilestoneTrackerElement.prototype, "milestone", void 0);
GDQOmnibarMilestoneTrackerElement = __decorate([
    customElement('gdq-omnibar-milestone-tracker')
], GDQOmnibarMilestoneTrackerElement);
export default GDQOmnibarMilestoneTrackerElement;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2RxLW9tbmliYXItbWlsZXN0b25lLXRyYWNrZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnZHEtb21uaWJhci1taWxlc3RvbmUtdHJhY2tlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBRTdELE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBRTNFLE1BQU0sRUFBQyxhQUFhLEVBQUUsUUFBUSxFQUFDLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQVVyRCxJQUFxQixpQ0FBaUMsR0FBdEQsTUFBcUIsaUNBQWtDLFNBQVEsT0FBTyxDQUFDLE9BQU87SUFPN0UsS0FBSztRQUNKLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVkLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBK0MsQ0FBQztRQUN6RSxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQWlELENBQUM7UUFDN0UsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUE2QyxDQUFDO1FBRXJFLFNBQVMsQ0FBQyxHQUFHLENBQUM7WUFDYixTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUk7WUFDaEIsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2xCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSTtTQUNkLEVBQUU7WUFDRixNQUFNLEVBQUUsQ0FBQztTQUNULENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7UUFDbkMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBQyxDQUFD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